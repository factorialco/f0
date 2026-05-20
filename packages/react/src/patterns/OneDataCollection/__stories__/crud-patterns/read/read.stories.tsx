import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"

import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Download, Pencil } from "@/icons/app"
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
  createResourceDataAdapter,
  CRUD_MODULE,
  CrudContentPlaceholder,
  CrudPatternLayout,
  defaultCrudPrimaryAction,
  defaultCrudSecondaryActions,
  initialResources,
  Resource,
  resourceFilters,
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
                  label: "Update",
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
          label: "Close",
          onClick: () => setSelectedResource(null),
        }}
      >
        {selectedResource && <CrudContentPlaceholder minHeight="min-h-56" />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

function OpenAsPageScenario() {
  const [resourcePage, setResourcePage] = useState<Resource | null>(null)

  const source = useDataCollectionSource({
    dataAdapter: createResourceDataAdapter(initialResources),
    filters: resourceFilters,
    itemOnClick: (item) => () => setResourcePage(item),
    primaryActions: () => defaultCrudPrimaryAction(() => {}),
    secondaryActions: defaultCrudSecondaryActions(),
  })

  if (resourcePage) {
    return <ResourcePageView resourcePage={resourcePage} />
  }

  return (
    <CrudPatternLayout>
      <OneDataCollection
        source={source}
        visualizations={[tableVisualization]}
      />
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
        description="Open a reduced view in a right dialog, then continue to the full page when deeper exploration is needed."
        position="right"
        width="md"
        disableContentPadding
        primaryAction={{
          label: "Close",
          onClick: () => {
            setSurface("collection")
            setSelectedResource(null)
          },
        }}
        secondaryAction={{
          label: "View details",
          onClick: () => setSurface("page"),
        }}
      >
        {selectedResource && <ResourceDialogPreview />}
      </F0Dialog>
    </CrudPatternLayout>
  )
}

export const Default: Story = {
  render: () => <DefaultDialogScenario />,
}

export const RightDialogToPage: Story = {
  render: () => <RightDialogToPageScenario />,
}

export const Page: Story = {
  render: () => <OpenAsPageScenario />,
}
