#!/usr/bin/env node
/// <reference types="node" />

import { consola } from "consola"
import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import {
  analyzeRuntimeDependencies,
  findRuntimeCycleDifferences,
  type RuntimeDependencyCycle,
} from "./runtime-dependency-graph"

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
  const baseline = JSON.parse(
    readFileSync(
      path.join(reactPackageRoot, ".scripts/runtime-cycle-baseline.json"),
      "utf8"
    )
  ) as RuntimeDependencyCycle[]
  const cycleDifferences = findRuntimeCycleDifferences(
    analysis.cycles,
    baseline
  )
  const hasDifferences =
    cycleDifferences.currentOnly.length > 0 ||
    cycleDifferences.baselineOnly.length > 0

  if (json) {
    process.stdout.write(
      `${JSON.stringify({ ...analysis, cycleDifferences }, null, 2)}\n`
    )
  } else if (!hasDifferences) {
    consola.success(
      `Runtime cycle baseline matches across ${Object.keys(analysis.graph).length} production files (${analysis.cycles.length} groups)`
    )
  } else {
    consola.error(
      `Runtime cycle baseline differs across ${Object.keys(analysis.graph).length} production files. Update the baseline in the same change that modifies a cycle.`
    )
    for (const cycle of cycleDifferences.currentOnly) {
      consola.log(`\nCurrent-only cycle (${cycle.files.length} files)`)
      for (const file of cycle.files) {
        consola.log(`   ${file}`)
      }
    }
    for (const cycle of cycleDifferences.baselineOnly) {
      consola.log(`\nBaseline-only cycle (${cycle.files.length} files)`)
      for (const file of cycle.files) {
        consola.log(`   ${file}`)
      }
    }
  }

  if (hasDifferences) {
    process.exitCode = 1
  }
}

try {
  main()
} catch (error) {
  consola.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
}
