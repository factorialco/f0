import type { Meta, StoryObj } from "@storybook/react-vite"

import { BaseQuestion } from "."

const meta: Meta = {
  title: "CoCreationForm/BaseQuestion",
  component: BaseQuestion,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BaseQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "What is your question?",
    description: "Optional description",
  },
}
