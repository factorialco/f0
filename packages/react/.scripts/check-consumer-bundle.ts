#!/usr/bin/env tsx
import { spawnSync } from "node:child_process"
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  symlinkSync,
  writeFileSync,
} from "node:fs"
import path, { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { brotliCompressSync, constants, gzipSync } from "node:zlib"
import { build } from "vite"

import {
  compareBundleReport,
  normalizeChunkName,
  type AssetMetric,
  type BundleReport,
  type BundleVariantReport,
} from "./consumer-bundle-baseline"

const PACKAGE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const BASELINE_PATH = resolve(
  PACKAGE_DIR,
  ".scripts/consumer-bundle-baseline.json"
)

const VARIANTS: Record<string, string> = {
  native: `
export default function App() {
  return <button type="button">Save</button>
}
`,
  f0Button: `
import { F0Button } from "@factorialco/f0-react"

export default function App() {
  return <F0Button label="Save" />
}
`,
  f0ButtonWithGlobalStyles: `
import { F0Button } from "@factorialco/f0-react"
import "@factorialco/f0-react/dist/styles.css"

export default function App() {
  return <F0Button label="Save" />
}
`,
  f0Box: retainRootExport("F0Box"),
  f0Text: retainRootExport("F0Text"),
  f0Dialog: retainRootExport("F0Dialog"),
  f0Select: retainRootExport("F0Select"),
  f0Form: retainRootExport("F0Form"),
  oneDataCollection: retainExport(
    "OneDataCollection",
    "@factorialco/f0-react/dist/experimental"
  ),
  f0AiChat: retainRootExport("F0AiChat"),
  f0PdfViewer: retainRootExport("F0PdfViewer"),
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
  const result = spawnSync(command, args, {
    cwd,
    encoding: "utf8",
  })
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

function assetMetric(files: string[]): AssetMetric {
  return files.reduce<AssetMetric>(
    (total, filePath) => {
      const contents = readFileSync(filePath)
      return {
        raw: total.raw + contents.length,
        gzip: total.gzip + gzipSync(contents, { level: 9 }).length,
        brotli:
          total.brotli +
          brotliCompressSync(contents, {
            params: {
              [constants.BROTLI_PARAM_QUALITY]: 11,
            },
          }).length,
      }
    },
    { raw: 0, gzip: 0, brotli: 0 }
  )
}

function retainedF0Modules(
  sourceMapFiles: string[],
  extractedPackageDir: string
): string[] {
  const packageDist = resolve(extractedPackageDir, "dist") + path.sep
  const modules = new Set<string>()

  for (const sourceMapFile of sourceMapFiles) {
    const sourceMap = JSON.parse(readFileSync(sourceMapFile, "utf8")) as {
      sources?: string[]
    }
    for (const source of sourceMap.sources ?? []) {
      const sourcePath = resolve(dirname(sourceMapFile), source)
      if (sourcePath.startsWith(packageDist) && sourcePath.endsWith(".js")) {
        modules.add(normalizeChunkName(path.basename(sourcePath)))
      }
    }
  }

  return [...modules].sort()
}

async function buildVariant(
  tempDir: string,
  extractedPackageDir: string,
  variantName: string,
  appSource: string
): Promise<BundleVariantReport> {
  const consumerDir = resolve(tempDir, `consumer-${variantName}`)
  const srcDir = resolve(consumerDir, "src")
  const packageScopeDir = resolve(consumerDir, "node_modules/@factorialco")
  mkdirSync(srcDir, { recursive: true })
  mkdirSync(packageScopeDir, { recursive: true })
  symlinkSync(extractedPackageDir, resolve(packageScopeDir, "f0-react"), "dir")
  writeFileSync(
    resolve(consumerDir, "index.html"),
    '<div id="root"></div><script type="module" src="/src/main.tsx"></script>\n'
  )
  writeFileSync(resolve(srcDir, "App.tsx"), appSource.trimStart())
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
    build: {
      emptyOutDir: true,
      outDir: "dist",
      sourcemap: true,
    },
  })) as { output: EmittedOutput[] } | Array<{ output: EmittedOutput[] }>

  const outputFiles = walkFiles(resolve(consumerDir, "dist"))
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

  return {
    assets: {
      js: assetMetric(outputFiles.filter((file) => file.endsWith(".js"))),
      initialJs: assetMetric(
        [...initialChunkNames].map((fileName) =>
          resolve(consumerDir, "dist", fileName)
        )
      ),
      css: assetMetric(outputFiles.filter((file) => file.endsWith(".css"))),
    },
    retainedF0Modules: retainedF0Modules(
      outputFiles.filter((file) => file.endsWith(".js.map")),
      extractedPackageDir
    ),
  }
}

interface EmittedOutput {
  type: string
  fileName: string
}

interface EmittedChunk extends EmittedOutput {
  type: "chunk"
  isEntry: boolean
  imports: string[]
}

async function measureBundle(): Promise<BundleReport> {
  if (!existsSync(resolve(PACKAGE_DIR, "dist/f0.js"))) {
    throw new Error(
      "Missing packages/react/dist/f0.js. Build @factorialco/f0-react before running the consumer bundle check."
    )
  }

  const cacheDir = resolve(PACKAGE_DIR, ".cache")
  mkdirSync(cacheDir, { recursive: true })
  const tempDir = mkdtempSync(resolve(cacheDir, "consumer-bundle-"))
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
    const requestedVariant = process.argv
      .find((argument) => argument.startsWith("--variant="))
      ?.slice("--variant=".length)
    if (requestedVariant && !VARIANTS[requestedVariant]) {
      throw new Error(`Unknown consumer bundle variant: ${requestedVariant}`)
    }
    const variantsToBuild = requestedVariant
      ? { [requestedVariant]: VARIANTS[requestedVariant] }
      : VARIANTS
    const variants: BundleReport["variants"] = {}
    // Vite 8 uses Rolldown's in-process compiler. Running multiple builds in
    // parallel can cross-contaminate their chunk graphs, so production bundle
    // evidence must be collected sequentially.
    for (const [variantName, appSource] of Object.entries(variantsToBuild)) {
      variants[variantName] = await buildVariant(
        tempDir,
        extractedPackageDir,
        variantName,
        appSource
      )
    }
    return { variants }
  } finally {
    rmSync(tempDir, { recursive: true, force: true })
  }
}

function formatBytes(bytes: number): string {
  return `${(bytes / 1024).toFixed(1)} KiB`
}

async function main(): Promise<void> {
  const report = await measureBundle()

  if (process.argv.includes("--json")) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
  } else {
    for (const [variantName, variant] of Object.entries(report.variants)) {
      process.stdout.write(
        `${variantName}: JS ${formatBytes(variant.assets.js.brotli)} brotli, ` +
          `initial ${formatBytes(variant.assets.initialJs.brotli)} brotli, ` +
          `CSS ${formatBytes(variant.assets.css.brotli)} brotli\n`
      )
    }
  }

  if (!existsSync(BASELINE_PATH)) {
    throw new Error(`Missing bundle baseline: ${BASELINE_PATH}`)
  }
  const baseline = JSON.parse(
    readFileSync(BASELINE_PATH, "utf8")
  ) as BundleReport
  const requestedVariant = process.argv
    .find((argument) => argument.startsWith("--variant="))
    ?.slice("--variant=".length)
  const relevantBaseline = requestedVariant
    ? {
        variants: baseline.variants[requestedVariant]
          ? { [requestedVariant]: baseline.variants[requestedVariant] }
          : {},
      }
    : baseline
  const failures = compareBundleReport(report, relevantBaseline)
  if (failures.length > 0) {
    console.error("Consumer bundle baseline failed:")
    for (const failure of failures) console.error(`- ${failure}`)
    process.exit(1)
  }

  if (!process.argv.includes("--json")) {
    process.stdout.write("Consumer bundle baseline passed\n")
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
