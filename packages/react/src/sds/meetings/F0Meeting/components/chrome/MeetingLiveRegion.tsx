import { useEffect, useRef, useState } from "react"

import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"

const THROTTLE_MS = 2000

/**
 * Single polite live region for the whole room. Announcements are throttled and
 * coalesced: a busy call produces joins, leaves, mutes and window moves in
 * bursts, and reading every one of them aloud makes the room unusable with a
 * screen reader.
 */
export const MeetingLiveRegion = () => {
  const { liveMessage } = useMeetingSurface()
  const [announced, setAnnounced] = useState("")
  const lastAtRef = useRef(0)
  const pendingRef = useRef<string | null>(null)

  useEffect(() => {
    if (!liveMessage) return

    const flush = (): void => {
      const message = pendingRef.current
      pendingRef.current = null
      if (message === null) return
      lastAtRef.current = Date.now()
      setAnnounced(message)
    }

    const elapsed = Date.now() - lastAtRef.current
    pendingRef.current = liveMessage

    if (elapsed >= THROTTLE_MS) {
      flush()
      return
    }

    const timeout = setTimeout(flush, THROTTLE_MS - elapsed)
    return () => clearTimeout(timeout)
  }, [liveMessage])

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {announced}
    </div>
  )
}
