import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { dirname, relative, resolve } from "node:path"
import { isDeepStrictEqual } from "node:util"
import { brotliCompressSync, constants as zlibConstants } from "node:zlib"
import valueParser from "postcss-value-parser"
import ts from "typescript"

import {
  expectedPackageExports,
  publicationEntries,
} from "../vite/publication-contract"

interface PackageManifest {
  dependencies?: Record<string, string>
  main?: string
  optionalDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
  typings?: string
  exports?: Record<string, unknown>
}

type PackageExports = Record<string, unknown>

const PUBLISHED_STYLES_BROTLI_CEILING = 48 * 1024
const REQUIRED_PUBLISHED_FONT = "fonts/InterVariable-latin-normal.woff2"
const SEMANTIC_ICON_CLASSES = [
  "text-f1-icon",
  "text-f1-icon-secondary",
  "text-f1-icon-inverse",
  "text-f1-icon-bold",
  "text-f1-icon-critical",
  "text-f1-icon-critical-bold",
  "text-f1-icon-accent",
  "text-f1-icon-info",
  "text-f1-icon-warning",
  "text-f1-icon-positive",
  "text-f1-icon-promote",
  "text-f1-icon-selected",
  "text-f1-icon-selected-hover",
  "text-f1-icon-mood-super-negative",
  "text-f1-icon-mood-negative",
  "text-f1-icon-mood-neutral",
  "text-f1-icon-mood-positive",
  "text-f1-icon-mood-super-positive",
] as const

function exportTargets(value: unknown): string[] {
  if (typeof value === "string") return [value]
  if (!value || typeof value !== "object") return []
  return Object.values(value).filter(
    (target): target is string => typeof target === "string"
  )
}

function walkFiles(directory: string): string[] {
  if (!existsSync(directory)) return []
  return readdirSync(directory).flatMap((entry) => {
    const filePath = resolve(directory, entry)
    return statSync(filePath).isDirectory() ? walkFiles(filePath) : [filePath]
  })
}

function wildcardCapture(pattern: string, filePath: string): string | null {
  const normalizedPattern = pattern.replace(/^\.\//, "")
  const [prefix, suffix] = normalizedPattern.split("*")
  if (!filePath.startsWith(prefix) || !filePath.endsWith(suffix)) return null
  return filePath.slice(prefix.length, filePath.length - suffix.length)
}

function wildcardFiles(packageRoot: string, pattern: string): string[] {
  const normalizedPattern = pattern.replace(/^\.\//, "")
  const prefix = normalizedPattern.slice(0, normalizedPattern.indexOf("*"))
  const lastSeparator = prefix.lastIndexOf("/")
  const searchRoot = resolve(
    packageRoot,
    lastSeparator === -1 ? "" : prefix.slice(0, lastSeparator)
  )

  return walkFiles(searchRoot).map((filePath) =>
    relative(packageRoot, filePath).split("\\").join("/")
  )
}

function analyzeRuntimeModule(filePath: string): {
  hasCommonJs: boolean
  specifiers: string[]
} {
  const sourceFile = ts.createSourceFile(
    filePath,
    readFileSync(filePath, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  )
  const specifiers: string[] = []
  let hasCommonJs = false

  function visit(node: ts.Node): void {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier &&
      ts.isStringLiteral(node.moduleSpecifier)
    ) {
      specifiers.push(node.moduleSpecifier.text)
    }
    if (
      ts.isCallExpression(node) &&
      node.expression.kind === ts.SyntaxKind.ImportKeyword &&
      node.arguments.length === 1 &&
      ts.isStringLiteral(node.arguments[0])
    ) {
      specifiers.push(node.arguments[0].text)
    }
    if (
      (ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === "require") ||
      (ts.isPropertyAccessExpression(node) &&
        ((ts.isIdentifier(node.expression) &&
          node.expression.text === "exports") ||
          (ts.isIdentifier(node.expression) &&
            node.expression.text === "module" &&
            node.name.text === "exports")))
    ) {
      hasCommonJs = true
    }
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return { hasCommonJs, specifiers }
}

function packageName(specifier: string): string {
  if (specifier.startsWith("@")) {
    return specifier.split("/").slice(0, 2).join("/")
  }
  return specifier.split("/")[0]
}

export function validateExportTargets(
  packageRoot: string,
  packageExports: PackageExports
): string[] {
  const errors: string[] = []

  for (const [subpath, value] of Object.entries(packageExports)) {
    const targets = exportTargets(value)
    const wildcardTargets = targets.filter((target) => target.includes("*"))
    const captures = new Set(
      wildcardTargets.flatMap((target) =>
        wildcardFiles(packageRoot, target).flatMap((filePath) => {
          const capture = wildcardCapture(target, filePath)
          return capture === null ? [] : [capture]
        })
      )
    )

    for (const target of targets) {
      if (target.includes("*")) {
        for (const capture of captures) {
          const expandedTarget = target.replace("*", capture)
          if (!existsSync(resolve(packageRoot, expandedTarget))) {
            errors.push(
              `Missing wildcard export target: ${subpath} -> ${expandedTarget}`
            )
          }
        }
        continue
      }
      if (!existsSync(resolve(packageRoot, target))) {
        errors.push(`Missing export target: ${subpath} -> ${target}`)
      }
    }
  }

  return errors
}

export function validateBuildArtifacts(packageRoot: string): string[] {
  const requiredArtifacts = [
    ...publicationEntries.map((entry) => `dist/esm/${entry.name}.js`),
    "dist/global.d.ts",
    "dist/esm/components/F0Button/F0Button.js",
  ]

  return requiredArtifacts.flatMap((artifact) =>
    existsSync(resolve(packageRoot, artifact))
      ? []
      : [`Missing build artifact: ${artifact}`]
  )
}

export function validatePublishedFiles(packageRoot: string): string[] {
  const distributionDirectory = resolve(packageRoot, "dist")
  const internalFiles = [
    "postcss.config.js",
    "postcss.publish.config.js",
    "publish-font-assets.mjs",
    "tailwind.config.ts",
  ]
  const sourceFonts = walkFiles(resolve(packageRoot, "assets/fonts")).filter(
    (filePath) => /\.woff2?$/.test(filePath)
  )
  const nonProductionDeclarations = walkFiles(distributionDirectory).filter(
    (filePath) =>
      /(?:\/__(?:mocks|stories|tests)__\/|\.(?:spec|stories|test)\.d\.ts$)/.test(
        filePath
      )
  )
  const legacyRuntimeFiles = walkFiles(distributionDirectory).filter(
    (filePath) =>
      dirname(filePath) === distributionDirectory && /\.js$/.test(filePath)
  )

  return [
    ...internalFiles.flatMap((filePath) =>
      existsSync(resolve(packageRoot, filePath))
        ? [`Internal build file is published: ${filePath}`]
        : []
    ),
    ...nonProductionDeclarations.map(
      (filePath) =>
        `Non-production declaration is published: ${relative(
          packageRoot,
          filePath
        )}`
    ),
    ...legacyRuntimeFiles.map(
      (filePath) =>
        `Legacy runtime artifact is published: ${relative(packageRoot, filePath)}`
    ),
    ...sourceFonts.map(
      (filePath) =>
        `Source font is duplicated in the package: ${relative(
          packageRoot,
          filePath
        )}`
    ),
  ]
}

export function validatePublishedStyleAssets(packageRoot: string): string[] {
  const stylesheetPath = resolve(packageRoot, "dist/styles.css")
  if (!existsSync(stylesheetPath)) return []

  const stylesheet = readFileSync(stylesheetPath, "utf8")
  const errors: string[] = []
  const invalidReferences = new Set<string>()
  const publishedReferences = new Set<string>()
  valueParser(stylesheet).walk((node) => {
    if (node.type !== "function" || node.value !== "url") return
    if (node.nodes.length !== 1) return
    const reference = node.nodes[0]
    if (reference.type !== "string" && reference.type !== "word") return
    if (
      reference.value.includes(":") ||
      reference.value.startsWith("#") ||
      reference.value.startsWith("/")
    ) {
      return
    }

    const assetReference = reference.value.split(/[?#]/, 1)[0]
    publishedReferences.add(assetReference)
    const assetPath = resolve(dirname(stylesheetPath), assetReference)
    const packageRelativePath = relative(packageRoot, assetPath)
    if (
      packageRelativePath.startsWith("..") ||
      !existsSync(assetPath) ||
      !statSync(assetPath).isFile()
    ) {
      invalidReferences.add(reference.value)
    }
  })

  errors.push(
    ...[...invalidReferences].map(
      (reference) =>
        `Published styles reference missing or unpackable asset: ${reference}`
    )
  )

  if (!publishedReferences.has(REQUIRED_PUBLISHED_FONT)) {
    errors.push(
      `Published styles are missing required font: ${REQUIRED_PUBLISHED_FONT}`
    )
  }

  for (const className of SEMANTIC_ICON_CLASSES) {
    if (!new RegExp(`\\.${className}(?=[^a-zA-Z0-9_-])`).test(stylesheet)) {
      errors.push(
        `Published styles are missing semantic icon class: ${className}`
      )
    }
  }

  const brotliBytes = brotliCompressSync(stylesheet, {
    params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 },
  }).byteLength
  if (brotliBytes > PUBLISHED_STYLES_BROTLI_CEILING) {
    errors.push(
      `Published styles are ${brotliBytes} B Brotli; ceiling is ${PUBLISHED_STYLES_BROTLI_CEILING} B`
    )
  }

  return errors
}

export function validatePackageManifest(manifest: PackageManifest): string[] {
  const errors: string[] = []

  if (manifest.main !== "dist/esm/f0.js") {
    errors.push(`Expected main to be dist/esm/f0.js, received ${manifest.main}`)
  }
  if (manifest.typings !== "dist/f0.d.ts") {
    errors.push(
      `Expected typings to be dist/f0.d.ts, received ${manifest.typings}`
    )
  }
  const actualExports = manifest.exports ?? {}
  for (const [subpath, expectedExport] of Object.entries(
    expectedPackageExports
  )) {
    if (!(subpath in actualExports)) {
      errors.push(`Missing package export: ${subpath}`)
    } else if (!isDeepStrictEqual(actualExports[subpath], expectedExport)) {
      errors.push(`Incorrect package export: ${subpath}`)
    }
  }
  for (const subpath of Object.keys(actualExports)) {
    if (!(subpath in expectedPackageExports)) {
      errors.push(`Unexpected package export: ${subpath}`)
    }
  }

  return errors
}

export function validatePreservedEsm(
  packageRoot: string,
  manifest: PackageManifest
): string[] {
  const declaredPackages = new Set([
    ...Object.keys(manifest.dependencies ?? {}),
    ...Object.keys(manifest.peerDependencies ?? {}),
    ...Object.keys(manifest.optionalDependencies ?? {}),
  ])
  const errors: string[] = []
  const runtimeFiles = [
    ...walkFiles(resolve(packageRoot, "dist/esm")),
    ...walkFiles(resolve(packageRoot, "icons")),
  ]

  for (const filePath of runtimeFiles.filter((path) => path.endsWith(".js"))) {
    const analysis = analyzeRuntimeModule(filePath)
    if (analysis.hasCommonJs) {
      errors.push(
        `CommonJS syntax in preserved ESM: ${relative(packageRoot, filePath)}`
      )
    }
    for (const specifier of analysis.specifiers) {
      if (specifier.startsWith(".")) {
        const target = resolve(dirname(filePath), specifier)
        const packageRelativeTarget = relative(packageRoot, target)
        if (
          !existsSync(target) ||
          packageRelativeTarget.startsWith("..") ||
          packageRelativeTarget.split("/").includes("node_modules")
        ) {
          errors.push(
            `Missing preserved ESM import: ${relative(
              packageRoot,
              filePath
            )} -> ${specifier}`
          )
        }
        continue
      }
      if (
        !specifier.startsWith("data:") &&
        !declaredPackages.has(packageName(specifier))
      ) {
        errors.push(
          `Undeclared preserved ESM import: ${relative(
            packageRoot,
            filePath
          )} -> ${specifier}`
        )
      }
    }
  }

  return errors
}

export function validatePublication(packageRoot: string): string[] {
  const manifest = JSON.parse(
    readFileSync(resolve(packageRoot, "package.json"), "utf8")
  ) as PackageManifest

  return [
    ...validatePackageManifest(manifest),
    ...validateExportTargets(packageRoot, manifest.exports ?? {}),
    ...validateBuildArtifacts(packageRoot),
    ...validatePublishedFiles(packageRoot),
    ...validatePublishedStyleAssets(packageRoot),
    ...validatePreservedEsm(packageRoot, manifest),
  ]
}
