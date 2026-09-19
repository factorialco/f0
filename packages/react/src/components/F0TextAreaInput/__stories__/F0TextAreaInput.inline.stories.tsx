import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"
import type { InlineDismissReason } from "@/components/F0InputField"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0TextAreaInput } from ".."

// Short enough that none of the three wraps at the story width, in either weight.
const THREE_LINES =
  "Wrote the first algorithm.\nSigned off the Engine notes.\nPrefers long updates."

type InlineBioProps = {
  label?: string
  value?: string
  placeholder?: string
  editing?: boolean
  hideLabel?: boolean
  onDismiss?: (reason: InlineDismissReason) => void
}

function InlineBio({
  label = "Bio",
  value: initialValue = "Mathematician, writer, first programmer.",
  placeholder = "Add a bio",
  editing: initialEditing = false,
  hideLabel = true,
  onDismiss,
}: InlineBioProps) {
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
        <F0TextAreaInput
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

/** The read span carries its inset as padding; the textarea carries its own. */
function textStart(element: Element) {
  const rect = element.getBoundingClientRect()
  const style = getComputedStyle(element)
  return {
    x: rect.left + parseFloat(style.paddingLeft),
    y: rect.top + parseFloat(style.paddingTop),
  }
}

function componentRoot(box: HTMLElement) {
  const root = box.firstElementChild
  if (!root) {
    throw new Error("the inline field did not render")
  }
  return root
}

/** Height a box holding `lines` lines of `element`'s type must have. */
function heightFor(element: Element, lines: number) {
  const style = getComputedStyle(element)
  return (
    parseFloat(style.lineHeight) * lines +
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    // The read box and the editor each draw a 1px border.
    2
  )
}

const meta = {
  title: "Inputs/Text area input/Inline",
  component: InlineBio,
  tags: ["experimental", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component:
          '`variant="inline"` is the detail-row presentation of F0TextAreaInput: the value reads as wrapped multi-line text until the row activates it, and the textarea takes over in the same box, at the same inset, at the height the text already occupied. Enter types a newline, so the commit shortcut is Cmd/Ctrl+Enter; Escape and blur report themselves the same way they do on F0TextInput. The component is presentational — `editing` comes from the parent, and `onDismiss` never changes what the component draws.',
      },
    },
  },
  args: {
    label: "Bio",
    value: "Mathematician, writer, first programmer.",
    placeholder: "Add a bio",
    onDismiss: fn(),
  },
} satisfies Meta<typeof InlineBio>

export default meta
type Story = StoryObj<typeof meta>

export const AtRest: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(
      canvas.getByText("Mathematician, writer, first programmer.")
    ).toBeVisible()
    await expect(canvas.queryByRole("textbox")).toBeNull()
  },
}

export const MultipleLines: Story = {
  args: { value: THREE_LINES },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const text = canvas.getByText(/first algorithm/)

    await step("keeps the line breaks the value carries", async () => {
      await expect(getComputedStyle(text).whiteSpace).toBe("pre-wrap")
      await expect(text.textContent).toBe(THREE_LINES)
    })
  },
}

export const Empty: Story = {
  args: { value: "" },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Add a bio")).toBeVisible()
  },
}

export const Editing: Story = {
  args: { editing: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const textarea = canvas.getByRole("textbox", { name: "Bio" })
    await expect(textarea).toHaveValue(
      "Mathematician, writer, first programmer."
    )
    await expect(textarea).toHaveFocus()
  },
}

export const WithVisibleLabel: Story = {
  args: { hideLabel: false },
}

export const TextDoesNotMove: Story = {
  args: { value: "Mathematician" },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("value-box")

    const read = textStart(canvas.getByText("Mathematician"))
    const readHeight = componentRoot(box).getBoundingClientRect().height

    await step("one line reads at the form's 40px box", async () => {
      await expect(readHeight).toBe(40)
    })

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    const textarea = await canvas.findByRole("textbox", { name: "Bio" })

    await step("the editor starts its text at the same point", async () => {
      const editing = textStart(textarea)
      await expect(Math.abs(editing.x - read.x)).toBeLessThanOrEqual(1)
      await expect(Math.abs(editing.y - read.y)).toBeLessThanOrEqual(1)
    })

    await step("and the box is exactly as tall", async () => {
      await waitFor(async () => {
        await expect(componentRoot(box).getBoundingClientRect().height).toBe(
          readHeight
        )
      })
    })
  },
}

/** Three explicit lines, so the count cannot change with the font weight. */
export const GrowsWithItsContent: Story = {
  args: { value: THREE_LINES },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("value-box")

    const text = canvas.getByText(/first algorithm/)
    const readHeight = componentRoot(box).getBoundingClientRect().height

    await step("the read box holds three lines", async () => {
      await expect(readHeight).toBe(heightFor(text, 3))
    })

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    const textarea = await canvas.findByRole("textbox", { name: "Bio" })

    await step("and so does the editor, at the same height", async () => {
      await waitFor(async () => {
        await expect(textarea.getBoundingClientRect().height).toBe(
          heightFor(textarea, 3) - 2
        )
        await expect(componentRoot(box).getBoundingClientRect().height).toBe(
          readHeight
        )
      })
    })
  },
}

export const ReportsDismissWithoutClosing: Story = {
  args: { editing: true },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole("textbox", { name: "Bio" })

    await step("a bare Enter types a newline", async () => {
      await userEvent.type(textarea, "{Enter}")
      await expect(args.onDismiss).not.toHaveBeenCalledWith("commit")
      await expect((textarea as HTMLTextAreaElement).value).toContain("\n")
    })

    await step("Cmd/Ctrl+Enter commits", async () => {
      await userEvent.keyboard("{Control>}{Enter}{/Control}")
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
      await expect(canvas.getByRole("textbox", { name: "Bio" })).toBeVisible()
    })
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <F0TextAreaInput
        variant="inline"
        label="Bio"
        hideLabel
        value="One line"
      />
      <F0TextAreaInput
        variant="inline"
        label="Bio"
        hideLabel
        value=""
        placeholder="Add a bio"
      />
      <F0TextAreaInput
        variant="inline"
        label="Bio"
        hideLabel
        value={THREE_LINES}
      />
      <F0TextAreaInput
        variant="inline"
        label="Bio"
        hideLabel
        value={THREE_LINES}
        editing
        autoFocus={false}
      />
    </div>
  ),
}
