import { useEffect, useRef, useState, useSyncExternalStore } from "react"

import { useReducedMotion } from "@/lib/a11y"

import { F0Coachmark } from "./F0Coachmark"
import { coachmarkStore } from "./store"
import type { CoachmarkItem } from "./types"
import { useTargetElement } from "./useTargetElement"

/**
 * HOW MANY PRESSES ON THE DIM PAGE END THE WALKTHROUGH. Five is well past a
 * mis-click and well short of a user who is simply reading with the mouse in
 * hand: by the fifth the wiggle has answered four times and the answer has
 * stopped being information.
 */
const DEFAULT_SKIP_AFTER_OUTSIDE_CLICKS = 5

/**
 * HOW LONG THE OUTGOING STEP TAKES TO GO, and how long after the action the next
 * one is committed. Matches the panel's own `duration-150` fade-out (the
 * fade-IN it comes back with is longer): leaving should feel like a dismissal
 * and arriving like an arrival, and the reader is only waiting on the second.
 */
const STEP_FADE_OUT_MS = 150

type CoachmarkProviderProps = {
  children: React.ReactNode
  /**
   * Selector for the element the panel is portalled into. Defaults to the
   * top-level overlay root, which keeps the coachmark above app content (the
   * ApplicationFrame's `isolate`, the fullscreen AI chat) while staying inside
   * `#f0-layout` so design tokens and the theme class still apply. Falls back to
   * `document.body` when the element is absent.
   */
  portalTarget?: string
}

/**
 * Drives one coachmark: which step is showing, and what the two controls do.
 *
 * Sequencing lives here rather than in the panel or in the consumer's hands. The
 * action advances to the next step and closes on the last one; the close button
 * and Escape close immediately, whatever step it is on. `onDismiss` / `onComplete`
 * are told about it after the fact — they cannot keep the coachmark open, which
 * is what "no `open` prop" buys: there is no state for a consumer to get wrong.
 */
const ActiveCoachmark = ({
  item,
  container,
}: {
  item: CoachmarkItem
  container: HTMLElement | null
}) => {
  const [index, setIndex] = useState(0)
  // THE HANDOVER BETWEEN TWO STEPS. `true` for the fade-out that runs before the
  // next step is committed — see `advanceTo`.
  const [leaving, setLeaving] = useState(false)
  const handover = useRef<ReturnType<typeof setTimeout>>()
  const reducedMotion = useReducedMotion()

  // Clamped rather than indexed directly: `coachmarks.open({ id })` can replace
  // this coachmark with a shorter sequence while it is on screen.
  const stepIndex = Math.min(index, item.steps.length - 1)
  const step = item.steps[stepIndex]
  const isLastStep = stepIndex === item.steps.length - 1

  useEffect(() => () => clearTimeout(handover.current), [])

  /**
   * Moves to the next step THROUGH A FADE, and commits it while the panel is
   * invisible: everything about a step changes at once — its copy, the element
   * it is anchored to, the page's scroll — and committing all of that on a
   * visible panel reads as a glitch rather than as a step. Faded out, the
   * reposition happens where nobody can see it, and the new step fades up
   * already in place.
   *
   * The step index is the ONLY thing the timer defers. Nothing here can leave
   * the coachmark stuck mid-fade: the close button and the shield's own ending
   * remove the item outright, and the timeout is cleared on unmount.
   */
  const advanceTo = (nextIndex: number) => {
    if (reducedMotion) {
      setIndex(nextIndex)
      return
    }
    setLeaving(true)
    handover.current = setTimeout(() => {
      setIndex(nextIndex)
      setLeaving(false)
    }, STEP_FADE_OUT_MS)
  }

  const target = useTargetElement(step.targetElement)

  // Presses on the shield, counted ACROSS THE WHOLE COACHMARK rather than per
  // step: someone pressing past the panel on every step is the exact user this
  // is for, and a per-step count would never reach the threshold. A ref, not
  // state — the panel owns the wiggle, so nothing here re-renders on a press.
  const outsidePresses = useRef(0)
  const skipAfter =
    item.skipAfterOutsideClicks ?? DEFAULT_SKIP_AFTER_OUTSIDE_CLICKS

  const close = () => coachmarkStore.removeItem(item.id)

  // `null` while the step's target is not in the DOM — see useTargetElement.
  if (!target) return null

  return (
    <F0Coachmark
      target={target}
      container={container}
      title={step.title}
      description={step.description}
      actionLabel={step.action?.label}
      arrow={step.arrow}
      side={step.side}
      align={step.align}
      sideOffset={step.sideOffset}
      step={
        item.steps.length > 1
          ? { current: stepIndex + 1, total: item.steps.length }
          : undefined
      }
      onAction={() => {
        step.action?.onClick?.()
        if (isLastStep) {
          item.onComplete?.()
          close()
        } else {
          advanceTo(stepIndex + 1)
        }
      }}
      onClose={() => {
        item.onDismiss?.()
        close()
      }}
      overlay={item.overlay}
      leaving={leaving}
      onOutsideInteraction={() => {
        outsidePresses.current += 1
        if (skipAfter <= 0 || outsidePresses.current < skipAfter) return
        // The same ending as the close button: the user asked to be out of the
        // way of the page, which is what dismissing is.
        item.onDismiss?.()
        close()
      }}
    />
  )
}

/**
 * Renders the coachmark at the head of the queue. Mounted by `F0Provider`, so
 * `coachmarks.open` works from anywhere without a hook or a wrapper component.
 */
export const CoachmarkProvider = ({
  children,
  portalTarget = "#f0-overlay-root",
}: CoachmarkProviderProps) => {
  const items = useSyncExternalStore(
    coachmarkStore.subscribe,
    coachmarkStore.getSnapshot,
    coachmarkStore.getServerSnapshot
  )

  // Elect a single renderer among all mounted providers. The store is global, so
  // without this every mounted CoachmarkProvider (e.g. one per Storybook canvas)
  // would render the same coachmark N times, stacked on the same target.
  const rendererIdRef = useRef<number | null>(null)
  const activeRendererId = useSyncExternalStore(
    coachmarkStore.subscribeRenderer,
    coachmarkStore.getActiveRendererId,
    () => null
  )
  useEffect(() => {
    const { id, release } = coachmarkStore.acquireRenderer()
    rendererIdRef.current = id
    return release
  }, [])
  const isRenderer = activeRendererId === rendererIdRef.current

  const [container, setContainer] = useState<HTMLElement | null>(null)
  useEffect(() => {
    if (typeof document === "undefined") return
    setContainer(document.querySelector<HTMLElement>(portalTarget))
  }, [portalTarget])

  // Only the head: a second coachmark would compete for the same attention, so
  // it waits. `key` resets the step index when the head changes.
  const item = items[0]

  return (
    <>
      {isRenderer && item && (
        <ActiveCoachmark key={item.id} item={item} container={container} />
      )}
      {children}
    </>
  )
}
