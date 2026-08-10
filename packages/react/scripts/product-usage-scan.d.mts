/** Type declarations for the JS build helper (see product-usage-scan.mjs). */

/** No checkout was found for a source (or its scan failed). */
export interface UsageUnavailable {
  available: false
  reason: string
}

/** Per-component usage across the product's feature modules. */
export interface ProductUsageEntry {
  /** Number of product files importing this export. */
  files: number
  /** Module name → number of importing files in that module. */
  modules: Record<string, number>
}

/** A successful scan of a local `factorialco/factorial` checkout. */
export interface ProductUsageData {
  available: true
  generatedAt: string
  repo: {
    root: string
    /** The `@factorialco/f0-react` range in the product's frontend package.json. */
    f0Version: string | null
    lastModified: string | null
  }
  /** Human-readable summary of what was scanned across repos. */
  scope: string
  /** One entry per consumer repo that was found and scanned. */
  repos: Array<{
    id: string
    root: string
    scope: string
    modules: number
    importingFiles: number
  }>
  /**
   * Consumer repos that weren't checked out, with the env var that would point
   * at them. Their absence makes the counts partial, so the docs tag says so.
   */
  missing: Array<{ id: string; env: string }>
  totals: {
    modules: number
    scannedFiles: number
    importingFiles: number
    components: number
  }
  /** Exported name → usage. Names absent from the map are unused. */
  components: Record<string, ProductUsageEntry>
}

export type ProductUsageResult = ProductUsageData | UsageUnavailable

/** A scan of f0's own `src/` — always available, no checkout needed. */
export interface InternalUsageData {
  available: true
  /** Path that was scanned, relative to this package (`src`). */
  scope: string
  /**
   * Imported name → the f0 components importing it (deepest capitalised
   * directory on the importing file's path), sorted. Self-imports from a
   * component's own internals are excluded.
   */
  components: Record<string, string[]>
  /**
   * Component folder (relative to `src/`) → the names its barrel exports.
   * Lets the docs tag look a component up under the name it actually ships
   * (`hooks/toast` → `toasts`), which its folder name rarely matches.
   */
  exports: Record<string, string[]>
}

export type InternalUsageResult = InternalUsageData | UsageUnavailable

/** A Composer prototype (`src/projects/<project>/<slug>`). */
export interface ComposerPrototype {
  /** Project folder the prototype belongs to. */
  project: string
  /** kebab-case id, also its route (`/p/<slug>`). */
  slug: string
  title: string
  /** `published` / `internal-draft` / `archived`, when declared. */
  status: string | null
}

/** A successful scan of a local `factorialco/factorial-composer` checkout. */
export interface ComposerUsageData {
  available: true
  repo: { root: string }
  /** Repo-relative path that was scanned (`src/projects`). */
  scope: string
  totals: { prototypes: number }
  /**
   * Exported name → the prototypes importing it. Deliberately a list, not a
   * count: prototype files must never inflate the product usage numbers.
   */
  prototypes: Record<string, ComposerPrototype[]>
}

export type ComposerUsageResult = ComposerUsageData | UsageUnavailable

/** The endpoint payload: every scan, each with its own availability. */
export interface UsageResult {
  generatedAt: string
  product: ProductUsageResult
  internal: InternalUsageResult
  composer: ComposerUsageResult
}

/** The dev-server route serving the scan result. */
export const PRODUCT_USAGE_ENDPOINT: string

/** Path, relative to the product repo root, that we scan. */
export const PRODUCT_SCOPE: string

/** Path, relative to the Composer repo root, holding the prototypes. */
export const COMPOSER_SCOPE: string

/** Extracts the names a source file imports from `@factorialco/f0-react`. */
export function parseF0Imports(source: string): string[]

/** Locates a local `factorialco/factorial` checkout, or `null`. */
export function resolveProductRepoRoot(
  env?: Record<string, string | undefined>
): string | null

/** Locates a local `factorialco/factorial-it` checkout, or `null`. */
export function resolveItRepoRoot(
  env?: Record<string, string | undefined>
): string | null

/** Locates a local `factorialco/factorial-composer` checkout, or `null`. */
export function resolveComposerRepoRoot(
  env?: Record<string, string | undefined>
): string | null

/**
 * Scans the product repos for `@factorialco/f0-react` imports.
 *
 * `full` widens the factorial monorepo from `frontend/src/modules` to
 * everything, grouped by top-level directory.
 */
export function scanProductUsage(options?: {
  repoRoot?: string | null
  itRepoRoot?: string | null
  full?: boolean
}): ProductUsageResult

/** The names a component folder's barrel exports. */
export function exportedNamesOf(componentPath: string | null): string[]

/** Component folder (relative to `src/`) → the names it exports. */
export function scanComponentExports(options?: {
  srcDir?: string
}): Record<string, string[]>

/** Scans f0's own `src/` for components importing each other. */
export function scanInternalUsage(options?: {
  srcDir?: string
}): InternalUsageResult

/** Scans the Composer repo for the prototypes using each component. */
export function scanComposerUsage(options?: {
  repoRoot?: string | null
}): ComposerUsageResult

/** Runs both scans — the payload the endpoint serves. */
export function scanUsage(): UsageResult

/** Vite plugin serving the scan result from the Storybook dev server. */
export function productUsageVitePlugin(): {
  name: string
  configureServer(server: unknown): void
}
