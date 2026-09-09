import { useEffect, useRef } from "react"

import type { SidebarTab } from "."

/**
 * Remember the active tab across reloads under `f0-sidebar-tab:<persistKey>`.
 *
 * The tab components are controlled, so restoring is a one-shot mount nudge
 * through `onTabChange`; the owner's state stays the single source of truth.
 * A stored id that no longer ships is ignored rather than restored into a tab
 * that does not exist. Pass no key for session-only tabs.
 *
 * Shared by `SidebarTabs` and `SidebarRail` — the two presentations of the same
 * selection, which must not each invent their own storage key.
 */
export function usePersistedTab(
  persistKey: string | undefined,
  tabs: SidebarTab[],
  activeTab: string,
  onTabChange: (id: string) => void
): void {
  const storageKey = persistKey ? `f0-sidebar-tab:${persistKey}` : null
  const restoredRef = useRef(false)

  // Declared BEFORE the write effect below so the stored tab is read before
  // the current one overwrites it.
  useEffect(() => {
    if (!storageKey || restoredRef.current) return
    restoredRef.current = true
    let stored: string | null = null
    try {
      stored = localStorage.getItem(storageKey)
    } catch {
      // localStorage unavailable — skip restoring.
    }
    if (stored && stored !== activeTab && tabs.some((t) => t.id === stored)) {
      onTabChange(stored)
    }
    // Mount-only (guarded by restoredRef): later tab/activeTab changes are
    // user-driven and must not re-trigger a restore.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey])

  useEffect(() => {
    if (!storageKey) return
    try {
      localStorage.setItem(storageKey, activeTab)
    } catch {
      // localStorage full or unavailable — silently ignore.
    }
  }, [storageKey, activeTab])
}
