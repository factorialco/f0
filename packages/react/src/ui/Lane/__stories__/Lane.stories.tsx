import type { Meta, StoryObj } from "@storybook/react-vite"

import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { useEffect, useRef, useState } from "react"
import { fn } from "storybook/test"

import type { RecordType } from "@/hooks/datasource"

import { F0Card } from "@/components/F0Card"
import { DraggableF0Card } from "@/components/F0Card/__stories__/DraggableF0Card"
import { ArrowUp, Clock, Delete, Pencil, Person, Search } from "@/icons/app"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { useDroppableList } from "@/lib/dnd/hooks"

import type { LaneProps } from "../types"

import { Lane } from "../Lane"
import {
  additionalMockTasks,
  allMockTasks,
  MockTask,
  mockTasks,
} from "./mockData"

const FETCH_DELAY = 1500

const meta = {
  component: Lane,
  title: "Lane",
  parameters: {
    docs: {
      story: { inline: false, height: "750px" },
    },
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story, context) => {
      const containerHeight =
        context.parameters?.containerHeight || "calc(100vh-32px)"
      const containerMaxWidth = context.parameters?.containerMaxWidth || "400px"
      return (
        <div
          className="flex w-full items-center justify-center p-4"
          style={{ height: containerHeight as string }}
        >
          <div
            className="w-full"
            style={{ maxWidth: containerMaxWidth as string }}
          >
            <Story />
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof Lane>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "In Progress",
    items: mockTasks,
    getKey: (task: RecordType) => (task as MockTask).id,
    hasMore: false,
    renderCard: (task: RecordType, _index: number) => {
      const mockTask = task as MockTask
      return (
        <F0Card
          title={mockTask.title}
          description={mockTask.description}
          metadata={[
            {
              icon: Person,
              property: { type: "text", value: mockTask.assignee },
            },
            {
              icon: ArrowUp,
              property: { type: "text", value: mockTask.priority },
            },
            {
              icon: Clock,
              property: { type: "text", value: mockTask.dueDate },
            },
          ]}
          primaryAction={{
            label: "View Details",
            onClick: fn(),
          }}
          secondaryActions={[
            {
              label: "Edit",
              icon: Pencil,
              onClick: fn(),
            },
          ]}
          otherActions={[
            {
              label: "Quick View",
              icon: Search,
              onClick: fn(),
            },
            {
              label: "Delete",
              icon: Delete,
              onClick: fn(),
            },
          ]}
        />
      )
    },
  },
}

export const WithFetchMore: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the infinite scroll functionality. Scroll to the bottom of the lane to automatically fetch more items. The loading state is shown while fetching, and new items are added to the list.",
      },
    },
  },
  args: {
    title: "Tasks - Infinite Scroll",
    items: mockTasks,
    getKey: (task: RecordType) => (task as MockTask).id,
    hasMore: true,
    loading: false,
    renderCard: (task: RecordType, _index: number) => {
      const mockTask = task as MockTask
      return (
        <div className="my-1">
          <F0Card
            metadata={[
              {
                icon: Person,
                property: { type: "text", value: mockTask.assignee },
              },
              {
                icon: ArrowUp,
                property: { type: "text", value: mockTask.priority },
              },
              {
                icon: Clock,
                property: { type: "text", value: mockTask.dueDate },
              },
            ]}
          />
        </div>
      )
    },
  },
  render: function Render(args: LaneProps<RecordType>) {
    const [items, setItems] = useState<MockTask[]>(mockTasks)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, FETCH_DELAY)
    }, [])

    const handleFetchMore = () => {
      // Simulate loading
      setLoadingMore(true)

      setTimeout(() => {
        const currentCount = items.length
        const alreadyLoadedCount = mockTasks.length
        const additionalItemsLoaded = currentCount - alreadyLoadedCount

        // Calculate the correct start index for additionalMockTasks
        const startIndex = additionalItemsLoaded
        const endIndex = startIndex + 2

        const itemsToAdd = additionalMockTasks.slice(startIndex, endIndex)

        const newItems = [...items, ...itemsToAdd]
        const hasMoreItems = newItems.length < allMockTasks.length

        setItems(newItems)
        setHasMore(hasMoreItems)
        setLoadingMore(false)
      }, FETCH_DELAY)
    }

    return (
      <div
        className={
          "relative flex h-full w-fit flex-col gap-0 rounded-xl border transition-colors"
        }
        style={{
          backgroundColor: "hsla(210, 91%, 22%, 0.02)",
          height: "600px",
        }}
      >
        <Lane
          {...args}
          items={items}
          loading={loading}
          hasMore={hasMore}
          loadingMore={loadingMore}
          fetchMore={handleFetchMore}
        />
      </div>
    )
  },
}

export const EmptyState: Story = {
  args: {
    title: "Backlog",
    items: [],
    getKey: (task: RecordType) => (task as MockTask).id,
    renderCard: (task) => {
      const mockTask = task as MockTask
      return (
        <div className="my-1">
          <F0Card title={mockTask.title} description={mockTask.description} />
        </div>
      )
    },
  },
}

export const CustomEmptyState: Story = {
  args: {
    title: "Backlog",
    items: [],
    getKey: (task: RecordType) => (task as MockTask).id,
    renderCard: (task) => {
      const mockTask = task as MockTask
      return (
        <F0Card title={mockTask.title} description={mockTask.description} />
      )
    },
    emptyState: (
      <section
        aria-label="Empty lane"
        className="flex flex-col items-center justify-center py-8 text-center"
      >
        <h2 className="mb-2 text-base font-medium text-f1-foreground">
          No tasks in backlog
        </h2>
        <p className="text-sm text-f1-foreground-secondary">
          Tasks will appear here when added to the backlog
        </p>
      </section>
    ),
  },
}

export const Loading: Story = {
  args: {
    title: "Loading Tasks",
    items: [],
    getKey: (task: RecordType) => (task as MockTask).id,
    renderCard: (task) => <F0Card title={(task as MockTask).title} />,
    loading: true,
  },
}

export const CompactCards: Story = {
  args: {
    title: "Quick Tasks",
    items: mockTasks.slice(0, 2),
    getKey: (task) => (task as MockTask).id,
    renderCard: (task) => {
      const mockTask = task as MockTask
      return (
        <div className="my-1">
          <F0Card
            compact
            title={mockTask.title}
            description={mockTask.description}
            metadata={[
              {
                icon: ArrowUp,
                property: { type: "text", value: mockTask.priority },
              },
            ]}
          />
        </div>
      )
    },
  },
}

export const WithImages: Story = {
  args: {
    title: "Projects",
    items: [
      {
        id: "project-1",
        title: "E-commerce Redesign",
        description: "Complete overhaul of the online store interface",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
        team: "Design Team",
      },
      {
        id: "project-2",
        title: "Mobile App Launch",
        description: "Release new mobile application for iOS and Android",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
        team: "Development Team",
      },
    ] as Array<{
      id: string
      title: string
      description: string
      image: string
      team: string
    }>,
    getKey: (project: RecordType) => (project as MockTask).id,
    renderCard: (project: RecordType) => {
      const proj = project as {
        id: string
        title: string
        description: string
        image: string
        team: string
      }
      return (
        <F0Card
          title={proj.title}
          description={proj.description}
          image={proj.image}
          metadata={[
            {
              icon: Person,
              property: { type: "text", value: proj.team },
            },
          ]}
          link={`/projects/${proj.id}`}
        />
      )
    },
  },
}

export const TwoLanesDnD: Story = {
  parameters: {
    docs: { story: { inline: false, height: "560px" } },
    containerHeight: "800px",
    containerMaxWidth: "900px",
  },
  args: {
    title: "",
    items: [],
    getKey: () => "",
    renderCard: () => null,
    hasMore: false,
  },
  render: () => {
    const [instanceId] = useState(() => Symbol("two-lanes"))
    const [left, setLeft] = useState(mockTasks.slice(0, 3))
    const [right, setRight] = useState(mockTasks.slice(3, 6))

    function LaneDroppable({
      id,
      children,
    }: {
      id: string
      children: React.ReactNode
    }) {
      const ref = useRef<HTMLDivElement | null>(null)
      useDroppableList({
        ref: ref as React.RefObject<HTMLElement>,
        id,
        accepts: ["list-card"],
      })
      const [isOver, setIsOver] = useState(false)
      useEffect(() => {
        return monitorForElements({
          canMonitor: ({ source }) =>
            (source.data as { instanceId?: symbol }).instanceId === instanceId,
          onDropTargetChange: ({ location }) => {
            const targets = location.current.dropTargets as Array<{
              data?: { type?: string; id?: string }
            }>
            const overThisLane = targets.some(
              (t) => t.data?.type === "list-droppable" && t.data?.id === id
            )
            setIsOver(overThisLane)
          },
        })
      }, [id])
      return (
        <div
          ref={ref}
          className={
            "rounded border p-2 transition-colors " +
            (isOver
              ? "border-f1-border-hover bg-f1-background-info/20"
              : "border-f1-border-secondary")
          }
        >
          {children}
        </div>
      )
    }

    return (
      <DndProvider driver={createAtlaskitDriver(instanceId)}>
        <div className="grid grid-cols-2 gap-6">
          <LaneDroppable id="lane-left">
            <Lane<MockTask>
              title="Left"
              items={left}
              getKey={(item) => item.id}
              renderCard={(item, _i) => {
                return (
                  <DraggableF0Card
                    drag={{ id: item.id, type: "list-card" }}
                    title={item.title}
                    description={item.description}
                  />
                )
              }}
            />
          </LaneDroppable>

          <LaneDroppable id="lane-right">
            <Lane<MockTask>
              title="Right"
              items={right}
              getKey={(item) => item.id}
              renderCard={(item, _i) => {
                return (
                  <DraggableF0Card
                    drag={{ id: item.id, type: "list-card" }}
                    title={item.title}
                    description={item.description}
                  />
                )
              }}
            />
          </LaneDroppable>
        </div>

        {/* Simple cross-lane move: drop into a lane appends at end */}
        <MoveMonitor
          instanceId={instanceId}
          onMove={(sourceId, fromLane, toLane) => {
            if (fromLane === toLane) return
            setLeft((prev) => {
              const exists = prev.find((t) => t.id === sourceId)
              return exists ? prev.filter((t) => t.id !== sourceId) : prev
            })
            setRight((prev) => {
              const inRight = prev.find((t) => t.id === sourceId)
              if (toLane === "lane-right" && !inRight) {
                const from =
                  left.find((t) => t.id === sourceId) ||
                  right.find((t) => t.id === sourceId)
                return from ? [...prev, from] : prev
              }
              if (toLane === "lane-left" && inRight) {
                return prev.filter((t) => t.id !== sourceId)
              }
              return prev
            })
            setLeft((prev) => {
              const inLeft = prev.find((t) => t.id === sourceId)
              if (toLane === "lane-left" && !inLeft) {
                const from =
                  right.find((t) => t.id === sourceId) ||
                  left.find((t) => t.id === sourceId)
                return from ? [...prev, from] : prev
              }
              if (toLane === "lane-right" && inLeft) {
                return prev.filter((t) => t.id !== sourceId)
              }
              return prev
            })
          }}
        />
      </DndProvider>
    )
  },
}

// Types are kept inline in the effect to avoid unused warnings

function MoveMonitor({
  instanceId,
  onMove,
}: {
  instanceId: symbol
  onMove: (sourceId: string, fromLaneId: string, toLaneId: string) => void
}) {
  useEffect(() => {
    return monitorForElements({
      canMonitor: ({ source }) =>
        (source.data as { instanceId?: symbol }).instanceId === instanceId,
      onDrop: ({ location, source }) => {
        if (!location.current.dropTargets.length) return
        const currentTargets = location.current.dropTargets as Array<{
          data?: { type?: string; id?: string }
        }>
        const initialTargets = location.initial.dropTargets as Array<{
          data?: { type?: string; id?: string }
        }>

        const sourceId = String((source.data as { id?: string }).id ?? "")
        const fromLane = String(
          initialTargets.find((t) => t.data?.type === "list-droppable")?.data
            ?.id ?? ""
        )
        const toLane = String(
          currentTargets.find((t) => t.data?.type === "list-droppable")?.data
            ?.id ?? ""
        )
        if (!toLane || !fromLane || !sourceId) return
        onMove(sourceId, fromLane, toLane)
      },
    })
  }, [instanceId, onMove])
  return null
}
