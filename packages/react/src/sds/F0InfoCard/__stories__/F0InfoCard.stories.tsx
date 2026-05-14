import type { Meta, StoryObj } from "@storybook/react-vite"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { Check, FileSigned, InfoCircle, Warning } from "@/icons/app"

import { F0InfoCard } from "../F0InfoCard"
import { f0InfoCardVariants } from "../types"

const meta: Meta<typeof F0InfoCard> = {
  component: F0InfoCard,
  title: "InfoCard",
  tags: ["experimental", "autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A colored wrapper card with an icon + title (primary line) + optional secondary line, plus an optional body slot for arbitrary content (tables, panels, lists). Use it to highlight a status or summary block in a feature surface.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: f0InfoCardVariants,
      description:
        "Color variant of the card. Use `positive` for success states, `warning` and `critical` for risk states, `info` for informational notices, and `neutral` for context blocks without sentiment.",
    },
    title: {
      description:
        "Title slot. Provide an icon, a primary line, and an optional secondary line.",
    },
    body: {
      control: false,
      description:
        "Optional body slot rendered below the title in a white inner panel. Pass any React node, including data tables or detail lists.",
    },
    ...dataTestIdArgs,
  },
} satisfies Meta<typeof F0InfoCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "positive",
    title: {
      icon: Check,
      primary: "Documents sent for signing",
      secondary: "1/2 signed · Sent Monday 23, 6:40 PM",
    },
  },
}

export const WithBody: Story = {
  args: {
    variant: "positive",
    title: {
      icon: FileSigned,
      primary: "Documents sent for signing",
      secondary: "1/2 signed · Sent Monday 23, 6:40 PM",
    },
    body: (
      <ul className="m-0 flex flex-col gap-2 p-3 text-base">
        <li>Hellen the HR — Signed</li>
        <li>Danilo Pereira — Awaiting signature</li>
      </ul>
    ),
  },
}

export const Variants: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[480px] flex-col gap-3">
      <F0InfoCard
        variant="neutral"
        title={{
          icon: InfoCircle,
          primary: "Neutral context",
          secondary: "Use when no sentiment is implied",
        }}
      />
      <F0InfoCard
        variant="info"
        title={{
          icon: InfoCircle,
          primary: "Heads up",
          secondary: "Informational message",
        }}
      />
      <F0InfoCard
        variant="positive"
        title={{
          icon: Check,
          primary: "Documents sent for signing",
          secondary: "1/2 signed · Sent Monday 23, 6:40 PM",
        }}
      />
      <F0InfoCard
        variant="warning"
        title={{
          icon: Warning,
          primary: "Action expiring soon",
          secondary: "Closes in 2 days",
        }}
      />
      <F0InfoCard
        variant="critical"
        title={{
          icon: Warning,
          primary: "Signature rejected",
          secondary: "1 signer declined",
        }}
      />
    </div>
  ),
}
