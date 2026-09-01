import { beforeEach, describe, expect, test, vi } from "vitest"

import { Calendar, Clock } from "@/icons/app"
import {
  act,
  fireEvent,
  screen,
  userEvent,
  waitFor,
  zeroRender,
} from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { NewHomeLayout } from "./index"

let layoutWidth = 1400

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

const RAIL = [widget("clock"), widget("events"), widget("tasks")]

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
const grabbable = (container: HTMLElement) =>
  container.querySelectorAll(".cursor-grab").length

const holdHover = () =>
  act(() => new Promise<void>((resolve) => setTimeout(resolve, 250)))
/**
 * The panel's hover bridge — the strip's column, covered so the gap between a
 * glyph and its widget is not a way out. `z-10` tells it from the page's own
 * background wash, which is the layout's other `aria-hidden` absolute box.
 */
const bridgeIn = (container: HTMLElement) =>
  container.querySelector<HTMLElement>("[aria-hidden].absolute.z-10")

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

    fireEvent.mouseEnter(glyph())
    fireEvent.mouseLeave(glyph())
    await holdHover()

    expect(card()).not.toBeVisible()
    expect(glyph()).toHaveAttribute("aria-expanded", "false")
  })

  test("abandons a hover the pointer has taken out of the strip", async () => {
    renderLayout(1000)

    await userEvent.hover(glyph())
    await userEvent.unhover(glyph())
    await holdHover()

    expect(card()).not.toBeVisible()
  })

  test("answers a CLICK at once — it cannot be an accident", async () => {
    renderLayout(1000)

    await userEvent.click(glyph())

    expect(card()).toBeVisible()
  })

  /**
   * THE GAP BETWEEN THE GLYPH AND ITS WIDGET IS NOT A WAY OUT. The panel stands
   * clear of the strip, and that clearance used to be unhoverable ground: a
   * pointer crossing it slowly — which is what a pointer aiming at something
   * does — spent longer there than the leave delay, and the widget it was on its
   * way to closed in front of it. `NewHomeLayout`'s bridge covers that ground
   * with the panel's own hover, so the only thing that closes a panel is leaving
   * the rail.
   */
  test("holds the panel while the pointer crosses to it", async () => {
    const { container } = renderLayout(1000)

    await userEvent.hover(glyph())
    await holdHover()
    const bridge = bridgeIn(container)
    expect(bridge).not.toBeNull()

    await userEvent.unhover(glyph())
    await userEvent.hover(bridge!)
    // Twice over the window the panel used to close inside — the leave delay and
    // the close animation it hides behind.
    await holdHover()
    await holdHover()

    expect(card()).toBeVisible()
  })

  test("and closes once the pointer leaves the rail altogether", async () => {
    const { container } = renderLayout(1000)

    await userEvent.hover(glyph())
    await holdHover()
    const bridge = bridgeIn(container)

    await userEvent.unhover(glyph())
    await userEvent.hover(bridge!)
    await userEvent.unhover(bridge!)

    // The panel is put back before it is dropped, so this is the leave delay AND
    // the close it plays after it.
    await waitFor(() => expect(card()).not.toBeVisible())
  })

  test("leaves one glyph's hover to that glyph", async () => {
    renderLayout(1000)

    fireEvent.mouseEnter(glyph())
    fireEvent.mouseLeave(glyph())
    await userEvent.hover(glyph("tasks"))
    await holdHover()

    expect(card("tasks")).toBeVisible()
    expect(card()).not.toBeVisible()
  })
})

describe("the collapse's gesture", () => {
  /**
   * The card's own motion box — the one `WidgetMotion` writes the stow onto. Found
   * by the opacity it carries rather than by its position in the tree, which is
   * the one thing about a widget's wrapping this file should not have an opinion
   * about.
   */
  const motionBoxOf = (id = "clock") =>
    card(id).closest<HTMLElement>("[style*='opacity']")

  /**
   * THE CARDS FADE WHERE THEY STAND. Each one used to scale down onto its own
   * glyph, which meant a whole widget drawn at a tenth of its width — every
   * heading and every row rasterized at a size nothing in it was laid out for —
   * sliding across the column it was leaving. The strip's glyphs sliding in over a
   * plain fade is the gesture now, so what this holds is that the collapse puts NO
   * transform on a card at all.
   */
  test("takes the cards out on a fade, with nothing scaled onto the glyph", async () => {
    renderLayout(1400)

    await userEvent.click(screen.getByLabelText("Collapse widgets panel"))

    await waitFor(() => expect(motionBoxOf()?.style.opacity).toBe("0"))
    expect(motionBoxOf()?.style.transform).toBe("none")
  })

  /** …and are simply back when it opens again, by the same one value. */
  test("brings them back the same way", async () => {
    renderLayout(1400)

    await userEvent.click(screen.getByLabelText("Collapse widgets panel"))
    await waitFor(() => expect(motionBoxOf()?.style.opacity).toBe("0"))
    await userEvent.click(screen.getByLabelText("Expand widgets panel"))

    await waitFor(() => expect(motionBoxOf()?.style.opacity).toBe("1"))
    expect(motionBoxOf()?.style.transform).toBe("none")
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
