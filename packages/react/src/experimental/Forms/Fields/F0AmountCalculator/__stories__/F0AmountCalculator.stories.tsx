import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { Placeholder } from "@/icons/app"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AmountCalculator } from "../F0AmountCalculator"

const meta = {
  title: "Components/F0AmountCalculator",
  component: F0AmountCalculator,
  tags: ["autodocs", "stable"],
  parameters: {
    docs: {
      description: {
        component: [
          "The `F0AmountCalculator` is a numeric input component that supports two rendering modes: <strong>inline</strong> (a standard form field) and <strong>popover</strong> (a floating panel triggered by an icon button).",
          'In inline mode, an optional <code>extraContent</code> slot renders contextual text to the right of the input (e.g. "of 300,00 €"). When <code>extraContent</code> is present, labels, hints, and errors are hoisted outside the flex row so the row height stays fixed.',
          "In popover mode, an outline icon button (default: Calculator) opens a Radix popover containing the input. The trigger icon, placement, and open/close state are all configurable via the <code>popover</code> prop.",
          'The <code>inputWidth</code> prop controls the width of the inner input element. Omit it (or set <code>"auto"</code>) to let it shrink-wrap its content.',
        ]
          .map((text) => `<p>${text}</p>`)
          .join(""),
      },
    },
  },
  args: {
    label: "Discount",
    locale: "en-US" as const,
    disabled: false,
    placeholder: "0,0",
    onChange: fn(),
  },
  argTypes: {
    value: {
      description: "Controlled numeric value. Pass `null` to clear.",
      control: { type: "number" },
      table: {
        type: { summary: "number | null | undefined" },
      },
    },
    onChange: {
      description: "Called whenever the value changes.",
      table: {
        type: { summary: "(value: number | null) => void" },
      },
    },
    locale: {
      description:
        'BCP 47 locale string used to format the number (e.g. `"en-US"`, `"es-ES"`).',
      options: ["en-US", "es-ES", "pt-BR"],
      control: { type: "select" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"en-US"' },
      },
    },
    units: {
      description:
        'Units suffix rendered inside the input (e.g. `"%"`, `"€"`).',
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    inputWidth: {
      description:
        'CSS width of the inner input element. `"auto"` (default) shrinks to content.',
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"auto"' },
      },
    },
    extraContent: {
      description:
        'Node rendered to the right of the input — typically contextual text like `"of 300,00 €"`. Controlled entirely by the consuming component.',
      control: { type: "text" },
      table: { type: { summary: "ReactNode" } },
    },
    popover: {
      description:
        "When provided the component renders in popover mode. Pass `{}` for defaults (Calculator icon, `bottom`/`start` placement, uncontrolled). All fields are optional.",
      control: { type: "object" },
      table: {
        type: {
          summary: "F0AmountCalculatorPopoverConfig | undefined",
          detail:
            "{ icon?: IconType; side?: 'top'|'bottom'|'left'|'right'; align?: 'start'|'center'|'end'; open?: boolean; onOpenChange?: (open: boolean) => void }",
        },
      },
    },
    disabled: {
      description: "Disables all interaction with the input.",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    error: {
      description:
        "Error state. Pass `true` for a generic error or a string for a message.",
      control: { type: "text" },
      table: { type: { summary: "string | boolean" } },
    },
    hint: {
      description: "Helper text shown below the input.",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<number | null>(
        args.value as number | null
      )
      return (
        <Story
          args={{
            ...args,
            value,
            onChange: (v) => setValue(v),
          }}
        />
      )
    },
  ],
} satisfies Meta<typeof F0AmountCalculator>

export default meta
type Story = StoryObj<typeof meta>

// ─── Anatomy / Default ───────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    label: "Discount",
    units: "%",
    placeholder: "0",
  },
}

// ─── Modes ───────────────────────────────────────────────────────────────────

export const Inline: Story = {
  name: "Inline",
  args: {
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "160px",
  },
}

export const InlineWithFixedWidth: Story = {
  name: "Inline — fixed width",
  args: {
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "160px",
  },
}

export const AsPopover: Story = {
  name: "Popover",
  args: {
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "160px",
    popover: {},
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<number | null>(null)
      return (
        <div className="flex items-center gap-2">
          <Story
            args={{
              ...args,
              value,
              onChange: setValue as unknown as typeof args.onChange,
            }}
          />
          <span className="text-f1-foreground-secondary text-sm">
            {value != null ? `${value}%` : "—"}
          </span>
        </div>
      )
    },
  ],
}

export const AsPopoverWithCustomIcon: Story = {
  name: "Popover — custom icon",
  args: {
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "160px",
    popover: { icon: Placeholder },
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<number | null>(null)
      return (
        <div className="flex items-center gap-2">
          <Story
            args={{
              ...args,
              value,
              onChange: setValue as unknown as typeof args.onChange,
            }}
          />
          <span className="text-f1-foreground-secondary text-sm">
            {value != null ? `${value}%` : "—"}
          </span>
        </div>
      )
    },
  ],
}

export const AsPopoverWithTriggerLabel: Story = {
  name: "Popover — trigger label",
  args: {
    label: "Salary",
    units: "€",
    inputWidth: "160px",
    hideLabel: true,
    popover: { triggerLabel: "Salary" },
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<number | null>(null)
      return (
        <div className="flex items-center gap-2">
          <Story
            args={{
              ...args,
              value,
              onChange: setValue as unknown as typeof args.onChange,
            }}
          />
          <span className="text-f1-foreground-secondary text-sm">
            {value != null ? `${value} €` : "—"}
          </span>
        </div>
      )
    },
  ],
}

export const AsPopoverControlled: Story = {
  name: "Popover — controlled open state",
  args: {
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "160px",
  },
  decorators: [
    (Story, { args }) => {
      const [value, setValue] = useState<number | null>(null)
      const [open, setOpen] = useState(false)
      return (
        <div className="flex items-center gap-2">
          <Story
            args={{
              ...args,
              value,
              onChange: setValue as unknown as typeof args.onChange,
              popover: { open, onOpenChange: setOpen },
            }}
          />
          <span className="text-f1-foreground-secondary text-sm">
            {value != null ? `${value}%` : "—"}
          </span>
        </div>
      )
    },
  ],
}

// ─── States ──────────────────────────────────────────────────────────────────

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div className="flex flex-col gap-6" style={{ width: 320 }}>
      <F0AmountCalculator
        label="Default"
        locale="en-US"
        units="%"
        extraContent="of 300,00 €"
        inputWidth="160px"
        onChange={fn()}
      />
      <F0AmountCalculator
        label="With hint"
        locale="en-US"
        units="%"
        hint="Enter a value between 0 and 100"
        inputWidth="160px"
        onChange={fn()}
      />
      <F0AmountCalculator
        label="With error"
        locale="en-US"
        units="%"
        error="Value must be between 0 and 100"
        extraContent="of 300,00 €"
        inputWidth="160px"
        onChange={fn()}
      />
      <F0AmountCalculator
        label="With warning"
        locale="en-US"
        units="%"
        status={{ type: "warning", message: "Value is outside normal range" }}
        extraContent="of 300,00 €"
        inputWidth="160px"
        onChange={fn()}
      />
      <F0AmountCalculator
        label="Disabled"
        locale="en-US"
        units="%"
        value={25}
        disabled
        extraContent="of 300,00 €"
        inputWidth="160px"
        onChange={fn()}
      />
    </div>
  ),
}

// ─── With step / min / max ───────────────────────────────────────────────────

export const InlineWithStep: Story = {
  name: "Inline — step, min, max",
  args: {
    units: "%",
    step: 1,
    min: 0,
    max: 100,
    extraContent: "of 300,00 €",
    inputWidth: "160px",
  },
}

// ─── Disabled ────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: {
    units: "%",
    value: 25,
    disabled: true,
    extraContent: "of 300,00 €",
    inputWidth: "160px",
  },
}

// ─── Snapshot ────────────────────────────────────────────────────────────────

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({ width: "100%" })),
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: 400 }}>
      {/* Inline — plain */}
      <F0AmountCalculator
        label="Plain"
        locale="en-US"
        units="%"
        onChange={fn()}
      />
      {/* Inline — with extraContent */}
      <F0AmountCalculator
        label="With extra content"
        locale="en-US"
        units="%"
        extraContent="of 300,00 €"
        inputWidth="160px"
        onChange={fn()}
      />
      {/* Inline — hint */}
      <F0AmountCalculator
        label="With hint"
        locale="en-US"
        units="%"
        extraContent="of 300,00 €"
        inputWidth="160px"
        hint="Enter a value between 0 and 100"
        onChange={fn()}
      />
      {/* Inline — error */}
      <F0AmountCalculator
        label="With error"
        locale="en-US"
        units="%"
        extraContent="of 300,00 €"
        inputWidth="160px"
        error="Value must be between 0 and 100"
        onChange={fn()}
      />
      {/* Inline — warning */}
      <F0AmountCalculator
        label="With warning"
        locale="en-US"
        units="%"
        extraContent="of 300,00 €"
        inputWidth="160px"
        status={{ type: "warning", message: "Value is outside normal range" }}
        onChange={fn()}
      />
      {/* Inline — disabled */}
      <F0AmountCalculator
        label="Disabled"
        locale="en-US"
        units="%"
        value={25}
        disabled
        extraContent="of 300,00 €"
        inputWidth="160px"
        onChange={fn()}
      />
      {/* Popover */}
      <div className="mb-64">
        <F0AmountCalculator
          label="Popover (open)"
          locale="en-US"
          units="%"
          extraContent="of 300,00 €"
          inputWidth="160px"
          popover={{ open: true, onOpenChange: fn() }}
          onChange={fn()}
        />
      </div>
    </div>
  ),
}
