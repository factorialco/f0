import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0DurationInput } from "../F0DurationInput"

const meta = {
  component: F0DurationInput,
  tags: ["autodocs"],
  title: "DurationInput",
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
    size: { control: "radio", options: ["sm", "md"] },
    hideLabel: { control: "boolean" },
  },
} satisfies Meta<typeof F0DurationInput>

export default meta
type Story = StoryObj<typeof F0DurationInput>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 5400)
    return (
      <F0DurationInput
        {...args}
        label="Duration"
        value={value}
        onChange={setValue}
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

export const DisabledWithError: Story = {
  render: () => {
    return (
      <F0DurationInput
        label="Duration"
        value={0}
        onChange={() => {}}
        disabled
        status={{ type: "error", message: "Invalid duration" }}
        units={["hours", "minutes", "seconds"]}
      />
    )
  },
}
