import type { MutableRefObject, ReactNode } from "react"

import { ComponentProps } from "react"
import { z } from "zod"

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Add, Download, EllipsisHorizontal } from "@/icons/app"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import { f0FormField, F0Form, F0FormRef } from "@/patterns/F0Form"
import { Page } from "@/patterns/Navigation/Page"
import { Tabs, TabItem } from "@/patterns/Navigation/Tabs"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import type { FiltersDefinition } from "@/patterns/OneFilterPicker"
import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"

import type { ItemActionsDefinition } from "../../item-actions"
import type { NavigationFiltersDefinition } from "../../navigationFilters/types"
import type { SummariesDefinition } from "../../summary"
import type { Visualization } from "../../visualizations/collection/types"

export type ResourceStatus = "Draft" | "Complete" | "Needs details"

export type Resource = {
  id: string
  name: string
  owner: string
  status: ResourceStatus
  summary: string
}

export const resourceFilters = {
  status: {
    type: "in" as const,
    label: "Status",
    options: {
      options: [
        { value: "Draft", label: "Draft" },
        { value: "Needs details", label: "Needs details" },
        { value: "Complete", label: "Complete" },
      ],
    },
  },
  owner: {
    type: "in" as const,
    label: "Owner",
    options: {
      options: [
        { value: "Alicia Keys", label: "Alicia Keys" },
        { value: "Dani Moreno", label: "Dani Moreno" },
        { value: "Marta Soler", label: "Marta Soler" },
        { value: "Nora Park", label: "Nora Park" },
      ],
    },
  },
}

export const initialResources: Resource[] = [
  {
    id: "resource-1",
    name: "Payroll integration",
    owner: "Alicia Keys",
    status: "Needs details",
    summary: "Configure payroll provider, mapping, and export settings.",
  },
  {
    id: "resource-2",
    name: "Engineering onboarding",
    owner: "Dani Moreno",
    status: "Draft",
    summary: "Checklist for laptop, accounts, and first-week sessions.",
  },
  {
    id: "resource-3",
    name: "Performance review cycle",
    owner: "Marta Soler",
    status: "Complete",
    summary: "Review window, calibration, and employee communications.",
  },
  {
    id: "resource-4",
    name: "Security access review",
    owner: "Nora Park",
    status: "Draft",
    summary: "Quarterly review for sensitive systems and permissions.",
  },
]

const CRUD_TABS: TabItem[] = [
  { label: "Overview", href: "/", index: true },
  { label: "Details", href: "/details" },
  { label: "Activity", href: "/activity" },
  { label: "Settings", href: "/settings" },
]

export const CRUD_MODULE = {
  id: "ats" as const,
  name: "Recruitment",
  href: "/recruitment",
}

export type CrudVisualization = Visualization<
  Resource,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Resource>,
  NavigationFiltersDefinition,
  GroupingDefinition<Resource>
>

type CrudCardVisualization = Extract<CrudVisualization, { type: "card" }>
type CrudKanbanVisualization = Extract<CrudVisualization, { type: "kanban" }>
type CrudEditableTableVisualization = Extract<
  CrudVisualization,
  { type: "editableTable" }
>

export const tableVisualization: CrudVisualization = {
  type: "table",
  options: {
    columns: [
      { label: "Name", render: (item) => item.name },
      { label: "Owner", render: (item) => item.owner },
      { label: "Status", render: (item) => item.status },
      { label: "Summary", render: (item) => item.summary },
    ],
  },
}

export const listVisualization: CrudVisualization = {
  type: "list",
  options: {
    itemDefinition: (item) => ({
      title: item.name,
      description: [item.summary],
    }),
    fields: [
      { label: "Owner", render: (item) => item.owner },
      { label: "Status", render: (item) => item.status },
    ],
  },
}

export const cardVisualization: CrudCardVisualization = {
  type: "card",
  options: {
    title: (item) => item.name,
    description: (item) => item.summary,
    cardProperties: [
      { label: "Owner", render: (item) => item.owner },
      { label: "Status", render: (item) => item.status },
    ],
  },
}

export const kanbanSourceLanes = [
  { id: "draft", filters: { status: ["Draft"] } },
  { id: "needs-details", filters: { status: ["Needs details"] } },
  { id: "complete", filters: { status: ["Complete"] } },
]

const kanbanLaneStatus: Record<string, Resource["status"]> = {
  draft: "Draft",
  "needs-details": "Needs details",
  complete: "Complete",
}

export const kanbanVisualization: CrudKanbanVisualization = {
  type: "kanban",
  options: {
    lanes: [
      { id: "draft", title: "Draft", variant: "neutral" },
      { id: "needs-details", title: "Needs details", variant: "warning" },
      { id: "complete", title: "Complete", variant: "positive" },
    ],
    title: (item) => item.name,
    description: (item) => item.summary,
    metadata: (item) => [
      {
        icon: Add,
        property: { type: "text", label: "Owner", value: item.owner },
      },
    ],
    onMove: async (_fromLaneId, toLaneId, sourceRecord) => ({
      ...sourceRecord,
      status: kanbanLaneStatus[toLaneId] ?? sourceRecord.status,
    }),
  },
}

export const editableTableVisualization: CrudEditableTableVisualization = {
  type: "editableTable",
  options: {
    columns: [
      {
        id: "name",
        label: "Name",
        render: (item) => item.name,
        editType: () => "text",
      },
      {
        id: "owner",
        label: "Owner",
        render: (item) => item.owner,
        editType: () => "text",
      },
      {
        id: "status",
        label: "Status",
        render: (item) => item.status,
        editType: () => "display-only",
      },
      {
        id: "summary",
        label: "Summary",
        render: (item) => item.summary,
        editType: () => "text",
      },
    ],
    onCellChange: async () => {},
  },
}

export function createResourceDataAdapter(resources: Resource[]) {
  return {
    fetchData: ({
      filters,
    }: {
      filters: Partial<Record<keyof typeof resourceFilters, string[]>>
    }) =>
      Promise.resolve({
        records: resources.filter((resource) => {
          const matchesStatus =
            !filters.status?.length || filters.status.includes(resource.status)
          const matchesOwner =
            !filters.owner?.length || filters.owner.includes(resource.owner)

          return matchesStatus && matchesOwner
        }),
      }),
  }
}

export function defaultCrudPrimaryAction(onClick: () => void) {
  return {
    label: "Create resource",
    icon: Add,
    onClick,
  }
}

export function defaultCrudSecondaryActions() {
  return {
    expanded: 0 as const,
    actions: () => [
      {
        label: "Export",
        icon: Download,
        onClick: () => {},
      },
      {
        label: "More actions",
        icon: EllipsisHorizontal,
        onClick: () => {},
      },
    ],
  }
}

export function CrudPatternLayout({ children }: { children: ReactNode }) {
  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as Partial<
        ComponentProps<typeof ApplicationFrame>
      >)}
      sidebar={<Sidebar {...SidebarStories.default.args} />}
    >
      <Page
        header={
          <>
            <PageHeader module={CRUD_MODULE} />
            <Tabs tabs={CRUD_TABS} />
          </>
        }
      >
        <StandardLayout>{children}</StandardLayout>
      </Page>
    </ApplicationFrame>
  )
}

export function CrudContentPlaceholder({
  minHeight = "min-h-48",
}: {
  minHeight?: string
}) {
  return (
    <div className={`${minHeight} rounded-xl bg-f1-background-secondary`} />
  )
}

const STATUS_OPTIONS = [
  { value: "Draft", label: "Draft" },
  { value: "Complete", label: "Complete" },
  { value: "Needs details", label: "Needs details" },
]

export type ResourceFormData = {
  name: string
  owner: string
  status: string
}

export function ResourceFormF0({
  resource,
  mode,
  formRef,
  onSuccess,
}: {
  resource?: Resource
  mode: "create" | "update"
  formRef: MutableRefObject<F0FormRef | null>
  onSuccess: (data: ResourceFormData) => void
}) {
  const schema = z.object({
    name: f0FormField.text({
      label: "Name",
      placeholder: "Resource name",
      minLength: 1,
    }),
    owner: f0FormField.text({
      label: "Owner",
      placeholder: "Owner name",
    }),
    status: f0FormField.select({
      label: "Status",
      options: STATUS_OPTIONS,
      placeholder: "Select status",
    }),
  })

  const formDefinition = useF0FormDefinition({
    name: `resource-${mode}`,
    schema,
    defaultValues: {
      name: mode === "create" ? "" : (resource?.name ?? ""),
      owner: resource?.owner ?? "",
      status: resource?.status,
    },
    onSubmit: async ({ data }) => {
      onSuccess(data as ResourceFormData)
      return { success: true }
    },
    submitConfig: { type: "default", hideSubmitButton: true },
  })

  return <F0Form formDefinition={formDefinition} formRef={formRef} />
}

export function WizardStepBasic() {
  const schema = z.object({
    planName: f0FormField.text({
      label: "Plan name",
      placeholder: "e.g. Engineering onboarding",
      minLength: 1,
    }),
    description: f0FormField.textarea({
      label: "Description",
      helpText: "Brief explanation of the plan's purpose",
      optional: true,
      rows: 3,
    }),
  })

  const formDefinition = useF0FormDefinition({
    name: "wizard-step-basic",
    schema,
    defaultValues: { planName: "Onboarding plan", description: "" },
    onSubmit: async () => ({ success: true }),
    submitConfig: { type: "default", hideSubmitButton: true },
  })

  return <F0Form formDefinition={formDefinition} />
}

export function WizardStepAssignments() {
  const schema = z.object({
    team: f0FormField.text({
      label: "Team",
      placeholder: "e.g. People team",
    }),
    responsible: f0FormField.text({
      label: "Responsible",
      placeholder: "e.g. Marta Soler",
      optional: true,
    }),
  })

  const formDefinition = useF0FormDefinition({
    name: "wizard-step-assignments",
    schema,
    defaultValues: { team: "People team", responsible: "" },
    onSubmit: async () => ({ success: true }),
    submitConfig: { type: "default", hideSubmitButton: true },
  })

  return <F0Form formDefinition={formDefinition} />
}
