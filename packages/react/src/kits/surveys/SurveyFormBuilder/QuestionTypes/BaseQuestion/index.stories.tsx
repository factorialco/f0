import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { SurveyFormBuilderProvider } from "../../Context"
import { SurveyFormBuilderElement, QuestionElement } from "../../types"
import { BaseQuestion } from "."

const meta: Meta<typeof BaseQuestion> = {
  title: "Surveys/SurveyFormBuilder/BaseQuestion",
  component: BaseQuestion,
  tags: ["autodocs", "experimental"],
  render: (args) => {
    const [elements, setElements] = useState<SurveyFormBuilderElement[]>([
      { type: "question" as const, question: args as QuestionElement },
    ])

    const question =
      elements[0] && "question" in elements[0] ? elements[0].question : {}

    return (
      <div className="max-w-[750px]">
        <SurveyFormBuilderProvider elements={elements} onChange={setElements}>
          <BaseQuestion {...args} {...question} />
        </SurveyFormBuilderProvider>
      </div>
    )
  },
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

/**
 * The wording is frozen, everything else is not: the actions menu stays, so the
 * question can still be made optional, duplicated or removed. Contrast `locked`,
 * which freezes the question outright and replaces the menu with the lock.
 */
export const WordingLocked: Story = {
  args: {
    id: "question-2",
    title: "Due date",
    description: "Set the deadline for this purchase.",
    lockedFields: ["title", "description"],
    lockedNote: {
      description:
        "A request can't be created with a due date already in the past, so this question is set up to ask for one.",
    },
  },
}
