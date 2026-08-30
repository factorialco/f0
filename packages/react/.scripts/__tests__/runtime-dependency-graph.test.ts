import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { afterEach, describe, expect, it } from "vitest"

import {
  analyzeRuntimeDependencies,
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

  it("reports a runtime self-import", () => {
    const result = analyze({
      "src/self.ts":
        'import { self } from "./self"\nexport const next = self + 1',
    })

    expect(result.cycles).toEqual([{ files: ["src/self.ts"] }])
  })

  it("fails closed when a production file cannot be parsed", () => {
    expect(() =>
      analyze({
        "src/broken.ts": "export const =",
      })
    ).toThrow(/broken\.ts/)
  })

  it("fails closed when an internal alias cannot be resolved", () => {
    expect(() =>
      analyze({
        "src/entry.ts":
          'import { missing } from "@/missing"\nexport const value = missing',
      })
    ).toThrow(/Could not resolve @\/missing/)
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

  it("returns the same canonical result on repeated analysis", () => {
    const files = {
      "src/z.ts": 'import { y } from "./y"\nexport const z = y',
      "src/y.ts": 'import { z } from "./z"\nexport const y = z',
      "src/b.ts": 'import { a } from "./a"\nexport const b = a',
      "src/a.ts": 'import { b } from "./b"\nexport const a = b',
    }

    expect(analyze(files).cycles).toEqual(analyze(files).cycles)
  })
})
