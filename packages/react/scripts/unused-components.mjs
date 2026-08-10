#!/usr/bin/env node
/**
 * unused-components.mjs
 *
 * Lists the documented components that nothing uses — not the product, not a
 * Composer prototype, and not another f0 component. Useful before a deprecation
 * round, or to see what never found an audience after being built.
 *
 * The same answer is available in Storybook (Resources → Unused components)
 * when running locally; both read `computeUsageReport`.
 *
 * Usage:
 *   pnpm unused-components               # frontend/src/modules only (fast)
 *   pnpm unused-components --all         # whole factorial monorepo
 *   pnpm unused-components --json        # machine-readable
 *   pnpm unused-components --used        # invert: show where each one IS used
 */

import { computeUsageReport } from "./component-usage-report.mjs"

const args = new Set(process.argv.slice(2))
const full = args.has("--all")
const asJson = args.has("--json")
const showUsed = args.has("--used")

const report = computeUsageReport({ full })
const { rows, unused, sources } = report

if (asJson) {
  console.log(
    JSON.stringify(
      {
        sources,
        total: report.total,
        unused: showUsed ? undefined : unused,
        components: showUsed ? rows : undefined,
      },
      null,
      2
    )
  )
  process.exit(0)
}

const bold = (text) => `[1m${text}[0m`
const dim = (text) => `[2m${text}[0m`

console.log("")
console.log(bold("Sources"))
console.log(
  `  product   ${
    sources.product.available
      ? `${sources.product.scope} ${dim(`(${sources.product.importingFiles} importing files)`)}`
      : dim(sources.product.reason)
  }`
)
console.log(
  `  composer  ${
    sources.composer.available
      ? `${sources.composer.prototypes} prototypes`
      : dim(sources.composer.reason)
  }`
)
console.log(`  f0        ${sources.internal.scope}`)
console.log("")

if (showUsed) {
  for (const row of rows) {
    const where = [
      row.productFiles > 0 ? `product:${row.productFiles}` : null,
      row.usedBy.length > 0 ? `f0:${row.usedBy.length}` : null,
      row.prototypes.length > 0 ? `prototypes:${row.prototypes.length}` : null,
    ].filter(Boolean)
    console.log(
      `${row.name.padEnd(38)} ${where.length > 0 ? where.join(" · ") : dim("unused")}`
    )
  }
  process.exit(0)
}

if (!sources.product.available) {
  console.log(
    dim(
      "! Without a factorial checkout this list is not trustworthy — every " +
        "component looks unused in the product.\n"
    )
  )
}

console.log(
  bold(
    `${unused.length} of ${report.total} components are used nowhere` +
      ` ${dim("(product · composer · f0)")}`
  )
)

const byZone = new Map()
for (const row of unused) {
  if (!byZone.has(row.zone)) byZone.set(row.zone, [])
  byZone.get(row.zone).push(row)
}

for (const [zone, zoneRows] of [...byZone].sort(
  (a, b) => b[1].length - a[1].length
)) {
  console.log("")
  console.log(`  ${bold(zone)} ${dim(`(${zoneRows.length})`)}`)
  for (const row of zoneRows.sort((a, b) => a.name.localeCompare(b.name))) {
    console.log(`    ${row.name.padEnd(36)} ${dim(row.storyFile ?? "")}`)
  }
}

console.log("")
