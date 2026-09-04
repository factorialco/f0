import { beforeEach, describe, expect, test, vi } from "vitest"

import { useEffect, useState } from "react"

import { Calendar, Clock } from "@/icons/app"
import { act, screen, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"
import { NewHomeLayout } from "./index"

/**
 * The layout decides everything responsive from its OWN measured width, so these
 * tests drive that width rather than the viewport.
 */
let layoutWidth = 1400
let resizeCallbacks: Array<(entries: ResizeObserverEntry[]) => void> = []

const resizeLayoutTo = (width: number) => {
  layoutWidth = width
  act(() => resizeCallbacks.forEach((notify) => notify([])))
}

/**
 * A WIDGET WHOSE RENDER IS NOT FREE, and the instrument for every test here: it
 * has nothing to show on its first frame and only settles once its deferred read
 * lands, exactly as the real tiles do (a running total, a fetch, a timer). So a
 * remount is visible twice over — the count goes up, and the tile drops back to
 * "loading" on screen.
 */
let mounts: Record<string, number> = {}

const Counted = ({ id }: { id: string }) => {
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    mounts[id] = (mounts[id] ?? 0) + 1
    const settle = setTimeout(() => setSettled(true), 0)
    return () => clearTimeout(settle)
  }, [id])
  return <span>{`${id} ${settled ? "settled" : "loading"}`}</span>
}

const widget = (id: string, extra: Partial<HomeWidgetItem> = {}) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [],
  ...extra,
})

/** Two free cards in the main column, a pinned one and a free one in the rail. */
const MAIN = [widget("main-a"), widget("main-b")]
const RAIL = [widget("clock", { locked: true }), widget("events")]

const renderLayout = async (width: number, props = {}) => {
  layoutWidth = width
  const result = zeroRender(
    <NewHomeLayout
      leftWidgets={MAIN}
      rightWidgets={RAIL}
      renderWidget={(item) => <Counted id={item.id} />}
      onReorderWidgets={() => {}}
      {...props}
    >
      {[
        <p key="greeting">greeting</p>,
        <p key="shortcuts">shortcuts</p>,
        <p key="feed">feed</p>,
      ]}
    </NewHomeLayout>
  )
  // Everything has settled before the resize, so anything that reads "loading"
  // afterwards was built again.
  await screen.findByText("main-a settled")
  return result
}

beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get: () => layoutWidth,
  })
  resizeCallbacks = []
  mounts = {}
  // jsdom has no ResizeObserver. This one keeps its callback so a test can fire
  // it (`resizeLayoutTo`) instead of only serving the initial read.
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: (entries: ResizeObserverEntry[]) => void) {
        resizeCallbacks.push(callback)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  )
})

/**
 * STACKING IS A PRESENTATION CHANGE, on the same terms as collapsing: below `md`
 * the rail's widgets fold into the main column. A move is not a rebuild — a tile
 * that had loaded has to still be loaded on the other side of the resize, in
 * the main column and in the rail alike.
 *
 * `index.spec.tsx` covers the collapse threshold (1400 → 1000). These cover the
 * STACK threshold (→ 700), which is where the rail stops existing.
 */
describe("resizing down to a stacked (mobile) width", () => {
  test("keeps the main column's widgets as they are", async () => {
    await renderLayout(1400)
    expect(mounts).toMatchObject({ "main-a": 1, "main-b": 1 })

    resizeLayoutTo(700)

    expect(screen.getByText("main-a settled")).toBeInTheDocument()
    expect(mounts["main-a"]).toBe(1)
    expect(mounts["main-b"]).toBe(1)
  })

  /**
   * The one that bites in practice. Stacked, the rail's LOOSE widgets join the
   * main container's own `widgets` — and `WidgetContainer` decides whether the
   * column is draggable from how many unlocked widgets are in that array. A main
   * column with one free card among pinned ones therefore crosses from
   * "nothing to arrange" to "draggable" purely because the rail folded in, which
   * swaps the column's tree for the DndContext one and rebuilds every card in it.
   */
  test("keeps them even when the fold-in makes the column draggable", async () => {
    await renderLayout(1400, {
      leftWidgets: [widget("main-a", { locked: true }), widget("main-b")],
    })
    expect(mounts).toMatchObject({ "main-a": 1, "main-b": 1 })

    resizeLayoutTo(700)

    expect(screen.getByText("main-b settled")).toBeInTheDocument()
    expect(mounts["main-a"]).toBe(1)
    expect(mounts["main-b"]).toBe(1)
  })

  test("keeps the rail's widgets as they are while they fold in", async () => {
    await renderLayout(1400)
    expect(mounts).toMatchObject({ clock: 1, events: 1 })

    resizeLayoutTo(700)

    expect(screen.getByText("clock settled")).toBeInTheDocument()
    expect(mounts["clock"]).toBe(1)
    expect(mounts["events"]).toBe(1)
  })

  /**
   * THE WHOLE JOURNEY A WINDOW MAKES, one step at a time — column, strip,
   * stacked, and back out again. Nothing about it is a new widget, so nothing in
   * it may be built twice.
   */
  test("survives the whole way down and back", async () => {
    await renderLayout(1400)

    resizeLayoutTo(1000)
    resizeLayoutTo(700)
    resizeLayoutTo(1000)
    resizeLayoutTo(1400)

    expect(mounts).toEqual({
      "main-a": 1,
      "main-b": 1,
      clock: 1,
      events: 1,
    })
  })
})
