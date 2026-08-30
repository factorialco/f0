#!/usr/bin/env tsx
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { dirname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import ts from "typescript"

interface PackageManifest {
  dependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const packageRoot = resolve(import.meta.dirname, "..")
const esmRoot = resolve(packageRoot, "dist/esm")
const packageManifest = JSON.parse(
  readFileSync(resolve(packageRoot, "package.json"), "utf8")
) as PackageManifest

function walkJavaScriptFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const filePath = resolve(directory, entry)
    if (statSync(filePath).isDirectory()) return walkJavaScriptFiles(filePath)
    return filePath.endsWith(".js") ? [filePath] : []
  })
}

function packageName(specifier: string): string {
  if (specifier.startsWith("@"))
    return specifier.split("/").slice(0, 2).join("/")
  return specifier.split("/")[0]
}

function runtimeSpecifiers(filePath: string): string[] {
  const sourceFile = ts.createSourceFile(
    filePath,
    readFileSync(filePath, "utf8"),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  )
  const specifiers: string[] = []

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
    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return specifiers
}

const declaredRuntimePackages = new Set([
  ...Object.keys(packageManifest.dependencies ?? {}),
  ...Object.keys(packageManifest.peerDependencies ?? {}),
  ...Object.keys(packageManifest.optionalDependencies ?? {}),
])
const undeclaredImports = new Set<string>()
const unresolvableImports = new Set<string>()
const invalidRelativeImports = new Set<string>()

for (const filePath of walkJavaScriptFiles(esmRoot)) {
  for (const specifier of runtimeSpecifiers(filePath)) {
    if (specifier.startsWith(".")) {
      const targetPath = resolve(dirname(filePath), specifier)
      const targetDistPath = relative(esmRoot, targetPath)
      if (
        !existsSync(targetPath) ||
        targetDistPath.split("/").includes("node_modules")
      ) {
        invalidRelativeImports.add(
          `${relative(packageRoot, filePath)} -> ${specifier}`
        )
      }
      continue
    }
    if (specifier.startsWith("data:")) {
      continue
    }
    if (!declaredRuntimePackages.has(packageName(specifier))) {
      undeclaredImports.add(
        `${relative(packageRoot, filePath)} -> ${specifier}`
      )
    }
    try {
      const resolvedUrl = import.meta.resolve(specifier)
      if (
        resolvedUrl.startsWith("file:") &&
        (!existsSync(fileURLToPath(resolvedUrl)) ||
          statSync(fileURLToPath(resolvedUrl)).isDirectory())
      ) {
        unresolvableImports.add(
          `${relative(packageRoot, filePath)} -> ${specifier}`
        )
      }
    } catch {
      unresolvableImports.add(
        `${relative(packageRoot, filePath)} -> ${specifier}`
      )
    }
  }
}

if (invalidRelativeImports.size > 0) {
  throw new Error(
    `Preserved ESM contains missing or unpackable relative imports:\n${[
      ...invalidRelativeImports,
    ].join("\n")}`
  )
}

if (undeclaredImports.size > 0) {
  throw new Error(
    `Preserved ESM contains undeclared runtime imports:\n${[
      ...undeclaredImports,
    ].join("\n")}`
  )
}

if (unresolvableImports.size > 0) {
  throw new Error(
    `Preserved ESM contains imports that native ESM cannot resolve:\n${[
      ...unresolvableImports,
    ].join("\n")}`
  )
}

process.stdout.write(
  "Preserved ESM runtime imports are declared and resolvable\n"
)
