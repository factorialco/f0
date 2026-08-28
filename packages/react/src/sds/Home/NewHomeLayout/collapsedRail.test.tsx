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
