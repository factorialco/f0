import { BookOpen, Code } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import { MessageSources } from "./MessageSources"

const meta = {
  component: MessageSources,
  title: "Experimental/AiChat/MessageSources",
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
        icon: Code,
      },
      {
        title: "React Documentation",
        link: "https://react.dev/",
        icon: BookOpen,
      },
    ],
  },
}
