module.exports = [
  {
    path: "dist/f0.js",
    name: "JS: Stable",
    running: false,
  },
  {
    path: "dist/experimental.js",
    name: "JS: Experimental",
    running: false,
  },
  {
    path: "dist/*.css",
    name: "CSS",
    running: false,
    modifyEsbuildConfig: (config) => ({
      ...config,
      external: ["*.woff"],
      treeShaking: false,
    }),
  },
]
