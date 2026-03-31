import type { UseFileUpload } from "@/components/F0Form/fields/file/types"

import type { CheckboxQuestionProps } from "./QuestionTypes/CheckboxQuestion"
import type { DateQuestionProps } from "./QuestionTypes/DateQuestion"
import type { DropdownSingleQuestionProps } from "./QuestionTypes/DropdownSingleQuestion/types"
import type { FileQuestionProps } from "./QuestionTypes/FileQuestion"
import type { LinkQuestionProps } from "./QuestionTypes/LinkQuestion"
import type { NumericQuestionProps } from "./QuestionTypes/NumericQuestion"
import type { RatingQuestionProps } from "./QuestionTypes/RatingQuestion"
import type { SelectQuestionProps } from "./QuestionTypes/SelectQuestion/types"
import type { TextQuestionProps } from "./QuestionTypes/TextQuestion"
import type { SectionProps } from "./Section/types"

export type QuestionType =
  | "rating"
  | "select"
  | "multi-select"
  | "dropdown-single"
  | "text"
  | "longText"
  | "numeric"
  | "link"
  | "date"
  | "file"
  | "checkbox"

export type ElementType = QuestionType | "section"

export type BaseQuestionOnChangeParams = {
  id: string
  title?: string
  description?: string
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
  | Omit<
      DropdownSingleQuestionProps & { type: "dropdown-single" },
      QuestionPropsToOmit
    >
  | Omit<NumericQuestionProps & { type: "numeric" }, QuestionPropsToOmit>
  | Omit<LinkQuestionProps & { type: "link" }, QuestionPropsToOmit>
  | Omit<DateQuestionProps & { type: "date" }, QuestionPropsToOmit>
  | Omit<FileQuestionProps & { type: "file" }, QuestionPropsToOmit>
  | Omit<CheckboxQuestionProps & { type: "checkbox" }, QuestionPropsToOmit>

export type SurveyFormBuilderElement =
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
        options?: { value: number; label: string }[]
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
        type: "dropdown-single"
        value?: string | null
        options?: SelectQuestionOption[]
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
    | {
        type: "file"
        value?: string[] | null
      }
    | {
        type: "checkbox"
        value?: boolean | null
        label: string
      }
  )

export type QuestionActionParams = {
  questionId: string
  type: ActionType
  index: number
}

export type OnAddNewElementParams = {
  type: ElementType
  afterId?: string
}

export type OnDuplicateElementParams = {
  elementId: string
  type: ElementType
}

export type SurveyFormBuilderCallbacks = {
  onQuestionChange?: (params: OnChangeQuestionParams) => void
  onSectionChange?: (params: OnChangeSectionParams) => void
  onAddNewElement?: (params: OnAddNewElementParams) => void
  onDuplicateElement?: (params: OnDuplicateElementParams) => void
}

export type SurveyFormBuilderProps = {
  elements: SurveyFormBuilderElement[]
  onChange: (elements: SurveyFormBuilderElement[]) => void
  disabled?: boolean
  disallowOptionalQuestions?: boolean
  allowedQuestionTypes?: QuestionType[]
  applyingChanges?: boolean
  useUpload?: UseFileUpload
}
