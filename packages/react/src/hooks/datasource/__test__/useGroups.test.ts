import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { GroupRecord } from "../useData"
import { useGroups } from "../useGroups"

type TestRecord = { id: number; name: string }

const buildGroups = (
  keys: string[],
  records: TestRecord[] = []
): GroupRecord<TestRecord>[] =>
  keys.map((key) => ({
    key,
    label: key,
    itemCount: records.length,
    records,
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

  describe("when the records of the same groups change", () => {
    it("keeps the groups the user toggled", () => {
      const { result, rerender } = renderHook(
        ({ groups }) => useGroups(groups, false),
        {
          initialProps: {
            groups: buildGroups(["a", "b"], [{ id: 1, name: "one" }]),
          },
        }
      )

      act(() => {
        result.current.setGroupOpen("a", true)
      })

      rerender({ groups: buildGroups(["a", "b"], [{ id: 2, name: "two" }]) })

      expect(result.current.openGroups).toEqual({ a: true, b: false })
    })

    it("seeds only the groups that were not known before", () => {
      const { result, rerender } = renderHook(
        ({ groups }) => useGroups(groups, false),
        { initialProps: { groups: buildGroups(["a"]) } }
      )

      act(() => {
        result.current.setGroupOpen("a", true)
      })

      rerender({ groups: buildGroups(["a", "b"]) })

      expect(result.current.openGroups).toEqual({ a: true, b: false })
    })
  })

  describe("nested groups", () => {
    const nested: GroupRecord<TestRecord>[] = [
      {
        key: "a",
        label: "a",
        itemCount: 0,
        records: [],
        subGroups: [
          { key: "a-1", label: "1", itemCount: 0, records: [] },
          {
            key: "a-2",
            label: "2",
            itemCount: 0,
            records: [],
            subGroups: [
              { key: "a-2-i", label: "i", itemCount: 0, records: [] },
            ],
          },
        ],
      },
      { key: "b", label: "b", itemCount: 0, records: [] },
    ]

    it("seeds every level, not just the top one", () => {
      const { result } = renderHook(() => useGroups(nested, true))

      expect(result.current.openGroups).toEqual({
        a: true,
        "a-1": true,
        "a-2": true,
        "a-2-i": true,
        b: true,
      })
    })

    it("opens only the listed keys at any depth", () => {
      const { result } = renderHook(() => useGroups(nested, ["a", "a-2-i"]))

      expect(result.current.openGroups).toEqual({
        a: true,
        "a-1": false,
        "a-2": false,
        "a-2-i": true,
        b: false,
      })
    })

    it("toggles a nested group without affecting its parent or siblings", () => {
      const { result } = renderHook(() => useGroups(nested, true))

      act(() => {
        result.current.setGroupOpen("a-1", false)
      })

      expect(result.current.openGroups.a).toBe(true)
      expect(result.current.openGroups["a-1"]).toBe(false)
      expect(result.current.openGroups["a-2"]).toBe(true)
    })
  })
})
