import path from "node:path"

import postcssConfig from "./postcss.config.js"
import { publishFontAssets } from "./publish-font-assets.mjs"

const fontDirectory = path.resolve(import.meta.dirname, "assets/fonts")

export default {
  plugins: [
    ...postcssConfig.plugins,
    publishFontAssets({
      fontDirectory,
      outputDirectory: path.resolve(import.meta.dirname, "dist"),
      sourceStylesheet: path.resolve(fontDirectory, "style.css"),
    }),
  ],
}
