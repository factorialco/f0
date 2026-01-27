import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, userEvent, within } from "storybook/test"

import { Add, Briefcase, People } from "@/icons/app"

import type { CardSelectableItem, CardSelectableSingleProps } from "./types"

import { CardSelectableContainer } from "./index"

// Use single selection props for the meta type - stories can override for multiple
const meta: Meta<CardSelectableSingleProps<string>> = {
  title: "Experimental/Forms/CardSelectable",
  component: CardSelectableContainer,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultItems: CardSelectableItem<string>[] = [
  {
    value: "new",
    title: "Create a new bulk payment",
    description: "Pay all the payments requests in a single click",
  },
  {
    value: "existing",
    title: "Add to existing bulk payment",
    description:
      "Include the selected payment requests in an existing bulk payment",
  },
]

export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("new")
    return (
      <CardSelectableContainer
        items={defaultItems}
        value={value}
        onChange={setValue}
        aria-label="Payment type selection"
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Initial state - first option selected", async () => {
      const radios = canvas.getAllByRole("radio")
      expect(radios[0]).toHaveAttribute("aria-checked", "true")
      expect(radios[1]).toHaveAttribute("aria-checked", "false")
    })

    await step("Click second card - selection changes", async () => {
      const radios = canvas.getAllByRole("radio")
      await userEvent.click(radios[1])

      expect(radios[0]).toHaveAttribute("aria-checked", "false")
      expect(radios[1]).toHaveAttribute("aria-checked", "true")
    })
  },
}

export const Unselected: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
      <CardSelectableContainer
        items={defaultItems}
        value={value}
        onChange={setValue}
        aria-label="Payment type selection"
      />
    )
  },
}

export const MultipleSelection: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(["new"])
    return (
      <CardSelectableContainer
        multiple
        items={defaultItems}
        value={value}
        onChange={setValue}
        aria-label="Payment type selection"
      />
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Initial state - first option selected", async () => {
      const checkboxes = canvas.getAllByRole("checkbox")
      expect(checkboxes[0]).toHaveAttribute("aria-checked", "true")
      expect(checkboxes[1]).toHaveAttribute("aria-checked", "false")
    })

    await step(
      "Click second card - both can be selected (multiple mode)",
      async () => {
        const checkboxes = canvas.getAllByRole("checkbox")
        await userEvent.click(checkboxes[1])

        expect(checkboxes[0]).toHaveAttribute("aria-checked", "true")
        expect(checkboxes[1]).toHaveAttribute("aria-checked", "true")
      }
    )

    await step("Click first card again - deselects it", async () => {
      const checkboxes = canvas.getAllByRole("checkbox")
      await userEvent.click(checkboxes[0])

      expect(checkboxes[0]).toHaveAttribute("aria-checked", "false")
      expect(checkboxes[1]).toHaveAttribute("aria-checked", "true")
    })
  },
}

const numericItems: CardSelectableItem<number>[] = [
  {
    value: 1,
    title: "Option 1",
    description: "First option with number value",
  },
  {
    value: 2,
    title: "Option 2",
    description: "Second option with number value",
  },
  {
    value: 3,
    title: "Option 3",
    description: "Third option with number value",
  },
]

export const WithNumbers: Story = {
  render: function Render() {
    const [value, setValue] = useState<number>(1)
    return (
      <CardSelectableContainer
        items={numericItems}
        value={value}
        onChange={setValue}
        aria-label="Numeric selection"
      />
    )
  },
}

export const Vertical: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("new")
    return (
      <CardSelectableContainer
        items={defaultItems}
        value={value}
        onChange={setValue}
        layout="vertical"
        aria-label="Payment type selection"
      />
    )
  },
}

const titleOnlyItems: CardSelectableItem<string>[] = [
  { value: "yes", title: "Yes" },
  { value: "no", title: "No" },
  { value: "maybe", title: "Maybe" },
]

export const TitleOnly: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("yes")
    return (
      <CardSelectableContainer
        items={titleOnlyItems}
        value={value}
        onChange={setValue}
        aria-label="Simple selection"
      />
    )
  },
}

const itemsWithDisabled: CardSelectableItem<string>[] = [
  {
    value: "active",
    title: "Active option",
    description: "This can be selected",
  },
  {
    value: "disabled",
    title: "Disabled option",
    description: "This cannot be selected",
    disabled: true,
  },
  {
    value: "another",
    title: "Another option",
    description: "This can be selected",
  },
]

export const WithDisabledItem: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("active")
    return (
      <CardSelectableContainer
        items={itemsWithDisabled}
        value={value}
        onChange={setValue}
        aria-label="Selection with disabled item"
      />
    )
  },
}

export const Disabled: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("new")
    return (
      <CardSelectableContainer
        items={defaultItems}
        value={value}
        onChange={setValue}
        disabled
        aria-label="Disabled selection"
      />
    )
  },
}

const iconItems: CardSelectableItem<string>[] = [
  {
    value: "create",
    title: "Create new",
    description: "Start from scratch",
    avatar: { type: "icon", icon: Add },
  },
  {
    value: "import",
    title: "Import existing",
    description: "From another source",
    avatar: { type: "icon", icon: Briefcase },
  },
]

export const WithIconAvatar: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("create")
    return (
      <CardSelectableContainer
        items={iconItems}
        value={value}
        onChange={setValue}
        aria-label="Action selection"
      />
    )
  },
}

const personItems: CardSelectableItem<string>[] = [
  {
    value: "john",
    title: "John Doe",
    description: "Product Designer",
    avatar: { type: "person", firstName: "John", lastName: "Doe" },
  },
  {
    value: "jane",
    title: "Jane Smith",
    description: "Software Engineer",
    avatar: { type: "person", firstName: "Jane", lastName: "Smith" },
  },
  {
    value: "bob",
    title: "Bob Wilson",
    description: "Project Manager",
    avatar: { type: "person", firstName: "Bob", lastName: "Wilson" },
  },
]

export const WithPersonAvatar: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("john")
    return (
      <CardSelectableContainer
        items={personItems}
        value={value}
        onChange={setValue}
        layout="vertical"
        aria-label="Assignee selection"
      />
    )
  },
}

const teamItems: CardSelectableItem<string>[] = [
  {
    value: "design",
    title: "Design Team",
    description: "Product design and UX",
    avatar: { type: "team", name: "Design" },
  },
  {
    value: "engineering",
    title: "Engineering Team",
    description: "Software development",
    avatar: { type: "team", name: "Engineering" },
  },
]

export const WithTeamAvatar: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("design")
    return (
      <CardSelectableContainer
        items={teamItems}
        value={value}
        onChange={setValue}
        aria-label="Team selection"
      />
    )
  },
}

const emojiItems: CardSelectableItem<string>[] = [
  {
    value: "rocket",
    title: "Launch Project",
    description: "Start something new",
    avatar: { type: "emoji", emoji: "🚀" },
  },
  {
    value: "star",
    title: "Featured",
    description: "Highlight important items",
    avatar: { type: "emoji", emoji: "⭐" },
  },
]

export const WithEmojiAvatar: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("rocket")
    return (
      <CardSelectableContainer
        items={emojiItems}
        value={value}
        onChange={setValue}
        aria-label="Category selection"
      />
    )
  },
}

const mixedItems: CardSelectableItem<string>[] = [
  {
    value: "personal",
    title: "Personal Account",
    description: "For individual use",
    avatar: { type: "person", firstName: "You", lastName: "" },
  },
  {
    value: "team",
    title: "Team Account",
    description: "For your team",
    avatar: { type: "icon", icon: People },
  },
  {
    value: "enterprise",
    title: "Enterprise",
    description: "For large organizations",
    avatar: { type: "company", name: "Enterprise" },
  },
]

export const MixedAvatars: Story = {
  render: function Render() {
    const [value, setValue] = useState<string>("personal")
    return (
      <CardSelectableContainer
        items={mixedItems}
        value={value}
        onChange={setValue}
        layout="vertical"
        aria-label="Mixed selection"
      />
    )
  },
}

export const MultipleWithAvatars: Story = {
  render: function Render() {
    const [value, setValue] = useState<string[]>(["john"])
    return (
      <CardSelectableContainer
        multiple
        items={personItems}
        value={value}
        onChange={setValue}
        layout="vertical"
        aria-label="Multiple person selection"
      />
    )
  },
}
