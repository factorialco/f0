import { describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { SearchResult } from "../types"

import { F0GraphSearch } from "../F0GraphSearch"

// ─── Helpers ───────────────────────────────────────────────────

function makeResults(): SearchResult[] {
  return [
    { id: "1", label: "Alice", ranges: [[0, 5]] },
    { id: "2", label: "Bob", ranges: [[0, 3]] },
    { id: "3", label: "Charlie", ranges: [[0, 7]] },
  ]
}

function renderSearch(
  overrides: Partial<React.ComponentProps<typeof F0GraphSearch>> = {}
) {
  const defaults = {
    value: "",
    onChange: vi.fn(),
    results: [] as SearchResult[],
    hasQuery: false,
    onSelect: vi.fn(),
  }
  return zeroRender(<F0GraphSearch {...defaults} {...overrides} />)
}

// ─── Tests ─────────────────────────────────────────────────────

describe("F0GraphSearch keyboard", () => {
  it("renders search input with combobox role", () => {
    renderSearch()
    expect(screen.getByRole("combobox")).toBeTruthy()
  })

  it("combobox aria-expanded is false when no query", () => {
    renderSearch({
      value: "",
      hasQuery: false,
      results: [],
    })

    const combobox = screen.getByRole("combobox")
    expect(combobox.getAttribute("aria-expanded")).toBe("false")
  })

  it("Enter on highlighted result triggers onSelect via keyboard interaction", async () => {
    const { userEvent } = await import("@testing-library/user-event")
    const user = userEvent.setup()
    const onSelect = vi.fn()
    const onChange = vi.fn()

    // We need to simulate the full flow: type a query → results appear → arrow → enter
    // But since F0GraphSearch is a controlled component, we render with results
    // and simulate the popover opening by triggering the onChange flow.

    // First render with empty value
    const { rerender } = renderSearch({
      value: "",
      hasQuery: false,
      results: [],
      onSelect,
      onChange,
    })

    // Type into the input to trigger onChange (which opens the popover internally)
    const input = screen.getByRole("combobox").querySelector("input")
    expect(input).toBeTruthy()
    input!.focus()
    await user.type(input!, "a")

    // onChange should have been called
    expect(onChange).toHaveBeenCalled()

    // Re-render with the query results (simulating parent state update)
    rerender(
      <F0GraphSearch
        value="a"
        onChange={onChange}
        results={makeResults()}
        hasQuery={true}
        onSelect={onSelect}
      />
    )

    // Now navigate with ArrowDown and select with Enter
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Enter}")

    expect(onSelect).toHaveBeenCalledWith("1")
  })

  it("Escape clears the search", async () => {
    const { userEvent } = await import("@testing-library/user-event")
    const user = userEvent.setup()
    const onChange = vi.fn()

    // Render with a value and type to trigger the internal popover state
    const { rerender } = renderSearch({
      value: "",
      hasQuery: false,
      results: [],
      onChange,
    })

    const input = screen.getByRole("combobox").querySelector("input")
    input!.focus()
    await user.type(input!, "test")

    // Re-render with updated state
    rerender(
      <F0GraphSearch
        value="test"
        onChange={onChange}
        results={makeResults()}
        hasQuery={true}
        onSelect={vi.fn()}
      />
    )

    // Press Escape
    await user.keyboard("{Escape}")

    // onChange should be called with empty string
    expect(onChange).toHaveBeenCalledWith("")
  })

  it("ArrowDown then ArrowUp navigates results", async () => {
    const { userEvent } = await import("@testing-library/user-event")
    const user = userEvent.setup()
    const onChange = vi.fn()
    const onSelect = vi.fn()

    const { rerender } = renderSearch({
      value: "",
      hasQuery: false,
      results: [],
      onChange,
      onSelect,
    })

    const input = screen.getByRole("combobox").querySelector("input")
    input!.focus()
    await user.type(input!, "a")

    rerender(
      <F0GraphSearch
        value="a"
        onChange={onChange}
        results={makeResults()}
        hasQuery={true}
        onSelect={onSelect}
      />
    )

    // ArrowDown → first result highlighted (index 0 → result "1")
    await user.keyboard("{ArrowDown}")

    // ArrowDown → second result (index 1 → result "2")
    await user.keyboard("{ArrowDown}")

    // ArrowUp → back to first result (index 0 → result "1")
    await user.keyboard("{ArrowUp}")

    // Enter → select the currently highlighted result.
    await user.keyboard("{Enter}")

    // After Down→Down→Up, the highlight lands on index 0 (result "1").
    expect(onSelect).toHaveBeenCalledWith("1")
  })

  it("no-match state — combobox opens and no results are highlighted", async () => {
    const { userEvent } = await import("@testing-library/user-event")
    const user = userEvent.setup()
    const onChange = vi.fn()

    const { rerender } = renderSearch({
      value: "",
      hasQuery: false,
      results: [],
      onChange,
    })

    const input = screen.getByRole("combobox").querySelector("input")
    input!.focus()
    await user.type(input!, "zzz")

    // Re-render with no results and hasQuery=true
    rerender(
      <F0GraphSearch
        value="zzz"
        onChange={onChange}
        results={[]}
        hasQuery={true}
        onSelect={vi.fn()}
      />
    )

    // The component contract for the no-match state is deterministic at the
    // combobox level (the Radix Popover Portal is unreliable under JSDOM):
    //   1. The combobox stays expanded so the user sees feedback.
    //   2. No option is highlighted (aria-activedescendant must be empty).
    //   3. ArrowDown / Enter are no-ops because there is nothing to select.
    const combobox = screen.getByRole("combobox")
    expect(combobox.getAttribute("aria-expanded")).toBe("true")
    expect(combobox.getAttribute("aria-activedescendant")).toBeNull()

    const onSelectSpy = vi.fn()
    rerender(
      <F0GraphSearch
        value="zzz"
        onChange={onChange}
        results={[]}
        hasQuery={true}
        onSelect={onSelectSpy}
      />
    )
    await user.keyboard("{ArrowDown}")
    await user.keyboard("{Enter}")
    expect(onSelectSpy).not.toHaveBeenCalled()
  })

  it("empty query state — combobox indicates closed", () => {
    renderSearch({
      value: "",
      hasQuery: false,
      results: [],
    })

    const combobox = screen.getByRole("combobox")
    expect(combobox.getAttribute("aria-expanded")).toBe("false")
    // No aria-activedescendant when closed
    expect(combobox.getAttribute("aria-activedescendant")).toBeNull()
  })
})
