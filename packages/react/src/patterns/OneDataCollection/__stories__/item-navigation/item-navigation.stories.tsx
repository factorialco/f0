import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"

import { F0Button } from "@/components/F0Button"
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

const createPageResponse = (records: MockUser[], currentPage: number) => ({
  records,
  total: users.length,
  perPage: 4,
  type: "pages" as const,
  currentPage,
  pagesCount: Math.ceil(users.length / 4),
})

export const InfiniteScrollPagination: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Uses an infinite-scroll data adapter. When navigation reaches the last loaded item, it calls loadMore and activates the next appended record.",
      },
    },
  },
  render: () => {
    const itemNavigation = useDataCollectionItemNavigation<MockUser>({
      defaultActiveItemId: users[0].id,
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
      itemOnClick: (item) => () => itemNavigation.openItem(item.id),
    })

    const controls = itemNavigation.controls

    return (
      <div className="flex flex-col gap-4">
        <div className="border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              Infinite scroll pagination
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              Move past the last loaded row to call loadMore and activate the
              next appended item.
            </div>
          </div>
        </div>

        <div className="bg-f1-background-secondary border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              {itemNavigation.activeItem?.name ?? "No selected item"}
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              {controls
                ? `${controls.currentIndex + 1} of ${controls.totalCount}`
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
              disabled={!controls?.canGoPrevious}
              onClick={controls?.goToPrevious}
            />
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label="Next item"
              disabled={!controls?.canGoNext}
              loading={controls?.isNavigating}
              onClick={controls?.goToNext}
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

export const PageBasedPagination: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Uses a page-based data adapter. When navigation reaches a page boundary, it requests the next or previous page and activates the boundary item.",
      },
    },
  },
  render: () => {
    const itemNavigation = useDataCollectionItemNavigation<MockUser>({
      defaultActiveItemId: users[3].id,
      idProvider: (item) => item.id,
    })

    const source = useDataCollectionSource<MockUser>({
      dataAdapter: {
        paginationType: "pages",
        perPage: 4,
        fetchData: async ({ pagination }) => {
          await new Promise((resolve) => setTimeout(resolve, 150))
          const currentPage = pagination.currentPage ?? 1
          const start = (currentPage - 1) * 4

          return createPageResponse(users.slice(start, start + 4), currentPage)
        },
      },
      itemOnClick: (item) => () => itemNavigation.openItem(item.id),
      itemUrl: (item) => `/users/${item.id}`,
    })

    const controls = itemNavigation.controls

    return (
      <div className="flex flex-col gap-4">
        <div className="border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              Page-based pagination
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              Move past the last loaded row to fetch the next page and activate
              its first item.
            </div>
          </div>
        </div>

        <div className="bg-f1-background-secondary border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
          <div>
            <div className="text-f1-foreground font-medium">
              {itemNavigation.activeItem?.name ?? "No selected item"}
            </div>
            <div className="text-f1-foreground-secondary text-sm">
              {controls
                ? `${controls.currentIndex + 1} of ${controls.totalCount}`
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
              disabled={!controls?.canGoPrevious}
              loading={controls?.isNavigating}
              onClick={controls?.goToPrevious}
            />
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label="Next item"
              disabled={!controls?.canGoNext}
              loading={controls?.isNavigating}
              onClick={controls?.goToNext}
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

    const itemNavigation = useDataCollectionItemNavigation<MockUser>({
      activeItemId,
      onActiveItemChange: (id) => {
        if (typeof id === "string") {
          setActiveItemId(id)
        }
      },
      snapshotMode: "session",
      idProvider: (item) => item.id,
    })

    useEffect(() => {
      itemNavigation.openItem(activeItemId)
      // Only start the initial detail session on mount.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const source = useDataCollectionSource<MockUser>(
      {
        dataAdapter: {
          fetchData: async () => {
            await new Promise((resolve) => setTimeout(resolve, 150))
            return { records: availableUsers }
          },
        },
        itemOnClick: (item) => () => itemNavigation.openItem(item.id),
      },
      [availableUsers]
    )

    const firstVisibleUser = availableUsers[0]
    const controls = itemNavigation.controls

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
                if (firstVisibleUser)
                  itemNavigation.openItem(firstVisibleUser.id)
              }}
            />
            <F0Button
              variant="outline"
              size="sm"
              label="Reset snapshot"
              onClick={() => {
                itemNavigation.resetSnapshot()
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
              disabled={!controls?.canGoPrevious}
              onClick={controls?.goToPrevious}
            />
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label="Next item"
              disabled={!controls?.canGoNext}
              loading={controls?.isNavigating}
              onClick={controls?.goToNext}
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
