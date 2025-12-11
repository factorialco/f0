#!/usr/bin/env node
/// <reference types="node" />

import { consola } from "consola"
import { execSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"

interface CycleDependency {
  cycle: string
  files: string[]
}

/**
 * Parse dpdm output text into structured JSON format
 */
function parseDpdmOutput(output: string): CycleDependency[] {
  const lines = output.split("\n").filter((line) => line.trim())
  const cycles: CycleDependency[] = []

  for (const line of lines) {
    // Skip non-cycle lines (like "✔ [825/825] Analyze done!" or "• Circular Dependencies")
    if (!line.match(/^\s*\d+\)\s+/)) {
      continue
    }

    // Extract cycle path (everything after the number and closing parenthesis)
    const match = line.match(/^\s*\d+\)\s+(.+)$/)
    if (match) {
      const cyclePath = match[1].trim()
      // Split by " -> " to get individual files
      const files = cyclePath.split(" -> ").map((f) => f.trim())
      cycles.push({
        cycle: cyclePath,
        files,
      })
    }
  }

  return cycles
}

/**
 * Get modified TypeScript/TSX files in packages/react/
 */
function getModifiedReactFiles(): string[] {
  try {
    const output = execSync("git diff --cached --name-only --diff-filter=ACM", {
      encoding: "utf-8",
    })
    const files = output
      .split("\n")
      .filter(
        (file) =>
          file.match(/\.(ts|tsx)$/) && file.startsWith("packages/react/")
      )
    return files
  } catch {
    return []
  }
}

/**
 * Get current HEAD SHA
 */
function getHeadSha(): string {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim()
  } catch {
    return ""
  }
}

/**
 * Get previous commit SHA
 */
function getPreviousCommitSha(): string {
  try {
    return execSync("git rev-parse HEAD~1", { encoding: "utf-8" }).trim()
  } catch {
    return ""
  }
}

/**
 * Parse command line arguments
 */
function parseArgs(): { previousCommit: boolean } {
  const args = process.argv.slice(2)
  return {
    previousCommit: args.includes("--previous-commit"),
  }
}

/**
 * Run dpdm and return parsed cycles
 */
function runDpdm(): CycleDependency[] {
  const workspaceRoot = process.cwd()
  const reactPackagePath = join(workspaceRoot, "packages/react")

  try {
    const output = execSync(
      "npx dpdm --circular --no-tree --no-warning src/f0.ts 2>&1",
      {
        cwd: reactPackagePath,
        encoding: "utf-8",
      }
    )
    return parseDpdmOutput(output)
  } catch (error: unknown) {
    // dpdm exits with non-zero when cycles are found, but we still want the output
    if (error && typeof error === "object") {
      const execError = error as {
        stdout?: string
        stderr?: string
        message?: string
      }
      const output =
        execError.stdout || execError.stderr || execError.message || ""
      return parseDpdmOutput(output)
    }
    return []
  }
}

/**
 * Load baseline cycles from JSON file
 * Also handles migration from old plain text format
 */
function loadBaseline(filePath: string): CycleDependency[] {
  if (!existsSync(filePath)) {
    return []
  }

  try {
    const content = readFileSync(filePath, "utf-8")
    if (!content.trim()) {
      return []
    }

    // Try to parse as JSON first
    try {
      return JSON.parse(content) as CycleDependency[]
    } catch {
      // If it's not JSON, it might be the old plain text format
      // Parse it and convert to JSON format, then save it back
      const cycles = parseDpdmOutput(content)
      if (cycles.length > 0) {
        // Migrate to JSON format
        saveBaseline(filePath, cycles)
      }
      return cycles
    }
  } catch {
    return []
  }
}

/**
 * Save cycles to JSON file
 */
function saveBaseline(filePath: string, cycles: CycleDependency[]): void {
  const dir = dirname(filePath)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  writeFileSync(filePath, JSON.stringify(cycles, null, 2) + "\n", "utf-8")
}

/**
 * Find cycles that are in current but not in baseline
 */
function findNewCycles(
  baseline: CycleDependency[],
  current: CycleDependency[]
): CycleDependency[] {
  const baselineCycles = new Set(baseline.map((c) => c.cycle))
  return current.filter((c) => !baselineCycles.has(c.cycle))
}

/**
 * Clean up old cache files (older than 30 days)
 */
function cleanupOldCache(cacheDir: string): void {
  try {
    execSync(
      `find "${cacheDir}" -name "cycle-dependencies-*.json" -type f -mtime +30 -delete 2>/dev/null || true`,
      { encoding: "utf-8" }
    )
  } catch {
    // Ignore errors in cleanup
  }
}

function main(): void {
  // Parse command line arguments
  const { previousCommit } = parseArgs()

  // Check if React package files were modified
  const modifiedFiles = getModifiedReactFiles()
  if (modifiedFiles.length === 0) {
    consola.info(
      "No React package files modified, skipping cycle dependency check"
    )
    process.exit(0)
  }

  const workspaceRoot = process.cwd()
  const cacheDir = ".cache"
  let baselineSha: string
  let baselineFile: string
  let baseline: CycleDependency[] = []

  if (previousCommit) {
    // Use previous commit as baseline
    baselineSha = getPreviousCommitSha()
    if (!baselineSha) {
      consola.error("Could not find previous commit")
      process.exit(1)
    }
    baselineFile = join(cacheDir, `cycle-dependencies-${baselineSha}.json`)

    // Clean up old cache files
    cleanupOldCache(cacheDir)

    // Load or create baseline from previous commit
    if (existsSync(baselineFile)) {
      baseline = loadBaseline(baselineFile)
    } else {
      consola.info(
        `No baseline found for previous commit (${baselineSha}), creating baseline...`
      )
      // Checkout previous commit temporarily
      const currentHeadSha = getHeadSha()
      try {
        execSync(`git checkout ${baselineSha}`, {
          cwd: workspaceRoot,
          encoding: "utf-8",
        })
        baseline = runDpdm()
        saveBaseline(baselineFile, baseline)
        // Checkout back to original HEAD
        execSync(`git checkout ${currentHeadSha}`, {
          cwd: workspaceRoot,
          encoding: "utf-8",
        })
      } catch {
        // Try to checkout back even if there was an error
        try {
          execSync(`git checkout ${currentHeadSha}`, {
            cwd: workspaceRoot,
            encoding: "utf-8",
          })
        } catch {
          // Ignore checkout errors
        }
        consola.error("Failed to checkout previous commit")
        process.exit(1)
      }
    }
  } else {
    // Use HEAD as baseline (original behavior)
    baselineSha = getHeadSha()
    baselineFile = join(cacheDir, `cycle-dependencies-${baselineSha}.json`)

    // Clean up old cache files
    cleanupOldCache(cacheDir)

    // Load or create baseline
    if (existsSync(baselineFile)) {
      baseline = loadBaseline(baselineFile)
    } else {
      consola.info(
        `No baseline found for HEAD (${baselineSha}), creating baseline...`
      )
      baseline = runDpdm()
      saveBaseline(baselineFile, baseline)
    }
  }

  // Run dpdm on current state
  const current = runDpdm()

  // Find new cycles
  const newCycles = findNewCycles(baseline, current)

  // Check if cycles decreased
  const cyclesDecreased = current.length < baseline.length
  const cyclesRemoved = baseline.length - current.length

  // Report results
  if (newCycles.length > 0 && current.length > 0) {
    consola.error("New circular dependencies detected:")
    consola.log("")
    for (const cycle of newCycles) {
      consola.error(`  ${cycle.cycle}`)
    }
    consola.log("")
    consola.error(
      "Please resolve these circular dependencies before committing."
    )
    process.exit(1)
  } else if (cyclesDecreased) {
    consola.success(
      `🎉 Congratulations! You've reduced circular dependencies by ${cyclesRemoved} (from ${baseline.length} to ${current.length})`
    )
    process.exit(0)
  } else {
    consola.success("No new circular dependencies detected")
    process.exit(0)
  }
}

main()
