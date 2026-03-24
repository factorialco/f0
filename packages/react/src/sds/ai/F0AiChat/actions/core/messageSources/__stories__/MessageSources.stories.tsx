import { Meta, StoryObj } from "@storybook/react-vite"

import { MessageSources } from "../MessageSources"

const meta = {
  component: MessageSources,
  title: "AI/F0AiChat/Actions/MessageSources",
  tags: ["autodocs"],
} satisfies Meta<typeof MessageSources>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sources: [
      {
        title: "TypeScript Official Documentation",
        link: "https://www.typescriptlang.org/docs/",
        icon: "Code",
      },
      {
        title: "React Documentation",
        link: "https://react.dev/",
        icon: "BookOpen",
      },
      {
        title: "React Native Documentation",
        link: "https://reactnative.dev/",
      },
    ],
  },
}

export const WithoutLinks: Story = {
  args: {
    sources: [
      {
        title: "Internal Document 1",
        icon: "File",
      },
      {
        title: "Internal Document 2",
        icon: "File",
      },
    ],
  },
}

export const MixedSources: Story = {
  args: {
    sources: [
      {
        title: "External Link",
        link: "https://example.com",
        icon: "ExternalLink",
        targetBlank: true,
      },
      {
        title: "Internal Reference",
        icon: "Bookmark",
      },
      {
        title: "Another External Link",
        link: "https://factorial.co",
        icon: "Globe",
      },
    ],
  },
}
