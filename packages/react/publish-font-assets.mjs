import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs"
import { dirname, isAbsolute, relative, resolve, sep } from "node:path"
import valueParser from "postcss-value-parser"

export function publishFontAssets({ fontDirectory, outputDirectory }) {
  const fontRoot = resolve(fontDirectory)
  const processedDeclarations = new WeakSet()

  return {
    postcssPlugin: "f0-publish-font-assets",
    Declaration(declaration) {
      if (processedDeclarations.has(declaration)) return
      processedDeclarations.add(declaration)
      if (!declaration.value.includes("url(")) return

      const parsedValue = valueParser(declaration.value)
      parsedValue.walk((node) => {
        if (node.type !== "function" || node.value !== "url") return
        if (node.nodes.length !== 1) return

        const reference = node.nodes[0]
        if (reference.type !== "string" && reference.type !== "word") return
        if (!/\.woff2?$/i.test(reference.value)) return
        if (reference.value.includes(":")) return

        const fontPath = resolve(fontRoot, reference.value)
        const relativeFontPath = relative(fontRoot, fontPath)
        if (relativeFontPath.startsWith("..") || isAbsolute(relativeFontPath)) {
          throw new Error(
            `Font reference escapes the configured directory: ${reference.value}`
          )
        }
        if (!existsSync(fontPath) || !statSync(fontPath).isFile()) return

        if (outputDirectory) {
          const outputRoot = resolve(outputDirectory)
          const publishedFontRoot = resolve(outputRoot, "fonts")
          const referencedPublishedPath = resolve(outputRoot, reference.value)
          const publishedRelativePath = relative(
            publishedFontRoot,
            referencedPublishedPath
          )
          const isPublishedReference =
            !publishedRelativePath.startsWith("..") &&
            !isAbsolute(publishedRelativePath) &&
            existsSync(referencedPublishedPath) &&
            statSync(referencedPublishedPath).isFile()
          if (isPublishedReference) return

          const publishedPath = resolve(outputRoot, "fonts", relativeFontPath)
          mkdirSync(dirname(publishedPath), { recursive: true })
          copyFileSync(fontPath, publishedPath)
        }

        reference.type = "string"
        reference.quote = '"'
        reference.value = `fonts/${relativeFontPath.split(sep).join("/")}`
      })
      declaration.value = parsedValue.toString()
    },
  }
}

publishFontAssets.postcss = true
