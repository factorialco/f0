import { describe, expect, it } from "vitest"
import { groupBy } from "../utils"

interface TestItem {
  id: number
  category: string
  name: string
  priority?: number
}

describe("groupBy", () => {
  describe("group order preservation", () => {
    it("should preserve group order based on first occurrence in the array", () => {
      const items: TestItem[] = [
        { id: 1, category: "urgent", name: "Task 1" },
        { id: 2, category: "normal", name: "Task 2" },
        { id: 3, category: "low", name: "Task 3" },
        { id: 4, category: "urgent", name: "Task 4" },
        { id: 5, category: "normal", name: "Task 5" },
        { id: 6, category: "critical", name: "Task 6" },
        { id: 7, category: "low", name: "Task 7" },
      ]

      const grouped = groupBy(items, "category")
      const groupKeys = Array.from(grouped.keys())

      // Groups should appear in the order they are first encountered:
      // urgent (id:1), normal (id:2), low (id:3), critical (id:6)
      expect(groupKeys).toEqual(["urgent", "normal", "low", "critical"])
    })

    it("should maintain group order even with mixed data types", () => {
      const items = [
        { id: 1, status: "active", name: "Item 1" },
        { id: 2, status: "inactive", name: "Item 2" },
        { id: 3, status: "pending", name: "Item 3" },
        { id: 4, status: "active", name: "Item 4" },
        { id: 5, status: "archived", name: "Item 5" },
        { id: 6, status: "pending", name: "Item 6" },
      ]

      const grouped = groupBy(items, "status")
      const groupKeys = Array.from(grouped.keys())

      expect(groupKeys).toEqual(["active", "inactive", "pending", "archived"])
    })

    it("should preserve group order with numeric keys", () => {
      const items = [
        { id: 1, priority: "3", name: "Task 1" },
        { id: 2, priority: "1", name: "Task 2" },
        { id: 3, priority: "2", name: "Task 3" },
        { id: 4, priority: "3", name: "Task 4" },
        { id: 5, priority: "1", name: "Task 5" },
      ]

      const grouped = groupBy(items, "priority")
      const groupKeys = Array.from(grouped.keys())

      // Should maintain order: 3 (first), 1 (second), 2 (third)
      expect(groupKeys).toEqual(["3", "1", "2"])
    })
  })

  describe("item order preservation within groups", () => {
    it("should preserve the original order of items within each group", () => {
      const items: TestItem[] = [
        { id: 1, category: "urgent", name: "First urgent" },
        { id: 2, category: "normal", name: "First normal" },
        { id: 3, category: "urgent", name: "Second urgent" },
        { id: 4, category: "low", name: "First low" },
        { id: 5, category: "normal", name: "Second normal" },
        { id: 6, category: "urgent", name: "Third urgent" },
        { id: 7, category: "normal", name: "Third normal" },
        { id: 8, category: "low", name: "Second low" },
      ]

      const grouped = groupBy(items, "category")

      // Check that items within each group maintain their original order
      expect(grouped.get("urgent")?.map((item) => item.id)).toEqual([1, 3, 6])
      expect(grouped.get("normal")?.map((item) => item.id)).toEqual([2, 5, 7])
      expect(grouped.get("low")?.map((item) => item.id)).toEqual([4, 8])

      // Also check names to be sure
      expect(grouped.get("urgent")?.map((item) => item.name)).toEqual([
        "First urgent",
        "Second urgent",
        "Third urgent",
      ])
      expect(grouped.get("normal")?.map((item) => item.name)).toEqual([
        "First normal",
        "Second normal",
        "Third normal",
      ])
    })

    it("should preserve item order in complex scenario with many groups", () => {
      const items = [
        { id: 10, category: "A", name: "A1" },
        { id: 20, category: "B", name: "B1" },
        { id: 30, category: "C", name: "C1" },
        { id: 11, category: "A", name: "A2" },
        { id: 40, category: "D", name: "D1" },
        { id: 21, category: "B", name: "B2" },
        { id: 12, category: "A", name: "A3" },
        { id: 31, category: "C", name: "C2" },
        { id: 22, category: "B", name: "B3" },
        { id: 41, category: "D", name: "D2" },
      ]

      const grouped = groupBy(items, "category")

      expect(grouped.get("A")?.map((item) => item.id)).toEqual([10, 11, 12])
      expect(grouped.get("B")?.map((item) => item.id)).toEqual([20, 21, 22])
      expect(grouped.get("C")?.map((item) => item.id)).toEqual([30, 31])
      expect(grouped.get("D")?.map((item) => item.id)).toEqual([40, 41])
    })
  })

  describe("edge cases", () => {
    it("should handle empty array", () => {
      const items: TestItem[] = []
      const grouped = groupBy(items, "category")

      expect(grouped).toEqual(new Map())
      expect(Array.from(grouped.keys())).toHaveLength(0)
    })

    it("should handle array with single item", () => {
      const items: TestItem[] = [{ id: 1, category: "single", name: "Only item" }]

      const grouped = groupBy(items, "category")

      expect(Array.from(grouped.keys())).toEqual(["single"])
      expect(grouped.get("single")?.length).toBe(1)
      expect(grouped.get("single")?.[0]).toEqual(items[0])
    })

    it("should handle all items having the same group key", () => {
      const items: TestItem[] = [
        { id: 1, category: "same", name: "Item 1" },
        { id: 2, category: "same", name: "Item 2" },
        { id: 3, category: "same", name: "Item 3" },
      ]

      const grouped = groupBy(items, "category")

      expect(Array.from(grouped.keys())).toEqual(["same"])
      expect(grouped.get("same")?.length).toBe(3)
      expect(grouped.get("same")?.map((item) => item.id)).toEqual([1, 2, 3])
    })

    it("should handle undefined and null values as group keys", () => {
      const items = [
        { id: 1, category: "defined", name: "Item 1" },
        { id: 2, category: undefined, name: "Item 2" },
        { id: 3, category: "defined", name: "Item 3" },
        { id: 4, category: undefined, name: "Item 4" },
      ]

      const grouped = groupBy(items, "category" as keyof (typeof items)[0])

      expect(Array.from(grouped.keys())).toEqual(["defined", "undefined"])
      expect(grouped.get("defined")?.map((item) => item.id)).toEqual([1, 3])
      expect(grouped.get("undefined")?.map((item) => item.id)).toEqual([2, 4])
    })

    it("should handle boolean values as group keys", () => {
      const items = [
        { id: 1, active: true, name: "Item 1" },
        { id: 2, active: false, name: "Item 2" },
        { id: 3, active: true, name: "Item 3" },
        { id: 4, active: false, name: "Item 4" },
      ]

      const grouped = groupBy(items, "active")

      expect(Array.from(grouped.keys())).toEqual(["true", "false"])
      expect(grouped.get("true")?.map((item) => item.id)).toEqual([1, 3])
      expect(grouped.get("false")?.map((item) => item.id)).toEqual([2, 4])
    })
  })

  describe("type safety and flexibility", () => {
    it("should work with different object structures", () => {
      interface User {
        name: string
        department: string
        role: string
      }

      const users: User[] = [
        { name: "Alice", department: "Engineering", role: "Developer" },
        { name: "Bob", department: "Marketing", role: "Manager" },
        { name: "Charlie", department: "Engineering", role: "Senior" },
        { name: "Diana", department: "Sales", role: "Manager" },
      ]

      const byDepartment = groupBy(users, "department")
      const byRole = groupBy(users, "role")

      expect(Array.from(byDepartment.keys())).toEqual(["Engineering", "Marketing", "Sales"])
      expect(Array.from(byRole.keys())).toEqual(["Developer", "Manager", "Senior"])

      expect(byDepartment.get("Engineering")?.map((u) => u.name)).toEqual(["Alice", "Charlie"])
      expect(byRole.get("Manager")?.map((u) => u.name)).toEqual(["Bob", "Diana"])
    })

    it("should maintain referential integrity of original objects", () => {
      const originalItems: TestItem[] = [
        { id: 1, category: "test", name: "Original" },
        { id: 2, category: "test", name: "Reference" },
      ]

      const grouped = groupBy(originalItems, "category")

      // Objects should be the same references, not copies
      expect(grouped.get("test")?.[0]).toBe(originalItems[0])
      expect(grouped.get("test")?.[1]).toBe(originalItems[1])
    })
  })

  describe("complex ordering scenarios", () => {
    it("should handle interleaved groups correctly", () => {
      // This test specifically checks if the implementation can handle
      // groups that appear, disappear, and reappear in the array
      const items = [
        { id: 1, type: "A", position: 1 },
        { id: 2, type: "B", position: 2 },
        { id: 3, type: "A", position: 3 },
        { id: 4, type: "C", position: 4 },
        { id: 5, type: "B", position: 5 },
        { id: 6, type: "A", position: 6 },
        { id: 7, type: "D", position: 7 },
        { id: 8, type: "C", position: 8 },
        { id: 9, type: "B", position: 9 },
      ]

      const grouped = groupBy(items, "type")

      // Group order should be: A (first at pos 1), B (first at pos 2),
      // C (first at pos 4), D (first at pos 7)
      expect(Array.from(grouped.keys())).toEqual(["A", "B", "C", "D"])

      // Item order within groups should be preserved
      expect(grouped.get("A")?.map((item) => item.position)).toEqual([1, 3, 6])
      expect(grouped.get("B")?.map((item) => item.position)).toEqual([2, 5, 9])
      expect(grouped.get("C")?.map((item) => item.position)).toEqual([4, 8])
      expect(grouped.get("D")?.map((item) => item.position)).toEqual([7])
    })
  })
})
