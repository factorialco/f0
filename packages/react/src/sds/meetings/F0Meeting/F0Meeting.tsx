"use client"

import { type ReactNode } from "react"

import { F0MeetingSurface } from "./F0MeetingSurface"
import { F0MeetingProvider } from "./providers/F0MeetingProvider"
import { MeetingSurfaceProvider } from "./providers/MeetingSurfaceProvider"
import { type F0MeetingProviderProps } from "./types"

/**
 * Makes a meeting available to the app and renders its surface.
 *
 * `runtime: null` means there is no call: nothing mounts, and no window exists.
 * This mirrors `F0AiChatProvider` — the host owns the transport, F0 owns the UI.
 */
export const F0Meeting = ({
  runtime,
  actions,
  actionOrder,
  defaultMode = "fullscreen",
  sidePanel,
  headerContent,
  overlay,
  children,
}: F0MeetingProviderProps): ReactNode => {
  if (!runtime) return children

  return (
    <F0MeetingProvider runtime={runtime}>
      <MeetingSurfaceProvider
        defaultMode={defaultMode}
        roomId={runtime.room.id}
      >
        {children}
        <F0MeetingSurface
          actions={actions}
          actionOrder={actionOrder}
          sidePanel={sidePanel}
          headerContent={headerContent}
          overlay={overlay}
        />
      </MeetingSurfaceProvider>
    </F0MeetingProvider>
  )
}
