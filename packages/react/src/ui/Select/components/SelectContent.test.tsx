import { describe, expect, it, vi } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { Select } from "./Select"
import { SelectContent } from "./SelectContent"
import { SelectItem } from "./SelectItem"
import { SelectTrigger } from "./SelectTrigger"

describe("SelectContent", () => {
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
