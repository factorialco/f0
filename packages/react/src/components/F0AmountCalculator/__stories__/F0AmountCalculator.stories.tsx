import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AmountCalculator } from "../F0AmountCalculator"

const meta = {
  title: "Amount Calculator",
  component: F0AmountCalculator,
  tags: ["stable", "autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof F0AmountCalculator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "0,0",
    units: "%",
  },
}

export const WithValue: Story = {
  args: {
    value: 15,
    units: "%",
  },
}

export const WithBaseAmount: Story = {
  args: {
    value: 10,
    units: "%",
    baseAmount: 0,
    currency: "€",
  },
}

export const CustomUnits: Story = {
  args: {
    placeholder: "0,0",
    units: "€",
  },
}

export const Disabled: Story = {
  args: {
    value: 25,
    units: "%",
    disabled: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const baseAmount = 300
    const [percentage, setPercentage] = useState<number | null>(null)
    const computedAmount =
      percentage != null ? (baseAmount * percentage) / 100 : baseAmount

    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-f1-foreground-secondary">
          Field value: {computedAmount} €
        </p>
        <F0AmountCalculator
          value={percentage}
          onChange={setPercentage}
          units="%"
          baseAmount={baseAmount}
          currency="€"
        />
      </div>
    )
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4">
      <F0AmountCalculator placeholder="0,0" units="%" />
      <F0AmountCalculator value={15} units="%" />
      <F0AmountCalculator value={10} units="%" baseAmount={300} currency="€" />
      <F0AmountCalculator value={25} units="%" disabled />
      <F0AmountCalculator placeholder="0,0" units="€" />
    </div>
  ),
}
