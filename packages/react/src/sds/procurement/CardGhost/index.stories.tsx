import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Check, FileFilled } from "@/icons/app"

import { CardGhost } from "./index"

const meta: Meta<typeof CardGhost> = {
  title: "Procurement/CardGhost",
  component: CardGhost,
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
    tag: <F0TagRaw icon={Check} text="Filled" />,
    date: "04/12/2026",
  },
}

export const Pending: Story = {
  args: {
    icon: FileFilled,
    title: "Pixar Animation",
    tag: <F0TagStatus variant="warning" text="Pending" />,
    date: "04/12/2026",
  },
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
      {
        id: "1",
        title: "Pixar Animation",
        tag: <F0TagRaw icon={Check} text="Filled" />,
        date: "04/12/2026",
      },
      {
        id: "2",
        title: "Acme Corporation",
        tag: <F0TagRaw icon={Check} text="Filled" />,
        date: "03/28/2026",
      },
      {
        id: "3",
        title: "Globex Industries",
        tag: <F0TagRaw icon={Check} text="Filled" />,
        date: "04/01/2026",
      },
      {
        id: "4",
        title: "Stark Industries",
        tag: <F0TagStatus variant="warning" text="Pending" />,
        date: "04/10/2026",
      },
      {
        id: "5",
        title: "Wayne Enterprises",
        tag: <F0TagStatus variant="warning" text="Pending" />,
        date: "04/15/2026",
      },
    ]

    return (
      <div className="flex flex-col gap-1">
        {cards.map((card) => (
          <CardGhost
            key={card.id}
            icon={FileFilled}
            title={card.title}
            tag={card.tag}
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
