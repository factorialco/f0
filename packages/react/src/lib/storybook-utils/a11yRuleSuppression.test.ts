import { readdirSync, readFileSync } from "fs"
import { join, relative } from "path"
import { describe, expect, it } from "vitest"

/**
 * Gate: no story may switch an axe rule off.
 *
 * `a11y: { config: { rules: [{ id: "...", enabled: false }] } }` was a silent
 * escape hatch. Unlike `skipCi` — which is gated by
 * `a11ySkipAllowlist.test.ts` and recorded in an allowlist — a disabled rule
 * left **no trace anywhere**: it never appears in the CI job summary, never
 * lands in `a11y-violations.jsonl` (so no PR comment), and shows nothing in the
 * Storybook a11y panel. It was strictly more invisible than skipping.
 *
 * There is deliberately no allowlist here: the population was reduced to zero
 * in the same change that added this test, so the rule is simply "never".
 *
 * Deferring a known violation? Use `a11y: { test: "todo" }` — axe still runs
 * and still reports; it just doesn't block. For genuinely non-applicable
 * elements prefer an element-scoped opt-out, e.g.
 * `data-a11y-color-contrast-ignore` (see the `color-contrast` selector in
 * `.storybook/preview.tsx`), which narrows the exemption to the one node
 * instead of blinding a whole story.
 */

const packageRoot = join(__dirname, "../../..")

/**
 * Find axe rule descriptors that disable a rule. Matches both the compact
 * (`rules: [{ id: "x", enabled: false }]`) and expanded object forms by
 * checking whether an `enabled: false` sits inside a `rules:` array entry that
 * also carries an `id:`. Scoped this way so unrelated `enabled: false` config
 * (e.g. a component's own `aiPromotion` prop) is not flagged.
 */
const findDisabledRules = (content: string): string[] => {
  const hits: string[] = []
  const re = /rules:\s*\[([\s\S]*?)\]/g
  let m: RegExpExecArray | null
  while ((m = re.exec(content)) !== null) {
    const body = m[1]
    if (!/enabled:\s*false/.test(body)) continue
    // Collect the rule ids that appear in this array, for a useful message.
    const ids = [...body.matchAll(/id:\s*["']([^"']+)["']/g)].map((x) => x[1])
    hits.push(...(ids.length > 0 ? ids : ["<unknown rule>"]))
  }
  return hits
}

const findStoryFilesSuppressingRules = (
  dir: string
): Record<string, string[]> => {
  const results: Record<string, string[]> = {}
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      Object.assign(results, findStoryFilesSuppressingRules(fullPath))
    } else if (entry.name.endsWith(".stories.tsx")) {
      const disabled = findDisabledRules(readFileSync(fullPath, "utf-8"))
      if (disabled.length > 0) {
        results[relative(packageRoot, fullPath)] = disabled
      }
    }
  }
  return results
}

describe("a11y rule suppression", () => {
  it("no story disables an axe rule via a11y.config.rules", () => {
    const offenders = findStoryFilesSuppressingRules(join(packageRoot, "src"))
    expect(
      Object.entries(offenders).map(
        ([file, rules]) => `${file} → ${rules.join(", ")}`
      ),
      `These stories switch an axe rule off, which hides the violation from ` +
        `CI's job summary, from a11y-violations.jsonl (the PR comment) and ` +
        `from the Storybook a11y panel — it leaves no trace at all.\n\n` +
        `Instead:\n` +
        `  • Deferring a known violation → a11y: { test: "todo" } (axe still ` +
        `runs and reports, it just doesn't block)\n` +
        `  • Intentional/accepted → a11y: { test: "warning" }\n` +
        `  • A specific element genuinely not applicable → an element-scoped ` +
        `opt-out such as data-a11y-color-contrast-ignore, so only that node is ` +
        `exempt\n\n` +
        `Enabling or re-configuring a rule (enabled: true, or adding a ` +
        `selector) is fine — this gate only rejects disabling.`
    ).toEqual([])
  })
})
