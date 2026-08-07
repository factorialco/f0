import { userEvent } from "@testing-library/user-event"
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
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe("focus behavior", () => {
    it("is reachable with the Tab key", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <>
          <F0SearchInput placeholder="Search" />
          <button type="button">Next action</button>
        </>
      )

      await user.tab()

      expect(screen.getByRole("searchbox")).toHaveFocus()
    })

    it("is skipped with the Tab key when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <>
          <F0SearchInput placeholder="Search" disabled />
          <button type="button">Next action</button>
        </>
      )

      await user.tab()

      expect(screen.getByRole("button", { name: "Next action" })).toHaveFocus()
    })

    it("allows focus to leave an auto-focused input", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <>
          <F0SearchInput placeholder="Search" autoFocus />
          <button type="button">Next action</button>
        </>
      )

      const nextAction = screen.getByRole("button", { name: "Next action" })
      expect(screen.getByRole("searchbox")).toHaveFocus()

      await user.tab()
      act(() => {
        vi.advanceTimersByTime(100)
      })

      expect(nextAction).toHaveFocus()
    })

    it("does not restore focus after a debounced change", () => {
      const onChange = vi.fn()
      render(
        <>
          <F0SearchInput
            placeholder="Search"
            debounceTime={500}
            onChange={onChange}
          />
          <button type="button">Next action</button>
        </>
      )

      const input = screen.getByRole("searchbox")
      const nextAction = screen.getByRole("button", { name: "Next action" })
      input.focus()
      fireEvent.change(input, { target: { value: "engineering" } })
      nextAction.focus()

      act(() => {
        vi.advanceTimersByTime(500)
      })

      expect(onChange).toHaveBeenCalledWith("engineering")
      expect(nextAction).toHaveFocus()
    })

    it("returns focus to the input after clearing", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onChange = vi.fn()
      render(
        <F0SearchInput
          placeholder="Search"
          value="engineering"
          clearable
          onChange={onChange}
        />
      )

      await user.click(screen.getByRole("button", { name: "Clear" }))
      act(() => {
        vi.runAllTimers()
      })

      expect(onChange).toHaveBeenCalledWith("")
      expect(screen.getByRole("searchbox")).toHaveFocus()
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
