import { useSyncExternalStore } from "react"

/**
 * Clock-in state for the time-tracking widget.
 *
 * Module store rather than component state because three sibling React
 * trees read it: the navbar's "⋮" button (which carries the pending dot),
 * the widgets menu row inside that button's popover, and the ClockIn
 * window itself once it is open. It used to be local to the navbar, which
 * worked only while the navbar also OWNED the clock-in button.
 *
 * `clockedInAt` is a timestamp so the window can derive elapsed time; it
 * is deliberately NOT persisted — a reload starts the prototype's day
 * over, the same way conversations always reopen on the greeting.
 */

export type ClockInState = {
  /** When the current session started, or null when not clocked in. */
  clockedInAt: number | null
}

let state: ClockInState = { clockedInAt: null }
const listeners = new Set<() => void>()

function emit(next: ClockInState) {
  state = next
  listeners.forEach((listener) => listener())
}

export function useClockIn(): ClockInState {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    () => state
  )
}

export function toggleClockIn() {
  emit({ clockedInAt: state.clockedInAt ? null : Date.now() })
}

/**
 * The day's clock-in is still outstanding — drives the notification dot
 * on the navbar "⋮" and on the widget's own menu row.
 */
export function useClockInPending(): boolean {
  return useClockIn().clockedInAt === null
}
