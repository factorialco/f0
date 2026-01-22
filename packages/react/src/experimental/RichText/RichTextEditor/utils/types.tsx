import { JSONContent } from "@tiptap/react"

import { IconType } from "@/components/F0Icon"

import { FileType } from "./constants"

type resultType = {
  value: string | null
  mentionIds?: number[]
}

type enhanceTextParams = {
  text: string
  selectedIntent?: string
  customIntent?: string
  context?: string
}

type enhancedTextResponse = {
  success: boolean
  text: string
  error?: string
}

type errorConfig = {
  onClose?: () => void
  closeErrorButtonLabel?: string
}

type enhanceLabelsType = {
  defaultError: string
  enhanceButtonLabel: string
  acceptChangesButtonLabel: string
  rejectChangesButtonLabel: string
  repeatButtonLabel: string
  customPromptPlaceholder: string
  loadingEnhanceLabel: string
}

type EnhancementOption = {
  id: string
  label: string
  subOptions?: EnhancementOption[]
}

type enhanceConfig = {
  onEnhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  enhancementOptions?: EnhancementOption[]
  enhanceLabels: enhanceLabelsType
}

type filesConfig = {
  onFiles: (files: File[]) => void
  multipleFiles: boolean
  maxFileSize?: number
  acceptedFileType?: FileType[]
}

type actionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  variant: "default" | "outline" | "neutral" | undefined
  icon?: IconType
}

type toggleActionType = {
  label: string
  checked: boolean
  onClick: (checked?: boolean) => void
  disabled?: boolean
  hideLabel?: boolean
}

type secondaryActionType = (actionType | toggleActionType) & {
  type?: "button" | "switch"
}

type secondaryActionsType = secondaryActionType | secondaryActionType[]

type subActionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  icon?: IconType
}

type primaryActionType = {
  action: actionType
  subActions?: subActionType[]
}

type heightType =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | "auto"

type lastIntentType = {
  selectedIntent?: string
  customIntent?: string
} | null

type editorStateType = {
  html: string
  json: JSONContent | null
}

export type {
  actionType,
  editorStateType,
  enhanceConfig,
  enhancedTextResponse,
  enhanceLabelsType,
  EnhancementOption,
  enhanceTextParams,
  errorConfig,
  filesConfig,
  heightType,
  lastIntentType,
  primaryActionType,
  resultType,
  secondaryActionsType,
  secondaryActionType,
  subActionType,
}
