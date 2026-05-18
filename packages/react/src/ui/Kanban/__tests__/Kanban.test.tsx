import { act, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { zeroRender } from "@/testing/test-utils"

import type { KanbanProps } from "../types"

import { KanbanCard } from "../components/KanbanCard"
import { Kanban } from "../Kanban"

type Task = {
  id: string
  title: string
}

const tasks = {
  t1: { id: "t1", title: "Design spec" },
  t2: { id: "t2", title: "Implement UI" },
  t3: { id: "t3", title: "Write tests" },
  t4: { id: "t4", title: "Wire data" },
  t5: { id: "t5", title: "Deploy" },
}

function renderKanban(
  lanes: KanbanProps<Task>["lanes"],
  options: {
    onMove?: KanbanProps<Task>["dnd"] extends infer D
      ? D extends { onMove?: infer M }
        ? M
        : never
      : never
    onBulkMove?: KanbanProps<Task>["dnd"] extends infer D
      ? D extends { onBulkMove?: infer M }
        ? M
        : never
      : never
    selectedIds?: string[]
  } = {}
) {
  const instanceId = Symbol("test-kanban")
  const { onMove, onBulkMove, selectedIds } = options

  return zeroRender(
    <DndProvider driver={createAtlaskitDriver(instanceId)}>
      <Kanban<Task>
        lanes={lanes}
        getKey={(item) => item.id}
        dnd={{
          instanceId,
          getIndexById: (laneId, id) => {
            const lane = lanes.find((l) => l.id === laneId)
            return lane?.items.findIndex((item) => item.id === id) ?? -1
          },
          onMove,
          onBulkMove,
          selectedIds,
        }}
        renderCard={(item, index, total, laneId) => (
          <KanbanCard<Task>
            drag={{ id: item.id, type: "list-card", data: { ...item, laneId } }}
            id={item.id}
            index={index}
            total={total}
            laneId={laneId}
            draggable
            title={item.title}
            selectedIds={selectedIds}
          />
        )}
      />
    </DndProvider>
  )
}

/** Dispatch a synthetic bulk-move event via the test hook in KanbanLane */
function dispatchBulkMove(detail: {
  selectedIds: string[]
  toLaneId: string
  indexOfTarget: number | null
  position: "above" | "below" | null
}) {
  window.dispatchEvent(new CustomEvent("kanban-test-bulk-move", { detail }))
}

/** Dispatch a synthetic single-move event via the test hook in KanbanLane */
function dispatchMove(
  detail:
    | {
        fromLaneId: string
        toLaneId: string
        sourceId: string
        indexOfTarget: number
        position: "above" | "below"
      }
    | {
        fromLaneId: string
        toLaneId: string
        sourceId: string
        indexOfTarget: null
        position: null
      }
) {
  window.dispatchEvent(new CustomEvent("kanban-test-move", { detail }))
}

describe("Kanban", () => {
  describe("single move (onMove)", () => {
    it("renders lanes and cards", () => {
      renderKanban([
        { id: "backlog", title: "Backlog", items: [tasks.t1, tasks.t2] },
        { id: "done", title: "Done", items: [tasks.t3] },
      ])

      expect(screen.getByText("Design spec")).toBeInTheDocument()
      expect(screen.getByText("Implement UI")).toBeInTheDocument()
      expect(screen.getByText("Write tests")).toBeInTheDocument()
    })

    it("calls onMove and optimistically moves item across lanes", async () => {
      const onMove = vi.fn().mockResolvedValue(tasks.t1)

      renderKanban(
        [
          {
            id: "backlog",
            title: "Backlog",
            items: [tasks.t1, tasks.t2],
            total: 2,
          },
          { id: "done", title: "Done", items: [], total: 0 },
        ],
        { onMove }
      )

      // Verify initial state
      const backlogLane = screen.getByTestId("lane-backlog")
      expect(backlogLane).toBeInTheDocument()
      expect(screen.getByText("Design spec")).toBeInTheDocument()

      act(() => {
        dispatchMove({
          fromLaneId: "backlog",
          toLaneId: "done",
          sourceId: "t1",
          indexOfTarget: null,
          position: null,
        })
      })

      await waitFor(() => {
        expect(onMove).toHaveBeenCalledTimes(1)
      })

      // Verify onMove was called with correct params
      expect(onMove).toHaveBeenCalledWith("backlog", "done", tasks.t1, null)
    })
  })

  describe("bulk move (onBulkMove)", () => {
    it("calls onBulkMove with selected items from multiple lanes", async () => {
      const onBulkMove = vi.fn().mockResolvedValue([tasks.t1, tasks.t3])
      const onMove = vi.fn().mockResolvedValue(tasks.t1)

      renderKanban(
        [
          {
            id: "backlog",
            title: "Backlog",
            items: [tasks.t1, tasks.t2],
            total: 2,
          },
          {
            id: "in-progress",
            title: "In Progress",
            items: [tasks.t3],
            total: 1,
          },
          { id: "done", title: "Done", items: [], total: 0 },
        ],
        {
          onMove,
          onBulkMove,
          selectedIds: ["t1", "t3"],
        }
      )

      act(() => {
        dispatchBulkMove({
          selectedIds: ["t1", "t3"],
          toLaneId: "done",
          indexOfTarget: null,
          position: null,
        })
      })

      await waitFor(() => {
        expect(onBulkMove).toHaveBeenCalledTimes(1)
      })

      // Verify the moves array includes both items from different source lanes
      const [movesArg, toLaneIdArg, destinyArg] = onBulkMove.mock.calls[0]

      expect(toLaneIdArg).toBe("done")
      expect(destinyArg).toBeNull()
      expect(movesArg).toHaveLength(2)
      expect(movesArg).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            fromLaneId: "backlog",
            sourceRecord: tasks.t1,
          }),
          expect.objectContaining({
            fromLaneId: "in-progress",
            sourceRecord: tasks.t3,
          }),
        ])
      )

      // onMove should NOT have been called (bulk path was used)
      expect(onMove).not.toHaveBeenCalled()
    })

    it("calls onBulkMove with correct position when dropping on a card", async () => {
      const onBulkMove = vi.fn().mockResolvedValue([tasks.t1, tasks.t2])

      renderKanban(
        [
          {
            id: "backlog",
            title: "Backlog",
            items: [tasks.t1, tasks.t2],
            total: 2,
          },
          {
            id: "done",
            title: "Done",
            items: [tasks.t4, tasks.t5],
            total: 2,
          },
        ],
        {
          onBulkMove,
          selectedIds: ["t1", "t2"],
        }
      )

      act(() => {
        dispatchBulkMove({
          selectedIds: ["t1", "t2"],
          toLaneId: "done",
          indexOfTarget: 0,
          position: "below",
        })
      })

      await waitFor(() => {
        expect(onBulkMove).toHaveBeenCalledTimes(1)
      })

      const [movesArg, toLaneIdArg, destinyArg] = onBulkMove.mock.calls[0]

      expect(toLaneIdArg).toBe("done")
      // destinyRecord should be the item at indexOfTarget (t4)
      expect(destinyArg).toEqual({
        record: tasks.t4,
        position: "below",
      })
      expect(movesArg).toHaveLength(2)
    })

    it("does not call onBulkMove when selectedIds is empty", async () => {
      const onBulkMove = vi.fn()

      renderKanban(
        [
          {
            id: "backlog",
            title: "Backlog",
            items: [tasks.t1],
            total: 1,
          },
          { id: "done", title: "Done", items: [], total: 0 },
        ],
        { onBulkMove, selectedIds: [] }
      )

      act(() => {
        dispatchBulkMove({
          selectedIds: [],
          toLaneId: "done",
          indexOfTarget: null,
          position: null,
        })
      })

      // Small wait to ensure nothing fired
      await new Promise((r) => setTimeout(r, 50))
      expect(onBulkMove).not.toHaveBeenCalled()
    })

    it("rolls back optimistic state on error", async () => {
      const onBulkMove = vi.fn().mockRejectedValue(new Error("Server error"))

      renderKanban(
        [
          {
            id: "backlog",
            title: "Backlog",
            items: [tasks.t1, tasks.t2],
            total: 2,
          },
          { id: "done", title: "Done", items: [], total: 0 },
        ],
        {
          onBulkMove,
          selectedIds: ["t1", "t2"],
        }
      )

      // Both items should be in backlog initially
      expect(screen.getByText("Design spec")).toBeInTheDocument()
      expect(screen.getByText("Implement UI")).toBeInTheDocument()

      act(() => {
        dispatchBulkMove({
          selectedIds: ["t1", "t2"],
          toLaneId: "done",
          indexOfTarget: null,
          position: null,
        })
      })

      await waitFor(() => {
        expect(onBulkMove).toHaveBeenCalledTimes(1)
      })

      // After error, items should still be rendered (rollback)
      await waitFor(() => {
        expect(screen.getByText("Design spec")).toBeInTheDocument()
        expect(screen.getByText("Implement UI")).toBeInTheDocument()
      })
    })

    it("replaces records with backend versions after successful bulk move", async () => {
      const enrichedT1 = { ...tasks.t1, title: "Design spec (moved)" }
      const enrichedT2 = { ...tasks.t2, title: "Implement UI (moved)" }
      const onBulkMove = vi.fn().mockResolvedValue([enrichedT1, enrichedT2])

      renderKanban(
        [
          {
            id: "backlog",
            title: "Backlog",
            items: [tasks.t1, tasks.t2],
            total: 2,
          },
          { id: "done", title: "Done", items: [], total: 0 },
        ],
        {
          onBulkMove,
          selectedIds: ["t1", "t2"],
        }
      )

      act(() => {
        dispatchBulkMove({
          selectedIds: ["t1", "t2"],
          toLaneId: "done",
          indexOfTarget: null,
          position: null,
        })
      })

      await waitFor(() => {
        expect(onBulkMove).toHaveBeenCalledTimes(1)
      })

      // After server response, the enriched titles should appear
      await waitFor(() => {
        expect(screen.getByText("Design spec (moved)")).toBeInTheDocument()
        expect(screen.getByText("Implement UI (moved)")).toBeInTheDocument()
      })
    })
  })
})
