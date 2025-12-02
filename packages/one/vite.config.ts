/// <reference types="vitest" />
import react from "@vitejs/plugin-react"
import { copyFileSync } from "node:fs"
import path, { resolve } from "path"
import removeTestIdAttribute from "rollup-plugin-jsx-remove-attributes"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

const alias = {
  "@": path.resolve(__dirname, "./src"),
  "~": path.resolve(__dirname, "./"),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    // Remove test IDs in production builds
    removeTestIdAttribute({
      include: [/\.[tj]sx$/],
      exclude: ["**/node_modules/**"],
      attributes: ["data-testid"],
      environments: ["production"],
      debug: false,
      usage: "vite",
    }),
    // Generate TypeScript declarations
    ...(process.env.BUILD_TYPES
      ? [
          dts({
            include: ["src"],
            exclude: ["**/*.stories.tsx", "**/*.test.ts", "**/*.test.tsx"],
            rollupTypes: true,
            afterBuild: () => {
              // Copy global.d.ts to dist if it exists
              try {
                const src = resolve(__dirname, "src/global.d.ts")
                const dest = resolve(__dirname, "dist/global.d.ts")
                copyFileSync(src, dest)
                // eslint-disable-next-line no-console
                console.log("Copied global.d.ts to dist/")
              } catch {
                // File doesn't exist, skip
              }
            },
          }),
        ]
      : []),
  ],
  resolve: {
    alias,
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        web: resolve(__dirname, "src/web.ts"),
        expo: resolve(__dirname, "src/expo.ts"),
      },
      fileName: (_, entryName) => {
        return `${entryName}.js`
      },
      formats: ["es"],
    },
    outDir: "dist",
    copyPublicDir: false,
    rollupOptions: {
      external: [
        "react/jsx-runtime",
        "react",
        "react-dom",
        "react-native",
        /@copilotkit\/.*/,
        /@factorialco\/.*/,
        "motion",
        "clsx",
        "tailwind-merge",
        "usehooks-ts",
      ],
      maxParallelFileOps: 100, // Workaround to fix rebuild https://github.com/vitejs/vite/issues/19410#issuecomment-2661835482
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vite/vitest.setup.ts"],
    alias,
    typecheck: {
      tsconfig: "./tsconfig.json",
    },
    coverage: {
      reporter: ["text", "json-summary", "json", "html"],
      reportOnFailure: true,
    },
  },
})
