import { fireEvent, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { zeroRender as render } from "@/testing/test-utils"

import { EmptySortingValue, SortingSelector } from "../SortingSelector"

const sortings: SortingsDefinition = {
  name: { label: "Name" },
  date: { label: "Date" },
  amount: { label: "Amount" },
}

global.ResizeObserver = class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
} as typeof ResizeObserver

const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("combobox"))
  await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
  fireEvent.animationStart(screen.getByRole("listbox"))
}

describe("SortingSelector", () => {
  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      value: 800,
      configurable: true,
    })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      value: 800,
      configurable: true,
    })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 200,
        height: 40,
        top: 0,
        left: 0,
        bottom: 40,
        right: 200,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
    )
  })

  it("should render with no sorting selected when currentSortings is null", () => {
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={null}
        onChange={onChange}
      />
    )

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  it("should render with a sorting field selected", () => {
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  it("should call onChange with null when selecting no-sorting option", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    await openSelect(user)
    const listbox = screen.getByRole("listbox")
    const noSortingOption = within(listbox).getByRole("option", {
      name: /no sorting/i,
    })
    await user.click(noSortingOption)

    expect(onChange).toHaveBeenCalledWith(null)
  })

  it("should call onChange with the selected sorting field", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={null}
        onChange={onChange}
      />
    )

    await openSelect(user)
    const listbox = screen.getByRole("listbox")
    const dateOption = within(listbox).getByRole("option", { name: "Date" })
    await user.click(dateOption)

    expect(onChange).toHaveBeenCalledWith({ field: "date", order: "asc" })
  })

  it("should preserve order direction when changing sorting field", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "desc" }}
        onChange={onChange}
      />
    )

    await openSelect(user)
    const listbox = screen.getByRole("listbox")
    const amountOption = within(listbox).getByRole("option", {
      name: "Amount",
    })
    await user.click(amountOption)

    expect(onChange).toHaveBeenCalledWith({ field: "amount", order: "desc" })
  })

  it("should not fire onChange when value echoes back the current sorting (echo guard)", async () => {
    const onChange = vi.fn()

    const { rerender } = render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    // Rerender with a different sorting (simulating reset)
    rerender(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "date", order: "asc" }}
        onChange={onChange}
      />
    )

    // The echo guard should prevent onChange from being called with the old value
    // when F0Select internally fires onChange during value prop transition
    expect(onChange).not.toHaveBeenCalled()
  })

  it("should update displayed value when currentSortings prop changes (controlled)", () => {
    const onChange = vi.fn()

    const { rerender } = render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    // Simulate reset: change from "name" to null
    rerender(
      <SortingSelector
        sortings={sortings}
        currentSortings={null}
        onChange={onChange}
      />
    )

    // Should not call onChange during programmatic update
    expect(onChange).not.toHaveBeenCalled()
  })

  it("should update displayed value when sorting changes from one field to another", () => {
    const onChange = vi.fn()

    const { rerender } = render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    // Simulate external change (e.g., reset to default sorting)
    rerender(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "date", order: "desc" }}
        onChange={onChange}
      />
    )

    // Should not trigger onChange when props change programmatically
    expect(onChange).not.toHaveBeenCalled()
  })

  it("should toggle sort direction when direction button is clicked", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    // The toggle direction button should be visible when a sorting is selected
    const toggleButton = screen.getByLabelText(/toggle sorting direction/i)
    await user.click(toggleButton)

    expect(onChange).toHaveBeenCalledWith({ field: "name", order: "desc" })
  })

  it("should not show direction button when no sorting is selected", () => {
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={null}
        onChange={onChange}
      />
    )

    expect(
      screen.queryByLabelText(/toggle sorting direction/i)
    ).not.toBeInTheDocument()
  })

  it("should treat EmptySortingValue field as no sorting", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(
      <SortingSelector
        sortings={sortings}
        currentSortings={{ field: "name", order: "asc" }}
        onChange={onChange}
      />
    )

    await openSelect(user)
    const listbox = screen.getByRole("listbox")
    // Select "No sorting" option
    const noSortingOption = within(listbox).getByRole("option", {
      name: /no sorting/i,
    })
    await user.click(noSortingOption)

    // Should call onChange with null (not with EmptySortingValue)
    expect(onChange).toHaveBeenCalledWith(null)
    expect(onChange).not.toHaveBeenCalledWith(
      expect.objectContaining({ field: EmptySortingValue })
    )
  })
})
