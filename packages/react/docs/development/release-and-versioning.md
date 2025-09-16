# Versioning

This project is following the [Semantic Versioning](https://semver.org/)
specification with automatic version bumping based in
[convention commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Release process

### Stable versions

When a PR is merged into the `main` branch, the CI will automatically will check
the commit messages, bump the version, update the changelog file, and create a
release in github with the new version.

Any new release (automatic or manual) triggers a workflow that will publish it
to the github package registry.

### Experimental (alpha) versions

When a PR is created any commit into the PR will trigger the build and publish
process, but the version will be marked as `alpha` and the version will be
`x.y.z-alpha.pr-<pr-number>-<date>-<commit-sha>`. Where the `pr-number` is the
number of the PR and the commit sha is the sha of the commit that triggered the
build.

Those versions are not meant to be used in production, but to be tested and
reviewed by the team.

**Those versions are ephemeral** :

- We will delete all the alpha version of a PR once the PR is closed (merged or
  not)
- We will only keep the last 3 versions of each PR
- We will delete any alpha version older than 1 day

## Conventional Commits

The Conventional Commits specification is a lightweight convention on top of
commit messages. This convention dovetails with SemVer, by describing the
features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to
the consumers of your library:

- **fix**: a commit of the type fix patches a bug in your codebase (this
  correlates with PATCH in Semantic Versioning).
- **feat**: a commit of the type feat introduces a new feature to the codebase
  (this correlates with MINOR in Semantic Versioning).
- **BREAKING CHANGE**: a commit that has a footer BREAKING CHANGE:, or appends a
  ! after the type/scope, introduces a breaking API change (correlating with
  MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any
  type.
- types other than fix: and feat: are allowed, for example build:, chore:, ci:,
  docs:, style:, refactor:, perf:, test:, and others. will not trigger a new
  version.

[Read more about Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#examples)

## Using the package

The package is published in the npmjs package registry so you can use it in your
project as a regular package.

```bash
pnpm add @factorialco/f0@latest
```

Or to install an specific version go to
https://www.npmjs.com/package/@factorialco/f0?activeTab=versions and check the
version you want to install and execute:

```bash
pnpm add @factorialco/f0@[VERSION]
```

### Alpha versions

Alpha version are published in a release branch in the f0 repo, those branches
are named `npm/alpha-pr-<pr-number>` and are ephemeral branches that will be
deleted after 5 days or after merge the PR to main.

Use the following command to install an alpha version:

```bash
pnpm i github:factorialco/f0#npm/alpha-pr-[PR_NUMBER]
```

or if you want to install an specific commit:

```bash
pnpm i github:factorialco/f0#COMMIT_SHA
```

Visit https://github.com/factorialco/f0/branches/all?query=npm%2Falpha to get
the list of the alpha branches and the commits
