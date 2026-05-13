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

import { paginateRows } from "../shared/columns"
import { expenseToRow, folderToRow, type SpendingRow } from "../shared/rows"

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
  return useMemo(() => {
    return [...expenseGroups.map(folderToRow), ...expenses.map(expenseToRow)]
  }, [])
}

type ManageVariant =
  | "pending-approval"
  | "pending-controlling"
  | "pay"
  | "all"

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
  all: undefined,
}

export function useManageSource(args: {
  rows: SpendingRow[]
  variant: ManageVariant
  folderHref: (folderId: string) => string
}) {
  const { rows, variant, folderHref } = args

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
      presets:
        variant === "pending-approval"
          ? [
              {
                label: "Needs review",
                filter: { alerts: ["has-alerts"] },
                itemsCount: () => presetCounts?.needsReview ?? 0,
              },
              {
                label: "Ready to approve",
                filter: { alerts: ["no-alerts"] },
                itemsCount: () => presetCounts?.readyToApprove ?? 0,
              },
            ]
          : variant === "pending-controlling"
            ? [
                {
                  label: "To control",
                  filter: { status: ["approved"] },
                  itemsCount: () => presetCounts?.uncontrolled ?? 0,
                },
                {
                  label: "Controlled",
                  filter: { status: ["controlled"] },
                  itemsCount: () => presetCounts?.controlled ?? 0,
                },
              ]
            : variant === "pay"
              ? [
                  {
                    label: "Unpaid",
                    filter: { status: ["approved", "controlled"] },
                    itemsCount: () => presetCounts?.unpaid ?? 0,
                  },
                  {
                    label: "Paid",
                    filter: { status: ["paid"] },
                    itemsCount: () => presetCounts?.paid ?? 0,
                  },
                ]
              : variant === "all"
                ? [
                    {
                      label: "Pending",
                      filter: { status: ["pending"] },
                      itemsCount: () => presetCounts?.pending ?? 0,
                    },
                    {
                      label: "Approved",
                      filter: { status: ["approved"] },
                      itemsCount: () => presetCounts?.approved ?? 0,
                    },
                    {
                      label: "Controlled",
                      filter: { status: ["controlled"] },
                      itemsCount: () => presetCounts?.controlled ?? 0,
                    },
                    {
                      label: "Sent to Pay",
                      filter: { status: ["in-payroll"] },
                      itemsCount: () => presetCounts?.inPayroll ?? 0,
                    },
                    {
                      label: "Paid",
                      filter: { status: ["paid"] },
                      itemsCount: () =>
                        (presetCounts as { paid?: number } | null)?.paid ?? 0,
                    },
                  ]
                : [],
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
          { label: "Sync to Business Central", icon: ArrowCycle },
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
        } else if (variant === "pay") {
          actions.push(
            { label: "Send to payroll", onClick: () => {} },
            { label: "Send to SEPA", onClick: () => {} },
            { label: "Set as paid", onClick: () => {} },
            { label: "Sync to Business Central", onClick: () => {} },
            { type: "separator" },
            { label: "Advanced export", onClick: () => {} }
          )
        }
        return actions
      },
    },
    [rows, variant, folderHref]
  )
}
