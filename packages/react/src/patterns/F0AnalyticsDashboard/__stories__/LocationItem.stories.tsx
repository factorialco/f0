import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useRef, type ReactNode } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import type { F0MapStylePair } from "@/patterns/F0Map"

import {
  AlertCircle,
  ChartLine,
  CheckCircle,
  ClockBack,
  Computer,
  Laptop,
  Mobile,
} from "@/icons/app"
import { ClockIn } from "@/icons/modules"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import type {
  DashboardChartItem,
  DashboardItem,
  DashboardLocationConfig,
  DashboardLocationData,
  DashboardLocationDetailRow,
  DashboardLocationItem,
} from "../types"

import { F0AnalyticsDashboard } from "../index"

const handleAskAi = fn()
const handleLayoutChange = fn()
const handleLocationSelectWithoutDetails = fn()

const personDetail = (
  id: string,
  firstName: string,
  lastName: string,
  clockIn: string,
  clockOut: string,
  description = "Workplace"
): DashboardLocationDetailRow => ({
  id,
  title: `${firstName} ${lastName}`,
  description,
  avatar: { type: "person", firstName, lastName },
  values: [
    {
      label: "Clock in",
      value: clockIn,
      icon: ClockIn,
      iconColor: "positive",
    },
    {
      label: "Clock out",
      value: clockOut,
      icon: ClockBack,
      iconColor: "critical",
      tone: clockOut === "Active" ? "positive" : "default",
    },
  ],
})

const barcelonaPeople = [
  ["alex-rivera", "Alex", "Rivera", "09:02", "18:07"],
  ["pau-garcia", "Pau", "Garcia", "09:04", "18:03"],
  ["marta-soler", "Marta", "Soler", "09:05", "18:12"],
  ["jordi-pons", "Jordi", "Pons", "09:06", "Active"],
  ["elena-costa", "Elena", "Costa", "08:52", "17:40"],
  ["marc-vidal", "Marc", "Vidal", "08:58", "17:51"],
  ["laia-ferrer", "Laia", "Ferrer", "09:13", "18:26"],
  ["oriol-puig", "Oriol", "Puig", "09:17", "18:32"],
  ["nuria-serra", "Núria", "Serra", "09:21", "18:29"],
  ["pol-roca", "Pol", "Roca", "09:26", "18:41"],
  ["anna-marti", "Anna", "Martí", "09:31", "18:47"],
  ["roger-font", "Roger", "Font", "09:38", "18:53"],
  ["emma-sala", "Emma", "Sala", "09:44", "18:58"],
  ["jan-casas", "Jan", "Casas", "09:49", "19:03"],
  ["clara-vila", "Clara", "Vila", "09:56", "19:07"],
  ["nil-mas", "Nil", "Mas", "10:02", "19:08"],
  ["aina-bosch", "Aina", "Bosch", "10:24", "Active", "Remote"],
  ["eric-soler", "Eric", "Soler", "11:06", "20:14"],
] as const

const clockCategories = Array.from(
  { length: 25 },
  (_, hour) => `${String(hour).padStart(2, "0")}:00`
)
const clockIns = [
  2, 1, 1, 2, 4, 8, 16, 31, 58, 96, 59, 48, 52, 43, 39, 32, 49, 42, 55, 34, 20,
  13, 8, 4, 0,
]
const clockOuts = [
  1, 1, 1, 1, 2, 3, 7, 13, 26, 38, 42, 45, 48, 44, 41, 38, 46, 52, 71, 49, 29,
  18, 10, 5, 0,
]

const clockActivityConfig: DashboardLocationConfig = {
  summaryMetrics: [
    { id: "clockIns", label: "Clock ins", icon: ClockIn, tone: "positive" },
    {
      id: "clockOuts",
      label: "Clock outs",
      icon: ClockBack,
      tone: "critical",
    },
    { id: "peak", label: "Density", icon: ChartLine, tone: "selected" },
  ],
  densityLabel: "Density",
  densityLowLabel: (below) => `1–${below - 1}`,
  densityMediumLabel: (from, below) => `${from}–${below - 1}`,
  densityHighLabel: (from) => `${from}+`,
  timelineTitle: "24-hour activity",
  timelineAriaLabel: "Clock activity by hour",
  mapAriaLabel: "Clock activity by location",
  selectLocationLabel: "Select a location on the map",
  viewLocationDetailsLabel: (name) => `View activity for ${name}`,
  closeLocationDetailsLabel: "Close location activity",
  noDataLabel: "No clock activity for this period",
  exportLabels: {
    location: "Location",
    density: "Density",
    details: "Details",
    item: "Employee",
    description: "Workplace",
  },
}

const clockActivityData: DashboardLocationData = {
  summary: { clockIns: 1389, clockOuts: 1276, peak: "Peak 09:00" },
  locations: [
    {
      id: "barcelona",
      name: "Barcelona · HQ",
      coordinates: [2.1734, 41.3851],
      density: 39,
      detailsLabel: "18 people",
      details: barcelonaPeople.map(
        ([id, firstName, lastName, clockIn, clockOut, description]) =>
          personDetail(id, firstName, lastName, clockIn, clockOut, description)
      ),
    },
    {
      id: "madrid",
      name: "Madrid · Castellana",
      coordinates: [-3.7038, 40.4168],
      density: 28,
      detailsLabel: "2 people",
      details: [
        personDetail("lucia-vega", "Lucía", "Vega", "08:54", "17:58"),
        personDetail("daniel-ruiz", "Daniel", "Ruiz", "09:10", "Active"),
      ],
    },
    {
      id: "london",
      name: "London · Shoreditch",
      coordinates: [-0.1276, 51.5072],
      density: 19,
      detailsLabel: "2 people",
      details: [
        personDetail("amelia-clarke", "Amelia", "Clarke", "08:48", "17:31"),
        personDetail("theo-martin", "Theo", "Martin", "09:12", "Active"),
      ],
    },
    {
      id: "paris",
      name: "Paris · République",
      coordinates: [2.3522, 48.8566],
      density: 18,
      detailsLabel: "2 people",
      details: [
        personDetail("lea-bernard", "Léa", "Bernard", "09:01", "18:16"),
        personDetail("hugo-petit", "Hugo", "Petit", "09:08", "18:22"),
      ],
    },
    {
      id: "berlin",
      name: "Berlin · Mitte",
      coordinates: [13.405, 52.52],
      density: 12,
      detailsLabel: "1 person",
      details: [personDetail("mia-wagner", "Mia", "Wagner", "08:57", "17:46")],
    },
    {
      id: "rome",
      name: "Rome · Termini",
      coordinates: [12.4964, 41.9028],
      density: 5,
      detailsLabel: "1 person",
      details: [
        personDetail("giulia-romano", "Giulia", "Romano", "09:03", "18:05"),
      ],
    },
  ],
  timeline: {
    categories: clockCategories,
    series: [
      { name: "Clock ins", data: clockIns, color: "viridian" },
      { name: "Clock outs", data: clockOuts, color: "red", dashed: true },
    ],
    accessibleLabels: clockCategories.map(
      (hour, index) =>
        `${hour}: ${clockIns[index]} clock ins, ${clockOuts[index]} clock outs`
    ),
  },
}

const deviceDetail = (
  id: string,
  name: string,
  kind: "laptop" | "computer" | "mobile",
  owner: string,
  status: string
): DashboardLocationDetailRow => ({
  id,
  title: name,
  description: owner,
  avatar: {
    type: "icon",
    icon: kind === "laptop" ? Laptop : kind === "mobile" ? Mobile : Computer,
  },
  values: [
    {
      label: "Status",
      value: status,
      icon: status === "Healthy" ? CheckCircle : AlertCircle,
      iconColor: status === "Healthy" ? "positive" : "critical",
      tone: status === "Healthy" ? "positive" : "critical",
    },
  ],
})

const itInventoryConfig: DashboardLocationConfig = {
  summaryMetrics: [
    { id: "assigned", label: "Assigned", icon: Laptop, tone: "selected" },
    {
      id: "available",
      label: "Available",
      icon: CheckCircle,
      tone: "positive",
    },
    {
      id: "attention",
      label: "Attention",
      icon: AlertCircle,
      tone: "critical",
    },
  ],
  densityLabel: "Devices",
  densityLowLabel: (below) => `1–${below - 1}`,
  densityMediumLabel: (from, below) => `${from}–${below - 1}`,
  densityHighLabel: (from) => `${from}+`,
  densityScale: { mediumAt: 35, highAt: 80 },
  timelineTitle: "24-hour asset movement",
  timelineAriaLabel: "Asset assignments and returns by hour",
  mapAriaLabel: "IT inventory by location",
  selectLocationLabel: "Select an office on the map",
  viewLocationDetailsLabel: (name) => `View inventory for ${name}`,
  closeLocationDetailsLabel: "Close location inventory",
  noDataLabel: "No inventory for this period",
  exportLabels: {
    location: "Location",
    density: "Devices",
    details: "Inventory",
    item: "Device",
    description: "Owner",
  },
}

const itInventoryData: DashboardLocationData = {
  summary: { assigned: 322, available: 48, attention: 17 },
  locations: [
    {
      id: "barcelona-it",
      name: "Barcelona · HQ",
      coordinates: [2.1734, 41.3851],
      density: 116,
      detailsLabel: "116 devices",
      details: [
        deviceDetail(
          "mac-1842",
          'MacBook Pro 14" · IT-1842',
          "laptop",
          "Alex Rivera",
          "Healthy"
        ),
        deviceDetail(
          "imac-0271",
          'iMac 24" · IT-0271',
          "computer",
          "Design studio",
          "Needs update"
        ),
        deviceDetail(
          "iphone-9084",
          "iPhone 17 · IT-9084",
          "mobile",
          "Marta Soler",
          "Healthy"
        ),
      ],
    },
    {
      id: "madrid-it",
      name: "Madrid · Castellana",
      coordinates: [-3.7038, 40.4168],
      density: 84,
      detailsLabel: "84 devices",
      details: [
        deviceDetail(
          "mac-1321",
          'MacBook Air 13" · IT-1321',
          "laptop",
          "Lucía Vega",
          "Healthy"
        ),
        deviceDetail(
          "surface-044",
          "Surface Studio · IT-0044",
          "computer",
          "Finance lab",
          "Needs update"
        ),
      ],
    },
    {
      id: "london-it",
      name: "London · Shoreditch",
      coordinates: [-0.1276, 51.5072],
      density: 63,
      detailsLabel: "63 devices",
      details: [
        deviceDetail(
          "mac-2210",
          'MacBook Pro 16" · IT-2210',
          "laptop",
          "Amelia Clarke",
          "Healthy"
        ),
      ],
    },
    {
      id: "paris-it",
      name: "Paris · République",
      coordinates: [2.3522, 48.8566],
      density: 27,
      detailsLabel: "27 devices",
      details: [
        deviceDetail(
          "iphone-0103",
          "iPhone 17 · IT-0103",
          "mobile",
          "Léa Bernard",
          "Healthy"
        ),
      ],
    },
  ],
  timeline: {
    categories: clockCategories,
    series: [
      {
        name: "Assignments",
        data: [
          0, 0, 0, 0, 0, 1, 2, 4, 8, 15, 12, 10, 8, 7, 6, 8, 11, 9, 5, 3, 2, 1,
          0, 0, 0,
        ],
        color: "viridian",
      },
      {
        name: "Returns",
        data: [
          0, 0, 0, 0, 0, 0, 1, 2, 4, 6, 7, 8, 7, 6, 7, 9, 10, 13, 11, 7, 4, 2,
          1, 0, 0,
        ],
        color: "red",
        dashed: true,
      },
    ],
  },
}

const snapshotMapStyle: F0MapStylePair = {
  light: {
    version: 8,
    sources: {},
    layers: [
      {
        id: "background",
        type: "background",
        paint: { "background-color": "#dcecf4" },
      },
    ],
  },
  dark: {
    version: 8,
    sources: {},
    layers: [
      {
        id: "background",
        type: "background",
        paint: { "background-color": "#1c2a34" },
      },
    ],
  },
}

const locationItem = (
  data: DashboardLocationData,
  config: DashboardLocationConfig,
  overrides: Partial<DashboardLocationItem> = {}
): DashboardLocationItem => ({
  id: "location-activity",
  type: "location",
  title: "Clock activity by location",
  description: "Last 30 days · Europe",
  info: "Activity grouped by the location recorded for each event.",
  explanation:
    "Density is the host-defined value for each mapped location during the selected period.",
  defaultSelectedLocationId: data.locations[0]?.id ?? null,
  location: config,
  fetchData: async () => data,
  ...overrides,
})

const companionChart: DashboardChartItem = {
  id: "activity-by-location",
  type: "chart",
  title: "Clock events by workplace",
  description: "Last 30 days · Europe",
  itemHeight: 700,
  chart: { type: "bar", orientation: "horizontal" },
  fetchData: async () => ({
    categories: clockActivityData.locations.map((location) => location.name),
    series: [
      {
        name: "Density",
        data: clockActivityData.locations.map((location) => location.density),
      },
    ],
  }),
}

const DashboardFrame = ({
  items,
  width,
  editMode = false,
  className = "h-[780px]",
}: {
  items: DashboardItem[]
  width?: number
  editMode?: boolean
  className?: string
}) => (
  <div className="max-w-full overflow-x-auto">
    <div
      className={className}
      data-testid="dashboard-frame"
      style={width ? { width, minWidth: width } : undefined}
    >
      <F0AnalyticsDashboard
        items={items}
        editMode={editMode}
        onAskAi={handleAskAi}
        onLayoutChange={handleLayoutChange}
      />
    </div>
  </div>
)

const WebGlUnavailable = ({ children }: { children: ReactNode }) => {
  const originalGetContext = useRef<HTMLCanvasElement["getContext"]>()

  if (!originalGetContext.current) {
    originalGetContext.current = HTMLCanvasElement.prototype.getContext
    const getContext = originalGetContext.current as (
      this: HTMLCanvasElement,
      ...args: unknown[]
    ) => unknown
    HTMLCanvasElement.prototype.getContext = function (
      this: HTMLCanvasElement,
      ...args: unknown[]
    ) {
      const contextId = args[0]
      if (
        this.closest("[data-story-map-unavailable]") &&
        (contextId === "webgl" ||
          contextId === "webgl2" ||
          contextId === "experimental-webgl")
      ) {
        return null
      }
      return getContext.apply(this, args)
    } as HTMLCanvasElement["getContext"]
  }

  useEffect(
    () => () => {
      if (originalGetContext.current) {
        HTMLCanvasElement.prototype.getContext = originalGetContext.current
      }
    },
    []
  )

  return children
}

const defaultItems = [
  locationItem(clockActivityData, clockActivityConfig),
] satisfies DashboardItem[]

const longLocationData: DashboardLocationData = {
  ...clockActivityData,
  locations: clockActivityData.locations.map((location, index) =>
    index === 0
      ? {
          ...location,
          name: "Barcelona · Headquarters and Innovation Campus",
        }
      : location
  ),
}

const emptyLocationItem = locationItem(
  {
    ...clockActivityData,
    locations: [],
    timeline: { categories: [], series: [] },
  },
  clockActivityConfig,
  { id: "empty-location", defaultSelectedLocationId: null }
)

const noSelectionLocationItem = locationItem(
  clockActivityData,
  clockActivityConfig,
  {
    id: "location-without-selection",
    defaultSelectedLocationId: null,
  }
)

const customDensityItem = locationItem(
  clockActivityData,
  {
    ...clockActivityConfig,
    densityPalette: {
      low: { color: "malibu", colorStep: 10 },
      medium: { color: "indigo", colorStep: 60 },
      high: { color: "purple", colorStep: 70 },
    },
  },
  { id: "custom-density-palette" }
)

const withoutSummaryItem = locationItem(
  clockActivityData,
  {
    ...clockActivityConfig,
    sections: { summary: false },
  },
  { id: "without-location-summary" }
)

const withoutDetailsItem = locationItem(
  clockActivityData,
  {
    ...clockActivityConfig,
    sections: { locationDetails: false },
  },
  {
    id: "without-location-details",
    onLocationSelect: handleLocationSelectWithoutDetails,
  }
)

const withoutLegendItem = locationItem(
  clockActivityData,
  {
    ...clockActivityConfig,
    sections: { densityLegend: false },
  },
  { id: "without-density-legend" }
)

const clockActivityWithoutTimeline: DashboardLocationData = {
  summary: clockActivityData.summary,
  locations: clockActivityData.locations,
}

const withoutTimelineItem = locationItem(
  clockActivityData,
  {
    ...clockActivityConfig,
    sections: { timeline: false },
  },
  { id: "without-location-timeline" }
)

const mapOnlyItem = locationItem(
  clockActivityWithoutTimeline,
  {
    ...clockActivityConfig,
    sections: {
      summary: false,
      locationDetails: false,
      densityLegend: false,
      timeline: false,
    },
  },
  { id: "map-only-location" }
)

const loadingLocationItem = locationItem(
  clockActivityData,
  clockActivityConfig,
  {
    id: "loading-location",
    fetchData: () => new Promise<DashboardLocationData>(() => {}),
  }
)

const errorLocationItem = locationItem(clockActivityData, clockActivityConfig, {
  id: "error-location",
  fetchData: async () => {
    throw new globalThis.Error("Location data unavailable")
  },
})

const meta = {
  title: "AnalyticsDashboard/Location item",
  component: F0AnalyticsDashboard,
  tags: ["experimental", "!autodocs"],
  parameters: {
    layout: "fullscreen",
    a11y: { test: "error" },
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-f1-background-secondary p-6">
        <Story />
      </div>
    ),
  ],
  args: { items: defaultItems },
  render: (args) => <DashboardFrame items={args.items} />,
} satisfies Meta<typeof F0AnalyticsDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  tags: ["no-sidebar"],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const page = within(canvasElement.closest("body")!)

    await step("Use the spacious details layout", async () => {
      const panel = await canvas.findByRole("complementary", {
        name: "Barcelona · HQ",
      })
      const detailValues = panel.querySelector<HTMLElement>(
        "[data-location-detail-values]"
      )
      if (!detailValues) {
        throw new globalThis.Error("Expected location detail values")
      }
      await expect(panel.getBoundingClientRect().width).toBeGreaterThanOrEqual(
        398
      )
      await expect(getComputedStyle(detailValues).flexWrap).toBe("nowrap")
      await expect(getComputedStyle(panel).boxShadow).toBe("none")
    })

    await step("Select another location", async () => {
      const locations = canvas.getByRole("navigation", { name: "Locations" })
      await userEvent.click(
        within(locations).getByRole("button", { name: /Paris · République/ })
      )
      await expect(
        canvas.getByRole("complementary", { name: "Paris · République" })
      ).toBeInTheDocument()
    })

    await step("Use the standard dashboard menu", async () => {
      await userEvent.click(
        canvas.getByRole("button", { name: "Other actions" })
      )
      await expect(
        page.getByRole("menuitem", { name: "Where does this data come from?" })
      ).toBeInTheDocument()
      await expect(
        page.getByRole("menuitem", { name: "Ask One" })
      ).toBeInTheDocument()

      await userEvent.keyboard("{Escape}")
      await waitFor(() => {
        expect(
          page.queryByRole("menuitem", {
            name: "Where does this data come from?",
          })
        ).not.toBeInTheDocument()
      })
    })
  },
}

/** The same built-in item renders IT inventory without time-tracking code. */
export const ITInventory: Story = {
  tags: ["no-sidebar"],
  args: {
    items: [
      locationItem(itInventoryData, itInventoryConfig, {
        id: "it-inventory-by-location",
        title: "IT inventory by location",
        description: "Today · Europe",
        info: "Assigned devices grouped by their current workplace.",
      }),
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(await canvas.findByText("Assigned")).toBeInTheDocument()
    await expect(canvas.getAllByText("116 devices")).not.toHaveLength(0)
    await expect(
      canvas.getByText('MacBook Pro 14" · IT-1842')
    ).toBeInTheDocument()
    await expect(canvas.getByText("24-hour asset movement")).toBeInTheDocument()
  },
}

/** Hosts can replace the default red heat scale with F0 palette tokens. */
export const CustomDensityPalette: Story = {
  tags: ["no-sidebar"],
  args: { items: [customDensityItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const legend = await waitFor(() => {
      const element = canvasElement.querySelector<HTMLElement>(
        "[data-location-density-legend]"
      )
      if (!element) throw new globalThis.Error("Expected the density legend")
      return element
    })
    await expect(
      legend.querySelector<HTMLElement>('[data-density-level="low"]')?.style
        .backgroundColor
    ).toBe("hsl(var(--neutral-0))")
    await expect(
      legend.querySelector('[data-density-level="medium"]')
    ).toHaveStyle({ backgroundColor: "hsl(239 59% 54%)" })
    await expect(
      legend.querySelector('[data-density-level="high"]')
    ).toHaveStyle({ backgroundColor: "hsl(258 43% 46%)" })
    await expect(
      await canvas.findByRole("button", {
        name: /Barcelona · HQ · Density: 39/,
      })
    ).toBeInTheDocument()
  },
}

export const WithoutSummary: Story = {
  tags: ["no-sidebar"],
  args: { items: [withoutSummaryItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByRole("navigation", { name: "Locations" })
    await expect(
      canvasElement.querySelector("[data-location-summary]")
    ).not.toBeInTheDocument()
  },
}

export const WithoutDetails: Story = {
  tags: ["no-sidebar"],
  args: { items: [withoutDetailsItem] },
  play: async ({ canvasElement }) => {
    handleLocationSelectWithoutDetails.mockClear()
    const canvas = within(canvasElement)
    const locations = await canvas.findByRole("navigation", {
      name: "Locations",
    })
    await userEvent.click(
      within(locations).getByRole("button", { name: /Paris · République/ })
    )
    await expect(handleLocationSelectWithoutDetails).toHaveBeenCalledWith(
      "paris"
    )
    await expect(canvas.queryByRole("complementary")).not.toBeInTheDocument()
    await expect(
      canvas.queryByRole("button", { name: /View activity for/ })
    ).not.toBeInTheDocument()
  },
}

export const WithoutDensityLegend: Story = {
  tags: ["no-sidebar"],
  args: { items: [withoutLegendItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByRole("navigation", { name: "Locations" })
    await expect(
      canvasElement.querySelector("[data-location-density-legend]")
    ).not.toBeInTheDocument()
  },
}

export const WithoutTimeline: Story = {
  tags: ["no-sidebar"],
  args: { items: [withoutTimelineItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByRole("navigation", { name: "Locations" })
    await expect(
      canvasElement.querySelector("[data-location-timeline]")
    ).not.toBeInTheDocument()
  },
}

export const MapOnly: Story = {
  tags: ["no-sidebar"],
  args: { items: [mapOnlyItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.findByRole("navigation", { name: "Locations" })
    for (const selector of [
      "[data-location-summary]",
      "[data-location-details]",
      "[data-location-details-trigger]",
      "[data-location-density-legend]",
      "[data-location-timeline]",
    ]) {
      await expect(
        canvasElement.querySelector(selector)
      ).not.toBeInTheDocument()
    }
  },
}

/** Two real dashboard items share one equal-width row at a usable map width. */
export const SideBySide: Story = {
  tags: ["no-sidebar"],
  args: { items: [defaultItems[0], companionChart] },
  render: (args) => (
    <DashboardFrame items={args.items} width={1600} className="h-[760px]" />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        canvasElement.querySelectorAll("[data-dashboard-row]")
      ).toHaveLength(1)
    )
    const cards = canvasElement.querySelectorAll<HTMLElement>("[data-card-id]")
    await expect(cards).toHaveLength(2)
    await expect(
      Math.abs(
        cards[0].getBoundingClientRect().width -
          cards[1].getBoundingClientRect().width
      )
    ).toBeLessThan(2)
    await expect(cards[0].getBoundingClientRect().width).toBeGreaterThanOrEqual(
      720
    )

    const locationCard = canvasElement.querySelector<HTMLElement>(
      '[data-card-id="location-activity"]'
    )
    if (!locationCard) throw new globalThis.Error("Expected the location item")
    await within(locationCard).findByRole("complementary", {
      name: "Barcelona · HQ",
    })
    const summary = locationCard.querySelector<HTMLElement>(
      "[data-location-summary]"
    )
    const openPanel = locationCard.querySelector<HTMLElement>(
      "[data-location-details]"
    )
    if (!summary || !openPanel) {
      throw new globalThis.Error("Expected summary and open location details")
    }
    const panelHeader = openPanel.firstElementChild
    if (!(panelHeader instanceof HTMLElement)) {
      throw new globalThis.Error("Expected the location details header")
    }
    const summaryBefore = summary.getBoundingClientRect()
    const panelBefore = openPanel.getBoundingClientRect()
    const panelHeaderBefore = panelHeader.getBoundingClientRect()
    const openTitle = within(openPanel).getByText("Barcelona · HQ")
    const openTitleRect = openTitle.getBoundingClientRect()
    const openTitleStyle = getComputedStyle(openTitle)
    await expect(Math.abs(summaryBefore.top - panelBefore.top)).toBeLessThan(2)
    await expect(
      Math.abs(summaryBefore.height - panelHeaderBefore.height)
    ).toBeLessThan(2)
    await expect(summaryBefore.height).toBeGreaterThanOrEqual(63)
    await expect(getComputedStyle(openPanel).boxShadow).toBe("none")

    await userEvent.click(
      within(openPanel).getByRole("button", {
        name: "Close location activity",
      })
    )
    const trigger = within(locationCard).getByRole("button", {
      name: "View activity for Barcelona · HQ",
    })
    const triggerTitle = within(trigger).getByText("Barcelona · HQ")
    const triggerTitleRect = triggerTitle.getBoundingClientRect()
    const triggerRect = trigger.getBoundingClientRect()
    const summaryAfter = summary.getBoundingClientRect()
    await expect(Math.abs(triggerRect.top - panelBefore.top)).toBeLessThan(2)
    await expect(Math.abs(triggerRect.width - panelBefore.width)).toBeLessThan(
      2
    )
    await expect(
      Math.abs(triggerRect.height - panelHeaderBefore.height)
    ).toBeLessThan(2)
    await expect(
      Math.abs(triggerTitleRect.top - openTitleRect.top)
    ).toBeLessThan(2)
    await expect(summaryAfter.height).toBe(summaryBefore.height)
    await expect(getComputedStyle(triggerTitle).fontSize).toBe(
      openTitleStyle.fontSize
    )
    await expect(getComputedStyle(triggerTitle).lineHeight).toBe(
      openTitleStyle.lineHeight
    )
  },
}

/** The dashboard stacks the row before the map becomes too narrow to use. */
export const MinimumUsableWidth: Story = {
  tags: ["no-sidebar"],
  args: { items: [defaultItems[0], companionChart] },
  render: (args) => (
    <DashboardFrame items={args.items} width={1200} className="h-[1440px]" />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        canvasElement.querySelectorAll("[data-dashboard-row]")
      ).toHaveLength(2)
    )
    const rows = canvasElement.querySelectorAll<HTMLElement>(
      "[data-dashboard-row]"
    )
    await expect(rows[0].querySelectorAll("[data-card-id]")).toHaveLength(1)
    await expect(rows[1].querySelectorAll("[data-card-id]")).toHaveLength(1)
  },
}

/** At a narrow dashboard width, paired widgets stack into usable full rows. */
export const PairedNarrow: Story = {
  tags: ["no-sidebar"],
  args: { items: [defaultItems[0], companionChart] },
  render: (args) => (
    <DashboardFrame items={args.items} width={620} className="h-[1440px]" />
  ),
  play: async ({ canvasElement }) => {
    await waitFor(() =>
      expect(
        canvasElement.querySelectorAll("[data-dashboard-row]")
      ).toHaveLength(2)
    )
    for (const row of canvasElement.querySelectorAll("[data-dashboard-row]")) {
      await expect(row.querySelectorAll("[data-card-id]")).toHaveLength(1)
    }
  },
}

/** Long location names stay bounded through the 480–719px layout range. */
export const IntermediateWidth: Story = {
  tags: ["no-sidebar"],
  args: {
    items: [
      locationItem(longLocationData, clockActivityConfig, {
        id: "long-location-name",
      }),
    ],
  },
  render: (args) => (
    <DashboardFrame items={args.items} width={680} className="h-[780px]" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = await canvas.findByRole("button", {
      name: /View activity for Barcelona · Headquarters/,
    })
    const summary = canvasElement.querySelector<HTMLElement>(
      "[data-location-summary]"
    )
    const timeline = canvasElement.querySelector<HTMLElement>(
      "[data-location-timeline]"
    )
    if (!summary || !timeline)
      throw new globalThis.Error("Expected summary and timeline")
    await expect(trigger.getBoundingClientRect().top).toBeGreaterThanOrEqual(
      summary.getBoundingClientRect().bottom
    )
    await userEvent.click(trigger)
    const panel = await canvas.findByRole("complementary", {
      name: "Barcelona · Headquarters and Innovation Campus",
    })
    await expect(panel.getBoundingClientRect().bottom).toBeLessThanOrEqual(
      timeline.getBoundingClientRect().top
    )
  },
}

/** Fullscreen, Ask One, drag handles, and layout callbacks stay dashboard-owned. */
export const DesignerAndFullscreen: Story = {
  tags: ["no-sidebar"],
  args: {
    items: [
      locationItem(clockActivityData, clockActivityConfig, {
        minItemWidth: 560,
      }),
      companionChart,
    ],
  },
  render: (args) => (
    <DashboardFrame
      items={args.items}
      width={1200}
      className="h-[760px]"
      editMode
    />
  ),
  play: async ({ canvasElement, step }) => {
    handleAskAi.mockClear()
    handleLayoutChange.mockClear()
    const page = within(canvasElement.closest("body")!)
    const locationCard = canvasElement.querySelector<HTMLElement>(
      '[data-card-id="location-activity"]'
    )
    if (!locationCard)
      throw new globalThis.Error("Expected the location dashboard item")

    await step("Expose dashboard designer controls", async () => {
      const rows = canvasElement.querySelectorAll("[data-dashboard-row]")
      await expect(rows).toHaveLength(1)
      await expect(rows[0].querySelectorAll("[data-card-id]")).toHaveLength(2)
      await expect(
        canvasElement.querySelectorAll('[aria-label^="Drag to reorder"]')
      ).toHaveLength(2)
      await expect(
        canvasElement.querySelector('button[role="separator"]')
      ).toBeInTheDocument()

      const increase = canvasElement.querySelector<HTMLButtonElement>(
        "[data-dashboard-row-increase]"
      )
      if (!increase)
        throw new globalThis.Error("Expected the row increase control")
      await userEvent.click(increase)
      await expect(handleLayoutChange).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({
            id: "location-activity",
            itemHeight: 724,
          }),
        ])
      )
    })

    await step("Expand the item and ask One", async () => {
      await userEvent.click(
        within(locationCard).getByRole("button", { name: "Expand" })
      )
      const expanded = within(canvasElement)
      await expect(
        expanded.getByRole("button", { name: "Collapse" })
      ).toBeInTheDocument()
      await userEvent.click(
        expanded.getByRole("button", { name: "Other actions" })
      )
      const askOne = await page.findByRole("menuitem", { name: "Ask One" })
      await userEvent.click(askOne)
      await expect(handleAskAi).toHaveBeenCalledWith({
        id: "location-activity",
        title: "Clock activity by location",
      })
    })
  },
}

/** A crowded location keeps the detail panel bounded and keyboard-scrollable. */
export const CrowdedDetails: Story = {
  tags: ["no-sidebar"],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const list = await canvas.findByRole("list", { name: "18 people" })
    await expect(list.scrollHeight).toBeGreaterThan(list.clientHeight)
    list.focus()
    await expect(list).toHaveFocus()
    list.scrollTop = list.scrollHeight
    list.dispatchEvent(new Event("scroll", { bubbles: true }))
    await waitFor(() =>
      expect(list.scrollTop + list.clientHeight).toBeGreaterThanOrEqual(
        list.scrollHeight - 1
      )
    )
    await expect(within(list).getByText("Eric Soler")).toBeVisible()
    list.blur()
    await expect(list).not.toHaveFocus()
  },
}

export const Narrow: Story = {
  tags: ["no-sidebar"],
  render: (args) => (
    <div className="mx-auto w-[420px] max-w-full">
      <DashboardFrame items={args.items} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const trigger = await canvas.findByRole("button", {
      name: "View activity for Barcelona · HQ",
    })
    await expect(trigger).toBeVisible()
    await userEvent.click(trigger)
    await expect(
      canvas.getByRole("complementary", { name: "Barcelona · HQ" })
    ).toBeVisible()
    const panel = canvas.getByRole("complementary", { name: "Barcelona · HQ" })
    const timeline = canvasElement.querySelector<HTMLElement>(
      "[data-location-timeline]"
    )
    if (!timeline) throw new globalThis.Error("Expected the location timeline")
    await expect(panel.getBoundingClientRect().bottom).toBeLessThanOrEqual(
      timeline.getBoundingClientRect().top
    )
  },
}

export const Empty: Story = {
  tags: ["no-sidebar"],
  args: { items: [emptyLocationItem] },
}

export const NoSelection: Story = {
  tags: ["no-sidebar"],
  args: { items: [noSelectionLocationItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const location = await canvas.findByRole("button", {
      name: /Barcelona · HQ · Density: 39/,
    })

    await expect(canvas.queryByRole("complementary")).not.toBeInTheDocument()
    await expect(
      canvas.queryByRole("button", {
        name: "View activity for Barcelona · HQ",
      })
    ).not.toBeInTheDocument()

    await userEvent.click(location)

    await expect(
      canvas.getByRole("complementary", { name: "Barcelona · HQ" })
    ).toBeInTheDocument()
  },
}

export const Loading: Story = {
  tags: ["no-sidebar"],
  args: { items: [loadingLocationItem] },
}

export const Error: Story = {
  tags: ["no-sidebar"],
  args: { items: [errorLocationItem] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      await canvas.findByText("Location data unavailable")
    ).toBeVisible()
    await expect(canvas.getByRole("button", { name: "Retry" })).toBeVisible()
  },
}

export const Dark: Story = {
  tags: ["no-sidebar"],
  render: (args) => (
    <div className="dark bg-f1-background p-4">
      <DashboardFrame items={args.items} />
    </div>
  ),
}

export const MapUnavailable: Story = {
  tags: ["no-sidebar"],
  decorators: [
    (Story) => (
      <WebGlUnavailable>
        <div data-story-map-unavailable>
          <Story />
        </div>
      </WebGlUnavailable>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() =>
      expect(
        canvas.getByRole("button", { name: /Barcelona · HQ Density: 39/ })
      ).toBeVisible()
    )
    await expect(canvas.getByText("24-hour activity")).toBeVisible()
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => {
    const clockItem = locationItem(
      clockActivityData,
      {
        ...clockActivityConfig,
        mapStyle: snapshotMapStyle,
      },
      {
        minItemWidth: 560,
      }
    )
    const inventoryItem = locationItem(
      itInventoryData,
      {
        ...itInventoryConfig,
        mapStyle: snapshotMapStyle,
      },
      {
        id: "snapshot-it",
        title: "IT inventory by location",
        description: "Today · Europe",
      }
    )
    const noSelectionItem = locationItem(
      clockActivityData,
      {
        ...clockActivityConfig,
        mapStyle: snapshotMapStyle,
      },
      {
        id: "snapshot-no-selection",
        defaultSelectedLocationId: null,
      }
    )
    const customPaletteSnapshotItem = locationItem(
      clockActivityData,
      {
        ...clockActivityConfig,
        mapStyle: snapshotMapStyle,
        densityPalette: customDensityItem.location.densityPalette,
      },
      { id: "snapshot-custom-density" }
    )
    const mapOnlySnapshotItem = locationItem(
      clockActivityWithoutTimeline,
      {
        ...clockActivityConfig,
        mapStyle: snapshotMapStyle,
        sections: mapOnlyItem.location.sections,
      },
      { id: "snapshot-map-only" }
    )
    return (
      <div className="mx-auto grid w-[1200px] max-w-full gap-6">
        <section aria-label="Clock activity snapshot">
          <DashboardFrame items={[clockItem]} />
        </section>
        <section aria-label="IT inventory snapshot">
          <DashboardFrame items={[inventoryItem]} />
        </section>
        <section aria-label="Narrow snapshot" className="w-[420px] max-w-full">
          <DashboardFrame items={[clockItem]} />
        </section>
        <section aria-label="No location selected snapshot">
          <DashboardFrame items={[noSelectionItem]} />
        </section>
        <section aria-label="Custom density palette snapshot">
          <DashboardFrame items={[customPaletteSnapshotItem]} />
        </section>
        <section aria-label="Map only snapshot">
          <DashboardFrame items={[mapOnlySnapshotItem]} />
        </section>
        <section aria-label="Shared row designer snapshot">
          <DashboardFrame
            items={[clockItem, companionChart]}
            width={1200}
            className="h-[760px]"
            editMode
          />
        </section>
        <section aria-label="Empty snapshot">
          <DashboardFrame items={[emptyLocationItem]} />
        </section>
        <section aria-label="Loading snapshot">
          <DashboardFrame items={[loadingLocationItem]} />
        </section>
        <section aria-label="Error snapshot">
          <DashboardFrame items={[errorLocationItem]} />
        </section>
        <WebGlUnavailable>
          <section
            aria-label="Map fallback snapshot"
            data-story-map-unavailable
          >
            <DashboardFrame items={[defaultItems[0]]} />
          </section>
        </WebGlUnavailable>
        <section
          aria-label="Dark snapshot"
          className="dark bg-f1-background p-4"
        >
          <DashboardFrame items={[clockItem]} />
        </section>
      </div>
    )
  },
}
