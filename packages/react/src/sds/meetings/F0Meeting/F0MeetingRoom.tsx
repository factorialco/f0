import { useMemo } from "react"

import { MeetingAudioRenderer } from "./components/audio/MeetingAudioRenderer"
import {
  AudioUnlockPrompt,
  MeetingConnecting,
  MeetingEnded,
  MeetingError,
  ReconnectingBanner,
  RecordingBanner,
} from "./components/chrome/MeetingStates"
import { MeetingControlBar } from "./components/controls/MeetingControlBar"
import { mergeActions } from "./components/controls/merge-actions"
import { useSynthesizedActions } from "./components/controls/useSynthesizedActions"
import { MeetingGrid } from "./components/grid/MeetingGrid"
import { useF0MeetingRoster } from "./providers/F0MeetingProvider"
import { useF0Meeting } from "./providers/F0MeetingProvider"
import { useMeetingSurface } from "./providers/MeetingSurfaceProvider"
import { type F0MeetingActionsProp } from "./types"

export type F0MeetingRoomProps = {
  actions?: F0MeetingActionsProp
  actionOrder?: string[]
  sidePanel?: React.ReactNode
  overlay?: React.ReactNode
}

/**
 * The room itself: grid, controls and state chrome. It knows nothing about the
 * window that hosts it — the surface owns position, size and mode, exactly as
 * `F0Chat` takes its window controls as callbacks.
 */
export const F0MeetingRoom = ({
  actions,
  actionOrder,
  sidePanel,
  overlay,
}: F0MeetingRoomProps) => {
  const runtime = useF0Meeting()
  const { status } = useF0MeetingRoster()
  const { effectiveMode } = useMeetingSurface()
  const coreActions = useSynthesizedActions()

  const hostActions = useMemo(
    () => (typeof actions === "function" ? actions(runtime) : actions),
    [actions, runtime]
  )

  const resolvedActions = useMemo(
    () => mergeActions(coreActions, hostActions, actionOrder),
    [coreActions, hostActions, actionOrder]
  )

  if (status === "connecting" || status === "idle") return <MeetingConnecting />
  if (status === "error") return <MeetingError />
  if (status === "disconnected") return <MeetingEnded />

  const isCompact = effectiveMode === "minimized"

  return (
    <div className="relative flex h-full w-full flex-col">
      {overlay}
      {status === "reconnecting" && <ReconnectingBanner />}
      <RecordingBanner />
      <AudioUnlockPrompt />

      <div className="flex min-h-0 flex-1">
        <div className="relative min-w-0 flex-1 p-2">
          <MeetingGrid />
        </div>
        {sidePanel}
      </div>

      {!isCompact && (
        <div className="shrink-0 px-2 pb-2">
          <MeetingControlBar actions={resolvedActions} />
        </div>
      )}

      {/* Mounted once, outside the grid, so pagination and layout changes can
          never interrupt someone mid-sentence. */}
      <MeetingAudioRenderer />
    </div>
  )
}
