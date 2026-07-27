/**
 * Shared kickoff prompts for the "Submit with One" entry points.
 *
 * Several places let the user jump into Factorial One instead of the
 * manual expense-type → form path:
 *   - the "Submit with One" item in the New-expense dropdown and the
 *     awareness banner CTA (see `submit/`)
 *   - the in-expense "Add with One" nudge (see `shared/detail/`)
 *
 * They post a message into the chat panel via
 * `useChatRuntime().sendMessage(...)`. Both kickoffs route to an
 * *invitation* action (see `useSubmitWithOneAction` /
 * `useAddRelatedReceiptsAction`) — One replies "sure, drop your
 * receipts here" and waits. It does NOT fabricate a draft from a
 * button click. An actual draft only appears when the user really
 * engages (types "create an expense from this receipt" / drops one →
 * `createExpenseFromReceipt`), which is also what flips `hasUsedOne`
 * and retires the promos.
 *
 * The wording is chosen to match each invite action's matcher and to
 * NOT match the generic receipt/create matcher (which would fabricate).
 */

/** Routed to `useSubmitWithOneAction` (start-fresh invitation). */
export const SUBMIT_WITH_ONE_PROMPT = "Submit expenses with One"

/**
 * New-expense dropdown kickoffs (closed-circuit demo).
 *
 * Each routes to a specific action by matcher and must NOT collide
 * with the others:
 *   - NEW_REGULAR_EXPENSE_PROMPT → `useBulkCreateExpensesAction` (the
 *     closed-circuit receipt set). Also fired by the "📎 Drop
 *     receipts" affordance.
 *   - NEW_MILEAGE_PROMPT   → `useCreateMileageAction` (matches "mileage").
 *   - NEW_PER_DIEM_PROMPT  → `useCreatePerDiemAction` (matches "per diem").
 *   - NEW_FOLDER_PROMPT    → `useGroupExpensesAction` (matches "group").
 */
export const NEW_REGULAR_EXPENSE_PROMPT =
  "Create expenses from my receipts"
export const NEW_MILEAGE_PROMPT =
  "Log a mileage expense for a drive I made"
export const NEW_PER_DIEM_PROMPT = "Create a per diem expense"
export const NEW_FOLDER_PROMPT =
  "Group related expenses into a folder"

/** Fired by the "📎 Drop receipts" affordance — simulates the upload
 *  gesture and routes to the closed-circuit bulk create. */
export const DROP_RECEIPTS_PROMPT =
  "I just dropped a pile of receipts — create expenses from them"

/**
 * Routed to `useAddRelatedReceiptsAction` (in-context invitation). The
 * intent is "upload the OTHER receipts that go with the expense I'm
 * looking at, and maybe group them" — not start fresh, not add to an
 * existing group (there may be none yet).
 */
export const ADD_RELATED_RECEIPTS_PROMPT =
  "Add other receipts that go with this expense"
