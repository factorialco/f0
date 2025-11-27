import { userEvent, zeroRender } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import type {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "../types"
import { FiltersPresets } from "./FiltersPresets"

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

const mockAdditivePresets: PresetsDefinition<FiltersDefinition> = [
  {
    label: "Status: Active",
    filter: { status: ["active"] },
    mode: "additive",
  },
  {
    label: "Status: Inactive",
    filter: { status: ["inactive"] },
    mode: "additive",
  },
]

const mockMixedPresets: PresetsDefinition<FiltersDefinition> = [
  {
    label: "All Engineering",
    filter: { department: ["engineering"] },
    // No mode - defaults to replace
  },
  {
    label: "Status: Active",
    filter: { status: ["active"] },
    mode: "additive",
  },
]

describe("FiltersPresets", () => {
  it("should apply preset when clicked and not selected", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const initialFilters: FiltersState<FiltersDefinition> = {}

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={initialFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on the first preset
    await user.click(getByText("Engineering Active"))

    // Should call onPresetsChange with the preset's filter
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })
  })

  it("should deselect preset when clicked and already selected", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const selectedFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={selectedFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on the already selected preset
    await user.click(getByText("Engineering Active"))

    // Should call onPresetsChange with empty filters to deselect
    expect(mockOnPresetsChange).toHaveBeenCalledWith({})
  })

  it("should toggle between different presets correctly", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const initialFilters: FiltersState<FiltersDefinition> = {}

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={initialFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on first preset
    await user.click(getByText("Engineering Active"))
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })

    // Reset mock
    mockOnPresetsChange.mockClear()

    // Click on second preset
    await user.click(getByText("Marketing Only"))
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["marketing"],
    })
  })

  it("should work with dropdown preset items", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const selectedFilters: FiltersState<FiltersDefinition> = {
      department: ["marketing"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={selectedFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on the already selected preset in dropdown
    await user.click(getByText("Marketing Only"))

    // Should deselect the preset
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

    // Should show skeleton items
    const skeletonItems = getAllByTestId("skeleton")
    expect(skeletonItems).toHaveLength(4) // 3 skeleton items as defined in the component
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

    // Should not show skeleton items
    const skeletonItems = queryByTestId("skeleton")
    expect(skeletonItems).toBeNull()
  })
})

describe("FiltersPresets - Additive Mode", () => {
  it("should merge additive preset with existing filters when clicked", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockAdditivePresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on additive preset
    await user.click(getByText("Status: Active"))

    // Should merge with existing filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })
  })

  it("should show additive preset as selected when its filters are present with other filters", async () => {
    const mockOnPresetsChange = vi.fn()
    const filtersWithPreset: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockAdditivePresets}
        value={filtersWithPreset}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // The "Status: Active" preset should appear selected
    const presetButton = getByText("Status: Active").closest("label")
    expect(presetButton).toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should remove only preset keys when deselecting additive preset", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const filtersWithPreset: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockAdditivePresets}
        value={filtersWithPreset}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on already selected additive preset to deselect
    await user.click(getByText("Status: Active"))

    // Should only remove the preset's keys, keeping other filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
    })
  })

  it("should switch between additive presets while preserving other filters", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockAdditivePresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on first additive preset
    await user.click(getByText("Status: Active"))

    // Should merge with existing
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })

    mockOnPresetsChange.mockClear()

    // Click on second additive preset
    await user.click(getByText("Status: Inactive"))

    // Should replace the status filter (since it's a new selection, not deselection)
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["inactive"],
    })
  })

  it("should handle mixed mode presets correctly", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      location: ["remote"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockMixedPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on replace mode preset (no mode = replace)
    await user.click(getByText("All Engineering"))

    // Should replace all filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
    })

    mockOnPresetsChange.mockClear()

    // Click on additive mode preset
    await user.click(getByText("Status: Active"))

    // Should merge with current filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      location: ["remote"],
      status: ["active"],
    })
  })

  it("should maintain backward compatibility - preset without mode should replace", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      location: ["remote"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on preset without mode (should default to replace)
    await user.click(getByText("Engineering Active"))

    // Should replace all filters with preset's filter
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })
  })
})
