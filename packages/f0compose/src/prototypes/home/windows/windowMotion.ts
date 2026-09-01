/**
 * Motion for the window system, shared by BOTH stacks (the right-hand
 * widgets and the left-hand Comms chats).
 *
 * Everything here is module-level on purpose: a maximized window and its
 * docked panel live in different React trees, so the handoff between them
 * cannot go through component state.
 *
 * Windows are addressed by a `key` string — `data-window-key` on the
 * panel — NOT by their visible title. Two stacks can legitimately show
 * the same title (a "Notes" widget and a "Notes" channel), and the close
 * animation used to find its element by `aria-label`, which would have
 * animated whichever one the browser returned first.
 */

/** Handoff for the docked ↔ maximized swap: the click flags which window
 *  changed state so the element that mounts next knows to animate, and
 *  the ones that merely re-rendered stay put.
 *
 *  Opening a window does NOT use this — it rises into place
 *  (`f0c-window-rise`). Nothing in this file morphs any more: the last
 *  morph was the maximize FLIP, and it was removed for the reason
 *  `playSwapIn` documents. */
let swapOrigin: string | null = null

/**
 * When each window's entrance first played. React remounts panels that
 * never moved — restoring from maximize unmounts the whole column, and
 * opening a 3rd window re-chunks the index-keyed columns — and every
 * remount replayed the entrance. Only the window the user acted on
 * should travel; the rest must stay put.
 *
 * Timestamped rather than a plain Set because StrictMode double-invokes
 * the mount effect: the second run lands within a few ms and must still
 * animate, while a genuine remount is always far later. (A rAF-deferred
 * flag looked cleaner but silently never fires in a backgrounded tab,
 * which put every panel back to replaying.)
 */
const enteredAt = new Map<string, number>()
const REMOUNT_GRACE_MS = 400

export const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Exit stays deliberately shorter than the entrance: the user is deciding
 *  on the way in and the system is just responding on the way out (Emil:
 *  asymmetric timing). */
const EXIT_MS = 150

export function windowElement(key: string): HTMLElement | null {
  return document.querySelector<HTMLElement>(
    `section[data-home-window][data-window-key="${key}"]`
  )
}

/**
 * Exit animation for closing a window (docked or maximized).
 *
 * DISSOLVE IN PLACE — never travel. An exit only has to confirm the
 * dismissal, not narrate a destination. scale(0.98), never toward 0 — a
 * shape stays visible until the end (Emil) — and 2px of blur to keep the
 * fade from reading as a hard cut.
 *
 * The easing is the same strong ease-out as the entrance (Emil: never
 * ease-in for UI — it withholds movement at the moment the user is
 * watching most closely, so a dismissal feels sluggish even at an
 * identical duration).
 *
 * `fill: "forwards"` is what keeps it fluid: without it the panel snaps
 * back to its resting position for a frame between the animation ending
 * and React unmounting it, which reads as a jump. The timeout fallback
 * (comfortably longer than the animation) guarantees the close even if
 * the animation never finishes.
 */
export function animateWindowClose(key: string, close: () => void) {
  const el = windowElement(key)
  // A reopened window has to animate again.
  enteredAt.delete(key)
  if (!el) {
    close()
    return
  }
  // Reduced motion keeps a short fade rather than vanishing outright —
  // the panel still explains that it left (Emil: gentler, not zero).
  if (reducedMotion()) {
    const fade = el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 120,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
      fill: "forwards",
    })
    let faded = false
    const end = () => {
      if (!faded) {
        faded = true
        close()
      }
    }
    fade.onfinish = end
    window.setTimeout(end, 240)
    return
  }
  el.style.animation = "none"
  const exit = el.animate(
    [
      { opacity: 1, transform: "none", filter: "blur(0px)" },
      { opacity: 0, transform: "scale(0.98)", filter: "blur(2px)" },
    ],
    {
      duration: EXIT_MS,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
      fill: "forwards",
    }
  )
  let done = false
  const finish = () => {
    if (!done) {
      done = true
      close()
    }
  }
  exit.onfinish = finish
  window.setTimeout(finish, EXIT_MS + 120)
}

/** Flag which window is swapping between docked and maximized — the two
 *  live in different React trees, so this is how the incoming one knows
 *  it is a swap and not a fresh open. */
export function stashSwap(key: string, el: HTMLElement | null) {
  if (el) swapOrigin = key
}

/**
 * Docked ↔ maximized. This used to be a FLIP — translate + scale from the
 * outgoing rect — and it was WRONG for a panel: `scale()` scales the
 * CHILDREN too, so restoring the inbox ticket from 1124 to 420 wide meant
 * animating every glyph from 2.68x horizontal stretch. Text visibly
 * squashed itself into place (per Oskar).
 *
 * A FLIP is honest only when the two states are the same picture at two
 * sizes. These are not: the details table reflows, the description
 * rewraps, the columns change. So there is nothing to morph — the panel
 * is REPLACED, and the same language the exit uses says so: dissolve,
 * with blur bridging the two states so the size jump does not read as a
 * cut. Ease-out like every other arrival here, not the ease-in-out a
 * genuine on-screen move would want.
 */
const SWAP_MS = 200

export function playSwapIn(el: HTMLElement, key: string) {
  if (swapOrigin !== key) return
  swapOrigin = null
  // Override the CSS entrance so the two don't compose.
  el.style.animation = "none"
  if (reducedMotion()) {
    el.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 120,
      easing: "cubic-bezier(0.23, 1, 0.32, 1)",
    })
    return
  }
  el.animate(
    [
      { opacity: 0, filter: "blur(4px)" },
      { opacity: 1, filter: "blur(0px)" },
    ],
    { duration: SWAP_MS, easing: "cubic-bezier(0.23, 1, 0.32, 1)" }
  )
}

/**
 * Mount hook shared by every panel: suppress the entrance on a REMOUNT
 * (the panel never moved), and play the docked ↔ maximized dissolve if
 * this is the window that was just swapped.
 */
export function settleOnMount(el: HTMLElement | null, key: string) {
  if (!el) return
  const first = enteredAt.get(key)
  if (first === undefined) enteredAt.set(key, Date.now())
  else if (Date.now() - first > REMOUNT_GRACE_MS) el.style.animation = "none"
  playSwapIn(el, key)
}
