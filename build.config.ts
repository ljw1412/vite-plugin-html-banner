import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  entries: ['./src/index'],
  declaration: true,
  externals: ['vite'],
  rollup: {
    emitCJS: true
  }
})
