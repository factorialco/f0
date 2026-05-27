import { describe, expect, it, vi } from "vitest"

import type { GraphEdge } from "@/patterns/F0Graph"

import type { GraphNodeAdapter } from "../types"

import { getRecordKey, projectGraph } from "../projectGraph"

type Node = {
  id: string
  parentId: string | null
  parentIds?: string[]
  label?: string
}

const nodeAdapter: GraphNodeAdapter<Node> = (n) => ({
  parentId: n.parentId,
  parentIds: n.parentIds,
})

describe("getRecordKey", () => {
  it("uses idProvider when provided", () => {
    expect(getRecordKey({ id: "a" }, 0, (item) => item.id ?? "")).toBe("a")
    expect(getRecordKey({ id: 7 }, 3, (item) => item.id ?? 0)).toBe("7")
  })

  it("falls back to item.id when no idProvider", () => {
    expect(getRecordKey({ id: "x" }, 2, undefined)).toBe("x")
    expect(getRecordKey({ id: 42 }, 2, undefined)).toBe("42")
  })

  it("falls back to index when item.id is missing", () => {
    expect(getRecordKey({} as { id?: string }, 5, undefined)).toBe("5")
    expect(
      getRecordKey({ id: null } as unknown as { id: null }, 0, undefined)
    ).toBe("0")
  })
})

describe("projectGraph", () => {
  it("projects records into nodes and parent-derived edges", () => {
    const records: Node[] = [
      { id: "root", parentId: null },
      { id: "a", parentId: "root" },
      { id: "b", parentId: "root" },
      { id: "c", parentId: "a" },
    ]
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      idProvider: (n) => n.id,
    })
    expect(result.nodes.map((n) => n.id)).toEqual(["root", "a", "b", "c"])
    expect(result.edges.map((e) => `${e.source}->${e.target}`).sort()).toEqual([
      "a->c",
      "root->a",
      "root->b",
    ])
    expect(result.cycles).toEqual([])
    expect(result.duplicates).toEqual([])
  })

  it("treats records whose parent is missing as roots (no orphan dropping)", () => {
    const records: Node[] = [
      { id: "a", parentId: "missing" },
      { id: "b", parentId: "a" },
    ]
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      idProvider: (n) => n.id,
    })
    expect(result.nodes.map((n) => n.id)).toEqual(["a", "b"])
    // Edge to missing parent is skipped; edge between known records survives.
    expect(result.edges.map((e) => `${e.source}->${e.target}`)).toEqual([
      "a->b",
    ])
  })

  it("hard-removes records not in matchedIds and their descendants", () => {
    const records: Node[] = [
      { id: "root", parentId: null },
      { id: "kept", parentId: "root" },
      { id: "removed", parentId: "root" },
      { id: "descendant", parentId: "removed" },
    ]
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      idProvider: (n) => n.id,
      matchedIds: new Set(["root", "kept", "descendant"]),
    })
    const ids = result.nodes.map((n) => n.id).sort()
    // "removed" is dropped (not in matchedIds); "descendant" is dropped because
    // walking ancestors crosses a removed parent that exists in records.
    expect(ids).toEqual(["kept", "root"])
    expect(
      result.edges.some((e) => e.source === "removed" || e.target === "removed")
    ).toBe(false)
  })

  it("drops the cycle-closing edge and reports cycle participants", () => {
    const records: Node[] = [
      { id: "a", parentId: "c" },
      { id: "b", parentId: "a" },
      { id: "c", parentId: "b" },
    ]
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      idProvider: (n) => n.id,
    })
    expect(result.nodes.map((n) => n.id).sort()).toEqual(["a", "b", "c"])
    // Three potential edges; the cycle detector drops exactly one.
    expect(result.edges).toHaveLength(2)
    expect(new Set(result.cycles)).toEqual(new Set(["a", "b", "c"]))
  })

  it("reports duplicate keys and drops the duplicate occurrence", () => {
    const records: Node[] = [
      { id: "a", parentId: null },
      { id: "a", parentId: null, label: "dup" },
      { id: "b", parentId: "a" },
    ]
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      idProvider: (n) => n.id,
    })
    expect(result.duplicates).toEqual(["a"])
    expect(result.nodes).toHaveLength(2)
    expect(result.nodes.map((n) => n.id).sort()).toEqual(["a", "b"])
  })

  it("throws on duplicates when strictDuplicates is true", () => {
    const records: Node[] = [
      { id: "a", parentId: null },
      { id: "a", parentId: null },
    ]
    expect(() =>
      projectGraph<Node>({
        records,
        nodeAdapter,
        idProvider: (n) => n.id,
        strictDuplicates: true,
      })
    ).toThrow(/duplicate record key "a"/)
  })

  it("uses edgeAdapter when provided and filters edges referencing dropped nodes", () => {
    const records: Node[] = [
      { id: "a", parentId: null },
      { id: "b", parentId: null },
    ]
    const edges: GraphEdge[] = [
      { id: "e1", source: "a", target: "b" },
      { id: "e2", source: "a", target: "ghost" },
    ]
    const edgeAdapter = vi.fn(() => edges)
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      edgeAdapter,
      idProvider: (n) => n.id,
    })
    expect(edgeAdapter).toHaveBeenCalledTimes(1)
    expect(result.edges.map((e) => e.id)).toEqual(["e1"])
  })

  it("supports DAG topology via parentIds", () => {
    const records: Node[] = [
      { id: "p1", parentId: null },
      { id: "p2", parentId: null },
      { id: "c", parentId: "p1", parentIds: ["p1", "p2"] },
    ]
    const result = projectGraph<Node>({
      records,
      nodeAdapter,
      idProvider: (n) => n.id,
    })
    const child = result.nodes.find((n) => n.id === "c")
    expect(child?.parentIds).toEqual(["p1", "p2"])
    expect(result.edges.map((e) => `${e.source}->${e.target}`).sort()).toEqual([
      "p1->c",
      "p2->c",
    ])
  })
})
