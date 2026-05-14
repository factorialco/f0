import type { Meta, StoryObj } from "@storybook/react-vite"

import * as icons from "@/icons/app"
import { Upsell } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { UpsellingAlert } from "."

const meta: Meta<typeof UpsellingAlert> = {
  title: "UpsellingKit/UpsellingAlert",
  component: UpsellingAlert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Optional icon displayed as an avatar on the left side",
      control: "select",
      mapping: icons,
      options: [undefined, ...Object.keys(icons)],
    },
  },
}

export default meta
type Story = StoryObj<typeof UpsellingAlert>

export const Default: Story = {
  args: {
    title: "Unlock advanced reports",
    description:
      "Get deeper insights with custom dashboards and export capabilities.",
    actionLabel: "Request access",
    onRequest: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
    errorMessage: {
      title: "Error",
      description: "Something went wrong. Please try again.",
    },
    successMessage: {
      title: "Request sent!",
      description: "Our team will get back to you shortly.",
      buttonLabel: "Discover more modules",
      buttonOnClick: () => alert("Discover more"),
    },
    loadingState: {
      label: "Sending...",
    },
    nextSteps: {
      title: "What happens next?",
      items: [
        { text: "Our team will review your request" },
        { text: "You'll receive an email confirmation" },
      ],
    },
    closeLabel: "Close",
  },
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: Upsell,
    title: "Upgrade to unlock this feature",
    description: "Upsell and grow your business with advanced tools.",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: Default.args,
}
