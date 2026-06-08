import { describe, expect, it } from "vitest"

import { DataCollectionSettings } from "../Settings/SettingsProvider"

import {
  getDefaultDataCollectionSettings,
  isSettingsDefault,
  isVisualizationSettingsDefault,
} from "./isSettingsDefault"

describe("getDefaultDataCollectionSettings", () => {
  it("builds a settings object with a visualization entry per registered visualization", () => {
    const defaults = getDefaultDataCollectionSettings()

    expect(defaults).toHaveProperty("visualization")
    // The table visualization is always registered.
    expect(defaults.visualization).toHaveProperty("table")
  })

  it("returns deeply equal (but not identical) objects on each call", () => {
    expect(getDefaultDataCollectionSettings()).toEqual(
      getDefaultDataCollectionSettings()
    )
    expect(getDefaultDataCollectionSettings()).not.toBe(
      getDefaultDataCollectionSettings()
    )
  })
})

describe("isSettingsDefault", () => {
  it("is true for the freshly-built defaults", () => {
    expect(isSettingsDefault(getDefaultDataCollectionSettings())).toBe(true)
  })

  it("is false when a visualization's settings diverge from the default", () => {
    const modified = getDefaultDataCollectionSettings()
    modified.visualization.table = { hidden: ["email"] }

    expect(isSettingsDefault(modified)).toBe(false)
  })
})

describe("isVisualizationSettingsDefault", () => {
  it("is true when the visualization's settings match the default", () => {
    expect(
      isVisualizationSettingsDefault(
        getDefaultDataCollectionSettings(),
        "table"
      )
    ).toBe(true)
  })

  it("is false when the visualization's settings diverge from the default", () => {
    const modified = getDefaultDataCollectionSettings()
    modified.visualization.table = { order: ["name", "email"] }

    expect(isVisualizationSettingsDefault(modified, "table")).toBe(false)
  })

  it("treats an unknown/absent visualization type as default", () => {
    const settings = getDefaultDataCollectionSettings()

    expect(isVisualizationSettingsDefault(settings, undefined)).toBe(true)
    expect(isVisualizationSettingsDefault(settings, "does-not-exist")).toBe(
      true
    )
  })

  it("ignores divergence in other visualizations", () => {
    const modified = getDefaultDataCollectionSettings()
    modified.visualization.card = {
      hidden: ["x"],
    } as DataCollectionSettings["visualization"]["card"]

    // table is still default even though card changed
    expect(isVisualizationSettingsDefault(modified, "table")).toBe(true)
  })
})
