import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { afterEach, describe, expect, it } from "vitest"

import {
  analyzeRuntimeDependencies,
  findUnexpectedRuntimeCycles,
  type RuntimeDependencyAnalysis,
} from "../runtime-dependency-graph"

const createdDirectories: string[] = []

function analyze(files: Record<string, string>): RuntimeDependencyAnalysis {
  const projectRoot = mkdtempSync(path.join(tmpdir(), "f0-runtime-graph-"))
  createdDirectories.push(projectRoot)

  writeFileSync(
    path.join(projectRoot, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        baseUrl: ".",
        ignoreDeprecations: "6.0",
        jsx: "preserve",
        module: "esnext",
        moduleResolution: "bundler",
        paths: { "@/*": ["src/*"] },
        target: "esnext",
      },
      include: ["src"],
    })
  )

  for (const [relativePath, source] of Object.entries(files)) {
    const filePath = path.join(projectRoot, relativePath)
    mkdirSync(path.dirname(filePath), { recursive: true })
    writeFileSync(filePath, source)
  }

  return analyzeRuntimeDependencies({
    projectRoot,
    tsconfigPath: path.join(projectRoot, "tsconfig.json"),
  })
}

afterEach(() => {
  for (const directory of createdDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

describe("runtime dependency graph", () => {
  it("allows known cycles to shrink but rejects new or merged cycle members", () => {
    const baseline = [
      { files: ["src/a.ts", "src/b.ts", "src/c.ts"] },
      { files: ["src/d.ts", "src/e.ts"] },
    ]

    expect(
      findUnexpectedRuntimeCycles(
        [
          { files: ["src/a.ts", "src/b.ts"] },
          { files: ["src/d.ts", "src/e.ts"] },
        ],
        baseline
      )
    ).toEqual([])

    expect(
      findUnexpectedRuntimeCycles(
        [
          { files: ["src/a.ts", "src/b.ts", "src/new.ts"] },
          { files: ["src/c.ts", "src/d.ts"] },
        ],
        baseline
      )
    ).toEqual([
      { files: ["src/a.ts", "src/b.ts", "src/new.ts"] },
      { files: ["src/c.ts", "src/d.ts"] },
    ])
  })

  it("reports static runtime cycles as canonical strongly connected groups", () => {
    const result = analyze({
      "src/a.ts": 'import { b } from "./b"\nexport const a = b + 1',
      "src/b.ts": 'import { c } from "./c"\nexport const b = c + 1',
      "src/c.ts": 'import { a } from "./a"\nexport const c = a + 1',
    })

    expect(result.cycles).toEqual([
      { files: ["src/a.ts", "src/b.ts", "src/c.ts"] },
    ])
  })

  it("ignores dependencies erased by TypeScript", () => {
    const result = analyze({
      "src/explicit-a.ts":
        'import type { ExplicitB } from "./explicit-b"\nexport type ExplicitA = ExplicitB & { a: string }',
      "src/explicit-b.ts":
        'import type { ExplicitA } from "./explicit-a"\nexport type ExplicitB = ExplicitA & { b: string }',
      "src/inferred-a.ts":
        'import { InferredB } from "./inferred-b"\nexport type InferredA = InferredB & { a: string }',
      "src/inferred-b.ts":
        'import { InferredA } from "./inferred-a"\nexport type InferredB = InferredA & { b: string }',
    })

    expect(result.cycles).toEqual([])
  })

  it("resolves tsconfig path aliases", () => {
    const result = analyze({
      "src/alias-a.ts":
        'import { aliasB } from "@/alias-b"\nexport const aliasA = aliasB + 1',
      "src/alias-b.ts":
        'import { aliasA } from "@/alias-a"\nexport const aliasB = aliasA + 1',
    })

    expect(result.cycles).toEqual([
      { files: ["src/alias-a.ts", "src/alias-b.ts"] },
    ])
  })

  it("does not treat an asynchronous import as a static cycle", () => {
    const result = analyze({
      "src/a.ts": 'export async function loadB() { return import("./b") }',
      "src/b.ts": 'import { loadB } from "./a"\nexport { loadB }',
    })

    expect(result.cycles).toEqual([])
  })

  it.each([
    {
      error: /broken\.ts/,
      files: { "src/broken.ts": "export const =" },
      name: "invalid production syntax",
    },
    {
      error: /Could not resolve @\/missing/,
      files: {
        "src/entry.ts":
          'import { missing } from "@/missing"\nexport const value = missing',
      },
      name: "an unresolved internal alias",
    },
  ])("fails closed for $name", ({ error, files }) => {
    expect(() => analyze(files)).toThrow(error)
  })

  it("excludes stories and tests from the production graph", () => {
    const result = analyze({
      "src/runtime.ts": "export const runtime = true",
      "src/runtime.stories.ts":
        'import { runtime } from "./runtime"\nexport const story = runtime',
      "src/__tests__/runtime.test.ts":
        'import { runtime } from "../runtime"\nexport const testValue = runtime',
    })

    expect(Object.keys(result.graph)).toEqual(["src/runtime.ts"])
  })
})
