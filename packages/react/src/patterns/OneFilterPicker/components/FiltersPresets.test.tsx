import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "../types"

import { FiltersPresets } from "./FiltersPresets"

/**
 * OverflowList renders items in both a hidden measurement container
 * (aria-hidden="true") and a visible container, causing duplicate text nodes.
 * This helper returns the visible instance, falling back to the first match.
 */
function getVisibleByText(text: string): HTMLElement {
  const all = screen.getAllByText(text)
  return all.find((el) => !el.closest('[aria-hidden="true"]')) ?? all[0]
}

const mockPresets: PresetsDefinition<FiltersDefinition> = [
  {
    label: "Engineering Active",
    filter: { department: ["engineering"], status: ["active"] },
  },
  {
    label: "Marketing Only",
    filter: { department: ["marketing"] },
  },
]

const mockStatusPresets: PresetsDefinition<FiltersDefinition> = [
  {
    label: "Status: Active",
    filter: { status: ["active"] },
  },
  {
    label: "Status: Inactive",
    filter: { status: ["inactive"] },
  },
]

describe("FiltersPresets - Replace Behavior", () => {
  it("should replace all filters with preset's filter when clicked", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const initialFilters: FiltersState<FiltersDefinition> = {}

    zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={initialFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Engineering Active"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })
  })

  it("should replace existing filters when clicking a preset", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      location: ["london"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Status: Active"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      status: ["active"],
    })
  })

  it("should clear all filters when deselecting a preset", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const selectedFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      status: ["active"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={selectedFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Engineering Active"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({})
  })

  it("should clear single-filter presets when deselecting", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const selectedFilters: FiltersState<FiltersDefinition> = {
      department: ["marketing"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={selectedFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Marketing Only"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({})
  })

  it("should show skeleton when presetsLoading is true", () => {
    const mockOnPresetsChange = vi.fn()
    const initialFilters: FiltersState<FiltersDefinition> = {}

    const { getAllByTestId } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={initialFilters}
        onPresetsChange={mockOnPresetsChange}
        presetsLoading={true}
      />
    )

    const skeletonItems = getAllByTestId("skeleton")
    expect(skeletonItems).toHaveLength(4)
  })

  it("should not show skeleton when presetsLoading is false", () => {
    const mockOnPresetsChange = vi.fn()
    const initialFilters: FiltersState<FiltersDefinition> = {}

    const { queryByTestId } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={initialFilters}
        onPresetsChange={mockOnPresetsChange}
        presetsLoading={false}
      />
    )

    const skeletonItems = queryByTestId("skeleton")
    expect(skeletonItems).toBeNull()
  })
})

describe("FiltersPresets - Exact Match Selection", () => {
  it("should show preset as selected only on exact match", () => {
    const mockOnPresetsChange = vi.fn()
    const exactMatchFilters: FiltersState<FiltersDefinition> = {
      status: ["active"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={exactMatchFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    const activePreset = getVisibleByText("Status: Active").closest("label")
    expect(activePreset).toHaveClass("bg-f1-background-selected-secondary")

    const inactivePreset = getVisibleByText("Status: Inactive").closest("label")
    expect(inactivePreset).not.toHaveClass(
      "bg-f1-background-selected-secondary"
    )
  })

  it("should not show preset as selected when there are extra filter keys", () => {
    const mockOnPresetsChange = vi.fn()
    const filtersWithExtra: FiltersState<FiltersDefinition> = {
      status: ["active"],
      department: ["engineering"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={filtersWithExtra}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    const activePreset = getVisibleByText("Status: Active").closest("label")
    expect(activePreset).not.toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should not show preset as selected when values differ", () => {
    const mockOnPresetsChange = vi.fn()
    const differentValues: FiltersState<FiltersDefinition> = {
      status: ["inactive"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={differentValues}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    const activePreset = getVisibleByText("Status: Active").closest("label")
    expect(activePreset).not.toHaveClass("bg-f1-background-selected-secondary")

    const inactivePreset = getVisibleByText("Status: Inactive").closest("label")
    expect(inactivePreset).toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should switch between presets by replacing filters", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {}

    zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Status: Active"))
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      status: ["active"],
    })

    mockOnPresetsChange.mockClear()

    await user.click(getVisibleByText("Status: Inactive"))
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      status: ["inactive"],
    })
  })

  it("should replace a selected preset with a different preset", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      status: ["active"],
    }

    zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Status: Inactive"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      status: ["inactive"],
    })
  })
})

describe("FiltersPresets - No Multiple Selection", () => {
  const multiplePresets: PresetsDefinition<FiltersDefinition> = [
    {
      label: "London Office",
      filter: { location: ["london"] },
    },
    {
      label: "Engineering Team",
      filter: { department: ["engineering"] },
    },
    {
      label: "Active Status",
      filter: { status: ["active"] },
    },
  ]

  it("should not show multiple presets as selected when filters contain keys from multiple presets", () => {
    const mockOnPresetsChange = vi.fn()
    const filtersWithMultiple: FiltersState<FiltersDefinition> = {
      location: ["london"],
      department: ["engineering"],
    }

    zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={filtersWithMultiple}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    const londonPreset = getVisibleByText("London Office").closest("label")
    const engineeringPreset =
      getVisibleByText("Engineering Team").closest("label")
    const activePreset = getVisibleByText("Active Status").closest("label")

    expect(londonPreset).not.toHaveClass("bg-f1-background-selected-secondary")
    expect(engineeringPreset).not.toHaveClass(
      "bg-f1-background-selected-secondary"
    )
    expect(activePreset).not.toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should show only one preset as selected when filters exactly match it", () => {
    const mockOnPresetsChange = vi.fn()
    const exactMatchFilters: FiltersState<FiltersDefinition> = {
      location: ["london"],
    }

    zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={exactMatchFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    const londonPreset = getVisibleByText("London Office").closest("label")
    const engineeringPreset =
      getVisibleByText("Engineering Team").closest("label")
    const activePreset = getVisibleByText("Active Status").closest("label")

    expect(londonPreset).toHaveClass("bg-f1-background-selected-secondary")
    expect(engineeringPreset).not.toHaveClass(
      "bg-f1-background-selected-secondary"
    )
    expect(activePreset).not.toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should replace with a different preset when clicking it", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      location: ["london"],
    }

    zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("Engineering Team"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
    })
  })

  it("should clear all filters when clicking the exact selected preset", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const selectedFilters: FiltersState<FiltersDefinition> = {
      location: ["london"],
    }

    zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={selectedFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    await user.click(getVisibleByText("London Office"))

    expect(mockOnPresetsChange).toHaveBeenCalledWith({})
  })
})

describe("FiltersPresets - groups, separator and save chip", () => {
  const mixedPresets: PresetsDefinition<FiltersDefinition> = [
    { id: "dev-1", label: "Dev One", filter: { department: ["a"] } },
    { id: "dev-2", label: "Dev Two", filter: { department: ["b"] } },
    { id: "custom-1", label: "Custom One", filter: { department: ["c"] } },
  ]

  it("renders a separator between developer and custom presets", () => {
    zeroRender(
      <FiltersPresets
        presets={mixedPresets}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
        editablePresetIds={["custom-1"]}
      />
    )

    expect(
      screen.getAllByTestId("preset-group-separator").length
    ).toBeGreaterThan(0)
  })

  it("does not render a separator when there are no custom presets", () => {
    zeroRender(
      <FiltersPresets
        presets={mixedPresets}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
        editablePresetIds={[]}
      />
    )

    expect(
      screen.queryByTestId("preset-group-separator")
    ).not.toBeInTheDocument()
  })

  it("shows a 'Save view' chip when presetActionState is 'save' and triggers onPresetAction", async () => {
    const user = userEvent.setup()
    const onPresetAction = vi.fn()

    zeroRender(
      <FiltersPresets
        presets={mixedPresets}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
        editablePresetIds={["custom-1"]}
        presetActionState="save"
        onPresetAction={onPresetAction}
      />
    )

    // The save chip is a list item; in jsdom (0-width) it may land in the
    // overflow measurement copy, so query by text (incl. aria-hidden).
    await user.click(getVisibleByText("Save view"))
    expect(onPresetAction).toHaveBeenCalledTimes(1)
  })

  it("renders the save chip even when there are no presets", () => {
    zeroRender(
      <FiltersPresets
        presets={[]}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
        presetActionState="save"
        onPresetAction={vi.fn()}
      />
    )

    expect(
      screen.getByRole("button", { name: "Save view" })
    ).toBeInTheDocument()
  })

  it("does not show the save chip when presetActionState is 'none'", () => {
    zeroRender(
      <FiltersPresets
        presets={mixedPresets}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
        editablePresetIds={["custom-1"]}
        presetActionState="none"
        onPresetAction={vi.fn()}
      />
    )

    expect(
      screen.queryByRole("button", { name: "Save view" })
    ).not.toBeInTheDocument()
  })
})

describe("FiltersPresets - Loading transition", () => {
  // OverflowList commits its visible/overflow split after render, so the
  // loading→loaded flip produces one render where the new callbacks could see
  // the numeric skeleton items. Regression for the f0-react 2.50.0 crash:
  // "Cannot read properties of undefined (reading 'itemsCount')".
  const CONTAINER_WIDTH = 800
  const ITEM_WIDTH = 50

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get() {
        return CONTAINER_WIDTH
      },
    })
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
      width: ITEM_WIDTH,
      height: 32,
      top: 0,
      left: 0,
      bottom: 32,
      right: ITEM_WIDTH,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect)
  })

  afterEach(() => {
    delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
    vi.restoreAllMocks()
  })

  it("does not crash when presets finish loading after the skeleton phase", () => {
    const presets: PresetsDefinition<FiltersDefinition> = [
      {
        id: "all",
        label: "All expenses",
        filter: {},
        itemsCount: () => 5,
      },
      {
        id: "pending",
        label: "Pending",
        filter: { status: ["pending"] },
        itemsCount: () => 2,
      },
    ]

    const { rerender } = zeroRender(
      <FiltersPresets
        presets={[]}
        presetsLoading
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
      />
    )

    rerender(
      <FiltersPresets
        presets={presets}
        presetsLoading={false}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={vi.fn()}
        selectedPresetId="all"
      />
    )

    expect(getVisibleByText("All expenses")).toBeInTheDocument()
    expect(getVisibleByText("Pending")).toBeInTheDocument()
  })
})
