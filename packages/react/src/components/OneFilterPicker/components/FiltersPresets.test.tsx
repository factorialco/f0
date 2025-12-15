import { userEvent, zeroRender } from "@/testing/test-utils"
import { describe, expect, it, vi } from "vitest"
import type { FiltersDefinition, FiltersState, PresetsDefinition } from "../types"
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
