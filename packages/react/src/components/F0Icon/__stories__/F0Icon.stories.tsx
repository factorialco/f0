import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import * as AnimatedIcons from "@/icons/animated"
import * as Icons from "@/icons/app"
import * as ModuleIcons from "@/icons/modules"
import * as SpecialIcons from "@/icons/special"
import { ComponentProps } from "react"
import { F0Icon } from "../index"

const meta = {
  title: "Icon",
  component: F0Icon,
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "Select an icon to display",
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
      description: "Size of the icon",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "stable"],
} satisfies Meta<ComponentProps<typeof F0Icon>>

export default meta
type Story = StoryObj<typeof meta>

export const App: Story = {
  args: {
    size: "lg",
    icon: Icons.ChartLine,
  },
}

export const Module: Story = {
  args: {
    size: "lg",
    icon: ModuleIcons.Calendar,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(ModuleIcons),
      mapping: ModuleIcons,
    },
  },
}

export const Animated: Story = {
  args: {
    size: "md",
    icon: AnimatedIcons.HomeAnimated,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(AnimatedIcons),
      mapping: AnimatedIcons,
      description: "Select an icon to display",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size of the icon",
    },
  },
  render: ({ size, icon }: ComponentProps<typeof F0Icon>) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <div
        className="flex items-center justify-center rounded-lg p-4 transition-colors hover:bg-f1-background-secondary"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <F0Icon
          icon={icon}
          state={isHovered ? "animate" : "normal"}
          size={size}
        />
      </div>
    )
  },
}

export const Special: Story = {
  args: {
    size: "md",
    icon: SpecialIcons.One,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(SpecialIcons),
      mapping: SpecialIcons,
    },
    color: {
      control: { type: "color" },
    },
  },
}

export const WithTooltip: Story = {
  args: {
    size: "md",
    icon: Icons.ChartLine,
    tooltip: "Tooltip",
  },
}
