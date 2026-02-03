import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { F0BookAMeetingCard } from ".."

const meta = {
  title: "AI/F0BookAMeetingCard",
  component: F0BookAMeetingCard,
  decorators: [
    (Story) => (
      <I18nProvider translations={defaultTranslations}>
        <Story />
      </I18nProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onAction: fn(),
    actionHref: "https://example.com/book",
  },
  argTypes: {
    onAction: {
      action: "clicked",
      description: "Callback when the action button is clicked",
    },
    actionHref: {
      control: "text",
      description: "URL for the action button",
    },
  },
} satisfies Meta<typeof F0BookAMeetingCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    actionHref: "https://example.com/book",
    onAction: fn(),
  },
}
