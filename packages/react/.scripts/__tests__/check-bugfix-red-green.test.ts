import { describe, expect, it } from "vitest"

import {
  isBugfixTitle,
  overlayFilesFrom,
  redGreenVerdict,
} from "../check-bugfix-red-green"

describe("isBugfixTitle", () => {
  it.each([
    "fix: prevent crash on empty options",
    "fix(F0Select): keep custom triggers full height",
    "fix!: breaking behavior correction",
    "fix(scope)!: breaking scoped fix",
    "  fix: tolerates surrounding whitespace  ",
  ])("accepts %j", (title) => {
    expect(isBugfixTitle(title)).toBe(true)
  })

  it.each([
    "feat: add new component",
    "fixture: not a fix type",
    "fixes the thing",
    "Fix: conventional commit types are lowercase",
    "chore(fix): fix is not the type here",
    "",
  ])("rejects %j", (title) => {
    expect(isBugfixTitle(title)).toBe(false)
  })
})

describe("overlayFilesFrom", () => {
  it("collects added and modified unit-test files in packages/react/src", () => {
    const diff = [
      "M\tpackages/react/src/components/F0Button/__tests__/F0Button.test.tsx",
      "A\tpackages/react/src/components/F0Select/__tests__/regression.test.ts",
      "M\tpackages/react/src/components/F0Button/F0Button.tsx",
    ].join("\n")

    expect(overlayFilesFrom(diff)).toEqual({
      testFiles: [
        "packages/react/src/components/F0Button/__tests__/F0Button.test.tsx",
        "packages/react/src/components/F0Select/__tests__/regression.test.ts",
      ],
      supportFiles: [],
    })
  })

  it("collects .spec.ts(x) files too — the repo uses both conventions", () => {
    const diff = [
      "M\tpackages/react/src/sds/Home/HomeListItem/index.spec.tsx",
      "A\tpackages/react/src/lib/__tests__/parse.spec.ts",
      "M\tpackages/react/src/sds/Home/HomeListItem/index.tsx",
    ].join("\n")

    expect(overlayFilesFrom(diff)).toEqual({
      testFiles: [
        "packages/react/src/sds/Home/HomeListItem/index.spec.tsx",
        "packages/react/src/lib/__tests__/parse.spec.ts",
      ],
      supportFiles: [],
    })
  })

  it("collects .test. and .spec. files from the same diff", () => {
    const diff = [
      "A\tpackages/react/src/components/F0Tag/__tests__/F0Tag.test.tsx",
      "A\tpackages/react/src/components/F0Tag/F0Tag.spec.ts",
    ].join("\n")

    expect(overlayFilesFrom(diff).testFiles).toEqual([
      "packages/react/src/components/F0Tag/__tests__/F0Tag.test.tsx",
      "packages/react/src/components/F0Tag/F0Tag.spec.ts",
    ])
  })

  it("does not mistake a .spec. helper name for a test file", () => {
    const diff = [
      "A\tpackages/react/src/components/F0Tag/__tests__/spec.fixtures.ts",
      "A\tpackages/react/src/components/F0Tag/specimen.ts",
    ].join("\n")

    expect(overlayFilesFrom(diff)).toEqual({
      testFiles: [],
      supportFiles: [
        "packages/react/src/components/F0Tag/__tests__/spec.fixtures.ts",
      ],
    })
  })

  it("collects tests for the repo's own scripts", () => {
    const diff = [
      "M\tpackages/react/.scripts/__tests__/check-api-surface.test.ts",
      "M\tpackages/react/.scripts/check-api-surface.ts",
    ].join("\n")

    expect(overlayFilesFrom(diff).testFiles).toEqual([
      "packages/react/.scripts/__tests__/check-api-surface.test.ts",
    ])
  })

  it("ignores files outside the tested roots", () => {
    const diff = "M\tpackages/react/vite.config.ts"

    expect(overlayFilesFrom(diff).testFiles).toEqual([])
  })

  it("ignores deleted files", () => {
    const diff =
      "D\tpackages/react/src/components/F0Old/__tests__/F0Old.test.tsx"

    expect(overlayFilesFrom(diff).testFiles).toEqual([])
  })

  it("keeps the new path of a rename", () => {
    const diff =
      "R097\tpackages/react/src/a/__tests__/old.test.tsx\tpackages/react/src/a/__tests__/new.test.tsx"

    expect(overlayFilesFrom(diff).testFiles).toEqual([
      "packages/react/src/a/__tests__/new.test.tsx",
    ])
  })

  it("separates __tests__/ helpers from the test files themselves", () => {
    const diff = [
      "M\tpackages/react/src/components/F0Card/__tests__/F0Card.test.tsx",
      "A\tpackages/react/src/components/F0Card/__tests__/factories.ts",
    ].join("\n")

    expect(overlayFilesFrom(diff)).toEqual({
      testFiles: [
        "packages/react/src/components/F0Card/__tests__/F0Card.test.tsx",
      ],
      supportFiles: [
        "packages/react/src/components/F0Card/__tests__/factories.ts",
      ],
    })
  })

  it("ignores source, story, and out-of-package changes", () => {
    const diff = [
      "M\tpackages/react/src/components/F0Button/F0Button.tsx",
      "M\tpackages/react/src/components/F0Button/__stories__/F0Button.stories.tsx",
      "M\tpackages/react-native/src/__tests__/thing.test.tsx",
      "M\tpackages/react/vitest.config.ts",
    ].join("\n")

    expect(overlayFilesFrom(diff)).toEqual({ testFiles: [], supportFiles: [] })
  })

  it("returns nothing for an empty diff", () => {
    expect(overlayFilesFrom("")).toEqual({ testFiles: [], supportFiles: [] })
  })
})

describe("redGreenVerdict", () => {
  const testFiles = ["packages/react/src/x/__tests__/x.test.tsx"]

  it("fails when the PR changes no unit test", () => {
    const verdict = redGreenVerdict({ testFiles: [] })

    expect(verdict.ok).toBe(false)
    expect(verdict.code).toBe("no-tests")
  })

  it("fails when the tests already pass on the base (bug not reproduced)", () => {
    const verdict = redGreenVerdict({ testFiles, baseRunFailed: false })

    expect(verdict.ok).toBe(false)
    expect(verdict.code).toBe("green-on-base")
  })

  it("fails when the tests still fail with the fix applied", () => {
    const verdict = redGreenVerdict({
      testFiles,
      baseRunFailed: true,
      prRunPassed: false,
    })

    expect(verdict.ok).toBe(false)
    expect(verdict.code).toBe("red-on-pr")
  })

  it("passes when the tests fail on the base and pass with the fix", () => {
    const verdict = redGreenVerdict({
      testFiles,
      baseRunFailed: true,
      prRunPassed: true,
    })

    expect(verdict).toMatchObject({ ok: true, code: "pass" })
  })
})
