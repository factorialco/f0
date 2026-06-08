import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import type { FiltersDefinition, PresetsDefinition } from "../types"

import { FiltersPresets } from "./FiltersPresets"

/**
 * OverflowList renders items in both a hidden measurement container
 * (aria-hidden="true") and a visible container, causing duplicate text nodes.
 */
function getVisibleByText(text: string): HTMLElement {
  const all = screen.getAllByText(text)
  return all.find((el) => !el.closest('[aria-hidden="true"]')) ?? all[0]
}

const SELECTED_CLASS = "bg-f1-background-selected-secondary"

const presetsWithIds: PresetsDefinition<FiltersDefinition> = [
  {
    id: "eng",
    label: "Engineering",
    filter: { department: ["engineering"] },
  },
  {
    id: "mkt",
    label: "Marketing",
    filter: { department: ["marketing"] },
  },
]

describe("FiltersPresets - identity-based selection", () => {
  it("highlights the preset whose id matches selectedPresetId", () => {
    zeroRender(
      <FiltersPresets
        presets={presetsWithIds}
        value={{}}
        onPresetsChange={vi.fn()}
        selectedPresetId="mkt"
        onSelectPreset={vi.fn()}
      />
    )

    expect(getVisibleByText("Marketing").closest("label")).toHaveClass(
      SELECTED_CLASS
    )
    expect(getVisibleByText("Engineering").closest("label")).not.toHaveClass(
      SELECTED_CLASS
    )
  })

  it("stays selected by id even when current filters diverge from the preset filter", () => {
    // The current value does NOT match the selected preset's filter, yet the
    // preset must remain highlighted because selection is identity-based.
    zeroRender(
      <FiltersPresets
        presets={presetsWithIds}
        value={{ department: ["sales"], status: ["active"] }}
        onPresetsChange={vi.fn()}
        selectedPresetId="eng"
        onSelectPreset={vi.fn()}
      />
    )

    expect(getVisibleByText("Engineering").closest("label")).toHaveClass(
      SELECTED_CLASS
    )
  })

  it("calls onSelectPreset with the preset id when clicked (not onPresetsChange)", async () => {
    const user = userEvent.setup()
    const onSelectPreset = vi.fn()
    const onPresetsChange = vi.fn()

    zeroRender(
      <FiltersPresets
        presets={presetsWithIds}
        value={{}}
        onPresetsChange={onPresetsChange}
        selectedPresetId={undefined}
        onSelectPreset={onSelectPreset}
      />
    )

    await user.click(getVisibleByText("Engineering"))

    expect(onSelectPreset).toHaveBeenCalledWith("eng")
    expect(onPresetsChange).not.toHaveBeenCalled()
  })

  it("calls onSelectPreset with the already-selected id (owner handles toggle/reset)", async () => {
    const user = userEvent.setup()
    const onSelectPreset = vi.fn()

    zeroRender(
      <FiltersPresets
        presets={presetsWithIds}
        value={{}}
        onPresetsChange={vi.fn()}
        selectedPresetId="eng"
        onSelectPreset={onSelectPreset}
      />
    )

    await user.click(getVisibleByText("Engineering"))

    expect(onSelectPreset).toHaveBeenCalledWith("eng")
  })

  it("derives a fallback id from label+index when a preset has no id", async () => {
    const user = userEvent.setup()
    const onSelectPreset = vi.fn()
    const presetsNoId: PresetsDefinition<FiltersDefinition> = [
      { label: "First", filter: { department: ["a"] } },
      { label: "Second", filter: { department: ["b"] } },
    ]

    zeroRender(
      <FiltersPresets
        presets={presetsNoId}
        value={{}}
        onPresetsChange={vi.fn()}
        onSelectPreset={onSelectPreset}
      />
    )

    await user.click(getVisibleByText("Second"))

    expect(onSelectPreset).toHaveBeenCalledWith("Second-1")
  })

  it("falls back to legacy exact-match selection when onSelectPreset is absent", async () => {
    const user = userEvent.setup()
    const onPresetsChange = vi.fn()

    zeroRender(
      <FiltersPresets
        presets={presetsWithIds}
        value={{ department: ["marketing"] }}
        onPresetsChange={onPresetsChange}
      />
    )

    // Legacy mode: exact filter match highlights the preset...
    expect(getVisibleByText("Marketing").closest("label")).toHaveClass(
      SELECTED_CLASS
    )

    // ...and clicking it deselects by clearing filters.
    await user.click(getVisibleByText("Marketing"))
    expect(onPresetsChange).toHaveBeenCalledWith({})
  })
})
