import { nanoid } from "nanoid"

import { coachmarks } from "./imperative"
import type {
  CoachmarkEnd,
  CoachmarkId,
  CoachmarkStep,
  CoachmarkTarget,
} from "./types"

/**
 * The attribute a guidance's `anchor()` writes, and the one its steps are
 * resolved through. A data attribute rather than the `id` attribute: an id is
 * the page's own namespace — one per document, handed out by whatever renders
 * the element — and a walkthrough that claimed ids would collide with the app's
 * own the first time two of them named the same thing.
 */
const ANCHOR_ATTRIBUTE = "data-f0-coachmark"

/** How long `start()` keeps looking for targets that are not on the page yet. */
const DEFAULT_LOOK_FOR_TARGETS_MS = 2000
/**
 * How often it looks. Coarse on purpose: nothing here is animating, and a
 * walkthrough that opens 50ms after its last element arrived is indistinguishable
 * from one that opened on the frame it did.
 */
const LOOK_FOR_TARGETS_INTERVAL_MS = 50

/**
 * Whether a step has something to point at RIGHT NOW. The same resolution
 * `useTargetElement` does when the coachmark is on screen, asked early — the
 * difference being what the answer is for: there, `null` means "wait for it";
 * here it means "leave this step out".
 */
const isOnPage = (step: CoachmarkStep): boolean => {
  const target = step.targetElement
  if (target === undefined) return false
  if (typeof target !== "string") return target.isConnected
  return document.querySelector(target) !== null
}

/**
 * One step of a walkthrough. It points either at a NAME the guidance knows —
 * marked on the element with `anchor()` — or, for an element you cannot put
 * props on (something a library renders), straight at a selector or an element.
 */
export type CoachmarkGuidanceStep<TElement extends string> = Omit<
  CoachmarkStep,
  "targetElement"
> &
  (
    | { element: TElement; targetElement?: never }
    | { element?: never; targetElement: CoachmarkTarget }
  )

export type CoachmarkGuidanceOptions<TElement extends string> = {
  /**
   * Stable identity, so starting the same guidance twice shows ONE walkthrough.
   * Defaults to a generated id.
   */
  id?: CoachmarkId
  /** The walkthrough, in order. */
  steps: readonly CoachmarkGuidanceStep<TElement>[]
  /**
   * Spotlight each step's element and shield the page from the pointer.
   * Defaults to `true` — a walkthrough is a sequence, and a page you can act on
   * mid-sequence is a sequence the user has already left.
   */
  overlay?: boolean
  /** Presses on the dimmed page that end the walkthrough. Defaults to 5. */
  skipAfterOutsideClicks?: number
  /**
   * HOW LONG `start()` KEEPS LOOKING for the steps whose elements are not on the
   * page yet, before running the walkthrough without them. Defaults to 2000ms.
   *
   * A walkthrough is started on mount, and the things it walks arrive over the
   * next few hundred milliseconds — a rail that is still measuring itself, a
   * widget waiting on its data. Opening on the first frame would drop those
   * steps; waiting forever on one that is genuinely absent (a control this user
   * has no permission for) would mean no walkthrough at all.
   */
  lookForTargetsMs?: number
  /**
   * HOW IT ENDED, IN ONE PLACE: finished, left part-way through, pressed past
   * until it gave up — or never opened at all, because nothing it points at was
   * on the page. One event with a `reason`, which is what a funnel wants.
   */
  onEnd?: (end: CoachmarkEnd) => void
  /** Abandoned: closed, escaped, or skipped by pressing past it. */
  onDismiss?: () => void
  /** Finished: the action on the last step. */
  onComplete?: () => void
}

export type CoachmarkGuidance<TElement extends string> = {
  /** The id every `start()` opens under, and the one `stop()` closes. */
  id: CoachmarkId
  /**
   * MARKS AN ELEMENT AS A STEP'S TARGET. Spread onto the element (or onto any
   * component that forwards unknown props to its DOM node):
   *
   * `<section {...guidance.anchor("needs-you")}>`
   *
   * Only names declared by a step type-check, so a renamed step breaks at the
   * anchor rather than at run time — where a missing target is a coachmark that
   * silently waits for an element that is never coming.
   */
  anchor: (element: TElement) => Record<typeof ANCHOR_ATTRIBUTE, TElement>
  /** The selector `anchor(element)` is found by. For tests and edge cases. */
  selector: (element: TElement) => string
  /**
   * Start the walkthrough — once the elements it points at are actually on the
   * page (see `lookForTargetsMs`). Steps whose element never turns up are left
   * out, and a walkthrough with nothing left to point at never opens at all.
   * Returns the id it will open under, whether it has opened yet or not.
   */
  start: () => CoachmarkId
  /** End it wherever it is. Reports nothing: nobody dismissed it. */
  stop: () => void
}

/**
 * A STEP-BY-STEP WALKTHROUGH OF A PAGE, declared in one place.
 *
 * `coachmarks.open({ steps })` already shows steps one at a time; what it takes
 * is a CSS selector per step, which means every walkthrough invents its own
 * convention for marking the elements it walks — and a selector written against
 * someone else's markup breaks the next time that markup is refactored, without
 * a single type error to say so.
 *
 * This closes that loop: the steps name their targets, `anchor()` marks them,
 * and the names are a union the compiler holds both sides to. The walkthrough
 * also arrives with the manners a walkthrough needs — the page dimmed to the
 * step's element, the pointer shielded, and a way out for the user who keeps
 * pressing past it — because those are properties of walking someone through a
 * page rather than of one coachmark.
 *
 * @example
 * const tour = defineStepByStepCoachmarkGuidance({
 *   id: "home-tour",
 *   steps: [
 *     { element: "composer", title: "Let One do it for you", side: "bottom" },
 *     { element: "needs-you", title: "What needs you", side: "right" },
 *     // Something f0 renders: point at it directly.
 *     { targetElement: '[data-add-widget="right"]', title: "Add a widget" },
 *   ],
 *   // Finished, dropped out at step N, pressed past it, or never shown.
 *   onEnd: ({ reason, step, totalSteps }) =>
 *     track("home-tour-ended", { reason, step, totalSteps }),
 * })
 *
 * // In the page
 * <div {...tour.anchor("composer")}>…</div>
 * <section {...tour.anchor("needs-you")}>…</section>
 *
 * // Whenever it should run
 * useEffect(() => {
 *   tour.start()
 *   return () => tour.stop()
 * }, [tour])
 */
export const defineStepByStepCoachmarkGuidance = <
  const TElement extends string,
>(
  options: CoachmarkGuidanceOptions<TElement>
): CoachmarkGuidance<TElement> => {
  // Resolved ONCE, at definition: `start()` is called from an effect that can
  // run twice, and a fresh id each time would queue the walkthrough again
  // behind itself instead of replacing it.
  const id = options.id ?? nanoid()

  const selector = (element: TElement) => `[${ANCHOR_ATTRIBUTE}="${element}"]`

  const anchor = (element: TElement) =>
    ({ [ANCHOR_ATTRIBUTE]: element }) as Record<
      typeof ANCHOR_ATTRIBUTE,
      TElement
    >

  // Every step ends up with a target: a named one becomes the anchor's own
  // selector, and a step that brought its own is passed through as it is.
  const resolved: CoachmarkStep[] = options.steps.map(
    ({ element, targetElement, ...step }) => ({
      ...step,
      targetElement: targetElement ?? selector(element as TElement),
    })
  )

  const lookFor = options.lookForTargetsMs ?? DEFAULT_LOOK_FOR_TARGETS_MS

  /**
   * The pending look-for-targets poll, so `stop()` can call off a walkthrough
   * that has not opened yet — a page unmounted mid-poll must not open one into
   * the page that replaced it.
   */
  let polling: ReturnType<typeof setTimeout> | undefined

  const openWithWhatIsThere = () => {
    const present = resolved.filter(isOnPage)

    // NOT A WALKTHROUGH AT ALL. Nothing this one wanted to point at is on the
    // page: it is describing a screen the reader is not looking at, and three
    // steps about elements that are not there is worse than silence. No warning
    // either — an absent element is a legitimate state (a control this user has
    // no permission for), not a mistake to report.
    //
    // REPORTED, THOUGH. Silence on screen is not silence to whoever is counting:
    // without this a funnel cannot tell "nobody finished the tour" from "the
    // tour never ran", and those want opposite fixes.
    if (present.length === 0) {
      options.onEnd?.({
        reason: "unavailable",
        step: 0,
        totalSteps: 0,
        outsidePresses: 0,
      })
      return
    }

    coachmarks.open({
      id,
      // WITHOUT THE STEPS THAT NEVER TURNED UP. Dropped rather than shown
      // waiting: `useTargetElement` would hold a coachmark open pointing at
      // nothing until its element arrived, and the reader would be looking at a
      // walkthrough that stopped halfway with no way on but the close button.
      // Dropping them before opening is also what makes the count honest — a
      // walkthrough that says 1/3 has three steps to give.
      steps: present,
      overlay: options.overlay ?? true,
      skipAfterOutsideClicks: options.skipAfterOutsideClicks,
      onEnd: options.onEnd,
      onDismiss: options.onDismiss,
      onComplete: options.onComplete,
    })
  }

  const start = () => {
    clearTimeout(polling)
    polling = undefined

    if (typeof document === "undefined") return id

    const deadline = Date.now() + lookFor
    const openWhenReady = () => {
      polling = undefined
      // Every step accounted for, or out of time — either way, open with the
      // steps that are on the page.
      if (resolved.every(isOnPage) || Date.now() >= deadline) {
        openWithWhatIsThere()
        return
      }
      polling = setTimeout(openWhenReady, LOOK_FOR_TARGETS_INTERVAL_MS)
    }
    openWhenReady()

    return id
  }

  return {
    id,
    anchor,
    selector,
    start,
    stop: () => {
      clearTimeout(polling)
      polling = undefined
      coachmarks.close(id)
    },
  }
}
