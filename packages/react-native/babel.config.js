module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }]],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src", "./playground"],
          alias: {
            "@": "./src",
            lib: "./playground/lib",
            ui: "./playground/ui",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
