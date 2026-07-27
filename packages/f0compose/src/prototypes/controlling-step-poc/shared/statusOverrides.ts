import { useSyncExternalStore } from "react"

import type { ExpenseStatus } from "@/fixtures"

/**
 * Tiny in-memory store of per-expense status OVERRIDES on top of the static
 * fixture data, so prototype actions (e.g. "Mark as controlled") actually
 * move an expense between lifecycle states — and the preset counters, which
 * are derived live from the rows, update with it.
 *
 * Why a module-level external store rather than React state: the expense rows
 * are built in several places (`useManageRows`, the single-expense detail
 * resolver, folder views) from a shared fixture import. A standalone store
 * read via `useSyncExternalStore` lets every one of those re-render off the
 * SAME source of truth without threading a setter through the whole tree.
 *
 * Overrides only affect `status`; flags like the `missing-receipt` alert are
 * computed from receipt presence (not status), so controlling a missing-
 * receipt expense correctly KEEPS it in the "Missing receipts" preset — it
 * just leaves "To control" and joins "Controlled".
 *
 * Scope: prototype-session only (not persisted across reloads).
 */

const overrides = new Map<string, ExpenseStatus>()
const listeners = new Set<() => void>()
let snapshot = 0

function emit(): void {
  snapshot += 1
  listeners.forEach((l) => l())
}

/** Override the status of one or more expenses (by fixture id). */
export function markExpenseStatus(
  ids: string[],
  status: ExpenseStatus
): void {
  let changed = false
  for (const id of ids) {
    if (overrides.get(id) !== status) {
      overrides.set(id, status)
      changed = true
    }
  }
  if (changed) emit()
}

/** The effective status: an override if one exists, else the fixture value. */
export function effectiveStatus(
  id: string,
  fixtureStatus: ExpenseStatus
): ExpenseStatus {
  return overrides.get(id) ?? fixtureStatus
}

function subscribe(cb: () => void): () => void {
  listeners.add(cb)
  return () => {
    listeners.delete(cb)
  }
}

function getSnapshot(): number {
  return snapshot
}

/**
 * Subscribe a component to override changes. Returns a version number that
 * changes on every mutation — include it in the deps of any memo that builds
 * rows so they recompute (and the live counters re-derive).
 */
export function useStatusOverridesVersion(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
