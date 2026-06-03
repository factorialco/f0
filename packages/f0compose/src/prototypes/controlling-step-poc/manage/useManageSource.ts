import {
  expenseGroups,
  expenses,
  type ExpenseStatus,
} from "@/fixtures"
import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  ArrowCycle,
  CheckCircle,
  Cross,
  Money,
  Pencil,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"

import { useChatDrafts } from "../copilot/useChatDrafts"
import { paginateRows } from "../shared/columns"
import {
  chatDraftToRow,
  expenseToRow,
  folderToRow,
  type SpendingRow,
} from "../shared/rows"

/**
 * The Manage tabs share a single dataset — expenses and folders that
 * the current user can review — and slice it by status via
 * `statusFilter` per tab.
 *
 * Spec A: everyone sees the same tabs and the same affordances (no
 * role gating in this prototype).
 *
 * Spec C (Pay restructure r2):
 *   - Pay tab shows ALL expenses past approval: approved · controlled
 *     · in-payroll. Presets Unpaid (approved + controlled) and Paid
 *     (in-payroll). Bulk actions are the union (Send to payroll · Send
 *     to SEPA · Set as paid · Sync to ERP), with Advanced export
 *     surfaced in the row 3-dot overflow.
 *   - All tab adds a Controlled preset.
 *
 * Spec D (Pending Controlling r1):
 *   - Pending Controlling tab shows approved + controlled. Presets
 *     Uncontrolled (approved, default) and Controlled. Bulk actions:
 *     Mark as controlled · Bulk edit · Reject (BR-003 / BR-005 /
 *     BR-007).
 */
export function useManageRows(): SpendingRow[] {
  // Chat drafts that have been promoted to `pending` via the
  // `sendExpenseToReview` copilot action need to appear in the
  // manager's Pending Approval tab. We subscribe to the same store
  // the submitter side uses so a single source of truth drives both.
  const chatDrafts = useChatDrafts()
  return useMemo(() => {
    return [
      ...expenseGroups.map(folderToRow),
      ...chatDrafts.map(chatDraftToRow),
      ...expenses.map(expenseToRow),
    ]
  }, [chatDrafts])
}

// `ManageVariant` is the resolved table-shape identifier (status
// filter + preset set + actions) used by useManageSource. It's the
// same set of strings as `ManageSubTabId` in ../tabs.ts — we keep
// the alias here so the data-source module stays self-describing,
// but exporting it lets consumers (ManageTab, parent dispatcher)
// share one type without duplicating the union.
export type ManageVariant =
  | "pending-approval"
  | "pending-controlling"
  | "pay"
  | "all"
  | "pending-payment"
  | "archive"

const STATUS_BY_TAB: Record<ManageVariant, ExpenseStatus[] | undefined> = {
  "pending-approval": ["pending"],
  "pending-controlling": ["approved", "controlled"],
  // Pay covers the actionable + terminal halves of the post-approval
  // lifecycle: Unpaid (approved + controlled) and Paid (paid).
  // `in-payroll` ("Sent to Pay") is intentionally NOT in this slice —
  // once finance has dispatched a row to payroll/SEPA it leaves the
  // Pay queue; reconciliation lives on the All tab. This keeps the
  // Pay statuses unambiguous: blue for ready, green for done.
  pay: ["approved", "controlled", "paid"],
  // New Pending payment tab (post-IA-restructure r3). Per the
  // designer brief: shows expenses past approval and past control
  // that haven't been paid yet — i.e. status === controlled.
  // `approved` rows are still upstream (waiting on controlling)
  // and live in the Control tab; they shouldn't appear here.
  // Once finance sends a controlled row to payroll/SEPA the
  // status flips to in-payroll/paid and it leaves this queue.
  "pending-payment": ["controlled", "in-payroll"],
  // Ready to export uses the legacy "all" semantics (no status
  // filter — the preset chips do the slicing) so it stays mapped
  // to `all` in `subTabToManageVariant`. Listed here for
  // exhaustiveness; never reached at runtime.
  all: undefined,
  // Archive shows every expense, no status filter, no presets.
  // It's the "give me everything regardless of where it is in the
  // lifecycle" view.
  archive: undefined,
}

export function useManageSource(args: {
  rows: SpendingRow[]
  variant: ManageVariant
  folderHref: (folderId: string) => string
  /**
   * Click handler for the toolbar's "Sync to Business Central"
   * secondary action. Wired from the parent so the Sync modal
   * (which lives in the tab component, not the source factory)
   * can open in response. Optional — when absent, the action
   * still renders but is a no-op (useful for the manage
   * variants where sync isn't relevant).
   */
  onSyncClick?: () => void
}) {
  const { rows, variant, folderHref, onSyncClick } = args

  // Per-tab base-status slice — used both by fetchData and by preset counters.
  const tabRows = useMemo(() => {
    const base = STATUS_BY_TAB[variant]
    return base ? rows.filter((r) => base.includes(r.status)) : rows
  }, [rows, variant])

  const presetCounts = useMemo(() => {
    if (variant === "pending-approval") {
      return {
        needsReview: tabRows.filter((r) => r.alerts.length > 0).length,
        readyToApprove: tabRows.filter((r) => r.alerts.length === 0).length,
      }
    }
    if (variant === "pending-controlling") {
      return {
        // BR-002: "Uncontrolled" is the default preset and means
        // status === approved (i.e. not yet coded by finance).
        uncontrolled: tabRows.filter((r) => r.status === "approved").length,
        controlled: tabRows.filter((r) => r.status === "controlled").length,
      }
    }
    if (variant === "pay") {
      return {
        // Spec C r2: Unpaid groups approved + controlled (i.e.
        // everything finance is allowed to pay) so the controlling
        // step doesn't slice the Pay queue in two. Paid is the
        // terminal `paid` status — `in-payroll` rows live on the All
        // tab now.
        unpaid: tabRows.filter(
          (r) => r.status === "approved" || r.status === "controlled"
        ).length,
        paid: tabRows.filter((r) => r.status === "paid").length,
      }
    }
    if (variant === "all") {
      return {
        pending: rows.filter((r) => r.status === "pending").length,
        approved: rows.filter((r) => r.status === "approved").length,
        controlled: rows.filter((r) => r.status === "controlled").length,
        inPayroll: rows.filter((r) => r.status === "in-payroll").length,
        paid: rows.filter((r) => r.status === "paid").length,
      }
    }
    if (variant === "pending-payment") {
      // Pending payment splits into "Awaiting payment" (controlled,
      // not yet dispatched) and "Sent to Pay" (in-payroll —
      // finance pushed the row to payroll/SEPA but it hasn't been
      // confirmed paid yet). Once status flips to `paid`, the row
      // leaves this tab entirely.
      return {
        awaitingPayment: tabRows.filter((r) => r.status === "controlled")
          .length,
        sentToPay: tabRows.filter((r) => r.status === "in-payroll").length,
      }
    }
    if (variant === "archive") {
      // Archive has no presets — it's the unfiltered firehose. We
      // still return a counts shape (empty object) so the memo
      // doesn't drop to `null` and short-circuit downstream checks.
      return {}
    }
    return null
  }, [rows, tabRows, variant])

  return useDataCollectionSource<SpendingRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "pending", label: "Pending" },
              { value: "approved", label: "Approved" },
              { value: "controlled", label: "Controlled" },
              { value: "in-payroll", label: "Sent to Pay" },
              { value: "paid", label: "Paid" },
            ],
          },
        },
        alerts: {
          type: "in",
          label: "Compliance",
          options: {
            options: [
              { value: "has-alerts", label: "Needs review" },
              { value: "no-alerts", label: "Ready to approve" },
            ],
          },
        },
      },
      currentFilters: {},
      // Presets per variant. Resolved through a small lookup that
      // returns an empty array for the variants that don't surface
      // preset chips (currently only `archive`, which is the
      // unfiltered firehose view).
      presets: (() => {
        switch (variant) {
          case "pending-approval":
            return [
              {
                label: "Needs review",
                filter: { alerts: ["has-alerts"] },
                itemsCount: () =>
                  (presetCounts as { needsReview?: number } | null)
                    ?.needsReview ?? 0,
              },
              {
                label: "Ready to approve",
                filter: { alerts: ["no-alerts"] },
                itemsCount: () =>
                  (presetCounts as { readyToApprove?: number } | null)
                    ?.readyToApprove ?? 0,
              },
            ]
          case "pending-controlling":
            return [
              {
                label: "To control",
                filter: { status: ["approved"] },
                itemsCount: () =>
                  (presetCounts as { uncontrolled?: number } | null)
                    ?.uncontrolled ?? 0,
              },
              {
                label: "Controlled",
                filter: { status: ["controlled"] },
                itemsCount: () =>
                  (presetCounts as { controlled?: number } | null)
                    ?.controlled ?? 0,
              },
            ]
          case "pay":
            return [
              {
                label: "Unpaid",
                filter: { status: ["approved", "controlled"] },
                itemsCount: () =>
                  (presetCounts as { unpaid?: number } | null)?.unpaid ?? 0,
              },
              {
                label: "Paid",
                filter: { status: ["paid"] },
                itemsCount: () =>
                  (presetCounts as { paid?: number } | null)?.paid ?? 0,
              },
            ]
          case "pending-payment":
            // Default preset is "Awaiting payment" (controlled,
            // not yet dispatched) — that's the most actionable
            // bucket for finance on this tab. "Sent to Pay" is
            // the terminal-for-this-tab preset; once payroll
            // confirms paid, rows leave the tab entirely.
            return [
              {
                label: "Awaiting payment",
                filter: { status: ["controlled"] },
                itemsCount: () =>
                  (presetCounts as { awaitingPayment?: number } | null)
                    ?.awaitingPayment ?? 0,
              },
              {
                label: "Sent to Pay",
                filter: { status: ["in-payroll"] },
                itemsCount: () =>
                  (presetCounts as { sentToPay?: number } | null)?.sentToPay ??
                  0,
              },
            ]
          case "all":
            // The legacy "all" variant — now exposed in the IA as
            // "Ready to export". Keeps the full preset chip set so
            // finance can slice by status before exporting.
            return [
              {
                label: "Pending",
                filter: { status: ["pending"] },
                itemsCount: () =>
                  (presetCounts as { pending?: number } | null)?.pending ?? 0,
              },
              {
                label: "Approved",
                filter: { status: ["approved"] },
                itemsCount: () =>
                  (presetCounts as { approved?: number } | null)?.approved ?? 0,
              },
              {
                label: "Controlled",
                filter: { status: ["controlled"] },
                itemsCount: () =>
                  (presetCounts as { controlled?: number } | null)
                    ?.controlled ?? 0,
              },
              {
                label: "Sent to Pay",
                filter: { status: ["in-payroll"] },
                itemsCount: () =>
                  (presetCounts as { inPayroll?: number } | null)?.inPayroll ??
                  0,
              },
              {
                label: "Paid",
                filter: { status: ["paid"] },
                itemsCount: () =>
                  (presetCounts as { paid?: number } | null)?.paid ?? 0,
              },
            ]
          case "archive":
            // No presets — Archive is the unfiltered firehose.
            // Finance reaches here when they want to find a row
            // regardless of where it is in the lifecycle.
            return []
        }
      })(),
      sortings: {
        name: { label: "Name" },
        date: { label: "Date" },
        amount: { label: "Amount" },
      },
      itemUrl: (item) =>
        item.kind === "folder" ? folderHref(item.id) : undefined,
      // Row-level checkboxes for bulk actions (Spec C/D). Both
      // expenses AND folders are selectable in Manage — folder
      // containers are aggregates of expenses (BR-008/BR-009 from
      // Spec A) so finance often wants to act on the whole folder.
      // The bulk-action set is filtered downstream when the selection
      // mixes kinds — see `bulkActions` below.
      selectable: (item: SpendingRow) => item.id,
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const userFilter = Array.isArray(filters?.status)
            ? (filters.status as ExpenseStatus[])
            : []
          const baseFilter = STATUS_BY_TAB[variant]
          const effective =
            baseFilter && userFilter.length > 0
              ? userFilter.filter((s) => baseFilter.includes(s))
              : baseFilter && baseFilter.length > 0
                ? baseFilter
                : userFilter
          const alertFilter = Array.isArray(filters?.alerts)
            ? (filters.alerts as Array<"has-alerts" | "no-alerts">)
            : []
          const wantsAlerts = alertFilter.includes("has-alerts")
          const wantsClean = alertFilter.includes("no-alerts")
          const alertPredicate =
            alertFilter.length === 0 || (wantsAlerts && wantsClean)
              ? undefined
              : wantsAlerts
                ? (r: SpendingRow) => r.alerts.length > 0
                : (r: SpendingRow) => r.alerts.length === 0
          const scoped = alertPredicate ? rows.filter(alertPredicate) : rows
          return paginateRows(scoped, {
            search: search ?? undefined,
            sortings,
            pagination: pagination as
              | { perPage?: number; currentPage?: number }
              | undefined,
            statusFilter: effective.length > 0 ? effective : undefined,
          })
        },
      },
      // Toolbar-level secondary action (sits inline with presets and
      // search, NOT inside the bulk action bar). `expanded: 1` keeps
      // the first secondary visible as a button instead of folding it
      // into the 3-dot overflow. All four Approve & Pay tabs surface
      // a Sync to ERP affordance because finance routinely re-syncs
      // from any of these views (per spec discussion in PR comments).
      secondaryActions: {
        expanded: 1,
        actions: () => [
          {
            label: "Sync to Business Central",
            icon: ArrowCycle,
            onClick: () => {
              onSyncClick?.()
            },
          },
        ],
      },
      bulkActions: (selected) => {
        // Inspect what kinds the user has checked. Folder containers
        // and per-expense rows have different action surfaces; mixed
        // selections fall back to the intersection (typically empty
        // beyond Reject for the approval/controlling tabs).
        //
        // Action-bar pattern (project-wide, see reference shots in
        // PR comments): primary CTA sits far right (`primary`,
        // single item → filled red button; multi item → split
        // F0ButtonDropdown with chevron). Outline secondary buttons
        // (`secondary`) precede it. The OneDC ActionBar reverses
        // `secondary` so the FIRST element ends up rightmost
        // (closest to the primary CTA). Order them with the
        // most-related-to-primary action first.
        //
        // Reference screenshots use NEUTRAL outline secondaries
        // (no `critical: true`) — even Reject. Reserve `critical` for
        // genuinely destructive bulk actions (folder deletion).
        const checked = (selected.itemsStatus ?? []).filter(
          (entry) => entry.checked
        )
        const hasFolders = checked.some((e) => e.item.kind === "folder")
        const hasExpenses = checked.some((e) => e.item.kind === "expense")
        const onlyFolders = hasFolders && !hasExpenses
        const mixed = hasFolders && hasExpenses

        // Folder-only selections: just the two essential actions —
        // delete the folder, or send it for approval. No "Add to
        // folder" (folders don't nest in this prototype).
        if (onlyFolders) {
          return {
            secondary: [
              {
                id: "delete-folder",
                label: "Delete folder",
                icon: Cross,
                critical: true,
              },
            ],
            primary: [
              { id: "submit-folder", label: "Send for approval", icon: Upload },
            ],
          }
        }

        if (variant === "pending-approval") {
          // Approve/Reject apply uniformly to expenses and (by
          // proxy) the expenses inside a folder, so a mixed selection
          // is fine here. Per the reference screenshot: just two
          // buttons, Reject (outline neutral) + Approve (filled red).
          return {
            secondary: [{ id: "reject", label: "Reject" }],
            primary: [
              { id: "approve", label: "Approve", icon: CheckCircle },
            ],
          }
        }
        if (variant === "pending-controlling") {
          // BR-003 / BR-005: Mark as controlled vs Bulk edit are
          // distinct affordances. Bulk edit opens the side panel with
          // empty controlling fields; submit overwrites every row in
          // the selection. Mark as controlled is the no-form action.
          //
          // Mixed selection (folders + expenses): coding fields don't
          // apply to a folder container, so we drop Bulk edit /
          // Mark-as-controlled and only keep Reject as the primary
          // (no secondary). Finance can either drop the folder from
          // the selection or open it to act on its members
          // individually.
          if (mixed) {
            return {
              primary: [{ id: "reject", label: "Reject" }],
            }
          }
          return {
            secondary: [{ id: "bulk-edit", label: "Bulk edit", icon: Pencil }],
            primary: [
              {
                id: "mark-controlled",
                label: "Mark as controlled",
                icon: CheckCircle,
              },
            ],
          }
        }
        if (variant === "pay") {
          // Reference screenshot: secondary [Reset approval flow,
          // Set as paid] outline + primary Reimburse split-button
          // ([Reimburse, Reimburse via payslip]).
          //
          // Mixed selection: payment routing is per-expense (a folder
          // is just a logical container), so only the actions that
          // map 1:1 to underlying expenses survive — Set as paid as
          // primary, no secondary clutter.
          if (mixed) {
            return {
              primary: [
                { id: "set-as-paid", label: "Set as paid", icon: CheckCircle },
              ],
            }
          }
          return {
            secondary: [
              { id: "set-as-paid", label: "Set as paid" },
              { id: "reset-approval", label: "Reset approval flow" },
            ],
            primary: [
              { id: "reimburse", label: "Reimburse", icon: Money },
              {
                id: "reimburse-payslip",
                label: "Reimburse via payslip",
                icon: Money,
              },
            ],
          }
        }
        if (variant === "all") {
          // Export tab: bulk action is just CSV export. No secondary
          // affordance — the spec asks for a single primary CTA.
          return {
            primary: [
              { id: "export-csv", label: "Export to CSV", icon: Upload },
            ],
          }
        }
        if (variant === "pending-payment") {
          // Pending payment tab — finance hasn't paid these rows
          // yet. Surface the same dispatch actions as the legacy
          // Pay tab so a finance user reaching Pending payment via
          // the new IA can still send rows to payroll/SEPA or
          // mark them as paid without backtracking.
          //
          // Mixed selection collapses to the safest action
          // (Set as paid as primary, no secondary) per the same
          // rationale as the Pay tab.
          if (mixed) {
            return {
              primary: [
                { id: "set-as-paid", label: "Set as paid", icon: CheckCircle },
              ],
            }
          }
          return {
            secondary: [
              { id: "set-as-paid", label: "Set as paid" },
              { id: "send-to-sepa", label: "Send to SEPA" },
            ],
            primary: [
              {
                id: "send-to-payroll",
                label: "Send to payroll",
                icon: Money,
              },
            ],
          }
        }
        if (variant === "archive") {
          // Archive is a browsing/search surface — no destructive
          // bulk actions. Export to CSV is the only sensible bulk
          // operation against an arbitrary cross-status selection.
          return {
            primary: [
              { id: "export-csv", label: "Export to CSV", icon: Upload },
            ],
          }
        }
        return { primary: [] }
      },
      itemActions: (_item: SpendingRow) => {
        const actions: Array<
          | { label: string; onClick: () => void; critical?: boolean }
          | { type: "separator" }
        > = [{ label: "View details", onClick: () => {} }]
        if (variant === "pending-approval") {
          actions.push(
            { label: "Approve", onClick: () => {} },
            { label: "Reject", onClick: () => {}, critical: true }
          )
        } else if (variant === "pending-controlling") {
          actions.push(
            { label: "Edit controlling fields", onClick: () => {} },
            { label: "Mark as controlled", onClick: () => {} },
            { label: "Reject", onClick: () => {}, critical: true }
          )
        } else if (variant === "pay" || variant === "pending-payment") {
          // Pending-payment row actions mirror the legacy Pay
          // tab — same dispatch operations apply on a per-row
          // basis.
          actions.push(
            { label: "Send to payroll", onClick: () => {} },
            { label: "Send to SEPA", onClick: () => {} },
            { label: "Set as paid", onClick: () => {} },
            { label: "Sync to Business Central", onClick: () => {} },
            { type: "separator" },
            { label: "Advanced export", onClick: () => {} }
          )
        }
        // Archive intentionally has only "View details" — it's a
        // historical/lookup surface, not an action surface.
        return actions
      },
    },
    [rows, variant, folderHref]
  )
}
