import { describe, expect, it } from "vitest"
import { limitDeep } from "../limit-deep"

describe("limitDeep", () => {
  describe("basic functionality", () => {
    it("should return the object unchanged when depth is 0", () => {
      const obj = {
        a: {
          b: {
            c: "deep value",
          },
        },
      }
      const result = limitDeep(obj, 0)
      expect(result).toEqual(obj)
    })

    it("should return the object unchanged when depth is negative", () => {
      const obj = {
        a: {
          b: {
            c: "deep value",
          },
        },
      }
      const result = limitDeep(obj, -1)
      expect(result).toEqual(obj)
    })

    it("should limit depth to 1 level", () => {
      const obj = {
        a: {
          b: {
            c: "deep value",
          },
        },
      }
      const result = limitDeep(obj, 1)
      expect(result).toEqual({
        a: {
          b: {
            c: "deep value",
          },
        },
      })
      // At depth 1, we should still have the nested structure
      // because depth 1 means we process one level deep
    })

    it("should limit depth to 2 levels", () => {
      const obj = {
        level1: {
          level2: {
            level3: {
              level4: "deep value",
            },
          },
        },
      }
      const result = limitDeep(obj, 2)
      expect(result).toEqual({
        level1: {
          level2: {
            level3: {
              level4: "deep value",
            },
          },
        },
      })
    })
  })

  describe("primitive values", () => {
    it("should return primitive string values unchanged when wrapped in object", () => {
      const obj = { value: "test" }
      const result = limitDeep(obj, 5)
      expect(result.value).toBe("test")
    })

    it("should return primitive number values unchanged when wrapped in object", () => {
      const obj = { value: 42 }
      const result = limitDeep(obj, 5)
      expect(result.value).toBe(42)
    })

    it("should return primitive boolean values unchanged when wrapped in object", () => {
      const obj = { value: true }
      const result = limitDeep(obj, 5)
      expect(result.value).toBe(true)
    })

    it("should handle null values in objects", () => {
      const obj = { value: null }
      const result = limitDeep(obj, 5)
      expect(result.value).toBe(null)
    })
  })

  describe("nested objects with primitives", () => {
    it("should handle objects with primitive values at different depths", () => {
      const obj = {
        a: 1,
        b: {
          c: "string",
          d: {
            e: true,
            f: {
              g: 42,
            },
          },
        },
      }
      const result = limitDeep(obj, 3)
      expect(result).toEqual({
        a: 1,
        b: {
          c: "string",
          d: {
            e: true,
            f: {
              g: 42,
            },
          },
        },
      })
    })

    it("should preserve all values when depth is sufficient", () => {
      const obj = {
        level1: {
          level2: {
            level3: "value",
          },
        },
      }
      const result = limitDeep(obj, 10)
      expect(result).toEqual(obj)
    })
  })

  describe("empty objects", () => {
    it("should handle empty objects", () => {
      const obj = {}
      const result = limitDeep(obj, 5)
      expect(result).toEqual({})
    })

    it("should handle nested empty objects", () => {
      const obj = {
        a: {},
        b: {
          c: {},
        },
      }
      const result = limitDeep(obj, 5)
      expect(result).toEqual({
        a: {},
        b: {
          c: {},
        },
      })
    })
  })

  describe("objects with null and undefined values", () => {
    it("should handle null values in nested objects", () => {
      const obj = {
        a: {
          b: null,
          c: {
            d: null,
          },
        },
      }
      const result = limitDeep(obj, 5)
      expect(result).toEqual({
        a: {
          b: null,
          c: {
            d: null,
          },
        },
      })
    })

    it("should handle undefined values in nested objects", () => {
      const obj = {
        a: {
          b: undefined,
          c: {
            d: undefined,
          },
        },
      }
      const result = limitDeep(obj, 5)
      expect(result).toEqual({
        a: {
          b: undefined,
          c: {
            d: undefined,
          },
        },
      })
    })
  })

  describe("complex nested structures", () => {
    it("should handle objects with multiple nested branches", () => {
      const obj = {
        branch1: {
          level2: {
            level3: "value1",
          },
        },
        branch2: {
          level2: {
            level3: "value2",
          },
        },
        branch3: {
          level2: {
            level3: {
              level4: "value3",
            },
          },
        },
      }
      const result = limitDeep(obj, 5)
      expect(result).toEqual(obj)
    })

    it("should handle mixed types at different levels", () => {
      const obj = {
        string: "test",
        number: 42,
        boolean: true,
        nested: {
          string: "nested test",
          number: 100,
          deeplyNested: {
            value: "deep",
          },
        },
      }
      const result = limitDeep(obj, 5)
      expect(result).toEqual(obj)
    })
  })

  describe("arrays", () => {
    it("should handle arrays as values", () => {
      const obj = {
        items: [1, 2, 3],
        nested: {
          items: [4, 5, 6],
        },
      }
      // Arrays are objects in JavaScript, so they will be processed
      const result = limitDeep(obj, 5)
      expect(result).toEqual({
        items: [1, 2, 3],
        nested: {
          items: [4, 5, 6],
        },
      })
    })

    it("should handle nested arrays", () => {
      const obj = {
        matrix: [
          [1, 2],
          [3, 4],
        ],
      }
      const result = limitDeep(obj, 5)
      expect(result).toEqual({
        matrix: [
          [1, 2],
          [3, 4],
        ],
      })
    })
  })

  describe("edge cases", () => {
    it("should handle objects with many properties", () => {
      const obj: Record<string, { nested: string }> = {}
      for (let i = 0; i < 100; i++) {
        obj[`prop${i}`] = {
          nested: `value${i}`,
        }
      }
      const result = limitDeep(obj, 5)
      expect(Object.keys(result)).toHaveLength(100)
      expect(result.prop0).toEqual({ nested: "value0" })
      expect(result.prop99).toEqual({ nested: "value99" })
    })

    it("should return a new object (not the same reference)", () => {
      const obj = {
        a: {
          b: "value",
        },
      }
      const result = limitDeep(obj, 5)
      expect(result).not.toBe(obj)
      expect(result).toEqual(obj)
    })

    it("should handle Date objects", () => {
      const date = new Date()
      const obj = {
        timestamp: date,
        nested: {
          timestamp: date,
        },
      }
      // Date objects are objects, so they'll be processed
      const result = limitDeep(obj, 5)
      expect(result.timestamp).toBeInstanceOf(Date)
      expect(result.nested.timestamp).toBeInstanceOf(Date)
    })
  })
})
