import type { PopoverContentProps } from "@/ui/popover"

export type CoachmarkId = string

/**
 * What the coachmark points at: ANY CSS SELECTOR, or the element itself.
 *
 * An id (`"#filters-button"`), a class (`".js-filters"`), an attribute
 * (`'[data-add-widget="right"]'`), or anything else `querySelector` takes — the
 * string is handed straight to the DOM, so the choice is about what the page
 * can promise to keep stable, not about what this accepts. It must match
 * exactly ONE element: a selector that matches several anchors to the first and
 * warns in development, because a coachmark pointing at "one of these six
 * cards" is pointing at nothing in particular.
 *
 * A selector is re-resolved while the coachmark is queued, so it may point at
 * something that mounts later. An ELEMENT is not re-resolved (there is nothing
 * to re-run), so one that unmounts takes its coachmark off screen with it.
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

/**
 * HOW A COACHMARK ENDED. One value per way out, so a funnel can be read off it
 * without joining two callbacks together:
 *
 * - `completed` — the action on the last step. The reader saw the whole thing.
 * - `dismissed` — the close button or Escape, before the last step. They left
 *   part-way through, and `step` says where.
 * - `skipped` — it gave up after `skipAfterOutsideClicks` presses on the dimmed
 *   page. Not the same as dismissing: the reader never used the way out they
 *   were offered, they pressed past it until it went away.
 * - `unavailable` — it never opened, because nothing it points at was on the
 *   page (only `defineStepByStepCoachmarkGuidance` reports this). The reason a
 *   funnel can be missing readers who were never shown anything.
 */
export type CoachmarkEndReason =
  | "completed"
  | "dismissed"
  | "skipped"
  | "unavailable"

/** What `onEnd` is told. */
export type CoachmarkEnd = {
  reason: CoachmarkEndReason
  /**
   * The step it ended on, 1-based — how far the reader got. `0` when it never
   * opened (`unavailable`).
   */
  step: number
  /**
   * How many steps the reader was actually offered. Not necessarily how many
   * were declared: a guidance leaves out the steps whose element was not there.
   */
  totalSteps: number
  /**
   * Presses on the dimmed page over the whole coachmark — the wiggles. A tour
   * that completed with six of these was fought with; one that completed with
   * none was followed. Always `0` without `overlay`, which has no shield to
   * press.
   */
  outsidePresses: number
}

type CoachmarkContent = {
  /** Headline. Also the accessible name of the panel. */
  title: string
  /** Supporting copy under the title. */
  description?: string
  /** The single call to action, rendered at the bottom right. */
  action?: CoachmarkAction
}

type CoachmarkFocus = {
  /**
   * PUT THE CARET WHERE THE STEP IS POINTING. Focus goes to the target — or to
   * the first field inside it — instead of to the panel, so the element the
   * coachmark is explaining lights up the way it does when the reader lands on
   * it themselves: a composer with its cursor in it and its own focus glow,
   * rather than a box being described.
   *
   * OFF BY DEFAULT, and worth being deliberate about. The panel takes focus
   * precisely so a screen reader reads the step out and so Enter cannot fire
   * the action unread; handing focus to a field instead trades that away —
   * the step is no longer announced, and typing goes into the page. Use it on a
   * step whose whole point is the field (a composer, a search box), and leave
   * every other step to the panel.
   *
   * Escape still closes the coachmark from anywhere, and the action button is
   * still one Tab away.
   */
  focusTarget?: boolean
}

/**
 * One step of a walkthrough. Each step can point at its own element and carry
 * its own placement; anything it leaves out falls back to the value passed
 * alongside `steps`.
 */
export type CoachmarkStep = CoachmarkContent &
  CoachmarkPlacement &
  CoachmarkFocus & {
    /** Falls back to the `targetElement` passed alongside `steps`. */
    targetElement?: CoachmarkTarget
  }

type CoachmarkBase = CoachmarkPlacement &
  CoachmarkFocus & {
    /**
     * Stable identity. Opening again with the same id replaces that coachmark
     * instead of queueing a second one, so an effect that runs twice shows one
     * coachmark. Defaults to a generated id.
     */
    id?: CoachmarkId
    /**
     * HOW IT ENDED, IN ONE PLACE — reached the end, left part-way through, or
     * pressed past until it gave up, and how far the reader got either way. The
     * callback to reach for when tracking a walkthrough: every ending comes
     * through here exactly once, so a funnel is one event carrying a `reason`
     * rather than two callbacks to join up afterwards.
     *
     * NOT called when the app itself closes the coachmark (`coachmarks.close`, a
     * guidance's `stop()`, the page unmounting): nobody ended it, so there is no
     * outcome to report.
     */
    onEnd?: (end: CoachmarkEnd) => void
    /**
     * Called when the user closes the coachmark with the close button or Escape,
     * before the last step is reached. For tracking only — the coachmark closes
     * itself either way.
     *
     * Also fires when a walkthrough gives up after too many presses on the
     * dimmed page, which is a dismissal by any other name. `onEnd` is what tells
     * those two apart.
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
  onEnd?: (end: CoachmarkEnd) => void
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
  /** Focus the target rather than the panel — see `CoachmarkStep.focusTarget`. */
  focusTarget?: boolean
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
