interface ChromaticOptions {
  disableSnapshot?: boolean
  diffThreshold?: number
  forceColors: string
}

export const withSnapshot = (
  parameters: Record<string, unknown>,
  options?: ChromaticOptions
) => {
  return { ...parameters, chromatic: { disableSnapshot: false, ...options } }
}

/**
 * @deprecated Frozen — only files listed in `.storybook/a11y-skip-allowlist.json`
 * may skip axe, up to their grandfathered call-site count, and that list only
 * shrinks (Path to AA burndown). New stories
 * must run axe in CI: use `a11y: { test: "todo" }` for known-failing stories,
 * or fix the violations and use `test: "error"`. This helper will be deleted
 * once the allowlist is empty.
 */
export const withSkipA11y = (parameters: Record<string, unknown>) => {
  return { ...parameters, a11y: { skipCi: true } }
}

/**
 * Opt a story out of the aria-surface snapshot
 * (`.scripts/check-aria-surface.ts`).
 *
 * The check diffs every story's `role` + accessible-name pairs against the
 * baseline from the latest `main` run, so a story whose *content* is
 * nondeterministic — `Math.random()` ids or titles, `Date.now()`-relative
 * timestamps — reports a rename on every run, on every PR, forever. That noise
 * buries the real renames the check exists to catch.
 *
 * Reach for this only when the nondeterminism is load-bearing for the story.
 * Pinning the fixture instead (a fixed seed, a fixed date) keeps the story's
 * accessible names under the check and is always the better fix where it does
 * not change what the story demonstrates.
 */
export const withSkipAriaSnapshot = (parameters: Record<string, unknown>) => {
  return { ...parameters, ariaSnapshot: { skip: true } }
}
