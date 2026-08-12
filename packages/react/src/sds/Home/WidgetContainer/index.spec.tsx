import { describe, expect, test, vi } from "vitest"
import { z } from "zod"

import { Calendar, Clock } from "@/icons/app"
import { f0FormField } from "@/patterns/F0Form"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
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
          widgets={[widget("clock", { locked: true }), widget("events")]}
          onReorder={() => {}}
        />
      )

      expect(container.querySelectorAll(".cursor-grab")).toHaveLength(1)
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
})
