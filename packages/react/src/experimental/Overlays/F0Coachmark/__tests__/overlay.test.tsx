import { userEvent } from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  screen,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { CoachmarkProvider } from "../CoachmarkProvider"
import { coachmarks } from "../imperative"
import type { CoachmarkOptions } from "../types"

const renderApp = () =>
  render(
    <CoachmarkProvider>
      <button id="filters">Filters</button>
      <button id="outside">Outside</button>
    </CoachmarkProvider>
  )

const open = (options: CoachmarkOptions) => {
  act(() => {
    coachmarks.open(options)
  })
}

const blocker = () =>
  document.querySelector<HTMLElement>("[data-f0-coachmark-blocker]")

/** One press on the dimmed page. */
const pressOutside = async () => {
  const shield = blocker()
  if (!shield) throw new Error("no blocker on screen")
  await userEvent.click(shield)
}

describe("coachmark overlay", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  it("is off unless the coachmark asks for it", async () => {
    renderApp()
    open({ targetElement: "#filters", title: "Filters got smarter" })

    await screen.findByRole("dialog")
    expect(blocker()).toBeNull()
  })

  it("shields the page and keeps the coachmark open when it is pressed", async () => {
    const onDismiss = vi.fn()
    renderApp()
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
      onDismiss,
    })
    await screen.findByRole("dialog")

    await pressOutside()

    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(onDismiss).not.toHaveBeenCalled()
    // Hidden from the accessibility tree: it is a shield, not content.
    expect(blocker()).toHaveAttribute("aria-hidden", "true")
  })

  it("wiggles the panel at a press that went nowhere", async () => {
    // jsdom has no `Element.animate`, so the wiggle is stubbed in: what is
    // being tested is that a swallowed press is answered ON THE PANEL, since
    // the page it landed on cannot answer for it.
    const animate = vi.fn()
    Object.defineProperty(Element.prototype, "animate", {
      value: animate,
      configurable: true,
      writable: true,
    })

    renderApp()
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    const dialog = await screen.findByRole("dialog")

    await pressOutside()

    expect(animate).toHaveBeenCalledOnce()
    expect(animate.mock.instances[0]).toBe(dialog)

    Reflect.deleteProperty(Element.prototype, "animate")
  })

  it("gives up after five presses, and reports the abandonment", async () => {
    const onDismiss = vi.fn()
    renderApp()
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
      onDismiss,
    })
    await screen.findByRole("dialog")

    for (let press = 0; press < 4; press++) await pressOutside()
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(onDismiss).not.toHaveBeenCalled()

    await pressOutside()

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
    expect(onDismiss).toHaveBeenCalledOnce()
  })

  it("counts presses across the whole walkthrough, not per step", async () => {
    const onDismiss = vi.fn()
    renderApp()
    open({
      steps: [
        { targetElement: "#filters", title: "First" },
        { targetElement: "#outside", title: "Second" },
      ],
      overlay: true,
      skipAfterOutsideClicks: 2,
      onDismiss,
    })
    await screen.findByRole("dialog")

    await pressOutside()
    await userEvent.click(screen.getByRole("button", { name: "Next" }))
    await waitFor(() =>
      expect(screen.getByRole("dialog")).toHaveAccessibleName("Second")
    )

    await pressOutside()

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    )
    expect(onDismiss).toHaveBeenCalledOnce()
  })

  it("never gives up when the threshold is 0", async () => {
    renderApp()
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
      skipAfterOutsideClicks: 0,
    })
    await screen.findByRole("dialog")

    for (let press = 0; press < 8; press++) await pressOutside()

    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("goes away with the coachmark", async () => {
    renderApp()
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    await screen.findByRole("dialog")
    expect(blocker()).not.toBeNull()

    await userEvent.click(screen.getByRole("button", { name: "Got it" }))

    await waitFor(() => expect(blocker()).toBeNull())
  })
})

/** `prefers-reduced-motion: reduce`, for as long as the returned undo is not called. */
const preferReducedMotion = () => {
  const original = window.matchMedia
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })) as unknown as typeof window.matchMedia
  return () => {
    window.matchMedia = original
  }
}

describe("the handover between two steps", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  it("holds the step it is leaving until the fade is over, on the same panel", async () => {
    renderApp()
    open({
      steps: [
        { targetElement: "#filters", title: "First" },
        { targetElement: "#outside", title: "Second" },
      ],
    })
    const dialog = await screen.findByRole("dialog")

    await userEvent.click(screen.getByRole("button", { name: "Next" }))

    // NOT SWAPPED IN PLACE. The action has been taken and the copy is still the
    // one the reader was reading: the next step is committed further on, while
    // the panel is invisible, so the words never change under their eyes.
    expect(dialog).toHaveAccessibleName("First")

    await waitFor(() =>
      expect(screen.getByRole("dialog")).toHaveAccessibleName("Second")
    )
    // The same panel throughout — it fades, it does not close and reopen.
    expect(screen.getByRole("dialog")).toBe(dialog)
  })

  it("changes step outright for a reader who asked for less motion", async () => {
    const restore = preferReducedMotion()
    try {
      renderApp()
      open({
        steps: [
          { targetElement: "#filters", title: "First" },
          { targetElement: "#outside", title: "Second" },
        ],
      })
      await screen.findByRole("dialog")

      await userEvent.click(screen.getByRole("button", { name: "Next" }))

      // No fade to wait for, so no gap: the copy is already the next step's.
      expect(screen.getByRole("dialog")).toHaveAccessibleName("Second")
    } finally {
      restore()
    }
  })
})

/**
 * `focusTarget` on a step whose whole point is a field: the caret starts in it,
 * so it wears its own focus state instead of being described from outside.
 */
describe("a step that focuses what it points at", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  /** A composer: a field with a row of controls under it, inside one box. */
  const renderComposer = () =>
    render(
      <CoachmarkProvider>
        <div id="composer">
          <textarea aria-label="Ask One" />
          <button>Analyse</button>
        </div>
        <button id="views">Views</button>
      </CoachmarkProvider>
    )

  it("puts the caret in the field inside the target, not on the panel", async () => {
    renderComposer()
    open({
      targetElement: "#composer",
      title: "Let One do it for you",
      focusTarget: true,
    })

    await screen.findByRole("dialog")
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Ask One" })).toHaveFocus()
    )
    // And the way on is still one Tab away, not lost with the focus.
    expect(screen.getByRole("button", { name: "Got it" })).toBeInTheDocument()
  })

  it("keeps focus on the panel for a step that did not ask", async () => {
    renderComposer()
    open({ targetElement: "#composer", title: "Let One do it for you" })

    const dialog = await screen.findByRole("dialog")
    await waitFor(() => expect(dialog).toHaveFocus())
  })

  it("hands focus over per step, not once for the walkthrough", async () => {
    renderComposer()
    open({
      steps: [
        {
          targetElement: "#composer",
          title: "Ask One",
          focusTarget: true,
        },
        { targetElement: "#views", title: "Then save a view" },
      ],
    })
    await screen.findByRole("dialog")
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Ask One" })).toHaveFocus()
    )

    await userEvent.click(screen.getByRole("button", { name: "Next" }))

    // The second step never asked for its element, so the panel takes focus
    // back and the step is announced like any other.
    await waitFor(() =>
      expect(screen.getByRole("dialog")).toHaveAccessibleName(
        "Then save a view"
      )
    )
    await waitFor(() => expect(screen.getByRole("dialog")).toHaveFocus())
  })

  it("falls back to the panel when the target holds nothing to focus", async () => {
    render(
      <CoachmarkProvider>
        <p id="prose">Nothing focusable in here.</p>
      </CoachmarkProvider>
    )
    open({ targetElement: "#prose", title: "Read this", focusTarget: true })

    const dialog = await screen.findByRole("dialog")
    await waitFor(() => expect(dialog).toHaveFocus())
  })

  it("restores focus to what had it, the way any other coachmark does", async () => {
    renderComposer()
    const before = screen.getByRole("button", { name: "Views" })
    before.focus()

    open({
      targetElement: "#composer",
      title: "Let One do it for you",
      focusTarget: true,
    })
    await screen.findByRole("dialog")
    await waitFor(() =>
      expect(screen.getByRole("textbox", { name: "Ask One" })).toHaveFocus()
    )

    await userEvent.click(screen.getByRole("button", { name: "Got it" }))

    await waitFor(() => expect(before).toHaveFocus())
  })
})

describe("what the shield does to focus", () => {
  beforeEach(() => {
    coachmarks.closeAll()
  })

  /**
   * A press on the shield must not take focus off the page.
   *
   * Preventing the POINTER event is not enough: the mouse event that follows it
   * has its own default action — "focus what was pressed" — and on a shield that
   * means blurring whatever held focus and leaving it on the body. A step that
   * focused its own field lost that field's focus glow on the reader's first
   * press anywhere on the page.
   *
   * `defaultPrevented` is the observable here rather than `document.activeElement`:
   * jsdom does not move focus on a mouse press at all, so only the real browser
   * can show the blur — and only the prevention can be asserted here.
   */
  it("swallows the press without moving focus", async () => {
    renderApp()
    open({
      targetElement: "#filters",
      title: "Filters got smarter",
      overlay: true,
    })
    await screen.findByRole("dialog")

    const shield = blocker()
    const press = new MouseEvent("mousedown", {
      bubbles: true,
      cancelable: true,
    })
    shield?.dispatchEvent(press)

    expect(press.defaultPrevented).toBe(true)
  })
})
