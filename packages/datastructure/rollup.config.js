export default {
  input: ['src/index.js'],
  output: {
    dir: 'lib',
    format: 'cjs',
    sourcemap: false,
    exports: 'auto'
  },
  preserveModules: true
}