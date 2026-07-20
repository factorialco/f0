/**
 * The component-status dataset is injected at build/dev time by the Vite/esbuild
 * plugin in `scripts/component-status-build.mjs` (no committed JSON). The shape
 * is validated and re-exported with concrete types from `component-status.ts`,
 * so it is declared here only loosely enough for the import to type-check.
 */
declare module "virtual:f0-component-status-data" {
  const data: unknown
  export default data
}
