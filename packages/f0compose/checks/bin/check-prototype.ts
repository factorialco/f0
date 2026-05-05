#!/usr/bin/env tsx
/**
 * CLI: pnpm --filter @factorialco/f0compose check <path>
 *
 * Validates a prototype file or directory against f0compose rules.
 * Exit code 0 = clean, 1 = violations found, 2 = bad input.
 */
import { existsSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { formatViolations, runStaticChecks } from "../runStaticChecks.ts"

const __dirname = dirname(fileURLToPath(import.meta.url))
const PKG_ROOT = resolve(__dirname, "..", "..")
const REPO_ROOT = resolve(PKG_ROOT, "..", "..")

function main() {
  const target = process.argv[2]
  if (!target) {
    console.error(
      "Usage: pnpm --filter @factorialco/f0compose check <path>\n" +
        "Example: pnpm ... check src/prototypes/payroll-settings"
    )
    process.exit(2)
  }
  const absTarget = resolve(target)
  if (!existsSync(absTarget)) {
    console.error(`Path does not exist: ${absTarget}`)
    process.exit(2)
  }
  const registryPath = resolve(PKG_ROOT, "generated", "registry.json")
  const result = runStaticChecks(absTarget, registryPath)
  console.log(formatViolations(result, REPO_ROOT))
  process.exit(result.ok ? 0 : 1)
}

main()
