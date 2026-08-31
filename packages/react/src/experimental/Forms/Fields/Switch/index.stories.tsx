import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { expect, within } from "storybook/test"

import { Switch } from "./index"

const meta = {
  component: Switch,
  tags: ["autodocs", "experimental"],
  title: "Switch",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the switch",
    },
    id: {
      control: "text",
      description: "The id of the switch",
    },
    checked: {
      control: "boolean",
      description: "The checked state of the switch",
    },
    onCheckedChange: {
      control: false,
      description:
        "The callback function that is called when the switch is toggled",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
      defaultValue: { summary: false },
    },
    value: {
      control: "text",
      description: "The value of the switch",
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    title: "Switch",
    "data-test": "switch-test",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const switchElement = canvas.getByRole("switch")
    await expect(switchElement.dataset.test).toBe("switch-test")
  },
}

export const Disabled: Story = {
  args: {
    title: "Disabled switch",
    disabled: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Checked: Story = {
  args: {
    title: "Checked switch",
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(true)
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const NoLabel: Story = {
  args: {
    hideLabel: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

/**
 * Regression guard for WCAG 2.2 SC 2.5.8 (Target Size, Minimum).
 *
 * Two switches sit 8px apart, closer than the 24px of clear space the spec's
 * spacing exception needs. That leaves the switch's own box as the only way to
 * satisfy the criterion, which is exactly the situation a form row or a card
 * footer creates. With the 20px (`h-5`) switch this story failed axe with
 * `target-size` on both controls; with the 24px hit area it passes on size
 * regardless of how close the neighbours are.
 *
 * `a11y: { test: "error" }` makes it blocking — the global default in
 * `.storybook/preview.tsx` is `todo`, which reports without failing.
 */
export const AdjacentTargets: Story = {
  parameters: {
    a11y: { test: "error" },
  },
  render: () => {
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(true)
    return (
      <div className="flex flex-row gap-2">
        <Switch
          title="Email alerts"
          hideLabel
          checked={first}
          onCheckedChange={setFirst}
        />
        <Switch
          title="Push alerts"
          hideLabel
          checked={second}
          onCheckedChange={setSecond}
        />
      </div>
    )
  },
}
