import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  tsconfig: "tsconfig.build.json",
  external: [
    "react",
    "react-native",
    "react-dom",
    "react-native-web",
    "@factorialco/f0-core",
    "expo-font",
    "expo-haptics",
    "expo-linking",
    "react-native-svg",
    "nativewind",
    "tailwindcss",
    "clsx",
    "cva",
    "tailwind-merge",
    "lodash",
    "date-fns",
    "twemoji-parser",
  ],
  treeshake: true,
  minify: false, // Keep readable for debugging
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
