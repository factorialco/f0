import { createElement, type ReactNode } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import type {
  FiltersDefinition,
  FiltersState,
} from "@/patterns/OneFilterPicker/types"

import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import { act, zeroRenderHook } from "@/testing/test-utils"

import type { DashboardItem } from "../types"

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

async function runExport(
  items: DashboardItem<typeof filtersDefinition>[],
  translations = defaultTranslations
) {
  const wrapper = ({ children }: { children: ReactNode }) =>
    createElement(I18nProvider, { translations }, children)
  const { result } = zeroRenderHook(
    () =>
      useDashboardExport({
        items,
        filters: activeFilters,
        filename: "test-dashboard",
      }),
    { wrapper }
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

  it("preserves combo export keys in multi-sheet workbooks", async () => {
    await runExport([
      {
        id: "combo-chart",
        title: "Revenue",
        type: "chart",
        chart: {
          type: "combo",
          primaryAxisLabel: "Amount",
          secondaryAxisLabel: "Percent",
        },
        fetchData: vi.fn().mockResolvedValue({
          categories: ["Jan"],
          barSeries: [{ name: "Revenue", data: [10] }],
          lineSeries: [{ name: "Revenue", data: [5] }],
        }),
      },
    ])

    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        {
          name: "Revenue",
          columns: ["Category", "Revenue · Amount", "Revenue · Percent"],
          keys: ["category", "bar-0", "line-0"],
          rows: [{ category: "Jan", "bar-0": 10, "line-0": 5 }],
        },
      ],
      "test-dashboard"
    )
  })

  it("uses provider translations for blank combo labels in dashboard workbooks", async () => {
    const translations = {
      ...defaultTranslations,
      dataChart: {
        ...defaultTranslations.dataChart,
        comboAxis: {
          primaryMeasure: "Medida principal",
          secondaryMeasure: "Medida secundaria",
          target: "Objetivo",
        },
      },
    }

    await runExport(
      [
        {
          id: "combo-chart",
          title: "Revenue",
          type: "chart",
          chart: {
            type: "combo",
            primaryAxisLabel: " ",
            secondaryAxisLabel: "",
          },
          fetchData: vi.fn().mockResolvedValue({
            categories: ["Jan"],
            barSeries: [{ name: "Revenue", data: [{ value: 10, target: 12 }] }],
            lineSeries: [{ name: "Margin", data: [5] }],
          }),
        },
      ],
      translations
    )

    expect(downloadHelpers.downloadMultiSheetExcel).toHaveBeenCalledWith(
      [
        {
          name: "Revenue",
          columns: [
            "Category",
            "Revenue · Medida principal",
            "Revenue · Medida principal Objetivo",
            "Margin · Medida secundaria",
          ],
          keys: ["category", "bar-0", "bar-0-target", "line-0"],
          rows: [
            {
              category: "Jan",
              "bar-0": 10,
              "bar-0-target": 12,
              "line-0": 5,
            },
          ],
        },
      ],
      "test-dashboard"
    )
  })
})
