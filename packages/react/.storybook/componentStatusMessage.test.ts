import { describe, expect, test } from "vitest"

import {
  evaluateComponentStatus,
  type ComponentEntry,
} from "@/component-status"

import { describeStatus, showsChecklist } from "./componentStatusMessage"

function status(overrides: Partial<ComponentEntry> = {}) {
  return evaluateComponentStatus({
    name: "Example",
    zone: "components",
    apiStatus: "experimental",
    tags: ["experimental"],
    hasStories: true,
    hasUnitTests: true,
    hasMdxDocs: true,
    docQuality: "gold",
    storyFile: "x.stories.tsx",
    ...overrides,
  })
}

describe("describeStatus", () => {
  test("stable + meets bar", () => {
    expect(
      describeStatus(status({ apiStatus: "stable", tags: ["stable"] }))
    ).toMatch(/meets the definition of done/i)
  })

  test("tagged stable but below the bar", () => {
    expect(
      describeStatus(
        status({
          apiStatus: "stable",
          tags: ["stable"],
          hasMdxDocs: false,
          docQuality: "none",
        })
      )
    ).toMatch(/tagged stable, but the checklist/i)
  })

  test("meets the bar but not tagged stable", () => {
    expect(describeStatus(status({ apiStatus: "experimental" }))).toMatch(
      /ready to be promoted to stable/i
    )
  })

  test("experimental and below the bar", () => {
    expect(
      describeStatus(status({ apiStatus: "experimental", hasUnitTests: false }))
    ).toMatch(/^experimental/i)
  })

  test("untagged (unknown) and below the bar", () => {
    expect(
      describeStatus(
        status({ apiStatus: "unknown", tags: [], hasUnitTests: false })
      )
    ).toMatch(/no maturity tag/i)
  })

  test("deprecated and internal have their own messages", () => {
    expect(
      describeStatus(status({ apiStatus: "deprecated", tags: ["deprecated"] }))
    ).toMatch(/deprecated/i)
    expect(
      describeStatus(status({ apiStatus: "internal", tags: ["internal"] }))
    ).toMatch(/internal/i)
  })
})

describe("showsChecklist", () => {
  test("shown for stable / experimental / unknown", () => {
    expect(showsChecklist(status({ apiStatus: "stable" }))).toBe(true)
    expect(showsChecklist(status({ apiStatus: "experimental" }))).toBe(true)
    expect(showsChecklist(status({ apiStatus: "unknown" }))).toBe(true)
  })

  test("hidden for deprecated / internal", () => {
    expect(showsChecklist(status({ apiStatus: "deprecated" }))).toBe(false)
    expect(showsChecklist(status({ apiStatus: "internal" }))).toBe(false)
  })
})
