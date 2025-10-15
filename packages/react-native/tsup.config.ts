import { defineConfig } from "tsup";
import { glob } from "glob";

// Get all source files excluding tests, stories, and snapshots
const getEntryPoints = () => {
  const patterns = [
    "src/index.ts",
    "src/components/**/*.tsx",
    "src/components/**/*.ts",
    "src/icons/**/*.ts",
    "src/icons/**/*.tsx",
    "src/lib/**/*.ts",
    "src/lib/**/*.tsx",
    "src/ui/**/*.tsx",
  ];

  const ignore = [
    "**/*.spec.ts",
    "**/*.spec.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
    "**/*.stories.ts",
    "**/*.stories.tsx",
    "**/__tests__/**",
    "**/__snapshots__/**",
  ];

  return glob.sync(patterns, { ignore });
};

export default defineConfig({
  entry: getEntryPoints(),
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
