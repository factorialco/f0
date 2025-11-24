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
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../src/components",
      titlePrefix: "Components",
    },
    {
      directory: "../src/hooks",
      titlePrefix: "Hooks",
    },
    {
      directory: "../src/experimental",
      titlePrefix: "Components",
    },
    ...(process.env.STORYBOOK_PUBLIC_BUILD
      ? []
      : [
          {
            directory: "../src/ui",
            titlePrefix: "🔒 Internal",
          },
        ]),
  ],
  staticDirs: ["../public", "./static"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@vueless/storybook-dark-mode"),
    // getAbsolutePath("storybook-addon-tag-badges"),
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
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname, "../src"),
      "~": resolve(__dirname, "../"),
    }
    return config
  },
}
export default config

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")))
}
