import { waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { F0Graph, type F0GraphDetailPanelProps } from "@/patterns/F0Graph"
import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import {
  createEagerSource,
  createPaginatedSource,
  stubRenderNode,
  type TestPerson,
} from "./_helpers"

// Mock F0Graph as a thin spy so we can capture the props GraphCollection
// passes and invoke the wired adapters ourselves.
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

type CapturedProps = Parameters<typeof F0Graph>[0]

const lastF0GraphProps = (): CapturedProps => {
  const calls = f0GraphMock.mock.calls
  if (calls.length === 0) throw new Error("F0Graph was never rendered")
  return calls[calls.length - 1][0] as CapturedProps
}

const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

const eagerRecords: TestPerson[] = [
  { id: "1", name: "Root", parentId: null },
  { id: "2", name: "Child", parentId: "1" },
  { id: "3", name: "Leaf", parentId: "2" },
]

describe("GraphCollection detailPanel adapter", () => {
  beforeEach(() => {
    f0GraphMock.mockClear()
  })

  afterEach(() => {
    f0GraphMock.mockClear()
  })

  it("forwards detailPanel to F0Graph and the adapter receives the original record", async () => {
    const detailPanel = vi.fn(
      (
        record: TestPerson
      ): Omit<
        F0GraphDetailPanelProps,
        "open" | "onClose" | "width" | "ariaLabel"
      > => ({ variant: "default", title: record.name })
    )

    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        detailPanel={detailPanel}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps() as unknown as {
        detailPanel?: unknown
      }
      expect(typeof props.detailPanel).toBe("function")
    })

    const props = lastF0GraphProps() as unknown as {
      detailPanel: (node: { id: string }) => unknown
    }

    const result = props.detailPanel({ id: "2" }) as {
      variant: string
      title: string
    }

    expect(detailPanel).toHaveBeenCalledTimes(1)
    const received = detailPanel.mock.calls[0][0]
    expect(received.id).toBe("2")
    expect(received.name).toBe("Child")
    expect(received.parentId).toBe("1")
    expect(result).toEqual({ variant: "default", title: "Child" })
  })

  it("does not forward detailPanel when the consumer omits the callback", async () => {
    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(f0GraphMock.mock.calls.length).toBeGreaterThan(0)
    })

    const props = lastF0GraphProps() as unknown as Record<string, unknown>
    expect(props.detailPanel).toBeUndefined()
  })

  it("returns a default-variant placeholder when the node id does not match any record", async () => {
    const detailPanel = vi.fn(
      (
        record: TestPerson
      ): Omit<
        F0GraphDetailPanelProps,
        "open" | "onClose" | "width" | "ariaLabel"
      > => ({ variant: "default", title: record.name })
    )

    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        detailPanel={detailPanel}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps() as unknown as { detailPanel?: unknown }
      expect(typeof props.detailPanel).toBe("function")
    })

    const props = lastF0GraphProps() as unknown as {
      detailPanel: (node: { id: string }) => unknown
    }

    const result1 = props.detailPanel({ id: "missing" }) as {
      variant: string
      title: string
    }
    const result2 = props.detailPanel({ id: "missing" }) as unknown

    expect(detailPanel).not.toHaveBeenCalled()
    expect(result1).toEqual({ variant: "default", title: "missing" })
    expect(result2).toEqual({ variant: "default", title: "missing" })
  })

  it("resolves records from the lazy-loaded record cache (loadChildren mode)", async () => {
    const rootRecords: TestPerson[] = [
      { id: "root", name: "Root", parentId: null },
    ]
    const childRecords: TestPerson[] = [
      { id: "child-a", name: "Alpha", parentId: "root" },
    ]
    const loadChildren = vi.fn(
      async (
        _id: string,
        _opts: { signal: AbortSignal }
      ): Promise<TestPerson[]> => childRecords
    )
    const detailPanel = vi.fn(
      (
        record: TestPerson
      ): Omit<
        F0GraphDetailPanelProps,
        "open" | "onClose" | "width" | "ariaLabel"
      > => ({ variant: "default", title: record.name })
    )

    zeroRender(
      <GraphCollection
        source={createPaginatedSource(rootRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        detailPanel={detailPanel}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    // Wait for root render so F0Graph (and our wrapped loadChildren) exist.
    await waitFor(() => {
      const props = lastF0GraphProps() as unknown as { rootNodes?: unknown[] }
      expect(Array.isArray(props.rootNodes)).toBe(true)
    })

    const wrapped = (
      lastF0GraphProps() as unknown as {
        loadChildren: (id: string) => Promise<unknown>
      }
    ).loadChildren
    await wrapped("root")

    const adapter = (
      lastF0GraphProps() as unknown as {
        detailPanel: (node: { id: string }) => unknown
      }
    ).detailPanel

    const result = adapter({ id: "child-a" }) as {
      variant: string
      title: string
    }
    expect(detailPanel).toHaveBeenCalledTimes(1)
    const received = detailPanel.mock.calls[0][0]
    expect(received.id).toBe("child-a")
    expect(received.name).toBe("Alpha")
    expect(result).toEqual({ variant: "default", title: "Alpha" })
  })
})

describe("GraphCollection highlightedNodes wiring", () => {
  beforeEach(() => {
    f0GraphMock.mockClear()
  })

  afterEach(() => {
    f0GraphMock.mockClear()
  })

  it("forwards an array result as a Set<string>", async () => {
    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        highlightedNodes={(records) =>
          records.filter((r) => r.parentId !== null).map((r) => r.id)
        }
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps() as unknown as {
        highlightedNodes?: unknown
      }
      expect(props.highlightedNodes).toBeInstanceOf(Set)
    })

    const props = lastF0GraphProps() as unknown as {
      highlightedNodes: Set<string>
    }
    expect(Array.from(props.highlightedNodes).sort()).toEqual(["2", "3"])
  })

  it("forwards a Set result as a Set<string>", async () => {
    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        highlightedNodes={() => new Set(["1"])}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps() as unknown as {
        highlightedNodes?: unknown
      }
      expect(props.highlightedNodes).toBeInstanceOf(Set)
    })

    const props = lastF0GraphProps() as unknown as {
      highlightedNodes: Set<string>
    }
    expect(Array.from(props.highlightedNodes)).toEqual(["1"])
  })

  it("forwards an empty Set when the callback returns an empty array", async () => {
    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        highlightedNodes={() => []}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps() as unknown as {
        highlightedNodes?: unknown
      }
      expect(props.highlightedNodes).toBeInstanceOf(Set)
    })

    const props = lastF0GraphProps() as unknown as {
      highlightedNodes: Set<string>
    }
    expect(props.highlightedNodes.size).toBe(0)
  })

  it("does not forward highlightedNodes when the consumer omits the callback", async () => {
    zeroRender(
      <GraphCollection
        source={createEagerSource(eagerRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(f0GraphMock.mock.calls.length).toBeGreaterThan(0)
    })

    const props = lastF0GraphProps() as unknown as Record<string, unknown>
    expect(props.highlightedNodes).toBeUndefined()
  })
})
