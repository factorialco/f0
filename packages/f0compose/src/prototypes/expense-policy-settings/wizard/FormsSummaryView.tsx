import {
  F0Box,
  F0Card,
  F0Dialog,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import { Switch } from "@factorialco/f0-react/dist/experimental"
import type { AppendMessage } from "@factorialco/f0-react/dist/ai"
import { CheckCircle, Clock, Shield } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"

import { useAiChat } from "@/copilot"
import { ExpenseFormPreview } from "@/shared/expense-form-preview"

import type { PolicyData } from "../data/usePolicyData"
import {
  type ExpenseFormType,
  type FieldRow,
} from "../forms/fields"
import type { useExpenseFormsSource } from "../forms/useExpenseFormsSource"
import type { FormSubStepId, StepStatus } from "./useWizardState"

import { SimpleFieldTable } from "./SimpleFieldTable"
import {
  FORMS_HANDOFF_MESSAGE,
  FORMS_INTRO_MESSAGE,
  FORMS_WELCOME_MESSAGE,
  GO_TO_APPROVAL_FLOWS_ACTION,
  buildPerFormNudge,
} from "./formsChatOpeners"

// Module-scope guard so the welcome message fires exactly once per
// page-load even across React StrictMode's mount → unmount → mount
// cycle. Same pattern as `useCoCreationOpenerAction`.
let welcomePosted = false

// Unique substring of the SECOND welcome turn used as the DOM
// probe. We probe the detail message (not the intro) so the
// fallback only fires if the full two-turn sequence didn't land.
// Keep in sync with the Mastra skill prompt's Forms welcome
// guideline AND the fallback FORMS_WELCOME_MESSAGE copy.
const WELCOME_FINGERPRINT = "Let's start with"

// How long we'll wait for Mastra to land the welcome before
// giving up and falling back to the front-end appendMessages
// path. The actual budgets are encoded inside `sendOrFallback`
// (USER_BUBBLE_BUDGET_MS / MASTRA_REPLY_BUDGET_MS) — these
// module-scope constants are kept as documentation of the
// overall cadence and intentionally referenced nowhere else.

// Per-form recap fingerprints — used the same way as the welcome
// probe so we know Mastra responded before falling back.
const RECAP_FINGERPRINT: Record<ExpenseFormType, string> = {
  regular: "Regular expenses",
  "per-diem": "Per diem",
  mileage: "Mileage",
}

// Trigger messages sent to Mastra as user turns. They read like
// natural admin chatter so the user bubble isn't jarring. Mastra
// is configured in `expensePolicySetup.ts` to recognize these
// triggers and respond in-skill.
const MASTRA_WELCOME_TRIGGER =
  "I want to set up my Expenses policy."
const MASTRA_FORM_READY_TRIGGER: Record<ExpenseFormType, string> = {
  regular: "I just finished setting up the Regular expenses form.",
  "per-diem": "I just finished setting up the Per diem form.",
  mileage: "I just finished setting up the Mileage form.",
}

/**
 * Landing view for the Expense forms step.
 *
 * Three F0Cards (Regular expenses, Per diem, Mileage) laid out
 * side-by-side in a 3-column grid that reflows to 2 + 1 on narrow
 * widths. Each card mirrors the certified-documents pattern:
 *
 *   - Emoji avatar (placeholder — final art TBD).
 *   - Title + one-line description.
 *   - Two metadata lines:
 *       1. Status (CheckCircle "Ready" / Clock "Not set up").
 *       2. Fields summary (Shield icon — placeholder — "N shown
 *          · N hidden").
 *   - Primary action "Edit fields" (red) → opens a modal hosting
 *     the existing SimpleFieldTable.
 *   - Secondary action "Preview" → opens the ExpenseFormPreview
 *     modal.
 *
 * Status is "Not set up" by default; it flips to "Ready" the first
 * time the admin closes the Edit fields modal for that form.
 *
 * The Expense groups toggle stays above the grid, unchanged.
 *
 * Chat narration is owned by the Mastra `expensePolicySetup` skill
 * — we trigger it by sending user messages on tab mount and on
 * each form ready. A 15s polling budget per trigger; on timeout,
 * we fall back to the front-end `appendMessages` script so the
 * demo never breaks even when Mastra is offline.
 */

export function FormsSummaryView(props: {
  rowsByForm: Record<ExpenseFormType, FieldRow[]>
  status: (id: FormSubStepId) => StepStatus
  expenseGroupsEnabled: boolean
  onToggleExpenseGroups: (next: boolean) => void
  policyData: PolicyData
  formsSource: ReturnType<typeof useExpenseFormsSource>
}) {
  const { appendMessages, sendMessage, inProgress, setInProgress } = useAiChat()
  // Pinned to refs so trigger effects' deps stay [] and we don't
  // refire on every identity change.
  const appendMessagesRef = useRef(appendMessages)
  appendMessagesRef.current = appendMessages
  const sendMessageRef = useRef(sendMessage)
  sendMessageRef.current = sendMessage
  const setInProgressRef = useRef(setInProgress)
  setInProgressRef.current = setInProgress
  // Track inProgress in a ref too so the polling tick can see
  // whether Mastra started responding without React re-renders.
  const inProgressRef = useRef(inProgress)
  inProgressRef.current = inProgress

  /**
   * Try to drive a Mastra response by sending a user-style
   * trigger message. State machine:
   *
   *   1. Send the trigger. Poll the DOM for the trigger TEXT
   *      (user bubble) every 250ms. If it shows up within
   *      USER_BUBBLE_BUDGET_MS, the CopilotKit bridge is wired
   *      and the message landed — stop sending, move to step 2.
   *      Otherwise re-send each tick (bridge was cold).
   *
   *   2. Wait for Mastra. Poll `inProgressRef` — when it flips
   *      true Mastra is generating. Stop polling, let CopilotKit
   *      stream the reply naturally.
   *
   *   3. Budget guard. If MASTRA_REPLY_BUDGET_MS elapses without
   *      `inProgress` going true OR without an agent reply
   *      landing, fire the fallback so the demo still works.
   *
   * The trigger fingerprint is the TRIGGER text (always present
   * once the user bubble lands), not the agent's reply text
   * (which we can't predict without locking the skill prompt).
   */
  const sendOrFallback = (
    trigger: string,
    // `_fingerprint` is kept in the signature for call-site
    // readability (each caller documents which reply text it
    // expects) but the polling loop now keys off the USER bubble
    // text instead. The agent-reply fingerprint is unreliable
    // until the Mastra skill prompt locks the exact phrasing.
    _fingerprint: string,
    fallback: () => void
  ): void => {
    const startedAt = Date.now()
    let userBubbleLanded = false
    let mastraReplying = false
    let intervalId: number | null = null

    // Show the Thinking… indicator immediately so the user knows
    // SOMETHING is happening between turns. Without this, the
    // chat looks frozen for up to 4 seconds while we wait for
    // the bridge to wire and the user-bubble to land — and even
    // longer if Mastra is going to reply. CopilotKit normally
    // sets inProgress automatically when sendMessage hits the
    // bridge, but our cold-bridge re-send pattern bypasses that
    // path, so we own the indicator until either Mastra takes
    // over (phase 2) or the fallback fires.
    setInProgressRef.current(true)

    // Absolute safety net: no matter what phase we're in, force-
    // clear the indicator after MASTRA_REPLY_BUDGET_MS + a small
    // grace. This guards against the case where phase 2 thinks
    // Mastra is replying (because OUR own setInProgress(true)
    // makes inProgressRef.current true) but Mastra is actually
    // silent. Without this, the indicator hangs forever.
    // CopilotKit will re-assert inProgress=true the moment a real
    // streaming reply lands, so this is a no-op in the happy path.
    const safetyTimeoutId = window.setTimeout(() => {
      setInProgressRef.current(false)
    }, 16_000)

    const clear = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId)
        intervalId = null
      }
      window.clearTimeout(safetyTimeoutId)
    }

    const triggerOnScreen = (): boolean =>
      (document.body.textContent ?? "").includes(trigger)

    const USER_BUBBLE_BUDGET_MS = 4_000
    const MASTRA_REPLY_BUDGET_MS = 15_000

    const tick = () => {
      const elapsed = Date.now() - startedAt

      // Phase 1: ensure the user bubble landed (bridge wired).
      //
      // We do NOT re-send the trigger here. Earlier iterations
      // re-sent on every tick to handle "cold bridge" cases, but
      // that produced duplicate user bubbles every time the bridge
      // was a few hundred ms slow (which is most of the time). The
      // synchronous send below (outside the tick loop) is the only
      // send. If it didn't land within USER_BUBBLE_BUDGET_MS we
      // assume the bridge is dead and hand off to the fallback.
      if (!userBubbleLanded) {
        if (triggerOnScreen()) {
          userBubbleLanded = true
          return // continue polling for Mastra
        }
        if (elapsed >= USER_BUBBLE_BUDGET_MS) {
          // Bridge never wired in time → fallback. Hand the
          // Thinking… indicator off to the fallback path which
          // will keep it on while it stages its own turns.
          clear()
          // eslint-disable-next-line no-console
          console.warn(
            "[FormsSummaryView] CopilotKit bridge never wired within",
            USER_BUBBLE_BUDGET_MS,
            "ms — falling back."
          )
          fallback()
          return
        }
        return
      }

      // Phase 2: wait for Mastra to start streaming.
      //
      // We cannot trust `inProgressRef.current` as a "Mastra is
      // replying" signal because WE set inProgress=true ourselves
      // at the top of sendOrFallback to keep the Thinking…
      // indicator visible during phase 1. So the polling tick
      // would see true on the very first iteration and incorrectly
      // conclude Mastra had taken over.
      //
      // Instead, the only reliable signal we have is the
      // MASTRA_REPLY_BUDGET_MS budget: if it elapses without an
      // assistant reply landing (we can't detect that here, so we
      // just trust the budget), trigger the fallback. The absolute
      // safety timeout above is the final guard against a stuck
      // indicator if neither path clears it.
      if (!mastraReplying) {
        if (elapsed >= MASTRA_REPLY_BUDGET_MS) {
          // Mastra silent — fallback path takes over.
          clear()
          // eslint-disable-next-line no-console
          console.warn(
            "[FormsSummaryView] Mastra didn't reply within",
            MASTRA_REPLY_BUDGET_MS,
            "ms — falling back."
          )
          fallback()
          return
        }
        return
      }
    }

    // Fire-and-poll. First send synchronous so warm bridges land
    // immediately.
    sendMessageRef.current(trigger)
    intervalId = window.setInterval(tick, 250)
  }

  /**
   * Fallback path — post an assistant message with a fake
   * "Thinking…" indicator so it feels closer to a real agent
   * reply. Used only when Mastra is unreachable.
   *
   *   - Minimum 900ms so the indicator is perceivable.
   *   - Adds ~6ms per character above 80 chars, capped at 2400ms.
   */
  const postWithThinking = (message: AppendMessage): void => {
    setInProgressRef.current(true)
    const length = message.content?.length ?? 0
    const extra = Math.max(0, length - 80) * 6
    const delay = Math.min(900 + extra, 2400)
    window.setTimeout(() => {
      appendMessagesRef.current([message], { persist: false })
      setInProgressRef.current(false)
    }, delay)
  }

  // Per-form readiness. Flips from false → true the first time the
  // admin closes the Edit fields modal for that form. Stays true
  // for the rest of the session (no "un-ready" UX yet).
  const [ready, setReady] = useState<Record<ExpenseFormType, boolean>>({
    regular: false,
    "per-diem": false,
    mileage: false,
  })

  // Which form's Edit fields modal is open (null = none).
  const [editingForm, setEditingForm] = useState<ExpenseFormType | null>(null)

  // Left-column (table) measured height. Used to hug the modal to
  // the table — without this the taller right-column preview
  // stretches the dialog to 80vh even for short forms (Per diem,
  // Mileage). We measure with ResizeObserver and clamp at 80vh.
  const leftColumnRef = useRef<HTMLDivElement | null>(null)
  const [leftColumnHeight, setLeftColumnHeight] = useState<number | null>(null)
  useEffect(() => {
    if (editingForm === null) {
      setLeftColumnHeight(null)
      return
    }
    const el = leftColumnRef.current
    if (!el) return
    const update = () => setLeftColumnHeight(el.scrollHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [editingForm])

  // Which form's Preview modal is open (null = none).
  const [previewingForm, setPreviewingForm] = useState<ExpenseFormType | null>(
    null
  )

  // Welcome — fires once on tab mount. Sends a real user message
  // to Mastra (skill replies via the standard streaming path with
  // proper thinking dots + turn separation). Two-layer guard:
  //
  //   1. Module-scope `welcomePosted` — survives React StrictMode's
  //      mount → unmount → mount cycle in dev.
  //   2. DOM fingerprint probe — survives Vite HMR re-evaluating
  //      the module (which would otherwise reset the flag and
  //      double-fire). If the welcome text is already in the chat
  //      transcript, skip.
  //
  // If Mastra never responds within the polling budget, fall back
  // to the scripted FORMS_WELCOME_MESSAGE so the demo still works.
  // DISABLED (2026-05): the auto-firing scripted welcome is gone.
  // The experience is now purely free-text + co-creation — One only
  // speaks when the admin says something. The previous on-mount
  // sendOrFallback(MASTRA_WELCOME_TRIGGER, …) + scripted
  // FORMS_INTRO/FORMS_WELCOME fallback lived here; re-introduce a
  // guided opener later if we want guardrails back, but gate it so it
  // never auto-fires/loops. Refs below are intentionally still wired
  // so manual co-creation narration keeps working.
  void welcomePosted
  void WELCOME_FINGERPRINT
  void MASTRA_WELCOME_TRIGGER
  void FORMS_INTRO_MESSAGE
  void FORMS_WELCOME_MESSAGE
  void sendOrFallback
  void postWithThinking
  // Closing the Edit fields modal no longer narrates anything, so the
  // per-form recap/handoff machinery is intentionally unused now.
  void RECAP_FINGERPRINT
  void MASTRA_FORM_READY_TRIGGER
  void buildPerFormNudge
  void FORMS_HANDOFF_MESSAGE
  void GO_TO_APPROVAL_FLOWS_ACTION

  const closeEditing = () => {
    if (!editingForm) {
      setEditingForm(null)
      return
    }
    const justClosed = editingForm
    setEditingForm(null)

    // Flip the card to "Ready" the first time its modal closes — a
    // quiet visual signal, nothing more. We deliberately do NOT
    // send any chat message here: closing the Edit fields modal must
    // not trigger anything from the user OR from One. (This used to
    // fire a mocked "I just finished setting up the … form" user
    // turn + scripted recap/handoff from the pre-Mastra prototype;
    // that whole dispatch is gone now.)
    if (ready[justClosed]) return
    setReady({ ...ready, [justClosed]: true })
  }

  return (
    <F0Box display="flex" flexDirection="column" gap="2xl">
      <F0Text
        content="Configure the three expense form types employees fill in."
        variant="description"
      />

      <ExpenseGroupsToggleCard
        enabled={props.expenseGroupsEnabled}
        onChange={props.onToggleExpenseGroups}
      />

      {/* 3-up grid that reflows to 2 + 1 then 1 stack on narrow
          widths (chat panel open). `gap="xl"` (16px) gives the three
          cards more breathing room than the certified-documents
          grid (which uses 8px). */}
      <F0Box display="grid" columns="3" gap="xl">
        {(["regular", "per-diem", "mileage"] as const).map((formType) => {
          const rows = props.rowsByForm[formType]
          const counts = countShownHidden(rows)
          const isReady = ready[formType]

          return (
            <F0Card
              key={formType}
              avatar={{ type: "emoji", emoji: META[formType].emoji }}
              title={META[formType].title}
              description={META[formType].description}
              metadata={[
                {
                  icon: isReady ? CheckCircle : Clock,
                  property: {
                    type: "text",
                    label: "Status",
                    value: isReady ? "Ready" : "Not set up",
                  },
                },
                {
                  icon: Shield,
                  property: {
                    type: "text",
                    label: "Fields",
                    value: `${counts.defaults} default \u00b7 ${counts.shown} shown \u00b7 ${counts.hidden} hidden`,
                  },
                },
              ]}
              primaryAction={{
                label: "Edit fields",
                onClick: () => setEditingForm(formType),
              }}
              secondaryActions={[
                {
                  label: "Preview",
                  onClick: () => setPreviewingForm(formType),
                },
              ]}
            />
          )
        })}
      </F0Box>

      {/* Edit fields modal — split view.
          Left column hosts the SimpleFieldTable (the editor).
          Right column hosts a live ExpenseFormPreview that reflects
          every toggle/requirement change instantly, since both
          consume the same `formsSource`. The vertical divider keeps
          the two zones visually distinct without a hard border.
          Width is bumped to "xl" so both columns get room to
          breathe; F0Dialog overlays the chat so the chat panel
          being open doesn't affect modal sizing. Closing the modal
          (any path — Done, X, escape, backdrop) flips the form's
          readiness to "Ready" the first time. */}
      <F0Dialog
        isOpen={editingForm !== null}
        onClose={closeEditing}
        title={editingForm ? `Edit ${META[editingForm].title} fields` : ""}
        width="xxl"
        primaryAction={{ label: "Done", onClick: closeEditing }}
        disableContentPadding
      >
        {editingForm && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) 385px",
              // Bound the single row to the container height so the
              // columns can't grow to their content and spill out of
              // the grid — they get a fixed track and scroll inside it.
              gridTemplateRows: "minmax(0, 1fr)",
              // Hug content vertically — height tracks the left
              // (table) column, clamped at 80vh. When the table is
              // shorter than the preview the dialog still hugs the
              // table and the preview scrolls inside its column.
              height:
                leftColumnHeight !== null
                  ? `min(${leftColumnHeight}px, 72vh)`
                  : undefined,
              // Cap below the viewport so the dialog's title bar +
              // footer never push the whole dialog body into a scroll
              // of its own (which would drag both columns together).
              maxHeight: "min(680px, 72vh)",
            }}
          >
            {/* Left — editor (measured) */}
            <div
              ref={leftColumnRef}
              style={{
                overflowY: "auto",
                // minHeight:0 lets this grid item shrink below its
                // content so overflowY actually scrolls here; and
                // overscroll-contain stops the wheel from chaining to
                // the dialog body (which would move the other column).
                minHeight: 0,
                overscrollBehavior: "contain",
                borderRight: "1px solid var(--f1-border-default, #e5e7eb)",
                padding: "16px",
              }}
            >
              <SimpleFieldTable
                formType={editingForm}
                rows={props.rowsByForm[editingForm]}
                formsSource={props.formsSource}
              />
            </div>

            {/* Right — live submitter preview. No eyebrow header:
                the dialog title + the muted background tint are
                enough to signal this column is a mirror, not a
                second editor. */}
            <div
              style={{
                overflowY: "auto",
                // Same containment as the left column: scroll stays in
                // this preview pane and never drags the table with it.
                minHeight: 0,
                overscrollBehavior: "contain",
                background: "rgba(243, 244, 246, 0.35)",
                padding: "16px",
              }}
            >
              <ExpenseFormPreview
                formType={editingForm}
                rows={props.rowsByForm[editingForm]}
                categories={props.policyData.categories}
                subcategories={props.policyData.subcategories}
                perDiemRates={props.policyData.rates.filter(
                  (r) => r.formType === "per-diem"
                )}
              />
            </div>
          </div>
        )}
      </F0Dialog>

      {/* Preview modal \u2014 portrait shape so the form reads like the
          real submitter form. Single Close action, no submit. */}
      <F0Dialog
        isOpen={previewingForm !== null}
        onClose={() => setPreviewingForm(null)}
        title={
          previewingForm ? `${META[previewingForm].title} form preview` : ""
        }
        width="sm"
        primaryAction={{
          label: "Close",
          onClick: () => setPreviewingForm(null),
        }}
      >
        {previewingForm && (
          <div style={{ maxHeight: "min(720px, 80vh)" }}>
            <ExpenseFormPreview
              formType={previewingForm}
              rows={props.rowsByForm[previewingForm]}
              categories={props.policyData.categories}
              subcategories={props.policyData.subcategories}
              perDiemRates={props.policyData.rates.filter(
                (r) => r.formType === "per-diem"
              )}
            />
          </div>
        )}
      </F0Dialog>
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Card metadata \u2014 user-facing copy + placeholder emoji.
 * ──────────────────────────────────────────────────────────────────── */

const META: Record<
  ExpenseFormType,
  { title: string; description: string; emoji: string }
> = {
  regular: {
    title: "Regular expenses",
    description: "Everyday purchases",
    // Receipt \u2014 stands in for "the canonical out-of-pocket /
    // card-receipt flow". Final icon TBD.
    emoji: "\ud83e\uddfe",
  },
  "per-diem": {
    title: "Per diem",
    description: "Travel allowances",
    // Aeroplane \u2014 universal travel shorthand.
    emoji: "\u2708\ufe0f",
  },
  mileage: {
    title: "Mileage",
    description: "Driving reimbursement",
    // Car \u2014 mileage = driven distance.
    emoji: "\ud83d\ude97",
  },
}

/* ────────────────────────────────────────────────────────────────────
 * Helpers
 * ──────────────────────────────────────────────────────────────────── */

/**
 * Compute the metadata counts for the card.
 *
 *   defaults = locked rows  (always shown; required by Factorial)
 *   shown    = editable rows whose `visible` flag is true
 *   hidden   = editable rows whose `visible` flag is false
 *
 * Locked rows are surfaced separately as "defaults" so the admin
 * can distinguish "the floor we enforce" from "what I chose to add
 * on top". They are not double-counted in `shown`.
 */
function countShownHidden(rows: readonly FieldRow[]): {
  defaults: number
  shown: number
  hidden: number
} {
  let defaults = 0
  let shown = 0
  let hidden = 0
  for (const row of rows) {
    if (row.kind === "locked") {
      defaults += 1
    } else if (row.visible) {
      shown += 1
    } else {
      hidden += 1
    }
  }
  return { defaults, shown, hidden }
}

/* ────────────────────────────────────────────────────────────────────
 * Cross-form expense-groups toggle \u2014 unchanged from prior design.
 * ──────────────────────────────────────────────────────────────────── */

function ExpenseGroupsToggleCard(props: {
  enabled: boolean
  onChange: (next: boolean) => void
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="between"
      gap="md"
      border="default"
      borderColor="secondary"
      borderRadius="md"
      background="primary"
      padding="lg"
    >
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Expense groups" variant="heading" />
        <F0Text
          content="Let employees bundle multiple expenses into a single submission for approval."
          variant="description"
        />
      </F0Box>
      <Switch
        title="Enable expense groups"
        hideLabel
        checked={props.enabled}
        onCheckedChange={props.onChange}
      />
    </F0Box>
  )
}

/* ────────────────────────────────────────────────────────────────────
 * Legacy FormSummary export kept for any lingering imports. The
 * data shape isn't used by the new card design but other modules
 * (e.g. copilot context) may still consume it.
 * ──────────────────────────────────────────────────────────────────── */

export type FormSummary = {
  subStepId: FormSubStepId
  title: string
  alwaysShown: string[]
  shown: string[]
  hidden: string[]
}
