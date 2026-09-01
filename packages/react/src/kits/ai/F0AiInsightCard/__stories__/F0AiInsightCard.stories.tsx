import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, waitFor, within } from "storybook/test"

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
    a11y: { test: "error" },
  },
  tags: ["!autodocs", "stable"],
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
    heading: {
      description: "Main insight text, clamped to 3 lines",
    },
    description: {
      description: "Small secondary text above the heading",
    },
    label: {
      description:
        "Bottom label. Hidden for person, people, team, company, alert and balance content; required text for the sparkline pill",
    },
    selected: {
      description: "Draws the animated gradient border around the card",
    },
    onClick: {
      description:
        'Makes the whole card an interactive role="button" target, activatable with Enter and Space',
    },
    onAskOne: {
      description:
        "Shows the Ask One action when the card is hovered or focused",
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
  args: textArgs,
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByRole("button", { name: /Total headcount/ })

    await step("activates the card from the keyboard", async () => {
      card.focus()
      await userEvent.keyboard("{Enter}")
      await expect(args.onClick).toHaveBeenCalled()
    })

    await step("asks One from the revealed action", async () => {
      const askOne = await canvas.findByRole("button", { name: "Ask One" })
      await expect(card.contains(askOne)).toBe(false)
      await userEvent.click(askOne)
      await expect(args.onAskOne).toHaveBeenCalled()
      await expect(args.onClick).toHaveBeenCalledTimes(1)
    })

    await step("returns the card to rest", async () => {
      // click(document.body) would land on the centered card itself, keeping
      // it hovered — leave the hover and focus states explicitly instead.
      ;(document.activeElement as HTMLElement | null)?.blur()
      await userEvent.unhover(card.parentElement as HTMLElement)
      await waitFor(() =>
        expect(canvas.queryByRole("button", { name: "Ask One" })).toBeNull()
      )
    })
  },
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
  args: personArgs,
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
  args: peopleArgs,
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
  args: teamArgs,
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
  args: companyArgs,
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
  args: alertArgs,
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
  args: balancePositiveArgs,
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
  args: balanceNegativeArgs,
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
  args: sparklinePositiveArgs,
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
  args: sparklineNegativeArgs,
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
  args: selectedArgs,
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
