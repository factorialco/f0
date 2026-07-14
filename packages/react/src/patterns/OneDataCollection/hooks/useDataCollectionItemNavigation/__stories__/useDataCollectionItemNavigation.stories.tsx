import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { PageHeaderNavigationProvider } from "@/experimental/Navigation/Header/PageHeader"
import { PageNavigation } from "@/experimental/Navigation/Header/PageNavigation"
import { PaginatedFetchOptions } from "@/hooks/datasource"
import {
  dataCollectionLocalStorageHandler,
  DataCollectionStorageProvider,
} from "@/lib/providers/datacollection"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { DEPARTMENTS_MOCK, generateMockUsers, MockUser } from "@/mocks"

import { OneDataCollection } from "../../../index"
import {
  DataCollectionSourceDefinition,
  useDataCollectionSource,
} from "../../useDataCollectionSource"
import { useDataCollectionItemNavigation } from "../useDataCollectionItemNavigation"

const meta = {
  title: "Data Collection/useDataCollectionItemNavigation",
  parameters: {
    layout: "padded",
    a11y: { skipCi: true },
    docs: {
      description: {
        component:
          "Detail-page prev/next navigation fed from a **declared** data collection source definition + the originating list's `collectionId`. The hook reads the filters/sortings/search the list persisted through the storage handler, seeds them into the source, and exposes render-ready `NavigationProps` — so it works on a direct link / hard refresh where the list was never mounted.",
      },
    },
  },
  tags: ["experimental", "!autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const users = generateMockUsers(35)

const COLLECTION_ID = "storybook/item-navigation-demo/v1"

const filters = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS_MOCK.map((d) => ({ value: d, label: d })),
    },
  },
}

const sortings = {
  name: { label: "Name" },
}

type Filters = typeof filters
type Sortings = typeof sortings

const PER_PAGE = 10

// The single shared declaration: the list AND the detail page use this.
const userListSourceDefinition: DataCollectionSourceDefinition<
  MockUser,
  Filters,
  Sortings
> = {
  filters,
  sortings,
  search: { enabled: true },
  itemUrl: (user) => `#/users/${user.id}`,
  dataAdapter: {
    paginationType: "pages",
    perPage: PER_PAGE,
    fetchData: async (options: PaginatedFetchOptions<Filters>) => {
      await new Promise((resolve) => setTimeout(resolve, 150))
      const departments = options.filters.department
      let results = users.filter(
        (user) => !departments?.length || departments.includes(user.department)
      )
      if (options.search) {
        const search = options.search.toLowerCase()
        results = results.filter((user) =>
          user.name.toLowerCase().includes(search)
        )
      }
      const sorting = options.sortings.find((s) => s.field === "name")
      if (sorting) {
        results = [...results].sort(
          (a, b) =>
            a.name.localeCompare(b.name) * (sorting.order === "asc" ? 1 : -1)
        )
      }
      const currentPage =
        "currentPage" in options.pagination
          ? (options.pagination.currentPage ?? 1)
          : 1
      const start = (currentPage - 1) * PER_PAGE
      return {
        type: "pages" as const,
        records: results.slice(start, start + PER_PAGE),
        total: results.length,
        perPage: PER_PAGE,
        currentPage,
        pagesCount: Math.ceil(results.length / PER_PAGE),
      }
    },
  },
}

const UserList = ({ onOpenUser }: { onOpenUser: (id: string) => void }) => {
  const source = useDataCollectionSource<MockUser, Filters, Sortings>({
    ...userListSourceDefinition,
    itemOnClick: (user) => () => onOpenUser(user.id),
  })

  return (
    <OneDataCollection
      id={COLLECTION_ID}
      source={source}
      visualizations={[
        {
          type: "table",
          options: {
            columns: [
              { label: "Name", render: (user: MockUser) => user.name },
              {
                label: "Department",
                render: (user: MockUser) => user.department,
              },
            ],
          },
        },
      ]}
    />
  )
}

const UserDetail = ({
  userId,
  onNavigate,
}: {
  userId: string
  onNavigate: (id: string) => void
}) => {
  const itemNavigation = useDataCollectionItemNavigation({
    source: userListSourceDefinition,
    collectionId: COLLECTION_ID,
    activeItemId: userId,
    onActiveItemChange: (id) => {
      if (typeof id === "string") onNavigate(id)
    },
    getItemTitle: (user) => user.name,
  })

  const { navigation, activeItem, isReady, appliedCollectionState } =
    itemNavigation

  return (
    <PageHeaderNavigationProvider value={navigation}>
      <div className="flex flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-4">
        <div className="flex items-center justify-between">
          <div className="font-medium text-f1-foreground">
            {activeItem?.name ??
              (isReady ? "Not in loaded window" : "Loading…")}
          </div>
          <div className="flex items-center gap-2">
            {/* PageHeader renders this same thing from the provided context;
                shown standalone here to keep the story focused */}
            {navigation && <PageNavigation {...navigation} />}
            <F0Button
              variant="outline"
              size="sm"
              label="Previous"
              disabled={!itemNavigation.hasPrevious}
              onClick={itemNavigation.goToPrevious}
            />
            <F0Button
              variant="outline"
              size="sm"
              label="Next"
              disabled={!itemNavigation.hasNext}
              loading={itemNavigation.isNavigating}
              onClick={itemNavigation.goToNext}
            />
          </div>
        </div>
        <div className="text-sm text-f1-foreground-secondary">
          {activeItem
            ? `${activeItem.email} — ${activeItem.department}`
            : "Open an item from the list, or deep-link by id."}
        </div>
        <div className="text-sm text-f1-foreground-secondary">
          Seeded from storage:{" "}
          <code>{JSON.stringify(appliedCollectionState) ?? "null"}</code>
        </div>
      </div>
    </PageHeaderNavigationProvider>
  )
}

const DetailNavigationDemo = () => {
  const [listMounted, setListMounted] = useState(true)
  const [activeUserId, setActiveUserId] = useState<string | null>(null)
  const firstUserId = useMemo(() => users[0].id, [])

  return (
    <DataCollectionStorageProvider handler={dataCollectionLocalStorageHandler}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <F0Button
            variant="outline"
            size="sm"
            label={listMounted ? "Unmount list" : "Mount list"}
            onClick={() => setListMounted((mounted) => !mounted)}
          />
          <F0Button
            variant="outline"
            size="sm"
            label="Direct link to first user"
            onClick={() => setActiveUserId(firstUserId)}
          />
          <span className="text-sm text-f1-foreground-secondary">
            Filter/sort/search the list, open a user, then unmount the list:
            navigation keeps following the persisted list state — the
            direct-link scenario.
          </span>
        </div>
        {activeUserId && (
          <UserDetail userId={activeUserId} onNavigate={setActiveUserId} />
        )}
        {listMounted && <UserList onOpenUser={setActiveUserId} />}
      </div>
    </DataCollectionStorageProvider>
  )
}

export const DetailPageNavigation: Story = {
  parameters: withSnapshot({}),
  render: () => <DetailNavigationDemo />,
}
