import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
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
            <KanbanCard
              drag={{
                id: item.id,
                type: "list-card",
                data: { instanceId },
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
          renderCard={(item: Task, index: number, total: number) => (
            <KanbanCard
              drag={{
                id: item.id,
                type: "list-card",
                data: { instanceId },
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
