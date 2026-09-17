import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, within } from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Checkbox } from "../F0Checkbox"

type CheckboxRowProps = {
  label?: string
  checked?: boolean
  disabled?: boolean
  hideLabel?: boolean
  onCheckedChange?: (checked: boolean) => void
}

/**
 * The record layout the inline variant is built for: a label column and a value
 * column the checkbox fills, so a row someone can tick lines up with the
 * read-only ones around it.
 */
function CheckboxRow({
  label = "Checkbox",
  checked: initialChecked = false,
  disabled,
  hideLabel = true,
  onCheckedChange,
}: CheckboxRowProps) {
  const [checked, setChecked] = useState(initialChecked)

  return (
    <div className="flex w-[560px] items-center border-0 border-b border-solid border-f1-border-secondary py-1">
      <span className="w-1/2 px-3 text-f1-foreground-secondary">{label}</span>
      <div data-testid="value-box" className="w-1/2">
        <F0Checkbox
          variant="inline"
          title={label}
          hideLabel={hideLabel}
          checked={checked}
          disabled={disabled}
          onCheckedChange={(next) => {
            setChecked(next === true)
            onCheckedChange?.(next === true)
          }}
        />
      </div>
    </div>
  )
}

const meta = {
  title: "Checkbox/Inline",
  component: CheckboxRow,
  tags: ["experimental", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component:
          '`variant="inline"` is the detail-row presentation of F0Checkbox: the control fills the row\'s box with no chrome of its own, at the same 12px inset an inline text input puts its first glyph. A checkbox is its own editor — one click commits through `onCheckedChange` — so the variant has no read-as-text state, no `editing` prop and nothing to dismiss.',
      },
    },
  },
  args: {
    label: "Checkbox",
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof CheckboxRow>

export default meta
type Story = StoryObj<typeof meta>

/** Someone who may edit the record. The control is live at rest. */
export const DetailRow: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const control = canvas.getByRole("checkbox", { name: "Checkbox" })

    await step(
      "Show the control itself, with nothing to activate first",
      () => {
        expect(control).toBeVisible()
        expect(control).not.toBeChecked()
        // No text swap and no edit affordance: a toggle is already its editor.
        expect(canvas.queryByRole("button")).toBeNull()
        expect(canvas.queryByText("Yes")).toBeNull()
        expect(canvas.queryByText("No")).toBeNull()
      }
    )

    await step("Commit on a single click", async () => {
      await userEvent.click(control)
      expect(args.onCheckedChange).toHaveBeenCalledTimes(1)
      expect(args.onCheckedChange).toHaveBeenCalledWith(true)
      expect(control).toBeChecked()
    })
  },
}

/** The same row with the value already ticked. */
export const DetailRowChecked: Story = {
  args: { checked: true },
}

/**
 * The read-only tier the field layer expresses as `disabled`. The control still
 * carries its name and its value, so a screen reader announces the record's
 * state rather than skipping the row.
 */
export const DetailRowDisabled: Story = {
  args: { checked: true, disabled: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const control = canvas.getByRole("checkbox", { name: "Checkbox" })

    await step("Keep a read-only row announced", () => {
      expect(control).toBeDisabled()
      expect(control).toBeChecked()
    })
  },
}

/**
 * The row's own label column names the field, so consumers pass `hideLabel`.
 * Without it the checkbox keeps its visible label, which is what a standalone
 * use outside a row wants.
 */
export const DetailRowWithVisibleLabel: Story = {
  args: { hideLabel: false },
}

/** The variant fills whatever box the row declares, in both axes. */
export const FillsTheRowBox: Story = {
  render: () => <FixedBox />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("fixed-box")
    const expected = box.getBoundingClientRect()
    const root = box.firstElementChild

    if (!root) {
      throw new Error("the inline checkbox did not render")
    }

    await step("Fill the 40×320 box", () => {
      const rect = root.getBoundingClientRect()
      expect(rect.width).toBe(expected.width)
      expect(rect.height).toBe(40)
    })

    await step("Start the control at the input field's 12px inset", () => {
      const control = canvas
        .getByRole("checkbox", { name: "Checkbox" })
        .getBoundingClientRect()
      // 1px of transparent border plus `px-3`, which is where F0InputField
      // paints an inline value's first glyph.
      expect(control.left - expected.left).toBe(13)
    })

    await step("Centre the control in the row", () => {
      const control = canvas
        .getByRole("checkbox", { name: "Checkbox" })
        .getBoundingClientRect()
      const offCentre = Math.abs(
        control.top + control.height / 2 - (expected.top + expected.height / 2)
      )
      expect(offCentre).toBeLessThanOrEqual(1)
    })
  },
}

function FixedBox() {
  const [checked, setChecked] = useState(true)

  return (
    <div
      data-testid="fixed-box"
      // A ring, not a border: it marks the 40×320 box without taking any space
      // out of it, so the measurement stays honest.
      className="h-10 w-80 ring-1 ring-f1-border"
    >
      <F0Checkbox
        variant="inline"
        title="Checkbox"
        hideLabel
        checked={checked}
        onCheckedChange={(next) => setChecked(next === true)}
      />
    </div>
  )
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({ width: "100%" }),
  render: () => (
    <div className="flex flex-col">
      <CheckboxRow />
      <CheckboxRow checked />
      <CheckboxRow checked disabled />
      <CheckboxRow hideLabel={false} />
    </div>
  ),
}
