import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, within } from "storybook/test"
import { DataList } from "@/experimental/Lists/DataList"
import { Delete, Pencil } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Accordion } from ".."
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

// Items whose body is a DataList instead of a paragraph.
const contentItems: F0AccordionItem[] = [
  {
    id: "performance",
    title: "Performance",
    defaultOpen: true,
    content: (
      <DataList>
        <DataList.Item text="4.2 / 5" />
        <DataList.Item text="Q4 2025 review · 4.2 / 5 · Feb 28, 2026" />
        <DataList.Item text="Mid-year 2025 · 3.8 / 5 · Aug 14, 2025" />
      </DataList>
    ),
  },
  {
    id: "absences",
    title: "Absences",
    description: "Approved in the last 12 months.",
    content: (
      <DataList>
        <DataList.Item text="3 approved · 12 days · 96 hours" />
        <DataList.Item text="Away Sep 15 – Sep 19, 2026" />
      </DataList>
    ),
  },
]

// Items with a headline value in the header, visible while collapsed.
const summaryValues = ["4.2 / 5", "12 interviews", "3 workshops"]
const summaryItems: F0AccordionItem[] = baseItems.map((item, index) => ({
  ...item,
  summary: (
    <DataList>
      <DataList.Item
        text={summaryValues[index] ?? ""}
        action={{ type: "copy" }}
      />
    </DataList>
  ),
}))

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
  title: "F0Accordion",
  component: F0Accordion,
  tags: ["experimental"],
  args: {
    items: baseItems,
  },
} satisfies Meta<typeof F0Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["!dev"],
}

export const DefaultOpen: Story = {
  tags: ["!dev"],
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
  tags: ["!dev"],
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
  tags: ["!dev"],
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
  tags: ["!dev"],
  render: () => <ControlledExample />,
}

export const WithContent: Story = {
  tags: ["!dev"],
  args: {
    items: contentItems,
  },
}

export const WithSummary: Story = {
  tags: ["!dev"],
  args: {
    items: summaryItems,
  },
}

export const Skeleton: Story = {
  tags: ["!dev"],
  render: () => <F0Accordion.Skeleton items={3} />,
}

export const Snapshot: Story = {
  tags: ["!dev"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4">
      <F0Accordion items={baseItems} />
      <F0Accordion
        items={baseItems.map((item, index) => ({
          ...item,
          defaultOpen: index === 0,
          actions: [
            {
              type: "segmentedControl",
              ariaLabel: `Relevance for ${item.title}`,
              items: relevanceSegments,
              value: "required",
              onChange: () => {},
            },
            {
              type: "dropdown",
              ariaLabel: `More actions for ${item.title}`,
              items: dropdownItems,
            },
          ],
        }))}
      />
      <F0Accordion items={contentItems} />
      <F0Accordion items={summaryItems} />
      <F0Accordion.Skeleton items={3} />
    </div>
  ),
}
