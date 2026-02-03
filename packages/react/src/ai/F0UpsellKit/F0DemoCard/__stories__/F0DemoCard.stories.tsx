import type { Meta, StoryObj } from "@storybook/react-vite"

import { fn } from "storybook/test"

import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { F0DemoCard } from ".."

const PreviewPlaceholder = () => (
  <div
    className="flex min-h-[200px] w-full items-center justify-center bg-f1-background-tertiary"
    aria-hidden
  >
    <div className="rounded border border-dashed border-f1-border p-4 text-center text-sm text-f1-foreground-secondary">
      Preview area — embed an image or custom content
    </div>
  </div>
)

const meta = {
  title: "AI/F0DemoCard",
  component: F0DemoCard,
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
    preview: <PreviewPlaceholder />,
    moduleName: "Projects",
    description:
      "A guided walkthrough of the core flows: creating a project, assigning roles...",
    onAction: fn(),
  },
  argTypes: {
    preview: {
      description: "Content for the preview area (image, video, or custom)",
      control: false,
    },
    moduleName: {
      control: "text",
      description: "Module name for the title",
    },
    description: {
      control: "text",
      description: "Description text below the title",
    },
    onAction: {
      action: "clicked",
      description: "Callback when the action button is clicked",
    },
  },
} satisfies Meta<typeof F0DemoCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithImagePreview: Story = {
  args: {
    preview: (
      <img
        src="https://placehold.co/600x280/f1f5f9/64748b?text=App+preview"
        alt=""
        className="w-full object-cover"
      />
    ),
    moduleName: "Projects",
    description:
      "A guided walkthrough of the core flows: creating a project, assigning roles...",
  },
}
