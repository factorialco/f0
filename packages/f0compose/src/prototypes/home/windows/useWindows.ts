import { useEffect, useRef } from "react"

import type { WindowId } from "./types"

import { useProfile } from "../profileStore"
import { readWidgets, WIDGET_CHANGE_EVENT } from "../setup/widgetPreferences"
import { useWindowStack } from "./stack"

export { MAX_COLUMN_WIDTH, MIN_COLUMN_WIDTH } from "./stack"

/** The right-hand widgets stack. Everything is in `useWindowStack`, which
 *  the left-hand Comms chats stack uses too. */
export function useWindows() {
  const profile = useProfile()
  const stack = useWindowStack<WindowId>({ open: readWidgets(profile) })
  const previousProfile = useRef(profile)
  useEffect(() => {
    if (previousProfile.current !== profile) {
      previousProfile.current = profile
      stack.closeAll()
      readWidgets(profile).forEach(stack.open)
      return
    }
  }, [profile, stack.state.open, stack.closeAll, stack.open])
  useEffect(() => {
    const apply = (event: Event) => {
      const detail = (
        event as CustomEvent<{ profile: string; widgets: WindowId[] }>
      ).detail
      if (detail.profile !== profile) return
      stack.closeAll()
      detail.widgets.forEach(stack.open)
    }
    window.addEventListener(WIDGET_CHANGE_EVENT, apply)
    return () => window.removeEventListener(WIDGET_CHANGE_EVENT, apply)
  }, [profile, stack.closeAll, stack.open])
  return stack
}
