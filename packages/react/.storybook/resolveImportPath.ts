/**
 * Resolves a story file path to the npm import path consumers should use.
 *
 * The F0 React package exposes two entry points:
 *   - `@factorialco/f0-react`                 (src/f0.ts → components, hooks, lib, ai, sds re-exports)
 *   - `@factorialco/f0-react/dist/experimental` (src/experimental/exports.ts)
 *
 * Components under src/ui/ are internal and not publicly exported.
 */

// eslint-disable-next-line no-restricted-imports -- Storybook-only utility, needs full export map to resolve names
import * as experimentalExports from "../src/experimental/exports"
// eslint-disable-next-line no-restricted-imports -- Storybook-only utility, needs full export map to resolve names
import * as mainExports from "../src/f0"

const PKG = "@factorialco/f0-react"
const PKG_EXPERIMENTAL = `${PKG}/dist/experimental`

/**
 * Directory prefixes that are re-exported through the main `@factorialco/f0-react` entry.
 * Order doesn't matter — first match wins.
 */
const MAIN_ENTRY_PREFIXES = [
  "src/components/",
  "src/ai/",
  "src/hooks/",
  "src/lib/",
  "src/kits/",
  "src/patterns/",
  "src/layouts/",
  "src/sds/social/",
  "src/sds/timeline/",
  "src/sds/UpsellingKit/",
]

/**
 * Directory prefixes exported through the experimental entry.
 *
 * The sds/Home modules live outside src/experimental/ but SOME are
 * re-exported through its barrels (Widgets/Layout, Widgets/Content,
 * Information, Navigation). Only those appear here — the Home kit's building
 * blocks (SlotWidget, WidgetContainer, HomeListItem, F0AvatarPulse) stay
 * internal, so the prefixes are per-module rather than the whole folder.
 */
const EXPERIMENTAL_ENTRY_PREFIXES = [
  "src/experimental/",
  "src/sds/Home/ClockIn/",
  "src/sds/Home/Communities/",
  "src/sds/Home/DaytimePage/",
  "src/sds/Home/NewHomeLayout/",
  "src/sds/Home/WidgetCatalog/",
]

/**
 * Given the `fileName` parameter Storybook attaches to every story
 * (relative path from the project root, e.g. `./src/components/F0Button/__stories__/F0Button.stories.tsx`),
 * returns the npm package path consumers should import from, or `null`
 * if the component is internal / not exported.
 */
export function resolveImportPath(fileName: string | undefined): string | null {
  if (!fileName) return null

  // Normalize: strip leading "./" and ensure we work with "src/..."
  const normalized = fileName.replace(/^\.\//, "")

  for (const prefix of MAIN_ENTRY_PREFIXES) {
    if (normalized.startsWith(prefix)) {
      return PKG
    }
  }

  for (const prefix of EXPERIMENTAL_ENTRY_PREFIXES) {
    if (normalized.startsWith(prefix)) {
      return PKG_EXPERIMENTAL
    }
  }

  // src/ui/ and other unmatched paths are internal
  return null
}

/**
 * Every name reachable from the package's public entry points, merged across
 * the main and experimental barrels.
 *
 * This is the source of truth for "is this component actually importable?".
 * A path prefix alone isn't enough: a component can live under
 * `src/components/` (a main-entry prefix) and still be missing from its
 * group's `exports.ts`, in which case no import statement would resolve.
 */
let exportedNamesCache: Set<string> | null = null

export function exportedComponentNames(): Set<string> {
  if (!exportedNamesCache) {
    exportedNamesCache = new Set([
      ...Object.keys(mainExports),
      ...Object.keys(experimentalExports),
    ])
  }
  return exportedNamesCache
}

/**
 * Extracts the component export name from a story file path.
 *
 * Strategy:
 *   1. Gather candidate names from the file path (impl filename, story
 *      directory, index-story directory) and the Storybook title.
 *   2. First pass — prefer F0-prefixed exports: if any candidate has a
 *      matching `F0${name}` export, return that. This guarantees that when
 *      a component is renamed (e.g. `Input` -> `F0TextInput`) and the old
 *      name is kept as a `@deprecated` alias, the docs surface the new
 *      canonical name.
 *   3. Second pass — fall back to the raw candidate if it is itself an
 *      export (covers components that don't use the F0 prefix, like
 *      `F0Form` field renderers).
 *   4. If nothing matches, return `null` — the component isn't exported, so
 *      any import statement we rendered would be a broken copy-paste. Callers
 *      treat `null` as "internal". (Notably NOT "first candidate as-is": that
 *      produced import snippets for components under `src/components/` that
 *      their group barrel never re-exported.)
 */
export function extractComponentName(
  fileName: string | undefined,
  title: string | undefined
): string | null {
  // Gather candidate names from path patterns and title
  const candidates: string[] = []

  if (fileName) {
    // 1. Impl file basename (e.g. F0TextInput.stories.tsx -> F0TextInput).
    //    This is the most reliable source after the rename convention
    //    (filename matches the public export name).
    const storyFile = fileName.match(/\/__stories__\/([^/]+)\.stories\.tsx?$/)
    if (storyFile) candidates.push(storyFile[1])

    // 2. Story directory (e.g. /Input/__stories__/ -> Input). Kept for
    //    legacy stories whose filename doesn't match the export.
    const storiesDir = fileName.match(/\/([^/]+)\/__stories__\//)
    if (storiesDir) candidates.push(storiesDir[1])

    // 3. Index-style story (e.g. /NumericQuestion/index.stories.tsx).
    const indexStory = fileName.match(/\/([^/]+)\/index\.stories\.tsx$/)
    if (indexStory) candidates.push(indexStory[1])
  }

  if (title) {
    const parts = title.split("/")
    const last = parts[parts.length - 1]
    if (last) candidates.push(last)
  }

  const exports = exportedComponentNames()

  // Pass 1: prefer the F0-prefixed variant of any candidate.
  for (const name of candidates) {
    if (name.startsWith("F0") && exports.has(name)) return name
    const f0Name = `F0${name}`
    if (exports.has(f0Name)) return f0Name
  }

  // Pass 2: fall back to the raw candidate.
  for (const name of candidates) {
    if (exports.has(name)) return name
  }

  // Nothing matched a real export — the component is internal.
  return null
}
