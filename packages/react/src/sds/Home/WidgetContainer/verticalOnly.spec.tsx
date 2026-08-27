import type { Modifier } from "@dnd-kit/core"
import { describe, expect, test, vi } from "vitest"

import { Clock } from "@/icons/app"
import { zeroRender } from "@/testing/test-utils"

import { WidgetContainer } from "./index"
import { verticalOnly } from "./verticalOnly"

/**
 * The one prop this file is about: dnd-kit's own DndContext is what applies a
 * modifier, and there is nothing in the DOM to read the list off — so the
 * context is stubbed and asked what it was handed.
 */
const modifiers = vi.hoisted(() => ({ current: undefined as unknown }))

vi.mock("@dnd-kit/core", async () => {
  const { createElement } = await import("react")
  const actual =
    await vi.importActual<typeof import("@dnd-kit/core")>("@dnd-kit/core")

  return {
    ...actual,
    DndContext: (props: React.ComponentProps<typeof actual.DndContext>) => {
      modifiers.current = props.modifiers
      return createElement(actual.DndContext, props)
    },
  }
})

const widget = (id: string) => ({
  id,
  icon: Clock,
  header: { title: id },
  slots: [],
})

/**
 * dnd-kit hands a modifier the whole drag context; only `transform` decides
 * where the card goes, so that is all this fills in.
 */
const at = (x: number, y: number) =>
  verticalOnly({
    transform: { x, y, scaleX: 1, scaleY: 1 },
  } as unknown as Parameters<Modifier>[0])

describe("verticalOnly", () => {
  test("drops the horizontal half of the drag", () => {
    expect(at(120, 40)).toEqual({ x: 0, y: 40, scaleX: 1, scaleY: 1 })
  })

  test("drops it whichever way the pointer went", () => {
    expect(at(-200, -15).x).toBe(0)
  })

  test("leaves the vertical travel alone", () => {
    expect(at(0, 0).y).toBe(0)
    expect(at(80, -240).y).toBe(-240)
  })

  /**
   * Without this the in-list shuffle was vertical but the card riding the
   * pointer was not: it followed sideways out of the column it was reordering,
   * offering a move between rails that the layout does not support.
   */
  test("is the modifier a draggable column drags under", () => {
    zeroRender(
      <WidgetContainer
        widgets={[widget("clock"), widget("events")]}
        onReorder={() => {}}
      />
    )

    // `?? []` so an unwired column fails on the missing modifier rather than
    // on `undefined` not being a list.
    expect(modifiers.current ?? []).toContain(verticalOnly)
  })
})
