import { TokenType, Token, TokenReg } from './token';

/**
 * 获取 注释 以及 分隔符 等词法信息
 * @param {String} python
 */
function lexer(input: string): Token[] {
    // 记录当前字符的位置
    let current = 0;
    let line = 1;
    // 最终的 TokenTypes 结果
    const tokens: Token[] = [];

    /**
     * 提取 TokenType
     */
    // eslint-disable-next-line
    const extract = (currentChar: string, validator: RegExp, TokenType: TokenType): Token => {
        let value = '';
        const start = current;
        while (validator.test(currentChar)) {
            value += currentChar;
            currentChar = input[++current];
        }
        return {
            type: TokenType,
            start: start,
            end: current,
            lineNumber: line,
            value: value,
        };
    };

    /**
     * 过滤（提取） 引号中的内容
     */
    // eslint-disable-next-line
    const matchQuotation = (currentChar: string, validator: RegExp, TokenType: TokenType) => {
        do {
            if (currentChar === '\n') {
                line++;
            }
            currentChar = input[++current];
        } while (!validator.test(currentChar));

        ++current;
    };

    /**
     * 判断是否是最后一个字符
     */
    const isEndOfInput = (current: number) => {
        return current === input.length - 1
    }

    while (current < input.length) {
        let char = input[current];

        // 按顺序处理 换行符 反引号 单引号 双引号 注释 分号
        // 引号内 可能包含注释包含的符号以及分号 所以优先处理引号里面的内容 去除干扰信息

        if (char === '\n') {
            line++;
            current++;
            continue;
        }

        if (TokenReg.BackQuotation.test(char)) {
            // eslint-disable-next-line
            matchQuotation(char, TokenReg.BackQuotation, TokenType.BackQuotation);
            continue;
        }

        if (TokenReg.SingleQuotation.test(char)) {
            // eslint-disable-next-line

            matchQuotation(char, TokenReg.SingleQuotation, TokenType.SingleQuotation);
            continue;
        }

        if (TokenReg.DoubleQuotation.test(char) && input[current + 1] !== `"`) {
            // eslint-disable-next-line
            matchQuotation(char, TokenReg.DoubleQuotation, TokenType.DoubleQuotation);
            continue;
        }

        // 处理单行注释，以 # 开始，以 \n 结束或者到达输入字符末尾
        if (char === '#') {
            let value = '';
            const start = current;

            while (char !== '\n' && !isEndOfInput(current)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: TokenType.Comment,
                value,
                start: start,
                lineNumber: line,
                end: current,
            });
            continue;
        }

        // 处理多行注释，以 """ 开始， """结束
        if (char === `"` && input[current + 1] === `"` && input[current + 2] === `"`) {
            let value = '"""';
            const start = current;
            const startLine = line;
            current += 3;
            char = input[current];
            while (!(char === `"` && input[current - 1] === `"` && input[current - 2] === `"`)) {
                if (char === '\n') {
                    line++;
                }
                value += char;
                char = input[++current];
            }
            value += char;
            ++current;
            tokens.push({
                type: TokenType.Comment,
                value,
                start: start,
                lineNumber: startLine,
                end: current,
            });
            continue;
        }

        // 处理结束符 ;
        if (TokenReg.StatementTerminator.test(char)) {
            const newToken = extract(
                char,
                TokenReg.StatementTerminator,
                TokenType.StatementTerminator,
            );
            tokens.push(newToken);
            continue;
        }

        current++;
    }
    return tokens;
}

/**
 * 清除注释和前后空格
 * @param {String} python
 */
function cleanPython(python: string) {
    python.trim(); // 删除前后空格
    const tokens = lexer(python);
    let resultPython = '';
    let startIndex = 0;
    tokens.forEach((ele: Token) => {
        if (ele.type === TokenType.Comment) {
            resultPython += python.slice(startIndex, ele.start);
            startIndex = ele.end + 1;
        }
    });
    resultPython += python.slice(startIndex);
    return resultPython;
}
export { cleanPython, lexer };
