import { describe, expect, it } from "vitest"
import {
  buildDebtFile,
  check,
  lintablePaths,
  reportResult,
  ruleIdFromCode,
  type DebtFile,
  type Finding,
} from "../check-lint-debt"

const finding = (
  file: string,
  rule = "sonarjs/cognitive-complexity",
  line = 1
): Finding => ({ file, rule, line, message: "too complex" })

const baseline = (files: DebtFile["files"]): DebtFile => ({
  note: "",
  total: Object.values(files)
    .flatMap((counts) => Object.values(counts))
    .reduce((sum, n) => sum + n, 0),
  rules: {},
  files,
})

describe("ruleIdFromCode", () => {
  it("maps oxlint's JSON codes to the ids used in .oxlintrc.json", () => {
    expect(ruleIdFromCode("sonarjs(cognitive-complexity)")).toBe(
      "sonarjs/cognitive-complexity"
    )
    expect(ruleIdFromCode("eslint(eqeqeq)")).toBe("eqeqeq")
    expect(ruleIdFromCode("typescript-eslint(no-explicit-any)")).toBe(
      "typescript/no-explicit-any"
    )
    expect(ruleIdFromCode("eslint-plugin-react(no-array-index-key)")).toBe(
      "react/no-array-index-key"
    )
  })
})

describe("check", () => {
  it("passes when every file matches its baseline", () => {
    const result = check(
      [finding("src/a.tsx"), finding("src/a.tsx"), finding("src/b.tsx")],
      baseline({
        "src/a.tsx": { "sonarjs/cognitive-complexity": 2 },
        "src/b.tsx": { "sonarjs/cognitive-complexity": 1 },
      })
    )
    expect(result.added).toEqual([])
    expect(result.fixed).toEqual([])
  })

  it("blocks a file whose count for a rule went up", () => {
    const result = check(
      [
        finding("src/a.tsx", undefined, 10),
        finding("src/a.tsx", undefined, 20),
      ],
      baseline({ "src/a.tsx": { "sonarjs/cognitive-complexity": 1 } })
    )
    expect(result.added).toEqual([
      {
        file: "src/a.tsx",
        rule: "sonarjs/cognitive-complexity",
        baseline: 1,
        current: 2,
      },
    ])
    // Both warnings are reported: the rule cannot tell which one is new.
    expect(result.addedFindings.map((f) => f.line)).toEqual([10, 20])
  })

  it("blocks a new file with any warning", () => {
    const result = check([finding("src/new.tsx")], baseline({}))
    expect(result.added).toHaveLength(1)
    expect(result.added[0].baseline).toBe(0)
  })

  it("asks for --update when a count went down", () => {
    const result = check(
      [finding("src/a.tsx")],
      baseline({ "src/a.tsx": { "sonarjs/cognitive-complexity": 3 } })
    )
    expect(result.added).toEqual([])
    expect(result.fixed).toEqual([
      {
        file: "src/a.tsx",
        rule: "sonarjs/cognitive-complexity",
        baseline: 3,
        current: 1,
      },
    ])
  })

  it("keeps rules apart within one file", () => {
    const result = check(
      [finding("src/a.tsx", "react/no-array-index-key")],
      baseline({ "src/a.tsx": { "sonarjs/cognitive-complexity": 1 } })
    )
    expect(result.added.map((d) => d.rule)).toEqual([
      "react/no-array-index-key",
    ])
    expect(result.fixed.map((d) => d.rule)).toEqual([
      "sonarjs/cognitive-complexity",
    ])
  })

  it("with a scope, ignores baseline files that were not linted", () => {
    const result = check(
      [finding("src/a.tsx")],
      baseline({
        "src/a.tsx": { "sonarjs/cognitive-complexity": 1 },
        "src/untouched.tsx": { "sonarjs/cognitive-complexity": 4 },
      }),
      ["src/a.tsx"]
    )
    expect(result.added).toEqual([])
    expect(result.fixed).toEqual([])
    expect(result.staleFiles).toEqual([])
  })

  it("reports a baseline file that no longer exists in full mode", () => {
    const result = check(
      [],
      baseline({
        "src/does-not-exist-anymore.tsx": { "sonarjs/cognitive-complexity": 1 },
      })
    )
    expect(result.staleFiles).toEqual(["src/does-not-exist-anymore.tsx"])
    expect(result.added).toEqual([])
  })
})

describe("reportResult", () => {
  const withFixed = () =>
    check(
      [finding("src/a.tsx")],
      baseline({ "src/a.tsx": { "sonarjs/cognitive-complexity": 3 } })
    )

  it("fails on a debt reduction by default, so CI forces the baseline to shrink", () => {
    expect(reportResult([], withFixed())).toBe(false)
  })

  it("passes on a debt reduction when the caller opts out, for the pre-commit hook", () => {
    expect(reportResult([], withFixed(), { blockOnFixed: false })).toBe(true)
  })

  it("fails on a lint error whatever the debt says", () => {
    const clean = check([], baseline({}))
    expect(reportResult([finding("src/a.tsx", "eqeqeq")], clean)).toBe(false)
  })
})

describe("lintablePaths", () => {
  it("keeps the src files oxlint reads and drops the rest", () => {
    expect(
      lintablePaths([
        "src/a.tsx",
        "src/b.ts",
        "src/c.css",
        ".scripts/check-lint-debt.ts",
      ])
    ).toEqual(["src/a.tsx", "src/b.ts"])
  })

  it("returns nothing when no path is linted, so the hook stays quiet", () => {
    expect(lintablePaths(["package.json", ".oxlintrc.json"])).toEqual([])
  })
})

describe("buildDebtFile", () => {
  it("counts per file and per rule, sorted, with totals", () => {
    const debt = buildDebtFile([
      finding("src/b.tsx"),
      finding("src/a.tsx", "react/no-array-index-key"),
      finding("src/a.tsx"),
      finding("src/a.tsx"),
    ])
    expect(debt.total).toBe(4)
    expect(debt.rules).toEqual({
      "react/no-array-index-key": 1,
      "sonarjs/cognitive-complexity": 3,
    })
    expect(Object.keys(debt.files)).toEqual(["src/a.tsx", "src/b.tsx"])
    expect(debt.files["src/a.tsx"]).toEqual({
      "react/no-array-index-key": 1,
      "sonarjs/cognitive-complexity": 2,
    })
  })
})
