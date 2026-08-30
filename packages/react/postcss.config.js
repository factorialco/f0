import autoprefixer from "autoprefixer"
import path from "node:path"
import { fileURLToPath } from "node:url"
import postcssImport from "postcss-import"
import tailwindcss from "tailwindcss"

import { inlineFontAssets } from "./inline-font-assets.mjs"

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
    inlineFontAssets({ fontDirectory: path.resolve(dirname, "assets/fonts") }),
  ],
}
