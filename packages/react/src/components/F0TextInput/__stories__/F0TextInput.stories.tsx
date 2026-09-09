import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"
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

/** How long the commit confirmation holds, matching the design prototype. */
const SAVED_SHOWN_MS = 1600

/**
 * The details-row value cell, as the redesigned Employee profile › Details tab
 * draws it. Four states, all on one component:
 *
 * 1. **Rest** — the value as plain text, no field chrome, at the same height
 *    the editable field will take.
 * 2. **Hover** — the cell tints and its actions fade in inside the tint.
 * 3. **Editing** — the same component with `readonly` and `transparent` off, so
 *    it becomes the ordinary bordered field. Enter or blur commits, Escape
 *    reverts.
 * 4. **Confirmed** — the cell goes positive and the pencil *becomes* the tick
 *    for a beat, rather than a tick appearing next to it.
 *
 * The consumer owns the readonly flip, the draft and the confirmation timer.
 * The input owns the keys, the trailing actions and the positive tint.
 */
const InlineEditingDemo = () => {
  const [value, setValue] = useState("ada.lovelace@example.com")
  const [draft, setDraft] = useState(value)
  const [editing, setEditing] = useState(false)
  const [justSaved, setJustSaved] = useState(false)

  const startEditing = () => {
    setDraft(value)
    setEditing(true)
  }

  const commit = (committed: string) => {
    setEditing(false)
    if (committed === value) {
      return
    }
    setValue(committed)
    setJustSaved(true)
    setTimeout(() => setJustSaved(false), SAVED_SHOWN_MS)
  }

  const revert = () => {
    setDraft(value)
    setEditing(false)
  }

  return (
    <div className="w-80 rounded-md border border-solid border-f1-border p-1">
      <F0TextInput
        // Remounting on the flip is what lets `autoFocus` land the caret: it
        // only fires on mount, never when it turns true on an existing input.
        key={editing ? "editing" : "resting"}
        label="Email"
        hideLabel
        type="email"
        value={editing ? draft : value}
        onChange={setDraft}
        readonly={!editing}
        transparent={!editing}
        clearable={editing}
        autoFocus={editing}
        onPressEnter={() => commit(draft)}
        onPressEscape={revert}
        // Clicking away is a commit, not a cancel: the only way to throw a
        // draft away is to say so with Escape.
        onBlur={editing ? () => commit(draft) : undefined}
        // The whole cell is the target, not just the pencil — the value is
        // what the reader is pointing at.
        onClickContent={editing ? undefined : startEditing}
        actionsVisibility="hover"
        actions={
          editing
            ? []
            : [
                // The control that caused the confirmation is the one that
                // carries it, and it stays pressable throughout: fixing a typo
                // you spotted the instant it saved should not mean waiting out
                // an animation.
                justSaved
                  ? {
                      type: "custom" as const,
                      icon: Icons.CheckCircle,
                      label: "Email saved",
                      tone: "positive" as const,
                      onClick: startEditing,
                    }
                  : { type: "edit" as const, onClick: startEditing },
                { type: "copy" as const },
              ]
        }
      />
    </div>
  )
}

export const InlineEditing: Story = {
  args: { label: "Email" },
  render: () => <InlineEditingDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cell = () => canvas.getAllByLabelText("Email")[0]

    // The value itself opens the editor: the pointer lands on the resting
    // cell, not on the disabled input, which would swallow the click.
    const restingBox = cell().getBoundingClientRect()
    const underPointer = document.elementFromPoint(
      restingBox.left + restingBox.width / 2,
      restingBox.top + restingBox.height / 2
    )
    await expect(underPointer).not.toBe(cell())
    await userEvent.click(underPointer as HTMLElement)
    await waitFor(() => expect(cell()).not.toBeDisabled())

    // And the editor is the ordinary bordered field, at the height the
    // resting cell already had.
    await expect(canvas.getByTestId("input-field-wrapper")).toHaveClass(
      "border-[1px]"
    )
    await expect(
      Math.round(cell().getBoundingClientRect().height)
    ).toBeLessThanOrEqual(Math.round(restingBox.height) + 1)

    await userEvent.clear(cell())
    await userEvent.type(cell(), "grace.hopper@example.com")
    await userEvent.keyboard("{Enter}")

    // Enter commits, the pencil becomes the tick, and the cell goes positive.
    await waitFor(() =>
      expect(
        canvas.getByRole("button", { name: "Email saved" })
      ).toBeInTheDocument()
    )
    await expect(canvas.getByTestId("input-field-wrapper")).toHaveClass(
      "bg-f1-background-positive"
    )
    await expect(cell()).toHaveValue("grace.hopper@example.com")

    // Escape reverts: the draft is thrown away and the committed value stands.
    await waitFor(
      () =>
        expect(
          canvas.getByRole("button", { name: "Edit Email" })
        ).toBeInTheDocument(),
      { timeout: SAVED_SHOWN_MS + 1000 }
    )
    await userEvent.click(canvas.getByRole("button", { name: "Edit Email" }))
    await userEvent.clear(cell())
    await userEvent.type(cell(), "discarded@example.com")
    await userEvent.keyboard("{Escape}")

    await expect(cell()).toHaveValue("grace.hopper@example.com")
  },
}

export const WithActions: Story = {
  args: {
    label: "Email",
    value: "ada@example.com",
    actions: [{ type: "edit", onClick: () => {} }, { type: "copy" }],
  },
}

export const ReadonlyValueWithActions: Story = {
  args: {
    label: "Salary",
    hideLabel: true,
    value: "€48,000",
    readonly: true,
    transparent: true,
    actions: [{ type: "request-change", onClick: () => {} }, { type: "copy" }],
    actionsVisibility: "hover",
  },
  decorators: [
    (Story) => (
      <div className="rounded-md border border-solid border-f1-border p-1">
        <Story />
      </div>
    ),
  ],
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
        value: "ada@example.com",
        actions: [
          { type: "edit" as const, onClick: () => {} },
          { type: "copy" as const },
        ],
      },
      {
        ...base,
        clearable: false,
        icon: undefined,
        labelIcon: undefined,
        hideLabel: true,
        readonly: true,
        transparent: true,
        value: "ada@example.com",
        actions: [
          { type: "request-change" as const, onClick: () => {} },
          { type: "copy" as const },
        ],
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
