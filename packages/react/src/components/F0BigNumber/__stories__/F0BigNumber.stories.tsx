import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { BigNumberProps } from "../types"

import { F0BigNumber } from ".."

const meta: Meta<typeof F0BigNumber> = {
  component: F0BigNumber,
  title: "BigNumber",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A big number component that displays a large number with a label.",
          "The component displays the value and the label, and the comparison value (if provided).",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    value: {
      control: "object",
      description: "The value of the big number",
      table: {
        type: { summary: "NumericWithFormatter | Numeric" },
      },
    },
    label: {
      control: "text",
      description: "The label of the big number",
      table: {
        type: { summary: "string" },
      },
    },
    comparisonHint: {
      control: "text",
      description: "The hint text to display next to the comparison value",
      table: {
        type: { summary: "string" },
      },
    },
    comparison: {
      control: "object",
      description: "The comparison of the big number",
      table: {
        type: { summary: "NumericWithFormatter | Numeric" },
      },
    },
    trend: {
      control: "object",
      description:
        "Whether to show the trend and trend configuration (the invert status). Requires a comparison value. It will render the percentage of change between the value and the comparison value.",
      table: {
        type: { summary: "boolean | TrendConfig" },
      },
    },
    ...dataTestIdArgs,
  },
  decorators: [
    (Story) => (
      <div className="h-60 w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof F0BigNumber>

export const Default: Story = {
  args: {
    value: {
      value: 1000000,
      units: "$",
      unitsPosition: "prepend" as const,
    },
    label: "Total Revenue",
  },
}

export const WithDataTestId: Story = {
  args: {
    value: {
      value: 1000000,
      units: "$",
      unitsPosition: "prepend" as const,
    },
    label: "BigNumber with Test ID",
    dataTestId: "my-test-bignumber",
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const root = canvas
      .getByText("BigNumber with Test ID")
      .closest("[data-testid]")
    await expect(root).toHaveAttribute("data-testid", "my-test-bignumber")
  },
}

export const WithComparison: Story = {
  args: {
    value: {
      value: 1000000,
      units: "$",
      unitsPosition: "prepend" as const,
    },
    label: "Total Revenue",
    comparisonHint: "vs last month",
    comparison: {
      numericValue: {
        value: 900000,
        units: "$",
        unitsPosition: "prepend" as const,
      },
    },
  },
}

export const WithTrend: Story = {
  args: {
    value: {
      value: 1000000,
      units: "$",
      unitsPosition: "prepend" as const,
    },
    label: "Total Revenue",
    trend: true,
    comparisonHint: "vs last month",
    comparison: {
      numericValue: {
        value: 900000,
        units: "$",
        unitsPosition: "prepend" as const,
      },
    },
  },
}

export const WithTrendInvertStatus: Story = {
  args: {
    value: {
      value: 1000000,
      units: "$",
      unitsPosition: "prepend" as const,
    },
    label: "Total Revenue",
    trend: {
      show: true,
      invertStatus: true,
    },
    comparisonHint: "vs last month",
    comparison: {
      numericValue: {
        value: 900000,
        units: "$",
        unitsPosition: "prepend" as const,
      },
    },
  },
}

export const Skeleton: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-2">
      <F0BigNumber.Skeleton />
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    const args = {
      default: Default.args,
      withComparison: WithComparison.args,
      withTrend: WithTrend.args,
      withTrendInvertStatus: WithTrendInvertStatus.args,
    }
    return (
      <div className="flex flex-col gap-4">
        {Object.entries(args).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-2">
            <h3 className="mb-2 text-lg font-semibold">{key}</h3>
            <F0BigNumber {...(value as BigNumberProps)} />
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-lg font-semibold">Skeleton</h3>
          <F0BigNumber.Skeleton />
        </div>
      </div>
    )
  },
}
