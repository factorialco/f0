import { screen, waitFor } from "@testing-library/react"
import { useState } from "react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { F0Button } from "@/components/F0Button"
import {
  DataAdapter,
  PaginatedFetchOptions,
  RecordType,
} from "@/hooks/datasource"
import { LinkProvider } from "@/lib/linkHandler"
import { userEvent, zeroRender as render } from "@/testing/test-utils"

import { Breadcrumbs } from "../../index"
import { BreadcrumbCollectionSelectItemType } from "../../types"
import { BreadcrumbCollectionSelect } from "./index"

// Mock ResizeObserver - must be a class constructor for 'new ResizeObserver()' to work
global.ResizeObserver = class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
} as typeof ResizeObserver

// The dropdown interaction itself can't be exercised in jsdom (F0Select's
// virtualized option list doesn't materialize rows — same reason the
// BreadcrumbSelect suite is skipped), so selection is driven through the
// onChange contract: the real BreadcrumbSelect is wrapped with a test-only
// "pick" button that emits the selection a user click would produce.
const driver = vi.hoisted(() => ({
  selection: null as { value: string; record?: unknown } | null,
}))

vi.mock("../BreadcrumbSelect", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../BreadcrumbSelect")>()
  const BreadcrumbSelect: typeof actual.BreadcrumbSelect = (props) => (
    <>
      <actual.BreadcrumbSelect {...props} />
      {driver.selection && (
        <button
          aria-label="pick"
          onClick={() =>
            props.onChange?.(
              driver.selection!.value as Parameters<
                NonNullable<typeof props.onChange>
              >[0],
              driver.selection!.record as Parameters<
                NonNullable<typeof props.onChange>
              >[1]
            )
          }
        />
      )}
    </>
  )
  return { ...actual, BreadcrumbSelect }
})

type Employee = { id: string; name: string; department: string }

const EMPLOYEES: Employee[] = [
  { id: "1", name: "Alice", department: "Engineering" },
  { id: "2", name: "Bob", department: "Design" },
  { id: "3", name: "Carol", department: "Engineering" },
]

type TestFilters = {
  department: { type: "in"; label: string; options: { options: [] } }
}

const COLLECTION_ID = "test/employees/v1"
const STORAGE_KEY = `datacollection-${COLLECTION_ID}`

const makeFetchData = () =>
  vi.fn((options: PaginatedFetchOptions<TestFilters>) => {
    const departments = options.filters.department
    const records = EMPLOYEES.filter(
      (employee) =>
        !departments?.length || departments.includes(employee.department)
    )
    return Promise.resolve({
      type: "pages" as const,
      records,
      total: records.length,
      perPage: 10,
      currentPage: 1,
      pagesCount: 1,
    })
  })

const makeItem = (
  fetchData: ReturnType<typeof makeFetchData>,
  overrides: Partial<BreadcrumbCollectionSelectItemType> = {}
): BreadcrumbCollectionSelectItemType => ({
  id: "employee",
  type: "collection-select",
  label: "Alice",
  collectionId: COLLECTION_ID,
  source: {
    filters: {
      department: {
        type: "in",
        label: "Department",
        options: { options: [] },
      },
    },
    sortings: { name: { label: "Name" } },
    dataAdapter: {
      paginationType: "pages",
      perPage: 10,
      fetchData,
    } as DataAdapter<RecordType, Record<string, never>>,
  },
  mapOptions: (record) => {
    const employee = record as Employee
    return { value: employee.id, label: employee.name, item: record }
  },
  value: "1",
  getItemHref: (value) => `/employees/${value}`,
  ...overrides,
})

afterEach(() => {
  localStorage.clear()
  driver.selection = null
})

describe("BreadcrumbCollectionSelect", () => {
  it("seeds the persisted filters and sortings into the fetch", async () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        filters: { department: ["Engineering"], legacyFilter: "stale" },
        sortings: { field: "name", order: "desc" },
      })
    )
    const fetchData = makeFetchData()

    render(<BreadcrumbCollectionSelect item={makeItem(fetchData)} />)

    await waitFor(() => expect(fetchData).toHaveBeenCalled())
    const options = fetchData.mock.calls[0][0]
    expect(options.filters).toEqual({ department: ["Engineering"] })
    expect(options.sortings).toEqual(
      expect.arrayContaining([{ field: "name", order: "desc" }])
    )
    expect(options.search).toBeFalsy()
  })

  it("fetches unfiltered when there is no persisted state", async () => {
    const fetchData = makeFetchData()

    render(<BreadcrumbCollectionSelect item={makeItem(fetchData)} />)

    await waitFor(() => expect(fetchData).toHaveBeenCalled())
    expect(fetchData.mock.calls[0][0].filters).toEqual({})
  })

  it("shows the item label on the trigger immediately (direct link)", () => {
    const fetchData = makeFetchData()
    render(<BreadcrumbCollectionSelect item={makeItem(fetchData)} />)
    expect(screen.getByRole("combobox", { name: "Alice" })).toBeInTheDocument()
  })

  it("renders inside Breadcrumbs as the last crumb", async () => {
    const fetchData = makeFetchData()
    render(
      <Breadcrumbs
        breadcrumbs={[
          { id: "employees", label: "Employees", href: "/employees" },
          makeItem(fetchData),
        ]}
      />
    )
    expect(
      (await screen.findAllByRole("combobox", { name: "Alice" })).length
    ).toBeGreaterThan(0)
  })

  it("navigates through the LinkProvider when an option is picked", async () => {
    const fetchData = makeFetchData()
    const navigatedTo = vi.fn()
    driver.selection = { value: "2", record: EMPLOYEES[1] }

    render(
      <LinkProvider
        component={({ href, children, ...props }, ref) => (
          <a
            {...props}
            href={href}
            ref={ref}
            onClick={(event) => {
              event.preventDefault()
              navigatedTo(href)
            }}
          >
            {children}
          </a>
        )}
      >
        <BreadcrumbCollectionSelect item={makeItem(fetchData)} />
      </LinkProvider>
    )

    await userEvent.click(screen.getByRole("button", { name: "pick" }))
    await waitFor(() =>
      expect(navigatedTo).toHaveBeenCalledWith("/employees/2")
    )
  })

  it("calls onSelect with the picked value and record", async () => {
    const fetchData = makeFetchData()
    const onSelect = vi.fn()
    driver.selection = { value: "3", record: EMPLOYEES[2] }

    render(
      <BreadcrumbCollectionSelect
        item={makeItem(fetchData, {
          onSelect,
          getItemHref: () => undefined,
        })}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: "pick" }))
    expect(onSelect).toHaveBeenCalledWith("3", EMPLOYEES[2])
  })

  it("treats re-selecting the current value as a no-op", async () => {
    const fetchData = makeFetchData()
    const onSelect = vi.fn()
    const getItemHref = vi.fn(() => undefined)
    // Picks the already-current value (Alice = "1")
    driver.selection = { value: "1", record: EMPLOYEES[0] }

    render(
      <BreadcrumbCollectionSelect
        item={makeItem(fetchData, { onSelect, getItemHref })}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: "pick" }))
    await new Promise((resolve) => setTimeout(resolve, 10))
    expect(onSelect).not.toHaveBeenCalled()
    expect(getItemHref).not.toHaveBeenCalled()
  })

  it("fetches exactly once even when the parent recreates the item every render (loop regression)", async () => {
    const fetchData = makeFetchData()

    const Parent = () => {
      const [, setTick] = useState(0)
      return (
        <>
          <F0Button
            label="rerender"
            onClick={() => setTick((tick) => tick + 1)}
          />
          {/* A fresh item object (and source/adapter/callbacks) every render */}
          <BreadcrumbCollectionSelect item={makeItem(fetchData)} />
        </>
      )
    }

    render(<Parent />)
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(1))

    const button = screen.getByRole("button", { name: "rerender" })
    await userEvent.click(button)
    await userEvent.click(button)
    await userEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 20))

    expect(fetchData).toHaveBeenCalledTimes(1)
  })
})
