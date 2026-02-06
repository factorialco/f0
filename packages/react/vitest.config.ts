import { fileURLToPath } from "node:url"
import path from "path"
import { defineConfig } from "vitest/config"
import viteConfig from "./vite.config"

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

const alias = {
  "@": path.resolve(dirname, "./src"),
  "~": path.resolve(dirname, "./"),
}

export default defineConfig({
  ...viteConfig,
  plugins: viteConfig.plugins || [],
  resolve: viteConfig.resolve,
  test: {
    // Base test configuration shared by all projects
    environment: "jsdom",
    setupFiles: ["./vite/vitest.setup.ts"],
    alias: {
      ...alias,
    },
    typecheck: {
      tsconfig: "./tsconfig.tests.json",
    },
    coverage: {
      // Include covered and uncovered files matching this pattern
      // In Vitest 4, coverage.include must be explicitly defined to include uncovered files
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      // Exclusion is applied for the files that match include pattern above
      exclude: [
        "**/*.stories.{ts,tsx}",
        "**/*.spec.{ts,tsx}",
        "**/__tests__/**",
        "**/node_modules/**",
        "**/dist/**",
      ],
      reporter: ["text", "json-summary", "json", "html"],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
        },
      },
    ],
  },
})
