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
  "src/layouts/",
  "src/sds/surveys/",
  "src/sds/TimeLine/",
  "src/sds/UpsellingKit/",
  "src/sds/ai/",
]

/**
 * Directory prefixes exported through the experimental entry.
 */
const EXPERIMENTAL_ENTRY_PREFIXES = ["src/experimental/"]

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
 * Extracts the component export name from a story file path.
 * Checks the candidate name (and its F0-prefixed variant) against the
 * actual exports of the main and experimental entry points.
 */
export function extractComponentName(
  fileName: string | undefined,
  title: string | undefined
): string | null {
  // Gather candidate names from path patterns and title
  const candidates: string[] = []

  if (fileName) {
    const storiesDir = fileName.match(/\/([^/]+)\/__stories__\//)
    if (storiesDir) candidates.push(storiesDir[1])

    const indexStory = fileName.match(/\/([^/]+)\/index\.stories\.tsx$/)
    if (indexStory) candidates.push(indexStory[1])
  }

  if (title) {
    const parts = title.split("/")
    const last = parts[parts.length - 1]
    if (last) candidates.push(last)
  }

  const exports = {
    ...mainExports,
    ...experimentalExports,
  } as Record<string, unknown>

  // For each candidate, check if it (or its F0-prefixed variant) is a real export
  for (const name of candidates) {
    if (name in exports) return name
    const f0Name = `F0${name}`
    if (f0Name in exports) return f0Name
  }

  // Fallback: return the first candidate as-is
  return candidates[0] ?? null
}
