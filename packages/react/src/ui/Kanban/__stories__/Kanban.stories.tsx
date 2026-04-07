import type { Meta, StoryObj } from "@storybook/react-vite"

import { useCallback, useMemo, useState } from "react"
import { expect, fn, waitFor, within } from "storybook/test"

import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"

import type { KanbanOnBulkMove, KanbanProps } from "../types"

import { KanbanCard } from "../components/KanbanCard"
import { Kanban } from "../Kanban"

type Task = {
  id: string
  title: string
  description?: string
  assignee?: string
}

const mockLeft: Task[] = [
  { id: "t1", title: "Design spec" },
  { id: "t2", title: "Implement UI" },
]
const mockRight: Task[] = [{ id: "t3", title: "Wire data" }]

const meta = {
  component: Kanban,
  title: "Kanban/Kanban",
  parameters: {
    docs: {
      story: { inline: false, height: "650px" },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Kanban>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    lanes: [],
    renderCard: () => null,
    getKey: () => "",
  },
  render: function Render() {
    const [instanceId] = useState(() => Symbol("kanban-instance"))
    const lanes: KanbanProps<Task>["lanes"] = [
      { id: "backlog", title: "Backlog", items: mockLeft, variant: "neutral" },
      {
        id: "in-progress",
        title: "In Progress",
        items: mockRight,
        variant: "info",
      },
      { id: "review", title: "In Review", items: [], variant: "warning" },
      { id: "done", title: "Done", items: [], variant: "positive" },
    ]
    return (
      <DndProvider driver={createAtlaskitDriver(instanceId)}>
        <Kanban<Task>
          lanes={lanes}
          getKey={(item: Task) => item.id}
          renderCard={(item: Task, index: number, total: number) => (
            <KanbanCard<Task>
              drag={{
                id: item.id,
                type: "list-card",
                data: { ...item },
              }}
              id={item.id}
              index={index}
              total={total}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </DndProvider>
    )
  },
}

export const ProjectStatuses: Story = {
  args: {
    lanes: [],
    renderCard: () => null,
    getKey: () => "",
  },
  render: function Render() {
    const [instanceId] = useState(() => Symbol("kanban-instance"))
    const [lanes, setLanes] = useState<KanbanProps<Task>["lanes"]>([
      { id: "backlog", title: "Backlog", items: mockLeft, variant: "neutral" },
      {
        id: "in-progress",
        title: "In Progress",
        items: mockRight,
        variant: "info",
      },
      { id: "review", title: "In Review", items: [], variant: "warning" },
      { id: "done", title: "Done", items: [], variant: "positive" },
    ])
    return (
      <DndProvider driver={createAtlaskitDriver(instanceId)}>
        <Kanban<Task>
          lanes={lanes}
          getKey={(item: Task) => item.id}
          dnd={{
            instanceId,
            getIndexById: (laneId: string, id: string) => {
              const lane = lanes.find((l) => l.id === laneId)
              return lane?.items.findIndex((item) => item.id === id) ?? -1
            },
            onMove: async (fromLaneId, toLaneId, source, destiny) => {
              await console.log(
                "DND onMove",
                fromLaneId,
                toLaneId,
                source,
                destiny
              )
              // Simulate optimistic lock conflict when moving to 'review'
              if (toLaneId === "review") {
                await new Promise((r) => setTimeout(r, 50))
                return Promise.reject(new Error("Optimistic lock conflict"))
              }
              // Simulate backend-enriched record when moving to 'done'
              if (toLaneId === "done") {
                await new Promise((r) => setTimeout(r, 50))
                const enrichedRecord = {
                  ...source,
                  title: `${source.title} (done)`,
                }
                // Update lanes state with enriched record
                setLanes((prevLanes) => {
                  return prevLanes.map((lane) => {
                    if (lane.id === fromLaneId) {
                      return {
                        ...lane,
                        items: lane.items.filter(
                          (item) => item.id !== source.id
                        ),
                      }
                    }
                    if (lane.id === toLaneId) {
                      return {
                        ...lane,
                        items: [...lane.items, enrichedRecord],
                      }
                    }
                    return lane
                  })
                })
                return enrichedRecord
              }
              // Normal pass-through
              await new Promise((r) => setTimeout(r, 50))
              // Update lanes state for normal moves
              setLanes((prevLanes) => {
                return prevLanes.map((lane) => {
                  if (lane.id === fromLaneId) {
                    return {
                      ...lane,
                      items: lane.items.filter((item) => item.id !== source.id),
                    }
                  }
                  if (lane.id === toLaneId) {
                    const newItems = [...lane.items]
                    if (destiny && destiny.record && destiny.position) {
                      const targetIndex = newItems.findIndex(
                        (item) => item.id === destiny.record.id
                      )
                      if (targetIndex >= 0) {
                        const insertIndex =
                          destiny.position === "above"
                            ? targetIndex
                            : targetIndex + 1
                        newItems.splice(insertIndex, 0, source)
                      } else {
                        newItems.push(source)
                      }
                    } else {
                      newItems.push(source)
                    }
                    return { ...lane, items: newItems }
                  }
                  return lane
                })
              })
              return { ...source }
            },
          }}
          renderCard={(item: Task, index: number, total: number) => (
            <KanbanCard<Task>
              drag={{
                id: item.id,
                type: "list-card",
                data: { ...item },
              }}
              id={item.id}
              index={index}
              total={total}
              title={item.title}
              description={item.description}
            />
          )}
        />
      </DndProvider>
    )
  },
  // TODO: Disabled until it works in CI
  // play: async ({ canvasElement, step }) => {
  //   const canvas = within(canvasElement)

  //   await step("Optimistic rollback on conflict (to 'review')", async () => {
  //     // Pre-check: t2 in backlog
  //     const backlog = within(canvas.getByTestId("lane-backlog"))
  //     expect(backlog.getByText("Implement UI")).toBeInTheDocument()

  //     // Dispatch synthetic move event directly to target lane
  //     window.dispatchEvent(
  //       new CustomEvent("kanban-test-move", {
  //         detail: {
  //           fromLaneId: "backlog",
  //           toLaneId: "review",
  //           sourceId: "t2",
  //           indexOfTarget: null,
  //           position: null,
  //         },
  //       })
  //     )

  //     await new Promise((r) => setTimeout(r, 120))

  //     // After conflict, it should remain in backlog
  //     const backlogAfter = within(canvas.getByTestId("lane-backlog"))
  //     expect(backlogAfter.getByText("Implement UI")).toBeInTheDocument()
  //     const review = within(canvas.getByTestId("lane-review"))
  //     expect(review.queryByText("Implement UI")).toBeNull()
  //   })

  //   await step("Backend-enriched record on success (to 'done')", async () => {
  //     // Move t1 to 'done'
  //     window.dispatchEvent(
  //       new CustomEvent("kanban-test-move", {
  //         detail: {
  //           fromLaneId: "backlog",
  //           toLaneId: "done",
  //           sourceId: "t1",
  //           indexOfTarget: null,
  //           position: null,
  //         },
  //       })
  //     )

  //     await new Promise((r) => setTimeout(r, 120))

  //     const doneLane = within(canvas.getByTestId("lane-done"))
  //     expect(doneLane.getByText("Design spec (done)")).toBeInTheDocument()
  //     const backlogAfter = within(canvas.getByTestId("lane-backlog"))
  //     expect(backlogAfter.queryByText("Design spec")).toBeNull()
  //   })
  // },
}

export const SimpleOnMoveTest: Story = {
  args: {
    lanes: [],
    renderCard: () => null,
    getKey: () => "",
  },
  render: function Render() {
    const [instanceId] = useState(() => Symbol("kanban-instance"))
    const [callbackCalls, setCallbackCalls] = useState<
      Array<{
        fromLaneId: string
        toLaneId: string
        sourceRecord: Task
        destinyRecord: { record: Task; position: "above" | "below" } | null
      }>
    >([])

    // ✅ Estado mutable para las lanes para ver el movimiento visual
    const [lanes, setLanes] = useState<KanbanProps<Task>["lanes"]>([
      {
        id: "source-lane",
        title: "Source Lane",
        items: [mockLeft[0]], // Only "Design spec"
        variant: "neutral",
      },
      {
        id: "target-empty",
        title: "Target Empty",
        items: [],
        variant: "info",
      },
      {
        id: "target-with-items",
        title: "Target With Items",
        items: [mockRight[0]], // Only "Wire data"
        variant: "warning",
      },
    ])

    const mockOnMove = fn()

    const getIndexById = (laneId: string, id: string): number => {
      const lane = lanes.find((l) => l.id === laneId)
      return lane?.items.findIndex((item) => item.id === id) ?? -1
    }

    const handleMove = async (
      fromLaneId: string,
      toLaneId: string,
      sourceRecord: Task,
      destinyRecord: { record: Task; position: "above" | "below" } | null
    ) => {
      const call = { fromLaneId, toLaneId, sourceRecord, destinyRecord }
      mockOnMove(fromLaneId, toLaneId, sourceRecord, destinyRecord)
      setCallbackCalls((prev) => [...prev, call])

      // ✅ Actualizar las lanes para mostrar el movimiento visual
      setLanes((prevLanes) => {
        const newLanes = [...prevLanes]
        const fromLane = newLanes.find((l) => l.id === fromLaneId)
        const toLane = newLanes.find((l) => l.id === toLaneId)

        if (fromLane && toLane) {
          // Remover de la lane origen
          fromLane.items = fromLane.items.filter(
            (item) => item.id !== sourceRecord.id
          )

          // Añadir a la lane destino
          if (
            destinyRecord &&
            destinyRecord.record &&
            destinyRecord.record.id
          ) {
            // Si hay un record destino, posicionar relativamente
            const targetIndex = toLane.items.findIndex(
              (item) => item.id === destinyRecord.record.id
            )
            if (destinyRecord.position === "above") {
              toLane.items.splice(targetIndex, 0, sourceRecord)
            } else {
              toLane.items.splice(targetIndex + 1, 0, sourceRecord)
            }
          } else {
            // Si no hay record destino (lane vacía), añadir al final
            toLane.items.push(sourceRecord)
          }
        }

        return newLanes
      })
      return sourceRecord
    }

    // Helpers to simulate moves for the play function
    const simulateMoveToEmptyLane = () => {
      const fromLane = lanes.find((l) => l.id === "source-lane")
      const sourceRecord = fromLane?.items[0]
      if (sourceRecord) {
        void handleMove("source-lane", "target-empty", sourceRecord, null)
      }
    }

    const simulateMoveToLaneWithItems = () => {
      const fromLane = lanes.find((l) => l.id === "target-empty")
      const sourceRecord = fromLane?.items[0]
      const targetRecord = lanes.find((l) => l.id === "target-with-items")
        ?.items[0]
      if (sourceRecord && targetRecord) {
        void handleMove("target-empty", "target-with-items", sourceRecord, {
          record: targetRecord,
          position: "above",
        })
      }
    }

    return (
      <div className="space-y-6">
        <div className="flex gap-2">
          <button
            onClick={simulateMoveToEmptyLane}
            className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2"
            data-testid="trigger-move-empty"
          >
            Move to Empty Lane
          </button>
          <button
            onClick={simulateMoveToLaneWithItems}
            className="bg-green-500 text-white hover:bg-green-600 rounded px-4 py-2"
            data-testid="trigger-move-with-items"
          >
            Move to Lane with Items
          </button>
        </div>
        <div className="bg-gray-100 rounded p-4">
          <h3 className="mb-2 font-semibold">
            Callback Calls ({callbackCalls.length}):
          </h3>
          {callbackCalls.length === 0 ? (
            <p className="text-gray-500" data-testid="no-calls">
              No moves triggered yet
            </p>
          ) : (
            <div className="space-y-2">
              {callbackCalls.map((call, index) => (
                <div
                  key={index}
                  className="bg-white rounded p-2 text-sm"
                  data-testid={`call-${index}`}
                >
                  <div>
                    <strong>From:</strong> {call.fromLaneId}
                  </div>
                  <div>
                    <strong>To:</strong> {call.toLaneId}
                  </div>
                  <div>
                    <strong>Source</strong> {JSON.stringify(call.sourceRecord)}
                  </div>
                  <div>
                    <strong>Destiny:</strong>
                    {JSON.stringify(call.destinyRecord)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <DndProvider driver={createAtlaskitDriver(instanceId)}>
          <Kanban<Task>
            lanes={lanes}
            getKey={(item: Task) => item.id}
            dnd={{
              instanceId,
              getIndexById,
              onMove: handleMove,
            }}
            renderCard={(
              item: Task,
              index: number,
              total: number,
              laneId?: string
            ) => (
              <KanbanCard<Task>
                drag={{
                  id: item.id,
                  type: "list-card",
                  data: { ...item },
                }}
                id={item.id}
                index={index}
                total={total}
                laneId={laneId}
                draggable
                title={item.title}
                description={item.description}
              />
            )}
          />
        </DndProvider>
      </div>
    )
  },

  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step("Verify initial state", async () => {
      const emptyButton = canvas.getByTestId("trigger-move-empty")
      const withItemsButton = canvas.getByTestId("trigger-move-with-items")
      expect(emptyButton).toBeInTheDocument()
      expect(withItemsButton).toBeInTheDocument()
      expect(canvas.getByTestId("no-calls")).toBeInTheDocument()
    })

    await step("Test move to empty lane callback", async () => {
      // Verify initial state - "Design spec" should be in Source Lane
      expect(canvas.getByText("Design spec")).toBeInTheDocument()
      expect(canvas.getByText("Source Lane")).toBeInTheDocument()
      expect(canvas.getByText("Target Empty")).toBeInTheDocument()

      canvas.getByTestId("trigger-move-empty").click()

      // Wait for the callback to be called
      await waitFor(
        () => {
          expect(canvas.getByTestId("call-0")).toBeInTheDocument()
        },
        { timeout: 2000 }
      )

      // Verify the callback was called
      const firstCall = canvas.getByTestId("call-0")
      expect(firstCall).toBeInTheDocument()

      // Verify the parameters (updated rendering shows JSON blobs)
      expect(firstCall).toHaveTextContent("From: source-lane")
      expect(firstCall).toHaveTextContent("To: target-empty")
      expect(firstCall).toHaveTextContent('"id":"t1"')
      expect(firstCall).toHaveTextContent('"title":"Design spec"')
      expect(firstCall).toHaveTextContent("Destiny:null")
    })

    await step("Test move to lane with items callback", async () => {
      // Now try to move the item that's currently in Target Empty to Target With Items
      canvas.getByTestId("trigger-move-with-items").click()

      // Wait for the second callback to be called
      await waitFor(
        () => {
          expect(canvas.getByTestId("call-1")).toBeInTheDocument()
        },
        { timeout: 2000 }
      )

      // Verify the second callback was called
      const secondCall = canvas.getByTestId("call-1")
      expect(secondCall).toBeInTheDocument()

      // ✅ Verify the parameters match the ACTUAL call (item should now be coming from target-empty)
      expect(secondCall).toHaveTextContent("From: target-empty")
      expect(secondCall).toHaveTextContent("To: target-with-items")
      expect(secondCall).toHaveTextContent(/"id":"t1"/)
      expect(secondCall).toHaveTextContent(/"title":"Design spec"/)
      expect(secondCall).toHaveTextContent(/"position":"above"/)
    })
  },
}

const initialBulkMoveLanes: KanbanProps<Task>["lanes"] = [
  {
    id: "backlog",
    title: "Backlog",
    items: [
      { id: "t1", title: "Design spec", assignee: "Alice" },
      { id: "t2", title: "Implement UI", assignee: "Bob" },
      { id: "t3", title: "Write docs", assignee: "Carol" },
    ],
    total: 3,
    variant: "neutral",
  },
  {
    id: "in-progress",
    title: "In Progress",
    items: [
      { id: "t4", title: "Write tests", assignee: "Dave" },
      { id: "t5", title: "Wire data", assignee: "Eve" },
    ],
    total: 2,
    variant: "info",
  },
  {
    id: "review",
    title: "In Review",
    items: [{ id: "t6", title: "Code review", assignee: "Frank" }],
    total: 1,
    variant: "warning",
  },
  {
    id: "done",
    title: "Done",
    items: [],
    total: 0,
    variant: "positive",
  },
]

/**
 * Demonstrates bulk drag-and-drop: select multiple cards via their built-in
 * checkboxes (hover over a card to reveal it), then drag any selected card
 * to move **all** selected cards to the target lane. A badge on the drag
 * preview shows the count.
 *
 * **How to use:**
 * 1. Hover over cards to reveal checkboxes, click to select 2+ cards
 * 2. Drag any selected card to another lane — all selected cards move together
 * 3. Or use the simulation buttons below for programmatic bulk moves
 * 4. Hit "Reset board" to start over
 */
export const BulkMove: Story = {
  args: {
    lanes: [],
    renderCard: () => null,
    getKey: () => "",
  },
  render: function Render() {
    const [instanceId] = useState(() => Symbol("kanban-bulk-instance"))
    const [selected, setSelected] = useState<Set<string>>(() => new Set())
    const [bulkMoveLog, setBulkMoveLog] = useState<
      Array<{
        movedIds: string[]
        toLaneId: string
        position: string
      }>
    >([])

    const [lanes, setLanes] =
      useState<KanbanProps<Task>["lanes"]>(initialBulkMoveLanes)

    const selectedIds = useMemo(() => Array.from(selected), [selected])

    const toggleSelection = useCallback((id: string) => {
      setSelected((prev) => {
        const next = new Set(prev)
        if (next.has(id)) {
          next.delete(id)
        } else {
          next.add(id)
        }
        return next
      })
    }, [])

    const handleBulkMove: KanbanOnBulkMove<Task> = useCallback(
      async (moves, toLaneId, destinyRecord) => {
        setBulkMoveLog((prev) => [
          ...prev,
          {
            movedIds: moves.map((m) => m.sourceRecord.id),
            toLaneId,
            position: destinyRecord
              ? `${destinyRecord.position} ${destinyRecord.record.title}`
              : "top of lane",
          },
        ])

        // Simulate server delay
        await new Promise((r) => setTimeout(r, 100))

        // Update lanes state
        const movedRecords = moves.map((m) => m.sourceRecord)
        const movedIds = new Set(movedRecords.map((r) => r.id))

        setLanes((prevLanes) => {
          return prevLanes.map((lane) => {
            const filtered = lane.items.filter((item) => !movedIds.has(item.id))

            if (lane.id === toLaneId) {
              if (destinyRecord) {
                const targetIdx = filtered.findIndex(
                  (item) => item.id === destinyRecord.record.id
                )
                const insertIdx =
                  destinyRecord.position === "above" ? targetIdx : targetIdx + 1
                filtered.splice(insertIdx, 0, ...movedRecords)
              } else {
                filtered.unshift(...movedRecords)
              }
            }

            return {
              ...lane,
              items: filtered,
              total: filtered.length,
            }
          })
        })

        // Clear selection after bulk move
        setSelected(new Set())

        return movedRecords
      },
      []
    )

    const handleReset = () => {
      setLanes(initialBulkMoveLanes)
      setSelected(new Set())
      setBulkMoveLog([])
    }

    const simulateBulkMoveToDone = () => {
      if (selectedIds.length < 2) return
      window.dispatchEvent(
        new CustomEvent("kanban-test-bulk-move", {
          detail: {
            selectedIds,
            toLaneId: "done",
            indexOfTarget: null,
            position: null,
          },
        })
      )
    }

    const simulateBulkMoveToBacklog = () => {
      if (selectedIds.length < 2) return
      window.dispatchEvent(
        new CustomEvent("kanban-test-bulk-move", {
          detail: {
            selectedIds,
            toLaneId: "backlog",
            indexOfTarget: null,
            position: null,
          },
        })
      )
    }

    return (
      <div className="space-y-4">
        {/* Action bar: selection info + actions */}
        <div className="flex items-center gap-3 rounded-lg border border-f1-border bg-f1-background-secondary px-4 py-2.5">
          <span className="text-sm font-medium">
            {selectedIds.length === 0
              ? "Hover over cards to reveal checkboxes, then select 2+ cards"
              : `${selectedIds.length} card${selectedIds.length === 1 ? "" : "s"} selected`}
          </span>
          <div className="flex-1" />
          <button
            onClick={simulateBulkMoveToDone}
            disabled={selectedIds.length < 2}
            className="rounded bg-f1-background-positive px-3 py-1.5 text-xs font-medium text-f1-foreground-positive disabled:opacity-40"
            data-testid="bulk-move-done"
          >
            Move to Done
          </button>
          <button
            onClick={simulateBulkMoveToBacklog}
            disabled={selectedIds.length < 2}
            className="rounded bg-f1-background-info px-3 py-1.5 text-xs font-medium text-f1-foreground-info disabled:opacity-40"
            data-testid="bulk-move-backlog"
          >
            Move to Backlog
          </button>
          {selectedIds.length > 0 && (
            <button
              onClick={() => setSelected(new Set())}
              className="text-xs text-f1-foreground-secondary underline"
            >
              Clear selection
            </button>
          )}
          <button
            onClick={handleReset}
            className="rounded border border-f1-border px-3 py-1.5 text-xs font-medium text-f1-foreground-secondary"
            data-testid="reset-board"
          >
            Reset board
          </button>
        </div>

        {/* Kanban board */}
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
              onMove: async (fromLaneId, toLaneId, sourceRecord, destiny) => {
                await new Promise((r) => setTimeout(r, 50))
                setLanes((prev) =>
                  prev.map((lane) => {
                    if (lane.id === fromLaneId) {
                      return {
                        ...lane,
                        items: lane.items.filter(
                          (item) => item.id !== sourceRecord.id
                        ),
                        total: (lane.total ?? lane.items.length) - 1,
                      }
                    }
                    if (lane.id === toLaneId) {
                      const items = [...lane.items]
                      if (destiny) {
                        const idx = items.findIndex(
                          (i) => i.id === destiny.record.id
                        )
                        const insertIdx =
                          destiny.position === "above" ? idx : idx + 1
                        items.splice(insertIdx, 0, sourceRecord)
                      } else {
                        items.push(sourceRecord)
                      }
                      return {
                        ...lane,
                        items,
                        total: (lane.total ?? lane.items.length) + 1,
                      }
                    }
                    return lane
                  })
                )
                return sourceRecord
              },
              onBulkMove: handleBulkMove,
              selectedIds: selectedIds.length > 1 ? selectedIds : undefined,
            }}
            renderCard={(item, index, total, laneId) => (
              <KanbanCard<Task>
                drag={{
                  id: item.id,
                  type: "list-card",
                  data: { ...item },
                }}
                id={item.id}
                index={index}
                total={total}
                laneId={laneId}
                draggable
                title={item.title}
                description={item.assignee}
                selectable
                selected={selected.has(item.id)}
                onSelect={() => toggleSelection(item.id)}
                selectedIds={selectedIds.length > 1 ? selectedIds : undefined}
              />
            )}
          />
        </DndProvider>

        {/* Bulk move log (collapsible) */}
        {bulkMoveLog.length > 0 && (
          <details className="rounded-lg border border-f1-border p-3">
            <summary className="cursor-pointer text-xs font-medium text-f1-foreground-secondary">
              Bulk Move Log ({bulkMoveLog.length})
            </summary>
            <div className="mt-2 space-y-1">
              {bulkMoveLog.map((log, i) => (
                <div
                  key={i}
                  className="rounded bg-f1-background-secondary p-2 text-xs"
                  data-testid={`bulk-log-${i}`}
                >
                  Moved [{log.movedIds.join(", ")}] to {log.toLaneId} (
                  {log.position})
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    )
  },
}
