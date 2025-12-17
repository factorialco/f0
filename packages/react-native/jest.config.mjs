export default {
  preset: "react-native",
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    // Use custom transformer for ViewConfigIgnore.js - match any path containing ViewConfigIgnore.js
    ".*ViewConfigIgnore\\.js$":
      "<rootDir>/jest-transformer-viewconfigignore.cjs",
    "^.+\\.[jt]sx?$": [
      "babel-jest",
      {
        presets: ["babel-preset-expo", "@babel/preset-typescript"],
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|@sentry/react-native|native-base|react-native-svg|react-test-renderer))",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "\\.d\\.ts$"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/mocks/svg.js",
    // Mock ViewConfigIgnore to avoid TypeScript parsing issues
    "^react-native/Libraries/NativeComponent/ViewConfigIgnore$":
      "<rootDir>/mocks/ViewConfigIgnore.js",
    "^react-native/Libraries/NativeComponent/ViewConfigIgnore\\.js$":
      "<rootDir>/mocks/ViewConfigIgnore.js",
  },
  testEnvironment: "node",
};
