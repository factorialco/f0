import { execFileSync } from "node:child_process"
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"
import { afterEach, expect, test } from "vitest"

import {
  classifyLifecycle,
  NEW_COMPONENT_LABEL,
  scanGitRef,
} from "../check-component-lifecycle.mjs"

const tempRepos: string[] = []

function write(repo: string, relativePath: string, content: string) {
  const path = join(repo, relativePath)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, content)
}

function commit(repo: string, message: string) {
  execFileSync("git", ["add", "."], { cwd: repo })
  execFileSync(
    "git",
    [
      "-c",
      "user.name=Lifecycle Eval",
      "-c",
      "user.email=lifecycle-eval@example.com",
      "commit",
      "-qm",
      message,
    ],
    { cwd: repo }
  )
}

afterEach(() => {
  for (const repo of tempRepos.splice(0)) {
    rmSync(repo, { recursive: true, force: true })
  }
})

test("evaluates a complete component and a missing-story bypass from committed trees", () => {
  const repo = mkdtempSync(join(tmpdir(), "f0-lifecycle-eval-"))
  tempRepos.push(repo)
  execFileSync("git", ["init", "-q"], { cwd: repo })

  write(repo, "packages/react/src/.gitkeep", "")
  commit(repo, "base")
  const base = execFileSync("git", ["rev-parse", "HEAD"], {
    cwd: repo,
    encoding: "utf-8",
  }).trim()

  write(
    repo,
    "packages/react/src/experimental/Components/F0Evaluated/__stories__/F0Evaluated.stories.tsx",
    `export default {
  title: "Components/Evaluated",
  tags: ["autodocs", "experimental"],
  parameters: { a11y: { test: "error" } },
}
export const Default = { play: async () => {} }
export const EdgeCase = {}
export const FullConfiguration = {}
`
  )
  write(
    repo,
    "packages/react/src/experimental/Components/F0Evaluated/__stories__/F0Evaluated.mdx",
    `# F0Evaluated

## Anatomy

The component exposes a documented public surface for the lifecycle evaluation fixture.

<Controls />

## Accessibility

The example uses blocking accessibility checks and documents how consumers provide an
accessible name. This additional explanation keeps the fixture above the stub threshold while
representing the minimum Acceptable documentation tier used by experimental components.
`
  )
  write(
    repo,
    "packages/react/src/experimental/Components/F0Evaluated/__tests__/F0Evaluated.test.tsx",
    'test("public API", () => {})\n'
  )
  write(
    repo,
    "packages/react/src/experimental/Components/F0Evaluated/F0Evaluated.tsx",
    "export const F0Evaluated = () => null\n"
  )
  write(
    repo,
    "packages/react/src/experimental/Components/F0Evaluated/index.tsx",
    'export * from "./F0Evaluated"\n'
  )
  commit(repo, "complete component")

  const completeReport = classifyLifecycle(
    scanGitRef(repo, base),
    scanGitRef(repo, "HEAD")
  )
  expect(completeReport).toMatchObject({
    desiredLabels: [NEW_COMPONENT_LABEL],
    newComponents: ["Components/Evaluated"],
    failures: [],
  })

  write(
    repo,
    "packages/react/src/sds/chat/F0Invisible/F0Invisible.tsx",
    "export const F0Invisible = () => null\n"
  )
  commit(repo, "component without stories")

  const bypassReport = classifyLifecycle(
    scanGitRef(repo, base),
    scanGitRef(repo, "HEAD")
  )
  expect(bypassReport.failures).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        kind: "new-component",
        name: "Invisible",
        missing: expect.arrayContaining([
          "experimental tag",
          "autodocs",
          "at least 3 exported stories",
        ]),
      }),
    ])
  )
})
