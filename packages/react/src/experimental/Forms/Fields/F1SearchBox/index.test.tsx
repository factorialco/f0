import { act, fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { F1SearchBox } from "./index"

describe("F1SearchBox", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  describe("threshold behavior", () => {
    it("does not trigger onChange when input length is below threshold", () => {
      const onChange = vi.fn()
      render(<F1SearchBox threshold={3} onChange={onChange} />)

      const input = screen.getByRole("searchbox")
      fireEvent.change(input, { target: { value: "ab" } })

      expect(onChange).not.toHaveBeenCalled()
    })

    it("triggers onChange when input length reaches threshold", () => {
      const onChange = vi.fn()
      render(<F1SearchBox threshold={3} onChange={onChange} />)

      const input = screen.getByRole("searchbox")
      fireEvent.change(input, { target: { value: "abc" } })

      act(() => {
        vi.runAllTimers()
      })

      expect(onChange).toHaveBeenCalledWith("abc")
    })

    it("always triggers onChange when clearing the input", () => {
      const onChange = vi.fn()
      render(<F1SearchBox threshold={3} onChange={onChange} value="initial" />)

      const input = screen.getByRole("searchbox")
      fireEvent.change(input, { target: { value: "" } })

      act(() => {
        vi.runAllTimers()
      })

      expect(onChange).toHaveBeenCalledWith("")
    })
  })

  describe("debounce behavior", () => {
    it("debounces the onChange callback", () => {
      const onChange = vi.fn()
      render(<F1SearchBox debounceTime={500} onChange={onChange} />)

      const input = screen.getByRole("searchbox")

      // Type 'test' quickly
      fireEvent.change(input, { target: { value: "t" } })
      fireEvent.change(input, { target: { value: "te" } })
      fireEvent.change(input, { target: { value: "tes" } })
      fireEvent.change(input, { target: { value: "test" } })

      expect(onChange).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("test")
    })

    it("updates the value with the most recent input after debounce", () => {
      const onChange = vi.fn()
      render(<F1SearchBox debounceTime={500} onChange={onChange} />)

      const input = screen.getByRole("searchbox")

      fireEvent.change(input, { target: { value: "first" } })

      act(() => {
        vi.advanceTimersByTime(200)
      })

      fireEvent.change(input, { target: { value: "second" } })

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("second")
    })
  })

  describe("combined threshold and debounce behavior", () => {
    it("respects both threshold and debounce", () => {
      const onChange = vi.fn()
      render(
        <F1SearchBox threshold={3} debounceTime={500} onChange={onChange} />
      )

      const input = screen.getByRole("searchbox")

      // Type below threshold
      fireEvent.change(input, { target: { value: "ab" } })

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(onChange).not.toHaveBeenCalled()

      // Type above threshold
      fireEvent.change(input, { target: { value: "abc" } })

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith("abc")
    })
  })
})
