import { copyFileSync } from "node:fs"
import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    f0: "src/f0.ts",
    experimental: "src/experimental/exports.ts",
  },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  tsconfig: "tsconfig-build.json",
  external: ["react/jsx-runtime", "react", "react-dom"],
  onSuccess: async () => {
    copyFileSync("src/global.d.ts", "dist/global.d.ts")
    console.log("✓ Copied global.d.ts to dist/")
  },
})
