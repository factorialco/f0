import { readdirSync, readFileSync } from "fs"
import { join, relative } from "path"
import { describe, expect, it } from "vitest"

const packageRoot = join(__dirname, "../../..")

const allowlist: Record<string, number> = JSON.parse(
  readFileSync(
    join(packageRoot, ".storybook/a11y-skip-allowlist.json"),
    "utf-8"
  )
).files

const countSkipCallSites = (content: string): number =>
  (content.match(/skipCi\s*:/g) || []).length +
  (content.match(/withSkipA11y\s*\(/g) || []).length

const findStoryFilesWithSkip = (dir: string): Record<string, number> => {
  const results: Record<string, number> = {}
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      Object.assign(results, findStoryFilesWithSkip(fullPath))
    } else if (entry.name.endsWith(".stories.tsx")) {
      const count = countSkipCallSites(readFileSync(fullPath, "utf-8"))
      if (count > 0) {
        results[relative(packageRoot, fullPath)] = count
      }
    }
  }
  return results
}

describe("a11y skip allowlist (.storybook/a11y-skip-allowlist.json)", () => {
  const actual = findStoryFilesWithSkip(join(packageRoot, "src"))

  it("no new story file skips axe (use a11y: { test: 'todo' } instead)", () => {
    const unlisted = Object.keys(actual).filter((file) => !(file in allowlist))
    expect(
      unlisted,
      `These story files use a11y skipCi/withSkipA11y but are not in the ` +
        `grandfather allowlist. Skipping axe is not allowed for new stories — ` +
        `use a11y: { test: "todo" } for known-failing stories, or fix the ` +
        `violations and use test: "error". If a grandfathered file was MOVED, ` +
        `update its path in .storybook/a11y-skip-allowlist.json.`
    ).toEqual([])
  })

  it("no grandfathered file gains skip call-sites (counts may only shrink)", () => {
    const grown = Object.keys(actual)
      .filter((file) => file in allowlist && actual[file] > allowlist[file])
      .map(
        (file) => `${file}: allowed ${allowlist[file]}, found ${actual[file]}`
      )
    expect(
      grown,
      `These grandfathered files have MORE skipCi/withSkipA11y call-sites ` +
        `than their allowlisted count — adding new skips is not allowed, even ` +
        `in grandfathered files. Use a11y: { test: "todo" } for the new story ` +
        `instead.`
    ).toEqual([])
  })

  it("has no stale entries (Path to AA burndown — counts may only shrink)", () => {
    const stale = Object.keys(allowlist)
      .filter((file) => (actual[file] ?? 0) < allowlist[file])
      .map(
        (file) =>
          `${file}: allowed ${allowlist[file]}, found ${actual[file] ?? 0}`
      )
    expect(
      stale,
      `These allowlist entries exceed the skips actually present. If you ` +
        `removed skips: lower the count — or delete the entry at zero — in ` +
        `.storybook/a11y-skip-allowlist.json (that diff is the burndown ` +
        `metric 🎉). If you moved the file: update the entry's path.`
    ).toEqual([])
  })
})
