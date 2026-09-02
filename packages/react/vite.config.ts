import react from "@vitejs/plugin-react"
import { consola } from "consola"
import dotenv from "dotenv"
import { copyFileSync, existsSync } from "node:fs"
import path, { resolve } from "path"
import { defineConfig, esmExternalRequirePlugin, Plugin } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

import { componentStatusVitePlugin } from "./scripts/component-status-build.mjs"
import { buildSyncPlugin } from "./vite/build-sync.plugin.ts"
import {
  declarationEntries,
  runtimeEntries,
} from "./vite/publication-contract.ts"

dotenv.config({
  path: [".env.local", ".env"],
})
const extraPlugins: Plugin[] = []
const buildDeclarationsOnly = process.env.BUILD_DECLARATIONS_ONLY === "true"
const buildWatch = process.argv.some((arg) => arg === "--watch" || arg === "-w")

const isBareRuntimeImport = (id: string) =>
  !id.startsWith(".") &&
  !id.startsWith("/") &&
  !id.startsWith("@/") &&
  !id.startsWith("~/") &&
  !id.startsWith("virtual:") &&
  !id.includes("?") &&
  !id.startsWith("\0")

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

if (process.env.BUILD_TYPES === "true") {
  extraPlugins.push(
    dts({
      include: ["src"],
      tsconfigPath: resolve(import.meta.dirname, "tsconfig-build.json"),
      exclude: [
        "**/__mocks__/**",
        "**/__stories__/**",
        "**/__tests__/**",
        "**/*.spec.*",
        "**/*.stories.*",
        "**/*.test.*",
      ],
      entryRoot: resolve(import.meta.dirname, "src"),
      declarationOnly: buildDeclarationsOnly,
      afterDiagnostic: (diagnostics) => {
        if (diagnostics.length > 0) {
          throw new Error(
            `Declaration build found ${diagnostics.length} TypeScript diagnostic(s)`
          )
        }
      },
      afterBuild: () => {
        // Ambient declarations are not emitted from the source tree automatically.
        const src = resolve(import.meta.dirname, "src/global.d.ts")
        const dest = resolve(import.meta.dirname, "dist/global.d.ts")
        copyFileSync(src, dest)
        consola.success("Copied global.d.ts to dist/")
      },
    })
  )
}
const alias = {
  "@": path.resolve(import.meta.dirname, "./src"),
  "~": path.resolve(import.meta.dirname, "./"),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ...(!buildDeclarationsOnly
      ? [
          esmExternalRequirePlugin({
            external: ["react/jsx-runtime", "react", "react-dom"],
          }),
        ]
      : []),
    react(),
    libInjectCss(),
    componentStatusVitePlugin(),
    ...extraPlugins,
  ],
  resolve: {
    alias: {
      ...alias,
      "@storybook-static": path.resolve(
        import.meta.dirname,
        "./.storybook/static"
      ),
    },
  },
  build: {
    emptyOutDir: !buildDeclarationsOnly && !buildWatch,
    lib: {
      entry: buildDeclarationsOnly ? declarationEntries : runtimeEntries,
      fileName: (_, entryName) => {
        return `${entryName}.js`
      },
      formats: ["es"],
    },
    outDir: buildDeclarationsOnly ? "dist" : "dist/esm",
    copyPublicDir: false,
    rollupOptions: {
      external: buildDeclarationsOnly
        ? [/@copilotkit\/.*/, /@livekit\/.*/, "livekit-client"]
        : isBareRuntimeImport,
      // Workaround to fix rebuild https://github.com/vitejs/vite/issues/19410#issuecomment-2661835482
      output: {
        entryFileNames: !buildDeclarationsOnly
          ? (chunkInfo) =>
              chunkInfo.name.includes("node_modules/")
                ? "_embedded/[hash].js"
                : "[name].js"
          : undefined,
        globals: {
          react: "React",
        },
        preserveModules: !buildDeclarationsOnly,
        preserveModulesRoot: !buildDeclarationsOnly
          ? resolve(import.meta.dirname, "src")
          : undefined,
      },
    },
  },
})
