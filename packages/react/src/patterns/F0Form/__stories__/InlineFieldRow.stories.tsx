import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import { Comment, Pencil } from "@/icons/app"
import {
  InlineFieldRow,
  InlineFieldRowList,
} from "@/patterns/F0Form/fields/inline"

const readValue = (text: string) => (
  <span className="flex items-center truncate px-3 font-medium text-f1-foreground">
    {text}
  </span>
)

const editValue = (label: string, text: string) => (
  <input
    aria-label={label}
    defaultValue={text}
    className="rounded-md border border-solid border-f1-border-selected-bold bg-f1-background px-3 font-medium text-f1-foreground"
  />
)

const meta = {
  title: "Forms/InlineFieldRow",
  component: InlineFieldRow,
  tags: ["internal"],
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  decorators: [
    (Story) => (
      <div className="w-140">
        <InlineFieldRowList>
          <Story />
        </InlineFieldRowList>
      </div>
    ),
  ],
  args: {
    label: "Job title",
    value: readValue("Senior product designer"),
    actions: [],
    editing: false,
    onActivate: fn(),
  },
} satisfies Meta<typeof InlineFieldRow>

export default meta
type Story = StoryObj<typeof meta>

export const Reading: Story = {}

export const Editing: Story = {
  args: {
    editing: true,
    value: editValue("Job title", "Senior product designer"),
    copyValue: "Senior product designer",
  },
}

export const NotEditable: Story = {
  args: { onActivate: undefined },
}

export const WithHint: Story = {
  args: { hint: "The title printed on the employment contract" },
}

export const WithCopy: Story = {
  args: {
    label: "Employee ID",
    value: readValue("EMP-004821"),
    copyValue: "EMP-004821",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const value = canvasElement.querySelector(
      '[data-slot="inline-field-row-value"]'
    )
    const clipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard")
    const writeText = fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    })
    try {
      // The strip only takes pointer events once it holds the focus ring, so
      // tab onto the copy button rather than onto the activator beside it.
      canvas.getByRole("button", { name: "Employee ID" }).focus()
      await userEvent.tab()
      await step("confirm a successful copy, then reset", async () => {
        await expect(
          canvas.getByRole("button", { name: "Copy Employee ID" })
        ).toHaveFocus()
        await userEvent.click(
          canvas.getByRole("button", { name: "Copy Employee ID" })
        )
        await expect(
          await canvas.findByRole("button", { name: "Copied Employee ID" })
        ).toHaveClass("text-f1-icon-positive")
        await expect(writeText).toHaveBeenCalledWith("EMP-004821")
        await expect(value).toHaveClass("bg-f1-background-positive")
        await expect(value).not.toHaveClass(
          "group-hover:bg-f1-background-secondary"
        )
        await waitFor(
          () =>
            expect(
              canvas.getByRole("button", { name: "Copy Employee ID" })
            ).toBeInTheDocument(),
          { timeout: 2000 }
        )
        await expect(value).not.toHaveClass("bg-f1-background-positive")
      })
      await step("do not confirm a rejected copy", async () => {
        writeText.mockRejectedValueOnce(new Error("denied"))
        await userEvent.click(
          canvas.getByRole("button", { name: "Copy Employee ID" })
        )
        await expect(writeText).toHaveBeenCalledTimes(2)
        await expect(
          canvas.queryByRole("button", { name: "Copied Employee ID" })
        ).toBeNull()
        await expect(value).not.toHaveClass("bg-f1-background-positive")
      })
    } finally {
      if (clipboard) {
        Object.defineProperty(navigator, "clipboard", clipboard)
      } else {
        Reflect.deleteProperty(navigator, "clipboard")
      }
    }
  },
}

export const WithActions: Story = {
  args: {
    actions: [
      { key: "edit", icon: Pencil, label: "Edit job title", onClick: fn() },
      {
        key: "comment",
        icon: Comment,
        label: "Comment on job title",
        onClick: fn(),
      },
    ],
    copyValue: "Senior product designer",
  },
}

export const WithMessage: Story = {
  args: {
    label: "Email",
    editing: true,
    value: editValue("Email", "ada@"),
    message: "Enter a valid email address",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Print the reason under the value", async () => {
      await expect(
        canvas.getByText("Enter a valid email address")
      ).toBeVisible()
      await expect(
        canvasElement
          .querySelector<HTMLElement>('[data-slot="inline-field-row-value"]')
          ?.getBoundingClientRect().height
      ).toBe(40)
    })

    await step("Lead the reason with the critical glyph", async () => {
      const slot = canvasElement.querySelector<HTMLElement>(
        '[data-slot="inline-field-row-message"]'
      )
      const glyph = slot?.querySelector("svg")
      await expect(glyph).toBeInTheDocument()

      const text = canvas.getByText("Enter a valid email address")
      await expect(text.className).toContain("text-f1-foreground-critical")
      // The glyph sits on the first line, whatever the copy wraps to.
      const glyphRect = (glyph as SVGSVGElement).getBoundingClientRect()
      const textRect = text.getBoundingClientRect()
      await expect(glyphRect.right).toBeLessThanOrEqual(textRect.left)
      await expect(Math.abs(glyphRect.top - textRect.top)).toBeLessThanOrEqual(
        2
      )
    })
  },
}

/**
 * A refused save can reach a row that is not editing — a date or a select,
 * whose editor is a popup. The box turns critical where it reads.
 */
export const MessageWhileReading: Story = {
  args: {
    label: "Start date",
    value: readValue("10 Apr 2026"),
    message: "That date is before the contract starts",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Draw the value box as critical", async () => {
      const box = canvasElement.querySelector<HTMLElement>(
        '[data-slot="inline-field-row-value"]'
      ) as HTMLElement

      await expect(box.getBoundingClientRect().height).toBe(40)
      await expect(getComputedStyle(box).boxShadow).not.toBe("none")
      await expect(
        canvas.getByText("That date is before the contract starts")
      ).toBeVisible()
    })
  },
}

const FIVE_ROWS = [
  { label: "Full name", value: "Marta Ibáñez", copyValue: "Marta Ibáñez" },
  { label: "Job title", value: "Senior product designer" },
  { label: "Employee ID", value: "EMP-004821", copyValue: "EMP-004821" },
  { label: "Start date", value: "10 Apr 2026" },
  { label: "Legal entity", value: "Factorial HR SL", editable: false },
]

export const RowList: Story = {
  render: () => (
    <>
      {FIVE_ROWS.map((row) => (
        <InlineFieldRow
          key={row.label}
          label={row.label}
          value={readValue(row.value)}
          actions={[]}
          copyValue={row.copyValue}
          onActivate={row.editable === false ? undefined : fn()}
          editing={false}
        />
      ))}
    </>
  ),
}

function BothModes() {
  const [editing, setEditing] = useState(false)

  return (
    <InlineFieldRow
      label="Job title"
      value={
        editing
          ? editValue("Job title", "Senior product designer")
          : readValue("Senior product designer")
      }
      actions={[
        { key: "edit", icon: Pencil, label: "Edit job title", onClick: fn() },
      ]}
      copyValue="Senior product designer"
      onActivate={() => setEditing(true)}
      editing={editing}
    />
  )
}

export const GeometryAndSiblings: Story = {
  render: () => <BothModes />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const boxOf = () =>
      canvasElement.querySelector<HTMLElement>(
        '[data-slot="inline-field-row-value"]'
      )

    await step("the box is 40px at rest", async () => {
      await expect(boxOf()?.getBoundingClientRect().height).toBe(40)
    })

    await step("the activator and the strip are siblings", async () => {
      const activator = canvas.getByRole("button", { name: "Job title" })
      const strip = canvasElement.querySelector(
        '[data-slot="inline-field-row-actions"]'
      )
      await expect(activator.contains(strip)).toBe(false)
      await expect(activator.parentElement).toBe(strip?.parentElement)
    })

    await step("the box is still 40px while editing", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Job title" }))
      await expect(await canvas.findByRole("textbox")).toBeInTheDocument()
      await expect(boxOf()?.getBoundingClientRect().height).toBe(40)
      await expect(
        canvasElement.querySelector('[data-slot="inline-field-row-actions"]')
      ).toBeNull()
    })
  },
}
