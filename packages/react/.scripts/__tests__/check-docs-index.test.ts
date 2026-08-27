import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"

import { afterEach, describe, expect, it } from "vitest"

import {
  buildCommentMarkdown,
  diffSnapshots,
  entryUrl,
  isMdxSource,
  isVisible,
  snapshotFromIndex,
  type DiffResult,
  type Snapshot,
  type SnapshotEntry,
} from "../check-docs-index"

/**
 * Snapshots are built from the real `storybook index` shape, so these tests
 * write a minimal raw index plus the source files it points at into a temp dir
 * and run the real normalizer — the same path CI takes.
 */
const createdDirs: string[] = []

afterEach(() => {
  for (const dir of createdDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

interface RawEntryInput {
  id: string
  type?: "docs" | "story"
  title?: string
  name?: string
  importPath: string
  componentPath?: string
  exportName?: string
  tags?: string[]
}

/**
 * Write a raw index plus its source files, then normalize it. `files` maps an
 * `importPath` to its contents, so a test can change one file between the two
 * sides to exercise content-hash detection.
 */
function snapshotOf(
  entries: RawEntryInput[],
  files: Record<string, string> = {}
): Snapshot {
  const dir = mkdtempSync(path.join(tmpdir(), "docs-index-test-"))
  createdDirs.push(dir)

  for (const [importPath, contents] of Object.entries(files)) {
    const abs = path.resolve(dir, importPath)
    mkdirSync(path.dirname(abs), { recursive: true })
    writeFileSync(abs, contents)
  }

  const raw = {
    v: 5,
    entries: Object.fromEntries(
      entries.map((e) => [
        e.id,
        {
          type: e.type ?? "story",
          title: e.title ?? "Components/Thing",
          name: e.name ?? "Default",
          tags: e.tags ?? ["dev", "test"],
          ...e,
        },
      ])
    ),
  }
  return snapshotFromIndex(JSON.stringify(raw), dir)
}

/** A story entry, visible by default. */
function story(over: Partial<RawEntryInput> = {}): RawEntryInput {
  return {
    id: "components-thing--default",
    type: "story",
    title: "Components/Thing",
    name: "Default",
    importPath: "./thing.stories.tsx",
    exportName: "Default",
    tags: ["dev", "test", "stable"],
    ...over,
  }
}

/** The files map that makes `story()`'s importPath readable. */
const STORY_FILES = { "./thing.stories.tsx": "export const Default = {}" }

function diff(base: Snapshot, head: Snapshot): DiffResult {
  return diffSnapshots(base, head)
}

function ids(list: SnapshotEntry[]): string[] {
  return list.map((e) => e.id).sort()
}

describe("isVisible", () => {
  it("requires the dev tag and the absence of no-sidebar", () => {
    expect(isVisible(["dev", "test"])).toBe(true)
    // `!dev` means Storybook indexes the entry but never lists it.
    expect(isVisible(["test"])).toBe(false)
    // This repo's own sidebar filter, applied in .storybook/manager.ts.
    expect(isVisible(["dev", "no-sidebar"])).toBe(false)
  })
})

describe("snapshotFromIndex", () => {
  it("normalizes entries, sorts tags and records visibility", () => {
    const snap = snapshotOf(
      [story({ tags: ["test", "dev", "stable"] })],
      STORY_FILES
    )
    const entry = snap.entries["components-thing--default"]!
    expect(entry.type).toBe("story")
    expect(entry.title).toBe("Components/Thing")
    expect(entry.tags).toEqual(["dev", "stable", "test"])
    expect(entry.visible).toBe(true)
    expect(entry.hash).not.toBe("")
  })

  it("hashes the source file so content changes are detectable", () => {
    const a = snapshotOf([story()], {
      "./thing.stories.tsx": "export const Default = {}",
    })
    const b = snapshotOf([story()], {
      "./thing.stories.tsx": "export const Default = { name: 'x' }",
    })
    expect(a.entries["components-thing--default"]!.hash).not.toBe(
      b.entries["components-thing--default"]!.hash
    )
  })

  it("leaves the hash empty when the source file is missing", () => {
    const snap = snapshotOf([story()], {})
    expect(snap.entries["components-thing--default"]!.hash).toBe("")
  })

  it("skips entries without an id or importPath", () => {
    const snap = snapshotFromIndex(
      JSON.stringify({ entries: { a: { id: "a" }, b: { importPath: "./b" } } }),
      "/nonexistent"
    )
    expect(Object.keys(snap.entries)).toEqual([])
  })
})

describe("diffSnapshots — losses", () => {
  it("reports a visible entry that disappeared as removed", () => {
    const result = diff(snapshotOf([story()], STORY_FILES), snapshotOf([], {}))
    expect(ids(result.removed)).toEqual(["components-thing--default"])
    expect(result.hasLosses).toBe(true)
    expect(result.lossTotal).toBe(1)
  })

  it("ignores an entry that was already hidden before it disappeared", () => {
    const result = diff(
      snapshotOf([story({ tags: ["dev", "no-sidebar"] })], STORY_FILES),
      snapshotOf([], {})
    )
    expect(result.removed).toEqual([])
    expect(result.hasLosses).toBe(false)
  })

  it("reports a no-sidebar tag added to an existing entry as hidden", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf([story({ tags: ["dev", "test", "no-sidebar"] })], STORY_FILES)
    )
    expect(result.removed).toEqual([])
    expect(result.hidden).toHaveLength(1)
    expect(result.hasLosses).toBe(true)
  })

  it("reports a dropped dev tag as hidden", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf([story({ tags: ["test"] })], STORY_FILES)
    )
    expect(result.hidden).toHaveLength(1)
    expect(result.hasLosses).toBe(true)
  })

  it("counts a move that also leaves the sidebar as a loss, not a move", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf(
        [
          story({
            id: "patterns-thing--default",
            title: "Patterns/Thing",
            tags: ["dev", "no-sidebar"],
          }),
        ],
        STORY_FILES
      )
    )
    expect(result.moved).toEqual([])
    expect(result.hidden).toHaveLength(1)
    expect(result.hasLosses).toBe(true)
  })
})

describe("diffSnapshots — moves", () => {
  it("pairs a retitled entry as moved rather than removed plus added", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf(
        [story({ id: "patterns-thing--default", title: "Patterns/Thing" })],
        STORY_FILES
      )
    )
    expect(result.removed).toEqual([])
    expect(result.added).toEqual([])
    expect(result.moved).toHaveLength(1)
    expect(result.moved[0]!.base.title).toBe("Components/Thing")
    expect(result.moved[0]!.head.title).toBe("Patterns/Thing")
    expect(result.hasLosses).toBe(false)
  })

  it("pairs an unedited MDX page that moved file, via its content hash", () => {
    const files = { "./old/page.mdx": "# Page" }
    const movedFiles = { "./new/page.mdx": "# Page" }
    const base = snapshotOf(
      [
        {
          id: "guides-page--documentation",
          type: "docs",
          title: "Guides/Page",
          name: "Documentation",
          importPath: "./old/page.mdx",
        },
      ],
      files
    )
    // Different id and different file, but byte-identical contents.
    const head = snapshotOf(
      [
        {
          id: "handbook-page--documentation",
          type: "docs",
          title: "Handbook/Page",
          name: "Documentation",
          importPath: "./new/page.mdx",
        },
      ],
      movedFiles
    )
    // The temp dirs differ, so build the head snapshot's dir first.
    const result = diff(base, head)
    expect(result.removed).toEqual([])
    expect(result.moved).toHaveLength(1)
  })

  it("does not pair two unrelated entries", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf(
        [
          story({
            id: "components-other--default",
            title: "Components/Other",
            importPath: "./other.stories.tsx",
            exportName: "Default",
          }),
        ],
        { "./other.stories.tsx": "export const Default = { other: true }" }
      )
    )
    expect(result.moved).toEqual([])
    expect(ids(result.removed)).toEqual(["components-thing--default"])
    expect(ids(result.added)).toEqual(["components-other--default"])
  })
})

describe("diffSnapshots — additions and updates", () => {
  it("separates added visible entries from added hidden ones", () => {
    const result = diff(
      snapshotOf([], {}),
      snapshotOf(
        [
          story(),
          story({
            id: "components-thing--snapshot",
            name: "Snapshot",
            exportName: "Snapshot",
            tags: ["dev", "no-sidebar"],
          }),
        ],
        STORY_FILES
      )
    )
    expect(ids(result.added)).toEqual(["components-thing--default"])
    expect(ids(result.addedHidden)).toEqual(["components-thing--snapshot"])
  })

  it("reports a source edit as updated", () => {
    const result = diff(
      snapshotOf([story()], {
        "./thing.stories.tsx": "export const Default = {}",
      }),
      snapshotOf([story()], {
        "./thing.stories.tsx": "export const Default = { changed: true }",
      })
    )
    expect(result.updated).toHaveLength(1)
    expect(result.hasLosses).toBe(false)
  })

  it("does not report an unchanged source as updated", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf([story()], STORY_FILES)
    )
    expect(result.updated).toEqual([])
    expect(result.retagged).toEqual([])
  })

  it("reports an entry that became visible as revealed", () => {
    const result = diff(
      snapshotOf([story({ tags: ["dev", "no-sidebar"] })], STORY_FILES),
      snapshotOf([story({ tags: ["dev", "test"] })], STORY_FILES)
    )
    expect(result.revealed).toHaveLength(1)
    expect(result.hasLosses).toBe(false)
  })

  it("reports a maturity change but ignores mechanical tag churn", () => {
    const promoted = diff(
      snapshotOf([story({ tags: ["dev", "experimental"] })], STORY_FILES),
      snapshotOf([story({ tags: ["dev", "stable"] })], STORY_FILES)
    )
    expect(promoted.retagged).toHaveLength(1)

    const churn = diff(
      snapshotOf([story({ tags: ["dev", "stable"] })], STORY_FILES),
      snapshotOf([story({ tags: ["dev", "stable", "play-fn"] })], STORY_FILES)
    )
    expect(churn.retagged).toEqual([])
  })
})

/**
 * A docs page id is one slot that two mechanisms compete for: `autodocs`
 * generates the page, and an attached `.mdx` replaces it. These cover both the
 * page vanishing (autodocs dropped) and the page being quietly taken over.
 */
describe("diffSnapshots — autodocs and overwritten docs", () => {
  /** The docs page Storybook generates for a component from its story file. */
  function autodocsPage(over: Partial<RawEntryInput> = {}): RawEntryInput {
    return {
      id: "components-thing--documentation",
      type: "docs",
      title: "Components/Thing",
      name: "Documentation",
      importPath: "./thing.stories.tsx",
      tags: ["dev", "test", "autodocs"],
      ...over,
    }
  }

  it("reports a dropped autodocs tag as a removed docs page", () => {
    // Dropping `autodocs` deletes the `--documentation` entry outright; the
    // component's stories stay behind.
    const result = diff(
      snapshotOf([autodocsPage(), story()], STORY_FILES),
      snapshotOf([story()], STORY_FILES)
    )
    expect(ids(result.removed)).toEqual(["components-thing--documentation"])
    expect(result.hasLosses).toBe(true)
  })

  it("names the dropped tag as the likely cause when the stories survive", () => {
    const result = diff(
      snapshotOf([autodocsPage(), story()], STORY_FILES),
      snapshotOf([story()], STORY_FILES)
    )
    expect(result.autodocsLikelyDropped).toEqual([
      "components-thing--documentation",
    ])
    const md = buildCommentMarkdown(result, "https://sb.test")
    expect(md).toContain("`autodocs` was probably dropped")
  })

  it("does not blame autodocs when the whole component went away", () => {
    // No stories left either — the component was deleted, not retagged.
    const result = diff(
      snapshotOf([autodocsPage(), story()], STORY_FILES),
      snapshotOf([], {})
    )
    expect(result.autodocsLikelyDropped).toEqual([])
  })

  it("reports an .mdx taking over an autodocs page as a source replacement", () => {
    // Same id, same title, same URL — only the file behind it changed. This is
    // the case an id-only diff cannot see at all.
    const result = diff(
      snapshotOf([autodocsPage()], STORY_FILES),
      snapshotOf(
        [
          autodocsPage({
            importPath: "./thing.mdx",
            tags: ["dev", "test", "autodocs", "attached-mdx"],
          }),
        ],
        { "./thing.mdx": "# Thing" }
      )
    )
    expect(result.removed).toEqual([])
    expect(result.added).toEqual([])
    // Crucially NOT filed as a routine content edit.
    expect(result.updated).toEqual([])
    expect(result.docsSourceReplaced).toHaveLength(1)
    expect(result.docsSourceReplaced[0]!.base.importPath).toBe(
      "./thing.stories.tsx"
    )
    expect(result.docsSourceReplaced[0]!.head.importPath).toBe("./thing.mdx")
  })

  it("warns in the comment even though no page was lost", () => {
    const result = diff(
      snapshotOf([autodocsPage()], STORY_FILES),
      snapshotOf([autodocsPage({ importPath: "./thing.mdx" })], {
        "./thing.mdx": "# Thing",
      })
    )
    expect(result.hasLosses).toBe(false)
    const md = buildCommentMarkdown(result, "https://sb.test")
    // "no pages lost" would read as all-clear while content was swapped out.
    expect(md).not.toContain("✅ Storybook docs — no pages lost")
    expect(md).toContain("⚠️ Storybook docs source replaced (1)")
    expect(md).toContain("auto-generated → hand-written MDX")
  })

  it("reports the reverse direction too", () => {
    const result = diff(
      snapshotOf([autodocsPage({ importPath: "./thing.mdx" })], {
        "./thing.mdx": "# Thing",
      }),
      snapshotOf([autodocsPage()], STORY_FILES)
    )
    expect(result.docsSourceReplaced).toHaveLength(1)
    expect(buildCommentMarkdown(result, "https://sb.test")).toContain(
      "hand-written MDX → auto-generated"
    )
  })

  it("treats a relocated file of the same kind as a move, not a replacement", () => {
    const result = diff(
      snapshotOf([autodocsPage({ importPath: "./old/thing.mdx" })], {
        "./old/thing.mdx": "# Thing",
      }),
      snapshotOf([autodocsPage({ importPath: "./new/thing.mdx" })], {
        "./new/thing.mdx": "# Thing edited",
      })
    )
    expect(result.docsSourceReplaced).toEqual([])
    expect(result.sourceMoved).toHaveLength(1)
    const md = buildCommentMarkdown(result, "https://sb.test")
    // A plain rename must not raise the warning heading.
    expect(md).toContain("✅ Storybook docs — no pages lost")
    expect(md).toContain("🚚 Source file moved — 1 entry across 1 file(s)")
  })
})

describe("isMdxSource", () => {
  it("distinguishes hand-written pages from story-generated ones", () => {
    expect(isMdxSource("./src/x/Thing.mdx")).toBe(true)
    expect(isMdxSource("./src/x/Thing.stories.tsx")).toBe(false)
  })
})

describe("entryUrl", () => {
  it("routes docs and stories to their Storybook paths", () => {
    const snap = snapshotOf(
      [
        story(),
        {
          id: "guides-page--documentation",
          type: "docs",
          title: "Guides/Page",
          name: "Documentation",
          importPath: "./page.mdx",
        },
      ],
      { ...STORY_FILES, "./page.mdx": "# Page" }
    )
    expect(
      entryUrl(snap.entries["components-thing--default"]!, "https://sb.test")
    ).toBe("https://sb.test/?path=/story/components-thing--default")
    expect(
      entryUrl(snap.entries["guides-page--documentation"]!, "https://sb.test/")
    ).toBe("https://sb.test/?path=/docs/guides-page--documentation")
  })
})

describe("buildCommentMarkdown", () => {
  it("leads with a warning and links every lost page", () => {
    const result = diff(snapshotOf([story()], STORY_FILES), snapshotOf([], {}))
    const md = buildCommentMarkdown(result, "https://sb.test")
    expect(md).toContain("⚠️ Storybook pages lost (1)")
    expect(md).toContain(
      "https://sb.test/?path=/story/components-thing--default"
    )
    expect(md).toContain("Components/Thing › Default")
  })

  it("explains why an entry left the sidebar", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf([story({ tags: ["dev", "test", "no-sidebar"] })], STORY_FILES)
    )
    const md = buildCommentMarkdown(result, "https://sb.test")
    expect(md).toContain("No longer in the sidebar (1)")
    expect(md).toContain("gained the `no-sidebar` tag")
  })

  it("reports a clean result so a stale warning resolves", () => {
    const result = diff(
      snapshotOf([story()], STORY_FILES),
      snapshotOf([story()], STORY_FILES)
    )
    const md = buildCommentMarkdown(result, "https://sb.test")
    expect(md).toContain("✅ Storybook docs — no pages lost")
    expect(md).not.toContain("⚠️")
  })

  it("links added pages and titles docs pages without a story name", () => {
    const result = diff(
      snapshotOf([], {}),
      snapshotOf(
        [
          {
            id: "guides-page--documentation",
            type: "docs",
            title: "Guides/Page",
            name: "Documentation",
            importPath: "./page.mdx",
          },
        ],
        { "./page.mdx": "# Page" }
      )
    )
    const md = buildCommentMarkdown(result, "https://sb.test")
    expect(md).toContain("➕ Added (1)")
    expect(md).toContain(
      "[Guides/Page](https://sb.test/?path=/docs/guides-page--documentation)"
    )
    // A docs page's "Documentation" leaf is noise — the title alone is the label.
    expect(md).not.toContain("Guides/Page › Documentation")
  })

  it("says so plainly when a side's snapshot is missing", () => {
    const md = buildCommentMarkdown(
      { ...diff(snapshotOf([], {}), snapshotOf([], {})), incomplete: "boom" },
      "https://sb.test"
    )
    expect(md).toContain("comparison unavailable")
    expect(md).toContain("boom")
  })

  /**
   * `chromatic.yml` rewrites this comment in place once a Storybook for the PR
   * exists, using only the markers in the body. These lock that contract: the
   * rewrite has no other channel to the diff, so losing a marker silently costs
   * the comment its working links.
   */
  describe("Chromatic retargeting contract", () => {
    const rendered = (): string => {
      const result = diff(
        snapshotOf([], {}),
        snapshotOf([story()], STORY_FILES)
      )
      return buildCommentMarkdown(result, "https://sb.test")
    }

    /** The rewrite `chromatic.yml` performs, kept in step with that script. */
    const retarget = (body: string, preview: string): string => {
      const base = body.match(/<!-- storybook-base: (\S+) -->/)![1]!
      return body
        .split(`${base}/?path=`)
        .join(`${preview}/?path=`)
        .replace(
          /<!-- storybook-base: \S+ -->/,
          `<!-- storybook-base: ${preview} -->`
        )
        .replace(
          /<!-- link-note:start -->[\s\S]*?<!-- link-note:end -->/,
          `<!-- link-note:start -->\n_[full Storybook](${preview})._\n<!-- link-note:end -->`
        )
    }

    it("records the base it rendered against on the first line", () => {
      expect(rendered().split("\n")[0]).toBe(
        "<!-- storybook-base: https://sb.test -->"
      )
    })

    it("always emits the link note, even with nothing added", () => {
      const clean = buildCommentMarkdown(
        diff(
          snapshotOf([story()], STORY_FILES),
          snapshotOf([story()], STORY_FILES)
        ),
        "https://sb.test"
      )
      expect(clean).toContain("<!-- link-note:start -->")
      expect(clean).toContain("<!-- link-note:end -->")
    })

    it("moves every link to the preview base when retargeted", () => {
      const out = retarget(rendered(), "https://pr-9--abc.chromatic.com")
      expect(out).toContain(
        "https://pr-9--abc.chromatic.com/?path=/story/components-thing--default"
      )
      expect(out).not.toContain("https://sb.test/?path=")
      expect(out).toContain(
        "<!-- storybook-base: https://pr-9--abc.chromatic.com -->"
      )
      expect(out).toContain("[full Storybook](https://pr-9--abc.chromatic.com)")
    })

    it("is idempotent — a second retarget changes nothing", () => {
      const once = retarget(rendered(), "https://pr-9--abc.chromatic.com")
      expect(retarget(once, "https://pr-9--abc.chromatic.com")).toBe(once)
    })

    it("keeps the markers even when the diff is truncated", () => {
      const many = Array.from({ length: 400 }, (_, i) =>
        story({
          id: `components-thing--s${i}`,
          name: `Story ${i}`,
          exportName: `Story${i}`,
          importPath: `./f${i % 40}.stories.tsx`,
        })
      )
      const files = Object.fromEntries(
        Array.from({ length: 40 }, (_, i) => [
          `./f${i}.stories.tsx`,
          `export const S${i} = {}`,
        ])
      )
      const md = buildCommentMarkdown(
        diff(snapshotOf([], {}), snapshotOf(many, files)),
        "https://sb.test"
      )
      expect(Buffer.byteLength(md, "utf8")).toBeLessThan(65536)
      expect(md.split("\n")[0]).toContain("storybook-base")
      expect(md).toContain("<!-- link-note:end -->")
    })
  })

  it("stays under GitHub's comment size limit for a huge diff", () => {
    // 400 stories across 40 files, all removed — worse than any real PR.
    const many = Array.from({ length: 400 }, (_, i) =>
      story({
        id: `components-thing--s${i}`,
        name: `Story ${i}`,
        exportName: `Story${i}`,
        importPath: `./f${i % 40}.stories.tsx`,
      })
    )
    const files = Object.fromEntries(
      Array.from({ length: 40 }, (_, i) => [
        `./f${i}.stories.tsx`,
        `export const S${i} = {}`,
      ])
    )
    const md = buildCommentMarkdown(
      diff(snapshotOf(many, files), snapshotOf([], {})),
      "https://sb.test"
    )
    expect(Buffer.byteLength(md, "utf8")).toBeLessThan(65536)
    // The headline count stays honest even though the list is capped.
    expect(md).toContain("⚠️ Storybook pages lost (400)")
  })
})
