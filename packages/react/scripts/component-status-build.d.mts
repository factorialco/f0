/** Type declarations for the JS build helper (see component-status-build.mjs). */

export const VIRTUAL_ID: string

/** Scan `srcDir` (defaults to this package's `src/`) and build the dataset. */
export function computeComponentStatusData(
  srcDir?: string
): import("../src/component-status/component-status").ComponentStatusData

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
