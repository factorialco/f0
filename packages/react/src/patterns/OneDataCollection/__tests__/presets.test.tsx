import { afterEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  cleanup,
  screen,
  userEvent,
  waitFor,
  zeroRender,
} from "@/testing/test-utils"

import { DataCollectionStorageProvider } from "@/lib/providers/datacollection/DataCollectionStorageProvider"
import {
  DataCollectionStorage,
  DataCollectionStorageHandler,
} from "@/lib/providers/datacollection/types"
import type { PresetsDefinition } from "@/patterns/OneFilterPicker/types"

import { useDataCollectionSource } from "../hooks/useDataCollectionSource"
import {
  encodeSharedPreset,
  SHARED_PRESET_PARAM,
} from "../internal/sharedPreset"
import { OneDataCollection } from "../index"

type Row = { name: string; department: string }

const records: Row[] = [
  { name: "John", department: "eng" },
  { name: "Jane", department: "mkt" },
]

const filters = {
  department: {
    type: "in",
    label: "Department",
    options: {
      options: [
        { value: "eng", label: "Engineering" },
        { value: "mkt", label: "Marketing" },
      ],
    },
  },
} as const

const sortings = {
  name: { label: "Name" },
} as const

const grouping = {
  groupBy: {
    department: {
      name: "Department",
      label: (groupId: unknown) => String(groupId),
    },
  },
} as const

const visualizations = [
  {
    type: "table" as const,
    options: {
      columns: [
        { label: "Name", sorting: "name", render: (item: Row) => item.name },
      ],
    },
  },
  {
    type: "card" as const,
    options: {
      cardProperties: [{ label: "Name", render: (item: Row) => item.name }],
      title: (item: Row) => item.name,
    },
  },
]

/**
 * Self-contained harness: the source and the collection live in the same React
 * tree so state updates (filters/sorting/visualization/presets) are shared.
 */
function Harness({
  presets,
  id = "presets-test/v1",
  onState,
  urlSync = false,
}: {
  presets?: PresetsDefinition<typeof filters>
  id?: string
  onState?: (state: {
    filters: unknown
    sortings: unknown
    grouping: unknown
    visualization: number
  }) => void
  /** Opt in to URL syncing (off by default to avoid leaking params across tests). */
  urlSync?: boolean
}) {
  const source = useDataCollectionSource({
    filters,
    sortings,
    grouping,
    presets,
    dataAdapter: { fetchData: async () => ({ records }) },
  })

  return (
    <OneDataCollection
      id={id}
      source={source}
      visualizations={visualizations}
      onStateChange={(state) =>
        onState?.({
          filters: state.filters,
          sortings: state.sortings,
          grouping: state.grouping,
          visualization: state.visualization,
        })
      }
      // Tests drive state directly; URL sync would otherwise leak the view mode
      // (dc_visualization) into window.location across tests.
      disableUrlParams={!urlSync}
    />
  )
}

const createStorageSpy = () => {
  const set = vi.fn<
    (key: string, storage: DataCollectionStorage) => Promise<void>
  >(async () => {})
  const handler: DataCollectionStorageHandler = {
    get: async () => ({}),
    set,
  }
  return { handler, set }
}

const renderHarness = (props: Parameters<typeof Harness>[0] = {}) => {
  const { handler, set } = createStorageSpy()
  const result = zeroRender(
    <DataCollectionStorageProvider handler={handler}>
      <Harness {...props} />
    </DataCollectionStorageProvider>
  )
  return { ...result, set }
}

const openSettingsAndSwitchTo = async (
  user: ReturnType<typeof userEvent.setup>,
  visualizationName: string
) => {
  await user.click(screen.getByRole("button", { name: "Settings" }))
  await user.click(
    await screen.findByRole("button", { name: visualizationName })
  )
}

// A non-view-mode change: clicking the sortable "Name" column header toggles
// the sorting. Used to create "dirty" state that should offer "Save view".
const sortByName = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: "Sort" }))
}

// The collection mounts Radix popovers/dialogs into portals; ensure each test
// starts from a clean DOM and a clean URL (the URL is global in jsdom).
afterEach(() => {
  cleanup()
  document.body.innerHTML = ""
  window.history.replaceState({}, "", "/")
})

describe("OneDataCollection - presets", () => {
  it("shows no preset action button in the initial (pristine) state", async () => {
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    expect(
      screen.queryByRole("button", { name: "Save view" })
    ).not.toBeInTheDocument()
  })

  it("does not offer 'Save view' for a view-mode-only change", async () => {
    const user = userEvent.setup()
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Switching only the view mode is too transient to warrant a preset.
    await openSettingsAndSwitchTo(user, "Card view")

    expect(
      screen.queryByRole("button", { name: "Save view" })
    ).not.toBeInTheDocument()
  })

  it("offers 'Save view' once a non-view-mode dimension (sorting) changes", async () => {
    const user = userEvent.setup()
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    await sortByName(user)

    expect(
      await screen.findByRole("button", { name: "Save view" })
    ).toBeInTheDocument()
  })

  it("creates a custom preset via the dialog, selecting it and persisting to storage", async () => {
    const user = userEvent.setup()
    const { set } = renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))

    // Dialog opens; fill the title and submit.
    const titleInput = await screen.findByLabelText("Title")
    await user.type(titleInput, "My view")
    await user.click(screen.getByRole("button", { name: "Save" }))

    // The custom preset appears in the preset list...
    await waitFor(() =>
      expect(screen.getAllByText("My view").length).toBeGreaterThan(0)
    )

    // ...and, being selected & matching the current view, the action button is gone.
    expect(
      screen.queryByRole("button", { name: "Save view" })
    ).not.toBeInTheDocument()

    // ...and it is persisted to storage.
    await waitFor(() => {
      const call = set.mock.calls.find(
        ([, storage]) => (storage.customPresets?.length ?? 0) > 0
      )
      expect(call).toBeTruthy()
      expect(call![1].customPresets![0].label).toBe("My view")
      // The id is derived from the title (doubles as the readable dc_view).
      expect(call![1].customPresets![0].id).toBe("My view")
    })
  })

  it("allows saving an edited view under its own (unchanged) name", async () => {
    const user = userEvent.setup()
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom view.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "My view")
    await user.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(screen.getAllByText("My view").length).toBeGreaterThan(0)
    )

    // Edit it and save without renaming → the view is excluded from the
    // uniqueness check, so its own name is allowed (no error).
    await user.hover(
      screen
        .getAllByText("My view")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!
    )
    await user.click(
      (await screen.findAllByRole("button", { name: "Edit view" })).find(
        (el) => !el.closest('[aria-hidden="true"]')
      )!
    )
    await user.click(screen.getByRole("button", { name: "Save" }))

    // The dialog closes (no error) — the title field is gone.
    await waitFor(() =>
      expect(screen.queryByLabelText("Title")).not.toBeInTheDocument()
    )
    expect(
      screen.queryByText("A view with this name already exists")
    ).not.toBeInTheDocument()
  })

  it("de-selects a custom view (offering 'Save view') when it is edited — no in-place persist", async () => {
    const user = userEvent.setup()
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom view (auto-selected) after a sorting change.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "My view")
    await user.click(screen.getByRole("button", { name: "Save" }))

    const chip = () =>
      screen
        .getAllByText("My view")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!
    await waitFor(() =>
      expect(chip()).toHaveClass("bg-f1-background-selected-secondary")
    )

    // Diverge from it → a custom view de-selects like any view (no "Persist"),
    // and "Save view" is offered to fork it into a new one.
    await sortByName(user)

    await waitFor(() =>
      expect(chip()).not.toHaveClass("bg-f1-background-selected-secondary")
    )
    expect(screen.getAllByText("Save view").length).toBeGreaterThan(0)
  })

  it("de-selects a developer preset (offering 'Save view') when the view is edited", async () => {
    const user = userEvent.setup()
    const devPresets: PresetsDefinition<typeof filters> = [
      { id: "dev-eng", label: "Eng team", filter: { department: ["eng"] } },
    ]
    renderHarness({ presets: devPresets })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    const chip = () =>
      screen
        .getAllByText("Eng team")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!

    // Select the developer preset.
    await user.click(chip())
    await waitFor(() =>
      expect(chip()).toHaveClass("bg-f1-background-selected-secondary")
    )

    // Pristine relative to the preset → no save action. (The save chip lives in
    // the presets list; query by text since it may sit in the overflow copy.)
    expect(screen.queryByText("Save view")).not.toBeInTheDocument()

    // Change a (non-view-mode) dimension on top of the developer preset.
    await sortByName(user)

    // The preset no longer represents the view → it auto-de-selects...
    await waitFor(() =>
      expect(chip()).not.toHaveClass("bg-f1-background-selected-secondary")
    )
    // ...and "Save view" is offered (fork).
    expect(screen.getAllByText("Save view").length).toBeGreaterThan(0)
  })

  it("de-selects a developer preset and offers 'Save view' on a view-mode change", async () => {
    const user = userEvent.setup()
    // Empty filter so switching view mode does not change the (per-view) filter
    // — this isolates a pure view-mode change (table → card).
    const devPresets: PresetsDefinition<typeof filters> = [
      { id: "dev-all", label: "All people", filter: {} },
    ]
    renderHarness({ presets: devPresets })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    const chip = () =>
      screen
        .getAllByText("All people")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!

    await user.click(chip())
    await waitFor(() =>
      expect(chip()).toHaveClass("bg-f1-background-selected-secondary")
    )

    // Switch the view mode (to a non-default view) on top of the developer preset.
    await openSettingsAndSwitchTo(user, "Card view")

    // The captured view no longer matches → the preset de-selects...
    await waitFor(() =>
      expect(chip()).not.toHaveClass("bg-f1-background-selected-secondary")
    )
    // ...and, having diverged from a named preset, "Save view" is offered
    // (a view-mode change from a *preset* is meaningful — unlike a transient
    // toggle from a pristine baseline).
    await waitFor(() =>
      expect(screen.getAllByText("Save view").length).toBeGreaterThan(0)
    )
  })

  it("keeps a developer preset selected when re-selecting after it was de-selected by a view switch", async () => {
    const user = userEvent.setup()
    const devPresets: PresetsDefinition<typeof filters> = [
      {
        id: "dev-cards",
        label: "Eng (cards)",
        filter: { department: ["eng"] },
        visualization: 1, // card
      },
    ]
    renderHarness({ presets: devPresets })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    const chip = () =>
      screen
        .getAllByText("Eng (cards)")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!

    // Selecting a preset that switches the visualization must NOT transiently
    // de-select it (the deferred-filter window is guarded).
    await user.click(chip())
    await waitFor(() =>
      expect(chip()).toHaveClass("bg-f1-background-selected-secondary")
    )
    // Still selected after the transition settles.
    expect(chip()).toHaveClass("bg-f1-background-selected-secondary")
  })

  it("de-selects a view-switching developer preset when its view mode changes afterward", async () => {
    const user = userEvent.setup()
    const devPresets: PresetsDefinition<typeof filters> = [
      {
        id: "dev-cards",
        label: "Eng (cards)",
        filter: { department: ["eng"] },
        visualization: 1, // card
      },
    ]
    renderHarness({ presets: devPresets })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    const chip = () =>
      screen
        .getAllByText("Eng (cards)")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!

    await user.click(chip())
    await waitFor(() =>
      expect(chip()).toHaveClass("bg-f1-background-selected-secondary")
    )

    // Switch the view mode away from the one the preset captured → de-selects.
    // (Switching back to the default view restores the baseline filters, so no
    // "Save view" is offered here — see the table → card case above for
    // the diverged-from-a-preset save affordance.)
    await openSettingsAndSwitchTo(user, "Table view")

    await waitFor(() =>
      expect(chip()).not.toHaveClass("bg-f1-background-selected-secondary")
    )
  })

  it("applies the captured filters, sorting, grouping and view mode on a single click — even when the preset also switches view", async () => {
    const user = userEvent.setup()
    const onState = vi.fn()
    const richPresets: PresetsDefinition<typeof filters> = [
      {
        id: "rich",
        label: "Eng · by name (cards, grouped)",
        filter: { department: ["eng"] },
        sortings: { field: "name", order: "desc" },
        grouping: { field: "department" },
        visualization: 1, // card
      },
    ]
    renderHarness({ presets: richPresets, onState })

    await waitFor(() => expect(onState).toHaveBeenCalled())

    const presetChip = screen
      .getAllByText("Eng · by name (cards, grouped)")
      .find((el) => !el.closest('[aria-hidden="true"]'))!
    await user.click(presetChip)

    await waitFor(() => {
      const state = onState.mock.calls.at(-1)?.[0]
      // The captured filter is applied on the first click, despite the preset
      // also switching the visualization (per-viz filter restore must not win).
      expect(state?.filters).toEqual({ department: ["eng"] })
      expect(state?.sortings).toEqual({ field: "name", order: "desc" })
      expect(state?.grouping).toEqual({ field: "department" })
      expect(state?.visualization).toBe(1)
    })
  })

  it("toggling a preset off resets every captured dimension back to the defaults", async () => {
    const user = userEvent.setup()
    const onState = vi.fn()
    const richPresets: PresetsDefinition<typeof filters> = [
      {
        id: "rich",
        label: "Rich (cards, sorted, grouped)",
        filter: { department: ["eng"] },
        sortings: { field: "name", order: "desc" },
        grouping: { field: "department" },
        visualization: 1, // card
      },
    ]
    renderHarness({ presets: richPresets, onState })

    await waitFor(() => expect(onState).toHaveBeenCalled())

    const presetChip = () =>
      screen
        .getAllByText("Rich (cards, sorted, grouped)")
        .find((el) => !el.closest('[aria-hidden="true"]'))!

    // Apply the rich preset → all captured dimensions are set.
    await user.click(presetChip())
    await waitFor(() =>
      expect(onState.mock.calls.at(-1)?.[0]?.visualization).toBe(1)
    )

    // Toggle it off (no unpersisted prior state) → back to the defaults.
    await user.click(presetChip())
    await waitFor(() => {
      const state = onState.mock.calls.at(-1)?.[0]
      expect(state?.visualization).toBe(0)
      expect(state?.sortings ?? null).toBeNull()
      expect(state?.grouping ?? null).toBeNull()
    })
  })

  it("restores the pre-selection working state when a preset is toggled off", async () => {
    const user = userEvent.setup()
    const onState = vi.fn()
    const devPresets: PresetsDefinition<typeof filters> = [
      // Filter-only preset → applying it resets the view mode to default (0).
      { id: "dev-eng", label: "Eng team", filter: { department: ["eng"] } },
    ]
    renderHarness({ presets: devPresets, onState })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Unpersisted change before any preset: switch to the Card view.
    await openSettingsAndSwitchTo(user, "Card view")
    await waitFor(() =>
      expect(onState.mock.calls.at(-1)?.[0]?.visualization).toBe(1)
    )

    const presetChip = () =>
      screen
        .getAllByText("Eng team")
        .find((el) => !el.closest('[aria-hidden="true"]'))!

    // Select the preset → it resets the (uncaptured) view mode to default (0).
    await user.click(presetChip())
    await waitFor(() =>
      expect(onState.mock.calls.at(-1)?.[0]?.visualization).toBe(0)
    )

    // Toggle the preset off → return to the pre-selection working state,
    // i.e. the Card view the user had switched to.
    await user.click(presetChip())
    await waitFor(() =>
      expect(onState.mock.calls.at(-1)?.[0]?.visualization).toBe(1)
    )
  })

  it("does not show edit/delete icons on developer presets", async () => {
    const devPresets: PresetsDefinition<typeof filters> = [
      { id: "dev-eng", label: "Eng team", filter: { department: ["eng"] } },
    ]
    renderHarness({ presets: devPresets })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())
    await waitFor(() =>
      expect(screen.getAllByText("Eng team").length).toBeGreaterThan(0)
    )

    // Even on hover, a developer preset exposes no edit/delete actions.
    const devChip = screen
      .getAllByText("Eng team")
      .find((el) => !el.closest('[aria-hidden="true"]'))!
      .closest("label")!
    await userEvent.setup().hover(devChip)

    expect(
      screen.queryByRole("button", { name: "Edit view" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Delete preset" })
    ).not.toBeInTheDocument()
  })

  it("edits a custom preset's title via its hover edit icon", async () => {
    const user = userEvent.setup()
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom preset.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "My view")
    await user.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(screen.getAllByText("My view").length).toBeGreaterThan(0)
    )

    // Hover the chip to reveal its actions, then open the edit dialog (skip the
    // hidden OverflowList measurement copy).
    await user.hover(
      screen
        .getAllByText("My view")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!
    )
    await user.click(
      (await screen.findAllByRole("button", { name: "Edit view" })).find(
        (el) => !el.closest('[aria-hidden="true"]')
      )!
    )

    // Dialog is prefilled; rename and save.
    const titleInput = await screen.findByLabelText("Title")
    expect(titleInput).toHaveValue("My view")
    await user.clear(titleInput)
    await user.type(titleInput, "Renamed view")
    await user.click(screen.getByRole("button", { name: "Save" }))

    await waitFor(() =>
      expect(screen.getAllByText("Renamed view").length).toBeGreaterThan(0)
    )
    expect(screen.queryByText("My view")).not.toBeInTheDocument()
  })

  it("reflects a renamed view in the URL (dc_view updates to the new title)", async () => {
    const user = userEvent.setup()
    renderHarness({ urlSync: true })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom view (auto-selected) → dc_view is its title-derived id.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "My view")
    await user.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(new URLSearchParams(window.location.search).get("dc_view")).toBe(
        "My view"
      )
    )

    // Rename it via the edit dialog.
    await user.hover(
      screen
        .getAllByText("My view")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!
    )
    await user.click(
      (await screen.findAllByRole("button", { name: "Edit view" })).find(
        (el) => !el.closest('[aria-hidden="true"]')
      )!
    )
    const titleInput = await screen.findByLabelText("Title")
    await user.clear(titleInput)
    await user.type(titleInput, "Renamed view")
    await user.click(screen.getByRole("button", { name: "Save" }))

    // The URL now reflects the new title (spaces render as '+').
    await waitFor(() =>
      expect(new URLSearchParams(window.location.search).get("dc_view")).toBe(
        "Renamed view"
      )
    )
  })

  it("removes a custom preset via the Remove action in the edit dialog", async () => {
    const user = userEvent.setup()
    renderHarness()

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom preset.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "Temp view")
    await user.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(screen.getAllByText("Temp view").length).toBeGreaterThan(0)
    )

    // Hover the chip to reveal its actions, then open the edit dialog.
    await user.hover(
      screen
        .getAllByText("Temp view")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!
    )
    await user.click(
      (await screen.findAllByRole("button", { name: "Edit view" })).find(
        (el) => !el.closest('[aria-hidden="true"]')
      )!
    )

    // The edit dialog exposes a Remove action in its overflow menu (no separate
    // confirmation step).
    await user.click(
      await screen.findByRole("button", { name: "Toggle dropdown menu" })
    )
    await user.click(await screen.findByRole("menuitem", { name: "Remove" }))
    await waitFor(() =>
      expect(screen.queryByText("Temp view")).not.toBeInTheDocument()
    )
  })

  it("writes the selected preset to the URL (dc_view) and removes it on deselect", async () => {
    const user = userEvent.setup()
    const devPresets: PresetsDefinition<typeof filters> = [
      { id: "dev-eng", label: "Eng team", filter: { department: ["eng"] } },
    ]
    renderHarness({ presets: devPresets, urlSync: true })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    const presetChip = () =>
      screen
        .getAllByText("Eng team")
        .find((el) => !el.closest('[aria-hidden="true"]'))!

    await user.click(presetChip())
    await waitFor(() =>
      expect(new URLSearchParams(window.location.search).get("dc_view")).toBe(
        "dev-eng"
      )
    )

    // Toggle off → the param is removed.
    await user.click(presetChip())
    await waitFor(() =>
      expect(new URLSearchParams(window.location.search).has("dc_view")).toBe(
        false
      )
    )
  })

  it("writes a custom preset's title-derived id to the URL, with spaces as '+'", async () => {
    const user = userEvent.setup()
    renderHarness({ urlSync: true })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom preset with a multi-word title.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "My cool view")
    await user.click(screen.getByRole("button", { name: "Save" }))

    // Spaces in the title render as '+' in the URL (standard query encoding)...
    await waitFor(() =>
      expect(window.location.search).toContain("dc_view=My+cool+view")
    )
    // ...and decode back to the stored, space-separated id.
    expect(new URLSearchParams(window.location.search).get("dc_view")).toBe(
      "My cool view"
    )
  })

  it("restores the selected preset from the URL (dc_view) on load", async () => {
    window.history.replaceState({}, "", "/?dc_view=dev-eng")
    const devPresets: PresetsDefinition<typeof filters> = [
      { id: "dev-eng", label: "Eng team", filter: { department: ["eng"] } },
    ]
    renderHarness({ presets: devPresets, urlSync: true })

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // The preset is marked selected (its chip shows as selected).
    await waitFor(() => {
      const chip = screen
        .getAllByText("Eng team")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")
      expect(chip).toHaveClass("bg-f1-background-selected-secondary")
    })
  })

  it("does not offer 'Save view' for persisted (hydrated) state at rest", async () => {
    // Storage hydrates a non-default sorting; the user hasn't changed anything
    // this session, so no save should be offered.
    const handler: DataCollectionStorageHandler = {
      get: async () => ({ sortings: { field: "name", order: "desc" } }),
      set: async () => {},
    }
    zeroRender(
      <DataCollectionStorageProvider handler={handler}>
        <Harness />
      </DataCollectionStorageProvider>
    )

    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())
    // Let the session baseline settle after hydration.
    await waitFor(() =>
      expect(screen.queryByText("Save view")).not.toBeInTheDocument()
    )
  })
})

describe("OneDataCollection - share preset", () => {
  it("copies a self-contained shareable link to the clipboard", async () => {
    const user = userEvent.setup()
    // Spy on whatever clipboard the component will actually use (userEvent.setup
    // installs its own stub, so spy on that rather than redefining it).
    if (!navigator.clipboard) {
      Object.defineProperty(navigator, "clipboard", {
        value: { writeText: async () => {} },
        configurable: true,
      })
    }
    const writeText = vi
      .spyOn(navigator.clipboard, "writeText")
      .mockResolvedValue(undefined)

    renderHarness()
    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // Create a custom preset to share.
    await sortByName(user)
    await user.click(await screen.findByRole("button", { name: "Save view" }))
    await user.type(await screen.findByLabelText("Title"), "Shared view")
    await user.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(screen.getAllByText("Shared view").length).toBeGreaterThan(0)
    )

    // Open the edit dialog → overflow menu → Share preset.
    await user.hover(
      screen
        .getAllByText("Shared view")
        .find((el) => !el.closest('[aria-hidden="true"]'))!
        .closest("label")!
    )
    await user.click(
      (await screen.findAllByRole("button", { name: "Edit view" })).find(
        (el) => !el.closest('[aria-hidden="true"]')
      )!
    )
    await user.click(
      await screen.findByRole("button", { name: "Toggle dropdown menu" })
    )
    await user.click(
      await screen.findByRole("menuitem", { name: "Share view" })
    )

    // The dropdown defers the action slightly (Radix close/animation workaround).
    await waitFor(() => expect(writeText).toHaveBeenCalledTimes(1))
    const url = new URL(writeText.mock.calls[0]![0] as string)
    expect(url.searchParams.has(SHARED_PRESET_PARAM)).toBe(true)

    // ...and a confirmation action bar is shown.
    expect(
      await screen.findByText("Copied to your clipboard")
    ).toBeInTheDocument()
  })

  it("opens the prefilled create dialog from a shared link and saves the shared config", async () => {
    const user = userEvent.setup()
    const encoded = encodeSharedPreset({
      label: "Imported view",
      description: "from a teammate",
      filter: { department: ["eng"] },
      sortings: { field: "name", order: "desc" },
      visualization: 0,
    })
    window.history.replaceState({}, "", `/?${SHARED_PRESET_PARAM}=${encoded}`)

    const { set } = renderHarness()
    await waitFor(() => expect(screen.getByText("John")).toBeInTheDocument())

    // The create dialog opens prefilled with the shared title...
    const titleInput = await screen.findByLabelText("Title")
    expect(titleInput).toHaveValue("Imported view")

    // ...and the shared link param is stripped so a reload won't reopen it.
    expect(
      new URLSearchParams(window.location.search).has(SHARED_PRESET_PARAM)
    ).toBe(false)

    // Saving creates the preset with the shared config (not the current view).
    await user.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(screen.getAllByText("Imported view").length).toBeGreaterThan(0)
    )
    await waitFor(() => {
      const call = set.mock.calls.find(
        ([, storage]) => (storage.customPresets?.length ?? 0) > 0
      )
      expect(call).toBeTruthy()
      const saved = call![1].customPresets![0]
      expect(saved.label).toBe("Imported view")
      expect(saved.filter).toEqual({ department: ["eng"] })
    })
  })
})
