import type { RecordType } from "@/hooks/datasource"

import { createDataSourceDefinition } from "@/hooks/datasource"
import { Building, Money as MoneyIcon, People as PeopleIcon } from "@/icons/app"

import type { SurveyDatasets } from "../SurveyFormBuilder/types"

const EMPLOYEE_TOTAL = 1000
const EMPLOYEE_RECORDS = Array.from({ length: EMPLOYEE_TOTAL }, (_, index) => ({
  id: String(index + 1),
  name: `Employee ${String(index + 1).padStart(4, "0")}`,
}))

export const mockDatasets: SurveyDatasets = {
  employees: {
    title: "Employee dataset",
    icon: PeopleIcon,
    dataSource: createDataSourceDefinition({
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: ({ search, pagination }) => {
          const filteredRecords = EMPLOYEE_RECORDS.filter((item) =>
            search
              ? item.name.toLowerCase().includes(search.toLowerCase())
              : true
          )
          const perPage = pagination.perPage ?? 50
          const cursor = "cursor" in pagination ? Number(pagination.cursor) : 0
          const nextCursor = cursor + perPage
          return Promise.resolve({
            type: "infinite-scroll" as const,
            cursor: String(nextCursor),
            perPage,
            hasMore: nextCursor < filteredRecords.length,
            records: filteredRecords.slice(cursor, nextCursor),
            total: filteredRecords.length,
          })
        },
      },
    }) as SurveyDatasets[string]["dataSource"],
    mapOptions: (item: RecordType) => ({
      value: String(item.id),
      label: String(item.name),
    }),
  },
  currencies: {
    title: "Currency dataset",
    icon: MoneyIcon,
    dataSource: createDataSourceDefinition({
      dataAdapter: {
        fetchData: ({ search }) => {
          const CURRENCIES = [
            { id: "USD", name: "US Dollar" },
            { id: "EUR", name: "Euro" },
            { id: "GBP", name: "British Pound" },
            { id: "JPY", name: "Japanese Yen" },
            { id: "CHF", name: "Swiss Franc" },
            { id: "CAD", name: "Canadian Dollar" },
            { id: "AUD", name: "Australian Dollar" },
            { id: "CNY", name: "Chinese Yuan" },
            { id: "SEK", name: "Swedish Krona" },
            { id: "NOK", name: "Norwegian Krone" },
            { id: "DKK", name: "Danish Krone" },
            { id: "NZD", name: "New Zealand Dollar" },
            { id: "SGD", name: "Singapore Dollar" },
            { id: "HKD", name: "Hong Kong Dollar" },
            { id: "MXN", name: "Mexican Peso" },
            { id: "BRL", name: "Brazilian Real" },
            { id: "INR", name: "Indian Rupee" },
            { id: "KRW", name: "South Korean Won" },
            { id: "ZAR", name: "South African Rand" },
            { id: "TRY", name: "Turkish Lira" },
          ]
          const filtered = CURRENCIES.filter((c) =>
            search
              ? c.name.toLowerCase().includes(search.toLowerCase()) ||
                c.id.toLowerCase().includes(search.toLowerCase())
              : true
          )
          return Promise.resolve({ records: filtered })
        },
      },
    }) as SurveyDatasets[string]["dataSource"],
    mapOptions: (item: RecordType) => ({
      value: String(item.id),
      label: `${String(item.id)} — ${String(item.name)}`,
    }),
  },
  teams: {
    title: "Team dataset",
    icon: Building,
    placeholder: "Select a team...",
    dataSource: createDataSourceDefinition({
      dataAdapter: {
        fetchData: ({ search }) => {
          const TEAMS = [
            { id: "engineering", name: "Engineering" },
            { id: "design", name: "Design" },
            { id: "product", name: "Product" },
            { id: "marketing", name: "Marketing" },
            { id: "sales", name: "Sales" },
            { id: "customer-success", name: "Customer Success" },
            { id: "finance", name: "Finance" },
            { id: "hr", name: "Human Resources" },
            { id: "legal", name: "Legal" },
            { id: "operations", name: "Operations" },
          ]
          const filtered = TEAMS.filter((t) =>
            search ? t.name.toLowerCase().includes(search.toLowerCase()) : true
          )
          return Promise.resolve({ records: filtered })
        },
      },
    }) as SurveyDatasets[string]["dataSource"],
    mapOptions: (item: RecordType) => ({
      value: String(item.id),
      label: String(item.name),
    }),
  },
}
