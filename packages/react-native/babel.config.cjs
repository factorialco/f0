module.exports = {
  presets: [
    "babel-preset-expo",
    [
      "@babel/preset-typescript",
      {
        // Allow parsing of TypeScript 5.0+ syntax including const type parameters
        allowNamespaces: true,
        allowDeclareFields: true,
      },
    ],
  ],
};
