import { describe, expect, it } from "vitest"

import {
  extractAriaSurface,
  nodeKey,
  parseNodeHeader,
} from "../../src/lib/storybook-utils/ariaSurface"
import {
  buildMarkdown,
  countBreaking,
  diffStory,
  diffSurfaces,
  pairRenames,
  readSnapshots,
  type StorySnapshot,
} from "../check-aria-surface"

const story = (
  id: string,
  nodes: Record<string, number>,
  overrides: Partial<StorySnapshot> = {}
): StorySnapshot => ({
  id,
  title: "Components/InputField",
  name: "Default",
  file: "src/components/F0InputField/__stories__/F0InputField.stories.tsx",
  nodes,
  ...overrides,
})

describe("parseNodeHeader", () => {
  it("parses a bare role", () => {
    expect(parseNodeHeader("button")).toEqual({
      role: "button",
      name: null,
      level: null,
    })
  })

  it("parses role + accessible name", () => {
    expect(parseNodeHeader('button "Clear"')).toEqual({
      role: "button",
      name: "Clear",
      level: null,
    })
  })

  it("keeps the heading level, which getByRole can filter on", () => {
    expect(parseNodeHeader('heading "Settings" [level=2]')).toEqual({
      role: "heading",
      name: "Settings",
      level: 2,
    })
  })

  it("ignores state attributes that are not part of the query identity", () => {
    expect(parseNodeHeader('checkbox "Remember me" [checked]')).toEqual({
      role: "checkbox",
      name: "Remember me",
      level: null,
    })
  })

  it("handles a trailing colon introducing children", () => {
    expect(parseNodeHeader('navigation "breadcrumb":')).toEqual({
      role: "navigation",
      name: "breadcrumb",
      level: null,
    })
  })

  it("decodes a YAML single-quoted header with an escaped apostrophe", () => {
    expect(parseNodeHeader(`'button "It''s here"'`)).toEqual({
      role: "button",
      name: "It's here",
      level: null,
    })
  })

  it("unescapes backslash escapes inside the name", () => {
    expect(parseNodeHeader('button "Say \\"hi\\""')).toEqual({
      role: "button",
      name: 'Say "hi"',
      level: null,
    })
  })

  it("drops text entries — content, not a queryable role", () => {
    expect(parseNodeHeader("text: Some copy")).toBeNull()
  })

  it("returns null rather than throwing on junk", () => {
    expect(parseNodeHeader("")).toBeNull()
    expect(parseNodeHeader("   ")).toBeNull()
    expect(parseNodeHeader("|")).toBeNull()
    expect(parseNodeHeader("'unterminated")).toBeNull()
  })
})

describe("nodeKey", () => {
  it("renders the key the way the node would be queried", () => {
    expect(nodeKey({ role: "button", name: "Clear", level: null })).toBe(
      'button "Clear"'
    )
    expect(nodeKey({ role: "textbox", name: null, level: null })).toBe(
      "textbox"
    )
    expect(nodeKey({ role: "heading", name: "Title", level: 1 })).toBe(
      'heading "Title" [level=1]'
    )
  })
})

describe("extractAriaSurface", () => {
  /**
   * Verbatim output of `page.locator("body").ariaSnapshot()` on Playwright
   * 1.57 — captured from a real chromium run, not hand-written, because the
   * parser is only as good as its grip on this format. Three things here were
   * not obvious and are the reason this fixture is pinned:
   *
   *   - `- /url: "#"` — link targets are emitted as their own entries with a
   *     leading slash, so they must not parse as a role.
   *   - `- button "Clear": x` — the trailing `: x` is the element's text
   *     content, not part of the name.
   *   - names are always double-quoted with backslash escapes
   *     (`"Say \\"hi\\""`); an apostrophe needs no special handling.
   */
  const snapshot = `- banner:
  - heading "Dashboard" [level=1]
- main:
  - text: Email
  - textbox "Email"
  - button "Clear": x
  - button "Clear": x
  - button "It's here": "y"
  - button "Say \\"hi\\"": z
  - link "Docs":
    - /url: "#"
  - heading "Sub" [level=3]
  - paragraph: Some prose
  - checkbox "Remember me" [checked]
  - text: Remember me
  - navigation "breadcrumb":
    - list:
      - listitem:
        - link "Home":
          - /url: "#"
  - button "Increase": +
  - list:
    - listitem: plain item
  - textbox "Notes"
  - combobox "Country":
    - option "ES" [selected]
`

  it("counts occurrences rather than de-duplicating", () => {
    // Two identically named buttons is exactly what a getAllByRole length
    // assertion depends on, so the count has to survive.
    expect(extractAriaSurface(snapshot)['button "Clear"']).toBe(2)
  })

  it("extracts the whole surface of a real snapshot", () => {
    expect(extractAriaSurface(snapshot)).toEqual({
      banner: 1,
      'heading "Dashboard" [level=1]': 1,
      main: 1,
      'textbox "Email"': 1,
      'button "Clear"': 2,
      'button "It\'s here"': 1,
      'button "Say "hi""': 1,
      'link "Docs"': 1,
      'heading "Sub" [level=3]': 1,
      'checkbox "Remember me"': 1,
      'navigation "breadcrumb"': 1,
      'link "Home"': 1,
      'button "Increase"': 1,
      'textbox "Notes"': 1,
      'combobox "Country"': 1,
      'option "ES"': 1,
    })
  })

  it("omits unnamed structural noise and non-role entries", () => {
    const surface = extractAriaSurface(snapshot)
    expect(surface.paragraph).toBeUndefined()
    expect(surface.list).toBeUndefined()
    expect(surface.listitem).toBeUndefined()
    expect(surface.text).toBeUndefined()
    // `- /url: "#"` must not be mistaken for a role.
    expect(Object.keys(surface).some((k) => k.includes("url"))).toBe(false)
  })

  it("does not fold an element's text content into its name", () => {
    // `- button "Increase": +` — the `+` is content, not part of the name.
    expect(extractAriaSurface(snapshot)['button "Increase"']).toBe(1)
  })

  it("returns an empty surface for an empty snapshot", () => {
    expect(extractAriaSurface("")).toEqual({})
  })
})

describe("diffStory", () => {
  it("returns null when the surface is unchanged", () => {
    const s = { 'button "Clear"': 1 }
    expect(diffStory(story("a", s), story("a", s))).toBeNull()
  })

  it("flags a disappeared role+name pair as removed", () => {
    const d = diffStory(
      story("a", { 'button "Clear"': 1, textbox: 1 }),
      story("a", { textbox: 1 })
    )
    expect(d?.removed).toEqual([{ key: 'button "Clear"', before: 1, after: 0 }])
    expect(d?.added).toEqual([])
  })

  it("flags a reduced count — the getAllByRole break", () => {
    const d = diffStory(
      story("a", { 'button "Remove"': 3 }),
      story("a", { 'button "Remove"': 1 })
    )
    expect(d?.removed).toEqual([
      { key: 'button "Remove"', before: 3, after: 1 },
    ])
  })

  it("treats a purely additive change as non-breaking", () => {
    const d = diffStory(story("a", {}), story("a", { 'button "New"': 1 }))
    expect(d?.removed).toEqual([])
    expect(d?.added).toEqual([{ key: 'button "New"', before: 0, after: 1 }])
    expect(
      countBreaking({
        changed: [d!],
        deletedStories: [],
        newStories: [],
        baseStories: 1,
        headStories: 1,
      })
    ).toBe(0)
  })

  it("pairs a same-role removal + addition into a rename", () => {
    const d = diffStory(
      story("a", { 'button "Clear"': 1 }),
      story("a", { 'button "Clear input"': 1 })
    )
    expect(d?.renamed).toEqual([
      {
        role: "button",
        before: 'button "Clear"',
        after: 'button "Clear input"',
      },
    ])
    expect(d?.removed).toEqual([])
    expect(d?.added).toEqual([])
  })

  it("catches a role change with the name held constant", () => {
    const d = diffStory(
      story("a", { 'button "Save"': 1 }),
      story("a", { 'link "Save"': 1 })
    )
    expect(d?.renamed).toEqual([])
    expect(d?.removed).toEqual([{ key: 'button "Save"', before: 1, after: 0 }])
    expect(d?.added).toEqual([{ key: 'link "Save"', before: 0, after: 1 }])
  })

  it("catches a heading level change", () => {
    const d = diffStory(
      story("a", { 'heading "Title" [level=3]': 1 }),
      story("a", { 'heading "Title" [level=2]': 1 })
    )
    expect(d?.renamed).toHaveLength(1)
  })
})

describe("pairRenames", () => {
  it("leaves ambiguous multi-rename cases split rather than guessing", () => {
    const removed = [
      { key: 'button "A"', before: 1, after: 0 },
      { key: 'button "B"', before: 1, after: 0 },
    ]
    const added = [
      { key: 'button "C"', before: 0, after: 1 },
      { key: 'button "D"', before: 0, after: 1 },
    ]
    const out = pairRenames(removed, added)
    expect(out.renamed).toEqual([])
    expect(out.removed).toHaveLength(2)
    expect(out.added).toHaveLength(2)
  })

  it("does not pair when the counts don't line up", () => {
    const out = pairRenames(
      [{ key: 'button "A"', before: 3, after: 0 }],
      [{ key: 'button "B"', before: 0, after: 1 }]
    )
    expect(out.renamed).toEqual([])
  })
})

describe("diffSurfaces", () => {
  it("separates new stories from changed ones", () => {
    const result = diffSurfaces(
      [story("a", { 'button "X"': 1 })],
      [story("a", { 'button "X"': 1 }), story("b", { 'button "Y"': 1 })]
    )
    expect(result.changed).toEqual([])
    expect(result.newStories.map((s) => s.id)).toEqual(["b"])
    expect(countBreaking(result)).toBe(0)
  })

  it("counts a deleted story as breaking", () => {
    const result = diffSurfaces([story("a", { button: 1 })], [])
    expect(result.deletedStories.map((s) => s.id)).toEqual(["a"])
    expect(countBreaking(result)).toBe(1)
  })
})

describe("readSnapshots", () => {
  it("returns an empty list for a missing path", () => {
    expect(readSnapshots(null)).toEqual([])
    expect(readSnapshots("/nonexistent/aria-snapshots.jsonl")).toEqual([])
  })
})

describe("buildMarkdown", () => {
  const empty = {
    changed: [],
    deletedStories: [],
    newStories: [],
    baseStories: 10,
    headStories: 10,
  }

  it("explains itself when there is no baseline", () => {
    const md = buildMarkdown(empty, { hasBaseline: false })
    expect(md).toContain("No baseline found")
    expect(md).not.toContain("No accessible name or role changed")
  })

  it("reports a clean run", () => {
    const md = buildMarkdown(empty, { hasBaseline: true })
    expect(md).toContain("✅ No accessible name or role changed across 10")
  })

  it("blames the run, not the PR, when head captured nothing", () => {
    const md = buildMarkdown(
      { ...empty, headStories: 0 },
      { hasBaseline: true, hasHead: false }
    )
    expect(md).toContain("produced no aria snapshots")
    expect(md).not.toContain("no longer exist")
  })

  it("warns and withholds deletions on a partial run", () => {
    const md = buildMarkdown(empty, { hasBaseline: true, partial: true })
    expect(md).toContain("did not finish")
    expect(md).toContain("not** reported")
  })

  it("puts breaking changes in the visible table, additive behind a details", () => {
    const md = buildMarkdown(
      {
        ...empty,
        changed: [
          {
            id: "a",
            title: "Components/InputField",
            name: "Default",
            file: "f.tsx",
            removed: [{ key: 'button "Clear"', before: 1, after: 0 }],
            added: [],
            renamed: [],
          },
          {
            id: "b",
            title: "Components/Card",
            name: "Default",
            file: "g.tsx",
            removed: [],
            added: [{ key: 'button "More"', before: 0, after: 1 }],
            renamed: [],
          },
        ],
      },
      { hasBaseline: true }
    )
    expect(md).toContain("Could break a query")
    expect(md).toContain('`button "Clear"`')
    expect(md).toContain("<details>")
    expect(md).toContain('`button "More"`')
    expect(md).toContain("1 change that could break")
    // The additive-only story must not inflate the breaking-scope count.
    expect(md).toContain("across **1 story**")
  })

  it("renders a rename as a single before/after row", () => {
    const md = buildMarkdown(
      {
        ...empty,
        changed: [
          {
            id: "a",
            title: "Components/InputField",
            name: "Default",
            file: "f.tsx",
            removed: [],
            added: [],
            renamed: [
              {
                role: "button",
                before: 'button "Clear"',
                after: 'button "Clear input"',
              },
            ],
          },
        ],
      },
      { hasBaseline: true }
    )
    expect(md).toContain("🔁 renamed")
    expect(md).toContain('`button "Clear"` | `button "Clear input"`')
  })
})
