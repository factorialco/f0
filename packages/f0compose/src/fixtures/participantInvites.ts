import { addDays, TODAY } from "./helpers"

/**
 * Participant-confirmation invites surfaced in the Inbox prototype.
 *
 * Each invite represents one non-owner internal participant being
 * asked to confirm attendance on a shared expense. Owners never get
 * an invite about their own expense. External participants never
 * get an invite (no identity, no notification).
 *
 * Lifecycle of `status`:
 *   - `pending`   — invite delivered, no decision yet.
 *   - `confirmed` — participant confirmed attendance.
 *   - `declined`  — participant said "I wasn't there".
 *
 * The store at
 * `src/prototypes/controlling-step-poc/shared/participants/inviteStore.ts`
 * mutates these at runtime so the submitter's "Send for approval"
 * action and the inbox's confirm/decline actions stay in sync
 * across both prototypes.
 */
export type ParticipantInviteStatus = "pending" | "confirmed" | "declined"

export type ParticipantInvite = {
  /** Stable id; pattern `inv-<expenseId>-<participantEmployeeId>`. */
  id: string
  /** Expense the invite refers to. */
  expenseId: string
  /** Owner who added this participant. */
  ownerEmployeeId: string
  /** Internal participant being asked to confirm. */
  participantEmployeeId: string
  /** ISO YYYY-MM-DD; the expense's document date. */
  expenseDate: string
  /** ISO datetime; when the invite was created. */
  createdAt: string
  status: ParticipantInviteStatus
  /** Optional: short context line ("Team dinner at Greystone Brunch House"). */
  context?: string
  /**
   * Whether the participant has opened/seen the invite. Drives the
   * unread dot on the inbox row. Toggled to `true` on first click.
   */
  isUnread: boolean
}

/**
 * Seed invites for the declared-split demo row (`exp-split-001`).
 * The owner is `emp-001` (Ada Lovelace — derived from the
 * `exp-split-001` id seed by ReadView). Each internal participant
 * on that expense gets one invite. The fixture seeds three pending,
 * one confirmed, and zero declined so every state is visible.
 */
const ownerId = "emp-001"
const expenseId = "exp-split-001"
const expenseDate = addDays(TODAY, -3)
const createdAt = `${addDays(TODAY, -3)}T18:32:00Z`
const context = "Team dinner at Greystone Brunch House"

export const participantInvites: ParticipantInvite[] = [
  {
    id: `inv-${expenseId}-emp-003`,
    expenseId,
    ownerEmployeeId: ownerId,
    participantEmployeeId: "emp-003",
    expenseDate,
    createdAt,
    status: "confirmed",
    context,
    isUnread: false,
  },
  {
    id: `inv-${expenseId}-emp-004`,
    expenseId,
    ownerEmployeeId: ownerId,
    participantEmployeeId: "emp-004",
    expenseDate,
    createdAt,
    status: "pending",
    context,
    isUnread: true,
  },
  {
    id: `inv-${expenseId}-emp-005`,
    expenseId,
    ownerEmployeeId: ownerId,
    participantEmployeeId: "emp-005",
    expenseDate,
    createdAt,
    status: "pending",
    context,
    isUnread: true,
  },
  {
    id: `inv-${expenseId}-emp-006`,
    expenseId,
    ownerEmployeeId: ownerId,
    participantEmployeeId: "emp-006",
    expenseDate,
    createdAt,
    status: "pending",
    context,
    isUnread: true,
  },
  // Seed for the Inbox Scenario A row: Hellen (CURRENT_USER_ID =
  // "emp-current") added Marie Curie (emp-002) to the company-paid
  // Factorial-card meal `exp-fc-meal-001`. This invite is what
  // surfaces the "Hellen added you to an expense" pinned row at
  // the top of Marie's Finance preset in `/p/inbox`. Confirming
  // or rejecting it in Inbox flips this seed; submitting the
  // expense again from Hellen's POV is a no-op (ensureInvitesFor
  // is idempotent by `expenseId + participantEmployeeId`).
  {
    id: "inv-exp-fc-meal-001-emp-002",
    expenseId: "exp-fc-meal-001",
    ownerEmployeeId: "emp-current",
    participantEmployeeId: "emp-002",
    expenseDate: addDays(TODAY, -2),
    createdAt: `${addDays(TODAY, -2)}T12:48:00Z`,
    status: "pending",
    context: "Team lunch at Birch & Beam Café",
    isUnread: true,
  },
]
