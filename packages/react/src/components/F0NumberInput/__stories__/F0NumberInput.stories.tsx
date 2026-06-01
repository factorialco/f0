import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { Placeholder } from "@/icons/app"

import { F0NumberInput } from "../index"

const meta = {
  render: (props) => <F0NumberInput key={JSON.stringify(props)} {...props} />,
  title: "Inputs/Number input",
  component: F0NumberInput,
  tags: ["autodocs", "experimental"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
    locale: "en-US",
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: { type: "number" },
    },
    locale: {
      options: ["en-US", "es-ES", "pt-BR"],
      control: { type: "select" },
    },
    maxDecimals: {
      control: { type: "number" },
    },
    units: {
      description: "Units to append to the value",
      control: { type: "text" },
    },
    inputWidth: {
      description:
        'CSS width for the input area when `extraContent` is present. `"auto"` (default) shrink-wraps content.',
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"auto"' },
      },
    },
    extraContent: {
      description:
        'Context rendered to the right of the input, e.g. `"of 300,00 €"`.',
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
    popover: {
      description:
        "When provided, NumberInput renders a trigger button and shows the field in a popover.",
      control: { type: "object" },
      table: {
        type: {
          summary: "NumberInputPopoverConfig | undefined",
          detail:
            "{ icon?: IconType; side?: 'top'|'bottom'|'left'|'right'; align?: 'start'|'center'|'end'; open?: boolean; onOpenChange?: (open: boolean) => void; triggerLabel?: string; commitMode?: 'immediate'|'deferred'; apply?: { label?: string; icon?: IconType; closeOnApply?: boolean } }",
        },
      },
    },
  },
  parameters: {
    jsx: {
      filterProps: (_: unknown, propName: string) => propName !== "key",
    },
  },
} satisfies Meta<typeof F0NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: "Label text here",
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(props.value ?? 1)
    return <F0NumberInput {...props} value={value} onChange={setValue} />
  },
}

export const WithStep: Story = {
  args: {
    label: "Label text here",
    min: 1,
    max: 5,
    step: 1,
    units: "EUR",
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(props.value ?? 1)
    return (
      <F0NumberInput
        {...props}
        value={value}
        onChange={setValue}
        units={props.units}
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    label: "Label text here",
    value: 32.5,
    disabled: true,
    locale: "es-ES",
  },
}

export const WithLabel: Story = {
  args: {
    label: "Label text here",
  },
}

export const WithHiddenLabel: Story = {
  args: {
    label: "Label text here",
    hideLabel: true,
  },
}

export const WithLabelIcon: Story = {
  args: {
    label: "Label text here",
    labelIcon: Placeholder,
  },
}

export const WithIcon: Story = {
  args: {
    label: "Label text here",
    icon: Placeholder,
  },
}

export const WithError: Story = {
  args: {
    label: "Label text here",
    error: "Error message here",
  },
}

export const WithMaxLength: Story = {
  args: {
    label: "Label text here",
    maxLength: 10,
  },
}

export const Clearable: Story = {
  args: {
    label: "Label text here",
    clearable: true,
  },
}

export const WithUnits: Story = {
  args: {
    label: "Insert amount",
    units: "EUR",
  },
}

export const InlineWithContext: Story = {
  args: {
    label: "Discount",
    placeholder: "0",
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "100px",
  },
}

export const AsPopover: Story = {
  args: {
    label: "Discount",
    hideLabel: true,
    placeholder: "0",
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "100px",
    popover: {
      triggerLabel: "Discount",
    },
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(null)
    return (
      <div className="flex items-center gap-2">
        <NumberInput {...props} value={value} onChange={setValue} />
        <span className="text-f1-foreground-secondary text-sm">
          {value != null ? `${value}%` : "—"}
        </span>
      </div>
    )
  },
}

export const AsPopoverDeferredApply: Story = {
  args: {
    label: "Discount",
    hideLabel: true,
    placeholder: "0",
    units: "%",
    extraContent: "of 300,00 €",
    inputWidth: "100px",
    popover: {
      triggerLabel: "Discount",
      commitMode: "deferred",
      apply: { label: "Apply" },
    },
  },
  render: (props) => {
    const [value, setValue] = useState<number | null>(null)
    return (
      <div className="flex items-center gap-2">
        <NumberInput {...props} value={value} onChange={setValue} />
        <span className="text-f1-foreground-secondary text-sm">
          Committed: {value != null ? `${value}%` : "—"}
        </span>
      </div>
    )
  },
}
