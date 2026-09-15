"use client"

import { createContext, useContext, useMemo, type ReactNode } from "react"
import { type F0MeetingActionsProp, type F0MeetingSidePanel } from "../types"

/**
 * The chrome the host configured, held where BOTH places that draw the room can
 * read it: the floating window's portal and the side panel's content.
 *
 * It exists because the panel occupant is handed to `present()` as an element
 * and kept in the panel's state. That element has to be referentially stable —
 * a new one on every render would re-present in a loop — so it can take no
 * props, and everything it needs comes from here instead.
 */
export type MeetingChrome = {
  actions?: F0MeetingActionsProp
  actionOrder?: string[]
  sidePanel?: F0MeetingSidePanel
  headerContent?: ReactNode
  overlay?: ReactNode
}

const MeetingChromeContext = createContext<MeetingChrome>({})

export const MeetingChromeProvider = ({
  actions,
  actionOrder,
  sidePanel,
  headerContent,
  overlay,
  children,
}: MeetingChrome & { children: ReactNode }): ReactNode => {
  const value = useMemo<MeetingChrome>(
    () => ({ actions, actionOrder, sidePanel, headerContent, overlay }),
    [actions, actionOrder, sidePanel, headerContent, overlay]
  )

  return (
    <MeetingChromeContext.Provider value={value}>
      {children}
    </MeetingChromeContext.Provider>
  )
}

export const useMeetingChrome = (): MeetingChrome =>
  useContext(MeetingChromeContext)
