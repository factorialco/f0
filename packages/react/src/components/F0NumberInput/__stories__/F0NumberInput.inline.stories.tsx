import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import type { InlineDismissReason } from "@/components/F0InputField"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0NumberInput } from ".."

type InlineSalaryProps = {
  label?: string
  value?: number | null
  units?: string
  placeholder?: string
  editing?: boolean
  hideLabel?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

function InlineSalary({
  label = "Gross salary",
  value: initialValue = 45000,
  units = "EUR",
  placeholder = "Add a salary",
  editing: initialEditing = false,
  hideLabel = true,
  onDismiss,
}: InlineSalaryProps) {
  const [value, setValue] = useState<number | null>(initialValue ?? null)
  const [editing, setEditing] = useState(initialEditing)

  return (
    <div className="flex w-80 flex-col gap-2">
      <button
        type="button"
        data-testid="toggle-editing"
        className="w-fit rounded border border-solid border-f1-border px-2 py-1"
        onClick={() => setEditing((current) => !current)}
      >
        {editing ? "Stop editing" : "Start editing"}
      </button>
      {/* Keep focus changes independent of the controlled edit mode. */}
      <button
        type="button"
        data-testid="focus-sink"
        className="w-fit rounded border border-solid border-f1-border px-2 py-1"
      >
        Focus something else
      </button>
      <div data-testid="value-box" className="w-80">
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label={label}
          hideLabel={hideLabel}
          placeholder={placeholder}
          units={units}
          grouping
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

function componentRoot(box: HTMLElement) {
  const root = box.firstElementChild
  if (!root) {
    throw new Error("the inline field did not render")
  }
  return root
}

const meta = {
  title: "Inputs/Number input/Inline",
  component: InlineSalary,
  tags: ["experimental", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component:
          '`variant="inline"` is the detail-row presentation of F0NumberInput: the number reads as the same formatted string the editor shows — grouping, decimals and `units` included — until the row activates it, and the editor takes over in the same box, at the same inset. The component is presentational — `editing` comes from the parent, and the component reports Enter, Escape and blur through `onDismiss` without ever changing its own presentation.',
      },
    },
  },
  args: {
    label: "Gross salary",
    value: 45000,
    units: "EUR",
    placeholder: "Add a salary",
    onDismiss: fn(),
  },
} satisfies Meta<typeof InlineSalary>

export default meta
type Story = StoryObj<typeof meta>

export const AtRest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("45,000 EUR")).toBeVisible()
    await expect(canvas.queryByRole("textbox")).toBeNull()
  },
}

export const Empty: Story = {
  args: {
    value: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Add a salary")).toBeVisible()
  },
}

export const WithStepAtRest: Story = {
  render: () => (
    <div className="h-10 w-80">
      <F0NumberInput
        variant="inline"
        locale="en-US"
        label="Working days"
        hideLabel
        value={22}
        step={1}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("22")).toBeVisible()
    await expect(canvas.queryAllByRole("button")).toHaveLength(0)
  },
}

export const Editing: Story = {
  args: {
    editing: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole("textbox", { name: "Gross salary" })
    await expect(input).toHaveFocus()
    await expect(input).toHaveValue("45000")
  },
}

export const WithVisibleLabel: Story = {
  args: {
    hideLabel: false,
  },
}

export const TextDoesNotMove: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("value-box")

    const readText = canvas.getByText("45,000 EUR")
    const readX = textStartX(readText)
    const readHeight = componentRoot(box).getBoundingClientRect().height

    await step("the read presentation is the form's 40px box", async () => {
      await expect(readHeight).toBe(40)
    })

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    const input = await canvas.findByRole("textbox", { name: "Gross salary" })

    await step("the editor starts its text at the same x", async () => {
      await expect(Math.abs(textStartX(input) - readX)).toBeLessThanOrEqual(1)
    })

    await step("and is exactly as tall", async () => {
      await expect(componentRoot(box).getBoundingClientRect().height).toBe(
        readHeight
      )
    })
  },
}

export const FillsTheRowBox: Story = {
  render: ({ label, value }) => <FixedBox label={label} value={value} />,
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
    await canvas.findByRole("textbox", { name: "Gross salary" })

    await step("and so does the editor", async () => {
      await waitFor(async () => {
        const root = componentRoot(box).getBoundingClientRect()
        await expect(root.width).toBe(expected.width)
        await expect(root.height).toBe(expected.height)
      })
    })
  },
}

function FixedBox({
  label = "Gross salary",
  value = 45000,
}: {
  label?: string
  value?: number | null
}) {
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
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label={label}
          hideLabel
          grouping
          value={value}
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

    await step("Enter commits", async () => {
      await userEvent.keyboard("{Enter}")
      await expect(args.onDismiss).toHaveBeenCalledWith("commit")
    })

    await step("Escape reverts", async () => {
      await userEvent.keyboard("{Escape}")
      await expect(args.onDismiss).toHaveBeenCalledWith("escape")
    })

    await step("losing focus blurs", async () => {
      await userEvent.click(canvas.getByTestId("focus-sink"))
      await expect(args.onDismiss).toHaveBeenCalledWith("blur")
    })

    await step("the editor is still on screen", async () => {
      await expect(
        canvas.getByRole("textbox", { name: "Gross salary" })
      ).toBeVisible()
    })
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="h-10">
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Gross salary"
          hideLabel
          grouping
          value={45000}
          units="EUR"
        />
      </div>
      <div className="h-10">
        <F0NumberInput
          variant="inline"
          locale="es-ES"
          label="Gross salary"
          hideLabel
          grouping
          maxDecimals={2}
          value={1234567.891}
        />
      </div>
      <div className="h-10">
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Gross salary"
          hideLabel
          value={null}
          placeholder="Add a salary"
        />
      </div>
      <div className="h-10">
        <F0NumberInput
          variant="inline"
          locale="en-US"
          label="Gross salary"
          hideLabel
          grouping
          value={45000}
          units="EUR"
          editing
          autoFocus={false}
        />
      </div>
    </div>
  ),
}
