import { readdirSync, readFileSync } from "fs"
import { join, relative } from "path"
import ts from "typescript"
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

const nameOf = (n: ts.PropertyName): string | undefined =>
  ts.isIdentifier(n) || ts.isStringLiteral(n) ? n.text : undefined

const propValue = (
  obj: ts.ObjectLiteralExpression,
  name: string
): ts.Expression | undefined => {
  for (const p of obj.properties) {
    if (ts.isPropertyAssignment(p) && nameOf(p.name) === name) {
      return p.initializer
    }
  }
  return undefined
}

/**
 * Rule ids disabled inside an `a11y: { ... }` object.
 *
 * Parsed rather than pattern-matched. `rules` is a generic name that unrelated
 * APIs use (`src/lib/text.ts` has its own `Rules` type for text formatting), so
 * matching `rules:` textually would flag non-a11y config and fail a PR with a
 * misleading accessibility error. Walking the AST scopes detection to real
 * `a11y` properties and gets quoting, comments and nesting right for free.
 *
 * Only `rules` arrays count — `a11y: { disable: true }` is deliberately out of
 * scope: CI never consults it (`test-runner.ts` runs axe regardless), so it
 * suppresses only the addon panel, and every current usage already sits beside
 * a gated `skipCi`.
 *
 * Limitation: a rule id or `enabled` value assembled at runtime (a variable, a
 * spread) is not resolved — the value has to be a literal to be seen.
 */
export const findDisabledRules = (content: string): string[] => {
  const source = ts.createSourceFile(
    "story.tsx",
    content,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ false,
    ts.ScriptKind.TSX
  )
  const hits: string[] = []

  /** Collect disabled ids from any `rules` array inside this a11y object. */
  const collectFromA11y = (a11y: ts.ObjectLiteralExpression): void => {
    const walk = (node: ts.Node): void => {
      if (
        ts.isPropertyAssignment(node) &&
        nameOf(node.name) === "rules" &&
        ts.isArrayLiteralExpression(node.initializer)
      ) {
        for (const el of node.initializer.elements) {
          if (!ts.isObjectLiteralExpression(el)) continue
          if (propValue(el, "enabled")?.kind !== ts.SyntaxKind.FalseKeyword) {
            continue
          }
          const id = propValue(el, "id")
          hits.push(id && ts.isStringLiteral(id) ? id.text : "<unknown rule>")
        }
      }
      ts.forEachChild(node, walk)
    }
    walk(a11y)
  }

  const visit = (node: ts.Node): void => {
    if (
      ts.isPropertyAssignment(node) &&
      nameOf(node.name) === "a11y" &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      collectFromA11y(node.initializer)
    }
    ts.forEachChild(node, visit)
  }
  visit(source)

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

/**
 * Fixtures must be valid TypeScript — the detector parses, so a bare
 * `a11y: { ... }` fragment would be read as a labeled statement rather than an
 * object property and would (correctly) match nothing.
 */
const inMeta = (body: string) => `const meta = { ${body} }`

describe("findDisabledRules — catches a11y suppressions", () => {
  it("the compact single-line form", () => {
    expect(
      findDisabledRules(
        inMeta(
          `parameters: { a11y: { config: { rules: [{ id: "svg-img-alt", enabled: false }] } } }`
        )
      )
    ).toEqual(["svg-img-alt"])
  })

  it("the expanded multi-line form", () => {
    expect(
      findDisabledRules(
        inMeta(`
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
          },
        `)
      )
    ).toEqual(["color-contrast"])
  })

  it("several disabled rules in one array", () => {
    expect(
      findDisabledRules(
        inMeta(
          `a11y: { config: { rules: [{ id: "a", enabled: false }, { id: "b", enabled: false }] } }`
        )
      )
    ).toEqual(["a", "b"])
  })

  it("single-quoted ids", () => {
    expect(
      findDisabledRules(
        inMeta(
          `a11y: { config: { rules: [{ id: 'target-size', enabled: false }] } }`
        )
      )
    ).toEqual(["target-size"])
  })

  it("quoted property names", () => {
    expect(
      findDisabledRules(
        inMeta(
          `"a11y": { "config": { "rules": [{ "id": "region", "enabled": false }] } }`
        )
      )
    ).toEqual(["region"])
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
      findDisabledRules(
        inMeta(`
          a11y: {
            test: "todo",
            config: { rules: [{ id: "region", enabled: false }] },
          },
        `)
      )
    ).toEqual(["region"])
  })

  it("reports a placeholder when the disabled rule has no id", () => {
    expect(
      findDisabledRules(
        inMeta(`a11y: { config: { rules: [{ enabled: false }] } }`)
      )
    ).toEqual(["<unknown rule>"])
  })
})

describe("findDisabledRules — does not flag legitimate config", () => {
  it("allows enabling a rule", () => {
    expect(
      findDisabledRules(
        inMeta(
          `a11y: { config: { rules: [{ id: "color-contrast", enabled: true }] } }`
        )
      )
    ).toEqual([])
  })

  it("allows reconfiguring an enabled rule with a selector (preview.tsx pattern)", () => {
    expect(
      findDisabledRules(
        inMeta(`
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
      )
    ).toEqual([])
  })

  it("allows an empty rules array", () => {
    expect(
      findDisabledRules(inMeta(`a11y: { config: { rules: [] } }`))
    ).toEqual([])
  })

  it("ignores a11y.disable (out of scope — CI ignores it)", () => {
    expect(
      findDisabledRules(inMeta(`a11y: { skipCi: true, disable: true }`))
    ).toEqual([])
  })
})

describe("findDisabledRules — does not flag non-a11y config", () => {
  it("ignores a `rules` array outside any a11y block", () => {
    // `rules` is a generic name. src/lib/text.ts has its own Rules type, and a
    // component could gain a `rules` prop — neither is an axe suppression.
    expect(
      findDisabledRules(
        inMeta(
          `args: { validation: { rules: [{ id: "required", enabled: false }] } }`
        )
      )
    ).toEqual([])
  })

  it("ignores a text-formatting rules object", () => {
    expect(
      findDisabledRules(
        inMeta(`args: { rules: { disallowEmpty: false, enabled: false } }`)
      )
    ).toEqual([])
  })

  it("ignores unrelated enabled: false config", () => {
    expect(
      findDisabledRules(
        inMeta(`aiPromotion: { enabled: false, greeting: "Hey" }`)
      )
    ).toEqual([])
  })

  it("does not leak past the end of an a11y block", () => {
    expect(
      findDisabledRules(
        inMeta(`
          parameters: {
            a11y: { test: "todo" },
            chart: { rules: [{ id: "gridlines", enabled: false }] },
          },
        `)
      )
    ).toEqual([])
  })

  it("is not confused by braces inside strings or comments", () => {
    expect(
      findDisabledRules(
        inMeta(`
          a11y: {
            // a brace in a comment: {
            config: {
              rules: [{ id: "color-contrast", enabled: true, selector: "div{}" }],
            },
          },
          other: { rules: [{ id: "nope", enabled: false }] },
        `)
      )
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
