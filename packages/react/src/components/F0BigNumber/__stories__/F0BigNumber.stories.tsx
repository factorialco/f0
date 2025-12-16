import type { Meta, StoryObj } from "@storybook/react-vite"
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
    formatter: (value: number | null) => value?.toLocaleString() ?? "-",
    value: {
      value: 1000000,
      units: "USD",
      unitsPosition: "left",
    },
    label: "Total Revenue",
    comparison: {
      value: 1000000,
    },
  },
}
