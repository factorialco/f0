import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { Placeholder } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0NumberInput } from "../index"

const meta = {
  render: (props) => <F0NumberInput key={JSON.stringify(props)} {...props} />,
  title: "Inputs/Number input",
  component: F0NumberInput,
  tags: ["stable"],
  args: {
    disabled: false,
    placeholder: "Placeholder text here",
    locale: "en-US",
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

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {
    label: "Snapshot",
  },
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Sizes</h3>
        <F0NumberInput locale="en-US" label="Small" size="sm" value={42} />
        <F0NumberInput
          locale="en-US"
          label="Medium (default)"
          size="md"
          value={42}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">States</h3>
        <F0NumberInput locale="en-US" label="Default" value={42} />
        <F0NumberInput locale="en-US" label="Disabled" disabled value={42} />
        <F0NumberInput
          locale="en-US"
          label="With units"
          value={42}
          units="EUR"
        />
        <F0NumberInput
          locale="en-US"
          label="With stepper"
          value={3}
          step={1}
          min={0}
          max={10}
        />
        <F0NumberInput
          locale="en-US"
          label="With error"
          value={42}
          error="Error message"
        />
      </section>
    </div>
  ),
}
