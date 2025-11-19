import { DateQuestionProps } from "./DateQuestion"
import { LinkQuestionProps } from "./LinkQuestion"
import { NumericQuestionProps } from "./NumericQuestion"
import { RatingQuestionProps } from "./RatingQuestion"
import { SectionProps } from "./Section/types"
import { SelectQuestionProps } from "./SelectQuestion/types"
import { TextQuestionProps } from "./TextQuestion"

export type QuestionType =
  | "rating"
  | "select"
  | "multi-select"
  | "text"
  | "longText"
  | "numeric"
  | "link"
  | "date"

export type ElementType = QuestionType | "section"

export type BaseQuestionOnChangeParams = {
  id: string
  title?: string
  description?: string
  descriptionVisible?: boolean
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

export type ActionType = "duplicate" | "delete"

export type SectionActionParams = {
  sectionId: string
  type: ActionType
  index: number
}

export type OnChangeSectionParams = {
  id: string
  title: string
  description?: string
  questions?: QuestionElement[]
}

export type SelectQuestionOption = {
  id?: string
  value: string
  label: string
  correct?: boolean
}

type OnChangeQuestionParams = BaseQuestionOnChangeParams &
  (
    | {
        type: "text" | "longText"
        value?: string | null
      }
    | {
        type: "rating"
        value: number
      }
    | {
        type: "select"
        value?: string | null
        options: SelectQuestionOption[]
      }
    | {
        type: "multi-select"
        value?: string[] | null
        options: SelectQuestionOption[]
      }
    | {
        type: "numeric"
        value?: number | null
      }
    | {
        type: "link"
        value?: string | null
      }
    | {
        type: "date"
        value?: Date | null
      }
  )

export type QuestionActionParams = {
  questionId: string
  type: ActionType
  index: number
}

export type OnAddNewElementParams = {
  type: ElementType
  afterId: string
}

export type OnDuplicateElementParams = {
  elementId: string
  type: ElementType
}

export type CoCreationFormCallbacks = {
  onQuestionChange?: (params: OnChangeQuestionParams) => void
  onSectionChange?: (params: OnChangeSectionParams) => void
  onAddNewElement?: (params: OnAddNewElementParams) => void
  onDuplicateElement?: (params: OnDuplicateElementParams) => void
}

export type CoCreationFormProps = {
  elements: CoCreationFormElement[]
  onChange: (elements: CoCreationFormElement[]) => void
  isEditMode?: boolean
}
