import { useEffect, useState } from "react"
import { beforeEach, describe, expect, test, vi } from "vitest"

import { Calendar, Clock } from "@/icons/app"
import { act, screen, zeroRender } from "@/testing/test-utils"

import { type HomeWidgetItem } from "../slotRenderers"

import { NewHomeLayout } from "./index"

let layoutWidth = 1400
let resizeCallbacks: Array<(entries: ResizeObserverEntry[]) => void> = []

const resizeLayoutTo = (width: number) => {
  layoutWidth = width
  act(() => resizeCallbacks.forEach((notify) => notify([])))
}

let mounts: Record<string, number> = {}

const Counted = ({ id }: { id: string }) => {
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    mounts[id] = (mounts[id] ?? 0) + 1
    const settle = setTimeout(() => setSettled(true), 0)
    return () => clearTimeout(settle)
  }, [id])
  return <span data-card>{`${id} ${settled ? "settled" : "loading"}`}</span>
}

const widget = (id: string, extra: Partial<HomeWidgetItem> = {}) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [],
  ...extra,
})

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

describe("resizing down to a stacked (mobile) width", () => {
  test("keeps the main column's widgets as they are", async () => {
    await renderLayout(1400)
    expect(mounts).toMatchObject({ "main-a": 1, "main-b": 1 })

    resizeLayoutTo(700)

    expect(screen.getByText("main-a settled")).toBeInTheDocument()
    expect(mounts["main-a"]).toBe(1)
    expect(mounts["main-b"]).toBe(1)
  })

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

describe("the rail's widgets while the layout is stacked", () => {
  test("are drawn in the main column, pins interleaved and the rest at the foot", async () => {
    const { container } = await renderLayout(700)

    const order = [...container.querySelectorAll("p, [data-card]")]
      .map((node) => node.textContent?.trim())
      .filter(Boolean)

    expect(order).toEqual([
      "greeting",
      "shortcuts",
      "clock settled",
      "feed",
      "main-a settled",
      "main-b settled",
      "events settled",
    ])
  })

  test("offer no drag, while the main column's still do", async () => {
    const { container } = await renderLayout(700)
    const grabbable = (id: string) =>
      container
        .querySelector(`[data-widget-id='${id}']`)
        ?.className.includes("cursor-grab")

    expect(grabbable("clock")).toBe(false)
    expect(grabbable("events")).toBe(false)
    expect(grabbable("main-a")).toBe(true)
    expect(grabbable("main-b")).toBe(true)
  })
})
