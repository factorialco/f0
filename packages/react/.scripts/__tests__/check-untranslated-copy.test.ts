import { describe, expect, it } from "vitest"

import {
  annotations,
  attachExistingKeys,
  buildKeyIndex,
  buildDebtFile,
  check,
  commentMarkdown,
  type DebtFile,
  type Finding,
  findInSource,
  fixHint,
  isExcludedPath,
  isTextBearingName,
  readsAsCopy,
  readsAsProse,
  suggestKey,
} from "../check-untranslated-copy"

/** Shorthand: scan a .tsx snippet and return `name = "value"` strings. */
const scanTsx = (source: string): string[] =>
  findInSource("src/probe.tsx", source).map(
    (f) => `${f.name} = ${JSON.stringify(f.value)}`
  )

const finding = (overrides: Partial<Finding> = {}): Finding => ({
  file: "src/ui/Thing.tsx",
  line: 1,
  name: "label",
  value: "Save",
  kind: "jsx-attribute",
  ...overrides,
})

describe("text-bearing names", () => {
  it.each([
    "label",
    "title",
    "placeholder",
    "emptyMessage",
    "confirmLabel",
    "aria-label",
    "searchPlaceholder",
    "alt",
  ])("treats %s as copy-bearing", (name) => {
    expect(isTextBearingName(name)).toBe(true)
  })

  it.each(["onClick", "variant", "size", "href", "count"])(
    "leaves %s alone",
    (name) => {
      expect(isTextBearingName(name)).toBe(false)
    }
  )

  it("does not mistake a boolean flag for copy just because it ends in a text word", () => {
    expect(isTextBearingName("showTooltip")).toBe(false)
    expect(isTextBearingName("hasTitle")).toBe(false)
    expect(isTextBearingName("noLabel")).toBe(false)
  })
})

describe("readsAsCopy", () => {
  it.each(["Save", "Close the dialog", "Are you sure?", "AD"])(
    "accepts %s",
    (value) => {
      expect(readsAsCopy(value)).toBe(true)
    }
  )

  it.each([
    "w-6",
    "text-f1-foreground-warning",
    "cursor-text",
    "font-medium",
    "md:flex-1",
  ])("rejects the Tailwind class %s", (value) => {
    expect(readsAsCopy(value)).toBe(false)
  })

  it.each(["send", "onHover", "txt", "hide/show"])(
    "rejects the identifier %s",
    (value) => {
      expect(readsAsCopy(value)).toBe(false)
    }
  )

  it.each(["/settings", "https://example.com", "", "—", "…"])(
    "rejects %s as a non-copy value",
    (value) => {
      expect(readsAsCopy(value)).toBe(false)
    }
  )
})

describe("readsAsProse", () => {
  // The brief's own example: an arbitrary name holding obvious copy.
  it("catches lowercase prose under a meaningless name", () => {
    expect(readsAsProse("hey hey")).toBe(true)
  })

  it.each(["Good morning", "opens in new tab", "{{count}} items left"])(
    "accepts %s",
    (value) => {
      expect(readsAsProse(value)).toBe(true)
    }
  )

  it("needs more than one word, so enum members stay quiet", () => {
    expect(readsAsProse("Pending")).toBe(false)
  })

  it.each([
    "flex items-center",
    "text-sm font-medium",
    "Inter, sans-serif",
    "w-6 h-6",
    "md:flex lg:grid",
  ])("rejects %s, which is styling rather than copy", (value) => {
    expect(readsAsProse(value)).toBe(false)
  })
})

describe("findInSource", () => {
  it("flags JSX text", () => {
    expect(scanTsx("const A = () => <p>Hello there</p>")).toEqual([
      '<jsx-text> = "Hello there"',
    ])
  })

  it("flags a literal on a text-bearing JSX attribute", () => {
    expect(
      scanTsx('const A = () => <X label="Close" aria-label="Close it" />')
    ).toEqual(['label = "Close"', 'aria-label = "Close it"'])
  })

  it("flags a literal in a JSX expression container", () => {
    expect(scanTsx('const A = () => <X title={"Select all"} />')).toEqual([
      'title = "Select all"',
    ])
  })

  it("flags copy in a flat default parameter", () => {
    expect(
      scanTsx('const A = ({ label = "Actions" }) => <p>{label}</p>')
    ).toEqual(['label = "Actions"'])
  })

  it("flags prose in a default parameter whose name says nothing", () => {
    expect(
      scanTsx('const A = ({ hola = "hey hey" }) => <p>{hola}</p>')
    ).toEqual(['hola = "hey hey"'])
  })

  it("flags copy nested in objects inside arrays inside a default", () => {
    expect(
      scanTsx(
        'const A = ({ presets = [{ label: "Today", meta: { title: "Deep" } }] }) => <p />'
      )
    ).toEqual(['label = "Today"', 'title = "Deep"'])
  })

  it("flags copy in a module-level lookup table", () => {
    expect(
      scanTsx(
        'export const PRESETS = [{ id: "today", label: "Today" }, { id: "week", label: "This week" }]'
      )
    ).toEqual(['label = "Today"', 'label = "This week"'])
  })

  it("ignores interpolated templates — those cannot be a raw literal", () => {
    expect(scanTsx("const A = ({ n }) => <X label={`Page ${n}`} />")).toEqual(
      []
    )
  })

  it("ignores copy that already comes from the i18n layer", () => {
    expect(
      scanTsx(
        "const A = () => { const i18n = useI18n(); return <X label={i18n.actions.save} /> }"
      )
    ).toEqual([])
  })

  it("ignores Tailwind classes even under a text-bearing key", () => {
    expect(scanTsx('const S = { label: "w-6", text: "font-medium" }')).toEqual(
      []
    )
  })

  it("ignores CSS values inside a style declaration", () => {
    expect(
      scanTsx(
        'const A = () => <div style={{ transformOrigin: "top left", overflow: "hidden auto" }} />'
      )
    ).toEqual([])
  })

  it("ignores HTML plumbing attributes", () => {
    expect(
      scanTsx('const A = () => <a rel="noopener noreferrer" target="_blank" />')
    ).toEqual([])
  })

  it("does not look for JSX text in a .ts file", () => {
    // A .ts file parsed as TSX turns `<T>` casts and comparisons into elements,
    // and their contents into "JSX text".
    expect(
      findInSource(
        "src/util.ts",
        "const f = (a: number, b: number) => a < b && b > a"
      )
    ).toEqual([])
  })

  it("honours an i18n-exempt marker on the same line", () => {
    expect(
      scanTsx('const A = () => <X label="Factorial One" /> // i18n-exempt')
    ).toEqual([])
  })

  it("honours an i18n-exempt marker on the line above", () => {
    expect(
      scanTsx(
        'const A = () =>\n  // i18n-exempt\n  <X label="Factorial One" />'
      )
    ).toEqual([])
  })
})

describe("excluded paths", () => {
  it.each([
    "components/F0Thing/F0Thing.stories.tsx",
    "components/F0Thing/F0Thing.spec.tsx",
    "components/F0Thing/F0Thing.test.tsx",
    "components/F0Thing/__tests__/helpers.ts",
    "components/F0Thing/__storybook__/mockData.ts",
    "components/F0Thing/thing.factory.tsx",
    "sds/Home/slotRenderers.test-d.ts",
    "docs/Guide.mdx",
    "icons/app/Add.tsx",
    "mocks/people.ts",
    "lib/providers/i18n/i18n-provider-defaults.ts",
    "lib/storybook-utils/do-donts.tsx",
    "component-status/A11yRow.tsx",
    "component-status/component-status.ts",
  ])("excludes %s", (path) => {
    expect(isExcludedPath(path)).toBe(true)
  })

  it.each([
    "components/F0Thing/F0Thing.tsx",
    "ui/DatePickerPopup/presets.ts",
    "patterns/OneDataCollection/visualizations.tsx",
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
      [finding({ value: "Save" })],
      baseline({ "src/ui/Thing.tsx": ["Save"] })
    )

    expect(result.added).toEqual([])
    expect(result.fixed).toEqual({})
    expect(result.staleFiles).toEqual([])
  })

  it("blocks a string the baseline does not excuse", () => {
    const result = check(
      [finding({ value: "Save" }), finding({ value: "Discard", line: 9 })],
      baseline({ "src/ui/Thing.tsx": ["Save"] })
    )

    expect(result.added.map((f) => f.value)).toEqual(["Discard"])
  })

  it("blocks the same string appearing one extra time", () => {
    const result = check(
      [finding(), finding({ line: 2 })],
      baseline({ "src/ui/Thing.tsx": ["Save"] })
    )

    expect(result.added).toHaveLength(1)
  })

  it("blocks a baselined string copied into a different file", () => {
    const result = check(
      [finding({ file: "src/ui/Other.tsx" })],
      baseline({ "src/ui/Thing.tsx": ["Save"] })
    )

    expect(result.added.map((f) => f.file)).toEqual(["src/ui/Other.tsx"])
    expect(result.staleFiles).toEqual(["src/ui/Thing.tsx"])
  })

  it("tolerates a baselined string moving to another line", () => {
    const result = check(
      [finding({ line: 412 })],
      baseline({ "src/ui/Thing.tsx": ["Save"] })
    )

    expect(result.added).toEqual([])
    expect(result.fixed).toEqual({})
  })

  it("flags a translated string still sitting in the baseline, to lock the win in", () => {
    const result = check(
      [finding({ value: "Save" })],
      baseline({ "src/ui/Thing.tsx": ["Save", "Discard"] })
    )

    expect(result.added).toEqual([])
    expect(result.fixed).toEqual({ "src/ui/Thing.tsx": ["Discard"] })
  })

  it("flags a baseline entry for a file that is now clean", () => {
    const result = check([], baseline({ "src/ui/Gone.tsx": ["Save"] }))

    expect(result.staleFiles).toEqual(["src/ui/Gone.tsx"])
  })

  it("reports current and baseline totals", () => {
    const result = check(
      [finding(), finding({ value: "Discard", line: 2 })],
      baseline({ "src/ui/Thing.tsx": ["Save"] })
    )

    expect(result.total).toBe(2)
    expect(result.baselineTotal).toBe(1)
  })
})

describe("buildDebtFile", () => {
  it("groups by file, sorts values, and totals the findings", () => {
    const debt = buildDebtFile([
      finding({ file: "src/b.tsx", value: "Zebra" }),
      finding({ file: "src/a.tsx", value: "Beta" }),
      finding({ file: "src/a.tsx", value: "Alpha" }),
    ])

    expect(Object.keys(debt.files)).toEqual(["src/a.tsx", "src/b.tsx"])
    expect(debt.files["src/a.tsx"]).toEqual(["Alpha", "Beta"])
    expect(debt.total).toBe(3)
  })

  it("round-trips: a freshly built baseline accepts its own findings", () => {
    const findings = [finding(), finding({ value: "Discard", line: 2 })]

    expect(check(findings, buildDebtFile(findings)).added).toEqual([])
  })
})

describe("suggesting an existing key", () => {
  const index = new Map([
    ["close", ["actions.close", "chat.closePreview"]],
    ["last 7 days", ["date.presets.last7Days"]],
    ["next", ["ai.clarifyingQuestion.next", "navigation.next"]],
    ["back", ["chat.back", "ai.clarifyingQuestion.back"]],
  ])

  it("finds a key whose English matches, case-insensitively", () => {
    expect(suggestKey("Close", index)).toEqual({
      key: "actions.close",
      generic: true,
    })
    expect(suggestKey("last 7 DAYS", index)).toEqual({
      key: "date.presets.last7Days",
      generic: false,
    })
  })

  it("prefers a shared namespace over a deeper feature key", () => {
    // Depth alone picked wizard.previous for a date navigator.
    expect(suggestKey("Next", index)).toEqual({
      key: "navigation.next",
      generic: true,
    })
  })

  it("marks a feature-scoped key as not safe to borrow", () => {
    expect(suggestKey("Back", index)).toEqual({
      key: "chat.back",
      generic: false,
    })
  })

  it("returns nothing for a string the dictionary has never seen", () => {
    expect(suggestKey("Nothing here yet", index)).toBeUndefined()
  })

  // Reads the real dictionary but not the source tree: buildKeyIndex only walks
  // a plain object, so this stays in the millisecond range. Scanning src/ here
  // instead cost ~1.6s locally and timed out under CI's coverage run.
  it("attaches keys from the shipped dictionary", () => {
    const [close, novel] = attachExistingKeys([
      finding({ value: "Close" }),
      finding({ value: "Nothing here yet" }),
    ])

    expect(close.existingKey).toBe("actions.close")
    expect(novel.existingKey).toBeUndefined()
  })

  it("indexes the shipped dictionary by English value", () => {
    const real = buildKeyIndex()

    expect(real.get("save")).toContain("actions.save")
    // Nested and pluralised keys must be reachable too.
    expect(real.get("last 7 days")).toContain("date.presets.last7Days")
  })
})

describe("CI surfaces", () => {
  const added = (over: Partial<Finding> = {}): Finding =>
    finding({ file: "src/ui/Lane/Lane.tsx", line: 19, ...over })

  it("anchors the annotation to the repo-relative path and line", () => {
    const [line] = annotations([added()])

    expect(line).toContain("::error file=packages/react/src/ui/Lane/Lane.tsx,")
    expect(line).toContain("line=19,")
    expect(line).toContain("title=Untranslated copy::")
  })

  // A newline mid-annotation would truncate it and GitHub would drop the rest,
  // so wrapped JSX text has to survive capture as a single line.
  it("stays on one line even when the source string spans several", () => {
    const wrapped = findInSource(
      "src/probe.tsx",
      "const A = () => <p>\n  A sentence that the formatter\n  wrapped over lines.\n</p>"
    )

    expect(wrapped).toHaveLength(1)
    expect(annotations(wrapped)[0].split("\n")).toHaveLength(1)
  })

  it("names a shared key in the annotation as a straight swap", () => {
    const [line] = annotations([
      added({
        value: "Close",
        existingKey: "actions.close",
        existingKeyIsGeneric: true,
      }),
    ])

    expect(line).toContain("actions.close")
    expect(line).toContain("A shared key already exists")
  })

  it("hedges when the only match is in another feature's namespace", () => {
    const [line] = annotations([
      added({
        value: "Back",
        existingKey: "chat.back",
        existingKeyIsGeneric: false,
      }),
    ])

    expect(line).toContain("chat.back")
    expect(line).toContain("another feature's namespace")
    // Must not read as an instruction to just use it.
    expect(line).not.toContain("A shared key already exists")
  })

  it("tells you to write a key when none exists", () => {
    expect(fixHint(added({ value: "Nothing here yet" }))).toContain("Add a key")
  })

  it("splits the comment three ways by how reusable the key is", () => {
    const md = commentMarkdown({
      added: [
        added({
          value: "Close",
          existingKey: "actions.close",
          existingKeyIsGeneric: true,
        }),
        added({
          value: "Back",
          existingKey: "chat.back",
          existingKeyIsGeneric: false,
        }),
        added({ value: "Nothing here yet", name: "emptyMessage", line: 18 }),
      ],
      fixed: {},
      staleFiles: [],
      total: 161,
      baselineTotal: 158,
    })

    expect(md).toContain("3 untranslated strings added")
    expect(md).toContain("1 can reuse a shared key")
    expect(md).toContain("`actions.close`")
    expect(md).toContain("1 already translated in another feature")
    expect(md).toContain("`chat.back`")
    expect(md).toContain("1 needs a new key")
    expect(md).toContain("`emptyMessage`")
    // The escape hatch must be discoverable from the comment alone.
    expect(md).toContain("i18n-exempt")
  })

  it("posts a passing comment when the PR adds nothing", () => {
    const md = commentMarkdown({
      added: [],
      fixed: {},
      staleFiles: [],
      total: 158,
      baselineTotal: 158,
    })

    expect(md).toContain("No untranslated copy added")
    expect(md).not.toContain("|")
  })
})
