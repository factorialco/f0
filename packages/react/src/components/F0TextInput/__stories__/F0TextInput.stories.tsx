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
 * A details-row value cell. The value is plain text at rest, the ordinary
 * bordered field while editing. Click the value or the pencil to start, Enter
 * to commit, Escape to revert.
 *
 * The consumer owns the readonly flip and the draft. The input owns the keys,
 * the resting presentation, and the caret: `onClickContent` fires on the click
 * and the field focuses itself once `readonly` lifts, so neither `autoFocus`
 * nor a remount is needed.
 *
 * The trailing buttons a details row also wants (copy, comment, and the tick
 * that confirms a commit) belong to the pattern that draws the row, not here.
 * They all stand down while the value is being typed, the pencil below
 * included, leaving the clear button alone in the trailing area.
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

  const startEditing = () => {
    setDraft(value)
    setEditing(true)
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
        onClickContent={editing ? undefined : startEditing}
        // The pencil sits outside the field, so its click cannot put the caret
        // in. This asks the field to take it as soon as it can.
        focusOnEditable={editing}
      />
      {/*
        The pencil is the row's, not the field's, so the row is what takes it
        away while the value is being typed. Nothing in the trailing area
        applies to a draft: the clear button is all that is left.
      */}
      {editing ? null : (
        <F0Button
          variant="ghost"
          size="sm"
          hideLabel
          icon={Icons.Pencil}
          label="Edit Email"
          onClick={startEditing}
        />
      )}
    </div>
  )
}

export const InlineEditing: Story = {
  args: { label: "Email" },
  render: () => <InlineEditingDemo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const field = () => canvas.getAllByLabelText("Email")[0] as HTMLInputElement
    const wrapper = () => canvas.getByTestId("input-field-wrapper")

    // Read the starting value rather than assuming it. A play function that
    // only works on a pristine mount is a flaky play function: the manager
    // re-runs these on hot reload and on replay, without remounting.
    await waitFor(() => expect(field()).toBeDisabled())
    const committed = field().value
    const restingBox = wrapper().getBoundingClientRect()

    // The value itself starts the edit. The pointer has to land on the cell,
    // because the disabled input swallows the mouse event rather than letting
    // it bubble, and jsdom does no hit-testing to prove that.
    const underPointer = document.elementFromPoint(
      restingBox.left + restingBox.width / 2,
      restingBox.top + restingBox.height / 2
    )
    await expect(underPointer).not.toBe(field())
    await userEvent.click(underPointer as HTMLElement)
    await waitFor(() => expect(field()).not.toBeDisabled())

    // And the caret is already in it, without autoFocus or a remount.
    await expect(field()).toHaveFocus()

    // Only the clear button is left beside the value being typed.
    await expect(
      canvas.queryByRole("button", { name: "Edit Email" })
    ).toBeNull()
    await waitFor(() =>
      expect(canvas.getByTestId("clear-button")).toBeVisible()
    )

    // The editor is the ordinary bordered field, and the row does not move
    // under the reader: same height, same left edge. `getBoundingClientRect`
    // is all zeros in jsdom, so only a real browser can check this.
    await expect(wrapper()).toHaveClass("border-[1px]")
    const editingBox = wrapper().getBoundingClientRect()
    await expect(Math.round(editingBox.height)).toBe(
      Math.round(restingBox.height)
    )
    await expect(Math.round(editingBox.left)).toBe(Math.round(restingBox.left))
    // It may only grow, into the space the pencil gave up. Dropping
    // `transparent` used to collapse the field to the inner input's intrinsic
    // width instead, clipping the value and leaving dead space beside it.
    await expect(editingBox.width).toBeGreaterThanOrEqual(restingBox.width)

    // Enter commits. Two fixed values, picking whichever is not already
    // showing, so the story is deterministic for Chromatic and still proves a
    // change however it started.
    const next =
      committed === "grace.hopper@example.com"
        ? "ada.lovelace@example.com"
        : "grace.hopper@example.com"
    await userEvent.clear(field())
    await userEvent.type(field(), next)
    await expect(field()).toHaveValue(next)
    await userEvent.keyboard("{Enter}")

    await waitFor(() => expect(field()).toBeDisabled())
    await expect(field()).toHaveValue(next)

    // Escape reverts, and the pencil is the other way in: it sits outside the
    // field, so `focusOnEditable` is what puts the caret there. It is back now
    // that the row is at rest again.
    await waitFor(() =>
      expect(canvas.getByRole("button", { name: "Edit Email" })).toBeVisible()
    )
    await userEvent.click(canvas.getByRole("button", { name: "Edit Email" }))
    await waitFor(() => expect(field()).not.toBeDisabled())
    await expect(field()).toHaveFocus()
    await userEvent.clear(field())
    await userEvent.type(field(), "discarded@example.com")
    await userEvent.keyboard("{Escape}")

    await waitFor(() => expect(field()).toBeDisabled())
    await expect(field()).toHaveValue(next)
    // And the starting value really was replaced along the way, so the commit
    // above proved something.
    await expect(field()).not.toHaveValue(committed)
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
