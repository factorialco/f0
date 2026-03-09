import { SurveyFormBuilderElement } from "../SurveyFormBuilder/types"

export type SurveyAnswerValue =
  | { type: "text" | "longText"; value: string | null }
  | { type: "rating"; value: number | null }
  | { type: "select"; value: string | null }
  | { type: "multi-select"; value: string[] | null }
  | { type: "dropdown-single"; value: string | null }
  | { type: "numeric"; value: number | null }
  | { type: "link"; value: string | null }
  | { type: "date"; value: Date | null }

export type SurveyAnswers = Record<string, SurveyAnswerValue>

export type SurveyFormSubmitResult =
  | { success: true; message?: string }
  | { success: false; errors?: Record<string, string> }

export type SurveyAnsweringFormMode = "stepped" | "all-questions"

export interface SurveyAnsweringFormProps {
  elements: SurveyFormBuilderElement[]
  onSubmit: (
    answers: SurveyAnswers
  ) => Promise<SurveyFormSubmitResult> | SurveyFormSubmitResult
  mode: SurveyAnsweringFormMode
  title: string
  isOpen: boolean
  onClose: () => void
  fullscreen?: boolean
  allowToChangeFullscreen?: boolean
  defaultValues?: Partial<SurveyAnswers>
}

export type FlatQuestion = {
  id: string
  type: string
  required?: boolean
  sectionTitle?: string
  sectionDescription?: string
}
