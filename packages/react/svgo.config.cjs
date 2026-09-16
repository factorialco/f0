// eslint-disable-next-line no-undef
module.exports = {
  multipass: false,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeTitle: false,
          mergePaths: false,
          convertPathData: false,
          convertTransform: false,
          collapseGroups: false,
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: ["stroke-width"],
      },
    },
  ],
}
