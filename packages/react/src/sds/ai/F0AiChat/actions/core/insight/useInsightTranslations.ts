import { useI18n } from "@/lib/providers/i18n"

const fallbacks = {
  title: "Insight",
  save: "Pin insight",
  saved: "Pinned",
  refresh: "Refresh",
  delete: "Delete",
  emptyTitle: "No insights yet",
  emptyDescription:
    "Ask One for a metric or summary and pin it here for quick access.",
  emptyAction: "Ask One",
} as const

type InsightTranslations = typeof fallbacks

/**
 * Returns insight translation strings, falling back to English defaults
 * when the host app hasn't provided the `ai.insight` keys.
 *
 * This prevents runtime crashes when f0 is consumed by an app whose
 * translation bridge hasn't been updated yet.
 */
export function useInsightTranslations(): InsightTranslations {
  const translations = useI18n()
  const runtime = (translations.ai as Record<string, unknown> | undefined)
    ?.insight as Partial<InsightTranslations> | undefined

  if (!runtime) return fallbacks

  return { ...fallbacks, ...runtime }
}
