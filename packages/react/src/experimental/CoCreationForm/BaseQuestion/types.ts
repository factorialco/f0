import { QuestionType } from "../types"

export type BaseQuestionProps = {
  id: string
  title: string
  description?: string
  type: QuestionType
  children: React.ReactNode
  required?: boolean
  descriptionVisible?: boolean
}

export type BaseQuestionPropsForOtherQuestionComponents = Omit<
  BaseQuestionProps,
  "children" | "onChange"
>
