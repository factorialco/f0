import { useCallback, useEffect, useRef, type MutableRefObject } from "react"
import { type ChatRow, rowItem } from "../utils/grouping"

/**
 * How long a post has to stay scrolled-past before it counts as read. Short
 * enough that ordinary reading clears the badge, long enough that flinging
 * through the feed to reach the composer doesn't.
 */
export const POST_READ_DWELL_MS = 1000

/**
 * Marks posts read as the reader actually goes past them.
 *
 * The chat's rule — clear everything the moment you're at the bottom AND the
 * pointer is over the panel — is wrong twice over for a feed:
 *
 * 1. **All-or-nothing.** A post is a screenful, so arriving at the end of the
 *    feed is not the same as having read the twelve posts on the way to it.
 * 2. **It needs a mouse.** `hovering` is a pointer-only signal, so a reader on
 *    a keyboard or a touch screen never clears the badge at all.
 *
 * So this advances a POINTER instead, post by post, and hands it to
 * `markRead(untilId)` — the parameter the runtime has always had and F0 has
 * never used.
 *
 * Nothing is marked while the transcript isn't ready or the tab is hidden:
 * a panel opened in the background is not reading.
 */
export const useVisiblePostReads = ({
  enabled,
  rows,
  readyRef,
  markRead,
}: {
  enabled: boolean
  rows: ChatRow[]
  /** Transcript readiness, as a REF: it is produced downstream of the scroll
   * hook this callback feeds, so it cannot be a value here. */
  readyRef: MutableRefObject<boolean>
  markRead?: (untilMessageId?: string) => void | Promise<void>
}): ((index: number) => void) => {
  const rowsRef = useRef(rows)
  rowsRef.current = rows
  const markReadRef = useRef(markRead)
  markReadRef.current = markRead

  /** Highest row index already reported — the pointer only ever moves forward,
   * so scrolling back up cannot un-read or re-report anything. */
  const reportedRef = useRef(-1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingRef = useRef<number | null>(null)

  // A conversation switch replaces the rows wholesale; a pointer from the
  // previous one would mark a stranger's posts read.
  useEffect(() => {
    reportedRef.current = -1
    pendingRef.current = null
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = null
  }, [rows.length === 0])

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    },
    []
  )

  return useCallback(
    (index: number) => {
      if (!enabled || !readyRef.current) {
        return
      }
      if (typeof document !== "undefined" && document.hidden) {
        return
      }
      if (index <= reportedRef.current) {
        return
      }

      // The pending target only ever deepens; the TIMER is never restarted. A
      // scroll reports a new index every frame, so restarting would postpone
      // the read for as long as the reader keeps moving — which is precisely
      // the case that should clear the badge.
      pendingRef.current = Math.max(pendingRef.current ?? -1, index)
      if (timerRef.current !== null) {
        return
      }

      timerRef.current = setTimeout(() => {
        timerRef.current = null
        const target = pendingRef.current
        pendingRef.current = null
        if (target === null || target <= reportedRef.current) {
          return
        }
        if (!readyRef.current) {
          return
        }
        if (typeof document !== "undefined" && document.hidden) {
          return
        }

        reportedRef.current = target
        // Walk back to the last row that IS an item: the deepest row seen may
        // be a separator or the delivery footer, which have no id to read up to.
        const currentRows = rowsRef.current
        for (let i = Math.min(target, currentRows.length - 1); i >= 0; i--) {
          const item = rowItem(currentRows[i])
          if (item) {
            void markReadRef.current?.(item.id)
            return
          }
        }
      }, POST_READ_DWELL_MS)
    },
    [enabled, readyRef]
  )
}
