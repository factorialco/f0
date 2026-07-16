import { describe, expect, test } from "vitest"

import {
  evaluateComponentStatus,
  getAllComponentStatuses,
  getComponentStatus,
  STABLE_REQUIREMENTS,
  type ComponentEntry,
  type DocQuality,
} from "./component-status"

function entry(overrides: Partial<ComponentEntry> = {}): ComponentEntry {
  return {
    name: "Example",
    zone: "components",
    apiStatus: "experimental",
    tags: ["experimental"],
    hasStories: true,
    hasUnitTests: true,
    hasMdxDocs: true,
    docQuality: "gold" as DocQuality,
    storyFile: "components/F0Example/__stories__/F0Example.stories.tsx",
    ...overrides,
  }
}

describe("evaluateComponentStatus", () => {
  test("a component that clears every requirement meets the bar", () => {
    const status = evaluateComponentStatus(
      entry({ apiStatus: "stable", tags: ["stable"] })
    )
    expect(status.meetsBar).toBe(true)
    expect(status.missing).toEqual([])
    expect(status.stableReady).toBe(true)
    expect(status.discrepancy).toBeNull()
    expect(status.requirements.every((r) => r.met)).toBe(true)
  })

  test("lists exactly the unmet requirements in `missing`", () => {
    const status = evaluateComponentStatus(
      entry({ hasUnitTests: false, hasMdxDocs: false, docQuality: "none" })
    )
    expect(status.meetsBar).toBe(false)
    expect(status.missing).toEqual([
      "Has unit tests",
      "Has MDX documentation",
      'Docs reach "acceptable" quality',
    ])
  })

  test("docQuality below the minimum tier fails only the quality requirement", () => {
    const status = evaluateComponentStatus(entry({ docQuality: "stub" }))
    expect(status.missing).toEqual(['Docs reach "acceptable" quality'])
  })

  test("acceptable is the minimum passing doc tier", () => {
    expect(
      evaluateComponentStatus(entry({ docQuality: "acceptable" })).missing
    ).toEqual([])
  })

  test("flags a component tagged stable that is below the bar", () => {
    const status = evaluateComponentStatus(
      entry({
        apiStatus: "stable",
        tags: ["stable"],
        hasMdxDocs: false,
        docQuality: "none",
      })
    )
    expect(status.taggedStable).toBe(true)
    expect(status.meetsBar).toBe(false)
    expect(status.discrepancy).toBe("tagged-but-below-bar")
  })

  test("flags a component that meets the bar but is not tagged stable", () => {
    const status = evaluateComponentStatus(
      entry({ apiStatus: "experimental", tags: ["experimental"] })
    )
    expect(status.meetsBar).toBe(true)
    expect(status.taggedStable).toBe(false)
    expect(status.discrepancy).toBe("meets-bar-not-tagged")
  })

  test("no discrepancy when an experimental component is also below the bar", () => {
    const status = evaluateComponentStatus(
      entry({ apiStatus: "experimental", hasUnitTests: false })
    )
    expect(status.discrepancy).toBeNull()
  })
})

describe("getComponentStatus (name matching)", () => {
  const dataset: ComponentEntry[] = [
    entry({
      name: "Alert",
      zone: "components",
      apiStatus: "stable",
      tags: ["stable"],
    }),
    entry({ name: "Avatars/Avatar", zone: "components" }),
    entry({ name: "Button", zone: "sds" }),
    entry({
      name: "Button",
      zone: "components",
      apiStatus: "stable",
      tags: ["stable"],
    }),
  ]

  test.each([["Alert"], ["alert"], ["F0Alert"], ["f0alert"]])(
    "matches %s regardless of case and F0 prefix",
    (query) => {
      expect(getComponentStatus(query, dataset)?.name).toBe("Alert")
    }
  )

  test("matches a grouped name by its leaf segment", () => {
    expect(getComponentStatus("Avatar", dataset)?.name).toBe("Avatars/Avatar")
  })

  test("prefers the components-zone entry when a name is ambiguous", () => {
    expect(getComponentStatus("Button", dataset)?.zone).toBe("components")
  })

  test("resolves a fully-qualified Storybook title to its exact entry", () => {
    const withGrouped: ComponentEntry[] = [
      ...dataset,
      entry({ name: "Data Collection/Visualizations/Card", zone: "patterns" }),
      entry({ name: "Card", zone: "components", apiStatus: "stable" }),
    ]
    // The exact full title must win over the bare-leaf "Card" in components.
    expect(
      getComponentStatus("Data Collection/Visualizations/Card", withGrouped)
    ).toMatchObject({
      name: "Data Collection/Visualizations/Card",
      zone: "patterns",
    })
  })

  test("resolves a prefixed title (e.g. Components/F0Alert) by its leaf", () => {
    expect(getComponentStatus("Components/F0Alert", dataset)?.name).toBe(
      "Alert"
    )
  })

  test("returns null for an unknown name", () => {
    expect(getComponentStatus("DoesNotExist", dataset)).toBeNull()
  })

  test("returns null for an empty query", () => {
    expect(getComponentStatus("", dataset)).toBeNull()
  })
})

describe("getAllComponentStatuses", () => {
  test("evaluates every entry in the provided dataset", () => {
    const dataset = [
      entry({ name: "A", apiStatus: "stable", tags: ["stable"] }),
      entry({ name: "B", hasMdxDocs: false, docQuality: "none" }),
    ]
    const all = getAllComponentStatuses(dataset)
    expect(all.map((c) => c.name)).toEqual(["A", "B"])
    expect(all[0].meetsBar).toBe(true)
    expect(all[1].meetsBar).toBe(false)
  })

  test("defaults to the build-time dataset when none is passed", () => {
    // Integration smoke test: the virtual module resolves and yields entries.
    const all = getAllComponentStatuses()
    expect(Array.isArray(all)).toBe(true)
    expect(all.length).toBeGreaterThan(0)
  })
})

describe("STABLE_REQUIREMENTS", () => {
  test("is the checklist of stories, tests, docs, and doc quality", () => {
    expect(STABLE_REQUIREMENTS.map((r) => r.key)).toEqual([
      "stories",
      "unitTests",
      "mdxDocs",
      "docQuality",
    ])
  })
})
