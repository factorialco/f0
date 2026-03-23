import type { ChatDashboardConfig } from "../../../../F0ChatDashboard/types"

/**
 * External store for saved (user-edited) dashboard configs.
 *
 * This lives outside React's component tree so that `F0ChatReportCard`
 * (rendered inside CopilotKit's message list) can subscribe to changes
 * via `useSyncExternalStore` — which works regardless of whether the
 * React context provider is an ancestor.
 */

type Listener = () => void

const configs = new Map<string, ChatDashboardConfig>()
const listeners = new Set<Listener>()
let version = 0

function emitChange(): void {
  version++
  for (const listener of listeners) {
    listener()
  }
}

export const savedDashboardConfigStore = {
  get(toolCallId: string): ChatDashboardConfig | undefined {
    return configs.get(toolCallId)
  },

  set(toolCallId: string, config: ChatDashboardConfig): void {
    configs.set(toolCallId, config)
    emitChange()
  },

  subscribe(listener: Listener): () => void {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },

  getSnapshot(): number {
    return version
  },
}
