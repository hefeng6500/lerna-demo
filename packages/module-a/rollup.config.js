// rollup.config.js
export default {
  // 核心选项
  input: "lib/module-a.js",

  output: {  // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: "dist/module-a.js",
    format: "cjs"
  },
};