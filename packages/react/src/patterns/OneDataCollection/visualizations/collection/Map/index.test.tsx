import { act, waitFor } from "@testing-library/react"
import { forwardRef, useImperativeHandle } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import type { F0MapPoint } from "@/patterns/F0Map"
import { zeroRender } from "@/testing/test-utils"

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
  props: { latest: null as Record<string, unknown> | null },
}))
vi.mock("@/patterns/F0Map", () => ({
  RECOMMENDED_MAX_MARKERS: 200,
  F0MapSkeleton: () => null,
  F0Map: forwardRef((props: Record<string, unknown>, ref) => {
    mock.props.latest = props
    useImperativeHandle(ref, () => ({
      focusMarker: mock.focusMarker,
      fitToMarkers: vi.fn(),
      clearSelection: vi.fn(),
      getMap: () => null,
    }))
    return null
  }),
}))

type Office = RecordType & {
  id: string
  name: string
  longitude: number | null
  latitude: number | null
}

const offices: Office[] = [
  { id: "bcn", name: "Barcelona", longitude: 2.1649, latitude: 41.3925 },
  { id: "mad", name: "Madrid", longitude: -3.7058, latitude: 40.4203 },
  // No coordinates yet: must not be pinned at [0, 0].
  { id: "remote", name: "Remote", longitude: null, latitude: null },
]

const buildSource = () =>
  ({
    currentFilters: {},
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
    dataAdapter: { fetchData: vi.fn(() => ({ records: offices })) },
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
  coordinates: (office) =>
    office.longitude != null && office.latitude != null
      ? [office.longitude, office.latitude]
      : null,
  label: (office) => office.name,
  ...overrides,
})

const renderMap = (
  overrides: Partial<
    MapVisualizationOptions<Office, FiltersDefinition, SortingsDefinition>
  > = {},
  searchSelectionNonce = 0
) =>
  zeroRender(
    <MapCollection
      source={buildSource()}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
      searchSelectionNonce={searchSelectionNonce}
      {...baseOptions(overrides)}
    />
  )

const waitForMap = () => waitFor(() => expect(mock.props.latest).not.toBeNull())

const markers = () => (mock.props.latest?.markers ?? []) as F0MapPoint[]

beforeEach(() => {
  mock.props.latest = null
  mock.focusMarker.mockClear()
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

  it("ignores a reveal for a record that has no marker", async () => {
    renderMap({ revealRecordId: "remote" })
    await waitForMap()

    expect(mock.focusMarker).not.toHaveBeenCalled()
  })

  it("flies again when the same record is revealed under a new nonce", async () => {
    const { rerender } = renderMap({ revealRecordId: "mad" }, 1)
    await waitForMap()
    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalledTimes(1))

    rerender(
      <MapCollection
        source={buildSource()}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
        searchSelectionNonce={2}
        {...baseOptions({ revealRecordId: "mad" })}
      />
    )

    await waitFor(() => expect(mock.focusMarker).toHaveBeenCalledTimes(2))
  })
})
