import { useSyncExternalStore } from "react"
import {
  participantInvites as seedInvites,
  type ParticipantInvite,
  type ParticipantInviteStatus,
} from "@/fixtures"

/**
 * Tiny pub/sub store for participant-confirmation invites.
 *
 * Why a module-level store and not React context: the inbox is a
 * separate prototype root (`/p/inbox`) from the controlling-step
 * prototype (`/p/controlling-step-poc`), so they don't share a
 * provider. By living at module scope, both prototypes see the
 * same array — and `useSyncExternalStore` gives every consumer a
 * proper subscription without us hand-rolling a context.
 *
 * Scope: in-memory only. Reloading the page resets to seed.
 *
 * Concurrency: not a concern in a prototype (single tab, single
 * user). We mutate by swapping the array reference so React's
 * identity check triggers re-renders.
 */
type Listener = () => void

let invites: ParticipantInvite[] = [...seedInvites]
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

function getSnapshot(): ParticipantInvite[] {
  return invites
}

/**
 * Hook returning the current list of invites. Re-renders whenever
 * any mutation runs through the store.
 */
export function useParticipantInvites(): ParticipantInvite[] {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}

/**
 * Hook returning a single invite by id, or `undefined` if missing.
 * Used by the inline confirmation panel in the inbox.
 */
export function useParticipantInvite(
  id: string
): ParticipantInvite | undefined {
  const all = useParticipantInvites()
  return all.find((i) => i.id === id)
}

/**
 * Mark an invite as read (without changing its status). Idempotent:
 * a no-op if the invite is already read or missing.
 */
export function markInviteRead(id: string): void {
  const idx = invites.findIndex((i) => i.id === id)
  if (idx === -1) return
  if (!invites[idx].isUnread) return
  const next = [...invites]
  next[idx] = { ...next[idx], isUnread: false }
  invites = next
  emit()
}

/**
 * Transition an invite to `confirmed` or `declined`. Also marks the
 * invite as read (a decision implies the user saw it). Idempotent.
 */
export function setInviteStatus(
  id: string,
  status: Extract<ParticipantInviteStatus, "confirmed" | "declined">
): void {
  const idx = invites.findIndex((i) => i.id === id)
  if (idx === -1) return
  const current = invites[idx]
  if (current.status === status && !current.isUnread) return
  const next = [...invites]
  next[idx] = { ...current, status, isUnread: false }
  invites = next
  emit()
}

/**
 * Create new invites when a submitter sends an expense for
 * approval. Skips participants that already have an invite for the
 * given expense (idempotent re-sends). Returns the count of newly
 * created invites.
 */
export function ensureInvitesFor(args: {
  expenseId: string
  ownerEmployeeId: string
  participantEmployeeIds: string[]
  expenseDate: string
  context?: string
}): number {
  const { expenseId, ownerEmployeeId, participantEmployeeIds } = args
  const now = new Date().toISOString()

  const existingKey = new Set(
    invites
      .filter((i) => i.expenseId === expenseId)
      .map((i) => i.participantEmployeeId)
  )

  const fresh: ParticipantInvite[] = []
  for (const pid of participantEmployeeIds) {
    if (existingKey.has(pid)) continue
    fresh.push({
      id: `inv-${expenseId}-${pid}`,
      expenseId,
      ownerEmployeeId,
      participantEmployeeId: pid,
      expenseDate: args.expenseDate,
      createdAt: now,
      status: "pending",
      context: args.context,
      isUnread: true,
    })
  }

  if (fresh.length === 0) return 0
  invites = [...fresh, ...invites]
  emit()
  return fresh.length
}

/**
 * Bulk read accessor for non-React consumers (debugging, tests).
 * Returns a defensive copy.
 */
export function snapshotInvites(): ParticipantInvite[] {
  return [...invites]
}
