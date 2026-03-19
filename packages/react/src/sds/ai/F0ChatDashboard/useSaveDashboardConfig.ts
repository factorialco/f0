import { useCallback } from "react"

import type { ChatDashboardConfig } from "./types"

/**
 * Hook that returns a function to persist dashboard config changes
 * back to the thread history via the backend endpoint.
 */
export function useSaveDashboardConfig(apiConfig: {
  baseUrl: string
  headers: Record<string, string>
}): (
  threadId: string,
  toolCallId: string | undefined,
  config: ChatDashboardConfig
) => Promise<void> {
  return useCallback(
    async (
      threadId: string,
      toolCallId: string | undefined,
      config: ChatDashboardConfig
    ) => {
      const response = await fetch(`${apiConfig.baseUrl}/dashboard/config`, {
        method: "POST",
        credentials: "include",
        headers: {
          ...apiConfig.headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          threadId,
          ...(toolCallId ? { toolCallId } : {}),
          toolName: "displayDashboard",
          config,
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to save dashboard config: ${response.status}`)
      }
    },
    [apiConfig.baseUrl, apiConfig.headers]
  )
}
