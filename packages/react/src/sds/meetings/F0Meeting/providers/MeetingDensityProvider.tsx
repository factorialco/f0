"use client"

import { createContext, useContext, type ReactNode } from "react"
import { type MeetingDensity } from "../layout/density"

/**
 * The room's density, published by whichever shell is hosting it — the floating
 * window from its own rect, the side panel from its measured box.
 *
 * A context rather than a prop because the two things that have to agree about
 * it are not in the same subtree: the title bar is a sibling of the room, and
 * the action bar is three levels inside it. Threading it through would also put
 * it on `F0MeetingRoomProps`, which is public API, for something no host should
 * have to answer.
 *
 * Defaults to `regular`: a room rendered outside a shell (a story, a test) is
 * not a cramped room, it is an unmeasured one.
 */
const MeetingDensityContext = createContext<MeetingDensity>("regular")

export const MeetingDensityProvider = ({
  density,
  children,
}: {
  density: MeetingDensity
  children: ReactNode
}): ReactNode => (
  <MeetingDensityContext.Provider value={density}>
    {children}
  </MeetingDensityContext.Provider>
)

export const useMeetingDensity = (): MeetingDensity =>
  useContext(MeetingDensityContext)
