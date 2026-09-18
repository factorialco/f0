# Local lint plugins

ESLint-format rules loaded by oxlint through its `jsPlugins` option (see
`.oxlintrc.json`). They run under the same `pnpm lint` that CI runs.

## Why rules here, and a ratchet script in `.scripts/`

Almost every rule worth adding belongs **here**, whatever its violation count.
The RATCHET group in `.oxlintrc.json` is what makes that true: the rule runs as
`"warn"`, `pnpm lint` hides warnings (`--quiet`), and `pnpm check:lint-debt`
compares them per file against `.scripts/lint-debt.json`, a baseline that may
only shrink. It runs on staged files in the pre-commit hook and over the whole
tree in CI.

So pick the **severity**, not the mechanism:

| Violations today | How to ship it                                              |
| ---------------- | ----------------------------------------------------------- |
| A handful        | fix them, ship the rule as `"error"`                        |
| Hundreds         | ship as `"warn"` in the RATCHET group and seed the baseline |

A bespoke script in `.scripts/` is for the checks a lint rule genuinely cannot
express — ones that need to compare against another commit, read the built
`.d.ts`, or reason across the whole module graph (`check-api-surface`,
`check-cycle-dependencies`, `check-docs-index`). "This rule has a lot of hits"
is _not_ a reason to write one: that is what the RATCHET group is for.

## External JS plugins

`.oxlintrc.json` also loads three published ESLint plugins the same way:
`eslint-plugin-sonarjs` (the `recommended` set, minus rules listed as debt in
the config), `eslint-plugin-import` under the alias `import-js`, and
`eslint-plugin-react` under the alias `react-js`, for the rules oxlint has no
native version of. The aliases are needed because oxlint reserves the names
`import` and `react` for its own plugins. The same editor caveat below applies
to them.

`f0-i18n/` holds `no-untranslated-copy`: user-visible copy must come from
`useI18n()`/`t()`, never a string literal, which no consumer dictionary can reach.
It reads JSX text, attributes, object properties at any depth and default values,
since most of that debt hides in lookup tables and defaults rather than in JSX.
It ships in the RATCHET group; the exclusions (generated icons, fixtures, the
dictionary itself) are `overrides` in `.oxlintrc.json`.

`f0-react/` is a local wrapper around `eslint-plugin-react`'s
`jsx-no-leaked-render`. The upstream rule reports `&&` in attribute values as
well as in children; the wrapper only reports children, where a leaked `0` or
`""` actually renders. It is tested in `__tests__/f0-react.test.ts`. Rules that need type information run without it under oxlint's JS plugin
bridge; the type-aware rules that do work come from oxlint's own `typescript`
plugin with `--type-aware` (see the `lint` script).

## Caveat

oxc marks JS plugins experimental and does not support them in the language
server, so **these rules do not surface in editors** — only in `pnpm lint` and
CI. Keep the messages self-contained enough to act on from a CI log.

## Adding a rule

1. Write it in `<plugin>/rules/<name>.js` using the standard ESLint shape
   (`meta`, `create(context)`). Visitor keys are ESTree node types.
2. Register it in that plugin's `index.js`.
3. Turn it on in `.oxlintrc.json`.
4. Add cases to `__tests__/<plugin>.test.ts`. Those tests shell out to the
   real oxlint binary rather than using ESLint's `RuleTester`: the rules only
   matter insofar as `pnpm lint` enforces them, and oxlint's JS-plugin AST is
   what they actually see.

## Rules

### `f0-security`

- **`no-spread-after-inner-html`** — a props spread after
  `dangerouslySetInnerHTML` overwrites it, so a caller can replace sanitized
  HTML with their own. Pure attribute-ordering check, no data flow.
- **`require-sanitized-inner-html`** — `__html` must come from a sanitizer.
  A _shallow, same-file_ check: it resolves direct calls, local bindings
  (through `useMemo` and ternaries) and reassignments, but not values routed
  through another module. A tripwire for the accidental case, not a proof.
  Extend the `sanitizers` option when a new helper sanitizes.
- **`require-style-nonce`** — an inline `<style>` without a `nonce` is dropped
  silently by a strict CSP. The two elements that predate the rule are listed in
  the `allow` option rather than suppressed inline, so the debt stays in one
  readable place and the rule still blocks new ones.

### `f0-stories`

- **`no-nondeterministic-story-names`** — a story's _accessible names_ must be
  the same on every run. CI captures each story's aria surface — its `role` +
  accessible-name pairs — and diffs it against the baseline from the latest
  `main` run (`.scripts/check-aria-surface.ts`), so a name built from
  `Math.random()` or the clock is reported as a rename on every run of every
  PR, whichever files that PR touched. That noise buries the real renames the
  check exists to catch.

  Deliberately narrow. The moving read — `Math.random()`, `Date.now()`,
  `performance.now()`, `crypto.randomUUID()`, or a zero-argument `new Date()`
  — is only reported where it lands somewhere a name comes from: rendered JSX
  text, a naming attribute (`aria-label`, `alt`, `title`, …), or a fixture key
  a component formats into a name (`title`, `label`, `timestamp`, `createdAt`,
  …). A random id, `key`, coordinate or play-function delay never reaches an
  accessible name and is none of the rule's business. `new Date(…)` with an
  argument is the fix, not the problem.

  Shallow, like the `f0-security` rules: it sees the naming position and the
  expression sitting in it, not a value routed through another function. A
  helper that hides `Math.random()` one hop away (`<p>{pickCopy()}</p>`) gets
  past it. A tripwire for the ordinary case, not a proof.

  The rule scopes itself by filename rather than through an override: it fires
  on `*.stories.*` and on anything under `__stories__/`, since the fixtures and
  mock widgets a story imports render into the same tree. A RATCHET rule:
  existing hits are in `.scripts/lint-debt.json` and that count may only
  shrink.

  A story that genuinely needs the real clock in a naming position — a
  "relative time" demo — keeps it behind an `oxlint-disable` comment naming the
  reason, so it lands in the diff where a reviewer can judge it.

### `f0-styles`

- **`no-inline-styles`** — styling comes from Tailwind classes. An inline
  `style` bypasses the design tokens, outranks any class a consumer writes, and
  is invisible to the Tailwind build, so it gets no theming, no responsive
  variants and no purging. A RATCHET rule: existing hits are in
  `.scripts/lint-debt.json` and that count may only shrink.

  Two carve-outs. `src/ui/` is off (an override in `.oxlintrc.json`): those are
  re-synced third-party wrappers whose styling is upstream's decision. Stories,
  tests and mocks are off with the other ratchet rules: demo scaffolding is not
  shipped styling. A style that only sets CSS custom properties is allowed
  outright — that is how a dynamic value gets threaded _into_ the token system
  rather than around it.

  Genuinely dynamic values (a measured offset, a `${percentage}%` width, a
  colour from data) cannot be classes. Keep them, with an `oxlint-disable`
  comment naming the reason so it lands in the diff.
