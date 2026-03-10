import { act } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRenderHook } from "@/testing/test-utils"

import type { SurveyFormBuilderElement } from "../../../SurveyFormBuilder/types"
import type { SurveyAnswers } from "../../types"

import { useSurveyValidation } from "../useSurveyValidation"

// --- Fixtures ---

const makeQuestion = (
  id: string,
  type: string,
  required = false
): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title: `Question ${id}`, type: type as "text", required },
})

const makeSection = (
  id: string,
  questions: { id: string; type: string; required?: boolean }[]
): SurveyFormBuilderElement => ({
  type: "section",
  section: {
    id,
    title: `Section ${id}`,
    questions: questions.map((q) => ({
      id: q.id,
      title: `Question ${q.id}`,
      type: q.type as "text",
      required: q.required,
    })),
  },
})

const t = (key: string) => {
  const translations: Record<string, string> = {
    "forms.validation.required": "This field is required",
    "surveyFormBuilder.answer.invalidUrl": "Enter a valid URL",
  }
  return translations[key] ?? key
}

function renderValidation(
  overrides: {
    mode?: "all-questions" | "stepped"
    elements?: SurveyFormBuilderElement[]
    answers?: SurveyAnswers
  } = {}
) {
  const {
    mode = "all-questions",
    elements = [makeQuestion("q1", "text", true)],
    answers = {},
  } = overrides
  const answersRef = { current: answers }

  const result = zeroRenderHook(() =>
    useSurveyValidation({
      mode,
      elements,
      getAnswers: () => answersRef.current,
      t: t as never,
    })
  )

  return { ...result, answersRef }
}

// --- Tests ---

describe("useSurveyValidation", () => {
  describe("validateAll", () => {
    it("returns true when all required fields are filled", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", true)],
        answers: { q1: { type: "text", value: "hello" } },
      })

      let isValid: boolean
      act(() => {
        isValid = result.current.validateAll()
      })

      expect(isValid!).toBe(true)
      expect(result.current.hasErrors).toBe(false)
      expect(result.current.errors).toEqual({})
    })

    it("returns false and sets errors when required fields are empty", () => {
      const { result } = renderValidation({
        elements: [
          makeQuestion("q1", "text", true),
          makeQuestion("q2", "numeric", true),
        ],
        answers: {},
      })

      let isValid: boolean
      act(() => {
        isValid = result.current.validateAll()
      })

      expect(isValid!).toBe(false)
      expect(result.current.hasErrors).toBe(true)
      expect(result.current.errors["q1"]).toBe("This field is required")
      expect(result.current.errors["q2"]).toBe("This field is required")
    })

    it("validates required fields with empty string", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", true)],
        answers: { q1: { type: "text", value: "" } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
    })

    it("validates required fields with null value", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "date", true)],
        answers: { q1: { type: "date", value: null } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
    })

    it("validates required multi-select with empty array", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "multi-select", true)],
        answers: { q1: { type: "multi-select", value: [] } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
    })

    it("skips validation for optional fields", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", false)],
        answers: {},
      })

      let isValid: boolean
      act(() => {
        isValid = result.current.validateAll()
      })

      expect(isValid!).toBe(true)
      expect(result.current.errors).toEqual({})
    })

    it("extracts questions from sections", () => {
      const { result } = renderValidation({
        elements: [
          makeSection("s1", [
            { id: "q1", type: "text", required: true },
            { id: "q2", type: "numeric", required: false },
          ]),
        ],
        answers: {},
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
      expect(result.current.errors["q2"]).toBeUndefined()
    })
  })

  describe("URL validation", () => {
    it("validates invalid URLs on link questions", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "link", false)],
        answers: { q1: { type: "link", value: "not a url" } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBe("Enter a valid URL")
    })

    it("accepts valid URLs", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "link", false)],
        answers: { q1: { type: "link", value: "https://example.com" } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBeUndefined()
    })

    it("accepts URLs without protocol", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "link", false)],
        answers: { q1: { type: "link", value: "example.com" } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBeUndefined()
    })

    it("does not validate URL on non-link question types", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", false)],
        answers: { q1: { type: "text", value: "not a url" } },
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBeUndefined()
    })
  })

  describe("onFieldBlur", () => {
    it("validates field on blur in all-questions mode", () => {
      const { result } = renderValidation({
        mode: "all-questions",
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      act(() => {
        result.current.onFieldBlur("q1")
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
    })

    it("does not validate field on blur in stepped mode before submit", () => {
      const { result } = renderValidation({
        mode: "stepped",
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      act(() => {
        result.current.onFieldBlur("q1")
      })

      expect(result.current.errors["q1"]).toBeUndefined()
    })

    it("validates on blur in stepped mode after a submit attempt", () => {
      const { result } = renderValidation({
        mode: "stepped",
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      // First submit attempt sets hasSubmittedRef
      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBe("This field is required")

      // Now blur should still report the error
      act(() => {
        result.current.onFieldBlur("q1")
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
    })
  })

  describe("clearFieldError", () => {
    it("clears a specific field error", () => {
      const { result, answersRef } = renderValidation({
        mode: "stepped",
        elements: [
          makeQuestion("q1", "text", true),
          makeQuestion("q2", "text", true),
        ],
        answers: {},
      })

      act(() => {
        result.current.validateAll()
      })

      expect(result.current.errors["q1"]).toBeDefined()
      expect(result.current.errors["q2"]).toBeDefined()

      // Fill q1 so re-validation won't re-add the error
      answersRef.current = { q1: { type: "text", value: "filled" } }

      act(() => {
        result.current.clearFieldError("q1")
      })

      expect(result.current.errors["q1"]).toBeUndefined()
      expect(result.current.errors["q2"]).toBeDefined()
    })
  })

  describe("validateField", () => {
    it("validates a single field", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      act(() => {
        result.current.validateField("q1")
      })

      expect(result.current.errors["q1"]).toBe("This field is required")
    })

    it("clears error when field becomes valid", () => {
      const { result, answersRef } = renderValidation({
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      act(() => {
        result.current.validateField("q1")
      })

      expect(result.current.errors["q1"]).toBeDefined()

      answersRef.current = { q1: { type: "text", value: "filled" } }

      act(() => {
        result.current.validateField("q1")
      })

      expect(result.current.errors["q1"]).toBeUndefined()
    })

    it("ignores unknown question ids", () => {
      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      act(() => {
        result.current.validateField("unknown")
      })

      expect(result.current.errors).toEqual({})
    })
  })

  describe("error highlight", () => {
    it("applies and removes error highlight class on validateAll", () => {
      vi.useFakeTimers()

      const el = document.createElement("div")
      el.id = "co-creation-question-q1"
      document.body.appendChild(el)

      const { result } = renderValidation({
        elements: [makeQuestion("q1", "text", true)],
        answers: {},
      })

      act(() => {
        result.current.validateAll()
      })

      expect(el.classList.contains("f0-form-error-navigate")).toBe(true)

      act(() => {
        vi.advanceTimersByTime(600)
      })

      expect(el.classList.contains("f0-form-error-navigate")).toBe(false)

      document.body.removeChild(el)
      vi.useRealTimers()
    })
  })
})
