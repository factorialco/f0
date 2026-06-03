import { F0Alert, F0Heading, F0Text } from "@factorialco/f0-react"
import { useEffect, useMemo, useRef } from "react"

import type { ExpenseCategory } from "@/fixtures"

import { useCopilotAction } from "@/copilot"
import {
  addChatDrafts,
  setChatDraftStatus,
  type ChatDraftExpense,
} from "./chatDraftsStore"/**
 * Frontend "shadow" of David's `bulkCreateExpenses` backend tool.
 *
 * We register a CopilotKit action whose `name` matches the agent's
 * backend tool. `available: "frontend"` keeps it OUT of the runtime
 * tool list (see `processActionsForRuntimeRequest` — actions marked
 * "frontend" are filtered before the agent receives them), so the
 * agent never sees us as a redundant tool. What we DO get is a
 * render-time callback whenever the agent invokes a tool by that
 * name: CopilotKit's `useRenderToolCall` dispatches purely on name,
 * not on whether the action is registered as remote/frontend.
 *
 * The backend tool will still be invoked on the server side (and
 * will likely fail against real Factorial GraphQL without auth) —
 * we don't care: we only need the parsed `args` to render a card and
 * promote the rows into our local chat-drafts store. The user never
 * sees the backend failure because we ALSO render the success state
 * here on top.
 *
 * Side-effect model: the `<BatchSummary>` component issues an
 * `addChatDrafts` exactly once per `toolCallId` via `useEffect`,
 * guarded by a module-scoped `seenToolCallIds` set. CopilotKit
 * re-renders the action node on every streamed token (status flips
 * from `inProgress` → `complete`) and re-renders again when the chat
 * scrolls / messages change, so a naive top-level mutation would
 * insert the draft N times.
 */

const seenToolCallIds = new Set<string>()

type BulkExpenseItem = {
  merchantName?: string
  amount?: number // cents
  currency?: string
  effectiveOn?: string // YYYY-MM-DD
  description?: string
  category?: string
}

type BulkCreateArgs = {
  expenses?: BulkExpenseItem[]
  groupName?: string
  submitForReview?: boolean
  matchCardExpenses?: boolean
}

/** Coerce arbitrary agent strings into one of the known categories;
 *  fall through to `Office` (a safe catch-all in fixtures) so the
 *  row always renders. */
function coerceCategory(input: string | undefined): ExpenseCategory {
  const known: ExpenseCategory[] = [
    "Meals",
    "Taxis",
    "Travel",
    "Shopping",
    "Hotel",
    "Office",
    "Software",
  ]
  if (!input) return "Office"
  const norm = input.trim().toLowerCase()
  const hit = known.find((c) => c.toLowerCase() === norm)
  if (hit) return hit
  if (norm.includes("food") || norm.includes("meal") || norm.includes("dinner"))
    return "Meals"
  if (norm.includes("taxi") || norm.includes("uber") || norm.includes("cab"))
    return "Taxis"
  if (norm.includes("flight") || norm.includes("train") || norm.includes("travel"))
    return "Travel"
  if (norm.includes("hotel") || norm.includes("airbnb") || norm.includes("stay"))
    return "Hotel"
  if (norm.includes("software") || norm.includes("saas") || norm.includes("subscription"))
    return "Software"
  return "Office"
}

function itemToDraft(
  item: BulkExpenseItem,
  index: number,
  toolCallId: string,
  initialStatus: "draft" | "pending"
): ChatDraftExpense {
  // Agent passes amounts in CENTS (matches Factorial GraphQL).
  const amountEur = typeof item.amount === "number" ? item.amount / 100 : 0
  const today = new Date().toISOString().slice(0, 10)
  return {
    id: `chat-draft-${toolCallId}-${index}`,
    provider: item.merchantName ?? "Unknown merchant",
    status: initialStatus,
    date: item.effectiveOn ?? today,
    amount: amountEur,
    category: coerceCategory(item.category),
    alerts: [],
    description: item.description,
  }
}

/** Local check (mirrors the prototype's required-fields gate without
 *  going through the rowId-based fixture map): can THIS row be sent
 *  for approval? Description, amount > 0, and a date are the three
 *  hard requirements. */
function isReadyForApproval(item: BulkExpenseItem): boolean {
  if (!item.description || item.description.trim().length === 0) return false
  if (!item.amount || item.amount <= 0) return false
  if (!item.effectiveOn) return false
  return true
}

type BatchSummaryProps = {
  toolCallId: string
  args: BulkCreateArgs
  status: "inProgress" | "executing" | "complete"
}

function BatchSummary({ toolCallId, args, status }: BatchSummaryProps) {
  const expenses = useMemo(() => args.expenses ?? [], [args.expenses])
  const submitForReview = args.submitForReview === true

  // Compute drafts only when complete to avoid surfacing half-streamed
  // items. The `seenToolCallIds` guard makes this idempotent across
  // the React 18 strict-mode double-invoke and any subsequent
  // re-renders triggered by chat scrollback.
  const hasMounted = useRef(false)
  useEffect(() => {
    if (status !== "complete") return
    if (hasMounted.current) return
    if (seenToolCallIds.has(toolCallId)) {
      hasMounted.current = true
      return
    }
    seenToolCallIds.add(toolCallId)
    hasMounted.current = true

    const drafts = expenses.map((item, i) => {
      const ready = submitForReview && isReadyForApproval(item)
      // Send for approval only if the agent asked AND the row has
      // enough data to pass the local gate. Otherwise we land it as
      // a draft and let the agent's follow-up message ask the user
      // for the missing fields.
      return itemToDraft(item, i, toolCallId, ready ? "pending" : "draft")
    })

    if (drafts.length > 0) addChatDrafts(drafts)
  }, [status, toolCallId, expenses, submitForReview])

  if (status !== "complete") {
    return (
      <F0Alert
        variant="info"
        title="Reading receipts…"
        description="The agent is extracting the fields from each attachment."
      />
    )
  }

  if (expenses.length === 0) {
    return (
      <F0Alert
        variant="warning"
        title="No expenses created"
        description="The agent didn't return any rows. Try re-attaching the receipts."
      />
    )
  }

  const total = expenses.reduce(
    (sum, e) => sum + (typeof e.amount === "number" ? e.amount : 0),
    0
  )
  const totalEur = (total / 100).toFixed(2)

  return (
    <div
      style={{
        background: "var(--f1-color-background-secondary)",
        borderRadius: "var(--f1-radius-md)",
        border: "1px solid var(--f1-color-border-secondary)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--f1-spacing-12)",
          padding: "var(--f1-spacing-16)",
        }}
      >
        <F0Heading
          variant="heading"
          content={
            submitForReview
              ? `Sent ${expenses.length} expense${expenses.length === 1 ? "" : "s"} for approval`
              : `Created ${expenses.length} draft${expenses.length === 1 ? "" : "s"}`
          }
        />
        <F0Text
          variant="description"
          content={`Total: €${totalEur}${args.groupName ? ` · Group: ${args.groupName}` : ""}`}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--f1-spacing-8)",
            paddingTop: "var(--f1-spacing-8)",
          }}
        >
          {expenses.map((e, i) => {
            const eur = (typeof e.amount === "number" ? e.amount / 100 : 0).toFixed(2)
            const ready = submitForReview && isReadyForApproval(e)
            return (
              <div
                key={`${toolCallId}-${i}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "var(--f1-spacing-8)",
                  paddingBottom: "var(--f1-spacing-8)",
                  borderBottom:
                    i < expenses.length - 1
                      ? "1px solid var(--f1-color-border-secondary)"
                      : "none",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <F0Text
                    variant="body"
                    content={e.merchantName ?? "Unknown merchant"}
                  />
                  <F0Text
                    variant="small"
                    content={`${coerceCategory(e.category)} · ${e.effectiveOn ?? "no date"}`}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
                  <F0Text variant="body" content={`€${eur}`} />
                  <F0Text
                    variant="small"
                    content={ready ? "Sent for review" : "Saved as draft"}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * Register the shadow action. Call this once at the top of the
 * prototype root component. It returns nothing; CopilotKit's hook
 * lifecycle handles registration / cleanup.
 */
export function useBulkCreateExpensesAction(): void {
  useCopilotAction({
    name: "bulkCreateExpenses",
    description:
      "Create one or more expenses from receipts the user has dropped into the chat.",
    available: "frontend",
    parameters: [
      {
        name: "expenses",
        type: "object[]",
        required: true,
        attributes: [
          { name: "merchantName", type: "string" },
          { name: "amount", type: "number", description: "Amount in cents" },
          { name: "currency", type: "string" },
          { name: "effectiveOn", type: "string", description: "YYYY-MM-DD" },
          { name: "description", type: "string" },
          { name: "category", type: "string" },
        ],
      },
      { name: "groupName", type: "string", required: false },
      { name: "submitForReview", type: "boolean", required: false },
      { name: "matchCardExpenses", type: "boolean", required: false },
    ],
    render: ({ args, status }) => {
      // CopilotKit passes a stable per-tool-call id via the internal
      // render dispatcher; we don't have direct access to it from
      // the public render props, so derive one from a hash of the
      // first item id (good enough for idempotency: the agent never
      // streams the same merchant+date+amount twice for distinct
      // tool calls).
      const first = (args as BulkCreateArgs).expenses?.[0]
      const toolCallId = `bulk-${first?.merchantName ?? "x"}-${first?.amount ?? 0}-${first?.effectiveOn ?? ""}`
      return (
        <BatchSummary
          toolCallId={toolCallId}
          args={args as BulkCreateArgs}
          status={status}
        />
      )
    },
  })
}

/** Re-export so the single-expense action can share the dedupe. */
export { seenToolCallIds }
export { setChatDraftStatus }
