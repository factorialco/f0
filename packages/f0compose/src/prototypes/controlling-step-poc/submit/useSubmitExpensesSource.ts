import {
  expenseGroups,
  expenses,
  type ControllingFields,
  type ExpenseCategory,
  type ExpenseStatus,
} from "@/fixtures"
import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  CheckCircle,
  Delete,
  Folder,
  LogoTravelperk,
  PalmTree,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { useChatDrafts } from "../copilot/useChatDrafts"
import {
  paginateRows,
  POLICY_STATE_OPTIONS,
  type PolicyStateKey,
} from "../shared/columns"
import { mockDescriptionFor } from "../shared/mockDescriptions"
import {
  chatDraftToRow,
  expenseToRow,
  folderToRow,
  type SpendingRow,
} from "../shared/rows"
import { getMissingRequiredFields } from "@/prototypes/_shared/requiredFields"

/**
 * Submit > Expenses source — a single "my expenses" view that covers
 * the whole personal lifecycle. Drafts and Submitted (Pending /
 * Approved / Paid) are exposed as presets so users can jump between
 * stages without switching tabs.
 *
 * BR-010 / AC-008: the four "New" affordances (Regular expense,
 * Mileage, Per diem, Folder) are above the table — Regular as primary,
 * the other three as secondary actions.
 *
 * BR-008 / AC-007: folders appear inline as first-class rows; clicking
 * a folder opens its detail view via `itemUrl`.
 */
const STATUS_FILTER_KEY = "status"
const POLICY_FILTER_KEY = "alerts"

// Module-scoped so the filters object handed to `useDataCollectionSource`
// keeps a stable identity across renders. Re-mapping inline on each
// render caused the source to detect a config change and silently
// reset `currentFilters` — which surfaced as the To-Do preset
// selecting, filtering for a moment, then visibly resetting.
const POLICY_FILTER_OPTIONS = POLICY_STATE_OPTIONS.map((o) => ({
  value: o.value,
  label: o.label,
}))

/**
 * Seed a short, category-appropriate description on a To-Do
 * expense (`draft` or `changes-requested`) so the detail summary
 * view has something to render in the Description row.
 *
 * Skips rows that are still gated by the required-fields rule
 * (`getMissingRequiredFields(id) !== []`) — those need to STAY
 * blank so the "Can't send this expense" alert + Review CTA have
 * something to gate on. Once the submitter fills the description in
 * edit mode the gate clears and the row becomes indistinguishable
 * from the seeded ones.
 *
 * Preserves any pre-existing `controlling.description` (rows that
 * came in already coded — currently none in the To-Do pool, but
 * keeps the helper safe if seeding ever expands).
 */
function withMockDescription<E extends { id: string; category: ExpenseCategory; controlling?: ControllingFields }>(
  e: E
): E {
  if (getMissingRequiredFields(e.id).length > 0) return e
  const existing = e.controlling?.description
  if (existing && existing.trim().length > 0) return e
  return {
    ...e,
    controlling: {
      ...(e.controlling ?? {}),
      description: mockDescriptionFor(e.id, e.category),
    },
  }
}

export function useSubmitExpensesRows(): SpendingRow[] {
  // Chat-created drafts (and "send for approval" promotions from the
  // chat) are tracked in a module-scoped store outside React so the
  // AI chat hooks — which live in `ApplicationFrame`'s subtree, not
  // ours — can mutate them without a context plumbed all the way
  // through. We subscribe here so the table re-renders when the
  // agent adds a row from a receipt drop.
  const chatDrafts = useChatDrafts()

  return useMemo(() => {
    const folders = expenseGroups.map(folderToRow)
    // Rows seeded by the AI chat (receipt drops parsed by David's
    // expenses skill, surfaced via the `bulkCreateExpenses` /
    // `sendExpenseToReview` copilot actions). Surfaced first so a
    // freshly-created row lands at the top of the table where the
    // user is looking.
    const chatRows = chatDrafts.map(chatDraftToRow)
    // To-Do groups two cohorts that both require submitter action:
    //   1. Drafts — expenses the user started but hasn't submitted yet.
    //      The bulk of the To-Do backlog. We synthesize ~13 of them
    //      with `draft-` prefixed ids so they don't collide with any
    //      real fixture row, then re-cast their status to `draft`.
    //   2. Changes requested — a small handful (~3) the approver
    //      bounced back. Pulled from the pending pool, preferring
    //      clean (no-alert) rows so we don't drain Approve & Pay >
    //      Approve > Needs review.
    //
    // Both cohorts feed `selectPolicyAlert` for "view" + To-Do, which
    // matches statuses `draft` | `changes-requested` and rotates
    // review / send-for-approval / likely-rejection copy by row id.
    //
    // We dedupe by source id so the same expense never appears in
    // both To-Do (re-cast) and Submitted (original).
    const consumedSourceIds = new Set<string>()
    const pendingPool = expenses
      .filter((e) => e.status === "pending")
      .slice()
      .sort((a, b) => a.alerts.length - b.alerts.length)

    // 13 drafts — re-cast pending rows with synthetic ids so the
    // table cell and detail page both render `draft` for these.
    const draftExpenses = pendingPool
      .slice(0, 13)
      .map((e) => {
        consumedSourceIds.add(e.id)
        return {
          ...e,
          id: `draft-${e.id}`,
          status: "draft" as const,
        }
      })
      .map(withMockDescription)
      .map(expenseToRow)

    // 3 changes-requested — approver bounced these back to the
    // submitter for fixes.
    const changesRequestedExpenses = pendingPool
      .slice(13, 16)
      .map((e) => {
        consumedSourceIds.add(e.id)
        return { ...e, status: "changes-requested" as const }
      })
      .map(withMockDescription)
      .map(expenseToRow)

    // Submitted shows the rest. Skip any source row we've already
    // consumed above so the same id never shows in two presets with
    // conflicting statuses.
    const realExpenses = expenses
      .filter(
        (e) =>
          ["pending", "approved", "in-payroll"].includes(e.status as string) &&
          !consumedSourceIds.has(e.id)
      )
      .map(expenseToRow)

    // Demo drafts owned by other employees that we still want
    // surfaced in this table for storytelling purposes. Today
    // this is just Alan Turing's `exp-fc-meal-002` — opening it
    // from My Spending → To-Do pushes an Alan viewer override
    // on the detail page so the user sees the Pre-fill banner
    // scenario without having to log in as Alan separately.
    // Kept as a literal allowlist (not a status filter) so we
    // don't accidentally leak unrelated drafts from other
    // employees into Hellen's table.
    const DEMO_DRAFT_IDS = new Set(["exp-fc-meal-002"])
    const demoDrafts = expenses
      .filter(
        (e) =>
          DEMO_DRAFT_IDS.has(e.id) &&
          !consumedSourceIds.has(e.id) &&
          e.status === "draft"
      )
      .map(expenseToRow)

    return [
      ...folders,
      ...chatRows,
      ...demoDrafts,
      ...draftExpenses,
      ...changesRequestedExpenses,
      ...realExpenses,
    ]
  }, [chatDrafts])
}

export function useSubmitExpensesSource(args: {
  rows: SpendingRow[]
  onNewExpense: () => void
  onNewMileage: () => void
  onNewPerDiem: () => void
  onNewFolder: () => void
  folderHref: (folderId: string) => string
}) {
  const {
    rows,
    onNewExpense,
    onNewMileage,
    onNewPerDiem,
    onNewFolder,
    folderHref,
  } = args
  const counts = useMemo(() => {
    const submittedStatuses: ExpenseStatus[] = [
      "pending",
      "approved",
      "in-payroll",
      "paid",
    ]
    const todoStatuses: ExpenseStatus[] = ["draft", "changes-requested"]
    return {
      todo: rows.filter((r) => todoStatuses.includes(r.status)).length,
      submitted: rows.filter((r) => submittedStatuses.includes(r.status))
        .length,
    }
  }, [rows])

  return useDataCollectionSource<SpendingRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        [STATUS_FILTER_KEY]: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "draft", label: "Draft" },
              { value: "changes-requested", label: "Changes requested" },
              { value: "pending", label: "Pending" },
              { value: "approved", label: "Approved" },
              { value: "in-payroll", label: "Sent to Pay" },
              { value: "paid", label: "Paid" },
            ],
          },
        },
        // Alerts filter — narrows rows by their single dominant
        // policy state (resolved via `policyStateFor`). The option
        // list is shared with the Alerts column so what the user
        // sees as a tag is exactly what they can filter by.
        [POLICY_FILTER_KEY]: {
          type: "in",
          label: "Alerts",
          options: {
            options: POLICY_FILTER_OPTIONS,
          },
        },
      },
      currentFilters: {},
      // To-Do groups Drafts + Changes requested (both require the
      // submitter to act). Submitted shows everything past
      // submission. The colored Status column inside Submitted
      // distinguishes Pending / Approved / Sent to Pay.
      presets: [
        {
          label: "To-Do",
          filter: { [STATUS_FILTER_KEY]: ["draft", "changes-requested"] },
          itemsCount: () => counts.todo,
        },
        {
          label: "Submitted",
          filter: {
            [STATUS_FILTER_KEY]: ["pending", "approved", "in-payroll", "paid"],
          },
          itemsCount: () => counts.submitted,
        },
      ],
      sortings: {
        name: { label: "Name" },
        date: { label: "Date" },
        amount: { label: "Amount" },
      },
      itemUrl: (item) =>
        item.kind === "folder" ? folderHref(item.id) : undefined,
      // Row checkboxes for bulk Submit / Delete. Folders are
      // selectable too — submitting a draft folder submits every
      // expense inside it (BR-008), and deleting a folder removes the
      // container plus its drafts. The two actions read uniformly
      // across kinds so a mixed selection is still meaningful; the
      // handler dispatches per-row by `item.kind`.
      selectable: (item: SpendingRow) => item.id,
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wanted = Array.isArray(filters?.[STATUS_FILTER_KEY])
            ? (filters[STATUS_FILTER_KEY] as ExpenseStatus[])
            : []
          const wantedPolicy = Array.isArray(filters?.[POLICY_FILTER_KEY])
            ? (filters[POLICY_FILTER_KEY] as PolicyStateKey[])
            : []
          return paginateRows(rows, {
            search: search ?? undefined,
            sortings,
            pagination: pagination as
              | { perPage?: number; currentPage?: number }
              | undefined,
            statusFilter: wanted.length > 0 ? wanted : undefined,
            policyFilter: wantedPolicy.length > 0 ? wantedPolicy : undefined,
          })
        },
      },
      primaryActions: () => ({
        label: "New expense",
        icon: Add,
        onClick: onNewExpense,
      }),
      secondaryActions: () => [
        { label: "Mileage", icon: LogoTravelperk, onClick: onNewMileage },
        { label: "Per diem", icon: PalmTree, onClick: onNewPerDiem },
        { label: "Folder", icon: Folder, onClick: onNewFolder },
      ],
      itemActions: (_item: SpendingRow) => [
        { label: "Edit", onClick: () => {} },
        { label: "Submit", onClick: () => {} },
        { type: "separator" as const },
        { label: "Delete", onClick: () => {}, critical: true },
      ],
      bulkActions: (selected) => {
        // Inspect the selection: folders don't nest, so when the user
        // has only folders checked we drop "Add to folder" and keep
        // just Delete + Send for approval (matches the Manage source
        // and the design spec).
        const checked = (selected.itemsStatus ?? []).filter((e) => e.checked)
        const hasFolders = checked.some((e) => e.item.kind === "folder")
        const hasExpenses = checked.some((e) => e.item.kind === "expense")
        const onlyFolders = hasFolders && !hasExpenses

        if (onlyFolders) {
          return {
            secondary: [{ id: "delete", label: "Delete", icon: Delete }],
            primary: [
              {
                id: "submit",
                label: "Send for approval",
                icon: CheckCircle,
              },
            ],
          }
        }

        // Action-bar pattern (project-wide): primary CTA sits far
        // right (`primary`, single item → filled red button),
        // preceded by 1–2 outline secondary buttons (`secondary`).
        // OneDC ActionBar reverses `secondary` so the FIRST element
        // ends up rightmost (closest to the primary CTA). Order:
        // Delete first → rightmost-of-secondaries; Add to folder
        // second → leftmost.
        return {
          secondary: [
            { id: "delete", label: "Delete", icon: Delete },
            { id: "add-to-folder", label: "Add to folder", icon: Folder },
          ],
          primary: [
            {
              id: "submit",
              label: "Send selected for approval",
              icon: CheckCircle,
            },
          ],
        }
      },
    },
    [
      rows,
      onNewExpense,
      onNewMileage,
      onNewPerDiem,
      onNewFolder,
      folderHref,
    ]
  )
}
