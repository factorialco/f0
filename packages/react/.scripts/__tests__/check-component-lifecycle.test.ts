import { execFileSync } from "node:child_process"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"
import { afterEach, describe, expect, test } from "vitest"

import {
  classifyLifecycle,
  componentIdentity,
  exitCodeFor,
  NEW_COMPONENT_LABEL,
  parseCliArgs,
  scanGitRef,
  STABILIZATION_LABEL,
  unmetExperimentalRequirements,
} from "../check-component-lifecycle.mjs"

interface ComponentStatus {
  name: string
  zone: string
  apiStatus: string
  hasAutodocs: boolean
  hasStories: boolean
  storyCount: number
  hasUnitTests: boolean
  hasPlayFunction: boolean
  hasSnapshot: boolean
  hasMdxDocs: boolean
  docQuality: string
  a11yTier: string
  storyFile: string
  componentRoot?: string
}

function component(overrides: Partial<ComponentStatus> = {}): ComponentStatus {
  return {
    name: "Widget",
    zone: "experimental",
    apiStatus: "experimental",
    hasAutodocs: true,
    hasStories: true,
    storyCount: 3,
    hasUnitTests: true,
    hasPlayFunction: true,
    hasSnapshot: false,
    hasMdxDocs: true,
    docQuality: "acceptable",
    a11yTier: "enforced",
    storyFile: "experimental/F0Widget/F0Widget.stories.tsx",
    ...overrides,
  }
}

describe("experimental Phase 3 bar", () => {
  test("accepts the complete bar without requiring a snapshot", () => {
    expect(unmetExperimentalRequirements(component())).toEqual([])
  })

  test.each([
    ["zone", { zone: "components" }, "experimental or sds zone"],
    ["tag", { apiStatus: "unknown" }, "experimental tag"],
    ["autodocs", { hasAutodocs: false }, "autodocs"],
    ["story count", { storyCount: 2 }, "at least 3 exported stories"],
    ["unit tests", { hasUnitTests: false }, "unit tests"],
    ["play", { hasPlayFunction: false }, "play function"],
    ["MDX", { hasMdxDocs: false }, "MDX docs"],
    [
      "doc quality",
      { docQuality: "stub" },
      'docs "acceptable" tier (is "stub")',
    ],
    ["axe", { a11yTier: "todo" }, 'axe enforced (is "todo")'],
  ] as const)("reports a missing %s criterion", (_, override, message) => {
    expect(unmetExperimentalRequirements(component(override))).toContain(
      message
    )
  })

  test("accepts SDS as an experimental zone", () => {
    expect(unmetExperimentalRequirements(component({ zone: "sds" }))).toEqual(
      []
    )
  })
})

describe("lifecycle classification", () => {
  test("classifies a complete new experimental component", () => {
    expect(classifyLifecycle([], [component()])).toEqual({
      desiredLabels: [NEW_COMPONENT_LABEL],
      newComponents: ["Widget"],
      stabilizations: [],
      failures: [],
    })
  })

  test("labels and gates an incomplete new component", () => {
    const report = classifyLifecycle(
      [],
      [component({ hasAutodocs: false, storyCount: 1 })]
    )
    expect(report.desiredLabels).toEqual([NEW_COMPONENT_LABEL])
    expect(report.newComponents).toEqual([])
    expect(report.failures).toEqual([
      {
        kind: "new-component",
        name: "Widget",
        missing: ["autodocs", "at least 3 exported stories"],
      },
    ])
  })

  test("gates a new component that has no Storybook file", () => {
    const report = classifyLifecycle(
      [],
      [
        component({
          name: "Bare",
          zone: "sds",
          apiStatus: "unknown",
          hasAutodocs: false,
          hasStories: false,
          storyCount: 0,
          hasUnitTests: false,
          hasPlayFunction: false,
          hasMdxDocs: false,
          docQuality: "none",
          a11yTier: "todo",
          storyFile: "sds/chat/F0Bare/(missing)",
          componentRoot: "sds/chat/F0Bare",
        }),
      ]
    )

    expect(report.desiredLabels).toEqual([NEW_COMPONENT_LABEL])
    expect(report.failures[0]).toMatchObject({
      kind: "new-component",
      name: "Bare",
      missing: expect.arrayContaining([
        "experimental tag",
        "autodocs",
        "at least 3 exported stories",
        "unit tests",
        "play function",
        "MDX docs",
        'axe enforced (is "todo")',
      ]),
    })
  })

  test("detects a misplaced new experimental component so zone can fail", () => {
    const report = classifyLifecycle([], [component({ zone: "components" })])
    expect(report.failures[0]?.missing).toContain("experimental or sds zone")
  })

  test("detects a missing tag on a component in the experimental zone", () => {
    const report = classifyLifecycle([], [component({ apiStatus: "unknown" })])
    expect(report.failures[0]?.missing).toContain("experimental tag")
  })

  test("rejects a brand-new component placed directly in a stable zone", () => {
    const report = classifyLifecycle(
      [],
      [component({ zone: "components", apiStatus: "stable" })]
    )
    expect(report.desiredLabels).toEqual([NEW_COMPONENT_LABEL])
    expect(report.failures[0]?.missing).toEqual([
      "experimental or sds zone",
      "experimental tag",
    ])
  })

  test("classifies experimental to stable across a zone move", () => {
    const base = component({ name: "Widget" })
    const head = component({
      name: "Widget",
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: true,
      docQuality: "good",
    })
    expect(classifyLifecycle([base], [head])).toEqual({
      desiredLabels: [STABILIZATION_LABEL],
      newComponents: [],
      stabilizations: ["Widget"],
      failures: [],
    })
  })

  test("classifies stable debt graduating to the stable bar", () => {
    const base = component({
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: false,
    })
    const head = component({
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: true,
      docQuality: "good",
    })
    expect(classifyLifecycle([base], [head]).stabilizations).toEqual(["Widget"])
  })

  test("fails an attempted stabilization that remains below the stable bar", () => {
    const base = component()
    const head = component({
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: false,
      docQuality: "acceptable",
    })
    const report = classifyLifecycle([base], [head])
    expect(report.desiredLabels).toEqual([])
    expect(report.stabilizations).toEqual([])
    expect(report.failures[0]).toMatchObject({
      kind: "stabilization",
      missing: ["snapshot story", 'docs "good" tier (is "acceptable")'],
    })
  })

  test("ignores already-stable components, ordinary edits, and deletions", () => {
    const stable = component({
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: true,
      docQuality: "good",
    })
    const ordinary = component({
      name: "Button",
      zone: "components",
      apiStatus: "unknown",
    })
    expect(
      classifyLifecycle([stable, ordinary], [stable, { ...ordinary }])
    ).toEqual({
      desiredLabels: [],
      newComponents: [],
      stabilizations: [],
      failures: [],
    })
    expect(classifyLifecycle([ordinary], [])).toEqual({
      desiredLabels: [],
      newComponents: [],
      stabilizations: [],
      failures: [],
    })
  })

  test("ignores pre-existing stable debt until it actually graduates", () => {
    const debt = component({
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: false,
      docQuality: "stub",
    })
    expect(classifyLifecycle([debt], [{ ...debt }])).toEqual({
      desiredLabels: [],
      newComponents: [],
      stabilizations: [],
      failures: [],
    })
  })

  test("uses the component root fallback when a storyless component gains its first story", () => {
    const base = component({
      name: "F0Widget",
      apiStatus: "unknown",
      hasStories: false,
      componentRoot: "experimental/F0Widget",
    })
    const head = component({
      name: "Catalog/Widget",
      componentRoot: "experimental/F0Widget",
    })
    expect(classifyLifecycle([base], [head])).toEqual({
      desiredLabels: [],
      newComponents: [],
      stabilizations: [],
      failures: [],
    })
  })

  test("uses the directory fallback when only the Storybook title changes", () => {
    const base = component({
      name: "Old title",
      componentRoot: "experimental/F0Widget",
    })
    const head = component({
      name: "New title",
      componentRoot: "experimental/F0Widget",
    })
    expect(classifyLifecycle([base], [head])).toEqual({
      desiredLabels: [],
      newComponents: [],
      stabilizations: [],
      failures: [],
    })
  })

  test("normalizes the full title while keeping groups collision-safe", () => {
    expect(
      componentIdentity(component({ name: "Inputs/F0-Date_Picker" }))
    ).toBe("inputsf0datepicker")
    expect(
      componentIdentity(component({ name: "Filters/F0-Date_Picker" }))
    ).toBe("filtersf0datepicker")
  })

  test("returns both exact desired labels in deterministic order", () => {
    const stableBase = component({ name: "Alert" })
    const stableHead = component({
      name: "Alert",
      zone: "components",
      apiStatus: "stable",
      hasSnapshot: true,
      docQuality: "good",
    })
    const report = classifyLifecycle([stableBase], [stableHead, component()])
    expect(report.desiredLabels).toEqual([
      NEW_COMPONENT_LABEL,
      STABILIZATION_LABEL,
    ])
  })
})

describe("CLI contract", () => {
  test("parses base, JSON output, and report-only", () => {
    expect(
      parseCliArgs([
        "--",
        "--base",
        "origin/trunk",
        "--json-output",
        "out/report.json",
        "--report-only",
      ])
    ).toEqual({
      base: "origin/trunk",
      jsonOutput: "out/report.json",
      reportOnly: true,
    })
  })

  test("defaults to origin/main and rejects malformed arguments", () => {
    expect(parseCliArgs([])).toEqual({ base: "origin/main", reportOnly: false })
    expect(() => parseCliArgs(["--base"])).toThrow("--base requires a value")
    expect(() => parseCliArgs(["--wat"])).toThrow("Unknown argument")
  })

  test("report-only suppresses only the failure exit code", () => {
    const failed = classifyLifecycle([], [component({ hasAutodocs: false })])
    expect(exitCodeFor(failed, false)).toBe(1)
    expect(exitCodeFor(failed, true)).toBe(0)
    expect(exitCodeFor(classifyLifecycle([], []), false)).toBe(0)
  })
})

const tempRepos: string[] = []

afterEach(() => {
  for (const repo of tempRepos.splice(0)) {
    rmSync(repo, { recursive: true, force: true })
  }
})

test("scanGitRef materializes committed refs rather than reading the worktree", () => {
  const repo = mkdtempSync(join(tmpdir(), "f0-lifecycle-git-"))
  tempRepos.push(repo)
  const storyPath = join(
    repo,
    "packages/react/src/experimental/F0Widget/F0Widget.stories.tsx"
  )
  mkdirSync(dirname(storyPath), { recursive: true })
  writeFileSync(
    storyPath,
    'export default { title: "Widget", tags: ["experimental", "autodocs"] }\n' +
      "export const One = {}\nexport const Two = {}\nexport const Three = {}\n"
  )
  const bareComponentPath = join(
    repo,
    "packages/react/src/sds/chat/F0Bare/F0Bare.tsx"
  )
  mkdirSync(dirname(bareComponentPath), { recursive: true })
  writeFileSync(bareComponentPath, "export const F0Bare = () => null\n")
  const nestedInternalPath = join(
    repo,
    "packages/react/src/sds/chat/F0Bare/F0Internal/F0Internal.tsx"
  )
  mkdirSync(dirname(nestedInternalPath), { recursive: true })
  writeFileSync(nestedInternalPath, "export const F0Internal = () => null\n")
  const ordinaryFolderPath = join(
    repo,
    "packages/react/src/experimental/Widget/Widget.tsx"
  )
  mkdirSync(dirname(ordinaryFolderPath), { recursive: true })
  writeFileSync(ordinaryFolderPath, "export const Widget = () => null\n")
  execFileSync("git", ["init", "-q"], { cwd: repo })
  execFileSync("git", ["add", "."], { cwd: repo })
  execFileSync(
    "git",
    [
      "-c",
      "user.name=Lifecycle Test",
      "-c",
      "user.email=lifecycle@example.com",
      "commit",
      "-qm",
      "fixture",
    ],
    { cwd: repo }
  )

  writeFileSync(storyPath, 'export default { title: "Uncommitted" }\n')

  const scanned = scanGitRef(repo, "HEAD")
  expect(scanned).toHaveLength(2)
  expect(scanned.find((entry) => entry.name === "Widget")).toMatchObject({
    name: "Widget",
    zone: "experimental",
    apiStatus: "experimental",
    hasAutodocs: true,
    storyCount: 3,
  })
  expect(scanned.find((entry) => entry.name === "Bare")).toMatchObject({
    zone: "sds",
    apiStatus: "unknown",
    hasStories: false,
    storyCount: 0,
    componentRoot: "sds/chat/F0Bare",
  })
  expect(scanned.map((entry) => entry.name)).not.toContain("Internal")
})
