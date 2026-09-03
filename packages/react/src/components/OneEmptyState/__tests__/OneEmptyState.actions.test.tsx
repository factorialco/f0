import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { OneEmptyState } from "../OneEmptyState"

const actionsRow = () =>
  screen.getByText("No expenses yet").closest("div")?.parentElement
    ?.lastElementChild as HTMLElement

const twoActions = [
  { label: "Upload your first receipt", onClick: () => {} },
  { label: "Learn how expenses work", onClick: () => {} },
] as const

describe("OneEmptyState's actions", () => {
  it("takes its direction from the container's width, not the viewport's", () => {
    render(
      <OneEmptyState
        emoji="🧾"
        title="No expenses yet"
        actions={[...twoActions]}
      />
    )

    const row = actionsRow()

    expect(row).toHaveClass("flex-col", "@sm:flex-row")
    expect(row.className).not.toMatch(/(^|\s)sm:/)
  })

  it("can never be wider than the box it is in", () => {
    render(
      <OneEmptyState
        emoji="🧾"
        title="No expenses yet"
        actions={[...twoActions]}
      />
    )

    expect(actionsRow()).toHaveClass("@sm:flex-wrap", "max-w-full")
  })

  it("is a container, so the query above has something to query", () => {
    render(
      <OneEmptyState
        emoji="🧾"
        title="No expenses yet"
        actions={[...twoActions]}
      />
    )

    expect(actionsRow().parentElement).toHaveClass("@container")
  })
})
