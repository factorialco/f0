import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useState } from "react"

import { expect, fn, userEvent, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0DurationInput } from ".."
import { durationInputSizes } from "../types"

const meta = {
  component: F0DurationInput,
  tags: ["stable", "!autodocs"],
  title: "Inputs/Duration input",
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
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
    allowNegative: { control: "boolean" },
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
  // 5400 is declared rather than left to the render fallback, because the play
  // function asserts against it.
  args: { value: 5400, onChange: fn() },
  // Covers the guarantees a duration input lives or dies on: one tab stop per
  // segment, raw values staying visible while typing and only normalising on
  // blur, and the segments never accepting anything but digits.
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const hours = canvas.getByLabelText("Hours")
    const minutes = canvas.getByLabelText("Minutes")

    await step("Starts at 1h 30min (5400s)", async () => {
      await expect(hours).toHaveValue("1")
      await expect(minutes).toHaveValue("30")
    })

    await step(
      "Gives each segment its own tab stop, in render order",
      async () => {
        hours.focus()
        await userEvent.tab()
        await expect(minutes).toHaveFocus()
      }
    )

    await step("Keeps an over-range value raw while editing", async () => {
      await userEvent.clear(minutes)
      await userEvent.type(minutes, "75")
      // 75 is deliberately not clamped to 59: rollover happens on blur, not
      // per keystroke, so the user still sees what they typed.
      await expect(minutes).toHaveValue("75")
      await expect(args.onChange).toHaveBeenLastCalledWith(8100)
      // One emit per edit (clear, "7", "5") and not one per render.
      await expect(args.onChange).toHaveBeenCalledTimes(3)
    })

    await step("Normalises the visible units on blur", async () => {
      await userEvent.tab()
      await expect(hours).toHaveValue("2")
      await expect(minutes).toHaveValue("15")
      // Blur reshuffles the segments without emitting: 8100s either way.
      await expect(args.onChange).toHaveBeenCalledTimes(3)
    })

    await step("Rejects non-digit keystrokes", async () => {
      await userEvent.type(hours, "a")
      await expect(hours).toHaveValue("2")
      // The value alone proves nothing here. handleFieldChange strips
      // non-digits, so an unfiltered "a" would still settle back to "2". The
      // call count is what shows onKeyDown stopped the event at the source.
      await expect(args.onChange).toHaveBeenCalledTimes(3)
    })
  },
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

export const AllowNegative: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "With `allowNegative`, a minus sign typed at the start of the first segment makes the whole duration negative (e.g. to adjust tracked time). `value` and `onChange` carry negative total seconds.",
      },
    },
  },
  // The minus rule is selection-dependent (only at caret 0 of the first
  // segment, only when no sign is present), which jsdom can only fake. The
  // unit tests drive it with synthetic keyDown events. This drives real
  // keystrokes and reads the emitted seconds back off the story's own readout.
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const hours = canvas.getByLabelText("Hours")

    await step("Starts at minus 1h 15min (-4500s)", async () => {
      await expect(hours).toHaveValue("-1")
      await expect(canvas.getByText("Value: -4500 seconds")).toBeVisible()
    })

    await step("Drops the sign when the first segment is emptied", async () => {
      await userEvent.clear(hours)
      await expect(canvas.getByText("Value: 900 seconds")).toBeVisible()
    })

    await step(
      "Takes a minus typed at the head of the first segment",
      async () => {
        await userEvent.type(hours, "-1")
        await expect(hours).toHaveValue("-1")
        await expect(canvas.getByText("Value: -4500 seconds")).toBeVisible()
      }
    )
  },
  render: () => {
    const [value, setValue] = useState(-4500)
    return (
      <div className="flex flex-col gap-2">
        <F0DurationInput
          label="Time adjustment"
          value={value}
          onChange={setValue}
          allowNegative
        />
        <span className="text-sm text-f1-foreground-secondary">
          Value: {value} seconds
        </span>
      </div>
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
          label="Readonly"
          value={5400}
          onChange={() => {}}
          readonly
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
        <F0DurationInput
          label="Negative duration"
          value={-4500}
          onChange={() => {}}
          allowNegative
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
