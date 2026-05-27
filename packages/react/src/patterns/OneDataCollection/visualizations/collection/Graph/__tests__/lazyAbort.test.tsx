import { waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { F0Graph } from "@/patterns/F0Graph"
import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import {
  createPaginatedSource,
  stubRenderNode,
  type TestPerson,
} from "./_helpers"

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
const rootRecords: TestPerson[] = [{ id: "root", name: "Root", parentId: null }]

const getWrappedLoadChildren = (): ((
  id: string
) => Promise<{ id: string }[]>) => {
  const calls = f0GraphMock.mock.calls
  const last = calls[calls.length - 1][0] as unknown as {
    loadChildren?: (id: string) => Promise<{ id: string }[]>
  }
  if (!last.loadChildren)
    throw new Error("F0Graph did not receive loadChildren")
  return last.loadChildren
}

describe("GraphCollection lazy loader abort behavior", () => {
  beforeEach(() => {
    f0GraphMock.mockClear()
  })

  it("forwards an AbortSignal to the consumer loader and aborts the prior in-flight loader for the same nodeId", async () => {
    let firstSignal: AbortSignal | undefined
    let secondSignal: AbortSignal | undefined
    let resolveFirst!: (v: TestPerson[]) => void
    let resolveSecond!: (v: TestPerson[]) => void

    const loadChildren = vi.fn(
      async (
        _nodeId: string,
        opts: { signal: AbortSignal }
      ): Promise<TestPerson[]> => {
        if (loadChildren.mock.calls.length === 1) {
          firstSignal = opts.signal
          return new Promise((r) => {
            resolveFirst = r
          })
        }
        secondSignal = opts.signal
        return new Promise((r) => {
          resolveSecond = r
        })
      }
    )

    zeroRender(
      <GraphCollection
        source={createPaginatedSource(rootRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = f0GraphMock.mock.calls[
        f0GraphMock.mock.calls.length - 1
      ][0] as unknown as { rootNodes?: unknown[] }
      expect(Array.isArray(props.rootNodes)).toBe(true)
    })

    const wrapped = getWrappedLoadChildren()
    // Launch first load and second load while the first is still in-flight.
    void wrapped("root")
    void wrapped("root")

    expect(loadChildren).toHaveBeenCalledTimes(2)

    // Settle the pending promises so vitest doesn't complain about
    // unhandled work after the test exits.
    resolveFirst([])
    resolveSecond([])

    // The wrapper forwards its internal AbortController's signal as
    // `opts.signal`. When a second load starts for the same nodeId, the
    // first signal must be aborted.
    expect(firstSignal).toBeDefined()
    expect(firstSignal!.aborted).toBe(true)
    expect(secondSignal).toBeDefined()
    expect(secondSignal!.aborted).toBe(false)
  })

  it("aborts every in-flight loader on unmount", async () => {
    let capturedSignal: AbortSignal | undefined
    const loadChildren = vi.fn(
      async (
        _nodeId: string,
        opts: { signal: AbortSignal }
      ): Promise<TestPerson[]> => {
        capturedSignal = opts.signal
        return new Promise(() => {
          /* never resolves */
        })
      }
    )

    const { unmount } = zeroRender(
      <GraphCollection
        source={createPaginatedSource(rootRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = f0GraphMock.mock.calls[
        f0GraphMock.mock.calls.length - 1
      ][0] as unknown as { rootNodes?: unknown[] }
      expect(Array.isArray(props.rootNodes)).toBe(true)
    })

    const wrapped = getWrappedLoadChildren()
    void wrapped("root")
    expect(loadChildren).toHaveBeenCalledTimes(1)

    unmount()

    // The wrapper aborts its internal controller on unmount and forwards the
    // signal to the consumer, so the consumer can cancel its underlying
    // request (e.g. via fetch's `signal` option).
    expect(capturedSignal).toBeDefined()
    expect(capturedSignal!.aborted).toBe(true)
  })

  it("lets the consumer loader observe abortion mid-flight via the forwarded signal", async () => {
    let observed: { abortedBeforeResolve: boolean } | undefined
    const loadChildren = vi.fn(
      async (
        _nodeId: string,
        opts: { signal: AbortSignal }
      ): Promise<TestPerson[]> => {
        // Simulate a consumer awaiting a network request that observes
        // cancellation via the signal.
        await new Promise<void>((resolve) => {
          opts.signal.addEventListener("abort", () => {
            observed = { abortedBeforeResolve: true }
            resolve()
          })
        })
        return []
      }
    )

    const { unmount } = zeroRender(
      <GraphCollection
        source={createPaginatedSource(rootRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = f0GraphMock.mock.calls[
        f0GraphMock.mock.calls.length - 1
      ][0] as unknown as { rootNodes?: unknown[] }
      expect(Array.isArray(props.rootNodes)).toBe(true)
    })

    const wrapped = getWrappedLoadChildren()
    void wrapped("root")
    expect(loadChildren).toHaveBeenCalledTimes(1)

    unmount()

    await waitFor(() => {
      expect(observed?.abortedBeforeResolve).toBe(true)
    })
  })

  // TODO(Phase 1 follow-up): F0Graph collapsing a node should also abort any
  // in-flight loader for that nodeId. The current GraphCollection only aborts
  // on (a) a fresh call for the same nodeId and (b) unmount. Test once the
  // collapse-side abort hook is wired into F0Graph's public API.
})
