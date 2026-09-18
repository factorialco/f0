// lint-staged config for @factorialco/f0-react. lint-staged runs these tasks
// with cwd = packages/react, which is what oxfmt and oxlint need: both read
// their config from the current directory (./.oxfmtrc.jsonc, ./.oxlintrc.json),
// not from the file's location. Running them from the repo root would apply
// the root config and rewrite most of src/.
//
// The package scripts are used rather than the binaries so the flags
// (`--type-aware --quiet`) live in one place; both wrap the tool in
// `sh -c '… "${@:-src/}"' --` and accept paths.
//
// Lint has the same scope as CI (`pnpm lint` covers src/): code outside src/
// (.storybook, docs, config files) carries lint errors nobody gates on, and
// linting it here would block commits that CI accepts. Formatting still
// applies to every file. oxfmt exits 2 when every path it receives is
// ignored, hence the CHANGELOG filter. api/ is a separate project with its
// own lockfile and tsconfig, so it is left out entirely.
// .mdx is deliberately absent: oxfmt has no MDX parser and formats it as
// plain Markdown, which rewrites a multi-line `{/* … */}` JSX comment into
// `{/_ … _/}` and breaks the Storybook build. oxfmt's ignorePatterns exclude
// it too, so a manual run cannot corrupt it either.
// Must mirror this package's oxfmt ignorePatterns: oxfmt exits non-zero
// ("Expected at least one target file") when every path it is handed is
// ignored, which would block a commit that only touches one of these.
const IGNORED = [
  /\/CHANGELOG\.md$/,
  /\/package\.json$/,
  /\/packages\/react\/api\//,
]
const LINTED = /\/packages\/react\/src\//
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
