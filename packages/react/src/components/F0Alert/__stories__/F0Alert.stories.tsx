import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, within } from "storybook/test"

import { F0Alert } from "../F0Alert"

const meta: Meta<typeof F0Alert> = {
  component: F0Alert,
  title: "Alert",
  tags: ["autodocs", "stable"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Main heading for the alert",
    },
    description: {
      description:
        "Secondary text to provide additional information for the alert",
    },
    action: {
      description: "Button configuration",
    },
    link: {
      description: "Link configuration",
    },
    variant: {
      control: "select",
      options: ["info", "warning", "critical", "neutral", "positive"],
      description: "Variant for the alert composition",
    },
  },
  decorators: [
    (Story) => (
      <div className="p-2">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof F0Alert>

export const Default: Story = {
  args: {
    title: "Your workspace includes up to 3 invoices.",
    description: "Start creating invoices: it's free with your plan!",
    action: {
      label: "Request info",
      onClick: fn(),
    },
    link: {
      label: "See all invoices",
      href: "https://factorialhr.com/",
    },
    variant: "info",
  },
  render: (args) => (
    <div className="w-[640px]">
      <F0Alert {...args} />
    </div>
  ),
}

export const Narrow: Story = {
  args: {
    ...Default.args,
    title: "Company page unactive",
    description:
      "You are missing the company page. It is mandatory to be activated.",
    action: {
      label: "Request info",
      onClick: fn(),
    },
    variant: "warning",
    link: undefined,
  },
  render: (args) => (
    <div className="w-[320px]">
      <F0Alert {...args} />
    </div>
  ),
}

export const WithTestId: Story = {
  args: {
    title: "Important notification",
    description: "This alert has a testId for testing purposes.",
    variant: "info",
    testId: "important-alert",
  },
  render: (args) => (
    <div className="w-[640px]">
      <F0Alert {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const alert = canvas.getByTestId("important-alert")
    await expect(alert).toBeInTheDocument()
  },
}
