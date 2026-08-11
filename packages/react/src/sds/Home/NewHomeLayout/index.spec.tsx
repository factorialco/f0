import { beforeEach, describe, expect, test, vi } from "vitest"

import { useEffect, useState } from "react"

import { Calendar, Clock } from "@/icons/app"
import {
  act,
  screen,
  userEvent,
  waitFor,
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
  // jsdom has no ResizeObserver. This one keeps its callback so a test can fire
  // it (`resizeLayoutTo`) instead of only serving the initial read.
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        resizeCallbacks.push(callback)
      }
      observe() {}
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

    test("offers the collapse toggle and the edit button", () => {
      renderLayout(1400)

      expect(
        screen.getByLabelText("Collapse widgets panel")
      ).toBeInTheDocument()
      expect(screen.getByLabelText("Edit Home")).toBeInTheDocument()
    })

    test("collapsing by hand swaps the rail for its glyph strip", async () => {
      renderLayout(1400)

      await userEvent.click(screen.getByLabelText("Collapse widgets panel"))

      expect(screen.getByLabelText("Expand widgets panel")).toBeInTheDocument()
      // Collapsed, each widget is a button rather than a card.
      expect(screen.getByRole("button", { name: "clock" })).toBeInTheDocument()
    })

    test("the edit button turns into a confirm while editing", async () => {
      renderLayout(1400)

      await userEvent.click(screen.getByLabelText("Edit Home"))

      expect(screen.getByLabelText("Done editing")).toBeInTheDocument()
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

    test("hides the edit button, and still offers to add", () => {
      renderLayout(1000)

      expect(screen.queryByLabelText("Edit Home")).not.toBeInTheDocument()
      expect(screen.getByLabelText("Add widget")).toBeInTheDocument()
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
})
