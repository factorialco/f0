import { esmExternalRequirePlugin, type Plugin } from "vite"

const REACT_EXTERNALS = ["react/jsx-runtime", "react", "react-dom"]

interface ReactExternalizationOptions {
  isStorybookBuild?: boolean
}

export function createReactExternalizationPlugins({
  isStorybookBuild = process.env.STORYBOOK_BUILD === "true",
}: ReactExternalizationOptions = {}): Plugin[] {
  if (isStorybookBuild) return []

  return [
    esmExternalRequirePlugin({
      external: REACT_EXTERNALS,
    }),
  ]
}
