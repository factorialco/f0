import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0FormField } from "@/patterns/F0FormField"
import type { F0Field, F0FieldRequestChange } from "../fields/types"

const fields = {
  text: {
    id: "reference",
    type: "text",
    label: "Reference",
    placeholder: "not set",
  },
  number: {
    id: "weeklyHours",
    type: "number",
    label: "Weekly hours",
    units: "h",
  },
  date: {
    id: "startDate",
    type: "date",
    label: "Start date",
    placeholder: "no date",
  },
  select: {
    id: "contract",
    type: "select",
    label: "Contract",
    options: [
      { value: "full", label: "Full time" },
      { value: "part", label: "Part time" },
    ],
  },
  switch: {
    id: "remote",
    type: "switch",
    label: "Remote",
  },
} satisfies Record<string, F0Field>

type RowProps = {
  field: F0Field
  value?: unknown
  copyable?: boolean
  readonly?: boolean
  requestChange?: F0FieldRequestChange
}

/**
 * The record layout an inline field is built for: a label column and a value
 * column the field fills, so a row someone can edit lines up with the read-only
 * ones around it. `FieldCard` is the bordered group those rows sit in, matching
 * the detail screen this pattern is for.
 */
function FieldRow({
  field,
  value: initialValue,
  copyable,
  readonly,
  requestChange,
}: RowProps) {
  const [value, setValue] = useState(initialValue)
  const inline =
    copyable || readonly || requestChange
      ? { copyable, readonly, requestChange }
      : true

  return (
    <div className="flex items-center border-0 border-b border-solid border-f1-border-secondary px-4 py-2 last:border-b-0">
      <span className="w-1/2 text-f1-foreground-secondary">{field.label}</span>
      <div className="w-1/2">
        <F0FormField
          field={{ ...field, inline } as never}
          value={value}
          onChange={setValue}
          hideLabel
        />
      </div>
    </div>
  )
}

function FieldCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[720px] rounded-lg border border-solid border-f1-border-secondary">
      {children}
    </div>
  )
}

/**
 * framer-motion fades the calendar's month in, and the a11y addon scans the
 * whole document the moment the play function returns — catching the weekday
 * headers mid-fade and failing their contrast on a colour the token never
 * actually renders. One settle past the fade is what makes that scan measure
 * the real thing. Deliberately a fixed wait: the fade has a known duration and
 * no state to observe, and polling ancestors for opacity 1 breaks the story
 * outside the test runner, where the animation is still running.
 */
const MONTH_FADE_MS = 300
const settleMonthFade = () =>
  new Promise((resolve) => setTimeout(resolve, MONTH_FADE_MS))

const meta: Meta<RowProps> = {
  title: "Forms/F0Form/Inline fields",
  component: FieldRow,
  tags: ["experimental"],
  parameters: { a11y: { test: "error" } },
  args: { field: fields.text, value: "REF-0042" },
  decorators: [
    (Story) => (
      <FieldCard>
        <Story />
      </FieldCard>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

/** Someone who may change the value, on a record detail screen. */
export const DetailRow: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Read the value as text, with no field chrome around it", () => {
      expect(canvas.getByText("REF-0042")).toBeInTheDocument()
      expect(canvas.queryByRole("textbox")).not.toBeInTheDocument()
    })

    await step(
      "Keep the affordance out of the way until the row is used",
      () => {
        const affordance = canvasElement.querySelector(
          '[data-slot="edit-affordance"]'
        ) as HTMLElement

        // The hover half of the reveal is beyond a play function's reach:
        // `:hover` is native browser state that synthetic pointer events never
        // enter. The rule is asserted on the classes here and on pixels in the
        // Snapshot story; the focus half is driven for real below.
        expect(affordance).toHaveClass("opacity-0")
        expect(affordance).toHaveClass("group-hover:opacity-100")
        expect(affordance).toHaveClass("group-focus-within:opacity-100")
      }
    )

    await step(
      "Reveal the affordance to anyone who tabs to the row",
      async () => {
        await userEvent.tab()
        expect(document.activeElement).toBe(
          canvas.getByRole("button", { name: "Edit Reference" })
        )
      }
    )

    await step("Hold the row's height when the editor takes over", async () => {
      const row = canvasElement.querySelector(
        '[data-slot="inline-field-row"]'
      ) as HTMLElement
      const readHeight = row.getBoundingClientRect().height

      await userEvent.click(
        canvas.getByRole("button", { name: "Edit Reference" })
      )

      const input = canvas.getByRole("textbox")
      expect(document.activeElement).toBe(input)

      const editor = input.closest(
        "[data-testid='input-field-wrapper']"
      ) as HTMLElement
      expect(editor.getBoundingClientRect().height).toBe(readHeight)
    })

    await step("Put the value back to text on Escape", async () => {
      await userEvent.keyboard("{Escape}")
      expect(canvas.queryByRole("textbox")).not.toBeInTheDocument()
      expect(canvas.getByText("REF-0042")).toBeInTheDocument()
    })
  },
}

/** A number reads with its units, the way the input at rest shows them. */
export const DetailRowNumber: Story = {
  args: { field: fields.number, value: 37.5 },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText("37.5 h")).toBeInTheDocument()
  },
}

/** A date row opens its calendar the moment someone goes to change it. */
export const DetailRowDate: Story = {
  // An open calendar portals to the body, and the Docs page renders every story
  // at once, so it would float over the whole page. The story and its play
  // function still run.
  tags: ["!autodocs"],
  args: { field: fields.date, value: new Date(2025, 8, 15) },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Read the day in the reader's own locale", () => {
      // Storybook runs under `en`, so the month leads. The same date reads
      // `15/09/2025` under en-GB and `15.09.2025` under de-DE.
      expect(canvas.getByText("09/15/2025")).toBeInTheDocument()
    })

    await step("Open the calendar on the date already set", async () => {
      await userEvent.click(
        canvas.getByRole("button", { name: "Edit Start date" })
      )

      // Never the day grid: framer-motion re-keys it on mount and two coexist
      // for ~150ms, so the query throws on the duplicate. The month header is
      // singular the whole time, and is what "opens on the date set" means.
      await waitFor(() => expect(document.body).toHaveTextContent(/September/i))
      await settleMonthFade()
    })

    await step("Put the date back to text once one is picked", async () => {
      await userEvent.click(await within(document.body).findByText("16"))

      await waitFor(() =>
        expect(canvas.getByText("09/16/2025")).toBeInTheDocument()
      )
      expect(canvas.queryByRole("textbox")).not.toBeInTheDocument()
    })
  },
}

/** A select row opens its dropdown, borderless, with the options in it. */
export const DetailRowSelect: Story = {
  tags: ["!autodocs"],
  args: { field: fields.select, value: "part" },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await step("Read the option's label, not its value", () => {
      expect(canvas.getByText("Part time")).toBeInTheDocument()
    })

    await step(
      "Offer the options, with no field chrome around them",
      async () => {
        await userEvent.click(
          canvas.getByRole("button", { name: "Edit Contract" })
        )

        expect(
          await body.findByRole("option", { name: /Full time/ })
        ).toBeInTheDocument()
        // The borderless trigger, not the bordered field: a row gains no chrome
        // from being edited.
        expect(
          canvasElement.querySelector("[data-testid='input-field-wrapper']")
        ).toBeNull()
      }
    )
  },
}

/**
 * A toggle sits in the row as itself. There is nothing to reveal and nothing to
 * swap in: it already shows what it holds and changes on one click.
 */
export const DetailRowSwitch: Story = {
  args: { field: fields.switch, value: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Render the control, not the word for it", () => {
      expect(canvas.getByRole("switch")).toBeChecked()
      expect(canvas.queryByText("Yes")).not.toBeInTheDocument()
      expect(
        canvas.queryByRole("button", { name: /Edit/ })
      ).not.toBeInTheDocument()
    })

    await step("Change it on one click, with no editor to enter", async () => {
      await userEvent.click(canvas.getByRole("switch"))
      expect(canvas.getByRole("switch")).not.toBeChecked()
    })
  },
}

/** A toggle nobody may change is the control, off — there is no text to fall back on. */
export const DetailRowSwitchReadOnly: Story = {
  args: { field: fields.switch, value: true, readonly: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole("switch")).toBeDisabled()
  },
}

/** Someone who may copy the value as well as change it. */
export const DetailRowCopyable: Story = {
  args: { copyable: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Offer the copy beside the editing affordance", () => {
      expect(
        canvas.getByRole("button", { name: "Copy Reference" })
      ).toBeInTheDocument()
    })

    // The copied state is not asserted here: the story runner grants no
    // clipboard permission, so the write is refused and the row correctly
    // confirms nothing. It is covered in InlineFieldRow.test.tsx, where
    // userEvent stubs the clipboard.
  },
}

/** Someone who may read the record but not change this field. */
export const DetailRowReadOnly: Story = {
  args: { readonly: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const value = canvas.getByRole("textbox", { name: "Reference" })

    expect(value).toHaveAttribute("aria-readonly", "true")
    expect(value).toHaveAttribute("tabindex", "0")
    expect(
      canvas.queryByRole("button", { name: /Edit/ })
    ).not.toBeInTheDocument()
  },
}

/** An empty value falls back to the field's placeholder. */
export const DetailRowEmpty: Story = {
  args: { value: undefined },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText("not set")).toBeInTheDocument()
  },
}

/**
 * Someone who may read the start date but not set it. The ask offers the
 * field's own editor, so a date is picked from a calendar rather than typed.
 */
export const DetailRowRequestChange: Story = {
  // The dialog portals to the body, and the Docs page renders every story at
  // once, so it would float over the whole page.
  tags: ["!autodocs"],
  args: {
    field: fields.date,
    value: new Date(2024, 0, 1),
    readonly: true,
    requestChange: { onSubmit: fn() },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const body = within(document.body)

    await step("Offer somewhere to go instead of an editor", () => {
      expect(
        canvas.queryByRole("button", { name: /Edit/ })
      ).not.toBeInTheDocument()
      expect(
        canvas.getByRole("button", {
          name: "Request a change to Start date",
        })
      ).toBeInTheDocument()
    })

    await step("Ask about the value as it stands", async () => {
      // Tab to the value first: the action is `pointer-events-none` until the
      // row is engaged, and focus is the half of that reveal a play function
      // can drive for real. Clicking it cold fails with "pointer-events: none",
      // which is the rule working, not a broken test.
      await userEvent.tab()
      await userEvent.click(
        canvas.getByRole("button", {
          name: "Request a change to Start date",
        })
      )

      const dialog = await body.findByRole("dialog")
      expect(dialog).toHaveTextContent("It says now")
      expect(dialog).toHaveTextContent("01/01/2024")
    })

    await step("Pick the new value rather than spelling it out", async () => {
      const send = body.getByRole("button", { name: "Send request" })
      expect(send).toBeDisabled()

      await userEvent.click(
        body.getByRole("textbox", { name: "It should say" })
      )
      // A calendar, because the field is a date. The ask starts empty, so it
      // opens on today rather than on a month this story can name.
      await waitFor(() =>
        expect(body.getByRole("combobox", { name: /month/i })).toBeVisible()
      )
      await settleMonthFade()
      await userEvent.click(body.getByText("15"))

      await waitFor(() => expect(send).toBeEnabled())
      await userEvent.click(send)

      expect(args.requestChange?.onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          from: "01/01/2024",
          to: expect.stringMatching(/^\d{2}\/15\/\d{4}$/),
          reason: undefined,
        })
      )
    })
  },
}

/** A request already on the record, waiting for someone else to answer it. */
export const DetailRowPendingChange: Story = {
  args: {
    field: fields.date,
    value: new Date(2024, 0, 1),
    readonly: true,
    requestChange: {
      onSubmit: fn(),
      pending: { id: "req-1", to: "01/15/2024" },
      onCancel: fn(),
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Say what was asked for, under the value it is about", () => {
      expect(canvas.getByText("Requested: 01/15/2024")).toBeInTheDocument()
      expect(
        canvas.queryByRole("button", { name: /Request a change/ })
      ).not.toBeInTheDocument()
    })

    await step("Let whoever asked take it back", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Cancel" }))
      expect(args.requestChange?.onCancel).toHaveBeenCalledWith("req-1")
    })
  },
}

/**
 * The record this pattern is for: one card of rows, mixed types, mixed
 * permissions, read side by side the way a detail screen shows them.
 */
export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({ width: "100%" }),
  decorators: [(Story) => <Story />],
  render: () => (
    <FieldCard>
      <FieldRow field={fields.select} value="full" />
      <FieldRow field={fields.text} value="REF-0042" copyable />
      <FieldRow field={fields.date} value={new Date(2025, 8, 15)} />
      <FieldRow field={fields.number} value={37.5} />
      <FieldRow field={fields.switch} value={true} />
      <FieldRow field={fields.text} value={undefined} />
      <FieldRow field={fields.text} value="REF-0042" readonly />
      <FieldRow
        field={fields.date}
        value={new Date(2024, 0, 1)}
        readonly
        requestChange={{ onSubmit: fn() }}
      />
      <FieldRow
        field={fields.date}
        value={new Date(2024, 0, 1)}
        readonly
        requestChange={{
          onSubmit: fn(),
          pending: { id: "req-1", to: "01/15/2024" },
          onCancel: fn(),
        }}
      />
    </FieldCard>
  ),
}
