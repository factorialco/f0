import type { InsightData } from "./types"

/**
 * Module-level mutable store for the current insight save callback.
 *
 * Pages that support saving insights (e.g. trainings) set the callback
 * via `setInsightSaveHandler`. The global `useInsightAction` reads it
 * via `getInsightSaveHandler`. This avoids React context tree limitations
 * since the CopilotKit action render runs outside the page component tree.
 */
let currentHandler: ((data: InsightData) => void) | undefined

export function setInsightSaveHandler(
  handler: ((data: InsightData) => void) | undefined
) {
  currentHandler = handler
}

export function getInsightSaveHandler():
  | ((data: InsightData) => void)
  | undefined {
  return currentHandler
}
