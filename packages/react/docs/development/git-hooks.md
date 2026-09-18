# Git hooks

Every clone of this repository gets the same git hooks, installed by
[lefthook](https://lefthook.dev) when `pnpm install` runs (`prepare` script in
the root `package.json`). They run the cheap half of what CI enforces, so a
commit or push fails locally before it fails on the pull request.

## What runs when

| Hook         | Runner                                                                  | What it does                                                                                                                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pre-commit` | [lint-staged](https://github.com/lint-staged/lint-staged), via lefthook | Formats (`oxfmt`) and autofixes (`oxlint --fix`) the **staged** files only, per package, and re-stages the result. Covers `js/ts/tsx` and `json/jsonc/css/md/mdx/yml/yaml`.                                                                                                                                                          |
| `pre-commit` | lefthook                                                                | Repo-level checks that read git themselves: file sizes, cycle dependencies, animated CSS variables, the lint-debt ratchet (see `packages/react/AGENTS.md`), CODEOWNERS ownership.                                                                                                                                                    |
| `commit-msg` | lefthook → commitlint                                                   | Conventional commit message (`feat:`, `fix:`, `chore:` …).                                                                                                                                                                                                                                                                           |
| `pre-push`   | lefthook                                                                | The preflight (`packages/react/.scripts/pre-push-preflight.ts`): a `fix:` branch must add or change a unit test, new components must meet the Definition of Done. Then `tsc --noEmit` for `packages/react` (building `packages/core` first) and for `packages/react-native`, each only when the outgoing commits touch that package. |

Type-checking lives in `pre-push` rather than `pre-commit` on purpose: a full
`tsc` of `packages/react` takes ~20 seconds and there is no per-file mode.

## Where it is configured

- `lefthook.yml` (repo root) — the hooks and every command they run.
- `.lintstagedrc.mjs` at the repo root, in `packages/react` and in
  `packages/react-native` — which command runs on which staged file type.

There is one lint-staged config per package, not one at the root, for a reason:
**`oxfmt` and `oxlint` read their configuration from the current working
directory**, not from the file's location. lint-staged routes each staged file
to the _closest_ config and runs that config's tasks with the config's
directory as `cwd`, so a file under `packages/react` is formatted with
`packages/react/.oxfmtrc.jsonc` and linted with `packages/react/.oxlintrc.json`.
Formatting the same file from the repo root would apply the root
`.oxfmtrc.json` and rewrite most of `src/`. Configs do not merge: a file whose
closest config has no matching glob is simply skipped. Files in packages
without their own config (`core`, `playground`, `changelog-summarizer`,
`ownership`, `scripts/`) fall through to the root config.

The `packages/react` and `packages/react-native` configs call the package
scripts (`pnpm run lint:fix`, `pnpm run format`) rather than the binaries, so
flags such as `--type-aware` live in one place.

In those two packages the lint step has the same scope as CI: only files under
`src/` are linted (`pnpm lint` covers `src/`), because code outside it —
`.storybook`, `docs`, `playground`, build scripts — carries lint errors nobody
gates on. Formatting applies to every staged file regardless.

**`package.json` in a released package is never formatted.** release-please
rewrites its version on every release. Sorting its keys moves other keys up
against that line, so the formatter and the release bot fight over the same
hunk and every open PR conflicts. The root `package.json` is not
release-managed and is still sorted.

**`.mdx` is never formatted.** oxfmt has no MDX parser, so it formats `.mdx` as
plain Markdown and rewrites a multi-line `{/* … */}` JSX comment into
`{/_ … _/}`. Storybook then fails to build that page with "Could not parse
expression with acorn". The globs leave `.mdx` out and every `.oxfmtrc`
excludes it, so a manual `oxfmt` run cannot corrupt it either. The end-to-end
check commits an `.mdx` fixture and asserts it comes back byte-identical.

## Installing the hooks

Nothing to do on a normal clone: `pnpm install` runs `lefthook install`. If the
hooks are missing (for example after cloning with `CI=true` set, which makes
lefthook skip the install), run:

```bash
pnpm exec lefthook install --force
```

**Git worktrees.** A worktree created while an older `core.hooksPath` setting
was in effect (a husky-era `.husky` directory) makes lefthook's postinstall stop
with a message instead of overwriting it. Run `pnpm exec lefthook install
--force` once, deliberately, inside that worktree.

## Running the hooks by hand

```bash
pnpm exec lint-staged                 # what pre-commit does to the staged files
pnpm exec lefthook run pre-commit     # the whole pre-commit hook
pnpm exec lefthook run pre-push       # the whole pre-push hook
```

## Escape hatches

| Variable                       | Effect                                                         |
| ------------------------------ | -------------------------------------------------------------- |
| `LEFTHOOK=0 git commit …`      | Skip every hook once.                                          |
| `F0_SKIP_PREFLIGHT=1 git push` | Skip the pre-push preflight (bugfix test + new-component DoD). |
| `SKIP_RED_GREEN=1 git push`    | Skip only the bugfix regression-test gate.                     |
| `SKIP_NEW_COMPONENT_DOD=1 …`   | Skip only the new-component Definition of Done gate.           |
| `F0_SKIP_TYPECHECK=1 git push` | Skip the pre-push type-check.                                  |

CI runs the same checks on the pull request, so skipping locally only defers
the failure. A commit made with `--no-verify` or `LEFTHOOK=0` is not formatted
and will fail the **Format** check in CI.

## Testing the hooks

The wiring is covered at two levels.

**Static** — `packages/react/.scripts/__tests__/lint-staged-config.test.ts`
runs in the unit suite and checks that every `.lintstagedrc.mjs` exports
functions, runs lint before format in one sequential array, points at scripts
that exist, and that `lefthook.yml` still delegates to lint-staged.

**End to end** — `scripts/check-git-hooks.ts` clones the repository into a
temp directory, runs a real `pnpm install` with `CI` unset, and then:

1. asserts lefthook installed `pre-commit`, `pre-push` and `commit-msg`;
2. commits an unformatted, autofixable file plus a root YAML file and asserts
   the **committed** content is formatted and fixed;
3. asserts a non-conventional commit message is rejected;
4. pushes a `fix:` commit with no test to a throwaway bare repository inside
   the temp dir and asserts the preflight rejects it and nothing was pushed;
5. pushes again with the preflight skipped and asserts the push succeeds and
   the type-check ran.

It never touches the real `origin`. It tests a **committed** ref (`HEAD` by
default), so commit your hook changes before running it:

```bash
pnpm hooks:e2e
```

```bash
pnpm hooks:e2e -- --keep   # keep the temp dir for inspection
```

In CI it runs as the **Git hooks** job of the Code Quality workflow, only when a
hook-related file changes (`lefthook.yml`, the lint-staged configs, the root
`package.json`, the lint/format configs, the preflight, the script itself).
