import { readdirSync, readFileSync } from "fs"
import { join, relative } from "path"
import { describe, expect, it } from "vitest"

const packageRoot = join(__dirname, "../../..")

const allowlist: string[] = JSON.parse(
  readFileSync(
    join(packageRoot, ".storybook/a11y-skip-allowlist.json"),
    "utf-8"
  )
).files

const findStoryFilesWithSkip = (dir: string): string[] => {
  const results: string[] = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findStoryFilesWithSkip(fullPath))
    } else if (entry.name.endsWith(".stories.tsx")) {
      const content = readFileSync(fullPath, "utf-8")
      if (/skipCi\s*:/.test(content) || /withSkipA11y\s*\(/.test(content)) {
        results.push(relative(packageRoot, fullPath))
      }
    }
  }
  return results
}

describe("a11y skip allowlist (.storybook/a11y-skip-allowlist.json)", () => {
  const actual = findStoryFilesWithSkip(join(packageRoot, "src")).sort()

  it("no new story file skips axe (use a11y: { test: 'todo' } instead)", () => {
    const unlisted = actual.filter((file) => !allowlist.includes(file))
    expect(
      unlisted,
      `These story files use a11y skipCi/withSkipA11y but are not in the ` +
        `grandfather allowlist. Skipping axe is not allowed for new stories — ` +
        `use a11y: { test: "todo" } for known-failing stories, or fix the ` +
        `violations and use test: "error". If a grandfathered file was MOVED, ` +
        `update its path in .storybook/a11y-skip-allowlist.json.`
    ).toEqual([])
  })

  it("has no stale entries (Path to AA burndown — the list may only shrink)", () => {
    const stale = allowlist.filter((file) => !actual.includes(file))
    expect(
      stale,
      `These allowlist entries no longer match a story file using ` +
        `skipCi/withSkipA11y. If you removed the skip: delete the entry from ` +
        `.storybook/a11y-skip-allowlist.json (that diff is the burndown ` +
        `metric 🎉). If you moved the file: update the entry's path.`
    ).toEqual([])
  })
})
