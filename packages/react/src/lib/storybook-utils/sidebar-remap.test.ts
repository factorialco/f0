import { describe, expect, it } from "vitest"

import {
  buildRemapTest,
  remapTitle,
  resolveRemapSection,
  SIDEBAR_REMAP,
  type SidebarRemapRule,
} from "./sidebar-remap"

// Fixture rules exercise the mechanism without relying on any shipped edits.
const RULES: SidebarRemapRule[] = [
  {
    pattern: /\/components\/F0Button\/.*\.stories\.[jt]sx?$/,
    section: "Experimental",
  },
  { pattern: /\/patterns\/F0Foo\/.*\.stories\.[jt]sx?$/, section: "Kits" },
]

const buttonStory =
  "/Users/x/code/f0/packages/react/src/components/F0Button/__stories__/F0Button.stories.tsx"

describe("resolveRemapSection", () => {
  it("returns the mapped section for a matching story path", () => {
    expect(resolveRemapSection(buttonStory, RULES)).toBe("Experimental")
  })

  it("returns undefined for a non-matching path", () => {
    const other =
      "/Users/x/code/f0/packages/react/src/components/F0Card/__stories__/F0Card.stories.tsx"
    expect(resolveRemapSection(other, RULES)).toBeUndefined()
  })

  it("does not match the .mdx docs file (only .stories files are remapped)", () => {
    const mdx =
      "/Users/x/code/f0/packages/react/src/components/F0Button/__stories__/F0Button.mdx"
    expect(resolveRemapSection(mdx, RULES)).toBeUndefined()
  })

  it("normalises Windows-style backslash paths", () => {
    const win =
      "C:\\code\\f0\\packages\\react\\src\\components\\F0Button\\__stories__\\F0Button.stories.tsx"
    expect(resolveRemapSection(win, RULES)).toBe("Experimental")
  })

  it("uses the first matching rule when several could apply", () => {
    const foo =
      "/Users/x/code/f0/packages/react/src/patterns/F0Foo/F0Foo.stories.ts"
    expect(resolveRemapSection(foo, RULES)).toBe("Kits")
  })
})

describe("remapTitle", () => {
  it("replaces the physical section segment with the mapped one", () => {
    expect(remapTitle("Components/Button/Button", "Experimental")).toBe(
      "Experimental/Button/Button"
    )
  })

  it("replaces only the first segment, preserving the rest of the path", () => {
    expect(remapTitle("Components/Foo/Bar/Baz", "SDS")).toBe("SDS/Foo/Bar/Baz")
  })

  it("supports mapping to a nested section path", () => {
    expect(
      remapTitle("Patterns/FilterPicker", "Patterns & Layout/Patterns")
    ).toBe("Patterns & Layout/Patterns/FilterPicker")
  })

  it("handles a single-segment title (maps the whole title under the section)", () => {
    expect(remapTitle("Button", "Experimental")).toBe("Experimental")
  })
})

describe("buildRemapTest", () => {
  it("matches every file covered by the rules", () => {
    const test = buildRemapTest(RULES)
    expect(test.test(buttonStory)).toBe(true)
    expect(test.test("/x/src/patterns/F0Foo/F0Foo.stories.tsx")).toBe(true)
  })

  it("does not match unrelated story files", () => {
    const test = buildRemapTest(RULES)
    expect(test.test("/x/src/components/F0Card/F0Card.stories.tsx")).toBe(false)
  })
})

describe("SIDEBAR_REMAP (shipped, intentionally empty)", () => {
  it("ships with no rules, so the indexer is a no-op", () => {
    expect(SIDEBAR_REMAP).toEqual([])
    expect(resolveRemapSection(buttonStory)).toBeUndefined()
  })

  it("builds a never-match test when there are no rules", () => {
    expect(buildRemapTest([]).test(buttonStory)).toBe(false)
  })
})
