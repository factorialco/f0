import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Slider } from ".."
import { sliderTooltipModes } from "../types"

const meta = {
  component: F0Slider,
  tags: ["!autodocs"],
  title: "F0Slider",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A slider input for selecting a numeric value from a range. Supports labels, hints, status messages, tooltips, and keyboard navigation.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "number" },
    defaultValue: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    hideLabel: { control: "boolean" },
    minLabel: { control: "text" },
    maxLabel: { control: "text" },
    hint: { control: "text" },
    showTooltip: {
      control: "radio",
      options: [...sliderTooltipModes],
      table: { type: { summary: sliderTooltipModes.join(" | ") } },
    },
    formatValue: { control: false },
    onChange: { control: false },
  },
} satisfies Meta<typeof F0Slider>

export default meta
type Story = StoryObj<typeof F0Slider>

export const Default: Story = {
  render: (args) => {
    const { value: valueArg, onChange: onChangeArg, ...restArgs } = args
    const [value, setValue] = useState(valueArg ?? 50)

    useEffect(() => {
      if (valueArg !== undefined) {
        setValue(valueArg)
      }
    }, [valueArg])

    return (
      <div className="w-80">
        <F0Slider
          {...restArgs}
          label="Brightness"
          min={0}
          max={100}
          value={value}
          onChange={(next) => {
            setValue(next)
            onChangeArg?.(next)
          }}
        />
      </div>
    )
  },
}

export const WithRangeLabels: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="w-80">
      <F0Slider
        label="Budget"
        min={0}
        max={10000}
        defaultValue={5000}
        minLabel="€0"
        maxLabel="€10k"
        formatValue={(v) => `€${v.toLocaleString()}`}
      />
    </div>
  ),
}

export const WithHint: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="w-80">
      <F0Slider
        label="Volume"
        min={0}
        max={100}
        defaultValue={75}
        hint="Set the notification volume level"
      />
    </div>
  ),
}

export const CommitOnRelease: Story = {
  tags: ["!dev"],
  render: () => {
    const [live, setLive] = useState(40)
    const [committed, setCommitted] = useState(40)

    return (
      <div className="flex w-80 flex-col gap-2">
        <F0Slider
          label="Volume"
          min={0}
          max={100}
          value={live}
          onChange={setLive}
          onValueCommit={setCommitted}
          formatValue={(v) => `${v}%`}
        />
        <p className="text-sm text-f1-foreground-secondary">
          Live (onChange): {live}% · Committed (onValueCommit): {committed}%
        </p>
      </div>
    )
  },
}

export const WithStatus: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <F0Slider
        label="Warning"
        min={0}
        max={100}
        defaultValue={85}
        status={{
          type: "warning",
          message: "Value is close to the maximum",
        }}
      />
      <F0Slider
        label="Error"
        min={0}
        max={100}
        defaultValue={110}
        status={{
          type: "error",
          message: "Value exceeds the allowed range",
        }}
      />
      <F0Slider
        label="Info"
        min={0}
        max={100}
        defaultValue={50}
        status={{
          type: "info",
          message: "Value within normal range",
        }}
      />
    </div>
  ),
}

export const TooltipAlways: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="w-80 pt-6">
      <F0Slider
        label="Opacity"
        min={0}
        max={1}
        step={0.01}
        defaultValue={0.5}
        showTooltip="always"
        formatValue={(v) => `${Math.round(v * 100)}%`}
      />
    </div>
  ),
}

export const Disabled: Story = {
  tags: ["!dev"],
  render: () => (
    <div className="w-80">
      <F0Slider label="Disabled" min={0} max={100} defaultValue={50} disabled />
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-6 p-4 w-96">
      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Statuses</h3>
        <F0Slider
          label="Warning"
          min={0}
          max={100}
          defaultValue={85}
          status={{ type: "warning", message: "Near maximum" }}
        />
        <F0Slider
          label="Error"
          min={0}
          max={100}
          defaultValue={110}
          status={{ type: "error", message: "Out of range" }}
        />
        <F0Slider
          label="Info"
          min={0}
          max={100}
          defaultValue={50}
          status={{ type: "info", message: "Normal" }}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">States</h3>
        <F0Slider
          label="Disabled"
          min={0}
          max={100}
          defaultValue={50}
          disabled
        />
        <F0Slider
          label="Hidden label"
          min={0}
          max={100}
          defaultValue={50}
          hideLabel
          ariaLabel="Brightness"
        />
        <F0Slider
          label="Required"
          min={0}
          max={100}
          defaultValue={50}
          required
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Tooltip modes</h3>
        <F0Slider
          label="Tooltip always"
          min={0}
          max={100}
          defaultValue={50}
          showTooltip="always"
        />
        <F0Slider
          label="Tooltip on hover"
          min={0}
          max={100}
          defaultValue={50}
          showTooltip="onHover"
        />
        <F0Slider
          label="No tooltip"
          min={0}
          max={100}
          defaultValue={50}
          showTooltip="never"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">Range labels</h3>
        <F0Slider
          label="Budget range"
          min={0}
          max={10000}
          defaultValue={5000}
          minLabel="€0"
          maxLabel="€10k"
        />
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold">With hint</h3>
        <F0Slider
          label="Brightness"
          min={0}
          max={100}
          defaultValue={50}
          hint="Controls display brightness"
        />
      </section>
    </div>
  ),
}
