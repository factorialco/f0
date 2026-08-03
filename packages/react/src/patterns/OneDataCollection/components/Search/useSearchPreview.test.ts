import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import type { RecordType } from "@/hooks/datasource"

import type {
  SearchPreview,
  SearchPreviewPage,
} from "../../hooks/useDataCollectionSource/types"
import { useSearchPreview } from "./useSearchPreview"

type Person = RecordType & { id: string; name: string; role: string }

const people: Person[] = [
  { id: "1", name: "Ada Lovelace", role: "Engineer" },
  { id: "2", name: "Alan Turing", role: "Scientist" },
]

const buildPreview = (
  onSelect: (record: Person) => void
): SearchPreview<Person> => ({
  search: vi.fn(async (query: string) =>
    people.filter((person) =>
      person.name.toLowerCase().includes(query.toLowerCase())
    )
  ),
  getId: (person) => person.id,
  render: (person) => ({ title: person.name, subtitle: person.role }),
  onSelect,
})

// A larger corpus for pagination tests: 12 people all matching "person".
const manyPeople: Person[] = Array.from({ length: 12 }, (_unused, index) => ({
  id: String(index + 1),
  name: `Person ${index + 1}`,
  role: "Role",
}))

const PAGE_SIZE = 5

// A paginated preview: `search(query, page)` returns one window of matches plus
// a `hasMore` flag, mirroring how a real consumer pages over its own corpus.
const buildPaginatedPreview = (
  onSelect: (record: Person) => void = vi.fn()
): SearchPreview<Person> => ({
  search: vi.fn(
    async (query: string, page = 0): Promise<SearchPreviewPage<Person>> => {
      const matches = manyPeople.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      )
      const start = page * PAGE_SIZE
      return {
        records: matches.slice(start, start + PAGE_SIZE),
        hasMore: start + PAGE_SIZE < matches.length,
      }
    }
  ),
  getId: (person) => person.id,
  render: (person) => ({ title: person.name, subtitle: person.role }),
  onSelect,
})

describe("useSearchPreview", () => {
  it("maps matching records to preview rows for the current query", async () => {
    const preview = buildPreview(vi.fn())
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    expect(result.current.results).toHaveLength(0)

    rerender({ query: "ada" })

    await waitFor(() => expect(result.current.results).toHaveLength(1))
    expect(result.current.results[0]).toMatchObject({
      id: "1",
      title: "Ada Lovelace",
      subtitle: "Engineer",
    })
  })

  it("forwards the picked record to onSelect", async () => {
    const onSelect = vi.fn()
    const preview = buildPreview(onSelect)
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "alan" })
    await waitFor(() => expect(result.current.results).toHaveLength(1))

    act(() => result.current.onSelect("2"))
    expect(onSelect).toHaveBeenCalledWith(people[1])
  })

  it("bumps selectionNonce on every pick, including a repeat of the same record", async () => {
    const preview = buildPreview(vi.fn())
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "alan" })
    await waitFor(() => expect(result.current.results).toHaveLength(1))

    expect(result.current.selectionNonce).toBe(0)
    act(() => result.current.onSelect("2"))
    expect(result.current.selectionNonce).toBe(1)
    // Re-picking the same record still advances the nonce, so a consumer can
    // re-fire (e.g. re-center the graph) even though its derived id is unchanged.
    act(() => result.current.onSelect("2"))
    expect(result.current.selectionNonce).toBe(2)
  })

  it("does not bump selectionNonce when the id matches no loaded record", async () => {
    const preview = buildPreview(vi.fn())
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "alan" })
    await waitFor(() => expect(result.current.results).toHaveLength(1))

    act(() => result.current.onSelect("does-not-exist"))
    expect(result.current.selectionNonce).toBe(0)
  })

  it("clears results when the query is empty", async () => {
    const preview = buildPreview(vi.fn())
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "ada" as string | undefined } }
    )

    await waitFor(() => expect(result.current.results).toHaveLength(1))

    rerender({ query: "" })
    await waitFor(() => expect(result.current.results).toHaveLength(0))
  })

  it("loads the first page and reports there is more to load", async () => {
    const preview = buildPaginatedPreview()
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "person" })

    await waitFor(() => expect(result.current.results).toHaveLength(PAGE_SIZE))
    expect(result.current.hasMore).toBe(true)
    expect(result.current.loadingMore).toBe(false)
  })

  it("appends the next page on onLoadMore until exhausted", async () => {
    const preview = buildPaginatedPreview()
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "person" })
    await waitFor(() => expect(result.current.results).toHaveLength(5))

    act(() => result.current.onLoadMore())
    await waitFor(() => expect(result.current.results).toHaveLength(10))
    expect(result.current.hasMore).toBe(true)

    act(() => result.current.onLoadMore())
    await waitFor(() => expect(result.current.results).toHaveLength(12))
    // Last page reached — no further pages.
    expect(result.current.hasMore).toBe(false)
    // Rows stay unique across pages (no duplication when appending).
    expect(new Set(result.current.results.map((r) => r.id)).size).toBe(12)
  })

  it("does not fetch again when there are no more pages", async () => {
    const preview = buildPaginatedPreview()
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "person" })
    await waitFor(() => expect(result.current.results).toHaveLength(5))
    act(() => result.current.onLoadMore())
    await waitFor(() => expect(result.current.results).toHaveLength(10))
    act(() => result.current.onLoadMore())
    await waitFor(() => expect(result.current.hasMore).toBe(false))

    const callsBefore = (preview.search as ReturnType<typeof vi.fn>).mock.calls
      .length
    act(() => result.current.onLoadMore())
    expect((preview.search as ReturnType<typeof vi.fn>).mock.calls.length).toBe(
      callsBefore
    )
    expect(result.current.results).toHaveLength(12)
  })

  it("resets to the first page when the query changes", async () => {
    const preview = buildPaginatedPreview()
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "person" })
    await waitFor(() => expect(result.current.results).toHaveLength(5))
    act(() => result.current.onLoadMore())
    await waitFor(() => expect(result.current.results).toHaveLength(10))

    // A new query starts fresh at page 0 (results replaced, not appended).
    rerender({ query: "person 1" })
    await waitFor(() =>
      expect(result.current.results.length).toBeLessThanOrEqual(PAGE_SIZE)
    )
    expect(
      result.current.results.every((r) => r.title.startsWith("Person 1"))
    ).toBe(true)
  })

  it("treats a bare array as a single non-paginated page", async () => {
    const preview = buildPreview(vi.fn())
    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "" as string | undefined } }
    )

    rerender({ query: "a" })
    await waitFor(() => expect(result.current.results).toHaveLength(2))
    expect(result.current.hasMore).toBe(false)

    const callsBefore = (preview.search as ReturnType<typeof vi.fn>).mock.calls
      .length
    act(() => result.current.onLoadMore())
    // No `hasMore`, so load-more is a no-op — no extra fetch.
    expect((preview.search as ReturnType<typeof vi.fn>).mock.calls.length).toBe(
      callsBefore
    )
  })

  it("drops a stale response when the query changes before it resolves", async () => {
    const resolvers: Record<string, (page: SearchPreviewPage<Person>) => void> =
      {}
    const preview: SearchPreview<Person> = {
      search: vi.fn(
        (query: string) =>
          new Promise<SearchPreviewPage<Person>>((resolve) => {
            resolvers[query] = resolve
          })
      ),
      getId: (person) => person.id,
      render: (person) => ({ title: person.name, subtitle: person.role }),
      onSelect: vi.fn(),
    }

    const { result, rerender } = renderHook(
      ({ query }) => useSearchPreview(preview, query),
      { initialProps: { query: "ada" as string | undefined } }
    )

    // Switch query before the "ada" request resolves.
    rerender({ query: "alan" })

    // Resolve the current ("alan") request first — this one should win.
    act(() => resolvers["alan"]?.({ records: [people[1]!], hasMore: false }))
    await waitFor(() => expect(result.current.results).toHaveLength(1))
    expect(result.current.results[0]?.id).toBe("2")

    // Now the stale ("ada") request resolves late — it must be ignored.
    act(() => resolvers["ada"]?.({ records: [people[0]!], hasMore: false }))
    expect(result.current.results).toHaveLength(1)
    expect(result.current.results[0]?.id).toBe("2")
  })
})
