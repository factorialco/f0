import { mkdtempSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"

import { afterEach, describe, expect, it, vi } from "vitest"

import {
  analyze,
  buildCommentMarkdown,
  snapshotEntry,
  type AnalysisResult,
  type EntryDiff,
} from "../check-api-surface"

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

describe("check-api-surface — external type resolution", () => {
  // Regression: the rolled `.d.ts` is analyzed from a temp dir with no adjacent
  // `node_modules` (CI downloads the snapshots into sibling `_api/base` and
  // `_api/head` dirs). Bare imports like `react` must still resolve against the
  // package's own `node_modules`; otherwise `ForwardRefExoticComponent` degrades
  // to `any`, loses its call signature, and a forwardRef component is misread as
  // an `opaque` type — falsely flagging a function → forwardRef migration as a
  // "callable → opaque" shape change.
  it("resolves React types for a forwardRef component (callable, real props)", () => {
    const dir = dirWith(
      `
      import { ForwardRefExoticComponent, RefAttributes } from "react";
      export declare type WidgetProps = { id: string; size?: "s" | "m" };
      export declare const Widget: ForwardRefExoticComponent<Omit<WidgetProps, "ref"> & RefAttributes<HTMLDivElement>>;
      `
    )
    const widget = snapshotEntry(dir, "f0")!.get("Widget")!
    expect(widget.item.k).toBe("callable")
    // The props are resolved structurally, not collapsed to `any`.
    expect(widget.display).toContain("WidgetProps")
    expect(widget.display).not.toContain("<any>")
  })

  it("does not flag an unchanged forwardRef component", () => {
    const surface = `
      import { ForwardRefExoticComponent, RefAttributes } from "react";
      export declare type WidgetProps = { id: string; size?: "s" | "m" };
      export declare const Widget: ForwardRefExoticComponent<Omit<WidgetProps, "ref"> & RefAttributes<HTMLDivElement>>;
    `
    expect(f0(surface, surface).breaking).toHaveLength(0)
  })
})

describe("check-api-surface — unions and intersections", () => {
  // The F0SelectProps shape: a shared base intersected into several variants,
  // exported as a union, consumed by a component.
  const variantUnion = (base: string) => `
    export declare type SelectProps =
      | (${base} & { clearable?: false; value?: string } & { source: { fetch: () => void }; options?: never })
      | (${base} & { clearable?: false; value?: string } & { source?: never; options: Array<string> })
      | (${base} & { clearable: true; value?: string } & { source: { fetch: () => void }; options?: never })
      | (${base} & { clearable: true; value?: string } & { source?: never; options: Array<string> });
    export declare const Select: (props: SelectProps) => unknown;
  `
  const UNION_BASE = variantUnion("{ open?: boolean; label: string }")

  it("treats an optional prop added to a union-of-intersections base as safe", () => {
    const diff = f0(
      UNION_BASE,
      variantUnion(
        "{ open?: boolean; label: string; onFiltersChange?: (filters: Record<string, unknown>) => void }"
      )
    )
    expect(diff.breaking).toHaveLength(0)
  })

  it("flags a required prop added to a union-of-intersections base", () => {
    const diff = f0(
      UNION_BASE,
      variantUnion("{ open?: boolean; label: string; mode: string }")
    )
    const changed = diff.breaking.find((b) => b.name === "SelectProps")
    expect(changed?.reasons?.some((r) => /required.*mode/i.test(r))).toBe(true)
    // The same reason from every variant collapses into one line
    expect(
      changed?.reasons?.filter((r) => /required.*mode/i.test(r))
    ).toHaveLength(1)
  })

  it("flags a prop removed from a union-of-intersections base", () => {
    const diff = f0(UNION_BASE, variantUnion("{ label: string }"))
    const changed = diff.breaking.find((b) => b.name === "SelectProps")
    expect(changed?.reasons?.some((r) => r.includes("open"))).toBe(true)
  })

  it("flags a retyped prop inside a union variant", () => {
    const diff = f0(
      UNION_BASE,
      variantUnion("{ open?: boolean; label: number }")
    )
    expect(names(diff)).toContain("SelectProps")
  })

  it("flags a change in the number of union variants", () => {
    const diff = f0(
      UNION_BASE,
      `
      export declare type SelectProps =
        | ({ open?: boolean; label: string } & { clearable?: false; value?: string } & { source: { fetch: () => void }; options?: never })
        | ({ open?: boolean; label: string } & { clearable?: false; value?: string } & { source?: never; options: Array<string> });
      export declare const Select: (props: SelectProps) => unknown;
      `
    )
    const changed = diff.breaking.find((b) => b.name === "SelectProps")
    expect(changed?.reasons?.some((r) => /union variants/i.test(r))).toBe(true)
  })

  it("treats an optional prop added to a plain intersection as safe", () => {
    const diff = f0(
      `
      export declare type CardProps = { title: string } & { footer?: string };
      `,
      `
      export declare type CardProps = { title: string } & { footer?: string; sticky?: boolean };
      `
    )
    expect(diff.breaking).toHaveLength(0)
  })

  it("flags a member removed from a plain intersection", () => {
    const diff = f0(
      `
      export declare type CardProps = { title: string } & { footer?: string };
      `,
      `
      export declare type CardProps = { title: string } & {};
      `
    )
    const changed = diff.breaking.find((b) => b.name === "CardProps")
    expect(changed?.reasons?.some((r) => r.includes("footer"))).toBe(true)
  })

  it("still compares non-object intersections (branded primitives) by text", () => {
    const diff = f0(
      `
      export declare type Row = { id: string & { __brand: "id" } };
      `,
      `
      export declare type Row = { id: number & { __brand: "id" } };
      `
    )
    expect(names(diff)).toContain("Row")
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

describe("check-api-surface — comment size cap", () => {
  it("truncates an enormous comment so it fits well under the GitHub PR-comment ceiling", () => {
    // Synthesize many breaking changes with chunky before/after strings — this
    // is the shape of a PR that reshapes a widely-referenced shared type and
    // would otherwise blow past kernel ARG_MAX when funneled through composite
    // action env vars.
    const filler = "x".repeat(2000)
    const breaking = Array.from({ length: 200 }, (_, i) => ({
      name: `Export${i}`,
      kind: "changed" as const,
      reasons: [`\`prop${i}\` changed: \`string\` → \`number\``],
      before: filler,
      after: filler,
    }))
    const result: AnalysisResult = {
      hasBreaking: true,
      breakingTotal: breaking.length,
      addedTotal: 0,
      entries: [{ entry: "f0", breaking, added: [] }],
    }

    const md = buildCommentMarkdown(result)

    // Comfortably under GitHub's 65,536-char comment ceiling (and under the
    // ARG_MAX-driven ~60 KB cap the script enforces).
    expect(Buffer.byteLength(md, "utf8")).toBeLessThanOrEqual(64_000)
    // The header survives.
    expect(md).toContain("Breaking public API changes")
    // The truncation notice is appended.
    expect(md).toMatch(/truncated/i)
  })

  it("leaves a small comment untouched", () => {
    const result: AnalysisResult = {
      hasBreaking: false,
      breakingTotal: 0,
      addedTotal: 1,
      entries: [{ entry: "f0", breaking: [], added: ["NewThing"] }],
    }
    const md = buildCommentMarkdown(result)
    expect(md).not.toMatch(/truncated/i)
    expect(md).toContain("No breaking public API changes")
  })
})
