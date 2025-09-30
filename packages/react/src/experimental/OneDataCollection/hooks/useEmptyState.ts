import { useI18n } from "@/lib/providers/i18n"
import { useState } from "react"
import { ActionProps, OneEmptyStateProps } from "../../OneEmptyState/types"

export type EmptyState = {
  emoji?: string
  title: string
  description?: string
  actions?: ActionProps[]
}

export const emptyStatesTypes = ["no-data", "no-results", "error"] as const
export type EmptyStateType = (typeof emptyStatesTypes)[number]

export type CustomEmptyStates = Partial<
  Record<EmptyStateType, Partial<EmptyState>>
>
export type EmptyStates = Record<EmptyStateType, EmptyState>

export const useEmptyState = (
  customEmptyStates: CustomEmptyStates = {},
  actions: {
    retry: () => void
    clearFilters: () => void
  }
) => {
  const i18n = useI18n()

  const emptyStatesDefaults: Record<EmptyStateType, EmptyState> = {
    "no-data": {
      emoji: "📄",
      title: i18n.collections.emptyStates.noData.title,
      description: i18n.collections.emptyStates.noData.description,
    },
    "no-results": {
      emoji: "🔍",
      title: i18n.collections.emptyStates.noResults.title,
      description: i18n.collections.emptyStates.noResults.description,
      actions: [
        {
          label: i18n.collections.emptyStates.noResults.clearFilters,
          onClick: actions.clearFilters,
        },
      ],
    },
    error: {
      title: i18n.collections.emptyStates.error.title,
      description: i18n.collections.emptyStates.error.description,
      actions: [
        {
          label: i18n.collections.emptyStates.error.retry,
          onClick: actions.retry,
        },
      ],
    },
  }

  const [emptyState, setEmptyState] = useState<
    | (EmptyState & {
        variant?: Exclude<OneEmptyStateProps["variant"], "positive">
      })
    | undefined
  >(undefined)

  const setEmptyStateType = (
    type: EmptyStateType | false,
    errorMessage?: string
  ) => {
    if (!type) {
      setEmptyState(undefined)
      return
    }

    const custom = customEmptyStates[type] ?? {}
    const def = emptyStatesDefaults[type]

    const base: EmptyState = {
      title: custom.title ?? def.title,
      description:
        custom.description ??
        (type === "error" && errorMessage ? errorMessage : def.description),
      actions: custom.actions ?? def.actions,
    }

    if (type === "error") {
      setEmptyState({
        ...base,
        variant: "critical",
      })
    } else {
      setEmptyState({
        ...base,
        emoji: custom.emoji ?? def.emoji,
      })
    }
  }

  return { emptyState, setEmptyStateType }
}
