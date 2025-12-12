import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import { playwright } from "@vitest/browser-playwright"
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
      tsconfig: "./tsconfig.test.json",
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
      // you can include other reporters, but 'json-summary' is required, json is recommended
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
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        optimizeDeps: {
          include: ["react", "react-dom", "react/jsx-dev-runtime"],
        },
        test: {
          name: "storybook",
          testTimeout: 120000, // 120 seconds timeout per test
          hookTimeout: 90000, // 90 seconds timeout for hooks
          retry: 2, // Retry failed tests up to 2 times
          maxWorkers: 2,
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
})
