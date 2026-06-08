import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { Preset } from "."

describe("Preset - description tooltip", () => {
  it("does not wire a tooltip when no description is provided", () => {
    zeroRender(<Preset label="Engineering" />)

    const box = screen.getByText("Engineering").closest("label")
    expect(box).toBeInTheDocument()
    // Not wrapped as a tooltip trigger.
    expect(box).not.toHaveAttribute("data-state")
  })

  it("wires the preset box as a hover tooltip trigger when a description is provided", () => {
    zeroRender(
      <Preset label="Engineering" description="Engineering team, by salary" />
    )

    const box = screen.getByText("Engineering").closest("label")
    // Radix marks the (asChild) trigger with data-state; closed until hovered.
    expect(box).toHaveAttribute("data-state", "closed")

    // Content is rendered lazily, so the description is not in the DOM yet.
    expect(
      screen.queryByText("Engineering team, by salary")
    ).not.toBeInTheDocument()
  })
})

describe("Preset - edit action", () => {
  it("renders no edit button by default", () => {
    zeroRender(<Preset label="Engineering" />)

    expect(
      screen.queryByRole("button", { name: "Edit view" })
    ).not.toBeInTheDocument()
  })

  it("reveals the edit button on hover and calls its handler without toggling selection", async () => {
    const user = userEvent.setup()
    const onEdit = vi.fn()
    const onClick = vi.fn()

    zeroRender(<Preset label="Engineering" onClick={onClick} onEdit={onEdit} />)

    // The action is revealed (mounted) on hover.
    const chip = screen.getByText("Engineering").closest("label")!
    expect(
      screen.queryByRole("button", { name: "Edit view" })
    ).not.toBeInTheDocument()

    await user.hover(chip)

    await user.click(await screen.findByRole("button", { name: "Edit view" }))
    expect(onEdit).toHaveBeenCalledTimes(1)

    // Clicking an action must not toggle the preset's selection.
    expect(onClick).not.toHaveBeenCalled()
  })
})
