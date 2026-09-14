import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, screen, userEvent, within } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0DatePicker } from ".."
import { DatePickerValue } from "../types"

const detailRowDate: DatePickerValue = {
  value: { from: new Date(2018, 8, 1), to: new Date(2018, 8, 1) },
  granularity: "day",
}

/**
 * The record layout the inline variant is built for: a label column and a value
 * column the picker fills, so a row someone can edit lines up with the
 * read-only ones around it.
 */
function DateRow({
  label = "Date",
  placeholder,
  value: initialValue = detailRowDate,
  readonly,
  onRequestChange,
}: {
  label?: string
  placeholder?: string
  value?: DatePickerValue
  readonly?: boolean
  onRequestChange?: () => void
}) {
  const [value, setValue] = useState<DatePickerValue | undefined>(initialValue)

  return (
    <div className="flex w-[560px] items-center border-0 border-b border-solid border-f1-border-secondary py-1">
      <span className="w-1/2 px-3 text-f1-foreground-secondary">{label}</span>
      <div className="w-1/2">
        <F0DatePicker
          variant="inline"
          label={label}
          placeholder={placeholder}
          value={value}
          readonly={readonly}
          onRequestChange={onRequestChange}
          onChange={setValue}
        />
      </div>
    </div>
  )
}

const meta = {
  title: "DatePicker/Inline",
  component: DateRow,
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component: [
          "Use the inline F0DatePicker variant for a date embedded in a record row. It is borderless and fills its container, so the value sits where a read-only row would print it as dd/MM/yyyy; the calendar stays hidden until the row is hovered or focused. Activating the row swaps in the input with the calendar open on the date already set, and dismissing it puts the date back to text.",
          "Its required label is the accessible name and is not shown visually — the row's own label column carries it. It does not support `size`, `disabled`, `clearable`, `hideLabel`, validation props or the other field chrome; the type rejects them.",
          "Who may do what is `readonly` and `onRequestChange`. Without `readonly` the reader gets the calendar. With `readonly` they do not, and `onRequestChange` gives them a way to ask whoever administers the record instead — pass it conditionally (`canRequest ? handleRequest : undefined`) and the action appears only for those who may ask. With `readonly` and no `onRequestChange` the date is inert text.",
        ]
          .map((text) => `<p>${text}</p>`)
          .join(""),
      },
    },
  },
  tags: ["!autodocs", "stable"],
} satisfies Meta<typeof DateRow>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Someone who may change the date. It reads as text; the calendar arrives on
 * hover or focus and opens on the date already set.
 */
export const DetailRow: Story = {
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const row = canvas.getByRole("button", { name: "Edit Date" })
    const calendar = row.querySelector("[data-slot='edit-affordance']")!

    await step("Read the date the way the rows around it read theirs", () => {
      expect(canvas.getByText("01/09/2018")).toBeVisible()
      expect(canvas.queryByRole("textbox")).not.toBeInTheDocument()
    })

    await step("Keep the calendar out of the way until the row is used", () => {
      // The hover half of the reveal is beyond a play function's reach: `:hover`
      // is a native browser state that synthetic pointer events never enter. The
      // rule is asserted on the classes here and on pixels in the Snapshot
      // story; the focus half is driven for real in DetailRowRequestChange.
      expect(calendar).toHaveClass("opacity-0")
      expect(calendar).toHaveClass("group-hover:opacity-100")
      expect(calendar).toHaveClass("group-focus-within:opacity-100")
    })

    const readHeight = row.getBoundingClientRect().height

    await step("Open the calendar on the date already set", async () => {
      await userEvent.click(row)
      expect(canvas.getByRole("textbox")).toHaveValue("01/09/2018")

      // Not `findByRole("grid")`: framer-motion re-keys the day grid on mount,
      // so two of them coexist for ~150ms and the query resolves inside that
      // window and throws on the duplicate. The month header is singular the
      // whole time and says the same thing.
      expect(
        await screen.findByRole("combobox", { name: /month/i })
      ).toHaveTextContent("September")
    })

    await step("Hold the row's height while the input has it", () => {
      // The inline row sizes itself off `inputFieldVariants`, so swapping in the
      // input must not move the rows below. Measured rather than asserted on
      // classes: this runs in a real browser and layout is the thing at stake.
      const field = canvas
        .getByRole("textbox")
        .closest("[data-testid='input-field-wrapper']")!

      expect(field.getBoundingClientRect().height).toBe(readHeight)
    })

    await step("Put the date back to text once it is dismissed", async () => {
      await userEvent.keyboard("{Escape}")
      expect(
        await canvas.findByRole("button", { name: "Edit Date" })
      ).toBeVisible()
    })
  },
}

/**
 * Someone who may not change the date, but may ask. Pass `onRequestChange`
 * conditionally and the action appears only for those who may request.
 */
export const DetailRowRequestChange: Story = {
  args: { readonly: true, onRequestChange: fn() },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Offer nothing to edit", () => {
      expect(
        canvas.queryByRole("button", { name: "Edit Date" })
      ).not.toBeInTheDocument()
      expect(canvas.getByText("01/09/2018")).toBeVisible()
    })

    await step("Reach the request with the keyboard alone", async () => {
      // Reaching it is the other half of the reveal, and the half a play
      // function can drive: focus is real state where `:hover` is not.
      await userEvent.tab()

      const request = canvas.getByRole("button", {
        name: "Request a change to Date",
      })
      expect(request).toHaveFocus()

      await userEvent.click(request)
      expect(args.onRequestChange).toHaveBeenCalledOnce()
    })
  },
}

/** Nobody can change this date and there is nobody to ask: it is inert text. */
export const DetailRowReadOnly: Story = {
  args: { readonly: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Show the date alone, with nothing to reach", async () => {
      expect(canvas.getByText("01/09/2018")).toBeVisible()
      expect(canvas.queryAllByRole("button")).toHaveLength(0)

      await userEvent.click(canvas.getByText("01/09/2018"))
      expect(
        within(canvasElement.closest("body")!).queryByRole("grid")
      ).not.toBeInTheDocument()
    })
  },
}

/** With no date set, the row falls back to its `placeholder`. */
export const DetailRowEmpty: Story = {
  args: { value: undefined, placeholder: "no date" },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({ width: "100%" }),
  args: {},
  render: () => (
    <div className="flex flex-col">
      <DateRow />
      <DateRow readonly onRequestChange={fn()} />
      <DateRow readonly />
      <DateRow value={undefined} placeholder="no date" />
    </div>
  ),
}
