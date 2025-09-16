# Github actions

## Introduction

Github actions are used to automate the process of building, testing, and
deploying the application. The actions are defined in the `.github/workflows`
directory. The actions are triggered by events like push, pull request, etc.

## Workspace filters

Workflows uses the `Check workspaces changes` workflow_call to detect in which
part of repo has change and only run the necessary jobs/steps, we use
[dorny/paths-filter](https://github.com/dorny/paths-filter) in that
workflow_call. It returns multiple outputs with the name of the workspace with
changes, for example `package_react`

Remember to add this workflow_call and the `needs` attribute to your jobs or
steps

ex:

```yml
jobs:
  # Detect which projects have changed
  detect-changes:
    uses: ./.github/workflows/_check-workspaces-changes.yaml

  my-job:
    name: "My job"
    needs: detect-changes
    if: needs.detect-changes.outputs.package_react == 'true'
    ...
```

## Secrets

The secrets are stored in the repository settings and are used in the workflows
to authenticate with external services.

### Required

- `NPMJS_TOKEN`: The token to publish the package to the npmjs.com registry,
  this token requires read and write access to the package @factorialco/f0
- `RELEASE_PLEASE_GH_TOKEN`: This is a PAT (Personal Access Token) with **read
  and write access to code and pull requests**. This token is used by the
  `release-please` action approve the PRs and create the release notes (Why is
  this necessary? The GITHUB_TOKEN is attached to the github action bot user and
  is the one creates de release-please PR, because the repo/org rules a user can
  not approve its own PRs, so we need a PAT to approve the PRs)
- `CHROMATIC_PROJECT_TOKEN`: The token to publish the storybook to chromatic
  (TODO permissions/scopes)
- `SLACK_WEBHOOK_URL`: The trigger url to launch the
  [slack workflow](https://slack.com/shortcuts/Ft08MX2F6YKE/eb87d88fd13b11321d880e48609b8f14)
  that logs the new release

## Workflows

- **quality**: Runs the linter and prettier
- **tests**: Runs the unit tests
- **storybook-tests**: Runs storybook tests
- **chromatic**: Publish the storybook to chromatic
- **deploy**: Build and deploy storybook to github pages
- **release**: Updates package version, create a release if is necessary using
  `release-please`
- **build-and-publish-alpha**: Build and publish the package to a release branch
  for each commit in a PR
  [check release and versioning](release-and-versioning.md#experimental-alpha-versions)
- **npm-publish**: Publish the package to the npmjs registry
-

```

```
