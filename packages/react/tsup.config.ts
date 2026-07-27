import { defineConfig } from "tsup"

import { componentStatusEsbuildPlugin } from "./scripts/component-status-build.mjs"

export default defineConfig({
  entry: {
    f0: "src/f0.ts",
    experimental: "src/experimental/exports.ts",
    "component-status": "src/component-status/exports.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  tsconfig: "tsconfig-build.json",
  external: ["react/jsx-runtime", "react", "react-dom"],
  esbuildPlugins: [componentStatusEsbuildPlugin()],
})
