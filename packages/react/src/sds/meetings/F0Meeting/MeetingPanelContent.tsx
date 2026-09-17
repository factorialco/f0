"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MeetingHeader } from "./components/chrome/MeetingHeader"
import { F0MeetingRoom } from "./F0MeetingRoom"
import { densityFor, HEADER_HEIGHT } from "./layout/density"
import { useMeasuredBox } from "./layout/useMeasuredBox"
import { useHasF0Meeting } from "./providers/F0MeetingProvider"
import { useMeetingChrome } from "./providers/MeetingChromeProvider"
import { MeetingDensityProvider } from "./providers/MeetingDensityProvider"

/**
 * The room AS THE SIDE PANEL'S CONTENT — not a window that covers it.
 *
 * Everything `FloatingWindow` would draw is deliberately absent: the card, the
 * border, the shadow, the rect, the drag handles and the resize seam all belong
 * to the panel, which already has one of each. What is left is the header row
 * and the room, filling whatever space the panel gives them.
 *
 * It takes no props ON PURPOSE. The element is handed to `present()` and stored
 * in the panel's state, so it must be referentially stable — a fresh element on
 * every render would re-present in a loop. Everything the chrome needs comes
 * from {@link useMeetingChrome} instead.
 *
 * ## Why it renders nothing when there is no call
 *
 * That same `present()` is what makes this OUTLIVE the call. The element lives
 * in the side panel's state, in the host's tree, so it is not removed with the
 * meeting surface — it is taken out by `MeetingPanelPresenter`'s effect cleanup,
 * a whole commit after the runtime became null. There is therefore exactly one
 * render where this is on screen with no call behind it, and reading the meeting
 * there used to throw and take the page down on hanging up.
 */
export const MeetingPanelContent = (): ReactNode => {
  const hasMeeting = useHasF0Meeting()
  const { actions, actionOrder, sidePanel, headerContent, overlay } =
    useMeetingChrome()
  // The panel decides how wide it is, so unlike the floating window the room
  // has to measure what it was given. The density table is the same one, so a
  // panel and a window of equal size get identical chrome.
  const [boxRef, box] = useMeasuredBox<HTMLDivElement>()
  const density = densityFor(box)

  // Every hook above has run, as they must. Below this line the room reads the
  // runtime, so there is nothing to draw.
  if (!hasMeeting) {
    return null
  }

  return (
    <MeetingDensityProvider density={density}>
      <div
        ref={boxRef}
        data-testid="meeting-window"
        data-mode="panel"
        className="flex h-full w-full flex-col"
      >
        <div
          style={{ height: HEADER_HEIGHT[density] }}
          className={cn(
            "relative flex shrink-0 items-center gap-2",
            density === "tight" ? "px-2" : "px-3"
          )}
        >
          <MeetingHeader extra={headerContent} />
        </div>
        <div className="relative min-h-0 flex-1">
          <F0MeetingRoom
            actions={actions}
            actionOrder={actionOrder}
            sidePanel={sidePanel}
            overlay={overlay}
          />
        </div>
      </div>
    </MeetingDensityProvider>
  )
}
