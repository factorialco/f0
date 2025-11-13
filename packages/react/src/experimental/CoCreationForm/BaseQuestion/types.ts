import { BaseQuestionOnChangeParams, QuestionType } from "../types"

export type ActionType = "duplicate" | "delete"

type ActionParams = {
  questionId: string
  type: ActionType
  index: number
}

type OnAddNewQuestionParams = {
  type: QuestionType
  index: number
}

export type BaseQuestionProps = {
  id: string
  index: number
  title: string
  description?: string
  children: React.ReactNode
  onChange?: (params: BaseQuestionOnChangeParams) => void
  disabled?: boolean
  required?: boolean
  onAddNewQuestion?: (params: OnAddNewQuestionParams) => void
  onAction?: (params: ActionParams) => void
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
