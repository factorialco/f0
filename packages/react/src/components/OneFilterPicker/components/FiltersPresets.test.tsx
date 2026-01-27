import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { userEvent, zeroRender } from "@/testing/test-utils"

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

describe("FiltersPresets", () => {
  it("should merge preset with existing filters when clicked and not selected", async () => {
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

    // Should call onPresetsChange with the preset's filter merged with existing
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })
  })

  it("should remove only preset keys when deselecting", async () => {
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

    // Should call onPresetsChange with only preset's keys removed
    expect(mockOnPresetsChange).toHaveBeenCalledWith({})
  })

  it("should merge different presets with existing filters", async () => {
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

    // Click on second preset - should merge with existing empty filters
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

    // Should remove only the preset's keys
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

describe("FiltersPresets - Merge Behavior", () => {
  it("should merge preset with existing filters when clicked", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on preset
    await user.click(getByText("Status: Active"))

    // Should merge with existing filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })
  })

  it("should show preset as selected when its filters are present with other filters", async () => {
    const mockOnPresetsChange = vi.fn()
    const filtersWithPreset: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={filtersWithPreset}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // The "Status: Active" preset should appear selected
    const presetButton = getByText("Status: Active").closest("label")
    expect(presetButton).toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should remove only preset keys when deselecting, keeping other filters", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const filtersWithPreset: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={filtersWithPreset}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on already selected preset to deselect
    await user.click(getByText("Status: Active"))

    // Should only remove the preset's keys, keeping other filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
    })
  })

  it("should switch between presets while preserving other filters", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const existingFilters: FiltersState<FiltersDefinition> = {
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={mockStatusPresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on first preset
    await user.click(getByText("Status: Active"))

    // Should merge with existing
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["active"],
    })

    mockOnPresetsChange.mockClear()

    // Click on second preset
    await user.click(getByText("Status: Inactive"))

    // Should replace the status filter (since it's a new selection, not deselection)
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
      status: ["inactive"],
    })
  })
})

describe("FiltersPresets - Multiple Presets Selection", () => {
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

  it("should show both presets as selected when their filters are present", () => {
    const mockOnPresetsChange = vi.fn()
    const filtersWithBothPresets: FiltersState<FiltersDefinition> = {
      location: ["london"],
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={filtersWithBothPresets}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Both presets should appear selected
    const londonPreset = getByText("London Office").closest("label")
    const engineeringPreset = getByText("Engineering Team").closest("label")
    const activePreset = getByText("Active Status").closest("label")

    expect(londonPreset).toHaveClass("bg-f1-background-selected-secondary")
    expect(engineeringPreset).toHaveClass("bg-f1-background-selected-secondary")
    // Active Status should NOT be selected (not in filters)
    expect(activePreset).not.toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should merge second preset with first when clicking different presets", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    // Start with first preset already selected
    const existingFilters: FiltersState<FiltersDefinition> = {
      location: ["london"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={existingFilters}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on second preset (different key)
    await user.click(getByText("Engineering Team"))

    // Should merge both presets' filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      location: ["london"],
      department: ["engineering"],
    })
  })

  it("should deselect only one preset when clicking it while both are selected", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const filtersWithBothPresets: FiltersState<FiltersDefinition> = {
      location: ["london"],
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={filtersWithBothPresets}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on London Office to deselect it
    await user.click(getByText("London Office"))

    // Should remove only location, keep department
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      department: ["engineering"],
    })
  })

  it("should show all three presets as selected when all their filters are present", () => {
    const mockOnPresetsChange = vi.fn()
    const filtersWithAllPresets: FiltersState<FiltersDefinition> = {
      location: ["london"],
      department: ["engineering"],
      status: ["active"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={filtersWithAllPresets}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // All three presets should appear selected
    const londonPreset = getByText("London Office").closest("label")
    const engineeringPreset = getByText("Engineering Team").closest("label")
    const activePreset = getByText("Active Status").closest("label")

    expect(londonPreset).toHaveClass("bg-f1-background-selected-secondary")
    expect(engineeringPreset).toHaveClass("bg-f1-background-selected-secondary")
    expect(activePreset).toHaveClass("bg-f1-background-selected-secondary")
  })

  it("should add third preset while keeping first two selected", async () => {
    const user = userEvent.setup()
    const mockOnPresetsChange = vi.fn()
    const filtersWithTwoPresets: FiltersState<FiltersDefinition> = {
      location: ["london"],
      department: ["engineering"],
    }

    const { getByText } = zeroRender(
      <FiltersPresets
        presets={multiplePresets}
        value={filtersWithTwoPresets}
        onPresetsChange={mockOnPresetsChange}
      />
    )

    // Click on Active Status to add it
    await user.click(getByText("Active Status"))

    // Should merge all three presets' filters
    expect(mockOnPresetsChange).toHaveBeenCalledWith({
      location: ["london"],
      department: ["engineering"],
      status: ["active"],
    })
  })
})
