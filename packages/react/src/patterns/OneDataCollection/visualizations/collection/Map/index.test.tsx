import { act, waitFor } from "@testing-library/react"
import { forwardRef, type ReactNode, useImperativeHandle } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import type { F0MapPoint } from "@/patterns/F0Map"
import { fireEvent, screen, within, zeroRender } from "@/testing/test-utils"

import { DataCollectionSource } from "../../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { MapCollection } from "./index"
import type { MapVisualizationOptions } from "./types"

// Stub the whole F0Map module: these tests are about what the visualization
// hands the map (records projected onto markers, selection, reveal), not the
// map's own rendering, which is covered by F0Map's tests. Replaced rather than
// spread over the real module because that barrel pulls in maplibre-gl, which
// needs browser Workers that jsdom does not provide.
const mock = vi.hoisted(() => ({
  focusMarker: vi.fn(),
  fitToMarkers: vi.fn(),
  props: { latest: null as Record<string, unknown> | null },
}))
vi.mock("@/patterns/F0Map", () => ({
  RECOMMENDED_MAX_MARKERS: 200,
  F0MapSkeleton: () => null,
  F0Map: forwardRef((props: Record<string, unknown>, ref) => {
    mock.props.latest = props
    useImperativeHandle(ref, () => ({
      focusMarker: mock.focusMarker,
      fitToMarkers: mock.fitToMarkers,
      clearSelection: vi.fn(),
      getMap: () => null,
    }))
    // What the visualization puts in the panel and beside the toggle is the
    // visualization's own output, so it is rendered here to be queried. The
    // map itself is not.
    return (
      <>
        <div data-testid="stub-panel">{props.sidebar as ReactNode}</div>
        <div data-testid="stub-addon">
          {props.sidebarToggleAddon as ReactNode}
        </div>
      </>
    )
  }),
}))

type Office = RecordType & {
  id: string
  name: string
  longitude: number | null
  latitude: number | null
  /** The address exists but was never filled in: the map should say so. */
  incomplete?: boolean
}

const offices: Office[] = [
  { id: "bcn", name: "Barcelona", longitude: 2.1649, latitude: 41.3925 },
  { id: "mad", name: "Madrid", longitude: -3.7058, latitude: 40.4203 },
  // No coordinates, no reason given: must not be pinned at [0, 0].
  { id: "remote", name: "Remote", longitude: null, latitude: null },
  // No coordinates because the address is missing: the fixable case.
  {
    id: "tbd",
    name: "New office",
    longitude: null,
    latitude: null,
    incomplete: true,
  },
]

/** The offices the map can place, in collection order. */
const PLACED = ["bcn", "mad"]
/** The offices it cannot, in collection order. */
const UNPLACED = ["remote", "tbd"]

type SourceState = {
  filters?: Record<string, unknown>
  search?: string
}

const recordsFor = (state: SourceState) => {
  const country = (state.filters?.country ?? undefined) as string[] | undefined
  let records = country
    ? offices.filter((office) => country.includes(office.id))
    : offices
  // A real datasource applies the search term server-side, so the collection
  // only ever sees the matches.
  if (state.search) {
    const term = state.search.toLowerCase()
    records = records.filter((office) =>
      office.name.toLowerCase().includes(term)
    )
  }
  return records
}

const buildSource = (state: SourceState = {}) =>
  ({
    currentFilters: state.filters ?? {},
    setCurrentFilters: vi.fn(),
    currentSortings: null,
    setCurrentSortings: vi.fn(),
    currentNavigationFilters: {},
    setCurrentNavigationFilters: vi.fn(),
    navigationFilters: undefined,
    currentSearch: state.search,
    debouncedCurrentSearch: state.search,
    setCurrentSearch: vi.fn(),
    isLoading: false,
    setIsLoading: vi.fn(),
    currentGrouping: undefined,
    setCurrentGrouping: vi.fn(),
    dataAdapter: { fetchData: vi.fn(() => ({ records: recordsFor(state) })) },
    idProvider: (office: Office) => office.id,
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- test scaffolding for a structurally complete source
  }) as unknown as DataCollectionSource<
    Office,
    FiltersDefinition,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Office>,
    NavigationFiltersDefinition,
    GroupingDefinition<Office>
  >

const baseOptions = (
  overrides: Partial<
    MapVisualizationOptions<Office, FiltersDefinition, SortingsDefinition>
  > = {}
): MapVisualizationOptions<Office, FiltersDefinition, SortingsDefinition> => ({
  coordinates: (office) => {
    if (office.longitude != null && office.latitude != null)
      return [office.longitude, office.latitude]
    return office.incomplete ? { kind: "incomplete" } : null
  },
  label: (office) => office.name,
  ...overrides,
})

const collection = (
  overrides: Partial<
    MapVisualizationOptions<Office, FiltersDefinition, SortingsDefinition>
  > = {},
  searchSelectionNonce = 0,
  state: SourceState = {}
) => (
  <MapCollection
    source={buildSource(state)}
    onSelectItems={vi.fn()}
    onLoadData={vi.fn()}
    onLoadError={vi.fn()}
    searchSelectionNonce={searchSelectionNonce}
    {...baseOptions(overrides)}
  />
)

const renderMap = (
  overrides: Partial<
    MapVisualizationOptions<Office, FiltersDefinition, SortingsDefinition>
  > = {},
  searchSelectionNonce = 0,
  state: SourceState = {}
) => zeroRender(collection(overrides, searchSelectionNonce, state))

const waitForMap = () => waitFor(() => expect(mock.props.latest).not.toBeNull())

const markers = () => (mock.props.latest?.markers ?? []) as F0MapPoint[]

beforeEach(() => {
  mock.props.latest = null
  mock.focusMarker.mockClear()
  mock.fitToMarkers.mockClear()
})

describe("MapCollection — projecting records onto markers", () => {
  it("draws one marker per record that has coordinates", async () => {
    renderMap()
    await waitForMap()

    expect(markers().map((point) => point.id)).toEqual(["bcn", "mad"])
  })

  it("drops records without coordinates instead of pinning them at [0, 0]", async () => {
    renderMap()
    await waitForMap()

    expect(markers().some((point) => point.id === "remote")).toBe(false)
  })

  it("reads the coordinate as [longitude, latitude] and labels the marker", async () => {
    renderMap()
    await waitForMap()

    const barcelona = markers().find((point) => point.id === "bcn")
    expect(barcelona?.coordinates).toEqual([2.1649, 41.3925])
    expect(barcelona?.label).toBe("Barcelona")
  })

  it("defaults each marker to the default variant", async () => {
    renderMap()
    await waitForMap()

    expect(markers()[0]).toMatchObject({ variant: "default" })
  })

  it("takes the record id from getRecordId when given", async () => {
    renderMap({ getRecordId: (office) => `office-${office.id}` })
    await waitForMap()

    expect(markers().map((point) => point.id)).toEqual([
      "office-bcn",
      "office-mad",
    ])
  })
})

describe("MapCollection — selection", () => {
  it("hands the whole record to onSelect when its marker is selected", async () => {
    const onSelect = vi.fn()
    renderMap({ onSelect })
    await waitForMap()

    const onMarkerSelect = mock.props.latest?.onMarkerSelect as (
      id: string | null
    ) => void
    act(() => onMarkerSelect("mad"))

    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "mad", name: "Madrid" })
    )
    expect(mock.props.latest?.selectedMarkerId).toBe("mad")
  })

  it("reports null when the selection is cleared", async () => {
    const onSelect = vi.fn()
    renderMap({ onSelect })
    await waitForMap()

    const onMarkerSelect = mock.props.latest?.onMarkerSelect as (
      id: string | null
    ) => void
    act(() => onMarkerSelect("mad"))
    act(() => onMarkerSelect(null))

    expect(onSelect).toHaveBeenLastCalledWith(null)
    expect(mock.props.latest?.selectedMarkerId).toBeNull()
  })

  it("clears the selection when the map view is left", async () => {
    const onSelect = vi.fn()
    const { unmount } = renderMap({ onSelect })
    await waitForMap()

    const onMarkerSelect = mock.props.latest?.onMarkerSelect as (
      id: string | null
    ) => void
    act(() => onMarkerSelect("mad"))
    onSelect.mockClear()

    // Switching visualization unmounts this view; a panel opened from onSelect
    // must not stay behind over the next one.
    unmount()

    expect(onSelect).toHaveBeenCalledWith(null)
  })

  it("lets the consumer end the selection its panel started", async () => {
    const { rerender } = renderMap({ selectedRecordId: "mad" })
    await waitForMap()
    expect(mock.props.latest?.selectedMarkerId).toBe("mad")

    rerender(collection({ selectedRecordId: null }))

    // Without a controlled selection the marker would stay marked after its
    // panel was dismissed: nothing outside the map could clear it.
    await waitFor(() => expect(mock.props.latest?.selectedMarkerId).toBeNull())
  })

  it("keeps its own selection when none is passed", async () => {
    renderMap()
    await waitForMap()

    const onMarkerSelect = mock.props.latest?.onMarkerSelect as (
      id: string | null
    ) => void
    act(() => onMarkerSelect("mad"))

    expect(mock.props.latest?.selectedMarkerId).toBe("mad")
  })

  it("forwards the viewport inset so the camera clears a side panel", async () => {
    renderMap({ viewportInset: { right: 360 } })
    await waitForMap()

    expect(mock.props.latest?.viewportInset).toEqual({ right: 360 })
  })
})

describe("MapCollection — reveal", () => {
  it("flies to the revealed record and selects it", async () => {
    const onSelect = vi.fn()
    renderMap({ onSelect, revealRecordId: "mad" })
    await waitForMap()

    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalledWith("mad"))
    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "mad", name: "Madrid" })
    )
  })

  it("reveals a record it cannot place without flying anywhere", async () => {
    const onSelect = vi.fn()
    renderMap({ onSelect, revealRecordId: "remote" })
    await waitForMap()

    // Selected - its detail opens - but there is no marker to fly to.
    await waitFor(() =>
      expect(onSelect).toHaveBeenCalledWith(
        expect.objectContaining({ id: "remote" })
      )
    )
    expect(mock.focusMarker).not.toHaveBeenCalled()
  })

  it("ignores a reveal for a record the collection does not have", async () => {
    const onSelect = vi.fn()
    renderMap({ onSelect, revealRecordId: "nowhere" })
    await waitForMap()

    expect(mock.focusMarker).not.toHaveBeenCalled()
    expect(onSelect).not.toHaveBeenCalled()
  })

  it("flies again when the same record is revealed under a new nonce", async () => {
    const { rerender } = renderMap({ revealRecordId: "mad" }, 1)
    await waitForMap()
    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalledTimes(1))

    rerender(collection({ revealRecordId: "mad" }, 2))

    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalledTimes(2))
  })
})

describe("MapCollection — framing", () => {
  it("reframes to the markers left by a filter", async () => {
    const { rerender } = renderMap()
    await waitForMap()
    expect(markers()).toHaveLength(2)
    mock.fitToMarkers.mockClear()

    rerender(collection({}, 0, { filters: { country: ["bcn"] } }))

    await waitFor(() => expect(markers()).toHaveLength(1))
    expect(mock.fitToMarkers).toHaveBeenCalled()
  })

  it("reframes to the markers left by a search", async () => {
    const { rerender } = renderMap()
    await waitForMap()
    expect(markers()).toHaveLength(2)
    mock.fitToMarkers.mockClear()

    rerender(collection({}, 0, { search: "barcelona" }))

    await waitFor(() => expect(markers()).toHaveLength(1))
    expect(mock.fitToMarkers).toHaveBeenCalled()
  })

  it("gives the markers back when the search is cleared", async () => {
    const { rerender } = renderMap({}, 0, { search: "barcelona" })
    await waitForMap()
    expect(markers()).toHaveLength(1)
    mock.fitToMarkers.mockClear()

    rerender(collection({}, 0, { search: undefined }))

    await waitFor(() => expect(markers()).toHaveLength(2))
    expect(mock.fitToMarkers).toHaveBeenCalled()
  })

  it("frames the union of two filters at once", async () => {
    const { rerender } = renderMap({}, 0, { filters: { country: ["bcn"] } })
    await waitForMap()
    mock.fitToMarkers.mockClear()

    rerender(collection({}, 0, { filters: { country: ["bcn", "mad"] } }))

    // Both results have to be in frame, so the fit runs over the wider set.
    await waitFor(() => expect(markers()).toHaveLength(2))
    expect(mock.fitToMarkers).toHaveBeenCalled()
  })

  it("does not reframe on the initial load (F0Map frames that itself)", async () => {
    renderMap()
    await waitForMap()

    expect(mock.fitToMarkers).not.toHaveBeenCalled()
  })

  it("zooms back out when a selection it flew to is dropped", async () => {
    const { rerender } = renderMap({
      revealRecordId: "mad",
      selectedRecordId: "mad",
    })
    await waitForMap()
    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalled())
    mock.fitToMarkers.mockClear()

    // The consumer closes the panel it opened, ending the selection.
    rerender(collection({ revealRecordId: "mad", selectedRecordId: null }))

    await waitFor(() => expect(mock.fitToMarkers).toHaveBeenCalled())
  })

  it("leaves the camera where it is when a clicked selection is dropped", async () => {
    renderMap({ onSelect: vi.fn() })
    await waitForMap()

    const onMarkerSelect = mock.props.latest?.onMarkerSelect as (
      id: string | null
    ) => void
    act(() => onMarkerSelect("mad"))
    mock.fitToMarkers.mockClear()

    act(() => onMarkerSelect(null))

    // A click only re-centred at the zoom the user was already on, so there is
    // no zoom to undo and reframing would be an unasked-for jump.
    expect(mock.fitToMarkers).not.toHaveBeenCalled()
  })

  it("zooms back out when the search that flew there is cleared", async () => {
    const { rerender } = renderMap({ revealRecordId: "mad" }, 0, {
      search: "mad",
    })
    await waitForMap()
    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalled())
    mock.fitToMarkers.mockClear()

    rerender(collection({ revealRecordId: "mad" }, 0, { search: undefined }))

    await waitFor(() => expect(mock.fitToMarkers).toHaveBeenCalled())
  })

  it("leaves the camera alone when a search that never flew is cleared", async () => {
    // A term every office matches, so clearing it gives no markers back and
    // there is nothing to reframe to - and nothing flew, so no zoom to undo.
    const { rerender } = renderMap({}, 0, { search: "a" })
    await waitForMap()
    expect(markers()).toHaveLength(2)
    mock.fitToMarkers.mockClear()

    rerender(collection({}, 0, { search: undefined }))

    expect(mock.fitToMarkers).not.toHaveBeenCalled()
  })

  it("centres a clicked marker so it clears the consumer's panel", async () => {
    renderMap()
    await waitForMap()

    expect(mock.props.latest?.centerOnMarkerClick).toBe(true)
  })
})

describe("MapCollection — framing while the new records are in flight", () => {
  // The bug this covers: framing as soon as the filter changed, or as soon as
  // `points` got a new identity, framed the markers the filter had just
  // excluded — they are still the ones on screen until the fetch resolves.
  const deferredSource = () => {
    let resolveFetch: ((value: { records: Office[] }) => void) | null = null
    const adapter = {
      fetchData: vi.fn(
        () =>
          new Promise<{ records: Office[] }>((resolve) => {
            resolveFetch = resolve
          })
      ),
    }
    const build = (filters: Record<string, unknown> = {}) =>
      ({
        currentFilters: filters,
        setCurrentFilters: vi.fn(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        currentNavigationFilters: {},
        setCurrentNavigationFilters: vi.fn(),
        navigationFilters: undefined,
        currentSearch: undefined,
        debouncedCurrentSearch: undefined,
        setCurrentSearch: vi.fn(),
        isLoading: false,
        setIsLoading: vi.fn(),
        currentGrouping: undefined,
        setCurrentGrouping: vi.fn(),
        dataAdapter: adapter,
        idProvider: (office: Office) => office.id,
        // eslint-disable-next-line no-type-assertion/no-type-assertion -- test scaffolding for a structurally complete source
      }) as unknown as DataCollectionSource<
        Office,
        FiltersDefinition,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<Office>,
        NavigationFiltersDefinition,
        GroupingDefinition<Office>
      >

    return {
      build,
      settle: async (records: Office[]) => {
        await act(async () => {
          resolveFetch?.({ records })
          await Promise.resolve()
        })
      },
    }
  }

  const element = (
    source: ReturnType<ReturnType<typeof deferredSource>["build"]>
  ) => (
    <MapCollection
      source={source}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
      searchSelectionNonce={0}
      {...baseOptions()}
    />
  )

  it("does not frame the markers the filter just excluded", async () => {
    const source = deferredSource()
    const { rerender } = zeroRender(element(source.build()))
    await source.settle(offices)
    await waitFor(() => expect(markers()).toHaveLength(2))
    mock.fitToMarkers.mockClear()

    // Filter applied: the fetch is in flight, so Barcelona and Madrid are both
    // still drawn. Framing now would frame exactly what the filter removed.
    rerender(element(source.build({ country: ["bcn"] })))
    await waitFor(() => expect(markers()).toHaveLength(2))
    expect(mock.fitToMarkers).not.toHaveBeenCalled()

    // Records arrive: now there is something new to frame.
    await source.settle([offices[0]])
    await waitFor(() => expect(markers()).toHaveLength(1))
    expect(mock.fitToMarkers).toHaveBeenCalledTimes(1)
  })
})

describe("MapCollection — the panels drive the map", () => {
  /** The `select` handle the visualization hands its panels, last seen. */
  let sidebarApi: {
    select: (record: Office | null) => void
    selectedRecordId: string | null
  }

  const renderWithPanels = () =>
    renderMap({
      sidebar: (_records, api) => {
        sidebarApi = api
        return null
      },
      // Renders something identifiable: a `null` renderer would make
      // "unmounted" and "rendered nothing" indistinguishable.
      detail: (record) => <span>{String(record.id)}</span>,
    })

  it("flies to the record a panel selects, not just marks it", async () => {
    renderWithPanels()
    await waitForMap()

    sidebarApi.select(offices[1])

    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalledWith("mad"))
  })

  it("reports the selection back to the panels", async () => {
    renderWithPanels()
    await waitForMap()

    sidebarApi.select(offices[1])

    await waitFor(() => expect(sidebarApi.selectedRecordId).toBe("mad"))
  })

  it("opens the detail panel for the selected record", async () => {
    renderWithPanels()
    await waitForMap()
    expect(mock.props.latest?.detailOpen).toBe(false)

    sidebarApi.select(offices[1])

    await waitFor(() => expect(mock.props.latest?.detailOpen).toBe(true))
  })

  it("keeps the detail mounted while it closes, so it can animate out", async () => {
    renderWithPanels()
    await waitForMap()
    sidebarApi.select(offices[1])
    await waitFor(() => expect(mock.props.latest?.detailOpen).toBe(true))

    sidebarApi.select(null)

    // Closed, but still rendering its record: unmounting here would make the
    // panel vanish instead of sliding away.
    await waitFor(() => expect(mock.props.latest?.detailOpen).toBe(false))
    expect(mock.props.latest?.detail).not.toBeNull()
  })

  it("leaves background clicks alone when a detail panel can open", async () => {
    renderWithPanels()
    await waitForMap()

    expect(mock.props.latest?.clearSelectionOnBackgroundClick).toBe(false)
  })
})

describe("MapCollection — records it cannot place", () => {
  /** Rows as plain text, so each section's records can be read back. */
  const rows = (records: Office[]) => (
    <ul>
      {records.map((office) => (
        <li key={office.id}>{office.id}</li>
      ))}
    </ul>
  )

  const idsIn = (section: HTMLElement) =>
    within(section)
      .getAllByRole("listitem")
      .map((item) => item.textContent)

  it("lists them under Not on map, ahead of the ones On map", async () => {
    renderMap({ sidebar: rows })
    await waitForMap()

    const notOnMap = screen.getByTestId("map-panel-not-on-map")
    const onMap = screen.getByTestId("map-panel-on-map")
    expect(idsIn(notOnMap)).toEqual(UNPLACED)
    expect(idsIn(onMap)).toEqual(PLACED)
    // First in the panel: it is the section that wants acting on.
    expect(
      notOnMap.compareDocumentPosition(onMap) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("calls the row renderer once per section, with disjoint records", async () => {
    const sidebar = vi.fn(rows)
    renderMap({ sidebar })
    await waitForMap()

    const calls = sidebar.mock.calls.map(([records]) =>
      records.map((office) => office.id)
    )
    expect(calls).toContainEqual(UNPLACED)
    expect(calls).toContainEqual(PLACED)
  })

  it("shows no Not on map section when every record is placed", async () => {
    renderMap({ sidebar: rows }, 0, { filters: { country: PLACED } })
    await waitForMap()

    expect(screen.queryByTestId("map-panel-not-on-map")).toBeNull()
    expect(idsIn(screen.getByTestId("map-panel-on-map"))).toEqual(PLACED)
  })

  it("selects one from the panel without flying, and never zooms back out for it", async () => {
    let api!: { select: (record: Office | null) => void }
    const onSelect = vi.fn()
    renderMap({
      onSelect,
      sidebar: (_records, sidebarApi) => {
        api = sidebarApi
        return null
      },
    })
    await waitForMap()

    act(() => api.select(offices[3]))

    expect(onSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "tbd" })
    )
    // No marker, nowhere to fly.
    expect(mock.focusMarker).not.toHaveBeenCalled()

    mock.fitToMarkers.mockClear()
    act(() => api.select(null))

    // It was never flown to, so dropping it has no zoom to undo. Before, the
    // flown-to flag was set regardless and this refit fired.
    expect(mock.fitToMarkers).not.toHaveBeenCalled()
  })

  it("counts them on the map surface and opens the panel from the count", async () => {
    const onSidebarToggle = vi.fn()
    renderMap({ onSidebarToggle })
    await waitForMap()

    const count = screen.getByTestId("map-not-on-map")
    expect(count).toHaveTextContent("2 not on map")
    expect(mock.props.latest?.sidebarExpanded).toBe(false)

    fireEvent.click(count)

    await waitFor(() => expect(mock.props.latest?.sidebarExpanded).toBe(true))
    expect(onSidebarToggle).toHaveBeenCalledWith(true)
  })

  it("shows no count when every record is placed", async () => {
    renderMap({}, 0, { filters: { country: PLACED } })
    await waitForMap()

    expect(screen.queryByTestId("map-not-on-map")).toBeNull()
  })

  it("asks for attention when one of them should have had a location", async () => {
    renderMap({ sidebar: rows })
    await waitForMap()

    expect(screen.getByTestId("map-not-on-map")).toHaveAttribute(
      "data-tone",
      "attention"
    )
    const section = screen.getByTestId("map-panel-not-on-map")
    expect(section).toHaveAttribute("data-tone", "attention")
    // The reason, under the header.
    expect(within(section).getByText("Location missing")).toBeInTheDocument()
  })

  it("stays neutral, with no reason line, when no reason was given", async () => {
    renderMap({ sidebar: rows }, 0, {
      filters: { country: ["bcn", "remote"] },
    })
    await waitForMap()

    expect(screen.getByTestId("map-not-on-map")).toHaveAttribute(
      "data-tone",
      "neutral"
    )
    const section = screen.getByTestId("map-panel-not-on-map")
    expect(section).toHaveAttribute("data-tone", "neutral")
    expect(within(section).queryByText("Location missing")).toBeNull()
  })

  it("takes the consumer's reason over the default", async () => {
    renderMap({
      sidebar: rows,
      coordinates: (office) =>
        office.incomplete
          ? { kind: "incomplete", label: "Address not geocoded" }
          : office.longitude != null && office.latitude != null
            ? [office.longitude, office.latitude]
            : null,
    })
    await waitForMap()

    expect(
      within(screen.getByTestId("map-panel-not-on-map")).getByText(
        "Address not geocoded"
      )
    ).toBeInTheDocument()
  })

  it("wears their avatars on the count when they are all people", async () => {
    renderMap({
      marker: (office) => ({
        variant: "employee",
        firstName: office.name,
        lastName: "Office",
      }),
    })
    await waitForMap()

    // Two unplaced people, two avatars. At the `xs` size an avatar shows one
    // initial, and the fixture has no photos.
    const count = within(screen.getByTestId("map-not-on-map"))
    expect(count.getByText("R")).toBeInTheDocument()
    expect(count.getByText("N")).toBeInTheDocument()
  })
})
