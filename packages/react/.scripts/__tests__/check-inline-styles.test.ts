import { describe, expect, it } from "vitest"

import {
  annotations,
  buildDebtFile,
  check,
  commentMarkdown,
  type DebtFile,
  describeObject,
  EXEMPT_MARKER,
  type Finding,
  findInSource,
  fixHint,
  isExcludedPath,
} from "../check-inline-styles"
import ts from "typescript"

/** Shorthand: scan a .tsx snippet and return `key (shape)` strings. */
const scanTsx = (source: string): string[] =>
  findInSource("src/probe.tsx", source).map((f) => `${f.key} (${f.shape})`)

/** Classify a bare object literal, e.g. `{ width: 4 }`. */
const classify = (objectSource: string) => {
  const file = ts.createSourceFile(
    "probe.tsx",
    `const x = ${objectSource}`,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  )
  let found: ts.ObjectLiteralExpression | undefined
  const visit = (node: ts.Node): void => {
    if (!found && ts.isObjectLiteralExpression(node)) found = node
    ts.forEachChild(node, visit)
  }
  visit(file)
  return describeObject(found!)
}

const finding = (overrides: Partial<Finding> = {}): Finding => ({
  file: "src/patterns/Thing.tsx",
  line: 1,
  key: "zIndex",
  shape: "static",
  text: "{{ zIndex: 9999 }}",
  ...overrides,
})

describe("describeObject", () => {
  it("calls an object whose values are all literals static", () => {
    expect(classify(`{ zIndex: 9999, display: "none" }`).shape).toBe("static")
  })

  it("treats a no-substitution template as a literal", () => {
    expect(classify("{ content: `x` }").shape).toBe("static")
  })

  it("calls an object with no literal values dynamic", () => {
    expect(classify("{ width: w, height: measure() }").shape).toBe("dynamic")
  })

  it("calls a part-literal object mixed, and names the constant properties", () => {
    const result = classify("{ position: `absolute`, top: offset }")
    expect(result.shape).toBe("mixed")
    expect(result.staticProperties).toEqual(["position"])
  })

  it("treats a template literal with interpolation as dynamic", () => {
    expect(classify("{ width: `${pct}%` }").shape).toBe("dynamic")
  })

  it("singles out a CSS custom property, whatever else is in the object", () => {
    expect(classify(`{ "--bar-width": "40%" }`).shape).toBe("css-variable")
  })

  it("treats a spread as dynamic and records it in the key", () => {
    const result = classify("{ ...rest, top: 0 }")
    expect(result.shape).toBe("mixed")
    expect(result.key).toBe("...spread,top")
  })

  it("sorts property names so key order does not depend on source order", () => {
    expect(classify("{ top: 1, left: 2 }").key).toBe(
      classify("{ left: 2, top: 1 }").key
    )
  })

  it("keeps a computed key stable instead of inlining the expression", () => {
    expect(classify("{ [prop]: value }").key).toBe("<computed>")
  })
})

describe("findInSource", () => {
  it("finds an object style prop", () => {
    expect(scanTsx(`const A = () => <div style={{ zIndex: 9999 }} />`)).toEqual(
      ["zIndex (static)"]
    )
  })

  it("finds a style forwarded straight from props", () => {
    expect(scanTsx(`const A = ({ style }) => <div style={style} />`)).toEqual([
      "<passthrough> (passthrough)",
    ])
    expect(scanTsx(`const A = (p) => <div style={p.style} />`)).toEqual([
      "<passthrough> (passthrough)",
    ])
  })

  it("finds a computed style — conditional, call or spread", () => {
    expect(scanTsx(`const A = () => <div style={open ? a : b} />`)).toEqual([
      "<expression> (expression)",
    ])
    expect(scanTsx(`const A = () => <div style={build()} />`)).toEqual([
      "<expression> (expression)",
    ])
  })

  it("finds a <style> element, self-closing or with CSS inside", () => {
    expect(scanTsx("const A = () => <style>{`.a{color:red}`}</style>")).toEqual(
      ["<style-element> (element)"]
    )
    expect(scanTsx(`const A = () => <style href="x" />`)).toEqual([
      "<style-element> (element)",
    ])
  })

  it("keys a <style> element by a constant, so editing its CSS does not churn", () => {
    const before = findInSource(
      "src/probe.tsx",
      "const A = () => <style>{`.a{color:red}`}</style>"
    )
    const after = findInSource(
      "src/probe.tsx",
      "const A = () => <style>{`.a{color:blue;padding:4px}`}</style>"
    )
    expect(before[0].key).toBe(after[0].key)
  })

  it("keys a style prop by its properties, so editing a value does not churn", () => {
    const before = scanTsx(
      "const A = () => <div style={{ width: `${a}px` }} />"
    )
    const after = scanTsx(
      "const A = () => <div style={{ width: `${a + gutter}px` }} />"
    )
    expect(before).toEqual(after)
  })

  it("still fires when a property is added to an existing style", () => {
    expect(
      scanTsx("const A = () => <div style={{ width: w, height: h }} />")
    ).not.toEqual(scanTsx("const A = () => <div style={{ width: w }} />"))
  })

  it("leaves className and non-style props alone", () => {
    expect(
      scanTsx(
        `const A = () => <div className="flex" transition={{ duration: 0.3 }} />`
      )
    ).toEqual([])
  })

  it("records the line the style sits on", () => {
    const findings = findInSource(
      "src/probe.tsx",
      [
        "const A = () => (",
        "  <div",
        "    style={{ top: 0 }}",
        "  />",
        ")",
      ].join("\n")
    )
    expect(findings[0].line).toBe(3)
  })

  it("honours the exempt marker on the same line", () => {
    expect(
      scanTsx(
        `const A = () => <div style={{ top: y }} /> // ${EXEMPT_MARKER}: measured offset`
      )
    ).toEqual([])
  })

  it("honours the exempt marker on the line above", () => {
    expect(
      scanTsx(
        [
          "const A = () => (",
          `  // ${EXEMPT_MARKER}: measured offset`,
          "  <div style={{ top: y }} />",
          ")",
        ].join("\n")
      )
    ).toEqual([])
  })

  it("does not let an exemption two lines up leak onto the next style", () => {
    expect(
      scanTsx(
        [
          `// ${EXEMPT_MARKER}: only the next one`,
          "const A = () => <div style={{ top: y }} />",
          "const B = () => <div style={{ left: x }} />",
        ].join("\n")
      )
    ).toEqual(["left (dynamic)"])
  })
})

describe("excluded paths", () => {
  it.each([
    "ui/carousel.tsx",
    "ui/Select/components/radix-ui/select.tsx",
    "ui/value-display/types/barSeries/barSeries.tsx",
  ])(
    "excludes %s — third-party primitive wrappers are out of scope",
    (path) => {
      expect(isExcludedPath(path)).toBe(true)
    }
  )

  it.each([
    "components/F0Thing/F0Thing.stories.tsx",
    "components/F0Thing/F0Thing.spec.tsx",
    "components/F0Thing/__tests__/helpers.tsx",
    "components/F0Thing/__storybook__/mockData.tsx",
    "components/F0Thing/thing.factory.tsx",
    "docs/Guide.mdx",
    "icons/app/Add.tsx",
    "flags/components/Es.tsx",
    "mocks/people.tsx",
    "lib/storybook-utils/do-donts.tsx",
  ])("excludes %s", (path) => {
    expect(isExcludedPath(path)).toBe(true)
  })

  it.each([
    "components/F0Thing/F0Thing.tsx",
    "patterns/OneDataCollection/visualizations.tsx",
    "sds/Home/NewHomeLayout/index.tsx",
    // A component that merely *mentions* ui in a deeper segment is in scope.
    "patterns/Navigation/ui/Sidebar.tsx",
  ])("scans %s", (path) => {
    expect(isExcludedPath(path)).toBe(false)
  })
})

describe("the ratchet", () => {
  const baseline = (files: Record<string, string[]>): DebtFile => ({
    note: "",
    total: Object.values(files).flat().length,
    files,
  })

  it("passes when the findings match the baseline exactly", () => {
    const result = check(
      [finding()],
      baseline({ "src/patterns/Thing.tsx": ["zIndex"] })
    )

    expect(result.added).toEqual([])
    expect(result.fixed).toEqual({})
    expect(result.staleFiles).toEqual([])
  })

  it("blocks a style the baseline does not excuse", () => {
    const result = check(
      [finding(), finding({ key: "top", line: 9 })],
      baseline({ "src/patterns/Thing.tsx": ["zIndex"] })
    )

    expect(result.added.map((f) => f.key)).toEqual(["top"])
  })

  it("blocks the same style appearing one extra time", () => {
    const result = check(
      [finding(), finding({ line: 2 })],
      baseline({ "src/patterns/Thing.tsx": ["zIndex"] })
    )

    expect(result.added).toHaveLength(1)
  })

  it("blocks a baselined style copied into a different file", () => {
    const result = check(
      [finding({ file: "src/patterns/Other.tsx" })],
      baseline({ "src/patterns/Thing.tsx": ["zIndex"] })
    )

    expect(result.added.map((f) => f.file)).toEqual(["src/patterns/Other.tsx"])
    expect(result.staleFiles).toEqual(["src/patterns/Thing.tsx"])
  })

  it("tolerates a baselined style moving to another line", () => {
    const result = check(
      [finding({ line: 412 })],
      baseline({ "src/patterns/Thing.tsx": ["zIndex"] })
    )

    expect(result.added).toEqual([])
    expect(result.fixed).toEqual({})
  })

  it("flags a converted style still sitting in the baseline, to lock the win in", () => {
    const result = check(
      [finding()],
      baseline({ "src/patterns/Thing.tsx": ["zIndex", "top"] })
    )

    expect(result.added).toEqual([])
    expect(result.fixed).toEqual({ "src/patterns/Thing.tsx": ["top"] })
  })

  it("flags a baseline entry for a file that is now clean", () => {
    const result = check([], baseline({ "src/patterns/Gone.tsx": ["top"] }))

    expect(result.staleFiles).toEqual(["src/patterns/Gone.tsx"])
  })

  it("reports current and baseline totals", () => {
    const result = check(
      [finding(), finding({ key: "top", line: 2 })],
      baseline({ "src/patterns/Thing.tsx": ["zIndex"] })
    )

    expect(result.total).toBe(2)
    expect(result.baselineTotal).toBe(1)
  })
})

describe("buildDebtFile", () => {
  it("groups by file, sorts keys, and totals the findings", () => {
    const payload = buildDebtFile([
      finding({ file: "src/b.tsx", key: "top" }),
      finding({ file: "src/a.tsx", key: "width" }),
      finding({ file: "src/a.tsx", key: "height" }),
    ])

    expect(payload.total).toBe(3)
    expect(Object.keys(payload.files)).toEqual(["src/a.tsx", "src/b.tsx"])
    expect(payload.files["src/a.tsx"]).toEqual(["height", "width"])
  })

  it("round-trips through check() as a passing baseline", () => {
    const findings = [finding(), finding({ key: "top", line: 4 })]
    expect(check(findings, buildDebtFile(findings)).added).toEqual([])
  })
})

describe("fix hints", () => {
  it("tells you to convert when every value is a constant", () => {
    expect(fixHint(finding({ shape: "static" }))).toMatch(/Tailwind classes/)
  })

  it("tells you to forward className for a passthrough style", () => {
    expect(fixHint(finding({ shape: "passthrough" }))).toMatch(/className/)
  })

  it("asks for a justification when the value is genuinely dynamic", () => {
    expect(fixHint(finding({ shape: "dynamic" }))).toMatch(/dynamic/)
  })
})

describe("CI surfaces", () => {
  it("emits a repo-root-relative annotation naming the line and the escape hatch", () => {
    const [line] = annotations([finding({ line: 42 })])

    expect(line).toContain(
      "::error file=packages/react/src/patterns/Thing.tsx,line=42,"
    )
    expect(line).toContain("title=Inline style::")
    expect(line).toContain(EXEMPT_MARKER)
  })

  it("puts no literal newline in an annotation, which would truncate it", () => {
    for (const line of annotations([finding()])) {
      expect(line.split("\n")).toHaveLength(1)
    }
  })

  it("reports success when nothing was added", () => {
    const markdown = commentMarkdown({
      added: [],
      fixed: {},
      staleFiles: [],
      total: 244,
      baselineTotal: 244,
    })

    expect(markdown).toContain("✅ No inline styles added")
    expect(markdown).toContain("244")
  })

  it("separates the mechanical conversions from the judgement calls", () => {
    const markdown = commentMarkdown({
      added: [
        finding({ shape: "static", key: "zIndex" }),
        finding({ shape: "dynamic", key: "width", line: 8 }),
      ],
      fixed: {},
      staleFiles: [],
      total: 246,
      baselineTotal: 244,
    })

    expect(markdown).toContain("❌ 2 inline styles added")
    expect(markdown).toContain("1 with constant values — convert to classes")
    expect(markdown).toContain("1 other")
    expect(markdown).toContain(EXEMPT_MARKER)
  })
})
