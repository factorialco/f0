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
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import path, { dirname, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { validatePublication } from "./check-publication"
import {
  validateRootSubpathParity,
  type OwnedInputMetric,
} from "./consumer-bundle-contract"

const PACKAGE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const TSC_PATH = fileURLToPath(import.meta.resolve("typescript/lib/tsc.js"))

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
    "@types/react",
    "@types/react-dom",
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

function validatePublishedTypes(consumerRoot: string): void {
  const consumerDir = resolve(consumerRoot, "types")
  mkdirSync(consumerDir, { recursive: true })
  writeFileSync(
    resolve(consumerDir, "consumer.ts"),
    `import type { F0ButtonProps } from "@factorialco/f0-react/F0Button"

const props: F0ButtonProps = { label: "Save", "data-testid": "save" }
void props
`
  )
  writeFileSync(
    resolve(consumerDir, "root-consumer.ts"),
    `import type { F0ButtonProps } from "@factorialco/f0-react"

const props: F0ButtonProps = { label: "Save", "data-testid": "save" }
void props
`
  )
  writeFileSync(
    resolve(consumerDir, "tsconfig.json"),
    `${JSON.stringify(
      {
        compilerOptions: {
          module: "esnext",
          moduleResolution: "bundler",
          noEmit: true,
          strict: true,
          target: "es2022",
          types: ["react", "react-dom"],
        },
        include: ["consumer.ts"],
      },
      null,
      2
    )}\n`
  )

  run(
    process.execPath,
    [TSC_PATH, "--project", resolve(consumerDir, "tsconfig.json")],
    consumerDir
  )
  run(
    process.execPath,
    [
      TSC_PATH,
      "--ignoreConfig",
      "--module",
      "esnext",
      "--moduleResolution",
      "bundler",
      "--noEmit",
      "--skipLibCheck",
      "--strict",
      "--target",
      "es2022",
      "--types",
      "react,react-dom",
      resolve(consumerDir, "root-consumer.ts"),
    ],
    consumerDir
  )
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

async function measureBundle(): Promise<Record<string, BrowserProbeMetric>> {
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
    const publicationErrors = validatePublication(extractedPackageDir)
    if (publicationErrors.length > 0) {
      throw new Error(
        `Publication contract failed:\n${publicationErrors.join("\n")}`
      )
    }
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
    validatePublishedTypes(consumerRoot)
    return await buildBrowserProbes(consumerRoot, installedPackageDir)
  } finally {
    rmSync(tempDir, { recursive: true, force: true })
  }
}

function formatBytes(bytes: number): string {
  return `${(bytes / 1024).toFixed(1)} KiB`
}

async function main(): Promise<void> {
  const result = await measureBundle()

  if (process.argv.includes("--json")) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
  } else {
    for (const [probeName, probe] of Object.entries(result)) {
      process.stdout.write(
        `browser/${probeName}: ${formatBytes(probe.bytes)} raw, ${probe.inputCount} inputs, ${probe.f0Inputs.length} F0 inputs\n`
      )
    }
  }
  if (!process.argv.includes("--json")) {
    process.stdout.write("Consumer bundle contract passed\n")
  }
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
