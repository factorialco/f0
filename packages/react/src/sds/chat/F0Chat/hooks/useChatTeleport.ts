import { useCallback, useEffect, useRef, useState } from "react"
import { type VirtuosoHandle } from "react-virtuoso"
import { planJump } from "../utils/virtuoso-chat"

/** Fade-out before the hidden reposition, and fade-in after the approach. */
export const TELEPORT_FADE_MS = 120
/**
 * How long the approach is given before the transcript is revealed again.
 * Virtuoso's smooth scroll re-targets after re-measure, so this is a reveal
 * deadline, not the animation's duration — the reader sees the tail of the
 * motion either way, and an overrun must never leave the list hidden.
 */
export const TELEPORT_APPROACH_MS = 320
/**
 * Frames the staged region is given to render and hold still before the
 * approach starts. Variable row heights settle over a few frames as Virtuoso
 * measures them; past this the approach runs anyway rather than stalling.
 */
export const TELEPORT_SETTLE_FRAMES = 20

export type ChatTeleport = {
  /** True while the transcript should be faded out for a jump in progress. */
  hidden: boolean
  /** Jump to a row, choosing the motion from how far away it is. */
  jumpTo: (id: string, index: number) => void
  /** Abandon a jump in progress and reveal the transcript. */
  cancel: () => void
}

/**
 * Two-phase navigation to a distant message.
 *
 * A continuous scroll across thousands of rows is not navigation — Virtuoso
 * mounts and measures everything it passes, the transcript blurs, and the
 * reader arrives with no idea where they are. So a far jump is cut in two: a
 * reposition to just short of the target, hidden behind a brief fade, then a
 * short animated approach that carries the direction of travel, then the
 * reveal. Near jumps keep a single continuous scroll, which is cheap and reads
 * better than a flash.
 *
 * Every phase re-resolves the target from its message id rather than reusing
 * the index it started with: a page landing mid-jump shifts every local index,
 * and a stale number would land the reader on the wrong message.
 */
export function useChatTeleport({
  virtuosoRef,
  reducedMotion,
  resolveIndex,
  measureFrom,
  rowCount,
  epoch,
}: {
  virtuosoRef: React.RefObject<VirtuosoHandle | null>
  reducedMotion: boolean
  /** Current local index of a message id, or null once it leaves the window. */
  resolveIndex: (id: string) => number | null
  /** Top visible row and current scrollTop, read at the moment it is called. */
  measureFrom: () => { index: number | null; scrollTop: number }
  rowCount: () => number
  /** Changes when the list remounts, which invalidates every local index. */
  epoch: string
}): ChatTeleport {
  const [hidden, setHidden] = useState(false)
  const runRef = useRef(0)
  const cleanupRef = useRef<(() => void) | null>(null)

  const cancel = useCallback(() => {
    runRef.current += 1
    cleanupRef.current?.()
    cleanupRef.current = null
    setHidden(false)
  }, [])

  // A window swap renumbers every row, so a jump measured against the old one
  // can only land somewhere wrong. The entry location owns positioning after a
  // remount.
  useEffect(() => cancel, [cancel, epoch])

  // Never leave the transcript invisible behind an unmount.
  useEffect(() => () => cleanupRef.current?.(), [])

  const jumpTo = useCallback(
    (id: string, index: number) => {
      cancel()
      const virtuoso = virtuosoRef.current
      if (!virtuoso) {
        return
      }

      const plan = planJump({
        from: measureFrom().index,
        to: index,
        rowCount: rowCount(),
      })

      if (plan.kind !== "teleport" || reducedMotion) {
        virtuoso.scrollToIndex({
          index: plan.index,
          align: "center",
          behavior:
            plan.kind === "smooth" && !reducedMotion ? "smooth" : "auto",
        })
        return
      }

      const run = runRef.current
      const timers: ReturnType<typeof setTimeout>[] = []
      let frame: number | null = null
      const stop = () => {
        timers.forEach(clearTimeout)
        if (frame !== null) {
          cancelAnimationFrame(frame)
          frame = null
        }
      }
      const finish = () => {
        stop()
        if (runRef.current === run) {
          cleanupRef.current = null
          setHidden(false)
        }
      }
      cleanupRef.current = stop
      setHidden(true)

      timers.push(
        setTimeout(() => {
          if (runRef.current !== run) {
            return
          }
          virtuosoRef.current?.scrollToIndex({
            index: plan.staging,
            align: "center",
            behavior: "auto",
          })

          // Hold until the staged region has stopped moving. Rows measured
          // during the approach would otherwise drag the animation's own target
          // out from under it, which is what makes a smooth far scroll overshoot.
          let frames = 0
          let previousTop = Number.NaN
          const settle = () => {
            if (runRef.current !== run) {
              return
            }
            const current = resolveIndex(id)
            if (current === null) {
              // The row left the window while we were staging — there is
              // nothing left to approach, and guessing would be worse.
              finish()
              return
            }
            const { scrollTop } = measureFrom()
            const settled = scrollTop === previousTop
            previousTop = scrollTop
            frames += 1

            if (settled || frames >= TELEPORT_SETTLE_FRAMES) {
              virtuosoRef.current?.scrollToIndex({
                index: current,
                align: "center",
                behavior: "smooth",
              })
              timers.push(setTimeout(finish, TELEPORT_APPROACH_MS))
              return
            }
            frame = requestAnimationFrame(settle)
          }
          frame = requestAnimationFrame(settle)
        }, TELEPORT_FADE_MS)
      )
    },
    [cancel, measureFrom, reducedMotion, resolveIndex, rowCount, virtuosoRef]
  )

  return { hidden, jumpTo, cancel }
}
