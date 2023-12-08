import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: true,
  plugins: [
    dts()
  ],
})

const text = await Bun.file('./dist/index.d.ts').text()
let content = 'declare module "python-parser" {\n'
content += text.split('\n').map(line => '    ' + line).join('\n')
content += '\n}\n'
Bun.write('./dist/index.d.ts', content)
