import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  FIRST_NAMES_MOCK,
  MOCK_ICONS,
  SURNAMES_MOCK,
  getMockValue,
} from "@/mocks"

import {
  F0SelectItemObject,
  F0SelectItemProps,
} from "../../../../../../components/F0Select"
import { Search } from "../../../../../../icons/app"
import { BreadcrumbSelect } from "./index"
const meta: Meta<typeof BreadcrumbSelect> = {
  title: "Navigation/BreadcrumbSelect",
  component: BreadcrumbSelect,
  tags: ["autodocs", "internal"],
  parameters: {
    a11y: {
      skipCi: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof BreadcrumbSelect<string>>

export const Default: Story = {
  args: {
    value: "recruitment",
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value)
    },
    options: [
      {
        value: "recruitment",
        label: "Recruitment",
      },
      {
        value: "candidates",
        label: "Candidates",
        icon: Search,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "<p>A basic breadcrumb select component that allows users to choose from a list of options. Works a `Select` component but it can not be empty.</p>" +
          "<p>Options can be an array of objects or a function that returns a promise of an array of objects to load data asynchronously.</p>" +
          "<p>You the do the filtering in the component or do the filtering externally using the props `options` and `externalSearch`.</p>",
      },
    },
  },
}

export const WithSearchbox: Story = {
  args: {
    value: "recruitment",
    onChange: (
      value: string,
      item?: unknown,
      option?: F0SelectItemObject<string, unknown>
    ) => {
      console.log("onChange BreadcrumbSelect", value, item, option)
    },
    searchBoxPlaceholder: "Search",
    showSearchBox: true,
    options: [
      {
        value: "recruitment",
        label: "Recruitment",
      },
      {
        value: "candidates",
        label: "Candidates",
        icon: Search,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Breadcrumb select with a search box that allows users to filter through options. The search is handled internally by the component.",
      },
    },
  },
}

const mockItems = Array.from({ length: 30 }, (_, i) => ({
  value: `option-${i}`,
  label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  icon: getMockValue(MOCK_ICONS, i),
  description: `Description for option ${i}`,
}))

type MockItem = (typeof mockItems)[number]

export const AsyncData: StoryObj<typeof BreadcrumbSelect<string, MockItem>> = {
  args: {
    value: "option-3",
    source: {
      dataAdapter: {
        fetchData: async (options) => {
          const { search } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const results = mockItems.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )

              const res = {
                records: results,
              }
              resolve(res)
            }, 100)
          })
        },
      },
    },
    mapOptions: (item: MockItem): F0SelectItemProps<string, MockItem> => ({
      value: item.value,
      label: item.label,
      icon: item.icon,
    }),
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value)
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates loading options asynchronously. Shows a loading state while data is being fetched.",
      },
    },
  },
}

const mockItemsLargeDataset = Array.from({ length: 10000 }, (_, i) => ({
  value: `option-${i}`,
  label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  icon: getMockValue(MOCK_ICONS, i),
  description: `Description for option ${i}`,
}))

type MockItemLargeDataSet = (typeof mockItemsLargeDataset)[number]

export const AsyncDataWithLargeDataset: StoryObj<
  typeof BreadcrumbSelect<string, (typeof mockItems)[number]>
> = {
  args: {
    defaultItem: {
      value: "option-3",
      label: "Arnau Pérez",
      icon: Search,
    },
    source: {
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options) => {
          const { search, pagination } = options
          return new Promise((resolve) => {
            setTimeout(() => {
              const pageSize = pagination.perPage ?? 10
              const cursor = "cursor" in pagination ? pagination.cursor : null
              const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

              const results = mockItemsLargeDataset.filter(
                (item) =>
                  !search ||
                  item.label.toLowerCase().includes(search.toLowerCase())
              )

              const paginatedResults = results.slice(
                cursor ? Number(cursor) : 0,
                nextCursor
              )

              const res = {
                type: "infinite-scroll" as const,
                cursor: String(nextCursor),
                perPage: pageSize,
                hasMore: nextCursor < results.length,
                records: paginatedResults,
                total: results.length,
              }
              resolve(res)
            }, 100)
          })
        },
      },
    },
    mapOptions: (
      item: MockItemLargeDataSet
    ): F0SelectItemProps<string, MockItemLargeDataSet> => ({
      value: item.value,
      label: item.label,
      icon: item.icon,
    }),
    showSearchBox: true,
    onChange: (value: string) => {
      console.log("onChange BreadcrumbSelect", value)
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates loading options asynchronously. Shows a loading state while data is being fetched.",
      },
    },
  },
}
