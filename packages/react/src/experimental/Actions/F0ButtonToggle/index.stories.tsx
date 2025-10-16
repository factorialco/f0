import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Microphone, MicrophoneNegative, Placeholder } from "../../../icons/app"
import { F0ButtonToggle } from "./index"

const meta = {
  title: "Actions/ButtonToggle",
  component: F0ButtonToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  args: {
    onSelectedChange: (selected) => {
      console.log("Button toggle clicked", selected)
    },
    label: "Toggle me",
    size: "md",
    selected: false,
    disabled: false,
  },
  argTypes: {
    selected: {
      control: "boolean",
      description: "Whether the button is in selected/active state.",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "Sets the button size. 'md' for desktop, 'sm' for compact/secondary actions.",
    },
    label: {
      control: "text",
      description:
        "The accessible label for the button. Required for accessibility.",
    },
    hideLabel: {
      control: "boolean",
      description:
        "Whether to hide the label visually. When false, the label will be displayed next to the icon. Defaults to true.",
    },
    icon: {
      description: "Icon to display in the button. Required prop.",
    },
    disabled: {
      control: "boolean",
      description:
        "The button is inactive and does not respond to user interaction.",
    },
    onSelectedChange: {
      action: "selected",
      description: "Callback fired when the button is selected.",
    },
  },
} satisfies Meta<typeof F0ButtonToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Default Toggle",
    icon: Placeholder,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)

    return (
      <F0ButtonToggle
        {...args}
        icon={selected ? Microphone : MicrophoneNegative}
        selected={selected}
        onSelectedChange={setSelected}
      />
    )
  },
}

export const WithVisibleLabel: Story = {
  args: {
    label: "Microphone",
    icon: Placeholder,
    hideLabel: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState(false)

    return (
      <F0ButtonToggle
        {...args}
        icon={selected ? Microphone : MicrophoneNegative}
        selected={selected}
        onSelectedChange={setSelected}
      />
    )
  },
}
