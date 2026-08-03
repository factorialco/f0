import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AiMessageSources } from "../F0AiMessageSources"

const meta = {
  title: "AI/F0AiMessageSources",
  component: F0AiMessageSources,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiMessageSources>

export default meta
type Story = StoryObj<typeof meta>

export const WithLinks: Story = {
  args: {
    sources: [
      {
        title: "Factorial documentation",
        link: "https://factorial.dev/docs",
        targetBlank: true,
      },
      {
        title: "Time off policy guide",
        link: "https://factorial.dev/time-off",
        icon: "ExternalLink",
      },
    ],
  },
}

export const WithoutLinks: Story = {
  args: {
    sources: [
      { title: "Employee handbook section 4.2" },
      { title: "Q3 finance report" },
    ],
  },
}

export const Mixed: Story = {
  args: {
    sources: [
      { title: "Employee handbook (internal)" },
      {
        title: "Factorial blog",
        link: "https://factorial.dev/blog",
        targetBlank: true,
      },
    ],
  },
}

export const CustomTitle: Story = {
  args: {
    title: "References",
    sources: [
      { title: "Spec doc", link: "https://factorial.dev/spec" },
      { title: "Design system", link: "https://factorial.dev/design" },
    ],
  },
}

export const Empty: Story = {
  args: {
    sources: [],
  },
}
