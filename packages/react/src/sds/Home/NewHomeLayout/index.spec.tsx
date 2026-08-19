import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

import { forwardRef, useEffect, useState, type SVGProps } from "react"

import { type IconType } from "@/components/F0Icon"
import { Calendar, Clock } from "@/icons/app"
import {
  act,
  fireEvent,
  screen,
  userEvent,
  waitFor,
  within,
  zeroRender,
} from "@/testing/test-utils"

import { type HomeWidgetItem, type SlotRenderers } from "../slotRenderers"
import { NewHomeLayout } from "./index"

/**
 * The layout decides everything responsive from its OWN measured width, so these
 * tests drive that width rather than the viewport: `clientWidth` is what the
 * ResizeObserver reports back to it.
 */
let layoutWidth = 1400

/** Every live ResizeObserver callback, so a test can act like the box resized. */
let resizeCallbacks: Array<() => void> = []

/**
 * Resizes the layout the way the window does: the new width is what
 * `clientWidth` reports, and the observers are told to read it again.
 */
const resizeLayoutTo = (width: number) => {
  layoutWidth = width
  act(() => resizeCallbacks.forEach((notify) => notify()))
}

const widget = (
  id: string,
  extra: Partial<HomeWidgetItem> = {}
): HomeWidgetItem => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [
    {
      visualization: "indicators",
      params: { items: [{ label: id, content: "1" }] },
    },
  ],
  ...extra,
})

const RAIL = [
  widget("clock", { locked: true }),
  widget("events", { hasUpdates: true }),
]

/**
 * An icon a test can NAME. The real ones are anonymous paths, and a glyph that
 * flashes between two of them is only testable if the two can be told apart.
 */
const markedIcon = (mark: string): IconType =>
  forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg {...props} ref={ref} data-icon={mark} />
  )) as IconType

/** How many times the rail action has been run. */
let resumes = 0

const renderLayout = (width: number, props = {}) => {
  layoutWidth = width
  return zeroRender(
    <NewHomeLayout
      rightWidgets={RAIL}
      onClickAddNewWidget={() => {}}
      {...props}
    >
      {[
        <p key="greeting">greeting</p>,
        <p key="shortcuts">shortcuts</p>,
        <p key="feed">feed</p>,
      ]}
    </NewHomeLayout>
  )
}

/* ------------------- a widget whose render is not free ------------------- */

/** How many times the clock-in tile has been built from scratch. */
let clockMounts = 0

/**
 * The rail's clock-in tile as the real one behaves: it has NOTHING to show on
 * its first frame and only settles once its deferred read lands (a running
 * total, a fetch, a timer — anything a mount has to start over).
 *
 * That makes it the instrument for these tests: a remount both bumps
 * `clockMounts` and drops the tile back to "clocking in…", so tearing the widget
 * down and building it again is visible instead of silent.
 */
const DeferredClockIn = () => {
  const [reading, setReading] = useState<string | null>(null)
  useEffect(() => {
    clockMounts += 1
    const settle = setTimeout(() => setReading("08:00"), 0)
    return () => clearTimeout(settle)
  }, [])
  return <span>{reading ?? "clocking in…"}</span>
}

const DEFERRED_RENDERERS: SlotRenderers = {
  "clock-in": { render: () => <DeferredClockIn /> },
}

const DEFERRED_RAIL: HomeWidgetItem[] = [
  {
    id: "clock",
    icon: Clock,
    locked: true,
    header: { title: "clock" },
    slots: [{ visualization: "clock-in", params: {} }],
  },
  {
    id: "events",
    icon: Calendar,
    header: { title: "events" },
    // A label of its own, so a test can ask after THIS widget's body without
    // matching the header that names it too.
    slots: [
      {
        visualization: "indicators",
        params: { items: [{ label: "requests", content: "1" }] },
      },
    ],
  },
]

/** Renders the rail with the deferred tile in it, settled. */
const renderDeferredRail = async (width: number) => {
  const result = renderLayout(width, {
    rightWidgets: DEFERRED_RAIL,
    slotRenderers: DEFERRED_RENDERERS,
  })
  await screen.findByText("08:00")
  return result
}

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => layoutWidth,
  })
  resizeCallbacks = []
  clockMounts = 0
  resumes = 0
  // jsdom has no ResizeObserver. This one keeps its callback so a test can fire
  // it (`resizeLayoutTo`) instead of only serving the initial read.
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        resizeCallbacks.push(callback)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  )
})

describe("NewHomeLayout", () => {
  describe("wide enough for both columns", () => {
    test("shows the rail expanded, with the widgets in it", () => {
      renderLayout(1400)

      // The rail's widgets render as full cards, not glyph buttons.
      expect(screen.getAllByText("clock").length).toBeGreaterThan(0)
      expect(screen.getAllByText("events").length).toBeGreaterThan(0)
      expect(
        screen.queryByLabelText("Expand widgets panel")
      ).not.toBeInTheDocument()
    })

    test("offers the collapse toggle, and no edit toggle at all", () => {
      renderLayout(1400)

      expect(
        screen.getByLabelText("Collapse widgets panel")
      ).toBeInTheDocument()
      expect(screen.queryByLabelText("Edit Home")).not.toBeInTheDocument()
    })

    /**
     * Arranging is always available, so the chrome for it is on the widgets
     * themselves: the unlocked one carries a menu, the pinned one carries none.
     */
    test("gives an unlocked widget its own menu, with no mode to enter", () => {
      renderLayout(1400, { onRemoveWidget: () => {} })

      expect(screen.getAllByRole("button", { name: "Actions" })).toHaveLength(1)
    })

    test("collapsing by hand swaps the rail for its glyph strip", async () => {
      renderLayout(1400)

      await userEvent.click(screen.getByLabelText("Collapse widgets panel"))

      expect(screen.getByLabelText("Expand widgets panel")).toBeInTheDocument()
      // Collapsed, each widget is a button rather than a card.
      expect(screen.getByRole("button", { name: "clock" })).toBeInTheDocument()
    })
  })

  describe("too narrow for both columns, but wide enough for the strip", () => {
    test("collapses the rail on its own", () => {
      renderLayout(1000)

      expect(screen.getByRole("button", { name: "clock" })).toBeInTheDocument()
    })

    test("hides the collapse toggle — expanding is not on offer", () => {
      renderLayout(1000)

      expect(
        screen.queryByLabelText("Expand widgets panel")
      ).not.toBeInTheDocument()
      expect(
        screen.queryByLabelText("Collapse widgets panel")
      ).not.toBeInTheDocument()
    })

    test("still offers to add — the strip's one arranging affordance", () => {
      const { container } = renderLayout(1000)

      // Scoped to the STRIP: the main column offers to add too, and both controls
      // are named the same thing because they are the same offer in two places.
      const strip = container.querySelector("aside.-m-1") as HTMLElement
      expect(
        within(strip).getByRole("button", { name: "Add widget" })
      ).toBeInTheDocument()
    })

    test("badges the glyph of a widget with updates, and only that one", () => {
      renderLayout(1000)

      const dot = ".bg-f1-background-accent-bold"
      expect(
        screen.getByRole("button", { name: "events" }).querySelector(dot)
      ).not.toBeNull()
      expect(
        screen.getByRole("button", { name: "clock" }).querySelector(dot)
      ).toBeNull()
    })
  })

  /**
   * A widget's `railAction` turns its glyph into that action's button. The glyph
   * is still the way to the widget — hover, or focus — but the CLICK is the
   * action's, which is the whole point of putting it there.
   */
  describe("a glyph that is an action", () => {
    const ACTION_RAIL = [
      widget("clock", {
        icon: markedIcon("module"),
        // A body only this widget has, so "is the card floating?" doesn't have to
        // be asked of a word the header carries too.
        slots: [
          {
            visualization: "indicators",
            params: { items: [{ label: "tracked today", content: "1" }] },
          },
        ],
        railAction: {
          icon: markedIcon("action"),
          label: "Resume",
          flashing: true,
          onClick: () => resumes++,
        },
      }),
      widget("events"),
    ]

    /** Which icon the glyph is wearing right now. */
    const face = (button: HTMLElement) =>
      button.querySelector("[data-icon]")?.getAttribute("data-icon")

    const glyph = () =>
      screen.getByRole("button", { name: "Resume, clock" }) as HTMLElement

    test("names itself after the action AND the widget it belongs to", () => {
      renderLayout(1000, { rightWidgets: ACTION_RAIL })

      expect(glyph()).toBeInTheDocument()
      // The plain glyph's name is gone: there is one control here, not two.
      expect(
        screen.queryByRole("button", { name: "clock" })
      ).not.toBeInTheDocument()
    })

    /**
     * The tooltip is the only place the action's NAME is written — the glyph is
     * an icon — so it opens INSTANTLY. On the default wait it was a name you had
     * to stop and ask for, on a control you point at on your way past.
     */
    test("names the action without a wait", () => {
      vi.useFakeTimers()
      try {
        renderLayout(1000, { rightWidgets: ACTION_RAIL })

        // `fireEvent`, not `userEvent`: the tooltip is a TIMER, and userEvent's
        // own waiting deadlocks against fake ones.
        fireEvent.pointerEnter(glyph(), { pointerType: "mouse" })
        // Well past the instant 100ms, and well inside the default 700ms.
        act(() => vi.advanceTimersByTime(200))

        expect(screen.getByRole("tooltip")).toHaveTextContent("Resume")
      } finally {
        vi.useRealTimers()
      }
    })

    test("runs the action on every click — it never toggles the panel", async () => {
      renderLayout(1000, { rightWidgets: ACTION_RAIL })

      await userEvent.click(glyph())
      await userEvent.click(glyph())

      // A plain glyph's second click would have PUT THE WIDGET BACK. This one
      // does what it says twice, and the panel stays out.
      expect(resumes).toBe(2)
      expect(screen.getByText("tracked today")).toBeVisible()
    })

    test("still floats its widget on hover, like any other glyph", async () => {
      renderLayout(1000, { rightWidgets: ACTION_RAIL })

      await userEvent.hover(glyph())

      expect(screen.getByText("tracked today")).toBeVisible()
      expect(resumes).toBe(0)
    })

    test("floats its widget on FOCUS too — the click is spoken for", () => {
      renderLayout(1000, { rightWidgets: ACTION_RAIL })

      act(() => glyph().focus())

      expect(screen.getByText("tracked today")).toBeVisible()
    })

    test("flashing alternates the two icons once a second", () => {
      vi.useFakeTimers()
      try {
        renderLayout(1000, { rightWidgets: ACTION_RAIL })

        // It starts on the action's face: whatever happens, the glyph opens by
        // saying what it does.
        expect(face(glyph())).toBe("action")
        act(() => vi.advanceTimersByTime(1000))
        expect(face(glyph())).toBe("module")
        act(() => vi.advanceTimersByTime(1000))
        expect(face(glyph())).toBe("action")
      } finally {
        vi.useRealTimers()
      }
    })

    test("settles on the action's face while the widget is floating", async () => {
      renderLayout(1000, { rightWidgets: ACTION_RAIL })

      await userEvent.hover(glyph())

      vi.useFakeTimers()
      try {
        act(() => vi.advanceTimersByTime(3000))
        expect(face(glyph())).toBe("action")
      } finally {
        vi.useRealTimers()
      }
    })

    test("holds still when the state stops asking", () => {
      vi.useFakeTimers()
      try {
        renderLayout(1000, {
          rightWidgets: [
            widget("clock", {
              icon: markedIcon("module"),
              railAction: {
                icon: markedIcon("action"),
                label: "Clock out",
                onClick: () => {},
              },
            }),
          ],
        })

        const button = screen.getByRole("button", {
          name: "Clock out, clock",
        }) as HTMLElement
        expect(face(button)).toBe("action")
        act(() => vi.advanceTimersByTime(3000))
        expect(face(button)).toBe("action")
      } finally {
        vi.useRealTimers()
      }
    })

    test("is the COLLAPSED rail's affordance only", () => {
      renderLayout(1400, { rightWidgets: ACTION_RAIL })

      // Expanded, the card's own footer is where a call to action belongs.
      expect(
        screen.queryByRole("button", { name: "Resume, clock" })
      ).not.toBeInTheDocument()
    })

    /**
     * A `text` turns the glyph into a pill: the reading, then the button. It is
     * the STOWED widget's stand-in, so it gives its width back the moment the card
     * itself is out.
     */
    describe("with a live reading on it", () => {
      const TICKING_RAIL = [
        widget("clock", {
          icon: markedIcon("module"),
          slots: [
            {
              visualization: "indicators",
              params: { items: [{ label: "tracked today", content: "1" }] },
            },
          ],
          railAction: {
            icon: markedIcon("action"),
            label: "Take a break",
            text: "7:12",
            ticking: true,
            onClick: () => resumes++,
          },
        }),
      ]

      const pill = () =>
        screen.getByRole("button", { name: "Take a break, clock" })
          .parentElement as HTMLElement

      test("draws the reading beside the button", () => {
        renderLayout(1000, { rightWidgets: TICKING_RAIL })

        // Whole and unsplit: a screen reader reads "7:12", not "7 12".
        expect(pill()).toHaveTextContent("7:12")
      })

      /**
       * The pill goes when the card comes out — it would only be an overhang
       * repeating what the card says in full, over the panel it belongs to. THE
       * BUTTON STAYS EXACTLY AS IT WAS: hover is when you are aiming at it, and a
       * control that repaints itself mid-aim is one you cannot hit.
       */
      test("hands the width back while the widget floats, button unrepainted", async () => {
        renderLayout(1000, { rightWidgets: TICKING_RAIL })

        const button = () =>
          screen.getByRole("button", { name: "Take a break, clock" })
        /** Everything about the button EXCEPT whether its border is showing. */
        const paint = () =>
          button()
            .className.split(" ")
            .filter((c) => c !== "ring-1")

        const before = paint()

        await userEvent.hover(button())

        expect(screen.getByText("tracked today")).toBeVisible()
        expect(pill()).not.toHaveTextContent("7:12")
        // Same fill, same icon colour, same size — only the border came on, and
        // that is the one thing hover is allowed to change.
        expect(paint()).toEqual(before)
        expect(button().className).toContain("ring-1")
      })

      test("blinks the separator once a second, digits held still", () => {
        vi.useFakeTimers()
        try {
          renderLayout(1000, { rightWidgets: TICKING_RAIL })

          const separator = () =>
            [...pill().querySelectorAll("span")].find(
              (span) => span.textContent === ":"
            ) as HTMLElement

          expect(separator().style.opacity).toBe("1")
          act(() => vi.advanceTimersByTime(1000))
          expect(separator().style.opacity).not.toBe("1")
          // The reading itself never changes — only the app's clock moves it.
          expect(pill()).toHaveTextContent("7:12")
          act(() => vi.advanceTimersByTime(1000))
          expect(separator().style.opacity).toBe("1")
        } finally {
          vi.useRealTimers()
        }
      })

      /**
       * A `tone` is ONE decision for the whole chip: the pill takes the colour and
       * the button becomes a plain chip carrying it in the icon, so the two halves
       * never put two strong hues beside each other.
       */
      test("paints the pill and the button from one tone", () => {
        renderLayout(1000, {
          rightWidgets: [
            widget("clock", {
              icon: markedIcon("module"),
              railAction: {
                icon: markedIcon("action"),
                label: "Resume",
                text: "0:20",
                tone: "warning",
                onClick: () => {},
              },
            }),
          ],
        })

        const button = screen.getByRole("button", { name: "Resume, clock" })
        const pill = button.parentElement as HTMLElement

        expect(pill.className).toContain("bg-f1-background-warning-bold")
        // Not the tone again on the button — a plain chip, tone in the icon.
        expect(button.className).toContain("bg-f1-background")
        expect(button.className).not.toContain("warning")
      })

      /**
       * The chip's `hover:` fill is its RESTING fill, on purpose: `tailwind-merge`
       * settles classes per variant, so a plain `bg-*` leaves the button variant's
       * own `hover:bg-*` standing — and the page's hover tint over a bold pill
       * reads as the button going see-through.
       */
      test("does not let anything repaint the chip on hover", () => {
        renderLayout(1000, {
          rightWidgets: [
            widget("clock", {
              icon: markedIcon("module"),
              railAction: {
                icon: markedIcon("action"),
                label: "Resume",
                text: "0:20",
                tone: "critical",
                onClick: () => {},
              },
            }),
          ],
        })

        const classes = screen
          .getByRole("button", { name: "Resume, clock" })
          .className.split(" ")
        const hoverFills = classes.filter((c) => c.startsWith("hover:bg-"))

        expect(hoverFills).toEqual(["hover:bg-f1-background"])
        // The border answers the GLYPH's hover, not the button's own — pointing
        // at the reading is pointing at the thing the button belongs to.
        expect(classes).toContain("group-hover:ring-1")
        expect(classes).not.toContain("hover:ring-1")
      })

      test("keeps the dark slab and the accent button by default", () => {
        renderLayout(1000, { rightWidgets: TICKING_RAIL })

        const button = screen.getByRole("button", {
          name: "Take a break, clock",
        })
        expect((button.parentElement as HTMLElement).className).toContain(
          "bg-f1-background-inverse"
        )
        expect(button.className).toContain("bg-f1-background-accent-bold")
      })
    })
  })

  describe("stacked, below md", () => {
    test("drops the rail entirely — not even the strip", () => {
      renderLayout(700)

      expect(
        screen.queryByRole("button", { name: "clock" })
      ).not.toBeInTheDocument()
    })

    test("folds a pinned widget in after the leading blocks, and the rest to the end", () => {
      const { container } = renderLayout(700)
      const text = [...container.querySelectorAll("p, h3, .truncate")]
        .map((n) => n.textContent?.trim())
        .filter((t) =>
          ["greeting", "shortcuts", "feed", "clock", "events"].includes(t ?? "")
        )
        .filter((t, i, all) => t !== all[i - 1])

      // The pin lands between the shortcuts and the feed; the loose one at the end.
      expect(text).toEqual(["greeting", "shortcuts", "clock", "feed", "events"])
    })

    test("stackedPinsAfter moves where the pin lands", () => {
      const { container } = renderLayout(700, { stackedPinsAfter: 1 })
      const text = [...container.querySelectorAll("p, h3, .truncate")]
        .map((n) => n.textContent?.trim())
        .filter((t) =>
          ["greeting", "shortcuts", "feed", "clock", "events"].includes(t ?? "")
        )
        .filter((t, i, all) => t !== all[i - 1])

      expect(text).toEqual(["greeting", "clock", "shortcuts", "feed", "events"])
    })

    test("reserves no column for the rail it is not drawing", () => {
      const { container } = renderLayout(700)
      const root = container.querySelector(".isolate") as HTMLElement

      expect(root.style.gridTemplateColumns).toBe("minmax(0, 1fr)")
    })
  })

  /**
   * ONE render per rail widget, whatever the rail is doing. Collapsing, hovering
   * a glyph and expanding again are presentation changes — none of them may
   * restart a widget's render, so a tile that had loaded stays loaded.
   */
  describe("the rail's widgets stay mounted", () => {
    test("collapsing on resize keeps the same render, settled", async () => {
      await renderDeferredRail(1400)
      expect(clockMounts).toBe(1)

      resizeLayoutTo(1000)

      // Collapsed — and the tile is still the one that had already settled.
      expect(screen.getByRole("button", { name: "clock" })).toBeInTheDocument()
      expect(screen.getByText("08:00")).toBeInTheDocument()
      expect(clockMounts).toBe(1)
    })

    test("keeps the collapsed rail out of sight until a glyph is hovered", async () => {
      await renderDeferredRail(1000)

      expect(screen.getByText("08:00")).not.toBeVisible()
    })

    /**
     * THE FLOATING CARD IS OVER THE FEED, and it has to win that on the layout's
     * terms rather than by out-bidding whatever the feed contains — Home's own
     * Ask-AI composer is `z-20`, and the next thing an app puts in the column is
     * not this layout's to know.
     *
     * The contract is three classes, which is what this asserts: the main column
     * ISOLATES (so every z-index inside it is settled within the column, not
     * against the panel), the panel sits above it, and the strip sits above the
     * panel — a glyph is what the card came out of, so it stays in front.
     *
     * Asserted as classes because jsdom has no Tailwind: it can tell you the
     * class is there, never what it paints. The real check is the Storybook story.
     */
    test("layers the floating card over the column, and the strip over both", () => {
      const { container } = renderLayout(1000)

      const main = container.querySelector(
        ".overflow-y-auto.min-h-0, .min-h-0.overflow-y-auto"
      ) as HTMLElement
      const strip = container.querySelector("aside.-m-1") as HTMLElement
      const panel = container.querySelector("aside.absolute") as HTMLElement

      expect(main.className).toContain("isolate")
      expect(panel.className).toContain("z-10")
      expect(strip.className).toContain("z-20")
    })

    test("hovering a glyph floats THAT widget, and only it", async () => {
      await renderDeferredRail(1000)

      await userEvent.hover(screen.getByRole("button", { name: "clock" }))

      expect(screen.getByText("08:00")).toBeVisible()
      // The rail's other widget is mounted beside it, not shown.
      expect(screen.getByText("requests")).not.toBeVisible()
      expect(clockMounts).toBe(1)
    })

    test("hovering does not rebuild the widget it floats", async () => {
      await renderDeferredRail(1000)

      await userEvent.hover(screen.getByRole("button", { name: "clock" }))

      expect(screen.queryByText("clocking in…")).not.toBeInTheDocument()
      expect(clockMounts).toBe(1)
    })

    test("expanding again keeps the render it had while collapsed", async () => {
      await renderDeferredRail(1400)
      resizeLayoutTo(1000)
      resizeLayoutTo(1400)

      expect(
        screen.getByLabelText("Collapse widgets panel")
      ).toBeInTheDocument()
      expect(screen.getByText("08:00")).toBeVisible()
      expect(clockMounts).toBe(1)
    })

    test("collapsing by hand keeps it mounted too", async () => {
      await renderDeferredRail(1400)

      await userEvent.click(screen.getByLabelText("Collapse widgets panel"))

      expect(screen.getByLabelText("Expand widgets panel")).toBeInTheDocument()
      expect(screen.getByText("08:00")).toBeInTheDocument()
      expect(clockMounts).toBe(1)
    })

    /**
     * The cards have a JOURNEY TO MAKE when the rail collapses: each one scales
     * down onto its own glyph (`WidgetMotion`'s stow). The panel's one-widget
     * filter therefore has to wait for the retract to finish — applied on the frame
     * the collapse begins, as it once was, every card is `display: none` before it
     * has moved a pixel and the whole animation plays on an empty box.
     */
    test("keeps the cards drawn while they retract into the strip", async () => {
      await renderDeferredRail(1400)

      await userEvent.click(screen.getByLabelText("Collapse widgets panel"))

      // Still in the column's flow, on its way into the glyph.
      expect(screen.getByText("08:00").closest("[hidden]")).toBeNull()

      // …and handed over to the strip once it has got there.
      await waitFor(() =>
        expect(screen.getByText("08:00").closest("[hidden]")).not.toBeNull()
      )
    })

    /**
     * A HIDDEN container reports `clientWidth` 0 — the same thing the layout sees
     * before it has measured anything. It must not read that as "no rail yet":
     * the rail would be dropped and every widget in it built again when the
     * container came back.
     */
    test("a container that reports no width keeps them mounted", async () => {
      await renderDeferredRail(1400)

      resizeLayoutTo(0)
      resizeLayoutTo(1400)

      expect(screen.getByText("08:00")).toBeVisible()
      expect(clockMounts).toBe(1)
    })
  })

  /**
   * The COLLAPSED STRIP is a scroll region like the two columns, so it says when
   * there are glyphs past an end — and, like them, only while there really are.
   */
  describe("the collapsed strip's fade", () => {
    const METRICS = ["scrollHeight", "clientHeight"] as const

    /** A strip with more glyphs than fit: 2000px of them in a 500px column. */
    const overflowing = () => {
      const heights = { scrollHeight: 2000, clientHeight: 500 }
      for (const prop of METRICS)
        Object.defineProperty(HTMLElement.prototype, prop, {
          configurable: true,
          get: () => heights[prop],
        })
    }

    // Back to jsdom's own (on `Element`, which HTMLElement inherits from), so the
    // test below sees a strip that fits.
    afterEach(() => {
      for (const prop of METRICS) delete HTMLElement.prototype[prop]
    })

    test("masks the bottom while glyphs are cut off there, and the top once scrolled", () => {
      overflowing()
      const { container } = renderLayout(1000, {
        rightWidgets: Array.from({ length: 40 }, (_, i) => widget(`w-${i}`)),
      })
      const strip = container.querySelector("aside.-m-1") as HTMLElement

      // At the top there is nothing above to hint at — only the bottom fades.
      expect(strip.style.maskImage).toContain(
        "black 0, black calc(100% - 24px)"
      )
      expect(strip.style.maskImage).toContain("transparent 100%")

      strip.scrollTop = 300
      fireEvent.scroll(strip)

      expect(strip.style.maskImage).toContain("transparent 0, black 24px")
    })

    test("leaves a strip that fits unmasked", () => {
      const { container } = renderLayout(1000)
      const strip = container.querySelector("aside.-m-1") as HTMLElement

      expect(strip.style.maskImage).toBe("")
    })
  })

  /**
   * A column that can hold more widgets than a screen keeps only the ones you can
   * see. The layout's part is small — which sides do it, and what each of them is
   * on screen OF (its own scroll region) — and the column's own tests cover the
   * rest.
   */
  describe("virtualizing a column", () => {
    const MANY = Array.from({ length: 100 }, (_, index) =>
      widget(`left-${index}`)
    )

    /**
     * The heights jsdom has none of. A widget's card is 200px and every other box
     * — the scroll region among them — is 400, read through both metrics because
     * the scroll region is measured by `offsetHeight` and a card by its rect.
     */
    const mockHeights = () => {
      const heightOf = (el: HTMLElement) =>
        el.hasAttribute("data-index") ? 200 : 400
      vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(
        function (this: HTMLElement) {
          return heightOf(this)
        }
      )
      vi.spyOn(
        HTMLElement.prototype,
        "getBoundingClientRect"
      ).mockImplementation(function (this: HTMLElement) {
        const height = heightOf(this)
        return {
          top: 0,
          left: 0,
          right: 400,
          bottom: height,
          width: 400,
          height,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        } as DOMRect
      })
    }

    afterEach(() => vi.restoreAllMocks())

    test("mounts only the main column's on-screen widgets", () => {
      mockHeights()
      renderLayout(1400, {
        leftWidgets: MANY,
        virtualizedWidgetContainers: ["main"],
        virtualization: { estimateHeight: 200 },
      })

      expect(screen.getAllByText("left-0").length).toBeGreaterThan(0)
      expect(screen.queryByText("left-99")).not.toBeInTheDocument()
    })

    test("mounts them all for a side that did not ask", () => {
      mockHeights()
      renderLayout(1400, { leftWidgets: MANY })

      expect(screen.getAllByText("left-99").length).toBeGreaterThan(0)
    })
  })
})
