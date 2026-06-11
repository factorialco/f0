import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type { F0AiInsightCardProps, SparklineDataPoint } from "../types"

import { F0AiInsightCard } from ".."
import { contentTypes } from "../types"

const sampleSparklineData: SparklineDataPoint[] = [
  { value: 8 },
  { value: 14 },
  { value: 11 },
  { value: 19 },
  { value: 13 },
  { value: 22 },
  { value: 16 },
  { value: 12 },
  { value: 20 },
  { value: 15 },
  { value: 25 },
  { value: 18 },
  { value: 28 },
  { value: 21 },
  { value: 30 },
  { value: 24 },
  { value: 32 },
]

const sampleSparklineDataNegative: SparklineDataPoint[] = [
  { value: 32 },
  { value: 28 },
  { value: 30 },
  { value: 24 },
  { value: 27 },
  { value: 20 },
  { value: 23 },
  { value: 16 },
  { value: 19 },
  { value: 12 },
  { value: 15 },
  { value: 9 },
  { value: 13 },
  { value: 7 },
  { value: 10 },
  { value: 5 },
  { value: 8 },
]

const meta = {
  component: F0AiInsightCard,
  title: "AI/AiInsightCard",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    content: {
      control: "select",
      options: contentTypes,
      description: "Content type determining what renders in the card body",
    },
  },
} satisfies Meta<typeof F0AiInsightCard>

export default meta
type Story = StoryObj<typeof F0AiInsightCard>

const textArgs: F0AiInsightCardProps = {
  content: "text",
  description: "Department",
  heading: "Total headcount across all departments",
  label: "HR Analytics",
  onClick: fn(),
  onAskOne: fn(),
}

export const Text: Story = {
  render: () => <F0AiInsightCard {...textArgs} />,
}

const textOnlyArgs: F0AiInsightCardProps = {
  content: "text",
  description: "Department",
  heading: "Total headcount across all departments",
  onClick: fn(),
  onAskOne: fn(),
}

export const TextOnly: Story = {
  render: () => <F0AiInsightCard {...textOnlyArgs} />,
}

const personArgs: F0AiInsightCardProps = {
  content: "person",
  description: "Top performer",
  heading: "Jane Cooper",
  label: "Engineering",
  avatar: {
    firstName: "Jane",
    lastName: "Cooper",
    src: "",
  },
  onClick: fn(),
  onAskOne: fn(),
}

export const Person: Story = {
  render: () => <F0AiInsightCard {...personArgs} />,
}

const peopleArgs: F0AiInsightCardProps = {
  content: "people",
  description: "Team members",
  heading: "Engineering leads with outstanding reviews",
  label: "3 people",
  avatars: [
    { firstName: "Jane", lastName: "Cooper", src: "" },
    { firstName: "John", lastName: "Doe", src: "" },
    { firstName: "Alice", lastName: "Smith", src: "" },
  ],
  onClick: fn(),
  onAskOne: fn(),
}

export const People: Story = {
  render: () => <F0AiInsightCard {...peopleArgs} />,
}

const teamArgs: F0AiInsightCardProps = {
  content: "team",
  description: "Highest growth",
  heading: "Product Design",
  label: "12 members",
  avatar: {
    name: "Product Design",
    src: "",
  },
  onClick: fn(),
  onAskOne: fn(),
}

export const Team: Story = {
  render: () => <F0AiInsightCard {...teamArgs} />,
}

const companyArgs: F0AiInsightCardProps = {
  content: "company",
  description: "Entity",
  heading: "Factorial Inc.",
  label: "Barcelona",
  avatar: {
    name: "Factorial",
    src: "",
  },
  onClick: fn(),
  onAskOne: fn(),
}

export const Company: Story = {
  render: () => <F0AiInsightCard {...companyArgs} />,
}

const alertArgs: F0AiInsightCardProps = {
  content: "alert",
  description: "Alert",
  heading: "3 employees with expiring contracts",
  level: "warning",
  alertLabel: "Needs attention",
  onClick: fn(),
  onAskOne: fn(),
}

export const Alert: Story = {
  render: () => <F0AiInsightCard {...alertArgs} />,
}

const balancePositiveArgs: F0AiInsightCardProps = {
  content: "balance",
  description: "Revenue",
  heading: "Monthly recurring revenue growth",
  balance: {
    amount: {
      value: 12450,
      units: "$",
      unitsPosition: "prepend",
    },
    percentage: {
      value: 12.5,
    },
  },
  onClick: fn(),
  onAskOne: fn(),
}

export const BalancePositive: Story = {
  render: () => <F0AiInsightCard {...balancePositiveArgs} />,
}

const balanceNegativeArgs: F0AiInsightCardProps = {
  content: "balance",
  description: "Attrition",
  heading: "Employee turnover rate this quarter",
  balance: {
    amount: {
      value: -3200,
      units: "$",
      unitsPosition: "prepend",
    },
    percentage: {
      value: -8.3,
    },
  },
  onClick: fn(),
  onAskOne: fn(),
}

export const BalanceNegative: Story = {
  render: () => <F0AiInsightCard {...balanceNegativeArgs} />,
}

const sparklinePositiveArgs: F0AiInsightCardProps = {
  content: "sparkline",
  description: "Trend",
  heading: "Employee satisfaction score",
  data: sampleSparklineData,
  label: "+992",
  onClick: fn(),
  onAskOne: fn(),
}

export const SparklinePositive: Story = {
  render: () => <F0AiInsightCard {...sparklinePositiveArgs} />,
}

const sparklineNegativeArgs: F0AiInsightCardProps = {
  content: "sparkline",
  description: "Trend",
  heading: "Attrition rate",
  data: sampleSparklineDataNegative,
  label: "-15%",
  onClick: fn(),
  onAskOne: fn(),
}

export const SparklineNegative: Story = {
  render: () => <F0AiInsightCard {...sparklineNegativeArgs} />,
}

const selectedArgs: F0AiInsightCardProps = {
  content: "text",
  description: "Selected card",
  heading: "This card is in the selected state with gradient border",
  selected: true,
  onClick: fn(),
  onAskOne: fn(),
}

export const Selected: Story = {
  render: () => <F0AiInsightCard {...selectedArgs} />,
}

export const Skeleton: Story = {
  parameters: withSnapshot({}),
  render: () => <F0AiInsightCard.Skeleton />,
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    const stories = [
      { key: "Text", args: textArgs },
      { key: "TextOnly", args: textOnlyArgs },
      { key: "Person", args: personArgs },
      { key: "People", args: peopleArgs },
      { key: "Team", args: teamArgs },
      { key: "Company", args: companyArgs },
      { key: "Alert", args: alertArgs },
      { key: "BalancePositive", args: balancePositiveArgs },
      { key: "BalanceNegative", args: balanceNegativeArgs },
      { key: "SparklinePositive", args: sparklinePositiveArgs },
      { key: "SparklineNegative", args: sparklineNegativeArgs },
      { key: "Selected", args: selectedArgs },
    ]

    return (
      <div className="flex flex-wrap gap-4">
        {stories.map(({ key, args }) => (
          <div key={key} className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-f1-foreground-secondary">
              {key}
            </h3>
            <F0AiInsightCard {...args} />
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-f1-foreground-secondary">
            Skeleton
          </h3>
          <F0AiInsightCard.Skeleton />
        </div>
      </div>
    )
  },
}
