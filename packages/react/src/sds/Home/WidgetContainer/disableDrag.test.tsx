import { beforeEach, describe, expect, test } from "vitest"

import { useEffect } from "react"

import { Calendar, Clock } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

import { WidgetContainer } from "./index"

/**
 * A COLUMN THAT IS ONLY TEMPORARILY NOT ARRANGEABLE, which is what the collapsed
 * rail is. `disableEdition` would do it by taking the sortables away — and that
 * changes the tree's shape, which rebuilds every widget in the column.
 */

const widget = (id: string) => ({
  id,
  icon: id === "clock" ? Clock : Calendar,
  header: { title: id },
  slots: [],
})

const WIDGETS = [widget("clock"), widget("events")]

/** How many times each widget's body has been built from scratch, by id. */
let mounts: Record<string, number> = {}

/**
 * A widget body that COUNTS ITS MOUNTS, so a change in the column's tree — the
 * thing that unmounts a render — is visible rather than silent.
 */
const Counted = ({ id }: { id: string }) => {
  useEffect(() => {
    mounts[id] = (mounts[id] ?? 0) + 1
  }, [id])
  return <span>{id} body</span>
}

/** The column, frozen or not, with every widget counting its own mounts. */
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

    // The box a sortable marks its card with is still there: the column is
    // frozen, not unwrapped.
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

    // Not one of them was built again on the way in or out.
    expect(mounts).toEqual({ clock: 1, events: 1 })
  })

  test("keeps the rest of the arranging — the menus are untouched", () => {
    zeroRender(column(true))

    expect(screen.getAllByRole("button", { name: "Actions" })).toHaveLength(2)
  })
})
