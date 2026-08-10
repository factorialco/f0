import { fireEvent } from "@testing-library/react"
import { beforeEach, describe, expect, test } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { useScrollFade } from "./useScrollFade"

/**
 * jsdom gives every element a zero layout, so scrollability has to be faked:
 * these define the three states a scroll region can be in and let the hook read
 * them exactly as it would in a browser.
 */
const sizes = { scrollHeight: 0, clientHeight: 0 }
let scrollTop = 0

const Probe = () => {
  const fade = useScrollFade()
  return (
    <div ref={fade.ref} data-testid="region" style={fade.style}>
      content
    </div>
  )
}

const mask = () => screen.getByTestId("region").style.maskImage

const setup = (next: {
  scrollHeight: number
  clientHeight: number
  scrollTop: number
}) => {
  sizes.scrollHeight = next.scrollHeight
  sizes.clientHeight = next.clientHeight
  scrollTop = next.scrollTop
  return zeroRender(<Probe />)
}

beforeEach(() => {
  // Element geometry is read-only in jsdom, so it is patched on the prototype.
  Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
    configurable: true,
    get: () => sizes.scrollHeight,
  })
  Object.defineProperty(HTMLElement.prototype, "clientHeight", {
    configurable: true,
    get: () => sizes.clientHeight,
  })
  Object.defineProperty(HTMLElement.prototype, "scrollTop", {
    configurable: true,
    get: () => scrollTop,
    set: (value: number) => {
      scrollTop = value
    },
  })
})

describe("useScrollFade", () => {
  test("content that fits is not masked at all", () => {
    setup({ scrollHeight: 100, clientHeight: 100, scrollTop: 0 })

    expect(mask()).toBe("")
  })

  test("at the top, only the bottom fades — nothing is hidden above yet", () => {
    setup({ scrollHeight: 500, clientHeight: 100, scrollTop: 0 })

    expect(mask()).toContain("black 0")
    expect(mask()).toContain("transparent 100%")
  })

  test("mid-scroll, both ends fade", () => {
    setup({ scrollHeight: 500, clientHeight: 100, scrollTop: 200 })
    const region = screen.getByTestId("region")

    fireEvent.scroll(region)

    expect(mask()).toContain("transparent 0")
    expect(mask()).toContain("transparent 100%")
  })

  test("at the bottom, the bottom fade is gone — there is nothing more to hint at", () => {
    setup({ scrollHeight: 500, clientHeight: 100, scrollTop: 400 })
    const region = screen.getByTestId("region")

    fireEvent.scroll(region)

    expect(mask()).toContain("transparent 0")
    expect(mask()).toContain("black 100%")
    expect(mask()).not.toContain("transparent 100%")
  })
})
