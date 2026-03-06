import { zeroRenderHook, act, waitFor } from "@/testing/test-utils"
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest"
import { FieldErrors } from "react-hook-form"

import { useErrorNavigation } from "../useErrorNavigation"

/**
 * Tests for useErrorNavigation hook changes:
 * - Error highlight animation (f0-form-error-navigate class)
 * - getVisibleElement walks up from hidden elements
 * - focusFieldElement includes buttons in selector
 * - Auto-focus + highlight on new error detection
 * - Navigation prev/next applies highlight
 */

function createMockElement(
  id: string,
  options: { hidden?: boolean; parent?: HTMLElement } = {}
) {
  const el = document.createElement("div")
  el.id = id
  el.className = "scroll-mt-4"

  // jsdom doesn't support offsetParent, so we simulate hidden state
  if (options.hidden) {
    Object.defineProperty(el, "offsetParent", { value: null, writable: true })
    el.style.display = "none"
  } else {
    Object.defineProperty(el, "offsetParent", {
      value: document.body,
      writable: true,
    })
  }

  // Add a focusable input child
  const input = document.createElement("input")
  el.appendChild(input)

  if (options.parent) {
    options.parent.appendChild(el)
  } else {
    document.body.appendChild(el)
  }

  return { el, input }
}

describe("useErrorNavigation", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    // Mock scrollIntoView since jsdom doesn't implement it
    Element.prototype.scrollIntoView = vi.fn()
  })

  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ""
  })

  describe("error tracking", () => {
    it("tracks field errors excluding root errors", () => {
      const errors: FieldErrors = {
        name: { type: "required", message: "Required" },
        email: { type: "required", message: "Required" },
        root: { type: "custom", message: "Root error" },
      }

      const { result } = zeroRenderHook(() =>
        useErrorNavigation({ formName: "test-form", errors })
      )

      expect(result.current.fieldErrors).toEqual(["name", "email"])
      expect(result.current.hasErrors).toBe(true)
      expect(result.current.errorCount).toBe(2)
    })

    it("returns empty when no errors", () => {
      const { result } = zeroRenderHook(() =>
        useErrorNavigation({ formName: "test-form", errors: {} })
      )

      expect(result.current.fieldErrors).toEqual([])
      expect(result.current.hasErrors).toBe(false)
      expect(result.current.errorCount).toBe(0)
    })
  })

  describe("auto-focus and highlight on new errors", () => {
    it("applies f0-form-error-navigate class when a new error appears", async () => {
      const { el } = createMockElement("forms.test-form.name")

      let errors: FieldErrors = {}

      const { rerender, result: _result } = zeroRenderHook(
        (props: { errors: FieldErrors }) =>
          useErrorNavigation({
            formName: "test-form",
            errors: props.errors,
          }),
        { initialProps: { errors } }
      )

      // Trigger a new error
      errors = { name: { type: "required", message: "Required" } }
      rerender({ errors })

      await waitFor(() => {
        expect(el.classList.contains("f0-form-error-navigate")).toBe(true)
      })
    })

    it("removes f0-form-error-navigate class after 600ms", async () => {
      const { el } = createMockElement("forms.test-form.name")

      const { rerender } = zeroRenderHook(
        (props: { errors: FieldErrors }) =>
          useErrorNavigation({
            formName: "test-form",
            errors: props.errors,
          }),
        { initialProps: { errors: {} as FieldErrors } }
      )

      // Trigger error
      rerender({
        errors: { name: { type: "required", message: "Required" } },
      })

      await waitFor(() => {
        expect(el.classList.contains("f0-form-error-navigate")).toBe(true)
      })

      // Advance past the 600ms timeout
      act(() => {
        vi.advanceTimersByTime(700)
      })

      expect(el.classList.contains("f0-form-error-navigate")).toBe(false)
    })

    it("scrolls to and focuses the input inside the error element", async () => {
      const { el, input } = createMockElement("forms.test-form.name")
      const scrollSpy = vi.spyOn(el, "scrollIntoView")

      const { rerender } = zeroRenderHook(
        (props: { errors: FieldErrors }) =>
          useErrorNavigation({
            formName: "test-form",
            errors: props.errors,
          }),
        { initialProps: { errors: {} as FieldErrors } }
      )

      rerender({
        errors: { name: { type: "required", message: "Required" } },
      })

      await waitFor(() => {
        expect(scrollSpy).toHaveBeenCalledWith({
          behavior: "smooth",
          block: "center",
        })
        expect(document.activeElement).toBe(input)
      })
    })
  })

  describe("getVisibleElement traversal", () => {
    it("walks up from hidden element to find visible parent", async () => {
      // Create a visible parent wrapper
      const wrapper = document.createElement("div")
      wrapper.id = "visible-wrapper"
      Object.defineProperty(wrapper, "offsetParent", {
        value: document.body,
        writable: true,
      })
      const button = document.createElement("button")
      wrapper.appendChild(button)
      document.body.appendChild(wrapper)

      // Create a hidden span inside the wrapper (like switch group anchors)
      const hiddenSpan = document.createElement("span")
      hiddenSpan.id = "forms.test-form.hiddenField"
      hiddenSpan.style.display = "none"
      Object.defineProperty(hiddenSpan, "offsetParent", {
        value: null,
        writable: true,
      })
      wrapper.appendChild(hiddenSpan)

      const { rerender } = zeroRenderHook(
        (props: { errors: FieldErrors }) =>
          useErrorNavigation({
            formName: "test-form",
            errors: props.errors,
          }),
        { initialProps: { errors: {} as FieldErrors } }
      )

      rerender({
        errors: {
          hiddenField: { type: "required", message: "Required" },
        },
      })

      // The highlight should be applied to the visible wrapper, not the hidden span
      await waitFor(() => {
        expect(wrapper.classList.contains("f0-form-error-navigate")).toBe(true)
        expect(hiddenSpan.classList.contains("f0-form-error-navigate")).toBe(
          false
        )
      })
    })

    it("uses the element itself when it is visible", async () => {
      const { el } = createMockElement("forms.test-form.visibleField")

      const { rerender } = zeroRenderHook(
        (props: { errors: FieldErrors }) =>
          useErrorNavigation({
            formName: "test-form",
            errors: props.errors,
          }),
        { initialProps: { errors: {} as FieldErrors } }
      )

      rerender({
        errors: {
          visibleField: { type: "required", message: "Required" },
        },
      })

      await waitFor(() => {
        expect(el.classList.contains("f0-form-error-navigate")).toBe(true)
      })
    })
  })

  describe("navigation prev/next", () => {
    it("navigates to next error with highlight", async () => {
      const { el: el1 } = createMockElement("forms.test-form.field1")
      const { el: el2 } = createMockElement("forms.test-form.field2")

      const errors: FieldErrors = {
        field1: { type: "required", message: "Required" },
        field2: { type: "required", message: "Required" },
      }

      const { result } = zeroRenderHook(() =>
        useErrorNavigation({ formName: "test-form", errors })
      )

      // Wait for auto-focus on initial render
      await waitFor(() => {
        expect(el1.classList.contains("f0-form-error-navigate")).toBe(true)
      })

      // Clear first highlight
      act(() => {
        vi.advanceTimersByTime(700)
      })

      // Navigate to next error
      act(() => {
        result.current.goToNextError()
      })

      await waitFor(() => {
        expect(el2.classList.contains("f0-form-error-navigate")).toBe(true)
      })
    })

    it("navigates to previous error with wrap-around", async () => {
      createMockElement("forms.test-form.field1")
      const { el: el2 } = createMockElement("forms.test-form.field2")

      const errors: FieldErrors = {
        field1: { type: "required", message: "Required" },
        field2: { type: "required", message: "Required" },
      }

      const { result } = zeroRenderHook(() =>
        useErrorNavigation({ formName: "test-form", errors })
      )

      // Wait for initial auto-focus
      await waitFor(() => {
        expect(result.current.currentErrorIndex).toBe(0)
      })

      // Navigate previous from index 0 should wrap to last (index 1)
      act(() => {
        result.current.goToPreviousError()
      })

      await waitFor(() => {
        expect(el2.classList.contains("f0-form-error-navigate")).toBe(true)
      })
    })

    it("resets error navigation state", async () => {
      const errors: FieldErrors = {
        field1: { type: "required", message: "Required" },
      }

      createMockElement("forms.test-form.field1")

      const { result } = zeroRenderHook(() =>
        useErrorNavigation({ formName: "test-form", errors })
      )

      await waitFor(() => {
        expect(result.current.currentErrorIndex).toBe(0)
      })

      act(() => {
        result.current.resetErrorNavigation()
      })

      expect(result.current.currentErrorIndex).toBe(0)
    })
  })

  describe("focusFieldElement finds buttons", () => {
    it("focuses button elements inside the anchor element", async () => {
      // Create element with only a button (no input) — like switch/checkbox fields
      const el = document.createElement("div")
      el.id = "forms.test-form.toggle"
      Object.defineProperty(el, "offsetParent", {
        value: document.body,
        writable: true,
      })
      const btn = document.createElement("button")
      el.appendChild(btn)
      document.body.appendChild(el)

      const { rerender } = zeroRenderHook(
        (props: { errors: FieldErrors }) =>
          useErrorNavigation({
            formName: "test-form",
            errors: props.errors,
          }),
        { initialProps: { errors: {} as FieldErrors } }
      )

      rerender({
        errors: { toggle: { type: "required", message: "Required" } },
      })

      await waitFor(() => {
        expect(document.activeElement).toBe(btn)
      })
    })
  })
})
