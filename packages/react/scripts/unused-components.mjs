#!/usr/bin/env node
/**
 * unused-components.mjs
 *
 * Lists the documented components that nothing uses — not the product, not a
 * Composer prototype, and not another f0 component. Useful before a deprecation
 * round, or to see what never found an audience after being built.
 *
 * A component counts as USED if any of its candidate names turns up in:
 *   - product   — `factorialco/factorial` (+ `factorialco/factorial-it`)
 *   - composer  — `factorialco/factorial-composer` prototypes
 *   - f0        — another component in this package's `src/`
 *
 * Missing checkouts are reported (and, for the product, make the answer
 * unreliable) rather than silently treated as "no usage".
 *
 * Usage:
 *   pnpm unused-components               # frontend/src/modules only (fast)
 *   pnpm unused-components --all         # whole factorial monorepo
 *   pnpm unused-components --json        # machine-readable
 *   pnpm unused-components --used        # invert: show where each one IS used
 */

import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { computeComponentStatusData } from "./component-status-build.mjs"
import {
  exportedNamesOf,
  scanComposerUsage,
  scanInternalUsage,
  scanProductUsage,
} from "./product-usage-scan.mjs"

const SRC_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../src")

const args = new Set(process.argv.slice(2))
const full = args.has("--all")
const asJson = args.has("--json")
const showUsed = args.has("--used")

/** Last segment of a grouped component name ("Avatars/Avatar" → "Avatar"). */
function leafName(name) {
  const parts = name.split("/")
  return parts[parts.length - 1] ?? name
}

/**
 * The implementation folder a story belongs to — the deepest capitalised
 * directory on its path. Several story files share one folder
 * (`OneDataCollection/__stories__/grouping.stories.tsx`,
 * `…/url-params.stories.tsx`), and it's the folder, not each story page, that
 * is the unit people mean by "component".
 */
function componentDirOf(storyFile) {
  if (!storyFile) return null
  const segments = storyFile.split("/").slice(0, -1)
  for (let i = segments.length - 1; i >= 0; i--) {
    if (/^[A-Z]/.test(segments[i])) return segments[i]
  }
  return null
}

/** The directory a story file lives in, relative to `src/`. */
function componentPathOf(storyFile) {
  if (!storyFile) return null
  const segments = storyFile.split("/")
  const storiesAt = segments.indexOf("__stories__")
  const dirs = segments.slice(0, storiesAt === -1 ? -1 : storiesAt)
  return dirs.length > 0 ? join(SRC_DIR, ...dirs) : null
}

/**
 * The names a component might be imported under: its folder and title, their
 * `F0`-prefixed forms, and whatever its barrel actually exports.
 */
function candidateNames(component) {
  const candidates = []
  for (const base of [
    componentDirOf(component.storyFile),
    leafName(component.name),
  ]) {
    if (!base) continue
    candidates.push(base)
    if (!base.startsWith("F0")) candidates.push(`F0${base}`)
  }
  candidates.push(...exportedNamesOf(componentPathOf(component.storyFile)))
  return [...new Set(candidates)]
}

const { components } = computeComponentStatusData()
const product = scanProductUsage({ full })
const internal = scanInternalUsage()
const composer = scanComposerUsage()

/**
 * One row per implementation folder: the docs list a component several times
 * (one story file per facet), but it is used or unused as a whole.
 */
const merged = new Map()
for (const component of components) {
  const key = componentDirOf(component.storyFile) ?? leafName(component.name)
  const existing = merged.get(key)
  if (existing) {
    existing.titles.push(component.name)
    for (const name of candidateNames(component)) {
      if (!existing.names.includes(name)) existing.names.push(name)
    }
    continue
  }
  merged.set(key, {
    key,
    titles: [component.name],
    zone: component.zone,
    apiStatus: component.apiStatus,
    storyFile: component.storyFile,
    names: candidateNames(component),
  })
}

const rows = [...merged.values()].map((component) => {
  const names = component.names

  const productFiles = product.available
    ? names.reduce(
        (total, name) => total + (product.components[name]?.files ?? 0),
        0
      )
    : 0

  const prototypes = composer.available
    ? [
        ...new Set(
          names.flatMap((name) =>
            (composer.prototypes[name] ?? []).map((p) => p.title)
          )
        ),
      ]
    : []

  const usedBy = internal.available
    ? [
        ...new Set(names.flatMap((name) => internal.components[name] ?? [])),
      ].filter((owner) => !names.includes(owner))
    : []

  return {
    name: component.key,
    titles: component.titles,
    zone: component.zone,
    status: component.apiStatus,
    storyFile: component.storyFile,
    productFiles,
    prototypes,
    usedBy,
    unused:
      productFiles === 0 && prototypes.length === 0 && usedBy.length === 0,
  }
})

const unused = rows.filter((row) => row.unused)

if (asJson) {
  console.log(
    JSON.stringify(
      {
        sources: {
          product: product.available
            ? { scope: product.scope, repos: product.repos }
            : { unavailable: product.reason },
          composer: composer.available
            ? { prototypes: composer.totals.prototypes }
            : { unavailable: composer.reason },
          internal: { scope: internal.scope },
        },
        total: rows.length,
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
  `  product   ${product.available ? `${product.scope} ${dim(`(${product.totals.importingFiles} importing files)`)}` : dim(product.reason)}`
)
console.log(
  `  composer  ${composer.available ? `${composer.totals.prototypes} prototypes` : dim(composer.reason)}`
)
console.log(`  f0        ${internal.scope}`)
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

if (!product.available) {
  console.log(
    dim(
      "! Without a factorial checkout this list is not trustworthy — every " +
        "component looks unused in the product.\n"
    )
  )
}

console.log(
  bold(
    `${unused.length} of ${rows.length} components are used nowhere` +
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
