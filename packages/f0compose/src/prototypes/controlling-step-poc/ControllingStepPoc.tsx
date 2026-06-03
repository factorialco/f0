import { F0Box, F0Text, StandardLayout } from "@factorialco/f0-react"
import { Page, PageHeader, Tabs } from "@factorialco/f0-react/dist/experimental"
import { useCallback, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { expenses } from "@/fixtures"
import type { ExpenseStatus } from "@/fixtures"
import type { PrototypeMeta } from "../types"
import { useBulkCreateExpensesAction } from "./copilot/useBulkCreateExpensesAction"
import { useExposeContext } from "./copilot/useExposeContext"
import { useSendExpenseToReviewAction } from "./copilot/useSendExpenseToReviewAction"
import { FolderDetail } from "./folder/FolderDetail"
import { ManageTab } from "./manage/ManageTab"
import { BulkEditor } from "./manage/bulkEditor/BulkEditor"
import { useManageRows } from "./manage/useManageSource"
import { useSubmitExpensesRows } from "./submit/useSubmitExpensesSource"
import { ExpenseDetailPage } from "./shared/detail/ExpenseDetailPage"
import { ExpenseSidePanel } from "./shared/sidePanel/ExpenseSidePanel"
import type { ControllingFormData } from "./shared/sidePanel/ControllingForm"
import { expenseToRow, type SpendingRow } from "./shared/rows"
import { SubmitExpensesTab } from "./submit/SubmitExpensesTab"
import {
  EXPENSES_SUB_TABS,
  PRIMARY_TABS,
  subTabToManageVariant,
  type ExpensesSubTabId,
  type ManageSubTabId,
  type PrimaryTabId,
} from "./tabs"

/**
 * Unified Spending page — Spec A revision 3 (admin IA restructure).
 *
 * Tab row 1 (4 top-level surfaces, one per spend instrument):
 *   - Expenses                    — wired
 *   - Purchase invoices           — placement-only stub
 *   - Purchase requests and orders — placement-only stub
 *   - Cards                       — placement-only stub
 *
 * Tab row 2 inside Expenses (6 lifecycle stops):
 *   - Submit          → personal lifecycle (To do + Submitted)
 *   - Approve         → manager review (pending status, alert split)
 *   - Control         → finance coding (approved + controlled)
 *   - Pending payment → controlled + sent-to-pay, awaiting paid
 *   - Ready to export → terminal preset-chip view across statuses
 *   - Archive         → all expenses, no filter
 *
 * Default landing for cold links is `expenses > submit`. The IA is
 * symmetric: every audience sees the same tabs (manage visibility
 * no longer gates the tab list). Production gating lives behind a
 * permission flag we don't model here.
 *
 * URL state:
 *   ?tab=<PrimaryTabId>        — top-level tab
 *   ?sub=<ExpensesSubTabId>    — sub-tab inside Expenses; ignored
 *                                on the other three top-level tabs
 *   ?folder=<folderId>         — folder detail sub-screen
 *   ?expense=<expenseId>       — expense side panel / full-page detail
 *
 * Side-panel variant resolution:
 *   - On Control                 → variant = "controlling" (form, footer with
 *     Save / Mark as controlled / Reject).
 *   - Everywhere else            → variant = "detail" (read-only, tabs).
 *   - "Bulk edit" bulk action    → variant = "bulk-edit"; applies the form
 *     to every selected row on submit.
 */
export const meta: PrototypeMeta = {
  slug: "controlling-step-poc",
  title: "Controlling Step (POC)",
  description:
    "Spend management — IA r3. Top-level tabs: Expenses · Purchase invoices · Purchase requests and orders · Cards. Inside Expenses: Submit · Approve · Control · Pending payment · Ready to export · Archive. Submit hosts the personal lifecycle; the five manage sub-tabs reuse ManageTab with variant-driven datasets. Pending payment surfaces controlled + sent-to-pay rows; Archive is the unfiltered firehose; Ready to export is the legacy 'Export' surface (5 preset chips).",
  category: "Other",
  module: "spending",
  audience: ["employee", "manager", "admin"],
  tags: ["spending", "expenses", "finance", "ia", "shell"],
  createdAt: "2026-05-11",
}

const EXPENSES_DEFAULT_SUB: ExpensesSubTabId = EXPENSES_SUB_TABS[0].id // "submit"

export default function ControllingStepPoc() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Datasets — fetched unconditionally so hook order is stable.
  // Manage rows feed every sub-tab inside Expenses except Submit;
  // Submit rows feed Submit. We no longer gate the Manage tab on
  // queue presence (Spec A r3 removes the role-inference rule —
  // the IA is symmetric across audiences).
  const manageRows = useManageRows()
  const submitRows = useSubmitExpensesRows()

  // Bulk-edit selection (Spec D F-002 / BR-003 / BR-005). When non-null
  // we render the side panel in "bulk-edit" variant. Lives in component
  // state — not URL — because the selection itself is volatile and we
  // don't want refresh to silently re-trigger a bulk overwrite.
  const [bulkEditIds, setBulkEditIds] = useState<string[] | null>(null)
  // Control has its own bulk-edit affordance: an INLINE
  // spreadsheet-style editor (Shopify-style) that replaces the table
  // in-place rather than opening the side panel. Spec E lives in the
  // designer brief. Kept separate from `bulkEditIds` so the existing
  // side-panel flow on the other Manage sub-tabs is untouched.
  const [inlineBulkEditIds, setInlineBulkEditIds] = useState<string[] | null>(
    null
  )

  // Wire the AI chat actions. These hooks register the "shadow"
  // implementations of David's expense skill (bulkCreateExpenses,
  // sendExpenseToReview) so receipts dropped into the chat surface
  // as rows in our local prototype. The hooks have no return value;
  // they only register render callbacks against CopilotKit's tool
  // dispatcher. See `copilot/useBulkCreateExpensesAction.tsx` for
  // the rationale and the `available: "frontend"` mechanism that
  // keeps these from being sent to the agent runtime as redundant
  // tools.
  useBulkCreateExpensesAction()
  useSendExpenseToReviewAction()

  // Default landing — cold links open on Expenses > Submit. The
  // submitter flow is the more universal entry point (every
  // employee submits, not every employee approves), so a shared
  // demo URL should drop viewers there.
  const defaultPrimary: PrimaryTabId = "expenses"

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

  // Primary tab from URL (fall back if the param is missing or
  // typo'd).
  const rawPrimary = searchParams.get("tab")
  const primaryTab: PrimaryTabId =
    PRIMARY_TABS.find((t) => t.id === rawPrimary)?.id ?? defaultPrimary

  // Sub-tab — only Expenses has sub-tabs in this prototype. The
  // other three top-level tabs are placement-only stubs and ignore
  // the `sub` param.
  const rawSub = searchParams.get("sub")
  const subTab: ExpensesSubTabId =
    primaryTab === "expenses"
      ? (EXPENSES_SUB_TABS.find((t) => t.id === rawSub)?.id ??
        EXPENSES_DEFAULT_SUB)
      : EXPENSES_DEFAULT_SUB

  // Resolve the legacy ManageVariant for the active sub-tab.
  // Returns `null` for the Submit sub-tab (which renders a
  // dedicated component instead of ManageTab).
  const manageVariant: ManageSubTabId | null = useMemo(
    () => (primaryTab === "expenses" ? subTabToManageVariant(subTab) : null),
    [primaryTab, subTab]
  )

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
    const onSubmitTab = primaryTab === "expenses" && subTab === "submit"
    const primaryPool = onSubmitTab ? submitRows : manageRows
    const fallbackPool = onSubmitTab ? manageRows : submitRows
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
  }, [expenseId, primaryTab, subTab, manageRows, submitRows])

  // Sibling expense IDs in the active preset of the active tab —
  // used by the detail page's header navigation (1/N + up/down
  // chevrons). The user expects the chevrons to walk *the same list
  // they were looking at* when they opened the detail (e.g. the 9
  // rows of Approve > "Needs review", not all 26 pending rows).
  //
  // OneDataCollection owns preset state internally (no URL param to
  // read), so we infer the active preset from the *opened row* by
  // matching it against per-sub-tab bucket predicates. A row
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
      // Expenses > Submit
      submit: [
        byStatus("draft", "changes-requested"), // To-Do
        byStatus("pending", "approved", "in-payroll", "paid"), // Submitted
      ],
      // Expenses > Approve splits by alerts on the same status
      // ("pending"). Order matters: rows with alerts → Needs review,
      // rows without → Ready to approve.
      approve: [
        (r) => r.status === "pending" && r.alerts.length > 0,
        (r) => r.status === "pending" && r.alerts.length === 0,
      ],
      // Expenses > Control — Uncontrolled / Controlled
      control: [byStatus("approved"), byStatus("controlled")],
      // Expenses > Pending payment — Awaiting payment / Sent to Pay
      "pending-payment": [byStatus("controlled"), byStatus("in-payroll")],
      // Expenses > Ready to export — 5 preset chips across every
      // status (legacy "all"-variant surface).
      "ready-to-export": [
        byStatus("pending"),
        byStatus("approved"),
        byStatus("controlled"),
        byStatus("in-payroll"),
        byStatus("paid"),
      ],
      // Expenses > Archive — no preset segmentation. Treat as one
      // big bucket so the chevrons walk every expense.
      archive: [() => true],
    }
  }, [])

  const siblingIds = useMemo(() => {
    if (!expenseId) return []
    if (primaryTab !== "expenses") return []
    // Submit reads from `submitRows`; every other sub-tab inside
    // Expenses reads from `manageRows`.
    const pool = subTab === "submit" ? submitRows : manageRows
    if (pool.length === 0) return []

    // Find the opened row to read its signals; if it's not in the
    // current pool (e.g. user landed via a deep link from another
    // tab) fall back to the full pool so navigation still works.
    const openedRow = pool.find(
      (r) => r.kind === "expense" && r.id === expenseId
    )
    const expensesInPool = pool.filter((r) => r.kind === "expense")
    if (!openedRow) return expensesInPool.map((r) => r.id)

    const buckets = PRESET_BUCKETS[subTab]
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
  //
  // Spec E (Control sub-tab): on Control, "Bulk edit" routes to the
  // inline spreadsheet editor instead of the side panel.
  const handleBulkAction = useCallback(
    (actionId: string, ids: string[]) => {
      if (actionId === "bulk-edit") {
        if (ids.length === 0) return
        if (subTab === "control") {
          setInlineBulkEditIds(ids)
        } else {
          setBulkEditIds(ids)
        }
      }
      // Other bulk actions intentionally fall through — production
      // wires them to mutations + toast confirmations, but the
      // prototype has nothing to mutate.
    },
    [subTab]
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

  // Tab navigation lists. Top row is the full 4-tab IA; the
  // sub-row only renders when the user is on Expenses (the other
  // three top-level tabs are placement-only stubs).
  const primaryTabsWithNav = PRIMARY_TABS.map((t) => ({
    ...t,
    onClick: () => setPrimary(t.id),
  }))
  const subTabsWithNav =
    primaryTab === "expenses"
      ? EXPENSES_SUB_TABS.map((t) => ({
          ...t,
          onClick: () => setSub(t.id),
        }))
      : []

  // Side-panel variant: bulk-edit ONLY now. Single-expense detail/
  // controlling flows render full-page via `ExpenseDetailPage` below.
  // Keeping the panel for bulk-edit because a multi-row form
  // operating on a transient selection wants the focused, dismissible
  // affordance — a full-page view there would feel like a state
  // change rather than a temporary action.
  const sidePanelOpen = bulkEditIds !== null
  const sidePanelVariant = "bulk-edit" as const

  // Whether the open expense lives on a tab where the controlling
  // block matters (Control, Pending payment, Ready to export,
  // Archive). Drives the ResourceHeader's Edit / Mark-as-controlled
  // actions.
  const isControllableTab =
    primaryTab === "expenses" &&
    (subTab === "control" ||
      subTab === "pending-payment" ||
      subTab === "ready-to-export" ||
      subTab === "archive")

  // The detail page's CTA set depends on which JTBD owns the tab the
  // user came from:
  //   - "approval"    → approver flow: Approve / Reject as primary CTAs.
  //   - "controlling" → finance review: Mark as controlled / Reject.
  //   - "pay"         → treasury: Mark as paid / Reject (Pending payment).
  //   - "view"        → no destructive primary action; only Edit + overflow.
  // Submit and the read-only export/archive surfaces map to "view"
  // because the user owns those expenses but isn't acting on them
  // from the detail page.
  const tabRole: "approval" | "controlling" | "pay" | "view" =
    primaryTab === "expenses" && subTab === "approve"
      ? "approval"
      : primaryTab === "expenses" && subTab === "control"
        ? "controlling"
        : primaryTab === "expenses" && subTab === "pending-payment"
          ? "pay"
          : "view"

  // Breadcrumb label for the expense page. Combines the top-level
  // tab name + the active sub-tab inside Expenses so the user
  // knows exactly which row list they came from. Other top-level
  // tabs (Purchase invoices, Purchase requests and orders, Cards)
  // are placement-only in this prototype but we still surface
  // their label so the breadcrumb stays correct if a designer
  // wires content there later.
  const sourceTabLabel = useMemo(() => {
    const primaryLabel =
      PRIMARY_TABS.find((t) => t.id === primaryTab)?.label ?? "Spending"
    if (primaryTab !== "expenses") return primaryLabel
    const sub = EXPENSES_SUB_TABS.find((t) => t.id === subTab)
    return sub ? `${primaryLabel} · ${sub.label}` : primaryLabel
  }, [primaryTab, subTab])

  // Deep-link URL for the source-tab breadcrumb so clicking it
  // restores the same primary+sub tab the user came from.
  const sourceTabHref = useMemo(
    () =>
      primaryTab === "expenses"
        ? `/p/controlling-step-poc?tab=${primaryTab}&sub=${subTab}`
        : `/p/controlling-step-poc?tab=${primaryTab}`,
    [primaryTab, subTab]
  )

  // Tell the agent what the user is looking at. This is what lets
  // it answer "where am I" type questions and pick the right tool
  // (e.g. submit vs approve vs pay) without having to ask.
  useExposeContext({
    primaryTab,
    subTab,
    rows: primaryTab === "expenses" && subTab === "submit"
      ? submitRows
      : manageRows,
  })

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
              href: "/p/controlling-step-poc?tab=expenses&sub=submit",
            }}
            actions={[]}
          />
          <Tabs
            key={primaryTab}
            tabs={primaryTabsWithNav}
            activeTabId={primaryTab}
          />
          {primaryTab === "expenses" && (
            <Tabs
              key={`${primaryTab}:${subTab}`}
              secondary
              tabs={subTabsWithNav}
              activeTabId={subTab}
            />
          )}
        </>
      }
    >
      <StandardLayout>
        <F0Box display="flex" flexDirection="column" gap="lg">
          {/* Expenses > Submit — dedicated component (personal
              lifecycle). Everything else routes through ManageTab
              with a variant prop. */}
          {primaryTab === "expenses" && subTab === "submit" && (
            <SubmitExpensesTab
              folderHref={folderHref}
              onExpenseClick={openExpense}
            />
          )}

          {/* Expenses > Approve / Control / Pending payment /
              Ready to export / Archive — all delegate to ManageTab,
              which receives the resolved variant from
              `subTabToManageVariant`. Control gets the inline
              spreadsheet editor (Spec E) when the user clicks Bulk
              edit; everything else uses the side-panel flow. */}
          {primaryTab === "expenses" &&
            subTab !== "submit" &&
            manageVariant !== null &&
            (subTab === "control" && inlineBulkEditIds !== null ? (
              (() => {
                const selected = manageRows.filter((r) =>
                  inlineBulkEditIds.includes(r.id)
                )
                return (
                  <BulkEditor
                    key={`${subTab}-editor`}
                    rows={selected}
                    onClose={() => setInlineBulkEditIds(null)}
                  />
                )
              })()
            ) : (
              <ManageTab
                key={`${primaryTab}:${subTab}`}
                variant={manageVariant}
                folderHref={folderHref}
                onExpenseClick={openExpense}
                onBulkAction={handleBulkAction}
              />
            ))}

          {/* Placement-only stubs for the three non-Expenses
              top-level tabs. Production will render the existing
              Purchase invoices / Purchase requests & orders /
              Cards pages here unchanged — this is just a header
              + tab IA exercise, not a content migration. */}
          {primaryTab === "purchase-invoices" && (
            <PlacementStub
              title="Purchase invoices — placement only"
              description="The existing Purchase invoices page (its internal tabs, presets, table and side panel) will be rendered here unchanged."
            />
          )}
          {primaryTab === "purchase-requests-orders" && (
            <PlacementStub
              title="Procurement — placement only"
              description="The existing Procurement page (its internal tabs, presets, table and side panel) will be rendered here unchanged."
            />
          )}
          {primaryTab === "cards" && (
            <PlacementStub
              title="Cards — placement only"
              description="The existing Cards page (its internal tabs, presets, table and side panel) will be rendered here unchanged."
            />
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

/**
 * Shared chrome for the three placement-only top-level tabs
 * (Purchase invoices, Purchase requests and orders, Cards). Keeps
 * the message + tint consistent so reviewers immediately read
 * these surfaces as "intentionally empty in this prototype, not a
 * loading state".
 */
function PlacementStub(props: { title: string; description: string }) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="sm"
      padding="lg"
      background="secondary"
      borderRadius="md"
    >
      <F0Text variant="label" content={props.title} />
      <F0Text variant="description" content={props.description} />
    </F0Box>
  )
}
