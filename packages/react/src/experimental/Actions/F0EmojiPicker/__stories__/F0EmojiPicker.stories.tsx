import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0EmojiPicker, f0EmojiPickerSizes } from "../index"

const meta = {
  title: "F0EmojiPicker",
  component: F0EmojiPicker,
  tags: ["experimental", "!autodocs"],
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  args: {
    label: "Choose group emoji",
    clearable: false,
    disabled: false,
    locale: "en",
    size: "md",
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: "text",
      description:
        "Selected emoji in controlled usage. Use null for an empty value.",
    },
    defaultValue: {
      control: "text",
      description:
        "Initially selected emoji in uncontrolled usage. Null starts empty.",
    },
    onChange: {
      description: "Called with the selected emoji, or null when cleared.",
    },
    clearable: {
      control: "boolean",
      description:
        "Shows an action for clearing the current selection from the picker.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    size: {
      control: "select",
      options: f0EmojiPickerSizes,
      description: "Size of the trigger avatar.",
      table: {
        type: { summary: f0EmojiPickerSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0EmojiPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    clearable: true,
  },
}

const ControlledExample = () => {
  const [emoji, setEmoji] = useState<string | null>("💬")

  return (
    <div className="flex items-center gap-3">
      <F0EmojiPicker
        label="Choose group emoji"
        value={emoji}
        onChange={setEmoji}
      />
      <span className="text-sm text-f1-foreground-secondary">
        Selected: {emoji ?? "None"}
      </span>
    </div>
  )
}

export const Controlled: Story = {
  tags: ["no-sidebar"],
  render: () => <ControlledExample />,
}

export const Interaction: Story = {
  tags: ["no-sidebar"],
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole("button", {
      name: "Choose group emoji",
    })

    trigger.focus()
    await userEvent.keyboard("{Enter}")
    await expect(trigger).toHaveAttribute("aria-expanded", "true")

    await userEvent.keyboard("{Escape}")
    await expect(trigger).toHaveAttribute("aria-expanded", "false")
    await waitFor(() => expect(trigger).toHaveFocus())

    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute("aria-expanded", "true")

    const picker = canvasElement.ownerDocument.querySelector("em-emoji-picker")
    await waitFor(() => expect(picker?.shadowRoot).not.toBeNull())

    const partyEmoji = picker?.shadowRoot?.querySelector<HTMLButtonElement>(
      'button[aria-label="🥳"]'
    )
    await expect(partyEmoji).not.toBeNull()
    await userEvent.click(partyEmoji!)

    await expect(args.onChange).toHaveBeenCalledWith("🥳")
    await expect(trigger).toHaveAttribute("aria-expanded", "false")
    await expect(trigger).toHaveAttribute(
      "aria-label",
      "Choose group emoji: 🥳"
    )
  },
}

export const Clearable: Story = {
  tags: ["no-sidebar"],
  args: {
    clearable: true,
    defaultValue: "💬",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole("button", {
      name: "Choose group emoji: 💬",
    })

    await userEvent.click(trigger)

    const document = within(canvasElement.ownerDocument.body)
    const dialog = await document.findByRole("dialog", {
      name: "Choose group emoji",
    })
    const clearButton = await within(dialog).findByRole("button", {
      name: "Clear",
    })
    await waitFor(() => expect(clearButton).toBeVisible())
  },
}

export const CompactHeight: Story = {
  tags: ["no-sidebar"],
  args: {
    clearable: true,
    defaultValue: "💬",
  },
  parameters: {
    viewport: {
      options: {
        compactHeight: {
          name: "Compact height",
          styles: {
            width: "320px",
            height: "256px",
          },
        },
      },
    },
  },
  globals: {
    viewport: {
      value: "compactHeight",
      isRotated: false,
    },
  },
}

export const ClearableInteraction: Story = {
  tags: ["no-sidebar"],
  args: {
    clearable: true,
    defaultValue: "💬",
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = canvas.getByRole("button", {
      name: "Choose group emoji: 💬",
    })

    await userEvent.click(trigger)

    const document = within(canvasElement.ownerDocument.body)
    const dialog = await document.findByRole("dialog", {
      name: "Choose group emoji",
    })
    const clearButton = await within(dialog).findByRole("button", {
      name: "Clear",
    })
    clearButton.focus()
    await userEvent.keyboard("{Enter}")

    await expect(args.onChange).toHaveBeenCalledWith(null)
    await expect(trigger).toHaveAttribute("aria-expanded", "false")
    await expect(trigger).toHaveAttribute("aria-label", "Choose group emoji")
    await waitFor(() => expect(trigger).toHaveFocus())
  },
}

export const Sizes: Story = {
  tags: ["no-sidebar"],
  render: (args) => (
    <div className="flex items-end gap-4">
      {f0EmojiPickerSizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <F0EmojiPicker {...args} size={size} value={null} />
            <F0EmojiPicker {...args} size={size} value="💬" />
          </div>
          <span className="text-sm text-f1-foreground-secondary">{size}</span>
        </div>
      ))}
    </div>
  ),
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: {
    ...withSnapshot({}),
  },
  render: (args) => (
    <div className="flex flex-col gap-8">
      <div className="flex items-end gap-4">
        {f0EmojiPickerSizes.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <F0EmojiPicker {...args} size={size} value={null} />
              <F0EmojiPicker {...args} size={size} value="💬" />
            </div>
            <span className="text-sm text-f1-foreground-secondary">{size}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-8">
        <div className="flex flex-col items-center gap-2">
          <F0EmojiPicker {...args} defaultValue="💬" />
          <span className="text-sm text-f1-foreground-secondary">Selected</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <F0EmojiPicker {...args} defaultValue="🎉" disabled />
          <span className="text-sm text-f1-foreground-secondary">Disabled</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <F0EmojiPicker
            {...args}
            label="Choose removable group emoji"
            defaultValue="💬"
            clearable
          />
          <span className="text-sm text-f1-foreground-secondary">
            Clearable
          </span>
        </div>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole("button", {
        name: "Choose removable group emoji: 💬",
      })
    )

    const document = within(canvasElement.ownerDocument.body)
    const dialog = await document.findByRole("dialog", {
      name: "Choose removable group emoji",
    })
    const clearButton = await within(dialog).findByRole("button", {
      name: "Clear",
    })
    await waitFor(() => expect(clearButton).toBeVisible())
  },
}
