# Ownership

This folder contains the data and tooling that assign a **mandatory owner team**
to every module in `packages/react/src/sds/` and `packages/react/src/kits/`,
and generate the root `CODEOWNERS` file from those declarations.

It is inspired by the `ownership/` system in `factorialco/factorial`.

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
