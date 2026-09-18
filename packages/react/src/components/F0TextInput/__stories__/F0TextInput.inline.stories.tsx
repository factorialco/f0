import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import type { InlineDismissReason } from "@/components/F0InputField"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TextInput } from ".."

type InlineJobTitleProps = {
  type?: "text" | "private"
  label?: string
  value?: string
  placeholder?: string
  editing?: boolean
  hideLabel?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

function InlineJobTitle({
  type,
  label = "Job title",
  value: initialValue = "Head of design",
  placeholder = "Add a job title",
  editing: initialEditing = false,
  hideLabel = true,
  onDismiss,
}: InlineJobTitleProps) {
  const [value, setValue] = useState(initialValue)
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
        <F0TextInput
          variant="inline"
          type={type}
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

function componentRoot(box: HTMLElement) {
  const root = box.firstElementChild
  if (!root) {
    throw new Error("the inline field did not render")
  }
  return root
}

const meta = {
  title: "Inputs/Text input/Inline",
  component: InlineJobTitle,
  tags: ["experimental", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component:
          '`variant="inline"` is the detail-row presentation of F0TextInput: the value reads as plain text until the row activates it, and the editor takes over in the same box, at the same inset. The component is presentational — `editing` comes from the parent, and the component reports Enter, Escape and blur through `onDismiss` without ever changing its own presentation.',
      },
    },
  },
  args: {
    label: "Job title",
    value: "Head of design",
    placeholder: "Add a job title",
    onDismiss: fn(),
  },
} satisfies Meta<typeof InlineJobTitle>

export default meta
type Story = StoryObj<typeof meta>

export const AtRest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Head of design")).toBeVisible()
    await expect(canvas.queryByRole("textbox")).toBeNull()
  },
}

export const PrivateFocus: Story = {
  args: {
    label: "Social security number",
    type: "private",
    value: "123-45-6789",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTitle("••••••••")).toBeVisible()
    await expect(canvas.queryByText("123-45-6789")).toBeNull()
    await expect(canvas.queryByTitle("123-45-6789")).toBeNull()

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    const input = canvas.getByRole("textbox", {
      name: "Social security number",
    })
    await expect(input).toHaveFocus()
    await expect(input).toHaveValue("123-45-6789")
    await userEvent.click(canvas.getByTestId("focus-sink"))
    await expect(input).toHaveAttribute("type", "password")
    await expect(input).toBeVisible()
    await expect(args.onDismiss).toHaveBeenCalledWith("blur")

    await userEvent.click(input)
    await expect(input).toHaveAttribute("type", "text")
    await userEvent.type(input, "0")
    await userEvent.click(canvas.getByTestId("toggle-editing"))
    await expect(canvas.getByTitle("••••••••")).toBeVisible()
    await expect(canvas.queryByTitle("123-45-67890")).toBeNull()
    await userEvent.click(canvas.getByTestId("toggle-editing"))
    await expect(
      canvas.getByRole("textbox", { name: "Social security number" })
    ).toHaveValue("123-45-67890")
  },
}

export const Empty: Story = {
  args: {
    value: "",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Add a job title")).toBeVisible()
  },
}

export const Editing: Story = {
  args: {
    editing: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input = canvas.getByRole("textbox", { name: "Job title" })
    await expect(input).toHaveValue("Head of design")
    await expect(input).toHaveFocus()
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

    const readText = canvas.getByText("Head of design")
    const readX = textStartX(readText)
    const readHeight = componentRoot(box).getBoundingClientRect().height

    await step("the read presentation is the form's 40px box", async () => {
      await expect(readHeight).toBe(40)
    })

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    const input = await canvas.findByRole("textbox", { name: "Job title" })

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
    await canvas.findByRole("textbox", { name: "Job title" })

    await step("and so does the editor", async () => {
      await waitFor(async () => {
        const root = componentRoot(box).getBoundingClientRect()
        await expect(root.width).toBe(expected.width)
        await expect(root.height).toBe(expected.height)
      })
    })
  },
}

function FixedBox({ label = "Job title", value = "Head of design" }) {
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
        <F0TextInput
          variant="inline"
          label={label}
          hideLabel
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
        canvas.getByRole("textbox", { name: "Job title" })
      ).toBeVisible()
    })
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="h-10">
        <F0TextInput
          variant="inline"
          label="Job title"
          hideLabel
          value="Head of design"
        />
      </div>
      <div className="h-10">
        <F0TextInput
          variant="inline"
          label="Job title"
          hideLabel
          value=""
          placeholder="Add a job title"
        />
      </div>
      <div className="h-10">
        <F0TextInput
          variant="inline"
          label="Job title"
          hideLabel
          value="A job title long enough that it has to be cut with an ellipsis"
        />
      </div>
      <div className="h-10">
        <F0TextInput
          variant="inline"
          label="Job title"
          hideLabel
          value="Head of design"
          editing
          autoFocus={false}
        />
      </div>
    </div>
  ),
}
