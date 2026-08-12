/**
 * component-usage-report.mjs
 *
 * Joins the documented components (from the component-status scan) to the
 * usage scans, so both the CLI (`pnpm unused-components`) and the Storybook
 * "Unused components" page answer from one implementation.
 *
 * A component counts as USED if any of its candidate names turns up in:
 *   - product   — `factorialco/factorial` (+ `factorialco/factorial-it`)
 *   - composer  — `factorialco/factorial-composer` prototypes
 *   - f0        — another component in this package's `src/`
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

/** The directory a story file lives in, as an absolute path. */
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

/**
 * Every documented component with where it's used, plus the subset used
 * nowhere. `full` widens the product scan to the whole factorial monorepo.
 */
export function computeUsageReport({ full = false } = {}) {
  const { components } = computeComponentStatusData()
  const product = scanProductUsage({ full })
  const internal = scanInternalUsage()
  const composer = scanComposerUsage()

  // One row per implementation folder: the docs list a component several times
  // (one story file per facet), but it is used or unused as a whole.
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

  return {
    generatedAt: new Date().toISOString(),
    sources: {
      product: product.available
        ? {
            available: true,
            scope: product.scope,
            importingFiles: product.totals.importingFiles,
            missing: product.missing,
          }
        : { available: false, reason: product.reason },
      composer: composer.available
        ? { available: true, prototypes: composer.totals.prototypes }
        : { available: false, reason: composer.reason },
      internal: { available: true, scope: internal.scope },
    },
    total: rows.length,
    rows,
    unused: rows.filter((row) => row.unused),
    /**
     * Built, prototyped, not shipped. A different signal from "unused": the
     * product hasn't adopted it *yet*, and a prototype is usually where
     * adoption starts — so these are worth watching rather than deprecating.
     */
    onlyInPrototypes: rows.filter(
      (row) => row.productFiles === 0 && row.prototypes.length > 0
    ),
  }
}
