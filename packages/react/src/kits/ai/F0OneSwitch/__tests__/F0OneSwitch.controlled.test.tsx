import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { render } from "@/testing/test-utils"

import { F0OneSwitch } from "../F0OneSwitch"

describe("F0OneSwitch, controlled", () => {
  it("renders with no AI provider at all", () => {
    // Uncontrolled, this returns `null` outside `F0AiChatProvider` — and
    // `useAiChat()` returns a no-op proxy rather than throwing, so the failure
    // is completely silent. That is the trap the controlled mode exists for:
    // the meeting header is mounted above the provider on purpose.
    render(<F0OneSwitch checked={false} onCheckedChange={vi.fn()} />)
    expect(screen.getByRole("switch")).toBeVisible()
  })

  it("still renders nothing outside a provider when uncontrolled", () => {
    const { container } = render(<F0OneSwitch />)
    expect(container).toBeEmptyDOMElement()
  })

  it("reports the state it was handed", () => {
    const { rerender } = render(
      <F0OneSwitch checked={false} onCheckedChange={vi.fn()} />
    )
    expect(screen.getByRole("switch")).toHaveAttribute(
      "data-state",
      "unchecked"
    )

    rerender(<F0OneSwitch checked onCheckedChange={vi.fn()} />)
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked")
  })

  it("calls the handler instead of the context", async () => {
    const onCheckedChange = vi.fn()
    render(<F0OneSwitch checked={false} onCheckedChange={onCheckedChange} />)

    await userEvent.click(screen.getByRole("switch"))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("still fires onToggle", async () => {
    const onToggle = vi.fn()
    render(
      <F0OneSwitch
        checked={false}
        onCheckedChange={vi.fn()}
        onToggle={onToggle}
      />
    )
    await userEvent.click(screen.getByRole("switch"))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it("does not fire when disabled", async () => {
    const onCheckedChange = vi.fn()
    render(
      <F0OneSwitch checked={false} onCheckedChange={onCheckedChange} disabled />
    )
    await userEvent.click(screen.getByRole("switch"))
    expect(onCheckedChange).not.toHaveBeenCalled()
  })
})
