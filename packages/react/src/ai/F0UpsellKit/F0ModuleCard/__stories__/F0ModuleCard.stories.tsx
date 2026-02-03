import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { F0ModuleCard } from ".."

const meta = {
  title: "AI/F0ModuleCard",
  component: F0ModuleCard,
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
    module: "company_projects",
    moduleName: "Projects",
    description:
      "Plan capacity, track time and profit, assign tasks, and stay ahead of blockers.",
    onAction: fn(),
  },
  argTypes: {
    module: {
      control: "text",
      description: "Module id for the icon (e.g. company_projects, benefits)",
    },
    moduleName: {
      control: "text",
      description: "Card title",
    },
    description: {
      control: "text",
      description: "Description text",
    },
    onAction: {
      action: "clicked",
      description: "Callback when the action button is clicked",
    },
  },
} satisfies Meta<typeof F0ModuleCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLink: Story = {
  args: {
    actionHref: "https://example.com/projects",
  },
}

export const Benefits: Story = {
  args: {
    module: "benefits",
    moduleName: "Benefits",
    description:
      "Manage employee benefits, enrollments, and compliance in one place.",
  },
}
