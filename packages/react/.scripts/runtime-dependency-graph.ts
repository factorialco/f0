import { readFileSync } from "node:fs"
import path from "node:path"
import ts from "typescript"

export interface RuntimeDependencyCycle {
  files: string[]
}

export interface RuntimeDependencyAnalysis {
  graph: Record<string, string[]>
  cycles: RuntimeDependencyCycle[]
  cyclicEdges: string[]
}

export function findRuntimeCycleEdgeDifferences(
  current: string[],
  baseline: string[]
): {
  baselineOnly: string[]
  currentOnly: string[]
} {
  const baselineEdges = new Set(baseline)
  const currentEdges = new Set(current)

  return {
    baselineOnly: baseline.filter((edge) => !currentEdges.has(edge)),
    currentOnly: current.filter((edge) => !baselineEdges.has(edge)),
  }
}

export function findAddedRuntimeCycleEdges(
  current: string[],
  baseline: string[]
): string[] {
  return findRuntimeCycleEdgeDifferences(current, baseline).currentOnly
}

interface AnalyzeRuntimeDependenciesOptions {
  projectRoot: string
  tsconfigPath: string
}

const PRODUCTION_SOURCE_PATTERN = /\.(?:[cm]?[jt]sx?)$/
const NON_PRODUCTION_SOURCE_PATTERN =
  /(?:\.stories|\.spec|\.test)\.[cm]?[jt]sx?$|\/(?:__tests__|__mocks__)\//
const NON_CODE_IMPORT_PATTERN =
  /\.(?:avif|bmp|css|eot|gif|jpe?g|less|md|mdx|mp3|mp4|ogg|otf|sass|scss|svg|ttf|wav|webm|webp|woff2?)(?:\?.*)?$/i

function normalizePath(filePath: string, projectRoot: string): string {
  return path.relative(projectRoot, filePath).split(path.sep).join("/")
}

function readCompilerConfiguration(
  tsconfigPath: string,
  projectRoot: string
): ts.ParsedCommandLine {
  const configFile = ts.readConfigFile(tsconfigPath, (filePath) =>
    readFileSync(filePath, "utf8")
  )

  if (configFile.error) {
    throw new Error(
      ts.flattenDiagnosticMessageText(configFile.error.messageText, "\n")
    )
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    projectRoot,
    undefined,
    tsconfigPath
  )

  if (parsed.errors.length > 0) {
    throw new Error(formatDiagnostics(parsed.errors))
  }

  return parsed
}

function formatDiagnostics(diagnostics: readonly ts.Diagnostic[]): string {
  return diagnostics
    .map((diagnostic) => {
      const message = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        "\n"
      )

      if (!diagnostic.file || diagnostic.start === undefined) {
        return message
      }

      const position = diagnostic.file.getLineAndCharacterOfPosition(
        diagnostic.start
      )
      return `${diagnostic.file.fileName}:${position.line + 1}:${position.character + 1} ${message}`
    })
    .join("\n")
}

function isProductionSource(filePath: string, projectRoot: string): boolean {
  const relativePath = normalizePath(filePath, projectRoot)
  return (
    relativePath.startsWith("src/") &&
    PRODUCTION_SOURCE_PATTERN.test(relativePath) &&
    !relativePath.endsWith(".d.ts") &&
    !NON_PRODUCTION_SOURCE_PATTERN.test(relativePath)
  )
}

function emitRuntimeModule(
  filePath: string,
  compilerOptions: ts.CompilerOptions
): string {
  const result = ts.transpileModule(readFileSync(filePath, "utf8"), {
    compilerOptions: {
      ...compilerOptions,
      allowImportingTsExtensions: false,
      declaration: false,
      emitDeclarationOnly: false,
      module: ts.ModuleKind.ESNext,
      noEmit: false,
      sourceMap: false,
    },
    fileName: filePath,
    reportDiagnostics: true,
  })

  const errors = (result.diagnostics ?? []).filter(
    (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
  )
  if (errors.length > 0) {
    throw new Error(formatDiagnostics(errors))
  }

  return result.outputText
}

function staticModuleSpecifiers(
  emittedSource: string,
  filePath: string
): string[] {
  const sourceFile = ts.createSourceFile(
    filePath,
    emittedSource,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.JS
  )

  const specifiers: string[] = []
  for (const statement of sourceFile.statements) {
    if (
      ts.isImportDeclaration(statement) &&
      ts.isStringLiteral(statement.moduleSpecifier)
    ) {
      specifiers.push(statement.moduleSpecifier.text)
    } else if (
      ts.isExportDeclaration(statement) &&
      statement.moduleSpecifier &&
      ts.isStringLiteral(statement.moduleSpecifier)
    ) {
      specifiers.push(statement.moduleSpecifier.text)
    }
  }

  return specifiers
}

function pathPatternMatches(specifier: string, pattern: string): boolean {
  const starIndex = pattern.indexOf("*")
  if (starIndex === -1) {
    return specifier === pattern
  }

  return (
    specifier.startsWith(pattern.slice(0, starIndex)) &&
    specifier.endsWith(pattern.slice(starIndex + 1))
  )
}

function isInternalSpecifier(
  specifier: string,
  compilerOptions: ts.CompilerOptions
): boolean {
  if (specifier.startsWith(".") || path.isAbsolute(specifier)) {
    return true
  }

  return Object.keys(compilerOptions.paths ?? {}).some((pattern) =>
    pathPatternMatches(specifier, pattern)
  )
}

function resolveDependency(
  specifier: string,
  containingFile: string,
  compilerOptions: ts.CompilerOptions
): string | undefined {
  if (NON_CODE_IMPORT_PATTERN.test(specifier)) {
    return undefined
  }

  const resolved = ts.resolveModuleName(
    specifier,
    containingFile,
    compilerOptions,
    ts.sys
  ).resolvedModule?.resolvedFileName

  if (!resolved && isInternalSpecifier(specifier, compilerOptions)) {
    throw new Error(
      `Could not resolve ${specifier} imported by ${containingFile}`
    )
  }

  return resolved
}

function findStronglyConnectedComponents(
  graph: Record<string, string[]>
): string[][] {
  let nextIndex = 0
  const indices = new Map<string, number>()
  const lowLinks = new Map<string, number>()
  const stack: string[] = []
  const onStack = new Set<string>()
  const components: string[][] = []

  const visit = (node: string): void => {
    const nodeIndex = nextIndex++
    indices.set(node, nodeIndex)
    lowLinks.set(node, nodeIndex)
    stack.push(node)
    onStack.add(node)

    for (const dependency of graph[node] ?? []) {
      if (!indices.has(dependency)) {
        visit(dependency)
        lowLinks.set(
          node,
          Math.min(lowLinks.get(node)!, lowLinks.get(dependency)!)
        )
      } else if (onStack.has(dependency)) {
        lowLinks.set(
          node,
          Math.min(lowLinks.get(node)!, indices.get(dependency)!)
        )
      }
    }

    if (lowLinks.get(node) !== indices.get(node)) {
      return
    }

    const component: string[] = []
    let member: string
    do {
      member = stack.pop()!
      onStack.delete(member)
      component.push(member)
    } while (member !== node)

    components.push(component.sort())
  }

  for (const node of Object.keys(graph).sort()) {
    if (!indices.has(node)) {
      visit(node)
    }
  }

  return components
}

function findCycles(graph: Record<string, string[]>): RuntimeDependencyCycle[] {
  return findStronglyConnectedComponents(graph)
    .filter(
      (component) =>
        component.length > 1 || graph[component[0]]?.includes(component[0])
    )
    .map((files) => ({ files }))
    .sort((left, right) => left.files[0].localeCompare(right.files[0]))
}

function findCyclicEdges(
  graph: Record<string, string[]>,
  cycles: RuntimeDependencyCycle[]
): string[] {
  return cycles
    .flatMap((cycle) => {
      const members = new Set(cycle.files)
      return cycle.files.flatMap((file) =>
        (graph[file] ?? [])
          .filter((dependency) => members.has(dependency))
          .map((dependency) => `${file} -> ${dependency}`)
      )
    })
    .sort()
}

export function analyzeRuntimeDependencies({
  projectRoot,
  tsconfigPath,
}: AnalyzeRuntimeDependenciesOptions): RuntimeDependencyAnalysis {
  const configuration = readCompilerConfiguration(tsconfigPath, projectRoot)
  const sourceFiles = configuration.fileNames
    .filter((filePath) => isProductionSource(filePath, projectRoot))
    .sort()
  const sourceFileSet = new Set(
    sourceFiles.map((filePath) => path.resolve(filePath))
  )
  const graph: Record<string, string[]> = {}

  for (const filePath of sourceFiles) {
    const emittedSource = emitRuntimeModule(filePath, configuration.options)
    const dependencies = staticModuleSpecifiers(emittedSource, filePath)
      .map((specifier) =>
        resolveDependency(specifier, filePath, configuration.options)
      )
      .filter(
        (dependency): dependency is string =>
          dependency !== undefined &&
          sourceFileSet.has(path.resolve(dependency))
      )
      .map((dependency) => normalizePath(dependency, projectRoot))

    graph[normalizePath(filePath, projectRoot)] = Array.from(
      new Set(dependencies)
    ).sort()
  }

  const cycles = findCycles(graph)
  return { graph, cycles, cyclicEdges: findCyclicEdges(graph, cycles) }
}
