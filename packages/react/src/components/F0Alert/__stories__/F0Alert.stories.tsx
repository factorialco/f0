import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"

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
    ...dataTestIdArgs,
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

export const DeactivatedAction: Story = {
  args: {
    ...Default.args,
    title: "Company page unactive",
    description:
      "You are missing the company page. It is mandatory to be activated.",
    action: {
      label: "Request info",
      onClick: fn(),
      disabled: true,
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

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    title: "Alert with Test ID",
    dataTestId: "my-test-alert",
  },
  render: (args) => (
    <div className="w-[640px]">
      <F0Alert {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const root = canvas.getByText("Alert with Test ID").parentElement
    await expect(root).toHaveAttribute("data-testid", "my-test-alert")
  },
}
