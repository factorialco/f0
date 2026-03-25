import type { Meta, StoryObj } from "@storybook/react-vite"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { F0MessageCreditsWarning } from "../index"

const meta = {
  title: "AI/Widgets/UpsellKit/F0MessageCreditsWarning",
  component: F0MessageCreditsWarning,
  decorators: [
    (Story) => (
      <I18nProvider translations={defaultTranslations}>
        <div className="w-[780px] max-w-[90vw]">
          <Story />
        </div>
      </I18nProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    actionHref: {
      control: "text",
      description: "Optional URL for the action button",
    },
  },
} satisfies Meta<typeof F0MessageCreditsWarning>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
