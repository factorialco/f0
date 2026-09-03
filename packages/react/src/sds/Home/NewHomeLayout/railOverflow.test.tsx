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

const renderLayout = (width: number) => {
  layoutWidth = width
  return zeroRender(
    <NewHomeLayout rightWidgets={[widget("clock"), widget("events")]}>
      <p>feed</p>
    </NewHomeLayout>
  )
}

const railBody = (container: HTMLElement) =>
  [...container.querySelectorAll<HTMLElement>("aside")].find(
    (el) =>
      el.style.gridColumn === "2" &&
      !el.className.includes("pointer-events-none")
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

describe("the rail's overflow", () => {
  test("scrolls down but never sideways", () => {
    const { container } = renderLayout(1400)

    expect(railBody(container)).toHaveClass(
      "overflow-y-auto",
      "overflow-x-hidden"
    )
  })

  test("clips instead, so an oversized widget cannot widen the page", () => {
    const { container } = renderLayout(1600)
    const rail = railBody(container)

    expect(rail.className).not.toMatch(/overflow-x-(auto|scroll|visible)/)
    expect(rail).toHaveClass("overflow-x-hidden")
  })
})
