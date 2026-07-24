import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"

import { F0Map } from "../F0Map"
import type { F0MapPoint } from "../types"

// Barcelona-area points: the four product-semantic marker variants.
const BARCELONA: F0MapPoint[] = [
  {
    id: "hq",
    coordinates: [2.1899, 41.3969],
    variant: "workplace",
    label: "Barcelona HQ",
  },
  {
    id: "madrid-office",
    coordinates: [2.1527, 41.4145],
    variant: "workplace",
    label: "Poblenou Office",
  },
  {
    id: "acme",
    coordinates: [2.1228, 41.3809],
    variant: "company",
    name: "Acme Corp",
    label: "Acme Corp",
  },
  {
    id: "meetup",
    coordinates: [2.1536, 41.3686],
    variant: "default",
    label: "Meetup point",
  },
  {
    id: "ada",
    coordinates: [2.1894, 41.3785],
    variant: "employee",
    firstName: "Ada",
    lastName: "Lovelace",
    label: "Ada Lovelace",
  },
  {
    id: "grace",
    coordinates: [2.1189, 41.4227],
    variant: "employee",
    firstName: "Grace",
    lastName: "Hopper",
    label: "Grace Hopper",
  },
]

const meta = {
  title: "Map/F0Map",
  component: F0Map,
  tags: ["experimental", "!autodocs"],
  // The live map is WebGL + network tiles, so pixel snapshots are
  // non-deterministic. Disable Chromatic on the map stories; the `Snapshot`
  // story below re-enables it for the deterministic skeleton.
  parameters: { chromatic: { disableSnapshot: true } },
  decorators: [
    (Story) => (
      <div className="h-[600px] w-full bg-f1-background">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: { control: "inline-radio", options: ["auto", "light", "dark"] },
    projection: { control: "inline-radio", options: ["mercator", "globe"] },
    interactive: { control: "boolean" },
    loading: { control: "boolean" },
    ariaLabel: { control: "text" },
    initialViewport: { table: { disable: true } },
    mapStyle: { table: { disable: true } },
    dataTestId: { table: { disable: true } },
    markers: { table: { disable: true } },
    routes: { table: { disable: true } },
    arcs: { table: { disable: true } },
    onRouteClick: { table: { disable: true } },
    onArcClick: { table: { disable: true } },
    selectedMarkerId: { table: { disable: true } },
    defaultSelectedMarkerId: { table: { disable: true } },
    onMarkerSelect: { table: { disable: true } },
    fitToMarkers: { table: { disable: true } },
  },
} satisfies Meta<typeof F0Map>

export default meta
type Story = StoryObj<typeof meta>

/** Follows the app theme via the nearest `.dark` ancestor. */
export const Default: Story = {
  args: {
    theme: "light",
    interactive: true,
    loading: false,
  },
}

/** Forced light theme. */
export const Light: Story = {
  args: { theme: "light" },
}

/** Forced dark theme, rendered inside a `.dark` island. */
export const Dark: Story = {
  args: { theme: "dark" },
  decorators: [
    (Story) => (
      <div className="dark h-[600px] w-full bg-f1-background">
        <Story />
      </div>
    ),
  ],
}

/** Regional view over the Spanish meseta - green land, tan cropland (landcover farmland, z8+). */
export const Terrain: Story = {
  args: {
    theme: "light",
    initialViewport: { center: [-3.9, 40.2], zoom: 8.4 },
  },
}

/**
 * Markers on the map: mixed variants, labels, auto-fit to bounds. Click a
 * marker to select it (white pin appears); click the map to deselect. Labels
 * flip placement to avoid colliding with other markers/labels.
 */
export const WithMarkers: Story = {
  args: { theme: "light", markers: BARCELONA },
}

// A dense field of workplaces around Barcelona so clustering kicks in at city zoom.
const DENSE: F0MapPoint[] = Array.from({ length: 40 }, (_, i) => ({
  id: `p${i}`,
  coordinates: [2.12 + ((i * 37) % 100) / 900, 41.36 + ((i * 53) % 100) / 900],
  variant: "workplace",
  label: `Site ${i + 1}`,
}))

/**
 * Clustering: nearby markers group into count bubbles that expand when clicked
 * (zoom into the cluster's bounds) and split apart as you zoom in.
 */
export const WithClusters: Story = {
  args: { theme: "light", markers: DENSE },
}

// Clusters of different sizes scattered across the world, so every per-count
// cluster layout is visible at once at world zoom: pair (2), triangle (3),
// organic quad (4), ring with centre count (5+), and the "+99" overflow.
const FIRST = ["Ada", "Grace", "Alan", "Katherine", "Linus", "Marie", "Nikola"]
const LAST = ["Lovelace", "Hopper", "Turing", "Johnson", "Torvalds", "Curie"]
const COMPANIES = ["Acme", "Globex", "Initech", "Umbrella", "Stark", "Hooli"]
const CLUSTER_VARIANTS = [
  "workplace",
  "employee",
  "company",
  "default",
] as const

const CITIES: { name: string; at: [number, number]; n: number }[] = [
  { name: "sf", at: [-122.42, 37.77], n: 2 },
  { name: "nyc", at: [-74.0, 40.71], n: 3 },
  { name: "saopaulo", at: [-46.63, -23.55], n: 4 },
  { name: "london", at: [-0.12, 51.51], n: 5 },
  { name: "paris", at: [2.35, 48.86], n: 8 },
  { name: "lagos", at: [3.38, 6.52], n: 6 },
  { name: "capetown", at: [18.42, -33.92], n: 3 },
  { name: "mumbai", at: [72.88, 19.08], n: 7 },
  { name: "tokyo", at: [139.69, 35.69], n: 128 },
  { name: "sydney", at: [151.21, -33.87], n: 2 },
]

// Each city's points sit within ~0.15deg so they merge into one cluster at
// world zoom (but keep real coordinates, so clicking zooms into the group).
const WORLD: F0MapPoint[] = CITIES.flatMap(({ name, at, n }) =>
  Array.from({ length: n }, (_, i): F0MapPoint => {
    const coordinates: [number, number] = [
      at[0] + (((i * 53) % 30) - 15) / 100,
      at[1] + (((i * 37) % 30) - 15) / 100,
    ]
    const id = `${name}-${i}`
    switch (CLUSTER_VARIANTS[i % CLUSTER_VARIANTS.length]) {
      case "employee":
        return {
          id,
          coordinates,
          variant: "employee",
          firstName: FIRST[i % FIRST.length],
          lastName: LAST[i % LAST.length],
        }
      case "company":
        return {
          id,
          coordinates,
          variant: "company",
          name: COMPANIES[i % COMPANIES.length],
        }
      case "default":
        return { id, coordinates, variant: "default" }
      default:
        return { id, coordinates, variant: "workplace" }
    }
  })
)

/**
 * Clusters of every size across the world, so all the per-count layouts show at
 * once: a pair (2), a triangle (3), an organic quad (4), a ring with the centre
 * count (5+), and the "+99" cap. Click any cluster to zoom into its group.
 */
export const WorldClusters: Story = {
  args: {
    theme: "light",
    markers: WORLD,
    initialViewport: { center: [10, 25], zoom: 1.4 },
  },
}

/**
 * Current location: click the "locate me" control (bottom-left) to grant browser
 * permission - a malibu "you are here" dot drops in and the map flies to it. The
 * opt-in persists, so on later visits the dot appears automatically.
 */
export const CurrentLocation: Story = {
  args: { theme: "light", markers: BARCELONA, showCurrentLocation: true },
}

// A route: an ordered path drawn through its points exactly as given (F0Map
// renders it; the routing itself comes from your own engine/server).
const ROUTE_PATH: [number, number][] = [
  [2.1899, 41.3969],
  [2.1774, 41.3887],
  [2.1686, 41.3809],
  [2.1601, 41.3853],
  [2.1536, 41.3686],
]
// Route stops: single-letter markers on the line's own hue (A -> B).
const ROUTE_ENDS: F0MapPoint[] = [
  {
    id: "start",
    coordinates: ROUTE_PATH[0],
    variant: "stop",
    letter: "A",
    label: "Office",
  },
  {
    id: "end",
    coordinates: ROUTE_PATH[ROUTE_PATH.length - 1],
    variant: "stop",
    letter: "B",
    label: "Destination",
  },
]

/**
 * Routes: a polyline drawn through the given coordinates. Hover to highlight,
 * click to fire `onRouteClick`. The line auto-fits into view with the markers.
 */
export const Routes: Story = {
  args: {
    theme: "light",
    markers: ROUTE_ENDS,
    routes: [{ id: "commute", coordinates: ROUTE_PATH, width: 4 }],
    onRouteClick: () => {},
  },
}

// Arcs: curved connections from a hub to several spokes (the flight-path look).
const HUB: [number, number] = [2.15, 41.39] // Barcelona
const ARC_TARGETS: { id: string; at: [number, number]; label: string }[] = [
  { id: "mad", at: [-3.7, 40.42], label: "Madrid" },
  { id: "par", at: [2.35, 48.86], label: "Paris" },
  { id: "lon", at: [-0.12, 51.51], label: "London" },
  { id: "ber", at: [13.4, 52.52], label: "Berlin" },
  { id: "rom", at: [12.5, 41.9], label: "Rome" },
]
// Arc endpoints are route stops: the hub is A, each destination follows (B,
// C, ...) - the same letters a directions list would use.
const ARC_MARKERS: F0MapPoint[] = [
  {
    id: "bcn",
    coordinates: HUB,
    variant: "stop",
    letter: "A",
    label: "Barcelona",
  },
  ...ARC_TARGETS.map(
    (t, i): F0MapPoint => ({
      id: t.id,
      coordinates: t.at,
      variant: "stop",
      letter: String.fromCharCode(66 + i), // B, C, D...
      label: t.label,
    })
  ),
]

/**
 * Arcs: curved connections between two coordinates - hub-and-spoke flight
 * paths here. Hover to highlight, click to fire `onArcClick`. `dashed` and a
 * palette `variant` style each line.
 */
export const Arcs: Story = {
  args: {
    theme: "light",
    markers: ARC_MARKERS,
    arcs: ARC_TARGETS.map((t) => ({
      id: `bcn-${t.id}`,
      from: HUB,
      to: t.at,
      width: 2.5,
      dashed: true,
    })),
    initialViewport: { center: [6, 46], zoom: 3.4 },
    onArcClick: () => {},
  },
}

/**
 * Globe projection: the world renders as a 3D sphere at low zoom and eases into
 * a flat mercator view as you zoom in. Best for a world-scale view; drag to
 * spin the globe.
 */
export const Globe: Story = {
  args: {
    theme: "light",
    markers: WORLD,
    projection: "globe",
    initialViewport: { center: [10, 25], zoom: 1.4 },
  },
}

/** Loading placeholder. */
export const Loading: Story = {
  args: { loading: true },
}

/**
 * Chromatic visual-regression target. The live map is non-deterministic
 * (WebGL + network tiles), so this snapshots the deterministic skeleton - the
 * one stable frame worth regressing. Re-enables Chromatic (disabled on the meta
 * for the map stories).
 */
export const Snapshot: Story = {
  args: { loading: true },
  parameters: { chromatic: { disableSnapshot: false } },
}

/**
 * Interaction test: driving the map through its accessible list (how keyboard /
 * screen-reader users operate it). Activating a list item selects that marker.
 */
export const SelectionFromList: Story = {
  args: {
    theme: "light",
    markers: [
      {
        id: "a",
        coordinates: [2.17, 41.39],
        variant: "workplace",
        label: "Office A",
      },
      {
        id: "b",
        coordinates: [2.19, 41.41],
        variant: "workplace",
        label: "Office B",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const list = canvas.getByRole("navigation", { name: /locations/i })
    const item = within(list).getByRole("button", { name: "Office A" })
    await userEvent.click(item)
    await expect(item).toHaveAttribute("aria-current", "true")
  },
}
