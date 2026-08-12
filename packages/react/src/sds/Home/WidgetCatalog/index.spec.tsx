import { describe, expect, test, vi } from "vitest"

import { Calendar, Clock, File } from "@/icons/app"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

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
})
