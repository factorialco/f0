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
    hasPlayFunction: true,
    hasMdxDocs: true,
    docQuality: "gold" as DocQuality,
    docSignals: {
      sectionsCount: 3,
      hasProps: true,
      hasWhenToUse: true,
      hasWhenNotToUse: true,
      hasDoDonts: true,
      exampleCount: 4,
    },
    storyFile: "components/F0Example/__stories__/F0Example.stories.tsx",
    ...overrides,
  }
}

describe("evaluateComponentStatus", () => {
  test("a component that clears every requirement meets the bar and is stable", () => {
    const status = evaluateComponentStatus(
      entry({ apiStatus: "stable", tags: ["stable"] })
    )
    expect(status.meetsBar).toBe(true)
    expect(status.missing).toEqual([])
    expect(status.stableReady).toBe(true)
    expect(status.discrepancy).toBeNull()
    expect(status.effectiveStatus).toBe("stable")
    expect(status.requirements.every((r) => r.met)).toBe(true)
  })

  test("lists exactly the unmet requirements in `missing`", () => {
    const status = evaluateComponentStatus(
      entry({
        hasUnitTests: false,
        hasPlayFunction: false,
        hasMdxDocs: false,
        docQuality: "none",
      })
    )
    expect(status.meetsBar).toBe(false)
    expect(status.missing).toEqual([
      "Has unit tests",
      "Has a play function",
      "Has MDX documentation",
      'Docs reach "good" quality',
    ])
  })

  test("docQuality below the minimum tier fails only the quality requirement", () => {
    const status = evaluateComponentStatus(entry({ docQuality: "acceptable" }))
    expect(status.missing).toEqual(['Docs reach "good" quality'])
  })

  test("the docQuality requirement enumerates concrete criteria with per-criterion checks", () => {
    // A gold-signal component: every sub-criterion met.
    const met = evaluateComponentStatus(entry()).requirements.find(
      (r) => r.key === "docQuality"
    )
    expect(met?.criteria?.length).toBeGreaterThanOrEqual(3)
    expect(met?.criteria?.some((c) => /anatomy/i.test(c.label))).toBe(true)
    expect(met?.criteria?.every((c) => c.met)).toBe(true)

    // Missing DoDonts + only 1 example → those two sub-criteria fail.
    const partial = evaluateComponentStatus(
      entry({
        docQuality: "acceptable",
        docSignals: {
          sectionsCount: 3,
          hasProps: true,
          hasWhenToUse: true,
          hasWhenNotToUse: true,
          hasDoDonts: false,
          exampleCount: 1,
        },
      })
    ).requirements.find((r) => r.key === "docQuality")
    const byLabel = Object.fromEntries(
      (partial?.criteria ?? []).map((c) => [c.label, c.met])
    )
    expect(byLabel["DoDont examples with realistic Factorial copy"]).toBe(false)
    expect(byLabel["At least three named example stories"]).toBe(false)
    expect(byLabel['A "when not to use" section']).toBe(true)
  })

  test("good is the minimum passing doc tier (acceptable is not enough)", () => {
    expect(
      evaluateComponentStatus(entry({ docQuality: "acceptable" })).missing
    ).toContain('Docs reach "good" quality')
    expect(
      evaluateComponentStatus(entry({ docQuality: "good" })).missing
    ).toEqual([])
  })

  test("a missing play function keeps a component below the bar", () => {
    const status = evaluateComponentStatus(
      entry({ apiStatus: "stable", tags: ["stable"], hasPlayFunction: false })
    )
    expect(status.missing).toEqual(["Has a play function"])
    expect(status.effectiveStatus).toBe("experimental")
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

describe("evaluateComponentStatus (presentation text)", () => {
  test("badge label reflects the effective status, not the raw tag", () => {
    // Tagged stable + meets bar → stable.
    expect(evaluateComponentStatus(entry({ apiStatus: "stable" })).label).toBe(
      "Stable"
    )
    // No tag → experimental.
    expect(evaluateComponentStatus(entry({ apiStatus: "unknown" })).label).toBe(
      "Experimental"
    )
    // Tagged stable but below the bar → experimental.
    expect(
      evaluateComponentStatus(
        entry({ apiStatus: "stable", tags: ["stable"], docQuality: "none" })
      ).label
    ).toBe("Experimental")
  })

  test("summary reflects stable + meets bar", () => {
    expect(
      evaluateComponentStatus(entry({ apiStatus: "stable", tags: ["stable"] }))
        .summary
    ).toMatch(/meets the (full )?definition of done/i)
  })

  test("summary reflects tagged stable but below the bar", () => {
    expect(
      evaluateComponentStatus(
        entry({
          apiStatus: "stable",
          tags: ["stable"],
          hasMdxDocs: false,
          docQuality: "none",
        })
      ).summary
    ).toMatch(/treated as experimental/i)
  })

  test("summary reflects meets-bar-not-tagged and experimental/unknown states", () => {
    expect(
      evaluateComponentStatus(entry({ apiStatus: "experimental" })).summary
    ).toMatch(/still experimental until promoted/i)
    expect(
      evaluateComponentStatus(
        entry({ apiStatus: "experimental", hasUnitTests: false })
      ).summary
    ).toMatch(/^experimental/i)
    expect(
      evaluateComponentStatus(
        entry({ apiStatus: "unknown", tags: [], hasUnitTests: false })
      ).summary
    ).toMatch(/no maturity tag/i)
  })

  test("deprecated / internal get their own summary and hide the checklist", () => {
    const dep = evaluateComponentStatus(
      entry({ apiStatus: "deprecated", tags: ["deprecated"] })
    )
    expect(dep.summary).toMatch(/deprecated/i)
    expect(dep.showChecklist).toBe(false)

    const int = evaluateComponentStatus(
      entry({ apiStatus: "internal", tags: ["internal"] })
    )
    expect(int.summary).toMatch(/internal/i)
    expect(int.showChecklist).toBe(false)
  })

  test("checklist is shown for stable / experimental / unknown", () => {
    for (const apiStatus of ["stable", "experimental", "unknown"] as const) {
      expect(evaluateComponentStatus(entry({ apiStatus })).showChecklist).toBe(
        true
      )
    }
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
  test("is the checklist of stories, tests, play, docs, and doc quality", () => {
    expect(STABLE_REQUIREMENTS.map((r) => r.key)).toEqual([
      "stories",
      "unitTests",
      "playFunction",
      "mdxDocs",
      "docQuality",
    ])
  })
})
