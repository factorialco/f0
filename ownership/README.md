# Ownership

This folder contains the data and tooling that assign a **mandatory owner team**
to every module in `packages/react/src/sds/` and `packages/react/src/kits/`,
generate the root `CODEOWNERS` file from those declarations, and enforce the
**PR review policy** (which teams must approve each kind of PR).

It is inspired by the `ownership/` system in `factorialco/factorial`.

## Review policy

Evaluated on every PR by the `Review policy` workflow
([review-policy.ts](review-policy.ts)), which posts an explanatory comment and
publishes a `Review policy` commit status — `pending` while approvals are
missing, `success` once satisfied (the workflow job itself only fails on real
errors). Make that status context a required check in branch protection to
enforce the policy. Rules, in order of precedence:

1. **SDS/Kits modules** — every changed file belongs to an owned module: the
   module owners are the only required reviewers (enforced natively by GitHub
   through CODEOWNERS). Nothing else is required.
2. **Documentation** — all other changes are docs (`*.md`, `*.mdx`,
   `*.stories.tsx` or any file inside a `__stories__/` folder): one approval
   from `@factorialco/f0-general`.
3. **Feature** — the PR title starts with `feat`: one approval from
   `@factorialco/f0-devs` **and** one from `@factorialco/f0-designers`.
4. **Anything else** — one approval from `@factorialco/f0-devs`.

Adding the `needs-design-review` label to any PR also requires an
`@factorialco/f0-designers` approval (opt-in by anyone).

Membership of the three policy teams is mirrored in [`teams.yml`](teams.yml)
(`policy_teams`) because the default Actions token cannot read org team
membership. Keep it in sync with the GitHub org teams.

## How it works

- Every direct child of `sds/` and `kits/` must have a `package.yml` manifest:

  ```yml
  metadata:
    domain: Platform
    owner: "@factorialco/foundations"
    reviewers: [] # optional: [{ team: "@factorialco/...", include: ["some/path"] }]
  ```

- The root `CODEOWNERS` is **generated — never edit it by hand**. It is composed
  from [`CODEOWNERS.base`](CODEOWNERS.base) (global rules) plus one rule per
  manifest. Because GitHub resolves CODEOWNERS with last-match-wins, module
  rules override the global fallback: the owner team is the only required
  reviewer for its module.

- Nested manifests are supported: a deeper `package.yml` refines ownership of
  its subtree. Scoped reviewers (`reviewers[].include`) add extra teams for
  specific paths inside a module.

- Valid teams are allowlisted in [`teams.yml`](teams.yml). Teams must exist in
  the GitHub org and have write access to this repo to act as code owners.

## Commands

From the repo root:

- `pnpm ownership` — regenerate `CODEOWNERS` from the manifests.
- `pnpm ownership:check` — validate everything (run in CI on every PR):
  1. every sds/kits module has a manifest
  2. every manifest declares a valid `metadata.owner` (mandatory)
  3. all teams are in `teams.yml`
  4. reviewer `include` paths exist
  5. `CODEOWNERS` is up to date with the manifests

## Adding a new module

1. Create the module folder under `sds/` or `kits/`.
2. Add a `package.yml` with the owning team (CI fails without it).
3. Run `pnpm ownership` and commit the regenerated `CODEOWNERS`.

## Changing ownership

Edit the module's `package.yml`, run `pnpm ownership`, commit both files.
