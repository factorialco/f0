import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0FormField } from "@/patterns/F0FormField"
import type { F0Field, F0FieldRequestChange } from "../fields/types"

const fields = {
  text: {
    id: "employeeNumber",
    type: "text",
    label: "Employee number",
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
    label: "Date",
    placeholder: "no date",
  },
  contract: {
    id: "contractStart",
    type: "text",
    label: "Contract start date",
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
 * ones around it.
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
    <div className="flex w-[560px] items-center border-0 border-b border-solid border-f1-border-secondary py-1">
      <span className="w-1/2 px-3 text-f1-foreground-secondary">
        {field.label}
      </span>
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

/**
 * framer-motion fades the calendar's month in, and the a11y addon scans the
 * whole document the moment the play function returns — catching the weekday
 * headers mid-fade and failing their contrast on a colour the token never
 * actually renders. Waiting for every ancestor to reach full opacity is what
 * makes that scan measure the real thing.
 */
async function waitUntilOpaque(selector: string) {
  await waitFor(() => {
    const node = document.querySelector(selector)
    expect(node).not.toBeNull()
    for (
      let element = node as HTMLElement | null;
      element;
      element = element.parentElement
    ) {
      expect(Number(getComputedStyle(element).opacity)).toBe(1)
    }
  })
}

const meta: Meta<RowProps> = {
  title: "Forms/F0Form/Inline fields",
  component: FieldRow,
  tags: ["experimental"],
  parameters: { a11y: { test: "error" } },
  args: { field: fields.text, value: "EMP-0042" },
}

export default meta
type Story = StoryObj<typeof meta>

/** Someone who may change the employee number, on a record detail screen. */
export const DetailRow: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Read the value as text, with no field chrome around it", () => {
      expect(canvas.getByText("EMP-0042")).toBeInTheDocument()
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
          canvas.getByRole("button", { name: "Edit Employee number" })
        )
      }
    )

    await step("Hold the row's height when the editor takes over", async () => {
      const row = canvasElement.querySelector(
        '[data-slot="inline-field-row"]'
      ) as HTMLElement
      const readHeight = row.getBoundingClientRect().height

      await userEvent.click(
        canvas.getByRole("button", { name: "Edit Employee number" })
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
      expect(canvas.getByText("EMP-0042")).toBeInTheDocument()
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

    await step("Read the date the way the picker's own input reads it", () => {
      expect(canvas.getByText("15 Sep 2025")).toBeInTheDocument()
    })

    await step("Open the calendar on the date already set", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Edit Date" }))

      // Never the day grid: framer-motion re-keys it on mount and two coexist
      // for ~150ms, so the query throws on the duplicate. The month header is
      // singular the whole time, and is what "opens on the date set" means.
      await waitFor(() => expect(document.body).toHaveTextContent(/September/i))
      await waitUntilOpaque(".rdp-head")
    })
  },
}

/** A select row opens its dropdown, with the current option already chosen. */
export const DetailRowSelect: Story = {
  tags: ["!autodocs"],
  args: { field: fields.select, value: "part" },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Read the option's label, not its value", () => {
      expect(canvas.getByText("Part time")).toBeInTheDocument()
    })

    await step("Open the dropdown as the row is activated", async () => {
      await userEvent.click(
        canvas.getByRole("button", { name: "Edit Contract" })
      )
      await waitFor(() =>
        expect(document.querySelector('[role="combobox"]')).toHaveAttribute(
          "aria-expanded",
          "true"
        )
      )
    })
  },
}

/** Someone who may copy the employee number as well as change it. */
export const DetailRowCopyable: Story = {
  args: { copyable: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Offer the copy beside the editing affordance", () => {
      expect(
        canvas.getByRole("button", { name: "Copy Employee number" })
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
    const value = canvas.getByRole("textbox", { name: "Employee number" })

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

/** Someone who may read the contract start date but not set it. */
export const DetailRowRequestChange: Story = {
  // The dialog portals to the body, and the Docs page renders every story at
  // once, so it would float over the whole page.
  tags: ["!autodocs"],
  args: {
    field: fields.contract,
    value: "01 Jan 2024",
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
          name: "Request a change to Contract start date",
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
          name: "Request a change to Contract start date",
        })
      )

      const dialog = await body.findByRole("dialog")
      expect(dialog).toHaveTextContent("It says now")
      expect(dialog).toHaveTextContent("01 Jan 2024")
    })

    await step(
      "Hold the request back until it says something new",
      async () => {
        const send = body.getByRole("button", { name: "Send request" })
        expect(send).toBeDisabled()

        await userEvent.type(
          body.getByRole("textbox", { name: "It should say" }),
          "01 Feb 2024"
        )
        expect(send).toBeEnabled()

        await userEvent.click(send)
        expect(args.requestChange?.onSubmit).toHaveBeenCalledWith({
          from: "01 Jan 2024",
          to: "01 Feb 2024",
          reason: undefined,
        })
      }
    )
  },
}

/** Whoever administers the record, looking at a change someone asked for. */
export const DetailRowPendingChange: Story = {
  args: {
    field: fields.contract,
    value: "01 Jan 2024",
    readonly: true,
    requestChange: {
      onSubmit: fn(),
      pending: { id: "req-1", to: "01 Feb 2024" },
      onResolve: fn(),
      canResolve: true,
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Say what was asked for, under the value it is about", () => {
      expect(canvas.getByText("Requested: 01 Feb 2024")).toBeInTheDocument()
      expect(
        canvas.queryByRole("button", { name: /Request a change/ })
      ).not.toBeInTheDocument()
    })

    await step("Let whoever can answer it answer it", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Approve" }))
      expect(args.requestChange?.onResolve).toHaveBeenCalledWith(
        "req-1",
        "approved"
      )
    })
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({ width: "100%" }),
  render: () => (
    <div className="flex flex-col">
      <FieldRow field={fields.text} value="EMP-0042" />
      <FieldRow field={fields.text} value="EMP-0042" copyable />
      <FieldRow field={fields.text} value="EMP-0042" readonly />
      <FieldRow field={fields.text} value={undefined} />
      <FieldRow field={fields.number} value={37.5} />
      <FieldRow field={fields.date} value={new Date(2025, 8, 15)} />
      <FieldRow field={fields.select} value="part" />
      <FieldRow
        field={fields.contract}
        value="01 Jan 2024"
        readonly
        requestChange={{ onSubmit: fn() }}
      />
      <FieldRow
        field={fields.contract}
        value="01 Jan 2024"
        readonly
        requestChange={{
          onSubmit: fn(),
          pending: { id: "req-1", to: "01 Feb 2024" },
          onResolve: fn(),
          canResolve: true,
        }}
      />
    </div>
  ),
}
