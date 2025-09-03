import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "@/icons/app"
import { inputFieldStatus } from "@/ui/InputField"
import { Input } from "./index"

const meta = {
  component: Input,
  title: "Input/Text",
  tags: ["autodocs", "experimental"],
  args: {
    type: "text",
    disabled: false,
    placeholder: "Placeholder text here",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
    },
    value: {
      control: { type: "text" },
    },
    status: {
      description:
        "Status of the input and a message to display below the input",
      control: "select",
      options: inputFieldStatus,
      defaultValue: "default",
    },
    hint: {
      description:
        "Hint to display below the input, This is a shortcut for status.type = 'default'. Error status overwrites hint",
    },
    error: {
      description:
        "Error message to display below the input, This is a shortcut for status.type = 'error'",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A text input field",
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "Label text here",
    placeholder: "Placeholder text here",
  },
}

export const File: Story = {
  args: {
    label: "Label text here",
    type: "file",
    disabled: false,
    placeholder: "Placeholder text here",
  },
}

export const Password: Story = {
  args: {
    label: "Label text here",
    type: "password",
    disabled: false,
    placeholder: "Placeholder text here",
  },
}

export const Disabled: Story = {
  args: {
    label: "Label text here",
    type: "text",
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
    maxLength: 10,
    clearable: true,
  },
}
