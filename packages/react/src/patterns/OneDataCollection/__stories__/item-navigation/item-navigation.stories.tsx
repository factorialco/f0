import { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import {
  useDataCollectionItemNavigation,
  useDataCollectionItemNavigationRouteSync,
} from "../../hooks/useDataCollectionItemNavigation"
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

const InfiniteScrollPaginationDemo = () => {
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
        return createPaginatedResponse(users.slice(cursor, cursor + 5), cursor)
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
            Move past the last loaded row to call loadMore and activate the next
            appended item.
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
}

const PageBasedPaginationDemo = () => {
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
}

const replaceLastPathSegment = (path: string, id: string) => {
  const segments = path.split("/")
  segments[segments.length - 1] = id
  return segments.join("/")
}

const RouteSyncDemo = () => {
  const [routeId, setRouteId] = useState(users[0].id)
  const itemNavigation = useDataCollectionItemNavigation<MockUser>({
    snapshotMode: "session",
    idProvider: (item) => item.id,
  })

  const { activeRouteId, controls } = useDataCollectionItemNavigationRouteSync({
    itemNavigation,
    routeId,
    onRouteIdChange: (nextRouteId) => {
      setRouteId(nextRouteId)
    },
  })

  const source = useDataCollectionSource<MockUser>({
    dataAdapter: {
      fetchData: async () => ({ records: users.slice(0, 5) }),
    },
    itemUrl: (item) => `/users/${item.id}`,
    itemOnClick: (item) => () => setRouteId(item.id),
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="border-f1-border-secondary flex items-center justify-between gap-4 rounded-md border p-3">
        <div>
          <div className="text-f1-foreground font-medium">
            Route-synced detail panel
          </div>
          <div className="text-f1-foreground-secondary text-sm">
            The route ID opens the navigation session. Prev/next changes call
            back so the consumer can update router state or browser history.
          </div>
        </div>
        <div className="text-f1-foreground-secondary text-sm">
          /users/{activeRouteId ?? "none"}
        </div>
      </div>

      <div className="bg-f1-background-secondary border-f1-border-secondary flex items-center justify-between rounded-md border p-3">
        <div>
          <div className="text-f1-foreground font-medium">
            {itemNavigation.activeItem?.name ?? "No selected item"}
          </div>
          <div className="text-f1-foreground-secondary text-sm">
            {controls
              ? `${controls.currentIndex + 1} of ${controls.totalCount} · ${controls.activeItemUrl ?? "No URL"}`
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

      <div className="text-f1-foreground-secondary text-sm">
        Example history replacement target:{" "}
        {replaceLastPathSegment("/users/example", routeId)}
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
}

export const PaginationModes: Story = {
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "Shows both pagination strategies supported by item navigation: infinite-scroll loadMore and page-based setPage boundary navigation.",
      },
    },
  }),
  render: () => (
    <div className="grid gap-6 lg:grid-cols-2">
      <InfiniteScrollPaginationDemo />
      <PageBasedPaginationDemo />
    </div>
  ),
}

export const RouteSync: Story = {
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "Uses the optional route-sync helper. F0 opens sessions from the provided route ID and notifies the consumer when prev/next should update route or URL state.",
      },
    },
  }),
  render: () => <RouteSyncDemo />,
}

export const SessionSnapshotDuringRefetch: Story = {
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
