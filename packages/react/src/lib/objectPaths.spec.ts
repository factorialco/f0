import { describe, expect, it } from "vitest"
import { getValueByPath } from "./objectPaths"

describe("getValueByPath", () => {
  const testObject = {
    a: 1,
    b: {
      c: {
        d: "nested value",
        e: null,
        f: undefined,
      },
      g: [1, 2, 3],
      h: {
        i: {
          j: {
            k: "deeply nested",
          },
        },
      },
    },
    e: {
      f: "test",
    },
    emptyObject: {},
    booleanValue: true,
    numberValue: 42,
    stringValue: "hello",
    arrayValue: ["item1", "item2", "item3"],
  }

  describe("basic path access", () => {
    it("should return top-level property values", () => {
      expect(getValueByPath(testObject, "a")).toBe(1)
      expect(getValueByPath(testObject, "booleanValue")).toBe(true)
      expect(getValueByPath(testObject, "numberValue")).toBe(42)
      expect(getValueByPath(testObject, "stringValue")).toBe("hello")
    })

    it("should return nested property values", () => {
      expect(getValueByPath(testObject, "b.c.d")).toBe("nested value")
      expect(getValueByPath(testObject, "e.f")).toBe("test")
    })

    it("should return deeply nested property values", () => {
      expect(getValueByPath(testObject, "b.h.i.j.k")).toBe("deeply nested")
    })

    it("should return arrays and objects", () => {
      expect(getValueByPath(testObject, "b.g")).toEqual([1, 2, 3])
      expect(getValueByPath(testObject, "arrayValue")).toEqual(["item1", "item2", "item3"])
      expect(getValueByPath(testObject, "b.c")).toEqual({
        d: "nested value",
        e: null,
        f: undefined,
      })
    })
  })

  describe("handling null and undefined values", () => {
    it("should return null values correctly", () => {
      expect(getValueByPath(testObject, "b.c.e")).toBe(null)
    })

    it("should return undefined values correctly", () => {
      expect(getValueByPath(testObject, "b.c.f")).toBe(undefined)
    })
  })

  describe("invalid paths", () => {
    it("should return undefined for non-existent top-level properties", () => {
      expect(getValueByPath(testObject, "nonExistent")).toBe(undefined)
    })

    it("should return undefined for non-existent nested properties", () => {
      expect(getValueByPath(testObject, "a.nonExistent")).toBe(undefined)
      expect(getValueByPath(testObject, "b.nonExistent")).toBe(undefined)
      expect(getValueByPath(testObject, "b.c.nonExistent")).toBe(undefined)
    })

    it("should return undefined when traversing through non-object values", () => {
      expect(getValueByPath(testObject, "a.b.c")).toBe(undefined)
      expect(getValueByPath(testObject, "stringValue.length")).toBe(undefined)
      expect(getValueByPath(testObject, "booleanValue.toString")).toBe(undefined)
    })

    it("should return undefined for paths that go beyond available nesting", () => {
      expect(getValueByPath(testObject, "b.c.d.e.f")).toBe(undefined)
      expect(getValueByPath(testObject, "emptyObject.nonExistent.deep")).toBe(undefined)
    })
  })

  describe("edge cases", () => {
    it("should handle empty path strings", () => {
      expect(getValueByPath(testObject, "")).toBe(undefined)
    })

    it("should handle null objects", () => {
      expect(getValueByPath(null, "a")).toBe(undefined)
      expect(getValueByPath(null, "a.b.c")).toBe(undefined)
    })

    it("should handle undefined objects", () => {
      expect(getValueByPath(undefined, "a")).toBe(undefined)
      expect(getValueByPath(undefined, "a.b.c")).toBe(undefined)
    })

    it("should handle non-object inputs", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(getValueByPath("string" as any, "a")).toBe(undefined)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(getValueByPath(42 as any, "a")).toBe(undefined)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(getValueByPath(true as any, "a")).toBe(undefined)
    })

    it("should handle empty objects", () => {
      expect(getValueByPath({}, "a")).toBe(undefined)
      expect(getValueByPath({}, "a.b.c")).toBe(undefined)
    })

    it("should handle paths with single dots", () => {
      const objWithDots = {
        "a.b": "value with dots in key",
        c: {
          "d.e": "nested value with dots",
        },
      }
      // The function splits by dots, so it won't find keys that contain dots
      expect(getValueByPath(objWithDots, "a.b")).toBe(undefined)
      expect(getValueByPath(objWithDots, "c.d.e")).toBe(undefined)
    })
  })

  describe("complex nested structures", () => {
    const complexObject = {
      user: {
        profile: {
          personal: {
            name: "John Doe",
            age: 30,
          },
          preferences: {
            theme: "dark",
            notifications: {
              email: true,
              push: false,
            },
          },
        },
        permissions: {
          read: true,
          write: false,
          admin: {
            users: true,
            settings: false,
          },
        },
      },
      data: {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
        ],
        metadata: {
          total: 2,
          page: 1,
        },
      },
    }

    it("should handle complex nested object structures", () => {
      expect(getValueByPath(complexObject, "user.profile.personal.name")).toBe("John Doe")
      expect(getValueByPath(complexObject, "user.profile.personal.age")).toBe(30)
      expect(getValueByPath(complexObject, "user.profile.preferences.theme")).toBe("dark")
      expect(getValueByPath(complexObject, "user.profile.preferences.notifications.email")).toBe(
        true
      )
      expect(getValueByPath(complexObject, "user.profile.preferences.notifications.push")).toBe(
        false
      )
      expect(getValueByPath(complexObject, "user.permissions.read")).toBe(true)
      expect(getValueByPath(complexObject, "user.permissions.admin.users")).toBe(true)
      expect(getValueByPath(complexObject, "user.permissions.admin.settings")).toBe(false)
      expect(getValueByPath(complexObject, "data.items")).toEqual([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ])
      expect(getValueByPath(complexObject, "data.metadata.total")).toBe(2)
      expect(getValueByPath(complexObject, "data.metadata.page")).toBe(1)
    })
  })

  describe("real-world usage scenarios", () => {
    it("should handle the example from the user query", () => {
      const userExample = {
        a: 1,
        b: {
          c: {
            d: "hoasd",
          },
        },
        e: {
          f: "test",
        },
      }

      expect(getValueByPath(userExample, "a")).toBe(1)
      expect(getValueByPath(userExample, "b.c.d")).toBe("hoasd")
      expect(getValueByPath(userExample, "e.f")).toBe("test")
    })

    it("should handle permission-like nested structures", () => {
      const permissionObject = {
        permissions: {
          read: true,
          write: false,
          delete: true,
        },
        user: {
          role: "admin",
          department: "IT",
        },
      }

      expect(getValueByPath(permissionObject, "permissions.read")).toBe(true)
      expect(getValueByPath(permissionObject, "permissions.write")).toBe(false)
      expect(getValueByPath(permissionObject, "permissions.delete")).toBe(true)
      expect(getValueByPath(permissionObject, "user.role")).toBe("admin")
      expect(getValueByPath(permissionObject, "user.department")).toBe("IT")
    })
  })
})
