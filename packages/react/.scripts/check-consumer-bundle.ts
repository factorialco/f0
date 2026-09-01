#!/usr/bin/env tsx
import { build as buildWithEsbuild } from "esbuild"
import { spawnSync } from "node:child_process"
import {
  cpSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import path, { dirname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { brotliCompressSync, constants } from "node:zlib"
import valueParser from "postcss-value-parser"
import { build } from "vite"

import {
  validateDeliveryCeiling,
  validateLazyBoundary,
  validateRootSubpathParity,
  type BundleMetric,
  type DeliveryCeiling,
  type OwnedInputMetric,
} from "./consumer-bundle-contract"

const PACKAGE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")

interface ConsumerScenario extends DeliveryCeiling {
  source: string
  forbiddenModules?: readonly string[]
  lazyDependencies?: readonly string[]
}

interface PackageManifest {
  dependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

const COMMON_FORBIDDEN_MODULES = [
  "node_modules/docx-preview/",
  "node_modules/maplibre-gl/",
  "node_modules/pdfjs-dist/",
  "node_modules/xlsx/",
  "/F0AiChat/",
  "/F0CanvasPanel/",
] as const

const SCENARIOS = {
  f0Button: {
    source: `
import { F0Button } from "@factorialco/f0-react"
import "@factorialco/f0-react/dist/styles.css"

export default function App() {
  return <F0Button label="Save" />
}
`,
    forbiddenModules: COMMON_FORBIDDEN_MODULES,
    maxInitialJsBrotli: 176 * 1024,
    maxCssBrotli: 48 * 1024,
  },
  f0Form: {
    source: retainRootExport("F0Form"),
    forbiddenModules: COMMON_FORBIDDEN_MODULES,
    maxInitialJsBrotli: 1_344 * 1024,
  },
  oneDataCollection: {
    source: retainExport(
      "OneDataCollection",
      "@factorialco/f0-react/experimental"
    ),
    forbiddenModules: COMMON_FORBIDDEN_MODULES,
    maxInitialJsBrotli: 1_024 * 1024,
  },
  f0AiChat: {
    source: retainRootExport("F0AiChat"),
    forbiddenModules: [
      "node_modules/docx-preview/",
      "node_modules/maplibre-gl/",
      "node_modules/pdfjs-dist/",
      "/F0CanvasPanel/",
      "/F0PdfViewer/",
    ],
    maxInitialJsBrotli: 176 * 1024,
  },
  f0PdfViewer: {
    source: retainRootExport("F0PdfViewer"),
    forbiddenModules: [
      "node_modules/maplibre-gl/",
      "/F0AiChat/",
      "/F0CanvasPanel/",
    ],
    lazyDependencies: ["node_modules/xlsx/", "node_modules/docx-preview/"],
    maxInitialJsBrotli: 1_296 * 1024,
    maxTotalJsBrotli: 1_440 * 1024,
  },
} as const satisfies Record<string, ConsumerScenario>

function browserButtonSource(moduleSpecifier: string): string {
  return `
import React from "react"
import { createRoot } from "react-dom/client"
import { F0Button } from "${moduleSpecifier}"

createRoot(document.createElement("div")).render(
  <F0Button label="Save" onClick={() => undefined} />
)
`
}

const BROWSER_PROBES = {
  subpath: browserButtonSource("@factorialco/f0-react/F0Button"),
  root: browserButtonSource("@factorialco/f0-react"),
} as const

interface BrowserProbeMetric {
  bytes: number
  inputCount: number
  f0Inputs: OwnedInputMetric[]
}

interface EmittedOutput {
  type: string
  fileName: string
}

interface EmittedChunk extends EmittedOutput {
  type: "chunk"
  isEntry: boolean
  imports: string[]
  modules: Record<string, unknown>
}

function retainRootExport(exportName: string): string {
  return retainExport(exportName, "@factorialco/f0-react")
}

function retainExport(exportName: string, moduleSpecifier: string): string {
  return `
import { ${exportName} } from "${moduleSpecifier}"

console.log(${exportName})

export default function App() {
  return null
}
`
}

function run(command: string, args: string[], cwd: string): void {
  const result = spawnSync(command, args, { cwd, encoding: "utf8" })
  if (result.status !== 0) {
    throw new Error(
      [
        `Command failed: ${command} ${args.join(" ")}`,
        result.stdout,
        result.stderr,
      ]
        .filter(Boolean)
        .join("\n")
    )
  }
}

function walkFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const filePath = path.join(directory, entry)
    return statSync(filePath).isDirectory() ? walkFiles(filePath) : [filePath]
  })
}

function linkConsumerDependencies(
  consumerNodeModules: string,
  manifest: PackageManifest
): void {
  const packageNodeModules = resolve(PACKAGE_DIR, "node_modules")
  const optionalDependencies = new Set(
    Object.keys(manifest.optionalDependencies ?? {})
  )
  const dependencyNames = new Set([
    ...Object.keys(manifest.dependencies ?? {}),
    ...Object.keys(manifest.peerDependencies ?? {}),
    ...optionalDependencies,
  ])
  mkdirSync(consumerNodeModules, { recursive: true })
  for (const dependencyName of dependencyNames) {
    const source = resolve(packageNodeModules, dependencyName)
    if (!existsSync(source)) {
      if (optionalDependencies.has(dependencyName)) continue
      throw new Error(`Missing declared consumer dependency: ${dependencyName}`)
    }
    const destination = resolve(consumerNodeModules, dependencyName)
    mkdirSync(dirname(destination), { recursive: true })
    if (existsSync(destination)) {
      continue
    }
    symlinkSync(source, destination, "dir")
  }
}

function brotliBytes(files: string[]): number {
  return files.reduce(
    (total, filePath) =>
      total +
      brotliCompressSync(readFileSync(filePath), {
        params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
      }).length,
    0
  )
}

function validatePublishedStyleAssets(extractedPackageDir: string): void {
  const stylesheetPath = resolve(extractedPackageDir, "dist/styles.css")
  const css = readFileSync(stylesheetPath, "utf8")
  const invalidReferences = new Set<string>()
  valueParser(css).walk((node) => {
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
    const assetPath = resolve(dirname(stylesheetPath), assetReference)
    const packageRelativePath = relative(extractedPackageDir, assetPath)
    if (
      packageRelativePath.startsWith("..") ||
      path.isAbsolute(packageRelativePath) ||
      !existsSync(assetPath) ||
      !statSync(assetPath).isFile()
    ) {
      invalidReferences.add(reference.value)
    }
  })

  if (invalidReferences.size > 0) {
    throw new Error(
      `Published styles reference missing or unpackable assets:\n${[
        ...invalidReferences,
      ].join("\n")}`
    )
  }
}

function ownedF0InputPath(
  inputPath: string,
  consumerDir: string,
  installedPackageDir: string
): string | null {
  const absoluteInputPath = resolve(consumerDir, inputPath)
  const distRoot = resolve(installedPackageDir, "dist")
  if (absoluteInputPath.startsWith(`${distRoot}${path.sep}`)) {
    return `dist/${relative(distRoot, absoluteInputPath)
      .split(path.sep)
      .join("/")}`
  }
  return null
}

async function buildBrowserProbes(
  consumerRoot: string,
  installedPackageDir: string
): Promise<Record<string, BrowserProbeMetric>> {
  const consumerDir = resolve(consumerRoot, "browser")
  mkdirSync(consumerDir, { recursive: true })

  const metrics: Record<string, BrowserProbeMetric> = {}
  for (const [probeName, source] of Object.entries(BROWSER_PROBES)) {
    const entryPath = resolve(consumerDir, `${probeName}.tsx`)
    writeFileSync(entryPath, source.trimStart())
    const result = await buildWithEsbuild({
      absWorkingDir: consumerDir,
      bundle: true,
      entryPoints: [entryPath],
      format: "esm",
      jsx: "automatic",
      logLevel: "silent",
      metafile: true,
      minify: true,
      outdir: resolve(consumerDir, `out-${probeName}`),
      platform: "browser",
      target: "es2022",
      write: false,
    })
    const output = result.outputFiles.find((file) => file.path.endsWith(".js"))
    if (!output)
      throw new Error(`Browser probe emitted no output: ${probeName}`)
    for (const pattern of [
      "Dynamic require of",
      '__require("react")',
      "__require('react')",
      'require("react")',
      "require('react')",
    ]) {
      if (output.text.includes(pattern)) {
        throw new Error(
          `Browser probe ${probeName} retained unsafe React loading: ${pattern}`
        )
      }
    }
    if (output.contents.length > 700_000) {
      throw new Error(
        `Browser probe ${probeName} is ${output.contents.length} B; ceiling is 700000 B`
      )
    }

    const javascriptOutput = Object.entries(result.metafile.outputs).find(
      ([outputPath]) => outputPath.endsWith(".js")
    )?.[1]
    if (!javascriptOutput) {
      throw new Error(`Browser probe emitted no metadata: ${probeName}`)
    }
    const retainedInputs = Object.entries(javascriptOutput.inputs).filter(
      ([, input]) => input.bytesInOutput > 0
    )
    const forbiddenDependency = retainedInputs.find(([inputPath]) =>
      COMMON_FORBIDDEN_MODULES.some((pattern) => inputPath.includes(pattern))
    )?.[0]
    if (forbiddenDependency) {
      throw new Error(
        `Browser probe ${probeName} retained unrelated dependency: ${forbiddenDependency}`
      )
    }

    metrics[probeName] = {
      bytes: output.contents.length,
      inputCount: retainedInputs.length,
      f0Inputs: retainedInputs.flatMap(([inputPath, input]) => {
        const ownedPath = ownedF0InputPath(
          inputPath,
          consumerDir,
          installedPackageDir
        )
        return ownedPath
          ? [{ path: ownedPath, bytes: input.bytesInOutput }]
          : []
      }),
    }
    if (metrics[probeName].f0Inputs.length === 0) {
      throw new Error(
        `Browser probe ${probeName} retained no packed F0 inputs. Candidates:\n${retainedInputs
          .map(([inputPath]) => inputPath)
          .filter((inputPath) => inputPath.includes("dist/esm"))
          .slice(0, 10)
          .join("\n")}`
      )
    }
  }

  const parityErrors = validateRootSubpathParity(
    metrics.root.f0Inputs,
    metrics.subpath.f0Inputs,
    { maxAdditionalBytes: 16 * 1024, maxAdditionalModules: 5 }
  )
  if (parityErrors.length > 0) {
    throw new Error(`Root/subpath parity failed:\n${parityErrors.join("\n")}`)
  }

  return metrics
}

async function buildScenario(
  consumerRoot: string,
  installedPackageDir: string,
  scenarioName: string,
  scenario: ConsumerScenario
): Promise<BundleMetric> {
  const consumerDir = resolve(consumerRoot, `scenario-${scenarioName}`)
  const srcDir = resolve(consumerDir, "src")
  mkdirSync(srcDir, { recursive: true })
  writeFileSync(
    resolve(consumerDir, "index.html"),
    '<div id="root"></div><script type="module" src="/src/main.tsx"></script>\n'
  )
  writeFileSync(resolve(srcDir, "App.tsx"), scenario.source.trimStart())
  writeFileSync(
    resolve(srcDir, "main.tsx"),
    `import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
`
  )

  const buildResult = (await build({
    root: consumerDir,
    configFile: false,
    logLevel: "silent",
    build: { emptyOutDir: true, outDir: "dist" },
  })) as { output: EmittedOutput[] } | Array<{ output: EmittedOutput[] }>
  const emittedOutputs = Array.isArray(buildResult)
    ? buildResult.flatMap((result) => result.output)
    : buildResult.output
  const chunks = emittedOutputs.filter(
    (output): output is EmittedChunk => output.type === "chunk"
  )
  const chunksByName = new Map(chunks.map((chunk) => [chunk.fileName, chunk]))
  const initialChunkNames = new Set<string>()
  const pendingChunkNames = chunks
    .filter((chunk) => chunk.isEntry)
    .map((chunk) => chunk.fileName)
  while (pendingChunkNames.length > 0) {
    const chunkName = pendingChunkNames.pop()!
    if (initialChunkNames.has(chunkName)) continue
    initialChunkNames.add(chunkName)
    pendingChunkNames.push(...(chunksByName.get(chunkName)?.imports ?? []))
  }

  const initialModules = [
    ...new Set(
      [...initialChunkNames].flatMap((chunkName) =>
        Object.keys(chunksByName.get(chunkName)?.modules ?? {})
      )
    ),
  ]
  const allModules = [
    ...new Set(chunks.flatMap((chunk) => Object.keys(chunk.modules))),
  ]
  const forbiddenModule = allModules.find((moduleId) =>
    scenario.forbiddenModules?.some((pattern) => moduleId.includes(pattern))
  )
  if (forbiddenModule) {
    throw new Error(
      `${scenarioName} retained forbidden dependency: ${forbiddenModule}`
    )
  }
  if (scenario.lazyDependencies) {
    const lazyErrors = validateLazyBoundary(
      scenarioName,
      initialModules,
      allModules,
      [...scenario.lazyDependencies]
    )
    if (lazyErrors.length > 0) throw new Error(lazyErrors.join("\n"))
  }

  const outputFiles = walkFiles(resolve(consumerDir, "dist"))
  const installedDistRoot = realpathSync(resolve(installedPackageDir, "dist"))
  const metric: BundleMetric = {
    totalJsBrotli: brotliBytes(
      outputFiles.filter((file) => file.endsWith(".js"))
    ),
    initialJsBrotli: brotliBytes(
      [...initialChunkNames].map((fileName) =>
        resolve(consumerDir, "dist", fileName)
      )
    ),
    cssBrotli: brotliBytes(outputFiles.filter((file) => file.endsWith(".css"))),
    retainedF0Modules: new Set(
      allModules.filter((moduleId) =>
        moduleId.startsWith(`${installedDistRoot}${path.sep}`)
      )
    ).size,
  }
  if (metric.retainedF0Modules === 0) {
    throw new Error(
      `${scenarioName} retained no modules from the packed package`
    )
  }
  if (
    scenario.lazyDependencies &&
    metric.totalJsBrotli <= metric.initialJsBrotli
  ) {
    throw new Error(`${scenarioName} emitted no asynchronous JavaScript`)
  }

  return metric
}

async function measureBundle(): Promise<{
  browserProbes: Record<string, BrowserProbeMetric>
  scenarios: Record<string, BundleMetric>
}> {
  if (!existsSync(resolve(PACKAGE_DIR, "dist/f0.js"))) {
    throw new Error(
      "Missing packages/react/dist/f0.js. Build @factorialco/f0-react before running the consumer bundle check."
    )
  }

  // Keep consumers outside both the package scope and repository module
  // resolution so only explicitly linked published dependencies are visible.
  const tempDir = mkdtempSync(resolve(tmpdir(), "f0-consumer-bundle-"))
  try {
    const packedDir = resolve(tempDir, "packed")
    mkdirSync(packedDir)
    run("pnpm", ["pack", "--pack-destination", packedDir], PACKAGE_DIR)
    const tarball = readdirSync(packedDir)
      .filter((file) => file.endsWith(".tgz"))
      .map((file) => resolve(packedDir, file))[0]
    if (!tarball) throw new Error("pnpm pack did not produce a tarball")

    run("tar", ["-xzf", tarball, "-C", tempDir], PACKAGE_DIR)
    const extractedPackageDir = resolve(tempDir, "package")
    validatePublishedStyleAssets(extractedPackageDir)
    const manifest = JSON.parse(
      readFileSync(resolve(extractedPackageDir, "package.json"), "utf8")
    ) as PackageManifest
    const consumerRoot = resolve(tempDir, "consumer")
    const installedPackageDir = resolve(
      consumerRoot,
      "node_modules/@factorialco/f0-react"
    )
    linkConsumerDependencies(resolve(consumerRoot, "node_modules"), manifest)
    cpSync(extractedPackageDir, installedPackageDir, { recursive: true })
    const browserProbes = await buildBrowserProbes(
      consumerRoot,
      installedPackageDir
    )
    const scenarios: Record<string, BundleMetric> = {}
    // Rolldown builds share in-process compiler state. Keep these sequential to
    // prevent one scenario's chunk graph from contaminating another.
    for (const [scenarioName, scenario] of Object.entries(SCENARIOS)) {
      scenarios[scenarioName] = await buildScenario(
        consumerRoot,
        installedPackageDir,
        scenarioName,
        scenario
      )
    }
    return { browserProbes, scenarios }
  } finally {
    rmSync(tempDir, { recursive: true, force: true })
  }
}

function formatBytes(bytes: number): string {
  return `${(bytes / 1024).toFixed(1)} KiB`
}

async function main(): Promise<void> {
  const result = await measureBundle()
  const errors: string[] = []

  for (const [scenarioName, scenario] of Object.entries(SCENARIOS)) {
    errors.push(
      ...validateDeliveryCeiling(
        scenarioName,
        result.scenarios[scenarioName],
        scenario
      )
    )
  }

  if (process.argv.includes("--json")) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
  } else {
    for (const [probeName, probe] of Object.entries(result.browserProbes)) {
      process.stdout.write(
        `browser/${probeName}: ${formatBytes(probe.bytes)} raw, ${probe.inputCount} inputs, ${probe.f0Inputs.length} F0 inputs\n`
      )
    }
    for (const [scenarioName, metric] of Object.entries(result.scenarios)) {
      process.stdout.write(
        `${scenarioName}: initial JS ${formatBytes(
          metric.initialJsBrotli
        )} Brotli, total JS ${formatBytes(
          metric.totalJsBrotli
        )} Brotli, CSS ${formatBytes(
          metric.cssBrotli
        )} Brotli, ${metric.retainedF0Modules} F0 modules\n`
      )
    }
  }

  if (errors.length > 0) {
    throw new Error(`Consumer bundle contract failed:\n${errors.join("\n")}`)
  }
  if (!process.argv.includes("--json")) {
    process.stdout.write("Consumer bundle contract passed\n")
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
