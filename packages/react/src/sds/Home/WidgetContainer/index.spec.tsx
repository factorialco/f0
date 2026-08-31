import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { z } from "zod"

import { Calendar, Clock } from "@/icons/app"
import { f0FormField } from "@/patterns/F0Form"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem, type WidgetParams } from "../slotRenderers"
import { WidgetContainer } from "./index"

const widget = (id: string, extra: Partial<HomeWidgetItem> = {}) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id, link: { title: `Go to ${id}`, onClick: () => {} } },
  slots: [
    {
      visualization: "indicators",
      params: { items: [{ label: id, content: "1" }] },
    },
  ],
  ...extra,
})

const WIDGETS = [widget("clock"), widget("events")]

/** A column of `count` widgets, named `widget-0`… in order. */
const manyWidgets = (count: number) =>
  Array.from({ length: count }, (_, index) => widget(`widget-${index}`))

/**
 * A scroll region around a column, the way a page gives it one — the box its
 * widgets are on screen OF, and what a virtualized column looks for. The
 * overflow is INLINE rather than a class: jsdom has no stylesheet, so a
 * `overflow-y-auto` class is invisible to `getComputedStyle`.
 */
const Scroller = ({ children }: { children: React.ReactNode }) => (
  <div style={{ overflowY: "auto", height: 400 }}>{children}</div>
)

/**
 * Which widgets are in the DOM, by id — read off the boxes a draggable column
 * marks every widget's card with.
 */
const mountedIds = (container: HTMLElement) =>
  [...container.querySelectorAll("[data-widget-id]")].map((el) =>
    el.getAttribute("data-widget-id")
  )

/**
 * GIVES JSDOM A LAYOUT, which is the one thing virtualization cannot do without:
 * every box measures 0 there, and a column with no viewport has nothing on screen
 * to keep. A placed card (`data-index`) is `card` tall and everything else —
 * including the scroll region — is `viewport`.
 *
 * Both metrics, because the two measurements are taken differently: the scroll
 * region is read from `offsetHeight` and a card from its client rect.
 */
const mockLayout = ({ viewport, card }: { viewport: number; card: number }) => {
  const heightOf = (el: HTMLElement) =>
    el.hasAttribute("data-index") ? card : viewport

  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    function (this: HTMLElement) {
      const height = heightOf(this)
      // Spelled out rather than a `DOMRect`: jsdom keeps a rect's fields on the
      // prototype, so a spread one arrives with none of them and every offset
      // taken from it comes out NaN.
      return {
        top: 0,
        left: 0,
        right: 400,
        bottom: height,
        width: 400,
        height,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect
    }
  )
  vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(
    function (this: HTMLElement) {
      return heightOf(this)
    }
  )
  vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(400)
}

/** The box that holds a virtualized column's cards, found through one of them. */
const listOf = (container: HTMLElement) =>
  container.querySelector("[data-index]")?.parentElement

/** Opens the menu of the widget at `index` and returns its remove item. */
const openMenu = async (index: number) => {
  await userEvent.click(
    screen.getAllByRole("button", { name: "Actions" })[index]
  )
  return screen.queryByRole("menuitem", { name: "Remove widget" })
}

describe("WidgetContainer", () => {
  test("every widget offers removal — there is no mode to enter first", () => {
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        onRemoveWidget={() => {}}
        onClickAddNewWidget={() => {}}
      />
    )

    expect(screen.getAllByRole("button", { name: "Actions" })).toHaveLength(2)
    expect(
      screen.getByRole("button", { name: "Add widget" })
    ).toBeInTheDocument()
  })

  test("offers no menu at all without onRemoveWidget", () => {
    zeroRender(
      <WidgetContainer widgets={WIDGETS} onClickAddNewWidget={() => {}} />
    )

    expect(screen.queryAllByRole("button", { name: "Actions" })).toHaveLength(0)
    expect(
      screen.getByRole("button", { name: "Add widget" })
    ).toBeInTheDocument()
  })

  test("disableEdition opts the column out of everything, adding included", () => {
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        disableEdition
        onRemoveWidget={() => {}}
        onClickAddNewWidget={() => {}}
      />
    )

    expect(screen.queryAllByRole("button", { name: "Actions" })).toHaveLength(0)
    expect(
      screen.queryByRole("button", { name: "Add widget" })
    ).not.toBeInTheDocument()
  })

  test("reports the widget its remove item belongs to", async () => {
    const onRemoveWidget = vi.fn()
    zeroRender(
      <WidgetContainer widgets={WIDGETS} onRemoveWidget={onRemoveWidget} />
    )

    const remove = await openMenu(1)
    await userEvent.click(remove!)

    // The dropdown defers its items' onClick past its own close animation.
    await waitFor(() => expect(onRemoveWidget).toHaveBeenCalledWith("events"))
  })

  test("takes the remove item's copy from removeLabel", async () => {
    zeroRender(
      <WidgetContainer
        widgets={WIDGETS}
        removeLabel="Take this off my Home"
        onRemoveWidget={() => {}}
      />
    )

    await userEvent.click(screen.getAllByRole("button", { name: "Actions" })[0])

    expect(
      screen.getByRole("menuitem", { name: "Take this off my Home" })
    ).toBeInTheDocument()
  })

  describe("a locked widget", () => {
    const LOCKED = [widget("clock", { locked: true }), widget("events")]

    test("has no menu — being mandatory, removal is not a choice", () => {
      zeroRender(<WidgetContainer widgets={LOCKED} onRemoveWidget={() => {}} />)

      // Only the unlocked widget carries one.
      expect(screen.getAllByRole("button", { name: "Actions" })).toHaveLength(1)
    })

    test("the menu that IS there belongs to the unlocked widget", async () => {
      const onRemoveWidget = vi.fn()
      zeroRender(
        <WidgetContainer widgets={LOCKED} onRemoveWidget={onRemoveWidget} />
      )

      const remove = await openMenu(0)
      await userEvent.click(remove!)

      await waitFor(() => expect(onRemoveWidget).toHaveBeenCalledWith("events"))
    })
  })

  /**
   * The menu is the widget's own: what it can be TURNED OVER to, what it can be
   * CONFIGURED into, and only then the destructive one.
   */
  describe("a widget's other menu items", () => {
    test("offers the info side when the widget has one, and turns the card", async () => {
      zeroRender(
        <WidgetContainer
          widgets={[
            widget("clock", {
              header: { title: "clock", info: "What the clock counts." },
            }),
          ]}
        />
      )

      await userEvent.click(screen.getByRole("button", { name: "Actions" }))
      await userEvent.click(
        screen.getByRole("menuitem", { name: "What this info means?" })
      )

      // The card is turned: its other side is reachable now, with a way back.
      // (The dropdown defers its items' onClick past its own close animation.)
      await waitFor(() =>
        expect(
          screen.getByRole("button", { name: "Got it" })
        ).toBeInTheDocument()
      )
      expect(screen.getByText("What the clock counts.")).toBeInTheDocument()
    })

    test("says nothing about info when the widget has none", async () => {
      zeroRender(
        <WidgetContainer widgets={WIDGETS} onRemoveWidget={() => {}} />
      )

      await userEvent.click(
        screen.getAllByRole("button", { name: "Actions" })[0]
      )

      expect(
        screen.queryByRole("menuitem", { name: "What this info means?" })
      ).not.toBeInTheDocument()
    })

    test("offers Edit params only for a widget that declares them", async () => {
      const schema = z.object({
        limit: f0FormField(z.number(), { label: "Limit" }),
      })
      zeroRender(
        <WidgetContainer
          widgets={[
            widget("clock", { paramsSchema: schema, params: { limit: 3 } }),
            widget("events"),
          ]}
          onChangeWidgetParams={() => {}}
        />
      )

      const menus = screen.getAllByRole("button", { name: "Actions" })
      // Only the configurable widget has a menu at all here: the other is
      // offered neither params nor removal.
      expect(menus).toHaveLength(1)

      await userEvent.click(menus[0])
      expect(
        screen.getByRole("menuitem", { name: "Edit params" })
      ).toBeInTheDocument()
    })

    test("a widget's OWN actions lead its menu, above the chrome", async () => {
      const onExport = vi.fn()
      zeroRender(
        <WidgetContainer
          widgets={[
            widget("events", {
              header: { title: "events", info: "What these events are." },
              actions: [{ label: "Export as CSV", onClick: onExport }],
            }),
          ]}
          onRemoveWidget={() => {}}
        />
      )

      await userEvent.click(screen.getByRole("button", { name: "Actions" }))

      // The widget's own item first, then what every widget carries, and the
      // destructive one last.
      expect(
        screen.getAllByRole("menuitem").map((i) => i.textContent?.trim())
      ).toEqual(["Export as CSV", "What this info means?", "Remove widget"])

      await userEvent.click(
        screen.getByRole("menuitem", { name: "Export as CSV" })
      )
      await waitFor(() => expect(onExport).toHaveBeenCalled())
    })

    test("its actions show even where the column forbids arranging", async () => {
      zeroRender(
        <WidgetContainer
          widgets={[
            widget("events", {
              actions: [{ label: "Mark all as read", onClick: () => {} }],
            }),
          ]}
          disableEdition
          onRemoveWidget={() => {}}
        />
      )

      await userEvent.click(screen.getByRole("button", { name: "Actions" }))

      // What the widget DOES is not arranging chrome — only removal is.
      expect(
        screen.getByRole("menuitem", { name: "Mark all as read" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("menuitem", { name: "Remove widget" })
      ).not.toBeInTheDocument()
    })

    test("a LOCKED widget can still be configured, just not removed", async () => {
      const schema = z.object({
        limit: f0FormField(z.number(), { label: "Limit" }),
      })
      zeroRender(
        <WidgetContainer
          widgets={[
            widget("clock", {
              locked: true,
              paramsSchema: schema,
              params: { limit: 3 },
            }),
          ]}
          onRemoveWidget={() => {}}
          onChangeWidgetParams={() => {}}
        />
      )

      await userEvent.click(screen.getByRole("button", { name: "Actions" }))

      expect(
        screen.getByRole("menuitem", { name: "Edit params" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("menuitem", { name: "Remove widget" })
      ).not.toBeInTheDocument()
    })

    describe("the params dialog's preview", () => {
      const schema = z.object({
        limit: f0FormField(z.number(), { label: "Limit" }),
      })
      const configurable = widget("clock", {
        paramsSchema: schema,
        params: { limit: 3 },
      })
      /** Slots the plain widget never has, so a preview can be told apart. */
      const rebuilt = (_: HomeWidgetItem, params: WidgetParams) => ({
        ...configurable,
        slots: [
          {
            visualization: "indicators",
            params: {
              items: [{ label: "Showing", content: `${params.limit} rows` }],
            },
          },
        ],
      })
      const openParams = async () => {
        await userEvent.click(screen.getByRole("button", { name: "Actions" }))
        await userEvent.click(
          screen.getByRole("menuitem", { name: "Edit params" })
        )
      }

      test("is the widget the app REBUILDS, drawn by the column itself", async () => {
        zeroRender(
          <WidgetContainer
            widgets={[configurable]}
            onChangeWidgetParams={() => {}}
            rebuildWidget={rebuilt}
          />
        )

        // Nothing rebuilt while the dialog is shut.
        expect(screen.queryByText("Showing")).not.toBeInTheDocument()

        await openParams()

        // The slots follow the params — and they are drawn through the same
        // `SlotWidget` the column uses, so the preview cannot drift from it.
        await waitFor(() =>
          expect(screen.getByText("Showing")).toBeInTheDocument()
        )
        expect(screen.getByText("3 rows")).toBeInTheDocument()
      })

      test("prefers rebuildWidget over the deprecated render function", async () => {
        zeroRender(
          <WidgetContainer
            widgets={[configurable]}
            onChangeWidgetParams={() => {}}
            rebuildWidget={rebuilt}
            renderWidgetPreview={() => <p>hand-rendered</p>}
          />
        )

        await openParams()

        await waitFor(() =>
          expect(screen.getByText("Showing")).toBeInTheDocument()
        )
        expect(screen.queryByText("hand-rendered")).not.toBeInTheDocument()
      })
    })
  })

  describe("dragging", () => {
    test("is not offered without onReorder", () => {
      const { container } = zeroRender(<WidgetContainer widgets={WIDGETS} />)

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })

    test("is not offered for a single widget", () => {
      const { container } = zeroRender(
        <WidgetContainer widgets={[widget("clock")]} onReorder={() => {}} />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })

    test("needs no mode: with onReorder the widgets are draggable as they are", () => {
      const { container } = zeroRender(
        <WidgetContainer widgets={WIDGETS} onReorder={() => {}} />
      )

      // Each draggable wrapper carries the grab cursor.
      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(2)
    })

    test("skips the locked widget", () => {
      const { container } = zeroRender(
        <WidgetContainer
          widgets={[
            widget("clock", { locked: true }),
            widget("events"),
            widget("tasks"),
          ]}
          onReorder={() => {}}
        />
      )

      // The two free cards carry the grab cursor; the pinned one does not.
      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(2)
    })

    /**
     * A COLUMN WITH ONE FREE CARD HAS ONE LEGAL ORDER. Its card used to get the
     * grab cursor and a drag that could only ever end where it began — the pins
     * cannot give up their slots, so there was nowhere for it to go.
     */
    test("is not offered when only one widget can move", () => {
      const { container } = zeroRender(
        <WidgetContainer
          widgets={[
            widget("clock", { locked: true }),
            widget("payroll", { locked: true }),
            widget("events"),
          ]}
          onReorder={() => {}}
        />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })

    test("is not offered in a disableEdition column", () => {
      const { container } = zeroRender(
        <WidgetContainer
          widgets={WIDGETS}
          disableEdition
          onReorder={() => {}}
        />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
    })

    test("draws no drag handle — the whole card is the grip", () => {
      const { container } = zeroRender(
        <WidgetContainer widgets={WIDGETS} onReorder={() => {}} />
      )

      // The f0 `Widget`'s handle marks itself for gridstack; nothing here asks
      // for it.
      expect(container.querySelectorAll("[data-gs-handle]")).toHaveLength(0)
    })
  })

  describe("virtualization", () => {
    beforeEach(() => mockLayout({ viewport: 400, card: 200 }))
    afterEach(() => vi.restoreAllMocks())

    test("mounts only the widgets in view, not the hundred behind them", () => {
      const widgets = manyWidgets(100)
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer
            widgets={widgets}
            virtualized={{ estimateHeight: 200 }}
            onReorder={() => {}}
          />
        </Scroller>
      )

      const mounted = mountedIds(container)
      // A handful, from the top: the column is scrolled to 0, so the window is
      // the two cards a 400px viewport holds and the overscan past them.
      expect(mounted.length).toBeGreaterThan(0)
      expect(mounted.length).toBeLessThan(widgets.length)
      expect(mounted[0]).toBe("widget-0")
      expect(mounted).not.toContain("widget-99")
      expect(screen.queryByText("widget-99")).not.toBeInTheDocument()
    })

    test("holds the space of the widgets it did not mount", () => {
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer
            widgets={manyWidgets(100)}
            virtualized={{ estimateHeight: 200 }}
            onReorder={() => {}}
          />
        </Scroller>
      )

      // 100 cards of 200px, 24px apart — the whole column, so the scrollbar
      // describes all of it and not the four cards that are mounted.
      expect(listOf(container)?.style.height).toBe(`${100 * 200 + 99 * 24}px`)
    })

    test("places each mounted card where its absent neighbours would have", () => {
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer
            widgets={manyWidgets(100)}
            virtualized={{ estimateHeight: 200 }}
            onReorder={() => {}}
          />
        </Scroller>
      )

      const tops = [
        ...container.querySelectorAll<HTMLElement>("[data-index]"),
      ].map((el) => el.style.top)
      // 200px cards, 24px apart, from the top of the list.
      expect(tops.slice(0, 3)).toEqual(["0px", "224px", "448px"])
    })

    test("mounts them all below the threshold — a short column gains nothing", () => {
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer
            widgets={manyWidgets(4)}
            virtualized={{ threshold: 5 }}
            onReorder={() => {}}
          />
        </Scroller>
      )

      expect(mountedIds(container)).toHaveLength(4)
    })

    test("mounts them all with no scroll region to be clipped to", () => {
      const { container } = zeroRender(
        <WidgetContainer
          widgets={manyWidgets(100)}
          virtualized
          onReorder={() => {}}
        />
      )

      expect(mountedIds(container)).toHaveLength(100)
    })

    test("mounts ONLY the widget a panel floats — it is all there is to see", () => {
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer
            widgets={manyWidgets(100)}
            virtualized
            // The floating panel's filter. Unvirtualized this hides the other 99
            // and keeps them mounted; virtualized, they are already unmounted the
            // moment they scroll away, so there is nothing to preserve by keeping
            // them.
            visibleWidgetId="widget-80"
            onReorder={() => {}}
          />
        </Scroller>
      )

      expect(mountedIds(container)).toEqual(["widget-80"])
      expect(screen.getAllByText("widget-80").length).toBeGreaterThan(0)
    })

    test("an unvirtualized container still keeps every widget mounted for it", () => {
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer
            widgets={manyWidgets(100)}
            visibleWidgetId="widget-80"
            onReorder={() => {}}
          />
        </Scroller>
      )

      expect(mountedIds(container)).toHaveLength(100)
    })

    test("is off by default — nothing changes for a column that did not ask", () => {
      const { container } = zeroRender(
        <Scroller>
          <WidgetContainer widgets={manyWidgets(100)} onReorder={() => {}} />
        </Scroller>
      )

      expect(mountedIds(container)).toHaveLength(100)
    })
  })
})
