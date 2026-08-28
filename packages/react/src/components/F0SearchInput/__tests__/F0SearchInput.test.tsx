import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  fireEvent,
  screen,
  zeroRender as render,
} from "@/testing/test-utils"

import { F0SearchInput } from "../index"

describe("F0SearchInput", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("autofocus behavior", () => {
    it("focuses once without reclaiming focus after navigation", () => {
      const onChange = vi.fn()
      render(
        <>
          <F0SearchInput autoFocus debounceTime={400} onChange={onChange} />
          <button type="button">Next</button>
        </>
      )

      const input = screen.getByRole("searchbox")
      const nextButton = screen.getByRole("button", { name: "Next" })

      act(() => {
        vi.advanceTimersByTime(50)
      })
      expect(input).toHaveFocus()

      fireEvent.change(input, { target: { value: "query" } })
      nextButton.focus()

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(onChange).toHaveBeenCalledWith("query")
      expect(nextButton).toHaveFocus()
    })

    it("cancels a pending retry after the input receives focus", () => {
      render(
        <>
          <F0SearchInput autoFocus />
          <button type="button">Next</button>
        </>
      )

      const input = screen.getByRole("searchbox")
      const nextButton = screen.getByRole("button", { name: "Next" })

      input.focus()
      nextButton.focus()
      act(() => {
        vi.advanceTimersByTime(100)
      })

      expect(nextButton).toHaveFocus()
    })
  })

  describe("threshold behavior", () => {
    it("does not trigger onChange when input length is below threshold", () => {
      const onChange = vi.fn()
      render(<F0SearchInput threshold={3} onChange={onChange} />)

      const input = screen.getByRole("searchbox")
      fireEvent.change(input, { target: { value: "ab" } })

      expect(onChange).not.toHaveBeenCalled()
    })

    it("triggers onChange when input length reaches threshold", () => {
      const onChange = vi.fn()
      render(<F0SearchInput threshold={3} onChange={onChange} />)

      const input = screen.getByRole("searchbox")
      fireEvent.change(input, { target: { value: "abc" } })

      act(() => {
        vi.runAllTimers()
      })

      expect(onChange).toHaveBeenCalledWith("abc")
    })

    it("always triggers onChange when clearing the input", () => {
      const onChange = vi.fn()
      render(
        <F0SearchInput threshold={3} onChange={onChange} value="initial" />
      )

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
      render(<F0SearchInput debounceTime={500} onChange={onChange} />)

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
      render(<F0SearchInput debounceTime={500} onChange={onChange} />)

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
        <F0SearchInput threshold={3} debounceTime={500} onChange={onChange} />
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
