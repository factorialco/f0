import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import * as Icons from "@/icons/app"
import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Chip } from "../index"
import { chipVariantValues } from "../types"

const meta = {
  title: "Chip",
  component: F0Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
  args: {
    label: "Label",
    variant: "default",
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: chipVariantValues,
      table: { type: { summary: chipVariantValues.join(" | ") } },
    },
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "If defined, an icon will be displayed in the chip",
      table: { type: { summary: "IconType" } },
    },
    avatar: {
      control: "object",
      description: "If defined, an avatar will be displayed in the chip",
    },
    onClose: {
      control: false,
      description:
        "If defined, the close icon will be displayed and the chip will be removable",
    },
  },
} satisfies Meta<typeof F0Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Label",
    variant: "default",
  },
}

export const Selected: Story = {
  args: {
    label: "Label",
    variant: "selected",
  },
}

export const WithClose: Story = {
  args: {
    label: "Label",
    onClose: fn(),
  },
}

export const SelectedWithClose: Story = {
  args: {
    label: "Label",
    variant: "selected",
    onClose: fn(),
  },
}

export const WithIcon: Story = {
  args: {
    label: "Label",
    icon: Icons.Placeholder,
  },
}

export const WithAvatar: Story = {
  args: {
    label: "Dani Moreno",
    avatar: {
      type: "person",
      firstName: "Dani",
      lastName: "Moreno",
      src: "/avatars/person01.jpg",
    },
  },
}

export const WithDeactivated: Story = {
  args: {
    label: "Deactivated User",
    deactivated: true,
    avatar: {
      type: "person",
      deactivated: true,
      firstName: "Deactivated",
      lastName: "User",
    },
  },
}

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({})),
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {chipVariantValues.map((variant) => (
          <F0Chip
            key={variant}
            label={`Variant: ${variant}`}
            variant={variant}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {chipVariantValues.map((variant) => (
          <F0Chip
            key={variant}
            label={`Removable: ${variant}`}
            variant={variant}
            onClose={() => {}}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        <F0Chip label="With icon" icon={Icons.Placeholder} />
        <F0Chip
          label="Dani Moreno"
          avatar={{
            type: "person",
            firstName: "Dani",
            lastName: "Moreno",
          }}
        />
        <F0Chip
          label="Deactivated"
          deactivated
          avatar={{
            type: "person",
            deactivated: true,
            firstName: "Deactivated",
            lastName: "User",
          }}
        />
      </div>
    </div>
  ),
}
