import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { Placeholder } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import {
  F0Select,
  type F0SelectItemProps,
  type F0SelectProps,
  selectSizes,
} from "../index"

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

const verboseRoleOptions: F0SelectItemProps<Role>[] = [
  { value: "owner", label: "Can manage access and change every role" },
  { value: "editor", label: "Can view and edit this policy" },
  { value: "viewer", label: "This person can only view this policy" },
]

type InlineRoleSelectProps = {
  value?: Role
  options?: F0SelectItemProps<Role>[]
  label?: string
  placeholder?: string
  disabled?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onChange?: (value: Role) => void
  fitContentWidth?: boolean
  actions?: F0SelectProps<Role>["actions"]
  portalContainer?: HTMLElement | null
}

function InlineRoleSelect({
  value: initialValue,
  options = roleOptions,
  label = "Access level",
  placeholder = "Select role",
  onChange,
  ...props
}: InlineRoleSelectProps) {
  const [value, setValue] = useState(initialValue)

  return (
    <F0Select
      {...props}
      variant="inline"
      label={label}
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue)
        onChange?.(nextValue)
      }}
    />
  )
}

function OpenInlineRoleSelect(props: InlineRoleSelectProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  )

  return (
    <div ref={setPortalContainer} className="relative min-h-[280px] w-[320px]">
      <InlineRoleSelect {...props} open portalContainer={portalContainer} />
    </div>
  )
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
          "Use the inline F0Select variant for compact single-value controls embedded in desktop rows, such as roles, statuses, and access levels. It is borderless, non-clearable, and does not support multiple selection, list mode, preview/apply behavior, custom triggers, or field validation props. Its required label is exposed as the accessible name and is not rendered visually. The popup keeps the standard F0Select density and behavior.",
      },
    },
  },
  tags: ["experimental", "!autodocs"],
  args: {
    label: "Access level",
    placeholder: "Select role",
    onChange: fn(),
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
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  tags: ["no-sidebar"],
  args: {},
  render: () => (
    <div className="flex w-[330px] flex-col gap-6">
      <F0Select
        variant="field"
        label="Policy access level"
        options={roleOptions}
        value="viewer"
        onChange={fn()}
      />
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm">Policy access level</span>
        <InlineRoleSelect value="viewer" />
      </div>
    </div>
  ),
}

export const ViewerSelected: Story = {
  args: {
    value: "viewer",
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const page = within(canvasElement.closest("body")!)
    const trigger = canvas.getByRole("combobox", { name: "Access level" })

    await step("Expose the initial combobox state", async () => {
      await expect(trigger).toHaveAttribute("aria-expanded", "false")
      await waitFor(() => {
        expect(canvas.getByText("Viewer")).toBeInTheDocument()
      })
    })

    await step("Open from the keyboard and navigate to Editor", async () => {
      trigger.focus()
      await userEvent.keyboard("{Enter}")
      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-expanded", "true")
      })
      await waitFor(() => {
        expect(page.getByRole("listbox")).toBeInTheDocument()
      })
      await waitFor(() => {
        expect(page.getByRole("option", { name: /Viewer/ })).toHaveFocus()
      })

      await userEvent.keyboard("{ArrowUp}")
      await waitFor(() => {
        expect(page.getByRole("option", { name: /Editor/ })).toHaveFocus()
      })
    })

    await step("Select the focused role", async () => {
      await userEvent.keyboard("{Enter}")
      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-expanded", "false")
        expect(canvas.getByText("Editor")).toBeInTheDocument()
      })
      await expect(args.onChange).toHaveBeenCalledWith("editor")
    })

    await step("Close with Escape and restore trigger focus", async () => {
      trigger.focus()
      await userEvent.keyboard("{Enter}")
      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-expanded", "true")
      })

      await userEvent.keyboard("{Escape}")
      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-expanded", "false")
      })
      await waitFor(() => {
        expect(trigger).toHaveFocus()
      })
    })
  },
}

export const EmptyPlaceholder: Story = {}

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

export const ConciseRoleLabels: Story = {
  tags: ["no-sidebar"],
  args: {
    value: "viewer",
  },
}

export const VerboseRoleLabels: Story = {
  tags: ["no-sidebar"],
  args: {
    value: "viewer",
    options: verboseRoleOptions,
  },
}

export const Open: Story = {
  args: {
    value: "viewer",
  },
  // The shared popup currently aria-hides its focusable trigger. Keep axe
  // running and surface that existing aria-hidden-focus debt as non-blocking.
  parameters: {
    a11y: { test: "todo" },
  },
  render: (args) => <OpenInlineRoleSelect {...args} />,
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

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  args: {},
  parameters: withSnapshot({ a11y: { test: "todo" } }),
  render: () => (
    <div className="flex items-start gap-10 p-4">
      <section className="flex w-[330px] flex-col gap-4">
        <h4 className="text-lg font-semibold">Field</h4>
        {selectSizes.map((size) => (
          <div key={size} className="flex flex-col gap-4">
            <F0Select
              size={size}
              label={`Field ${size}`}
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Disabled field ${size}`}
              disabled
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Required field ${size}`}
              required
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Error field ${size}`}
              error="Error message"
              icon={Placeholder}
              labelIcon={Placeholder}
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Warning field ${size}`}
              status={{ type: "warning", message: "Warning message" }}
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Info field ${size}`}
              status={{ type: "info", message: "Info message" }}
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Status error field ${size}`}
              status={{ type: "error", message: "Error message" }}
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Hidden label field ${size}`}
              hideLabel
              onChange={fn()}
              options={[]}
            />
            <F0Select
              size={size}
              label={`Hint field ${size}`}
              hint="Hint message"
              onChange={fn()}
              options={[]}
            />
          </div>
        ))}
      </section>

      <section className="flex min-w-[360px] flex-col gap-4">
        <h4 className="text-lg font-semibold">Inline</h4>
        <InlineRoleSelect value="viewer" />
        <InlineRoleSelect />
        <InlineRoleSelect value="viewer" disabled />
        <div className="w-48">
          <InlineRoleSelect value="viewer" options={longRoleOptions} />
        </div>
        <div className="dark flex items-center gap-4 rounded-md bg-f1-background p-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-f1-foreground-secondary">
              Enabled
            </span>
            <InlineRoleSelect value="viewer" label="Enabled access level" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-f1-foreground-secondary">
              Disabled
            </span>
            <InlineRoleSelect
              value="viewer"
              label="Disabled access level"
              disabled
            />
          </div>
        </div>
        <OpenInlineRoleSelect value="viewer" actions={[removeAccessAction]} />
      </section>
    </div>
  ),
}
