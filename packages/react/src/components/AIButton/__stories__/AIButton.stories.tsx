import { Calendar, One, Search, Summary } from "@/icons/ai"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { AIButton } from "../AIButton"

const meta = {
  component: AIButton,
  title: "AIButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Generate",
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Sets the button size.",
    },
    label: {
      control: "text",
      description: "The visible label for the button.",
    },
    icon: {
      control: "boolean",
      description: "Adds an icon to the button.",
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to interaction.",
    },
    hideLabel: {
      control: "boolean",
      description:
        "Hides the label visually (for icon-only buttons), but keeps it accessible for screen readers.",
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the button is clicked.",
    },
    tooltip: {
      control: "text",
      description: "The tooltip to show when the button is hovered.",
    },
  },
} satisfies Meta<typeof AIButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Generate with AI",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Generate",
    icon: Summary,
  },
}

export const IconOnly: Story = {
  args: {
    label: "Generate",
    icon: Summary,
    hideLabel: true,
  },
}

export const Sizes: Story = {
  parameters: withSnapshot({}),
  render: (args) => (
    <div className="flex items-center gap-4">
      <AIButton {...args} size="lg" label="Large" icon={Summary} />
      <AIButton {...args} size="md" label="Medium" icon={Search} />
      <AIButton {...args} size="sm" label="Small" icon={Calendar} />
    </div>
  ),
}

export const OneIcon: Story = {
  args: {
    label: "Ask One",
    icon: One,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Generate with AI",
    icon: Summary,
  },
}
