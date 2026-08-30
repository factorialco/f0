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

  await build({
    root: consumerDir,
    configFile: false,
    logLevel: "silent",
    build: {
      emptyOutDir: true,
      outDir: "dist",
      sourcemap: true,
    },
  })

  const outputFiles = walkFiles(resolve(consumerDir, "dist"))
  return {
    assets: {
      js: assetMetric(outputFiles.filter((file) => file.endsWith(".js"))),
      css: assetMetric(outputFiles.filter((file) => file.endsWith(".css"))),
    },
    retainedF0Modules: retainedF0Modules(
      outputFiles.filter((file) => file.endsWith(".js.map")),
      extractedPackageDir
    ),
  }
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
    const variants = Object.fromEntries(
      await Promise.all(
        Object.entries(VARIANTS).map(async ([variantName, appSource]) => [
          variantName,
          await buildVariant(
            tempDir,
            extractedPackageDir,
            variantName,
            appSource
          ),
        ])
      )
    )
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
  const failures = compareBundleReport(report, baseline)
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
