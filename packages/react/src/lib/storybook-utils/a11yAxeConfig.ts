/**
 * Single source of truth for the axe rule scope used by BOTH accessibility
 * surfaces:
 *
 * - the Storybook a11y **addon** (interactive panel) — via
 *   `parameters.a11y.options.runOnly` in `.storybook/preview.tsx`
 * - the **CI** test-runner — via `getViolations(...)` in
 *   `.storybook/test-runner.ts`
 *
 * Keeping them in one place matters: they used to diverge silently. The addon
 * ran axe's defaults while CI passed an explicit tag filter, so any rule that
 * axe ships **disabled by default** ran in CI and was invisible in the panel.
 * `target-size` (WCAG 2.2 SC 2.5.8) is the notable one — `enabled: false` in
 * axe-core, activated by selecting the `wcag22aa` tag. That mismatch meant a
 * story could look clean in the addon and fail CI.
 *
 * Do not inline these tags at a call-site — import them, so the two surfaces
 * cannot drift apart again.
 */

/**
 * WCAG 2.0, 2.1 and 2.2 at levels A and AA — matches the Plexus audit scope
 * (UNE-EN 301549 + WCAG 2.1/2.2). Level AAA and axe's non-normative
 * `best-practice` rules are intentionally excluded.
 *
 * Selecting rules by tag also switches on rules axe disables by default when
 * they carry one of these tags (e.g. `target-size` via `wcag22aa`).
 */
export const A11Y_WCAG_TAGS = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22a",
  "wcag22aa",
] as const

/** `runOnly` object for `axe.run()` / the addon's `a11y.options`. */
export const A11Y_RUN_ONLY = {
  type: "tag" as const,
  values: [...A11Y_WCAG_TAGS],
}

/**
 * The element CI scopes axe to.
 *
 * NOTE — a known asymmetry, deliberately left in place: CI scopes to the story
 * root, while the addon scans the whole document. Portaled content (dropdowns,
 * tooltips, dialogs, the Select listbox) mounts outside `#storybook-root`, so
 * CI does **not** see it and the addon does. Narrowing the addon to this
 * selector would hide the only place portal violations are currently visible.
 * Widening CI is tracked separately — it needs care, because the full document
 * also contains Storybook's own chrome.
 */
export const A11Y_CI_CONTEXT = "#storybook-root"
