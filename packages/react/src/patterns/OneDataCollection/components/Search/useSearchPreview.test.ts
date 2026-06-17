import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import type { RecordType } from "@/hooks/datasource"

import type { SearchPreview } from "../../hooks/useDataCollectionSource/types"
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
})
