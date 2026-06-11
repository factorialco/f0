import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { F0SelectItemProps } from "@/components/F0Select/types"
import { FiltersDefinition } from "@/patterns/OneFilterPicker"
import {
  PageBasedPaginatedResponse,
  PaginatedFetchOptions,
} from "@/hooks/datasource"
import { writeDataCollectionStorage } from "@/lib/providers/datacollection/dataCollectionUrlParams"
import {
  FIRST_NAMES_MOCK,
  getMockValue,
  MOCK_ICONS,
  SURNAMES_MOCK,
} from "@/mocks"

import { Breadcrumbs, BreadcrumbsProps } from "./index"

const meta: Meta<typeof Breadcrumbs> = {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        module: "ats",
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/recruitment/candidates",
      },
      { id: "dani-moreno", label: "Dani Moreno" },
    ],
  },
}

export const LoadingLastItem: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        module: "ats",
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/recruitment/candidates",
      },
      { id: "loading", label: "Loading", loading: true },
    ],
  },
}

export const LoadingLastTwoItems: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        module: "ats",
      },
      { id: "loading-1", label: "Loading", loading: true },
      { id: "loading-2", label: "Loading", loading: true },
    ],
  },
}

export const WithSelectBreadcrumb: Story = {
  args: {
    breadcrumbs: [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        module: "ats",
      },
      {
        id: "offers",
        label: "Offers",
        href: "/offers",
      },
      {
        id: "my-entity",
        type: "select",
        searchbox: true,
        options: Array.from({ length: 10 }, (_, idx) => ({
          value: idx.toString(),
          label: `Offer ${idx}`,
        })),
        label: `Offer 1`,
        value: "1",
        onChange: (value) => {
          console.log("WithSelectBreadcrumb value", value)
        },
      },
    ],
  },
}

const mockItemsLargeDataset = Array.from({ length: 10000 }, (_, i) => ({
  value: `option-${i}`,
  label: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  icon: getMockValue(MOCK_ICONS, i),
  description: `Description for option ${i}`,
}))
type MockItemLargeDataset = (typeof mockItemsLargeDataset)[number]

export const WithSelectBreadcrumbWithDatasource: Story = {
  render: () => {
    const source = {
      dataAdapter: {
        paginationType: "infinite-scroll",
        fetchData: (options: PaginatedFetchOptions<FiltersDefinition>) => {
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
    }

    return (
      <Breadcrumbs
        breadcrumbs={[
          {
            id: "recruitment",
            label: "Recruitment",
            href: "/recruitment",
            module: "ats",
          },
          {
            id: "offers",
            label: "Offers",
            href: "/offers",
          },
          {
            id: "my-entity",
            type: "select",
            searchbox: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            source: source as any,
            mapOptions: (
              item
            ): F0SelectItemProps<string, MockItemLargeDataset> => ({
              value: item.value as string,
              label: item.label as string,
              icon: item.icon as IconType,
              description: item.description as string,
            }),
            label: `Offer 1`,
            value: "option-1",
            onChange: (value) => {
              console.log("WithSelectBreadcrumb value", value)
            },
          },
        ]}
      />
    )
  },
  args: {},
}

const employeesMock = Array.from({ length: 60 }, (_, i) => ({
  id: `${i + 1}`,
  name: `${getMockValue(FIRST_NAMES_MOCK, i)} ${getMockValue(SURNAMES_MOCK, i)}`,
  department: i % 2 === 0 ? "Engineering" : "Design",
}))
type EmployeeMock = (typeof employeesMock)[number]

/**
 * A jump-to select bound to a OneDataCollection: pass the list's declared
 * source + its collection id and F0 seeds the persisted filters/sortings,
 * consumes the `pages` adapter as infinite scroll, and navigates via
 * `getItemHref`. Here the persisted state (department = Engineering, sorted
 * by name) is written to localStorage before rendering — the dropdown only
 * lists Engineering employees, in name order, without the list mounted.
 * With `showFilters` the dropdown also renders the declared filters as an
 * editable picker, pre-applied with that seeded state, so users can refine
 * the jump-to list in place.
 */
export const WithCollectionBoundSelect: Story = {
  render: () => {
    writeDataCollectionStorage("storybook/employees-breadcrumb/v1", {
      filters: { department: ["Engineering"] },
      sortings: { field: "name", order: "asc" },
    })

    const source = {
      filters: {
        department: {
          type: "in" as const,
          label: "Department",
          options: {
            options: [
              { value: "Engineering", label: "Engineering" },
              { value: "Design", label: "Design" },
            ],
          },
        },
      },
      sortings: { name: { label: "Name" } },
      dataAdapter: {
        paginationType: "pages" as const,
        perPage: 10,
        fetchData: (options: PaginatedFetchOptions<FiltersDefinition>) => {
          const departments = options.filters.department as string[] | undefined
          const search = options.search?.toLowerCase()
          let results = employeesMock.filter(
            (employee) =>
              !departments?.length || departments.includes(employee.department)
          )
          if (search) {
            results = results.filter((employee) =>
              employee.name.toLowerCase().includes(search)
            )
          }
          const sorting = options.sortings.find((s) => s.field === "name")
          if (sorting) {
            results = [...results].sort(
              (a, b) =>
                a.name.localeCompare(b.name) *
                (sorting.order === "asc" ? 1 : -1)
            )
          }
          const currentPage =
            "currentPage" in options.pagination
              ? (options.pagination.currentPage ?? 1)
              : 1
          return new Promise<PageBasedPaginatedResponse<EmployeeMock>>(
            (resolve) =>
              setTimeout(
                () =>
                  resolve({
                    type: "pages" as const,
                    records: results.slice(
                      (currentPage - 1) * 10,
                      currentPage * 10
                    ),
                    total: results.length,
                    perPage: 10,
                    currentPage,
                    pagesCount: Math.ceil(results.length / 10),
                  }),
                100
              )
          )
        },
      },
    }

    return (
      <Breadcrumbs
        breadcrumbs={[
          {
            id: "employees",
            label: "Employees",
            href: "/employees",
            module: "employees",
          },
          {
            id: "employee-detail",
            type: "collection-select",
            collectionId: "storybook/employees-breadcrumb/v1",
            source,
            searchbox: true,
            showFilters: true,
            mapOptions: (item) => {
              const employee = item as EmployeeMock
              return {
                value: employee.id,
                label: employee.name,
                description: employee.department,
                item,
              }
            },
            label: employeesMock[0].name,
            value: employeesMock[0].id,
            getItemHref: (value) => `#/employees/${value}`,
          },
        ]}
      />
    )
  },
  args: {},
}

export const LongBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { id: "documents", label: "Documents", href: "/", module: "documents" },
      {
        id: "employee-documents",
        label: "Employee Documents",
        href: "/documents",
      },
      {
        id: "human-resources",
        label: "Human Resources",
        href: "/documents/hr",
      },
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/documents/hr/recruitment",
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/documents/hr/recruitment/candidates",
      },
      {
        id: "dani-moreno",
        label: "Dani Moreno",
        href: "/dani-moreno",
      },
      {
        id: "applications",
        label: "Applications",
        href: "/dani-moreno/applications",
      },
      {
        id: "interviews",
        label: "Interviews",
        href: "/dani-moreno/applications/interviews",
      },
    ],
  },
}

export const Interactive: Story = {
  render: () => {
    const recruitmentBreadcrumbs: BreadcrumbsProps["breadcrumbs"] = [
      {
        id: "recruitment",
        label: "Recruitment",
        href: "/recruitment",
        module: "ats",
      },
      {
        id: "candidates",
        label: "Candidates",
        href: "/recruitment/candidates",
      },
      {
        id: "dani-moreno",
        label: "Dani Moreno",
        href: "/recruitment/candidates/dani-moreno",
      },
      {
        id: "applications",
        label: "Applications",
        href: "/recruitment/candidates/dani-moreno/applications",
      },
    ]

    const documentsBreadcrumbs: BreadcrumbsProps["breadcrumbs"] = [
      {
        id: "documents",
        label: "Documents",
        href: "/documents",
        module: "documents",
      },
      {
        id: "employee-documents",
        label: "Employee Documents",
        href: "/documents/employee",
      },
      {
        id: "contracts",
        label: "Contracts",
        href: "/documents/employee/contracts",
      },
      {
        id: "templates",
        label: "Templates",
        href: "/documents/employee/contracts/templates",
      },
    ]

    const [currentSection, setCurrentSection] = useState<
      "recruitment" | "documents"
    >("recruitment")
    const [breadcrumbs, setBreadcrumbs] = useState<
      BreadcrumbsProps["breadcrumbs"]
    >(recruitmentBreadcrumbs)

    const handleAdd = () => {
      const sourceBreadcrumbs =
        currentSection === "recruitment"
          ? recruitmentBreadcrumbs
          : documentsBreadcrumbs
      if (breadcrumbs.length < sourceBreadcrumbs.length) {
        setBreadcrumbs((prev) => [...prev, sourceBreadcrumbs[prev.length]])
      }
    }

    const handleRemove = () => {
      setBreadcrumbs((prev) => prev.slice(0, -1))
    }

    const handleSwitch = () => {
      const newSection =
        currentSection === "recruitment" ? "documents" : "recruitment"
      setCurrentSection(newSection)
      setBreadcrumbs(
        newSection === "recruitment"
          ? recruitmentBreadcrumbs
          : documentsBreadcrumbs
      )
    }

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <F0Button
            onClick={handleAdd}
            disabled={
              breadcrumbs.length >=
              (currentSection === "recruitment"
                ? recruitmentBreadcrumbs.length
                : documentsBreadcrumbs.length)
            }
            variant="outline"
            label="Add Breadcrumb"
          ></F0Button>
          <F0Button
            onClick={handleRemove}
            disabled={breadcrumbs.length <= 1}
            variant="outline"
            label="Remove Breadcrumb"
          ></F0Button>
          <F0Button
            onClick={handleSwitch}
            variant="outline"
            label="Switch Section"
          ></F0Button>
        </div>
        <div
          className="flex w-full items-center"
          data-testid="breadcrumbs-container"
        >
          <Breadcrumbs key={currentSection} breadcrumbs={breadcrumbs} />
        </div>
      </div>
    )
  },
}
