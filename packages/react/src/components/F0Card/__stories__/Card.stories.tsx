import {
  Add,
  Briefcase,
  Calendar,
  CalendarArrowRight,
  ChartPie,
  Delete,
  Envelope,
  ExternalLink,
  Lightbulb,
  Link,
  Office,
  Star,
} from "@/icons/app"
import { createAtlaskitDriver } from "@/lib/dnd/atlaskitDriver"
import { DndProvider } from "@/lib/dnd/context"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import image from "@storybook-static/avatars/person04.jpg"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { F0Card } from "../F0Card"
import { DraggableStoryCard } from "./DraggableStoryCard"
import { DropLaneCancel } from "./DropLaneCancel"
import { DropLaneEnter } from "./DropLaneEnter"
import { DropLaneReorder } from "./DropLaneReorder"

const SlotComponent = () => {
  return (
    <div className="w-full rounded border-2 border-dashed border-f1-border-info bg-f1-background-info p-5 text-center font-medium text-f1-foreground-info">
      This is a slot (children)
    </div>
  )
}

const meta = {
  component: F0Card,
  title: "Card",
  parameters: {
    docs: {
      story: { inline: false, height: "320px" },
    },
  },
  tags: ["autodocs", "stable"],
  decorators: [
    (Story, context) => {
      if (context.parameters?.noMetaLayout) {
        return <Story />
      }
      return (
        <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center">
          <div className="w-full max-w-[372px]">
            <Story />
          </div>
        </div>
      )
    },
  ],
} satisfies Meta<typeof F0Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Daniel",
      lastName: "Moreno",
    },
    compact: false,
    title: "Daniel Moreno",
    description: "This is a cool description",
    metadata: [
      {
        icon: Briefcase,
        tooltip: "Job title",
        property: {
          type: "text",
          value: "Design Engineer",
        },
      },
      {
        icon: CalendarArrowRight,
        tooltip: "Date",
        property: {
          type: "text",
          value: "3 years ago",
        },
      },
      {
        icon: Star,
        tooltip: "Status",
        property: {
          type: "status",
          value: {
            status: "positive",
            label: "Active",
          },
        },
      },
      {
        icon: Link,
        tooltip: "Link",
        property: {
          type: "text",
          value:
            "https://docs.google.com/spreadsheets/d/1jO1tPWhNe1y_ciSmNVYHugIPaOIEWOqrHR50Du2wvbc/edit",
        },
      },
    ],
    otherActions: [
      {
        label: "Mail",
        icon: Envelope,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        onClick: fn(),
        critical: true,
      },
    ],
  },
}

export const WithActions: Story = {
  args: {
    title: "Product designer",
    description:
      "Seeking an experienced product designer to lead design initiatives.",
    primaryAction: {
      label: "Refer",
      icon: Envelope,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Apply",
        icon: Add,
        onClick: fn(),
      },
      {
        label: "Share",
        icon: ExternalLink,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        icon: Office,
        property: {
          type: "tag",
          value: {
            label: "Barcelona, Spain",
          },
        },
      },
      {
        icon: Calendar,
        property: {
          type: "text",
          value: "10 months ago",
        },
      },
    ],
  },
}

export const WithActionsAndLink: Story = {
  args: {
    ...WithActions.args,
    secondaryActions: {
      label: "View more",
      href: "/",
      target: "_blank",
    },
  },
}

export const WithLink: Story = {
  args: {
    ...Default.args,
    link: "/",
  },
}

export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <F0Card {...args} selected={selected} onSelect={setSelected} />
  },
}

export const WithChildren: Story = {
  args: {
    title: "Card with children",
    children: <SlotComponent />,
  },
}

export const WithEmoji: Story = {
  args: {
    ...Default.args,
    avatar: {
      type: "emoji",
      emoji: "🐱",
    },
  },
}

export const WithIconAndImage: Story = {
  args: {
    ...Default.args,
    avatar: {
      type: "icon",
      icon: Lightbulb,
    },
    image: image,
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    selectable: true,
    image: image,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <F0Card {...args} selected={selected} onSelect={setSelected} />
  },
}

export const WithAvatarFile: Story = {
  args: {
    ...WithImage.args,
    selectable: true,
    image: image,
    avatar: {
      type: "file",
      file: new File([""], "document.pdf", { type: "application/pdf" }),
    },
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)
    return <F0Card {...args} selected={selected} onSelect={setSelected} />
  },
}

export const Compact: Story = {
  args: {
    ...WithActions.args,
    compact: true,
  },
}

export const WithProgressBar: Story = {
  args: {
    avatar: {
      type: "icon",
      icon: ChartPie,
    },
    title: "Project Alpha",
    description: "Q4 sprint progress tracking",
    metadata: [
      {
        icon: Calendar,
        tooltip: "Due date",
        property: {
          type: "date",
          value: new Date(2025, 11, 31),
        },
      },
      {
        icon: ChartPie,
        tooltip: "Completion",
        property: {
          type: "progressBar",
          value: {
            value: 75,
            max: 100,
            label: "75%",
          },
        },
      },
      {
        icon: Star,
        tooltip: "Status",
        property: {
          type: "status",
          value: {
            status: "positive",
            label: "On track",
          },
        },
      },
    ],
  },
}

export const WithProgressBarCustomColor: Story = {
  args: {
    avatar: {
      type: "icon",
      icon: Briefcase,
    },
    title: "Budget Report",
    description: "Monthly budget utilization",
    metadata: [
      {
        icon: ChartPie,
        tooltip: "Budget used",
        property: {
          type: "progressBar",
          value: {
            value: 85,
            max: 100,
            label: "€8,500 / €10,000",
            color: "categorical-2",
          },
        },
      },
    ],
  },
}

export const Skeleton: Story = {
  render: () => {
    return <F0Card.Skeleton />
  },
}

export const SkeletonCompact: Story = {
  render: () => {
    return <F0Card.Skeleton compact />
  },
}

export const IntentsShowcase: Story = {
  parameters: {
    docs: {
      story: { inline: false, height: "420px" },
    },
    noMetaLayout: true,
  },
  render: () => {
    type CardItem = { id: string; title: string }

    const [items, setItems] = useState<CardItem[]>([
      { id: "card-1", title: "First card" },
      { id: "card-2", title: "Second card" },
      { id: "card-3", title: "Third card" },
    ])
    const [log, setLog] = useState<string[]>([])
    const [instanceId] = useState(() => Symbol("showcase-instance"))
    const getIndexById = (id: string) => items.findIndex((i) => i.id === id)
    const pushLog = (s: string) => setLog((prev) => [s, ...prev].slice(0, 6))

    return (
      <DndProvider driver={createAtlaskitDriver(instanceId)}>
        <div className="flex h-full w-full flex-row justify-center gap-6 align-middle">
          <div>
            <p className="mb-2 text-sm font-medium">Reorder</p>
            <DropLaneReorder
              id="lane-reorder"
              instanceId={instanceId}
              getIndexById={getIndexById}
              onReorder={(from, to) => {
                setItems((prev) => {
                  const next = [...prev]
                  const [removed] = next.splice(from, 1)
                  next.splice(to, 0, removed)
                  return next
                })
                pushLog(`reorder: ${from} → ${to}`)
              }}
            >
              {items.map((item, index) => (
                <DraggableStoryCard
                  key={item.id}
                  id={item.id}
                  index={index}
                  title={item.title}
                  description="Drag over cards to reorder"
                />
              ))}
            </DropLaneReorder>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-sm font-medium">Enter container</p>
              <DropLaneEnter
                id="lane-enter"
                instanceId={instanceId}
                onEnter={(sourceId) => pushLog(`enter: ${sourceId}`)}
              >
                <div className="p-2 text-xs text-f1-foreground-secondary">
                  Hover here (not over a card) to trigger enter-container
                </div>
              </DropLaneEnter>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Cancel zone</p>
              <DropLaneCancel id="lane-cancel" instanceId={instanceId}>
                <div className="p-2 text-xs text-f1-foreground-secondary">
                  Hover here without targeting a card → cancel intent
                </div>
              </DropLaneCancel>
            </div>
          </div>
          <div className="rounded border border-f1-border-secondary p-2 text-xs text-f1-foreground-secondary">
            <div className="mb-1 font-medium">Log</div>
            <ul className="list-disc pl-4">
              {log.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </DndProvider>
    )
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex max-w-xl flex-col gap-2">
      <F0Card.Skeleton />
      <F0Card.Skeleton compact />
      <F0Card {...Default.args} />
      <F0Card {...WithActions.args} />
      <F0Card {...Compact.args} />
      <F0Card {...WithActionsAndLink.args} />
      <F0Card {...WithImage.args} />
      <F0Card {...WithProgressBar.args} />
      <F0Card {...WithProgressBarCustomColor.args} />
    </div>
  ),
}
