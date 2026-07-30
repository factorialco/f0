import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { Kanban } from "./Kanban"
import type { KanbanProps } from "./types"

type Task = { id: string; title: string }

const lanes: KanbanProps<Task>["lanes"] = [
  { id: "todo", title: "Todo", items: [{ id: "t1", title: "T1" }] },
  { id: "done", title: "Done", items: [{ id: "d1", title: "D1" }] },
]

const renderKanban = (heightMode?: KanbanProps<Task>["heightMode"]) =>
  render(
    <Kanban<Task>
      heightMode={heightMode}
      lanes={lanes}
      getKey={(item) => item.id}
      renderCard={(item) => <div>{item.title}</div>}
    />
  )

// The lane's outer element (the one that carries the sizing) is the direct child
// of the per-lane test-id wrapper; its flex parent is the board row.
const laneOuter = (id: string) =>
  screen.getByTestId(`lane-${id}`).firstElementChild as HTMLElement
const boardRow = (id: string) =>
  screen.getByTestId(`lane-${id}`).parentElement as HTMLElement

describe("Kanban heightMode", () => {
  it("content mode: row stretches lanes and no explicit height is applied (h-full owns sizing)", () => {
    renderKanban("content")

    expect(boardRow("todo")).toHaveClass("items-stretch")
    const outer = laneOuter("todo")
    expect(outer).toHaveClass("h-full")
    // The board's items-stretch matches lane heights — a measured px height here
    // would shadow h-full, so content mode must never set one.
    expect(outer.style.height).toBe("")
  })

  it("fill mode is the default: lanes are top-aligned and sized by measurement, not h-full", () => {
    renderKanban()

    expect(boardRow("todo")).toHaveClass("items-start")
    expect(laneOuter("todo")).not.toHaveClass("h-full")
  })
})
