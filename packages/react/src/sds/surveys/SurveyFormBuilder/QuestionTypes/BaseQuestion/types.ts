import { HiddenActions, QuestionType } from "../../types"

export type { HiddenActions }

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
