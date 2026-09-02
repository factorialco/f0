import autoprefixer from "autoprefixer"
import path from "node:path"
import { fileURLToPath } from "node:url"
import postcssImport from "postcss-import"
import tailwindcss from "tailwindcss"

import { publishFontAssets } from "./publish-font-assets.mjs"

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
    publishFontAssets({
      fontDirectory: path.resolve(dirname, "assets/fonts"),
      outputDirectory:
        process.env.F0_PUBLISH_FONT_ASSETS === "true"
          ? path.resolve(dirname, "dist")
          : undefined,
    }),
  ],
}
