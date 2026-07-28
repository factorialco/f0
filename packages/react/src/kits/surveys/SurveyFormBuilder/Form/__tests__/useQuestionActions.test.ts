import { describe, expect, it } from "vitest"

import { getDefaultParamsForQuestionType, getRatingOptions } from "../../lib"
import {
  getCurrentRatingType,
  RATING_OPTIONS,
  shouldResetParamsOnTypeChange,
} from "../../QuestionTypes/BaseQuestion/ActionsMenu/useQuestionActions"

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

  it('detects "0-10" rating type', () => {
    const options = Array.from({ length: 11 }, (_, i) => ({
      value: i,
      label: String(i),
    }))
    expect(getCurrentRatingType("rating", { type: "rating", options })).toBe(
      "0-10"
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

  it("returns false when switching between dropdown-single and dropdown-multi with existing options", () => {
    const question = { options: [{ value: "opt-1", label: "Option 1" }] }
    expect(
      shouldResetParamsOnTypeChange(
        "dropdown-multi",
        "dropdown-single",
        question
      )
    ).toBe(false)
    expect(
      shouldResetParamsOnTypeChange(
        "dropdown-single",
        "dropdown-multi",
        question
      )
    ).toBe(false)
  })

  it("returns false when switching between dropdown-single and dropdown-multi even without options", () => {
    expect(
      shouldResetParamsOnTypeChange("dropdown-multi", "dropdown-single", {
        options: [],
      })
    ).toBe(false)
    expect(
      shouldResetParamsOnTypeChange("dropdown-single", "dropdown-multi", {
        options: [],
      })
    ).toBe(false)
  })

  it("returns true when switching from a dropdown type to an unrelated type", () => {
    expect(
      shouldResetParamsOnTypeChange("text", "dropdown-single", undefined)
    ).toBe(true)
    expect(
      shouldResetParamsOnTypeChange("rating", "dropdown-multi", undefined)
    ).toBe(true)
  })
})

describe("RATING_OPTIONS", () => {
  it("contains four rating presets", () => {
    expect(RATING_OPTIONS).toHaveLength(4)
  })

  it('includes "1-5", "1-10", "0-10", and "emojis"', () => {
    const values = RATING_OPTIONS.map((o) => o.value)
    expect(values).toEqual(["1-5", "1-10", "0-10", "emojis"])
  })

  it("has labels for each option", () => {
    for (const option of RATING_OPTIONS) {
      expect(option.label).toBeTruthy()
    }
  })

  it("can build options for every preset it offers", () => {
    for (const option of RATING_OPTIONS) {
      expect(getRatingOptions(option.value).length).toBeGreaterThan(0)
    }
  })
})

describe("getRatingOptions", () => {
  it('builds 1..5 for "1-5"', () => {
    expect(getRatingOptions("1-5").map((o) => o.value)).toEqual([1, 2, 3, 4, 5])
  })

  it('builds 1..10 for "1-10"', () => {
    expect(getRatingOptions("1-10").map((o) => o.value)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])
  })

  it('builds 0..10 for "0-10", the eNPS scale', () => {
    const options = getRatingOptions("0-10")

    expect(options).toHaveLength(11)
    expect(options.map((o) => o.value)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ])
    expect(options.map((o) => o.label)).toEqual([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ])
  })

  it("round-trips every numeric preset through getCurrentRatingType", () => {
    for (const preset of ["1-5", "1-10", "0-10"] as const) {
      expect(
        getCurrentRatingType("rating", {
          type: "rating",
          options: getRatingOptions(preset),
        })
      ).toBe(preset)
    }
  })
})

describe("getDefaultParamsForQuestionType", () => {
  // A literal 0 would render the "0" cell of a 0-10 scale as already chosen.
  it("leaves a new rating question unanswered", () => {
    const params = getDefaultParamsForQuestionType("rating")

    expect(params).toHaveProperty("value", undefined)
  })
})
