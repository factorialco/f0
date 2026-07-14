import type { JSONContent } from "@tiptap/react"

import { IconType } from "@/components/F0Icon"

type enhanceTextParams = {
  text: string
  selectedIntent?: string
  customIntent?: string
  context?: string
}

type enhancedTextResponse = {
  success: boolean
  /** Enhanced content: an HTML/plain string or a TipTap JSON document */
  text: string | JSONContent
  error?: string
}

type EnhancementOption = {
  id: string
  label: string
  icon?: IconType
  subOptions?: EnhancementOption[]
}

type enhanceConfig = {
  onEnhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>
  enhancementOptions?: EnhancementOption[]
  /** Notified when the user accepts the enhanced result (analytics hook) */
  onAcceptChanges?: () => void
  /** Notified when the user discards the enhanced result (analytics hook) */
  onRejectChanges?: () => void
  /** Notified when the user retries the enhancement (analytics hook) */
  onRetryChanges?: () => void
}

type lastIntentType = {
  selectedIntent?: string
  customIntent?: string
} | null

export type {
  enhanceConfig,
  enhancedTextResponse,
  EnhancementOption,
  enhanceTextParams,
  lastIntentType,
}
