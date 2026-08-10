import { useEffect, useRef, useState } from "react"

import type { CoachmarkTarget } from "./types"

const isDev = process.env.NODE_ENV !== "production"

const resolve = (target: CoachmarkTarget): HTMLElement | null => {
  if (typeof target !== "string") {
    // An element handed to us can be unmounted while the coachmark is queued;
    // anchoring to a detached node would park the panel at 0,0.
    return target.isConnected ? target : null
  }

  const matches = document.querySelectorAll<HTMLElement>(target)
  if (isDev && matches.length > 1) {
    console.warn(
      `[f0] coachmarks: the selector "${target}" matched ${matches.length} elements. ` +
        `Anchoring to the first one — use a selector that matches exactly one.`
    )
  }
  return matches[0] ?? null
}

/**
 * Resolve a coachmark's target to a live DOM element, and keep it resolved.
 *
 * Returns `null` while nothing matches, which is a normal state rather than an
 * error: a coachmark opened during app start-up regularly names an element that
 * mounts a moment later, and an element can also disappear while the coachmark
 * is still queued behind another one. Both directions are handled by
 * re-resolving on DOM changes, so the panel appears when its target does and
 * hides when it goes away — instead of pointing at nothing.
 *
 * The observer only lives as long as one coachmark is on screen, and it re-runs
 * a single `querySelectorAll` per mutation batch (batches are already coalesced
 * into one microtask by `MutationObserver`).
 */
export const useTargetElement = (
  target: CoachmarkTarget | undefined
): HTMLElement | null => {
  const [element, setElement] = useState<HTMLElement | null>(null)
  // Mirrors the state so the observer can skip re-renders when nothing moved.
  // A ref rather than an effect-local variable: the effect re-runs when a step
  // changes the target, and it has to compare against the element that is
  // currently on screen, not against a fresh `null`.
  const resolved = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const sync = (next: HTMLElement | null) => {
      if (next === resolved.current) return
      resolved.current = next
      setElement(next)
    }

    if (target === undefined || typeof document === "undefined") {
      sync(null)
      return
    }

    sync(resolve(target))

    if (isDev && resolved.current === null && typeof target === "string") {
      console.warn(
        `[f0] coachmarks: no element matches the selector "${target}" yet. ` +
          `The coachmark will show as soon as one does.`
      )
    }

    const observer = new MutationObserver(() => sync(resolve(target)))
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [target])

  return element
}
