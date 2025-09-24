import { describe, expect, it, vi } from "vitest"
import { getFeatures } from "../getFeatures"
import { dataCollectionStorageFeatures } from "../types"

vi.mock("../types", () => ({
  dataCollectionStorageFeatures: ["filters", "sortings", "grouping", "search"],
}))

describe("calculateFeatures", () => {
  describe("when features is undefined", () => {
    it("should return an empty array", () => {
      const result = getFeatures(undefined)
      expect(result).toEqual([])
    })
  })

  describe("when features is an empty array", () => {
    it("should return an empty array", () => {
      const result = getFeatures([])
      expect(result).toEqual([])
    })
  })

  describe("when features includes '*'", () => {
    it("should return all available features", () => {
      const result = getFeatures(["*"])
      expect(result).toEqual(dataCollectionStorageFeatures)
    })

    it("should return all features even with other items in array", () => {
      const result = getFeatures(["*", "filters"])
      expect(result).toEqual(dataCollectionStorageFeatures)
    })
  })

  describe("when features includes 'all'", () => {
    it("should return all available features", () => {
      const result = getFeatures(["all"])
      expect(result).toEqual(dataCollectionStorageFeatures)
    })

    it("should return all features even with other items in array", () => {
      const result = getFeatures(["all", "search"])
      expect(result).toEqual(dataCollectionStorageFeatures)
    })
  })

  describe("when features includes specific features", () => {
    it("should return only the specified features", () => {
      const result = getFeatures(["filters", "search"])
      expect(result).toEqual(["filters", "search"])
    })

    it("should handle a single feature", () => {
      const result = getFeatures(["sortings"])
      expect(result).toEqual(["sortings"])
    })
  })

  describe("when features includes negated features", () => {
    it("should exclude negated features from all features", () => {
      const result = getFeatures(["*", "!filters"])

      expect(result).toEqual(["sortings", "grouping", "search"])
    })

    it("should exclude multiple negated features from all features", () => {
      const result = getFeatures(["*", "!filters", "!search"])
      expect(result).toEqual(["sortings", "grouping"])
    })

    it("should handle negation when feature is not present", () => {
      const result = getFeatures(["filters", "!search"])
      expect(result).toEqual(["filters"])
    })
  })

  describe("complex scenarios", () => {
    it("should handle mixed positive and negative features with '*'", () => {
      const result = getFeatures(["*", "!filters", "!search", "sortings"])
      expect(result).toEqual(["sortings", "grouping"])
    })

    it("should handle mixed positive and negative features with 'all'", () => {
      const result = getFeatures(["all", "!grouping", "filters"])
      expect(result).toEqual(["filters", "sortings", "search"])
    })

    it("should handle negation of non-existent feature gracefully", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      const result = getFeatures(["*", "!nonexistent"] as any)
      // Should not throw error and should remove nothing since feature doesn't exist
      expect(result).toEqual(dataCollectionStorageFeatures)
    })

    it("should handle multiple '*' or 'all' in the same array", () => {
      const result = getFeatures(["*", "all", "filters"])
      expect(result).toEqual(dataCollectionStorageFeatures)
    })
  })

  describe("edge cases", () => {
    it("should handle empty string features", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- to test the function
      const result = getFeatures([""] as any)
      expect(result).toEqual([""])
    })

    it("should handle duplicate features", () => {
      const result = getFeatures(["filters", "filters", "search"])
      expect(result).toEqual(["filters", "search"])
    })

    it("should handle negation that removes duplicates", () => {
      const result = getFeatures(["filters", "!filters"])
      expect(result).toEqual([])
    })

    it("should process features in order", () => {
      const result = getFeatures(["filters", "search", "!filters", "grouping"])
      expect(result).toEqual(["search", "grouping"])
    })
  })
})
