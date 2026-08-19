import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import * as AIIcons from "@/icons/ai"
import * as AnimatedIcons from "@/icons/animated"
import * as Icons from "@/icons/app"
import * as ModuleIcons from "@/icons/modules"
import * as SpecialIcons from "@/icons/special"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { snapshotMatrix } from "@/lib/storybook-utils/snapshotMatrix"

import { F0Icon, type IconName } from "../index"

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
    ...dataTestIdArgs,
  },
  parameters: {
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  tags: ["!autodocs", "stable"],
  args: {
    "aria-hidden": true,
  },
} satisfies Meta<ComponentProps<typeof F0Icon>>

export default meta
// `StoryObj<typeof F0Icon>` rather than `StoryObj<typeof meta>`: the latter
// computes required-vs-optional args across every prop, and multiplying the
// ~480 props inherited from `SVGProps` by the icon-name union overflows TS's
// union complexity limit (TS2590).
type Story = StoryObj<typeof F0Icon>

export const App: Story = {
  args: {
    size: "lg",
    icon: Icons.ChartLine,
  },
}

const NAMES = [
  "chart-line",
  "pencil",
  "heading-1",
  "modules:payroll",
  "modules:calendar",
  "ai:summary",
] as const satisfies readonly IconName[]

/**
 * `icon` also accepts a kebab-case name, which avoids importing the component.
 * App icons are unprefixed; other sets carry their namespace — which is what
 * keeps `calendar` and `modules:calendar` distinct.
 */
export const ByName: Story = {
  args: { size: "lg" },
  argTypes: { icon: { table: { disable: true } } },
  render: ({ size }: ComponentProps<typeof F0Icon>) => (
    <div className="flex items-center gap-4">
      {NAMES.map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <F0Icon icon={name} size={size} aria-hidden="true" />
          <code className="text-xs text-f1-foreground-secondary">{name}</code>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    // One SVG per name proves each namespace resolves through the registry.
    await expect(canvasElement.querySelectorAll("svg")).toHaveLength(
      NAMES.length
    )
  },
}

export const WithDataTestId: Story = {
  args: {
    size: "lg",
    icon: Icons.ChartLine,
    dataTestId: "my-test-icon",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-icon")).toBeInTheDocument()
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
          aria-hidden="true"
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

export const AI: Story = {
  args: {
    size: "md",
    icon: AIIcons.Summary,
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(AIIcons),
      mapping: AIIcons,
    },
  },
}

export const Snapshot: Story = {
  ...snapshotMatrix(F0Icon, {
    baseArgs: { icon: Icons.ChartLine, "aria-hidden": true },
    rows: { arg: "size", values: ["xs", "sm", "md", "lg"] },
    cols: {
      arg: "color",
      values: [
        "default",
        "bold",
        "accent",
        "info",
        "warning",
        "positive",
        "critical",
      ],
    },
  }),
  args: { icon: Icons.ChartLine },
  parameters: withSnapshot({}),
}
