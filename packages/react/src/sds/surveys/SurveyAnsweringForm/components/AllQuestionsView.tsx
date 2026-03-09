import { Question, QuestionProps } from "../../SurveyFormBuilder/Question"
import { Section } from "../../SurveyFormBuilder/Section"
import type { SurveyFormBuilderElement } from "../../SurveyFormBuilder/types"

interface AllQuestionsViewProps {
  elements: SurveyFormBuilderElement[]
}

export function AllQuestionsView({ elements }: AllQuestionsViewProps) {
  return (
    <div className="flex flex-col gap-2">
      {elements.map((element) => {
        if (element.type === "section") {
          return <Section key={element.section.id} {...element.section} />
        }

        return (
          <Question
            key={element.question.id}
            {...(element.question as QuestionProps)}
          />
        )
      })}
    </div>
  )
}
