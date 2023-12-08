import { Token, Lexer } from 'antlr4';
import { ParseTreeWalker } from 'antlr4';

import ParserErrorListener, {
   ParserError,
   ErrorHandler,
   ParserErrorCollector,
} from './parserErrorListener';
import Python3Parser, { RootContext } from '../../lib/python3/Python3Parser';

/**
 * Custom Parser class, subclass needs extends it.
 */
export default abstract class BasicParser<C = any> {
   // @ts-ignore
   private _parser: Python3Parser;

   public get parser(): Python3Parser {
      return this._parser;
   }

   public parse(input: string, errorListener?: ErrorHandler): RootContext {
      const parser = this.createParser(input);
      this._parser = parser;

      parser.removeErrorListeners();
      parser.addErrorListener(new ParserErrorListener(errorListener));

      const parserTree = parser.root();

      return parserTree;
   }

   public validate(input: string): ParserError[] {
      const lexerError: ParserError[] = [];
      const syntaxErrors: ParserError[] = [];

      const parser = this.createParser(input);
      this._parser = parser;

      parser.removeErrorListeners();
      parser.addErrorListener(new ParserErrorCollector(syntaxErrors));

      parser.root();

      return lexerError.concat(syntaxErrors);
   }

   /**
    * Create antrl4 Lexer object
    * @param input source string
    */
   public abstract createLexer(input: string): Lexer;

   /**
    * Create Parser by lexer
    * @param lexer Lexer
    */
   public abstract createParserFromLexer(lexer: Lexer): Python3Parser;

   /**
    * Visit parser tree
    * @param parserTree
    */
   // public abstract visit(visitor: any, parserTree: any);

   /**
    * The source string
    * @param input string
    */
   public getAllTokens(input: string): Token[] {
      return (<any>this.createLexer(input)).getAllTokens();
   }

   /**
    * Get Parser instance by input string
    * @param input
    */
   public createParser(input: string): Python3Parser {
      const lexer = this.createLexer(input);
      const parser: any = this.createParserFromLexer(lexer);
      // parser.buildParseTrees = true;
      this._parser = parser;

      return parser;
   }

   /**
    * It convert tree to string, it's convenient to use in unit test.
    * @param string input
    */
   public parserTreeToString(input: string): string {
      const parser = this.createParser(input);
      this._parser = parser;

      const tree = parser.root();
      return tree.toStringTree(parser.ruleNames, this.parser);
   }

   /**
    * Get List-like style tree string
    * @param parserTree
    */
   public toString(parserTree: any): string {
      return parserTree.toStringTree(this._parser.ruleNames);
   }

   /**
    * @param listener Listener instance extends ParserListener
    * @param parserTree parser Tree
    */
   public listen(listener: any, parserTree: any) {
      ParseTreeWalker.DEFAULT.walk(listener, parserTree);
   }
}
