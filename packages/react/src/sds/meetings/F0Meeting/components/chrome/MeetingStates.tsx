import { F0Icon } from "@/components/F0Icon"
import { Spinner } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import {
  useF0MeetingRoster,
  useF0MeetingStable,
} from "../../providers/F0MeetingProvider"
import { useF0Meeting } from "../../providers/F0MeetingProvider"

const Centered = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center text-f1-foreground">
    {children}
  </div>
)

/** Full-surface state while there is nothing to render yet. */
export const MeetingConnecting = () => {
  const i18n = useI18n()
  return (
    <Centered>
      <F0Icon icon={Spinner} size="lg" state="animate" />
      <p className="text-base font-medium">{i18n.meeting.connecting}</p>
    </Centered>
  )
}

export const MeetingEnded = () => {
  const i18n = useI18n()
  const { hasReconnect, reconnect } = useF0MeetingStable()

  return (
    <Centered>
      <p className="text-base font-medium">{i18n.meeting.ended}</p>
      {hasReconnect && (
        <button
          type="button"
          onClick={reconnect}
          className={cn(
            "rounded-md bg-f1-background px-3 py-1.5 text-sm font-medium text-f1-foreground",
            focusRing()
          )}
        >
          {i18n.meeting.rejoin}
        </button>
      )}
    </Centered>
  )
}

export const MeetingError = () => {
  const i18n = useI18n()
  const runtime = useF0Meeting()
  const { hasReconnect, reconnect } = useF0MeetingStable()

  return (
    <Centered>
      <p className="text-base font-medium">
        {runtime.errorMessage ?? i18n.meeting.connectionLost}
      </p>
      {hasReconnect && (
        <button
          type="button"
          onClick={reconnect}
          className={cn(
            "rounded-md bg-f1-background px-3 py-1.5 text-sm font-medium text-f1-foreground",
            focusRing()
          )}
        >
          {i18n.meeting.rejoin}
        </button>
      )}
    </Centered>
  )
}

/**
 * A non-blocking banner. Reconnecting deliberately leaves the tiles mounted so
 * the last video frame stays frozen on screen: clearing the grid for a
 * two-second ICE restart reads as the call having dropped.
 */
export const ReconnectingBanner = () => {
  const i18n = useI18n()
  return (
    <div
      role="status"
      className="pointer-events-none absolute left-1/2 top-3 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-f1-background-warning px-3 py-1.5 text-sm font-medium text-f1-foreground-warning"
    >
      <F0Icon icon={Spinner} size="sm" state="animate" />
      {i18n.meeting.reconnecting}
    </div>
  )
}

/** Prompt shown when the browser refuses to autoplay the remote audio. */
export const AudioUnlockPrompt = () => {
  const i18n = useI18n()
  const { localMedia } = useF0MeetingRoster()

  if (!localMedia.audioBlocked || !localMedia.unlockAudio) return null

  return (
    <button
      type="button"
      onClick={() => void localMedia.unlockAudio?.()}
      className={cn(
        "absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-f1-background px-3 py-1.5 text-sm font-medium text-f1-foreground shadow-md",
        focusRing()
      )}
    >
      {i18n.meeting.audioBlocked}
    </button>
  )
}

/** Persistent notice while the call is being recorded. */
export const RecordingBanner = () => {
  const i18n = useI18n()
  const { recording } = useF0MeetingRoster()

  if (!recording?.active) return null

  return (
    <div
      role="status"
      className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-f1-background-critical-bold px-3 py-1 text-sm font-medium text-f1-foreground-inverse"
    >
      <span className="h-2 w-2 rounded-full bg-current" aria-hidden />
      {recording.consentNotice ?? i18n.meeting.recording}
    </div>
  )
}
