#!/usr/bin/env tsx
/**
 * Build the f0 component manifest consumed by the f0-prototype skill.
 *
 * Outputs:
 *  - generated/registry.json         shadcn-shape, one entry per public component
 *  - generated/manifest.compact.json compact one-line view (~900 tokens)
 *
 * Sources of truth: any `F0*` or `One*` folder under
 *   packages/react/src/{components,patterns,kits,layouts}
 * Plus a few additional well-known components (ApplicationFrame, Page).
 *
 * Best-effort static extractor. The skill instructs the LLM to read the
 * actual source file when a registry entry has `propsExtractionIncomplete`.
 */

import { parse, type ParserOptions } from "@babel/parser"
import traverseDefault from "@babel/traverse"
import * as t from "@babel/types"
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const traverse: typeof traverseDefault =
  (traverseDefault as any).default ?? traverseDefault

const __dirname = dirname(fileURLToPath(import.meta.url))
const PKG_ROOT = resolve(__dirname, "..")
const REPO_ROOT = resolve(PKG_ROOT, "..", "..")
const REACT_SRC = resolve(REPO_ROOT, "packages", "react", "src")

type Section = "Components" | "Patterns" | "Kits" | "Layouts"

const SECTIONS: Array<{
  dir: string
  section: Section
  letter: "C" | "P" | "K" | "L"
}> = [
  { dir: "components", section: "Components", letter: "C" },
  { dir: "patterns", section: "Patterns", letter: "P" },
  { dir: "kits", section: "Kits", letter: "K" },
  { dir: "layouts", section: "Layouts", letter: "L" },
]

const NAME_PREFIXES = ["F0", "One"] as const

const ADDITIONAL_COMPONENTS: Array<{
  folder: string
  section: Section
  letter: "C" | "P" | "K" | "L"
}> = [
  { folder: "patterns/ApplicationFrame", section: "Patterns", letter: "P" },
  { folder: "patterns/Navigation/Page", section: "Patterns", letter: "P" },
]

type RegistryEntry = {
  name: string
  section: Section
  importFrom: "@factorialco/f0-react"
  description: string
  filePath: string
  props: Array<{ name: string; optional: boolean; description?: string }>
  propsExtractionIncomplete: boolean
  variants?: Record<string, string[]>
  canonicalExample?: string
  isClient: boolean
  notes?: string
}

type CompactEntry = {
  n: string
  s: "C" | "P" | "K" | "L"
  d: string
  p?: string
}

const PARSER_OPTS: ParserOptions = {
  sourceType: "module",
  plugins: ["typescript", "jsx", "decorators-legacy"],
}

function parseFile(content: string) {
  return parse(content, PARSER_OPTS)
}

function discoverComponents(
  sectionDir: string
): Array<{ name: string; file: string }> {
  const root = join(REACT_SRC, sectionDir)
  if (!existsSync(root)) return []
  const found: Array<{ name: string; file: string }> = []
  let entries: string[]
  try {
    entries = readdirSync(root)
  } catch {
    return []
  }
  for (const folder of entries) {
    if (!NAME_PREFIXES.some((p) => folder.startsWith(p))) continue
    const folderPath = join(root, folder)
    let folderStat
    try {
      folderStat = statSync(folderPath)
    } catch {
      continue
    }
    if (!folderStat.isDirectory()) continue
    const eponymous = join(folderPath, `${folder}.tsx`)
    const indexTsx = join(folderPath, "index.tsx")
    const indexTs = join(folderPath, "index.ts")
    const file = existsSync(eponymous)
      ? eponymous
      : existsSync(indexTsx)
        ? indexTsx
        : existsSync(indexTs)
          ? indexTs
          : null
    if (file) found.push({ name: folder, file })
  }
  return found
}

function findCanonicalExample(
  componentName: string,
  componentFile: string
): string | undefined {
  const folder = dirname(componentFile)
  const candidates = [
    join(folder, "__stories__", `${componentName}.stories.tsx`),
    join(folder, `${componentName}.stories.tsx`),
  ]
  const storyFile = candidates.find((p) => existsSync(p))
  if (!storyFile) return undefined
  const content = readFileSync(storyFile, "utf8")
  let ast
  try {
    ast = parseFile(content)
  } catch {
    return undefined
  }
  let example: string | undefined
  traverse(ast, {
    ExportNamedDeclaration(path) {
      if (example) return
      const decl = path.node.declaration
      if (!t.isVariableDeclaration(decl)) return
      const declarator = decl.declarations[0]
      if (!declarator || !t.isIdentifier(declarator.id)) return
      const storyName = declarator.id.name
      if (storyName === "default" || storyName === "Template") return
      const init = declarator.init
      if (!init || !t.isObjectExpression(init)) return
      const renderProp = init.properties.find(
        (p): p is t.ObjectProperty =>
          t.isObjectProperty(p) &&
          t.isIdentifier(p.key) &&
          p.key.name === "render"
      )
      if (
        renderProp &&
        (t.isArrowFunctionExpression(renderProp.value) ||
          t.isFunctionExpression(renderProp.value))
      ) {
        const body = renderProp.value.body
        if (t.isJSXElement(body) || t.isJSXFragment(body)) {
          example = content.slice(body.start ?? 0, body.end ?? 0)
          return
        }
        if (t.isBlockStatement(body)) {
          const ret = body.body.find((s): s is t.ReturnStatement =>
            t.isReturnStatement(s)
          )
          if (ret?.argument) {
            example = content.slice(
              ret.argument.start ?? 0,
              ret.argument.end ?? 0
            )
            return
          }
        }
      }
      const argsProp = init.properties.find(
        (p): p is t.ObjectProperty =>
          t.isObjectProperty(p) &&
          t.isIdentifier(p.key) &&
          p.key.name === "args"
      )
      if (argsProp && t.isObjectExpression(argsProp.value)) {
        example = renderArgsAsJsx(componentName, argsProp.value, content)
      }
    },
  })
  return example
}

function renderArgsAsJsx(
  componentName: string,
  obj: t.ObjectExpression,
  source: string
): string {
  const attrs: string[] = []
  for (const prop of obj.properties) {
    if (!t.isObjectProperty(prop)) continue
    const key = t.isIdentifier(prop.key)
      ? prop.key.name
      : t.isStringLiteral(prop.key)
        ? prop.key.value
        : null
    if (!key) continue
    const value = prop.value
    if (t.isStringLiteral(value)) attrs.push(`${key}="${value.value}"`)
    else if (t.isBooleanLiteral(value))
      attrs.push(value.value ? key : `${key}={false}`)
    else if (t.isNumericLiteral(value)) attrs.push(`${key}={${value.value}}`)
    else if (value.start != null && value.end != null) {
      attrs.push(`${key}={${source.slice(value.start, value.end)}}`)
    }
  }
  if (attrs.length === 0) return `<${componentName} />`
  return `<${componentName}\n  ${attrs.join("\n  ")}\n/>`
}

function extractProps(
  componentName: string,
  componentFile: string
): {
  props: Array<{ name: string; optional: boolean; description?: string }>
  incomplete: boolean
} {
  const content = safeRead(componentFile)
  if (!content) return { props: [], incomplete: true }
  let ast
  try {
    ast = parseFile(content)
  } catch {
    return { props: [], incomplete: true }
  }
  const propsTypeName = `${componentName}Props`
  const result: Array<{
    name: string
    optional: boolean
    description?: string
  }> = []
  let incomplete = false

  function captureMembers(typeNode: t.TSType | null | undefined) {
    if (!typeNode) return
    if (t.isTSTypeLiteral(typeNode)) {
      for (const m of typeNode.members) {
        if (t.isTSPropertySignature(m) && t.isIdentifier(m.key)) {
          result.push({
            name: m.key.name,
            optional: !!m.optional,
            description: extractLeadingJSDoc(m),
          })
        }
      }
    } else if (t.isTSIntersectionType(typeNode)) {
      typeNode.types.forEach(captureMembers)
    } else if (t.isTSTypeReference(typeNode)) {
      incomplete = true
    }
  }

  traverse(ast, {
    TSTypeAliasDeclaration(path) {
      if (path.node.id.name !== propsTypeName) return
      captureMembers(path.node.typeAnnotation)
    },
    TSInterfaceDeclaration(path) {
      if (path.node.id.name !== propsTypeName) return
      for (const m of path.node.body.body) {
        if (t.isTSPropertySignature(m) && t.isIdentifier(m.key)) {
          result.push({
            name: m.key.name,
            optional: !!m.optional,
            description: extractLeadingJSDoc(m),
          })
        }
      }
    },
  })

  if (result.length === 0) {
    const internalTypes = join(dirname(componentFile), "internal-types.ts")
    if (existsSync(internalTypes)) {
      const c = readFileSync(internalTypes, "utf8")
      let ast2
      try {
        ast2 = parseFile(c)
      } catch {
        return { props: result, incomplete: true }
      }
      traverse(ast2, {
        TSTypeAliasDeclaration(path) {
          const name = path.node.id.name
          if (!name.toLowerCase().endsWith("props")) return
          const ann = path.node.typeAnnotation
          if (t.isTSIntersectionType(ann)) {
            ann.types.forEach((t2) => {
              if (t.isTSTypeLiteral(t2)) {
                for (const m of t2.members) {
                  if (t.isTSPropertySignature(m) && t.isIdentifier(m.key)) {
                    result.push({
                      name: m.key.name,
                      optional: !!m.optional,
                      description: extractLeadingJSDoc(m),
                    })
                  }
                }
              } else {
                incomplete = true
              }
            })
          } else if (t.isTSTypeLiteral(ann)) {
            for (const m of ann.members) {
              if (t.isTSPropertySignature(m) && t.isIdentifier(m.key)) {
                result.push({
                  name: m.key.name,
                  optional: !!m.optional,
                  description: extractLeadingJSDoc(m),
                })
              }
            }
          }
        },
      })
    }
  }

  const seen = new Map<
    string,
    { name: string; optional: boolean; description?: string }
  >()
  for (const p of result) {
    if (!seen.has(p.name)) seen.set(p.name, p)
  }
  if (seen.size === 0) incomplete = true
  return { props: [...seen.values()], incomplete }
}

function extractLeadingJSDoc(node: {
  leadingComments?: readonly t.Comment[] | null
}): string | undefined {
  const comments = node.leadingComments
  if (!comments || comments.length === 0) return undefined
  const last = comments[comments.length - 1]
  if (last.type !== "CommentBlock") return undefined
  const lines = last.value
    .split("\n")
    .map((l) => l.replace(/^\s*\*\s?/, "").trim())
    .filter((l) => l.length > 0 && !l.startsWith("@"))
  if (lines.length === 0) return undefined
  return lines.join(" ").slice(0, 200)
}

function extractFileLevelDescription(file: string): string {
  const content = safeRead(file)
  if (!content) return ""
  const match = content.match(/^\/\*\*([\s\S]*?)\*\//)
  if (!match) return ""
  const lines = match[1]
    .split("\n")
    .map((l) => l.replace(/^\s*\*\s?/, "").trim())
    .filter((l) => l.length > 0 && !l.startsWith("@"))
  return lines.join(" ").slice(0, 160)
}

function detectIsClient(file: string): boolean {
  const content = safeRead(file)
  if (!content) return false
  return /^["']use client["']/m.test(content)
}

function extractCvaVariants(
  file: string
): Record<string, string[]> | undefined {
  const content = safeRead(file)
  if (!content || !content.includes("cva(")) return undefined
  let ast
  try {
    ast = parseFile(content)
  } catch {
    return undefined
  }
  const variants: Record<string, string[]> = {}
  traverse(ast, {
    CallExpression(path) {
      if (!t.isIdentifier(path.node.callee) || path.node.callee.name !== "cva")
        return
      const args = path.node.arguments
      if (args.length < 2) return
      const config = args[1]
      if (!t.isObjectExpression(config)) return
      const variantsProp = config.properties.find(
        (p): p is t.ObjectProperty =>
          t.isObjectProperty(p) &&
          t.isIdentifier(p.key) &&
          p.key.name === "variants"
      )
      if (!variantsProp || !t.isObjectExpression(variantsProp.value)) return
      for (const variantGroup of variantsProp.value.properties) {
        if (
          !t.isObjectProperty(variantGroup) ||
          !t.isIdentifier(variantGroup.key)
        )
          continue
        if (!t.isObjectExpression(variantGroup.value)) continue
        const variantName = variantGroup.key.name
        const values = variantGroup.value.properties
          .filter(
            (p): p is t.ObjectProperty =>
              t.isObjectProperty(p) &&
              (t.isIdentifier(p.key) || t.isStringLiteral(p.key))
          )
          .map((p) =>
            t.isIdentifier(p.key)
              ? p.key.name
              : (p.key as t.StringLiteral).value
          )
        if (values.length > 0) variants[variantName] = values
      }
    },
  })
  return Object.keys(variants).length > 0 ? variants : undefined
}

function safeRead(file: string): string | null {
  try {
    return readFileSync(file, "utf8")
  } catch {
    return null
  }
}

function loadOverride(name: string): {
  description?: string
  canonicalExample?: string
  notes?: string
} {
  const overridePath = join(
    PKG_ROOT,
    "scripts",
    "registry-overrides",
    `${name}.md`
  )
  if (!existsSync(overridePath)) return {}
  const content = readFileSync(overridePath, "utf8")
  const result: {
    description?: string
    canonicalExample?: string
    notes?: string
  } = {}
  const descMatch = content.match(/^##\s*Description\s*\n([\s\S]*?)(?=\n##|$)/m)
  if (descMatch) result.description = descMatch[1].trim()
  const exMatch = content.match(/^##\s*Example\s*\n```tsx\n([\s\S]*?)```/m)
  if (exMatch) result.canonicalExample = exMatch[1].trim()
  const notesMatch = content.match(/^##\s*Notes\s*\n([\s\S]*?)(?=\n##|$)/m)
  if (notesMatch) result.notes = notesMatch[1].trim()
  return result
}

function buildEntry(
  name: string,
  section: Section,
  file: string
): RegistryEntry {
  const override = loadOverride(name)
  const description =
    override.description || extractFileLevelDescription(file) || ""
  const { props, incomplete } = extractProps(name, file)
  const variants = extractCvaVariants(file)
  const canonicalExample =
    override.canonicalExample || findCanonicalExample(name, file)
  const isClient = detectIsClient(file)
  return {
    name,
    section,
    importFrom: "@factorialco/f0-react",
    description,
    filePath: relative(REPO_ROOT, file),
    props,
    propsExtractionIncomplete: incomplete,
    variants,
    canonicalExample,
    isClient,
    notes: override.notes,
  }
}

function buildCompact(
  entry: RegistryEntry,
  letter: "C" | "P" | "K" | "L"
): CompactEntry {
  const truncatedDesc = entry.description
    .slice(0, 70)
    .replace(/\s+/g, " ")
    .trim()
  const topProps = entry.props
    .slice(0, 5)
    .map((p) => p.name)
    .join(",")
  const compact: CompactEntry = { n: entry.name, s: letter, d: truncatedDesc }
  if (topProps) compact.p = topProps
  return compact
}

function main() {
  const registry: RegistryEntry[] = []
  const compact: CompactEntry[] = []
  const stats: Record<string, number> = {}

  for (const { dir, section, letter } of SECTIONS) {
    const found = discoverComponents(dir)
    stats[section] = found.length
    for (const { name, file } of found) {
      const entry = buildEntry(name, section, file)
      registry.push(entry)
      compact.push(buildCompact(entry, letter))
    }
  }

  for (const extra of ADDITIONAL_COMPONENTS) {
    const folderPath = join(REACT_SRC, extra.folder)
    if (!existsSync(folderPath)) continue
    const folderName = extra.folder.split("/").pop() as string
    const eponymous = join(folderPath, `${folderName}.tsx`)
    const indexTsx = join(folderPath, "index.tsx")
    const indexTs = join(folderPath, "index.ts")
    const file = existsSync(eponymous)
      ? eponymous
      : existsSync(indexTsx)
        ? indexTsx
        : existsSync(indexTs)
          ? indexTs
          : null
    if (!file) continue
    const entry = buildEntry(folderName, extra.section, file)
    registry.push(entry)
    compact.push(buildCompact(entry, extra.letter))
    stats[extra.section] = (stats[extra.section] || 0) + 1
  }

  registry.sort((a, b) => a.name.localeCompare(b.name))
  compact.sort((a, b) => a.n.localeCompare(b.n))

  const outDir = join(PKG_ROOT, "generated")
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  writeFileSync(
    join(outDir, "registry.json"),
    JSON.stringify(
      {
        version: 1,
        generatedAt: new Date().toISOString(),
        components: registry,
      },
      null,
      2
    )
  )
  writeFileSync(
    join(outDir, "manifest.compact.json"),
    JSON.stringify(
      {
        version: 1,
        generatedAt: new Date().toISOString(),
        format:
          "Each item: { n: name, s: section letter (C|P|K|L), d: short description, p: comma-joined top prop names }",
        components: compact,
      },
      null,
      2
    )
  )

  // eslint-disable-next-line no-console
  console.log(
    `[f0compose] manifest built: ${registry.length} components`,
    Object.entries(stats)
      .map(([k, v]) => `${k}=${v}`)
      .join(" ")
  )
  const compactBytes = Buffer.byteLength(JSON.stringify(compact))
  // eslint-disable-next-line no-console
  console.log(
    `[f0compose] compact manifest: ${compactBytes} bytes (~${Math.round(compactBytes / 3.6)} tokens)`
  )
}

main()
