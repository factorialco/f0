import type { Meta, StoryObj } from "@storybook/react-vite"
import MockDate from "mockdate"
import { useState } from "react"
import { expect, fn, screen, userEvent, waitFor, within } from "storybook/test"
import type { InlineDismissReason } from "@/components/F0InputField"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0DatePicker } from ".."
import type { DatePickerValue } from "../types"

const mockDate = new Date(2025, 6, 30)

const startDate: DatePickerValue = {
  value: { from: new Date(2026, 3, 10), to: new Date(2026, 3, 10) },
  granularity: "day",
}

const april: DatePickerValue = {
  value: { from: new Date(2026, 3, 1), to: new Date(2026, 3, 30) },
  granularity: "month",
}

type InlineStartDateProps = {
  label?: string
  value?: DatePickerValue
  placeholder?: string
  editing?: boolean
  hideLabel?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

function InlineStartDate({
  label = "Start date",
  value: initialValue,
  placeholder = "Add a start date",
  editing: initialEditing = false,
  hideLabel = true,
  onDismiss,
}: InlineStartDateProps) {
  const [value, setValue] = useState<DatePickerValue | undefined>(initialValue)
  const [editing, setEditing] = useState(initialEditing)

  return (
    <div className="flex w-80 flex-col gap-2">
      <button
        type="button"
        data-testid="focus-sink"
        className="w-fit rounded border border-solid border-f1-border px-2 py-1"
      >
        Focus something else
      </button>
      <button
        type="button"
        data-testid="toggle-editing"
        className="w-fit rounded border border-solid border-f1-border px-2 py-1"
        onClick={() => setEditing((current) => !current)}
      >
        {editing ? "Stop editing" : "Start editing"}
      </button>
      <div data-testid="value-box" className="w-80">
        <F0DatePicker
          variant="inline"
          label={label}
          hideLabel={hideLabel}
          placeholder={placeholder}
          value={value}
          editing={editing}
          onChange={setValue}
          onDismiss={onDismiss}
        />
      </div>
    </div>
  )
}

function textStartX(element: Element) {
  const { left } = element.getBoundingClientRect()
  return left + parseFloat(getComputedStyle(element).paddingLeft)
}

/** Wait for the 150ms month animation before axe measures contrast. */
const MONTH_FADE_MS = 150
const settleCalendar = () =>
  new Promise((resolve) => setTimeout(resolve, MONTH_FADE_MS + 100))

function componentRoot(box: HTMLElement) {
  const root = box.firstElementChild
  if (!root) {
    throw new Error("the inline picker did not render")
  }
  return root
}

const meta = {
  title: "DatePicker/Inline",
  component: InlineStartDate,
  tags: ["experimental", "!autodocs"],
  async beforeEach() {
    MockDate.set(mockDate)
    return () => {
      MockDate.reset()
    }
  },
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component:
          '`variant="inline"` is the detail-row presentation of F0DatePicker: the date reads as the same string the input prints until the row activates it, and the input plus its calendar take over in the same box, at the same inset. The component is presentational — `editing` comes from the parent, and the picker reports a pick, Escape, an outside click and a lost focus through `onDismiss` without ever closing itself.',
      },
    },
  },
  args: {
    label: "Start date",
    value: startDate,
    placeholder: "Add a start date",
    onDismiss: fn(),
  },
} satisfies Meta<typeof InlineStartDate>

export default meta
type Story = StoryObj<typeof meta>

export const AtRest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("10 Apr 2026")).toBeVisible()
    await expect(canvas.queryByRole("textbox")).toBeNull()
  },
}

export const Empty: Story = {
  // Use a separate render to avoid restoring the default value.
  render: (args) => <InlineStartDate {...args} value={undefined} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Add a start date")).toBeVisible()
  },
}

export const Editing: Story = {
  args: {
    editing: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole("textbox", { name: "Start date" })
    await expect(input).toHaveValue("10 Apr 2026")
    await waitFor(async () => {
      await expect(input).toHaveFocus()
    })
    await expect(await screen.findByRole("grid")).toBeVisible()
    await settleCalendar()
  },
}

export const WithVisibleLabel: Story = {
  args: {
    hideLabel: false,
  },
}

/**
 * The at-rest row is plain text, so only the editor carries the glyph and the
 * date moves right by its slot. The box height is what must not change.
 */
export const TextMovesByTheIconSlot: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("value-box")

    const readX = textStartX(canvas.getByText("10 Apr 2026"))
    const readHeight = componentRoot(box).getBoundingClientRect().height

    await step("the read presentation is the form's 40px box", async () => {
      await expect(readHeight).toBe(40)
      await expect(box.querySelector("svg")).toBeNull()
    })

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    const input = await canvas.findByRole("textbox", { name: "Start date" })
    const icon = box.querySelector('[data-slot="icon"]') as HTMLElement

    await step("the editor adds the glyph where the text was", async () => {
      await expect(icon).toBeInTheDocument()
      await expect(
        Math.abs(icon.getBoundingClientRect().left - readX)
      ).toBeLessThanOrEqual(1)
    })

    await step("and the date starts one icon slot further right", async () => {
      // 24px: the 20px glyph plus the 4px gap the editor reserves for it.
      await expect(Math.round(textStartX(input) - readX)).toBe(24)
    })

    await step("the box is exactly as tall in both modes", async () => {
      await expect(componentRoot(box).getBoundingClientRect().height).toBe(
        readHeight
      )
    })

    await settleCalendar()
  },
}

export const FillsTheRowBox: Story = {
  render: ({ label }) => <FixedBox label={label} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("fixed-box")
    const expected = box.getBoundingClientRect()

    await step("the read presentation fills the box", async () => {
      const root = componentRoot(box).getBoundingClientRect()
      await expect(root.width).toBe(expected.width)
      await expect(root.height).toBe(expected.height)
    })

    await userEvent.click(canvas.getByTestId("start-editing"))
    await canvas.findByRole("textbox", { name: "Start date" })

    await step("and so does the editor", async () => {
      await waitFor(async () => {
        const root = componentRoot(box).getBoundingClientRect()
        await expect(root.width).toBe(expected.width)
        await expect(root.height).toBe(expected.height)
      })
    })

    await settleCalendar()
  },
}

function FixedBox({ label = "Start date" }) {
  const [editing, setEditing] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        data-testid="start-editing"
        className="w-fit rounded border border-solid border-f1-border px-2 py-1"
        onClick={() => setEditing(true)}
      >
        Start editing
      </button>
      <div
        data-testid="fixed-box"
        // A ring marks the box without changing its dimensions.
        className="h-10 w-80 ring-1 ring-f1-border"
      >
        <F0DatePicker
          variant="inline"
          label={label}
          hideLabel
          value={startDate}
          editing={editing}
        />
      </div>
    </div>
  )
}

export const ReportsDismissWithoutClosing: Story = {
  args: {
    editing: true,
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    await screen.findByRole("grid")

    await step("picking a day commits", async () => {
      await userEvent.click(await screen.findByRole("gridcell", { name: "15" }))
      await waitFor(async () => {
        await expect(args.onDismiss).toHaveBeenCalledWith("commit")
      })
    })

    await step("the calendar is still open", async () => {
      await expect(await screen.findByRole("grid")).toBeVisible()
    })

    await step("Escape reverts", async () => {
      await userEvent.keyboard("{Escape}")
      await waitFor(async () => {
        await expect(args.onDismiss).toHaveBeenCalledWith("escape")
      })
    })

    await step("clicking outside closes the popup", async () => {
      await userEvent.click(canvas.getByTestId("focus-sink"))
      await waitFor(async () => {
        await expect(args.onDismiss).toHaveBeenCalledWith("popupClose")
      })
    })

    await step("the editor is still on screen", async () => {
      await expect(
        canvas.getByRole("textbox", { name: "Start date" })
      ).toBeVisible()
      await expect(await screen.findByRole("grid")).toBeVisible()
    })

    await settleCalendar()
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="h-10">
        <F0DatePicker
          variant="inline"
          label="Start date"
          hideLabel
          value={startDate}
        />
      </div>
      <div className="h-10">
        <F0DatePicker
          variant="inline"
          label="Start date"
          hideLabel
          placeholder="Add a start date"
        />
      </div>
      <div className="h-10">
        <F0DatePicker
          variant="inline"
          label="Start date"
          hideLabel
          displayFormat="default"
          value={startDate}
        />
      </div>
      <div className="h-10">
        <F0DatePicker
          variant="inline"
          label="Start date"
          hideLabel
          granularities={["month"]}
          value={april}
        />
      </div>
    </div>
  ),
}
