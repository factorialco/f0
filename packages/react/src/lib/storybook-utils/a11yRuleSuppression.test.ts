import { readdirSync, readFileSync } from "fs"
import { join, relative } from "path"
import { describe, expect, it } from "vitest"

/**
 * Gate: nothing may switch an axe rule off.
 *
 * `a11y: { config: { rules: [{ id: "...", enabled: false }] } }` was a silent
 * escape hatch. Unlike `skipCi` — which is gated by
 * `a11ySkipAllowlist.test.ts` and recorded in an allowlist — a disabled rule
 * left **no trace anywhere**: it never appears in the CI job summary, never
 * lands in `a11y-violations.jsonl` (so no PR comment), and shows nothing in the
 * Storybook a11y panel. It was strictly more invisible than skipping.
 *
 * There is deliberately no allowlist: the population was reduced to zero in the
 * same change that added this test, so the rule is simply "never".
 *
 * Deferring a known violation? Use `a11y: { test: "todo" }` — axe still runs
 * and still reports; it just doesn't block. For genuinely non-applicable
 * elements prefer an element-scoped opt-out, e.g.
 * `data-a11y-color-contrast-ignore` (see the `color-contrast` selector in
 * `.storybook/preview.tsx`), which narrows the exemption to the one node
 * instead of blinding a whole story.
 *
 * Scope covers both per-story parameters **and** `.storybook/` global
 * parameters — a global disable would silence a rule library-wide, which is
 * worse than any single story doing it.
 */

const packageRoot = join(__dirname, "../../..")

/**
 * Find axe rule descriptors that disable a rule. Matches both the compact
 * (`rules: [{ id: "x", enabled: false }]`) and expanded object forms by
 * checking whether an `enabled: false` sits inside a `rules:` array that also
 * carries an `id:`. Scoped this way so unrelated `enabled: false` config (e.g.
 * a component's own `aiPromotion` prop, or a React context default) is not
 * flagged.
 *
 * Returns the disabled rule ids, for a useful failure message.
 */
export const findDisabledRules = (content: string): string[] => {
  const hits: string[] = []
  const re = /rules\s*:\s*\[([\s\S]*?)\]/g
  let m: RegExpExecArray | null
  while ((m = re.exec(content)) !== null) {
    const body = m[1]
    if (!/enabled\s*:\s*false/.test(body)) continue
    const ids = [...body.matchAll(/id\s*:\s*["']([^"']+)["']/g)].map(
      (x) => x[1]
    )
    hits.push(...(ids.length > 0 ? ids : ["<unknown rule>"]))
  }
  return hits
}

/** Recursively collect files under `dir` matching `match`. */
const collectFiles = (
  dir: string,
  match: (name: string) => boolean
): string[] => {
  const out: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "storybook-static") {
        continue
      }
      out.push(...collectFiles(full, match))
    } else if (match(entry.name)) {
      out.push(full)
    }
  }
  return out
}

const findSuppressions = (files: string[]): Record<string, string[]> => {
  const results: Record<string, string[]> = {}
  for (const file of files) {
    const disabled = findDisabledRules(readFileSync(file, "utf-8"))
    if (disabled.length > 0) {
      results[relative(packageRoot, file)] = disabled
    }
  }
  return results
}

describe("findDisabledRules (detector)", () => {
  it("catches the compact single-line form", () => {
    expect(
      findDisabledRules(
        `parameters: { a11y: { config: { rules: [{ id: "svg-img-alt", enabled: false }] } } }`
      )
    ).toEqual(["svg-img-alt"])
  })

  it("catches the expanded multi-line form", () => {
    expect(
      findDisabledRules(`
        a11y: {
          config: {
            rules: [
              {
                id: "color-contrast",
                enabled: false,
              },
            ],
          },
        },
      `)
    ).toEqual(["color-contrast"])
  })

  it("catches several disabled rules in one array", () => {
    expect(
      findDisabledRules(
        `rules: [{ id: "a", enabled: false }, { id: "b", enabled: false }]`
      )
    ).toEqual(["a", "b"])
  })

  it("catches single-quoted ids and tolerant spacing", () => {
    expect(
      findDisabledRules(`rules : [ { id : 'target-size' , enabled : false } ]`)
    ).toEqual(["target-size"])
  })

  it("catches more than one rules array in a file", () => {
    expect(
      findDisabledRules(`
        const a = { rules: [{ id: "one", enabled: false }] }
        const b = { rules: [{ id: "two", enabled: false }] }
      `)
    ).toEqual(["one", "two"])
  })

  it("allows enabling a rule", () => {
    expect(
      findDisabledRules(`rules: [{ id: "color-contrast", enabled: true }]`)
    ).toEqual([])
  })

  it("allows reconfiguring an enabled rule with a selector (preview.tsx pattern)", () => {
    expect(
      findDisabledRules(`
        rules: [
          {
            id: "color-contrast",
            enabled: true,
            selector: "*:not([data-a11y-color-contrast-ignore])",
          },
        ],
      `)
    ).toEqual([])
  })

  it("ignores unrelated enabled: false config", () => {
    // e.g. ApplicationFrame's aiPromotion prop, or a React context default —
    // no `rules:` array, so not an axe suppression.
    expect(
      findDisabledRules(`
        aiPromotion: {
          enabled: false,
          greeting: "Hey",
        },
      `)
    ).toEqual([])
  })

  it("ignores a rules array with no disabled entry", () => {
    expect(findDisabledRules(`rules: [{ id: "region" }]`)).toEqual([])
  })

  it("reports a placeholder when the disabled rule has no id", () => {
    expect(findDisabledRules(`rules: [{ enabled: false }]`)).toEqual([
      "<unknown rule>",
    ])
  })
})

describe("a11y rule suppression", () => {
  const files = [
    ...collectFiles(join(packageRoot, "src"), (n) =>
      n.endsWith(".stories.tsx")
    ),
    // Global parameters live here — a disable at this level would silence a
    // rule for the whole library.
    ...collectFiles(
      join(packageRoot, ".storybook"),
      (n) => n.endsWith(".ts") || n.endsWith(".tsx")
    ),
  ]

  it("scans a non-trivial number of files (guards against a broken walker)", () => {
    expect(files.length).toBeGreaterThan(100)
  })

  it("nothing disables an axe rule via a11y config rules", () => {
    expect(
      Object.entries(findSuppressions(files)).map(
        ([file, rules]) => `${file} → ${rules.join(", ")}`
      ),
      `These files switch an axe rule off, which hides the violation from ` +
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
