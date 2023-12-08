import { CommonTokenStream, Lexer, CharStream } from 'antlr4';
import Python3Lexer from '../lib/python3/Python3Lexer';
import Python3Parser from '../lib/python3/Python3Parser';
export { default as Python3Listener} from '../lib/python3/Python3ParserListener';
export { default as Python3Visitor} from '../lib/python3/Python3ParserVisitor';

import BasicParser from './common/BasicParser';

export default class Python extends BasicParser {
    public createLexer(input: string): Python3Lexer {
        const chars = new CharStream(input);
        const lexer = new Python3Lexer(chars);
        return lexer;
    }

    public createParserFromLexer(lexer: Lexer): Python3Parser {
        const tokens = new CommonTokenStream(lexer);
        return new Python3Parser(tokens);
    }
}
