import { useSyncExternalStore } from "react"
import type { ExpenseSplit, Participant } from "@/fixtures"

/**
 * Submission snapshots — what each submitter actually saved when
 * they last submitted an expense. Keyed by `expenseId`.
 *
 * Why this exists: the Pre-fill banner on Alan's Greystone Brunch
 * House 2 needs to know what Hellen entered when she submitted
 * `exp-fc-meal-001` (participants, externals count, split mode,
 * split shares) so it can hydrate Alan's empty form with the same
 * structure — rewritten from Alan's POV. The existing
 * `inviteStore` only carries per-participant invite metadata, not
 * the full split.
 *
 * Scope: in-memory only. Reloading the page resets the store.
 * Module-scoped (not React context) so submitter prototypes and
 * consumer prototypes (Pre-fill banner, future ones) share the
 * same snapshot without threading a provider.
 */

export type SubmissionSnapshot = {
  expenseId: string
  /** Who submitted (e.g. Hellen). */
  submitterEmployeeId: string
  /** Internal employee participants + external-count Participant entries. */
  participants: Participant[]
  /** Split mode + shares as the submitter saved them, or null if no split. */
  split: ExpenseSplit | null
  /** ISO timestamp. */
  savedAt: string
}

type Listener = () => void

/**
 * Seed: Hellen's submission of `exp-fc-meal-001` (Birch & Beam
 * Café team lunch). This is what Alan's "Pre-fill" banner reads
 * when he opens `exp-fc-meal-002` — without the seed the demo
 * would require the user to first go submit `exp-fc-meal-001`
 * from Hellen's POV. The seed shape mirrors what
 * `recordSubmission` would produce after a real save:
 *   - participants: Marie Curie (emp-002), Alan Turing (emp-003),
 *     + 1 external head
 *   - split: equal mode, four-way (Hellen + Marie + Alan + 1
 *     external) — €58.40 / 4 = €14.60 each.
 *
 * Alan is part of the snapshot because Hellen explicitly tagged
 * him as a participant at submission time; that's what justifies
 * the Pre-fill banner appearing on his own copy of the receipt.
 */
const seedHellenGreystone: SubmissionSnapshot = {
  expenseId: "exp-fc-meal-001",
  submitterEmployeeId: "emp-current",
  participants: [
    { kind: "internal", employeeId: "emp-002", confirmation: "pending" },
    { kind: "internal", employeeId: "emp-003", confirmation: "pending" },
    { kind: "external", id: "ext-seed-1" },
  ],
  split: {
    mode: "equal",
    shares: [
      { employeeId: "emp-current", amount: 14.6 },
      { employeeId: "emp-002", amount: 14.6 },
      { employeeId: "emp-003", amount: 14.6 },
      { employeeId: null, amount: 14.6 },
    ],
  },
  savedAt: new Date("2026-05-06T12:48:00Z").toISOString(),
}

let snapshots: Record<string, SubmissionSnapshot> = {
  [seedHellenGreystone.expenseId]: seedHellenGreystone,
}
const listeners = new Set<Listener>()

function emit(): void {
  for (const l of listeners) l()
}

function subscribe(l: Listener): () => void {
  listeners.add(l)
  return () => {
    listeners.delete(l)
  }
}

function getSnapshot(): Record<string, SubmissionSnapshot> {
  return snapshots
}

/**
 * Hook returning the full snapshot map. Re-renders on any
 * `recordSubmission` call. Consumers typically destructure the
 * one snapshot they care about (`snapshots[expenseId]`).
 */
export function useSubmissionSnapshots(): Record<string, SubmissionSnapshot> {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

/**
 * Hook returning the snapshot for a single expense id, or
 * `undefined` if nothing was submitted for that expense yet.
 */
export function useSubmissionSnapshot(
  expenseId: string
): SubmissionSnapshot | undefined {
  const all = useSubmissionSnapshots()
  return all[expenseId]
}

/**
 * Persist (or overwrite) a snapshot for the given expense. Called
 * from the SubmitterEditForm's onSubmit handler so the next
 * consumer (Pre-fill banner, approver, …) always sees the most
 * recent state.
 */
export function recordSubmission(snapshot: SubmissionSnapshot): void {
  snapshots = { ...snapshots, [snapshot.expenseId]: snapshot }
  emit()
}
