# Bun Python Parser

Fork from https://github.com/DTStack/dt-python-parser with modifications.

Using lexer from: https://github.com/antlr/grammars-v4/blob/master/python/python3 with update underscore numbers support in python3
```python
100_000_000
10_00_0000_00000.00
```

### Install
```bash
bun i
```

### Download antlr4 binary and generate parser in typescript
```bash
bun run antlr4
```

### Build package
```bash
bun build.ts
```
