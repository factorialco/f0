import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, within } from "storybook/test"
import { F0Checkbox } from "../F0Checkbox"

const meta = {
  component: F0Checkbox,
  tags: ["autodocs", "experimental"],
  title: "Checkbox",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A checkbox component that is used to select items.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title of the checkbox",
    },
    id: {
      control: "text",
      description: "The id of the checkbox",
    },
    checked: {
      control: "boolean",
      description: "The checked state of the checkbox",
    },
    onCheckedChange: {
      control: false,
      description: "The callback function that is called when the checkbox is checked",
    },
    indeterminate: {
      control: "boolean",
      description: "Whether the checkbox is indeterminate",
      defaultValue: { summary: false },
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
      defaultValue: { summary: false },
    },
    value: {
      control: "text",
      description: "The value of the checkbox",
    },
  },
} satisfies Meta<typeof F0Checkbox>

export default meta
type Story = StoryObj<typeof F0Checkbox>

export const Default: Story = {
  args: {
    title: "Checkbox",
    "data-test": "foo",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <F0Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkbox = canvas.getByRole("checkbox")
    await expect(checkbox.dataset.test).toBe("foo")
  },
}

export const Disabled: Story = {
  args: {
    title: "Disabled checkbox",
    disabled: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <F0Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Indeterminate: Story = {
  args: {
    title: "Indeterminate checkbox",
    indeterminate: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false)
    return <F0Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}

export const Checked: Story = {
  args: {
    title: "Checked checkbox",
    checked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(true)
    return <F0Checkbox {...args} checked={checked} onCheckedChange={setChecked} />
  },
}
