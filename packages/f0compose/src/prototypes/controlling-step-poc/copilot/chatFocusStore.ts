/**
 * Conversational-focus store (session-scoped, module-level).
 *
 * The simulated chat is text-only and first-match-wins, so a couple
 * of actions need to know "which expense is the conversation about
 * right now" to behave correctly:
 *
 *   - `openForEditId` — the draft whose detail page is open in "edit
 *     via One" mode. The edit action (`useEditExpenseAction`) mutates
 *     THIS draft when the user says "change the amount to 42". Set by
 *     the detail page's Edit pencil; cleared on navigate-away / send.
 *
 *   - `awaitingFix` — the draft One just asked a follow-up question
 *     about (e.g. "who attended?" for an over-limit meal, or "what was
 *     this for?" for a missing description), plus WHICH field the
 *     answer fills. The fix action (`useFixExpenseAction`) only claims
 *     a message while this is set, so the user's free-text answer
 *     ("it was a client dinner with Ada and Marie") doesn't get
 *     stolen by a generic matcher.
 *
 * Module-scoped (not React context) for the same reason as
 * `chatDraftsStore`: the chat actions live outside the prototype's
 * component tree. No subscribers needed — the values are read
 * synchronously inside `run(...)`; the detail page writes them.
 */

export type FixField = "participants" | "description"

export type AwaitingFix = {
  draftId: string
  field: FixField
}

let openForEditId: string | null = null
let awaitingFix: AwaitingFix | null = null

export function getOpenForEditId(): string | null {
  return openForEditId
}

export function setOpenForEditId(id: string | null): void {
  openForEditId = id
}

export function getAwaitingFix(): AwaitingFix | null {
  return awaitingFix
}

export function setAwaitingFix(next: AwaitingFix | null): void {
  awaitingFix = next
}
