import { describe, expect, it, vi } from "vitest"
import { useEffect, useState } from "react"
import { flushSync } from "react-dom"

import {
  act,
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { Select } from "./Select"
import { SelectContent } from "./SelectContent"
import { SelectItem } from "./SelectItem"
import { SelectTrigger } from "./SelectTrigger"

function DeferredSelectItem({
  value,
  label,
  delay = 20,
}: {
  value: string
  label: string
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return isVisible ? <SelectItem value={value}>{label}</SelectItem> : null
}

describe("SelectContent", () => {
  it("focuses the selected option when it mounts after the popup", async () => {
    render(
      <Select open value="first" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">First</SelectTrigger>
        <SelectContent>
          <DeferredSelectItem value="first" label="First" />
          <SelectItem value="second">Second</SelectItem>
        </SelectContent>
      </Select>
    )

    const selectedOption = await screen.findByRole("option", { name: "First" })

    await waitFor(() => expect(selectedOption).toHaveFocus())
  })

  it("moves focus from its fallback to a selected option that mounts after the grace period", async () => {
    render(
      <Select open value="first" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">First</SelectTrigger>
        <SelectContent>
          <DeferredSelectItem value="first" label="First" delay={120} />
          <SelectItem value="second">Second</SelectItem>
        </SelectContent>
      </Select>
    )

    const fallbackOption = screen.getByRole("option", { name: "Second" })
    await waitFor(() => expect(fallbackOption).toHaveFocus())

    const selectedOption = await screen.findByRole("option", { name: "First" })
    await waitFor(() => expect(selectedOption).toHaveFocus())
  })

  it("focuses the first option after it mounts for a placeholder value", async () => {
    render(
      <Select open value="" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">Choose</SelectTrigger>
        <SelectContent>
          <DeferredSelectItem value="first" label="First" />
        </SelectContent>
      </Select>
    )

    const firstOption = await screen.findByRole("option", { name: "First" })

    await waitFor(() => expect(firstOption).toHaveFocus())
  })

  it("focuses the first option when the current value does not exist", async () => {
    render(
      <Select open value="stale" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">Missing</SelectTrigger>
        <SelectContent>
          <SelectItem value="first">First</SelectItem>
          <SelectItem value="second">Second</SelectItem>
        </SelectContent>
      </Select>
    )

    const firstOption = await screen.findByRole("option", { name: "First" })

    await waitFor(() => expect(firstOption).toHaveFocus())
  })

  it("cleans up the fallback timer when focusing content closes the popup", async () => {
    vi.useFakeTimers()
    const setTimeoutSpy = vi.spyOn(globalThis, "setTimeout")
    const clearTimeoutSpy = vi.spyOn(globalThis, "clearTimeout")

    function CloseOnContentFocus() {
      const [open, setOpen] = useState(true)

      return (
        <>
          <button type="button">Outside action</button>
          <Select
            open={open}
            value="stale"
            onOpenChange={setOpen}
            onValueChange={vi.fn()}
          >
            <SelectTrigger aria-label="Choose an option">Missing</SelectTrigger>
            <SelectContent onFocus={() => flushSync(() => setOpen(false))}>
              <SelectItem value="first">First</SelectItem>
              <SelectItem value="second">Second</SelectItem>
            </SelectContent>
          </Select>
        </>
      )
    }

    try {
      const { unmount } = render(<CloseOnContentFocus />)
      const firstOption = screen.getByRole("option", { name: "First" })
      const firstOptionFocusSpy = vi.spyOn(firstOption, "focus")

      await act(async () => vi.advanceTimersByTimeAsync(20))

      const fallbackTimerCallIndex = setTimeoutSpy.mock.calls.findIndex(
        ([, delay]) => delay === 50
      )
      const fallbackTimer =
        setTimeoutSpy.mock.results[fallbackTimerCallIndex]?.value

      expect(fallbackTimerCallIndex).toBeGreaterThanOrEqual(0)
      expect(clearTimeoutSpy).toHaveBeenCalledWith(fallbackTimer)

      const outsideAction = screen.getByRole("button", {
        name: "Outside action",
      })
      outsideAction.focus()
      await act(async () => vi.advanceTimersByTimeAsync(100))

      expect(outsideAction).toHaveFocus()
      expect(firstOptionFocusSpy).not.toHaveBeenCalled()

      unmount()
    } finally {
      setTimeoutSpy.mockRestore()
      clearTimeoutSpy.mockRestore()
      vi.useRealTimers()
    }
  })

  it("keeps footer actions outside the listbox and traverses them with Tab", async () => {
    const user = userEvent.setup()

    render(
      <Select open value="first" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">First</SelectTrigger>
        <SelectContent
          aria-label="Available options"
          bottom={
            <>
              <button type="button">Create option</button>
              <button type="button">Manage options</button>
            </>
          }
        >
          <SelectItem value="first">First</SelectItem>
          <SelectItem value="second">Second</SelectItem>
        </SelectContent>
      </Select>
    )

    const listbox = await screen.findByRole("listbox", {
      name: "Available options",
    })
    const option = screen.getByRole("option", { name: "First" })
    const createAction = screen.getByRole("button", { name: "Create option" })
    const manageAction = screen.getByRole("button", { name: "Manage options" })

    expect(listbox.contains(createAction)).toBe(false)
    expect(listbox.contains(manageAction)).toBe(false)
    expect(listbox.closest("[data-radix-select-content]")).not.toHaveAttribute(
      "aria-label"
    )

    option.focus()
    expect(option).toHaveFocus()

    await user.tab()

    expect(createAction).toHaveFocus()

    await user.tab()
    expect(manageAction).toHaveFocus()

    await user.tab({ shift: true })
    expect(createAction).toHaveFocus()

    await user.tab({ shift: true })
    expect(option).toHaveFocus()
  })

  it("keeps an empty-state action outside the listbox and reaches it from the header", async () => {
    const user = userEvent.setup()

    render(
      <Select open onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">Choose</SelectTrigger>
        <SelectContent
          top={
            <input aria-label="Search options" role="searchbox" tabIndex={-1} />
          }
          emptyMessage="No results"
          emptyAction={<button type="button">Create option</button>}
        >
          {null}
        </SelectContent>
      </Select>
    )

    const listbox = await screen.findByRole("listbox")
    const search = screen.getByRole("searchbox", { name: "Search options" })
    const action = screen.getByRole("button", { name: "Create option" })

    expect(listbox.contains(action)).toBe(false)
    expect(screen.getByRole("option", { name: "No results" })).toHaveAttribute(
      "aria-disabled",
      "true"
    )

    search.focus()
    await user.tab()

    expect(action).toHaveFocus()

    await user.tab({ shift: true })
    expect(search).toHaveFocus()
  })

  it("keeps text editing keys inside the searchbox", async () => {
    const user = userEvent.setup()

    render(
      <Select open value="first" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">First</SelectTrigger>
        <SelectContent
          top={
            <input
              aria-label="Search options"
              defaultValue="query"
              role="searchbox"
              tabIndex={-1}
            />
          }
        >
          <SelectItem value="first">First</SelectItem>
          <SelectItem value="second">Second</SelectItem>
        </SelectContent>
      </Select>
    )

    await screen.findByRole("listbox")
    const search = screen.getByRole("searchbox", { name: "Search options" })

    search.focus()
    search.setSelectionRange(search.value.length, search.value.length)
    await user.keyboard("s")

    expect(search).toHaveFocus()
    expect(search).toHaveValue("querys")

    search.setSelectionRange(2, 2)
    await user.keyboard("{Home}")
    expect(search.selectionStart).toBe(0)

    await user.keyboard("{End}")
    expect(search.selectionStart).toBe(search.value.length)
    expect(search).toHaveFocus()
  })

  it("keeps typeahead navigation on options", async () => {
    const user = userEvent.setup()

    render(
      <Select open value="first" onValueChange={vi.fn()}>
        <SelectTrigger aria-label="Choose an option">First</SelectTrigger>
        <SelectContent>
          <SelectItem value="first">First</SelectItem>
          <SelectItem value="second">Second</SelectItem>
        </SelectContent>
      </Select>
    )

    await screen.findByRole("listbox")
    const firstOption = screen.getByRole("option", { name: "First" })
    const secondOption = screen.getByRole("option", { name: "Second" })

    firstOption.focus()
    await user.keyboard("s")

    expect(secondOption).toHaveFocus()
  })
})
