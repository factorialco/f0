import { ProgressBarCell } from "@/ui/value-display/types/progressBar"

import {
  Question,
  QuestionProps,
} from "../../SurveyFormBuilder/QuestionTypes/Question"
import type {
  SurveyFormBuilderElement,
  QuestionElement,
} from "../../SurveyFormBuilder/types"
import type { FlatQuestion } from "../types"

interface SteppedViewProps {
  elements: SurveyFormBuilderElement[]
  currentQuestion: FlatQuestion
  progress: number
}

function findQuestion(
  elements: SurveyFormBuilderElement[],
  questionId: string
): QuestionElement | undefined {
  for (const element of elements) {
    if (element.type === "question" && element.question.id === questionId) {
      return element.question
    }
    if (element.type === "section") {
      const q = element.section.questions?.find((q) => q.id === questionId)
      if (q) return q
    }
  }
  return undefined
}

export function SteppedView({
  elements,
  currentQuestion,
  progress,
}: SteppedViewProps) {
  const questionElement = findQuestion(elements, currentQuestion.id)

  if (!questionElement) return null

  return (
    <div className="flex flex-col gap-2">
      <div className="absolute top-0 left-0 right-0 [&>div>div>div]:rounded-none [&>div>div>div]:h-1">
        <ProgressBarCell label="Value" value={progress} hideLabel />
      </div>

      {currentQuestion.sectionTitle && (
        <div className="py-1 pl-5">
          <span className="text-lg font-semibold text-f1-foreground">
            {currentQuestion.sectionTitle}
          </span>
          {currentQuestion.sectionDescription && (
            <p className="text-f1-foreground-secondary">
              {currentQuestion.sectionDescription}
            </p>
          )}
        </div>
      )}

      <Question {...(questionElement as QuestionProps)} />
    </div>
  )
}
