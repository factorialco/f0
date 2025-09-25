import { describe, expect, it } from "vitest"
import { parseStorageKey, validateStorageKey } from "../validateStorageKey"

describe("validateStorageKey", () => {
  describe("valid keys", () => {
    it("should accept simple name with version", () => {
      expect(validateStorageKey("employees/v1")).toBe(true)
    })

    it("should accept path-like names with version", () => {
      expect(validateStorageKey("employees/list/v1")).toBe(true)
      expect(validateStorageKey("products/categories/v2")).toBe(true)
      expect(validateStorageKey("admin/users/settings/v1")).toBe(true)
    })

    it("should accept names ending with slash", () => {
      expect(validateStorageKey("employees/list/v1")).toBe(true)
    })

    it("should not accept semantic versions", () => {
      expect(validateStorageKey("employees/v1.0")).toBe(false)
      expect(validateStorageKey("employees/v1.2.3")).toBe(false)
      expect(validateStorageKey("employees/v2.0.0")).toBe(false)
    })

    it("should not accept alphanumeric versions", () => {
      expect(validateStorageKey("employees/v1")).toBe(true)
      expect(validateStorageKey("employees/v2alpha")).toBe(false)
      expect(validateStorageKey("employees/v1beta2")).toBe(false)
    })
  })

  describe("invalid keys", () => {
    it("should reject empty or null keys", () => {
      expect(validateStorageKey("")).toBe(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(validateStorageKey(null as any)).toBe(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(validateStorageKey(undefined as any)).toBe(false)
    })

    it("should reject keys without slashes", () => {
      expect(validateStorageKey("employees")).toBe(false)
      expect(validateStorageKey("v1")).toBe(false)
    })

    it("should reject keys without version", () => {
      expect(validateStorageKey("employees/")).toBe(false)
      expect(validateStorageKey("employees/list/")).toBe(false)
    })

    it("should reject empty names", () => {
      expect(validateStorageKey("/v1")).toBe(false)
      expect(validateStorageKey("  /v1")).toBe(false)
    })

    it("should reject versions not starting with 'v'", () => {
      expect(validateStorageKey("employees/1")).toBe(false)
      expect(validateStorageKey("employees/version1")).toBe(false)
      expect(validateStorageKey("employees/2.0")).toBe(false)
    })

    it("should reject version with only 'v'", () => {
      expect(validateStorageKey("employees/v")).toBe(false)
    })

    it("should reject versions with invalid characters", () => {
      expect(validateStorageKey("employees/v1@")).toBe(false)
      expect(validateStorageKey("employees/v1#")).toBe(false)
      expect(validateStorageKey("employees/v1-beta")).toBe(false)
      expect(validateStorageKey("employees/v1_beta")).toBe(false)
    })

    it("should reject non-string types", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(validateStorageKey(123 as any)).toBe(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(validateStorageKey({} as any)).toBe(false)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      expect(validateStorageKey([] as any)).toBe(false)
    })
  })
})

describe("parseStorageKey", () => {
  describe("valid keys", () => {
    it("should parse simple keys correctly", () => {
      const result = parseStorageKey("employees/v1")
      expect(result).toEqual({
        name: "employees",
        version: "v1",
      })
    })

    it("should parse path-like names correctly", () => {
      const result = parseStorageKey("employees/list/v2")
      expect(result).toEqual({
        name: "employees/list",
        version: "v2",
      })
    })

    it("should parse complex paths correctly", () => {
      const result = parseStorageKey("admin/users/settings/v123")
      expect(result).toEqual({
        name: "admin/users/settings",
        version: "v123",
      })
    })

    it("should handle multiple slashes in name", () => {
      const result = parseStorageKey("a/b/c/d/v1")
      expect(result).toEqual({
        name: "a/b/c/d",
        version: "v1",
      })
    })
  })

  describe("invalid keys", () => {
    it("should return null for invalid keys", () => {
      expect(parseStorageKey("")).toBe(null)
      expect(parseStorageKey("employees")).toBe(null)
      expect(parseStorageKey("/v1")).toBe(null)
      expect(parseStorageKey("employees/1")).toBe(null)
      expect(parseStorageKey("employees/v")).toBe(null)
    })
  })
})
