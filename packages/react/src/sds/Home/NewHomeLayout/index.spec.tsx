import { beforeEach, describe, expect, test, vi } from "vitest"

import { Calendar, Clock } from "@/icons/app"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { NewHomeLayout } from "./index"

/**
 * The layout decides everything responsive from its OWN measured width, so these
 * tests drive that width rather than the viewport: `clientWidth` is what the
 * ResizeObserver reports back to it.
 */
let layoutWidth = 1400

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

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => layoutWidth,
  })
  // jsdom has no ResizeObserver; the layout only needs the initial read.
  vi.stubGlobal(
    "ResizeObserver",
    class {
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
})
