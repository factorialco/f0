/**
 * component-status-build.mjs
 *
 * Computes component status metadata by scanning the `src/` tree, and exposes
 * it to bundlers as the virtual module `virtual:f0-component-status-data`.
 *
 * There is deliberately NO committed JSON snapshot: the data is recomputed from
 * source on every `vite build` and every dev-server start, so it can never go
 * stale. The computed object is inlined into the built
 * `@factorialco/f0-react/dist/component-status` entry.
 *
 * For each component (one per `*.stories.tsx`) it derives:
 * - name (from the story `title` or the filename)
 * - zone (components, patterns, sds, kits, experimental, layouts, deprecated…)
 * - API status tag (stable / experimental / deprecated / internal — from tags)
 * - hasUnitTests  (a __tests__ folder or *.test.ts(x) near the story)
 * - hasMdxDocs    (an *.mdx file alongside the story)
 * - docQuality    (heuristic tier from the MDX structure)
 *
 * Consumed by:
 * - vite.config.ts        → componentStatusVitePlugin()
 * - tsup.config.ts        → componentStatusEsbuildPlugin()
 * - src/component-status  → import rawStatusData from "virtual:f0-component-status-data"
 */

import { readFileSync, readdirSync } from "node:fs"
import { basename, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

export const VIRTUAL_ID = "virtual:f0-component-status-data"
const RESOLVED_VIRTUAL_ID = "\0" + VIRTUAL_ID

const scriptsDir = dirname(fileURLToPath(import.meta.url))
const SRC_DIR = resolve(scriptsDir, "../src")

const DOC_TIER_ORDER = ["none", "stub", "acceptable", "good", "gold"]

/**
 * Whether an entry meets the mechanically-checkable stable bar. This mirrors
 * the requirement predicates in `src/component-status/component-status.ts`
 * (STABLE_REQUIREMENTS) — a drift test keeps the two in sync. Kept here (plain
 * JS, no virtual module) so Node contexts like `.storybook/main.ts` can compute
 * the effective status for the sidebar.
 */
export function meetsStableBar(c) {
  return (
    c.hasStories &&
    c.hasUnitTests &&
    c.hasPlayFunction &&
    c.hasMdxDocs &&
    DOC_TIER_ORDER.indexOf(c.docQuality) >= DOC_TIER_ORDER.indexOf("good")
  )
}

/** The effective maturity level (see component-status.ts effectiveStatusOf). */
export function effectiveStatusOf(c) {
  if (c.apiStatus === "deprecated") return "deprecated"
  if (c.apiStatus === "internal") return "internal"
  return c.apiStatus === "stable" && meetsStableBar(c)
    ? "stable"
    : "experimental"
}

/** Normalize a component name for matching (drop F0 prefix + punctuation). */
export function normalizeComponentName(name) {
  return name
    .toLowerCase()
    .replace(/^f0/, "")
    .replace(/[^a-z0-9]/g, "")
}

/** Last path segment of a grouped name ("Avatars/Avatar" → "Avatar"). */
export function leafName(name) {
  const parts = name.split("/")
  return parts[parts.length - 1] ?? name
}

/**
 * A map of normalized leaf name → effective status, resolving name collisions
 * by preferring the "components" zone (mirroring getComponentStatus). Used by
 * the Storybook manager (sidebar), which can only see an entry's leaf name.
 */
export function effectiveStatusByLeaf(components) {
  const byLeaf = {}
  for (const c of components) {
    const key = normalizeComponentName(leafName(c.name))
    const prev = byLeaf[key]
    if (!prev || (c.zone === "components" && prev.zone !== "components")) {
      byLeaf[key] = { zone: c.zone, status: effectiveStatusOf(c) }
    }
  }
  const out = {}
  for (const [key, v] of Object.entries(byLeaf)) out[key] = v.status
  return out
}

/** Recursively collect every file path under `dir`. */
function walk(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = resolve(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue
      walk(full, out)
    } else {
      out.push(full)
    }
  }
  return out
}

function getZone(relativePath) {
  if (relativePath.startsWith("components/")) return "components"
  if (relativePath.startsWith("patterns/")) return "patterns"
  if (relativePath.startsWith("sds/")) return "sds"
  if (relativePath.startsWith("kits/")) return "kits"
  if (relativePath.startsWith("experimental/")) return "experimental"
  if (relativePath.startsWith("layouts/")) return "layouts"
  if (relativePath.startsWith("deprecated/")) return "deprecated"
  if (relativePath.startsWith("ui/")) return "internal"
  if (relativePath.startsWith("lib/")) return "internal"
  if (relativePath.startsWith("hooks/")) return "hooks"
  return "other"
}

function extractTags(content) {
  const match = content.match(/tags:\s*\[([^\]]+)\]/)
  if (!match) return []
  return match[1]
    .split(",")
    .map((t) => t.trim().replace(/['"]/g, ""))
    .filter(Boolean)
}

function extractTitle(content) {
  const match = content.match(/title:\s*["']([^"']+)["']/)
  return match ? match[1] : null
}

function getApiStatus(tags) {
  if (tags.includes("stable")) return "stable"
  if (tags.includes("deprecated")) return "deprecated"
  if (tags.includes("internal")) return "internal"
  if (tags.includes("experimental")) return "experimental"
  return "unknown"
}

const EMPTY_DOC_SIGNALS = {
  sectionsCount: 0,
  hasProps: false,
  hasDoDonts: false,
  hasWhenToUse: false,
  hasWhenNotToUse: false,
  exampleCount: 0,
}

/**
 * Extract the granular doc-quality signals from an MDX file's content. These
 * feed both the tier and the per-criterion checks shown in the UI.
 */
function docSignalsOf(content) {
  if (content == null) return { ...EMPTY_DOC_SIGNALS }

  const hasAnatomy = /#{2,4}\s+anatomy/i.test(content)
  const hasGuidelines =
    /#{2,4}\s+guidelines/i.test(content) || /best practices/i.test(content)
  const hasAccessibility = /#{2,4}\s+accessibility/i.test(content)

  return {
    sectionsCount: [hasAnatomy, hasGuidelines, hasAccessibility].filter(Boolean)
      .length,
    hasProps:
      /<Controls\b/.test(content) ||
      /\|\s*prop\s*\|/i.test(content) ||
      /<table/i.test(content),
    hasWhenToUse: /when to use/i.test(content),
    hasWhenNotToUse: /when\s+not\s+to\s+use|when not/i.test(content),
    hasDoDonts: /DoDonts/.test(content),
    exampleCount: (content.match(/<Canvas\b/gi) || []).length,
  }
}

/**
 * Heuristic doc-quality tier, mirroring the levels in
 * .opencode/skills/f0-docs/references/documentation-quality.md.
 * Returns "none" | "stub" | "acceptable" | "good" | "gold". A coarse signal
 * from the MDX structure, not a substitute for human review.
 */
function scoreDocQuality(content, signals) {
  if (content == null) return "none"

  const s = signals ?? docSignalsOf(content)

  if (content.trim().length < 200 || s.sectionsCount === 0) return "stub"

  const acceptable = s.sectionsCount >= 2 && s.hasProps
  if (!acceptable) return "stub"

  const good = s.hasDoDonts && s.hasWhenNotToUse && s.exampleCount >= 3
  const gold = good && s.hasWhenToUse && s.exampleCount >= 4

  if (gold) return "gold"
  if (good) return "good"
  return "acceptable"
}

/**
 * The component's own directory, given the path to its story file. A story
 * lives either directly in the component folder (`F0X/index.stories.tsx`) or in
 * a `__stories__` subfolder (`F0X/__stories__/F0X.stories.tsx`); in the latter
 * case the component folder is one level up.
 */
function componentDirOf(storyFilePath) {
  const dir = dirname(storyFilePath)
  return basename(dir) === "__stories__" ? dirname(dir) : dir
}

/**
 * Scan `srcDir` and build the full component-status dataset. Pure filesystem
 * work — no committed artifact, no subprocesses. `srcDir` defaults to this
 * package's `src/`; tests pass a fixture tree.
 */
export function computeComponentStatusData(srcDir = SRC_DIR) {
  const allFiles = walk(srcDir)
  const storyFiles = allFiles.filter((f) => f.endsWith(".stories.tsx"))
  const testFiles = allFiles.filter(
    (f) => f.endsWith(".test.tsx") || f.endsWith(".test.ts")
  )
  const mdxByDir = new Map()
  for (const f of allFiles) {
    if (!f.endsWith(".mdx")) continue
    const dir = dirname(f)
    if (!mdxByDir.has(dir)) mdxByDir.set(dir, f)
  }

  const sep = "/"
  // A component has unit tests when a test file lives within its own directory
  // subtree (typically `F0X/__tests__/…`) — scoped to the component, not the
  // whole zone.
  const hasUnitTests = (storyFilePath) => {
    const componentDir = componentDirOf(storyFilePath)
    return testFiles.some((f) => f.startsWith(componentDir + sep))
  }
  // An MDX doc counts when it sits alongside the story or in the component
  // folder (not a zone-level index).
  const findMdxDoc = (storyFilePath) => {
    const dir = dirname(storyFilePath)
    return (
      mdxByDir.get(dir) || mdxByDir.get(componentDirOf(storyFilePath)) || null
    )
  }

  const components = []
  const seen = new Set()

  for (const filePath of storyFiles) {
    let content
    try {
      content = readFileSync(filePath, "utf-8")
    } catch {
      continue
    }
    const tags = extractTags(content)
    const relative = filePath.slice(srcDir.length + 1)
    const zone = getZone(relative)

    if (zone === "internal" && !tags.includes("stable")) continue
    if (filePath.includes("/examples/")) continue
    if (tags.includes("no-sidebar") && !tags.includes("stable")) continue

    const apiStatus = getApiStatus(tags)
    const storyName =
      extractTitle(content) || basename(filePath, ".stories.tsx")

    const key = `${storyName}::${zone}`
    if (seen.has(key)) continue
    seen.add(key)

    const mdxPath = findMdxDoc(filePath)
    let mdxContent = null
    if (mdxPath) {
      try {
        mdxContent = readFileSync(mdxPath, "utf-8")
      } catch {
        mdxContent = null
      }
    }
    const docSignals = docSignalsOf(mdxContent)

    components.push({
      name: storyName,
      zone,
      apiStatus,
      tags: tags.filter((t) => !["autodocs", "no-sidebar", "!dev"].includes(t)),
      hasStories: true,
      hasUnitTests: hasUnitTests(filePath),
      // A Storybook play function (interaction test) — `play: async (…)` or
      // `play: (…)` in a story object.
      hasPlayFunction: /\bplay\s*:\s*(async\b|\()/.test(content),
      hasMdxDocs: Boolean(mdxPath),
      docQuality: scoreDocQuality(mdxContent, docSignals),
      docSignals,
      storyFile: relative,
    })
  }

  components.sort((a, b) => {
    if (a.zone !== b.zone) return a.zone.localeCompare(b.zone)
    return a.name.localeCompare(b.name)
  })

  const count = (pred) => components.filter(pred).length
  const stats = {
    total: components.length,
    byStatus: {
      stable: count((c) => c.apiStatus === "stable"),
      experimental: count((c) => c.apiStatus === "experimental"),
      deprecated: count((c) => c.apiStatus === "deprecated"),
      internal: count((c) => c.apiStatus === "internal"),
      unknown: count((c) => c.apiStatus === "unknown"),
    },
    byZone: {},
    byDocQuality: {
      none: count((c) => c.docQuality === "none"),
      stub: count((c) => c.docQuality === "stub"),
      acceptable: count((c) => c.docQuality === "acceptable"),
      good: count((c) => c.docQuality === "good"),
      gold: count((c) => c.docQuality === "gold"),
    },
    withUnitTests: count((c) => c.hasUnitTests),
    withMdxDocs: count((c) => c.hasMdxDocs),
  }
  for (const c of components) {
    stats.byZone[c.zone] = (stats.byZone[c.zone] || 0) + 1
  }

  return { generatedAt: new Date().toISOString(), stats, components }
}

/** Serialize the dataset as an ES module (default export). Memoized per build. */
let cachedModule
function virtualModuleSource() {
  if (cachedModule === undefined) {
    cachedModule = `export default ${JSON.stringify(computeComponentStatusData())}`
  }
  return cachedModule
}

/** Vite plugin serving `virtual:f0-component-status-data`. */
export function componentStatusVitePlugin() {
  return {
    name: "f0-component-status",
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_VIRTUAL_ID
      return null
    },
    load(id) {
      if (id === RESOLVED_VIRTUAL_ID) return virtualModuleSource()
      return null
    },
  }
}

/** esbuild plugin serving the same virtual module (for the tsup build path). */
export function componentStatusEsbuildPlugin() {
  return {
    name: "f0-component-status",
    setup(build) {
      const namespace = "f0-component-status"
      build.onResolve({ filter: new RegExp(`^${VIRTUAL_ID}$`) }, () => ({
        path: VIRTUAL_ID,
        namespace,
      }))
      build.onLoad({ filter: /.*/, namespace }, () => ({
        contents: virtualModuleSource(),
        loader: "js",
      }))
    },
  }
}
