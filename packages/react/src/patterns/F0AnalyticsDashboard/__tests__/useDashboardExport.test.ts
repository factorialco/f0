import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { ChartLine } from "@/icons/app"
import { act, zeroRenderHook } from "@/testing/test-utils"

import type { DashboardItem, DashboardLocationConfig } from "../types"

import { useDashboardExport } from "../hooks/useDashboardExport"
import * as downloadHelpers from "../utils/downloadHelpers"

const filtersDefinition = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [{ value: "engineering", label: "Engineering" }],
    },
  },
} as const satisfies FiltersDefinition

type TestFilters = FiltersState<typeof filtersDefinition>

const activeFilters: TestFilters = {
  department: ["engineering"],
}

const locationConfig: DashboardLocationConfig = {
  summaryMetrics: [
    { id: "devices", label: "Devices", icon: ChartLine },
    { id: "available", label: "Available", icon: ChartLine },
    { id: "attention", label: "Attention", icon: ChartLine },
  ],
  densityLabel: "Devices",
  densityLowLabel: () => "Low",
  densityMediumLabel: () => "Medium",
  densityHighLabel: () => "High",
  timelineTitle: "Asset movement",
  timelineAriaLabel: "Asset movement",
  mapAriaLabel: "Inventory by location",
  selectLocationLabel: "Select a location",
  viewLocationDetailsLabel: (name) => `View ${name}`,
  closeLocationDetailsLabel: "Close",
  noDataLabel: "No inventory",
  exportLabels: {
    location: "Location",
    density: "Devices",
    details: "Inventory",
    item: "Item",
    description: "Owner",
  },
}

async function runExport(items: DashboardItem<typeof filtersDefinition>[]) {
  const { result } = zeroRenderHook(() =>
    useDashboardExport({
      items,
      filters: activeFilters,
      filename: "test-dashboard",
    })
  )

  await act(async () => {
    await result.current.exportAsExcel()
  })
}

describe("useDashboardExport", () => {
  beforeEach(() => {
    vi.spyOn(downloadHelpers, "downloadMultiSheetExcel").mockImplementation(
      () => {}
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("honors filter opt-out for metrics", async () => {
    const filteredFetch = vi.fn().mockResolvedValue({ value: 42 })
    const unfilteredFetch = vi.fn().mockResolvedValue({ value: 84 })

    await runExport([
      {
        id: "filtered-metric",
        title: "Filtered metric",
        type: "metric",
        fetchData: filteredFetch,
      },
      {
        id: "unfiltered-metric",
        title: "Unfiltered metric",
        type: "metric",
        fetchData: unfilteredFetch,
        useDashboardFilters: false,
      },
    ])

    expect(filteredFetch).toHaveBeenCalledWith(activeFilters)
    expect(unfilteredFetch).toHaveBeenCalledWith({})
  })

  it("honors filter opt-out for charts", async () => {
    const filteredFetch = vi.fn().mockResolvedValue({
      categories: ["Engineering"],
      series: [{ name: "Headcount", data: [42] }],
    })
    const unfilteredFetch = vi.fn().mockResolvedValue({
      categories: ["All"],
      series: [{ name: "Headcount", data: [84] }],
    })

    await runExport([
      {
        id: "filtered-chart",
        title: "Filtered chart",
        type: "chart",
        chart: { type: "bar" },
        fetchData: filteredFetch,
      },
      {
        id: "unfiltered-chart",
        title: "Unfiltered chart",
        type: "chart",
        chart: { type: "bar" },
        fetchData: unfilteredFetch,
        useDashboardFilters: false,
      },
    ])

    expect(filteredFetch).toHaveBeenCalledWith(activeFilters)
    expect(unfilteredFetch).toHaveBeenCalledWith({})
  })

  it("honors filter opt-out for collections", async () => {
    const filteredCreateSource = vi.fn(() => ({
      dataAdapter: {
        fetchData: vi.fn().mockResolvedValue({
          records: [{ department: "Engineering" }],
        }),
      },
    }))
    const unfilteredCreateSource = vi.fn(() => ({
      dataAdapter: {
        fetchData: vi.fn().mockResolvedValue({
          records: [{ department: "All" }],
        }),
      },
    }))

    await runExport([
      {
        id: "filtered-collection",
        title: "Filtered collection",
        type: "collection",
        createSource: filteredCreateSource,
        visualizations: [],
      },
      {
        id: "unfiltered-collection",
        title: "Unfiltered collection",
        type: "collection",
        createSource: unfilteredCreateSource,
        visualizations: [],
        useDashboardFilters: false,
      },
    ])

    expect(filteredCreateSource).toHaveBeenCalledWith(activeFilters)
    expect(unfilteredCreateSource).toHaveBeenCalledWith({})
  })

  it("exports built-in location detail rows with dashboard filters", async () => {
    const fetchData = vi.fn().mockResolvedValue({
      summary: { devices: 1 },
      locations: [
        {
          id: "barcelona",
          name: "Barcelona · HQ",
          coordinates: [2.17, 41.38],
          density: 39,
          detailsLabel: "1 device",
          details: [
            {
              id: "device-1",
              title: "MacBook Pro · IT-1842",
              description: "Alex Rivera",
              avatar: { type: "icon", icon: ChartLine },
              values: [{ label: "Status", value: "Healthy" }],
            },
          ],
        },
      ],
      timeline: { categories: [], series: [] },
    })

    await runExport([
      {
        id: "inventory-map",
        title: "IT inventory by location",
        type: "location",
        location: locationConfig,
        fetchData,
      },
    ])

    expect(fetchData).toHaveBeenCalledWith(activeFilters)
    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        expect.objectContaining({
          name: "IT inventory by location",
          columns: [
            "Location",
            "Devices",
            "Inventory",
            "Item",
            "Owner",
            "Status",
          ],
          keys: [
            "location:name",
            "location:density",
            "location:details",
            "location:item",
            "location:description",
            "location:value:Status",
          ],
          rows: [
            {
              "location:name": "Barcelona · HQ",
              "location:density": 39,
              "location:details": "1 device",
              "location:item": "MacBook Pro · IT-1842",
              "location:description": "Alex Rivera",
              "location:value:Status": "Healthy",
            },
          ],
        }),
      ],
      "test-dashboard"
    )
  })

  it("honors location filter opt-out and exports locations without detail rows", async () => {
    const fetchData = vi.fn().mockResolvedValue({
      summary: {},
      locations: [
        {
          id: "madrid",
          name: "Madrid · Castellana",
          coordinates: [-3.7, 40.41],
          density: 4,
          detailsLabel: "No assigned devices",
          details: [],
        },
        {
          id: "paris",
          name: "Paris · République",
          coordinates: [2.35, 48.85],
          density: 1,
          detailsLabel: "1 device",
          details: [
            {
              id: "device-2",
              title: "MacBook Air · IT-0091",
              avatar: { type: "icon", icon: ChartLine },
              values: [{ label: "Status", value: "Healthy" }],
            },
          ],
        },
      ],
      timeline: { categories: [], series: [] },
    })

    await runExport([
      {
        id: "inventory-map",
        title: "IT inventory by location",
        type: "location",
        useDashboardFilters: false,
        location: locationConfig,
        fetchData,
      },
    ])

    expect(fetchData).toHaveBeenCalledWith({})
    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        expect.objectContaining({
          columns: ["Location", "Devices", "Inventory", "Item", "Status"],
          keys: [
            "location:name",
            "location:density",
            "location:details",
            "location:item",
            "location:value:Status",
          ],
          rows: [
            {
              "location:name": "Madrid · Castellana",
              "location:density": 4,
              "location:details": "No assigned devices",
            },
            {
              "location:name": "Paris · République",
              "location:density": 1,
              "location:details": "1 device",
              "location:item": "MacBook Air · IT-0091",
              "location:value:Status": "Healthy",
            },
          ],
        }),
      ],
      "test-dashboard"
    )
  })

  it("does not download a sheet for an empty location collection", async () => {
    await runExport([
      {
        id: "empty-map",
        title: "Empty locations",
        type: "location",
        location: locationConfig,
        fetchData: async () => ({
          summary: {},
          locations: [],
          timeline: { categories: [], series: [] },
        }),
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
  })

  it("preserves location values when localized export labels are identical", async () => {
    await runExport([
      {
        id: "duplicate-location-labels",
        title: "Duplicate labels",
        type: "location",
        location: {
          ...locationConfig,
          exportLabels: {
            location: "Value",
            density: "Value",
            details: "Value",
            item: "Value",
            description: "Value",
          },
        },
        fetchData: async () => ({
          summary: {},
          locations: [
            {
              id: "barcelona",
              name: "Barcelona · HQ",
              coordinates: [2.17, 41.38],
              density: 39,
              detailsLabel: "1 person",
              details: [
                {
                  id: "alex",
                  title: "Alex Rivera",
                  description: "Workplace",
                  avatar: { type: "icon", icon: ChartLine },
                  values: [],
                },
              ],
            },
          ],
        }),
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        expect.objectContaining({
          columns: ["Value", "Value", "Value", "Value", "Value"],
          keys: [
            "location:name",
            "location:density",
            "location:details",
            "location:item",
            "location:description",
          ],
          rows: [
            {
              "location:name": "Barcelona · HQ",
              "location:density": 39,
              "location:details": "1 person",
              "location:item": "Alex Rivera",
              "location:description": "Workplace",
            },
          ],
        }),
      ],
      "test-dashboard"
    )
  })

  it("warns and skips a rejected location export", async () => {
    const error = new Error("Location export unavailable")
    const warning = vi.spyOn(console, "warn").mockImplementation(() => {})

    await runExport([
      {
        id: "failed-map",
        title: "Failed locations",
        type: "location",
        location: locationConfig,
        fetchData: async () => Promise.reject(error),
      },
    ])

    expect(warning).toHaveBeenCalledWith(
      '[useDashboardExport] Failed to export location item "Failed locations":',
      error
    )
    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
  })

  it("omits custom bodies while exporting supported items", async () => {
    const renderContent = vi.fn(() => null)

    await runExport([
      {
        id: "headcount",
        title: "Headcount",
        type: "metric",
        fetchData: async () => ({ value: 42 }),
      },
      {
        id: "clock-map",
        title: "Clock activity by location",
        type: "custom",
        renderContent,
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledTimes(1)
    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        expect.objectContaining({
          name: "Metrics",
          rows: [{ Metric: "Headcount", Value: 42 }],
        }),
      ],
      "test-dashboard"
    )
    expect(renderContent).not.toHaveBeenCalled()
  })

  it("does not download an empty workbook for custom-only dashboards", async () => {
    await runExport([
      {
        id: "clock-map",
        title: "Clock activity by location",
        type: "custom",
        renderContent: () => null,
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).not.toHaveBeenCalled()
  })
})
