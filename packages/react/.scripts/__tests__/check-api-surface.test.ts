import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"

import { afterEach, describe, expect, it, vi } from "vitest"

import { analyze, type EntryDiff } from "../check-api-surface"

// Each test spins up TypeScript programs (the first parses the multi-megabyte
// default lib), which is slower than a typical unit test on CI runners.
vi.setConfig({ testTimeout: 30000 })

/**
 * Each test writes a minimal `f0.d.ts` for the "base" and "head" sides into
 * separate temp dirs and runs the real analyzer end-to-end (TypeScript program
 * + structural classification). The `experimental`/`ai` entries have no files
 * and are reported as skipped, so we assert only on the `f0` entry.
 */
const createdDirs: string[] = []

function dirWith(f0Dts: string): string {
  const dir = mkdtempSync(path.join(tmpdir(), "api-surface-test-"))
  writeFileSync(path.join(dir, "f0.d.ts"), f0Dts)
  createdDirs.push(dir)
  return dir
}

function f0(base: string, head: string): EntryDiff {
  const result = analyze(dirWith(base), dirWith(head))
  return result.entries.find((e) => e.entry === "f0")!
}

function names(diff: EntryDiff): string[] {
  return diff.breaking.map((b) => b.name).sort()
}

afterEach(() => {
  for (const dir of createdDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true })
  }
})

// A representative base surface: an exported props type, a component that
// consumes it, and a plain function.
const BASE = `
export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void };
export declare const Widget: (props: WidgetProps) => unknown;
export declare const compute: (x: number, y: string) => boolean;
`

describe("check-api-surface — catches breaking changes", () => {
  it("flags a removed export", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      `
    )
    expect(diff.breaking).toContainEqual(
      expect.objectContaining({ name: "compute", kind: "removed" })
    )
  })

  it("flags a renamed export (removed old + added new)", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void };
      export declare const WidgetRenamed: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    expect(diff.breaking).toContainEqual(
      expect.objectContaining({ name: "Widget", kind: "removed" })
    )
    expect(diff.added).toContain("WidgetRenamed")
  })

  it("flags a removed property on an existing type", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m" };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    expect(names(diff)).toContain("WidgetProps")
    const changed = diff.breaking.find((b) => b.name === "WidgetProps")
    expect(changed?.kind).toBe("changed")
    expect(changed?.reasons?.some((r) => r.includes("onClose"))).toBe(true)
  })

  it("flags a retyped property", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: number; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    const changed = diff.breaking.find((b) => b.name === "WidgetProps")
    expect(changed?.kind).toBe("changed")
    expect(changed?.reasons?.some((r) => r.includes("id"))).toBe(true)
  })

  it("flags a newly-added required property", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; title: string; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    const changed = diff.breaking.find((b) => b.name === "WidgetProps")
    expect(changed?.reasons?.some((r) => /required.*title/i.test(r))).toBe(true)
  })

  it("flags an optional property becoming required", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    const changed = diff.breaking.find((b) => b.name === "WidgetProps")
    expect(
      changed?.reasons?.some((r) => /size.*became required/i.test(r))
    ).toBe(true)
  })

  it("flags a changed function parameter type", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: string, y: string) => boolean;
      `
    )
    expect(diff.breaking.find((b) => b.name === "compute")?.kind).toBe(
      "changed"
    )
  })

  it("flags a removed function parameter", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number) => boolean;
      `
    )
    expect(diff.breaking.find((b) => b.name === "compute")?.kind).toBe(
      "changed"
    )
  })
})

describe("check-api-surface — does NOT flag non-breaking changes", () => {
  it("treats an identical surface as no change", () => {
    const diff = f0(BASE, BASE)
    expect(diff.breaking).toHaveLength(0)
    expect(diff.added).toHaveLength(0)
  })

  it("treats a brand-new export as additive (safe)", () => {
    const diff = f0(
      BASE,
      `${BASE}
      export declare const helper: (n: number) => number;
      export declare type HelperOptions = { verbose?: boolean };
      `
    )
    expect(diff.breaking).toHaveLength(0)
    expect(diff.added).toEqual(
      expect.arrayContaining(["HelperOptions", "helper"])
    )
  })

  it("treats a new OPTIONAL property as safe", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void; tone?: string };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    expect(diff.breaking).toHaveLength(0)
  })

  it("treats a required property becoming optional (widening) as safe", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id?: string; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string) => boolean;
      `
    )
    expect(diff.breaking).toHaveLength(0)
  })

  it("treats a new OPTIONAL function parameter as safe", () => {
    const diff = f0(
      BASE,
      `
      export declare type WidgetProps = { id: string; size?: "s" | "m"; onClose?: () => void };
      export declare const Widget: (props: WidgetProps) => unknown;
      export declare const compute: (x: number, y: string, z?: boolean) => boolean;
      `
    )
    expect(diff.breaking).toHaveLength(0)
  })
})

describe("check-api-surface — determinism", () => {
  it("reports no changes for identical surfaces in different directories", () => {
    // Same content, different temp dirs (different absolute paths): the
    // path/normalization must make this a no-op.
    const result = analyze(dirWith(BASE), dirWith(BASE))
    expect(result.hasBreaking).toBe(false)
    expect(result.breakingTotal).toBe(0)
    expect(result.addedTotal).toBe(0)
  })
})
