import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useHeaderCollapse } from "@/lib/providers/headerCollapse"
import { act, zeroRender as render, screen } from "@/testing/test-utils"

import { Page } from "../index"

/**
 * jsdom does no layout, so the three numbers the driver reads are all 0. Shadow
 * them on the prototype with getters over a mutable object, which is the only
 * way to have them already set while the driver takes its first read on mount.
 */
const metrics = { scrollTop: 0, scrollHeight: 0, clientHeight: 0 }
const measured = ["scrollTop", "scrollHeight", "clientHeight"] as const

beforeEach(() => {
  metrics.scrollTop = 0
  metrics.scrollHeight = 0
  metrics.clientHeight = 0

  measured.forEach((key) => {
    Object.defineProperty(HTMLDivElement.prototype, key, {
      configurable: true,
      get: () => metrics[key],
    })
  })
})

afterEach(() => {
  measured.forEach((key) => {
    delete (HTMLDivElement.prototype as Partial<Record<typeof key, number>>)[
      key
    ]
  })
})

/** A page tall enough to be worth condensing: 400px of scroll range. */
const tall = () => {
  metrics.scrollHeight = 1000
  metrics.clientHeight = 600
}

/** A page barely taller than its viewport, under the 96px collapse distance. */
const short = () => {
  metrics.scrollHeight = 640
  metrics.clientHeight = 600
}

const scrollTo = (top: number) => {
  metrics.scrollTop = top
  const body = document.querySelector(".overflow-auto")
  act(() => {
    body?.dispatchEvent(new Event("scroll"))
  })
}

/**
 * Counts scroll listeners on the scrolling body only. The spy has to sit on the
 * prototype to catch a listener attached during the render it is watching, and
 * the provider tree the test renderer wraps around every story attaches scroll
 * listeners of its own, so the calls are filtered back down to the body.
 */
const spyOnBodyListeners = (
  method: "addEventListener" | "removeEventListener"
) => {
  const spy = vi.spyOn(HTMLDivElement.prototype, method)

  return {
    scrollListenerCount: () =>
      spy.mock.calls.filter(([event], index) => {
        const target = spy.mock.contexts[index] as HTMLElement | undefined
        return (
          event === "scroll" && !!target?.classList.contains("overflow-auto")
        )
      }).length,
    restore: () => spy.mockRestore(),
  }
}

/** Stands in for a header that consumes the collapse, the way BaseHeader will. */
const CollapsingHeader = () => (
  <span data-testid="header">{useHeaderCollapse()}</span>
)

/** The same consumer, but rendered down in the body rather than in the slot. */
const BodyHeader = () => <span data-testid="body">{useHeaderCollapse()}</span>

const progressOf = () => screen.getByTestId("header").textContent

const renderPage = (header: React.ReactNode = <CollapsingHeader />) =>
  render(
    <Page header={header}>
      <div>Body</div>
    </Page>
  )

describe("Page collapse driver", () => {
  it("turns the scroll position into progress over the collapse distance", () => {
    renderPage()
    tall()

    scrollTo(48)
    expect(progressOf()).toBe("0.5")

    scrollTo(96)
    expect(progressOf()).toBe("1")

    scrollTo(200)
    expect(progressOf()).toBe("1")

    scrollTo(0)
    expect(progressOf()).toBe("0")
  })

  it("watches nothing until a header registers", () => {
    const listen = spyOnBodyListeners("addEventListener")

    renderPage(<span>Just breadcrumbs and tabs</span>)

    // A page carrying only breadcrumbs and tabs has nothing to condense, so it
    // does not measure and does not listen.
    expect(listen.scrollListenerCount()).toBe(0)

    listen.restore()
  })

  it("watches the scroll once a header registers", () => {
    const listen = spyOnBodyListeners("addEventListener")

    renderPage()

    expect(listen.scrollListenerCount()).toBeGreaterThan(0)

    listen.restore()
  })

  it("leaves a page that barely scrolls alone", () => {
    renderPage()
    short()

    // Condensing here would give the body more height than the content needs,
    // so there would be nothing left to scroll.
    scrollTo(20)
    expect(progressOf()).toBe("0")

    scrollTo(40)
    expect(progressOf()).toBe("0")
  })

  it("keeps following the scroll after the body grows underneath it", () => {
    renderPage()
    tall()

    scrollTo(48)
    expect(progressOf()).toBe("0.5")

    // The header gave up height, so the body grew and the scroll range shrank
    // below the collapse distance. Re-reading the range here is what makes the
    // header snap open, hand the height back, and start over.
    metrics.scrollHeight = 640
    metrics.clientHeight = 600

    scrollTo(72)
    expect(progressOf()).toBe("0.75")

    scrollTo(96)
    expect(progressOf()).toBe("1")
  })

  it("decides again once the reader is back at the top", () => {
    renderPage()
    tall()

    scrollTo(96)
    expect(progressOf()).toBe("1")

    // At the top the header is open again, so the range means what it says.
    short()
    scrollTo(0)
    expect(progressOf()).toBe("0")

    scrollTo(48)
    expect(progressOf()).toBe("0")
  })

  it("engages when late content makes a short page tall", () => {
    renderPage()
    short()

    scrollTo(20)
    expect(progressOf()).toBe("0")

    // Data arrived. Nothing has condensed yet, so the new range is honest.
    tall()
    scrollTo(48)
    expect(progressOf()).toBe("0.5")
  })

  it("condenses on mount when a route change restored the scroll", () => {
    metrics.scrollTop = 200
    metrics.scrollHeight = 1000
    metrics.clientHeight = 600

    renderPage()

    expect(progressOf()).toBe("1")
  })

  it("provides the progress to the header slot only", () => {
    tall()

    render(
      <Page header={<CollapsingHeader />}>
        <BodyHeader />
      </Page>
    )
    scrollTo(96)

    // A header rendered inside the page body scrolls away rather than staying
    // put, so condensing it would mean nothing.
    expect(progressOf()).toBe("1")
    expect(screen.getByTestId("body").textContent).toBe("0")
  })

  it("follows the scroller the content brought with it", () => {
    // The normal case, not the exception. `StandardLayout` renders its own
    // `overflow-auto` section, and so does the monolith's page body, so the
    // element that actually scrolls is a descendant rather than the body itself.
    // `scroll` does not bubble, which is why the listener captures.
    render(
      <Page header={<CollapsingHeader />}>
        <div style={{ overflowY: "auto" }} data-testid="content">
          <div>Body</div>
        </div>
      </Page>
    )
    tall()

    metrics.scrollTop = 96
    act(() => {
      screen.getByTestId("content").dispatchEvent(new Event("scroll"))
    })

    expect(progressOf()).toBe("1")
  })

  it("ignores a scroll area nested inside the page's own", () => {
    render(
      <Page header={<CollapsingHeader />}>
        <div style={{ overflowY: "auto" }}>
          <div style={{ overflowY: "auto" }} data-testid="table">
            Rows
          </div>
        </div>
      </Page>
    )
    tall()

    metrics.scrollTop = 96
    act(() => {
      screen.getByTestId("table").dispatchEvent(new Event("scroll"))
    })

    // Scrolling a table inside the page is not scrolling the page, so the header
    // stays where it is.
    expect(progressOf()).toBe("0")
  })

  it("stops watching on unmount", () => {
    const forget = spyOnBodyListeners("removeEventListener")

    const { unmount } = renderPage()
    unmount()

    expect(forget.scrollListenerCount()).toBeGreaterThan(0)

    forget.restore()
  })

  it("renders the header slot and the body in order", () => {
    const { container } = renderPage(<span>Header</span>)

    expect(container.querySelector(".overflow-auto")?.textContent).toBe("Body")
    expect(screen.getByText("Header")).toBeDefined()
  })
})

describe("Page collapse driver and reduced motion", () => {
  /** Replaces the global stub with one this test can flip and fire. */
  const stubMotionPreference = (reduce: boolean) => {
    const listeners = new Set<() => void>()
    const query = {
      matches: reduce,
      media: "(prefers-reduced-motion: reduce)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: (_: string, listener: () => void) =>
        listeners.add(listener),
      removeEventListener: (_: string, listener: () => void) =>
        listeners.delete(listener),
      dispatchEvent: vi.fn(),
    }

    vi.stubGlobal("matchMedia", () => query)

    return {
      set: (next: boolean) => {
        query.matches = next
        act(() => {
          listeners.forEach((listener) => listener())
        })
      },
    }
  }

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("does not condense for a reader who prefers reduced motion", () => {
    stubMotionPreference(true)

    renderPage()
    tall()

    scrollTo(96)
    expect(progressOf()).toBe("0")
  })

  it("starts condensing if the preference is turned off mid-session", () => {
    const motion = stubMotionPreference(true)

    renderPage()
    tall()

    scrollTo(96)
    expect(progressOf()).toBe("0")

    motion.set(false)

    expect(progressOf()).toBe("1")
  })
})
