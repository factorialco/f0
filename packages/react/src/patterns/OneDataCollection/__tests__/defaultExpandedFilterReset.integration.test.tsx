import { act, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Observable } from "zen-observable-ts"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"

/**
 * Reproduces FCT-62014's follow-up against the mechanism the Teams v2 list
 * actually uses: children are "static" — an observable re-emits them (via a
 * `refreshChildren` callback) from an in-memory tree that the root fetch prunes
 * to the active filter, rather than a per-call fetch. A filter narrows a parent
 * to its matching child; clearing it must bring the full child set back, not the
 * filtered subset left over from before.
 */

type Team = { id: string; name: string }

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin = ""
  thresholds: readonly number[] = []
  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

const SALES: Team = { id: "sales", name: "Sales" }
// A team ordered before Sales, filtered out when a filter is active — so the
// matching-only view shifts Sales' row position, like the real list.
const DESIGN: Team = { id: "design", name: "Design" }
const SUBTEAMS: Team[] = [
  { id: "bcn", name: "Sales Barcelona" },
  { id: "online", name: "Sales Online" },
  { id: "reps", name: "Sales Representatives" },
  { id: "valencia", name: "Sales Valencia" },
]

const hasFilter = (filters: unknown) =>
  !!filters && typeof filters === "object" && Object.keys(filters).length > 0

const columns = [
  { id: "name", label: "Name", render: (t: Team) => t.name },
] as const

// --- static children, mirroring `useStaticChildrenDataCollection` -------------
const prunedChildren: { current: Record<string, Team[]> } = {
  current: { sales: SUBTEAMS },
}
const notify: Record<string, () => void> = {}
const refreshChildren = (parentId: string) => notify[parentId]?.()
const getChildren = (item: Team) => prunedChildren.current[item.id] ?? []

const fetchChildren = ({ item }: { item: Team }) =>
  new Observable((subscriber) => {
    const emit = () =>
      subscriber.next({
        loading: false,
        error: undefined,
        data: { records: getChildren(item), type: "basic" as const },
      })
    emit()
    notify[item.id] = emit
    return () => {
      delete notify[item.id]
    }
  })

const dataAdapter = {
  fetchData: async ({ filters }: { filters?: unknown }) => {
    // A real async gap: rows unmount/remount around it.
    await new Promise((r) => setTimeout(r, 0))
    const filtered = hasFilter(filters)
    // Prune the in-memory tree to the active filter, then re-emit children for
    // expanded parents — exactly what the Teams list does in its fetchData.
    prunedChildren.current = { sales: filtered ? [SUBTEAMS[2]] : SUBTEAMS }
    refreshChildren("sales")
    return { records: filtered ? [SALES] : [DESIGN, SALES] }
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let capturedSource: any

const Harness = () => {
  const source = useDataCollectionSource({
    dataAdapter,
    itemsWithChildren: (team: Team) => team.id === "sales",
    fetchChildren,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)
  capturedSource = source
  return (
    <OneDataCollection
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      source={source as any}
      visualizations={[
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { type: "table", options: { columns, defaultExpanded: 2 } } as any,
      ]}
    />
  )
}

describe("OneDataCollection nested defaultExpanded — static children filter reset", () => {
  it("restores the full child set after a filter is applied then cleared", async () => {
    prunedChildren.current = { sales: SUBTEAMS }
    render(<Harness />)

    // The tree starts open with the full set of sub-teams.
    await waitFor(() =>
      expect(screen.getByText("Sales Valencia")).toBeInTheDocument()
    )
    expect(screen.getByText("Sales Barcelona")).toBeInTheDocument()

    // Apply a filter → only the matching sub-team remains.
    act(() => {
      capturedSource.setCurrentFilters({ name: ["Samantha"] })
    })
    await waitFor(() =>
      expect(screen.getByText("Sales Representatives")).toBeInTheDocument()
    )
    await waitFor(() => expect(screen.queryByText("Sales Valencia")).toBeNull())

    // Clear the filter → the full set must come back, not the filtered subset.
    act(() => {
      capturedSource.setCurrentFilters({})
    })
    await waitFor(() =>
      expect(screen.getByText("Sales Valencia")).toBeInTheDocument()
    )
    expect(screen.getByText("Sales Barcelona")).toBeInTheDocument()
    expect(screen.getByText("Sales Online")).toBeInTheDocument()
  })
})
