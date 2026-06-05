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
      screen.queryByRole("button", { name: "Edit preset" })
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
      screen.queryByRole("button", { name: "Edit preset" })
    ).not.toBeInTheDocument()

    await user.hover(chip)

    await user.click(await screen.findByRole("button", { name: "Edit preset" }))
    expect(onEdit).toHaveBeenCalledTimes(1)

    // Clicking an action must not toggle the preset's selection.
    expect(onClick).not.toHaveBeenCalled()
  })
})

describe("Preset - emoji", () => {
  it("does not render an emoji when none is provided", () => {
    zeroRender(<Preset label="Engineering" />)
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("renders the emoji on the left when provided", () => {
    zeroRender(<Preset label="Engineering" emoji="🚀" />)
    // EmojiImage renders an <img> with the emoji as its alt text.
    expect(screen.getByAltText("🚀")).toBeInTheDocument()
  })
})

describe("Preset - persist action", () => {
  it("does not render a persist button when onPersist is absent", () => {
    zeroRender(<Preset label="Engineering" selected onClick={vi.fn()} />)
    expect(
      screen.queryByRole("button", { name: "Persist in preset" })
    ).not.toBeInTheDocument()
  })

  it("shows the persist button without hovering and calls onPersist without toggling selection", async () => {
    const user = userEvent.setup()
    const onPersist = vi.fn()
    const onClick = vi.fn()

    zeroRender(
      <Preset
        label="Engineering"
        selected
        onClick={onClick}
        onPersist={onPersist}
      />
    )

    // Visible without any hover.
    const persist = screen.getByRole("button", { name: "Persist in preset" })
    expect(persist).toBeInTheDocument()

    await user.click(persist)
    expect(onPersist).toHaveBeenCalledTimes(1)
    expect(onClick).not.toHaveBeenCalled()
  })
})
