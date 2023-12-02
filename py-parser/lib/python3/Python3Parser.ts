// Generated from /workspace/dt-python-parser/src/grammar/python3/Python3Parser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import Python3ParserListener from "./Python3ParserListener.js";
import Python3ParserVisitor from "./Python3ParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import Python3ParserBase from './Python3ParserBase';

export default class Python3Parser extends Python3ParserBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly STRING = 3;
	public static readonly NUMBER = 4;
	public static readonly INTEGER = 5;
	public static readonly AND = 6;
	public static readonly AS = 7;
	public static readonly ASSERT = 8;
	public static readonly ASYNC = 9;
	public static readonly AWAIT = 10;
	public static readonly BREAK = 11;
	public static readonly CASE = 12;
	public static readonly CLASS = 13;
	public static readonly CONTINUE = 14;
	public static readonly DEF = 15;
	public static readonly DEL = 16;
	public static readonly ELIF = 17;
	public static readonly ELSE = 18;
	public static readonly EXCEPT = 19;
	public static readonly FALSE = 20;
	public static readonly FINALLY = 21;
	public static readonly FOR = 22;
	public static readonly FROM = 23;
	public static readonly GLOBAL = 24;
	public static readonly IF = 25;
	public static readonly IMPORT = 26;
	public static readonly IN = 27;
	public static readonly IS = 28;
	public static readonly LAMBDA = 29;
	public static readonly MATCH = 30;
	public static readonly NONE = 31;
	public static readonly NONLOCAL = 32;
	public static readonly NOT = 33;
	public static readonly OR = 34;
	public static readonly PASS = 35;
	public static readonly RAISE = 36;
	public static readonly RETURN = 37;
	public static readonly TRUE = 38;
	public static readonly TRY = 39;
	public static readonly UNDERSCORE = 40;
	public static readonly WHILE = 41;
	public static readonly WITH = 42;
	public static readonly YIELD = 43;
	public static readonly NEWLINE = 44;
	public static readonly NAME = 45;
	public static readonly STRING_LITERAL = 46;
	public static readonly BYTES_LITERAL = 47;
	public static readonly DECIMAL_INTEGER = 48;
	public static readonly OCT_INTEGER = 49;
	public static readonly HEX_INTEGER = 50;
	public static readonly BIN_INTEGER = 51;
	public static readonly FLOAT_NUMBER = 52;
	public static readonly IMAG_NUMBER = 53;
	public static readonly DOT = 54;
	public static readonly ELLIPSIS = 55;
	public static readonly STAR = 56;
	public static readonly OPEN_PAREN = 57;
	public static readonly CLOSE_PAREN = 58;
	public static readonly COMMA = 59;
	public static readonly COLON = 60;
	public static readonly SEMI_COLON = 61;
	public static readonly POWER = 62;
	public static readonly ASSIGN = 63;
	public static readonly OPEN_BRACK = 64;
	public static readonly CLOSE_BRACK = 65;
	public static readonly OR_OP = 66;
	public static readonly XOR = 67;
	public static readonly AND_OP = 68;
	public static readonly LEFT_SHIFT = 69;
	public static readonly RIGHT_SHIFT = 70;
	public static readonly ADD = 71;
	public static readonly MINUS = 72;
	public static readonly DIV = 73;
	public static readonly MOD = 74;
	public static readonly IDIV = 75;
	public static readonly NOT_OP = 76;
	public static readonly OPEN_BRACE = 77;
	public static readonly CLOSE_BRACE = 78;
	public static readonly LESS_THAN = 79;
	public static readonly GREATER_THAN = 80;
	public static readonly EQUALS = 81;
	public static readonly GT_EQ = 82;
	public static readonly LT_EQ = 83;
	public static readonly NOT_EQ_1 = 84;
	public static readonly NOT_EQ_2 = 85;
	public static readonly AT = 86;
	public static readonly ARROW = 87;
	public static readonly ADD_ASSIGN = 88;
	public static readonly SUB_ASSIGN = 89;
	public static readonly MULT_ASSIGN = 90;
	public static readonly AT_ASSIGN = 91;
	public static readonly DIV_ASSIGN = 92;
	public static readonly MOD_ASSIGN = 93;
	public static readonly AND_ASSIGN = 94;
	public static readonly OR_ASSIGN = 95;
	public static readonly XOR_ASSIGN = 96;
	public static readonly LEFT_SHIFT_ASSIGN = 97;
	public static readonly RIGHT_SHIFT_ASSIGN = 98;
	public static readonly POWER_ASSIGN = 99;
	public static readonly IDIV_ASSIGN = 100;
	public static readonly SKIP_ = 101;
	public static readonly UNKNOWN_CHAR = 102;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_root = 0;
	public static readonly RULE_single_input = 1;
	public static readonly RULE_file_input = 2;
	public static readonly RULE_eval_input = 3;
	public static readonly RULE_decorator = 4;
	public static readonly RULE_decorators = 5;
	public static readonly RULE_decorated = 6;
	public static readonly RULE_async_funcdef = 7;
	public static readonly RULE_funcdef = 8;
	public static readonly RULE_parameters = 9;
	public static readonly RULE_typedargslist = 10;
	public static readonly RULE_tfpdef = 11;
	public static readonly RULE_varargslist = 12;
	public static readonly RULE_vfpdef = 13;
	public static readonly RULE_stmt = 14;
	public static readonly RULE_simple_stmts = 15;
	public static readonly RULE_simple_stmt = 16;
	public static readonly RULE_expr_stmt = 17;
	public static readonly RULE_annassign = 18;
	public static readonly RULE_testlist_star_expr = 19;
	public static readonly RULE_augassign = 20;
	public static readonly RULE_del_stmt = 21;
	public static readonly RULE_pass_stmt = 22;
	public static readonly RULE_flow_stmt = 23;
	public static readonly RULE_break_stmt = 24;
	public static readonly RULE_continue_stmt = 25;
	public static readonly RULE_return_stmt = 26;
	public static readonly RULE_yield_stmt = 27;
	public static readonly RULE_raise_stmt = 28;
	public static readonly RULE_import_stmt = 29;
	public static readonly RULE_import_name = 30;
	public static readonly RULE_import_from = 31;
	public static readonly RULE_import_as_name = 32;
	public static readonly RULE_dotted_as_name = 33;
	public static readonly RULE_import_as_names = 34;
	public static readonly RULE_dotted_as_names = 35;
	public static readonly RULE_dotted_name = 36;
	public static readonly RULE_global_stmt = 37;
	public static readonly RULE_nonlocal_stmt = 38;
	public static readonly RULE_assert_stmt = 39;
	public static readonly RULE_compound_stmt = 40;
	public static readonly RULE_async_stmt = 41;
	public static readonly RULE_if_stmt = 42;
	public static readonly RULE_while_stmt = 43;
	public static readonly RULE_for_stmt = 44;
	public static readonly RULE_try_stmt = 45;
	public static readonly RULE_with_stmt = 46;
	public static readonly RULE_with_item = 47;
	public static readonly RULE_except_clause = 48;
	public static readonly RULE_block = 49;
	public static readonly RULE_match_stmt = 50;
	public static readonly RULE_subject_expr = 51;
	public static readonly RULE_star_named_expressions = 52;
	public static readonly RULE_star_named_expression = 53;
	public static readonly RULE_case_block = 54;
	public static readonly RULE_guard = 55;
	public static readonly RULE_patterns = 56;
	public static readonly RULE_pattern = 57;
	public static readonly RULE_as_pattern = 58;
	public static readonly RULE_or_pattern = 59;
	public static readonly RULE_closed_pattern = 60;
	public static readonly RULE_literal_pattern = 61;
	public static readonly RULE_literal_expr = 62;
	public static readonly RULE_complex_number = 63;
	public static readonly RULE_signed_number = 64;
	public static readonly RULE_signed_real_number = 65;
	public static readonly RULE_real_number = 66;
	public static readonly RULE_imaginary_number = 67;
	public static readonly RULE_capture_pattern = 68;
	public static readonly RULE_pattern_capture_target = 69;
	public static readonly RULE_wildcard_pattern = 70;
	public static readonly RULE_value_pattern = 71;
	public static readonly RULE_attr = 72;
	public static readonly RULE_name_or_attr = 73;
	public static readonly RULE_group_pattern = 74;
	public static readonly RULE_sequence_pattern = 75;
	public static readonly RULE_open_sequence_pattern = 76;
	public static readonly RULE_maybe_sequence_pattern = 77;
	public static readonly RULE_maybe_star_pattern = 78;
	public static readonly RULE_star_pattern = 79;
	public static readonly RULE_mapping_pattern = 80;
	public static readonly RULE_items_pattern = 81;
	public static readonly RULE_key_value_pattern = 82;
	public static readonly RULE_double_star_pattern = 83;
	public static readonly RULE_class_pattern = 84;
	public static readonly RULE_positional_patterns = 85;
	public static readonly RULE_keyword_patterns = 86;
	public static readonly RULE_keyword_pattern = 87;
	public static readonly RULE_test = 88;
	public static readonly RULE_test_nocond = 89;
	public static readonly RULE_lambdef = 90;
	public static readonly RULE_lambdef_nocond = 91;
	public static readonly RULE_or_test = 92;
	public static readonly RULE_and_test = 93;
	public static readonly RULE_not_test = 94;
	public static readonly RULE_comparison = 95;
	public static readonly RULE_comp_op = 96;
	public static readonly RULE_star_expr = 97;
	public static readonly RULE_expr = 98;
	public static readonly RULE_atom_expr = 99;
	public static readonly RULE_atom = 100;
	public static readonly RULE_name = 101;
	public static readonly RULE_testlist_comp = 102;
	public static readonly RULE_trailer = 103;
	public static readonly RULE_subscriptlist = 104;
	public static readonly RULE_subscript_ = 105;
	public static readonly RULE_sliceop = 106;
	public static readonly RULE_exprlist = 107;
	public static readonly RULE_testlist = 108;
	public static readonly RULE_dictorsetmaker = 109;
	public static readonly RULE_classdef = 110;
	public static readonly RULE_arglist = 111;
	public static readonly RULE_argument = 112;
	public static readonly RULE_comp_iter = 113;
	public static readonly RULE_comp_for = 114;
	public static readonly RULE_comp_if = 115;
	public static readonly RULE_encoding_decl = 116;
	public static readonly RULE_yield_expr = 117;
	public static readonly RULE_yield_arg = 118;
	public static readonly RULE_strings = 119;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'and'", "'as'", 
                                                            "'assert'", 
                                                            "'async'", "'await'", 
                                                            "'break'", "'case'", 
                                                            "'class'", "'continue'", 
                                                            "'def'", "'del'", 
                                                            "'elif'", "'else'", 
                                                            "'except'", 
                                                            "'False'", "'finally'", 
                                                            "'for'", "'from'", 
                                                            "'global'", 
                                                            "'if'", "'import'", 
                                                            "'in'", "'is'", 
                                                            "'lambda'", 
                                                            "'match'", "'None'", 
                                                            "'nonlocal'", 
                                                            "'not'", "'or'", 
                                                            "'pass'", "'raise'", 
                                                            "'return'", 
                                                            "'True'", "'try'", 
                                                            "'_'", "'while'", 
                                                            "'with'", "'yield'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'.'", "'...'", 
                                                            "'*'", "'('", 
                                                            "')'", "','", 
                                                            "':'", "';'", 
                                                            "'**'", "'='", 
                                                            "'['", "']'", 
                                                            "'|'", "'^'", 
                                                            "'&'", "'<<'", 
                                                            "'>>'", "'+'", 
                                                            "'-'", "'/'", 
                                                            "'%'", "'//'", 
                                                            "'~'", "'{'", 
                                                            "'}'", "'<'", 
                                                            "'>'", "'=='", 
                                                            "'>='", "'<='", 
                                                            "'<>'", "'!='", 
                                                            "'@'", "'->'", 
                                                            "'+='", "'-='", 
                                                            "'*='", "'@='", 
                                                            "'/='", "'%='", 
                                                            "'&='", "'|='", 
                                                            "'^='", "'<<='", 
                                                            "'>>='", "'**='", 
                                                            "'//='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "INDENT", 
                                                             "DEDENT", "STRING", 
                                                             "NUMBER", "INTEGER", 
                                                             "AND", "AS", 
                                                             "ASSERT", "ASYNC", 
                                                             "AWAIT", "BREAK", 
                                                             "CASE", "CLASS", 
                                                             "CONTINUE", 
                                                             "DEF", "DEL", 
                                                             "ELIF", "ELSE", 
                                                             "EXCEPT", "FALSE", 
                                                             "FINALLY", 
                                                             "FOR", "FROM", 
                                                             "GLOBAL", "IF", 
                                                             "IMPORT", "IN", 
                                                             "IS", "LAMBDA", 
                                                             "MATCH", "NONE", 
                                                             "NONLOCAL", 
                                                             "NOT", "OR", 
                                                             "PASS", "RAISE", 
                                                             "RETURN", "TRUE", 
                                                             "TRY", "UNDERSCORE", 
                                                             "WHILE", "WITH", 
                                                             "YIELD", "NEWLINE", 
                                                             "NAME", "STRING_LITERAL", 
                                                             "BYTES_LITERAL", 
                                                             "DECIMAL_INTEGER", 
                                                             "OCT_INTEGER", 
                                                             "HEX_INTEGER", 
                                                             "BIN_INTEGER", 
                                                             "FLOAT_NUMBER", 
                                                             "IMAG_NUMBER", 
                                                             "DOT", "ELLIPSIS", 
                                                             "STAR", "OPEN_PAREN", 
                                                             "CLOSE_PAREN", 
                                                             "COMMA", "COLON", 
                                                             "SEMI_COLON", 
                                                             "POWER", "ASSIGN", 
                                                             "OPEN_BRACK", 
                                                             "CLOSE_BRACK", 
                                                             "OR_OP", "XOR", 
                                                             "AND_OP", "LEFT_SHIFT", 
                                                             "RIGHT_SHIFT", 
                                                             "ADD", "MINUS", 
                                                             "DIV", "MOD", 
                                                             "IDIV", "NOT_OP", 
                                                             "OPEN_BRACE", 
                                                             "CLOSE_BRACE", 
                                                             "LESS_THAN", 
                                                             "GREATER_THAN", 
                                                             "EQUALS", "GT_EQ", 
                                                             "LT_EQ", "NOT_EQ_1", 
                                                             "NOT_EQ_2", 
                                                             "AT", "ARROW", 
                                                             "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MULT_ASSIGN", 
                                                             "AT_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "LEFT_SHIFT_ASSIGN", 
                                                             "RIGHT_SHIFT_ASSIGN", 
                                                             "POWER_ASSIGN", 
                                                             "IDIV_ASSIGN", 
                                                             "SKIP_", "UNKNOWN_CHAR" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "async_funcdef", "funcdef", "parameters", "typedargslist", 
		"tfpdef", "varargslist", "vfpdef", "stmt", "simple_stmts", "simple_stmt", 
		"expr_stmt", "annassign", "testlist_star_expr", "augassign", "del_stmt", 
		"pass_stmt", "flow_stmt", "break_stmt", "continue_stmt", "return_stmt", 
		"yield_stmt", "raise_stmt", "import_stmt", "import_name", "import_from", 
		"import_as_name", "dotted_as_name", "import_as_names", "dotted_as_names", 
		"dotted_name", "global_stmt", "nonlocal_stmt", "assert_stmt", "compound_stmt", 
		"async_stmt", "if_stmt", "while_stmt", "for_stmt", "try_stmt", "with_stmt", 
		"with_item", "except_clause", "block", "match_stmt", "subject_expr", "star_named_expressions", 
		"star_named_expression", "case_block", "guard", "patterns", "pattern", 
		"as_pattern", "or_pattern", "closed_pattern", "literal_pattern", "literal_expr", 
		"complex_number", "signed_number", "signed_real_number", "real_number", 
		"imaginary_number", "capture_pattern", "pattern_capture_target", "wildcard_pattern", 
		"value_pattern", "attr", "name_or_attr", "group_pattern", "sequence_pattern", 
		"open_sequence_pattern", "maybe_sequence_pattern", "maybe_star_pattern", 
		"star_pattern", "mapping_pattern", "items_pattern", "key_value_pattern", 
		"double_star_pattern", "class_pattern", "positional_patterns", "keyword_patterns", 
		"keyword_pattern", "test", "test_nocond", "lambdef", "lambdef_nocond", 
		"or_test", "and_test", "not_test", "comparison", "comp_op", "star_expr", 
		"expr", "atom_expr", "atom", "name", "testlist_comp", "trailer", "subscriptlist", 
		"subscript_", "sliceop", "exprlist", "testlist", "dictorsetmaker", "classdef", 
		"arglist", "argument", "comp_iter", "comp_for", "comp_if", "encoding_decl", 
		"yield_expr", "yield_arg", "strings",
	];
	public get grammarFileName(): string { return "Python3Parser.g4"; }
	public get literalNames(): (string | null)[] { return Python3Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return Python3Parser.symbolicNames; }
	public get ruleNames(): string[] { return Python3Parser.ruleNames; }
	public get serializedATN(): number[] { return Python3Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, Python3Parser._ATN, Python3Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let localctx: RootContext = new RootContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, Python3Parser.RULE_root);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 240;
				this.single_input();
				}
				break;
			case 2:
				{
				this.state = 241;
				this.file_input();
				}
				break;
			case 3:
				{
				this.state = 242;
				this.eval_input();
				}
				break;
			}
			this.state = 245;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_input(): Single_inputContext {
		let localctx: Single_inputContext = new Single_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, Python3Parser.RULE_single_input);
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 247;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
				this.simple_stmts();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 249;
				this.compound_stmt();
				this.state = 250;
				this.match(Python3Parser.NEWLINE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public file_input(): File_inputContext {
		let localctx: File_inputContext = new File_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, Python3Parser.RULE_file_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3889295128) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 58736635) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4206977) !== 0)) {
				{
				this.state = 256;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 44:
					{
					this.state = 254;
					this.match(Python3Parser.NEWLINE);
					}
					break;
				case 3:
				case 4:
				case 8:
				case 9:
				case 10:
				case 11:
				case 13:
				case 14:
				case 15:
				case 16:
				case 20:
				case 22:
				case 23:
				case 24:
				case 25:
				case 26:
				case 29:
				case 30:
				case 31:
				case 32:
				case 33:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 45:
				case 55:
				case 56:
				case 57:
				case 64:
				case 71:
				case 72:
				case 76:
				case 77:
				case 86:
					{
					this.state = 255;
					this.stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 261;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let localctx: Eval_inputContext = new Eval_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, Python3Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this.testlist();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===44) {
				{
				{
				this.state = 264;
				this.match(Python3Parser.NEWLINE);
				}
				}
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 270;
			this.match(Python3Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decorator(): DecoratorContext {
		let localctx: DecoratorContext = new DecoratorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, Python3Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 272;
			this.match(Python3Parser.AT);
			this.state = 273;
			this.dotted_name();
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 274;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2713718945) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 275;
					this.arglist();
					}
				}

				this.state = 278;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 281;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decorators(): DecoratorsContext {
		let localctx: DecoratorsContext = new DecoratorsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, Python3Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 283;
				this.decorator();
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===86);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decorated(): DecoratedContext {
		let localctx: DecoratedContext = new DecoratedContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, Python3Parser.RULE_decorated);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 288;
			this.decorators();
			this.state = 292;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				{
				this.state = 289;
				this.classdef();
				}
				break;
			case 15:
				{
				this.state = 290;
				this.funcdef();
				}
				break;
			case 9:
				{
				this.state = 291;
				this.async_funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public async_funcdef(): Async_funcdefContext {
		let localctx: Async_funcdefContext = new Async_funcdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, Python3Parser.RULE_async_funcdef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 294;
			this.match(Python3Parser.ASYNC);
			this.state = 295;
			this.funcdef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcdef(): FuncdefContext {
		let localctx: FuncdefContext = new FuncdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, Python3Parser.RULE_funcdef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 297;
			this.match(Python3Parser.DEF);
			this.state = 298;
			this.name();
			this.state = 299;
			this.parameters();
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===87) {
				{
				this.state = 300;
				this.match(Python3Parser.ARROW);
				this.state = 301;
				this.test();
				}
			}

			this.state = 304;
			this.match(Python3Parser.COLON);
			this.state = 305;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, Python3Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4259873) !== 0)) {
				{
				this.state = 308;
				this.typedargslist();
				}
			}

			this.state = 311;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typedargslist(): TypedargslistContext {
		let localctx: TypedargslistContext = new TypedargslistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, Python3Parser.RULE_typedargslist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 40:
			case 45:
				{
				this.state = 313;
				this.tfpdef();
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 314;
					this.match(Python3Parser.ASSIGN);
					this.state = 315;
					this.test();
					}
				}

				this.state = 326;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 318;
						this.match(Python3Parser.COMMA);
						this.state = 319;
						this.tfpdef();
						this.state = 322;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===63) {
							{
							this.state = 320;
							this.match(Python3Parser.ASSIGN);
							this.state = 321;
							this.test();
							}
						}

						}
						}
					}
					this.state = 328;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 329;
					this.match(Python3Parser.COMMA);
					this.state = 360;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 56:
						{
						this.state = 330;
						this.match(Python3Parser.STAR);
						this.state = 332;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 33793) !== 0)) {
							{
							this.state = 331;
							this.tfpdef();
							}
						}

						this.state = 342;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 334;
								this.match(Python3Parser.COMMA);
								this.state = 335;
								this.tfpdef();
								this.state = 338;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===63) {
									{
									this.state = 336;
									this.match(Python3Parser.ASSIGN);
									this.state = 337;
									this.test();
									}
								}

								}
								}
							}
							this.state = 344;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
						}
						this.state = 353;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===59) {
							{
							this.state = 345;
							this.match(Python3Parser.COMMA);
							this.state = 351;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===62) {
								{
								this.state = 346;
								this.match(Python3Parser.POWER);
								this.state = 347;
								this.tfpdef();
								this.state = 349;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===59) {
									{
									this.state = 348;
									this.match(Python3Parser.COMMA);
									}
								}

								}
							}

							}
						}

						}
						break;
					case 62:
						{
						this.state = 355;
						this.match(Python3Parser.POWER);
						this.state = 356;
						this.tfpdef();
						this.state = 358;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===59) {
							{
							this.state = 357;
							this.match(Python3Parser.COMMA);
							}
						}

						}
						break;
					case 58:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case 56:
				{
				this.state = 364;
				this.match(Python3Parser.STAR);
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 33793) !== 0)) {
					{
					this.state = 365;
					this.tfpdef();
					}
				}

				this.state = 376;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 368;
						this.match(Python3Parser.COMMA);
						this.state = 369;
						this.tfpdef();
						this.state = 372;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===63) {
							{
							this.state = 370;
							this.match(Python3Parser.ASSIGN);
							this.state = 371;
							this.test();
							}
						}

						}
						}
					}
					this.state = 378;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 379;
					this.match(Python3Parser.COMMA);
					this.state = 385;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===62) {
						{
						this.state = 380;
						this.match(Python3Parser.POWER);
						this.state = 381;
						this.tfpdef();
						this.state = 383;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===59) {
							{
							this.state = 382;
							this.match(Python3Parser.COMMA);
							}
						}

						}
					}

					}
				}

				}
				break;
			case 62:
				{
				this.state = 389;
				this.match(Python3Parser.POWER);
				this.state = 390;
				this.tfpdef();
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 391;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tfpdef(): TfpdefContext {
		let localctx: TfpdefContext = new TfpdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, Python3Parser.RULE_tfpdef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.name();
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===60) {
				{
				this.state = 397;
				this.match(Python3Parser.COLON);
				this.state = 398;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varargslist(): VarargslistContext {
		let localctx: VarargslistContext = new VarargslistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, Python3Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 40:
			case 45:
				{
				this.state = 401;
				this.vfpdef();
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===63) {
					{
					this.state = 402;
					this.match(Python3Parser.ASSIGN);
					this.state = 403;
					this.test();
					}
				}

				this.state = 414;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 406;
						this.match(Python3Parser.COMMA);
						this.state = 407;
						this.vfpdef();
						this.state = 410;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===63) {
							{
							this.state = 408;
							this.match(Python3Parser.ASSIGN);
							this.state = 409;
							this.test();
							}
						}

						}
						}
					}
					this.state = 416;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 417;
					this.match(Python3Parser.COMMA);
					this.state = 448;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 56:
						{
						this.state = 418;
						this.match(Python3Parser.STAR);
						this.state = 420;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 33793) !== 0)) {
							{
							this.state = 419;
							this.vfpdef();
							}
						}

						this.state = 430;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 422;
								this.match(Python3Parser.COMMA);
								this.state = 423;
								this.vfpdef();
								this.state = 426;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===63) {
									{
									this.state = 424;
									this.match(Python3Parser.ASSIGN);
									this.state = 425;
									this.test();
									}
								}

								}
								}
							}
							this.state = 432;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
						}
						this.state = 441;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===59) {
							{
							this.state = 433;
							this.match(Python3Parser.COMMA);
							this.state = 439;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la===62) {
								{
								this.state = 434;
								this.match(Python3Parser.POWER);
								this.state = 435;
								this.vfpdef();
								this.state = 437;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
								if (_la===59) {
									{
									this.state = 436;
									this.match(Python3Parser.COMMA);
									}
								}

								}
							}

							}
						}

						}
						break;
					case 62:
						{
						this.state = 443;
						this.match(Python3Parser.POWER);
						this.state = 444;
						this.vfpdef();
						this.state = 446;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===59) {
							{
							this.state = 445;
							this.match(Python3Parser.COMMA);
							}
						}

						}
						break;
					case 60:
						break;
					default:
						break;
					}
					}
				}

				}
				break;
			case 56:
				{
				this.state = 452;
				this.match(Python3Parser.STAR);
				this.state = 454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 33793) !== 0)) {
					{
					this.state = 453;
					this.vfpdef();
					}
				}

				this.state = 464;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 456;
						this.match(Python3Parser.COMMA);
						this.state = 457;
						this.vfpdef();
						this.state = 460;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===63) {
							{
							this.state = 458;
							this.match(Python3Parser.ASSIGN);
							this.state = 459;
							this.test();
							}
						}

						}
						}
					}
					this.state = 466;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
				}
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 467;
					this.match(Python3Parser.COMMA);
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===62) {
						{
						this.state = 468;
						this.match(Python3Parser.POWER);
						this.state = 469;
						this.vfpdef();
						this.state = 471;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===59) {
							{
							this.state = 470;
							this.match(Python3Parser.COMMA);
							}
						}

						}
					}

					}
				}

				}
				break;
			case 62:
				{
				this.state = 477;
				this.match(Python3Parser.POWER);
				this.state = 478;
				this.vfpdef();
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 479;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public vfpdef(): VfpdefContext {
		let localctx: VfpdefContext = new VfpdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, Python3Parser.RULE_vfpdef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 484;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let localctx: StmtContext = new StmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, Python3Parser.RULE_stmt);
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 486;
				this.simple_stmts();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 487;
				this.compound_stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_stmts(): Simple_stmtsContext {
		let localctx: Simple_stmtsContext = new Simple_stmtsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, Python3Parser.RULE_simple_stmts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.simple_stmt();
			this.state = 495;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 491;
					this.match(Python3Parser.SEMI_COLON);
					this.state = 492;
					this.simple_stmt();
					}
					}
				}
				this.state = 497;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 498;
				this.match(Python3Parser.SEMI_COLON);
				}
			}

			this.state = 501;
			this.match(Python3Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let localctx: Simple_stmtContext = new Simple_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, Python3Parser.RULE_simple_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 511;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 29:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 56:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				{
				this.state = 503;
				this.expr_stmt();
				}
				break;
			case 16:
				{
				this.state = 504;
				this.del_stmt();
				}
				break;
			case 35:
				{
				this.state = 505;
				this.pass_stmt();
				}
				break;
			case 11:
			case 14:
			case 36:
			case 37:
			case 43:
				{
				this.state = 506;
				this.flow_stmt();
				}
				break;
			case 23:
			case 26:
				{
				this.state = 507;
				this.import_stmt();
				}
				break;
			case 24:
				{
				this.state = 508;
				this.global_stmt();
				}
				break;
			case 32:
				{
				this.state = 509;
				this.nonlocal_stmt();
				}
				break;
			case 8:
				{
				this.state = 510;
				this.assert_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let localctx: Expr_stmtContext = new Expr_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, Python3Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			this.testlist_star_expr();
			this.state = 530;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 60:
				{
				this.state = 514;
				this.annassign();
				}
				break;
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
				{
				this.state = 515;
				this.augassign();
				this.state = 518;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 43:
					{
					this.state = 516;
					this.yield_expr();
					}
					break;
				case 3:
				case 4:
				case 10:
				case 20:
				case 29:
				case 30:
				case 31:
				case 33:
				case 38:
				case 40:
				case 45:
				case 55:
				case 57:
				case 64:
				case 71:
				case 72:
				case 76:
				case 77:
					{
					this.state = 517;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 44:
			case 61:
			case 63:
				{
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===63) {
					{
					{
					this.state = 520;
					this.match(Python3Parser.ASSIGN);
					this.state = 523;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 43:
						{
						this.state = 521;
						this.yield_expr();
						}
						break;
					case 3:
					case 4:
					case 10:
					case 20:
					case 29:
					case 30:
					case 31:
					case 33:
					case 38:
					case 40:
					case 45:
					case 55:
					case 56:
					case 57:
					case 64:
					case 71:
					case 72:
					case 76:
					case 77:
						{
						this.state = 522;
						this.testlist_star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 529;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annassign(): AnnassignContext {
		let localctx: AnnassignContext = new AnnassignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, Python3Parser.RULE_annassign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 532;
			this.match(Python3Parser.COLON);
			this.state = 533;
			this.test();
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 534;
				this.match(Python3Parser.ASSIGN);
				this.state = 535;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public testlist_star_expr(): Testlist_star_exprContext {
		let localctx: Testlist_star_exprContext = new Testlist_star_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, Python3Parser.RULE_testlist_star_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 540;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 29:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				{
				this.state = 538;
				this.test();
				}
				break;
			case 56:
				{
				this.state = 539;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 549;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 542;
					this.match(Python3Parser.COMMA);
					this.state = 545;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
					case 4:
					case 10:
					case 20:
					case 29:
					case 30:
					case 31:
					case 33:
					case 38:
					case 40:
					case 45:
					case 55:
					case 57:
					case 64:
					case 71:
					case 72:
					case 76:
					case 77:
						{
						this.state = 543;
						this.test();
						}
						break;
					case 56:
						{
						this.state = 544;
						this.star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 551;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			}
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 552;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public augassign(): AugassignContext {
		let localctx: AugassignContext = new AugassignContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, Python3Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 555;
			_la = this._input.LA(1);
			if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 8191) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let localctx: Del_stmtContext = new Del_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, Python3Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 557;
			this.match(Python3Parser.DEL);
			this.state = 558;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let localctx: Pass_stmtContext = new Pass_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, Python3Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 560;
			this.match(Python3Parser.PASS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let localctx: Flow_stmtContext = new Flow_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, Python3Parser.RULE_flow_stmt);
		try {
			this.state = 567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 562;
				this.break_stmt();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 563;
				this.continue_stmt();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 564;
				this.return_stmt();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 565;
				this.raise_stmt();
				}
				break;
			case 43:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 566;
				this.yield_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let localctx: Break_stmtContext = new Break_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, Python3Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 569;
			this.match(Python3Parser.BREAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let localctx: Continue_stmtContext = new Continue_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, Python3Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 571;
			this.match(Python3Parser.CONTINUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let localctx: Return_stmtContext = new Return_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, Python3Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 573;
			this.match(Python3Parser.RETURN);
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
				{
				this.state = 574;
				this.testlist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let localctx: Yield_stmtContext = new Yield_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, Python3Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 577;
			this.yield_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let localctx: Raise_stmtContext = new Raise_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, Python3Parser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 579;
			this.match(Python3Parser.RAISE);
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
				{
				this.state = 580;
				this.test();
				this.state = 583;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===23) {
					{
					this.state = 581;
					this.match(Python3Parser.FROM);
					this.state = 582;
					this.test();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let localctx: Import_stmtContext = new Import_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, Python3Parser.RULE_import_stmt);
		try {
			this.state = 589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 587;
				this.import_name();
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 588;
				this.import_from();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_name(): Import_nameContext {
		let localctx: Import_nameContext = new Import_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, Python3Parser.RULE_import_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 591;
			this.match(Python3Parser.IMPORT);
			this.state = 592;
			this.dotted_as_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_from(): Import_fromContext {
		let localctx: Import_fromContext = new Import_fromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, Python3Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 594;
			this.match(Python3Parser.FROM);
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===54 || _la===55) {
					{
					{
					this.state = 595;
					_la = this._input.LA(1);
					if(!(_la===54 || _la===55)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 600;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 601;
				this.dotted_name();
				}
				break;
			case 2:
				{
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 602;
					_la = this._input.LA(1);
					if(!(_la===54 || _la===55)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					this.state = 605;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===54 || _la===55);
				}
				break;
			}
			this.state = 609;
			this.match(Python3Parser.IMPORT);
			this.state = 616;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				{
				this.state = 610;
				this.match(Python3Parser.STAR);
				}
				break;
			case 57:
				{
				this.state = 611;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 612;
				this.import_as_names();
				this.state = 613;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case 30:
			case 40:
			case 45:
				{
				this.state = 615;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let localctx: Import_as_nameContext = new Import_as_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, Python3Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.name();
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 619;
				this.match(Python3Parser.AS);
				this.state = 620;
				this.name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, Python3Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 623;
			this.dotted_name();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 624;
				this.match(Python3Parser.AS);
				this.state = 625;
				this.name();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let localctx: Import_as_namesContext = new Import_as_namesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, Python3Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 628;
			this.import_as_name();
			this.state = 633;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 629;
					this.match(Python3Parser.COMMA);
					this.state = 630;
					this.import_as_name();
					}
					}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
			}
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 636;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, Python3Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 639;
			this.dotted_as_name();
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===59) {
				{
				{
				this.state = 640;
				this.match(Python3Parser.COMMA);
				this.state = 641;
				this.dotted_as_name();
				}
				}
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let localctx: Dotted_nameContext = new Dotted_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, Python3Parser.RULE_dotted_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 647;
			this.name();
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===54) {
				{
				{
				this.state = 648;
				this.match(Python3Parser.DOT);
				this.state = 649;
				this.name();
				}
				}
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let localctx: Global_stmtContext = new Global_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, Python3Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 655;
			this.match(Python3Parser.GLOBAL);
			this.state = 656;
			this.name();
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===59) {
				{
				{
				this.state = 657;
				this.match(Python3Parser.COMMA);
				this.state = 658;
				this.name();
				}
				}
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nonlocal_stmt(): Nonlocal_stmtContext {
		let localctx: Nonlocal_stmtContext = new Nonlocal_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, Python3Parser.RULE_nonlocal_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 664;
			this.match(Python3Parser.NONLOCAL);
			this.state = 665;
			this.name();
			this.state = 670;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===59) {
				{
				{
				this.state = 666;
				this.match(Python3Parser.COMMA);
				this.state = 667;
				this.name();
				}
				}
				this.state = 672;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let localctx: Assert_stmtContext = new Assert_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, Python3Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 673;
			this.match(Python3Parser.ASSERT);
			this.state = 674;
			this.test();
			this.state = 677;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 675;
				this.match(Python3Parser.COMMA);
				this.state = 676;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let localctx: Compound_stmtContext = new Compound_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, Python3Parser.RULE_compound_stmt);
		try {
			this.state = 689;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 679;
				this.if_stmt();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 680;
				this.while_stmt();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 681;
				this.for_stmt();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 682;
				this.try_stmt();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 683;
				this.with_stmt();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 684;
				this.funcdef();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 685;
				this.classdef();
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 686;
				this.decorated();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 687;
				this.async_stmt();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 688;
				this.match_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public async_stmt(): Async_stmtContext {
		let localctx: Async_stmtContext = new Async_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, Python3Parser.RULE_async_stmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 691;
			this.match(Python3Parser.ASYNC);
			this.state = 695;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				{
				this.state = 692;
				this.funcdef();
				}
				break;
			case 42:
				{
				this.state = 693;
				this.with_stmt();
				}
				break;
			case 22:
				{
				this.state = 694;
				this.for_stmt();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let localctx: If_stmtContext = new If_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, Python3Parser.RULE_if_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 697;
			this.match(Python3Parser.IF);
			this.state = 698;
			this.test();
			this.state = 699;
			this.match(Python3Parser.COLON);
			this.state = 700;
			this.block();
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 701;
				this.match(Python3Parser.ELIF);
				this.state = 702;
				this.test();
				this.state = 703;
				this.match(Python3Parser.COLON);
				this.state = 704;
				this.block();
				}
				}
				this.state = 710;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 711;
				this.match(Python3Parser.ELSE);
				this.state = 712;
				this.match(Python3Parser.COLON);
				this.state = 713;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let localctx: While_stmtContext = new While_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, Python3Parser.RULE_while_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 716;
			this.match(Python3Parser.WHILE);
			this.state = 717;
			this.test();
			this.state = 718;
			this.match(Python3Parser.COLON);
			this.state = 719;
			this.block();
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 720;
				this.match(Python3Parser.ELSE);
				this.state = 721;
				this.match(Python3Parser.COLON);
				this.state = 722;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let localctx: For_stmtContext = new For_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, Python3Parser.RULE_for_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 725;
			this.match(Python3Parser.FOR);
			this.state = 726;
			this.exprlist();
			this.state = 727;
			this.match(Python3Parser.IN);
			this.state = 728;
			this.testlist();
			this.state = 729;
			this.match(Python3Parser.COLON);
			this.state = 730;
			this.block();
			this.state = 734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 731;
				this.match(Python3Parser.ELSE);
				this.state = 732;
				this.match(Python3Parser.COLON);
				this.state = 733;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let localctx: Try_stmtContext = new Try_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, Python3Parser.RULE_try_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 736;
			this.match(Python3Parser.TRY);
			this.state = 737;
			this.match(Python3Parser.COLON);
			this.state = 738;
			this.block();
			this.state = 760;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				{
				this.state = 743;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 739;
					this.except_clause();
					this.state = 740;
					this.match(Python3Parser.COLON);
					this.state = 741;
					this.block();
					}
					}
					this.state = 745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===19);
				this.state = 750;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 747;
					this.match(Python3Parser.ELSE);
					this.state = 748;
					this.match(Python3Parser.COLON);
					this.state = 749;
					this.block();
					}
				}

				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===21) {
					{
					this.state = 752;
					this.match(Python3Parser.FINALLY);
					this.state = 753;
					this.match(Python3Parser.COLON);
					this.state = 754;
					this.block();
					}
				}

				}
				break;
			case 21:
				{
				this.state = 757;
				this.match(Python3Parser.FINALLY);
				this.state = 758;
				this.match(Python3Parser.COLON);
				this.state = 759;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let localctx: With_stmtContext = new With_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, Python3Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 762;
			this.match(Python3Parser.WITH);
			this.state = 763;
			this.with_item();
			this.state = 768;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===59) {
				{
				{
				this.state = 764;
				this.match(Python3Parser.COMMA);
				this.state = 765;
				this.with_item();
				}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 771;
			this.match(Python3Parser.COLON);
			this.state = 772;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public with_item(): With_itemContext {
		let localctx: With_itemContext = new With_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, Python3Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 774;
			this.test();
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 775;
				this.match(Python3Parser.AS);
				this.state = 776;
				this.expr(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let localctx: Except_clauseContext = new Except_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, Python3Parser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 779;
			this.match(Python3Parser.EXCEPT);
			this.state = 785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
				{
				this.state = 780;
				this.test();
				this.state = 783;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===7) {
					{
					this.state = 781;
					this.match(Python3Parser.AS);
					this.state = 782;
					this.name();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, Python3Parser.RULE_block);
		let _la: number;
		try {
			this.state = 797;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 8:
			case 10:
			case 11:
			case 14:
			case 16:
			case 20:
			case 23:
			case 24:
			case 26:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 35:
			case 36:
			case 37:
			case 38:
			case 40:
			case 43:
			case 45:
			case 55:
			case 56:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 787;
				this.simple_stmts();
				}
				break;
			case 44:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 788;
				this.match(Python3Parser.NEWLINE);
				this.state = 789;
				this.match(Python3Parser.INDENT);
				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 790;
					this.stmt();
					}
					}
					this.state = 793;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3889295128) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 58732539) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4206977) !== 0));
				this.state = 795;
				this.match(Python3Parser.DEDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public match_stmt(): Match_stmtContext {
		let localctx: Match_stmtContext = new Match_stmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, Python3Parser.RULE_match_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 799;
			this.match(Python3Parser.MATCH);
			this.state = 800;
			this.subject_expr();
			this.state = 801;
			this.match(Python3Parser.COLON);
			this.state = 802;
			this.match(Python3Parser.NEWLINE);
			this.state = 803;
			this.match(Python3Parser.INDENT);
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 804;
				this.case_block();
				}
				}
				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===12);
			this.state = 809;
			this.match(Python3Parser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subject_expr(): Subject_exprContext {
		let localctx: Subject_exprContext = new Subject_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, Python3Parser.RULE_subject_expr);
		let _la: number;
		try {
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 811;
				this.star_named_expression();
				this.state = 812;
				this.match(Python3Parser.COMMA);
				this.state = 814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 813;
					this.star_named_expressions();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 816;
				this.test();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public star_named_expressions(): Star_named_expressionsContext {
		let localctx: Star_named_expressionsContext = new Star_named_expressionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, Python3Parser.RULE_star_named_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			this.match(Python3Parser.COMMA);
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 820;
				this.star_named_expression();
				}
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2176848033) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0));
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 825;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public star_named_expression(): Star_named_expressionContext {
		let localctx: Star_named_expressionContext = new Star_named_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, Python3Parser.RULE_star_named_expression);
		try {
			this.state = 831;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 828;
				this.match(Python3Parser.STAR);
				this.state = 829;
				this.expr(0);
				}
				break;
			case 3:
			case 4:
			case 10:
			case 20:
			case 29:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 830;
				this.test();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public case_block(): Case_blockContext {
		let localctx: Case_blockContext = new Case_blockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, Python3Parser.RULE_case_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 833;
			this.match(Python3Parser.CASE);
			this.state = 834;
			this.patterns();
			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 835;
				this.guard();
				}
			}

			this.state = 838;
			this.match(Python3Parser.COLON);
			this.state = 839;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public guard(): GuardContext {
		let localctx: GuardContext = new GuardContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, Python3Parser.RULE_guard);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 841;
			this.match(Python3Parser.IF);
			this.state = 842;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public patterns(): PatternsContext {
		let localctx: PatternsContext = new PatternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, Python3Parser.RULE_patterns);
		try {
			this.state = 846;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 844;
				this.open_sequence_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 845;
				this.pattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let localctx: PatternContext = new PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, Python3Parser.RULE_pattern);
		try {
			this.state = 850;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 848;
				this.as_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 849;
				this.or_pattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public as_pattern(): As_patternContext {
		let localctx: As_patternContext = new As_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, Python3Parser.RULE_as_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 852;
			this.or_pattern();
			this.state = 853;
			this.match(Python3Parser.AS);
			this.state = 854;
			this.pattern_capture_target();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public or_pattern(): Or_patternContext {
		let localctx: Or_patternContext = new Or_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, Python3Parser.RULE_or_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 856;
			this.closed_pattern();
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===66) {
				{
				{
				this.state = 857;
				this.match(Python3Parser.OR_OP);
				this.state = 858;
				this.closed_pattern();
				}
				}
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public closed_pattern(): Closed_patternContext {
		let localctx: Closed_patternContext = new Closed_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, Python3Parser.RULE_closed_pattern);
		try {
			this.state = 872;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 864;
				this.literal_pattern();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 865;
				this.capture_pattern();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 866;
				this.wildcard_pattern();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 867;
				this.value_pattern();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 868;
				this.group_pattern();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 869;
				this.sequence_pattern();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 870;
				this.mapping_pattern();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 871;
				this.class_pattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_pattern(): Literal_patternContext {
		let localctx: Literal_patternContext = new Literal_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, Python3Parser.RULE_literal_pattern);
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 874;
				this.signed_number();
				this.state = 875;
				if (!( this.CannotBePlusMinus() )) {
					throw this.createFailedPredicateException(" this.CannotBePlusMinus() ");
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 877;
				this.complex_number();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 878;
				this.strings();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 879;
				this.match(Python3Parser.NONE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 880;
				this.match(Python3Parser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 881;
				this.match(Python3Parser.FALSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_expr(): Literal_exprContext {
		let localctx: Literal_exprContext = new Literal_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, Python3Parser.RULE_literal_expr);
		try {
			this.state = 892;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 111, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 884;
				this.signed_number();
				this.state = 885;
				if (!( this.CannotBePlusMinus() )) {
					throw this.createFailedPredicateException(" this.CannotBePlusMinus() ");
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 887;
				this.complex_number();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 888;
				this.strings();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 889;
				this.match(Python3Parser.NONE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 890;
				this.match(Python3Parser.TRUE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 891;
				this.match(Python3Parser.FALSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public complex_number(): Complex_numberContext {
		let localctx: Complex_numberContext = new Complex_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, Python3Parser.RULE_complex_number);
		try {
			this.state = 902;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 894;
				this.signed_real_number();
				this.state = 895;
				this.match(Python3Parser.ADD);
				this.state = 896;
				this.imaginary_number();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 898;
				this.signed_real_number();
				this.state = 899;
				this.match(Python3Parser.MINUS);
				this.state = 900;
				this.imaginary_number();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signed_number(): Signed_numberContext {
		let localctx: Signed_numberContext = new Signed_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, Python3Parser.RULE_signed_number);
		try {
			this.state = 907;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 904;
				this.match(Python3Parser.NUMBER);
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 905;
				this.match(Python3Parser.MINUS);
				this.state = 906;
				this.match(Python3Parser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public signed_real_number(): Signed_real_numberContext {
		let localctx: Signed_real_numberContext = new Signed_real_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, Python3Parser.RULE_signed_real_number);
		try {
			this.state = 912;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 909;
				this.real_number();
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 910;
				this.match(Python3Parser.MINUS);
				this.state = 911;
				this.real_number();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public real_number(): Real_numberContext {
		let localctx: Real_numberContext = new Real_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, Python3Parser.RULE_real_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 914;
			this.match(Python3Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public imaginary_number(): Imaginary_numberContext {
		let localctx: Imaginary_numberContext = new Imaginary_numberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, Python3Parser.RULE_imaginary_number);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 916;
			this.match(Python3Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public capture_pattern(): Capture_patternContext {
		let localctx: Capture_patternContext = new Capture_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, Python3Parser.RULE_capture_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 918;
			this.pattern_capture_target();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern_capture_target(): Pattern_capture_targetContext {
		let localctx: Pattern_capture_targetContext = new Pattern_capture_targetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, Python3Parser.RULE_pattern_capture_target);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 920;
			this.name();
			this.state = 921;
			if (!( this.CannotBeDotLpEq() )) {
				throw this.createFailedPredicateException(" this.CannotBeDotLpEq() ");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wildcard_pattern(): Wildcard_patternContext {
		let localctx: Wildcard_patternContext = new Wildcard_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, Python3Parser.RULE_wildcard_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 923;
			this.match(Python3Parser.UNDERSCORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value_pattern(): Value_patternContext {
		let localctx: Value_patternContext = new Value_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, Python3Parser.RULE_value_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 925;
			this.attr();
			this.state = 926;
			if (!( this.CannotBeDotLpEq() )) {
				throw this.createFailedPredicateException(" this.CannotBeDotLpEq() ");
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attr(): AttrContext {
		let localctx: AttrContext = new AttrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, Python3Parser.RULE_attr);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 928;
			this.name();
			this.state = 931;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 929;
					this.match(Python3Parser.DOT);
					this.state = 930;
					this.name();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 933;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 115, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public name_or_attr(): Name_or_attrContext {
		let localctx: Name_or_attrContext = new Name_or_attrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, Python3Parser.RULE_name_or_attr);
		try {
			this.state = 937;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 935;
				this.attr();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 936;
				this.name();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public group_pattern(): Group_patternContext {
		let localctx: Group_patternContext = new Group_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, Python3Parser.RULE_group_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			this.match(Python3Parser.OPEN_PAREN);
			this.state = 940;
			this.pattern();
			this.state = 941;
			this.match(Python3Parser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sequence_pattern(): Sequence_patternContext {
		let localctx: Sequence_patternContext = new Sequence_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, Python3Parser.RULE_sequence_pattern);
		let _la: number;
		try {
			this.state = 953;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 943;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222274072) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 67895429) !== 0) || _la===72 || _la===77) {
					{
					this.state = 944;
					this.maybe_sequence_pattern();
					}
				}

				this.state = 947;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case 57:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 948;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222274072) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 67895429) !== 0) || _la===72 || _la===77) {
					{
					this.state = 949;
					this.open_sequence_pattern();
					}
				}

				this.state = 952;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public open_sequence_pattern(): Open_sequence_patternContext {
		let localctx: Open_sequence_patternContext = new Open_sequence_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, Python3Parser.RULE_open_sequence_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 955;
			this.maybe_star_pattern();
			this.state = 956;
			this.match(Python3Parser.COMMA);
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3222274072) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 67895429) !== 0) || _la===72 || _la===77) {
				{
				this.state = 957;
				this.maybe_sequence_pattern();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public maybe_sequence_pattern(): Maybe_sequence_patternContext {
		let localctx: Maybe_sequence_patternContext = new Maybe_sequence_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, Python3Parser.RULE_maybe_sequence_pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 960;
			this.maybe_star_pattern();
			this.state = 965;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 961;
					this.match(Python3Parser.COMMA);
					this.state = 962;
					this.maybe_star_pattern();
					}
					}
				}
				this.state = 967;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 121, this._ctx);
			}
			this.state = 969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 968;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public maybe_star_pattern(): Maybe_star_patternContext {
		let localctx: Maybe_star_patternContext = new Maybe_star_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, Python3Parser.RULE_maybe_star_pattern);
		try {
			this.state = 973;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 971;
				this.star_pattern();
				}
				break;
			case 3:
			case 4:
			case 20:
			case 30:
			case 31:
			case 38:
			case 40:
			case 45:
			case 57:
			case 64:
			case 72:
			case 77:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 972;
				this.pattern();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public star_pattern(): Star_patternContext {
		let localctx: Star_patternContext = new Star_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, Python3Parser.RULE_star_pattern);
		try {
			this.state = 979;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 975;
				this.match(Python3Parser.STAR);
				this.state = 976;
				this.pattern_capture_target();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 977;
				this.match(Python3Parser.STAR);
				this.state = 978;
				this.wildcard_pattern();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mapping_pattern(): Mapping_patternContext {
		let localctx: Mapping_patternContext = new Mapping_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, Python3Parser.RULE_mapping_pattern);
		let _la: number;
		try {
			this.state = 1006;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 981;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 982;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 983;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 984;
				this.double_star_pattern();
				this.state = 986;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 985;
					this.match(Python3Parser.COMMA);
					}
				}

				this.state = 988;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 990;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 991;
				this.items_pattern();
				this.state = 992;
				this.match(Python3Parser.COMMA);
				this.state = 993;
				this.double_star_pattern();
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 994;
					this.match(Python3Parser.COMMA);
					}
				}

				this.state = 997;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 999;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 1000;
				this.items_pattern();
				this.state = 1002;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 1001;
					this.match(Python3Parser.COMMA);
					}
				}

				this.state = 1004;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public items_pattern(): Items_patternContext {
		let localctx: Items_patternContext = new Items_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, Python3Parser.RULE_items_pattern);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1008;
			this.key_value_pattern();
			this.state = 1013;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 129, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1009;
					this.match(Python3Parser.COMMA);
					this.state = 1010;
					this.key_value_pattern();
					}
					}
				}
				this.state = 1015;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 129, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public key_value_pattern(): Key_value_patternContext {
		let localctx: Key_value_patternContext = new Key_value_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, Python3Parser.RULE_key_value_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1018;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 20:
			case 31:
			case 38:
			case 72:
				{
				this.state = 1016;
				this.literal_expr();
				}
				break;
			case 30:
			case 40:
			case 45:
				{
				this.state = 1017;
				this.attr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1020;
			this.match(Python3Parser.COLON);
			this.state = 1021;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public double_star_pattern(): Double_star_patternContext {
		let localctx: Double_star_patternContext = new Double_star_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, Python3Parser.RULE_double_star_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1023;
			this.match(Python3Parser.POWER);
			this.state = 1024;
			this.pattern_capture_target();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public class_pattern(): Class_patternContext {
		let localctx: Class_patternContext = new Class_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, Python3Parser.RULE_class_pattern);
		let _la: number;
		try {
			this.state = 1056;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1026;
				this.name_or_attr();
				this.state = 1027;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1028;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1030;
				this.name_or_attr();
				this.state = 1031;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1032;
				this.positional_patterns();
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 1033;
					this.match(Python3Parser.COMMA);
					}
				}

				this.state = 1036;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1038;
				this.name_or_attr();
				this.state = 1039;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1040;
				this.keyword_patterns();
				this.state = 1042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 1041;
					this.match(Python3Parser.COMMA);
					}
				}

				this.state = 1044;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1046;
				this.name_or_attr();
				this.state = 1047;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1048;
				this.positional_patterns();
				this.state = 1049;
				this.match(Python3Parser.COMMA);
				this.state = 1050;
				this.keyword_patterns();
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 1051;
					this.match(Python3Parser.COMMA);
					}
				}

				this.state = 1054;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public positional_patterns(): Positional_patternsContext {
		let localctx: Positional_patternsContext = new Positional_patternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, Python3Parser.RULE_positional_patterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1058;
			this.pattern();
			this.state = 1063;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1059;
					this.match(Python3Parser.COMMA);
					this.state = 1060;
					this.pattern();
					}
					}
				}
				this.state = 1065;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 135, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword_patterns(): Keyword_patternsContext {
		let localctx: Keyword_patternsContext = new Keyword_patternsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, Python3Parser.RULE_keyword_patterns);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1066;
			this.keyword_pattern();
			this.state = 1071;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1067;
					this.match(Python3Parser.COMMA);
					this.state = 1068;
					this.keyword_pattern();
					}
					}
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 136, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword_pattern(): Keyword_patternContext {
		let localctx: Keyword_patternContext = new Keyword_patternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, Python3Parser.RULE_keyword_pattern);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1074;
			this.name();
			this.state = 1075;
			this.match(Python3Parser.ASSIGN);
			this.state = 1076;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public test(): TestContext {
		let localctx: TestContext = new TestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, Python3Parser.RULE_test);
		let _la: number;
		try {
			this.state = 1087;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1078;
				this.or_test();
				this.state = 1084;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===25) {
					{
					this.state = 1079;
					this.match(Python3Parser.IF);
					this.state = 1080;
					this.or_test();
					this.state = 1081;
					this.match(Python3Parser.ELSE);
					this.state = 1082;
					this.test();
					}
				}

				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1086;
				this.lambdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public test_nocond(): Test_nocondContext {
		let localctx: Test_nocondContext = new Test_nocondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, Python3Parser.RULE_test_nocond);
		try {
			this.state = 1091;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1089;
				this.or_test();
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1090;
				this.lambdef_nocond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdef(): LambdefContext {
		let localctx: LambdefContext = new LambdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, Python3Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1093;
			this.match(Python3Parser.LAMBDA);
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4259873) !== 0)) {
				{
				this.state = 1094;
				this.varargslist();
				}
			}

			this.state = 1097;
			this.match(Python3Parser.COLON);
			this.state = 1098;
			this.test();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdef_nocond(): Lambdef_nocondContext {
		let localctx: Lambdef_nocondContext = new Lambdef_nocondContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, Python3Parser.RULE_lambdef_nocond);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1100;
			this.match(Python3Parser.LAMBDA);
			this.state = 1102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 4259873) !== 0)) {
				{
				this.state = 1101;
				this.varargslist();
				}
			}

			this.state = 1104;
			this.match(Python3Parser.COLON);
			this.state = 1105;
			this.test_nocond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public or_test(): Or_testContext {
		let localctx: Or_testContext = new Or_testContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, Python3Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1107;
			this.and_test();
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===34) {
				{
				{
				this.state = 1108;
				this.match(Python3Parser.OR);
				this.state = 1109;
				this.and_test();
				}
				}
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public and_test(): And_testContext {
		let localctx: And_testContext = new And_testContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, Python3Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1115;
			this.not_test();
			this.state = 1120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 1116;
				this.match(Python3Parser.AND);
				this.state = 1117;
				this.not_test();
				}
				}
				this.state = 1122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public not_test(): Not_testContext {
		let localctx: Not_testContext = new Not_testContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, Python3Parser.RULE_not_test);
		try {
			this.state = 1126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1123;
				this.match(Python3Parser.NOT);
				this.state = 1124;
				this.not_test();
				}
				break;
			case 3:
			case 4:
			case 10:
			case 20:
			case 30:
			case 31:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1125;
				this.comparison();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let localctx: ComparisonContext = new ComparisonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, Python3Parser.RULE_comparison);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1128;
			this.expr(0);
			this.state = 1134;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1129;
					this.comp_op();
					this.state = 1130;
					this.expr(0);
					}
					}
				}
				this.state = 1136;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 145, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comp_op(): Comp_opContext {
		let localctx: Comp_opContext = new Comp_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, Python3Parser.RULE_comp_op);
		try {
			this.state = 1150;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1137;
				this.match(Python3Parser.LESS_THAN);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1138;
				this.match(Python3Parser.GREATER_THAN);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1139;
				this.match(Python3Parser.EQUALS);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1140;
				this.match(Python3Parser.GT_EQ);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1141;
				this.match(Python3Parser.LT_EQ);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1142;
				this.match(Python3Parser.NOT_EQ_1);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1143;
				this.match(Python3Parser.NOT_EQ_2);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1144;
				this.match(Python3Parser.IN);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1145;
				this.match(Python3Parser.NOT);
				this.state = 1146;
				this.match(Python3Parser.IN);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1147;
				this.match(Python3Parser.IS);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1148;
				this.match(Python3Parser.IS);
				this.state = 1149;
				this.match(Python3Parser.NOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public star_expr(): Star_exprContext {
		let localctx: Star_exprContext = new Star_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, Python3Parser.RULE_star_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1152;
			this.match(Python3Parser.STAR);
			this.state = 1153;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 196;
		this.enterRecursionRule(localctx, 196, Python3Parser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 30:
			case 31:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 77:
				{
				this.state = 1156;
				this.atom_expr();
				}
				break;
			case 71:
			case 72:
			case 76:
				{
				this.state = 1158;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1157;
						_la = this._input.LA(1);
						if(!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 35) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1160;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 147, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 1162;
				this.expr(7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1188;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1186;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1165;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1166;
						this.match(Python3Parser.POWER);
						this.state = 1167;
						this.expr(9);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1168;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1169;
						_la = this._input.LA(1);
						if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1074659329) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1170;
						this.expr(7);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1171;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1172;
						_la = this._input.LA(1);
						if(!(_la===71 || _la===72)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1173;
						this.expr(6);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1174;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1175;
						_la = this._input.LA(1);
						if(!(_la===69 || _la===70)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1176;
						this.expr(5);
						}
						break;
					case 5:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1177;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1178;
						this.match(Python3Parser.AND_OP);
						this.state = 1179;
						this.expr(4);
						}
						break;
					case 6:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1180;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1181;
						this.match(Python3Parser.XOR);
						this.state = 1182;
						this.expr(3);
						}
						break;
					case 7:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, Python3Parser.RULE_expr);
						this.state = 1183;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1184;
						this.match(Python3Parser.OR_OP);
						this.state = 1185;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 1190;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom_expr(): Atom_exprContext {
		let localctx: Atom_exprContext = new Atom_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, Python3Parser.RULE_atom_expr);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 1191;
				this.match(Python3Parser.AWAIT);
				}
			}

			this.state = 1194;
			this.atom();
			this.state = 1198;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1195;
					this.trailer();
					}
					}
				}
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 152, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, Python3Parser.RULE_atom);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1201;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1204;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 43:
					{
					this.state = 1202;
					this.yield_expr();
					}
					break;
				case 3:
				case 4:
				case 10:
				case 20:
				case 29:
				case 30:
				case 31:
				case 33:
				case 38:
				case 40:
				case 45:
				case 55:
				case 56:
				case 57:
				case 64:
				case 71:
				case 72:
				case 76:
				case 77:
					{
					this.state = 1203;
					this.testlist_comp();
					}
					break;
				case 58:
					break;
				default:
					break;
				}
				this.state = 1206;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1207;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 1209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2176848033) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 1208;
					this.testlist_comp();
					}
				}

				this.state = 1211;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1212;
				this.match(Python3Parser.OPEN_BRACE);
				this.state = 1214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2713718945) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 1213;
					this.dictorsetmaker();
					}
				}

				this.state = 1216;
				this.match(Python3Parser.CLOSE_BRACE);
				}
				break;
			case 30:
			case 40:
			case 45:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1217;
				this.name();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1218;
				this.match(Python3Parser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1220;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1219;
						this.match(Python3Parser.STRING);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1222;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 156, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1224;
				this.match(Python3Parser.ELLIPSIS);
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1225;
				this.match(Python3Parser.NONE);
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1226;
				this.match(Python3Parser.TRUE);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1227;
				this.match(Python3Parser.FALSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let localctx: NameContext = new NameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, Python3Parser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1230;
			_la = this._input.LA(1);
			if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 33793) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let localctx: Testlist_compContext = new Testlist_compContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, Python3Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 29:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				{
				this.state = 1232;
				this.test();
				}
				break;
			case 56:
				{
				this.state = 1233;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1250;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
			case 22:
				{
				this.state = 1236;
				this.comp_for();
				}
				break;
			case 58:
			case 59:
			case 65:
				{
				this.state = 1244;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1237;
						this.match(Python3Parser.COMMA);
						this.state = 1240;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 3:
						case 4:
						case 10:
						case 20:
						case 29:
						case 30:
						case 31:
						case 33:
						case 38:
						case 40:
						case 45:
						case 55:
						case 57:
						case 64:
						case 71:
						case 72:
						case 76:
						case 77:
							{
							this.state = 1238;
							this.test();
							}
							break;
						case 56:
							{
							this.state = 1239;
							this.star_expr();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 1246;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 160, this._ctx);
				}
				this.state = 1248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 1247;
					this.match(Python3Parser.COMMA);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trailer(): TrailerContext {
		let localctx: TrailerContext = new TrailerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, Python3Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 1263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1252;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2713718945) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 1253;
					this.arglist();
					}
				}

				this.state = 1256;
				this.match(Python3Parser.CLOSE_PAREN);
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1257;
				this.match(Python3Parser.OPEN_BRACK);
				this.state = 1258;
				this.subscriptlist();
				this.state = 1259;
				this.match(Python3Parser.CLOSE_BRACK);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1261;
				this.match(Python3Parser.DOT);
				this.state = 1262;
				this.name();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let localctx: SubscriptlistContext = new SubscriptlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, Python3Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1265;
			this.subscript_();
			this.state = 1270;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1266;
					this.match(Python3Parser.COMMA);
					this.state = 1267;
					this.subscript_();
					}
					}
				}
				this.state = 1272;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 165, this._ctx);
			}
			this.state = 1274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 1273;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subscript_(): Subscript_Context {
		let localctx: Subscript_Context = new Subscript_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 210, Python3Parser.RULE_subscript_);
		let _la: number;
		try {
			this.state = 1287;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1276;
				this.test();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 1277;
					this.test();
					}
				}

				this.state = 1280;
				this.match(Python3Parser.COLON);
				this.state = 1282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 1281;
					this.test();
					}
				}

				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 1284;
					this.sliceop();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sliceop(): SliceopContext {
		let localctx: SliceopContext = new SliceopContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, Python3Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1289;
			this.match(Python3Parser.COLON);
			this.state = 1291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
				{
				this.state = 1290;
				this.test();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exprlist(): ExprlistContext {
		let localctx: ExprlistContext = new ExprlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, Python3Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 10:
			case 20:
			case 30:
			case 31:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				{
				this.state = 1293;
				this.expr(0);
				}
				break;
			case 56:
				{
				this.state = 1294;
				this.star_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1304;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1297;
					this.match(Python3Parser.COMMA);
					this.state = 1300;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
					case 4:
					case 10:
					case 20:
					case 30:
					case 31:
					case 38:
					case 40:
					case 45:
					case 55:
					case 57:
					case 64:
					case 71:
					case 72:
					case 76:
					case 77:
						{
						this.state = 1298;
						this.expr(0);
						}
						break;
					case 56:
						{
						this.state = 1299;
						this.star_expr();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 1306;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
			}
			this.state = 1308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 1307;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public testlist(): TestlistContext {
		let localctx: TestlistContext = new TestlistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, Python3Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1310;
			this.test();
			this.state = 1315;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1311;
					this.match(Python3Parser.COMMA);
					this.state = 1312;
					this.test();
					}
					}
				}
				this.state = 1317;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
			}
			this.state = 1319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 1318;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let localctx: DictorsetmakerContext = new DictorsetmakerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, Python3Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1369;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1327;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 4:
				case 10:
				case 20:
				case 29:
				case 30:
				case 31:
				case 33:
				case 38:
				case 40:
				case 45:
				case 55:
				case 57:
				case 64:
				case 71:
				case 72:
				case 76:
				case 77:
					{
					this.state = 1321;
					this.test();
					this.state = 1322;
					this.match(Python3Parser.COLON);
					this.state = 1323;
					this.test();
					}
					break;
				case 62:
					{
					this.state = 1325;
					this.match(Python3Parser.POWER);
					this.state = 1326;
					this.expr(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1347;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 9:
				case 22:
					{
					this.state = 1329;
					this.comp_for();
					}
					break;
				case 59:
				case 78:
					{
					this.state = 1341;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1330;
							this.match(Python3Parser.COMMA);
							this.state = 1337;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 3:
							case 4:
							case 10:
							case 20:
							case 29:
							case 30:
							case 31:
							case 33:
							case 38:
							case 40:
							case 45:
							case 55:
							case 57:
							case 64:
							case 71:
							case 72:
							case 76:
							case 77:
								{
								this.state = 1331;
								this.test();
								this.state = 1332;
								this.match(Python3Parser.COLON);
								this.state = 1333;
								this.test();
								}
								break;
							case 62:
								{
								this.state = 1335;
								this.match(Python3Parser.POWER);
								this.state = 1336;
								this.expr(0);
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							}
						}
						this.state = 1343;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 180, this._ctx);
					}
					this.state = 1345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===59) {
						{
						this.state = 1344;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			case 2:
				{
				{
				this.state = 1351;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
				case 4:
				case 10:
				case 20:
				case 29:
				case 30:
				case 31:
				case 33:
				case 38:
				case 40:
				case 45:
				case 55:
				case 57:
				case 64:
				case 71:
				case 72:
				case 76:
				case 77:
					{
					this.state = 1349;
					this.test();
					}
					break;
				case 56:
					{
					this.state = 1350;
					this.star_expr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1367;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 9:
				case 22:
					{
					this.state = 1353;
					this.comp_for();
					}
					break;
				case 59:
				case 78:
					{
					this.state = 1361;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1354;
							this.match(Python3Parser.COMMA);
							this.state = 1357;
							this._errHandler.sync(this);
							switch (this._input.LA(1)) {
							case 3:
							case 4:
							case 10:
							case 20:
							case 29:
							case 30:
							case 31:
							case 33:
							case 38:
							case 40:
							case 45:
							case 55:
							case 57:
							case 64:
							case 71:
							case 72:
							case 76:
							case 77:
								{
								this.state = 1355;
								this.test();
								}
								break;
							case 56:
								{
								this.state = 1356;
								this.star_expr();
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							}
							}
						}
						this.state = 1363;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 185, this._ctx);
					}
					this.state = 1365;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===59) {
						{
						this.state = 1364;
						this.match(Python3Parser.COMMA);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classdef(): ClassdefContext {
		let localctx: ClassdefContext = new ClassdefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, Python3Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1371;
			this.match(Python3Parser.CLASS);
			this.state = 1372;
			this.name();
			this.state = 1378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 1373;
				this.match(Python3Parser.OPEN_PAREN);
				this.state = 1375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3759146008) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2713718945) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
					{
					this.state = 1374;
					this.arglist();
					}
				}

				this.state = 1377;
				this.match(Python3Parser.CLOSE_PAREN);
				}
			}

			this.state = 1380;
			this.match(Python3Parser.COLON);
			this.state = 1381;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arglist(): ArglistContext {
		let localctx: ArglistContext = new ArglistContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, Python3Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1383;
			this.argument();
			this.state = 1388;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1384;
					this.match(Python3Parser.COMMA);
					this.state = 1385;
					this.argument();
					}
					}
				}
				this.state = 1390;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 191, this._ctx);
			}
			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 1391;
				this.match(Python3Parser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, Python3Parser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1406;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1394;
				this.test();
				this.state = 1396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===9 || _la===22) {
					{
					this.state = 1395;
					this.comp_for();
					}
				}

				}
				break;
			case 2:
				{
				this.state = 1398;
				this.test();
				this.state = 1399;
				this.match(Python3Parser.ASSIGN);
				this.state = 1400;
				this.test();
				}
				break;
			case 3:
				{
				this.state = 1402;
				this.match(Python3Parser.POWER);
				this.state = 1403;
				this.test();
				}
				break;
			case 4:
				{
				this.state = 1404;
				this.match(Python3Parser.STAR);
				this.state = 1405;
				this.test();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let localctx: Comp_iterContext = new Comp_iterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, Python3Parser.RULE_comp_iter);
		try {
			this.state = 1410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
			case 22:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1408;
				this.comp_for();
				}
				break;
			case 25:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1409;
				this.comp_if();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comp_for(): Comp_forContext {
		let localctx: Comp_forContext = new Comp_forContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, Python3Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9) {
				{
				this.state = 1412;
				this.match(Python3Parser.ASYNC);
				}
			}

			this.state = 1415;
			this.match(Python3Parser.FOR);
			this.state = 1416;
			this.exprlist();
			this.state = 1417;
			this.match(Python3Parser.IN);
			this.state = 1418;
			this.or_test();
			this.state = 1420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 37749248) !== 0)) {
				{
				this.state = 1419;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let localctx: Comp_ifContext = new Comp_ifContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, Python3Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1422;
			this.match(Python3Parser.IF);
			this.state = 1423;
			this.test_nocond();
			this.state = 1425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 37749248) !== 0)) {
				{
				this.state = 1424;
				this.comp_iter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public encoding_decl(): Encoding_declContext {
		let localctx: Encoding_declContext = new Encoding_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, Python3Parser.RULE_encoding_decl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1427;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let localctx: Yield_exprContext = new Yield_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, Python3Parser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1429;
			this.match(Python3Parser.YIELD);
			this.state = 1431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3767534616) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2168459425) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 99) !== 0)) {
				{
				this.state = 1430;
				this.yield_arg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yield_arg(): Yield_argContext {
		let localctx: Yield_argContext = new Yield_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, Python3Parser.RULE_yield_arg);
		try {
			this.state = 1436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1433;
				this.match(Python3Parser.FROM);
				this.state = 1434;
				this.test();
				}
				break;
			case 3:
			case 4:
			case 10:
			case 20:
			case 29:
			case 30:
			case 31:
			case 33:
			case 38:
			case 40:
			case 45:
			case 55:
			case 57:
			case 64:
			case 71:
			case 72:
			case 76:
			case 77:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1435;
				this.testlist();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public strings(): StringsContext {
		let localctx: StringsContext = new StringsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, Python3Parser.RULE_strings);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1438;
				this.match(Python3Parser.STRING);
				}
				}
				this.state = 1441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 61:
			return this.literal_pattern_sempred(localctx as Literal_patternContext, predIndex);
		case 62:
			return this.literal_expr_sempred(localctx as Literal_exprContext, predIndex);
		case 69:
			return this.pattern_capture_target_sempred(localctx as Pattern_capture_targetContext, predIndex);
		case 71:
			return this.value_pattern_sempred(localctx as Value_patternContext, predIndex);
		case 98:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private literal_pattern_sempred(localctx: Literal_patternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.CannotBePlusMinus() ;
		}
		return true;
	}
	private literal_expr_sempred(localctx: Literal_exprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  this.CannotBePlusMinus() ;
		}
		return true;
	}
	private pattern_capture_target_sempred(localctx: Pattern_capture_targetContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  this.CannotBeDotLpEq() ;
		}
		return true;
	}
	private value_pattern_sempred(localctx: Value_patternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return  this.CannotBeDotLpEq() ;
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 6);
		case 6:
			return this.precpred(this._ctx, 5);
		case 7:
			return this.precpred(this._ctx, 4);
		case 8:
			return this.precpred(this._ctx, 3);
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,102,1444,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,1,0,1,0,1,0,3,0,244,
	8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,253,8,1,1,2,1,2,5,2,257,8,2,10,2,12,
	2,260,9,2,1,2,1,2,1,3,1,3,5,3,266,8,3,10,3,12,3,269,9,3,1,3,1,3,1,4,1,4,
	1,4,1,4,3,4,277,8,4,1,4,3,4,280,8,4,1,4,1,4,1,5,4,5,285,8,5,11,5,12,5,286,
	1,6,1,6,1,6,1,6,3,6,293,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,303,8,8,
	1,8,1,8,1,8,1,9,1,9,3,9,310,8,9,1,9,1,9,1,10,1,10,1,10,3,10,317,8,10,1,
	10,1,10,1,10,1,10,3,10,323,8,10,5,10,325,8,10,10,10,12,10,328,9,10,1,10,
	1,10,1,10,3,10,333,8,10,1,10,1,10,1,10,1,10,3,10,339,8,10,5,10,341,8,10,
	10,10,12,10,344,9,10,1,10,1,10,1,10,1,10,3,10,350,8,10,3,10,352,8,10,3,
	10,354,8,10,1,10,1,10,1,10,3,10,359,8,10,3,10,361,8,10,3,10,363,8,10,1,
	10,1,10,3,10,367,8,10,1,10,1,10,1,10,1,10,3,10,373,8,10,5,10,375,8,10,10,
	10,12,10,378,9,10,1,10,1,10,1,10,1,10,3,10,384,8,10,3,10,386,8,10,3,10,
	388,8,10,1,10,1,10,1,10,3,10,393,8,10,3,10,395,8,10,1,11,1,11,1,11,3,11,
	400,8,11,1,12,1,12,1,12,3,12,405,8,12,1,12,1,12,1,12,1,12,3,12,411,8,12,
	5,12,413,8,12,10,12,12,12,416,9,12,1,12,1,12,1,12,3,12,421,8,12,1,12,1,
	12,1,12,1,12,3,12,427,8,12,5,12,429,8,12,10,12,12,12,432,9,12,1,12,1,12,
	1,12,1,12,3,12,438,8,12,3,12,440,8,12,3,12,442,8,12,1,12,1,12,1,12,3,12,
	447,8,12,3,12,449,8,12,3,12,451,8,12,1,12,1,12,3,12,455,8,12,1,12,1,12,
	1,12,1,12,3,12,461,8,12,5,12,463,8,12,10,12,12,12,466,9,12,1,12,1,12,1,
	12,1,12,3,12,472,8,12,3,12,474,8,12,3,12,476,8,12,1,12,1,12,1,12,3,12,481,
	8,12,3,12,483,8,12,1,13,1,13,1,14,1,14,3,14,489,8,14,1,15,1,15,1,15,5,15,
	494,8,15,10,15,12,15,497,9,15,1,15,3,15,500,8,15,1,15,1,15,1,16,1,16,1,
	16,1,16,1,16,1,16,1,16,1,16,3,16,512,8,16,1,17,1,17,1,17,1,17,1,17,3,17,
	519,8,17,1,17,1,17,1,17,3,17,524,8,17,5,17,526,8,17,10,17,12,17,529,9,17,
	3,17,531,8,17,1,18,1,18,1,18,1,18,3,18,537,8,18,1,19,1,19,3,19,541,8,19,
	1,19,1,19,1,19,3,19,546,8,19,5,19,548,8,19,10,19,12,19,551,9,19,1,19,3,
	19,554,8,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
	3,23,568,8,23,1,24,1,24,1,25,1,25,1,26,1,26,3,26,576,8,26,1,27,1,27,1,28,
	1,28,1,28,1,28,3,28,584,8,28,3,28,586,8,28,1,29,1,29,3,29,590,8,29,1,30,
	1,30,1,30,1,31,1,31,5,31,597,8,31,10,31,12,31,600,9,31,1,31,1,31,4,31,604,
	8,31,11,31,12,31,605,3,31,608,8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,
	31,617,8,31,1,32,1,32,1,32,3,32,622,8,32,1,33,1,33,1,33,3,33,627,8,33,1,
	34,1,34,1,34,5,34,632,8,34,10,34,12,34,635,9,34,1,34,3,34,638,8,34,1,35,
	1,35,1,35,5,35,643,8,35,10,35,12,35,646,9,35,1,36,1,36,1,36,5,36,651,8,
	36,10,36,12,36,654,9,36,1,37,1,37,1,37,1,37,5,37,660,8,37,10,37,12,37,663,
	9,37,1,38,1,38,1,38,1,38,5,38,669,8,38,10,38,12,38,672,9,38,1,39,1,39,1,
	39,1,39,3,39,678,8,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,
	3,40,690,8,40,1,41,1,41,1,41,1,41,3,41,696,8,41,1,42,1,42,1,42,1,42,1,42,
	1,42,1,42,1,42,1,42,5,42,707,8,42,10,42,12,42,710,9,42,1,42,1,42,1,42,3,
	42,715,8,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,724,8,43,1,44,1,44,
	1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,735,8,44,1,45,1,45,1,45,1,45,1,
	45,1,45,1,45,4,45,744,8,45,11,45,12,45,745,1,45,1,45,1,45,3,45,751,8,45,
	1,45,1,45,1,45,3,45,756,8,45,1,45,1,45,1,45,3,45,761,8,45,1,46,1,46,1,46,
	1,46,5,46,767,8,46,10,46,12,46,770,9,46,1,46,1,46,1,46,1,47,1,47,1,47,3,
	47,778,8,47,1,48,1,48,1,48,1,48,3,48,784,8,48,3,48,786,8,48,1,49,1,49,1,
	49,1,49,4,49,792,8,49,11,49,12,49,793,1,49,1,49,3,49,798,8,49,1,50,1,50,
	1,50,1,50,1,50,1,50,4,50,806,8,50,11,50,12,50,807,1,50,1,50,1,51,1,51,1,
	51,3,51,815,8,51,1,51,3,51,818,8,51,1,52,1,52,4,52,822,8,52,11,52,12,52,
	823,1,52,3,52,827,8,52,1,53,1,53,1,53,3,53,832,8,53,1,54,1,54,1,54,3,54,
	837,8,54,1,54,1,54,1,54,1,55,1,55,1,55,1,56,1,56,3,56,847,8,56,1,57,1,57,
	3,57,851,8,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,5,59,860,8,59,10,59,12,
	59,863,9,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,873,8,60,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,883,8,61,1,62,1,62,1,62,1,62,1,
	62,1,62,1,62,1,62,3,62,893,8,62,1,63,1,63,1,63,1,63,1,63,1,63,1,63,1,63,
	3,63,903,8,63,1,64,1,64,1,64,3,64,908,8,64,1,65,1,65,1,65,3,65,913,8,65,
	1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,69,1,70,1,70,1,71,1,71,1,71,1,
	72,1,72,1,72,4,72,932,8,72,11,72,12,72,933,1,73,1,73,3,73,938,8,73,1,74,
	1,74,1,74,1,74,1,75,1,75,3,75,946,8,75,1,75,1,75,1,75,3,75,951,8,75,1,75,
	3,75,954,8,75,1,76,1,76,1,76,3,76,959,8,76,1,77,1,77,1,77,5,77,964,8,77,
	10,77,12,77,967,9,77,1,77,3,77,970,8,77,1,78,1,78,3,78,974,8,78,1,79,1,
	79,1,79,1,79,3,79,980,8,79,1,80,1,80,1,80,1,80,1,80,3,80,987,8,80,1,80,
	1,80,1,80,1,80,1,80,1,80,1,80,3,80,996,8,80,1,80,1,80,1,80,1,80,1,80,3,
	80,1003,8,80,1,80,1,80,3,80,1007,8,80,1,81,1,81,1,81,5,81,1012,8,81,10,
	81,12,81,1015,9,81,1,82,1,82,3,82,1019,8,82,1,82,1,82,1,82,1,83,1,83,1,
	83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,84,1035,8,84,1,84,1,84,1,84,
	1,84,1,84,1,84,3,84,1043,8,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,84,3,
	84,1053,8,84,1,84,1,84,3,84,1057,8,84,1,85,1,85,1,85,5,85,1062,8,85,10,
	85,12,85,1065,9,85,1,86,1,86,1,86,5,86,1070,8,86,10,86,12,86,1073,9,86,
	1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1085,8,88,1,88,3,
	88,1088,8,88,1,89,1,89,3,89,1092,8,89,1,90,1,90,3,90,1096,8,90,1,90,1,90,
	1,90,1,91,1,91,3,91,1103,8,91,1,91,1,91,1,91,1,92,1,92,1,92,5,92,1111,8,
	92,10,92,12,92,1114,9,92,1,93,1,93,1,93,5,93,1119,8,93,10,93,12,93,1122,
	9,93,1,94,1,94,1,94,3,94,1127,8,94,1,95,1,95,1,95,1,95,5,95,1133,8,95,10,
	95,12,95,1136,9,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,
	96,1,96,1,96,3,96,1151,8,96,1,97,1,97,1,97,1,98,1,98,1,98,4,98,1159,8,98,
	11,98,12,98,1160,1,98,3,98,1164,8,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,
	1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,5,
	98,1187,8,98,10,98,12,98,1190,9,98,1,99,3,99,1193,8,99,1,99,1,99,5,99,1197,
	8,99,10,99,12,99,1200,9,99,1,100,1,100,1,100,3,100,1205,8,100,1,100,1,100,
	1,100,3,100,1210,8,100,1,100,1,100,1,100,3,100,1215,8,100,1,100,1,100,1,
	100,1,100,4,100,1221,8,100,11,100,12,100,1222,1,100,1,100,1,100,1,100,3,
	100,1229,8,100,1,101,1,101,1,102,1,102,3,102,1235,8,102,1,102,1,102,1,102,
	1,102,3,102,1241,8,102,5,102,1243,8,102,10,102,12,102,1246,9,102,1,102,
	3,102,1249,8,102,3,102,1251,8,102,1,103,1,103,3,103,1255,8,103,1,103,1,
	103,1,103,1,103,1,103,1,103,1,103,3,103,1264,8,103,1,104,1,104,1,104,5,
	104,1269,8,104,10,104,12,104,1272,9,104,1,104,3,104,1275,8,104,1,105,1,
	105,3,105,1279,8,105,1,105,1,105,3,105,1283,8,105,1,105,3,105,1286,8,105,
	3,105,1288,8,105,1,106,1,106,3,106,1292,8,106,1,107,1,107,3,107,1296,8,
	107,1,107,1,107,1,107,3,107,1301,8,107,5,107,1303,8,107,10,107,12,107,1306,
	9,107,1,107,3,107,1309,8,107,1,108,1,108,1,108,5,108,1314,8,108,10,108,
	12,108,1317,9,108,1,108,3,108,1320,8,108,1,109,1,109,1,109,1,109,1,109,
	1,109,3,109,1328,8,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
	3,109,1338,8,109,5,109,1340,8,109,10,109,12,109,1343,9,109,1,109,3,109,
	1346,8,109,3,109,1348,8,109,1,109,1,109,3,109,1352,8,109,1,109,1,109,1,
	109,1,109,3,109,1358,8,109,5,109,1360,8,109,10,109,12,109,1363,9,109,1,
	109,3,109,1366,8,109,3,109,1368,8,109,3,109,1370,8,109,1,110,1,110,1,110,
	1,110,3,110,1376,8,110,1,110,3,110,1379,8,110,1,110,1,110,1,110,1,111,1,
	111,1,111,5,111,1387,8,111,10,111,12,111,1390,9,111,1,111,3,111,1393,8,
	111,1,112,1,112,3,112,1397,8,112,1,112,1,112,1,112,1,112,1,112,1,112,1,
	112,1,112,3,112,1407,8,112,1,113,1,113,3,113,1411,8,113,1,114,3,114,1414,
	8,114,1,114,1,114,1,114,1,114,1,114,3,114,1421,8,114,1,115,1,115,1,115,
	3,115,1426,8,115,1,116,1,116,1,117,1,117,3,117,1432,8,117,1,118,1,118,1,
	118,3,118,1437,8,118,1,119,4,119,1440,8,119,11,119,12,119,1441,1,119,0,
	1,196,120,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
	44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
	92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,
	130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
	166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,
	202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,
	238,0,7,1,0,88,100,1,0,54,55,2,0,71,72,76,76,3,0,56,56,73,75,86,86,1,0,
	71,72,1,0,69,70,3,0,30,30,40,40,45,45,1597,0,243,1,0,0,0,2,252,1,0,0,0,
	4,258,1,0,0,0,6,263,1,0,0,0,8,272,1,0,0,0,10,284,1,0,0,0,12,288,1,0,0,0,
	14,294,1,0,0,0,16,297,1,0,0,0,18,307,1,0,0,0,20,394,1,0,0,0,22,396,1,0,
	0,0,24,482,1,0,0,0,26,484,1,0,0,0,28,488,1,0,0,0,30,490,1,0,0,0,32,511,
	1,0,0,0,34,513,1,0,0,0,36,532,1,0,0,0,38,540,1,0,0,0,40,555,1,0,0,0,42,
	557,1,0,0,0,44,560,1,0,0,0,46,567,1,0,0,0,48,569,1,0,0,0,50,571,1,0,0,0,
	52,573,1,0,0,0,54,577,1,0,0,0,56,579,1,0,0,0,58,589,1,0,0,0,60,591,1,0,
	0,0,62,594,1,0,0,0,64,618,1,0,0,0,66,623,1,0,0,0,68,628,1,0,0,0,70,639,
	1,0,0,0,72,647,1,0,0,0,74,655,1,0,0,0,76,664,1,0,0,0,78,673,1,0,0,0,80,
	689,1,0,0,0,82,691,1,0,0,0,84,697,1,0,0,0,86,716,1,0,0,0,88,725,1,0,0,0,
	90,736,1,0,0,0,92,762,1,0,0,0,94,774,1,0,0,0,96,779,1,0,0,0,98,797,1,0,
	0,0,100,799,1,0,0,0,102,817,1,0,0,0,104,819,1,0,0,0,106,831,1,0,0,0,108,
	833,1,0,0,0,110,841,1,0,0,0,112,846,1,0,0,0,114,850,1,0,0,0,116,852,1,0,
	0,0,118,856,1,0,0,0,120,872,1,0,0,0,122,882,1,0,0,0,124,892,1,0,0,0,126,
	902,1,0,0,0,128,907,1,0,0,0,130,912,1,0,0,0,132,914,1,0,0,0,134,916,1,0,
	0,0,136,918,1,0,0,0,138,920,1,0,0,0,140,923,1,0,0,0,142,925,1,0,0,0,144,
	928,1,0,0,0,146,937,1,0,0,0,148,939,1,0,0,0,150,953,1,0,0,0,152,955,1,0,
	0,0,154,960,1,0,0,0,156,973,1,0,0,0,158,979,1,0,0,0,160,1006,1,0,0,0,162,
	1008,1,0,0,0,164,1018,1,0,0,0,166,1023,1,0,0,0,168,1056,1,0,0,0,170,1058,
	1,0,0,0,172,1066,1,0,0,0,174,1074,1,0,0,0,176,1087,1,0,0,0,178,1091,1,0,
	0,0,180,1093,1,0,0,0,182,1100,1,0,0,0,184,1107,1,0,0,0,186,1115,1,0,0,0,
	188,1126,1,0,0,0,190,1128,1,0,0,0,192,1150,1,0,0,0,194,1152,1,0,0,0,196,
	1163,1,0,0,0,198,1192,1,0,0,0,200,1228,1,0,0,0,202,1230,1,0,0,0,204,1234,
	1,0,0,0,206,1263,1,0,0,0,208,1265,1,0,0,0,210,1287,1,0,0,0,212,1289,1,0,
	0,0,214,1295,1,0,0,0,216,1310,1,0,0,0,218,1369,1,0,0,0,220,1371,1,0,0,0,
	222,1383,1,0,0,0,224,1406,1,0,0,0,226,1410,1,0,0,0,228,1413,1,0,0,0,230,
	1422,1,0,0,0,232,1427,1,0,0,0,234,1429,1,0,0,0,236,1436,1,0,0,0,238,1439,
	1,0,0,0,240,244,3,2,1,0,241,244,3,4,2,0,242,244,3,6,3,0,243,240,1,0,0,0,
	243,241,1,0,0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,
	5,0,0,1,246,1,1,0,0,0,247,253,5,44,0,0,248,253,3,30,15,0,249,250,3,80,40,
	0,250,251,5,44,0,0,251,253,1,0,0,0,252,247,1,0,0,0,252,248,1,0,0,0,252,
	249,1,0,0,0,253,3,1,0,0,0,254,257,5,44,0,0,255,257,3,28,14,0,256,254,1,
	0,0,0,256,255,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,
	261,1,0,0,0,260,258,1,0,0,0,261,262,5,0,0,1,262,5,1,0,0,0,263,267,3,216,
	108,0,264,266,5,44,0,0,265,264,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,
	267,268,1,0,0,0,268,270,1,0,0,0,269,267,1,0,0,0,270,271,5,0,0,1,271,7,1,
	0,0,0,272,273,5,86,0,0,273,279,3,72,36,0,274,276,5,57,0,0,275,277,3,222,
	111,0,276,275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,280,5,58,0,0,
	279,274,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,282,5,44,0,0,282,9,
	1,0,0,0,283,285,3,8,4,0,284,283,1,0,0,0,285,286,1,0,0,0,286,284,1,0,0,0,
	286,287,1,0,0,0,287,11,1,0,0,0,288,292,3,10,5,0,289,293,3,220,110,0,290,
	293,3,16,8,0,291,293,3,14,7,0,292,289,1,0,0,0,292,290,1,0,0,0,292,291,1,
	0,0,0,293,13,1,0,0,0,294,295,5,9,0,0,295,296,3,16,8,0,296,15,1,0,0,0,297,
	298,5,15,0,0,298,299,3,202,101,0,299,302,3,18,9,0,300,301,5,87,0,0,301,
	303,3,176,88,0,302,300,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,305,
	5,60,0,0,305,306,3,98,49,0,306,17,1,0,0,0,307,309,5,57,0,0,308,310,3,20,
	10,0,309,308,1,0,0,0,309,310,1,0,0,0,310,311,1,0,0,0,311,312,5,58,0,0,312,
	19,1,0,0,0,313,316,3,22,11,0,314,315,5,63,0,0,315,317,3,176,88,0,316,314,
	1,0,0,0,316,317,1,0,0,0,317,326,1,0,0,0,318,319,5,59,0,0,319,322,3,22,11,
	0,320,321,5,63,0,0,321,323,3,176,88,0,322,320,1,0,0,0,322,323,1,0,0,0,323,
	325,1,0,0,0,324,318,1,0,0,0,325,328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,
	0,0,327,362,1,0,0,0,328,326,1,0,0,0,329,360,5,59,0,0,330,332,5,56,0,0,331,
	333,3,22,11,0,332,331,1,0,0,0,332,333,1,0,0,0,333,342,1,0,0,0,334,335,5,
	59,0,0,335,338,3,22,11,0,336,337,5,63,0,0,337,339,3,176,88,0,338,336,1,
	0,0,0,338,339,1,0,0,0,339,341,1,0,0,0,340,334,1,0,0,0,341,344,1,0,0,0,342,
	340,1,0,0,0,342,343,1,0,0,0,343,353,1,0,0,0,344,342,1,0,0,0,345,351,5,59,
	0,0,346,347,5,62,0,0,347,349,3,22,11,0,348,350,5,59,0,0,349,348,1,0,0,0,
	349,350,1,0,0,0,350,352,1,0,0,0,351,346,1,0,0,0,351,352,1,0,0,0,352,354,
	1,0,0,0,353,345,1,0,0,0,353,354,1,0,0,0,354,361,1,0,0,0,355,356,5,62,0,
	0,356,358,3,22,11,0,357,359,5,59,0,0,358,357,1,0,0,0,358,359,1,0,0,0,359,
	361,1,0,0,0,360,330,1,0,0,0,360,355,1,0,0,0,360,361,1,0,0,0,361,363,1,0,
	0,0,362,329,1,0,0,0,362,363,1,0,0,0,363,395,1,0,0,0,364,366,5,56,0,0,365,
	367,3,22,11,0,366,365,1,0,0,0,366,367,1,0,0,0,367,376,1,0,0,0,368,369,5,
	59,0,0,369,372,3,22,11,0,370,371,5,63,0,0,371,373,3,176,88,0,372,370,1,
	0,0,0,372,373,1,0,0,0,373,375,1,0,0,0,374,368,1,0,0,0,375,378,1,0,0,0,376,
	374,1,0,0,0,376,377,1,0,0,0,377,387,1,0,0,0,378,376,1,0,0,0,379,385,5,59,
	0,0,380,381,5,62,0,0,381,383,3,22,11,0,382,384,5,59,0,0,383,382,1,0,0,0,
	383,384,1,0,0,0,384,386,1,0,0,0,385,380,1,0,0,0,385,386,1,0,0,0,386,388,
	1,0,0,0,387,379,1,0,0,0,387,388,1,0,0,0,388,395,1,0,0,0,389,390,5,62,0,
	0,390,392,3,22,11,0,391,393,5,59,0,0,392,391,1,0,0,0,392,393,1,0,0,0,393,
	395,1,0,0,0,394,313,1,0,0,0,394,364,1,0,0,0,394,389,1,0,0,0,395,21,1,0,
	0,0,396,399,3,202,101,0,397,398,5,60,0,0,398,400,3,176,88,0,399,397,1,0,
	0,0,399,400,1,0,0,0,400,23,1,0,0,0,401,404,3,26,13,0,402,403,5,63,0,0,403,
	405,3,176,88,0,404,402,1,0,0,0,404,405,1,0,0,0,405,414,1,0,0,0,406,407,
	5,59,0,0,407,410,3,26,13,0,408,409,5,63,0,0,409,411,3,176,88,0,410,408,
	1,0,0,0,410,411,1,0,0,0,411,413,1,0,0,0,412,406,1,0,0,0,413,416,1,0,0,0,
	414,412,1,0,0,0,414,415,1,0,0,0,415,450,1,0,0,0,416,414,1,0,0,0,417,448,
	5,59,0,0,418,420,5,56,0,0,419,421,3,26,13,0,420,419,1,0,0,0,420,421,1,0,
	0,0,421,430,1,0,0,0,422,423,5,59,0,0,423,426,3,26,13,0,424,425,5,63,0,0,
	425,427,3,176,88,0,426,424,1,0,0,0,426,427,1,0,0,0,427,429,1,0,0,0,428,
	422,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,430,431,1,0,0,0,431,441,1,0,
	0,0,432,430,1,0,0,0,433,439,5,59,0,0,434,435,5,62,0,0,435,437,3,26,13,0,
	436,438,5,59,0,0,437,436,1,0,0,0,437,438,1,0,0,0,438,440,1,0,0,0,439,434,
	1,0,0,0,439,440,1,0,0,0,440,442,1,0,0,0,441,433,1,0,0,0,441,442,1,0,0,0,
	442,449,1,0,0,0,443,444,5,62,0,0,444,446,3,26,13,0,445,447,5,59,0,0,446,
	445,1,0,0,0,446,447,1,0,0,0,447,449,1,0,0,0,448,418,1,0,0,0,448,443,1,0,
	0,0,448,449,1,0,0,0,449,451,1,0,0,0,450,417,1,0,0,0,450,451,1,0,0,0,451,
	483,1,0,0,0,452,454,5,56,0,0,453,455,3,26,13,0,454,453,1,0,0,0,454,455,
	1,0,0,0,455,464,1,0,0,0,456,457,5,59,0,0,457,460,3,26,13,0,458,459,5,63,
	0,0,459,461,3,176,88,0,460,458,1,0,0,0,460,461,1,0,0,0,461,463,1,0,0,0,
	462,456,1,0,0,0,463,466,1,0,0,0,464,462,1,0,0,0,464,465,1,0,0,0,465,475,
	1,0,0,0,466,464,1,0,0,0,467,473,5,59,0,0,468,469,5,62,0,0,469,471,3,26,
	13,0,470,472,5,59,0,0,471,470,1,0,0,0,471,472,1,0,0,0,472,474,1,0,0,0,473,
	468,1,0,0,0,473,474,1,0,0,0,474,476,1,0,0,0,475,467,1,0,0,0,475,476,1,0,
	0,0,476,483,1,0,0,0,477,478,5,62,0,0,478,480,3,26,13,0,479,481,5,59,0,0,
	480,479,1,0,0,0,480,481,1,0,0,0,481,483,1,0,0,0,482,401,1,0,0,0,482,452,
	1,0,0,0,482,477,1,0,0,0,483,25,1,0,0,0,484,485,3,202,101,0,485,27,1,0,0,
	0,486,489,3,30,15,0,487,489,3,80,40,0,488,486,1,0,0,0,488,487,1,0,0,0,489,
	29,1,0,0,0,490,495,3,32,16,0,491,492,5,61,0,0,492,494,3,32,16,0,493,491,
	1,0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,499,1,0,0,0,
	497,495,1,0,0,0,498,500,5,61,0,0,499,498,1,0,0,0,499,500,1,0,0,0,500,501,
	1,0,0,0,501,502,5,44,0,0,502,31,1,0,0,0,503,512,3,34,17,0,504,512,3,42,
	21,0,505,512,3,44,22,0,506,512,3,46,23,0,507,512,3,58,29,0,508,512,3,74,
	37,0,509,512,3,76,38,0,510,512,3,78,39,0,511,503,1,0,0,0,511,504,1,0,0,
	0,511,505,1,0,0,0,511,506,1,0,0,0,511,507,1,0,0,0,511,508,1,0,0,0,511,509,
	1,0,0,0,511,510,1,0,0,0,512,33,1,0,0,0,513,530,3,38,19,0,514,531,3,36,18,
	0,515,518,3,40,20,0,516,519,3,234,117,0,517,519,3,216,108,0,518,516,1,0,
	0,0,518,517,1,0,0,0,519,531,1,0,0,0,520,523,5,63,0,0,521,524,3,234,117,
	0,522,524,3,38,19,0,523,521,1,0,0,0,523,522,1,0,0,0,524,526,1,0,0,0,525,
	520,1,0,0,0,526,529,1,0,0,0,527,525,1,0,0,0,527,528,1,0,0,0,528,531,1,0,
	0,0,529,527,1,0,0,0,530,514,1,0,0,0,530,515,1,0,0,0,530,527,1,0,0,0,531,
	35,1,0,0,0,532,533,5,60,0,0,533,536,3,176,88,0,534,535,5,63,0,0,535,537,
	3,176,88,0,536,534,1,0,0,0,536,537,1,0,0,0,537,37,1,0,0,0,538,541,3,176,
	88,0,539,541,3,194,97,0,540,538,1,0,0,0,540,539,1,0,0,0,541,549,1,0,0,0,
	542,545,5,59,0,0,543,546,3,176,88,0,544,546,3,194,97,0,545,543,1,0,0,0,
	545,544,1,0,0,0,546,548,1,0,0,0,547,542,1,0,0,0,548,551,1,0,0,0,549,547,
	1,0,0,0,549,550,1,0,0,0,550,553,1,0,0,0,551,549,1,0,0,0,552,554,5,59,0,
	0,553,552,1,0,0,0,553,554,1,0,0,0,554,39,1,0,0,0,555,556,7,0,0,0,556,41,
	1,0,0,0,557,558,5,16,0,0,558,559,3,214,107,0,559,43,1,0,0,0,560,561,5,35,
	0,0,561,45,1,0,0,0,562,568,3,48,24,0,563,568,3,50,25,0,564,568,3,52,26,
	0,565,568,3,56,28,0,566,568,3,54,27,0,567,562,1,0,0,0,567,563,1,0,0,0,567,
	564,1,0,0,0,567,565,1,0,0,0,567,566,1,0,0,0,568,47,1,0,0,0,569,570,5,11,
	0,0,570,49,1,0,0,0,571,572,5,14,0,0,572,51,1,0,0,0,573,575,5,37,0,0,574,
	576,3,216,108,0,575,574,1,0,0,0,575,576,1,0,0,0,576,53,1,0,0,0,577,578,
	3,234,117,0,578,55,1,0,0,0,579,585,5,36,0,0,580,583,3,176,88,0,581,582,
	5,23,0,0,582,584,3,176,88,0,583,581,1,0,0,0,583,584,1,0,0,0,584,586,1,0,
	0,0,585,580,1,0,0,0,585,586,1,0,0,0,586,57,1,0,0,0,587,590,3,60,30,0,588,
	590,3,62,31,0,589,587,1,0,0,0,589,588,1,0,0,0,590,59,1,0,0,0,591,592,5,
	26,0,0,592,593,3,70,35,0,593,61,1,0,0,0,594,607,5,23,0,0,595,597,7,1,0,
	0,596,595,1,0,0,0,597,600,1,0,0,0,598,596,1,0,0,0,598,599,1,0,0,0,599,601,
	1,0,0,0,600,598,1,0,0,0,601,608,3,72,36,0,602,604,7,1,0,0,603,602,1,0,0,
	0,604,605,1,0,0,0,605,603,1,0,0,0,605,606,1,0,0,0,606,608,1,0,0,0,607,598,
	1,0,0,0,607,603,1,0,0,0,608,609,1,0,0,0,609,616,5,26,0,0,610,617,5,56,0,
	0,611,612,5,57,0,0,612,613,3,68,34,0,613,614,5,58,0,0,614,617,1,0,0,0,615,
	617,3,68,34,0,616,610,1,0,0,0,616,611,1,0,0,0,616,615,1,0,0,0,617,63,1,
	0,0,0,618,621,3,202,101,0,619,620,5,7,0,0,620,622,3,202,101,0,621,619,1,
	0,0,0,621,622,1,0,0,0,622,65,1,0,0,0,623,626,3,72,36,0,624,625,5,7,0,0,
	625,627,3,202,101,0,626,624,1,0,0,0,626,627,1,0,0,0,627,67,1,0,0,0,628,
	633,3,64,32,0,629,630,5,59,0,0,630,632,3,64,32,0,631,629,1,0,0,0,632,635,
	1,0,0,0,633,631,1,0,0,0,633,634,1,0,0,0,634,637,1,0,0,0,635,633,1,0,0,0,
	636,638,5,59,0,0,637,636,1,0,0,0,637,638,1,0,0,0,638,69,1,0,0,0,639,644,
	3,66,33,0,640,641,5,59,0,0,641,643,3,66,33,0,642,640,1,0,0,0,643,646,1,
	0,0,0,644,642,1,0,0,0,644,645,1,0,0,0,645,71,1,0,0,0,646,644,1,0,0,0,647,
	652,3,202,101,0,648,649,5,54,0,0,649,651,3,202,101,0,650,648,1,0,0,0,651,
	654,1,0,0,0,652,650,1,0,0,0,652,653,1,0,0,0,653,73,1,0,0,0,654,652,1,0,
	0,0,655,656,5,24,0,0,656,661,3,202,101,0,657,658,5,59,0,0,658,660,3,202,
	101,0,659,657,1,0,0,0,660,663,1,0,0,0,661,659,1,0,0,0,661,662,1,0,0,0,662,
	75,1,0,0,0,663,661,1,0,0,0,664,665,5,32,0,0,665,670,3,202,101,0,666,667,
	5,59,0,0,667,669,3,202,101,0,668,666,1,0,0,0,669,672,1,0,0,0,670,668,1,
	0,0,0,670,671,1,0,0,0,671,77,1,0,0,0,672,670,1,0,0,0,673,674,5,8,0,0,674,
	677,3,176,88,0,675,676,5,59,0,0,676,678,3,176,88,0,677,675,1,0,0,0,677,
	678,1,0,0,0,678,79,1,0,0,0,679,690,3,84,42,0,680,690,3,86,43,0,681,690,
	3,88,44,0,682,690,3,90,45,0,683,690,3,92,46,0,684,690,3,16,8,0,685,690,
	3,220,110,0,686,690,3,12,6,0,687,690,3,82,41,0,688,690,3,100,50,0,689,679,
	1,0,0,0,689,680,1,0,0,0,689,681,1,0,0,0,689,682,1,0,0,0,689,683,1,0,0,0,
	689,684,1,0,0,0,689,685,1,0,0,0,689,686,1,0,0,0,689,687,1,0,0,0,689,688,
	1,0,0,0,690,81,1,0,0,0,691,695,5,9,0,0,692,696,3,16,8,0,693,696,3,92,46,
	0,694,696,3,88,44,0,695,692,1,0,0,0,695,693,1,0,0,0,695,694,1,0,0,0,696,
	83,1,0,0,0,697,698,5,25,0,0,698,699,3,176,88,0,699,700,5,60,0,0,700,708,
	3,98,49,0,701,702,5,17,0,0,702,703,3,176,88,0,703,704,5,60,0,0,704,705,
	3,98,49,0,705,707,1,0,0,0,706,701,1,0,0,0,707,710,1,0,0,0,708,706,1,0,0,
	0,708,709,1,0,0,0,709,714,1,0,0,0,710,708,1,0,0,0,711,712,5,18,0,0,712,
	713,5,60,0,0,713,715,3,98,49,0,714,711,1,0,0,0,714,715,1,0,0,0,715,85,1,
	0,0,0,716,717,5,41,0,0,717,718,3,176,88,0,718,719,5,60,0,0,719,723,3,98,
	49,0,720,721,5,18,0,0,721,722,5,60,0,0,722,724,3,98,49,0,723,720,1,0,0,
	0,723,724,1,0,0,0,724,87,1,0,0,0,725,726,5,22,0,0,726,727,3,214,107,0,727,
	728,5,27,0,0,728,729,3,216,108,0,729,730,5,60,0,0,730,734,3,98,49,0,731,
	732,5,18,0,0,732,733,5,60,0,0,733,735,3,98,49,0,734,731,1,0,0,0,734,735,
	1,0,0,0,735,89,1,0,0,0,736,737,5,39,0,0,737,738,5,60,0,0,738,760,3,98,49,
	0,739,740,3,96,48,0,740,741,5,60,0,0,741,742,3,98,49,0,742,744,1,0,0,0,
	743,739,1,0,0,0,744,745,1,0,0,0,745,743,1,0,0,0,745,746,1,0,0,0,746,750,
	1,0,0,0,747,748,5,18,0,0,748,749,5,60,0,0,749,751,3,98,49,0,750,747,1,0,
	0,0,750,751,1,0,0,0,751,755,1,0,0,0,752,753,5,21,0,0,753,754,5,60,0,0,754,
	756,3,98,49,0,755,752,1,0,0,0,755,756,1,0,0,0,756,761,1,0,0,0,757,758,5,
	21,0,0,758,759,5,60,0,0,759,761,3,98,49,0,760,743,1,0,0,0,760,757,1,0,0,
	0,761,91,1,0,0,0,762,763,5,42,0,0,763,768,3,94,47,0,764,765,5,59,0,0,765,
	767,3,94,47,0,766,764,1,0,0,0,767,770,1,0,0,0,768,766,1,0,0,0,768,769,1,
	0,0,0,769,771,1,0,0,0,770,768,1,0,0,0,771,772,5,60,0,0,772,773,3,98,49,
	0,773,93,1,0,0,0,774,777,3,176,88,0,775,776,5,7,0,0,776,778,3,196,98,0,
	777,775,1,0,0,0,777,778,1,0,0,0,778,95,1,0,0,0,779,785,5,19,0,0,780,783,
	3,176,88,0,781,782,5,7,0,0,782,784,3,202,101,0,783,781,1,0,0,0,783,784,
	1,0,0,0,784,786,1,0,0,0,785,780,1,0,0,0,785,786,1,0,0,0,786,97,1,0,0,0,
	787,798,3,30,15,0,788,789,5,44,0,0,789,791,5,1,0,0,790,792,3,28,14,0,791,
	790,1,0,0,0,792,793,1,0,0,0,793,791,1,0,0,0,793,794,1,0,0,0,794,795,1,0,
	0,0,795,796,5,2,0,0,796,798,1,0,0,0,797,787,1,0,0,0,797,788,1,0,0,0,798,
	99,1,0,0,0,799,800,5,30,0,0,800,801,3,102,51,0,801,802,5,60,0,0,802,803,
	5,44,0,0,803,805,5,1,0,0,804,806,3,108,54,0,805,804,1,0,0,0,806,807,1,0,
	0,0,807,805,1,0,0,0,807,808,1,0,0,0,808,809,1,0,0,0,809,810,5,2,0,0,810,
	101,1,0,0,0,811,812,3,106,53,0,812,814,5,59,0,0,813,815,3,104,52,0,814,
	813,1,0,0,0,814,815,1,0,0,0,815,818,1,0,0,0,816,818,3,176,88,0,817,811,
	1,0,0,0,817,816,1,0,0,0,818,103,1,0,0,0,819,821,5,59,0,0,820,822,3,106,
	53,0,821,820,1,0,0,0,822,823,1,0,0,0,823,821,1,0,0,0,823,824,1,0,0,0,824,
	826,1,0,0,0,825,827,5,59,0,0,826,825,1,0,0,0,826,827,1,0,0,0,827,105,1,
	0,0,0,828,829,5,56,0,0,829,832,3,196,98,0,830,832,3,176,88,0,831,828,1,
	0,0,0,831,830,1,0,0,0,832,107,1,0,0,0,833,834,5,12,0,0,834,836,3,112,56,
	0,835,837,3,110,55,0,836,835,1,0,0,0,836,837,1,0,0,0,837,838,1,0,0,0,838,
	839,5,60,0,0,839,840,3,98,49,0,840,109,1,0,0,0,841,842,5,25,0,0,842,843,
	3,176,88,0,843,111,1,0,0,0,844,847,3,152,76,0,845,847,3,114,57,0,846,844,
	1,0,0,0,846,845,1,0,0,0,847,113,1,0,0,0,848,851,3,116,58,0,849,851,3,118,
	59,0,850,848,1,0,0,0,850,849,1,0,0,0,851,115,1,0,0,0,852,853,3,118,59,0,
	853,854,5,7,0,0,854,855,3,138,69,0,855,117,1,0,0,0,856,861,3,120,60,0,857,
	858,5,66,0,0,858,860,3,120,60,0,859,857,1,0,0,0,860,863,1,0,0,0,861,859,
	1,0,0,0,861,862,1,0,0,0,862,119,1,0,0,0,863,861,1,0,0,0,864,873,3,122,61,
	0,865,873,3,136,68,0,866,873,3,140,70,0,867,873,3,142,71,0,868,873,3,148,
	74,0,869,873,3,150,75,0,870,873,3,160,80,0,871,873,3,168,84,0,872,864,1,
	0,0,0,872,865,1,0,0,0,872,866,1,0,0,0,872,867,1,0,0,0,872,868,1,0,0,0,872,
	869,1,0,0,0,872,870,1,0,0,0,872,871,1,0,0,0,873,121,1,0,0,0,874,875,3,128,
	64,0,875,876,4,61,0,0,876,883,1,0,0,0,877,883,3,126,63,0,878,883,3,238,
	119,0,879,883,5,31,0,0,880,883,5,38,0,0,881,883,5,20,0,0,882,874,1,0,0,
	0,882,877,1,0,0,0,882,878,1,0,0,0,882,879,1,0,0,0,882,880,1,0,0,0,882,881,
	1,0,0,0,883,123,1,0,0,0,884,885,3,128,64,0,885,886,4,62,1,0,886,893,1,0,
	0,0,887,893,3,126,63,0,888,893,3,238,119,0,889,893,5,31,0,0,890,893,5,38,
	0,0,891,893,5,20,0,0,892,884,1,0,0,0,892,887,1,0,0,0,892,888,1,0,0,0,892,
	889,1,0,0,0,892,890,1,0,0,0,892,891,1,0,0,0,893,125,1,0,0,0,894,895,3,130,
	65,0,895,896,5,71,0,0,896,897,3,134,67,0,897,903,1,0,0,0,898,899,3,130,
	65,0,899,900,5,72,0,0,900,901,3,134,67,0,901,903,1,0,0,0,902,894,1,0,0,
	0,902,898,1,0,0,0,903,127,1,0,0,0,904,908,5,4,0,0,905,906,5,72,0,0,906,
	908,5,4,0,0,907,904,1,0,0,0,907,905,1,0,0,0,908,129,1,0,0,0,909,913,3,132,
	66,0,910,911,5,72,0,0,911,913,3,132,66,0,912,909,1,0,0,0,912,910,1,0,0,
	0,913,131,1,0,0,0,914,915,5,4,0,0,915,133,1,0,0,0,916,917,5,4,0,0,917,135,
	1,0,0,0,918,919,3,138,69,0,919,137,1,0,0,0,920,921,3,202,101,0,921,922,
	4,69,2,0,922,139,1,0,0,0,923,924,5,40,0,0,924,141,1,0,0,0,925,926,3,144,
	72,0,926,927,4,71,3,0,927,143,1,0,0,0,928,931,3,202,101,0,929,930,5,54,
	0,0,930,932,3,202,101,0,931,929,1,0,0,0,932,933,1,0,0,0,933,931,1,0,0,0,
	933,934,1,0,0,0,934,145,1,0,0,0,935,938,3,144,72,0,936,938,3,202,101,0,
	937,935,1,0,0,0,937,936,1,0,0,0,938,147,1,0,0,0,939,940,5,57,0,0,940,941,
	3,114,57,0,941,942,5,58,0,0,942,149,1,0,0,0,943,945,5,64,0,0,944,946,3,
	154,77,0,945,944,1,0,0,0,945,946,1,0,0,0,946,947,1,0,0,0,947,954,5,65,0,
	0,948,950,5,57,0,0,949,951,3,152,76,0,950,949,1,0,0,0,950,951,1,0,0,0,951,
	952,1,0,0,0,952,954,5,58,0,0,953,943,1,0,0,0,953,948,1,0,0,0,954,151,1,
	0,0,0,955,956,3,156,78,0,956,958,5,59,0,0,957,959,3,154,77,0,958,957,1,
	0,0,0,958,959,1,0,0,0,959,153,1,0,0,0,960,965,3,156,78,0,961,962,5,59,0,
	0,962,964,3,156,78,0,963,961,1,0,0,0,964,967,1,0,0,0,965,963,1,0,0,0,965,
	966,1,0,0,0,966,969,1,0,0,0,967,965,1,0,0,0,968,970,5,59,0,0,969,968,1,
	0,0,0,969,970,1,0,0,0,970,155,1,0,0,0,971,974,3,158,79,0,972,974,3,114,
	57,0,973,971,1,0,0,0,973,972,1,0,0,0,974,157,1,0,0,0,975,976,5,56,0,0,976,
	980,3,138,69,0,977,978,5,56,0,0,978,980,3,140,70,0,979,975,1,0,0,0,979,
	977,1,0,0,0,980,159,1,0,0,0,981,982,5,77,0,0,982,1007,5,78,0,0,983,984,
	5,77,0,0,984,986,3,166,83,0,985,987,5,59,0,0,986,985,1,0,0,0,986,987,1,
	0,0,0,987,988,1,0,0,0,988,989,5,78,0,0,989,1007,1,0,0,0,990,991,5,77,0,
	0,991,992,3,162,81,0,992,993,5,59,0,0,993,995,3,166,83,0,994,996,5,59,0,
	0,995,994,1,0,0,0,995,996,1,0,0,0,996,997,1,0,0,0,997,998,5,78,0,0,998,
	1007,1,0,0,0,999,1000,5,77,0,0,1000,1002,3,162,81,0,1001,1003,5,59,0,0,
	1002,1001,1,0,0,0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,1005,5,78,0,
	0,1005,1007,1,0,0,0,1006,981,1,0,0,0,1006,983,1,0,0,0,1006,990,1,0,0,0,
	1006,999,1,0,0,0,1007,161,1,0,0,0,1008,1013,3,164,82,0,1009,1010,5,59,0,
	0,1010,1012,3,164,82,0,1011,1009,1,0,0,0,1012,1015,1,0,0,0,1013,1011,1,
	0,0,0,1013,1014,1,0,0,0,1014,163,1,0,0,0,1015,1013,1,0,0,0,1016,1019,3,
	124,62,0,1017,1019,3,144,72,0,1018,1016,1,0,0,0,1018,1017,1,0,0,0,1019,
	1020,1,0,0,0,1020,1021,5,60,0,0,1021,1022,3,114,57,0,1022,165,1,0,0,0,1023,
	1024,5,62,0,0,1024,1025,3,138,69,0,1025,167,1,0,0,0,1026,1027,3,146,73,
	0,1027,1028,5,57,0,0,1028,1029,5,58,0,0,1029,1057,1,0,0,0,1030,1031,3,146,
	73,0,1031,1032,5,57,0,0,1032,1034,3,170,85,0,1033,1035,5,59,0,0,1034,1033,
	1,0,0,0,1034,1035,1,0,0,0,1035,1036,1,0,0,0,1036,1037,5,58,0,0,1037,1057,
	1,0,0,0,1038,1039,3,146,73,0,1039,1040,5,57,0,0,1040,1042,3,172,86,0,1041,
	1043,5,59,0,0,1042,1041,1,0,0,0,1042,1043,1,0,0,0,1043,1044,1,0,0,0,1044,
	1045,5,58,0,0,1045,1057,1,0,0,0,1046,1047,3,146,73,0,1047,1048,5,57,0,0,
	1048,1049,3,170,85,0,1049,1050,5,59,0,0,1050,1052,3,172,86,0,1051,1053,
	5,59,0,0,1052,1051,1,0,0,0,1052,1053,1,0,0,0,1053,1054,1,0,0,0,1054,1055,
	5,58,0,0,1055,1057,1,0,0,0,1056,1026,1,0,0,0,1056,1030,1,0,0,0,1056,1038,
	1,0,0,0,1056,1046,1,0,0,0,1057,169,1,0,0,0,1058,1063,3,114,57,0,1059,1060,
	5,59,0,0,1060,1062,3,114,57,0,1061,1059,1,0,0,0,1062,1065,1,0,0,0,1063,
	1061,1,0,0,0,1063,1064,1,0,0,0,1064,171,1,0,0,0,1065,1063,1,0,0,0,1066,
	1071,3,174,87,0,1067,1068,5,59,0,0,1068,1070,3,174,87,0,1069,1067,1,0,0,
	0,1070,1073,1,0,0,0,1071,1069,1,0,0,0,1071,1072,1,0,0,0,1072,173,1,0,0,
	0,1073,1071,1,0,0,0,1074,1075,3,202,101,0,1075,1076,5,63,0,0,1076,1077,
	3,114,57,0,1077,175,1,0,0,0,1078,1084,3,184,92,0,1079,1080,5,25,0,0,1080,
	1081,3,184,92,0,1081,1082,5,18,0,0,1082,1083,3,176,88,0,1083,1085,1,0,0,
	0,1084,1079,1,0,0,0,1084,1085,1,0,0,0,1085,1088,1,0,0,0,1086,1088,3,180,
	90,0,1087,1078,1,0,0,0,1087,1086,1,0,0,0,1088,177,1,0,0,0,1089,1092,3,184,
	92,0,1090,1092,3,182,91,0,1091,1089,1,0,0,0,1091,1090,1,0,0,0,1092,179,
	1,0,0,0,1093,1095,5,29,0,0,1094,1096,3,24,12,0,1095,1094,1,0,0,0,1095,1096,
	1,0,0,0,1096,1097,1,0,0,0,1097,1098,5,60,0,0,1098,1099,3,176,88,0,1099,
	181,1,0,0,0,1100,1102,5,29,0,0,1101,1103,3,24,12,0,1102,1101,1,0,0,0,1102,
	1103,1,0,0,0,1103,1104,1,0,0,0,1104,1105,5,60,0,0,1105,1106,3,178,89,0,
	1106,183,1,0,0,0,1107,1112,3,186,93,0,1108,1109,5,34,0,0,1109,1111,3,186,
	93,0,1110,1108,1,0,0,0,1111,1114,1,0,0,0,1112,1110,1,0,0,0,1112,1113,1,
	0,0,0,1113,185,1,0,0,0,1114,1112,1,0,0,0,1115,1120,3,188,94,0,1116,1117,
	5,6,0,0,1117,1119,3,188,94,0,1118,1116,1,0,0,0,1119,1122,1,0,0,0,1120,1118,
	1,0,0,0,1120,1121,1,0,0,0,1121,187,1,0,0,0,1122,1120,1,0,0,0,1123,1124,
	5,33,0,0,1124,1127,3,188,94,0,1125,1127,3,190,95,0,1126,1123,1,0,0,0,1126,
	1125,1,0,0,0,1127,189,1,0,0,0,1128,1134,3,196,98,0,1129,1130,3,192,96,0,
	1130,1131,3,196,98,0,1131,1133,1,0,0,0,1132,1129,1,0,0,0,1133,1136,1,0,
	0,0,1134,1132,1,0,0,0,1134,1135,1,0,0,0,1135,191,1,0,0,0,1136,1134,1,0,
	0,0,1137,1151,5,79,0,0,1138,1151,5,80,0,0,1139,1151,5,81,0,0,1140,1151,
	5,82,0,0,1141,1151,5,83,0,0,1142,1151,5,84,0,0,1143,1151,5,85,0,0,1144,
	1151,5,27,0,0,1145,1146,5,33,0,0,1146,1151,5,27,0,0,1147,1151,5,28,0,0,
	1148,1149,5,28,0,0,1149,1151,5,33,0,0,1150,1137,1,0,0,0,1150,1138,1,0,0,
	0,1150,1139,1,0,0,0,1150,1140,1,0,0,0,1150,1141,1,0,0,0,1150,1142,1,0,0,
	0,1150,1143,1,0,0,0,1150,1144,1,0,0,0,1150,1145,1,0,0,0,1150,1147,1,0,0,
	0,1150,1148,1,0,0,0,1151,193,1,0,0,0,1152,1153,5,56,0,0,1153,1154,3,196,
	98,0,1154,195,1,0,0,0,1155,1156,6,98,-1,0,1156,1164,3,198,99,0,1157,1159,
	7,2,0,0,1158,1157,1,0,0,0,1159,1160,1,0,0,0,1160,1158,1,0,0,0,1160,1161,
	1,0,0,0,1161,1162,1,0,0,0,1162,1164,3,196,98,7,1163,1155,1,0,0,0,1163,1158,
	1,0,0,0,1164,1188,1,0,0,0,1165,1166,10,8,0,0,1166,1167,5,62,0,0,1167,1187,
	3,196,98,9,1168,1169,10,6,0,0,1169,1170,7,3,0,0,1170,1187,3,196,98,7,1171,
	1172,10,5,0,0,1172,1173,7,4,0,0,1173,1187,3,196,98,6,1174,1175,10,4,0,0,
	1175,1176,7,5,0,0,1176,1187,3,196,98,5,1177,1178,10,3,0,0,1178,1179,5,68,
	0,0,1179,1187,3,196,98,4,1180,1181,10,2,0,0,1181,1182,5,67,0,0,1182,1187,
	3,196,98,3,1183,1184,10,1,0,0,1184,1185,5,66,0,0,1185,1187,3,196,98,2,1186,
	1165,1,0,0,0,1186,1168,1,0,0,0,1186,1171,1,0,0,0,1186,1174,1,0,0,0,1186,
	1177,1,0,0,0,1186,1180,1,0,0,0,1186,1183,1,0,0,0,1187,1190,1,0,0,0,1188,
	1186,1,0,0,0,1188,1189,1,0,0,0,1189,197,1,0,0,0,1190,1188,1,0,0,0,1191,
	1193,5,10,0,0,1192,1191,1,0,0,0,1192,1193,1,0,0,0,1193,1194,1,0,0,0,1194,
	1198,3,200,100,0,1195,1197,3,206,103,0,1196,1195,1,0,0,0,1197,1200,1,0,
	0,0,1198,1196,1,0,0,0,1198,1199,1,0,0,0,1199,199,1,0,0,0,1200,1198,1,0,
	0,0,1201,1204,5,57,0,0,1202,1205,3,234,117,0,1203,1205,3,204,102,0,1204,
	1202,1,0,0,0,1204,1203,1,0,0,0,1204,1205,1,0,0,0,1205,1206,1,0,0,0,1206,
	1229,5,58,0,0,1207,1209,5,64,0,0,1208,1210,3,204,102,0,1209,1208,1,0,0,
	0,1209,1210,1,0,0,0,1210,1211,1,0,0,0,1211,1229,5,65,0,0,1212,1214,5,77,
	0,0,1213,1215,3,218,109,0,1214,1213,1,0,0,0,1214,1215,1,0,0,0,1215,1216,
	1,0,0,0,1216,1229,5,78,0,0,1217,1229,3,202,101,0,1218,1229,5,4,0,0,1219,
	1221,5,3,0,0,1220,1219,1,0,0,0,1221,1222,1,0,0,0,1222,1220,1,0,0,0,1222,
	1223,1,0,0,0,1223,1229,1,0,0,0,1224,1229,5,55,0,0,1225,1229,5,31,0,0,1226,
	1229,5,38,0,0,1227,1229,5,20,0,0,1228,1201,1,0,0,0,1228,1207,1,0,0,0,1228,
	1212,1,0,0,0,1228,1217,1,0,0,0,1228,1218,1,0,0,0,1228,1220,1,0,0,0,1228,
	1224,1,0,0,0,1228,1225,1,0,0,0,1228,1226,1,0,0,0,1228,1227,1,0,0,0,1229,
	201,1,0,0,0,1230,1231,7,6,0,0,1231,203,1,0,0,0,1232,1235,3,176,88,0,1233,
	1235,3,194,97,0,1234,1232,1,0,0,0,1234,1233,1,0,0,0,1235,1250,1,0,0,0,1236,
	1251,3,228,114,0,1237,1240,5,59,0,0,1238,1241,3,176,88,0,1239,1241,3,194,
	97,0,1240,1238,1,0,0,0,1240,1239,1,0,0,0,1241,1243,1,0,0,0,1242,1237,1,
	0,0,0,1243,1246,1,0,0,0,1244,1242,1,0,0,0,1244,1245,1,0,0,0,1245,1248,1,
	0,0,0,1246,1244,1,0,0,0,1247,1249,5,59,0,0,1248,1247,1,0,0,0,1248,1249,
	1,0,0,0,1249,1251,1,0,0,0,1250,1236,1,0,0,0,1250,1244,1,0,0,0,1251,205,
	1,0,0,0,1252,1254,5,57,0,0,1253,1255,3,222,111,0,1254,1253,1,0,0,0,1254,
	1255,1,0,0,0,1255,1256,1,0,0,0,1256,1264,5,58,0,0,1257,1258,5,64,0,0,1258,
	1259,3,208,104,0,1259,1260,5,65,0,0,1260,1264,1,0,0,0,1261,1262,5,54,0,
	0,1262,1264,3,202,101,0,1263,1252,1,0,0,0,1263,1257,1,0,0,0,1263,1261,1,
	0,0,0,1264,207,1,0,0,0,1265,1270,3,210,105,0,1266,1267,5,59,0,0,1267,1269,
	3,210,105,0,1268,1266,1,0,0,0,1269,1272,1,0,0,0,1270,1268,1,0,0,0,1270,
	1271,1,0,0,0,1271,1274,1,0,0,0,1272,1270,1,0,0,0,1273,1275,5,59,0,0,1274,
	1273,1,0,0,0,1274,1275,1,0,0,0,1275,209,1,0,0,0,1276,1288,3,176,88,0,1277,
	1279,3,176,88,0,1278,1277,1,0,0,0,1278,1279,1,0,0,0,1279,1280,1,0,0,0,1280,
	1282,5,60,0,0,1281,1283,3,176,88,0,1282,1281,1,0,0,0,1282,1283,1,0,0,0,
	1283,1285,1,0,0,0,1284,1286,3,212,106,0,1285,1284,1,0,0,0,1285,1286,1,0,
	0,0,1286,1288,1,0,0,0,1287,1276,1,0,0,0,1287,1278,1,0,0,0,1288,211,1,0,
	0,0,1289,1291,5,60,0,0,1290,1292,3,176,88,0,1291,1290,1,0,0,0,1291,1292,
	1,0,0,0,1292,213,1,0,0,0,1293,1296,3,196,98,0,1294,1296,3,194,97,0,1295,
	1293,1,0,0,0,1295,1294,1,0,0,0,1296,1304,1,0,0,0,1297,1300,5,59,0,0,1298,
	1301,3,196,98,0,1299,1301,3,194,97,0,1300,1298,1,0,0,0,1300,1299,1,0,0,
	0,1301,1303,1,0,0,0,1302,1297,1,0,0,0,1303,1306,1,0,0,0,1304,1302,1,0,0,
	0,1304,1305,1,0,0,0,1305,1308,1,0,0,0,1306,1304,1,0,0,0,1307,1309,5,59,
	0,0,1308,1307,1,0,0,0,1308,1309,1,0,0,0,1309,215,1,0,0,0,1310,1315,3,176,
	88,0,1311,1312,5,59,0,0,1312,1314,3,176,88,0,1313,1311,1,0,0,0,1314,1317,
	1,0,0,0,1315,1313,1,0,0,0,1315,1316,1,0,0,0,1316,1319,1,0,0,0,1317,1315,
	1,0,0,0,1318,1320,5,59,0,0,1319,1318,1,0,0,0,1319,1320,1,0,0,0,1320,217,
	1,0,0,0,1321,1322,3,176,88,0,1322,1323,5,60,0,0,1323,1324,3,176,88,0,1324,
	1328,1,0,0,0,1325,1326,5,62,0,0,1326,1328,3,196,98,0,1327,1321,1,0,0,0,
	1327,1325,1,0,0,0,1328,1347,1,0,0,0,1329,1348,3,228,114,0,1330,1337,5,59,
	0,0,1331,1332,3,176,88,0,1332,1333,5,60,0,0,1333,1334,3,176,88,0,1334,1338,
	1,0,0,0,1335,1336,5,62,0,0,1336,1338,3,196,98,0,1337,1331,1,0,0,0,1337,
	1335,1,0,0,0,1338,1340,1,0,0,0,1339,1330,1,0,0,0,1340,1343,1,0,0,0,1341,
	1339,1,0,0,0,1341,1342,1,0,0,0,1342,1345,1,0,0,0,1343,1341,1,0,0,0,1344,
	1346,5,59,0,0,1345,1344,1,0,0,0,1345,1346,1,0,0,0,1346,1348,1,0,0,0,1347,
	1329,1,0,0,0,1347,1341,1,0,0,0,1348,1370,1,0,0,0,1349,1352,3,176,88,0,1350,
	1352,3,194,97,0,1351,1349,1,0,0,0,1351,1350,1,0,0,0,1352,1367,1,0,0,0,1353,
	1368,3,228,114,0,1354,1357,5,59,0,0,1355,1358,3,176,88,0,1356,1358,3,194,
	97,0,1357,1355,1,0,0,0,1357,1356,1,0,0,0,1358,1360,1,0,0,0,1359,1354,1,
	0,0,0,1360,1363,1,0,0,0,1361,1359,1,0,0,0,1361,1362,1,0,0,0,1362,1365,1,
	0,0,0,1363,1361,1,0,0,0,1364,1366,5,59,0,0,1365,1364,1,0,0,0,1365,1366,
	1,0,0,0,1366,1368,1,0,0,0,1367,1353,1,0,0,0,1367,1361,1,0,0,0,1368,1370,
	1,0,0,0,1369,1327,1,0,0,0,1369,1351,1,0,0,0,1370,219,1,0,0,0,1371,1372,
	5,13,0,0,1372,1378,3,202,101,0,1373,1375,5,57,0,0,1374,1376,3,222,111,0,
	1375,1374,1,0,0,0,1375,1376,1,0,0,0,1376,1377,1,0,0,0,1377,1379,5,58,0,
	0,1378,1373,1,0,0,0,1378,1379,1,0,0,0,1379,1380,1,0,0,0,1380,1381,5,60,
	0,0,1381,1382,3,98,49,0,1382,221,1,0,0,0,1383,1388,3,224,112,0,1384,1385,
	5,59,0,0,1385,1387,3,224,112,0,1386,1384,1,0,0,0,1387,1390,1,0,0,0,1388,
	1386,1,0,0,0,1388,1389,1,0,0,0,1389,1392,1,0,0,0,1390,1388,1,0,0,0,1391,
	1393,5,59,0,0,1392,1391,1,0,0,0,1392,1393,1,0,0,0,1393,223,1,0,0,0,1394,
	1396,3,176,88,0,1395,1397,3,228,114,0,1396,1395,1,0,0,0,1396,1397,1,0,0,
	0,1397,1407,1,0,0,0,1398,1399,3,176,88,0,1399,1400,5,63,0,0,1400,1401,3,
	176,88,0,1401,1407,1,0,0,0,1402,1403,5,62,0,0,1403,1407,3,176,88,0,1404,
	1405,5,56,0,0,1405,1407,3,176,88,0,1406,1394,1,0,0,0,1406,1398,1,0,0,0,
	1406,1402,1,0,0,0,1406,1404,1,0,0,0,1407,225,1,0,0,0,1408,1411,3,228,114,
	0,1409,1411,3,230,115,0,1410,1408,1,0,0,0,1410,1409,1,0,0,0,1411,227,1,
	0,0,0,1412,1414,5,9,0,0,1413,1412,1,0,0,0,1413,1414,1,0,0,0,1414,1415,1,
	0,0,0,1415,1416,5,22,0,0,1416,1417,3,214,107,0,1417,1418,5,27,0,0,1418,
	1420,3,184,92,0,1419,1421,3,226,113,0,1420,1419,1,0,0,0,1420,1421,1,0,0,
	0,1421,229,1,0,0,0,1422,1423,5,25,0,0,1423,1425,3,178,89,0,1424,1426,3,
	226,113,0,1425,1424,1,0,0,0,1425,1426,1,0,0,0,1426,231,1,0,0,0,1427,1428,
	3,202,101,0,1428,233,1,0,0,0,1429,1431,5,43,0,0,1430,1432,3,236,118,0,1431,
	1430,1,0,0,0,1431,1432,1,0,0,0,1432,235,1,0,0,0,1433,1434,5,23,0,0,1434,
	1437,3,176,88,0,1435,1437,3,216,108,0,1436,1433,1,0,0,0,1436,1435,1,0,0,
	0,1437,237,1,0,0,0,1438,1440,5,3,0,0,1439,1438,1,0,0,0,1440,1441,1,0,0,
	0,1441,1439,1,0,0,0,1441,1442,1,0,0,0,1442,239,1,0,0,0,202,243,252,256,
	258,267,276,279,286,292,302,309,316,322,326,332,338,342,349,351,353,358,
	360,362,366,372,376,383,385,387,392,394,399,404,410,414,420,426,430,437,
	439,441,446,448,450,454,460,464,471,473,475,480,482,488,495,499,511,518,
	523,527,530,536,540,545,549,553,567,575,583,585,589,598,605,607,616,621,
	626,633,637,644,652,661,670,677,689,695,708,714,723,734,745,750,755,760,
	768,777,783,785,793,797,807,814,817,823,826,831,836,846,850,861,872,882,
	892,902,907,912,933,937,945,950,953,958,965,969,973,979,986,995,1002,1006,
	1013,1018,1034,1042,1052,1056,1063,1071,1084,1087,1091,1095,1102,1112,1120,
	1126,1134,1150,1160,1163,1186,1188,1192,1198,1204,1209,1214,1222,1228,1234,
	1240,1244,1248,1250,1254,1263,1270,1274,1278,1282,1285,1287,1291,1295,1300,
	1304,1308,1315,1319,1327,1337,1341,1345,1347,1351,1357,1361,1365,1367,1369,
	1375,1378,1388,1392,1396,1406,1410,1413,1420,1425,1431,1436,1441];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python3Parser.__ATN) {
			Python3Parser.__ATN = new ATNDeserializer().deserialize(Python3Parser._serializedATN);
		}

		return Python3Parser.__ATN;
	}


	static DecisionsToDFA = Python3Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class RootContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(Python3Parser.EOF, 0);
	}
	public single_input(): Single_inputContext {
		return this.getTypedRuleContext(Single_inputContext, 0) as Single_inputContext;
	}
	public file_input(): File_inputContext {
		return this.getTypedRuleContext(File_inputContext, 0) as File_inputContext;
	}
	public eval_input(): Eval_inputContext {
		return this.getTypedRuleContext(Eval_inputContext, 0) as Eval_inputContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_root;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterRoot) {
	 		listener.enterRoot(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitRoot) {
	 		listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_inputContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, 0);
	}
	public simple_stmts(): Simple_stmtsContext {
		return this.getTypedRuleContext(Simple_stmtsContext, 0) as Simple_stmtsContext;
	}
	public compound_stmt(): Compound_stmtContext {
		return this.getTypedRuleContext(Compound_stmtContext, 0) as Compound_stmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_single_input;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSingle_input) {
	 		listener.enterSingle_input(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSingle_input) {
	 		listener.exitSingle_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSingle_input) {
			return visitor.visitSingle_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class File_inputContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(Python3Parser.EOF, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, i);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_file_input;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterFile_input) {
	 		listener.enterFile_input(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitFile_input) {
	 		listener.exitFile_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitFile_input) {
			return visitor.visitFile_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eval_inputContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public testlist(): TestlistContext {
		return this.getTypedRuleContext(TestlistContext, 0) as TestlistContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(Python3Parser.EOF, 0);
	}
	public NEWLINE_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.NEWLINE);
	}
	public NEWLINE(i: number): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_eval_input;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterEval_input) {
	 		listener.enterEval_input(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitEval_input) {
	 		listener.exitEval_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitEval_input) {
			return visitor.visitEval_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AT(): TerminalNode {
		return this.getToken(Python3Parser.AT, 0);
	}
	public dotted_name(): Dotted_nameContext {
		return this.getTypedRuleContext(Dotted_nameContext, 0) as Dotted_nameContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, 0);
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public arglist(): ArglistContext {
		return this.getTypedRuleContext(ArglistContext, 0) as ArglistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_decorator;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDecorator) {
	 		listener.enterDecorator(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDecorator) {
	 		listener.exitDecorator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDecorator) {
			return visitor.visitDecorator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratorsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decorator_list(): DecoratorContext[] {
		return this.getTypedRuleContexts(DecoratorContext) as DecoratorContext[];
	}
	public decorator(i: number): DecoratorContext {
		return this.getTypedRuleContext(DecoratorContext, i) as DecoratorContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_decorators;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDecorators) {
	 		listener.enterDecorators(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDecorators) {
	 		listener.exitDecorators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDecorators) {
			return visitor.visitDecorators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecoratedContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public decorators(): DecoratorsContext {
		return this.getTypedRuleContext(DecoratorsContext, 0) as DecoratorsContext;
	}
	public classdef(): ClassdefContext {
		return this.getTypedRuleContext(ClassdefContext, 0) as ClassdefContext;
	}
	public funcdef(): FuncdefContext {
		return this.getTypedRuleContext(FuncdefContext, 0) as FuncdefContext;
	}
	public async_funcdef(): Async_funcdefContext {
		return this.getTypedRuleContext(Async_funcdefContext, 0) as Async_funcdefContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_decorated;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDecorated) {
	 		listener.enterDecorated(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDecorated) {
	 		listener.exitDecorated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDecorated) {
			return visitor.visitDecorated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Async_funcdefContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(Python3Parser.ASYNC, 0);
	}
	public funcdef(): FuncdefContext {
		return this.getTypedRuleContext(FuncdefContext, 0) as FuncdefContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_async_funcdef;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAsync_funcdef) {
	 		listener.enterAsync_funcdef(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAsync_funcdef) {
	 		listener.exitAsync_funcdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAsync_funcdef) {
			return visitor.visitAsync_funcdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncdefContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEF(): TerminalNode {
		return this.getToken(Python3Parser.DEF, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(Python3Parser.ARROW, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_funcdef;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterFuncdef) {
	 		listener.enterFuncdef(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitFuncdef) {
	 		listener.exitFuncdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitFuncdef) {
			return visitor.visitFuncdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public typedargslist(): TypedargslistContext {
		return this.getTypedRuleContext(TypedargslistContext, 0) as TypedargslistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_parameters;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedargslistContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public tfpdef_list(): TfpdefContext[] {
		return this.getTypedRuleContexts(TfpdefContext) as TfpdefContext[];
	}
	public tfpdef(i: number): TfpdefContext {
		return this.getTypedRuleContext(TfpdefContext, i) as TfpdefContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public POWER(): TerminalNode {
		return this.getToken(Python3Parser.POWER, 0);
	}
	public ASSIGN_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.ASSIGN);
	}
	public ASSIGN(i: number): TerminalNode {
		return this.getToken(Python3Parser.ASSIGN, i);
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_typedargslist;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTypedargslist) {
	 		listener.enterTypedargslist(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTypedargslist) {
	 		listener.exitTypedargslist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTypedargslist) {
			return visitor.visitTypedargslist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TfpdefContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_tfpdef;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTfpdef) {
	 		listener.enterTfpdef(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTfpdef) {
	 		listener.exitTfpdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTfpdef) {
			return visitor.visitTfpdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarargslistContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public vfpdef_list(): VfpdefContext[] {
		return this.getTypedRuleContexts(VfpdefContext) as VfpdefContext[];
	}
	public vfpdef(i: number): VfpdefContext {
		return this.getTypedRuleContext(VfpdefContext, i) as VfpdefContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public POWER(): TerminalNode {
		return this.getToken(Python3Parser.POWER, 0);
	}
	public ASSIGN_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.ASSIGN);
	}
	public ASSIGN(i: number): TerminalNode {
		return this.getToken(Python3Parser.ASSIGN, i);
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_varargslist;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterVarargslist) {
	 		listener.enterVarargslist(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitVarargslist) {
	 		listener.exitVarargslist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitVarargslist) {
			return visitor.visitVarargslist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VfpdefContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_vfpdef;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterVfpdef) {
	 		listener.enterVfpdef(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitVfpdef) {
	 		listener.exitVfpdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitVfpdef) {
			return visitor.visitVfpdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_stmts(): Simple_stmtsContext {
		return this.getTypedRuleContext(Simple_stmtsContext, 0) as Simple_stmtsContext;
	}
	public compound_stmt(): Compound_stmtContext {
		return this.getTypedRuleContext(Compound_stmtContext, 0) as Compound_stmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterStmt) {
	 		listener.enterStmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitStmt) {
	 		listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_stmt_list(): Simple_stmtContext[] {
		return this.getTypedRuleContexts(Simple_stmtContext) as Simple_stmtContext[];
	}
	public simple_stmt(i: number): Simple_stmtContext {
		return this.getTypedRuleContext(Simple_stmtContext, i) as Simple_stmtContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, 0);
	}
	public SEMI_COLON_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.SEMI_COLON);
	}
	public SEMI_COLON(i: number): TerminalNode {
		return this.getToken(Python3Parser.SEMI_COLON, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_simple_stmts;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSimple_stmts) {
	 		listener.enterSimple_stmts(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSimple_stmts) {
	 		listener.exitSimple_stmts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSimple_stmts) {
			return visitor.visitSimple_stmts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_stmt(): Expr_stmtContext {
		return this.getTypedRuleContext(Expr_stmtContext, 0) as Expr_stmtContext;
	}
	public del_stmt(): Del_stmtContext {
		return this.getTypedRuleContext(Del_stmtContext, 0) as Del_stmtContext;
	}
	public pass_stmt(): Pass_stmtContext {
		return this.getTypedRuleContext(Pass_stmtContext, 0) as Pass_stmtContext;
	}
	public flow_stmt(): Flow_stmtContext {
		return this.getTypedRuleContext(Flow_stmtContext, 0) as Flow_stmtContext;
	}
	public import_stmt(): Import_stmtContext {
		return this.getTypedRuleContext(Import_stmtContext, 0) as Import_stmtContext;
	}
	public global_stmt(): Global_stmtContext {
		return this.getTypedRuleContext(Global_stmtContext, 0) as Global_stmtContext;
	}
	public nonlocal_stmt(): Nonlocal_stmtContext {
		return this.getTypedRuleContext(Nonlocal_stmtContext, 0) as Nonlocal_stmtContext;
	}
	public assert_stmt(): Assert_stmtContext {
		return this.getTypedRuleContext(Assert_stmtContext, 0) as Assert_stmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_simple_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSimple_stmt) {
	 		listener.enterSimple_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSimple_stmt) {
	 		listener.exitSimple_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSimple_stmt) {
			return visitor.visitSimple_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public testlist_star_expr_list(): Testlist_star_exprContext[] {
		return this.getTypedRuleContexts(Testlist_star_exprContext) as Testlist_star_exprContext[];
	}
	public testlist_star_expr(i: number): Testlist_star_exprContext {
		return this.getTypedRuleContext(Testlist_star_exprContext, i) as Testlist_star_exprContext;
	}
	public annassign(): AnnassignContext {
		return this.getTypedRuleContext(AnnassignContext, 0) as AnnassignContext;
	}
	public augassign(): AugassignContext {
		return this.getTypedRuleContext(AugassignContext, 0) as AugassignContext;
	}
	public yield_expr_list(): Yield_exprContext[] {
		return this.getTypedRuleContexts(Yield_exprContext) as Yield_exprContext[];
	}
	public yield_expr(i: number): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, i) as Yield_exprContext;
	}
	public testlist(): TestlistContext {
		return this.getTypedRuleContext(TestlistContext, 0) as TestlistContext;
	}
	public ASSIGN_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.ASSIGN);
	}
	public ASSIGN(i: number): TerminalNode {
		return this.getToken(Python3Parser.ASSIGN, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_expr_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterExpr_stmt) {
	 		listener.enterExpr_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitExpr_stmt) {
	 		listener.exitExpr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitExpr_stmt) {
			return visitor.visitExpr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnassignContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_annassign;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAnnassign) {
	 		listener.enterAnnassign(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAnnassign) {
	 		listener.exitAnnassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAnnassign) {
			return visitor.visitAnnassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Testlist_star_exprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public star_expr_list(): Star_exprContext[] {
		return this.getTypedRuleContexts(Star_exprContext) as Star_exprContext[];
	}
	public star_expr(i: number): Star_exprContext {
		return this.getTypedRuleContext(Star_exprContext, i) as Star_exprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_testlist_star_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTestlist_star_expr) {
	 		listener.enterTestlist_star_expr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTestlist_star_expr) {
	 		listener.exitTestlist_star_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTestlist_star_expr) {
			return visitor.visitTestlist_star_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AugassignContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.ADD_ASSIGN, 0);
	}
	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.SUB_ASSIGN, 0);
	}
	public MULT_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.MULT_ASSIGN, 0);
	}
	public AT_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.AT_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.DIV_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.MOD_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.AND_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.OR_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.XOR_ASSIGN, 0);
	}
	public LEFT_SHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.LEFT_SHIFT_ASSIGN, 0);
	}
	public RIGHT_SHIFT_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.RIGHT_SHIFT_ASSIGN, 0);
	}
	public POWER_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.POWER_ASSIGN, 0);
	}
	public IDIV_ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.IDIV_ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_augassign;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAugassign) {
	 		listener.enterAugassign(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAugassign) {
	 		listener.exitAugassign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAugassign) {
			return visitor.visitAugassign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Del_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DEL(): TerminalNode {
		return this.getToken(Python3Parser.DEL, 0);
	}
	public exprlist(): ExprlistContext {
		return this.getTypedRuleContext(ExprlistContext, 0) as ExprlistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_del_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDel_stmt) {
	 		listener.enterDel_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDel_stmt) {
	 		listener.exitDel_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDel_stmt) {
			return visitor.visitDel_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PASS(): TerminalNode {
		return this.getToken(Python3Parser.PASS, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_pass_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterPass_stmt) {
	 		listener.enterPass_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitPass_stmt) {
	 		listener.exitPass_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitPass_stmt) {
			return visitor.visitPass_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public break_stmt(): Break_stmtContext {
		return this.getTypedRuleContext(Break_stmtContext, 0) as Break_stmtContext;
	}
	public continue_stmt(): Continue_stmtContext {
		return this.getTypedRuleContext(Continue_stmtContext, 0) as Continue_stmtContext;
	}
	public return_stmt(): Return_stmtContext {
		return this.getTypedRuleContext(Return_stmtContext, 0) as Return_stmtContext;
	}
	public raise_stmt(): Raise_stmtContext {
		return this.getTypedRuleContext(Raise_stmtContext, 0) as Raise_stmtContext;
	}
	public yield_stmt(): Yield_stmtContext {
		return this.getTypedRuleContext(Yield_stmtContext, 0) as Yield_stmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_flow_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterFlow_stmt) {
	 		listener.enterFlow_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitFlow_stmt) {
	 		listener.exitFlow_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitFlow_stmt) {
			return visitor.visitFlow_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Break_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(Python3Parser.BREAK, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_break_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterBreak_stmt) {
	 		listener.enterBreak_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitBreak_stmt) {
	 		listener.exitBreak_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitBreak_stmt) {
			return visitor.visitBreak_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONTINUE(): TerminalNode {
		return this.getToken(Python3Parser.CONTINUE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_continue_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterContinue_stmt) {
	 		listener.enterContinue_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitContinue_stmt) {
	 		listener.exitContinue_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitContinue_stmt) {
			return visitor.visitContinue_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(Python3Parser.RETURN, 0);
	}
	public testlist(): TestlistContext {
		return this.getTypedRuleContext(TestlistContext, 0) as TestlistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_return_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterReturn_stmt) {
	 		listener.enterReturn_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitReturn_stmt) {
	 		listener.exitReturn_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitReturn_stmt) {
			return visitor.visitReturn_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public yield_expr(): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, 0) as Yield_exprContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_yield_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterYield_stmt) {
	 		listener.enterYield_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitYield_stmt) {
	 		listener.exitYield_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitYield_stmt) {
			return visitor.visitYield_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAISE(): TerminalNode {
		return this.getToken(Python3Parser.RAISE, 0);
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(Python3Parser.FROM, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_raise_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterRaise_stmt) {
	 		listener.enterRaise_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitRaise_stmt) {
	 		listener.exitRaise_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitRaise_stmt) {
			return visitor.visitRaise_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_name(): Import_nameContext {
		return this.getTypedRuleContext(Import_nameContext, 0) as Import_nameContext;
	}
	public import_from(): Import_fromContext {
		return this.getTypedRuleContext(Import_fromContext, 0) as Import_fromContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_import_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterImport_stmt) {
	 		listener.enterImport_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitImport_stmt) {
	 		listener.exitImport_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitImport_stmt) {
			return visitor.visitImport_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_nameContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Python3Parser.IMPORT, 0);
	}
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getTypedRuleContext(Dotted_as_namesContext, 0) as Dotted_as_namesContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_import_name;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterImport_name) {
	 		listener.enterImport_name(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitImport_name) {
	 		listener.exitImport_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitImport_name) {
			return visitor.visitImport_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_fromContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(Python3Parser.FROM, 0);
	}
	public IMPORT(): TerminalNode {
		return this.getToken(Python3Parser.IMPORT, 0);
	}
	public dotted_name(): Dotted_nameContext {
		return this.getTypedRuleContext(Dotted_nameContext, 0) as Dotted_nameContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public import_as_names(): Import_as_namesContext {
		return this.getTypedRuleContext(Import_as_namesContext, 0) as Import_as_namesContext;
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Python3Parser.DOT, i);
	}
	public ELLIPSIS_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.ELLIPSIS);
	}
	public ELLIPSIS(i: number): TerminalNode {
		return this.getToken(Python3Parser.ELLIPSIS, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_import_from;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterImport_from) {
	 		listener.enterImport_from(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitImport_from) {
	 		listener.exitImport_from(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitImport_from) {
			return visitor.visitImport_from(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(Python3Parser.AS, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_import_as_name;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterImport_as_name) {
	 		listener.enterImport_as_name(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitImport_as_name) {
	 		listener.exitImport_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitImport_as_name) {
			return visitor.visitImport_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dotted_name(): Dotted_nameContext {
		return this.getTypedRuleContext(Dotted_nameContext, 0) as Dotted_nameContext;
	}
	public AS(): TerminalNode {
		return this.getToken(Python3Parser.AS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_dotted_as_name;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDotted_as_name) {
	 		listener.enterDotted_as_name(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDotted_as_name) {
	 		listener.exitDotted_as_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDotted_as_name) {
			return visitor.visitDotted_as_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_as_name_list(): Import_as_nameContext[] {
		return this.getTypedRuleContexts(Import_as_nameContext) as Import_as_nameContext[];
	}
	public import_as_name(i: number): Import_as_nameContext {
		return this.getTypedRuleContext(Import_as_nameContext, i) as Import_as_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_import_as_names;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterImport_as_names) {
	 		listener.enterImport_as_names(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitImport_as_names) {
	 		listener.exitImport_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitImport_as_names) {
			return visitor.visitImport_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dotted_as_name_list(): Dotted_as_nameContext[] {
		return this.getTypedRuleContexts(Dotted_as_nameContext) as Dotted_as_nameContext[];
	}
	public dotted_as_name(i: number): Dotted_as_nameContext {
		return this.getTypedRuleContext(Dotted_as_nameContext, i) as Dotted_as_nameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_dotted_as_names;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDotted_as_names) {
	 		listener.enterDotted_as_names(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDotted_as_names) {
	 		listener.exitDotted_as_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDotted_as_names) {
			return visitor.visitDotted_as_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Python3Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_dotted_name;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDotted_name) {
	 		listener.enterDotted_name(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDotted_name) {
	 		listener.exitDotted_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDotted_name) {
			return visitor.visitDotted_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(Python3Parser.GLOBAL, 0);
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_global_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterGlobal_stmt) {
	 		listener.enterGlobal_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitGlobal_stmt) {
	 		listener.exitGlobal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitGlobal_stmt) {
			return visitor.visitGlobal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nonlocal_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NONLOCAL(): TerminalNode {
		return this.getToken(Python3Parser.NONLOCAL, 0);
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_nonlocal_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterNonlocal_stmt) {
	 		listener.enterNonlocal_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitNonlocal_stmt) {
	 		listener.exitNonlocal_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitNonlocal_stmt) {
			return visitor.visitNonlocal_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSERT(): TerminalNode {
		return this.getToken(Python3Parser.ASSERT, 0);
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Python3Parser.COMMA, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_assert_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAssert_stmt) {
	 		listener.enterAssert_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAssert_stmt) {
	 		listener.exitAssert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAssert_stmt) {
			return visitor.visitAssert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_stmt(): If_stmtContext {
		return this.getTypedRuleContext(If_stmtContext, 0) as If_stmtContext;
	}
	public while_stmt(): While_stmtContext {
		return this.getTypedRuleContext(While_stmtContext, 0) as While_stmtContext;
	}
	public for_stmt(): For_stmtContext {
		return this.getTypedRuleContext(For_stmtContext, 0) as For_stmtContext;
	}
	public try_stmt(): Try_stmtContext {
		return this.getTypedRuleContext(Try_stmtContext, 0) as Try_stmtContext;
	}
	public with_stmt(): With_stmtContext {
		return this.getTypedRuleContext(With_stmtContext, 0) as With_stmtContext;
	}
	public funcdef(): FuncdefContext {
		return this.getTypedRuleContext(FuncdefContext, 0) as FuncdefContext;
	}
	public classdef(): ClassdefContext {
		return this.getTypedRuleContext(ClassdefContext, 0) as ClassdefContext;
	}
	public decorated(): DecoratedContext {
		return this.getTypedRuleContext(DecoratedContext, 0) as DecoratedContext;
	}
	public async_stmt(): Async_stmtContext {
		return this.getTypedRuleContext(Async_stmtContext, 0) as Async_stmtContext;
	}
	public match_stmt(): Match_stmtContext {
		return this.getTypedRuleContext(Match_stmtContext, 0) as Match_stmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_compound_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterCompound_stmt) {
	 		listener.enterCompound_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitCompound_stmt) {
	 		listener.exitCompound_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitCompound_stmt) {
			return visitor.visitCompound_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Async_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(Python3Parser.ASYNC, 0);
	}
	public funcdef(): FuncdefContext {
		return this.getTypedRuleContext(FuncdefContext, 0) as FuncdefContext;
	}
	public with_stmt(): With_stmtContext {
		return this.getTypedRuleContext(With_stmtContext, 0) as With_stmtContext;
	}
	public for_stmt(): For_stmtContext {
		return this.getTypedRuleContext(For_stmtContext, 0) as For_stmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_async_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAsync_stmt) {
	 		listener.enterAsync_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAsync_stmt) {
	 		listener.exitAsync_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAsync_stmt) {
			return visitor.visitAsync_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Python3Parser.IF, 0);
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Python3Parser.COLON, i);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ELIF_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.ELIF);
	}
	public ELIF(i: number): TerminalNode {
		return this.getToken(Python3Parser.ELIF, i);
	}
	public ELSE(): TerminalNode {
		return this.getToken(Python3Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_if_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterIf_stmt) {
	 		listener.enterIf_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitIf_stmt) {
	 		listener.exitIf_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitIf_stmt) {
			return visitor.visitIf_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(Python3Parser.WHILE, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Python3Parser.COLON, i);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Python3Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_while_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterWhile_stmt) {
	 		listener.enterWhile_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitWhile_stmt) {
	 		listener.exitWhile_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitWhile_stmt) {
			return visitor.visitWhile_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Python3Parser.FOR, 0);
	}
	public exprlist(): ExprlistContext {
		return this.getTypedRuleContext(ExprlistContext, 0) as ExprlistContext;
	}
	public IN(): TerminalNode {
		return this.getToken(Python3Parser.IN, 0);
	}
	public testlist(): TestlistContext {
		return this.getTypedRuleContext(TestlistContext, 0) as TestlistContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Python3Parser.COLON, i);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Python3Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_for_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterFor_stmt) {
	 		listener.enterFor_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitFor_stmt) {
	 		listener.exitFor_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitFor_stmt) {
			return visitor.visitFor_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Try_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(Python3Parser.TRY, 0);
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Python3Parser.COLON, i);
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(Python3Parser.FINALLY, 0);
	}
	public except_clause_list(): Except_clauseContext[] {
		return this.getTypedRuleContexts(Except_clauseContext) as Except_clauseContext[];
	}
	public except_clause(i: number): Except_clauseContext {
		return this.getTypedRuleContext(Except_clauseContext, i) as Except_clauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(Python3Parser.ELSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_try_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTry_stmt) {
	 		listener.enterTry_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTry_stmt) {
	 		listener.exitTry_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTry_stmt) {
			return visitor.visitTry_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(Python3Parser.WITH, 0);
	}
	public with_item_list(): With_itemContext[] {
		return this.getTypedRuleContexts(With_itemContext) as With_itemContext[];
	}
	public with_item(i: number): With_itemContext {
		return this.getTypedRuleContext(With_itemContext, i) as With_itemContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_with_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterWith_stmt) {
	 		listener.enterWith_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitWith_stmt) {
	 		listener.exitWith_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitWith_stmt) {
			return visitor.visitWith_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class With_itemContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
	public AS(): TerminalNode {
		return this.getToken(Python3Parser.AS, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_with_item;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterWith_item) {
	 		listener.enterWith_item(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitWith_item) {
	 		listener.exitWith_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitWith_item) {
			return visitor.visitWith_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Except_clauseContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXCEPT(): TerminalNode {
		return this.getToken(Python3Parser.EXCEPT, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
	public AS(): TerminalNode {
		return this.getToken(Python3Parser.AS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_except_clause;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterExcept_clause) {
	 		listener.enterExcept_clause(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitExcept_clause) {
	 		listener.exitExcept_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitExcept_clause) {
			return visitor.visitExcept_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_stmts(): Simple_stmtsContext {
		return this.getTypedRuleContext(Simple_stmtsContext, 0) as Simple_stmtsContext;
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, 0);
	}
	public INDENT(): TerminalNode {
		return this.getToken(Python3Parser.INDENT, 0);
	}
	public DEDENT(): TerminalNode {
		return this.getToken(Python3Parser.DEDENT, 0);
	}
	public stmt_list(): StmtContext[] {
		return this.getTypedRuleContexts(StmtContext) as StmtContext[];
	}
	public stmt(i: number): StmtContext {
		return this.getTypedRuleContext(StmtContext, i) as StmtContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_block;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Match_stmtContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MATCH(): TerminalNode {
		return this.getToken(Python3Parser.MATCH, 0);
	}
	public subject_expr(): Subject_exprContext {
		return this.getTypedRuleContext(Subject_exprContext, 0) as Subject_exprContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public NEWLINE(): TerminalNode {
		return this.getToken(Python3Parser.NEWLINE, 0);
	}
	public INDENT(): TerminalNode {
		return this.getToken(Python3Parser.INDENT, 0);
	}
	public DEDENT(): TerminalNode {
		return this.getToken(Python3Parser.DEDENT, 0);
	}
	public case_block_list(): Case_blockContext[] {
		return this.getTypedRuleContexts(Case_blockContext) as Case_blockContext[];
	}
	public case_block(i: number): Case_blockContext {
		return this.getTypedRuleContext(Case_blockContext, i) as Case_blockContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_match_stmt;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterMatch_stmt) {
	 		listener.enterMatch_stmt(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitMatch_stmt) {
	 		listener.exitMatch_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitMatch_stmt) {
			return visitor.visitMatch_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subject_exprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_named_expression(): Star_named_expressionContext {
		return this.getTypedRuleContext(Star_named_expressionContext, 0) as Star_named_expressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Python3Parser.COMMA, 0);
	}
	public star_named_expressions(): Star_named_expressionsContext {
		return this.getTypedRuleContext(Star_named_expressionsContext, 0) as Star_named_expressionsContext;
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_subject_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSubject_expr) {
	 		listener.enterSubject_expr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSubject_expr) {
	 		listener.exitSubject_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSubject_expr) {
			return visitor.visitSubject_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_named_expressionsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
	public star_named_expression_list(): Star_named_expressionContext[] {
		return this.getTypedRuleContexts(Star_named_expressionContext) as Star_named_expressionContext[];
	}
	public star_named_expression(i: number): Star_named_expressionContext {
		return this.getTypedRuleContext(Star_named_expressionContext, i) as Star_named_expressionContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_star_named_expressions;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterStar_named_expressions) {
	 		listener.enterStar_named_expressions(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitStar_named_expressions) {
	 		listener.exitStar_named_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitStar_named_expressions) {
			return visitor.visitStar_named_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_named_expressionContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_star_named_expression;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterStar_named_expression) {
	 		listener.enterStar_named_expression(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitStar_named_expression) {
	 		listener.exitStar_named_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitStar_named_expression) {
			return visitor.visitStar_named_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_blockContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(Python3Parser.CASE, 0);
	}
	public patterns(): PatternsContext {
		return this.getTypedRuleContext(PatternsContext, 0) as PatternsContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public guard(): GuardContext {
		return this.getTypedRuleContext(GuardContext, 0) as GuardContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_case_block;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterCase_block) {
	 		listener.enterCase_block(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitCase_block) {
	 		listener.exitCase_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitCase_block) {
			return visitor.visitCase_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GuardContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Python3Parser.IF, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_guard;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterGuard) {
	 		listener.enterGuard(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitGuard) {
	 		listener.exitGuard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitGuard) {
			return visitor.visitGuard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public open_sequence_pattern(): Open_sequence_patternContext {
		return this.getTypedRuleContext(Open_sequence_patternContext, 0) as Open_sequence_patternContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_patterns;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterPatterns) {
	 		listener.enterPatterns(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitPatterns) {
	 		listener.exitPatterns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitPatterns) {
			return visitor.visitPatterns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public as_pattern(): As_patternContext {
		return this.getTypedRuleContext(As_patternContext, 0) as As_patternContext;
	}
	public or_pattern(): Or_patternContext {
		return this.getTypedRuleContext(Or_patternContext, 0) as Or_patternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterPattern) {
	 		listener.enterPattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitPattern) {
	 		listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class As_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public or_pattern(): Or_patternContext {
		return this.getTypedRuleContext(Or_patternContext, 0) as Or_patternContext;
	}
	public AS(): TerminalNode {
		return this.getToken(Python3Parser.AS, 0);
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_as_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAs_pattern) {
	 		listener.enterAs_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAs_pattern) {
	 		listener.exitAs_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAs_pattern) {
			return visitor.visitAs_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public closed_pattern_list(): Closed_patternContext[] {
		return this.getTypedRuleContexts(Closed_patternContext) as Closed_patternContext[];
	}
	public closed_pattern(i: number): Closed_patternContext {
		return this.getTypedRuleContext(Closed_patternContext, i) as Closed_patternContext;
	}
	public OR_OP_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.OR_OP);
	}
	public OR_OP(i: number): TerminalNode {
		return this.getToken(Python3Parser.OR_OP, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_or_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterOr_pattern) {
	 		listener.enterOr_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitOr_pattern) {
	 		listener.exitOr_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitOr_pattern) {
			return visitor.visitOr_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Closed_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_pattern(): Literal_patternContext {
		return this.getTypedRuleContext(Literal_patternContext, 0) as Literal_patternContext;
	}
	public capture_pattern(): Capture_patternContext {
		return this.getTypedRuleContext(Capture_patternContext, 0) as Capture_patternContext;
	}
	public wildcard_pattern(): Wildcard_patternContext {
		return this.getTypedRuleContext(Wildcard_patternContext, 0) as Wildcard_patternContext;
	}
	public value_pattern(): Value_patternContext {
		return this.getTypedRuleContext(Value_patternContext, 0) as Value_patternContext;
	}
	public group_pattern(): Group_patternContext {
		return this.getTypedRuleContext(Group_patternContext, 0) as Group_patternContext;
	}
	public sequence_pattern(): Sequence_patternContext {
		return this.getTypedRuleContext(Sequence_patternContext, 0) as Sequence_patternContext;
	}
	public mapping_pattern(): Mapping_patternContext {
		return this.getTypedRuleContext(Mapping_patternContext, 0) as Mapping_patternContext;
	}
	public class_pattern(): Class_patternContext {
		return this.getTypedRuleContext(Class_patternContext, 0) as Class_patternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_closed_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterClosed_pattern) {
	 		listener.enterClosed_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitClosed_pattern) {
	 		listener.exitClosed_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitClosed_pattern) {
			return visitor.visitClosed_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public complex_number(): Complex_numberContext {
		return this.getTypedRuleContext(Complex_numberContext, 0) as Complex_numberContext;
	}
	public strings(): StringsContext {
		return this.getTypedRuleContext(StringsContext, 0) as StringsContext;
	}
	public NONE(): TerminalNode {
		return this.getToken(Python3Parser.NONE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(Python3Parser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(Python3Parser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_literal_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterLiteral_pattern) {
	 		listener.enterLiteral_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitLiteral_pattern) {
	 		listener.exitLiteral_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitLiteral_pattern) {
			return visitor.visitLiteral_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Literal_exprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_number(): Signed_numberContext {
		return this.getTypedRuleContext(Signed_numberContext, 0) as Signed_numberContext;
	}
	public complex_number(): Complex_numberContext {
		return this.getTypedRuleContext(Complex_numberContext, 0) as Complex_numberContext;
	}
	public strings(): StringsContext {
		return this.getTypedRuleContext(StringsContext, 0) as StringsContext;
	}
	public NONE(): TerminalNode {
		return this.getToken(Python3Parser.NONE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(Python3Parser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(Python3Parser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_literal_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterLiteral_expr) {
	 		listener.enterLiteral_expr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitLiteral_expr) {
	 		listener.exitLiteral_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitLiteral_expr) {
			return visitor.visitLiteral_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Complex_numberContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public signed_real_number(): Signed_real_numberContext {
		return this.getTypedRuleContext(Signed_real_numberContext, 0) as Signed_real_numberContext;
	}
	public ADD(): TerminalNode {
		return this.getToken(Python3Parser.ADD, 0);
	}
	public imaginary_number(): Imaginary_numberContext {
		return this.getTypedRuleContext(Imaginary_numberContext, 0) as Imaginary_numberContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(Python3Parser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_complex_number;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterComplex_number) {
	 		listener.enterComplex_number(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitComplex_number) {
	 		listener.exitComplex_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitComplex_number) {
			return visitor.visitComplex_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_numberContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(Python3Parser.NUMBER, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(Python3Parser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_signed_number;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSigned_number) {
	 		listener.enterSigned_number(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSigned_number) {
	 		listener.exitSigned_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSigned_number) {
			return visitor.visitSigned_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Signed_real_numberContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public real_number(): Real_numberContext {
		return this.getTypedRuleContext(Real_numberContext, 0) as Real_numberContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(Python3Parser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_signed_real_number;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSigned_real_number) {
	 		listener.enterSigned_real_number(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSigned_real_number) {
	 		listener.exitSigned_real_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSigned_real_number) {
			return visitor.visitSigned_real_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Real_numberContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(Python3Parser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_real_number;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterReal_number) {
	 		listener.enterReal_number(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitReal_number) {
	 		listener.exitReal_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitReal_number) {
			return visitor.visitReal_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Imaginary_numberContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(Python3Parser.NUMBER, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_imaginary_number;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterImaginary_number) {
	 		listener.enterImaginary_number(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitImaginary_number) {
	 		listener.exitImaginary_number(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitImaginary_number) {
			return visitor.visitImaginary_number(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Capture_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_capture_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterCapture_pattern) {
	 		listener.enterCapture_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitCapture_pattern) {
	 		listener.exitCapture_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitCapture_pattern) {
			return visitor.visitCapture_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pattern_capture_targetContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_pattern_capture_target;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterPattern_capture_target) {
	 		listener.enterPattern_capture_target(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitPattern_capture_target) {
	 		listener.exitPattern_capture_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitPattern_capture_target) {
			return visitor.visitPattern_capture_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wildcard_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(Python3Parser.UNDERSCORE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_wildcard_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterWildcard_pattern) {
	 		listener.enterWildcard_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitWildcard_pattern) {
	 		listener.exitWildcard_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitWildcard_pattern) {
			return visitor.visitWildcard_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attr(): AttrContext {
		return this.getTypedRuleContext(AttrContext, 0) as AttrContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_value_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterValue_pattern) {
	 		listener.enterValue_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitValue_pattern) {
	 		listener.exitValue_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitValue_pattern) {
			return visitor.visitValue_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_list(): NameContext[] {
		return this.getTypedRuleContexts(NameContext) as NameContext[];
	}
	public name(i: number): NameContext {
		return this.getTypedRuleContext(NameContext, i) as NameContext;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(Python3Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_attr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAttr) {
	 		listener.enterAttr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAttr) {
	 		listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Name_or_attrContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attr(): AttrContext {
		return this.getTypedRuleContext(AttrContext, 0) as AttrContext;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_name_or_attr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterName_or_attr) {
	 		listener.enterName_or_attr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitName_or_attr) {
	 		listener.exitName_or_attr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitName_or_attr) {
			return visitor.visitName_or_attr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Group_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_group_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterGroup_pattern) {
	 		listener.enterGroup_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitGroup_pattern) {
	 		listener.exitGroup_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitGroup_pattern) {
			return visitor.visitGroup_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sequence_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACK(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_BRACK, 0);
	}
	public CLOSE_BRACK(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_BRACK, 0);
	}
	public maybe_sequence_pattern(): Maybe_sequence_patternContext {
		return this.getTypedRuleContext(Maybe_sequence_patternContext, 0) as Maybe_sequence_patternContext;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public open_sequence_pattern(): Open_sequence_patternContext {
		return this.getTypedRuleContext(Open_sequence_patternContext, 0) as Open_sequence_patternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_sequence_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSequence_pattern) {
	 		listener.enterSequence_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSequence_pattern) {
	 		listener.exitSequence_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSequence_pattern) {
			return visitor.visitSequence_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Open_sequence_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public maybe_star_pattern(): Maybe_star_patternContext {
		return this.getTypedRuleContext(Maybe_star_patternContext, 0) as Maybe_star_patternContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(Python3Parser.COMMA, 0);
	}
	public maybe_sequence_pattern(): Maybe_sequence_patternContext {
		return this.getTypedRuleContext(Maybe_sequence_patternContext, 0) as Maybe_sequence_patternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_open_sequence_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterOpen_sequence_pattern) {
	 		listener.enterOpen_sequence_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitOpen_sequence_pattern) {
	 		listener.exitOpen_sequence_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitOpen_sequence_pattern) {
			return visitor.visitOpen_sequence_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Maybe_sequence_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public maybe_star_pattern_list(): Maybe_star_patternContext[] {
		return this.getTypedRuleContexts(Maybe_star_patternContext) as Maybe_star_patternContext[];
	}
	public maybe_star_pattern(i: number): Maybe_star_patternContext {
		return this.getTypedRuleContext(Maybe_star_patternContext, i) as Maybe_star_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_maybe_sequence_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterMaybe_sequence_pattern) {
	 		listener.enterMaybe_sequence_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitMaybe_sequence_pattern) {
	 		listener.exitMaybe_sequence_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitMaybe_sequence_pattern) {
			return visitor.visitMaybe_sequence_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Maybe_star_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public star_pattern(): Star_patternContext {
		return this.getTypedRuleContext(Star_patternContext, 0) as Star_patternContext;
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_maybe_star_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterMaybe_star_pattern) {
	 		listener.enterMaybe_star_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitMaybe_star_pattern) {
	 		listener.exitMaybe_star_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitMaybe_star_pattern) {
			return visitor.visitMaybe_star_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
	public wildcard_pattern(): Wildcard_patternContext {
		return this.getTypedRuleContext(Wildcard_patternContext, 0) as Wildcard_patternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_star_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterStar_pattern) {
	 		listener.enterStar_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitStar_pattern) {
	 		listener.exitStar_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitStar_pattern) {
			return visitor.visitStar_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mapping_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_BRACE, 0);
	}
	public double_star_pattern(): Double_star_patternContext {
		return this.getTypedRuleContext(Double_star_patternContext, 0) as Double_star_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
	public items_pattern(): Items_patternContext {
		return this.getTypedRuleContext(Items_patternContext, 0) as Items_patternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_mapping_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterMapping_pattern) {
	 		listener.enterMapping_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitMapping_pattern) {
	 		listener.exitMapping_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitMapping_pattern) {
			return visitor.visitMapping_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Items_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public key_value_pattern_list(): Key_value_patternContext[] {
		return this.getTypedRuleContexts(Key_value_patternContext) as Key_value_patternContext[];
	}
	public key_value_pattern(i: number): Key_value_patternContext {
		return this.getTypedRuleContext(Key_value_patternContext, i) as Key_value_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_items_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterItems_pattern) {
	 		listener.enterItems_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitItems_pattern) {
	 		listener.exitItems_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitItems_pattern) {
			return visitor.visitItems_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Key_value_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
	public literal_expr(): Literal_exprContext {
		return this.getTypedRuleContext(Literal_exprContext, 0) as Literal_exprContext;
	}
	public attr(): AttrContext {
		return this.getTypedRuleContext(AttrContext, 0) as AttrContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_key_value_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterKey_value_pattern) {
	 		listener.enterKey_value_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitKey_value_pattern) {
	 		listener.exitKey_value_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitKey_value_pattern) {
			return visitor.visitKey_value_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Double_star_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POWER(): TerminalNode {
		return this.getToken(Python3Parser.POWER, 0);
	}
	public pattern_capture_target(): Pattern_capture_targetContext {
		return this.getTypedRuleContext(Pattern_capture_targetContext, 0) as Pattern_capture_targetContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_double_star_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDouble_star_pattern) {
	 		listener.enterDouble_star_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDouble_star_pattern) {
	 		listener.exitDouble_star_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDouble_star_pattern) {
			return visitor.visitDouble_star_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name_or_attr(): Name_or_attrContext {
		return this.getTypedRuleContext(Name_or_attrContext, 0) as Name_or_attrContext;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public positional_patterns(): Positional_patternsContext {
		return this.getTypedRuleContext(Positional_patternsContext, 0) as Positional_patternsContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
	public keyword_patterns(): Keyword_patternsContext {
		return this.getTypedRuleContext(Keyword_patternsContext, 0) as Keyword_patternsContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_class_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterClass_pattern) {
	 		listener.enterClass_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitClass_pattern) {
	 		listener.exitClass_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitClass_pattern) {
			return visitor.visitClass_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Positional_patternsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public pattern_list(): PatternContext[] {
		return this.getTypedRuleContexts(PatternContext) as PatternContext[];
	}
	public pattern(i: number): PatternContext {
		return this.getTypedRuleContext(PatternContext, i) as PatternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_positional_patterns;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterPositional_patterns) {
	 		listener.enterPositional_patterns(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitPositional_patterns) {
	 		listener.exitPositional_patterns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitPositional_patterns) {
			return visitor.visitPositional_patterns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Keyword_patternsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public keyword_pattern_list(): Keyword_patternContext[] {
		return this.getTypedRuleContexts(Keyword_patternContext) as Keyword_patternContext[];
	}
	public keyword_pattern(i: number): Keyword_patternContext {
		return this.getTypedRuleContext(Keyword_patternContext, i) as Keyword_patternContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_keyword_patterns;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterKeyword_patterns) {
	 		listener.enterKeyword_patterns(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitKeyword_patterns) {
	 		listener.exitKeyword_patterns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitKeyword_patterns) {
			return visitor.visitKeyword_patterns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Keyword_patternContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.ASSIGN, 0);
	}
	public pattern(): PatternContext {
		return this.getTypedRuleContext(PatternContext, 0) as PatternContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_keyword_pattern;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterKeyword_pattern) {
	 		listener.enterKeyword_pattern(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitKeyword_pattern) {
	 		listener.exitKeyword_pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitKeyword_pattern) {
			return visitor.visitKeyword_pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public or_test_list(): Or_testContext[] {
		return this.getTypedRuleContexts(Or_testContext) as Or_testContext[];
	}
	public or_test(i: number): Or_testContext {
		return this.getTypedRuleContext(Or_testContext, i) as Or_testContext;
	}
	public IF(): TerminalNode {
		return this.getToken(Python3Parser.IF, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(Python3Parser.ELSE, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
	public lambdef(): LambdefContext {
		return this.getTypedRuleContext(LambdefContext, 0) as LambdefContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_test;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTest) {
	 		listener.enterTest(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTest) {
	 		listener.exitTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTest) {
			return visitor.visitTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Test_nocondContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public or_test(): Or_testContext {
		return this.getTypedRuleContext(Or_testContext, 0) as Or_testContext;
	}
	public lambdef_nocond(): Lambdef_nocondContext {
		return this.getTypedRuleContext(Lambdef_nocondContext, 0) as Lambdef_nocondContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_test_nocond;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTest_nocond) {
	 		listener.enterTest_nocond(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTest_nocond) {
	 		listener.exitTest_nocond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTest_nocond) {
			return visitor.visitTest_nocond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdefContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LAMBDA(): TerminalNode {
		return this.getToken(Python3Parser.LAMBDA, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
	public varargslist(): VarargslistContext {
		return this.getTypedRuleContext(VarargslistContext, 0) as VarargslistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_lambdef;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterLambdef) {
	 		listener.enterLambdef(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitLambdef) {
	 		listener.exitLambdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitLambdef) {
			return visitor.visitLambdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambdef_nocondContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LAMBDA(): TerminalNode {
		return this.getToken(Python3Parser.LAMBDA, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public test_nocond(): Test_nocondContext {
		return this.getTypedRuleContext(Test_nocondContext, 0) as Test_nocondContext;
	}
	public varargslist(): VarargslistContext {
		return this.getTypedRuleContext(VarargslistContext, 0) as VarargslistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_lambdef_nocond;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterLambdef_nocond) {
	 		listener.enterLambdef_nocond(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitLambdef_nocond) {
	 		listener.exitLambdef_nocond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitLambdef_nocond) {
			return visitor.visitLambdef_nocond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_testContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public and_test_list(): And_testContext[] {
		return this.getTypedRuleContexts(And_testContext) as And_testContext[];
	}
	public and_test(i: number): And_testContext {
		return this.getTypedRuleContext(And_testContext, i) as And_testContext;
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(Python3Parser.OR, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_or_test;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterOr_test) {
	 		listener.enterOr_test(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitOr_test) {
	 		listener.exitOr_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitOr_test) {
			return visitor.visitOr_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_testContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public not_test_list(): Not_testContext[] {
		return this.getTypedRuleContexts(Not_testContext) as Not_testContext[];
	}
	public not_test(i: number): Not_testContext {
		return this.getTypedRuleContext(Not_testContext, i) as Not_testContext;
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(Python3Parser.AND, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_and_test;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAnd_test) {
	 		listener.enterAnd_test(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAnd_test) {
	 		listener.exitAnd_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAnd_test) {
			return visitor.visitAnd_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Not_testContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NOT(): TerminalNode {
		return this.getToken(Python3Parser.NOT, 0);
	}
	public not_test(): Not_testContext {
		return this.getTypedRuleContext(Not_testContext, 0) as Not_testContext;
	}
	public comparison(): ComparisonContext {
		return this.getTypedRuleContext(ComparisonContext, 0) as ComparisonContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_not_test;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterNot_test) {
	 		listener.enterNot_test(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitNot_test) {
	 		listener.exitNot_test(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitNot_test) {
			return visitor.visitNot_test(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public comp_op_list(): Comp_opContext[] {
		return this.getTypedRuleContexts(Comp_opContext) as Comp_opContext[];
	}
	public comp_op(i: number): Comp_opContext {
		return this.getTypedRuleContext(Comp_opContext, i) as Comp_opContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_comparison;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterComparison) {
	 		listener.enterComparison(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitComparison) {
	 		listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_opContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LESS_THAN(): TerminalNode {
		return this.getToken(Python3Parser.LESS_THAN, 0);
	}
	public GREATER_THAN(): TerminalNode {
		return this.getToken(Python3Parser.GREATER_THAN, 0);
	}
	public EQUALS(): TerminalNode {
		return this.getToken(Python3Parser.EQUALS, 0);
	}
	public GT_EQ(): TerminalNode {
		return this.getToken(Python3Parser.GT_EQ, 0);
	}
	public LT_EQ(): TerminalNode {
		return this.getToken(Python3Parser.LT_EQ, 0);
	}
	public NOT_EQ_1(): TerminalNode {
		return this.getToken(Python3Parser.NOT_EQ_1, 0);
	}
	public NOT_EQ_2(): TerminalNode {
		return this.getToken(Python3Parser.NOT_EQ_2, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(Python3Parser.IN, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(Python3Parser.NOT, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(Python3Parser.IS, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_comp_op;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterComp_op) {
	 		listener.enterComp_op(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitComp_op) {
	 		listener.exitComp_op(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitComp_op) {
			return visitor.visitComp_op(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Star_exprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_star_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterStar_expr) {
	 		listener.enterStar_expr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitStar_expr) {
	 		listener.exitStar_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitStar_expr) {
			return visitor.visitStar_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom_expr(): Atom_exprContext {
		return this.getTypedRuleContext(Atom_exprContext, 0) as Atom_exprContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ADD_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.ADD);
	}
	public ADD(i: number): TerminalNode {
		return this.getToken(Python3Parser.ADD, i);
	}
	public MINUS_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.MINUS);
	}
	public MINUS(i: number): TerminalNode {
		return this.getToken(Python3Parser.MINUS, i);
	}
	public NOT_OP_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.NOT_OP);
	}
	public NOT_OP(i: number): TerminalNode {
		return this.getToken(Python3Parser.NOT_OP, i);
	}
	public POWER(): TerminalNode {
		return this.getToken(Python3Parser.POWER, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public AT(): TerminalNode {
		return this.getToken(Python3Parser.AT, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(Python3Parser.DIV, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(Python3Parser.MOD, 0);
	}
	public IDIV(): TerminalNode {
		return this.getToken(Python3Parser.IDIV, 0);
	}
	public LEFT_SHIFT(): TerminalNode {
		return this.getToken(Python3Parser.LEFT_SHIFT, 0);
	}
	public RIGHT_SHIFT(): TerminalNode {
		return this.getToken(Python3Parser.RIGHT_SHIFT, 0);
	}
	public AND_OP(): TerminalNode {
		return this.getToken(Python3Parser.AND_OP, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(Python3Parser.XOR, 0);
	}
	public OR_OP(): TerminalNode {
		return this.getToken(Python3Parser.OR_OP, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Atom_exprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public AWAIT(): TerminalNode {
		return this.getToken(Python3Parser.AWAIT, 0);
	}
	public trailer_list(): TrailerContext[] {
		return this.getTypedRuleContexts(TrailerContext) as TrailerContext[];
	}
	public trailer(i: number): TrailerContext {
		return this.getTypedRuleContext(TrailerContext, i) as TrailerContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_atom_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAtom_expr) {
	 		listener.enterAtom_expr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAtom_expr) {
	 		listener.exitAtom_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAtom_expr) {
			return visitor.visitAtom_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public yield_expr(): Yield_exprContext {
		return this.getTypedRuleContext(Yield_exprContext, 0) as Yield_exprContext;
	}
	public testlist_comp(): Testlist_compContext {
		return this.getTypedRuleContext(Testlist_compContext, 0) as Testlist_compContext;
	}
	public OPEN_BRACK(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_BRACK, 0);
	}
	public CLOSE_BRACK(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_BRACK, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_BRACE, 0);
	}
	public dictorsetmaker(): DictorsetmakerContext {
		return this.getTypedRuleContext(DictorsetmakerContext, 0) as DictorsetmakerContext;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(Python3Parser.NUMBER, 0);
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(Python3Parser.STRING, i);
	}
	public ELLIPSIS(): TerminalNode {
		return this.getToken(Python3Parser.ELLIPSIS, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(Python3Parser.NONE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(Python3Parser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(Python3Parser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_atom;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NAME(): TerminalNode {
		return this.getToken(Python3Parser.NAME, 0);
	}
	public UNDERSCORE(): TerminalNode {
		return this.getToken(Python3Parser.UNDERSCORE, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(Python3Parser.MATCH, 0);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_name;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterName) {
	 		listener.enterName(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitName) {
	 		listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Testlist_compContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public star_expr_list(): Star_exprContext[] {
		return this.getTypedRuleContexts(Star_exprContext) as Star_exprContext[];
	}
	public star_expr(i: number): Star_exprContext {
		return this.getTypedRuleContext(Star_exprContext, i) as Star_exprContext;
	}
	public comp_for(): Comp_forContext {
		return this.getTypedRuleContext(Comp_forContext, 0) as Comp_forContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_testlist_comp;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTestlist_comp) {
	 		listener.enterTestlist_comp(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTestlist_comp) {
	 		listener.exitTestlist_comp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTestlist_comp) {
			return visitor.visitTestlist_comp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrailerContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public arglist(): ArglistContext {
		return this.getTypedRuleContext(ArglistContext, 0) as ArglistContext;
	}
	public OPEN_BRACK(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_BRACK, 0);
	}
	public subscriptlist(): SubscriptlistContext {
		return this.getTypedRuleContext(SubscriptlistContext, 0) as SubscriptlistContext;
	}
	public CLOSE_BRACK(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_BRACK, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(Python3Parser.DOT, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_trailer;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTrailer) {
	 		listener.enterTrailer(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTrailer) {
	 		listener.exitTrailer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTrailer) {
			return visitor.visitTrailer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subscript__list(): Subscript_Context[] {
		return this.getTypedRuleContexts(Subscript_Context) as Subscript_Context[];
	}
	public subscript_(i: number): Subscript_Context {
		return this.getTypedRuleContext(Subscript_Context, i) as Subscript_Context;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_subscriptlist;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSubscriptlist) {
	 		listener.enterSubscriptlist(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSubscriptlist) {
	 		listener.exitSubscriptlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSubscriptlist) {
			return visitor.visitSubscriptlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subscript_Context extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public sliceop(): SliceopContext {
		return this.getTypedRuleContext(SliceopContext, 0) as SliceopContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_subscript_;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSubscript_) {
	 		listener.enterSubscript_(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSubscript_) {
	 		listener.exitSubscript_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSubscript_) {
			return visitor.visitSubscript_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceopContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_sliceop;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterSliceop) {
	 		listener.enterSliceop(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitSliceop) {
	 		listener.exitSliceop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitSliceop) {
			return visitor.visitSliceop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public star_expr_list(): Star_exprContext[] {
		return this.getTypedRuleContexts(Star_exprContext) as Star_exprContext[];
	}
	public star_expr(i: number): Star_exprContext {
		return this.getTypedRuleContext(Star_exprContext, i) as Star_exprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_exprlist;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterExprlist) {
	 		listener.enterExprlist(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitExprlist) {
	 		listener.exitExprlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitExprlist) {
			return visitor.visitExprlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestlistContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_testlist;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterTestlist) {
	 		listener.enterTestlist(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitTestlist) {
	 		listener.exitTestlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitTestlist) {
			return visitor.visitTestlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(Python3Parser.COLON, i);
	}
	public POWER_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.POWER);
	}
	public POWER(i: number): TerminalNode {
		return this.getToken(Python3Parser.POWER, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public comp_for(): Comp_forContext {
		return this.getTypedRuleContext(Comp_forContext, 0) as Comp_forContext;
	}
	public star_expr_list(): Star_exprContext[] {
		return this.getTypedRuleContexts(Star_exprContext) as Star_exprContext[];
	}
	public star_expr(i: number): Star_exprContext {
		return this.getTypedRuleContext(Star_exprContext, i) as Star_exprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_dictorsetmaker;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterDictorsetmaker) {
	 		listener.enterDictorsetmaker(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitDictorsetmaker) {
	 		listener.exitDictorsetmaker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitDictorsetmaker) {
			return visitor.visitDictorsetmaker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassdefContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(Python3Parser.CLASS, 0);
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(Python3Parser.COLON, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public OPEN_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.OPEN_PAREN, 0);
	}
	public CLOSE_PAREN(): TerminalNode {
		return this.getToken(Python3Parser.CLOSE_PAREN, 0);
	}
	public arglist(): ArglistContext {
		return this.getTypedRuleContext(ArglistContext, 0) as ArglistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_classdef;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterClassdef) {
	 		listener.enterClassdef(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitClassdef) {
	 		listener.exitClassdef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitClassdef) {
			return visitor.visitClassdef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArglistContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(Python3Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_arglist;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterArglist) {
	 		listener.enterArglist(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitArglist) {
	 		listener.exitArglist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitArglist) {
			return visitor.visitArglist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(Python3Parser.ASSIGN, 0);
	}
	public POWER(): TerminalNode {
		return this.getToken(Python3Parser.POWER, 0);
	}
	public STAR(): TerminalNode {
		return this.getToken(Python3Parser.STAR, 0);
	}
	public comp_for(): Comp_forContext {
		return this.getTypedRuleContext(Comp_forContext, 0) as Comp_forContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_argument;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterArgument) {
	 		listener.enterArgument(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitArgument) {
	 		listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_iterContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comp_for(): Comp_forContext {
		return this.getTypedRuleContext(Comp_forContext, 0) as Comp_forContext;
	}
	public comp_if(): Comp_ifContext {
		return this.getTypedRuleContext(Comp_ifContext, 0) as Comp_ifContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_comp_iter;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterComp_iter) {
	 		listener.enterComp_iter(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitComp_iter) {
	 		listener.exitComp_iter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitComp_iter) {
			return visitor.visitComp_iter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_forContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(Python3Parser.FOR, 0);
	}
	public exprlist(): ExprlistContext {
		return this.getTypedRuleContext(ExprlistContext, 0) as ExprlistContext;
	}
	public IN(): TerminalNode {
		return this.getToken(Python3Parser.IN, 0);
	}
	public or_test(): Or_testContext {
		return this.getTypedRuleContext(Or_testContext, 0) as Or_testContext;
	}
	public ASYNC(): TerminalNode {
		return this.getToken(Python3Parser.ASYNC, 0);
	}
	public comp_iter(): Comp_iterContext {
		return this.getTypedRuleContext(Comp_iterContext, 0) as Comp_iterContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_comp_for;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterComp_for) {
	 		listener.enterComp_for(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitComp_for) {
	 		listener.exitComp_for(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitComp_for) {
			return visitor.visitComp_for(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comp_ifContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(Python3Parser.IF, 0);
	}
	public test_nocond(): Test_nocondContext {
		return this.getTypedRuleContext(Test_nocondContext, 0) as Test_nocondContext;
	}
	public comp_iter(): Comp_iterContext {
		return this.getTypedRuleContext(Comp_iterContext, 0) as Comp_iterContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_comp_if;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterComp_if) {
	 		listener.enterComp_if(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitComp_if) {
	 		listener.exitComp_if(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitComp_if) {
			return visitor.visitComp_if(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Encoding_declContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public name(): NameContext {
		return this.getTypedRuleContext(NameContext, 0) as NameContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_encoding_decl;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterEncoding_decl) {
	 		listener.enterEncoding_decl(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitEncoding_decl) {
	 		listener.exitEncoding_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitEncoding_decl) {
			return visitor.visitEncoding_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_exprContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public YIELD(): TerminalNode {
		return this.getToken(Python3Parser.YIELD, 0);
	}
	public yield_arg(): Yield_argContext {
		return this.getTypedRuleContext(Yield_argContext, 0) as Yield_argContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_yield_expr;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterYield_expr) {
	 		listener.enterYield_expr(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitYield_expr) {
	 		listener.exitYield_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitYield_expr) {
			return visitor.visitYield_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Yield_argContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(Python3Parser.FROM, 0);
	}
	public test(): TestContext {
		return this.getTypedRuleContext(TestContext, 0) as TestContext;
	}
	public testlist(): TestlistContext {
		return this.getTypedRuleContext(TestlistContext, 0) as TestlistContext;
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_yield_arg;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterYield_arg) {
	 		listener.enterYield_arg(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitYield_arg) {
	 		listener.exitYield_arg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitYield_arg) {
			return visitor.visitYield_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringsContext extends ParserRuleContext {
	constructor(parser?: Python3Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_list(): TerminalNode[] {
	    	return this.getTokens(Python3Parser.STRING);
	}
	public STRING(i: number): TerminalNode {
		return this.getToken(Python3Parser.STRING, i);
	}
    public get ruleIndex(): number {
    	return Python3Parser.RULE_strings;
	}
	public enterRule(listener: Python3ParserListener): void {
	    if(listener.enterStrings) {
	 		listener.enterStrings(this);
		}
	}
	public exitRule(listener: Python3ParserListener): void {
	    if(listener.exitStrings) {
	 		listener.exitStrings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Python3ParserVisitor<Result>): Result {
		if (visitor.visitStrings) {
			return visitor.visitStrings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
