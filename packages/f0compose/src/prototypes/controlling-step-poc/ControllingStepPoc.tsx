import { F0Box, F0Text, StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader, Tabs } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { expenses } from "@/fixtures"
import type { ExpenseStatus } from "@/fixtures"
import type { PrototypeMeta } from "../types"
import { FolderDetail } from "./folder/FolderDetail"
import { ManageTab } from "./manage/ManageTab"
import { useManageRows } from "./manage/useManageSource"
import { useSubmitExpensesRows } from "./submit/useSubmitExpensesSource"
import { ExpenseDetailPage } from "./shared/detail/ExpenseDetailPage"
import { ExpenseSidePanel } from "./shared/sidePanel/ExpenseSidePanel"
import type { ControllingFormData } from "./shared/sidePanel/ControllingForm"
import { expenseToRow, type SpendingRow } from "./shared/rows"
import { SubmitExpensesTab } from "./submit/SubmitExpensesTab"
import {
  MANAGE_SUB_TABS,
  PRIMARY_TABS,
  SUBMIT_SUB_TABS,
  type ManageSubTabId,
  type PrimaryTabId,
} from "./tabs"

/**
 * Unified Spending page — implements PSPEC-spending-unified-page (Spec A r2),
 * PSPEC-spending-manage-tab (Spec C r2) and
 * PSPEC-spending-pending-controlling (Spec D r1).
 *
 * Tab row 1:
 *   - Submit  — personal lifecycle (everyone sees this)
 *   - Manage  — review / approve / pay (only visible if the user has
 *               anything to manage; inferred from the dataset, not a role)
 *
 * Tab row 2:
 *   - Submit  > Expenses · Purchase Requests · Cards
 *   - Manage  > Pending approval · Pending controlling · Pay · All
 *
 * Default landing follows directly from Manage visibility:
 *   - hasManageQueue → Manage > Pending Approval (Manager / Finance flow)
 *   - otherwise      → Submit > Expenses          (Employee flow)
 *
 * URL state:
 *   ?tab=submit|manage
 *   ?sub=<sub-tab-id>          — secondary tab inside the active primary
 *   ?folder=<folderId>         — folder detail sub-screen (BR-008 / AC-007)
 *   ?expense=<expenseId>       — expense side panel (Spec C/D)
 *
 * Side-panel variant resolution:
 *   - On Pending Controlling → variant = "controlling" (form, footer with
 *     Save / Mark as controlled / Reject).
 *   - Everywhere else        → variant = "detail" (read-only, tabs).
 *   - When the user triggers the "Bulk edit" bulk action, we open the
 *     same panel in "bulk-edit" variant — applies the form to every
 *     selected row on submit. Mark-as-controlled is a separate bulk
 *     action that NEVER auto-edits fields (BR-005).
 *
 * Manager visibility (BR-008 / DT-001 from Spec D) is intentionally not
 * implemented here — this prototype shows the finance-rich UI to every
 * audience so reviewers see the full surface. Production gates the
 * controlling action set behind a permission.
 */
export const meta: PrototypeMeta = {
  slug: "controlling-step-poc",
  title: "Controlling Step (POC)",
  description:
    "Single Spending page (Finance sidebar). Tab row 1: Submit · Manage (Manage only when the user has something to review). Submit > Expenses · Purchase Requests · Cards. Manage > Pending approval · Pending controlling · Pay · All. Pending Controlling has its own coding form (Spec D); Pay groups Unpaid + Paid presets across approved/controlled/in-payroll (Spec C r2).",
  category: "Other",
  module: "spending",
  audience: ["employee", "manager", "admin"],
  tags: ["spending", "expenses", "finance", "ia", "shell"],
  createdAt: "2026-05-11",
}

const SUBMIT_DEFAULT_SUB = SUBMIT_SUB_TABS[0].id // "expenses"
const MANAGE_DEFAULT_SUB = MANAGE_SUB_TABS[0].id // "pending-approval"

export default function ControllingStepPoc() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Manage visibility is inferred from the dataset, not a role flag.
  // Employee = "no expenses to review" → Manage tab is hidden.
  // Manager / Finance = "has expenses to review" → Manage tab is visible.
  const manageRows = useManageRows()
  const submitRows = useSubmitExpensesRows()
  const hasManageQueue = manageRows.length > 0

  // Bulk-edit selection (Spec D F-002 / BR-003 / BR-005). When non-null
  // we render the side panel in "bulk-edit" variant. Lives in component
  // state — not URL — because the selection itself is volatile and we
  // don't want refresh to silently re-trigger a bulk overwrite.
  const [bulkEditIds, setBulkEditIds] = useState<string[] | null>(null)

  const visiblePrimaryTabs = hasManageQueue
    ? PRIMARY_TABS
    : PRIMARY_TABS.filter((t) => t.id !== "manage")

  // Default landing follows directly from Manage visibility.
  const defaultPrimary: PrimaryTabId = hasManageQueue ? "manage" : "submit"

  // Folder detail takes precedence over tabs.
  const folderId = searchParams.get("folder")
  const expenseId = searchParams.get("expense")

  const folderHref = useMemo(
    () => (id: string) => {
      const next = new URLSearchParams(searchParams)
      next.set("folder", id)
      return `/p/controlling-step-poc?${next.toString()}`
    },
    [searchParams]
  )

  // Primary tab from URL (must be in visible set; otherwise fall back).
  const rawPrimary = searchParams.get("tab")
  const primaryTab: PrimaryTabId =
    visiblePrimaryTabs.find((t) => t.id === rawPrimary)?.id ?? defaultPrimary

  // Sub-tab from URL.
  const subTabsForPrimary =
    primaryTab === "submit" ? SUBMIT_SUB_TABS : MANAGE_SUB_TABS
  const defaultSubForPrimary =
    primaryTab === "submit" ? SUBMIT_DEFAULT_SUB : MANAGE_DEFAULT_SUB
  const rawSub = searchParams.get("sub")
  const subTab =
    subTabsForPrimary.find((t) => t.id === rawSub)?.id ?? defaultSubForPrimary

  // The expense being viewed in the full-page detail view. Null when:
  //   - no `?expense` in the URL, OR
  //   - the id no longer matches a fixture row (stale link → silently
  //     close).
  //
  // Lookup spans every tab's dataset, not just Manage's. Submit's
  // synthesized draft expenses share ids with the original `expenses`
  // fixture (we just clone them with `status: "draft"`), so resolving
  // against `expenses` covers all of Submit, Manage, FolderDetail and
  // any future tab that surfaces an expense row. Drafts open with the
  // canonical (`pending`) snapshot, but the detail view doesn't gate
  // any behavior on status today so this is fine.
  const expenseRow: SpendingRow | null = useMemo(() => {
    if (!expenseId) return null
    // Resolve the row from the SAME pool the user is browsing.
    //
    // This matters because Submit's row factory re-casts statuses on
    // a handful of pending expenses (e.g. → `draft` or
    // `changes-requested` for the To-Do preset). Manage keeps the
    // original pending status. Both pools share source ids — so
    // looking in the wrong pool first means the table cell ("Changes
    // requested") and the detail-page ResourceHeader ("Pending")
    // disagree, which broke the policy-alert variant selector too
    // (it filters by `view` + draft/changes-requested status).
    //
    // Submit-side rows can also have synthetic ids prefixed
    // `draft-…` that don't exist anywhere else; those only resolve
    // through `submitRows`.
    const primaryPool = primaryTab === "submit" ? submitRows : manageRows
    const fallbackPool = primaryTab === "submit" ? manageRows : submitRows
    const fromPrimary = primaryPool.find(
      (r) => r.kind === "expense" && r.id === expenseId
    )
    if (fromPrimary) return fromPrimary
    const fromFallback = fallbackPool.find(
      (r) => r.kind === "expense" && r.id === expenseId
    )
    if (fromFallback) return fromFallback
    const raw = expenses.find((e) => e.id === expenseId)
    return raw ? expenseToRow(raw) : null
  }, [expenseId, primaryTab, manageRows, submitRows])

  // Sibling expense IDs in the active preset of the active tab —
  // used by the detail page's header navigation (1/N + up/down
  // chevrons). The user expects the chevrons to walk *the same list
  // they were looking at* when they opened the detail (e.g. the 9
  // rows of Approve > "Needs review", not all 26 pending rows).
  //
  // OneDataCollection owns preset state internally (no URL param to
  // read), so we infer the active preset from the *opened row* by
  // matching it against per-(tab, subTab) bucket predicates. A row
  // belongs to the first bucket whose predicate it satisfies — so
  // bucket order matters when buckets overlap (e.g. Approve splits
  // by alerts on the same status set).
  //
  // Folder rows are excluded — only expenses open in the detail.
  type RowPredicate = (row: SpendingRow) => boolean
  const PRESET_BUCKETS: Record<string, RowPredicate[]> = useMemo(() => {
    const byStatus =
      (...statuses: ExpenseStatus[]): RowPredicate =>
      (r) =>
        statuses.includes(r.status)
    return {
      // My spending > Expenses
      "submit:expenses": [
        byStatus("draft", "changes-requested"), // To-Do
        byStatus("pending", "approved", "in-payroll", "paid"), // Submitted
      ],
      // Approve & Pay > Approve splits by alerts on the same status
      // ("pending"). Order matters: rows with alerts → Needs review,
      // rows without → Ready to approve.
      "manage:pending-approval": [
        (r) => r.status === "pending" && r.alerts.length > 0, // Needs review
        (r) => r.status === "pending" && r.alerts.length === 0, // Ready to approve
      ],
      // Control > Uncontrolled / Controlled
      "manage:pending-controlling": [byStatus("approved"), byStatus("controlled")],
      // Pay > Unpaid / Paid
      "manage:pay": [byStatus("controlled"), byStatus("paid")],
      // All > Pending / Approved / Controlled / In Payroll / Paid
      "manage:all": [
        byStatus("pending"),
        byStatus("approved"),
        byStatus("controlled"),
        byStatus("in-payroll"),
        byStatus("paid"),
      ],
    }
  }, [])

  const siblingIds = useMemo(() => {
    if (!expenseId) return []
    const pool =
      primaryTab === "manage"
        ? manageRows
        : primaryTab === "submit" && subTab === "expenses"
          ? submitRows
          : []
    if (pool.length === 0) return []

    // Find the opened row to read its signals; if it's not in the
    // current pool (e.g. user landed via a deep link from another
    // tab) fall back to the full pool so navigation still works.
    const openedRow = pool.find(
      (r) => r.kind === "expense" && r.id === expenseId
    )
    const expensesInPool = pool.filter((r) => r.kind === "expense")
    if (!openedRow) return expensesInPool.map((r) => r.id)

    const buckets = PRESET_BUCKETS[`${primaryTab}:${subTab}`]
    if (!buckets) return expensesInPool.map((r) => r.id)
    const bucket = buckets.find((pred) => pred(openedRow))
    if (!bucket) return expensesInPool.map((r) => r.id)
    return expensesInPool.filter((r) => bucket(r)).map((r) => r.id)
  }, [expenseId, primaryTab, subTab, manageRows, submitRows, PRESET_BUCKETS])

  const siblingNav = useMemo(() => {
    if (!expenseId || siblingIds.length === 0) return null
    const idx = siblingIds.indexOf(expenseId)
    if (idx < 0) return null
    const buildHref = (id: string) => {
      const next = new URLSearchParams(searchParams)
      next.set("expense", id)
      return `/p/controlling-step-poc?${next.toString()}`
    }
    return {
      counter: { current: idx + 1, total: siblingIds.length },
      previous:
        idx > 0
          ? { url: buildHref(siblingIds[idx - 1]!), title: "Previous expense" }
          : undefined,
      next:
        idx < siblingIds.length - 1
          ? { url: buildHref(siblingIds[idx + 1]!), title: "Next expense" }
          : undefined,
    }
  }, [expenseId, siblingIds, searchParams])

  const openExpense = useCallback(
    (id: string) => {
      const next = new URLSearchParams(searchParams)
      next.set("expense", id)
      setSearchParams(next)
    },
    [searchParams, setSearchParams]
  )

  const closeSidePanel = useCallback(() => {
    const next = new URLSearchParams(searchParams)
    next.delete("expense")
    setSearchParams(next)
    setBulkEditIds(null)
  }, [searchParams, setSearchParams])

  // Bulk action dispatcher. Spec D BR-003/005: "Bulk edit" opens the
  // panel pre-filled empty; "Mark as controlled" / "Reject" / Pay
  // actions are no-op stubs in the prototype (we'd hit an API in prod).
  const handleBulkAction = useCallback(
    (actionId: string, ids: string[]) => {
      if (actionId === "bulk-edit") {
        if (ids.length === 0) return
        setBulkEditIds(ids)
      }
      // Other bulk actions intentionally fall through — production
      // wires them to mutations + toast confirmations, but the
      // prototype has nothing to mutate.
    },
    []
  )

  const setPrimary = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("tab", id)
    next.delete("sub")
    next.delete("expense")
    setSearchParams(next)
  }
  const setSub = (id: string) => {
    const next = new URLSearchParams(searchParams)
    next.set("sub", id)
    next.delete("expense")
    setSearchParams(next)
  }

  const primaryTabsWithNav = visiblePrimaryTabs.map((t) => ({
    ...t,
    onClick: () => setPrimary(t.id),
  }))
  const subTabsWithNav = subTabsForPrimary.map((t) => ({
    ...t,
    onClick: () => setSub(t.id),
  }))

  // Side-panel variant: bulk-edit ONLY now. Single-expense detail/
  // controlling flows render full-page via `ExpenseDetailPage` below.
  // Keeping the panel for bulk-edit because a multi-row form
  // operating on a transient selection wants the focused, dismissible
  // affordance — a full-page view there would feel like a state
  // change rather than a temporary action.
  const sidePanelOpen = bulkEditIds !== null
  const sidePanelVariant = "bulk-edit" as const

  // Whether the open expense lives on a tab where the controlling
  // block matters (Pending Controlling, Pay, All). Drives the
  // ResourceHeader's Edit / Mark-as-controlled actions.
  const isControllableTab =
    primaryTab === "manage" &&
    (subTab === "pending-controlling" ||
      subTab === "pay" ||
      subTab === "all")

  // The detail page's CTA set depends on which JTBD owns the tab the
  // user came from:
  //   - "approval"    → approver flow: Approve / Reject as primary CTAs.
  //   - "controlling" → finance review: Mark as controlled / Reject.
  //   - "pay"         → treasury: Mark as paid / Reject.
  //   - "view"        → no destructive primary action; only Edit + overflow.
  // Submit and Folder tabs map to "view" because the user owns those
  // expenses but isn't approving them from the detail page.
  const tabRole: "approval" | "controlling" | "pay" | "view" =
    primaryTab === "manage" && subTab === "pending-approval"
      ? "approval"
      : primaryTab === "manage" && subTab === "pending-controlling"
        ? "controlling"
        : primaryTab === "manage" && subTab === "pay"
          ? "pay"
          : "view"

  // Breadcrumb label for the expense page. Falls back to "Spending"
  // when nothing useful is in the URL (e.g. deep link to ?expense=…).
  const sourceTabLabel = useMemo(() => {
    if (primaryTab === "manage") {
      const sub = MANAGE_SUB_TABS.find((t) => t.id === subTab)
      return sub ? `Approve & Pay · ${sub.label}` : "Approve & Pay"
    }
    const sub = SUBMIT_SUB_TABS.find((t) => t.id === subTab)
    return sub ? `My spending · ${sub.label}` : "My spending"
  }, [primaryTab, subTab])

  // Deep-link URL for the source-tab breadcrumb so clicking it
  // restores the same primary+sub tab the user came from.
  const sourceTabHref = useMemo(
    () => `/p/controlling-step-poc?tab=${primaryTab}&sub=${subTab}`,
    [primaryTab, subTab]
  )

  // Stub mutation handlers — the prototype doesn't persist anything.
  // They close the panel so the interaction reads as "done". Memoised
  // so their identity stays stable across renders; otherwise the form
  // definition inside `ControllingForm` would re-register and the AI
  // chat panel's tool registration would loop (Maximum update depth).
  const noopAndClose = useCallback(
    (_data?: ControllingFormData) => {
      closeSidePanel()
    },
    [closeSidePanel]
  )
  const onMarkControlled = useCallback(() => closeSidePanel(), [closeSidePanel])
  const onReject = useCallback(() => closeSidePanel(), [closeSidePanel])

  if (folderId) {
    // Folder sub-screen takes over AFTER all hooks above are declared,
    // so every render of `Spending` calls the same hooks in the same
    // order regardless of whether the URL has `?folder=`. React's
    // "rendered fewer hooks" rule depends on stable hook order across
    // renders — never put an early return between hook calls.
    return (
      <FolderDetail
        folderId={folderId}
        onExpenseClick={openExpense}
        onBack={() => {
          const next = new URLSearchParams(searchParams)
          next.delete("folder")
          setSearchParams(next)
        }}
      />
    )
  }

  // Single-expense full-page view. Mounted ONLY when we have a row
  // resolved and we're NOT in bulk-edit (which still renders the side
  // panel over the list, see further down). Same hook-order rule as
  // the folder branch: every hook above runs unconditionally.
  if (expenseRow && bulkEditIds === null) {
    return (
      <ExpenseDetailPage
        row={expenseRow}
        sourceTabLabel={sourceTabLabel}
        sourceTabHref={sourceTabHref}
        controllable={isControllableTab}
        tabRole={tabRole}
        navigation={siblingNav}
        onBack={closeSidePanel}
        onSaveControlling={noopAndClose}
        onMarkControlled={onMarkControlled}
        onReject={onReject}
      />
    )
  }

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "my_spending",
              name: "Spend management",
              href: "/p/controlling-step-poc?tab=submit&sub=expenses",
            }}
            actions={[]}
          />
          <Tabs
            key={primaryTab}
            tabs={primaryTabsWithNav}
            activeTabId={primaryTab}
          />
          <Tabs
            key={`${primaryTab}:${subTab}`}
            secondary
            tabs={subTabsWithNav}
            activeTabId={subTab}
          />
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          {primaryTab === "submit" && subTab === "expenses" && (
            <SubmitExpensesTab
              folderHref={folderHref}
              onExpenseClick={openExpense}
            />
          )}
          {primaryTab === "submit" && subTab === "purchase-requests" && (
            <F0Box
              display="flex"
              flexDirection="column"
              gap="sm"
              padding="lg"
              background="secondary"
              borderRadius="md"
            >
              <F0Text
                variant="label"
                content="Purchase Requests — placement only"
              />
              <F0Text
                variant="description"
                content="The existing Purchase Requests page (its internal tabs, presets, table and side panel) will be rendered here unchanged."
              />
            </F0Box>
          )}
          {primaryTab === "submit" && subTab === "cards" && (
            <F0Box
              display="flex"
              flexDirection="column"
              gap="sm"
              padding="lg"
              background="secondary"
              borderRadius="md"
            >
              <F0Text variant="label" content="Cards — placement only" />
              <F0Text
                variant="description"
                content="The existing Cards page (its internal tabs, presets, table and side panel) will be rendered here unchanged."
              />
            </F0Box>
          )}
          {primaryTab === "manage" &&
            (
              ["pending-approval", "pending-controlling", "pay", "all"] as const
            ).map(
              (id) =>
                subTab === id && (
                  <ManageTab
                    key={id}
                    variant={id as ManageSubTabId}
                    folderHref={folderHref}
                    onExpenseClick={openExpense}
                    onBulkAction={handleBulkAction}
                  />
                )
            )}
        </F0Box>

        {/* Side panel — single component, three variants. We mount it
            conditionally on `sidePanelOpen` so the controlling form
            (and therefore its registration with the AI form registry)
            only exists while the user can actually see it. Mounting an
            invisible form leaves the registry in a "registered but no
            UI" state, which loops the chat panel
            ("Maximum update depth exceeded" inside Dle / Array.map). */}
        {sidePanelOpen && (
          <ExpenseSidePanel
            isOpen={sidePanelOpen}
            onClose={closeSidePanel}
            variant={sidePanelVariant}
            row={expenseRow}
            bulkSelectionCount={bulkEditIds?.length}
            onSaveControlling={noopAndClose}
            onMarkControlled={onMarkControlled}
            onReject={onReject}
            onBulkApply={noopAndClose}
          />
        )}
      </StandardLayout>
    </Page>
  )
}
