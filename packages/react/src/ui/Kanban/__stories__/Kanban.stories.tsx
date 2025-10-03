import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, within } from "storybook/test"
import { KanbanCard } from "../components/KanbanCard"
import { Kanban } from "../Kanban"
import type { KanbanProps } from "../types"

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
          dnd={{
            instanceId,
            getIndexById: () => -1,
            onMove: async (_fromLaneId, toLaneId, source, destiny) => {
              await console.log(
                "DND onMove",
                _fromLaneId,
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
                return { ...source, title: `${source.title} (done)` }
              }
              // Normal pass-through
              await new Promise((r) => setTimeout(r, 50))
              if (destiny && destiny.record && destiny.position) {
                return { ...source }
              }
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
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Optimistic rollback on conflict (to 'review')", async () => {
      // Pre-check: t2 in backlog
      const backlog = within(canvas.getByTestId("lane-backlog"))
      expect(backlog.getByText("Implement UI")).toBeInTheDocument()

      // Dispatch synthetic move event directly to target lane
      window.dispatchEvent(
        new CustomEvent("kanban-test-move", {
          detail: {
            fromLaneId: "backlog",
            toLaneId: "review",
            sourceId: "t2",
            indexOfTarget: null,
            position: null,
          },
        })
      )

      await new Promise((r) => setTimeout(r, 120))

      // After conflict, it should remain in backlog
      const backlogAfter = within(canvas.getByTestId("lane-backlog"))
      expect(backlogAfter.getByText("Implement UI")).toBeInTheDocument()
      const review = within(canvas.getByTestId("lane-review"))
      expect(review.queryByText("Implement UI")).toBeNull()
    })

    await step("Backend-enriched record on success (to 'done')", async () => {
      // Move t1 to 'done'
      window.dispatchEvent(
        new CustomEvent("kanban-test-move", {
          detail: {
            fromLaneId: "backlog",
            toLaneId: "done",
            sourceId: "t1",
            indexOfTarget: null,
            position: null,
          },
        })
      )

      await new Promise((r) => setTimeout(r, 120))

      const doneLane = within(canvas.getByTestId("lane-done"))
      expect(doneLane.getByText("Design spec (done)")).toBeInTheDocument()
      const backlogAfter = within(canvas.getByTestId("lane-backlog"))
      expect(backlogAfter.queryByText("Design spec")).toBeNull()
    })
  },
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

      // Wait a bit for state update
      await new Promise((resolve) => setTimeout(resolve, 100))

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

      // Wait a bit for state update
      await new Promise((resolve) => setTimeout(resolve, 100))

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
