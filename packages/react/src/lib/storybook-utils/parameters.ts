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
