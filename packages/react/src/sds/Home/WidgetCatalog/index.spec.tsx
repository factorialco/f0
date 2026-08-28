import { describe, expect, test, vi } from "vitest"
import { z } from "zod"

import { Calendar, Clock, File } from "@/icons/app"
import { f0FormField } from "@/patterns/F0Form"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import {
  EVENT_LIST_GAP,
  homeSlot,
  type HomeWidgetItem,
  type WidgetParams,
} from "../slotRenderers"
import { WidgetCatalog, type WidgetCatalogGroup } from "./index"

const GROUPS: WidgetCatalogGroup[] = [
  { id: "time", label: "Time & attendance", module: "time-tracking" },
  { id: "docs", label: "Files", module: "documents" },
]

const WIDGETS = [
  { id: "clock", title: "Clock in", icon: Clock, preview: <p>clock</p> },
  { id: "time-off", title: "Time off", icon: Clock, preview: <p>time off</p> },
  { id: "docs", title: "Documents", icon: File, preview: <p>docs</p> },
  { id: "events", title: "Events", icon: Calendar, preview: <p>events</p> },
]

const grouped = [
  { ...WIDGETS[0], group: "time", recommended: true },
  { ...WIDGETS[1], group: "time" },
  { ...WIDGETS[2], group: "docs" },
  // No group at all: it belongs to the unheaded run after the groups.
  WIDGETS[3],
]

const TITLES = ["Clock in", "Time off", "Documents", "Events"]

/**
 * The picker's WIDGET ROWS, in the order they are read. The dialog's own chrome
 * (its close button, the CTA) is not part of the list.
 */
const listed = () =>
  screen
    .getAllByRole("button")
    .map((el) => el.textContent?.trim())
    .filter((text) => text && TITLES.includes(text))

/**
 * The nearest box holding both elements — the one whose own layout is what puts
 * space between them.
 */
const boxAround = (a: HTMLElement, b: HTMLElement) => {
  let node: HTMLElement | null = a
  while (node && !node.contains(b)) node = node.parentElement
  return node
}

const render = (props = {}) =>
  zeroRender(
    <WidgetCatalog
      isOpen
      onClose={() => {}}
      onAdd={() => {}}
      widgets={grouped}
      groups={GROUPS}
      {...props}
    />
  )

describe("WidgetCatalog", () => {
  test("reads recommended first, then each domain, then what has no domain", () => {
    render()

    expect(screen.getByText("Recommended")).toBeInTheDocument()
    expect(screen.getByText("Time & attendance")).toBeInTheDocument()
    expect(screen.getByText("Files")).toBeInTheDocument()

    // Clock in is LIFTED to the top and not repeated under its domain; Events,
    // which has no domain, comes last with no heading of its own.
    expect(listed()).toEqual(["Clock in", "Time off", "Documents", "Events"])
  })

  test("previews the first row it shows, which is a recommended one", () => {
    render()

    expect(screen.getByText("clock")).toBeInTheDocument()
  })

  test("a domain with nothing left in it stops being a heading", async () => {
    render()

    await userEvent.type(screen.getByRole("searchbox"), "time")

    // "Time off" survives the search; the Files domain has nothing left.
    expect(screen.getByText("Time & attendance")).toBeInTheDocument()
    expect(screen.queryByText("Files")).not.toBeInTheDocument()
    // Nothing recommended matches either.
    expect(screen.queryByText("Recommended")).not.toBeInTheDocument()
  })

  test("says so when the search matches nothing", async () => {
    render()

    await userEvent.type(screen.getByRole("searchbox"), "zzz")

    expect(screen.getByText(/No widgets match/)).toBeInTheDocument()
  })

  test("without groups it is the flat list it always was", () => {
    render({ widgets: WIDGETS, groups: undefined })

    expect(screen.queryByText("Recommended")).not.toBeInTheDocument()
    expect(screen.queryByText("Time & attendance")).not.toBeInTheDocument()
    expect(listed()).toEqual(["Clock in", "Time off", "Documents", "Events"])
  })

  test("adds the widget the picker is previewing", async () => {
    const onAdd = vi.fn()
    render({ onAdd })

    await userEvent.click(screen.getByText("Time off"))
    await userEvent.click(screen.getByRole("button", { name: "Add widget" }))

    expect(onAdd).toHaveBeenCalledWith("time-off")
  })

  describe("one catalog, two columns", () => {
    // The same list a two-column Home would keep: two widgets that can only go
    // in one column each, and two that go in either.
    const byArea = [
      { ...WIDGETS[0], areas: ["right"] as const },
      { ...WIDGETS[1] },
      { ...WIDGETS[2], areas: ["main"] as const },
      { ...WIDGETS[3], areas: ["main", "right"] as const },
    ]

    test("offers a column only what it can hold", () => {
      const { unmount } = render({
        widgets: byArea,
        groups: undefined,
        area: "main",
      })

      // Clock in is rail-only, so it isn't on offer here at all. Time off
      // declares nothing and belongs to both.
      expect(listed()).toEqual(["Time off", "Documents", "Events"])
      unmount()

      render({ widgets: byArea, groups: undefined, area: "right" })
      expect(listed()).toEqual(["Clock in", "Time off", "Events"])
    })

    test("without an area it is every widget, as it always was", () => {
      render({ widgets: byArea, groups: undefined })

      expect(listed()).toEqual(TITLES)
    })

    test("the area filter is not searchable around", async () => {
      render({ widgets: byArea, groups: undefined, area: "main" })

      // Searching for a rail-only widget by name finds nothing: a column can't
      // hold it, so no amount of typing should surface it.
      await userEvent.type(screen.getByRole("searchbox"), "clock")

      expect(listed()).toEqual([])
      expect(screen.getByText(/No widgets match/)).toBeInTheDocument()
    })

    test("a column with nothing to offer says that, not 'no match'", () => {
      render({
        widgets: [{ ...WIDGETS[0], areas: ["right"] as const }],
        groups: undefined,
        area: "main",
      })

      // Two different dead ends: a search you can clear, and a column that has
      // nothing for you.
      expect(screen.getByText("No widgets to add here.")).toBeInTheDocument()
      expect(screen.queryByText(/No widgets match/)).not.toBeInTheDocument()
    })

    test("the CTA adds a widget the column can actually hold", async () => {
      const onAdd = vi.fn()
      render({ widgets: byArea, groups: undefined, area: "main", onAdd })

      // Selection follows what is SHOWN, so the first row is the first one this
      // column offers — never the rail-only widget that leads the raw list.
      await userEvent.click(screen.getByRole("button", { name: "Add widget" }))

      expect(onAdd).toHaveBeenCalledWith("time-off")
    })
  })

  describe("a preview handed over as DATA", () => {
    const eventsWidget: HomeWidgetItem = {
      id: "events",
      header: { title: "Events", info: "The next events this week." },
      slots: [
        homeSlot("event-list", {
          showAllItems: true,
          events: [
            {
              title: "Standup",
              description: "09:30",
              color: "#5596F6",
              isPending: false,
            },
            {
              title: "Design review",
              description: "11:00",
              color: "#5596F6",
              isPending: false,
            },
          ],
        }),
      ],
    }
    const asData = [
      { id: "events", title: "Events", icon: Calendar, preview: eventsWidget },
    ]

    test("is drawn through SlotWidget, not left to the app to approximate", () => {
      render({ widgets: asData, groups: undefined })

      // The title three times over — the row that selected it, the card's
      // header, and the card's BACK, which keeps the title. That third one is
      // the tell: the preview is the whole `SlotWidget`, flip side and all.
      expect(screen.getAllByText("Events")).toHaveLength(3)
      expect(screen.getByText("Standup")).toBeInTheDocument()
      expect(screen.getByText("Design review")).toBeInTheDocument()
    })

    test("keeps the spacing the column gives it", () => {
      render({ widgets: asData, groups: undefined })

      // THE REGRESSION THIS GUARDS: an approximated preview reached for
      // `CalendarEventList showAllItems` and lost `EVENT_LIST_GAP`, so catalog
      // rows sat flush while the same widget on the rail was spaced 8px. The
      // box holding BOTH events is the slot's own container, and the gap is on
      // it — nothing between it and the events lays them out.
      expect(
        boxAround(
          screen.getByText("Standup"),
          screen.getByText("Design review")
        )
      ).toHaveClass(EVENT_LIST_GAP)
    })

    test("says what the widget says, without being told twice", () => {
      render({ widgets: asData, groups: undefined })

      // The item declared no `info`: the pane takes the widget's own. Twice
      // over, because the card carries the same sentence on its back.
      expect(screen.getAllByText("The next events this week.")).toHaveLength(2)
    })

    test("an item's own info still wins", () => {
      render({
        widgets: [{ ...asData[0], info: "Only the ones you are invited to." }],
        groups: undefined,
      })

      expect(
        screen.getByText("Only the ones you are invited to.")
      ).toBeInTheDocument()
    })

    test("a bespoke visualization needs the layout's renderers", () => {
      const bespoke: HomeWidgetItem = {
        id: "clock-in",
        header: { title: "Clock in" },
        slots: [{ visualization: "clock-in", params: {} }],
      }
      const widgets = [
        { id: "clock-in", title: "Clock in", icon: Clock, preview: bespoke },
      ]

      const { unmount } = render({ widgets, groups: undefined })
      // Unrendered without the map — the same notice a column would show.
      expect(screen.getByText(/No renderer for slot/)).toBeInTheDocument()
      unmount()

      render({
        widgets,
        groups: undefined,
        slotRenderers: { "clock-in": () => <p>clocked in</p> },
      })
      expect(screen.getByText("clocked in")).toBeInTheDocument()
    })

    test("a ReactNode preview is still passed through as given", () => {
      render({ widgets: WIDGETS, groups: undefined })

      expect(screen.getByText("clock")).toBeInTheDocument()
    })
  })
  describe("a widget with params is added in two steps", () => {
    const schema = z.object({
      rows: f0FormField(z.number().min(1).max(10), { label: "Rows" }),
      note: f0FormField(z.string().optional(), { label: "Note" }),
    })

    const configurable = {
      id: "events",
      title: "Events",
      icon: Calendar,
      preview: <p>events</p>,
      paramsSchema: schema,
      params: { rows: 3 },
    }
    const withParams = [configurable, WIDGETS[0]]

    const cta = (name: string) => screen.getByRole("button", { name })

    const stepColumn = (inside: HTMLElement) =>
      inside.closest(".min-h-0.flex-col") as HTMLElement

    const startConfiguring = async () => {
      await userEvent.click(cta("Continue"))
      await waitFor(() =>
        expect(screen.getByLabelText(/Rows/)).toBeInTheDocument()
      )
    }

    test("picking it opens its params instead of adding it", async () => {
      const onAdd = vi.fn()
      render({ widgets: withParams, groups: undefined, onAdd })

      expect(screen.queryByRole("button", { name: "Add widget" })).toBeNull()
      await startConfiguring()

      expect(onAdd).not.toHaveBeenCalled()
      expect(screen.queryByRole("searchbox")).toBeNull()
      expect(screen.getByText("Configure Events")).toBeInTheDocument()
    })

    test("a widget flagged to add with its defaults skips the step", async () => {
      const onAdd = vi.fn()
      render({
        widgets: [
          { ...configurable, addWithDefaults: true, params: { rows: 4 } },
        ],
        groups: undefined,
        onAdd,
      })

      expect(screen.queryByRole("button", { name: "Continue" })).toBeNull()
      await userEvent.click(cta("Add widget"))

      expect(onAdd).toHaveBeenCalledWith("events", { rows: 4 })
    })

    test("the flag decides, not whether the defaults are complete", async () => {
      render({
        widgets: [{ ...configurable, params: { rows: 4 } }],
        groups: undefined,
      })

      expect(cta("Continue")).toBeInTheDocument()
    })

    test("the flag still asks when its defaults can't satisfy the schema", async () => {
      const onAdd = vi.fn()
      render({
        widgets: [{ ...configurable, addWithDefaults: true, params: {} }],
        groups: undefined,
        onAdd,
      })

      await startConfiguring()

      expect(onAdd).not.toHaveBeenCalled()
    })

    test("a widget with nothing to configure is still one press", async () => {
      const onAdd = vi.fn()
      render({ widgets: withParams, groups: undefined, onAdd })

      await userEvent.click(screen.getByText("Clock in"))
      await userEvent.click(cta("Add widget"))

      expect(onAdd).toHaveBeenCalledWith("clock")
    })

    test("adds it with the params it was configured with", async () => {
      const onAdd = vi.fn()
      render({ widgets: withParams, groups: undefined, onAdd })
      await startConfiguring()

      const rows = screen.getByLabelText(/Rows/)
      await userEvent.clear(rows)
      await userEvent.type(rows, "5")
      await userEvent.click(cta("Add widget"))

      await waitFor(() =>
        expect(onAdd).toHaveBeenCalledWith(
          "events",
          expect.objectContaining({ rows: 5 })
        )
      )
    })

    test("it opens on the params the entry declares", async () => {
      render({ widgets: withParams, groups: undefined })
      await startConfiguring()

      expect(screen.getByLabelText(/Rows/)).toHaveValue("3")
    })

    test("what the schema requires is what stops it being added", async () => {
      const onAdd = vi.fn()
      render({ widgets: withParams, groups: undefined, onAdd })
      await startConfiguring()

      await userEvent.clear(screen.getByLabelText(/Rows/))
      await userEvent.click(cta("Add widget"))

      await waitFor(() => expect(onAdd).not.toHaveBeenCalled())
    })

    test("opening the picker doesn't slide the list in", async () => {
      render({ widgets: withParams, groups: undefined })

      expect(stepColumn(screen.getByRole("searchbox"))).not.toHaveClass(
        "animate-in"
      )
    })

    test("a step you take does slide, each way", async () => {
      render({ widgets: withParams, groups: undefined })
      await startConfiguring()

      expect(stepColumn(screen.getByLabelText(/Rows/))).toHaveClass(
        "animate-in",
        "slide-in-from-right-4"
      )

      await userEvent.click(cta("Back"))

      expect(stepColumn(screen.getByRole("searchbox"))).toHaveClass(
        "animate-in",
        "slide-in-from-left-4"
      )
    })

    test("Back returns to the list, keeping the values you typed", async () => {
      render({ widgets: withParams, groups: undefined })
      await startConfiguring()

      const rows = screen.getByLabelText(/Rows/)
      await userEvent.clear(rows)
      await userEvent.type(rows, "7")
      await userEvent.click(cta("Back"))

      expect(screen.getByRole("searchbox")).toBeInTheDocument()
      expect(listed()).toEqual(["Events", "Clock in"])

      await startConfiguring()
      expect(screen.getByLabelText(/Rows/)).toHaveValue("7")
    })

    test("another widget's params start from its own, not the last one's", async () => {
      render({
        widgets: [
          configurable,
          {
            ...configurable,
            id: "tasks",
            title: "Tasks",
            preview: <p>tasks</p>,
            params: { rows: 1 },
          },
        ],
        groups: undefined,
      })
      await startConfiguring()
      await userEvent.clear(screen.getByLabelText(/Rows/))
      await userEvent.type(screen.getByLabelText(/Rows/), "9")
      await userEvent.click(cta("Back"))

      await userEvent.click(screen.getByText("Tasks"))
      await startConfiguring()

      expect(screen.getByLabelText(/Rows/)).toHaveValue("1")
    })

    test("a widget handed over as DATA needs no schema of its own", async () => {
      const asData: HomeWidgetItem = {
        id: "events",
        header: { title: "Events" },
        paramsSchema: schema,
        params: { rows: 4 },
        slots: [homeSlot("indicators", { items: [] })],
      }
      render({
        widgets: [
          { id: "events", title: "Events", icon: Calendar, preview: asData },
        ],
        groups: undefined,
      })

      await startConfiguring()
      expect(screen.getByLabelText(/Rows/)).toHaveValue("4")
    })

    test("the sentence under it is read off the SAME widget as the card", async () => {
      const events = (count: number): HomeWidgetItem => ({
        id: "events",
        header: { title: "Events", info: `The next ${count} events.` },
        paramsSchema: schema,
        params: { rows: count },
        slots: [homeSlot("indicators", { items: [] })],
      })
      render({
        widgets: [
          { id: "events", title: "Events", icon: Calendar, preview: events(3) },
        ],
        groups: undefined,
        rebuildPreview: (_item: unknown, params: WidgetParams) =>
          events(Number(params.rows)),
      })
      await startConfiguring()

      const rows = screen.getByLabelText(/Rows/)
      await userEvent.clear(rows)
      await userEvent.type(rows, "5")

      await waitFor(() =>
        expect(
          screen.getAllByText("The next 5 events.").length
        ).toBeGreaterThan(0)
      )
      expect(screen.queryByText("The next 3 events.")).toBeNull()
    })

    test("the preview follows the params being tried out", async () => {
      render({
        widgets: withParams,
        groups: undefined,
        rebuildPreview: (_item: unknown, params: WidgetParams) => (
          <p>showing {String(params.rows)} rows</p>
        ),
      })

      expect(screen.getByText("events")).toBeInTheDocument()
      await startConfiguring()
      expect(screen.getByText(/showing 3 rows/)).toBeInTheDocument()

      const rows = screen.getByLabelText(/Rows/)
      await userEvent.clear(rows)
      await userEvent.type(rows, "6")

      await waitFor(() =>
        expect(screen.getByText(/showing 6 rows/)).toBeInTheDocument()
      )
    })

    test("reopening the picker starts at the list again", async () => {
      const { rerender } = render({ widgets: withParams, groups: undefined })
      await startConfiguring()

      rerender(
        <WidgetCatalog
          isOpen={false}
          onClose={() => {}}
          onAdd={() => {}}
          widgets={withParams}
        />
      )
      rerender(
        <WidgetCatalog
          isOpen
          onClose={() => {}}
          onAdd={() => {}}
          widgets={withParams}
        />
      )

      await waitFor(() =>
        expect(screen.getByRole("searchbox")).toBeInTheDocument()
      )
    })
  })
})
