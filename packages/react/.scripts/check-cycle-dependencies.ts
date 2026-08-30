#!/usr/bin/env node
/// <reference types="node" />

import { consola } from "consola"
import { execFileSync } from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { analyzeRuntimeDependencies } from "./runtime-dependency-graph"

const reactPackageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
)

function hasStagedReactSourceChanges(): boolean {
  const workspaceRoot = path.resolve(reactPackageRoot, "../..")
  const changedFiles = execFileSync(
    "git",
    ["diff", "--cached", "--name-only", "--diff-filter=ACMRT"],
    {
      cwd: workspaceRoot,
      encoding: "utf8",
    }
  )

  return changedFiles
    .split("\n")
    .some((filePath) =>
      /^packages\/react\/src\/.*\.[cm]?[jt]sx?$/.test(filePath)
    )
}

function main(): void {
  const json = process.argv.includes("--json")
  const preCommit = process.argv.includes("--pre-commit")

  if (preCommit && !hasStagedReactSourceChanges()) {
    consola.info("No staged React source changes; skipping runtime cycle check")
    return
  }

  const analysis = analyzeRuntimeDependencies({
    projectRoot: reactPackageRoot,
    tsconfigPath: path.join(reactPackageRoot, "tsconfig.json"),
  })

  if (json) {
    process.stdout.write(`${JSON.stringify(analysis, null, 2)}\n`)
  } else if (analysis.cycles.length === 0) {
    consola.success(
      `No static runtime cycles across ${Object.keys(analysis.graph).length} production files`
    )
  } else {
    consola.error(
      `Found ${analysis.cycles.length} static runtime cycle groups across ${Object.keys(analysis.graph).length} production files:`
    )
    for (let index = 0; index < analysis.cycles.length; index++) {
      const cycle = analysis.cycles[index]
      consola.log(`\n${index + 1}. ${cycle.files.length} files`)
      for (const file of cycle.files) {
        consola.log(`   ${file}`)
      }
    }
  }

  if (analysis.cycles.length > 0) {
    process.exitCode = 1
  }
}

try {
  main()
} catch (error) {
  consola.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
}
