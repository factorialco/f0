import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { TextQuestion } from "."
import { CoCreationFormProvider } from "../Context"
import { CoCreationFormElement } from "../types"

const meta: Meta<typeof TextQuestion> = {
  title: "CoCreationForm/TextQuestion",
  component: TextQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<CoCreationFormElement[]>([
      { type: "question" as const, question: args },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <CoCreationFormProvider
          elements={elements}
          onChange={setElements}
          isEditMode
        >
          <TextQuestion {...args} {...question} />
        </CoCreationFormProvider>
      </div>
    )
  },
} satisfies Meta<typeof TextQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    type: "text",
    value: "",
  },
}

export const WithInitialText: Story = {
  args: {
    id: "question-2",
    title: "Describe your project",
    description: "Share as much detail as you can",
    type: "text",
    value: "This is my initial response...",
  },
}

export const LongText: Story = {
  args: {
    id: "question-4",
    title: "What would you like to share?",
    description: "Share as much detail as you can",
    type: "longText",
  },
}
