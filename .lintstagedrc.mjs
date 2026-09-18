// Root lint-staged config: root files and every package without its own
// .lintstagedrc.mjs (core, playground, changelog-summarizer, ownership,
// scripts). lint-staged routes each staged file to its CLOSEST config and
// runs that config's tasks with cwd = the config's directory, so oxfmt and
// oxlint pick up the root .oxfmtrc.json (and oxlint's defaults) here, and
// packages/react and packages/react-native never reach this file.
//
// Function-style on purpose: oxfmt exits 2 when *every* path it receives is
// ignored (CHANGELOG.md files are), so drop those first and return no command
// when nothing is left. Lint and format share one array so they run
// sequentially — two globs writing the same file would race.
// .mdx is deliberately absent: oxfmt has no MDX parser and formats it as
// plain Markdown, which rewrites a multi-line `{/* … */}` JSX comment into
// `{/_ … _/}` and breaks the Storybook build. oxfmt's ignorePatterns exclude
// it too, so a manual run cannot corrupt it either.
// Must mirror the oxfmt ignorePatterns: oxfmt exits non-zero ("Expected at
// least one target file") when every path it is handed is ignored, which would
// block a commit that only touches one of these.
const IGNORED = [/\/CHANGELOG\.md$/, /\/packages\/[^/]+\/package\.json$/]
const keep = (files) => files.filter((f) => !IGNORED.some((re) => re.test(f)))
const quote = (files) => files.map((f) => JSON.stringify(f)).join(" ")

export default {
  "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}": (files) => {
    const kept = keep(files)
    if (kept.length === 0) return []
    return [`oxlint --fix ${quote(kept)}`, `oxfmt ${quote(kept)}`]
  },
  "*.{json,jsonc,css,md,yml,yaml}": (files) => {
    const kept = keep(files)
    return kept.length === 0 ? [] : [`oxfmt ${quote(kept)}`]
  },
}
