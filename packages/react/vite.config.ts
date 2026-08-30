import react from "@vitejs/plugin-react"
import { consola } from "consola"
import dotenv from "dotenv"
import { spawnSync } from "node:child_process"
import { copyFileSync, existsSync } from "node:fs"
import path, { resolve } from "path"
import { defineConfig, esmExternalRequirePlugin, Plugin } from "vite"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"

import { componentStatusVitePlugin } from "./scripts/component-status-build.mjs"
import { buildSyncPlugin } from "./vite/build-sync.plugin.ts"

dotenv.config({
  path: [".env.local", ".env"],
})
const extraPlugins: Plugin[] = []
const buildDeclarationsOnly = process.env.BUILD_DECLARATIONS_ONLY === "true"
const buildWatch = process.env.BUILD_WATCH === "true"

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

const declarationEntries = {
  f0: resolve(import.meta.dirname, "src/f0.ts"),
  experimental: resolve(import.meta.dirname, "src/experimental.ts"),
  ai: resolve(import.meta.dirname, "src/ai.ts"),
  "component-status": resolve(import.meta.dirname, "src/component-status.ts"),
  "i18n-provider-defaults": resolve(
    import.meta.dirname,
    "src/lib/providers/i18n/i18n-provider-defaults.ts"
  ),
}

const isolatedRuntimeEntries = {
  F0Alert: resolve(import.meta.dirname, "src/components/F0Alert/index.ts"),
  F0Button: resolve(import.meta.dirname, "src/components/F0Button/index.ts"),
  F0Box: resolve(import.meta.dirname, "src/lib/F0Box/index.tsx"),
  F0Card: resolve(import.meta.dirname, "src/components/F0Card/index.tsx"),
  F0DatePicker: resolve(
    import.meta.dirname,
    "src/components/F0DatePicker/index.ts"
  ),
  F0Text: resolve(import.meta.dirname, "src/components/F0Text/index.tsx"),
  F0Heading: resolve(import.meta.dirname, "src/components/F0Heading/index.tsx"),
  F0NumberInput: resolve(
    import.meta.dirname,
    "src/components/F0NumberInput/index.tsx"
  ),
  F0Select: resolve(import.meta.dirname, "src/components/F0Select/index.tsx"),
  F0TextInput: resolve(
    import.meta.dirname,
    "src/components/F0TextInput/index.tsx"
  ),
  F0Dialog: resolve(import.meta.dirname, "src/patterns/F0Dialog/index.tsx"),
  F0Form: resolve(import.meta.dirname, "src/patterns/F0Form/index.tsx"),
  OneDataCollection: resolve(
    import.meta.dirname,
    "src/patterns/OneDataCollection/exports.ts"
  ),
  F0AiChat: resolve(import.meta.dirname, "src/kits/ai/F0AiChat/index.ts"),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    esmExternalRequirePlugin({
      external: ["react/jsx-runtime", "react", "react-dom"],
    }),
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
      entry: buildDeclarationsOnly
        ? declarationEntries
        : { ...declarationEntries, ...isolatedRuntimeEntries },
      fileName: (_, entryName) => {
        return `${entryName}.js`
      },
      formats: ["es"],
    },
    outDir: "dist",
    copyPublicDir: false,
    rollupOptions: {
      external: [/@copilotkit\/.*/, /@livekit\/.*/, "livekit-client"],
      // Workaround to fix rebuild https://github.com/vitejs/vite/issues/19410#issuecomment-2661835482
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
})
