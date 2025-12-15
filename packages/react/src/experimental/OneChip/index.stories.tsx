import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import * as Icons from "../../icons/app"
import { Chip } from "./index"

const meta = {
  component: Chip,
  title: "Chip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    label: {
      description: "The label of the chip",
    },
    variant: {
      description: "The variant of the chip",
      options: ["default", "selected"],
      control: { type: "select" },
    },
    avatar: {
      description: "If defined, an avatar will be displayed in the chip",
    },
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "If defined, an icon will be displayed in the chip",
    },
    onClose: {
      description: "If defined, the close icon will be displayed and the chip will be clickable",
    },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label",
    variant: "default",
  },
}

export const WithClose: Story = {
  args: {
    label: "Label",
    variant: "default",
  },
  render: () => {
    const [chips, setChips] = useState([
      { id: 1, label: "First Chip" },
      { id: 2, label: "Second Chip" },
      { id: 3, label: "Third Chip" },
    ])

    const handleClose = (id: number) => {
      setChips((prevChips) => prevChips.filter((chip) => chip.id !== id))
    }

    return (
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.label}
            variant="default"
            onClose={() => handleClose(chip.id)}
          />
        ))}
      </div>
    )
  },
}

export const WithAvatar: Story = {
  args: {
    label: "Dani Moreno",
    variant: "default",
    avatar: {
      type: "person",
      firstName: "Dani",
      lastName: "Moreno",
      src: "/avatars/person01.jpg",
    },
  },
  render: ({ icon: _icon, ...args }) => (
    <div className="flex flex-wrap gap-2">
      <Chip {...args} />
      <Chip
        {...args}
        label="Design engineers"
        avatar={{
          type: "team",
          name: "Design engineers",
        }}
      />
      <Chip
        {...args}
        label="Factorial"
        avatar={{
          type: "company",
          name: "Factorial",
          src: "/avatars/factorial.png",
        }}
      />
    </div>
  ),
}

export const WithIcon: Story = {
  args: {
    label: "Label",
    icon: Icons.Placeholder,
  },
}

export const SelectedWithClose: Story = {
  args: {
    label: "Label",
    variant: "selected",
  },
  render: () => {
    const [chips, setChips] = useState([
      { id: 1, label: "First Chip" },
      { id: 2, label: "Second Chip" },
      { id: 3, label: "Third Chip" },
    ])

    const handleClose = (id: number) => {
      setChips((prevChips) => prevChips.filter((chip) => chip.id !== id))
    }

    return (
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip
            key={chip.id}
            label={chip.label}
            variant="selected"
            onClose={() => handleClose(chip.id)}
          />
        ))}
      </div>
    )
  },
}
