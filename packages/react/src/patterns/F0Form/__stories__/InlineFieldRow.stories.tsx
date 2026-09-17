import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, within } from "storybook/test"
import { Comment, Pencil } from "@/icons/app"
import {
  InlineFieldRow,
  InlineFieldRowList,
} from "@/patterns/F0Form/fields/inline"

/** What layer 2 will hand down: a node, already rendered. */
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
      <div className="w-[560px]">
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

/**
 * The row declares the box and holds it at 40px whichever mode it is in, and
 * the activator never wraps the action strip — a button inside a
 * `role="button"` is axe's `nested-interactive`.
 */
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
