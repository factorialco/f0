import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, waitFor, zeroRender as render } from "@/testing/test-utils"

import type { DashboardCollectionItem } from "../types"

import { CollectionItem } from "../components/CollectionItem/CollectionItem"

type Employee = { id: string; name: string }

/** The grid is hidden — not unmounted — while an empty state is shown. */
function isGridHidden(container: HTMLElement) {
  return !!container.querySelector(".hidden table")
}

function pageOf(records: Employee[]) {
  return {
    type: "pages" as const,
    records,
    total: records.length,
    currentPage: 1,
    perPage: 10,
    pagesCount: Math.max(1, records.length),
  }
}

function collectionItem(
  fetchData: () => Promise<ReturnType<typeof pageOf>>,
  overrides: Partial<DashboardCollectionItem> = {}
): DashboardCollectionItem {
  return {
    id: "employees",
    type: "collection",
    title: "Employees",
    createSource: () => ({
      dataAdapter: { paginationType: "pages" as const, perPage: 10, fetchData },
    }),
    visualizations: [
      {
        type: "table" as const,
        options: {
          columns: [
            {
              id: "name",
              label: "Name",
              render: (item: Employee) => item.name,
            },
          ],
        },
      },
    ],
    ...overrides,
  }
}

describe("CollectionItem", () => {
  it("renders the rows it was given", async () => {
    render(
      <CollectionItem
        item={collectionItem(() =>
          Promise.resolve(pageOf([{ id: "1", name: "Alice" }]))
        )}
        filters={{}}
      />
    )

    expect(await screen.findByText("Alice")).toBeInTheDocument()
  })

  it("shows an empty state, not a header-only grid, when the query returns zero rows", async () => {
    const { container } = render(
      <CollectionItem
        item={collectionItem(() => Promise.resolve(pageOf([])))}
        filters={{}}
      />
    )

    expect(await screen.findByText("No data")).toBeInTheDocument()
    await waitFor(() => expect(isGridHidden(container)).toBe(true))
  })

  it("prefers the per-item copy for zero rows", async () => {
    render(
      <CollectionItem
        item={collectionItem(() => Promise.resolve(pageOf([])), {
          emptyState: {
            title: "No employees yet",
            description: "Invite someone to see them listed here.",
          },
        })}
        filters={{}}
      />
    )

    expect(await screen.findByText("No employees yet")).toBeInTheDocument()
    expect(
      screen.getByText("Invite someone to see them listed here.")
    ).toBeInTheDocument()
    expect(screen.queryByText("No data")).not.toBeInTheDocument()
  })

  it("refetches on retry and lands on the zero-row empty state", async () => {
    // The collection's own retry re-applies the current filters, which never
    // change for a dashboard item — without a real refetch the cleared error
    // uncovers the header-only grid this asserts against.
    const fetchData = vi
      .fn()
      .mockRejectedValueOnce(new Error("boom"))
      .mockResolvedValue(pageOf([]))

    const { container } = render(
      <CollectionItem item={collectionItem(fetchData)} filters={{}} />
    )

    await userEvent
      .setup()
      .click(await screen.findByRole("button", { name: "Retry" }))

    expect(await screen.findByText("No data")).toBeInTheDocument()
    expect(fetchData).toHaveBeenCalledTimes(2)
    expect(isGridHidden(container)).toBe(true)
  })
})
