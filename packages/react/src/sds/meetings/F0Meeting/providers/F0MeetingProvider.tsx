"use client"

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
} from "react"

import {
  type F0MeetingBinding,
  type F0MeetingCapabilities,
  type F0MeetingLocalMedia,
  type F0MeetingParticipant,
  type F0MeetingRecording,
  type F0MeetingRoomInfo,
  type F0MeetingRuntime,
  type F0MeetingSignalStore,
  type F0MeetingStatus,
} from "../types"

/**
 * The full runtime. Hosts rebuild this object on every transport event, so only
 * components that genuinely need the live values may read it.
 */
const F0MeetingContext = createContext<F0MeetingRuntime | null>(null)

/**
 * The slow-moving slice, behind a SEPARATE context with a stable value. LiveKit
 * emits audio levels, speaking changes and quality updates at 10–20 Hz per
 * participant; anything mounted per-tile that read the full runtime would
 * re-render on every one of them, defeating the tile memoization.
 *
 * The action callbacks are identity-stable delegates into the latest runtime.
 */
export type F0MeetingStable = {
  roomId: string
  localParticipantId: string
  capabilities?: F0MeetingCapabilities
  /**
   * Presence flags, not the callbacks themselves: optional runtime actions gate
   * UI affordances by PRESENCE, so the memo tracks presence, not identity.
   */
  hasScreenShare: boolean
  hasRecording: boolean
  hasReactions: boolean
  hasRaiseHand: boolean
  hasModeration: boolean
  hasReconnect: boolean
  setMicrophoneEnabled: (enabled: boolean) => void
  setCameraEnabled: (enabled: boolean) => void
  setScreenShareEnabled: (enabled: boolean) => void
  setHandRaised: (raised: boolean) => void
  sendReaction: (emoji: string) => void
  muteParticipant: (participantId: string) => void
  removeParticipant: (participantId: string) => void
  reconnect: () => void
  leave: () => void
}

const F0MeetingStableContext = createContext<F0MeetingStable | null>(null)

/** The roster slice: changes on join/leave/publish, not on every packet. */
export type F0MeetingRoster = {
  room: F0MeetingRoomInfo
  status: F0MeetingStatus
  participants: F0MeetingParticipant[]
  localMedia: F0MeetingLocalMedia
  recording?: F0MeetingRecording
  signals?: F0MeetingSignalStore
}

const F0MeetingRosterContext = createContext<F0MeetingRoster | null>(null)

/**
 * Track bindings live in a ref, never in state: attaching a track must not be
 * able to trigger a render, and the map is only ever read from a layout effect.
 */
type BindingMap = Map<string, F0MeetingBinding>

const F0MeetingBindingContext =
  createContext<React.MutableRefObject<BindingMap> | null>(null)

/** Keeps the previous capabilities object while its fields are unchanged, so a
 * host rebuilding `{ canShareScreen: true }` per render doesn't churn the
 * context. */
const useStableCapabilities = (
  capabilities: F0MeetingCapabilities | undefined
): F0MeetingCapabilities | undefined => {
  const previousRef = useRef(capabilities)
  const previous = previousRef.current
  const same =
    previous === capabilities ||
    (previous != null &&
      capabilities != null &&
      previous.canPublishAudio === capabilities.canPublishAudio &&
      previous.canPublishVideo === capabilities.canPublishVideo &&
      previous.canShareScreen === capabilities.canShareScreen &&
      previous.canRecord === capabilities.canRecord &&
      previous.canMuteOthers === capabilities.canMuteOthers &&
      previous.canRemoveParticipants === capabilities.canRemoveParticipants &&
      previous.canModerate === capabilities.canModerate)
  if (!same) previousRef.current = capabilities
  return same ? previous : capabilities
}

/**
 * Makes a {@link F0MeetingRuntime} available to the meeting UI. The host owns
 * the runtime (a mock in stories, a LiveKit adapter in factorial); F0 only
 * reads it and never imports the transport.
 */
export const F0MeetingProvider = ({
  runtime,
  children,
}: {
  runtime: F0MeetingRuntime
  children: ReactNode
}): ReactNode => {
  const runtimeRef = useRef(runtime)
  runtimeRef.current = runtime

  const bindingsRef = useRef<BindingMap>(new Map())
  const bindings = bindingsRef.current
  const seen = new Set<string>()
  for (const participant of runtime.participants) {
    for (const track of participant.tracks) {
      seen.add(track.bindingKey)
      if (track.binding) bindings.set(track.bindingKey, track.binding)
    }
  }
  for (const key of bindings.keys()) {
    if (!seen.has(key)) bindings.delete(key)
  }

  const capabilities = useStableCapabilities(runtime.capabilities)

  const stable = useMemo<F0MeetingStable>(
    () => ({
      roomId: runtime.room.id,
      localParticipantId: runtime.localParticipantId,
      capabilities,
      hasScreenShare: Boolean(runtimeRef.current.setScreenShareEnabled),
      hasRecording: Boolean(runtimeRef.current.startRecording),
      hasReactions: Boolean(runtimeRef.current.sendReaction),
      hasRaiseHand: Boolean(runtimeRef.current.setHandRaised),
      hasModeration: Boolean(
        runtimeRef.current.muteParticipant ??
        runtimeRef.current.removeParticipant
      ),
      hasReconnect: Boolean(runtimeRef.current.reconnect),
      setMicrophoneEnabled: (enabled) => {
        void runtimeRef.current.setMicrophoneEnabled(enabled)
      },
      setCameraEnabled: (enabled) => {
        void runtimeRef.current.setCameraEnabled(enabled)
      },
      setScreenShareEnabled: (enabled) => {
        void runtimeRef.current.setScreenShareEnabled?.(enabled)
      },
      setHandRaised: (raised) => {
        void runtimeRef.current.setHandRaised?.(raised)
      },
      sendReaction: (emoji) => {
        void runtimeRef.current.sendReaction?.(emoji)
      },
      muteParticipant: (participantId) => {
        void runtimeRef.current.muteParticipant?.(participantId)
      },
      removeParticipant: (participantId) => {
        void runtimeRef.current.removeParticipant?.(participantId)
      },
      reconnect: () => {
        void runtimeRef.current.reconnect?.()
      },
      leave: () => {
        void runtimeRef.current.leave()
      },
    }),
    [
      runtime.room.id,
      runtime.localParticipantId,
      capabilities,
      // Presence, not identity: adding or losing a capability changes the UI.
      Boolean(runtime.setScreenShareEnabled),
      Boolean(runtime.startRecording),
      Boolean(runtime.sendReaction),
      Boolean(runtime.setHandRaised),
      Boolean(runtime.muteParticipant ?? runtime.removeParticipant),
      Boolean(runtime.reconnect),
    ]
  )

  const roster = useMemo<F0MeetingRoster>(
    () => ({
      room: runtime.room,
      status: runtime.status,
      participants: runtime.participants,
      localMedia: runtime.localMedia,
      recording: runtime.recording,
      signals: runtime.signals,
    }),
    [
      runtime.room,
      runtime.status,
      runtime.participants,
      runtime.localMedia,
      runtime.recording,
      runtime.signals,
    ]
  )

  return (
    <F0MeetingContext.Provider value={runtime}>
      <F0MeetingStableContext.Provider value={stable}>
        <F0MeetingBindingContext.Provider value={bindingsRef}>
          <F0MeetingRosterContext.Provider value={roster}>
            {children}
          </F0MeetingRosterContext.Provider>
        </F0MeetingBindingContext.Provider>
      </F0MeetingStableContext.Provider>
    </F0MeetingContext.Provider>
  )
}

export const useF0Meeting = (): F0MeetingRuntime => {
  const context = useContext(F0MeetingContext)
  if (!context) {
    throw new Error("useF0Meeting must be used within an F0MeetingProvider")
  }
  return context
}

export const useF0MeetingStable = (): F0MeetingStable => {
  const context = useContext(F0MeetingStableContext)
  if (!context) {
    throw new Error(
      "useF0MeetingStable must be used within an F0MeetingProvider"
    )
  }
  return context
}

export const useF0MeetingRoster = (): F0MeetingRoster => {
  const context = useContext(F0MeetingRosterContext)
  if (!context) {
    throw new Error(
      "useF0MeetingRoster must be used within an F0MeetingProvider"
    )
  }
  return context
}

export const useF0MeetingBindings = (): React.MutableRefObject<BindingMap> => {
  const context = useContext(F0MeetingBindingContext)
  if (!context) {
    throw new Error(
      "useF0MeetingBindings must be used within an F0MeetingProvider"
    )
  }
  return context
}
