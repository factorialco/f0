import { beforeEach, describe, expect, test } from "vitest"

import { useEffect } from "react"

import { Calendar, Clock } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

import { WidgetContainer } from "./index"

const widget = (id: string) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [],
})

const WIDGETS = [widget("clock"), widget("events")]

let mounts: Record<string, number> = {}

const Counted = ({ id }: { id: string }) => {
  useEffect(() => {
    mounts[id] = (mounts[id] ?? 0) + 1
  }, [id])
  return <span>{id} body</span>
}

const column = (frozen: boolean) => (
  <WidgetContainer
    widgets={WIDGETS}
    disableDrag={frozen}
    renderWidget={(item) => <Counted id={item.id} />}
    onRemoveWidget={() => {}}
    onReorder={() => {}}
  />
)

beforeEach(() => {
  mounts = {}
})

describe("disableDrag", () => {
  test("takes the gesture away", () => {
    const { container } = zeroRender(column(true))

    expect(container.querySelectorAll(".cursor-grab")).toHaveLength(0)
  })

  test("leaves the sortables in place — the tree keeps its shape", () => {
    const { container } = zeroRender(column(true))

    expect(
      [...container.querySelectorAll("[data-widget-id]")].map((el) =>
        el.getAttribute("data-widget-id")
      )
    ).toEqual(["clock", "events"])
  })

  test("freezing and thawing keeps every widget's own render", () => {
    const { rerender } = zeroRender(column(false))
    expect(mounts).toEqual({ clock: 1, events: 1 })

    rerender(column(true))
    rerender(column(false))

    expect(mounts).toEqual({ clock: 1, events: 1 })
  })

  test("keeps the rest of the arranging — the menus are untouched", () => {
    zeroRender(column(true))

    expect(screen.getAllByRole("button", { name: "Actions" })).toHaveLength(2)
  })
})
