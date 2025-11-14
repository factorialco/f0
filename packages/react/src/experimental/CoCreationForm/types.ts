import { QuestionProps } from "./Question"
import { SectionProps } from "./Section/types"

export type QuestionType =
  | "section"
  | "rating"
  | "select"
  | "multi-select"
  | "text"
  | "longText"
  | "numeric"
  | "link"

export type BaseQuestionOnChangeParams = {
  id: string
  title: string
  description?: string
  required?: boolean
}

export type SectionElement = Omit<SectionProps, "onAction" | "onChange">
export type QuestionElement = Omit<
  QuestionProps,
  "onAction" | "onChange" | "onAddNewElement"
>

export type CoCreationFormElement =
  | { type: "section"; section: SectionElement }
  | { type: "question"; question: QuestionElement }

export type CoCreationFormCallbacks = {
  onQuestionAction?: QuestionProps["onAction"]
  onSectionAction?: SectionProps["onAction"]
  onQuestionChange?: QuestionProps["onChange"]
  onSectionChange?: SectionProps["onChange"]
  onAddNewElement?: QuestionProps["onAddNewElement"]
}

export type CoCreationFormProps = {
  elements: CoCreationFormElement[]
  isEditMode?: boolean
} & CoCreationFormCallbacks
