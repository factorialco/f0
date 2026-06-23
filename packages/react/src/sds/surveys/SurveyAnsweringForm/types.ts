import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { UseFileUpload } from "@/patterns/F0Form/fields/file/types"
import type { F0FormErrorTriggerMode } from "@/patterns/F0Form/types"
import type { ResourceHeaderProps } from "@/patterns/ResourceHeader"

import type {
  SurveyDatasets,
  SurveyFormBuilderElement,
} from "../SurveyFormBuilder/types"

export type { SurveyFormBuilderElement }

export type SurveyAnswerValue =
  | { type: "text" | "longText"; value: string | null }
  | { type: "rating"; value: number | null }
  | { type: "select"; value: string | null }
  | { type: "multi-select"; value: string[] | null }
  | { type: "dropdown-single"; value: string | null }
  | { type: "dropdown-multi"; value: string[] | null }
  | { type: "numeric"; value: number | null }
  | { type: "link"; value: string | null }
  | { type: "date"; value: Date | null }
  | { type: "file"; value: string[] | null }
  | { type: "checkbox"; value: boolean | null }

export type SurveyAnswers = Record<string, SurveyAnswerValue>

export type SurveySubmitAnswers = Record<
  string,
  string | number | boolean | string[] | Date | null
>

export type SurveyFormSubmitResult =
  | { success: true; message?: string }
  | { success: false; errors?: Record<string, string> }

export type SurveyAnsweringFormMode = "stepped" | "all-questions"

/** Where the answering dialog is anchored. */
export type SurveyDialogPosition = "center" | "left" | "right" | "fullscreen"

type SurveyAnsweringFormModule = {
  id: ModuleId
  label: string
  href: string
}

interface SurveyAnsweringFormSharedProps {
  elements: SurveyFormBuilderElement[]
  title: string
  description?: string
  resourceHeader?: Omit<ResourceHeaderProps, "title" | "description">
  defaultValues?: Partial<SurveyAnswers>
  loading?: boolean
  datasets?: SurveyDatasets
  labels?: {
    empty?: {
      title?: string
      description?: string
      emoji?: string
    }
  }
}

interface SurveyAnsweringFormDialogProps extends SurveyAnsweringFormSharedProps {
  inline?: false
  mode: SurveyAnsweringFormMode
  module: SurveyAnsweringFormModule
  position?: SurveyDialogPosition
  isOpen: boolean
  onClose: () => void
  allowToChangeFullscreen?: boolean
  errorTriggerMode?: F0FormErrorTriggerMode
  useUpload?: UseFileUpload
}

/** Inline mode: read-only rendering embedded in the page, no dialog */
interface SurveyAnsweringFormInlineProps extends SurveyAnsweringFormSharedProps {
  inline: true
  /**
   * Hide the built-in ResourceHeader (title + description). Useful when the
   * embedding page already renders its own resource header above the form.
   */
  hideResourceHeader?: boolean
  mode?: never
  module?: never
  position?: never
  isOpen?: never
  onClose?: never
  allowToChangeFullscreen?: never
  errorTriggerMode?: never
  useUpload?: UseFileUpload
}

export type SurveyAnsweringFormDefaultProps = SurveyAnsweringFormDialogProps & {
  preview?: false
  onSubmit: (
    answers: SurveySubmitAnswers
  ) => Promise<SurveyFormSubmitResult> | SurveyFormSubmitResult
}

export type SurveyAnsweringFormPreviewProps = SurveyAnsweringFormDialogProps & {
  preview: true
  onSubmit?: never
}

export type SurveyAnsweringFormInlineReadonlyProps =
  SurveyAnsweringFormInlineProps & {
    preview?: never
    onSubmit?: never
  }

export type SurveyAnsweringFormProps =
  | SurveyAnsweringFormDefaultProps
  | SurveyAnsweringFormPreviewProps
  | SurveyAnsweringFormInlineReadonlyProps

export type FlatQuestion = {
  id: string
  type: string
  required?: boolean
  sectionTitle?: string
  sectionDescription?: string
}
