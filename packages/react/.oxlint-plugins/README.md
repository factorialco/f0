# Local lint plugins

ESLint-format rules loaded by oxlint through its `jsPlugins` option (see
`.oxlintrc.json`). They run under the same `pnpm lint` that CI runs.

## Why rules here, and a ratchet script in `.scripts/`

f0 has two enforcement mechanisms and they are not interchangeable. Pick by
**how much existing debt the rule has**:

|                                  | Violations today | Mechanism                                                           |
| -------------------------------- | ---------------- | ------------------------------------------------------------------- |
| Inline styles                    | 244              | `.scripts/check-inline-styles.ts` — AST scan + shrink-only baseline |
| `dangerouslySetInnerHTML` misuse | 1–2              | a rule in here, shipped as `error`                                  |

A lint rule has no baseline mechanism: it is on or off for the whole codebase.
With hundreds of pre-existing violations that leaves only "ship it as `off`" or
"add hundreds of suppressions", which is why the inline-styles gate is a script.
With one or two violations you just fix them and turn the rule on, and a rule is
the better tool — it runs on every file, needs no debt file, and cannot drift.

So: **a handful of violations → write a rule here. Hundreds → write a ratchet
script.** If a rule you want lands in between, that is the signal to fix the
code first.

## Caveat

oxc marks JS plugins experimental and does not support them in the language
server, so **these rules do not surface in editors** — only in `pnpm lint` and
CI. Keep the messages self-contained enough to act on from a CI log.

## Adding a rule

1. Write it in `f0-security/rules/<name>.js` using the standard ESLint shape
   (`meta`, `create(context)`). Visitor keys are ESTree node types.
2. Register it in `f0-security/index.js`.
3. Turn it on in `.oxlintrc.json`.
4. Add cases to `__tests__/f0-security.test.ts`. Those tests shell out to the
   real oxlint binary rather than using ESLint's `RuleTester`: the rules only
   matter insofar as `pnpm lint` enforces them, and oxlint's JS-plugin AST is
   what they actually see.

## Rules

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
