import json from "@rollup/plugin-json";

export default {
  input: ['src/index.js'],
  output: {
    file: "lib/main.js",
    format: 'cjs',
    sourcemap: false,
    exports: 'named',
  },
  plugins: [
    // ... other rollup plugins
    json()
  ]
};