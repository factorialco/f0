import {
  F0AvatarModule,
  OneDataCollection,
  Page,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  CalendarArrowRight,
  CheckDouble,
  Cross,
} from "@factorialco/f0-react/icons/app"
import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

import { employees, expenses, findEmployee, type Expense } from "@/fixtures"
import {
  setInviteStatus,
  useParticipantInvites,
} from "@/prototypes/_shared/inviteStore"
import { useViewerOverride } from "@/lib/viewer"

import type { PrototypeMeta } from "../types"

/**
 * Inbox prototype — 1:1 recreation of Factorial's production Inbox
 * built on `OneDataCollection` (list visualization), the same
 * primitive the monolith uses.
 *
 * Production source of truth:
 *   frontend/src/modules/inbox_tasks/components/InboxList/index.tsx
 *
 * Surface mapping (production → prototype):
 *   - `source.presets`     →  Finance / Performance / Surveys chips,
 *                             each with a live `itemsCount`.
 *   - `source.grouping`    →  "Last month" bucket header (group key
 *                             is precomputed on each task so the
 *                             single canonical bucket appears once).
 *   - `source.bulkActions` →  Approve / Reject action bar shown when
 *                             rows are selected.
 *   - `source.itemActions` →  Per-row hover Approve / Reject inline
 *                             buttons (production uses CheckDouble +
 *                             Cross with `type: 'primary'`).
 *   - `itemDefinition`     →  Title + description[] + avatar with a
 *                             coloured module badge in the bottom
 *                             corner — exactly what production
 *                             renders via `getTaskTitle` +
 *                             `getTaskDescription` + a `type:'module'`
 *                             avatar badge.
 *   - `fields`             →  "Overdue" alertTag (critical level)
 *                             and the formatted due-date tag with
 *                             a `CalendarArrowRight` icon, both
 *                             right-aligned in the row.
 *
 * Scope per design lock-in:
 *   - Visual recreation only. Bulk + per-row Approve/Reject buttons
 *     are wired but no-op; checkboxes don't persist completion.
 *   - To-do / Completed sub-nav is URL-synced (`?tab=`); Completed
 *     renders an empty-state matching the production placeholder.
 *   - The inbox no longer surfaces participant invites (the invite
 *     handshake stays internal to controlling-step-poc).
 */
export const meta: PrototypeMeta = {
  slug: "inbox",
  title: "Inbox",
  description:
    "1:1 OneDataCollection-driven recreation of Factorial's production Inbox: To-do/Completed tabs, category presets with counters, grouped task rows with module-badged avatars, overdue alert tags and due-date tags, plus inline Approve/Reject actions on hover and in bulk.",
  category: "Other",
  module: "inbox",
  audience: ["employee"],
  tags: ["inbox", "notifications", "recreation"],
  createdAt: "2026-05-20",
  author: "f0compose",
}

// -- types ----------------------------------------------------------

type Category = "finance" | "performance" | "surveys"

/**
 * Two row shapes coexist inside the Finance preset:
 *
 *   - `kind: "task"` — the canonical Approve/Reject expense
 *     approval row (wraps an `Expense` fixture). Title + actions
 *     read like "Review X's expense request" / Approve / Reject.
 *
 *   - `kind: "invite"` — a participant-confirmation row surfaced
 *     when another employee added the current viewer to a group
 *     expense. Title reads "Hellen added you to an expense";
 *     actions are Reject / Confirm; resolving the row removes it
 *     from the list (in-memory only, via `setInviteStatus`).
 */
type InboxTask = {
  id: string
  /** Discriminator for itemDefinition / itemActions branching. */
  kind: "task" | "invite"
  /** Optional payload referenced when `kind === "invite"`. */
  inviteId?: string
  title: string
  description: string[]
  category: Category
  ownerEmployeeId: string
  /** ISO string. Used to format the "dd/MM/yyyy HH:mm" tag. */
  dueAt: string
  isOverdue: boolean
  /** Bucket label — single "Last month" group in this prototype. */
  creationGroup: string
}

// Production category → f0 ModuleId for the avatar badge. Verified
// in F0AvatarModule/modules.ts: my_spending / performance_v2 /
// engagement are all valid keys.
const CATEGORY_TO_MODULE = {
  finance: "my_spending",
  performance: "performance_v2",
  surveys: "engagement",
} as const

// -- prototype ------------------------------------------------------

export default function Inbox() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = (searchParams.get("tab") ?? "todo") as "todo" | "completed"

  // Inbox always renders from Marie Curie's POV — production
  // shows whoever is logged in, and for the f0compose demo Marie
  // is the one receiving invites + tasks. The override is scoped
  // to this prototype's lifetime; navigating away restores Hellen.
  useViewerOverride("emp-002")

  // Live view of the participant-invite store. The Hellen→Marie
  // pinned row only renders when Marie has at least one pending
  // invite (i.e. Hellen actually submitted a group expense in
  // this session). Confirming or rejecting the row mutates the
  // store, which re-renders Inbox and removes the row.
  const invites = useParticipantInvites()
  const pendingForMarie = useMemo(
    () =>
      invites.filter(
        (i) => i.participantEmployeeId === "emp-002" && i.status === "pending"
      ),
    [invites]
  )

  const tasks = useMemo(
    () => buildTasks(pendingForMarie),
    [pendingForMarie]
  )

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams)
    next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  return (
    <Page
      header={
        <div className="flex items-center gap-3 px-6 pb-2 pt-4">
          <F0AvatarModule module="inbox" size="lg" />
          <h1 className="text-2xl font-semibold text-f1-foreground">
            Inbox
          </h1>
        </div>
      }
    >
      <div className="flex flex-col gap-4 pb-8 pt-2">
        {/* To-do / Completed sub-nav. URL-synced. Re-keyed on
            activeTab so the underline tracks URL state instead of
            internal Tabs state (per the f0-prototype skill).

            `<Page>` provides zero horizontal padding for the main
            content area, but `PageHeader` insets itself by `px-6`
            (24px) so the Inbox icon column sits at x=24. To make
            the Tabs pill, the OneDC filter button, and the row
            checkboxes all share that same x=24 column, we wrap
            each in a left-padding container that matches their
            internal inset — Tabs renders its list with `px-6`
            already, so `pl-0` lands its pill box at x=24 exactly;
            OneDC uses `px-4` internally, so `pl-2` adds the 8px
            difference to land its toolbar at x=24 as well. */}
        <Tabs
          key={activeTab}
          activeTabId={activeTab}
          tabs={[
            {
              id: "todo",
              label: "To-do",
              onClick: () => setParam("tab", "todo"),
            },
            {
              id: "completed",
              label: "Completed",
              onClick: () => setParam("tab", "completed"),
            },
          ]}
        />

        {activeTab === "todo" ? (
          /* OneDC toolbar/rows sit at `px-4` (16px) internally.
             PageHeader / Tabs sit at `px-6` (24px). We add `pl-2`
             (8px) so the OneDC toolbar's filter button + chips
             land at x=24 to match the Inbox icon column. */
          <div className="pl-2">
            <InboxList tasks={tasks} />
          </div>
        ) : (
          <CompletedEmptyState />
        )}
      </div>
    </Page>
  )
}

// -- list -----------------------------------------------------------

function InboxList({ tasks }: { tasks: InboxTask[] }) {
  // Counts power the preset chip badges (production shows e.g.
  // "Finance 99"). Memoized so identical task arrays don't churn
  // the source config.
  const counts = useMemo(() => {
    const c: Record<Category, number> = {
      finance: 0,
      performance: 0,
      surveys: 0,
    }
    for (const t of tasks) c[t.category] += 1
    return c
  }, [tasks])

  const source = useDataCollectionSource(
    {
      // Single declared filter keyed by category. Categories are
      // surfaced as presets (chips), not as a filter dropdown — but
      // a filter has to exist for presets to flip values on. The
      // toolbar filter button still shows it; that's acceptable
      // since the Categories filter mirrors the presets 1:1.
      filters: {
        category: {
          type: "in",
          label: "Category",
          options: {
            options: [
              { value: "finance", label: "Finance" },
              { value: "performance", label: "Performance" },
              { value: "surveys", label: "Surveys" },
            ],
          },
        },
      },
      currentFilters: {},
      // Presets ARE the category chips. Each carries an itemsCount
      // so the chip renders "Label · N", and a filter payload that
      // selects exactly one category at a time.
      presets: [
        {
          label: "Finance",
          filter: { category: ["finance"] },
          itemsCount: () => counts.finance,
        },
        {
          label: "Performance",
          filter: { category: ["performance"] },
          itemsCount: () => counts.performance,
        },
        {
          label: "Surveys",
          filter: { category: ["surveys"] },
          itemsCount: () => counts.surveys,
        },
      ],
      currentGrouping: { field: "creationGroup", order: "desc" },
      grouping: {
        mandatory: true,
        groupBy: {
          creationGroup: {
            name: "Created",
            label: (groupId) => String(groupId),
          },
        },
      },
      sortings: { dueAt: { label: "Due date" } },
      // Checkboxes per row (visual only; we don't persist any state).
      selectable: (item: InboxTask) => item.id,
      // Bulk action bar — Approve (primary) + Reject (secondary).
      // OneDC's ActionBar puts `primary` on the far right.
      bulkActions: () => ({
        secondary: [{ id: "reject", label: "Reject", icon: Cross }],
        primary: [{ id: "approve", label: "Approve", icon: CheckDouble }],
      }),
      // Per-row hover actions. `type: 'primary'` surfaces them as
      // inline buttons rather than dropdown items. Production wires
      // CheckDouble + Cross with the same labels (i18n `common.approve`
      // / `common.reject`).
      //
      // Branch on `kind`:
      //   - `task` → Approve / Reject (no-op visual recreation).
      //   - `invite` → Reject / Confirm (mutates inviteStore →
      //     row disappears from the list).
      itemActions: (item: InboxTask) =>
        item.kind === "invite"
          ? [
              {
                label: "Reject",
                icon: Cross,
                onClick: () => {
                  if (item.inviteId) setInviteStatus(item.inviteId, "declined")
                },
                type: "primary" as const,
              },
              {
                label: "Confirm",
                icon: CheckDouble,
                onClick: () => {
                  if (item.inviteId) setInviteStatus(item.inviteId, "confirmed")
                },
                type: "primary" as const,
              },
            ]
          : [
              {
                label: "Approve",
                icon: CheckDouble,
                onClick: () => {},
                type: "primary" as const,
              },
              {
                label: "Reject",
                icon: Cross,
                onClick: () => {},
                type: "primary" as const,
              },
            ],
      totalItemSummary: (totalItems) => `${totalItems} pending tasks`,
      dataAdapter: {
        paginationType: "pages",
        perPage: 200,
        fetchData: ({ filters }) => {
          // The active preset writes a `category` filter (see
          // preset definitions above). We read it back here to
          // narrow the dataset; default to Finance so the page
          // never lands empty on first render (matches the
          // screenshot where Finance is the active chip).
          const wanted = Array.isArray(filters?.category)
            ? (filters.category as Category[])
            : ["finance"]
          const filtered = tasks.filter((t) => wanted.includes(t.category))
          return {
            type: "pages" as const,
            records: filtered,
            total: filtered.length,
            perPage: 200,
            currentPage: 1,
            pagesCount: 1,
          }
        },
      },
    },
    [tasks, counts]
  )

  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "list",
          options: {
            itemDefinition: (item: InboxTask) => {
              const owner = findEmployee(item.ownerEmployeeId)
              const [firstName, ...rest] = (owner?.fullName ?? "Someone Else")
                .split(" ")
              return {
                title: item.title,
                description: item.description,
                avatar: {
                  type: "person",
                  firstName: firstName ?? "",
                  lastName: rest.join(" "),
                  src: owner?.avatarUrl,
                  badge: {
                    type: "module",
                    module: CATEGORY_TO_MODULE[item.category],
                  },
                },
              }
            },
            fields: [
              {
                label: "Overdue",
                render: (item: InboxTask) =>
                  item.isOverdue
                    ? {
                        type: "alertTag" as const,
                        value: { level: "critical" as const, label: "Overdue" },
                      }
                    : undefined,
              },
              {
                label: "Due date",
                render: (item: InboxTask) => ({
                  type: "tag" as const,
                  value: {
                    label: formatDueDate(item.dueAt),
                    icon: CalendarArrowRight,
                  },
                }),
              },
            ],
          },
        },
      ]}
    />
  )
}

// -- empty state ----------------------------------------------------

function CompletedEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-solid border-f1-border-secondary bg-f1-background-secondary p-12 text-center">
      <p className="text-[16px] font-medium text-f1-foreground">
        No completed tasks yet
      </p>
      <p className="text-[14px] text-f1-foreground-secondary">
        Tasks you finish will appear here.
      </p>
    </div>
  )
}

// -- helpers --------------------------------------------------------

function formatDueDate(iso: string): string {
  const d = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, "0")
  // Production: `dd/MM/yyyy HH:mm`.
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`
}

/**
 * Generate the canonical task list for the recreated inbox. Finance
 * tasks wrap real expense fixtures so each row has a concrete
 * provider / amount / category triple. Performance and Surveys are
 * smaller hand-curated lists sized to match the screenshot ratios
 * ("Performance 4" / "Surveys 8").
 *
 * Pending Hellen→Marie participant invites (Scenario A) are
 * prepended as `kind: "invite"` rows at the top of the Finance
 * stream so they always read first. When `pendingInvites` is
 * empty, no invite rows render and the inbox behaves like the
 * pure expense-approval list from earlier iterations.
 *
 * All tasks land in a single "Last month" creation bucket so the
 * grouping header renders once and the rows flow underneath it,
 * mirroring the reference screenshot exactly.
 */
function buildTasks(
  pendingInvites: ReadonlyArray<{
    id: string
    ownerEmployeeId: string
    expenseId: string
    expenseDate: string
    context?: string
  }>
): InboxTask[] {
  const out: InboxTask[] = []
  const employeeIds = employees.map((e) => e.id)
  // May 2026 frozen "today" per AGENTS/fixtures convention.
  const baseDay = new Date("2026-05-08T20:53:00")

  // Invite rows first — they outrank everything in the Finance
  // preset. One row per pending invite; due date is bumped ahead
  // of the canonical `baseDay` so the OneDC default sort (by
  // dueAt desc) keeps invites at the very top regardless of how
  // many expense rows pile in below.
  pendingInvites.forEach((invite, idx) => {
    const owner = findEmployee(invite.ownerEmployeeId)
    const ownerName = owner?.preferredName ?? owner?.fullName ?? "Someone"
    const due = new Date(baseDay.getTime() + (idx + 1) * 60 * 60_000)
    // Find the source expense so the row can name the vendor
    // inline — designers asked for the at-a-glance "Hellen added
    // you to Birch & Beam" phrasing because invite rows can't be
    // expanded in OneDataCollection's Finance preset.
    const sourceExpense = expenses.find((e) => e.id === invite.expenseId)
    const expenseLabel =
      sourceExpense?.headerTitleOverride ??
      sourceExpense?.provider ??
      "an expense"
    out.push({
      id: `invite-${invite.id}`,
      kind: "invite",
      inviteId: invite.id,
      title: `${ownerName} added you to the expense ${expenseLabel}`,
      description: ["Confirm that you were there"],
      category: "finance",
      ownerEmployeeId: invite.ownerEmployeeId,
      dueAt: due.toISOString(),
      // Invite rows always lead the list — flag them overdue so
      // the critical alertTag amplifies the visual priority.
      isOverdue: true,
      creationGroup: "Last month",
    })
  })

  const pendingExpenses = expenses.filter((e) => e.amount > 0).slice(0, 99)

  pendingExpenses.forEach((expense, idx) => {
    const owner = employeeIds[idx % employeeIds.length]
    const due = new Date(baseDay.getTime() - idx * 7 * 60_000)
    out.push({
      id: `finance-${expense.id}`,
      kind: "task",
      title: buildFinanceTitle(owner, idx),
      description: buildFinanceDescription(expense),
      category: "finance",
      ownerEmployeeId: owner,
      dueAt: due.toISOString(),
      isOverdue: idx < 3,
      creationGroup: "Last month",
    })
  })

  const performanceSeeds: Array<[string, string, string]> = [
    [
      "Submit your self-review",
      "Q2 2026 performance cycle · due in 3 days",
      employeeIds[4] ?? employeeIds[0],
    ],
    [
      "Review Lin Chen's self-assessment",
      "Q2 2026 cycle · manager review",
      employeeIds[2] ?? employeeIds[0],
    ],
    [
      "Set goals for H2 2026",
      "Goals workspace · 3 of 5 goals missing",
      employeeIds[0],
    ],
    [
      "Sign off on Ada Lovelace's calibration",
      "Calibration round 2 · approver action required",
      employeeIds[1] ?? employeeIds[0],
    ],
  ]
  performanceSeeds.forEach(([title, subtitle, owner], idx) => {
    const due = new Date(baseDay.getTime() - idx * 60 * 60_000)
    out.push({
      id: `performance-${idx}`,
      kind: "task",
      title,
      description: [subtitle],
      category: "performance",
      ownerEmployeeId: owner,
      dueAt: due.toISOString(),
      isOverdue: idx === 0,
      creationGroup: "Last month",
    })
  })

  const surveySeeds: Array<[string, string]> = [
    ["Engagement pulse — May 2026", "5-min survey · closes Friday"],
    ["Onboarding feedback (30 days)", "Required survey · HR Operations"],
    ["DEI baseline 2026", "Anonymous · all employees"],
    ["Office relocation preferences", "Workplace experience"],
    ["Manager effectiveness — Q2", "Confidential · routed to People team"],
    ["Tooling satisfaction", "Engineering · IT"],
    ["Wellness check-in", "Weekly · 3 questions"],
    ["Exit interview — A. Smith", "Departing employee · 1 question pending"],
  ]
  surveySeeds.forEach(([title, subtitle], idx) => {
    const owner = employeeIds[(idx + 5) % employeeIds.length]
    const due = new Date(baseDay.getTime() - idx * 30 * 60_000)
    out.push({
      id: `surveys-${idx}`,
      kind: "task",
      title,
      description: [subtitle],
      category: "surveys",
      ownerEmployeeId: owner,
      dueAt: due.toISOString(),
      isOverdue: false,
      creationGroup: "Last month",
    })
  })

  return out
}

function buildFinanceTitle(ownerId: string, idx: number): string {
  const owner = findEmployee(ownerId)
  const name = owner?.fullName ?? "Someone"
  // Sprinkle a "Task: …" title to mirror screenshot variety.
  if (idx === 2) return "Task: Executive leadership retreat"
  return `Review ${name}'s expense request`
}

/**
 * Mirrors production's `getExpensesExpensableMetadata` exactly:
 * `[amount, category, reimbursable]` joined later by the list
 * visualization with the standard `·` separator.
 */
function buildFinanceDescription(expense: Expense): string[] {
  const amount = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(expense.amount)
  const parts: string[] = [amount, expense.category ?? "Other"]
  if (expense.reimbursable) {
    parts.push(
      typeof expense.reimbursable === "number" && expense.reimbursable < expense.amount
        ? `Reimbursable (${new Intl.NumberFormat("en-EU", {
            style: "currency",
            currency: "EUR",
          }).format(expense.reimbursable)})`
        : "Reimbursable"
    )
  }
  return parts
}
