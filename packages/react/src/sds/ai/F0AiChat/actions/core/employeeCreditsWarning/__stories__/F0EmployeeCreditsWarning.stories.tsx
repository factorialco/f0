import type { Meta, StoryObj } from "@storybook/react-vite"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { F0EmployeeCreditsWarning } from "../index"

const meta = {
  title: "AI/Widgets/UpsellKit/F0EmployeeCreditsWarning",
  component: F0EmployeeCreditsWarning,
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
} satisfies Meta<typeof F0EmployeeCreditsWarning>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
