import { type ElementPosition, getCoordinates } from './dom'
import './cursor.css'

declare global {
  interface Window {
    cursor?: HTMLElement
  }
}

export function getCursor(): HTMLElement {
  if (!window.cursor) {
    const cursor = document.createElement('div')
    cursor.className = 'tour-cursor tour-cursor-idle tour-cursor-hidden'
    cursor.setAttribute('aria-hidden', 'true')
    cursor.setAttribute('role', 'presentation')
    document.body.appendChild(cursor)
    window.cursor = cursor
  }
  return window.cursor
}

// Space the tooltip needs to the right of the cursor (offset + max-width + a
// little margin). If the cursor is closer than this to the viewport's right
// edge, the tooltip is flipped to the cursor's left so it stays on-screen.
const TOOLTIP_RIGHT_SPACE_PX = 380

// Vertical gap kept below the tooltip; if the cursor is close enough to the
// bottom that the tooltip's measured height + this margin would overflow the
// viewport, the tooltip auto-flips ABOVE the cursor.
const TOOLTIP_BOTTOM_MARGIN_PX = 16

// When a step pins the tooltip side (TourStep.tooltipSide / tooltipVerticalSide),
// it overrides the auto edge-flip below. Reset whenever a tooltip is
// hidden/replaced.
let forcedTooltipSide: 'left' | 'right' | null = null
let forcedVerticalSide: 'top' | 'bottom' | null = null

// Toggle the flip-left + flip-top classes. Uses the step-forced side when set,
// otherwise auto-flips based on the cursor's position. Called on every cursor
// move so the placement always matches the current position.
function updateTooltipSide(cursor: HTMLElement, x: number, y: number): void {
  const flipLeft = forcedTooltipSide
    ? forcedTooltipSide === 'left'
    : x + TOOLTIP_RIGHT_SPACE_PX > window.innerWidth
  cursor.classList.toggle('tour-cursor-flip-left', flipLeft)

  // Vertical auto-flip: measure the live tooltip so a tall tooltip (title +
  // description + button) near the bottom edge flips above, while a short one
  // in the same spot doesn't flip needlessly.
  const tooltip = cursor.querySelector<HTMLElement>('.tour-cursor-tooltip')
  if (!tooltip) return
  const tooltipHeight = tooltip.getBoundingClientRect().height
  const flipTop = forcedVerticalSide
    ? forcedVerticalSide === 'top'
    : y + tooltipHeight + TOOLTIP_BOTTOM_MARGIN_PX > window.innerHeight
  cursor.classList.toggle('tour-cursor-tooltip-top', flipTop)
}

export function showCursor(): void {
  const cursor = getCursor()
  cursor.classList.remove('tour-cursor-hidden')
}

export function hideCursor(): void {
  const cursor = getCursor()
  cursor.classList.add('tour-cursor-hidden')
  cursor.classList.remove('tour-cursor-clicking')
  cursor.classList.remove('tour-cursor-point-left')
  cursor.classList.add('tour-cursor-idle')
  hideTooltipFromCursor()
}

/** Extra tooltip content beyond the title line. */
export type TooltipExtras = {
  /** Secondary paragraph shown under the title. */
  description?: string
  /** Clickable action buttons, rendered left to right (label + optional icon kind
   *  — the engine wires the clicks). `kind` only selects the leading icon
   *  ('finish' renders none); behavior lives in the engine. */
  buttons?: Array<{ label: string; kind?: 'next' | 'download' | 'copy' | 'finish' | 'navigate' }>
  /** 'top' renders the tooltip ABOVE the cursor instead of below (for targets
   *  near the bottom edge where a below-cursor tooltip would be clipped). */
  verticalSide?: 'top' | 'bottom'
}

/**
 * Builds the leading icon for a tooltip button as an inline SVG (the tooltip is
 * vanilla DOM, not React, so we can't use the F0 icon set). Stroke uses
 * `currentColor` so it follows the button's text color.
 *
 * Only the SIDE actions get one. `next` / `navigate` / `finish` are plain text
 * buttons: an arrow next to "Next" restates the label, and at xs size the icon
 * crowds a control whose whole job is to be unobtrusive next to the tooltip copy.
 */
function createTooltipButtonIcon(kind: 'download' | 'copy' | 'check'): SVGSVGElement {
  const NS = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(NS, 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('fill', 'none')
  svg.setAttribute('stroke', 'currentColor')
  svg.setAttribute('stroke-width', '2')
  svg.setAttribute('stroke-linecap', 'round')
  svg.setAttribute('stroke-linejoin', 'round')
  svg.setAttribute('aria-hidden', 'true')
  const paths =
    kind === 'download'
      ? ['M12 3v12', 'M7 12l5 5 5-5', 'M4 20h16']
      : kind === 'check'
        ? ['M20 6 9 17l-5-5']
        : // copy: front sheet + back sheet
          [
            'M9 9h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z',
            'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
          ]
  for (const d of paths) {
    const path = document.createElementNS(NS, 'path')
    path.setAttribute('d', d)
    svg.appendChild(path)
  }
  return svg
}

/**
 * Attaches a tooltip to the cursor so they move as a single unit.
 * The tooltip is a child of the cursor element and inherits its movement.
 *
 * `text` is the title line. Optional `extras` add a description paragraph
 * and/or an action button (see {@link getTooltipButtonElement}); the button
 * re-enables `pointer-events` on itself so it's clickable even though the
 * cursor + tooltip are otherwise pointer-transparent.
 */
export function showTooltipOnCursor(
  text: string,
  side?: 'left' | 'right',
  extras?: TooltipExtras
): void {
  const cursor = getCursor()
  hideTooltipFromCursor()

  // `side`/`verticalSide` (from TourStep) pin the tooltip; otherwise it
  // auto-flips based on the cursor's position near the viewport edges.
  forcedTooltipSide = side ?? null
  forcedVerticalSide = extras?.verticalSide ?? null

  const tooltip = document.createElement('div')
  tooltip.className = 'tour-cursor-tooltip'

  const title = document.createElement('div')
  title.className = 'tour-cursor-tooltip-title'
  title.textContent = text
  tooltip.appendChild(title)

  if (extras?.description) {
    const desc = document.createElement('div')
    desc.className = 'tour-cursor-tooltip-desc'
    desc.textContent = extras.description
    tooltip.appendChild(desc)
  }

  if (extras?.buttons?.length) {
    // Row wrapper so multiple buttons sit side by side; a single button looks
    // identical to before because the row shrinks to it.
    const row = document.createElement('div')
    row.className = 'tour-cursor-tooltip-btns'
    extras.buttons.forEach((spec, index) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'tour-cursor-tooltip-btn'
      // Index, not label: the engine looks buttons up positionally so two buttons
      // with the same label still wire independently.
      button.dataset.tourBtnIndex = String(index)
      // Advancing kinds ('next' / 'navigate' / 'finish') are plain text buttons;
      // only the side actions carry a glyph, where the icon says something the
      // label doesn't (this downloads / this copies rather than advances).
      const kind = spec.kind ?? 'next'
      if (kind === 'download' || kind === 'copy') {
        button.appendChild(createTooltipButtonIcon(kind))
      }
      // First button is the primary action; anything after it is secondary and
      // renders ghost (no border or fill), so a two-button row reads as one
      // choice with an alternative instead of two equal-weight buttons.
      if (index > 0) {
        button.classList.add('tour-cursor-tooltip-btn--ghost')
      }
      const label = document.createElement('span')
      label.textContent = spec.label
      // The label is swapped in place to acknowledge a copy (see
      // flashTooltipButtonDone). Without a live region that swap is silent to a
      // screen reader — the button's accessible name changes, which is not an
      // announcement. Polite, because it must not interrupt the step's own text.
      label.setAttribute('aria-live', 'polite')
      button.appendChild(label)
      row.appendChild(button)
    })
    tooltip.appendChild(row)
  }

  cursor.appendChild(tooltip)

  // Orient once the caller has settled the cursor position for this step
  // (the engine's centered no-target branch sets left/top right after this
  // call, in the same task — rAF reads the final values).
  requestAnimationFrame(() => {
    const x = Number.parseFloat(cursor.style.left) || window.innerWidth / 2
    const y = Number.parseFloat(cursor.style.top) || window.innerHeight / 2
    updateTooltipOrientation(x, y)
  })
  // Apply the placement immediately using the cursor's current position (inline
  // left/top are set in px by the engine's move; fall back to the rendered rect
  // before any move). The tooltip is now in the DOM, so its height is
  // measurable for the vertical auto-flip.
  const rect = cursor.getBoundingClientRect()
  const x = parseFloat(cursor.style.left) || rect.left
  const y = parseFloat(cursor.style.top) || rect.top
  updateTooltipSide(cursor, x, y)
}

/**
 * The label a button was authored with, captured the first time it flips to its
 * done state. Captured once and keyed by element so a double-click cannot latch
 * the acknowledgement text in permanently — reading the label back off the DOM
 * on the second click would store "Copied" as the original.
 */
const originalButtonLabels = new WeakMap<HTMLButtonElement, string>()
/** Pending restore per button, so a re-click extends the state instead of racing it. */
const doneResetTimers = new WeakMap<HTMLButtonElement, number>()

/**
 * Acknowledges a click on a non-advancing tooltip button (copy / download).
 *
 * These buttons do not advance the step, so without feedback a click looks
 * inert — the tour just sits there and the visitor cannot tell whether the copy
 * happened. Passing `doneLabel` swaps the button's own label and glyph for a
 * checkmark state, which says "copied" where the user is already looking rather
 * than somewhere else on screen; omitting it falls back to the colour-only flash.
 *
 * Restores itself after `durationMs`. Safe to call on a button whose step has
 * since been torn down: the restore just writes to a detached node.
 */
export function flashTooltipButtonDone(
  button: HTMLButtonElement,
  doneLabel?: string,
  durationMs = 1200
): void {
  const label = button.querySelector('span')
  const icon = button.querySelector('svg')

  if (doneLabel && label) {
    if (!originalButtonLabels.has(button)) {
      originalButtonLabels.set(button, label.textContent ?? '')
    }
    label.textContent = doneLabel
    icon?.replaceWith(createTooltipButtonIcon('check'))
  }

  button.classList.add('tour-cursor-tooltip-btn--done')

  const pending = doneResetTimers.get(button)
  if (pending !== undefined) window.clearTimeout(pending)

  doneResetTimers.set(
    button,
    window.setTimeout(() => {
      doneResetTimers.delete(button)
      button.classList.remove('tour-cursor-tooltip-btn--done')

      const original = originalButtonLabels.get(button)
      if (original === undefined || !label) return
      label.textContent = original
      originalButtonLabels.delete(button)
      // Rebuilt from the button's own kind, not remembered: the copy glyph is
      // the only one this state replaces.
      button.querySelector('svg')?.replaceWith(createTooltipButtonIcon('copy'))
    }, durationMs)
  )
}

/**
 * Returns the tooltip's action button element (if the current tooltip has one),
 * so the engine can attach a click listener that performs the button's action
 * and advances the step. Returns null when no button is rendered.
 */
export function getTooltipButtonElement(index = 0): HTMLButtonElement | null {
  return getCursor().querySelector<HTMLButtonElement>(
    `.tour-cursor-tooltip-btn[data-tour-btn-index="${index}"]`
  )
}

/**
 * Removes the tooltip from the cursor.
 */
export function hideTooltipFromCursor(): void {
  forcedTooltipSide = null
  forcedVerticalSide = null
  const cursor = getCursor()
  cursor.classList.remove('tour-cursor-tooltip-above', 'tour-cursor-tooltip-left')
  cursor.classList.remove('tour-cursor-tooltip-top')
  const existing = cursor.querySelector('.tour-cursor-tooltip')
  if (existing) existing.remove()
}

/**
 * Flips the tooltip above / to the left of the pointer when the default
 * below-right placement would overflow the viewport — e.g. a sticky-footer
 * Save button at the bottom edge, whose tooltip would otherwise render
 * clipped off-screen. Recomputed on every cursor move; when nothing would
 * overflow, the default placement is kept, so correctly-placed tooltips
 * are unaffected.
 */
function updateTooltipOrientation(x: number, y: number): void {
  const cursor = getCursor()
  const tooltip = cursor.querySelector<HTMLElement>('.tour-cursor-tooltip')
  if (!tooltip) return

  const margin = 8
  // Default placement, from cursor.css: the cursor box is translated
  // (-8, -11) from its (x, y) anchor and the tooltip sits at (top: 14,
  // left: 48) inside it → the tooltip's viewport origin ≈ (x + 40, y + 3).
  const overflowsBottom = y + 3 + tooltip.offsetHeight > window.innerHeight - margin
  const overflowsRight = x + 40 + tooltip.offsetWidth > window.innerWidth - margin
  cursor.classList.toggle('tour-cursor-tooltip-above', overflowsBottom)
  cursor.classList.toggle('tour-cursor-tooltip-left', overflowsRight)
}

export async function animateCursorMove(
  element: HTMLElement,
  position: ElementPosition = 'center',
  speed = 3
): Promise<void> {
  const targetPos = getCoordinates(element, position)
  const cursor = getCursor()
  // Mirror the arrow to point toward the element when parked on its left.
  cursor.classList.toggle('tour-cursor-point-left', position === 'left-outside')
  const prevPos = getCoordinates(cursor)

  const distance = Math.sqrt((targetPos.x - prevPos.x) ** 2 + (targetPos.y - prevPos.y) ** 2)
  const duration = Math.pow(distance, 0.25) / speed

  cursor.classList.remove('tour-cursor-idle')
  cursor.style.setProperty('--tour-cursor-move-duration', `${duration}s`)
  cursor.style.left = `${targetPos.x}px`
  cursor.style.top = `${targetPos.y}px`
  // Orient against the destination right away so the tooltip is already
  // flipped correctly when the cursor arrives.
  updateTooltipOrientation(targetPos.x, targetPos.y)
  updateTooltipSide(cursor, targetPos.x, targetPos.y)
  await new Promise<void>((resolve) => setTimeout(resolve, duration * 1000))
  cursor.classList.add('tour-cursor-idle')
}

/**
 * Keeps the cursor pinned to a target whose position can still change
 * AFTER the initial placement. Late-loading content above the action bar
 * — e.g. the employees-list "pending to accept" stats banner that only
 * renders once its query resolves — pushes the target down once
 * `waitForStableRect`'s window has already closed, stranding the cursor
 * in empty space above the real control. This re-positions the cursor
 * whenever the target's anchor point drifts more than a few px, so the
 * pointer follows the element wherever it finally settles (and tracks it
 * on scroll, since the cursor is `position: fixed`).
 *
 * Deliberately a no-op for targets that DON'T move (the common case —
 * native selects, inputs, buttons that stay put), so it cannot regress
 * tours whose pointer already lands correctly. Returns a teardown fn and
 * also self-stops when `signal` aborts.
 */
export function pinCursorToElement(
  element: HTMLElement,
  position: ElementPosition,
  signal: AbortSignal
): () => void {
  const DRIFT_THRESHOLD_PX = 4
  const POLL_MS = 150
  let stopped = false
  let timer = 0
  // Keep the arrow mirrored while pinned to a left-parked target.
  getCursor().classList.toggle('tour-cursor-point-left', position === 'left-outside')
  // Seed from the current anchor so only a *subsequent* shift repositions.
  const seed = getCoordinates(element, position)
  let lastX = seed.x
  let lastY = seed.y

  const tick = () => {
    if (stopped || signal.aborted) return
    // If the element left the DOM, don't chase a stale node — the step's
    // own MutationObserver owns abort / re-find. Just keep polling in case
    // an equivalent node re-renders into place.
    if (document.body.contains(element)) {
      const { x, y } = getCoordinates(element, position)
      if (Math.abs(x - lastX) > DRIFT_THRESHOLD_PX || Math.abs(y - lastY) > DRIFT_THRESHOLD_PX) {
        lastX = x
        lastY = y
        const cursor = getCursor()
        cursor.style.setProperty('--tour-cursor-move-duration', '0.25s')
        cursor.style.left = `${x}px`
        cursor.style.top = `${y}px`
        updateTooltipOrientation(x, y)
        updateTooltipSide(cursor, x, y)
      }
    }
    timer = window.setTimeout(tick, POLL_MS)
  }

  const stop = () => {
    if (stopped) return
    stopped = true
    clearTimeout(timer)
  }

  timer = window.setTimeout(tick, POLL_MS)
  signal.addEventListener('abort', stop, { once: true })
  return stop
}

export async function animateCursorClick(duration = 200): Promise<void> {
  // Pure timing buffer between step-done and the next step's setup — no visual
  // feedback ring. Our cursor.css defines no '.tour-cursor-clicking' ::after
  // rule, so there is nothing to toggle. (The tour cursor classes are now
  // namespaced under 'tour-cursor*', fully decoupled from the legacy ai_voice
  // '.ai-cursor*' styles; a ripple could be reintroduced here safely if wanted.)
  await new Promise<void>((resolve) => setTimeout(resolve, duration))
}

export function removeCursor(): void {
  if (window.cursor) {
    window.cursor.remove()
    delete window.cursor
  }
}
