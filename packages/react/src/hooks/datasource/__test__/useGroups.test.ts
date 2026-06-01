import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { GroupRecord } from "../useData"
import { useGroups } from "../useGroups"

type TestRecord = { id: number; name: string }

const buildGroups = (keys: string[]): GroupRecord<TestRecord>[] =>
  keys.map((key) => ({
    key,
    label: key,
    itemCount: 0,
    records: [],
  }))

describe("useGroups", () => {
  describe("initial render (no flicker)", () => {
    it("opens all groups synchronously when defaultOpenGroups=true", () => {
      const groups = buildGroups(["a", "b", "c"])
      const { result } = renderHook(() => useGroups(groups, true))

      expect(result.current.openGroups).toEqual({
        a: true,
        b: true,
        c: true,
      })
    })

    it("closes all groups synchronously when defaultOpenGroups=false", () => {
      const groups = buildGroups(["a", "b"])
      const { result } = renderHook(() => useGroups(groups, false))

      expect(result.current.openGroups).toEqual({ a: false, b: false })
    })

    it("opens only listed groups synchronously when defaultOpenGroups is an array", () => {
      const groups = buildGroups(["a", "b", "c"])
      const { result } = renderHook(() => useGroups(groups, ["a", "c"]))

      expect(result.current.openGroups).toEqual({
        a: true,
        b: false,
        c: true,
      })
    })

    it("closes all groups synchronously when defaultOpenGroups is omitted (defaults to [])", () => {
      const groups = buildGroups(["a", "b"])
      const { result } = renderHook(() => useGroups(groups))

      expect(result.current.openGroups).toEqual({ a: false, b: false })
    })

    it("returns an empty map when groups is empty", () => {
      const { result } = renderHook(() => useGroups<TestRecord>([], true))

      expect(result.current.openGroups).toEqual({})
    })
  })

  describe("setGroupOpen", () => {
    it("toggles a single group's open state without affecting others", () => {
      const groups = buildGroups(["a", "b"])
      const { result } = renderHook(() => useGroups(groups, true))

      act(() => {
        result.current.setGroupOpen("a", false)
      })

      expect(result.current.openGroups).toEqual({ a: false, b: true })
    })
  })

  describe("when groups arrive asynchronously", () => {
    it("populates defaults once groups become non-empty", () => {
      const { result, rerender } = renderHook(
        ({ groups }) => useGroups(groups, true),
        { initialProps: { groups: [] as GroupRecord<TestRecord>[] } }
      )

      expect(result.current.openGroups).toEqual({})

      rerender({ groups: buildGroups(["x", "y"]) })

      expect(result.current.openGroups).toEqual({ x: true, y: true })
    })
  })
})
