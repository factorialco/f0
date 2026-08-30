import { readFileSync } from "node:fs"
import { isAbsolute, relative, resolve } from "node:path"
import valueParser from "postcss-value-parser"

export function inlineFontAssets({ fontDirectory }) {
  const fontRoot = resolve(fontDirectory)

  return {
    postcssPlugin: "f0-inline-font-assets",
    Declaration(declaration) {
      if (!declaration.value.includes("url(")) return

      const parsedValue = valueParser(declaration.value)
      parsedValue.walk((node) => {
        if (node.type !== "function" || node.value !== "url") return
        if (node.nodes.length !== 1) return

        const reference = node.nodes[0]
        if (reference.type !== "string" && reference.type !== "word") return
        if (!reference.value.toLowerCase().endsWith(".woff")) return
        if (reference.value.includes(":")) return

        const fontPath = resolve(fontRoot, reference.value)
        const relativeFontPath = relative(fontRoot, fontPath)
        if (relativeFontPath.startsWith("..") || isAbsolute(relativeFontPath)) {
          throw new Error(
            `Font reference escapes the configured directory: ${reference.value}`
          )
        }

        reference.type = "string"
        reference.quote = '"'
        reference.value = `data:font/woff;base64,${readFileSync(fontPath).toString("base64")}`
      })
      declaration.value = parsedValue.toString()
    },
  }
}

inlineFontAssets.postcss = true
