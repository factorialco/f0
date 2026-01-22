import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "@/icons/app"

import { Textarea } from "./index"

const meta = {
  title: "Input/TextArea",
  component: Textarea,
  tags: ["autodocs", "experimental"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label text here",
    placeholder: "Placeholder text here",
  },
}

export const Disabled: Story = {
  args: {
    label: "Label text here",
    disabled: true,
    placeholder: "Placeholder text here",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Label text here",
  },
}

export const WithHiddenLabel: Story = {
  args: {
    label: "Label text here",
    hideLabel: true,
  },
}

export const WithLabelIcon: Story = {
  args: {
    label: "Label text here",
    labelIcon: Placeholder,
  },
}

export const WithIcon: Story = {
  args: {
    label: "Label text here",
    icon: Placeholder,
  },
}

export const WithError: Story = {
  args: {
    label: "Label text here",
    error: "Error message here",
  },
}

export const WithWarning: Story = {
  args: {
    label: "Label text here",
    status: {
      type: "warning",
      message: "Warning message",
    },
  },
}

export const WithInfo: Story = {
  args: {
    label: "Label text here",
    status: {
      type: "info",
      message: "Info message",
    },
  },
}

export const WithHint: Story = {
  args: {
    label: "Label text here",
    hint: "Hint message",
  },
}

export const WithMaxLength: Story = {
  args: {
    label: "Label text here",
    maxLength: 10,
  },
}

export const Clearable: Story = {
  args: {
    label: "Label text here",
    clearable: true,
  },
}
