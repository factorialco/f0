/** Type declarations for the JS build helper (see component-status-build.mjs). */

import type {
  ApiStatus,
  ComponentEntry,
  ComponentStatusData,
} from "../src/component-status/component-status"

export const VIRTUAL_ID: string

/** Scan `srcDir` (defaults to this package's `src/`) and build the dataset. */
export function computeComponentStatusData(srcDir?: string): ComponentStatusData

/** Whether an entry meets the mechanically-checkable stable bar. */
export function meetsStableBar(c: ComponentEntry): boolean

/** The effective maturity level for an entry. */
export function effectiveStatusOf(c: ComponentEntry): ApiStatus

/** Normalize a component name for matching (drop F0 prefix + punctuation). */
export function normalizeComponentName(name: string): string

/** Last path segment of a grouped name. */
export function leafName(name: string): string

/** Map of normalized leaf name → effective status (components-zone preferred). */
export function effectiveStatusByLeaf(
  components: ComponentEntry[]
): Record<string, ApiStatus>

/** Vite plugin serving `virtual:f0-component-status-data`. */
export function componentStatusVitePlugin(): {
  name: string
  resolveId(id: string): string | null
  load(id: string): string | null
}

/** esbuild plugin serving the same virtual module (tsup build path). */
export function componentStatusEsbuildPlugin(): {
  name: string
  setup(build: unknown): void
}
