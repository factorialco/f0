import "@testing-library/jest-dom/vitest"
import React, { type ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { FiltersPresets } from "../components/FiltersPresets"

vi.mock("@/ui/OverflowList", () => ({
  OverflowList: ({
    items,
    renderListItem,
    renderDropdownItem,
  }: {
    items: unknown[]
    renderListItem: (
      item: unknown,
      index: number,
      isVisible?: boolean
    ) => ReactNode
    renderDropdownItem: (item: unknown, index: number) => ReactNode
  }) => {
    if (items.length === 0) {
      return null
    }

    return (
      <div>
        <div data-testid="visible-item">
          {renderListItem(items[0], 0, true)}
        </div>
        <div data-testid="collapsed-item">
          {renderDropdownItem(items[0], 0)}
        </div>
      </div>
    )
  },
}))

describe("FiltersPresets counter consistency", () => {
  it("uses itemsCount for both visible and collapsed preset counters", async () => {
    render(
      <FiltersPresets
        value={{}}
        onPresetsChange={vi.fn()}
        presets={[
          {
            label: "Engineering + Remote",
            filter: {
              department: ["engineering"],
              location: ["remote"],
            },
            itemsCount: () => 42,
          },
        ]}
      />
    )

    await waitFor(() => {
      expect(screen.getAllByText("42")).toHaveLength(2)
    })
  })

  it("supports async itemsCount in both visible and collapsed preset counters", async () => {
    render(
      <FiltersPresets
        value={{}}
        onPresetsChange={vi.fn()}
        presets={[
          {
            label: "Engineering + Remote",
            filter: {
              department: ["engineering"],
              location: ["remote"],
            },
            itemsCount: () => Promise.resolve(77),
          },
        ]}
      />
    )

    await waitFor(() => {
      expect(screen.getAllByText("77")).toHaveLength(2)
    })
  })
})
