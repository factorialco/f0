import { useSyncExternalStore } from "react"

/**
 * A filter the PANEL puts on the People table.
 *
 * One's insight cards can act on the screen behind them: "Filter 14
 * anomalies" narrows the table to those rows while the conversation
 * carries on beside it (Oskar's decision tree). That is a cross-surface
 * effect, so it needs a store — the panel and the table are sibling React
 * trees under FactorialShell, exactly like every other store here.
 *
 * Separate from ODC's OWN filter state on purpose. That state belongs to
 * the toolbar the user drives; this is One reaching in. Keeping them
 * apart means clearing One's focus cannot wipe a filter the user set by
 * hand, and the Filter button still says what the user chose rather than
 * what One did.
 *
 * Not persisted: a reload should show the whole directory again, the same
 * call `clockInStore` makes about the prototype's day.
 */

export type PeopleFocus = "dormant" | null

let focus: PeopleFocus = null
const listeners = new Set<() => void>()

function emit(next: PeopleFocus) {
  focus = next
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function usePeopleFocus(): PeopleFocus {
  return useSyncExternalStore(
    subscribe,
    () => focus,
    () => focus
  )
}

/** Read outside React — the table's `fetchData` closure does. */
export function peopleFocus(): PeopleFocus {
  return focus
}

export function setPeopleFocus(next: PeopleFocus) {
  if (focus === next) return
  emit(next)
}
