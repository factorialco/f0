import { useEffect, useRef, useState, useSyncExternalStore } from "react"

import { F0Coachmark } from "./F0Coachmark"
import { coachmarkStore } from "./store"
import type { CoachmarkItem } from "./types"
import { useTargetElement } from "./useTargetElement"

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

  // Clamped rather than indexed directly: `coachmarks.open({ id })` can replace
  // this coachmark with a shorter sequence while it is on screen.
  const stepIndex = Math.min(index, item.steps.length - 1)
  const step = item.steps[stepIndex]
  const isLastStep = stepIndex === item.steps.length - 1

  const target = useTargetElement(step.targetElement)

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
          setIndex(stepIndex + 1)
        }
      }}
      onClose={() => {
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
