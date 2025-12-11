#!/usr/bin/env node
/// <reference types="node" />

import { consola } from "consola"
import { colorize } from "consola/utils"
import { execSync } from "node:child_process"
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { dirname, isAbsolute, join, relative } from "node:path"
import { fileURLToPath } from "node:url"

interface CycleDependency {
  cycle: string
  files: string[]
}

const BASELINE_PREFIX = "cycle-dependencies"

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

const DEFAULT_ENTRY_POINTS = ["src/f0.ts", "src/experimental.ts"].map(
  (entryPoint) => join(CURRENT_DIR, "..", entryPoint)
)

const MAX_CACHE_DAYS = 30

const CACHE_DIR = join(CURRENT_DIR, "..", ".cache")

/**
 * Create baseline filename (absolute path) from a SHA string
 */
function getBaselineFilePath(sha: string): string {
  return join(CACHE_DIR, `${BASELINE_PREFIX}-${sha}.json`)
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
 * @param stagedOnly - If true, only check staged files. If false, check both staged and unstaged files.
 */
function getModifiedReactFiles(stagedOnly: boolean): string[] {
  try {
    // For pre-commit: check only staged files
    // For CLI: check both staged and unstaged files
    const gitCommand = stagedOnly
      ? "git diff --cached --name-only --diff-filter=ACM"
      : "git diff HEAD --name-only --diff-filter=ACM"
    const output = execSync(gitCommand, {
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
 * Parse command line arguments
 */
function parseArgs(): {
  preCommit: boolean
  compareCommit?: string
  json: boolean
  ci: boolean
} {
  const args = process.argv.slice(2)
  const compareCommitIndex = args.indexOf("--compare-commit")
  const compareCommit =
    compareCommitIndex !== -1 && args[compareCommitIndex + 1]
      ? args[compareCommitIndex + 1]
      : undefined

  return {
    preCommit: args.includes("--pre-commit"),
    compareCommit,
    json: args.includes("--json"),
    ci: args.includes("--ci"),
  }
}

/**
 * Run dpdm on a specific git commit
 */
function runDpdmOnCommit(
  commitSha: string,
  entryPoints?: string[],
  silent = false
): CycleDependency[] {
  const workspaceRoot = process.cwd()
  const reactPackagePath = join(CURRENT_DIR, "..")
  const reactPackageRelativePath = relative(workspaceRoot, reactPackagePath)

  // Create a temporary directory for the commit archive
  const tempDir = join(
    tmpdir(),
    `cycle-deps-archive-${commitSha}-${Date.now()}`
  )
  const tempReactPath = join(tempDir, reactPackageRelativePath)

  try {
    // Extract the commit to a temporary directory using git archive
    mkdirSync(tempDir, { recursive: true })
    execSync(`git archive ${commitSha} | tar -x -C ${tempDir}`, {
      cwd: workspaceRoot,
      encoding: "utf-8",
      stdio: "pipe",
    })

    // Now run dpdm from the temp directory
    entryPoints = (entryPoints || DEFAULT_ENTRY_POINTS).map((entryPoint) => {
      if (isAbsolute(entryPoint)) {
        // Convert absolute paths to be relative to reactPackagePath
        return relative(reactPackagePath, entryPoint)
      }
      return entryPoint
    })

    const result: CycleDependency[] = []

    for (const entryPoint of entryPoints) {
      if (!silent) {
        consola.info(
          `Checking cycle dependencies in ${colorize("yellow", entryPoint)} (from commit ${commitSha.slice(0, 7)})`
        )
      }
      try {
        const output = execSync(
          `npx dpdm --circular --no-tree --no-warning ${entryPoint} 2>&1`,
          {
            cwd: tempReactPath,
            encoding: "utf-8",
          }
        )
        result.push(...parseDpdmOutput(output))
      } catch (error: unknown) {
        // dpdm exits with non-zero when cycles are found, but we still want the output
        let output = ""
        if (error && typeof error === "object") {
          const execError = error as {
            stdout?: string | Buffer
            stderr?: string | Buffer
            message?: string
          }
          if (execError.stdout) {
            output =
              typeof execError.stdout === "string"
                ? execError.stdout
                : execError.stdout.toString("utf-8")
          } else if (execError.stderr) {
            output =
              typeof execError.stderr === "string"
                ? execError.stderr
                : execError.stderr.toString("utf-8")
          } else if (execError.message) {
            output = execError.message
          }
        }
        if (output) {
          result.push(...parseDpdmOutput(output))
        }
      }
    }

    return result
  } finally {
    // Clean up temp directory
    try {
      rmSync(tempDir, { recursive: true, force: true })
    } catch {
      // Ignore cleanup errors
    }
  }
}

/**
 * Run dpdm and return parsed cycles
 */
function runDpdm(entryPoints?: string[], silent = false): CycleDependency[] {
  // reactPackagePath should be the packages/react directory, not the workspace root
  const reactPackagePath = join(CURRENT_DIR, "..")

  entryPoints = (entryPoints || DEFAULT_ENTRY_POINTS).map((entryPoint) => {
    if (isAbsolute(entryPoint)) {
      // Convert absolute paths to be relative to reactPackagePath (packages/react)
      return relative(reactPackagePath, entryPoint)
    }
    return entryPoint
  })

  const result: CycleDependency[] = []

  for (const entryPoint of entryPoints) {
    if (!silent) {
      consola.info(
        `Checking cycle dependencies in ${colorize("yellow", entryPoint)}`
      )
    }
    try {
      const output = execSync(
        `npx dpdm --circular --no-tree --no-warning ${entryPoint} 2>&1`,
        {
          cwd: reactPackagePath,
          encoding: "utf-8",
        }
      )
      result.push(...parseDpdmOutput(output))
    } catch (error: unknown) {
      // dpdm exits with non-zero when cycles are found, but we still want the output
      // In Node.js execSync, stdout is available in error.stdout when encoding is set
      let output = ""
      if (error && typeof error === "object") {
        const execError = error as {
          stdout?: string | Buffer
          stderr?: string | Buffer
          message?: string
        }
        // Handle both string and Buffer cases
        if (execError.stdout) {
          output =
            typeof execError.stdout === "string"
              ? execError.stdout
              : execError.stdout.toString("utf-8")
        } else if (execError.stderr) {
          output =
            typeof execError.stderr === "string"
              ? execError.stderr
              : execError.stderr.toString("utf-8")
        } else if (execError.message) {
          output = execError.message
        }
      }
      if (output) {
        result.push(...parseDpdmOutput(output))
      }
    }
  }
  return result
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
  consola.info(
    `Cleaning up old cache files (older than ${MAX_CACHE_DAYS} days)`
  )
  try {
    execSync(
      `find "${cacheDir}" -name "cycle-dependencies-*.json" -type f -mtime +${MAX_CACHE_DAYS} -delete 2>/dev/null || true`,
      { encoding: "utf-8" }
    )
  } catch {
    // Ignore errors in cleanup
  }
}

function main(): void {
  // Parse command line arguments
  const { preCommit, compareCommit, json, ci } = parseArgs()

  // In CI mode or when compareCommit is provided, skip file modification check
  if (!ci && !compareCommit) {
    // Check if React package files were modified
    // For pre-commit: check only staged files
    // For CLI: check both staged and unstaged files
    const modifiedFiles = getModifiedReactFiles(preCommit)
    if (modifiedFiles.length === 0) {
      consola.info(
        "No React package files modified, skipping cycle dependency check"
      )
      process.exit(0)
    }
  }

  // Determine baseline commit
  let baselineSha: string
  if (compareCommit) {
    baselineSha = compareCommit
  } else {
    // Always use HEAD as baseline (latest commit in current branch)
    baselineSha = getHeadSha()
    if (!baselineSha) {
      if (ci || json) {
        console.error(
          JSON.stringify({
            error: "Could not find HEAD commit",
            hasNewCycles: false,
          })
        )
      } else {
        consola.error("Could not find HEAD commit")
      }
      process.exit(1)
    }
  }

  const baselineFile = getBaselineFilePath(baselineSha)

  // Clean up old cache files (skip in CI to avoid noise)
  if (!ci) {
    cleanupOldCache(CACHE_DIR)
  }

  // Load or create baseline
  let baseline: CycleDependency[] = []
  if (existsSync(baselineFile)) {
    if (!ci) {
      consola.info(
        `Loading baseline from cache ${colorize("yellow", baselineFile)}`
      )
    }
    baseline = loadBaseline(baselineFile)
  } else {
    if (!ci) {
      consola.info(
        `No baseline found for commit (${colorize("yellow", baselineSha)}), creating baseline from commit...`
      )
    }
    // Run dpdm on the specified commit
    baseline = runDpdmOnCommit(baselineSha, undefined, ci)

    saveBaseline(baselineFile, baseline)
  }

  // Run dpdm on current state
  const current = runDpdm(undefined, ci)

  // Find new cycles
  const newCycles = findNewCycles(baseline, current)

  // Check if cycles decreased
  const cyclesDecreased = current.length < baseline.length
  const cyclesRemoved = baseline.length - current.length

  // Output in JSON format for CI or when --json flag is used
  if (json) {
    const output = {
      baseline: {
        commit: baselineSha,
        cycles: baseline.length,
        cyclesList: baseline,
      },
      current: {
        cycles: current.length,
        cyclesList: current,
      },
      newCycles: {
        count: newCycles.length,
        cyclesList: newCycles,
      },
      cyclesDecreased,
      cyclesRemoved: cyclesDecreased ? cyclesRemoved : 0,
      hasNewCycles: newCycles.length > 0,
    }
    console.log(JSON.stringify(output, null, 2))
    process.exit(newCycles.length > 0 ? 1 : 0)
  }

  // Report results (human-readable format)
  if (newCycles.length > 0 && current.length > 0) {
    consola.error("New circular dependencies detected:")
    consola.log("")
    for (const cycle of newCycles) {
      consola.log(`  ${cycle.cycle}`)
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
    if (current.length > 0) {
      consola.warn(
        `There are still ${colorize("yellow", current.length.toString())} circular dependencies in the codebase...`
      )
      process.exit(0)
    }
    process.exit(0)
  }
}

main()
