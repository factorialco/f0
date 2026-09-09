import { useSyncExternalStore } from "react"

import { needsYouTasks, type NeedsYouTask } from "./fixtures"

/**
 * Which "Needs you" tasks One has cleared for you.
 *
 * A module store, for the same reason `conversationStore` is one: the
 * conversation that resolves a task and the list that shows it are sibling
 * React trees under FactorialShell, so they cannot share component state.
 * The Inbox nav reads the same fixtures, and now the same resolutions, so
 * the two lists still cannot drift apart.
 *
 * A task One is closing runs THROUGH THE CARD and never opens a
 * conversation: taking you to a chat for work with nothing to action
 * afterwards costs a screen and gives nothing back (Oskar, third pass).
 * It has two phases, both of which you can now actually see because Home
 * stays on screen:
 *
 *   thinking → the ChatSpinner replaces the row's icon and each step of
 *              One's reasoning shimmers in place of the subtitle
 *   done     → a check and what it actually did, held for a beat
 *   exiting  → still mounted, collapsing, so the rows below slide up
 *              rather than teleporting when it goes
 *
 * then the row leaves the list. The `done` beat is the only place the
 * figures ever appear now, so without it the row would simply vanish and
 * you would never learn what One approved.
 *
 * A task One is NOT allowed to close (see `oneCanClose`) never enters
 * this path at all — `approveTasksByModule` says so and the caller opens
 * the full conversation instead, which is where a decision belongs.
 */

const STORAGE_KEY = "f0compose:home:needs-you"

/** The row's live state while One works on it. */
export type TaskPhase =
  | { kind: "thinking"; taskId: string; steps: string[]; visible: number }
  | { kind: "done"; taskId: string; summary: string }
  /** Still mounted, collapsing out. Keeps the done content while it goes. */
  | { kind: "exiting"; taskId: string; summary: string }

type NeedsYouState = { cleared: string[]; active?: TaskPhase }

/** Per reasoning step, then how long the check holds, then the collapse.
 *  EXIT_MS must match .f0c-row-slot's transition or the row unmounts
 *  mid-animation and the rows below still jump. */
const STEP_MS = 900
const DONE_MS = 1300
const EXIT_MS = 160

export type ApproveOutcome = "running" | "escalate" | "none"

function loadPersisted(): NeedsYouState {
  if (typeof window === "undefined") return { cleared: [] }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { cleared: [] }
    const parsed = JSON.parse(raw) as Partial<NeedsYouState>
    // `active` is transient by design — a reload mid-approval must not
    // rehydrate a spinner nothing is driving any more.
    return { cleared: parsed.cleared ?? [] }
  } catch {
    return { cleared: [] }
  }
}

let state: NeedsYouState = loadPersisted()
const listeners = new Set<() => void>()

function emit(next: NeedsYouState) {
  state = next
  try {
    // Only `cleared` is persisted; see loadPersisted.
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ cleared: state.cleared })
    )
  } catch {
    // Quota/serialization failures only cost persistence, not the session.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useNeedsYou(): NeedsYouState {
  return useSyncExternalStore(
    subscribe,
    () => state,
    () => state
  )
}

/** The rows still open, in fixture order. */
export function visibleTasks(s: NeedsYouState): NeedsYouTask[] {
  return needsYouTasks.filter((task) => !s.cleared.includes(task.id))
}

/**
 * Clear every open task belonging to a module.
 *
 * Keyed on `module`, not on the title text: "todos los time off" means the
 * module, and matching prose would break the moment a fixture is reworded.
 * Returns the tasks it cleared so the caller can report a real number
 * rather than a guess.
 */
export function approveTasksByModule(
  module: string,
  steps: string[],
  summary: string
): ApproveOutcome {
  const hit = needsYouTasks.filter(
    (task) => task.module === module && !state.cleared.includes(task.id)
  )
  if (hit.length === 0) return "none"
  // One refusing to close its own work is the interesting branch: the
  // caller takes it to the chat, where the decision can be made.
  if (hit.some((task) => !task.oneCanClose)) return "escalate"

  const ids = hit.map((task) => task.id)
  const lead = ids[0]
  emit({
    ...state,
    active: { kind: "thinking", taskId: lead, steps, visible: 1 },
  })

  const step = (visible: number) => {
    if (visible < steps.length) {
      window.setTimeout(() => {
        emit({
          ...state,
          active: {
            kind: "thinking",
            taskId: lead,
            steps,
            visible: visible + 1,
          },
        })
        step(visible + 1)
      }, STEP_MS)
      return
    }
    window.setTimeout(() => {
      emit({ ...state, active: { kind: "done", taskId: lead, summary } })
      window.setTimeout(() => {
        emit({ ...state, active: { kind: "exiting", taskId: lead, summary } })
        window.setTimeout(() => {
          emit({ cleared: [...state.cleared, ...ids] })
        }, EXIT_MS)
      }, DONE_MS)
    }, STEP_MS)
  }
  step(1)
  return "running"
}

/** The phase for a row, if One is working on that one right now. */
export function phaseFor(
  s: NeedsYouState,
  taskId: string
): TaskPhase | undefined {
  return s.active?.taskId === taskId ? s.active : undefined
}

/** Back to a full inbox — used by `?reset=1`. */
export function clearNeedsYou() {
  emit({ cleared: [] })
}
