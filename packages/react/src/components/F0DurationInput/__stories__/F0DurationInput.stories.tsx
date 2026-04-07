import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0DurationInput } from ".."
import { durationInputSizes } from "../types"

const meta = {
  component: F0DurationInput,
  tags: ["autodocs", "stable"],
  title: "Input/Duration",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A compound input for entering time durations. Renders multiple editable numeric segments (days, hours, minutes, seconds) inside a single bordered container.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "number" },
    units: { control: false },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    readonly: { control: "boolean" },
    size: {
      control: "radio",
      options: [...durationInputSizes],
    },
    hideLabel: { control: "boolean" },
  },
} satisfies Meta<typeof F0DurationInput>

export default meta
type Story = StoryObj<typeof F0DurationInput>

export const Default: Story = {
  render: (args) => {
    const { label: labelArg, onChange: onChangeArg, ...restArgs } = args
    const [value, setValue] = useState(args.value ?? 5400)

    useEffect(() => {
      if (args.value !== undefined) {
        setValue(args.value)
      }
    }, [args.value])

    const handleChange = (nextValue: number) => {
      setValue(nextValue)
      onChangeArg?.(nextValue)
    }

    return (
      <F0DurationInput
        {...restArgs}
        label={labelArg ?? "Duration"}
        value={value}
        onChange={handleChange}
      />
    )
  },
}

export const AllUnits: Story = {
  render: () => {
    const [value, setValue] = useState(90061)
    return (
      <F0DurationInput
        label="Full duration"
        value={value}
        onChange={setValue}
        units={["days", "hours", "minutes", "seconds"]}
      />
    )
  },
}

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <F0DurationInput
        label="Duration"
        value={value}
        onChange={setValue}
        status={{ type: "error", message: "Duration is required" }}
      />
    )
  },
}

export const WithWarning: Story = {
  render: () => {
    const [value, setValue] = useState(36000)
    return (
      <F0DurationInput
        label="Duration"
        value={value}
        onChange={setValue}
        status={{
          type: "warning",
          message: "Exceeds standard working hours",
        }}
      />
    )
  },
}

export const WithInfo: Story = {
  render: () => {
    const [value, setValue] = useState(3600)
    return (
      <F0DurationInput
        label="Duration"
        value={value}
        onChange={setValue}
        status={{ type: "info", message: "Max 8 hours per day" }}
      />
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <F0DurationInput
        label="Duration"
        value={3600}
        onChange={() => {}}
        disabled
      />
    )
  },
}

export const DisabledWithError: Story = {
  render: () => {
    return (
      <F0DurationInput
        label="Duration"
        value={3661}
        onChange={() => {}}
        disabled
        units={["hours", "minutes", "seconds"]}
        status={{ type: "error", message: "This field has an error" }}
      />
    )
  },
}

export const Required: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    return (
      <F0DurationInput
        label="Minimum hours"
        value={value}
        onChange={setValue}
        required
      />
    )
  },
}

export const SmallSize: Story = {
  render: () => {
    const [value, setValue] = useState(5400)
    return (
      <F0DurationInput
        label="Duration"
        value={value}
        onChange={setValue}
        size="sm"
        required
      />
    )
  },
}

export const HiddenLabel: Story = {
  render: () => {
    const [value, setValue] = useState(1800)
    return (
      <F0DurationInput
        label="Duration"
        value={value}
        onChange={setValue}
        hideLabel
      />
    )
  },
}

export const CustomSuffixes: Story = {
  render: () => {
    const [value, setValue] = useState(5400)
    return (
      <F0DurationInput
        label="Duration"
        value={value}
        onChange={setValue}
        fields={{
          hours: { suffix: "hrs" },
          minutes: { suffix: "mins" },
        }}
      />
    )
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Sizes</h3>
        <F0DurationInput
          label="Medium (default)"
          value={5400}
          onChange={() => {}}
          size="md"
        />
        <F0DurationInput
          label="Small"
          value={5400}
          onChange={() => {}}
          size="sm"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Statuses</h3>
        <F0DurationInput label="Default" value={3600} onChange={() => {}} />
        <F0DurationInput
          label="Error"
          value={0}
          onChange={() => {}}
          status={{ type: "error", message: "Duration is required" }}
        />
        <F0DurationInput
          label="Warning"
          value={36000}
          onChange={() => {}}
          status={{
            type: "warning",
            message: "Exceeds standard hours",
          }}
        />
        <F0DurationInput
          label="Info"
          value={3600}
          onChange={() => {}}
          status={{ type: "info", message: "Max 8 hours per day" }}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">States</h3>
        <F0DurationInput
          label="Disabled"
          value={3600}
          onChange={() => {}}
          disabled
        />
        <F0DurationInput
          label="Disabled + Error"
          value={3661}
          onChange={() => {}}
          disabled
          units={["hours", "minutes", "seconds"]}
          status={{ type: "error", message: "This field has an error" }}
        />
        <F0DurationInput
          label="Required"
          value={0}
          onChange={() => {}}
          required
        />
        <F0DurationInput
          label="Hidden label"
          value={1800}
          onChange={() => {}}
          hideLabel
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Unit combinations</h3>
        <F0DurationInput
          label="All units"
          value={90061}
          onChange={() => {}}
          units={["days", "hours", "minutes", "seconds"]}
        />
        <F0DurationInput
          label="Hours + Minutes"
          value={5400}
          onChange={() => {}}
        />
        <F0DurationInput
          label="Days + Hours"
          value={90000}
          onChange={() => {}}
          units={["days", "hours"]}
        />
      </section>
    </div>
  ),
}
