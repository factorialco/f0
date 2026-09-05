import { useLayoutEffect, useRef } from "react"

import { type F0MeetingTrack } from "../types"
import { useF0MeetingBindings } from "./F0MeetingProvider"

/**
 * Attaches a track to a media element F0 owns.
 *
 * The effect depends ONLY on `bindingKey`. Hosts rebuild the runtime — and with
 * it every `binding` closure — on each transport event, so depending on the
 * function's identity would detach and re-attach the element around twenty
 * times a second, black-flashing the video continuously.
 */
export const useTrackBinding = <T extends HTMLMediaElement>(
  track: F0MeetingTrack | undefined
): React.RefObject<T> => {
  const bindingsRef = useF0MeetingBindings()
  const ref = useRef<T>(null)
  const bindingKey = track?.bindingKey

  useLayoutEffect(() => {
    const element = ref.current
    if (!element || !bindingKey) return
    const binding = bindingsRef.current.get(bindingKey)
    if (!binding) return
    return binding(element)
  }, [bindingKey, bindingsRef])

  return ref
}
