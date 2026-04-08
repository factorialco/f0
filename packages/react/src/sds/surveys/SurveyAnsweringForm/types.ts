import type { ModuleId } from "@/components/avatars/F0AvatarModule"
import type { DialogPosition } from "@/patterns/F0Dialog/types"
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

type SurveyAnsweringFormModule = {
  id: ModuleId
  label: string
  href: string
}

interface SurveyAnsweringFormSharedProps {
  elements: SurveyFormBuilderElement[]
  mode: SurveyAnsweringFormMode
  title: string
  description?: string
  resourceHeader?: Omit<ResourceHeaderProps, "title" | "description">
  defaultValues?: Partial<SurveyAnswers>
  errorTriggerMode?: F0FormErrorTriggerMode
  loading?: boolean
  useUpload?: UseFileUpload
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
  module: SurveyAnsweringFormModule
  position?: DialogPosition
  isOpen: boolean
  onClose: () => void
  allowToChangeFullscreen?: boolean
}

interface SurveyAnsweringFormInlineProps extends SurveyAnsweringFormSharedProps {
  inline: true
  module?: never
  position?: never
  isOpen?: never
  onClose?: never
  allowToChangeFullscreen?: never
}

type SurveyAnsweringFormBaseProps =
  | SurveyAnsweringFormDialogProps
  | SurveyAnsweringFormInlineProps

export type SurveyAnsweringFormDefaultProps = SurveyAnsweringFormBaseProps & {
  preview?: false
  onSubmit: (
    answers: SurveySubmitAnswers
  ) => Promise<SurveyFormSubmitResult> | SurveyFormSubmitResult
}

export type SurveyAnsweringFormPreviewProps = SurveyAnsweringFormBaseProps & {
  preview: true
  onSubmit?: never
}

export type SurveyAnsweringFormProps =
  | SurveyAnsweringFormDefaultProps
  | SurveyAnsweringFormPreviewProps

export type FlatQuestion = {
  id: string
  type: string
  required?: boolean
  sectionTitle?: string
  sectionDescription?: string
}
