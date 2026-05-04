import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { DataSourceItemId } from "@/hooks/datasource"
import { ChevronLeft, ChevronRight } from "@/icons/app"

import { useDataCollectionItemNavigation } from "../../hooks/useDataCollectionItemNavigation"
import { useDataCollectionSource } from "../../hooks/useDataCollectionSource"
import { OneDataCollection } from "../../index"
import { generateMockUsers, MockUser } from "../mockData"

const meta = {
  title: "Data Collection/Item Navigation",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Headless prev/next item navigation for OneDataCollection. The collection provides ordered data and pagination state; consumers decide where to render controls, how to update URLs, and how to handle edit-mode guards or keyboard shortcuts.",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const users = generateMockUsers(11)

const columns = [
  {
    label: "Name",
    render: (item: MockUser) => item.name,
  },
  {
    label: "Email",
    render: (item: MockUser) => item.email,
  },
]

const createPaginatedResponse = (records: MockUser[], cursor: number) => {
  const nextCursor = cursor + records.length

  return {
    records,
    total: users.length,
    perPage: 5,
    type: "infinite-scroll" as const,
    cursor: nextCursor < users.length ? String(nextCursor) : null,
    hasMore: nextCursor < users.length,
  }
}

export const ExternalControls: Story = {
  render: () => {
    const itemNavigation = useDataCollectionItemNavigation<MockUser>({
      defaultActiveItemId: users[0].id,
      snapshotKey: "sidepanel-session",
      idProvider: (item) => item.id,
    })

    const source = useDataCollectionSource<MockUser>({
      dataAdapter: {
        paginationType: "infinite-scroll",
        perPage: 5,
        fetchData: async ({ pagination }) => {
          await new Promise((resolve) => setTimeout(resolve, 150))
          const cursor = pagination.cursor ? Number(pagination.cursor) : 0
          return createPaginatedResponse(
            users.slice(cursor, cursor + 5),
            cursor
          )
        },
      },
      itemUrl: (item) => `/users/${item.id}`,
      itemOnClick: (item) => () => itemNavigation.setActiveItemId(item.id),
    })

    return (
      <div className="flex flex-col gap-4">
        <div className="border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              External controls
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              The header below is demo UI. Consumers can render these controls
              in a dialog title, sidepanel header, toolbar, or keyboard shortcut
              handler.
            </div>
          </div>
        </div>

        <div className="bg-f1-background-secondary border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              {itemNavigation.activeItem?.name ?? "No selected item"}
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              {itemNavigation.absoluteIndex !== null &&
              itemNavigation.totalItems
                ? `${itemNavigation.absoluteIndex + 1} of ${itemNavigation.totalItems}`
                : "Select an item to start navigating"}
            </div>
          </div>
          <div className="flex gap-2">
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronLeft}
              hideLabel
              label="Previous item"
              disabled={
                !itemNavigation.hasPrevious || itemNavigation.isNavigating
              }
              onClick={itemNavigation.goToPrevious}
            />
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label="Next item"
              disabled={!itemNavigation.hasNext || itemNavigation.isNavigating}
              loading={itemNavigation.isNavigating}
              onClick={itemNavigation.goToNext}
            />
          </div>
        </div>

        <OneDataCollection
          source={source}
          itemNavigation={itemNavigation}
          storage={false}
          visualizations={[
            {
              type: "table",
              options: {
                columns,
              },
            },
          ]}
        />
      </div>
    )
  },
}

export const SnapshotDuringRefetch: Story = {
  render: () => {
    const [availableUsers, setAvailableUsers] = useState(users.slice(0, 5))
    const [activeItemId, setActiveItemId] = useState(users[2].id)
    const [snapshotKey, setSnapshotKey] = useState(0)

    const openSession = (id: MockUser["id"]) => {
      setActiveItemId(id)
      setSnapshotKey((key) => key + 1)
    }

    const itemNavigation = useDataCollectionItemNavigation<MockUser>({
      activeItemId,
      onActiveItemChange: (id: DataSourceItemId | null) => {
        if (typeof id === "string") setActiveItemId(id)
      },
      snapshotKey,
      idProvider: (item) => item.id,
    })

    const source = useDataCollectionSource<MockUser>(
      {
        dataAdapter: {
          fetchData: async () => {
            await new Promise((resolve) => setTimeout(resolve, 150))
            return { records: availableUsers }
          },
        },
        itemOnClick: (item) => () => openSession(item.id),
      },
      [availableUsers]
    )

    const firstVisibleUser = availableUsers[0]

    return (
      <div className="flex flex-col gap-4">
        <div className="border-f1-border-secondary flex items-center justify-between gap-4 rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              Snapshot during refetch
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              Remove the active item from the live collection. Navigation keeps
              the current detail-session snapshot until the user explicitly
              opens a new session.
            </div>
          </div>
          <div className="flex gap-2">
            <F0Button
              variant="outline"
              size="sm"
              label="Remove active from live data"
              onClick={() => {
                setAvailableUsers((currentUsers) =>
                  currentUsers.filter((user) => user.id !== activeItemId)
                )
              }}
            />
            <F0Button
              variant="outline"
              size="sm"
              label="Start new session"
              disabled={!firstVisibleUser}
              onClick={() => {
                if (firstVisibleUser) openSession(firstVisibleUser.id)
              }}
            />
          </div>
        </div>

        <div className="bg-f1-background-secondary border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              {itemNavigation.activeItem?.name ?? "No selected item"}
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              {itemNavigation.loadedItemsCount} items in navigation snapshot ·{" "}
              {availableUsers.length} items in live collection
            </div>
          </div>
          <div className="flex gap-2">
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronLeft}
              hideLabel
              label="Previous item"
              disabled={
                !itemNavigation.hasPrevious || itemNavigation.isNavigating
              }
              onClick={itemNavigation.goToPrevious}
            />
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label="Next item"
              disabled={!itemNavigation.hasNext || itemNavigation.isNavigating}
              onClick={itemNavigation.goToNext}
            />
          </div>
        </div>

        <OneDataCollection
          source={source}
          itemNavigation={itemNavigation}
          storage={false}
          visualizations={[
            {
              type: "table",
              options: {
                columns,
              },
            },
          ]}
        />
      </div>
    )
  },
}
