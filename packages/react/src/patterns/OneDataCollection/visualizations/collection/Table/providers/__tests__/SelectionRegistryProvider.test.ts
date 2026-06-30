import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { useCreateSelectionRegistry } from "../SelectionRegistryProvider"

type Row = { id: string; name?: string }

describe("useCreateSelectionRegistry", () => {
  it("registers and unregisters ids", () => {
    const { result } = renderHook(() => useCreateSelectionRegistry<Row>())

    act(() => {
      result.current.register("1", { id: "1" })
      result.current.register("2", { id: "2" })
    })
    expect([...result.current.ids].sort()).toEqual(["1", "2"])

    act(() => result.current.unregister("1"))
    expect(result.current.ids).toEqual(["2"])
  })

  it("refreshes an existing entry's item without re-syncing ids", () => {
    // Contract that Row relies on: when a row's data changes it re-registers
    // the same id with a fresh item. That must update the stored entry but must
    // NOT change `ids` referentially — otherwise every data refresh would
    // re-render the whole table (the churn that drove the renderer OOM).
    const { result } = renderHook(() => useCreateSelectionRegistry<Row>())

    act(() => result.current.register("1", { id: "1", name: "old" }))
    const idsBefore = result.current.ids
    expect(idsBefore).toEqual(["1"])

    act(() => result.current.register("1", { id: "1", name: "new" }))
    expect(result.current.ids).toBe(idsBefore) // referentially stable → no re-render
    expect(result.current.getEntries()).toEqual([
      ["1", { id: "1", name: "new" }],
    ])
  })
})
