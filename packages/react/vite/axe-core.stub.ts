/**
 * Test-only stand-in for `axe-core`.
 *
 * The a11y audit in `src/component-status/A11yRow.tsx` reaches axe-core via a
 * dynamic `import("axe-core")`. axe-core is only ever a transitive dependency
 * here (pulled in by Storybook's a11y tooling), so it isn't resolvable from
 * this package on its own — under Vitest that makes the dynamic import fail to
 * resolve at transform time. Aliasing `axe-core` to this stub for the unit
 * project keeps the import resolvable without adding a runtime dependency.
 *
 * Tests that exercise the audit `vi.mock("axe-core", …)` to control the
 * results, so this default is only the "no violations" fallback for any test
 * that renders the audit without mocking.
 */
export default {
  run: async () => ({ violations: [] }),
}
