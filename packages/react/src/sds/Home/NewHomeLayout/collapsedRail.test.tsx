import { beforeEach, describe, expect, test, vi } from "vitest"

import { Calendar, Clock } from "@/icons/app"
import {
  act,
  fireEvent,
  screen,
  userEvent,
  zeroRender,
} from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { NewHomeLayout } from "./index"

/**
 * WHAT THE COLLAPSED RAIL MUST NOT DO ON ITS OWN.
 *
 * Collapsed, the rail is a strip of 40px glyphs on the layout's right edge with
 * one card floating out of whichever one you point at. Both of the things tested
 * here were that presentation answering a gesture nobody made: a card you could
 * DRAG though it had no visible neighbours to reorder against, and a panel that
 * opened for a pointer merely CROSSING the strip on its way to the AI chat —
 * which docks against that same edge.
 */

/** The layout decides everything responsive from its own measured width. */
let layoutWidth = 1400

/**
 * Every live ResizeObserver callback, so a test can act like the box resized.
 *
 * Not only the layout's: an arrangeable column brings dnd-kit, which observes
 * boxes of its own and reads the ENTRIES it is handed — hence the shape.
 */
let resizeCallbacks: Array<(entries: ResizeObserverEntry[]) => void> = []

const resizeLayoutTo = (width: number) => {
  layoutWidth = width
  act(() => resizeCallbacks.forEach((notify) => notify([])))
}

const widget = (id: string, extra: Partial<HomeWidgetItem> = {}) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [],
  ...extra,
})

/** Three cards, none pinned: a rail with a real arrangement to make. */
const RAIL = [widget("clock"), widget("events"), widget("tasks")]

/**
 * A body only the FLOATING CARD can show, so "is the panel out" is a question
 * about one string. The glyphs carry the widget's title, never its body.
 */
const renderLayout = (width: number) => {
  layoutWidth = width
  return zeroRender(
    <NewHomeLayout
      rightWidgets={RAIL}
      renderWidget={(item) => <div>{item.id} body</div>}
      onReorderWidgets={() => {}}
    >
      <p>feed</p>
    </NewHomeLayout>
  )
}

const glyph = (id = "clock") => screen.getByRole("button", { name: id })
const card = (id = "clock") => screen.getByText(`${id} body`)
/** Every card the column is offering as a drag surface. */
const grabbable = (container: HTMLElement) =>
  container.querySelectorAll(".cursor-grab").length

/**
 * LONGER THAN THE STRIP'S HOVER INTENT (`PANEL_OPEN_MS`) — how long a pointer
 * has to rest on a glyph before its widget floats. Nothing is pointed at here,
 * only waited out, so a test that has already moved the pointer on is asserting
 * that the strip let the crossing go.
 */
const holdHover = () =>
  act(() => new Promise<void>((resolve) => setTimeout(resolve, 250)))

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => layoutWidth,
  })
  resizeCallbacks = []
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: (entries: ResizeObserverEntry[]) => void) {
        resizeCallbacks.push(callback)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  )
})

describe("the collapsed rail's hover intent", () => {
  test("floats the widget for a hover that is HELD", async () => {
    renderLayout(1000)

    await userEvent.hover(glyph())
    await holdHover()

    expect(card()).toBeVisible()
    expect(glyph()).toHaveAttribute("aria-expanded", "true")
  })

  test("floats nothing for a pointer that is only PASSING", async () => {
    renderLayout(1000)

    // Entered and gone — the two events a crossing leaves behind, with no rest
    // in between.
    fireEvent.mouseEnter(glyph())
    fireEvent.mouseLeave(glyph())
    await holdHover()

    expect(card()).not.toBeVisible()
    expect(glyph()).toHaveAttribute("aria-expanded", "false")
  })

  test("abandons a hover the pointer has taken out of the strip", async () => {
    renderLayout(1000)

    await userEvent.hover(glyph())
    // On out of the strip entirely: the trip to the chat, or back from it.
    await userEvent.unhover(glyph())
    await holdHover()

    expect(card()).not.toBeVisible()
  })

  test("answers a CLICK at once — it cannot be an accident", async () => {
    renderLayout(1000)

    await userEvent.click(glyph())

    expect(card()).toBeVisible()
  })

  test("leaves one glyph's hover to that glyph", async () => {
    renderLayout(1000)

    // Passed on the way down the strip, then rested on the one that was wanted.
    fireEvent.mouseEnter(glyph())
    fireEvent.mouseLeave(glyph())
    await userEvent.hover(glyph("tasks"))
    await holdHover()

    expect(card("tasks")).toBeVisible()
    expect(card()).not.toBeVisible()
  })
})

describe("dragging the rail's widgets", () => {
  test("is offered while the rail is a column", () => {
    const { container } = renderLayout(1400)

    expect(grabbable(container)).toBe(3)
  })

  test("is withdrawn once it collapses, floating card included", async () => {
    const { container } = renderLayout(1400)

    resizeLayoutTo(1000)
    await userEvent.hover(glyph())
    await holdHover()

    // The card is out over the feed — and there is nothing to grab on it.
    expect(card()).toBeVisible()
    expect(grabbable(container)).toBe(0)
  })

  test("comes back when the rail expands again", () => {
    const { container } = renderLayout(1400)

    resizeLayoutTo(1000)
    resizeLayoutTo(1400)

    expect(grabbable(container)).toBe(3)
  })
})
