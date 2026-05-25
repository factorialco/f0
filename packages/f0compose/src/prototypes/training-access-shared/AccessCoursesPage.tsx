import { useState } from "react"
import {
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Dialog,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
  Tabs,
  useDataCollectionSource,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  ArrowRight,
  Check,
  Delete,
  Download,
  EyeInvisible,
  EyeVisible,
  LayersFront,
  Money,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import {
  competencies,
  employees,
  insightsAggregates,
  trainingAxes,
  trainingBudgets,
  trainingRequests,
  trainings,
  type Training,
  type TrainingBudget,
  type TrainingRequest,
} from "@/fixtures"
import { applySort } from "@/lib/applySort"

import { NewTrainingWizard } from "../trainings/NewTrainingWizard"
import { PageContent } from "../trainings/_shared/PageContent"
import { AxesTab } from "../trainings/list/AxesTab"
import { BulkActionModal, type BulkActionKind } from "../trainings/list/BulkActionModal"
import { CategoriesTab } from "../trainings/list/CategoriesTab"
import { SurveyTemplatesTab } from "../trainings/list/SurveyTemplatesTab"
import { trainingsTopNav } from "../trainings/topNav"

type AccessRole = "admin" | "editor" | "viewer"
type TopTabId = "trainings" | "requests" | "budgets" | "insights"
type ListTabId = "courses" | "categories" | "axes" | "survey_templates"

type TrainingsListAction =
  | { kind: "export" }
  | { kind: "import" }
  | { kind: "import-courses" }
  | { kind: "duplicate"; training: Training }
  | { kind: "toggle-catalog"; training: Training }
  | { kind: "delete"; training: Training }

type SimpleDialog = {
  title: string
  description: string
  primaryLabel: string
  cancelLabel?: string
  critical?: boolean
}

type InsightsExportDialog = {
  title: string
  description: string
  primaryLabel: string
}

const listTabs: { id: ListTabId; label: string }[] = [
  { id: "courses", label: "All courses" },
  { id: "categories", label: "Tags" },
  { id: "axes", label: "Axes" },
  { id: "survey_templates", label: "Survey Templates" },
]

const VALID_LIST_TABS = new Set<string>(listTabs.map((tab) => tab.id))
const VALID_TOP_TABS = new Set<string>(trainingsTopNav.map((tab) => tab.id))

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount)

const bigCurrency = (amount: number) => ({
  value: amount,
  units: "€",
  unitsPosition: "prepend" as const,
})

const bigPercentage = (amount: number) => ({
  value: amount,
  units: "%",
})

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))

function getRows(trainingIds?: Set<string>) {
  if (!trainingIds) return trainings
  return trainings.filter((training) => trainingIds.has(training.id))
}

export function AccessCoursesPage({
  baseHref,
  role,
  trainingIds,
}: {
  baseHref: string
  role: AccessRole
  trainingIds?: Set<string>
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [showNewTraining, setShowNewTraining] = useState(false)

  const rawTopTab = searchParams.get("ttab")
  const activeTopTab: TopTabId = rawTopTab && VALID_TOP_TABS.has(rawTopTab)
    ? (rawTopTab as TopTabId)
    : "trainings"
  const rawListTab = searchParams.get("ltab")
  const activeListTab: ListTabId = rawListTab && VALID_LIST_TABS.has(rawListTab)
    ? (rawListTab as ListTabId)
    : "courses"

  const setTopTab = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "trainings") next.set("ttab", id)
    setSearchParams(next)
  }

  const setListTab = (id: string) => {
    const next = new URLSearchParams()
    if (activeTopTab !== "trainings") next.set("ttab", activeTopTab)
    next.set("ltab", id)
    setSearchParams(next)
  }

  const goToDetail = (training: Training) => {
    const next = new URLSearchParams()
    next.set("training", training.id)
    setSearchParams(next)
  }

  const handleTrainingCreated = (training: Training) => {
    setShowNewTraining(false)
    goToDetail(training)
  }

  return (
    <>
      <Page
        header={
          <>
            <PageHeader
              module={{ id: "company_trainings", name: "Courses", href: baseHref }}
              actions={[]}
            />
            <Tabs
              tabs={trainingsTopNav.map((tab) => ({
                id: tab.id,
                label: tab.label,
                onClick: () => setTopTab(tab.id),
              }))}
              activeTabId={activeTopTab}
            />
            {activeTopTab === "trainings" && (
              <Tabs
                tabs={listTabs.map((tab) => ({
                  id: tab.id,
                  label: tab.label,
                  onClick: () => setListTab(tab.id),
                }))}
                activeTabId={activeListTab}
                secondary
              />
            )}
          </>
        }
      >
        <PageContent>
          {activeTopTab === "trainings" && activeListTab === "courses" && (
            <AccessCoursesList
              baseHref={baseHref}
              role={role}
              rows={getRows(trainingIds)}
              onAdd={() => setShowNewTraining(true)}
              onSelect={goToDetail}
            />
          )}
          {activeTopTab === "trainings" && activeListTab === "categories" && <CategoriesTab />}
          {activeTopTab === "trainings" && activeListTab === "axes" && <AxesTab />}
          {activeTopTab === "trainings" && activeListTab === "survey_templates" && <SurveyTemplatesTab />}
          {activeTopTab === "requests" && (
            <AccessRequestsList role={role} trainingIds={trainingIds} />
          )}
          {activeTopTab === "budgets" && <AccessBudgetsList role={role} />}
          {activeTopTab === "insights" && <AccessInsights role={role} />}
        </PageContent>
      </Page>

      {role === "admin" && (
        <NewTrainingWizard
          isOpen={showNewTraining}
          onClose={() => setShowNewTraining(false)}
          onCreated={handleTrainingCreated}
        />
      )}
    </>
  )
}

function AccessRequestsList({
  role,
  trainingIds,
}: {
  role: AccessRole
  trainingIds?: Set<string>
}) {
  const [dialog, setDialog] = useState<SimpleDialog | null>(null)
  const rows = trainingIds
    ? trainingRequests.filter((request) =>
        request.trainingId ? trainingIds.has(request.trainingId) : role === "admin"
      )
    : trainingRequests
  const source = useAccessRequestsSource(rows, role, (action, request) => {
    if (action === "approve") {
      setDialog({
        title: "Approve request",
        description: `Approve ${request.trainingName} for ${request.authorEmployeeName}.`,
        primaryLabel: "Approve",
      })
      return
    }
    if (action === "reject") {
      setDialog({
        title: "Reject request",
        description: `Reject ${request.trainingName} for ${request.authorEmployeeName}.`,
        primaryLabel: "Reject",
        critical: true,
      })
      return
    }
    setDialog({
      title: "Request detail",
      description: `${request.authorEmployeeName} requested ${request.trainingName}. Need: ${request.trainingNeed}`,
      primaryLabel: "Close",
    })
  })

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Requests" variant="heading-large" as="h1" />
        <F0Text
          content={
            role === "admin"
              ? "Review employee requests and decide whether training should be approved."
              : "Training requests linked to courses you can access. Decisions stay read-only for this role."
          }
          variant="body"
        />
      </F0Box>
      <F0Box display="grid" columns="4" gap="md">
        <F0BigNumber label="Total" value={rows.length} />
        <F0BigNumber
          label="Pending"
          value={rows.filter((request) => request.status === "pending").length}
        />
        <F0BigNumber
          label="Approved"
          value={rows.filter((request) => request.status === "approved").length}
        />
        <F0BigNumber
          label="Estimated cost"
          value={bigCurrency(rows.reduce((total, request) => total + request.cost, 0))}
        />
      </F0Box>
      <OneDataCollection
        id={`training-access-${role}/requests/v1`}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Employee",
                  sorting: "employee",
                  render: (request) => ({ type: "text", value: request.authorEmployeeName }),
                },
                {
                  label: "Training",
                  sorting: "training",
                  render: (request) => ({ type: "text", value: request.trainingName }),
                },
                {
                  label: "Status",
                  render: (request) => ({
                    type: "status",
                    value: {
                      status: requestStatusVariant(request.status),
                      label: requestStatusLabel(request.status),
                    },
                  }),
                },
                {
                  label: "Cost",
                  sorting: "cost",
                  render: (request) => formatCurrency(request.cost),
                },
                {
                  label: "Schedule",
                  render: (request) => ({
                    type: "text",
                    value: `${formatDate(request.startDate)} - ${formatDate(request.endDate)}`,
                  }),
                },
                {
                  label: "Reviewer",
                  render: (request) => ({
                    type: "text",
                    value: request.reviewerEmployeeName ?? "Not assigned",
                  }),
                },
              ],
            },
          },
        ]}
      />
      {dialog && (
        <F0Dialog
          isOpen={true}
          onClose={() => setDialog(null)}
          position="center"
          width="md"
          title={dialog.title}
          description={dialog.description}
          primaryAction={{
            label: dialog.primaryLabel,
            variant: dialog.critical ? "critical" : "default",
            onClick: () => setDialog(null),
          }}
          secondaryAction={{
            label: dialog.cancelLabel ?? "Cancel",
            onClick: () => setDialog(null),
          }}
        />
      )}
    </F0Box>
  )
}

function AccessBudgetsList({ role }: { role: AccessRole }) {
  const [dialog, setDialog] = useState<SimpleDialog | null>(null)
  const source = useAccessBudgetsSource(trainingBudgets, role, (action, budget) => {
    if (action === "new") {
      setDialog({
        title: "New training budget",
        description: "Create a new budget for training spend. This prototype keeps the form as a modal confirmation.",
        primaryLabel: "Create budget",
      })
      return
    }
    if (action === "archive") {
      setDialog({
        title: "Archive budget",
        description: `Archive ${budget.name}? Historical spend remains accessible in Insights.`,
        primaryLabel: "Archive",
        critical: true,
      })
      return
    }
    setDialog({
      title: budget.name,
      description: `${budget.scopeName}: ${formatCurrency(budget.spentAmount)} spent, ${formatCurrency(budget.pendingAmount)} pending, ${formatCurrency(budget.remainingAmount)} remaining.`,
      primaryLabel: "Close",
    })
  })

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content="Budgets" variant="heading-large" as="h1" />
        <F0Text
          content={
            role === "admin"
              ? "Track training budget allocation, spend, pending approvals and remaining funds."
              : "Read-only budget visibility for the trainings you can access."
          }
          variant="body"
        />
      </F0Box>
      <F0Box display="grid" columns="4" gap="md">
        <F0BigNumber
          label="Total budget"
          value={bigCurrency(trainingBudgets.reduce((total, budget) => total + budget.totalAmount, 0))}
        />
        <F0BigNumber
          label="Spent"
          value={bigCurrency(trainingBudgets.reduce((total, budget) => total + budget.spentAmount, 0))}
        />
        <F0BigNumber
          label="Pending"
          value={bigCurrency(trainingBudgets.reduce((total, budget) => total + budget.pendingAmount, 0))}
        />
        <F0BigNumber
          label="Remaining"
          value={bigCurrency(trainingBudgets.reduce((total, budget) => total + budget.remainingAmount, 0))}
        />
      </F0Box>
      <OneDataCollection
        id={`training-access-${role}/budgets/v1`}
        source={source}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Budget",
                  sorting: "name",
                  render: (budget) => ({ type: "text", value: budget.name }),
                },
                {
                  label: "Year",
                  sorting: "year",
                  render: (budget) => ({ type: "number", value: budget.year }),
                },
                {
                  label: "Scope",
                  render: (budget) => ({ type: "text", value: budget.scopeName }),
                },
                {
                  label: "Total",
                  sorting: "total",
                  render: (budget) => formatCurrency(budget.totalAmount),
                },
                {
                  label: "Spent",
                  sorting: "spent",
                  render: (budget) => formatCurrency(budget.spentAmount),
                },
                {
                  label: "Pending",
                  render: (budget) => formatCurrency(budget.pendingAmount),
                },
                {
                  label: "Remaining",
                  render: (budget) => formatCurrency(budget.remainingAmount),
                },
                {
                  label: "Status",
                  render: (budget) => ({
                    type: "status",
                    value: {
                      status: budgetStatusVariant(budget.status),
                      label: budgetStatusLabel(budget.status),
                    },
                  }),
                },
                {
                  label: "Owner",
                  render: (budget) => ({ type: "text", value: budget.ownerEmployeeName }),
                },
              ],
            },
          },
        ]}
      />
      {dialog && (
        <F0Dialog
          isOpen={true}
          onClose={() => setDialog(null)}
          position="center"
          width="md"
          title={dialog.title}
          description={dialog.description}
          primaryAction={{
            label: dialog.primaryLabel,
            variant: dialog.critical ? "critical" : "default",
            onClick: () => setDialog(null),
          }}
          secondaryAction={{
            label: dialog.cancelLabel ?? "Cancel",
            onClick: () => setDialog(null),
          }}
        />
      )}
    </F0Box>
  )
}

function AccessInsights({ role }: { role: AccessRole }) {
  const [dialog, setDialog] = useState<InsightsExportDialog | null>(null)
  const aggregates = insightsAggregates
  const maxMonthly = Math.max(...aggregates.monthlyParticipants.map((item) => item.value))
  const maxCost = Math.max(...aggregates.costByCategory.map((item) => item.value))
  const maxDepartment = Math.max(...aggregates.participantsByDepartment.map((item) => item.value))
  const maxHours = Math.max(...aggregates.hoursByMonth.map((item) => item.value))

  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0Box display="flex" justifyContent="between" alignItems="start" gap="md">
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading content="Insights" variant="heading-large" as="h1" />
          <F0Text
            content="Overview of training activity, completion and spend for the current period."
            variant="body"
          />
        </F0Box>
        {role === "admin" && (
          <F0Button
            label="Export report"
            icon={Download}
            variant="outline"
            onClick={() =>
              setDialog({
                title: "Export insights report",
                description: "Export the current insights dashboard with charts, department breakdown and completion data.",
                primaryLabel: "Export report",
              })
            }
          />
        )}
      </F0Box>
      <F0Box display="grid" columns="4" gap="md">
        <F0BigNumber label="Trainings" value={aggregates.trainingsCount} />
        <F0BigNumber label="Participants" value={aggregates.participantsTotal} />
        <F0BigNumber label="Completion rate" value={bigPercentage(aggregates.completionRatePct)} />
        <F0BigNumber label="Total cost" value={bigCurrency(aggregates.totalCost)} />
      </F0Box>
      <F0Box display="grid" columns="2" gap="md">
        <InsightBars
          title="Participants by month"
          rows={aggregates.monthlyParticipants}
          max={maxMonthly}
        />
        <InsightBars
          title="Hours of training by month"
          rows={aggregates.hoursByMonth}
          max={maxHours}
          format={(value) => `${value} h`}
        />
        <InsightBars
          title="Cost by category"
          rows={aggregates.costByCategory}
          max={maxCost}
          format={formatCurrency}
        />
        <InsightBars
          title="Participants by department"
          rows={aggregates.participantsByDepartment}
          max={maxDepartment}
        />
      </F0Box>
      <F0Card title="Completion breakdown">
        <F0Box display="grid" columns="4" gap="md" padding="md">
          <F0BigNumber label="Completed" value={aggregates.participantsCompleted} />
          <F0BigNumber label="In progress" value={aggregates.participantsInProgress} />
          <F0BigNumber label="Expired" value={aggregates.participantsExpired} />
          <F0BigNumber label="Not started" value={aggregates.participantsNotStarted} />
        </F0Box>
      </F0Card>
      {dialog && (
        <F0Dialog
          isOpen={true}
          onClose={() => setDialog(null)}
          position="center"
          width="md"
          title={dialog.title}
          description={dialog.description}
          primaryAction={{ label: dialog.primaryLabel, onClick: () => setDialog(null) }}
          secondaryAction={{ label: "Cancel", onClick: () => setDialog(null) }}
        />
      )}
    </F0Box>
  )
}

function InsightBars({
  title,
  rows,
  max,
  format = String,
}: {
  title: string
  rows: { name?: string; month?: string; value: number }[]
  max: number
  format?: (value: number) => string
}) {
  return (
    <F0Card title={title}>
      <F0Box display="flex" flexDirection="column" gap="sm" padding="md">
        {rows.map((row) => {
          const label = row.name ?? row.month ?? "-"
          const width = max === 0 ? 0 : Math.round((row.value / max) * 100)
          return (
            <F0Box key={label} display="flex" flexDirection="column" gap="xs">
              <F0Box display="flex" justifyContent="between" gap="sm">
                <F0Text content={label} variant="small" />
                <F0Text content={format(row.value)} variant="small" />
              </F0Box>
              <F0Text content={`${width}% of peak`} variant="small" />
            </F0Box>
          )
        })}
      </F0Box>
    </F0Card>
  )
}

function requestStatusLabel(status: TrainingRequest["status"]) {
  if (status === "pending") return "Pending"
  if (status === "approved") return "Approved"
  if (status === "rejected") return "Rejected"
  if (status === "in_review") return "In review"
  return "Cancelled"
}

function requestStatusVariant(status: TrainingRequest["status"]) {
  if (status === "approved") return "positive" as const
  if (status === "pending" || status === "in_review") return "warning" as const
  if (status === "rejected") return "critical" as const
  return "neutral" as const
}

function budgetStatusLabel(status: TrainingBudget["status"]) {
  if (status === "active") return "Active"
  if (status === "exceeded") return "Exceeded"
  if (status === "draft") return "Draft"
  return "Closed"
}

function budgetStatusVariant(status: TrainingBudget["status"]) {
  if (status === "active") return "positive" as const
  if (status === "exceeded") return "critical" as const
  if (status === "draft") return "neutral" as const
  return "info" as const
}

function useAccessRequestsSource(
  rows: TrainingRequest[],
  role: AccessRole,
  onAction: (action: "open" | "approve" | "reject", request: TrainingRequest) => void
) {
  return useDataCollectionSource<TrainingRequest>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "pending", label: "Pending" },
              { value: "in_review", label: "In review" },
              { value: "approved", label: "Approved" },
              { value: "rejected", label: "Rejected" },
            ],
          },
        },
      },
      presets: [
        { label: "Pending", filter: { status: ["pending"] } },
        { label: "In review", filter: { status: ["in_review"] } },
      ],
      sortings: {
        employee: { label: "Employee" },
        training: { label: "Training" },
        cost: { label: "Cost" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows
            .filter((request) =>
              statusFilter.length === 0 ? true : statusFilter.includes(request.status)
            )
            .filter((request) =>
              term === ""
                ? true
                : `${request.authorEmployeeName} ${request.trainingName} ${request.providerName ?? ""}`
                    .toLowerCase()
                    .includes(term)
            )
          const sorted = applySort(filtered, sortings, (request, field) => {
            if (field === "employee") return request.authorEmployeeName.toLowerCase()
            if (field === "training") return request.trainingName.toLowerCase()
            if (field === "cost") return request.cost
            return null
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      itemActions: (request) => [
        { label: "Open", icon: ArrowRight, onClick: () => onAction("open", request) },
        ...(role === "admin" && request.status !== "approved"
          ? [
              {
                label: "Approve",
                icon: Check,
                onClick: () => onAction("approve", request),
              },
            ]
          : []),
        ...(role === "admin" && request.status !== "rejected"
          ? [
              {
                label: "Reject",
                icon: Delete,
                onClick: () => onAction("reject", request),
                critical: true,
              },
            ]
          : []),
      ],
    },
    [rows, role, onAction]
  )
}

function useAccessBudgetsSource(
  rows: TrainingBudget[],
  role: AccessRole,
  onAction: (action: "open" | "new" | "archive", budget: TrainingBudget) => void
) {
  return useDataCollectionSource<TrainingBudget>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Active" },
              { value: "exceeded", label: "Exceeded" },
              { value: "draft", label: "Draft" },
              { value: "closed", label: "Closed" },
            ],
          },
        },
      },
      presets: [
        { label: "Active", filter: { status: ["active"] } },
        { label: "Exceeded", filter: { status: ["exceeded"] } },
      ],
      sortings: {
        name: { label: "Name" },
        year: { label: "Year" },
        total: { label: "Total" },
        spent: { label: "Spent" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 20,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()
          const filtered = rows
            .filter((budget) =>
              statusFilter.length === 0 ? true : statusFilter.includes(budget.status)
            )
            .filter((budget) =>
              term === ""
                ? true
                : `${budget.name} ${budget.scopeName} ${budget.ownerEmployeeName}`
                    .toLowerCase()
                    .includes(term)
            )
          const sorted = applySort(filtered, sortings, (budget, field) => {
            if (field === "name") return budget.name.toLowerCase()
            if (field === "year") return budget.year
            if (field === "total") return budget.totalAmount
            if (field === "spent") return budget.spentAmount
            return null
          })
          const perPage = pagination?.perPage ?? 20
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage
          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      ...(role === "admin"
        ? {
            primaryActions: () => ({
              label: "New budget",
              icon: Money,
              onClick: () => onAction("new", rows[0]),
            }),
          }
        : {}),
      itemActions: (budget) => [
        { label: "Open", icon: ArrowRight, onClick: () => onAction("open", budget) },
        ...(role === "admin" && budget.status !== "closed"
          ? [
              {
                label: "Archive",
                icon: EyeInvisible,
                onClick: () => onAction("archive", budget),
                critical: true,
              },
            ]
          : []),
      ],
    },
    [rows, role, onAction]
  )
}

function AccessCoursesList({
  baseHref,
  role,
  rows,
  onAdd,
  onSelect,
}: {
  baseHref: string
  role: AccessRole
  rows: Training[]
  onAdd: () => void
  onSelect: (training: Training) => void
}) {
  const [bulkAction, setBulkAction] = useState<{
    kind: BulkActionKind
    count: number
    clear: () => void
  } | null>(null)
  const [dialog, setDialog] = useState<SimpleDialog | null>(null)

  const handleAction = (action: TrainingsListAction) => {
    switch (action.kind) {
      case "export":
        setDialog({
          title: "Export training report",
          description:
            "The export has been queued, you will find it in your documents when completed.",
          primaryLabel: "Export",
        })
        break
      case "import":
        setDialog({
          title: "Course and participant import",
          description: "Import a CSV or Excel file.",
          primaryLabel: "Choose file",
        })
        break
      case "import-courses":
        setDialog({
          title: "Course import",
          description: "Import a CSV or Excel file.",
          primaryLabel: "Choose file",
        })
        break
      case "duplicate":
        setDialog({
          title: "Duplicate",
          description: "Select everything you want to duplicate.",
          primaryLabel: "Duplicate",
        })
        break
      case "toggle-catalog":
        setDialog({
          title: "Update catalog",
          description: action.training.catalog
            ? "Do you want to remove this course from the catalog? Once you do that the employees won't be able to request enter this course."
            : "Do you want to add this course to the catalog? Once you do that the employees will be able to request enter this course.",
          primaryLabel: "Confirm",
        })
        break
      case "delete":
        setDialog({
          title: "Delete course",
          description: "Are you sure you want to delete this course?",
          primaryLabel: "Yes",
          cancelLabel: "Return to the list",
          critical: true,
        })
        break
    }
  }

  const source = useAccessTrainingsSource(rows, baseHref, role, onAdd, onSelect, handleAction)

  return (
    <>
      <OneDataCollection
        id={`training-access-${role}/courses-list/v1`}
        source={source}
        onBulkAction={
          role === "admin"
            ? (action, selected, clearSelected) => {
                const allSelected = "allSelected" in selected && selected.allSelected
                const count = allSelected
                  ? selected.itemsStatus.length
                  : selected.itemsStatus.filter((item) =>
                      "checked" in item ? item.checked : false
                    ).length
                const kind: BulkActionKind = action === "display-catalog"
                  ? "show-catalog"
                  : action === "hide-catalog"
                    ? "hide-catalog"
                    : action === "delete"
                      ? "delete"
                      : "export"
                setBulkAction({ kind, count, clear: clearSelected })
              }
            : undefined
        }
        visualizations={[
          {
            type: "table",
            options: {
              frozenColumns: 1,
              allowColumnHiding: true,
              columns: [
                {
                  label: "Name",
                  sorting: "name",
                  render: (item) => ({ type: "text", value: item.name }),
                },
                {
                  label: "Code",
                  render: (item) => ({ type: "text", value: item.code ?? "-" }),
                },
                {
                  label: "Participants",
                  render: (item) => ({ type: "number", value: item.participantCount }),
                },
                {
                  label: "Validity expired",
                  render: (item) => ({
                    type: "status",
                    value: {
                      status: item.expiredParticipantCount > 0 ? "warning" : "positive",
                      label: `${item.expiredParticipantCount} people`,
                    },
                  }),
                },
                {
                  label: "Catalog",
                  render: (item) =>
                    item.catalog
                      ? { type: "icon", value: { icon: EyeVisible, label: "In catalog" } }
                      : { type: "text", value: "-" },
                },
                {
                  label: "Status",
                  render: (item) => ({
                    type: "status",
                    value: {
                      status: item.status === "active" ? "positive" : "neutral",
                      label: item.status === "active" ? "Published" : "Draft",
                    },
                  }),
                },
                {
                  label: "Type",
                  render: (item) => ({
                    type: "tag",
                    value: {
                      label: item.isMandatory ? "Mandatory" : "Non-mandatory",
                    },
                  }),
                },
                {
                  label: "Tags",
                  width: 400,
                  render: (item) => ({
                    type: "tagList",
                    value: {
                      type: "raw",
                      tags: item.categories.map((category) => ({ text: category.name })),
                      max: 3,
                    },
                  }),
                },
                {
                  label: "Axes",
                  width: 400,
                  render: (item) => ({
                    type: "tagList",
                    value: {
                      type: "raw",
                      tags: (item.axes ?? []).map((axis) => ({ text: axis.name })),
                      max: 3,
                    },
                  }),
                },
                {
                  label: "Competencies",
                  width: 400,
                  render: (item) => ({
                    type: "tagList",
                    value: {
                      type: "raw",
                      tags: (item.competencyIds ?? [])
                        .map((id) => competencies.find((competency) => competency.id === id))
                        .filter((competency): competency is { id: string; name: string } =>
                          Boolean(competency)
                        )
                        .map((competency) => ({ text: competency.name })),
                      max: 3,
                    },
                  }),
                },
              ],
            },
          },
        ]}
      />

      <BulkActionModal
        open={bulkAction !== null}
        kind={bulkAction?.kind ?? "delete"}
        count={bulkAction?.count ?? 0}
        onClose={() => {
          bulkAction?.clear()
          setBulkAction(null)
        }}
      />

      {dialog && (
        <F0Dialog
          isOpen={true}
          onClose={() => setDialog(null)}
          position="center"
          width="md"
          title={dialog.title}
          description={dialog.description}
          primaryAction={{
            label: dialog.primaryLabel,
            variant: dialog.critical ? "critical" : "default",
            onClick: () => setDialog(null),
          }}
          secondaryAction={{
            label: dialog.cancelLabel ?? "Cancel",
            onClick: () => setDialog(null),
          }}
        />
      )}
    </>
  )
}

function useAccessTrainingsSource(
  rows: Training[],
  baseHref: string,
  role: AccessRole,
  onAdd: () => void,
  onSelect: (training: Training) => void,
  onAction: (action: TrainingsListAction) => void
) {
  return useDataCollectionSource<Training>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "active", label: "Published" },
              { value: "draft", label: "Draft" },
            ],
          },
        },
        competencies: {
          type: "in",
          label: "Competencies",
          options: {
            options: competencies.map((competency) => ({
              value: competency.id,
              label: competency.name,
            })),
          },
        },
        categories: {
          type: "in",
          label: "Tags",
          options: {
            options: [
              { value: "Leadership", label: "Leadership" },
              { value: "Technical Skills", label: "Technical Skills" },
              { value: "Compliance", label: "Compliance" },
              { value: "Soft Skills", label: "Soft Skills" },
              { value: "Onboarding", label: "Onboarding" },
              { value: "Health & Safety", label: "Health & Safety" },
            ],
          },
        },
        axes: {
          type: "in",
          label: "Axes",
          options: {
            options: trainingAxes.map((axis) => ({ value: axis.id, label: axis.name })),
          },
        },
        employee: {
          type: "in",
          label: "Participant",
          options: {
            options: employees.slice(0, 20).map((employee) => ({
              value: employee.id,
              label: employee.fullName,
            })),
          },
        },
        isMandatory: {
          type: "in",
          label: "Type",
          options: {
            options: [
              { value: "mandatory", label: "Mandatory" },
              { value: "non_mandatory", label: "Non-mandatory" },
            ],
          },
        },
      },
      presets: [
        { label: "Validity expired", filter: { expiration: ["expired"] } },
        { label: "Published", filter: { status: ["active"] } },
      ],
      sortings: {
        name: { label: "Name" },
        year: { label: "Year" },
      },
      dataAdapter: {
        paginationType: "pages",
        perPage: 30,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const statusFilter = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const competencyFilter = Array.isArray(filters?.competencies)
            ? (filters.competencies as string[])
            : []
          const isMandatoryFilter = Array.isArray(filters?.isMandatory)
            ? (filters.isMandatory as string[])
            : []
          const categoryFilter = Array.isArray(filters?.categories)
            ? (filters.categories as string[])
            : []
          const axesFilter = Array.isArray(filters?.axes)
            ? (filters.axes as string[])
            : []
          const employeeFilter = Array.isArray(filters?.employee)
            ? (filters.employee as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = rows
            .filter((training) =>
              statusFilter.length === 0 ? true : statusFilter.includes(training.status)
            )
            .filter((training) => {
              if (competencyFilter.length === 0) return true
              return (training.competencyIds ?? []).some((id) =>
                competencyFilter.includes(id)
              )
            })
            .filter((training) => {
              if (isMandatoryFilter.length === 0) return true
              if (isMandatoryFilter.includes("mandatory") && training.isMandatory) return true
              if (isMandatoryFilter.includes("non_mandatory") && !training.isMandatory) {
                return true
              }
              return false
            })
            .filter((training) => {
              if (categoryFilter.length === 0) return true
              return training.categories.some((category) =>
                categoryFilter.includes(category.name)
              )
            })
            .filter((training) => {
              if (axesFilter.length === 0) return true
              return (training.axes ?? []).some((axis) => axesFilter.includes(axis.id))
            })
            .filter((training) => {
              if (employeeFilter.length === 0) return true
              return employeeFilter.some((id) =>
                training.participantAvatars.some((participant) => participant.src.includes(id))
              )
            })
            .filter((training) =>
              term === "" ? true : training.name.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (training, field) => {
            if (field === "name") return training.name.toLowerCase()
            if (field === "year") return training.year
            return null
          })

          const perPage = pagination?.perPage ?? 30
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      itemUrl: (item) => `${baseHref}?training=${item.id}`,
      ...(role === "admin"
        ? {
            primaryActions: () => ({
              label: "New course",
              icon: Add,
              onClick: onAdd,
            }),
            secondaryActions: {
              expanded: 0,
              actions: () => [
                {
                  label: "Export",
                  description: "Download trainings as CSV",
                  icon: Upload,
                  onClick: () => onAction({ kind: "export" }),
                },
                {
                  label: "Import",
                  description: "Import trainings from CSV",
                  icon: Download,
                  onClick: () => onAction({ kind: "import" }),
                },
                {
                  label: "Import courses",
                  description: "Bulk-import courses from a provider",
                  icon: Download,
                  onClick: () => onAction({ kind: "import-courses" }),
                },
              ],
            },
            selectable: (item: Training) => item.id,
            bulkActions: () => ({
              primary: [
                { id: "display-catalog", label: "Add to catalog" },
                { id: "hide-catalog", label: "Remove from catalog" },
                { id: "export", label: "Export to CSV" },
              ],
              secondary: [{ id: "delete", label: "Delete" }],
            }),
          }
        : {}),
      itemActions: (item) => [
        { label: "Open", icon: ArrowRight, onClick: () => onSelect(item) },
        ...(role === "admin"
          ? [
              {
                label: "Duplicate",
                icon: LayersFront,
                onClick: () => onAction({ kind: "duplicate", training: item }),
              },
              ...(item.status !== "draft"
                ? [
                    item.catalog
                      ? {
                          label: "Remove from catalog",
                          icon: EyeInvisible,
                          onClick: () => onAction({ kind: "toggle-catalog", training: item }),
                        }
                      : {
                          label: "Add to catalog",
                          icon: EyeVisible,
                          onClick: () => onAction({ kind: "toggle-catalog", training: item }),
                        },
                  ]
                : []),
              {
                label: "Delete",
                icon: Delete,
                onClick: () => onAction({ kind: "delete", training: item }),
                critical: true,
              },
            ]
          : []),
      ],
    },
    [rows, baseHref, role, onAdd, onSelect, onAction]
  )
}
