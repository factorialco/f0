import type { Meta, StoryObj } from "@storybook/react-vite"

import { Alert, AlertDescription, AlertTitle } from "./index"

const meta = {
  title: "Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Critical system error</AlertTitle>
      <AlertDescription>
        System issue detected. Act immediately to prevent data loss.
      </AlertDescription>
    </Alert>
  ),
}

export const Positive: Story = {
  args: {
    variant: "positive",
  },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Training completed!</AlertTitle>
      <AlertDescription>
        You successfully completed the training &apos;Eat. Sleep. Command Z. Repeat&apos;.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Top up account</AlertTitle>
      <AlertDescription>
        Your account balance is below 1.000,00 €. Add money to your balance in order to avoid failed
        card payments immediately.
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  args: {
    variant: "info",
  },
  render: (props) => (
    <Alert {...props}>
      <AlertTitle>Invite your Bookkeeper</AlertTitle>
      <AlertDescription>
        You can now invite your Bookkeeper to centralize all types of communications about employee
        updates in one place.
      </AlertDescription>
    </Alert>
  ),
}
