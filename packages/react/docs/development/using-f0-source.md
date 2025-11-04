# Using F0 "source"

## Motivation

For development scenarios is necessary to be agile and be able to apply changes
in F0 and check how then integrates in the consumer (ex. factorial's monorepo)

In this scenario the regular release process (build, publish, update
dependency's version on the consumer and update) is very slow and doesn't
provide a fast feedback of the changes.

Use the `f0`'s source as dependencies has a lot of tradeoffs and issues:
aliases, vite plugins, etc. needs to be configured in the same way in the
consumer of `f0`

### Strategy

Building the library will be necessary to use it in the same way as in
production, but in some scenarios (like local development) we can skip
publishing and reinstalling (check how to: [in local development](#local)

## How to

### Using an specific commit

Check [release and versioning](release-and-versioning.md) for more information
about the versioning and the commit and how to use it in local

> IMPORTANT: Remember to remove use a stable version before to merge into `main`
> or release

### How to use local version of `f0` in your local repo (ex. `factorial`'s monorepo) {#local}

This applies when both `f0` and `factorial`'s monorepo are in the local computer

1. Go to the `f0` folder: `cd f0`
2. Run `pnpm build:watch` to rebuild the project on any change
3. Run `pnpm link --global` to add the package to the local links
4. Go to the factorial app monorepo: `cd factorial/frontend`
5. Run `pnpm link --global @factorialco/f0-react` to use the local version of
   the package

### How to use local version of `f0` using sync

This applies when `f0` is in your local computer and `factorial`'s monorepo is
in coder's dev environment

**Prerequisites:**

- [rsync](https://linux.die.net/man/1/rsync) in your local computer:
  `brew install rsync`
- (optional) Create if not exists `packages/react/.env.local` and add this line
  `F0_REMOTE_SYNC=[your application]`, for example:
  `F0_REMOTE_SYNC=/home/sergio/factorial/frontend`
  > This file is in the `.gitignore` file, so it won't be pushed to the
  > repository
- Add folligin to target workspace vite.config.ts

```
watch: {
      ignored: ['!**/node_modules/@factorialco/f0-react/**'],
    }
```

**Steps:**

1. Go to the `f0` folder: `cd f0/packages/react`
2. Run `pnpm dev:sync [target]` to rebuild the project on any change and sync
   that build to target. e.g. `pnpm dev:sync /works/factorial/frontend`

> Now on each change in the `f0`'s source code, the changes will be reflected in
> the target project and the frontend will be reloaded using always the latest
> `f0`'s code.
