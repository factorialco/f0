import { nanoid } from "nanoid"

import { coachmarkStore } from "./store"
import type {
  CoachmarkId,
  CoachmarkOptions,
  CoachmarkSequenceOptions,
  CoachmarkStep,
} from "./types"

const isDev = process.env.NODE_ENV !== "production"

const warn = (message: string) => {
  if (isDev) console.warn(`[f0] ${message}`)
}

const warnIfNoProvider = (method: string) => {
  if (isDev && !coachmarkStore.hasProvider()) {
    console.warn(
      `[f0] ${method} was called but no <F0Provider> is mounted, so the coachmark will not render. ` +
        `Make sure your app is wrapped in <F0Provider>.`
    )
  }
}

const isSequence = (
  options: CoachmarkOptions
): options is CoachmarkSequenceOptions => Array.isArray(options.steps)

/**
 * Flatten the two public shapes into the one the store holds: a list of steps,
 * each carrying its own target and placement.
 *
 * A single coachmark is a one-step sequence, so the provider has a single code
 * path. Steps inherit `targetElement` and placement from the options they were
 * passed with, per key rather than by spreading, so a step that explicitly says
 * `side: undefined` still gets the shared default instead of clobbering it.
 *
 * A step with no target anywhere in that chain cannot be positioned, so it is
 * dropped with a warning rather than silently rendering somewhere arbitrary.
 */
export const resolveSteps = (options: CoachmarkOptions): CoachmarkStep[] => {
  const declared: CoachmarkStep[] = isSequence(options)
    ? options.steps
    : [
        {
          title: options.title,
          description: options.description,
          action: options.action,
        },
      ]

  return declared.flatMap((step) => {
    const targetElement = step.targetElement ?? options.targetElement
    if (targetElement === undefined) {
      warn(
        `coachmarks.open(): step "${step.title}" has no targetElement, so it cannot be anchored. Skipping it.`
      )
      return []
    }

    return [
      {
        title: step.title,
        description: step.description,
        action: step.action,
        targetElement,
        arrow: step.arrow ?? options.arrow,
        focusTarget: step.focusTarget ?? options.focusTarget,
        side: step.side ?? options.side,
        align: step.align ?? options.align,
        sideOffset: step.sideOffset ?? options.sideOffset,
      },
    ]
  })
}

const open = (options: CoachmarkOptions): CoachmarkId => {
  const id = options.id ?? nanoid()

  warnIfNoProvider("coachmarks.open()")

  const steps = resolveSteps(options)
  if (steps.length === 0) {
    warn(
      "coachmarks.open() was called with no anchorable step. Nothing to show."
    )
    return id
  }

  coachmarkStore.addItem({
    id,
    steps,
    onDismiss: options.onDismiss,
    onComplete: options.onComplete,
    overlay: options.overlay,
    skipAfterOutsideClicks: options.skipAfterOutsideClicks,
  })

  return id
}

const close = (id: CoachmarkId): void => {
  coachmarkStore.removeItem(id)
}

const closeAll = (): void => {
  coachmarkStore.clear()
}

/**
 * Imperative API for coachmarks: a panel anchored to an element, pointing out a
 * feature the user has not discovered yet. Can be called from anywhere — no hook
 * required — as long as `<F0Provider>` (which mounts `CoachmarkProvider`) is in
 * the tree.
 *
 * There is no `open` prop and no component to render: the coachmark closes
 * itself when the user acknowledges it, and only one is ever on screen — a
 * second `open` waits its turn.
 *
 * @example
 * import { coachmarks } from "@factorialco/f0-react/experimental"
 *
 * coachmarks.open({
 *   id: "smart-filters",
 *   targetElement: "#filters-button",
 *   title: "Filters got smarter",
 *   description: "Stack filters, then save the combination as a view.",
 *   action: { label: "Learn more", onClick: () => openDocs() },
 * })
 *
 * @example A walkthrough, one step at a time
 * coachmarks.open({
 *   steps: [
 *     { targetElement: "#filters-button", title: "Start with a filter" },
 *     { targetElement: "#save-view", title: "Then save it as a view" },
 *   ],
 *   onComplete: () => track("tour-finished"),
 * })
 */
export const coachmarks = {
  /**
   * Show a coachmark, or queue it behind the one already on screen.
   * @param options One coachmark, or a sequence of `steps`
   * @returns The id of the coachmark (pass it to `coachmarks.close`)
   */
  open,
  /**
   * Remove a coachmark by id, whether it is on screen or still queued. For
   * closing it programmatically — the user does not need this.
   * @param id The id returned by `coachmarks.open`
   */
  close,
  /** Remove every coachmark, on screen and queued. */
  closeAll,
}
