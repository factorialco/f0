"use client"

import { IconType } from "@/components/F0Icon"
import { ButtonVariant } from "@/ui/button"
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

export interface AiPromotionChatState {
  enabled: boolean
  greeting?: string
  title?: string
  description?: string
  benefits?: {
    noBoldText: string
    boldText: string
  }[]
  actions?: {
    label: string
    onClick: () => void
    variant: ButtonVariant
    icon?: IconType
  }[]
}

const AiPromotionChatStateContext =
  createContext<AiPromotionChatProviderReturnValue | null>(null)

type AiPromotionChatProviderReturnValue = {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayEntranceAnimation: boolean
  setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Set the amount of minutes after which the chat will be cleared automatically
   * Set `null` to disable auto-clearing
   *
   * @default 15
   */
  setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>
  autoClearMinutes: number | null
  /**
   * Clear/reset the chat conversation
   */
  clear: () => void
  /**
   * Internal function to set the clear function from CopilotKit
   * @internal
   */
  setClearFunction: (clearFn: (() => void) | null) => void
} & Pick<
  AiPromotionChatState,
  "greeting" | "title" | "description" | "benefits" | "actions"
>

const DEFAULT_MINUTES_TO_RESET = 15

export const AiPromotionChatStateProvider: FC<
  PropsWithChildren<AiPromotionChatState>
> = ({ children, enabled, ...rest }) => {
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  const [open, setOpen] = useState(false)
  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(true)
  const [autoClearMinutes, setAutoClearMinutes] = useState<number | null>(
    DEFAULT_MINUTES_TO_RESET
  )

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)

  const setClearFunction = (clearFn: (() => void) | null) => {
    clearFunctionRef.current = clearFn
  }

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
  }

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  useEffect(() => {
    if (!open) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      setShouldPlayEntranceAnimation(!prefersReducedMotion)
    }
  }, [open])

  return (
    <AiPromotionChatStateContext.Provider
      value={{
        ...rest,
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        open,
        setOpen,
        shouldPlayEntranceAnimation,
        setShouldPlayEntranceAnimation,
        setAutoClearMinutes,
        autoClearMinutes: enabledInternal ? autoClearMinutes : null,
        clear,
        setClearFunction,
      }}
    >
      {children}
    </AiPromotionChatStateContext.Provider>
  )
}

const noopFn = () => {}

export function useAiPromotionChat(): AiPromotionChatProviderReturnValue {
  const context = useContext(AiPromotionChatStateContext)

  if (context === null) {
    return {
      enabled: false,
      setEnabled: noopFn,
      open: false,
      setOpen: noopFn,
      shouldPlayEntranceAnimation: true,
      setShouldPlayEntranceAnimation: noopFn,
      setAutoClearMinutes: noopFn,
      clear: noopFn,
      setClearFunction: noopFn,
      autoClearMinutes: null,
    }
  }

  return context
}
