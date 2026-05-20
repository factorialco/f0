import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"

import { F0Text } from "@/components/F0Text"
import { StandardLayout } from "@/layouts/StandardLayout"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Download, Pencil } from "@/icons/app"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import { F0Dialog } from "@/patterns/F0Dialog"
import { Page } from "@/patterns/Navigation/Page"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"

import { useDataCollectionSource } from "../../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../../index"
import {
  createResourceDataAdapter,
  CRUD_MODULE,
  CrudPatternLayout,
  defaultCrudPrimaryAction,
  defaultCrudSecondaryActions,
  initialResources,
  Resource,
  ResourceDetails,
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
        {selectedResource && <ResourceDetails resource={selectedResource} />}
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
              <PageHeader
                module={CRUD_MODULE}
                breadcrumbs={[
                  { id: resourcePage.id, label: resourcePage.name },
                ]}
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
            <F0Text
              content="The page variant uses the same production page shell as a deeper resource flow."
              variant="description"
            />
            <ResourceDetails resource={resourcePage} />
          </StandardLayout>
        </Page>
      </ApplicationFrame>
    )
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

export const Default: Story = {
  render: () => <DefaultDialogScenario />,
}

export const OpenAsPageWithBreadcrumbs: Story = {
  render: () => <OpenAsPageScenario />,
}
