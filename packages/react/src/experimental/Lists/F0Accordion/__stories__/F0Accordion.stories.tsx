import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { useState } from "react"

import { Delete, Pencil } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Accordion } from "../index"
import { F0AccordionItem } from "../types"

const baseItems: F0AccordionItem[] = [
  {
    id: "prototyping",
    title: "Prototyping",
    description:
      "Ability to present and defend design decisions clearly to different audiences — PMs, engineers, and executives. Listens actively, incorporates feedback without losing design integrity, and aligns teams around a shared understanding of the problem and solution.",
  },
  {
    id: "user-research",
    title: "User Research",
    description:
      "Conducts user interviews, usability tests, and synthesizes insights to inform design decisions.",
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    description:
      "Applies design thinking methodologies to frame problems and explore solution spaces collaboratively.",
  },
]

const relevanceSegments = [
  { value: "required", label: "Required" },
  { value: "important", label: "Important" },
  { value: "nice-to-have", label: "Nice to have" },
]

const dropdownItems = [
  { label: "Edit", icon: Pencil, onClick: () => {} },
  { label: "Delete", icon: Delete, critical: true, onClick: () => {} },
]

const meta = {
  title: "Components/F0Accordion",
  component: F0Accordion,
  tags: ["autodocs", "experimental"],
  args: {
    items: baseItems,
  },
} satisfies Meta<typeof F0Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: withSnapshot({}),
}

export const DefaultOpen: Story = {
  parameters: withSnapshot({}),
  args: {
    items: baseItems.map((item, index) => ({
      ...item,
      defaultOpen: index === 0,
    })),
  },
}

const WithSegmentedControlExample = () => {
  const [relevance, setRelevance] = useState<Record<string, string>>(
    Object.fromEntries(baseItems.map((item) => [item.id, "required"]))
  )
  return (
    <F0Accordion
      items={baseItems.map((item) => ({
        ...item,
        actions: [
          {
            type: "segmentedControl",
            ariaLabel: `Relevance for ${item.title}`,
            items: relevanceSegments,
            value: relevance[item.id],
            onChange: (next) =>
              setRelevance((prev) => ({ ...prev, [item.id]: next })),
          },
        ],
      }))}
    />
  )
}

export const WithSegmentedControl: Story = {
  render: () => <WithSegmentedControlExample />,
}

const WithSegmentedControlAndDropdownExample = () => {
  const [relevance, setRelevance] = useState<Record<string, string>>(
    Object.fromEntries(baseItems.map((item) => [item.id, "required"]))
  )
  return (
    <F0Accordion
      items={baseItems.map((item) => ({
        ...item,
        defaultOpen: item.id === "prototyping",
        actions: [
          {
            type: "segmentedControl",
            ariaLabel: `Relevance for ${item.title}`,
            items: relevanceSegments,
            value: relevance[item.id],
            onChange: (next) =>
              setRelevance((prev) => ({ ...prev, [item.id]: next })),
          },
          {
            type: "dropdown",
            ariaLabel: `More actions for ${item.title}`,
            items: dropdownItems,
          },
        ],
      }))}
    />
  )
}

export const WithSegmentedControlAndDropdown: Story = {
  render: () => <WithSegmentedControlAndDropdownExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const triggers = canvas.getAllByRole("button", {
      name: /^Expand |^Collapse /,
    })
    expect(triggers.length).toBe(baseItems.length)
  },
}

const ControlledExample = () => {
  const [openIds, setOpenIds] = useState<string[]>(["user-research"])
  return (
    <F0Accordion items={baseItems} value={openIds} onValueChange={setOpenIds} />
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const Skeleton: Story = {
  parameters: withSnapshot({}),
  render: () => <F0Accordion.Skeleton items={3} />,
}
