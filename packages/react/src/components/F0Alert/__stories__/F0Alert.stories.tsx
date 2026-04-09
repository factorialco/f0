import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, within } from "storybook/test"

import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"

import { F0Alert } from "../F0Alert"

const meta: Meta<typeof F0Alert> = {
  component: F0Alert,
  title: "Alert",
  tags: ["stable"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      description:
        'Main heading. Sentence case, no period. State the situation clearly — e.g. "Company page inactive".',
    },
    description: {
      description:
        "Supporting text. One or two sentences max. Explain what the situation means and what can be done about it.",
    },
    variant: {
      control: "select",
      options: ["info", "warning", "critical", "neutral", "positive"],
      description:
        "Controls background color, title color, and semantic icon. Only `neutral` accepts a custom `icon` prop — all other variants use a fixed semantic icon.",
    },
    action: {
      description:
        "Optional action button rendered inside the alert. Use `disabled` to signal the action exists but is not yet available — keep it visible so it remains discoverable.",
    },
    link: {
      description:
        'Optional external link. Always opens in a new tab. Label should be descriptive of the destination — e.g. "See all invoices", never "Click here".',
    },
    icon: {
      description:
        'Custom icon for `variant="neutral"` only. Falls back to a placeholder when omitted. Has no effect on any other variant.',
    },
    onClose: {
      control: "boolean",
      description:
        "Optional callback fired when the user clicks the close button. When provided, a dismiss button (X) is shown. When omitted, no close button is rendered. The parent is responsible for hiding the alert and deciding if and when it reappears.",
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

export const Variants: Story = {
  render: () => (
    <div className="flex w-[640px] flex-col gap-3">
      <F0Alert
        variant="info"
        title="Your workspace includes up to 3 invoices."
        description="Start creating invoices: it's free with your plan!"
        action={{ label: "Request info", onClick: fn() }}
      />
      <F0Alert
        variant="warning"
        title="Company page inactive"
        description="You are missing the company page. It is mandatory to be activated."
        action={{ label: "Activate now", onClick: fn() }}
      />
      <F0Alert
        variant="critical"
        title="Payroll run failed"
        description="One or more employees could not be processed. Review the errors before resubmitting."
        action={{ label: "Review errors", onClick: fn() }}
      />
      <F0Alert
        variant="positive"
        title="Payroll sent successfully"
        description="All employees have been processed and payments are on their way."
      />
      <F0Alert
        variant="neutral"
        title="Sync in progress"
        description="Employee data is being imported from your HR system. This may take a few minutes."
      />
    </div>
  ),
}

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
    onClose: fn(),
  },
  render: ({ onClose, ...args }) => (
    <div className="w-[640px]">
      <F0Alert {...args} onClose={onClose ? fn() : undefined} />
    </div>
  ),
}

export const Dismissible: Story = {
  tags: ["!dev"],
  args: {
    title: "Your workspace includes up to 3 invoices.",
    description: "Start creating invoices: it's free with your plan!",
    action: {
      label: "Request info",
      onClick: fn(),
    },
    variant: "info",
    onClose: fn(),
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
    await expect(canvas.getByTestId("my-test-alert")).toBeInTheDocument()
  },
}

export const InDialog: Story = {
  args: {
    title: "Create a new job",
    description:
      "Craft a job description that aligns with this vacancy's requirements.",
    action: {
      label: "New job",
      onClick: fn(),
    },
    variant: "info",
    link: undefined,
  },
  render: (args) => (
    <div className="w-[450px]">
      <F0Alert {...args} />
    </div>
  ),
}
