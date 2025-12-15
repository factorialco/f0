import { Reset, Save } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { F0ActionBar } from "."

const meta: Meta<typeof F0ActionBar> = {
  title: "Experimental/F0ActionBar",
  component: F0ActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
    a11y: {
      // This rule is disabled as dark-themed buttons are not compliant, we have to fix this in Figma first
      // Meanwhile, disabling this rule
      skipCi: true,
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the action bar",
    },
    primaryActions: {
      control: false,
      description: "The primary action",
    },
    secondaryActions: {
      control: false,
      description: "The secondary actions",
    },
    label: {
      control: "text",
      description: "The label of the action bar",
    },
  },
}

export default meta
type Story = StoryObj<typeof F0ActionBar>

export const Default: Story = {
  args: {
    isOpen: true,
    primaryActions: [
      {
        label: "Save changes",
        onClick: fn(),
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
        onClick: fn(),
        icon: Reset,
      },
    ],
    label: "Unsaved changes",
  },
}
