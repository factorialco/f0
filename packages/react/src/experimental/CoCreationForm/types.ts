import { DateQuestionProps } from "./DateQuestion"
import { LinkQuestionProps } from "./LinkQuestion"
import { NumericQuestionProps } from "./NumericQuestion"
import { QuestionProps } from "./Question"
import { RatingQuestionProps } from "./RatingQuestion"
import { SectionProps } from "./Section/types"
import { SelectQuestionProps } from "./SelectQuestion/types"
import { TextQuestionProps } from "./TextQuestion"

export type QuestionType =
  | "section"
  | "rating"
  | "select"
  | "multi-select"
  | "text"
  | "longText"
  | "numeric"
  | "link"
  | "date"

export type BaseQuestionOnChangeParams = {
  id: string
  title: string
  description?: string
  descriptionVisible?: boolean
  type: QuestionType
  required?: boolean
}

export type SectionElement = Omit<SectionProps, "onAction" | "onChange">

type QuestionPropsToOmit = "onAction" | "onChange" | "onAddNewElement"

export type QuestionElement =
  | Omit<TextQuestionProps, QuestionPropsToOmit>
  | Omit<RatingQuestionProps & { type: "rating" }, QuestionPropsToOmit>
  | Omit<
      SelectQuestionProps & { type: "select" | "multi-select" },
      QuestionPropsToOmit
    >
  | Omit<NumericQuestionProps & { type: "numeric" }, QuestionPropsToOmit>
  | Omit<LinkQuestionProps & { type: "link" }, QuestionPropsToOmit>
  | Omit<DateQuestionProps & { type: "date" }, QuestionPropsToOmit>

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
