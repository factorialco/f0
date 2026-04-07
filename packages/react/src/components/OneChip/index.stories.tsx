import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"
import { useState } from "react"

import * as Icons from "../../icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { chipVariantOptions, F0Chip } from "./index"

const meta = {
  component: F0Chip,
  title: "Chip/Chip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  args: {
    onClick: fn(),
    onClose: fn(),
  },
  argTypes: {
    label: {
      description: "The label of the chip",
    },
    variant: {
      description: "The variant of the chip",
      options: chipVariantOptions,
      control: "select",
      table: {
        type: { summary: chipVariantOptions.join(" | ") },
      },
    },
    avatar: {
      description: "If defined, an avatar will be displayed in the chip",
      control: false,
    },
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "If defined, an icon will be displayed in the chip",
    },
    onClose: {
      description:
        "If defined, the close icon will be displayed and the chip will be clickable",
    },
    onClick: {
      description: "If defined, the chip will be clickable",
    },
    deactivated: {
      description:
        "If true, the label is rendered with reduced opacity to indicate a deactivated state",
      control: "boolean",
    },
  },
} satisfies Meta<typeof F0Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label",
    variant: "default",
    onClick: undefined,
    onClose: undefined,
  },
}

export const Clickable: Story = {
  args: {
    label: "Label",
    variant: "default",
    onClose: undefined,
  },
}

export const WithClose: Story = {
  args: {
    label: "Label",
    variant: "default",
    onClick: undefined,
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
          <F0Chip
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
    onClick: undefined,
    onClose: undefined,
    avatar: {
      type: "person",
      firstName: "Dani",
      lastName: "Moreno",
      src: "/avatars/person01.jpg",
    },
  },
  render: ({ icon: _icon, ...args }) => (
    <div className="flex flex-wrap gap-2">
      <F0Chip {...args} />
      <F0Chip
        {...args}
        label="Design engineers"
        avatar={{
          type: "team",
          name: "Design engineers",
        }}
      />
      <F0Chip
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

export const WithDeactivatedAvatarAndLabel: Story = {
  args: {
    label: "Deactivated User",
    variant: "default",
    deactivated: true,
    onClick: undefined,
    onClose: undefined,
    avatar: {
      type: "person",
      deactivated: true,
      firstName: "Deactivated",
      lastName: "User",
      src: "/avatars/person01.jpg",
    },
  },
  render: ({ icon: _icon, ...args }) => (
    <div className="flex flex-wrap gap-2">
      <F0Chip {...args} />
    </div>
  ),
}

export const WithIcon: Story = {
  args: {
    label: "Label",
    icon: Icons.Placeholder,
    onClick: undefined,
    onClose: undefined,
  },
}

export const SelectedWithClose: Story = {
  args: {
    label: "Label",
    variant: "selected",
    onClick: undefined,
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
          <F0Chip
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

export const Snapshot: Story = {
  args: {
    label: "Snapshot",
  },
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {/* default variant */}
      <div className="flex flex-wrap gap-2">
        <F0Chip label="Default" />
        <F0Chip label="Clickable" onClick={() => {}} />
        <F0Chip label="With close" onClose={() => {}} />
        <F0Chip label="With icon" icon={Icons.Placeholder} />
      </div>
      {/* selected variant */}
      <div className="flex flex-wrap gap-2">
        <F0Chip label="Selected" variant="selected" />
        <F0Chip
          label="Selected + close"
          variant="selected"
          onClose={() => {}}
        />
      </div>
      {/* deactivated */}
      <div className="flex flex-wrap gap-2">
        <F0Chip
          label="Deactivated"
          deactivated
          avatar={{
            type: "person",
            firstName: "Deactivated",
            lastName: "User",
            src: "/avatars/person01.jpg",
            deactivated: true,
          }}
        />
      </div>
    </div>
  ),
}
