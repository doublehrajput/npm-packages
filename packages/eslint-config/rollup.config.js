import json from "@rollup/plugin-json";

export default {
  input: ['src/index.js'],
  output: {
    file: "lib/main.js",
    format: 'cjs',
    sourcemap: false,
    exports: 'default'
  },
  plugins: [
    // ... other rollup plugins
    json()
  ]
};