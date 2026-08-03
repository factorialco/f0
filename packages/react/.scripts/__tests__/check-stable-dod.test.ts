import { describe, expect, it } from "vitest"

import { check } from "../check-stable-dod"

/**
 * Minimal status entry. Defaults clear every mechanical DoD requirement, so each
 * test only has to express the one thing it wants to be wrong.
 */
function entry(overrides: Partial<Record<string, unknown>> = {}) {
  return {
    name: "Widget",
    zone: "components",
    apiStatus: "stable",
    hasStories: true,
    hasUnitTests: true,
    hasPlayFunction: true,
    hasSnapshot: true,
    hasMdxDocs: true,
    docQuality: "good",
    a11yTier: "enforced",
    storyFile: "src/components/F0Widget/__stories__/F0Widget.stories.tsx",
    ...overrides,
  } as Parameters<typeof check>[0][number]
}

describe("check-stable-dod ratchet", () => {
  it("passes a stable-tagged component that meets the full bar", () => {
    const result = check([entry()], [])

    expect(result.passing.map((c) => c.name)).toEqual(["Widget"])
    expect(result.unlisted).toEqual([])
    expect(result.graduated).toEqual([])
    expect(result.stale).toEqual([])
  })

  it("fails a below-bar component that is not on the debt list", () => {
    const result = check([entry({ a11yTier: "todo" })], [])

    expect(result.unlisted.map((c) => c.name)).toEqual(["Widget"])
    expect(result.remaining).toEqual([])
  })

  it("excuses a below-bar component that is on the debt list", () => {
    const result = check([entry({ a11yTier: "todo" })], ["Widget"])

    expect(result.unlisted).toEqual([])
    expect(result.remaining).toEqual(["Widget"])
  })

  it("flags a listed component that now meets the bar, so the win gets locked in", () => {
    const result = check([entry()], ["Widget"])

    expect(result.graduated).toEqual(["Widget"])
    expect(result.remaining).toEqual([])
  })

  it("flags debt entries that no longer match a stable-tagged component", () => {
    const result = check([entry()], ["Widget", "RemovedThing"])

    expect(result.stale).toEqual(["RemovedThing"])
  })

  it("ignores components that are not tagged stable", () => {
    const result = check(
      [entry({ apiStatus: "experimental", a11yTier: "todo" })],
      []
    )

    expect(result.unlisted).toEqual([])
    expect(result.passing).toEqual([])
  })

  it.each([
    ["stories", { hasStories: false }],
    ["unit tests", { hasUnitTests: false }],
    ["play function", { hasPlayFunction: false }],
    ["snapshot story", { hasSnapshot: false }],
    ["MDX docs", { hasMdxDocs: false }],
    ["docs below the good tier", { docQuality: "acceptable" }],
    ["axe only at todo", { a11yTier: "todo" }],
    ["axe skipped", { a11yTier: "skipped" }],
  ])("treats %s as below the bar", (_label, override) => {
    const result = check([entry(override)], [])

    expect(result.unlisted).toHaveLength(1)
    expect(result.passing).toEqual([])
  })

  it("accepts the gold doc tier as clearing the good-tier requirement", () => {
    const result = check([entry({ docQuality: "gold" })], [])

    expect(result.passing).toHaveLength(1)
  })
})
