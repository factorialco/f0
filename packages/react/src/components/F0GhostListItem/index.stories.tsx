import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { FileFilled } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0GhostListItem } from "./index"

const meta = {
  title: "List/F0GhostListItem",
  component: F0GhostListItem,
  tags: ["autodocs", "stable"],
  args: {
    icon: FileFilled,
    title: "Pixar Animation",
    filled: true,
    date: "04/12/2026",
    onClick: fn(),
  },
  decorators: [
    (Story) => (
      <div className="flex w-full items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof F0GhostListItem>

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

export const Disabled: Story = {
  args: {
    icon: FileFilled,
    title: "Pixar Animation",
    filled: false,
    date: "04/12/2026",
    disabled: true,
  },
}

export const SkeletonStory: Story = {
  name: "Skeleton",
  render: () => <F0GhostListItem.Skeleton />,
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
      {
        id: "6",
        title: "Umbrella Corp",
        filled: false,
        date: "04/20/2026",
        disabled: true,
      },
    ]

    return (
      <div className="flex flex-col gap-1">
        {cards.map((card) => (
          <F0GhostListItem
            key={card.id}
            icon={FileFilled}
            title={card.title}
            filled={card.filled}
            date={card.date}
            disabled={"disabled" in card && card.disabled}
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
      <F0GhostListItem.Skeleton />
      <F0GhostListItem.Skeleton />
      <F0GhostListItem.Skeleton />
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex max-w-md flex-col gap-2">
      <F0GhostListItem
        icon={FileFilled}
        title="Filled item"
        filled
        date="04/12/2026"
        onClick={() => {}}
      />
      <F0GhostListItem
        icon={FileFilled}
        title="Pending item"
        filled={false}
        date="04/12/2026"
        onClick={() => {}}
      />
      <F0GhostListItem
        icon={FileFilled}
        title="Selected item"
        filled
        date="04/12/2026"
        selected
        onClick={() => {}}
      />
      <F0GhostListItem
        icon={FileFilled}
        title="Disabled item"
        filled={false}
        date="04/12/2026"
        disabled
        onClick={() => {}}
      />
      <F0GhostListItem.Skeleton />
    </div>
  ),
}
