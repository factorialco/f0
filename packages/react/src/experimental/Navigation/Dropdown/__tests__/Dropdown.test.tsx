import { describe, expect, it, vi } from "vitest"

import { Add, Pencil } from "@/icons/app"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { Dropdown } from "../index"

const items = [
  { label: "Create", onClick: vi.fn(), icon: Add },
  { label: "Edit", onClick: vi.fn(), icon: Pencil },
]

describe("Dropdown (experimental) — disabled", () => {
  it("renders the default trigger as a disabled button", () => {
    render(<Dropdown items={items} disabled />)
    const trigger = screen.getByRole("button")
    expect(trigger).toBeDisabled()
  })

  it("does not open on click when disabled (default trigger)", async () => {
    render(<Dropdown items={items} disabled />)
    const trigger = screen.getByRole("button")
    await userEvent.click(trigger)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("does not open on keyboard activation when disabled", async () => {
    render(<Dropdown items={items} disabled />)
    const trigger = screen.getByRole("button")
    trigger.focus()
    await userEvent.keyboard("{Enter}")
    await userEvent.keyboard(" ")
    await userEvent.keyboard("{ArrowDown}")
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("forwards disabled and aria-disabled to a custom React element trigger", () => {
    render(
      <Dropdown items={items} disabled>
        <button aria-label="Open menu">Custom</button>
      </Dropdown>
    )
    const trigger = screen.getByRole("button", { name: "Open menu" })
    expect(trigger).toBeDisabled()
    expect(trigger).toHaveAttribute("aria-disabled", "true")
  })

  it("does not open on click when custom trigger is disabled", async () => {
    render(
      <Dropdown items={items} disabled>
        <button aria-label="Open menu">Custom</button>
      </Dropdown>
    )
    const trigger = screen.getByRole("button", { name: "Open menu" })
    await userEvent.click(trigger)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("respects consumer-supplied disabled value when rendering a custom trigger", () => {
    render(
      <Dropdown items={items} disabled>
        <button aria-label="Open menu" disabled={false}>
          Custom
        </button>
      </Dropdown>
    )
    const trigger = screen.getByRole("button", { name: "Open menu" })
    expect(trigger).not.toBeDisabled()
  })

  it("ignores controlled open=true when disabled", () => {
    const onOpenChange = vi.fn()
    render(<Dropdown items={items} disabled open onOpenChange={onOpenChange} />)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })

  it("calls onOpenChange(false) when disabled flips to true while controlled open=true", () => {
    const onOpenChange = vi.fn()
    const { rerender } = render(
      <Dropdown items={items} open onOpenChange={onOpenChange} />
    )
    expect(screen.getByText("Create")).toBeInTheDocument()
    rerender(
      <Dropdown items={items} disabled open onOpenChange={onOpenChange} />
    )
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it("does not reopen after disable→enable cycle (uncontrolled)", async () => {
    const { rerender } = render(<Dropdown items={items} />)
    const trigger = screen.getByRole("button")
    await userEvent.click(trigger)
    expect(await screen.findByText("Create")).toBeInTheDocument()
    rerender(<Dropdown items={items} disabled />)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
    rerender(<Dropdown items={items} />)
    expect(screen.queryByText("Create")).not.toBeInTheDocument()
  })
})

describe("Dropdown (experimental) — enabled regression", () => {
  it("opens on click when enabled (default trigger)", async () => {
    render(<Dropdown items={items} />)
    const trigger = screen.getByRole("button")
    expect(trigger).not.toBeDisabled()
    await userEvent.click(trigger)
    expect(await screen.findByText("Create")).toBeInTheDocument()
  })

  // Inside a non-modal dialog-alike the dialog content wrapper is
  // `pointer-events-none` (so the backdrop stays click-through); portaled
  // menu content must opt back in or its items are unclickable when the
  // dropdown is used within a dialog/drawer.
  it("keeps the open menu clickable under pointer-events-none ancestors", async () => {
    render(<Dropdown items={items} />)
    await userEvent.click(screen.getByRole("button"))
    const menu = await screen.findByRole("menu")
    expect(menu.className).toContain("pointer-events-auto")
  })
})
