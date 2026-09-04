import type { PopoverContentProps } from "@/ui/popover"

export type CoachmarkId = string

/**
 * What the coachmark points at: a CSS selector that must match exactly one
 * element, or the element itself. A selector is re-resolved while the coachmark
 * is queued, so it may point at something that mounts later.
 */
export type CoachmarkTarget = string | HTMLElement

/**
 * The single call to action at the bottom of the panel. Both fields are
 * optional: the coachmark always advances to the next step (or closes on the
 * last one) when the button is pressed, so `onClick` is only for side effects
 * and `label` only for overriding the default wording.
 */
export type CoachmarkAction = {
  /** Defaults to `Next` on every step but the last, `Got it` on the last. */
  label?: string
  /** Extra side effect. Advancing and closing happen either way. */
  onClick?: () => void
}

/**
 * Where the panel sits relative to its target. `side` is a preference: the
 * panel flips and shifts on its own when it would overflow the viewport.
 */
type CoachmarkPlacement = {
  /** Renders a triangle pointing at the target. Defaults to `true`. */
  arrow?: boolean
  /** Preferred side of the target. Defaults to `"bottom"`. */
  side?: PopoverContentProps["side"]
  /** Alignment along the target's edge. Defaults to `"center"`. */
  align?: PopoverContentProps["align"]
  /** Distance in pixels between the target and the panel. */
  sideOffset?: number
}

type CoachmarkContent = {
  /** Headline. Also the accessible name of the panel. */
  title: string
  /** Supporting copy under the title. */
  description?: string
  /** The single call to action, rendered at the bottom right. */
  action?: CoachmarkAction
}

/**
 * One step of a walkthrough. Each step can point at its own element and carry
 * its own placement; anything it leaves out falls back to the value passed
 * alongside `steps`.
 */
export type CoachmarkStep = CoachmarkContent &
  CoachmarkPlacement & {
    /** Falls back to the `targetElement` passed alongside `steps`. */
    targetElement?: CoachmarkTarget
  }

type CoachmarkBase = CoachmarkPlacement & {
  /**
   * Stable identity. Opening again with the same id replaces that coachmark
   * instead of queueing a second one, so an effect that runs twice shows one
   * coachmark. Defaults to a generated id.
   */
  id?: CoachmarkId
  /**
   * Called when the user closes the coachmark with the close button or Escape,
   * before the last step is reached. For tracking only — the coachmark closes
   * itself either way.
   */
  onDismiss?: () => void
  /**
   * Called when the user presses the action on the last step. For tracking only
   * — the coachmark closes itself either way.
   */
  onComplete?: () => void
  /**
   * SPOTLIGHT THE TARGET: dims the whole page except the element this step
   * points at, and swallows every press on the page while the coachmark is up
   * (see `skipAfterOutsideClicks` for how a user who keeps pressing gets out).
   *
   * Off by default — one coachmark pointing something out should not take the
   * page hostage. Turn it on for a walkthrough that has to be followed in order.
   */
  overlay?: boolean
  /**
   * HOW MANY PRESSES ON THE DIMMED PAGE END THE COACHMARK. The panel wiggles at
   * each one to say the press went nowhere, and gives up at this many: a user
   * pressing outside over and over is telling us they want out, and the way out
   * cannot be the button they are ignoring. Reported to `onDismiss` like any
   * other abandonment. Defaults to 5; `0` never gives up.
   *
   * Only has an effect alongside `overlay` — without the shield there are no
   * presses to count, because they reach the page.
   */
  skipAfterOutsideClicks?: number
}

/** One coachmark: its own copy, anchored to one element. */
export type CoachmarkSingleOptions = CoachmarkBase &
  CoachmarkContent & {
    targetElement: CoachmarkTarget
    steps?: never
  }

/** A walkthrough: several steps, shown one at a time in order. */
export type CoachmarkSequenceOptions = CoachmarkBase & {
  /** Shared fallback target for steps that do not name their own. */
  targetElement?: CoachmarkTarget
  steps: CoachmarkStep[]
  title?: never
  description?: never
  action?: never
}

/**
 * What `coachmarks.open` accepts: either one coachmark, or a sequence of steps
 * shown one at a time. The two shapes are mutually exclusive.
 */
export type CoachmarkOptions = CoachmarkSingleOptions | CoachmarkSequenceOptions

/**
 * A coachmark as held by the store: both public shapes flattened into one list
 * of steps, each with its target and placement already resolved against the
 * coachmark's own defaults, plus a stable id.
 */
export type CoachmarkItem = {
  id: CoachmarkId
  steps: CoachmarkStep[]
  onDismiss?: () => void
  onComplete?: () => void
  overlay?: boolean
  skipAfterOutsideClicks?: number
}

/**
 * Props of the panel itself. Internal: the panel is rendered by
 * `CoachmarkProvider`, never by consumers, so it takes a resolved DOM element
 * and knows nothing about sequencing beyond the indicator it is told to show.
 */
export interface F0CoachmarkProps extends CoachmarkPlacement {
  /** The element the panel is anchored to, already resolved. */
  target: HTMLElement
  title: string
  description?: string
  /** Overrides the default action wording (`Next` / `Got it`). */
  actionLabel?: string
  /** Fired by the action button. */
  onAction: () => void
  /** Fired by the close button and by Escape. Never by an outside click. */
  onClose: () => void
  /**
   * Dims the page except the target and shields it from the pointer. See
   * `CoachmarkSpotlight`.
   */
  overlay?: boolean
  /**
   * Fired for every press the shield swallows — only while `overlay` is on. The
   * panel wiggles on its own; this is for whoever is counting them.
   */
  onOutsideInteraction?: () => void
  /**
   * The panel is on its way out of the step it is showing: it fades down and
   * waits there while the next step is committed underneath it. Set by
   * `CoachmarkProvider`, which owns the handover between two steps.
   */
  leaving?: boolean
  /**
   * Position within a sequence, rendered as `current/total` beside the action.
   * Omitted for a single-step coachmark, which shows no indicator.
   */
  step?: { current: number; total: number }
  /** Portal target for the panel. Defaults to `document.body`. */
  container?: HTMLElement | null
}
