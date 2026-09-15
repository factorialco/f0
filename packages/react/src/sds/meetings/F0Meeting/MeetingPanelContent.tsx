"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MeetingHeader } from "./components/chrome/MeetingHeader"
import { F0MeetingRoom } from "./F0MeetingRoom"
import { densityFor, HEADER_HEIGHT } from "./layout/density"
import { useMeasuredBox } from "./layout/useMeasuredBox"
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
 */
export const MeetingPanelContent = (): ReactNode => {
  const { actions, actionOrder, sidePanel, headerContent, overlay } =
    useMeetingChrome()
  // The panel decides how wide it is, so unlike the floating window the room
  // has to measure what it was given. The density table is the same one, so a
  // panel and a window of equal size get identical chrome.
  const [boxRef, box] = useMeasuredBox<HTMLDivElement>()
  const density = densityFor(box)

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
