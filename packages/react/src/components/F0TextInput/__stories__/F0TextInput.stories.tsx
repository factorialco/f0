import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, userEvent, within } from "storybook/test"

import * as Icons from "@/icons/app"
import { Placeholder } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { inputFieldStatus } from "@/components/F0InputField"

import { F0TextInput } from "../index"
import { inputSizes } from "../types"

const meta = {
  component: F0TextInput,
  title: "Inputs/Text input",
  tags: ["stable", "!autodocs"],
  args: {
    type: "text",
    disabled: false,
    placeholder: "Placeholder text here",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "email", "password", "url", "tel", "private", "file"],
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
    icon: {
      description:
        "Icon to display inside the input (NOTE: When the type is password, the icon will be overridden with the lock icon)",
      control: "select",
      mapping: { "-- None --": undefined, ...Icons },
      options: ["-- None --", ...Object.keys(Icons)],
    },
    hint: {
      description:
        "Hint to display below the input, This is a shortcut for status.type = 'default'. Error status overwrites hint",
    },
    error: {
      description:
        "Error message to display below the input, This is a shortcut for status.type = 'error'",
    },
    size: {
      control: "select",
      options: inputSizes,
      defaultValue: "sm",
    },
    clearable: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters: {
    a11y: { test: "error" },
  },
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0TextInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "Label text here",
    placeholder: "Placeholder text here",
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByRole("textbox", {
      name: "Label text here",
    })

    await userEvent.type(input, "Ada Lovelace")
    await expect(input).toHaveValue("Ada Lovelace")
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // A password input has no ARIA textbox role, so query it the same way
    // the unit test does: by its aria-label (the field's label text).
    const input = canvas.getAllByLabelText("Label text here")[0]

    await expect(input).toHaveAttribute("type", "password")

    await userEvent.click(
      canvas.getByRole("button", { name: /show password/i })
    )
    await expect(input).toHaveAttribute("type", "text")

    await userEvent.click(
      canvas.getByRole("button", { name: /hide password/i })
    )
    await expect(input).toHaveAttribute("type", "password")
  },
}

export const Private: Story = {
  args: {
    label: "Social security number",
    type: "private",
    value: "123-45-6789",
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
    value: "longtext should be truncated",
  },
}

export const Clearable: Story = {
  args: {
    label: "Label text here",
    maxLength: 10,
    clearable: true,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    label: "Label text here",
  },
  render: () => {
    const base = {
      clearable: true,
      icon: Placeholder,
      labelIcon: Placeholder,
      label: "Label text here",
    }
    const snapshotVariants = [
      { ...base },
      { ...base, value: "Value" },
      { ...base, disabled: true },
      { ...base, readonly: true },
      { ...base, required: true },
      { ...base, maxLength: 10, value: "Value" },
      { ...base, hideLabel: true },
      { ...base, error: true },
      { ...base, icon: Placeholder },
      { ...base, icon: Placeholder, type: "password" },
      { ...base, type: "private" as const, value: "Value" },
      { ...base, status: { type: "error" as const, message: "Error message" } },
      {
        ...base,
        status: { type: "warning" as const, message: "Warning message" },
      },
      { ...base, status: { type: "info" as const, message: "Info message" } },
      { ...base, hint: "Hint message" },
      { ...base },
    ]
    return (
      <div className="flex flex-col gap-4">
        {inputSizes.map((size) => (
          <section key={size}>
            <h4 className="mb-3 text-lg font-semibold">Size: {size}</h4>
            <div className="flex flex-col gap-4">
              <F0TextInput size={size} label="Label text here" />
              {snapshotVariants.map((variant, index) => (
                <F0TextInput
                  key={`${size}-${index}`}
                  size={size}
                  {...variant}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    )
  },
}
