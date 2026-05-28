import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { ChevronRight, Download, Files, Pencil } from "@/icons/app"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import { F0Dialog } from "@/patterns/F0Dialog"
import { Page as NavigationPage } from "@/patterns/Navigation/Page"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  cardVisualization,
  createResourceDataAdapter,
  CRUD_MODULE,
  CrudContentPlaceholder,
  CrudPatternLayout,
  defaultCrudPrimaryAction,
  defaultCrudSecondaryActions,
  initialResources,
  kanbanSourceLanes,
  kanbanVisualization,
  listVisualization,
  Resource,
  resourceFilters,
  type CrudVisualization,
  tableVisualization,
} from "../shared"

const meta = {
  title: "Data collection/CRUD patterns/Read",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function statusVariant(status: Resource["status"]) {
  if (status === "Complete") return "positive"
  if (status === "Needs details") return "warning"
  return "neutral"
}

function ResourcePageView({ resourcePage }: { resourcePage: Resource }) {
  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as Partial<
        ComponentProps<typeof ApplicationFrame>
      >)}
      sidebar={<Sidebar {...SidebarStories.default.args} />}
    >
      <NavigationPage
        header={
          <>
            <PageHeader
              module={CRUD_MODULE}
              breadcrumbs={[{ id: resourcePage.id, label: resourcePage.name }]}
            />
            <ResourceHeader
              title={resourcePage.name}
              description={resourcePage.summary}
              status={{
                label: "Status",
                text: resourcePage.status,
                variant: statusVariant(resourcePage.status),
              }}
              primaryAction={{
                label: "Save",
                onClick: () => {},
              }}
              secondaryActions={[
                {
                  label: "Edit",
                  icon: Pencil,
                  onClick: () => {},
                },
                {
                  label: "Export",
                  icon: Download,
                  hideLabel: true,
                  onClick: () => {},
                },
              ]}
              metadata={[
                {
                  label: "Owner",
                  value: { type: "text", content: resourcePage.owner },
                },
              ]}
            />
          </>
        }
      >
        <StandardLayout>
          <CrudContentPlaceholder minHeight="min-h-80" />
        </StandardLayout>
      </NavigationPage>
    </ApplicationFrame>
  )
}

function ResourceDialogPreview() {
  return (
    <div className="flex h-full flex-col p-4">
      <CrudContentPlaceholder minHeight="h-[calc(95dvh-12.5rem)]" />
    </div>
  )
}

function DefaultDialogScenario() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setSelectedResource(item),
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Resource details"
        description="The default read pattern opens the item in a dialog."
        primaryAction={{
          label: "Primary Action",
          onClick: () => {},
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setSelectedResource(null),
        }}
      >
        {selectedResource && <CrudContentPlaceholder minHeight="min-h-56" />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function VisualizationDialogScenario({
  visualization,
  withLanes = false,
}: {
  visualization: CrudVisualization
  withLanes?: boolean
}) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    lanes: withLanes ? kanbanSourceLanes : undefined,
    itemOnClick: (item) => () => setSelectedResource(item),
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection source={source} visualizations={[visualization]} />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        title="Resource details"
        description="The item surface opens a focused read dialog. Use a page instead when the resource needs durable navigation."
        primaryAction={{
          label: "Primary Action",
          onClick: () => {},
        }}
        secondaryAction={{
          label: "Close",
          onClick: () => setSelectedResource(null),
        }}
      >
        {selectedResource && <CrudContentPlaceholder minHeight="min-h-56" />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function OpenAsPageScenario({
  visualization = tableVisualization,
}: {
  visualization?: CrudVisualization
}) {
  const [resourcePage, setResourcePage] = useState<Resource | null>(null)

  const openResourcePage = (item: Resource) => () => setResourcePage(item)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: openResourcePage,
    itemActions: (item) => [
      {
        label: "Duplicate",
        icon: Files,
        type: "primary",
        onClick: () => {},
      },
      {
        label: "Open",
        icon: ChevronRight,
        type: "primary",
        hideLabel: true,
        hideInMobileDropdown: true,
        onClick: openResourcePage(item),
      },
    ],
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  if (resourcePage) {
    return <ResourcePageView resourcePage={resourcePage} />
  }

  return (
    <CrudPatternLayout>
      <OneDataCollection source={source} visualizations={[visualization]} />
    </CrudPatternLayout>
  )
}

function RightDialogScenario({
  visualization = tableVisualization,
}: {
  visualization?: CrudVisualization
} = {}) {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setSelectedResource(item),
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  return (
    <CrudPatternLayout>
      <OneDataCollection source={source} visualizations={[visualization]} />
      <F0Dialog
        isOpen={selectedResource !== null}
        onClose={() => setSelectedResource(null)}
        description="Open details in a Right Dialog so the user can read the resource while keeping the collection visible."
        width="sm"
        disableContentPadding
        secondaryAction={{
          label: "Close",
          onClick: () => setSelectedResource(null),
        }}
      >
        {selectedResource && <ResourceDialogPreview />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function RightDialogToPageScenario() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  )
  const [surface, setSurface] = useState<"collection" | "dialog" | "page">(
    "collection"
  )

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => {
      setSelectedResource(item)
      setSurface("dialog")
    },
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  if (surface === "page" && selectedResource) {
    return <ResourcePageView resourcePage={selectedResource} />
  }

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
      <F0Dialog
        isOpen={surface === "dialog" && selectedResource !== null}
        onClose={() => {
          setSurface("collection")
          setSelectedResource(null)
        }}
        title="Resource details"
        description="Open a reduced view in a Right Dialog, then continue to the full page when deeper exploration is needed."
        position="right"
        width="sm"
        disableContentPadding
        primaryAction={{
          label: "Open Details",
          onClick: () => setSurface("page"),
        }}
      >
        {selectedResource && <ResourceDialogPreview />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const TableReadDialog: Story = {
  render: () => <DefaultDialogScenario />,
}

export const TableReadRightDialog: Story = {
  render: () => <RightDialogScenario />,
}

export const TableReadRightDialogToPage: Story = {
  render: () => <RightDialogToPageScenario />,
}

export const TableReadPage: Story = {
  render: () => <OpenAsPageScenario />,
}

export const ListReadRightDialog: Story = {
  render: () => <RightDialogScenario visualization={listVisualization} />,
}

export const ListReadPage: Story = {
  render: () => <OpenAsPageScenario visualization={listVisualization} />,
}

export const CardReadDialog: Story = {
  render: () => (
    <VisualizationDialogScenario visualization={cardVisualization} />
  ),
}

export const KanbanReadDialog: Story = {
  render: () => (
    <VisualizationDialogScenario
      visualization={kanbanVisualization}
      withLanes
    />
  ),
}
