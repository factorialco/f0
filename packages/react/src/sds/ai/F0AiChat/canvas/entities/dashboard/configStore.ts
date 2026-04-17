import type { ChatDashboardConfig } from "./types"

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

/**
 * External store for saved-dashboard metadata (id, category, unsaved flag).
 * Mirrors savedDashboardConfigStore but for persistence metadata that
 * needs to survive close/re-open of the canvas.
 */
export type SavedDashboardMeta = {
  savedDashboardId?: string
  savedDashboardCategory?: string
  savedDashboardDescription?: string
  savedDashboardUnsaved?: boolean
}

const metas = new Map<string, SavedDashboardMeta>()
const metaListeners = new Set<Listener>()
let metaVersion = 0

function emitMetaChange(): void {
  metaVersion++
  for (const listener of metaListeners) {
    listener()
  }
}

export const savedDashboardMetaStore = {
  get(toolCallId: string): SavedDashboardMeta | undefined {
    return metas.get(toolCallId)
  },

  set(toolCallId: string, meta: SavedDashboardMeta): void {
    metas.set(toolCallId, meta)
    emitMetaChange()
  },

  subscribe(listener: Listener): () => void {
    metaListeners.add(listener)
    return () => metaListeners.delete(listener)
  },

  getSnapshot(): number {
    return metaVersion
  },
}
