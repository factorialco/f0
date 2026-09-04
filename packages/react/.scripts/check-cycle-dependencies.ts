#!/usr/bin/env node
/// <reference types="node" />

import { consola } from "consola"
import { execFileSync } from "node:child_process"
import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import {
  analyzeRuntimeDependencies,
  findAddedRuntimeCycleEdges,
  findRuntimeCycleEdgeDifferences,
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
  const baseBaselineFlag = process.argv.indexOf("--base-baseline")
  const baseBaselinePath =
    baseBaselineFlag === -1 ? undefined : process.argv[baseBaselineFlag + 1]

  if (baseBaselineFlag !== -1 && !baseBaselinePath) {
    throw new Error("--base-baseline requires a file path")
  }

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
  ) as string[]
  const cycleDifferences = findRuntimeCycleEdgeDifferences(
    analysis.cyclicEdges,
    baseline
  )
  const baselineAdditions = baseBaselinePath
    ? findAddedRuntimeCycleEdges(
        baseline,
        JSON.parse(readFileSync(baseBaselinePath, "utf8")) as string[]
      )
    : []
  const hasDifferences =
    cycleDifferences.currentOnly.length > 0 ||
    cycleDifferences.baselineOnly.length > 0
  const hasBaselineAdditions = baselineAdditions.length > 0

  if (json) {
    process.stdout.write(
      `${JSON.stringify(
        { ...analysis, cycleDifferences, baselineAdditions },
        null,
        2
      )}\n`
    )
  } else if (!hasDifferences && !hasBaselineAdditions) {
    consola.success(
      `Runtime cycle baseline matches across ${Object.keys(analysis.graph).length} production files (${analysis.cyclicEdges.length} cyclic edges in ${analysis.cycles.length} groups)`
    )
  } else {
    if (hasDifferences) {
      consola.error(
        `Runtime cycle baseline differs across ${Object.keys(analysis.graph).length} production files. Update the baseline in the same change that removes a cycle.`
      )
    }
    if (hasBaselineAdditions) {
      consola.error("Runtime cycle baseline may only remove inherited edges.")
    }
    for (const edge of cycleDifferences.currentOnly) {
      consola.log(`   current-only: ${edge}`)
    }
    for (const edge of cycleDifferences.baselineOnly) {
      consola.log(`   baseline-only: ${edge}`)
    }
    for (const edge of baselineAdditions) {
      consola.log(`   added to baseline: ${edge}`)
    }
  }

  if (hasDifferences || hasBaselineAdditions) {
    process.exitCode = 1
  }
}

try {
  main()
} catch (error) {
  consola.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
}
