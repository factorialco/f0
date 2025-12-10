/// <reference types="vitest/config" />
/// <reference types="vitest" />
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import react from "@vitejs/plugin-react"
import { consola } from "consola"
import dotenv from "dotenv"
import { spawnSync } from "node:child_process"
import { copyFileSync, existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path, { resolve } from "path"
import removeTestIdAttribute from "rollup-plugin-jsx-remove-attributes"
import { defineConfig, Plugin } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import { buildSyncPlugin } from "./vite/build-sync.plugin"
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

dotenv.config({
  path: [".env.local", ".env"],
})
const extraPlugins: Plugin[] = []

// Add tailwind build
const buildTailwind = process.argv.find((arg) => arg.startsWith("--tailwind"))
if (buildTailwind) {
  extraPlugins.push({
    name: "build-tailwind",
    async closeBundle() {
      spawnSync("pnpm", ["build:tailwind"], {
        stdio: "inherit",
      })
    },
  })
}

/* Build sync */
const buildSyncArg = process.argv.find((arg) => arg.startsWith("--buildSync"))
const buildSync = !!buildSyncArg
const buildSyncValue = buildSyncArg
  ? buildSyncArg.split("=")[1] || process.env.F0_REMOTE_SYNC
  : null
if (buildSync) {
  if (!buildSyncValue) {
    consola.error(
      "The buildSync flag must remote target or you can set it in the env variable F0_REMOTE_SYNC in the `.env.local` file"
    )
    process.exit(1)
  }
  const [remote, remoteFolder] = buildSyncValue.split(":")
  const target = buildSyncValue.includes(":")
    ? [remote, remoteFolder].filter(Boolean).join(":")
    : buildSyncValue
  const targetFolder = `${target}/node_modules/@factorialco/f0-react/dist`
  if (!existsSync(targetFolder)) {
    consola.error(
      "The target folder does not exist. Please check the target folder and try again."
    )
    process.exit(1)
  }
  extraPlugins.push(
    buildSyncPlugin({
      target: targetFolder,
    })
  )
}
/* ------------ Build sync end ------*/

if (process.env.BUILD_TYPES) {
  extraPlugins.push(
    dts({
      include: ["src"],
      exclude: ["**/*.stories.tsx"],
      rollupTypes: true,
      afterBuild: () => {
        // Copy global.d.ts to dist - needed because rollupTypes doesn't inline ambient declarations
        const src = resolve(__dirname, "src/global.d.ts")
        const dest = resolve(__dirname, "dist/global.d.ts")
        copyFileSync(src, dest)
        consola.success("Copied global.d.ts to dist/")
      },
    })
  )
}
const alias = {
  "@": path.resolve(__dirname, "./src"),
  "~": path.resolve(__dirname, "./"),
}

// Check if we're building for Storybook to preserve data-testid attributes
const isStorybookBuild = process.env.STORYBOOK_BUILD === "true"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    // Only remove test IDs in production builds that are NOT for Storybook
    ...(isStorybookBuild
      ? []
      : [
          removeTestIdAttribute({
            include: [/\.[tj]sx$/],
            exclude: ["**/node_modules/**"],
            attributes: ["data-testid"],
            environments: ["production"],
            debug: false,
            usage: "vite",
          }),
        ]),
    ...extraPlugins,
  ],
  resolve: {
    alias: {
      ...alias,
      "@storybook-static": path.resolve(__dirname, "./.storybook/static"),
    },
  },
  build: {
    lib: {
      entry: {
        ["f0"]: resolve(__dirname, "src/f0.ts"),
        ["experimental"]: resolve(__dirname, "src/experimental.ts"),
        ["i18n-provider-defaults"]: resolve(
          __dirname,
          "src/lib/providers/i18n/i18n-provider-defaults.ts"
        ),
      },
      fileName: (_, entryName) => {
        return `${entryName}.js`
      },
      formats: ["es"],
    },
    outDir: "dist",
    copyPublicDir: false,
    rollupOptions: {
      external: ["react/jsx-runtime", "react", "react-dom", /@copilotkit\/.*/],
      maxParallelFileOps: 100,
      // Workaround to fix rebuild https://github.com/vitejs/vite/issues/19410#issuecomment-2661835482
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vite/vitest.setup.ts"],
    alias: {
      ...alias,
    },
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ["text", "json-summary", "json", "html"],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
    workspace: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
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
