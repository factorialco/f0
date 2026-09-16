import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { type VirtuosoHandle } from "react-virtuoso"
import { CHAT_TELEPORT_APPROACH_ROWS, planJump } from "../utils/virtuoso-chat"

/** Fade-out before the hidden landing. The reveal happens as the glide starts. */
export const TELEPORT_FADE_MS = 120
/**
 * Consecutive frames the scroll position must hold before a hidden phase is
 * considered settled. Virtuoso measures newly mounted rows over a few frames
 * and corrects the position after each batch; one still frame between two
 * corrections is not a settled list.
 */
export const TELEPORT_STABLE_FRAMES = 3
/** Frames a hidden phase is given to settle before the jump moves on anyway. */
export const TELEPORT_SETTLE_FRAMES = 20
/**
 * Frames the visible glide is given before arrival is checked anyway. Virtuoso
 * re-targets a smooth scroll after every re-measure, so a live tail can keep
 * the motion going; past this the jump verifies where it is and finishes.
 */
export const TELEPORT_GLIDE_FRAMES = 90
/**
 * Frames the glide is given to start moving before a still position counts as
 * arrival. A programmatic smooth scroll begins a frame or two after it is
 * issued, and those frames must not read as "already there".
 */
export const TELEPORT_GLIDE_MIN_FRAMES = 6
/** The visible glide never exceeds this many viewports. */
export const TELEPORT_MAX_GLIDE_VIEWPORTS = 1
/** Glide length when the approach rows are not measured, in viewports. */
export const TELEPORT_FALLBACK_GLIDE_VIEWPORTS = 0.75
/** How far from the true bottom still counts as having arrived at the tail. */
export const TELEPORT_BOTTOM_EPSILON_PX = 1
/** Below this much room there is no motion worth showing. */
const MIN_GLIDE_PX = 24

export type ChatViewportMeasure = {
  /** Top visible row in local index space, or null when nothing is measured. */
  index: number | null
  scrollTop: number
  scrollHeight: number
  clientHeight: number
}

export type ChatTeleport = {
  /** True while the transcript should be faded out for a jump in progress. */
  hidden: boolean
  /** Jump to a row, choosing the motion from how far away it is. */
  jumpTo: (id: string, index: number) => void
  /** Jump to the live tail with the same short directional approach. */
  jumpToBottom: () => void
  /** Abandon a jump in progress and reveal the transcript. */
  cancel: () => void
}

type TeleportTarget = {
  kind: "row" | "bottom"
  index: number
  resolveIndex: () => number | null
  align: "center" | "end"
  scrollIndex: (index: number) => number | "LAST"
}

/**
 * Two-phase navigation to a distant message.
 *
 * A continuous scroll across thousands of rows is not navigation — Virtuoso
 * mounts and measures everything it passes, the transcript blurs, and the
 * reader arrives with no idea where they are. So a far jump is cut in two: a
 * landing ON the target behind a brief fade, then a short animated approach
 * that carries the direction of travel. Near jumps keep a single continuous
 * scroll, which is cheap and reads better than a flash.
 *
 * The approach is measured, never estimated. Staging short of the target and
 * scrolling the rest would compute the remainder from rows Virtuoso has not
 * mounted yet, so the glide would be the wrong length and re-target
 * mid-flight — sometimes finishing before the reveal, sometimes stopping short
 * of the tail. Landing first mounts and measures the destination; backing off
 * by the span of the approach rows then gives a glide whose length is known.
 *
 * Every phase re-resolves the target from its message id rather than reusing
 * the index it started with: a page landing mid-jump shifts every local index,
 * and a stale number would land the reader on the wrong message.
 */
export function useChatTeleport({
  virtuosoRef,
  reducedMotion,
  resolveIndex,
  measure,
  rowSpan,
  rowCount,
  epoch,
  activeRef,
  onArriveBottom,
}: {
  virtuosoRef: React.RefObject<VirtuosoHandle | null>
  reducedMotion: boolean
  /** Current local index of a message id, or null once it leaves the window. */
  resolveIndex: (id: string) => number | null
  /** Viewport metrics and the top visible row, read at the moment it is called. */
  measure: () => ChatViewportMeasure
  /** Measured pixel span of local rows `start..end` inclusive, or null while
   * any of them is not mounted. */
  rowSpan: (start: number, end: number) => number | null
  rowCount: () => number
  /** Changes when the list remounts, which invalidates every local index. */
  epoch: string
  /** Kept true for the whole jump, glide included — longer than `hidden`. */
  activeRef?: MutableRefObject<boolean>
  /** Fired once a jump to the tail has been verified at the true bottom. */
  onArriveBottom?: () => void
}): ChatTeleport {
  const [hidden, setHidden] = useState(false)
  const runRef = useRef(0)
  const cleanupRef = useRef<(() => void) | null>(null)
  const onArriveBottomRef = useRef(onArriveBottom)
  onArriveBottomRef.current = onArriveBottom

  const setActive = useCallback(
    (value: boolean) => {
      if (activeRef) {
        activeRef.current = value
      }
    },
    [activeRef]
  )

  const cancel = useCallback(() => {
    runRef.current += 1
    cleanupRef.current?.()
    cleanupRef.current = null
    setActive(false)
    setHidden(false)
  }, [setActive])

  // A window swap renumbers every row, so a jump measured against the old one
  // can only land somewhere wrong. The entry location owns positioning after a
  // remount.
  useEffect(() => cancel, [cancel, epoch])

  // Never leave the transcript invisible behind an unmount.
  useEffect(
    () => () => {
      cleanupRef.current?.()
      setActive(false)
    },
    [setActive]
  )

  const jump = useCallback(
    (target: TeleportTarget) => {
      cancel()
      const virtuoso = virtuosoRef.current
      if (!virtuoso) {
        return
      }

      const run = runRef.current
      const live = () => runRef.current === run
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
        if (!live()) {
          return
        }
        cleanupRef.current = null
        setActive(false)
        setHidden(false)
      }
      cleanupRef.current = stop
      setActive(true)

      const scroll = (index: number | "LAST", behavior: "auto" | "smooth") => {
        virtuosoRef.current?.scrollToIndex({
          index,
          align: target.align,
          behavior,
        })
      }
      const distanceFromBottom = (m: ChatViewportMeasure) =>
        m.scrollHeight - m.scrollTop - m.clientHeight

      /**
       * Calls `next` once scrollTop has held still for `TELEPORT_STABLE_FRAMES`
       * (and `isSettled` agrees), or after `maxFrames` regardless. A phase
       * that never settles must not stall the jump.
       */
      const settle = (
        {
          maxFrames,
          minFrames,
          isSettled,
        }: {
          maxFrames: number
          minFrames: number
          isSettled: ((m: ChatViewportMeasure) => boolean) | null
        },
        next: (m: ChatViewportMeasure) => void
      ) => {
        let frames = 0
        let stable = 0
        let previousTop = Number.NaN
        const step = () => {
          frame = null
          if (!live()) {
            return
          }
          const m = measure()
          frames += 1
          stable = m.scrollTop === previousTop ? stable + 1 : 0
          previousTop = m.scrollTop
          const held =
            frames >= minFrames && stable >= TELEPORT_STABLE_FRAMES - 1
          if (
            (held && (isSettled === null || isSettled(m))) ||
            frames >= maxFrames
          ) {
            next(m)
            return
          }
          frame = requestAnimationFrame(step)
        }
        frame = requestAnimationFrame(step)
      }

      /**
       * Last phase of every jump: let the motion end, then — for the tail —
       * make sure it really ended at the bottom. Rows that were still
       * unmeasured when the glide was issued, a page landing mid-flight or a
       * message arriving during it can all leave Virtuoso's own re-targeting
       * short, and a reader parked a few pixels above the tail sees neither
       * the last message nor the typing bubble that follows it.
       */
      const complete = (attempt = 0) => {
        settle(
          {
            maxFrames: TELEPORT_GLIDE_FRAMES,
            minFrames: TELEPORT_GLIDE_MIN_FRAMES,
            isSettled: null,
          },
          (m) => {
            if (target.kind === "bottom") {
              const distance = distanceFromBottom(m)
              if (distance > TELEPORT_BOTTOM_EPSILON_PX) {
                if (
                  attempt === 0 &&
                  !reducedMotion &&
                  distance <= m.clientHeight
                ) {
                  scroll("LAST", "smooth")
                  complete(1)
                  return
                }
                scroll("LAST", "auto")
              }
              onArriveBottomRef.current?.()
            }
            finish()
          }
        )
      }

      const glide = (current: number) => {
        // Revealed as the motion starts, so the whole approach is seen.
        setHidden(false)
        scroll(target.scrollIndex(current), "smooth")
        complete()
      }

      /**
       * Step back from the landed target by the span of the approach rows —
       * mounted and measured by now, so the glide length is exact — against
       * the direction of travel, so the glide continues the jump rather than
       * doubling back on it.
       */
      const backOff = (landed: ChatViewportMeasure, startTop: number) => {
        const current = target.resolveIndex()
        if (current === null) {
          finish()
          return
        }
        const retreat: "up" | "down" =
          target.kind === "bottom" || landed.scrollTop >= startTop
            ? "up"
            : "down"
        const last = Math.max(0, rowCount() - 1)
        const span =
          retreat === "up"
            ? rowSpan(
                Math.max(0, current - CHAT_TELEPORT_APPROACH_ROWS),
                current
              )
            : rowSpan(
                current,
                Math.min(last, current + CHAT_TELEPORT_APPROACH_ROWS)
              )
        const viewport = landed.clientHeight
        const wanted =
          span !== null && span > 0
            ? Math.min(span, viewport * TELEPORT_MAX_GLIDE_VIEWPORTS)
            : Math.round(viewport * TELEPORT_FALLBACK_GLIDE_VIEWPORTS)
        const room =
          retreat === "up" ? landed.scrollTop : distanceFromBottom(landed)
        const glidePx = Math.min(wanted, Math.max(0, room))
        if (glidePx < MIN_GLIDE_PX) {
          // Nothing worth animating: reveal where we landed.
          setHidden(false)
          complete()
          return
        }
        virtuosoRef.current?.scrollBy({
          top: retreat === "up" ? -glidePx : glidePx,
        })
        settle(
          {
            maxFrames: TELEPORT_SETTLE_FRAMES,
            minFrames: 1,
            isSettled: null,
          },
          () => {
            const target2 = target.resolveIndex()
            if (target2 === null) {
              finish()
              return
            }
            glide(target2)
          }
        )
      }

      const startTop = measure().scrollTop
      const plan = planJump({
        from: measure().index,
        to: target.index,
        rowCount: rowCount(),
      })

      if (plan.kind !== "teleport" || reducedMotion) {
        scroll(
          target.scrollIndex(plan.index),
          !reducedMotion && plan.kind === "smooth" ? "smooth" : "auto"
        )
        complete()
        return
      }

      setHidden(true)
      timers.push(
        setTimeout(() => {
          if (!live()) {
            return
          }
          const current = target.resolveIndex()
          if (current === null) {
            finish()
            return
          }
          // A page may have landed during the fade and renumbered both the
          // reader and the target. Decide again from their live indices.
          const stagedPlan = planJump({
            from: measure().index,
            to: current,
            rowCount: rowCount(),
          })
          if (stagedPlan.kind !== "teleport") {
            setHidden(false)
            scroll(
              target.scrollIndex(stagedPlan.index),
              stagedPlan.kind === "smooth" ? "smooth" : "auto"
            )
            complete()
            return
          }

          // Land on the target while hidden. Virtuoso mounts and measures the
          // destination here, and re-issues the scroll after each measurement
          // batch; the settle waits for that to stop, and for the tail to be
          // the real bottom, before anything is derived from the position.
          scroll(target.scrollIndex(current), "auto")
          settle(
            {
              maxFrames: TELEPORT_SETTLE_FRAMES,
              minFrames: 2,
              isSettled:
                target.kind === "bottom"
                  ? (m) => distanceFromBottom(m) <= TELEPORT_BOTTOM_EPSILON_PX
                  : null,
            },
            (landed) => backOff(landed, startTop)
          )
        }, TELEPORT_FADE_MS)
      )
    },
    [cancel, measure, reducedMotion, rowCount, rowSpan, setActive, virtuosoRef]
  )

  const jumpTo = useCallback(
    (id: string, index: number) => {
      jump({
        kind: "row",
        index,
        resolveIndex: () => resolveIndex(id),
        align: "center",
        scrollIndex: (current) => current,
      })
    },
    [jump, resolveIndex]
  )

  const jumpToBottom = useCallback(() => {
    jump({
      kind: "bottom",
      index: Math.max(0, rowCount() - 1),
      resolveIndex: () => Math.max(0, rowCount() - 1),
      align: "end",
      scrollIndex: () => "LAST",
    })
  }, [jump, rowCount])

  return { hidden, jumpTo, jumpToBottom, cancel }
}
