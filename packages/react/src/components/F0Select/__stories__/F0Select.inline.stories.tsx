import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  expect,
  fireEvent,
  fn,
  userEvent,
  waitFor,
  within,
} from "storybook/test"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0Select, type F0SelectItemProps, type F0SelectProps } from ".."
import type { SelectInlineDismissReason } from "../types"

type Role = "owner" | "editor" | "viewer"

const roleOptions: F0SelectItemProps<Role>[] = [
  {
    value: "owner",
    label: "Owner",
    description: "Can manage access and change roles",
  },
  {
    value: "editor",
    label: "Editor",
    description: "Can view and edit this policy",
  },
  {
    value: "viewer",
    label: "Viewer",
    description: "Can view this policy",
  },
]

const longRoleOptions: F0SelectItemProps<Role>[] = roleOptions.map((option) =>
  option.type === "separator" || option.value !== "viewer"
    ? option
    : {
        ...option,
        label: "Viewer with a deliberately long access-level label",
      }
)

const peopleOptions: F0SelectItemProps<Role>[] = [
  {
    value: "viewer",
    label: "Ada Lovelace",
    avatar: { type: "person", firstName: "Ada", lastName: "Lovelace" },
  },
  {
    value: "editor",
    label: "Grace Hopper",
    avatar: { type: "person", firstName: "Grace", lastName: "Hopper" },
  },
]

type InlineRoleSelectProps = {
  value?: Role
  options?: F0SelectItemProps<Role>[]
  label?: string
  placeholder?: string
  disabled?: boolean
  hideLabel?: boolean
  editing?: boolean
  onChange?: (value: Role) => void
  onDismiss?: (reason: SelectInlineDismissReason) => void
  fitContentWidth?: boolean
  actions?: F0SelectProps<Role>["actions"]
  portalContainer?: HTMLElement | null
}

function InlineRoleSelect({
  value: initialValue,
  options = roleOptions,
  label = "Access level",
  placeholder = "Select role",
  editing: initialEditing = false,
  onChange,
  onDismiss,
  ...props
}: InlineRoleSelectProps) {
  const [value, setValue] = useState(initialValue)
  const [editing, setEditing] = useState(initialEditing)

  return (
    <div className="flex w-80 flex-col gap-2">
      <button
        type="button"
        data-testid="toggle-editing"
        className="w-fit rounded border border-solid border-f1-border bg-f1-background px-2 py-1 text-f1-foreground"
        onClick={() => setEditing((current) => !current)}
      >
        {editing ? "Stop editing" : "Start editing"}
      </button>
      {/* Keep focus changes independent of the controlled edit mode. */}
      <button
        type="button"
        data-testid="focus-sink"
        className="w-fit rounded border border-solid border-f1-border bg-f1-background px-2 py-1 text-f1-foreground"
      >
        Focus something else
      </button>
      {/* Match the row group used by the chevron reveal. */}
      <div data-testid="value-box" className="group h-10 w-80">
        <F0Select
          {...props}
          variant="inline"
          label={label}
          placeholder={placeholder}
          options={options}
          value={value}
          editing={editing}
          onDismiss={onDismiss}
          onChange={(nextValue) => {
            setValue(nextValue)
            onChange?.(nextValue)
          }}
        />
      </div>
    </div>
  )
}

function textStartX(element: Element) {
  const { left } = element.getBoundingClientRect()
  return left + parseFloat(getComputedStyle(element).paddingLeft)
}

function control(canvasElement: HTMLElement) {
  const element = canvasElement.querySelector(
    "[data-testid='select-inline-value'], [role='combobox']"
  )
  if (!element) {
    throw new Error("the inline select rendered neither text nor a trigger")
  }
  return element
}

const removeAccessAction = {
  label: "Remove access",
  variant: "critical" as const,
  onClick: fn(),
}

const meta = {
  title: "Select/Inline",
  component: InlineRoleSelect,
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
    docs: {
      description: {
        component:
          "The detail-row presentation of F0Select. At rest the selection reads as plain text — avatar and icon included — with no button and no hover background of its own; a chevron sits at the far edge of the value, hidden until the surrounding row is hovered or holds focus, and it is the row's only affordance for a select. The dropdown replaces the text only while `editing` is true. `editing` is controlled and the component never changes it: it reports `commit`, `escape` and `popupClose` through `onDismiss` and keeps the dropdown up until the owner says otherwise. Single selection calls `onChange` before `onDismiss`, so the owner can unmount the editor on commit without losing the selected value. Prop and option refreshes do not emit `onChange`. Both presentations fill the box the row declares and start their text at the same inset, so the value does not move when the row is activated.",
      },
    },
  },
  tags: ["experimental", "!autodocs"],
  args: {
    label: "Access level",
    placeholder: "Select role",
    onChange: fn(),
    onDismiss: fn(),
    actions: [removeAccessAction],
  },
  argTypes: {
    fitContentWidth: {
      control: "boolean",
      description:
        "Defaults to true for inline selects. Set false to restore the standard 20rem popup minimum.",
      table: { defaultValue: { summary: "true" } },
    },
  },
} satisfies Meta<typeof InlineRoleSelect>

export default meta
type Story = StoryObj<InlineRoleSelectProps>

export const AtRest: Story = {
  args: {
    value: "viewer",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Wait for source-backed labels to load.
    await waitFor(async () => {
      await expect(canvas.getByTestId("select-inline-value")).toHaveTextContent(
        "Viewer"
      )
    })
    await expect(canvas.queryByRole("combobox")).toBeNull()

    const chevron = canvas.getByTestId("select-inline-value").lastElementChild
    await expect(chevron).toHaveAttribute("aria-hidden", "true")
    await expect(chevron?.querySelector("svg")).not.toBeNull()
    await expect(chevron).toHaveStyle({ opacity: "0" })
  },
}

export const DisabledHasNoChevron: Story = {
  args: {
    value: "viewer",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(async () => {
      await expect(canvas.getByTestId("select-inline-value")).toHaveTextContent(
        "Viewer"
      )
    })
    await expect(
      canvas.getByTestId("select-inline-value").querySelector("svg")
    ).toBeNull()
  },
}

export const EmptyPlaceholder: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("Select role")).toBeVisible()
  },
}

export const WithAvatar: Story = {
  args: {
    value: "viewer",
    options: peopleOptions,
  },
}

export const HiddenLabel: Story = {
  args: {
    value: "viewer",
    hideLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByTestId("select-inline-value")).toHaveAttribute(
      "aria-label",
      "Access level"
    )
  },
}

export const Disabled: Story = {
  args: {
    value: "viewer",
    disabled: true,
  },
}

export const LongLabel: Story = {
  args: {
    value: "viewer",
    options: longRoleOptions,
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
}

export const TextDoesNotMove: Story = {
  args: {
    value: "viewer",
  },
  // An open dropdown aria-hides its own focusable trigger. Keep axe running and
  // surface that existing debt as non-blocking.
  parameters: {
    a11y: { test: "todo" },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const readX = textStartX(control(canvasElement))
    const readHeight = control(canvasElement).getBoundingClientRect().height

    await step("the read presentation is the row's 40px box", async () => {
      await expect(readHeight).toBe(40)
    })

    await userEvent.click(canvas.getByTestId("toggle-editing"))
    await waitFor(async () => {
      await expect(control(canvasElement).getAttribute("role")).toBe("combobox")
    })

    await step("the editor starts its text at the same x", async () => {
      await expect(
        Math.abs(textStartX(control(canvasElement)) - readX)
      ).toBeLessThanOrEqual(1)
    })

    await step("and is exactly as tall", async () => {
      await expect(control(canvasElement).getBoundingClientRect().height).toBe(
        readHeight
      )
    })
  },
}

export const FillsTheRowBox: Story = {
  args: {
    value: "viewer",
  },
  parameters: {
    a11y: { test: "todo" },
  },
  render: (args) => <FixedBox {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const box = canvas.getByTestId("fixed-box")
    const expected = box.getBoundingClientRect()

    await step("the box is the form's 40 by 320", async () => {
      await expect(expected.height).toBe(40)
      await expect(expected.width).toBe(320)
    })

    await step("the read presentation fills it", async () => {
      const rect = control(canvasElement).getBoundingClientRect()
      await expect(rect.width).toBe(expected.width)
      await expect(rect.height).toBe(expected.height)
    })

    await userEvent.click(canvas.getByTestId("start-editing"))

    await step("and so does the dropdown's trigger", async () => {
      await waitFor(async () => {
        const rect = control(canvasElement).getBoundingClientRect()
        await expect(rect.width).toBe(expected.width)
        await expect(rect.height).toBe(expected.height)
      })
    })
  },
}

function FixedBox({
  value = "viewer" as Role,
  ...props
}: InlineRoleSelectProps) {
  const [editing, setEditing] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        data-testid="start-editing"
        className="w-fit rounded border border-solid border-f1-border bg-f1-background px-2 py-1 text-f1-foreground"
        onClick={() => setEditing(true)}
      >
        Start editing
      </button>
      <div
        data-testid="fixed-box"
        // A ring marks the box without changing its dimensions.
        className="h-10 w-80 ring-1 ring-f1-border"
      >
        <F0Select
          {...props}
          variant="inline"
          label="Access level"
          hideLabel
          options={roleOptions}
          value={value}
          editing={editing}
        />
      </div>
    </div>
  )
}

export const ReportsDismissWithoutClosing: Story = {
  args: {
    value: "viewer",
    editing: true,
  },
  parameters: {
    a11y: { test: "todo" },
  },
  play: async ({ canvasElement, args, step }) => {
    const page = within(canvasElement.closest("body")!)

    // Wait for virtualized options, which mount after the listbox.
    await waitFor(
      async () => {
        await expect(page.getAllByRole("option").length).toBeGreaterThan(0)
      },
      { timeout: 5000 }
    )

    await step("Escape reverts", async () => {
      await userEvent.keyboard("{Escape}")
      await waitFor(async () => {
        await expect(args.onDismiss).toHaveBeenCalledWith("escape")
      })
    })

    await step("the dropdown is still on screen", async () => {
      await expect(page.getByRole("listbox")).toBeInTheDocument()
    })

    await step("selecting an option commits", async () => {
      await userEvent.click(page.getByRole("option", { name: /Editor/ }))
      await waitFor(async () => {
        await expect(args.onDismiss).toHaveBeenCalledWith("commit")
        await expect(args.onChange).toHaveBeenCalledWith("editor")
      })
    })

    await step("and the dropdown is still on screen", async () => {
      await expect(page.getByRole("listbox")).toBeInTheDocument()
    })

    await step("closing the popup from outside reports it", async () => {
      // Radix blocks body pointer events; dispatch pointerdown to dismiss.
      fireEvent.pointerDown(document.body)
      await waitFor(async () => {
        await expect(args.onDismiss).toHaveBeenCalledWith("popupClose")
      })
      await expect(page.getByRole("listbox")).toBeInTheDocument()
    })
  },
}

export const DarkMode: Story = {
  args: {
    value: "viewer",
  },
  render: (args) => (
    <div className="dark flex items-center gap-4 rounded-md bg-f1-background p-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-f1-foreground-secondary">Enabled</span>
        <InlineRoleSelect {...args} label="Enabled access level" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-f1-foreground-secondary">Disabled</span>
        <InlineRoleSelect {...args} label="Disabled access level" disabled />
      </div>
    </div>
  ),
}

function SnapshotRow({
  width = "w-80",
  ...props
}: Omit<InlineRoleSelectProps, "onChange"> & { width?: string }) {
  return (
    <div className={`h-10 ${width}`}>
      <F0Select
        variant="inline"
        label={props.label ?? "Access level"}
        hideLabel
        placeholder={props.placeholder ?? "Select role"}
        options={props.options ?? roleOptions}
        value={props.value}
        disabled={props.disabled}
      />
    </div>
  )
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  args: {},
  parameters: withSnapshot({ a11y: { test: "todo" } }),
  render: () => (
    <div className="flex min-w-90 flex-col gap-4 p-4">
      <SnapshotRow value="viewer" />
      <SnapshotRow />
      <SnapshotRow value="viewer" disabled />
      <SnapshotRow value="viewer" options={peopleOptions} />
      <SnapshotRow value="viewer" options={longRoleOptions} width="w-48" />
      <div className="dark flex items-center gap-4 rounded-md bg-f1-background p-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-f1-foreground-secondary">Enabled</span>
          <SnapshotRow value="viewer" label="Enabled access level" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-f1-foreground-secondary">Disabled</span>
          <SnapshotRow value="viewer" label="Disabled access level" disabled />
        </div>
      </div>
      <OpenInlineRoleSelect />
    </div>
  ),
}

function OpenInlineRoleSelect() {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  )

  return (
    <div ref={setPortalContainer} className="relative min-h-70 w-80">
      <div className="h-10 w-80">
        <F0Select
          variant="inline"
          label="Access level"
          hideLabel
          options={roleOptions}
          value="viewer"
          editing
          portalContainer={portalContainer}
        />
      </div>
    </div>
  )
}

function UnmountingEditor({ onChange, onDismiss }: InlineRoleSelectProps) {
  const [mounted, setMounted] = useState(true)
  const [value, setValue] = useState<Role>("viewer")
  return mounted ? (
    <F0Select
      variant="inline"
      editing
      label="Access level"
      value={value}
      options={roleOptions}
      onChange={(nextValue) => {
        setValue(nextValue)
        onChange?.(nextValue)
      }}
      onDismiss={(reason) => {
        onDismiss?.(reason)
        setMounted(false)
      }}
    />
  ) : (
    <p role="status">Saved role: {value}</p>
  )
}

export const CommitBeforeUnmount: Story = {
  render: (args) => <UnmountingEditor {...args} />,
  play: async ({ canvasElement, args }) => {
    const page = within(canvasElement.ownerDocument.body)
    await userEvent.click(await page.findByRole("option", { name: /Editor/ }))
    await expect(args.onChange).toHaveBeenCalledTimes(1)
    await expect(args.onChange).toHaveBeenCalledWith("editor")
    await expect(args.onDismiss).toHaveBeenCalledWith("commit")
    await expect(within(canvasElement).getByRole("status")).toHaveTextContent(
      "Saved role: editor"
    )
    await expect(page.queryByRole("listbox")).toBeNull()
  },
}
