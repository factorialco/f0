import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"
import { F0Button } from "@/components/F0Button"
import { inputFieldStatus } from "@/components/F0InputField"
import * as Icons from "@/icons/app"
import { Placeholder } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TextInput } from ".."
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

    // The eye is named after the field, not "password": that is what tells
    // two masked fields on one page apart.
    await userEvent.click(
      canvas.getByRole("button", { name: "Show Label text here" })
    )
    await expect(input).toHaveAttribute("type", "text")

    await userEvent.click(
      canvas.getByRole("button", { name: "Hide Label text here" })
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

/**
 * A details-row value cell built on the public component: the value as plain
 * text at rest, the ordinary bordered field while editing, Enter to commit and
 * Escape to revert.
 *
 * The consumer owns the readonly flip and the draft. The input owns the keys
 * and the resting presentation, including the height, so the row does not move
 * when it becomes editable. The trailing buttons a details row also wants
 * (copy, pencil, comment) belong to the pattern that draws the row, not here.
 */
const InlineEditingDemo = () => {
  const [value, setValue] = useState("ada.lovelace@example.com")
  const [draft, setDraft] = useState(value)
  const [editing, setEditing] = useState(false)

  const commit = (committed: string) => {
    setEditing(false)
    setValue(committed)
  }

  const revert = () => {
    setDraft(value)
    setEditing(false)
  }

  return (
    <div className="flex w-80 items-center gap-1 rounded-md border border-solid border-f1-border p-1">
      <F0TextInput
        label="Email"
        hideLabel
        type="email"
        value={editing ? draft : value}
        onChange={setDraft}
        readonly={!editing}
        transparent={!editing}
        clearable={editing}
        onPressEnter={() => commit(draft)}
        onPressEscape={revert}
        // Clicking away is a commit, not a cancel: the only way to throw a
        // draft away is to say so with Escape.
        onBlur={editing ? () => commit(draft) : undefined}
      />
      <F0Button
        variant="ghost"
        size="sm"
        hideLabel
        icon={Icons.Pencil}
        label="Edit Email"
        onClick={() => {
          setDraft(value)
          setEditing(true)
        }}
      />
    </div>
  )
}

export const InlineEditing: Story = {
  args: { label: "Email" },
  render: () => <InlineEditingDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = () => canvas.getAllByLabelText("Email")[0]

    // A resting value is not typeable, and it is drawn without the field's
    // border.
    await expect(field()).toBeDisabled()
    const restingBox = canvas
      .getByTestId("input-field-wrapper")
      .getBoundingClientRect()

    await userEvent.click(canvas.getByRole("button", { name: "Edit Email" }))
    await waitFor(() => expect(field()).not.toBeDisabled())

    // The editor is the ordinary bordered field, at the height the resting
    // cell already had. `getBoundingClientRect` is all zeros in jsdom, so only
    // a real browser can check this.
    const wrapper = canvas.getByTestId("input-field-wrapper")
    await expect(wrapper).toHaveClass("border-[1px]")
    await expect(Math.round(wrapper.getBoundingClientRect().height)).toBe(
      Math.round(restingBox.height)
    )

    await userEvent.clear(field())
    await userEvent.type(field(), "grace.hopper@example.com")
    await userEvent.keyboard("{Enter}")

    await waitFor(() => expect(field()).toBeDisabled())
    await expect(field()).toHaveValue("grace.hopper@example.com")

    // Escape reverts: the draft is thrown away and the committed value stands.
    await userEvent.click(canvas.getByRole("button", { name: "Edit Email" }))
    await userEvent.clear(field())
    await userEvent.type(field(), "discarded@example.com")
    await userEvent.keyboard("{Escape}")

    await expect(field()).toHaveValue("grace.hopper@example.com")
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
      {
        ...base,
        clearable: false,
        icon: undefined,
        labelIcon: undefined,
        hideLabel: true,
        readonly: true,
        transparent: true,
        value: "ada@example.com",
      },
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
