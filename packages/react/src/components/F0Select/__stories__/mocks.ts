import { createDataSourceDefinition } from "@/hooks/datasource"
import {
  DEPARTMENTS_MOCK,
  FIRST_NAMES_MOCK,
  MOCK_ICONS,
  ROLES_MOCK,
  SURNAMES_MOCK,
  getMockValue,
} from "@/mocks"

export const mockItems = Array.from({ length: 10000 }, (_, i) => ({
  value: `option-${i}`,
  label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  icon: getMockValue(MOCK_ICONS, i),
  role: getMockValue(ROLES_MOCK, i),
  department: getMockValue(DEPARTMENTS_MOCK, i),
  description: `Description for option ${i}`,
}))

export type MockItem = (typeof mockItems)[number]

export const mockPaginatedSource = createDataSourceDefinition<MockItem>({
  filters: {
    status: {
      type: "in",
      label: "Status",
      options: {
        options: [
          { value: "eliseo-vargas", label: "Elise Vargas" },
          { value: "alexander-smith", label: "Alexander Smith" },
          { value: "bob-johnson", label: "Bob Johnson" },
          { value: "carol-williams", label: "Carol Williams" },
          { value: "dave-brown", label: "Dave Brown" },
          { value: "saul-vargas", label: "Saul Vargas" },
          { value: "michael-johnson", label: "Michael Johnson" },
          { value: "john-williams", label: "John Williams" },
          { value: "jane-brown", label: "Jane Brown" },
          { value: "jose-martinez", label: "Jose Martinez" },
          { value: "james-smith", label: "James Smith" },
          { value: "david-williams", label: "David Williams" },
          { value: "william-brown", label: "William Brown" },
          { value: "emily-martinez", label: "Emily Martinez" },
          { value: "luis-garcia", label: "Luis Garcia" },
          { value: "robert-martinez", label: "Robert Martinez" },
          { value: "joseph-smith", label: "Joseph Smith" },
          { value: "daniel-williams", label: "Daniel Williams" },
          { value: "patrick-brown", label: "Patrick Brown" },
          { value: "charles-martinez", label: "Charles Martinez" },
          { value: "anthony-smith", label: "Anthony Smith" },
        ],
      },
    },
    date: {
      type: "date",
      label: "Date",
      options: {
        minDate: new Date("2021-01-01"),
        maxDate: new Date("2021-12-31"),
        mode: "range",
        view: "quarter",
      },
    },
  },
  dataAdapter: {
    paginationType: "infinite-scroll",
    fetchData: (options) => {
      const { search, pagination } = options
      return new Promise((resolve) => {
        setTimeout(
          () => {
            const pageSize = pagination.perPage ?? 10
            const cursor = "cursor" in pagination ? pagination.cursor : null
            const nextCursor = cursor ? Number(cursor) + pageSize : pageSize

            const results = mockItems.filter(
              (item) =>
                !search ||
                item.label.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase())
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
          },
          1000 + Math.random() * 500
        )
      })
    },
  },
})

export const mockNonPaginatedSource = createDataSourceDefinition<MockItem>({
  filters: {
    status: {
      type: "in",
      label: "Status",
      options: {
        options: [
          { value: "eliseo-vargas", label: "Elise Vargas" },
          { value: "alexander-smith", label: "Alexander Smith" },
          { value: "bob-johnson", label: "Bob Johnson" },
          { value: "carol-williams", label: "Carol Williams" },
          { value: "dave-brown", label: "Dave Brown" },
          { value: "saul-vargas", label: "Saul Vargas" },
          { value: "michael-johnson", label: "Michael Johnson" },
          { value: "john-williams", label: "John Williams" },
          { value: "jane-brown", label: "Jane Brown" },
          { value: "jose-martinez", label: "Jose Martinez" },
          { value: "james-smith", label: "James Smith" },
          { value: "david-williams", label: "David Williams" },
          { value: "william-brown", label: "William Brown" },
          { value: "emily-martinez", label: "Emily Martinez" },
          { value: "luis-garcia", label: "Luis Garcia" },
          { value: "robert-martinez", label: "Robert Martinez" },
          { value: "joseph-smith", label: "Joseph Smith" },
          { value: "daniel-williams", label: "Daniel Williams" },
          { value: "patrick-brown", label: "Patrick Brown" },
          { value: "charles-martinez", label: "Charles Martinez" },
          { value: "anthony-smith", label: "Anthony Smith" },
        ],
      },
    },
    date: {
      type: "date",
      label: "Date",
      options: {
        minDate: new Date("2021-01-01"),
        maxDate: new Date("2021-12-31"),
        mode: "range",
        view: "quarter",
      },
    },
  },
  dataAdapter: {
    fetchData: (options) => {
      const { search } = options
      return new Promise((resolve) => {
        setTimeout(() => {
          const results = mockItems
            .slice(0, 100)
            .filter(
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
})
