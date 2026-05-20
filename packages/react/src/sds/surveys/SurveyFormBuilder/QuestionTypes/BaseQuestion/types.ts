import { QuestionType } from "../../types"

/**
 * Per-question control to hide individual entries from the question
 * actions menu (the "⋯" dropdown). Useful when a consumer wants to
 * lock down a subset of question editing without disabling the whole
 * question. All fields default to `false` (action visible).
 *
 * When every action is hidden, the actions menu trigger is not
 * rendered at all.
 */
export type HiddenActions = {
  required?: boolean
  multiSelect?: boolean
  allowCreate?: boolean
  questionType?: boolean
  duplicate?: boolean
  delete?: boolean
}

export type BaseQuestionProps = {
  id: string
  title: string
  description?: string
  type: QuestionType
  children: React.ReactNode
  required?: boolean
  locked?: boolean
  hiddenActions?: HiddenActions
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
