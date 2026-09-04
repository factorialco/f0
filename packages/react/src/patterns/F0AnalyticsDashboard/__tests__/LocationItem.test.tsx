import { baseColors } from "@factorialco/f0-core"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ChartLine, ClockBack, Computer } from "@/icons/app"
import { ClockIn } from "@/icons/modules"
import {
  act,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import type {
  DashboardLocationConfig,
  DashboardLocationData,
  DashboardLocationItem,
} from "../types"

import { LocationVisualization } from "../components/LocationItem/LocationVisualization"
import { F0AnalyticsDashboard } from "../F0AnalyticsDashboard"

vi.mock("@/patterns/F0Map", () => ({
  f0MapDensityColors: { low: "red", medium: "red", high: "red" },
  f0MapDensityColorSteps: { low: 10, medium: 50, high: 70 },
  f0MapDensityPalette: {
    low: { color: "red", colorStep: 10 },
    medium: { color: "red", colorStep: 50 },
    high: { color: "red", colorStep: 70 },
  },
  f0MapStyles: {
    light: { version: 8, sources: {}, layers: [] },
    dark: { version: 8, sources: {}, layers: [] },
  },
  resolveF0MapDensityStyle: (style: { color: string; colorStep: number }) =>
    style.color === "malibu" && style.colorStep === 60
      ? { ...style, colorStep: 70 }
      : style,
  f0MapDensitySurfaceStyle: (style: {
    color: keyof typeof baseColors
    colorStep: 10 | 50 | 60 | 70
  }) =>
    style.colorStep === 10
      ? {
          backgroundColor: "hsl(var(--neutral-0))",
          boxShadow: `inset 0 0 0 999px hsl(${baseColors[style.color][50]} / 0.1)`,
        }
      : { backgroundColor: `hsl(${baseColors[style.color][style.colorStep]})` },
  F0Map: ({
    markers,
    onMarkerSelect,
    onFallbackChange,
    ariaLabel,
    selectedMarkerId,
  }: {
    markers: Array<{
      id: string
      ariaLabel?: string
      level?: string
      style?: { color: string; colorStep: number }
    }>
    onMarkerSelect?: (id: string) => void
    onFallbackChange?: (visible: boolean) => void
    ariaLabel?: string
    selectedMarkerId?: string | null
  }) => (
    <nav aria-label="Locations" data-map-label={ariaLabel}>
      {markers.map((marker) => (
        <button
          key={marker.id}
          type="button"
          data-density-level={marker.level}
          data-density-color={marker.style?.color}
          data-density-color-step={marker.style?.colorStep}
          aria-current={selectedMarkerId === marker.id || undefined}
          onClick={() => onMarkerSelect?.(marker.id)}
        >
          {marker.ariaLabel}
        </button>
      ))}
      <button type="button" onClick={() => onFallbackChange?.(true)}>
        Use map fallback
      </button>
    </nav>
  ),
}))

vi.mock("@/kits/F0DataChart", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/kits/F0DataChart")>()
  return {
    ...actual,
    F0DataChart: ({
      categories,
      series,
    }: {
      categories: string[]
      series: Array<{ name: string }>
    }) => (
      <div data-testid="location-timeline-chart">
        {categories.length} categories ·{" "}
        {series.map((item) => item.name).join(", ")}
      </div>
    ),
  }
})

const config: DashboardLocationConfig = {
  summaryMetrics: [
    { id: "in", label: "Clock ins", icon: ClockIn, tone: "positive" },
    { id: "out", label: "Clock outs", icon: ClockBack, tone: "critical" },
    { id: "peak", label: "Density", icon: ChartLine, tone: "selected" },
  ],
  densityLabel: "Density",
  densityLowLabel: (below) => `1–${below - 1}`,
  densityMediumLabel: (from, below) => `${from}–${below - 1}`,
  densityHighLabel: (from) => `${from}+`,
  timelineTitle: "24-hour activity",
  timelineAriaLabel: "Activity by hour",
  mapAriaLabel: "Activity by location",
  selectLocationLabel: "Select a location",
  viewLocationDetailsLabel: (name) => `View activity for ${name}`,
  closeLocationDetailsLabel: "Close location activity",
  noDataLabel: "No activity",
  exportLabels: {
    location: "Location",
    density: "Density",
    details: "Details",
    item: "Employee",
    description: "Workplace",
  },
}

const data: DashboardLocationData = {
  summary: { in: 120, out: 98, peak: "Peak 09:00" },
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
          avatar: { type: "person", firstName: "Alex", lastName: "Rivera" },
          values: [
            { label: "Clock in", value: "09:02", icon: ClockIn },
            { label: "Clock out", value: "18:07", icon: ClockBack },
          ],
        },
      ],
    },
    {
      id: "paris",
      name: "Paris · République",
      coordinates: [2.35, 48.85],
      density: 18,
      detailsLabel: "1 person",
      details: [
        {
          id: "lea",
          title: "Léa Bernard",
          avatar: { type: "person", firstName: "Léa", lastName: "Bernard" },
          values: [{ label: "Clock in", value: "09:01" }],
        },
      ],
    },
  ],
  timeline: {
    categories: ["00:00", "12:00", "24:00"],
    series: [
      { name: "Clock ins", data: [0, 12, 0], color: "viridian" },
      { name: "Clock outs", data: [0, 8, 0], color: "red", dashed: true },
    ],
  },
}

const makeItem = (
  overrides: Partial<DashboardLocationItem> = {}
): DashboardLocationItem => ({
  id: "location",
  type: "location",
  title: "Activity by location",
  description: "Last 30 days · Europe",
  location: config,
  fetchData: async () => data,
  ...overrides,
})

describe("F0AnalyticsDashboard location item", () => {
  it("renders generic summary, location details, and timeline data", async () => {
    render(<F0AnalyticsDashboard items={[makeItem()]} />)

    expect(await screen.findByText("Activity by location")).toBeInTheDocument()
    expect(screen.getByText("120")).toBeInTheDocument()
    expect(screen.getByText("Peak 09:00")).toBeInTheDocument()
    expect(screen.getByText("Alex Rivera")).toBeInTheDocument()
    expect(screen.getByText("24-hour activity")).toBeInTheDocument()
    expect(screen.getByTestId("location-timeline-chart")).toHaveTextContent(
      "Clock ins, Clock outs"
    )
  })

  it("changes the selected location through the map's operable list", async () => {
    const onLocationSelect = vi.fn()
    render(<F0AnalyticsDashboard items={[makeItem({ onLocationSelect })]} />)

    await userEvent.click(
      await screen.findByRole("button", {
        name: /Paris · République · Density: 18/,
      })
    )

    expect(onLocationSelect).toHaveBeenCalledWith("paris")
    expect(screen.getByText("Léa Bernard")).toBeInTheDocument()
  })

  it("supports controlled and default location selection", async () => {
    const onLocationSelect = vi.fn()
    const controlled = render(
      <F0AnalyticsDashboard
        items={[makeItem({ selectedLocationId: "paris", onLocationSelect })]}
      />
    )

    expect(await screen.findByText("Léa Bernard")).toBeInTheDocument()
    await userEvent.click(
      screen.getByRole("button", { name: /Barcelona · HQ · Density: 39/ })
    )
    expect(onLocationSelect).toHaveBeenCalledWith("barcelona")
    expect(screen.getByText("Léa Bernard")).toBeInTheDocument()
    controlled.unmount()

    render(
      <F0AnalyticsDashboard
        items={[makeItem({ defaultSelectedLocationId: "paris" })]}
      />
    )
    expect(await screen.findByText("Léa Bernard")).toBeInTheDocument()
  })

  it("does not expose the details disclosure until a location is selected", async () => {
    render(
      <LocationVisualization
        data={data}
        config={config}
        defaultSelectedLocationId={null}
      />
    )

    const location = await screen.findByRole("button", {
      name: /Barcelona · HQ · Density: 39/,
    })
    expect(
      screen.queryByRole("button", {
        name: "View activity for Barcelona · HQ",
      })
    ).not.toBeInTheDocument()
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Select a location" })
    ).not.toBeInTheDocument()

    await userEvent.click(location)

    expect(
      screen.getByRole("complementary", { name: "Barcelona · HQ" })
    ).toBeInTheDocument()
  })

  it("clears an uncontrolled selection when populated data becomes empty", async () => {
    const onLocationSelect = vi.fn()
    const { rerender } = render(
      <LocationVisualization
        data={data}
        config={config}
        onLocationSelect={onLocationSelect}
      />
    )
    expect(await screen.findByText("Alex Rivera")).toBeInTheDocument()

    rerender(
      <LocationVisualization
        data={{
          summary: {},
          locations: [],
          timeline: { categories: [], series: [] },
        }}
        config={config}
        onLocationSelect={onLocationSelect}
      />
    )

    expect(await screen.findByText("No activity")).toBeInTheDocument()
    expect(onLocationSelect).toHaveBeenCalledWith(null)
  })

  it("normalizes density policy and uses host formatters", async () => {
    const { rerender } = render(
      <F0AnalyticsDashboard
        items={[
          makeItem({
            location: {
              ...config,
              densityScale: { mediumAt: 20, highAt: 10 },
              formatDensity: (value) => `D${value}`,
              formatSummaryValue: (value) => `S${value}`,
            },
          }),
        ]}
      />
    )

    expect(await screen.findByText("S120")).toBeInTheDocument()
    expect(
      screen.getByRole("button", {
        name: /Barcelona · HQ · Density: D39/,
      })
    ).toHaveAttribute("data-density-level", "high")
    expect(screen.getByText("1–5")).toBeInTheDocument()

    rerender(
      <F0AnalyticsDashboard
        items={[
          makeItem({
            location: {
              ...config,
              densityScale: { mediumAt: 40, highAt: 80 },
            },
          }),
        ]}
      />
    )
    expect(
      await screen.findByRole("button", {
        name: /Barcelona · HQ · Density: 39/,
      })
    ).toHaveAttribute("data-density-level", "low")
  })

  it("uses one partially overridden F0 palette for markers and the legend", async () => {
    const paletteData: DashboardLocationData = {
      ...data,
      locations: [
        { ...data.locations[0], density: 3 },
        { ...data.locations[1], density: 10 },
        {
          ...data.locations[1],
          id: "paris-high",
          name: "Paris · Bastille",
          density: 30,
        },
      ],
    }
    const { container } = render(
      <LocationVisualization
        data={paletteData}
        config={{
          ...config,
          densityPalette: {
            medium: { color: "malibu", colorStep: 60 },
          },
        }}
      />
    )

    expect(
      await screen.findByRole("button", { name: /Barcelona · HQ · Density: 3/ })
    ).toHaveAttribute("data-density-color", "red")
    expect(
      screen.getByRole("button", { name: /Paris · République · Density: 10/ })
    ).toHaveAttribute("data-density-color", "malibu")
    expect(
      screen.getByRole("button", { name: /Paris · République · Density: 10/ })
    ).toHaveAttribute("data-density-color-step", "70")
    expect(
      screen.getByRole("button", { name: /Paris · Bastille · Density: 30/ })
    ).toHaveAttribute("data-density-color-step", "70")

    const legend = container.querySelector("[data-location-density-legend]")
    expect(legend?.querySelector('[data-density-level="low"]')).toHaveStyle({
      backgroundColor: "hsl(var(--neutral-0))",
    })
    expect(legend?.querySelector('[data-density-level="medium"]')).toHaveStyle({
      backgroundColor: "hsl(216 48% 44%)",
    })
    expect(legend?.querySelector('[data-density-level="high"]')).toHaveStyle({
      backgroundColor: "hsl(3 71% 41%)",
    })
  })

  it("independently hides summary, legend, and an absent timeline", async () => {
    const { container } = render(
      <LocationVisualization
        data={{ summary: data.summary, locations: data.locations }}
        config={{
          ...config,
          sections: {
            summary: false,
            densityLegend: false,
          },
        }}
      />
    )

    await screen.findByRole("navigation", { name: "Locations" })
    expect(container.querySelector("[data-location-summary]")).toBeNull()
    expect(container.querySelector("[data-location-density-legend]")).toBeNull()
    expect(container.querySelector("[data-location-timeline]")).toBeNull()
    expect(screen.queryByTestId("location-timeline-chart")).toBeNull()
  })

  it("hides an existing timeline when its section is disabled", async () => {
    const { container } = render(
      <LocationVisualization
        data={data}
        config={{
          ...config,
          sections: { timeline: false },
        }}
      />
    )

    await screen.findByRole("button", {
      name: /Barcelona · HQ · Density: 39/,
    })
    expect(container.querySelector("[data-location-timeline]")).toBeNull()
  })

  it("keeps location selection operable when details are disabled", async () => {
    const onLocationSelect = vi.fn()
    render(
      <LocationVisualization
        data={data}
        config={{
          ...config,
          sections: { locationDetails: false },
        }}
        onLocationSelect={onLocationSelect}
      />
    )

    await userEvent.click(
      await screen.findByRole("button", {
        name: /Paris · République · Density: 18/,
      })
    )
    expect(onLocationSelect).toHaveBeenCalledWith("paris")
    expect(screen.queryByRole("complementary")).toBeNull()
    expect(
      screen.queryByRole("button", { name: /View activity for/ })
    ).toBeNull()
  })

  it("renders a map-only configuration in both map and fallback modes", async () => {
    const { container } = render(
      <LocationVisualization
        data={{ summary: data.summary, locations: data.locations }}
        config={{
          ...config,
          sections: {
            summary: false,
            locationDetails: false,
            densityLegend: false,
            timeline: false,
          },
        }}
      />
    )

    await userEvent.click(
      await screen.findByRole("button", { name: "Use map fallback" })
    )
    expect(
      screen.getByRole("region", { name: "Activity by location" })
    ).toBeInTheDocument()
    for (const selector of [
      "[data-location-summary]",
      "[data-location-details]",
      "[data-location-details-trigger]",
      "[data-location-density-legend]",
      "[data-location-timeline]",
    ]) {
      expect(container.querySelector(selector)).toBeNull()
    }
  })

  it("restores focus before disabling location details at runtime", async () => {
    const { rerender } = render(
      <LocationVisualization data={data} config={config} />
    )
    await userEvent.click(
      screen.getByRole("button", {
        name: "View activity for Barcelona · HQ",
      })
    )
    const close = await screen.findByRole("button", {
      name: "Close location activity",
    })
    close.focus()

    rerender(
      <LocationVisualization
        data={data}
        config={{
          ...config,
          sections: { locationDetails: false },
        }}
      />
    )

    const selectedLocation = screen.getByRole("button", {
      name: /Barcelona · HQ · Density: 39/,
    })
    await waitFor(() => expect(selectedLocation).toHaveFocus())
    expect(screen.queryByRole("complementary")).toBeNull()
  })

  it("restores focus before disabling a focused timeline at runtime", async () => {
    const { container, rerender } = render(
      <LocationVisualization data={data} config={config} />
    )
    const legend = await screen.findByRole("list", {
      name: "Clock ins, Clock outs",
    })
    legend.tabIndex = 0
    legend.focus()

    rerender(
      <LocationVisualization
        data={data}
        config={{
          ...config,
          sections: { timeline: false },
        }}
      />
    )

    const selectedLocation = screen.getByRole("button", {
      name: /Barcelona · HQ · Density: 39/,
    })
    await waitFor(() => expect(selectedLocation).toHaveFocus())
    expect(container.querySelector("[data-location-timeline]")).toBeNull()
  })

  it("restores timeline focus to the widget when no location is selected", async () => {
    const { container, rerender } = render(
      <LocationVisualization
        data={data}
        config={config}
        defaultSelectedLocationId={null}
      />
    )
    const legend = await screen.findByRole("list", {
      name: "Clock ins, Clock outs",
    })
    legend.tabIndex = 0
    legend.focus()

    rerender(
      <LocationVisualization
        data={data}
        config={{ ...config, sections: { timeline: false } }}
        defaultSelectedLocationId={null}
      />
    )

    const widget = container.querySelector<HTMLElement>(
      "[data-location-visualization]"
    )
    await waitFor(() => expect(widget).toHaveFocus())
    expect(container.querySelector("[data-location-timeline]")).toBeNull()
  })

  it("exposes timeline summaries and preserves disclosure focus by input modality", async () => {
    render(
      <F0AnalyticsDashboard
        items={[
          makeItem({
            fetchData: async () => ({
              ...data,
              timeline: {
                ...data.timeline,
                accessibleLabels: [
                  "Midnight has no events",
                  "Noon has twenty events",
                  "End of day has no events",
                ],
              },
            }),
          }),
        ]}
      />
    )

    expect(
      await screen.findByText("Noon has twenty events")
    ).toBeInTheDocument()
    await userEvent.click(
      screen.getByRole("button", {
        name: "View activity for Barcelona · HQ",
      })
    )
    const close = screen.getByRole("button", {
      name: "Close location activity",
    })
    close.focus()
    await userEvent.keyboard("{Enter}")
    const open = screen.getByRole("button", {
      name: "View activity for Barcelona · HQ",
    })
    await waitFor(() => expect(open).toHaveFocus())
    await userEvent.keyboard("{Enter}")
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Close location activity" })
      ).toHaveFocus()
    )

    await userEvent.click(
      screen.getByRole("button", { name: "Close location activity" })
    )
    await waitFor(() =>
      expect(
        screen.getByRole("button", {
          name: "View activity for Barcelona · HQ",
        })
      ).not.toHaveFocus()
    )

    await userEvent.click(
      screen.getByRole("button", {
        name: "View activity for Barcelona · HQ",
      })
    )
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Close location activity" })
      ).not.toHaveFocus()
    )
  })

  it("adapts its responsive disclosure as the widget width changes", async () => {
    const OriginalResizeObserver = globalThis.ResizeObserver
    const callbacks: ResizeObserverCallback[] = []
    globalThis.ResizeObserver = class {
      constructor(callback: ResizeObserverCallback) {
        callbacks.push(callback)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    try {
      render(<F0AnalyticsDashboard items={[makeItem()]} />)
      expect(await screen.findByText("Alex Rivera")).toBeInTheDocument()

      act(() => {
        for (const callback of callbacks) {
          callback(
            [
              {
                contentRect: { width: 900 },
              } as ResizeObserverEntry,
            ],
            {} as ResizeObserver
          )
        }
      })

      const close = await screen.findByRole("button", {
        name: "Close location activity",
      })
      close.focus()

      act(() => {
        for (const callback of callbacks) {
          callback(
            [
              {
                contentRect: { width: 680 },
              } as ResizeObserverEntry,
            ],
            {} as ResizeObserver
          )
        }
      })
      expect(close).toHaveFocus()
      expect(close).toBeInTheDocument()

      screen
        .getByRole("button", { name: /Barcelona · HQ · Density: 39/ })
        .focus()
      await waitFor(() =>
        expect(
          screen.queryByRole("button", { name: "Close location activity" })
        ).not.toBeInTheDocument()
      )

      act(() => {
        for (const callback of callbacks) {
          callback(
            [
              {
                contentRect: { width: 900 },
              } as ResizeObserverEntry,
            ],
            {} as ResizeObserver
          )
        }
      })
      await waitFor(() =>
        expect(
          screen.getByRole("button", { name: "Close location activity" })
        ).toBeInTheDocument()
      )
    } finally {
      globalThis.ResizeObserver = OriginalResizeObserver
    }
  })

  it("renders the embedded fallback when WebGL is unavailable", async () => {
    render(<F0AnalyticsDashboard items={[makeItem()]} />)

    await userEvent.click(
      await screen.findByRole("button", { name: "Use map fallback" })
    )

    expect(
      screen.getByRole("region", { name: "Activity by location" })
    ).toBeInTheDocument()
    expect(screen.getAllByText("Barcelona · HQ").length).toBeGreaterThan(0)
    expect(screen.getByText("24-hour activity")).toBeInTheDocument()
  })

  it("keeps fallback details and their grid column absent without a selection", async () => {
    const { container } = render(
      <LocationVisualization
        data={data}
        config={config}
        defaultSelectedLocationId={null}
      />
    )

    await userEvent.click(
      await screen.findByRole("button", { name: "Use map fallback" })
    )

    const fallbackLayout = container.querySelector(
      "[data-location-fallback-layout]"
    )
    expect(fallbackLayout).not.toHaveClass(
      "@4xl:grid-cols-[minmax(0,1fr)_400px]"
    )
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument()

    await userEvent.click(
      screen.getByRole("button", { name: /Barcelona · HQ Density: 39/ })
    )

    expect(
      screen.getByRole("complementary", { name: "Barcelona · HQ" })
    ).toBeInTheDocument()
    expect(fallbackLayout).toHaveClass("@4xl:grid-cols-[minmax(0,1fr)_400px]")
  })

  it("shows the location skeleton until its fetcher resolves", async () => {
    let resolveData: ((value: DashboardLocationData) => void) | undefined
    const fetchData = vi.fn(
      () =>
        new Promise<DashboardLocationData>((resolve) => {
          resolveData = resolve
        })
    )

    const { container } = render(
      <F0AnalyticsDashboard items={[makeItem({ fetchData })]} />
    )
    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument()
    expect(
      container.querySelector("[data-location-summary-skeleton]")
    ).toBeInTheDocument()

    await act(async () => resolveData?.(data))
    expect(await screen.findByText("Alex Rivera")).toBeInTheDocument()
    expect(container.querySelector('[aria-busy="true"]')).toBeNull()
  })

  it("keeps disabled location sections out of the loading skeleton", () => {
    const fetchData = () => new Promise<DashboardLocationData>(() => undefined)
    const item = makeItem({ fetchData })

    const { container } = render(
      <F0AnalyticsDashboard
        items={[
          {
            ...item,
            location: {
              ...item.location,
              sections: {
                summary: false,
                locationDetails: false,
                timeline: false,
              },
            },
          },
        ]}
      />
    )

    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument()
    expect(
      container.querySelector("[data-location-summary-skeleton]")
    ).toBeNull()
    expect(
      container.querySelector("[data-location-details-skeleton]")
    ).toBeNull()
    expect(
      container.querySelector("[data-location-timeline-skeleton]")
    ).toBeNull()
  })

  it("renders an unrelated IT inventory dataset through the same item type", async () => {
    const inventoryData: DashboardLocationData = {
      summary: { assigned: 322, available: 48, attention: 17 },
      locations: [
        {
          id: "inventory-barcelona",
          name: "Barcelona · HQ",
          coordinates: [2.17, 41.38],
          density: 116,
          detailsLabel: "116 devices",
          details: [
            {
              id: "device-1",
              title: 'MacBook Pro 14" · IT-1842',
              description: "Alex Rivera",
              avatar: { type: "icon", icon: Computer },
              values: [{ label: "Status", value: "Healthy", tone: "positive" }],
            },
          ],
        },
      ],
      timeline: {
        categories: ["00:00", "12:00", "24:00"],
        series: [{ name: "Assignments", data: [0, 6, 0] }],
      },
    }

    render(
      <F0AnalyticsDashboard
        items={[
          makeItem({
            id: "inventory",
            title: "IT inventory by location",
            location: {
              ...config,
              summaryMetrics: [
                { id: "assigned", label: "Assigned", icon: Computer },
                { id: "available", label: "Available", icon: Computer },
                { id: "attention", label: "Attention", icon: Computer },
              ],
              densityLabel: "Devices",
              timelineTitle: "Asset movement",
              timelineAriaLabel: "Asset movement by hour",
              mapAriaLabel: "IT inventory by location",
              viewLocationDetailsLabel: (name) => `View inventory for ${name}`,
            },
            fetchData: async () => inventoryData,
          }),
        ]}
      />
    )

    expect(
      await screen.findByText("IT inventory by location")
    ).toBeInTheDocument()
    expect(screen.getAllByText("116 devices")).not.toHaveLength(0)
    expect(screen.getByText('MacBook Pro 14" · IT-1842')).toBeInTheDocument()
    expect(screen.getByTestId("location-timeline-chart")).toHaveTextContent(
      "Assignments"
    )
  })

  it("uses the dashboard loading and retry contract", async () => {
    const fetchData = vi
      .fn<DashboardLocationItem["fetchData"]>()
      .mockRejectedValueOnce(new Error("Unavailable"))
      .mockResolvedValueOnce(data)

    render(<F0AnalyticsDashboard items={[makeItem({ fetchData })]} />)

    await waitFor(() =>
      expect(screen.getByText("Unavailable")).toBeInTheDocument()
    )
    await userEvent.click(screen.getByRole("button", { name: "Retry" }))

    expect(await screen.findByText("Alex Rivera")).toBeInTheDocument()
    expect(fetchData).toHaveBeenCalledTimes(2)
  })

  it("shows the configured empty state without inventing domain copy", async () => {
    render(
      <F0AnalyticsDashboard
        items={[
          makeItem({
            fetchData: async () => ({
              summary: {},
              locations: [],
              timeline: { categories: [], series: [] },
            }),
          }),
        ]}
      />
    )

    expect(await screen.findByText("No activity")).toBeInTheDocument()
  })
})
