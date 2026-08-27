import type { DragStartEvent, Modifier } from "@dnd-kit/core"
import { afterEach, describe, expect, test, vi } from "vitest"

import { Clock } from "@/icons/app"
import { act, zeroRender } from "@/testing/test-utils"

import type { HomeWidgetItem } from "../slotRenderers"
import { WidgetContainer } from "./index"
import { lockedCeiling, noHigherThan, topPins } from "./lockedCeiling"

const widget = (id: string, extra: Partial<HomeWidgetItem> = {}) =>
  ({
    id,
    icon: Clock,
    header: { title: id },
    slots: [],
    ...extra,
  }) as HomeWidgetItem

/** dnd-kit hands a modifier the whole drag context; these are the parts read. */
const apply = (
  modifier: Modifier,
  { y, top, height = 100 }: { y: number; top: number; height?: number }
) =>
  modifier({
    transform: { x: 0, y, scaleX: 1, scaleY: 1 },
    draggingNodeRect: { top, bottom: top + height, height } as DOMRect,
  } as unknown as Parameters<Modifier>[0])

/**
 * A column whose cards measure something, since jsdom gives every box a height
 * of 0 — `heights` by widget id, laid out top to bottom from y = 0.
 */
const mockCards = (heights: Record<string, number>) => {
  const tops: Record<string, number> = {}
  let y = 0
  for (const [id, height] of Object.entries(heights)) {
    tops[id] = y
    y += height
  }

  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
    function (this: HTMLElement) {
      const id = this.getAttribute("data-widget-id")
      const top = id == null ? 0 : (tops[id] ?? 0)
      const height = id == null ? 0 : (heights[id] ?? 0)
      // Spelled out rather than a `DOMRect`: jsdom keeps a rect's fields on the
      // prototype, so a spread one arrives with none of them.
      return {
        top,
        bottom: top + height,
        height,
        left: 0,
        right: 400,
        width: 400,
        x: 0,
        y: top,
        toJSON: () => ({}),
      } as DOMRect
    }
  )
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe("topPins", () => {
  test("is the run of locked widgets before the first free one", () => {
    expect(
      topPins([
        widget("clock", { locked: true }),
        widget("payroll", { locked: true }),
        widget("events"),
        widget("tasks", { locked: true }),
      ]).map((w) => w.id)
    ).toEqual(["clock", "payroll"])
  })

  test("is empty when the top of the column is free", () => {
    expect(
      topPins([widget("events"), widget("clock", { locked: true })])
    ).toEqual([])
  })

  test("is the whole column when every widget is locked", () => {
    expect(
      topPins([
        widget("clock", { locked: true }),
        widget("payroll", { locked: true }),
      ]).map((w) => w.id)
    ).toEqual(["clock", "payroll"])
  })
})

describe("lockedCeiling", () => {
  const column = (widgets: HomeWidgetItem[]) => {
    const el = document.createElement("div")
    for (const w of widgets) {
      const card = document.createElement("div")
      card.setAttribute("data-widget-id", w.id)
      el.append(card)
    }
    return el
  }

  test("is the top of the first free SLOT: the pinned run plus the gap", () => {
    mockCards({ clock: 120, payroll: 80, events: 200 })
    const widgets = [
      widget("clock", { locked: true }),
      widget("payroll", { locked: true }),
      widget("events"),
    ]

    // The pins end at 200; the main column keeps 24px between cards.
    expect(lockedCeiling(widgets, column(widgets), 24)).toBe(224)
  })

  test("takes the gap from the column it is measuring", () => {
    mockCards({ clock: 120, events: 200 })
    const widgets = [widget("clock", { locked: true }), widget("events")]

    // The rail's cards sit 16px apart, not the main column's 24px.
    expect(lockedCeiling(widgets, column(widgets), 16)).toBe(136)
  })

  test("is null when nothing pins the top", () => {
    mockCards({ events: 200, clock: 120 })
    const widgets = [widget("events"), widget("clock", { locked: true })]

    expect(lockedCeiling(widgets, column(widgets), 24)).toBeNull()
  })

  /** A virtualized column can have scrolled the pinned cards out of the DOM. */
  test("is null when the pinned cards aren't there to measure", () => {
    mockCards({ events: 200 })
    const widgets = [widget("clock", { locked: true }), widget("events")]

    expect(lockedCeiling(widgets, column([widget("events")]), 24)).toBeNull()
  })

  test("is null without a column to measure in", () => {
    expect(
      lockedCeiling([widget("clock", { locked: true })], null, 24)
    ).toBeNull()
  })
})

describe("noHigherThan", () => {
  test("stops the card where the pinned widgets end", () => {
    const modifier = noHigherThan(() => 200)

    // A card starting at 200 dragged 500px up: it goes no further than the
    // ceiling, which is the top of the first slot it is allowed to have.
    expect(apply(modifier, { y: -500, top: 200 }).y).toBe(0)
  })

  test("allows the travel that stays below them", () => {
    const modifier = noHigherThan(() => 200)

    // From 520, 300px up leaves the card's top at 220 — still under the pins.
    expect(apply(modifier, { y: -300, top: 520 }).y).toBe(-300)
    // And down is never restricted.
    expect(apply(modifier, { y: 640, top: 520 }).y).toBe(640)
  })

  test("does nothing when the top of the column is free", () => {
    expect(
      apply(
        noHigherThan(() => null),
        { y: -900, top: 200 }
      ).y
    ).toBe(-900)
  })

  test("holds the card's TOP edge, not its middle", () => {
    // A 400px-tall card: clamping its middle would let its top sit 200px into
    // the pinned widgets.
    expect(
      apply(
        noHigherThan(() => 200),
        { y: -400, top: 400, height: 400 }
      ).y
    ).toBe(-200)
  })
})

/**
 * The wiring, which is the part that regressed: a column with pinned widgets at
 * the top used to let the card sail over them for the whole drag and refuse the
 * drop at the end.
 */
describe("a column with widgets pinned to the top", () => {
  const captured = vi.hoisted(() => ({
    modifiers: undefined as Modifier[] | undefined,
    onDragStart: undefined as ((event: DragStartEvent) => void) | undefined,
  }))

  vi.mock("@dnd-kit/core", async () => {
    const { createElement } = await import("react")
    const actual =
      await vi.importActual<typeof import("@dnd-kit/core")>("@dnd-kit/core")

    return {
      ...actual,
      DndContext: (props: React.ComponentProps<typeof actual.DndContext>) => {
        captured.modifiers = props.modifiers as Modifier[]
        captured.onDragStart = props.onDragStart
        return createElement(actual.DndContext, props)
      },
    }
  })

  test("holds a dragged card below them for the whole gesture", () => {
    mockCards({ clock: 120, events: 200, tasks: 200 })
    zeroRender(
      <WidgetContainer
        widgets={[
          widget("clock", { locked: true }),
          widget("events"),
          widget("tasks"),
        ]}
        onReorder={() => {}}
      />
    )

    act(() => {
      captured.onDragStart?.({
        active: { id: "tasks" },
      } as unknown as DragStartEvent)
    })

    // The card starts at 320 (under the 120px pin and the 200px widget) and is
    // carried 400px up: it stops at the top of the first free slot — the pin's
    // bottom edge, 120, plus the main column's 24px gap.
    const chain = (captured.modifiers ?? []).reduce(
      (transform, modifier) =>
        modifier({
          transform,
          draggingNodeRect: { top: 320, bottom: 520, height: 200 } as DOMRect,
        } as unknown as Parameters<Modifier>[0]),
      { x: 0, y: -400, scaleX: 1, scaleY: 1 }
    )

    expect(chain.y).toBe(-176)
  })

  /**
   * The other half of the same rule: with one free card among the pins there is
   * a single legal order, so there is no drag to constrain in the first place.
   */
  test("offers no drag at all when only one card can move", () => {
    mockCards({ clock: 120, events: 200 })
    const { container } = zeroRender(
      <WidgetContainer
        widgets={[widget("clock", { locked: true }), widget("events")]}
        onReorder={() => {}}
      />
    )

    expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
  })

  test("does not hold it back when the top is free", () => {
    mockCards({ events: 200, tasks: 200 })
    zeroRender(
      <WidgetContainer
        widgets={[widget("events"), widget("tasks")]}
        onReorder={() => {}}
      />
    )

    act(() => {
      captured.onDragStart?.({
        active: { id: "tasks" },
      } as unknown as DragStartEvent)
    })

    const chain = (captured.modifiers ?? []).reduce(
      (transform, modifier) =>
        modifier({
          transform,
          draggingNodeRect: { top: 200, bottom: 400, height: 200 } as DOMRect,
        } as unknown as Parameters<Modifier>[0]),
      { x: 0, y: -400, scaleX: 1, scaleY: 1 }
    )

    expect(chain.y).toBe(-400)
  })
})
