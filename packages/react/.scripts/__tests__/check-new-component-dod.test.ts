import { describe, expect, it } from "vitest"

import {
  addedExportCandidates,
  checkNewComponents,
  type NewComponentSignals,
  srcRelative,
} from "../check-new-component-dod"
import type { StatusEntry } from "../check-stable-dod"

/**
 * Minimal status entry. Defaults clear every mechanical DoD requirement, so
 * each test only has to express the one thing it wants to be wrong.
 */
function entry(overrides: Partial<StatusEntry> = {}): StatusEntry {
  return {
    name: "Widget",
    zone: "components",
    apiStatus: "experimental",
    hasStories: true,
    hasUnitTests: true,
    hasPlayFunction: true,
    hasSnapshot: true,
    hasMdxDocs: true,
    docQuality: "good",
    a11yTier: "enforced",
    storyFile: "components/F0Widget/__stories__/F0Widget.stories.tsx",
    ...overrides,
  }
}

function signals(
  overrides: Partial<NewComponentSignals> = {}
): NewComponentSignals {
  return { addedFiles: [], addedExports: [], ...overrides }
}

const WIDGET_STORY_REPO_PATH =
  "packages/react/src/components/F0Widget/__stories__/F0Widget.stories.tsx"

describe("srcRelative", () => {
  it.each([
    [WIDGET_STORY_REPO_PATH],
    ["src/components/F0Widget/__stories__/F0Widget.stories.tsx"],
    ["components/F0Widget/__stories__/F0Widget.stories.tsx"],
  ])("normalizes %s to the dataset's src-relative form", (path) => {
    expect(srcRelative(path)).toBe(
      "components/F0Widget/__stories__/F0Widget.stories.tsx"
    )
  })
})

describe("addedExportCandidates", () => {
  it("picks F0-prefixed star exports from added lines by their path leaf", () => {
    const diff = [
      '+export * from "./F0MeetingCard"',
      '+export * from "../patterns/F0Map"',
    ].join("\n")

    expect(addedExportCandidates(diff)).toEqual(["F0Map", "F0MeetingCard"])
  })

  it("picks F0-prefixed named exports, honoring `as` aliases", () => {
    const diff =
      '+export { F0Card, Internal as F0FancyCard, helper } from "./F0Card"'

    expect(addedExportCandidates(diff)).toEqual(["F0Card", "F0FancyCard"])
  })

  it("ignores type-only exports", () => {
    const diff = [
      '+export type { F0CardProps } from "./F0Card"',
      '+export { type F0WidgetProps, F0Widget } from "./F0Widget"',
    ].join("\n")

    expect(addedExportCandidates(diff)).toEqual(["F0Widget"])
  })

  it("ignores removed and context lines", () => {
    const diff = [
      '-export * from "./F0Removed"',
      ' export * from "./F0Context"',
      "+++ b/packages/react/src/components/exports.ts",
    ].join("\n")

    expect(addedExportCandidates(diff)).toEqual([])
  })

  it("ignores non-F0 names and barrel-to-barrel re-exports", () => {
    const diff = [
      '+export * from "./Forms/exports"',
      '+export * from "./CardSelectable"',
      '+export { useThing } from "./useThing"',
    ].join("\n")

    expect(addedExportCandidates(diff)).toEqual([])
  })

  it("dedupes candidates across lines", () => {
    const diff = [
      '+export * from "./F0Widget"',
      '+export { F0Widget } from "./F0Widget"',
    ].join("\n")

    expect(addedExportCandidates(diff)).toEqual(["F0Widget"])
  })
})

describe("checkNewComponents", () => {
  it("finds nothing when the PR adds no story file and no export", () => {
    const result = checkNewComponents([entry()], signals())

    expect(result.newComponents).toEqual([])
    expect(result.failing).toEqual([])
    expect(result.untrackedExports).toEqual([])
  })

  it("passes a new component that meets the full DoD", () => {
    const result = checkNewComponents(
      [entry()],
      signals({ addedFiles: [WIDGET_STORY_REPO_PATH] })
    )

    expect(result.newComponents.map((c) => c.name)).toEqual(["Widget"])
    expect(result.failing).toEqual([])
  })

  it("fails a new component below the bar, listing what is missing", () => {
    const result = checkNewComponents(
      [entry({ hasUnitTests: false, a11yTier: "todo" })],
      signals({ addedFiles: [WIDGET_STORY_REPO_PATH] })
    )

    expect(result.failing).toHaveLength(1)
    expect(result.failing[0].entry.name).toBe("Widget")
    expect(result.failing[0].missing).toEqual([
      "unit tests",
      'axe enforced (is "todo")',
    ])
  })

  it("fails a new component whose folder is not F0-named", () => {
    const result = checkNewComponents(
      [
        entry({
          storyFile: "components/Widget/__stories__/Widget.stories.tsx",
        }),
      ],
      signals({
        addedFiles: [
          "packages/react/src/components/Widget/__stories__/Widget.stories.tsx",
        ],
      })
    )

    expect(result.failing).toHaveLength(1)
    expect(result.failing[0].missing).toEqual(['"F0" name prefix'])
  })

  it("holds new components to the full bar regardless of their maturity tag", () => {
    const result = checkNewComponents(
      [entry({ apiStatus: "experimental", docQuality: "acceptable" })],
      signals({ addedFiles: [WIDGET_STORY_REPO_PATH] })
    )

    expect(result.failing).toHaveLength(1)
  })

  it("ignores pre-existing components even when they are below the bar", () => {
    const components = [
      entry(),
      entry({
        name: "OldThing",
        hasUnitTests: false,
        storyFile: "components/F0OldThing/__stories__/F0OldThing.stories.tsx",
      }),
    ]

    const result = checkNewComponents(
      components,
      signals({ addedFiles: [WIDGET_STORY_REPO_PATH] })
    )

    expect(result.newComponents.map((c) => c.name)).toEqual(["Widget"])
    expect(result.failing).toEqual([])
  })

  it("ignores added files that are not story files", () => {
    const result = checkNewComponents(
      [entry({ hasUnitTests: false })],
      signals({
        addedFiles: [
          "packages/react/src/components/F0Widget/F0Widget.tsx",
          "packages/react/src/components/F0Widget/__tests__/F0Widget.test.tsx",
        ],
      })
    )

    expect(result.newComponents).toEqual([])
  })

  it("ignores added story files that map to no tracked component", () => {
    const result = checkNewComponents(
      [entry()],
      signals({
        addedFiles: [
          "packages/react/src/lib/internal/__stories__/Internal.stories.tsx",
        ],
      })
    )

    expect(result.newComponents).toEqual([])
    expect(result.failing).toEqual([])
  })

  it("flags a newly exported component that no status entry tracks", () => {
    const result = checkNewComponents(
      [entry()],
      signals({ addedExports: ["F0Phantom"] })
    )

    expect(result.untrackedExports).toEqual(["F0Phantom"])
  })

  it("accepts a newly exported component that matches a tracked entry", () => {
    // Moves and re-exports add export lines for components that already
    // exist on main — those must not trip the gate.
    const result = checkNewComponents(
      [entry()],
      signals({ addedExports: ["F0Widget"] })
    )

    expect(result.untrackedExports).toEqual([])
  })

  it("matches exports to entries with grouped story names", () => {
    const result = checkNewComponents(
      [entry({ name: "Widgets/Widget" })],
      signals({ addedExports: ["F0Widget"] })
    )

    expect(result.untrackedExports).toEqual([])
  })

  it("reports every failing component when several are added at once", () => {
    const components = [
      entry({ hasPlayFunction: false }),
      entry({
        name: "Gadget",
        hasSnapshot: false,
        storyFile: "components/F0Gadget/__stories__/F0Gadget.stories.tsx",
      }),
    ]

    const result = checkNewComponents(
      components,
      signals({
        addedFiles: [
          WIDGET_STORY_REPO_PATH,
          "packages/react/src/components/F0Gadget/__stories__/F0Gadget.stories.tsx",
        ],
      })
    )

    expect(result.failing.map((f) => f.entry.name).sort()).toEqual([
      "Gadget",
      "Widget",
    ])
    expect(result.failing.flatMap((f) => f.missing)).toEqual([
      "play function",
      "snapshot story",
    ])
  })
})
