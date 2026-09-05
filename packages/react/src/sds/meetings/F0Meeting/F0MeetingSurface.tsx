"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { MeetingLiveRegion } from "./components/chrome/MeetingLiveRegion"
import { MeetingHeader } from "./components/chrome/MeetingHeader"
import { MeetingControlBar } from "./components/controls/MeetingControlBar"
import { mergeActions } from "./components/controls/merge-actions"
import { useSynthesizedActions } from "./components/controls/useSynthesizedActions"
import { F0MeetingRoom } from "./F0MeetingRoom"
import { useF0Meeting } from "./providers/F0MeetingProvider"
import { useMeetingSurface } from "./providers/MeetingSurfaceProvider"
import { type F0MeetingActionsProp, type F0MeetingSidePanel } from "./types"
import { FloatingWindow } from "./window/FloatingWindow"

export type F0MeetingSurfaceProps = {
  actions?: F0MeetingActionsProp
  actionOrder?: string[]
  sidePanel?: F0MeetingSidePanel
  headerContent?: React.ReactNode
  overlay?: React.ReactNode
}

/** The pinned controls a minimized pill keeps: mic and hang up, nothing else. */
const MinimizedActions = ({
  actions,
  actionOrder,
}: {
  actions?: F0MeetingActionsProp
  actionOrder?: string[]
}) => {
  const runtime = useF0Meeting()
  const core = useSynthesizedActions()
  const host = typeof actions === "function" ? actions(runtime) : actions
  return <MeetingControlBar actions={mergeActions(core, host, actionOrder)} />
}

/**
 * Mounts the room into a portal on `document.body`, once, for the whole life of
 * the meeting.
 *
 * It lives outside the application frame on purpose. The frame's root is
 * `overflow-hidden` and contains transformed elements, and a transformed
 * ancestor breaks `position: fixed` for everything inside it — which is exactly
 * what a free-floating window needs. Portalling also keeps the frame's own
 * z-index map untouched: the surface only claims the 40–49 band at body level,
 * deliberately below Radix dialogs so a modal can still cover the call.
 */
export const F0MeetingSurface = ({
  actions,
  actionOrder,
  sidePanel,
  headerContent,
  overlay,
}: F0MeetingSurfaceProps) => {
  const { effectiveMode } = useMeetingSurface()
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const element = document.createElement("div")
    element.setAttribute("data-f0-meeting-layer", "")
    element.className = "pointer-events-none"
    document.body.appendChild(element)
    setContainer(element)
    return () => {
      element.remove()
    }
  }, [])

  // Fullscreen is the only modal mode, so it is the only one that takes the
  // rest of the app out of the accessibility tree. Announcing `aria-modal`
  // without doing this would tell a screen reader the page is unreachable
  // while it is still perfectly reachable by tabbing.
  useEffect(() => {
    if (!container || effectiveMode !== "fullscreen") return
    const siblings = Array.from(document.body.children).filter(
      (child) => child !== container && !child.hasAttribute("inert")
    )
    siblings.forEach((sibling) => sibling.setAttribute("inert", ""))
    return () => {
      siblings.forEach((sibling) => sibling.removeAttribute("inert"))
    }
  }, [container, effectiveMode])

  if (!container) return null

  return createPortal(
    <>
      <MeetingLiveRegion />
      <FloatingWindow
        header={
          <MeetingHeader
            extra={
              // A minimized pill is only a title bar, so its two surviving
              // controls ride in the header rather than in a hidden body.
              effectiveMode === "minimized" ? (
                <MinimizedActions actions={actions} actionOrder={actionOrder} />
              ) : (
                headerContent
              )
            }
          />
        }
      >
        <F0MeetingRoom
          actions={actions}
          actionOrder={actionOrder}
          sidePanel={sidePanel}
          overlay={overlay}
        />
      </FloatingWindow>
    </>,
    container
  )
}
