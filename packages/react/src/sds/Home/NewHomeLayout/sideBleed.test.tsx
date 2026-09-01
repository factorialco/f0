import { beforeEach, describe, expect, test, vi } from "vitest"

import { Calendar, Clock } from "@/icons/app"
import { act, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { NewHomeLayout } from "./index"

let layoutWidth = 1400

let resizeCallbacks: Array<(entries: ResizeObserverEntry[]) => void> = []

const widget = (id: string): HomeWidgetItem => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [],
})

const renderLayout = (width: number, props = {}) => {
  layoutWidth = width
  return zeroRender(
    <NewHomeLayout rightWidgets={[widget("clock")]} {...props}>
      <p>feed</p>
    </NewHomeLayout>
  )
}

const mainColumn = (container: HTMLElement) =>
  [...container.querySelectorAll<HTMLElement>("div")].find(
    (el) => el.style.gridColumn === "1"
  ) as HTMLElement

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
  act(() => resizeCallbacks.forEach((notify) => notify([])))
})

describe("the main column's side bleed", () => {
  test("grows into the page gutter on both sides, content unmoved", () => {
    const { container } = renderLayout(700)
    const main = mainColumn(container)

    expect(main.style.marginLeft).toBe("-24px")
    expect(main.style.paddingLeft).toBe("24px")
    expect(main.style.marginRight).toBe("-24px")
    expect(main.style.paddingRight).toBe("24px")
  })

  test("takes the gutter's width from the layout's own `bleed`", () => {
    const { container } = renderLayout(700, { bleed: 40 })
    const main = mainColumn(container)

    expect(main.style.marginLeft).toBe("-40px")
    expect(main.style.paddingLeft).toBe("40px")
  })

  test("stops at the column gap while the rail has a column", () => {
    const { container } = renderLayout(1000)
    const main = mainColumn(container)

    expect(main.style.marginRight).toBe("-16px")
    expect(main.style.paddingRight).toBe("16px")
    expect(main.style.marginLeft).toBe("-24px")
  })
})
