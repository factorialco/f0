import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { BigNumberProps } from "../types"

import { F0BigNumber } from ".."

const meta = {
  component: F0BigNumber,
  title: "BigNumber",
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs", "stable"],
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
  args: {
    // Default comparison with no numeric value: satisfies the required
    // `comparison` prop while keeping the comparison tag hidden unless a
    // story overrides it with a real value.
    comparison: { numericValue: { value: undefined } },
  },
  decorators: [
    (Story) => (
      <div className="h-60 w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0BigNumber>

export default meta
type Story = StoryObj<typeof meta>

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
    await expect(canvas.getByTestId("my-test-bignumber")).toBeInTheDocument()
  },
}

export const WithComparison: Story = {
  tags: ["no-sidebar"],
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
  tags: ["no-sidebar"],
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
  tags: ["no-sidebar"],
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

const placeholderArgs = {
  value: { value: 1000000, units: "$", unitsPosition: "prepend" as const },
  comparison: {
    numericValue: { value: 900000, units: "$", unitsPosition: "prepend" as const },
  },
} satisfies BigNumberProps

export const Skeleton: Story = {
  tags: ["no-sidebar"],
  args: placeholderArgs,
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-2">
      <F0BigNumber.Skeleton />
    </div>
  ),
}

export const DoDontDoCase: Story = {
  tags: ["no-sidebar"],
  args: {
    value: { value: 12450, units: "$", unitsPosition: "prepend" as const },
    label: "Monthly revenue",
    trend: true,
    comparisonHint: "vs last month",
    comparison: {
      numericValue: { value: 10800, units: "$", unitsPosition: "prepend" as const },
    },
  },
}

export const DoDontDontCase: Story = {
  tags: ["no-sidebar"],
  args: {
    value: { value: 12450, units: "$", unitsPosition: "prepend" as const },
    label: "Revenue this month compared to the previous month after adjustments",
    comparison: {
      numericValue: { value: 10800, units: "$", unitsPosition: "prepend" as const },
    },
  },
}

export const Snapshot: Story = {
  args: placeholderArgs,
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
