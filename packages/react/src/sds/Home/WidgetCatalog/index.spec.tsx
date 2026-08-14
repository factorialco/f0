import { describe, expect, test, vi } from "vitest"

import { Calendar, Clock, File } from "@/icons/app"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { EVENT_LIST_GAP, homeSlot, type HomeWidgetItem } from "../slotRenderers"
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
})
