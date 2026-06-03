import { useCallback, useEffect, useState } from "react"

import type { NavEntryId } from "./navConfig"

/**
 * Tracks which left-nav sections the user has "gone through".
 *
 * A section flips from an outlined gray circle to a green checkmark
 * once it's been visited (see LeftNavPane). The user can still revisit
 * and edit a completed section — the check just marks it as done.
 *
 * Persisted to localStorage so the done state survives reloads. The
 * set is seedable: when the setup is started *from a document*, One can
 * pre-mark the sections it filled in (future work) by calling
 * `markComplete` for each — the same mechanic that visiting uses.
 *
 * `reset()` clears everything; called when the prototype restarts back
 * to the empty state.
 */
const STORAGE_KEY = "expense-policy-nav-completed-v1"

function load(): Set<NavEntryId> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as NavEntryId[]
    return new Set(Array.isArray(arr) ? arr : [])
  } catch {
    return new Set()
  }
}

export type NavCompletionHandle = {
  completed: Set<NavEntryId>
  isComplete: (id: NavEntryId) => boolean
  markComplete: (id: NavEntryId) => void
  reset: () => void
}

export function useNavCompletion(): NavCompletionHandle {
  const [completed, setCompleted] = useState<Set<NavEntryId>>(load)

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(Array.from(completed))
      )
    } catch {
      // ignore quota / disabled storage — completion is non-critical
    }
  }, [completed])

  const markComplete = useCallback((id: NavEntryId) => {
    setCompleted((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const reset = useCallback(() => setCompleted(new Set()), [])

  const isComplete = useCallback(
    (id: NavEntryId) => completed.has(id),
    [completed]
  )

  return { completed, isComplete, markComplete, reset }
}
