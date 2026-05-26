import { useState } from "react"
import { F0Dialog } from "@factorialco/f0-react"
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
  Delete,
  Download,
  EyeInvisible,
  EyeVisible,
  LayersFront,
  Upload,
} from "@factorialco/f0-react/icons/app"
import { useNavigate, useSearchParams } from "react-router-dom"

import {
  competencies,
  employees,
  trainingAxes,
  trainings,
  type Training,
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

const listTabs: { id: ListTabId; label: string }[] = [
  { id: "courses", label: "All courses" },
  { id: "categories", label: "Tags" },
  { id: "axes", label: "Axes" },
  { id: "survey_templates", label: "Survey Templates" },
]

const VALID_LIST_TABS = new Set<string>(listTabs.map((tab) => tab.id))

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
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [showNewTraining, setShowNewTraining] = useState(false)

  const rawListTab = searchParams.get("ltab")
  const activeListTab: ListTabId = rawListTab && VALID_LIST_TABS.has(rawListTab)
    ? (rawListTab as ListTabId)
    : "courses"

  const setListTab = (id: string) => {
    const next = new URLSearchParams()
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
                onClick: () => navigate(tab.id === "trainings" ? baseHref : tab.href),
              }))}
              activeTabId="trainings"
            />
            <Tabs
              tabs={listTabs.map((tab) => ({
                id: tab.id,
                label: tab.label,
                onClick: () => setListTab(tab.id),
              }))}
              activeTabId={activeListTab}
              secondary
            />
          </>
        }
      >
        <PageContent>
          {activeListTab === "courses" && (
            <AccessCoursesList
              baseHref={baseHref}
              role={role}
              rows={getRows(trainingIds)}
              onAdd={() => setShowNewTraining(true)}
              onSelect={goToDetail}
            />
          )}
          {activeListTab === "categories" && <CategoriesTab />}
          {activeListTab === "axes" && <AxesTab />}
          {activeListTab === "survey_templates" && <SurveyTemplatesTab />}
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
                  ? "display-catalog"
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
      primaryActions: () => ({
        label: "New course",
        icon: Add,
        ...(role === "admin"
          ? { onClick: onAdd }
          : {
              disabled: true,
              description: "Only admins can create courses.",
            }),
      }),
      secondaryActions: {
        expanded: 0,
        actions: () => [
          {
            label: "Export",
            description:
              role === "admin"
                ? "Download trainings as CSV"
                : "Only admins can export training data.",
            icon: Upload,
            ...(role === "admin"
              ? { onClick: () => onAction({ kind: "export" as const }) }
              : { disabled: true }),
          },
          {
            label: "Import",
            description:
              role === "admin"
                ? "Import trainings from CSV"
                : "Only admins can import trainings.",
            icon: Download,
            ...(role === "admin"
              ? { onClick: () => onAction({ kind: "import" as const }) }
              : { disabled: true }),
          },
          {
            label: "Import courses",
            description:
              role === "admin"
                ? "Bulk-import courses from a provider"
                : "Only admins can import courses.",
            icon: Download,
            ...(role === "admin"
              ? { onClick: () => onAction({ kind: "import-courses" as const }) }
              : { disabled: true }),
          },
        ],
      },
      ...(role === "admin"
        ? {
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
