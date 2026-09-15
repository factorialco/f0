"use client"

import { useEffect, useRef } from "react"
import { MeetingPanelContent } from "@/sds/meetings/F0Meeting"
import { useMeetingSurfaceOptional } from "@/sds/meetings/F0Meeting/providers/MeetingSurfaceProvider"
import { useHasSidePanel, useSidePanel } from "./SidePanel/SidePanelProvider"

/** The call's claim on the panel. One call, one slot, one id. */
export const MEETING_PANEL_ID = "f0-meeting"

/**
 * The element handed to `present()`. Module-level so its identity never
 * changes: `present` stores it in the panel's state, and a fresh element on
 * every render would re-present in a loop. It takes no props for the same
 * reason — see `MeetingPanelContent`.
 */
const MEETING_PANEL_CONTENT = {
  id: MEETING_PANEL_ID,
  content: <MeetingPanelContent />,
}

/**
 * Puts the call IN the side panel — and takes it out again the moment the panel
 * stops being its.
 *
 * Renders nothing. It is the only place the meeting and the panel talk to each
 * other, and it has to be mounted inside `SidePanelProvider` and under
 * `F0Meeting`: it is the one component that needs both contexts.
 *
 * ## The whole rule
 *
 * > The call is in `panel` mode exactly while it owns the panel's content.
 *
 * That single invariant covers every case the old exclusivity effect had to
 * enumerate, and it needs no arbitration because the panel already has the
 * semantics for it: one slot, last write wins. Opening the AI chat clears
 * hosted content (`useAiChatToggle`), presenting a conversation replaces it,
 * and closing the panel takes it away — three different acts that all arrive
 * here as the same observation, "the content is no longer ours", and get the
 * same answer: pop out to a floating window rather than fight for the space.
 */
export const MeetingPanelPresenter = (): null => {
  const surface = useMeetingSurfaceOptional()
  const hasPanel = useHasSidePanel()
  const { activeContent, present, clear, open, setOpen, setLayout } =
    useSidePanel()

  const mode = surface?.mode
  const effectiveMode = surface?.effectiveMode
  const setMode = surface?.setMode
  const setPanelSlot = surface?.setPanelSlot
  const isOurs = activeContent?.id === MEETING_PANEL_ID

  // Tell the call there is somewhere to dock. Without this, `panel` would be a
  // destination the switch offers and nothing renders.
  useEffect(() => {
    if (!setPanelSlot) {
      return
    }
    setPanelSlot(hasPanel)
    return () => setPanelSlot(false)
  }, [hasPanel, setPanelSlot])

  // Docking happens on ONE event — the mode becoming `panel` — so that is the
  // only thing the effect below may depend on. Everything it uses goes through
  // this ref, `present` above all: it closes over `open`, so its identity
  // changes the moment it opens the panel, and in the deps it would tear the
  // effect down and re-run it against the state it had just produced.
  const panelRef = useRef({ open, present, clear, setOpen, setLayout })
  panelRef.current = { open, present, clear, setOpen, setLayout }
  // What the panel was doing before the call took it, so hanging up puts it
  // back instead of leaving an empty panel open over the page.
  const restoreOpenRef = useRef<boolean | null>(null)
  // Ownership as of the PREVIOUS commit. "We lost it" is only meaningful
  // against what was true a render ago, and comparing there is what keeps
  // `present` from tripping the eviction branch in the commit it runs in.
  const wasOursRef = useRef(false)

  useEffect(() => {
    if (effectiveMode !== "panel") {
      return
    }

    restoreOpenRef.current ??= panelRef.current.open
    // A fullscreen panel is a cover; a call docked beside the page is not.
    panelRef.current.setLayout("sidepanel")
    panelRef.current.present(MEETING_PANEL_CONTENT)

    return () => {
      // Only while it is still ours: once something else has claimed the
      // panel, clearing would throw away someone else's content.
      if (wasOursRef.current) {
        panelRef.current.clear()
        if (restoreOpenRef.current === false) {
          panelRef.current.setOpen(false)
        }
      }
      restoreOpenRef.current = null
    }
  }, [effectiveMode])

  useEffect(() => {
    const lost = wasOursRef.current && !isOurs
    wasOursRef.current = isOurs
    if (mode !== "panel") {
      return
    }
    // Either something else took the slot, or the panel closed under us with
    // the call still in it.
    if (lost || (isOurs && !open)) {
      setMode?.("floating")
    }
  }, [isOurs, open, mode, setMode])

  return null
}
