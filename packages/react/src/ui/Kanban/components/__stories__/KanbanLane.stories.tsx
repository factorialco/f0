import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { KanbanCard } from "../KanbanCard"
import { KanbanLane } from "../KanbanLane"

type Task = {
  id: string
  title: string
  description?: string
  assignee?: string
}

const mockTasks: Task[] = [
  {
    id: "t1",
    title: "Design spec",
    description: "Create design specifications",
  },
  { id: "t2", title: "Implement UI", description: "Build the user interface" },
  { id: "t3", title: "Wire data", description: "Connect to backend APIs" },
  { id: "t4", title: "Test", description: "Test" },
]

const meta = {
  component: KanbanLane,
  title: "Kanban/KanbanLane",
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
} satisfies Meta<typeof KanbanLane>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [],
    renderCard: () => null,
    getKey: () => "",
  },
  render: function Render() {
    const [instanceId] = useState(() => Symbol("kanban-lane-instance"))

    return (
      <DndProvider driver={createAtlaskitDriver(instanceId)}>
        <div className="w-80">
          <KanbanLane<Task>
            title="Default Lane"
            items={mockTasks.slice(0, 2)}
            variant="neutral"
            getKey={(item: Task) => item.id}
            renderCard={(item: Task, index: number) => (
              <KanbanCard<Task>
                drag={{
                  id: item.id,
                  type: "list-card",
                  data: { ...item },
                }}
                id={item.id}
                index={index}
                total={2}
                draggable
                title={item.title}
                description={item.description}
              />
            )}
          />
        </div>
      </DndProvider>
    )
  },
}
