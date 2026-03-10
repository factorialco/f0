import { describe, expect, it } from "vitest"

import {
  getCurrentRatingType,
  RATING_OPTIONS,
  shouldResetParamsOnTypeChange,
} from "../../BaseQuestion/ActionsMenu/useQuestionActions"

describe("getCurrentRatingType", () => {
  it("returns null when questionType is not rating", () => {
    expect(getCurrentRatingType("text", undefined)).toBeNull()
    expect(
      getCurrentRatingType("select", { type: "select", options: [] })
    ).toBeNull()
  })

  it("returns null when question is undefined", () => {
    expect(getCurrentRatingType("rating", undefined)).toBeNull()
  })

  it("returns null when question type does not match rating", () => {
    expect(getCurrentRatingType("rating", { type: "text" })).toBeNull()
  })

  it("returns null when options is not an array", () => {
    expect(
      getCurrentRatingType("rating", { type: "rating", options: undefined })
    ).toBeNull()
  })

  it("returns null when options is empty", () => {
    expect(
      getCurrentRatingType("rating", { type: "rating", options: [] })
    ).toBeNull()
  })

  it("returns null when option values are not numbers", () => {
    expect(
      getCurrentRatingType("rating", {
        type: "rating",
        options: [{ value: "a", label: "A" }],
      })
    ).toBeNull()
  })

  it('detects "1-5" rating type', () => {
    const options = Array.from({ length: 5 }, (_, i) => ({
      value: i + 1,
      label: String(i + 1),
    }))
    expect(getCurrentRatingType("rating", { type: "rating", options })).toBe(
      "1-5"
    )
  })

  it('detects "1-10" rating type', () => {
    const options = Array.from({ length: 10 }, (_, i) => ({
      value: i + 1,
      label: String(i + 1),
    }))
    expect(getCurrentRatingType("rating", { type: "rating", options })).toBe(
      "1-10"
    )
  })

  it('detects "emojis" rating type', () => {
    const options = [
      { value: 1, label: "😠" },
      { value: 2, label: "😐" },
      { value: 3, label: "😊" },
      { value: 4, label: "😍" },
      { value: 5, label: "🤩" },
    ]
    expect(getCurrentRatingType("rating", { type: "rating", options })).toBe(
      "emojis"
    )
  })
})

describe("shouldResetParamsOnTypeChange", () => {
  it("returns false when new type equals current type", () => {
    expect(shouldResetParamsOnTypeChange("text", "text", undefined)).toBe(false)
    expect(shouldResetParamsOnTypeChange("rating", "rating", undefined)).toBe(
      false
    )
  })

  it("returns true when changing to a different type", () => {
    expect(shouldResetParamsOnTypeChange("text", "rating", undefined)).toBe(
      true
    )
    expect(shouldResetParamsOnTypeChange("numeric", "text", undefined)).toBe(
      true
    )
  })

  it("returns false when switching between select and multi-select with existing options", () => {
    const question = {
      options: [{ value: "opt-1", label: "Option 1" }],
    }
    expect(
      shouldResetParamsOnTypeChange("multi-select", "select", question)
    ).toBe(false)
    expect(
      shouldResetParamsOnTypeChange("select", "multi-select", question)
    ).toBe(false)
  })

  it("returns true when switching to select/multi-select without options", () => {
    expect(shouldResetParamsOnTypeChange("select", "text", undefined)).toBe(
      true
    )
    expect(
      shouldResetParamsOnTypeChange("multi-select", "text", { options: [] })
    ).toBe(true)
  })

  it("returns true when switching to select with empty options array", () => {
    expect(
      shouldResetParamsOnTypeChange("select", "multi-select", { options: [] })
    ).toBe(true)
  })

  it("returns true when switching from select to a non-select type", () => {
    const question = {
      options: [{ value: "opt-1", label: "Option 1" }],
    }
    expect(shouldResetParamsOnTypeChange("text", "select", question)).toBe(true)
    expect(
      shouldResetParamsOnTypeChange("rating", "multi-select", question)
    ).toBe(true)
  })
})

describe("RATING_OPTIONS", () => {
  it("contains three rating presets", () => {
    expect(RATING_OPTIONS).toHaveLength(3)
  })

  it('includes "1-5", "1-10", and "emojis"', () => {
    const values = RATING_OPTIONS.map((o) => o.value)
    expect(values).toEqual(["1-5", "1-10", "emojis"])
  })

  it("has labels for each option", () => {
    for (const option of RATING_OPTIONS) {
      expect(option.label).toBeTruthy()
    }
  })
})
