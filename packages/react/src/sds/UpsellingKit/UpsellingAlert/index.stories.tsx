import type { Meta, StoryObj } from "@storybook/react-vite"

import * as icons from "@/icons/app"
import { Upsell } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { UpsellingAlert } from "."

/**
 * Example dismiss handler: persist the dismissal so the alert stays hidden for
 * a number of days and reappears afterwards.
 *
 * Takes a per-alert `storageKey` so multiple upselling alerts on the same page
 * don't overwrite each other's dismissal state. Namespace it by the module /
 * feature the alert promotes.
 */
const dismissForDays = (storageKey: string) => () => {
  const HIDE_FOR_DAYS = 7
  const hideUntil = Date.now() + HIDE_FOR_DAYS * 24 * 60 * 60 * 1000
  window.localStorage.setItem(storageKey, String(hideUntil))
  alert(`Dismissed — hidden for ${HIDE_FOR_DAYS} days.`)
}

const meta: Meta<typeof UpsellingAlert> = {
  title: "UpsellingAlert",
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
    onDismiss: {
      description:
        "When enabled, shows a dismiss (close) button to the right of the action button.",
      control: "boolean",
    },
  },
  render: ({ onDismiss, ...args }) => (
    <UpsellingAlert
      {...args}
      onDismiss={
        onDismiss
          ? dismissForDays("upselling-alert-hidden-until:demo")
          : undefined
      }
    />
  ),
}

export default meta
type Story = StoryObj<typeof UpsellingAlert>

export const Default: Story = {
  args: {
    title: "Unlock advanced reports",
    description:
      "Get deeper insights with custom dashboards and export capabilities.",
    action: {
      label: "Request access",
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

/**
 * When `onDismiss` is provided, a close button is rendered to the right of the
 * upselling action button. The consumer decides what happens on dismiss — here
 * we persist the dismissal under a per-alert key so the alert stays hidden for
 * a number of days and reappears afterwards. Use a distinct key per alert so
 * multiple upselling alerts don't overwrite each other. Toggle the `onDismiss`
 * control to show/hide the button.
 */
export const Dismissible: Story = {
  args: {
    ...WithIcon.args,
    onDismiss: dismissForDays("upselling-alert-hidden-until:performance"),
  },
}

/**
 * When the action only opens a modal or navigates instead of creating an
 * upselling request, set `showConfirmation: false` so the success dialog
 * ("request sent") isn't shown for a request that was never made.
 */
export const WithoutConfirmation: Story = {
  args: {
    ...Default.args,
    title: "Open the product details",
    description:
      "Use showConfirmation: false when the action only opens a modal or navigates, so no success dialog is shown for a request that was never sent.",
    action: {
      ...Default.args!.action!,
      label: "Learn more",
      showConfirmation: false,
      onRequest: () => alert("Open product modal"),
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: Default.args,
}
