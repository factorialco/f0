import { describe, expect, it } from "vitest"

import {
  buildMarkdown,
  componentDirOf,
  isAffected,
  type StoryViolations,
} from "../check-a11y-comment"

const cardTodo: StoryViolations = {
  id: "components-card--default",
  title: "Components/Card",
  name: "Default",
  file: "src/components/F0Card/__stories__/Card.stories.tsx",
  mode: "todo",
  rules: [
    {
      id: "target-size",
      impact: "serious",
      nodes: 4,
      sc: "2.5.8",
      level: "AA",
      version: "2.2",
    },
  ],
}

const selectError: StoryViolations = {
  id: "components-select--default",
  title: "Components/Select",
  name: "Default",
  file: "src/components/F0Select/__stories__/F0Select.stories.tsx",
  mode: "error",
  rules: [
    {
      id: "button-name",
      impact: "critical",
      nodes: 1,
      sc: "4.1.2",
      level: "A",
      version: "2.0",
    },
  ],
}

describe("componentDirOf", () => {
  it("maps a __stories__ file to the component folder", () => {
    expect(componentDirOf(cardTodo.file)).toBe("src/components/F0Card")
  })
  it("maps a co-located story to its own folder", () => {
    expect(componentDirOf("src/patterns/F0Form/index.stories.tsx")).toBe(
      "src/patterns/F0Form"
    )
  })
})

describe("isAffected", () => {
  it("is true when the component folder changed", () => {
    const changed = new Set(["src/components/F0Card"])
    expect(isAffected(cardTodo, changed)).toBe(true)
    expect(isAffected(selectError, changed)).toBe(false)
  })
})

describe("buildMarkdown", () => {
  it("renders the clean state with the scope note", () => {
    const md = buildMarkdown([])
    expect(md).toContain("✅ No a11y issues in the stories this PR changed")
    expect(md).toContain("base-vs-head delta") // future-improvements note
  })

  it("lists issues with WCAG mapping and mode, and flags blocking count", () => {
    const md = buildMarkdown([cardTodo, selectError])
    expect(md).toContain("2 issues") // total rules
    expect(md).toContain("2 stories")
    expect(md).toContain("1 blocking")
    // rule → WCAG mapping + mode badges
    expect(md).toContain("`target-size`")
    expect(md).toContain("WCAG 2.5.8 AA (2.2)")
    expect(md).toContain("🟡 `todo`")
    expect(md).toContain("`button-name`")
    expect(md).toContain("WCAG 4.1.2 A (2.0)")
    expect(md).toContain("🔴 `error`")
  })

  it("says all non-blocking when there are no error-mode stories", () => {
    const md = buildMarkdown([cardTodo])
    expect(md).toContain("all non-blocking")
  })
})
