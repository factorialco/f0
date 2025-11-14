import { BaseQuestionOnChangeParams, QuestionType } from "../types"

export type ActionType = "duplicate" | "delete"

export type QuestionActionParams = {
  questionId: string
  type: ActionType
  index: number
}

export type OnAddNewElementParams = {
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
  isEditMode?: boolean
  required?: boolean
  onAddNewElement?: (params: OnAddNewElementParams) => void
  onAction?: (params: QuestionActionParams) => void
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
