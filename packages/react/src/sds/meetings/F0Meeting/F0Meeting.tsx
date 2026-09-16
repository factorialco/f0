"use client"

import { type ReactNode } from "react"
import { F0MeetingSurface } from "./F0MeetingSurface"
import { F0MeetingProvider } from "./providers/F0MeetingProvider"
import { MeetingChromeProvider } from "./providers/MeetingChromeProvider"
import { MeetingSurfaceProvider } from "./providers/MeetingSurfaceProvider"
import { type F0MeetingProviderProps } from "./types"

/**
 * Makes a meeting available to the app and renders its surface.
 *
 * `runtime: null` means there is no call: no window exists and the meeting hooks
 * throw, exactly as they do outside a provider. This mirrors `F0AiChatProvider`
 * — the host owns the transport, F0 owns the UI.
 *
 * The providers render whether or not there is a call, and ONLY the surface is
 * conditional. That is load-bearing: `children` here is the host's entire
 * application, and if it moved between the root and three providers deep as a
 * call starts, React would reconcile the two shapes as different elements and
 * remount the whole app — losing all component state and, for a host that
 * fetches on mount, re-issuing every request on screen.
 *
 * `children` cannot simply sit outside the providers instead: in `panel` mode
 * the room renders as side-panel content, which the host mounts from within its
 * own tree, so it has to be able to read the meeting from here.
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
}: F0MeetingProviderProps): ReactNode => (
  <F0MeetingProvider runtime={runtime ?? null}>
    <MeetingSurfaceProvider
      defaultMode={defaultMode}
      roomId={runtime?.room.id ?? ""}
    >
      <MeetingChromeProvider
        actions={actions}
        actionOrder={actionOrder}
        sidePanel={sidePanel}
        headerContent={headerContent}
        overlay={overlay}
      >
        {children}
        {runtime ? <F0MeetingSurface /> : null}
      </MeetingChromeProvider>
    </MeetingSurfaceProvider>
  </F0MeetingProvider>
)
