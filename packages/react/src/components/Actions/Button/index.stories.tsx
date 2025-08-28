import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { expect, within } from "storybook/test"
import { Add, Archive, Delete, Save } from "../../../icons/app"
import { Button } from "./index"

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-components?node-id=41-1256&t=99GWQFvFLZtKW49N-4",
    },
  },
  tags: ["autodocs", "stable"],
  args: {
    variant: "default",
    onClick: () => {
      console.log("Button clicked")
      //fn()
    },
    label: "Click me",
    size: "md",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "critical",
        "neutral",
        "ghost",
        "outline",
        "promote",
        "outlinePromote",
      ],
      description: "Visual style variant of the button.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "Sets the button size. 'lg' for mobile, 'md' for desktop, 'sm' for compact/secondary actions.",
    },
    label: {
      control: "text",
      description:
        "The visible label for the button. Required for accessibility.",
    },
    icon: {
      control: "boolean",
      description:
        "Adds an icon to the button, combined with the label for better clarity and recognition.",
    },
    emoji: {
      control: "text",
      description:
        "Adds an emoji to the button, can be used as a special case of icon-only button.",
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to user interaction.",
    },
    loading: {
      control: "boolean",
      description:
        "Indicates that an action is in progress. Shows a loading spinner and blocks interaction.",
    },
    hideLabel: {
      control: "boolean",
      description:
        "Hides the label visually (for icon-only or emoji-only buttons), but keeps it accessible for screen readers.",
    },
    pressed: {
      control: "boolean",
      description:
        "If true, the button is visually active or selected (pressed state).",
    },
    onClick: {
      action: "clicked",
      description:
        "Callback fired when the button is clicked. Supports async functions for loading state.",
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Basic Variants
export const Default: Story = {
  args: {
    variant: "default",
    label: "Default Button",
    "data-test": "data",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole("button")
    await expect(button.dataset.test).toBe("data")
  },
}

export const Variants: Story = {
  ...withSnapshot({}),
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="default" label="Default" />
      <Button {...args} variant="outline" label="Outline" />
      <Button {...args} variant="neutral" label="Neutral" />
      <Button {...args} variant="ghost" label="Ghost" />
      <Button {...args} variant="critical" label="Critical" />
      <Button {...args} variant="promote" label="Promote" />
      {/* <Button {...args} variant="outlinePromote" label="Outline Promote" /> */}
    </div>
  ),
}

export const IconVariants: Story = {
  ...withSnapshot({}),
  render: (args) => (
    <div className="flex flex-col gap-6">
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>With icon</div>
        <div className="flex gap-2">
          <Button {...args} variant="default" label="Default" icon={Add} />
          <Button {...args} variant="outline" label="Outline" icon={Add} />
          <Button {...args} variant="neutral" label="Neutral" icon={Archive} />
          <Button {...args} variant="ghost" label="Ghost" icon={Save} />
          <Button {...args} variant="critical" label="Critical" icon={Delete} />
          <Button {...args} variant="promote" label="Promote" icon={Add} />
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Only icon</div>
        <div className="flex gap-2">
          <Button
            {...args}
            variant="default"
            label="Default"
            icon={Add}
            hideLabel
            round
          />
          <Button
            {...args}
            variant="outline"
            label="Outline"
            icon={Add}
            hideLabel
            round
          />
          <Button
            {...args}
            variant="neutral"
            label="Neutral"
            icon={Archive}
            hideLabel
            round
          />
          <Button
            {...args}
            variant="ghost"
            label="Ghost"
            icon={Save}
            hideLabel
            round
          />
          <Button
            {...args}
            variant="critical"
            label="Critical"
            icon={Delete}
            hideLabel
            round
          />
          <Button
            {...args}
            variant="promote"
            label="Promote"
            icon={Add}
            hideLabel
            round
          />
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Only emoji</div>
        <div className="flex gap-2">
          <Button
            {...args}
            emoji="🥰"
            label="🥰"
            variant="neutral"
            hideLabel
            round
          />
        </div>
      </div>
    </div>
  ),
}

// Size Variants
export const Sizes: Story = {
  ...withSnapshot({}),
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="lg" label="Large" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="sm" label="Small" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Button",
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    label: "Processing...",
  },
}

// Interactive Examples
export const AsyncAction: Story = {
  args: {
    label: "Save Changes",
    icon: Save,
  },
  render: (args) => {
    const onClick = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Changes saved!")
    }

    return <Button {...args} onClick={onClick} />
  },
}

export const IconButtonGroup: Story = {
  ...withSnapshot({}),
  render: () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" icon={Add} hideLabel round label="Add" />
      <Button variant="ghost" icon={Archive} hideLabel round label="Archive" />
      <Button variant="ghost" icon={Delete} hideLabel round label="Delete" />
    </div>
  ),
}

export const OnlyEmoji: Story = {
  args: {
    emoji: "🥰",
    label: "🥰",
    variant: "neutral",
    hideLabel: true,
  },
}

export const States: Story = {
  ...withSnapshot({}),
  render: (args) => {
    const [asyncLoading, setAsyncLoading] = React.useState(false)
    return (
      <div className="flex gap-2">
        <Button {...args} label="Pressed" pressed />
        <Button {...args} label="Disabled" disabled />
        <Button {...args} label="Loading" loading />
        <Button
          {...args}
          label={asyncLoading ? "Saving..." : "Async Loading"}
          loading={asyncLoading}
          onClick={async () => {
            setAsyncLoading(true)
            await new Promise((resolve) => setTimeout(resolve, 1500))
            setAsyncLoading(false)
            alert("Async action completed!")
          }}
        />
      </div>
    )
  },
}

export const AsyncLoading: Story = {
  render: (args) => {
    const [asyncLoading, setAsyncLoading] = React.useState(false)
    return (
      <Button
        {...args}
        label={asyncLoading ? "Saving..." : "Async Loading"}
        loading={asyncLoading}
        onClick={async () => {
          setAsyncLoading(true)
          await new Promise((resolve) => setTimeout(resolve, 1500))
          setAsyncLoading(false)
          alert("Async action completed!")
        }}
      />
    )
  },
}
