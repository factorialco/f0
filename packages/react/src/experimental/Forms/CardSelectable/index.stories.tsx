import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, userEvent, within } from "storybook/test"

import { Add, Briefcase, People } from "@/icons/app"

import type { CardSelectableProps, CardSelectableValue } from "./types"

import { CardSelectable, CardSelectableItem } from "./index"

const meta: Meta<CardSelectableProps<CardSelectableValue>> = {
  title: "Experimental/Forms/CardSelectable",
  component: CardSelectable,
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

export const Default: Story = {
  render: () => (
    <CardSelectable aria-label="Payment type selection" defaultValue="new">
      <CardSelectableItem
        value="new"
        title="Create a new bulk payment"
        description="Pay all the payments requests in a single click"
      />
      <CardSelectableItem
        value="existing"
        title="Add to existing bulk payment"
        description="Include the selected payment requests in an existing bulk payment"
      />
    </CardSelectable>
  ),
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
  render: () => (
    <CardSelectable aria-label="Payment type selection">
      <CardSelectableItem
        value="new"
        title="Create a new bulk payment"
        description="Pay all the payments requests in a single click"
      />
      <CardSelectableItem
        value="existing"
        title="Add to existing bulk payment"
        description="Include the selected payment requests in an existing bulk payment"
      />
    </CardSelectable>
  ),
}

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState("basic")

    return (
      <div className="flex flex-col gap-4">
        <CardSelectable
          aria-label="Plan selection"
          value={value}
          onValueChange={setValue}
        >
          <CardSelectableItem
            value="basic"
            title="Basic Plan"
            description="Perfect for small teams getting started"
          />
          <CardSelectableItem
            value="pro"
            title="Pro Plan"
            description="Advanced features for growing businesses"
          />
          <CardSelectableItem
            value="enterprise"
            title="Enterprise Plan"
            description="Full customization and dedicated support"
          />
        </CardSelectable>
        <p className="text-sm text-f1-foreground-secondary">
          Selected: <strong>{value}</strong>
        </p>
      </div>
    )
  },
}

export const WithNumbers: Story = {
  render: function NumbersStory() {
    const [value, setValue] = useState(1)

    return (
      <div className="flex flex-col gap-4">
        <CardSelectable
          aria-label="Priority selection"
          value={value}
          onValueChange={setValue}
        >
          <CardSelectableItem
            value={1}
            title="Low Priority"
            description="Can wait, not urgent"
          />
          <CardSelectableItem
            value={2}
            title="Medium Priority"
            description="Should be addressed soon"
          />
          <CardSelectableItem
            value={3}
            title="High Priority"
            description="Needs immediate attention"
          />
        </CardSelectable>
        <p className="text-sm text-f1-foreground-secondary">
          Selected: <strong>{value}</strong> (number)
        </p>
      </div>
    )
  },
}

export const Vertical: Story = {
  render: () => (
    <CardSelectable
      aria-label="Notification preference"
      layout="vertical"
      defaultValue="email"
    >
      <CardSelectableItem
        value="email"
        title="Email notifications"
        description="Receive updates via email"
      />
      <CardSelectableItem
        value="push"
        title="Push notifications"
        description="Get instant alerts on your device"
      />
      <CardSelectableItem
        value="none"
        title="No notifications"
        description="Only check manually when you want"
      />
    </CardSelectable>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <CardSelectable aria-label="Simple selection" defaultValue="yes">
      <CardSelectableItem value="yes" title="Yes" />
      <CardSelectableItem value="no" title="No" />
    </CardSelectable>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <CardSelectable aria-label="Subscription tier" defaultValue="free">
      <CardSelectableItem
        value="free"
        title="Free tier"
        description="Basic access with limitations"
      />
      <CardSelectableItem
        value="premium"
        title="Premium tier"
        description="This option is currently unavailable"
        disabled
      />
    </CardSelectable>
  ),
}

export const Disabled: Story = {
  render: () => (
    <CardSelectable
      aria-label="Disabled selector"
      disabled
      defaultValue="option1"
    >
      <CardSelectableItem
        value="option1"
        title="Option 1"
        description="This selector is disabled"
      />
      <CardSelectableItem
        value="option2"
        title="Option 2"
        description="Cannot change selection"
      />
    </CardSelectable>
  ),
}

export const WithIconAvatar: Story = {
  render: () => (
    <CardSelectable aria-label="Action selection" defaultValue="create">
      <CardSelectableItem
        value="create"
        title="Create new"
        description="Start from scratch"
        avatar={{ type: "icon", icon: Add }}
      />
      <CardSelectableItem
        value="import"
        title="Import existing"
        description="From another source"
        avatar={{ type: "icon", icon: Briefcase }}
      />
    </CardSelectable>
  ),
}

export const WithPersonAvatar: Story = {
  render: () => (
    <CardSelectable
      aria-label="Assignee selection"
      layout="vertical"
      defaultValue="john"
    >
      <CardSelectableItem
        value="john"
        title="John Doe"
        description="Product Designer"
        avatar={{ type: "person", firstName: "John", lastName: "Doe" }}
      />
      <CardSelectableItem
        value="jane"
        title="Jane Smith"
        description="Software Engineer"
        avatar={{ type: "person", firstName: "Jane", lastName: "Smith" }}
      />
      <CardSelectableItem
        value="bob"
        title="Bob Wilson"
        description="Project Manager"
        avatar={{ type: "person", firstName: "Bob", lastName: "Wilson" }}
      />
    </CardSelectable>
  ),
}

export const WithTeamAvatar: Story = {
  render: () => (
    <CardSelectable aria-label="Team selection" defaultValue="design">
      <CardSelectableItem
        value="design"
        title="Design Team"
        description="Product design and UX"
        avatar={{ type: "team", name: "Design" }}
      />
      <CardSelectableItem
        value="engineering"
        title="Engineering Team"
        description="Software development"
        avatar={{ type: "team", name: "Engineering" }}
      />
    </CardSelectable>
  ),
}

export const WithEmojiAvatar: Story = {
  render: () => (
    <CardSelectable aria-label="Category selection" defaultValue="rocket">
      <CardSelectableItem
        value="rocket"
        title="Launch Project"
        description="Start something new"
        avatar={{ type: "emoji", emoji: "🚀" }}
      />
      <CardSelectableItem
        value="star"
        title="Featured"
        description="Highlight important items"
        avatar={{ type: "emoji", emoji: "⭐" }}
      />
    </CardSelectable>
  ),
}

export const MixedAvatars: Story = {
  render: () => (
    <CardSelectable
      aria-label="Mixed selection"
      layout="vertical"
      defaultValue="personal"
    >
      <CardSelectableItem
        value="personal"
        title="Personal Account"
        description="For individual use"
        avatar={{ type: "person", firstName: "You", lastName: "" }}
      />
      <CardSelectableItem
        value="team"
        title="Team Account"
        description="For your team"
        avatar={{ type: "icon", icon: People }}
      />
      <CardSelectableItem
        value="enterprise"
        title="Enterprise"
        description="For large organizations"
        avatar={{ type: "company", name: "Enterprise" }}
      />
    </CardSelectable>
  ),
}
