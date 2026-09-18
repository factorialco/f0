// lint-staged config for @factorialco/f0-react-native. Runs with
// cwd = packages/react-native so oxfmt/oxlint read this package's
// .oxfmtrc.jsonc / .oxlintrc.json (they resolve config from the cwd, not the
// file). The package scripts keep the flags (`--max-warnings 0`) in one place.
//
// Lint has the same scope as CI (`pnpm lint` covers src/): playground/ and
// scripts/ carry lint errors nobody gates on, and linting them here would
// block commits that CI accepts. Formatting still applies to every file.
// oxfmt exits 2 when every path it receives is ignored, hence the filter.
// .mdx is deliberately absent: oxfmt has no MDX parser and formats it as
// plain Markdown, which rewrites a multi-line `{/* … */}` JSX comment into
// `{/_ … _/}` and breaks the Storybook build. oxfmt's ignorePatterns exclude
// it too, so a manual run cannot corrupt it either.
// Must mirror this package's oxfmt ignorePatterns: oxfmt exits non-zero
// ("Expected at least one target file") when every path it is handed is
// ignored, which would block a commit that only touches one of these.
const IGNORED = [/\/CHANGELOG\.md$/, /\/package\.json$/]
const LINTED = /\/packages\/react-native\/src\//
const keep = (files) => files.filter((f) => !IGNORED.some((re) => re.test(f)))
const quote = (files) => files.map((f) => JSON.stringify(f)).join(" ")

export default {
  "*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}": (files) => {
    const kept = keep(files)
    if (kept.length === 0) {
      return []
    }
    const linted = kept.filter((f) => LINTED.test(f))
    return [
      ...(linted.length > 0 ? [`pnpm run lint:fix ${quote(linted)}`] : []),
      `pnpm run format ${quote(kept)}`,
    ]
  },
  "*.{json,jsonc,css,md,yml,yaml}": (files) => {
    const kept = keep(files)
    return kept.length === 0 ? [] : [`pnpm run format ${quote(kept)}`]
  },
}
