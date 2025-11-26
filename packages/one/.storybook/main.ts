import type { StorybookConfig } from "@storybook/react-vite"
import { dirname, join, resolve } from "node:path"
import * as process from "node:process"
import remarkGfm from "remark-gfm"

// We should add the STORYBOOK_ prefix to make sure that the environment variables are in browser mode (for example manager.ts file)
if (process.env.PUBLIC_BUILD) {
  process.env.STORYBOOK_PUBLIC_BUILD = process.env.PUBLIC_BUILD
}

// Mark that we're building for Storybook to preserve data-testid attributes
process.env.STORYBOOK_BUILD = "true"

const config: StorybookConfig = {
  stories: [
    {
      directory: "../src/components",
      titlePrefix: "ONE Components",
    },
  ],
  staticDirs: ["./static"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@vueless/storybook-dark-mode"),
    getAbsolutePath("@chromatic-com/storybook"),
    {
      name: getAbsolutePath("@storybook/addon-docs"),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath("@storybook/addon-designs"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    defaultName: "Documentation",
    docsMode:
      process.env.STORYBOOK_PUBLIC_BUILD || process.env.DOCS_MODE
        ? true
        : false,
  },
  typescript: {
    reactDocgen: "react-docgen",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "../tsconfig.json",
    },
  },
  viteFinal: (config) => {
    const reactPackagePath = resolve(__dirname, "../../react")
    const reactSrcPath = resolve(reactPackagePath, "src")

    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
      "~": resolve(__dirname, "../"),
    }

    // Add plugin to resolve @factorialco/f0-react subpaths that point to src/
    if (!config.plugins) {
      config.plugins = []
    }

    const reactSubpathPlugin = {
      name: "react-subpath-resolver",
      enforce: "pre" as const,
      resolveId(id: string) {
        // Handle subpath imports that point to src/ in package.json exports
        if (id.startsWith("@factorialco/f0-react/")) {
          const subPath = id.replace("@factorialco/f0-react/", "")
          const normalizedSubPath = subPath.startsWith("/")
            ? subPath.slice(1)
            : subPath
          const resolvedPath = resolve(reactSrcPath, normalizedSubPath)

          const fs = require("fs")
          const path = require("path")

          // Check if file exists as file
          if (fs.existsSync(resolvedPath)) {
            const stat = fs.statSync(resolvedPath)
            if (stat.isFile()) {
              return resolvedPath
            }
            if (stat.isDirectory()) {
              // Try index files
              const indexFiles = [
                "index.ts",
                "index.tsx",
                "index.js",
                "index.jsx",
              ]
              for (const indexFile of indexFiles) {
                const indexPath = path.join(resolvedPath, indexFile)
                if (fs.existsSync(indexPath)) {
                  return indexPath
                }
              }
            }
          }

          // Try with extensions
          const extensions = [".ts", ".tsx", ".js", ".jsx"]
          for (const ext of extensions) {
            const withExt = resolvedPath + ext
            if (fs.existsSync(withExt)) {
              return withExt
            }
          }

          return null
        }

        return null
      },
    }

    config.plugins = [reactSubpathPlugin, ...config.plugins]

    return config
  },
}
export default config

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")))
}
