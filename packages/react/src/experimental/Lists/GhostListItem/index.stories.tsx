import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { FileFilled } from "@/icons/app"

import { GhostListItem } from "./index"

const meta: Meta<typeof GhostListItem> = {
  title: "Lists/GhostListItem",
  component: GhostListItem,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="flex w-full items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    icon: FileFilled,
    title: "Pixar Animation",
    filled: true,
    date: "04/12/2026",
  },
}

export const Pending: Story = {
  args: {
    icon: FileFilled,
    title: "Pixar Animation",
    filled: false,
    date: "04/12/2026",
  },
}

export const Selected: Story = {
  args: {
    icon: FileFilled,
    title: "Pixar Animation",
    filled: true,
    date: "04/12/2026",
    selected: true,
  },
}

export const SkeletonStory: Story = {
  name: "Skeleton",
  render: () => <GhostListItem.Skeleton />,
}

export const List: Story = {
  parameters: {
    docs: {
      story: { inline: false, height: "480px" },
    },
  },
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    const cards = [
      { id: "1", title: "Pixar Animation", filled: true, date: "04/12/2026" },
      { id: "2", title: "Acme Corporation", filled: true, date: "03/28/2026" },
      {
        id: "3",
        title: "Globex Industries",
        filled: true,
        date: "04/01/2026",
      },
      {
        id: "4",
        title: "Stark Industries",
        filled: false,
        date: "04/10/2026",
      },
      {
        id: "5",
        title: "Wayne Enterprises",
        filled: false,
        date: "04/15/2026",
      },
    ]

    return (
      <div className="flex flex-col gap-1">
        {cards.map((card) => (
          <GhostListItem
            key={card.id}
            icon={FileFilled}
            title={card.title}
            filled={card.filled}
            date={card.date}
            selected={selectedId === card.id}
            onClick={() =>
              setSelectedId(selectedId === card.id ? null : card.id)
            }
          />
        ))}
      </div>
    )
  },
}

export const ListWithSkeletons: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <GhostListItem.Skeleton />
      <GhostListItem.Skeleton />
      <GhostListItem.Skeleton />
    </div>
  ),
}
