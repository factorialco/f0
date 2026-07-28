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
 * Scope covers per-story parameters **and** `.storybook/` global parameters — a
 * global disable would silence a rule library-wide, which is worse than any
 * single story doing it.
 */

const packageRoot = join(__dirname, "../../..")

/**
 * Extract the body of every `a11y: { ... }` object in `content`, by matching
 * braces.
 *
 * Detection is deliberately scoped to these blocks rather than searching for
 * any `rules:` array: `rules` is a generic name that other, unrelated APIs use
 * (`src/lib/text.ts` has its own `Rules` type for text formatting), so an
 * unscoped match would flag non-a11y config and fail a PR with a misleading
 * accessibility error.
 *
 * Brace counting ignores string and comment contents, so a `{` inside a
 * selector or a comment cannot unbalance it.
 */
export const extractA11yBlocks = (content: string): string[] => {
  const blocks: string[] = []
  const opener = /a11y\s*:\s*\{/g

  // Only the match position matters — `opener.lastIndex` is where the block
  // body starts — so the match object itself is not needed.
  while (opener.exec(content) !== null) {
    let i = opener.lastIndex
    let depth = 1
    let quote: string | null = null
    let comment: "line" | "block" | null = null

    while (i < content.length && depth > 0) {
      const ch = content[i]
      const next = content[i + 1]

      if (comment === "line") {
        if (ch === "\n") comment = null
      } else if (comment === "block") {
        if (ch === "*" && next === "/") (i++, (comment = null))
      } else if (quote) {
        if (ch === "\\") i++
        else if (ch === quote) quote = null
      } else if (ch === "/" && next === "/") {
        comment = "line"
        i++
      } else if (ch === "/" && next === "*") {
        comment = "block"
        i++
      } else if (ch === '"' || ch === "'" || ch === "`") {
        quote = ch
      } else if (ch === "{") {
        depth++
      } else if (ch === "}") {
        depth--
      }
      i++
    }
    blocks.push(content.slice(opener.lastIndex, i - 1))
  }
  return blocks
}

/**
 * Rule ids disabled inside an `a11y` block. Matches both the compact
 * (`rules: [{ id: "x", enabled: false }]`) and expanded object forms.
 *
 * Only `rules` arrays count — `a11y: { disable: true }` is deliberately out of
 * scope: CI never consults it (`test-runner.ts` runs axe regardless), so it
 * suppresses only the addon panel, and every current usage already sits beside
 * a gated `skipCi`.
 */
export const findDisabledRules = (content: string): string[] => {
  const hits: string[] = []
  for (const block of extractA11yBlocks(content)) {
    const re = /rules\s*:\s*\[([\s\S]*?)\]/g
    let m: RegExpExecArray | null
    while ((m = re.exec(block)) !== null) {
      const body = m[1]
      if (!/enabled\s*:\s*false/.test(body)) continue
      const ids = [...body.matchAll(/id\s*:\s*["']([^"']+)["']/g)].map(
        (x) => x[1]
      )
      hits.push(...(ids.length > 0 ? ids : ["<unknown rule>"]))
    }
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

describe("findDisabledRules — catches a11y suppressions", () => {
  it("the compact single-line form", () => {
    expect(
      findDisabledRules(
        `parameters: { a11y: { config: { rules: [{ id: "svg-img-alt", enabled: false }] } } }`
      )
    ).toEqual(["svg-img-alt"])
  })

  it("the expanded multi-line form", () => {
    expect(
      findDisabledRules(`
        parameters: {
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
        }
      `)
    ).toEqual(["color-contrast"])
  })

  it("several disabled rules in one array", () => {
    expect(
      findDisabledRules(
        `a11y: { config: { rules: [{ id: "a", enabled: false }, { id: "b", enabled: false }] } }`
      )
    ).toEqual(["a", "b"])
  })

  it("single-quoted ids and loose spacing", () => {
    expect(
      findDisabledRules(
        `a11y : { config : { rules : [ { id : 'target-size' , enabled : false } ] } }`
      )
    ).toEqual(["target-size"])
  })

  it("more than one a11y block in a file", () => {
    expect(
      findDisabledRules(`
        export const A = { parameters: { a11y: { config: { rules: [{ id: "one", enabled: false }] } } } }
        export const B = { parameters: { a11y: { config: { rules: [{ id: "two", enabled: false }] } } } }
      `)
    ).toEqual(["one", "two"])
  })

  it("a suppression sitting beside other a11y keys", () => {
    expect(
      findDisabledRules(`
        a11y: {
          test: "todo",
          config: { rules: [{ id: "region", enabled: false }] },
        },
      `)
    ).toEqual(["region"])
  })

  it("reports a placeholder when the disabled rule has no id", () => {
    expect(
      findDisabledRules(`a11y: { config: { rules: [{ enabled: false }] } }`)
    ).toEqual(["<unknown rule>"])
  })
})

describe("findDisabledRules — does not flag legitimate config", () => {
  it("allows enabling a rule", () => {
    expect(
      findDisabledRules(
        `a11y: { config: { rules: [{ id: "color-contrast", enabled: true }] } }`
      )
    ).toEqual([])
  })

  it("allows reconfiguring an enabled rule with a selector (preview.tsx pattern)", () => {
    expect(
      findDisabledRules(`
        a11y: {
          config: {
            rules: [
              {
                id: "color-contrast",
                enabled: true,
                selector: "*:not([data-a11y-color-contrast-ignore])",
              },
            ],
          },
        },
      `)
    ).toEqual([])
  })

  it("allows an empty rules array", () => {
    expect(findDisabledRules(`a11y: { config: { rules: [] } }`)).toEqual([])
  })

  it("ignores a11y.disable (out of scope — CI ignores it)", () => {
    expect(findDisabledRules(`a11y: { skipCi: true, disable: true }`)).toEqual(
      []
    )
  })
})

describe("findDisabledRules — does not flag non-a11y config", () => {
  it("ignores a `rules` array outside any a11y block", () => {
    // `rules` is a generic name. src/lib/text.ts has its own Rules type, and a
    // component could gain a `rules` prop — neither is an axe suppression.
    expect(
      findDisabledRules(
        `args: { validation: { rules: [{ id: "required", enabled: false }] } }`
      )
    ).toEqual([])
  })

  it("ignores a text-formatting rules object", () => {
    expect(
      findDisabledRules(
        `args: { rules: { disallowEmpty: false, enabled: false } }`
      )
    ).toEqual([])
  })

  it("ignores unrelated enabled: false config", () => {
    expect(
      findDisabledRules(`aiPromotion: { enabled: false, greeting: "Hey" }`)
    ).toEqual([])
  })

  it("does not leak past the end of an a11y block", () => {
    // The disable sits AFTER the a11y block closes, so it must not be picked up.
    expect(
      findDisabledRules(`
        parameters: {
          a11y: { test: "todo" },
          chart: { rules: [{ id: "gridlines", enabled: false }] },
        }
      `)
    ).toEqual([])
  })

  it("is not confused by braces inside strings or comments", () => {
    expect(
      findDisabledRules(`
        a11y: {
          // a brace in a comment: {
          config: {
            rules: [
              { id: "color-contrast", enabled: true, selector: "div{}" },
            ],
          },
        },
        other: { rules: [{ id: "nope", enabled: false }] },
      `)
    ).toEqual([])
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
