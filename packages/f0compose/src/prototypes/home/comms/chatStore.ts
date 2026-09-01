import { useSyncExternalStore } from "react"

import type { LeftPaneId } from "./ChatsColumn"

/**
 * Wiring between the nav's Comms section and the left-hand chat stack.
 *
 * Module store rather than props, for the reason the other stores here
 * give: HomeNav is mounted by FactorialShell as the `sidebar` slot, a
 * SIBLING of Home rather than a child (`meta.sidebar` is a bare
 * `React.ComponentType` and the shell renders it with no props), so
 * Home cannot hand it callbacks and cannot reach it with context either.
 *
 * Two directions, both needed:
 * - nav → canvas: `requestChat` asks Home to toggle a chat window open.
 * - canvas → nav: Home publishes which chats are open with
 *   `setOpenChats`, so the nav row can light up as selected.
 */

const listeners = new Set<(id: LeftPaneId) => void>()

/** Home subscribes; returns an unsubscribe, matching onWindowRequest. */
export function onChatRequest(listener: (id: LeftPaneId) => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** Ask Home to toggle a chat window. Called from the nav's chat rows. */
export function requestChat(id: LeftPaneId) {
  listeners.forEach((listener) => listener(id))
}

// The array identity IS the snapshot: useSyncExternalStore re-renders on
// every changed reference, so this must only be replaced when the set of
// open chats actually changes — Home publishes on each of its renders.
let openChats: LeftPaneId[] = []
const openListeners = new Set<() => void>()

export function setOpenChats(next: LeftPaneId[]) {
  if (
    next.length === openChats.length &&
    next.every((id, i) => id === openChats[i])
  ) {
    return
  }
  openChats = next
  openListeners.forEach((listener) => listener())
}

export function useOpenChats(): LeftPaneId[] {
  return useSyncExternalStore(
    (listener) => {
      openListeners.add(listener)
      return () => {
        openListeners.delete(listener)
      }
    },
    () => openChats
  )
}
