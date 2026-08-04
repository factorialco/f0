import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useHeaderCollapse } from "@/lib/providers/headerCollapse"
import {
  act,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

import { Page } from "../index"

type Metrics = { scrollTop: number; scrollHeight: number; clientHeight: number }

const flat = (): Metrics => ({
  scrollTop: 0,
  scrollHeight: 0,
  clientHeight: 0,
})

/**
 * jsdom does no layout, so the three numbers the driver reads are all 0. Shadow
 * them on the prototype with getters, which is the only way to have them already
 * set while the driver takes its first read on mount.
 *
 * Per element, not shared. One mutable object for the whole tree would let a
 * driver that measured the wrong element pass every assertion in this file, which
 * is the exact regression a browser had to catch once already: measuring the
 * page's body instead of the scroller inside the content. Elements without their
 * own entry read flat, so an accidental measurement of the wrong one never engages.
 */
const metricsFor = new WeakMap<HTMLElement, Metrics>()

/** The metrics of whichever element scrolls, defaulting to the page's own body. */
const metrics = (element?: HTMLElement | null): Metrics => {
  const target =
    element ?? document.querySelector<HTMLElement>(".overflow-auto")
  if (!target) throw new Error("no element to give metrics to")
  const existing = metricsFor.get(target)
  if (existing) return existing
  const created = flat()
  metricsFor.set(target, created)
  return created
}

const measured = ["scrollTop", "scrollHeight", "clientHeight"] as const

beforeEach(() => {
  measured.forEach((key) => {
    Object.defineProperty(HTMLDivElement.prototype, key, {
      configurable: true,
      get(this: HTMLElement) {
        return metricsFor.get(this)?.[key] ?? 0
      },
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

/** A scroller tall enough to be worth condensing: 400px of range. */
const tall = (element?: HTMLElement) => {
  const own = metrics(element)
  own.scrollHeight = 1000
  own.clientHeight = 600
}

/** A scroller barely taller than its viewport, under the 96px collapse distance. */
const short = (element?: HTMLElement) => {
  const own = metrics(element)
  own.scrollHeight = 640
  own.clientHeight = 600
}

const scrollTo = (top: number, element?: HTMLElement) => {
  const target =
    element ?? document.querySelector<HTMLElement>(".overflow-auto")!
  metrics(target).scrollTop = top
  act(() => {
    target.dispatchEvent(new Event("scroll"))
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
    short()

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
    // The body has to exist before it can be given metrics, and the driver reads
    // on mount, so the metrics are installed against the element the render is
    // about to produce by rendering once and re-rendering into the same container.
    const { container } = renderPage()
    const body = container.querySelector<HTMLElement>(".overflow-auto")!

    tall(body)
    metrics(body).scrollTop = 200
    act(() => {
      body.dispatchEvent(new Event("scroll"))
    })

    expect(progressOf()).toBe("1")
  })

  it("provides the progress to the header slot only", () => {
    render(
      <Page header={<CollapsingHeader />}>
        <BodyHeader />
      </Page>
    )
    tall()
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
    const { container } = render(
      <Page header={<CollapsingHeader />}>
        <div style={{ overflowY: "auto" }} data-testid="content">
          <div>Body</div>
        </div>
      </Page>
    )

    // Only the content's scroller gets a range. The page's own body stays flat,
    // so a driver that measured the body instead would read nothing to scroll and
    // never engage. That is what makes this test able to fail.
    const content = screen.getByTestId("content")
    tall(content)
    expect(
      metrics(container.querySelector<HTMLElement>(".overflow-auto")!)
        .scrollHeight
    ).toBe(0)

    scrollTo(96, content)

    expect(progressOf()).toBe("1")
  })

  it("keeps following the scroller it first accepted, and nothing else", () => {
    // Two sibling scrollers under the body. Whichever moves first is the page;
    // the other must never touch the header, and must never reset the latch by
    // sitting at its own top.
    render(
      <Page header={<CollapsingHeader />}>
        <div style={{ overflowY: "auto" }} data-testid="first">
          Content
        </div>
        <div style={{ overflowY: "auto" }} data-testid="second">
          Aside
        </div>
      </Page>
    )

    const first = screen.getByTestId("first")
    const second = screen.getByTestId("second")
    tall(first)
    tall(second)

    scrollTo(96, first)
    expect(progressOf()).toBe("1")

    // The second one is at its own top. Honouring it would snap the header open
    // in the middle of the page.
    scrollTo(0, second)
    expect(progressOf()).toBe("1")

    scrollTo(48, second)
    expect(progressOf()).toBe("1")
  })

  it("forgets the scroller when the content under it is replaced", async () => {
    const Swappable = ({ which }: { which: "a" | "b" }) => (
      <Page header={<CollapsingHeader />}>
        <div style={{ overflowY: "auto" }} data-testid={which} key={which}>
          Content
        </div>
      </Page>
    )

    const { rerender } = render(<Swappable which="a" />)
    const a = screen.getByTestId("a")
    tall(a)

    scrollTo(96, a)
    expect(progressOf()).toBe("1")

    // A route change swaps the body for a fresh one sitting at its top. Leaving
    // the header condensed over it would be a lie. The reset comes from a
    // MutationObserver, so it lands a microtask later.
    rerender(<Swappable which="b" />)

    await waitFor(() => expect(progressOf()).toBe("0"))
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
    const table = screen.getByTestId("table")
    tall(table)

    scrollTo(96, table)

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
  /**
   * The preference itself comes from `useReducedMotion`, so only its initial
   * value needs stubbing here. Whether that hook notices a mid-session change is
   * the hook's business, not this driver's.
   */
  const preferReducedMotion = () => {
    vi.stubGlobal("matchMedia", (media: string) => ({
      matches: true,
      media,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  }

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("does not condense for a reader who prefers reduced motion", () => {
    preferReducedMotion()

    renderPage()
    tall()

    scrollTo(96)
    expect(progressOf()).toBe("0")
  })

  it("does not even watch the scroll under reduced motion", () => {
    // Stronger than zeroing the progress: there is nothing to zero, because the
    // page never starts listening or measuring in the first place.
    preferReducedMotion()
    const listen = spyOnBodyListeners("addEventListener")

    renderPage()

    expect(listen.scrollListenerCount()).toBe(0)

    listen.restore()
  })
})
