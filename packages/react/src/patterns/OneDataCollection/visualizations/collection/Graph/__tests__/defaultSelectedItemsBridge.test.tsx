import { waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { F0Graph } from "@/patterns/F0Graph"
import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import { createEagerSource, stubRenderNode, type TestPerson } from "./_helpers"

vi.mock("@/patterns/F0Graph", async () => {
  const actual =
    await vi.importActual<typeof import("@/patterns/F0Graph")>(
      "@/patterns/F0Graph"
    )
  return {
    ...actual,
    F0Graph: vi.fn(() => <div data-testid="f0graph-mock" />),
  }
})

const f0GraphMock = vi.mocked(F0Graph)
const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

const records: TestPerson[] = [
  { id: "1", name: "Root", parentId: null },
  { id: "2", name: "Child A", parentId: "1" },
  { id: "3", name: "Child B", parentId: "1" },
]

describe("GraphCollection defaultSelectedItems bridge", () => {
  beforeEach(() => {
    f0GraphMock.mockClear()
  })

  // Partial coverage: the cross-visualization select-all flow lives in
  // OneDataCollection + the bulk-actions toolbar, which is out of scope for
  // a unit test of GraphCollection itself. Here we verify the bridge — when
  // the source already declares everything as selected via `defaultSelectedItems`,
  // GraphCollection surfaces those ids to F0Graph as `selectedNodes`.
  //
  // TODO(Phase 3): integration test at OneDataCollection level for
  // cross-visualization select-all — mount OneDataCollection with both a
  // Table and a Graph visualization, click select-all in the toolbar, expand
  // a graph node, and assert the newly loaded children render as checked.

  it("surfaces source.defaultSelectedItems as F0Graph selectedNodes", async () => {
    const items = new Map<
      string | number,
      { id: string | number; checked: boolean }
    >([
      ["1", { id: "1", checked: true }],
      ["2", { id: "2", checked: true }],
      ["3", { id: "3", checked: true }],
    ])
    const source = createEagerSource(records, {
      defaultSelectedItems: {
        allSelected: true,
        items,
        groups: new Map(),
      },
    })

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = f0GraphMock.mock.calls[
        f0GraphMock.mock.calls.length - 1
      ][0] as unknown as { selectedNodes?: Set<string> }
      expect(props.selectedNodes).toBeInstanceOf(Set)
      expect(props.selectedNodes?.size ?? 0).toBe(3)
    })

    const props = f0GraphMock.mock.calls[
      f0GraphMock.mock.calls.length - 1
    ][0] as unknown as { selectedNodes: Set<string> }
    expect(props.selectedNodes.has("1")).toBe(true)
    expect(props.selectedNodes.has("2")).toBe(true)
    expect(props.selectedNodes.has("3")).toBe(true)
  })

  it("starts with empty selectedNodes when defaultSelectedItems is omitted", async () => {
    zeroRender(
      <GraphCollection
        source={createEagerSource(records)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = f0GraphMock.mock.calls[
        f0GraphMock.mock.calls.length - 1
      ][0] as unknown as { nodes?: unknown[]; selectedNodes?: Set<string> }
      expect(Array.isArray(props.nodes)).toBe(true)
    })

    const props = f0GraphMock.mock.calls[
      f0GraphMock.mock.calls.length - 1
    ][0] as unknown as { selectedNodes: Set<string> }
    expect(props.selectedNodes).toBeInstanceOf(Set)
    expect(props.selectedNodes.size).toBe(0)
  })
})
