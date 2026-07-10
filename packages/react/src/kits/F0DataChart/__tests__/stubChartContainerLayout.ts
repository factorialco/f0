import { afterAll, beforeAll } from "vitest"

/**
 * jsdom has no layout engine, so every element measures 0×0 — and
 * `useEChartsInstance` deliberately defers `echarts.init` until the
 * container has real dimensions (initializing at 0-size warns and paints a
 * blank canvas in real browsers). Stub non-zero client dimensions so charts
 * initialize in tests the way they do in a laid-out browser.
 */
export function stubChartContainerLayout(width = 800, height = 320) {
  let originalWidth: PropertyDescriptor | undefined
  let originalHeight: PropertyDescriptor | undefined

  beforeAll(() => {
    originalWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "clientWidth"
    )
    originalHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      "clientHeight"
    )
    Object.defineProperty(HTMLElement.prototype, "clientWidth", {
      configurable: true,
      get: () => width,
    })
    Object.defineProperty(HTMLElement.prototype, "clientHeight", {
      configurable: true,
      get: () => height,
    })
  })

  afterAll(() => {
    if (originalWidth) {
      Object.defineProperty(HTMLElement.prototype, "clientWidth", originalWidth)
    }
    if (originalHeight) {
      Object.defineProperty(
        HTMLElement.prototype,
        "clientHeight",
        originalHeight
      )
    }
  })
}
