import { useSurveyFormBuilderContext } from "../../Context"

export function useQuestionDisabled(questionProps: { id: string }): boolean {
  const { answering, getSectionContainingQuestion } =
    useSurveyFormBuilderContext()

  const containingSection = getSectionContainingQuestion(questionProps.id)
  const questionLocked = containingSection?.locked

  return answering ? false : questionLocked || true
}
