import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "@/icons/app"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"
import { inputSizes } from "@/components/F0TextInput/types"

import { F0TextAreaInput } from "../index"

const meta = {
  title: "Inputs/Text area input",
  component: F0TextAreaInput,
  tags: ["stable"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
  },
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0TextAreaInput>

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

export const Required: Story = {
  args: {
    label: "Label text here",
    required: true,
    placeholder: "Placeholder text here",
  },
}

export const Clearable: Story = {
  args: {
    label: "Label text here",
    clearable: true,
  },
}

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({})),
  args: {
    label: "Label text here",
  },
  render: () => {
    const base = {
      label: "Label text here",
      placeholder: "Placeholder text here",
      labelIcon: Placeholder,
      icon: Placeholder,
    }
    const variants = [
      { ...base },
      { ...base, value: "Value" },
      { ...base, disabled: true },
      { ...base, required: true },
      { ...base, hideLabel: true },
      { ...base, clearable: true, value: "Value" },
      { ...base, maxLength: 10 },
      { ...base, error: "Error message" },
      { ...base, status: { type: "warning" as const, message: "Warning" } },
      { ...base, status: { type: "info" as const, message: "Info" } },
      { ...base, hint: "Hint message" },
      { ...base, rows: 4 },
    ]
    return (
      <div className="flex flex-col gap-4">
        {inputSizes.map((size) => (
          <section key={size}>
            <h4 className="mb-3 text-lg font-semibold">Size: {size}</h4>
            <div className="flex flex-col gap-4">
              {variants.map((variant, index) => (
                <F0TextAreaInput
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
