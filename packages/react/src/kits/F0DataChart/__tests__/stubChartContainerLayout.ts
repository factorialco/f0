import { afterAll, beforeAll } from "vitest"

/** jsdom measures everything 0×0 and `useEChartsInstance` defers init until the container has real dimensions — stub them so charts initialize in tests. */
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
