import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Dialog } from "../index"

describe("F0Dialog", () => {
  const props = {
    isOpen: true,
    title: "Edit widgets",
    description: "Choose the widgets for your home",
    asBottomSheetInMobile: false,
    children: "Widget preview",
  }

  it("preserves the default overlay and Escape dismissal", async () => {
    const onClose = vi.fn()
    render(<F0Dialog {...props} onClose={onClose} />)

    expect(screen.getByRole("dialog", { name: "Edit widgets" })).toBeVisible()
    expect(
      document.querySelector(".bg-f1-background-overlay")
    ).toBeInTheDocument()
    await userEvent.keyboard("{Escape}")
    expect(onClose).toHaveBeenCalledOnce()
  })

  it("renders embedded content inside its container without blocking neighboring controls", async () => {
    const onClose = vi.fn()
    const outsideAction = vi.fn()
    const host = document.createElement("section")
    document.body.appendChild(host)
    const { unmount } = render(
      <>
        <button onClick={outsideAction}>Open One</button>
        <F0Dialog
          {...props}
          embedded
          position="fullscreen"
          container={host}
          onClose={onClose}
        />
      </>
    )

    expect(host).toContainElement(screen.getByRole("dialog"))
    expect(
      document.querySelector(".bg-f1-background-overlay")
    ).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole("button", { name: "Open One" }))
    expect(outsideAction).toHaveBeenCalledOnce()
    expect(onClose).not.toHaveBeenCalled()
    expect(screen.getByRole("dialog")).toBeInTheDocument()
    unmount()
    host.remove()
  })

  it("only applies compact fullscreen spacing when requested", () => {
    const onClose = vi.fn()
    const { rerender } = render(
      <F0Dialog {...props} position="fullscreen" onClose={onClose} />
    )
    expect(screen.getByRole("dialog")).toHaveClass("inset-6")

    rerender(
      <F0Dialog
        {...props}
        embedded
        compactInset
        position="fullscreen"
        onClose={onClose}
      />
    )
    expect(screen.getByRole("dialog")).toHaveClass(
      "absolute",
      "inset-1",
      "left-0"
    )
    expect(screen.getByRole("dialog")).not.toHaveClass("inset-6")
  })

  it("renders and invokes a labeled header action", async () => {
    const onClick = vi.fn()
    render(
      <F0Dialog
        {...props}
        onClose={vi.fn()}
        headerAction={{ label: "New widget", variant: "outline", onClick }}
      />
    )
    await userEvent.click(screen.getByRole("button", { name: "New widget" }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("guards close and Escape until closing is enabled again", async () => {
    const onClose = vi.fn()
    const { rerender } = render(
      <F0Dialog {...props} closeDisabled onClose={onClose} />
    )
    const close = screen.getByRole("button", { name: "Close" })
    expect(close).toBeDisabled()
    await userEvent.click(close)
    await userEvent.keyboard("{Escape}")
    expect(onClose).not.toHaveBeenCalled()

    rerender(<F0Dialog {...props} onClose={onClose} />)
    await userEvent.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledOnce()
  })
})
