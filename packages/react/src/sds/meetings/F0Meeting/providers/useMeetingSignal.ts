import { useCallback, useSyncExternalStore } from "react"

import { type F0MeetingSignal } from "../types"
import { useF0MeetingRoster } from "./F0MeetingProvider"
import { EMPTY_SIGNAL } from "./MeetingSignalStore"

const noopSubscribe = (): (() => void) => () => {}
const EMPTY_SPEAKERS: readonly string[] = []

/**
 * Subscribes to one participant's volatile signals. Call it as deep in the tree
 * as possible — ideally in the leaf that draws the waveform — so an audio burst
 * repaints a handful of bars instead of the whole tile.
 *
 * When the host provides no signal store the hook returns a frozen default, so
 * the room degrades to muted flags with no waveform instead of breaking.
 */
export const useMeetingSignal = (participantId: string): F0MeetingSignal => {
  const { signals } = useF0MeetingRoster()

  const subscribe = useCallback(
    (listener: () => void) =>
      signals ? signals.subscribe(participantId, listener) : noopSubscribe(),
    [signals, participantId]
  )

  const getSnapshot = useCallback(
    () => (signals ? signals.getSnapshot(participantId) : EMPTY_SIGNAL),
    [signals, participantId]
  )

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

/** The set of currently speaking participants, for the layout's ordering. */
export const useMeetingSpeakers = (): readonly string[] => {
  const { signals } = useF0MeetingRoster()

  const subscribe = useCallback(
    (listener: () => void) =>
      signals ? signals.subscribeSpeakers(listener) : noopSubscribe(),
    [signals]
  )

  const getSnapshot = useCallback(
    () => (signals ? signals.getSpeakers() : EMPTY_SPEAKERS),
    [signals]
  )

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
