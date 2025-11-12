import type { Meta, StoryObj } from "@storybook/react-vite"

import { LinkQuestion } from "."

const meta: Meta = {
  title: "CoCreationForm/LinkQuestion",
  component: LinkQuestion,
  tags: ["autodocs", "experimental"],
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
} satisfies Meta<typeof LinkQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: "https://www.google.com",
    required: true,
  },
}

export const LongQuestionTitle: Story = {
  args: {
    id: "question-1",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at nunc sodales, viverra magna sed, cursus dui. Nam vulputate pretium est. Phasellus ornare lacus a erat gravida tincidunt. In in dignissim neque.",
    description: "Please provide a detailed description",
    value: "https://www.google.com",
    required: true,
  },
}
