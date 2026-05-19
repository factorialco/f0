import type { ReactNode } from "react"

import { ComponentProps } from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { F0Button } from "@/components/F0Button"
import { ArrowLeft } from "@/icons/app"
import { Breadcrumbs } from "@/experimental/Navigation/Header/Breadcrumbs"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import { Page } from "@/patterns/Navigation/Page"
import { Tabs, TabItem } from "@/patterns/Navigation/Tabs"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
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

const CRUD_MODULE = {
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

export function createResourceDataAdapter(resources: Resource[]) {
  return {
    fetchData: () => Promise.resolve({ records: resources }),
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

export function ExampleField({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <label className="flex flex-col gap-1 text-sm text-f1-foreground">
      <span className="font-medium">{label}</span>
      <input
        className="rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2 text-f1-foreground"
        defaultValue={value}
      />
    </label>
  )
}

export function ResourceForm({
  resource = initialResources[0],
  mode,
}: {
  resource?: Resource
  mode: "create" | "update"
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-f1-foreground-secondary">
        {mode === "create"
          ? "Collect the fields needed to create the item in the collection."
          : "Reuse the same fields and validation rules when the user edits the same information later."}
      </p>
      <ExampleField
        label="Name"
        value={mode === "create" ? "New resource" : resource.name}
      />
      <ExampleField label="Owner" value={resource.owner} />
      <ExampleField label="Status" value={resource.status} />
    </div>
  )
}

export function LightweightCreateForm() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-f1-foreground-secondary">
        Collect the minimum required fields, then let users decide whether to
        return to the collection or continue into the full resource.
      </p>
      <ExampleField label="Provider" value="Factorial Payroll" />
      <ExampleField label="Owner" value="People Ops" />
    </div>
  )
}

export function ResourceSummary({ resource }: { resource: Resource }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h3 className="text-lg font-semibold text-f1-foreground">
          {resource.name}
        </h3>
        <p className="text-sm text-f1-foreground-secondary">
          {resource.summary}
        </p>
      </div>
      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="font-medium text-f1-foreground-secondary">Owner</dt>
          <dd className="text-f1-foreground">{resource.owner}</dd>
        </div>
        <div>
          <dt className="font-medium text-f1-foreground-secondary">Status</dt>
          <dd className="text-f1-foreground">{resource.status}</dd>
        </div>
      </dl>
    </div>
  )
}

export function ResourcePage({
  resource,
  onBack,
  title = "Complete resource setup",
}: {
  resource: Resource
  onBack: () => void
  title?: string
}) {
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumbs
        breadcrumbs={[
          { id: "settings", label: "Settings", href: "/settings" },
          {
            id: "resources",
            label: "Resources",
            href: "/settings/resources",
          },
          { id: resource.id, label: resource.name },
        ]}
      />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-f1-foreground">{title}</h2>
          <p className="mt-1 text-sm text-f1-foreground-secondary">
            Complex resources use page-level navigation when users need tabs,
            steps, configuration, or long-form content.
          </p>
        </div>
        <F0Button
          label="Back to collection"
          icon={ArrowLeft}
          variant="outline"
          onClick={onBack}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-[240px_1fr]">
        <aside className="rounded-md border border-solid border-f1-border-secondary p-4">
          <h3 className="font-semibold text-f1-foreground">Setup steps</h3>
          <ol className="mt-3 flex list-decimal flex-col gap-2 pl-4 text-sm text-f1-foreground-secondary">
            <li>Basic information</li>
            <li>Provider credentials</li>
            <li>Field mapping</li>
            <li>Review and activate</li>
          </ol>
        </aside>
        <section className="rounded-md border border-solid border-f1-border-secondary p-4">
          <h3 className="font-semibold text-f1-foreground">{resource.name}</h3>
          <p className="mt-2 text-sm text-f1-foreground-secondary">
            {resource.summary}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <ExampleField label="Owner" value={resource.owner} />
            <ExampleField label="Status" value={resource.status} />
          </div>
        </section>
      </div>
    </div>
  )
}
