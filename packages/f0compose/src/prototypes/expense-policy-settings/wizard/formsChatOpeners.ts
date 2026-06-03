/**
 * Front-end-only scripted copy for One's narration on the Forms
 * tab. We bypass the Mastra agent entirely and call `appendMessages`
 * directly — the trade-off is deterministic, predictable demo
 * behavior in exchange for One being unable to react to off-script
 * user replies. See the question turn in the conversation for the
 * decision.
 *
 * Pattern (per `ExpensePolicySettings` already in repo): One narrates
 * between modal opens, doesn't drive editing.
 *
 *   1. Welcome — fires once when the Forms tab first mounts.
 *      Introduces all three forms, suggests Regular first.
 *   2. Per-form nudge — fires after the Edit Fields modal closes
 *      for a given form. References what they just did + suggests
 *      the next form (Regular → Per diem → Mileage by default).
 *   3. Handoff — fires after the third modal close. Confirms all
 *      three are ready and offers a button to jump to Approval
 *      flows (rendered via `useGoToApprovalFlowsAction`'s
 *      `toolCalls` mechanism).
 */

import type { ExpenseFormType } from "../forms/fields"

/* ────────────────────────────────────────────────────────────────────
 * Form display labels (kept here, not imported, so this file stays
 * leaf-level — no cycle with FormsSummaryView).
 * ──────────────────────────────────────────────────────────────────── */

const FORM_LABEL: Record<ExpenseFormType, string> = {
  regular: "Regular expenses",
  "per-diem": "Per diem",
  mileage: "Mileage",
}

/* ────────────────────────────────────────────────────────────────────
 * Welcome (Step 1)
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Welcome is split into TWO assistant turns:
 *
 *   1. Intro — short, tone-setting, CTA to start. Renders first.
 *   2. Pause (thinking dots), then…
 *   3. Detail — "Let's start with expense types: 3 forms…" with
 *      the per-form bullets + Edit fields nudge. Renders below,
 *      autoscrolls.
 *
 * This mirrors a real agent's cadence (short hello → think →
 * substantive next step) rather than dumping everything in one
 * giant bubble.
 */

export const FORMS_INTRO_MESSAGE = [
  "Welcome to your expense policy setup.",
  "",
  "I'll walk you through it section by section. Ready when you are.",
].join("\n")

export const FORMS_WELCOME_MESSAGE = [
  "Let's start with **expense types** — the forms employees fill in to claim something back. Three of them:",
  "",
  "- **Regular expenses** — everyday purchases (receipts, card payments).",
  "- **Per diem** — flat travel allowances per day.",
  "- **Mileage** — driving reimbursement by distance.",
  "",
  "I've pre-filled sensible defaults for each. Click **Edit fields** on **Regular expenses** to start — most teams begin there since it's the highest volume.",
].join("\n")

/* ────────────────────────────────────────────────────────────────────
 * Per-form nudge (Step 2)
 *
 * Called when an Edit Fields modal closes. Picks the next form to
 * suggest based on what's still pending. If everything is ready,
 * returns `null` and the caller emits the handoff instead.
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Default suggestion order. Matches the card order on the page.
 */
const ORDER: readonly ExpenseFormType[] = ["regular", "per-diem", "mileage"]

/**
 * Per-form "what you just did" recap copy. Kept short — One isn't
 * grading the admin's choices, just acknowledging the click.
 */
const RECAP: Record<ExpenseFormType, string> = {
  regular:
    "Nice — **Regular expenses** is set up. That's the form 80% of your submissions will use.",
  "per-diem":
    "**Per diem** is set up. Travel admins will thank you for the locked rate field — it removes the manual lookup.",
  mileage:
    "**Mileage** is set up. Distance × rate is computed automatically, so submitters only enter the trip details.",
}

/**
 * Pick the next form to suggest based on which ones are still
 * pending (not marked ready). Falls back to `null` when all are
 * done.
 */
function nextPending(
  readyMap: Record<ExpenseFormType, boolean>,
  justClosed: ExpenseFormType
): ExpenseFormType | null {
  for (const formType of ORDER) {
    if (formType === justClosed) continue
    if (!readyMap[formType]) return formType
  }
  return null
}

/**
 * Build the assistant message posted after an Edit Fields modal
 * closes. `readyMap` should already reflect the just-closed form
 * as ready (the caller flips it first, then calls this).
 */
export function buildPerFormNudge(
  justClosed: ExpenseFormType,
  readyMap: Record<ExpenseFormType, boolean>
): string | null {
  const next = nextPending(readyMap, justClosed)
  if (next === null) return null // all done → caller emits handoff

  const recap = RECAP[justClosed]
  const nextLabel = FORM_LABEL[next]
  return `${recap}\n\nNext up: **${nextLabel}** — click **Edit fields** when you're ready.`
}

/* ────────────────────────────────────────────────────────────────────
 * Handoff (Step 3)
 *
 * Fired after the third modal closes. Emitted as an assistant
 * message + tool call to `goToApprovalFlows`. The tool call is
 * rendered by `useGoToApprovalFlowsAction` as a real F0Button.
 * ──────────────────────────────────────────────────────────────────── */

export const FORMS_HANDOFF_MESSAGE = [
  "All three forms look ready — submitters now have everything they need to file an expense, per diem claim, or mileage trip.",
  "",
  "The next step is **Approval flows**: who reviews these submissions, and in what order. Want to set that up now?",
].join("\n")

/**
 * Tool-call name used in the handoff assistant message. Must match
 * the name registered by `useGoToApprovalFlowsAction`.
 */
export const GO_TO_APPROVAL_FLOWS_ACTION = "goToApprovalFlows"
