import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import type { FiltersDefinition, FiltersState } from "../types"

import { FiltersChipsList } from "./FiltersChipsList"

const filters = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [
        { value: "eng", label: "Engineering" },
        { value: "mkt", label: "Marketing" },
      ],
    },
  },
} as const satisfies FiltersDefinition

const activeValue: FiltersState<typeof filters> = { department: ["eng"] }
const emptyValue: FiltersState<typeof filters> = {}

const baseProps = {
  filters,
  onFilterSelect: vi.fn(),
  onFilterRemove: vi.fn(),
  onClearAll: vi.fn(),
}

describe("FiltersChipsList - chips and clear", () => {
  it("does not render the save-view action button (it lives in the presets row)", () => {
    zeroRender(<FiltersChipsList {...baseProps} value={activeValue} />)

    expect(
      screen.queryByRole("button", { name: "Save view" })
    ).not.toBeInTheDocument()
    // Clear shows because there are active filter chips.
    expect(screen.getByRole("button", { name: "Clear" })).toBeInTheDocument()
  })

  it("renders nothing when there are no active chips", () => {
    const { container } = zeroRender(
      <FiltersChipsList {...baseProps} value={emptyValue} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it("calls onClearAll when Clear is clicked", async () => {
    const user = userEvent.setup()
    const onClearAll = vi.fn()

    zeroRender(
      <FiltersChipsList
        {...baseProps}
        onClearAll={onClearAll}
        value={activeValue}
      />
    )

    await user.click(screen.getByRole("button", { name: "Clear" }))
    expect(onClearAll).toHaveBeenCalledTimes(1)
  })

  it("renders nothing (and no Clear) when chips are hidden", () => {
    const { container } = zeroRender(
      <FiltersChipsList {...baseProps} value={activeValue} hideChips />
    )

    expect(container).toBeEmptyDOMElement()
  })
})

describe("FiltersChipsList - result count", () => {
  it("shows the 'results for' prefix when there are active filter chips", () => {
    zeroRender(
      <FiltersChipsList {...baseProps} value={activeValue} resultCount={5} />
    )

    expect(screen.getByText(/results? for:/i)).toBeInTheDocument()
  })

  it("does not show the 'results for' prefix when there are no active filter chips", () => {
    zeroRender(
      <FiltersChipsList {...baseProps} value={emptyValue} resultCount={5} />
    )

    expect(screen.queryByText(/results? for:/i)).not.toBeInTheDocument()
  })

  it("does not show the 'results for' prefix when chips are hidden (hideChips)", () => {
    zeroRender(
      <FiltersChipsList
        {...baseProps}
        value={activeValue}
        hideChips
        resultCount={5}
      />
    )

    expect(screen.queryByText(/results? for:/i)).not.toBeInTheDocument()
  })
})
