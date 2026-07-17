import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"

import { afterAll, beforeAll, describe, expect, test } from "vitest"

import { computeComponentStatusData } from "./component-status-build.mjs"

/**
 * These tests exercise the filesystem scan / extraction against a synthetic
 * `src/` tree written to a temp dir — no dependency on the real repo contents.
 */

// A gold-quality MDX doc (all required sections + DoDonts + when-to-use/not +
// 4 Canvas) so scoreDocQuality returns "gold".
const GOLD_MDX = `import { DoDonts } from "somewhere"

## Anatomy
<Canvas of={S.A} />
<Controls of={S.A} />

## Guidelines
**When to use**
**When not to use**
<DoDonts />
<Canvas of={S.B} />
<Canvas of={S.C} />
<Canvas of={S.D} />

## Accessibility
Keyboard notes.
`

// Required sections + props but no DoDonts / examples → "acceptable".
// Must exceed the 200-char stub threshold, so include some prose.
const ACCEPTABLE_MDX = `## Anatomy
<Controls of={S.A} />

The card groups related content into a single surface with an optional header.

## Guidelines
Use a card to group related information. Keep the content focused on one topic
so the surface stays scannable and does not overwhelm the reader.

## Accessibility
The card is a plain container and adds no special semantics of its own.
`

// Near-empty → "stub".
const STUB_MDX = `## Anatomy
tiny
`

function story(title: string, tags: string[], extra = ""): string {
  const tagList = tags.map((t) => `"${t}"`).join(", ")
  return `export default { title: "${title}", tags: [${tagList}] }${extra}`
}

const PLAY_STORY = `export const Primary = { play: async ({ canvasElement }) => {} }`

let root: string

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), "f0-cs-"))

  const write = (relPath: string, contents: string) => {
    const abs = join(root, relPath)
    mkdirSync(dirname(abs), { recursive: true })
    writeFileSync(abs, contents)
  }

  // 1) Stable component: stories in __stories__, unit tests, gold docs, play fn.
  write(
    "components/F0Alert/__stories__/F0Alert.stories.tsx",
    story("Alert", ["autodocs", "stable"], "\n" + PLAY_STORY)
  )
  write("components/F0Alert/__stories__/F0Alert.mdx", GOLD_MDX)
  write("components/F0Alert/__tests__/F0Alert.test.tsx", "test('x', () => {})")

  // 2) Experimental component: story only — no tests, no docs.
  write(
    "components/F0Widget/index.stories.tsx",
    story("Widget", ["experimental"])
  )

  // 3) Component with acceptable-tier docs and a co-located test file.
  write(
    "components/F0Card/__stories__/F0Card.stories.tsx",
    story("Card", ["stable"])
  )
  write("components/F0Card/__stories__/F0Card.mdx", ACCEPTABLE_MDX)
  write("components/F0Card/F0Card.test.ts", "test('x', () => {})")

  // 4) Component whose docs are only a stub.
  write(
    "patterns/ResourceHeader/index.stories.tsx",
    story("ResourceHeader", [])
  )
  write("patterns/ResourceHeader/index.mdx", STUB_MDX)

  // 5) Skipped: examples are ignored entirely.
  write("examples/Demo/Demo.stories.tsx", story("Demo", ["stable"]))

  // 6) Skipped: internal (ui/) zone without a stable tag.
  write("ui/Private/Private.stories.tsx", story("Private", ["experimental"]))

  // 7) Kept: internal (ui/) zone WITH a stable tag.
  write(
    "ui/PublicPrimitive/PublicPrimitive.stories.tsx",
    story("PublicPrimitive", ["stable"])
  )

  // 8) Skipped: no-sidebar sub-story without stable.
  write(
    "components/F0Sub/__stories__/sub.stories.tsx",
    story("Sub", ["no-sidebar"])
  )

  // 9) Dedup: a second story file with the same title+zone as F0Alert.
  // (Also carries a play fn so the deduped entry is deterministic regardless of
  // which of the two story files the scan visits first.)
  write(
    "components/F0Alert/__stories__/Extra.stories.tsx",
    story("Alert", ["stable"], "\n" + PLAY_STORY)
  )
})

afterAll(() => {
  rmSync(root, { recursive: true, force: true })
})

describe("computeComponentStatusData (extraction)", () => {
  const byName = (name: string, zone?: string) =>
    computeComponentStatusData(root).components.find(
      (c) => c.name === name && (zone ? c.zone === zone : true)
    )

  test("derives status, tests, docs, and quality for a full component", () => {
    const alert = byName("Alert")
    expect(alert).toMatchObject({
      name: "Alert",
      zone: "components",
      apiStatus: "stable",
      hasStories: true,
      hasUnitTests: true,
      hasPlayFunction: true,
      hasMdxDocs: true,
      docQuality: "gold",
      // Granular signals feed the per-criterion checks.
      docSignals: {
        sectionsCount: 3,
        hasProps: true,
        hasDoDonts: true,
        hasWhenNotToUse: true,
        exampleCount: 4,
      },
    })
    // "autodocs" is filtered out of the reported tags.
    expect(alert?.tags).toEqual(["stable"])
  })

  test("marks a story-only component as experimental with nothing else", () => {
    expect(byName("Widget")).toMatchObject({
      apiStatus: "experimental",
      hasUnitTests: false,
      hasPlayFunction: false,
      hasMdxDocs: false,
      docQuality: "none",
    })
  })

  test("scores acceptable docs and finds a co-located test file", () => {
    expect(byName("Card")).toMatchObject({
      hasUnitTests: true,
      hasMdxDocs: true,
      docQuality: "acceptable",
    })
  })

  test("scores a thin doc as a stub and defaults status to unknown", () => {
    expect(byName("ResourceHeader")).toMatchObject({
      zone: "patterns",
      apiStatus: "unknown",
      hasMdxDocs: true,
      docQuality: "stub",
    })
  })

  test("unit-test detection is scoped to the component, not the zone", () => {
    // F0Widget shares the `components` zone with tested components but has no
    // test of its own.
    expect(byName("Widget")?.hasUnitTests).toBe(false)
  })

  test("skips examples, no-sidebar sub-stories, and untagged internals", () => {
    const names = computeComponentStatusData(root).components.map((c) => c.name)
    expect(names).not.toContain("Demo")
    expect(names).not.toContain("Private")
    expect(names).not.toContain("Sub")
  })

  test("keeps an internal component when it is tagged stable", () => {
    expect(byName("PublicPrimitive")).toMatchObject({
      zone: "internal",
      apiStatus: "stable",
    })
  })

  test("deduplicates multiple story files for the same title+zone", () => {
    const alerts = computeComponentStatusData(root).components.filter(
      (c) => c.name === "Alert" && c.zone === "components"
    )
    expect(alerts).toHaveLength(1)
  })

  test("aggregates stats and stamps a generatedAt timestamp", () => {
    const data = computeComponentStatusData(root)
    expect(typeof data.generatedAt).toBe("string")
    expect(data.stats.total).toBe(data.components.length)
    expect(data.stats.byStatus.stable).toBe(
      data.components.filter((c) => c.apiStatus === "stable").length
    )
    expect(data.stats.byDocQuality.gold).toBe(1)
  })
})
