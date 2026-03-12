import { useSurveyFormBuilderContext } from "../../Context"

export function useQuestionDisabled(questionProps: {
  id: string
  locked?: boolean
}): boolean {
  const { answering, getSectionContainingQuestion } =
    useSurveyFormBuilderContext()

  const containingSection = getSectionContainingQuestion(questionProps.id)
  const questionLocked = questionProps.locked || containingSection?.locked

  return answering ? false : questionLocked || true
}
