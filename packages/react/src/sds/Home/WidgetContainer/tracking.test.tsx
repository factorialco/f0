import { describe, expect, test, vi } from "vitest"
import { Calendar } from "@/icons/app"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"
import { listSlot, type HomeWidgetItem } from "../slotRenderers"
import { HomeTrackingProvider, type HomeTrackingOptions } from "../tracking"
import { WidgetContainer } from "."

/**
 * THE SEAM ITSELF. A Home widget is declarative — its rows carry an `href` and
 * never an `onClick` — so without these callbacks a host has no way to observe
 * an interaction inside a widget. What is asserted here is that they fire with
 * the widget they came from, and that they never take over the navigation.
 *
 * Driven through `WidgetContainer` (the column) rather than the whole layout:
 * this is where a card's scope is published, and a column needs no measured
 * width to draw one.
 */

const rows = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    id: `row-${index + 1}`,
    title: `Row ${index + 1}`,
    href: `/row/${index + 1}`,
  }))

const widget = (
  id: string,
  extra: Partial<HomeWidgetItem> = {}
): HomeWidgetItem => ({
  id,
  icon: Calendar,
  header: { title: id },
  slots: [listSlot({ clickBehavior: "link" }, rows(2))],
  ...extra,
})

const renderColumn = (
  tracking: HomeTrackingOptions | undefined,
  widgets: HomeWidgetItem[] = [widget("events"), widget("tasks")]
) =>
  zeroRender(
    <HomeTrackingProvider tracking={tracking}>
      <WidgetContainer side="right" widgets={widgets} />
    </HomeTrackingProvider>
  )

describe("Home tracking", () => {
  test("reports an activated row with the widget it belongs to", async () => {
    const onWidgetItemActivate = vi.fn()
    renderColumn({ onWidgetItemActivate })

    await userEvent.click(screen.getAllByText("Row 2")[0]!)

    expect(onWidgetItemActivate).toHaveBeenCalledWith({
      widgetId: "events",
      side: "right",
      position: 1,
      itemId: "row-2",
      itemPosition: 2,
    })
  })

  test("attributes the row to the widget it is actually in", async () => {
    const onWidgetItemActivate = vi.fn()
    renderColumn({ onWidgetItemActivate })

    // Both cards carry rows with the SAME ids — only the scope tells them
    // apart, which is the whole point of publishing one per card.
    await userEvent.click(screen.getAllByText("Row 1")[1]!)

    expect(onWidgetItemActivate).toHaveBeenCalledWith(
      expect.objectContaining({ widgetId: "tasks", position: 2 })
    )
  })

  test("leaves the row a real link", () => {
    renderColumn({ onWidgetItemActivate: vi.fn() })

    // Reporting must not swallow the anchor: the row is still a link with its
    // href, so middle-click and copy-address keep working.
    expect(screen.getAllByText("Row 1")[0]!.closest("a")).toHaveAttribute(
      "href",
      "/row/1"
    )
  })

  test("reports the header link without replacing its own handler", async () => {
    const onWidgetAction = vi.fn()
    const onClick = vi.fn()
    renderColumn({ onWidgetAction }, [
      widget("events", {
        header: { title: "events", link: { title: "Go to Calendar", onClick } },
      }),
    ])

    await userEvent.click(
      screen.getByRole("button", { name: "Go to Calendar" })
    )

    expect(onWidgetAction).toHaveBeenCalledWith({
      widgetId: "events",
      side: "right",
      position: 1,
      action: "header-link",
    })
    expect(onClick).toHaveBeenCalled()
  })

  test("reports the footer action and still runs it", async () => {
    const onWidgetAction = vi.fn()
    const onClick = vi.fn()
    renderColumn({ onWidgetAction }, [
      widget("events", { action: { label: "See all", onClick } }),
    ])

    await userEvent.click(screen.getByRole("button", { name: "See all" }))

    expect(onWidgetAction).toHaveBeenCalledWith(
      expect.objectContaining({ action: "footer-action", widgetId: "events" })
    )
    expect(onClick).toHaveBeenCalled()
  })

  test("reports reaching past a capped list, but not collapsing it again", async () => {
    const onWidgetAction = vi.fn()
    renderColumn({ onWidgetAction }, [
      widget("events", {
        slots: [
          listSlot({ clickBehavior: "link", maxVisibleItems: 2 }, rows(5)),
        ],
      }),
    ])

    await userEvent.click(screen.getByRole("button", { name: "View more (3)" }))

    expect(onWidgetAction).toHaveBeenCalledWith(
      expect.objectContaining({ action: "view-more" })
    )

    // Collapsing is not a reader reaching for more.
    onWidgetAction.mockClear()
    await userEvent.click(screen.getByRole("button", { name: "View less" }))

    expect(onWidgetAction).not.toHaveBeenCalled()
  })

  test("draws the same column when the host tracks nothing", async () => {
    renderColumn(undefined)

    // The reporters are no-ops without a `tracking` prop, so a host that does
    // not care pays nothing and nothing throws.
    await userEvent.click(screen.getAllByText("Row 1")[0]!)

    expect(screen.getAllByText("Row 1")[0]!).toBeInTheDocument()
  })
})
