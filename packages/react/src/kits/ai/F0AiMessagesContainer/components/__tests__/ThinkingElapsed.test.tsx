import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, screen, zeroRender as render } from "@/testing/test-utils"

import { Thinking } from "../Thinking"
import { ThinkingElapsed } from "../ThinkingElapsed"

const START = new Date("2026-01-01T10:00:00Z").getTime()

/**
 * Land in the MIDDLE of `seconds`, never on its edge. The rendered integer is
 * `Math.floor(elapsed / 1000)`, which flips exactly on the tick — stopping
 * there makes the assertion a coin flip under a loaded suite.
 */
const advanceTo = (seconds: number) =>
  act(() => {
    vi.advanceTimersByTime(seconds * 1000 + 500 - (Date.now() - START))
  })

const advanceBy = (ms: number) =>
  act(() => {
    vi.advanceTimersByTime(ms)
  })

describe("ThinkingElapsed", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(START)
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it("renders nothing before the first whole second", () => {
    // A turn that answers instantly would otherwise flash "0s".
    const { container } = render(<ThinkingElapsed startedAt={START} />)
    expect(container).toBeEmptyDOMElement()

    advanceBy(900)
    expect(container).toBeEmptyDOMElement()
  })

  it("counts up once a second", () => {
    render(<ThinkingElapsed startedAt={START} />)
    advanceTo(13)
    expect(screen.getByText("13s")).toBeInTheDocument()
  })

  it("switches to minutes past sixty seconds", () => {
    render(<ThinkingElapsed startedAt={START} />)
    advanceTo(125)
    expect(screen.getByText("2m 5s")).toBeInTheDocument()
  })

  it("renders nothing without a clock", () => {
    const { container } = render(<ThinkingElapsed startedAt={null} />)
    advanceBy(5_000)
    expect(container).toBeEmptyDOMElement()
  })

  it("stops ticking once unmounted", () => {
    const { unmount } = render(<ThinkingElapsed startedAt={START} />)
    advanceBy(2_000)
    unmount()
    // A leaked interval would keep calling setState on an unmounted tree.
    expect(() => advanceBy(10_000)).not.toThrow()
    expect(vi.getTimerCount()).toBe(0)
  })

  it("is hidden from assistive tech", () => {
    // Announcing a new number every second would make the turn unusable with
    // a screen reader; the spinner already conveys "still working".
    const { container } = render(<ThinkingElapsed startedAt={START} />)
    advanceTo(3)
    expect(container.querySelector("[aria-hidden]")).toBeInTheDocument()
  })
})

describe("Thinking — where the counter goes", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(START)
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  const titles = ["Reading the pipeline", "Comparing departments"]

  it("shows the counter on the executing step and nowhere else", () => {
    render(<Thinking titles={titles} inProgress startedAt={START} />)
    advanceTo(8)

    // One counter in the whole group, and it sits on the last step — the one
    // carrying the spinner.
    expect(screen.getAllByText("8s")).toHaveLength(1)

    const rows = screen.getByText("Comparing departments").closest("div")
    expect(rows?.textContent).toContain("8s")
    expect(
      screen.getByText("Reading the pipeline").closest("div")?.textContent
    ).not.toContain("8s")
  })

  it("drops the counter once the agent is writing", () => {
    // Every step is `completed` then, so no item is active to carry it.
    render(<Thinking titles={titles} inProgress isWriting startedAt={START} />)
    advanceTo(8)
    expect(screen.queryByText("8s")).not.toBeInTheDocument()
  })

  it("shows no counter on a finished turn", () => {
    render(<Thinking titles={titles} inProgress={false} startedAt={null} />)
    advanceTo(8)
    expect(screen.queryByText(/\d+s$/)).not.toBeInTheDocument()
  })
})
