import { describe, expect, it, vi } from "vitest"

import { Add } from "@/icons/app"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { TOCAction } from "../types"
import { TOCFooter } from "./index"

describe("TOCFooter", () => {
  it("renders nothing when actions is undefined", () => {
    const { container } = render(<TOCFooter actions={undefined} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders nothing when actions is an empty array", () => {
    const { container } = render(<TOCFooter actions={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("renders one button per action", () => {
    const actions: TOCAction[] = [
      { label: "Add section", onClick: vi.fn() },
      { label: "Import", onClick: vi.fn() },
    ]
    render(<TOCFooter actions={actions} />)
    expect(
      screen.getByRole("button", { name: "Add section" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Import" })).toBeInTheDocument()
  })

  it("calls onClick when a button is clicked", async () => {
    const onClick = vi.fn()
    render(<TOCFooter actions={[{ label: "Add section", onClick }]} />)
    await userEvent.click(screen.getByRole("button", { name: "Add section" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not call onClick when the action is disabled", async () => {
    const onClick = vi.fn()
    render(
      <TOCFooter
        actions={[{ label: "Add section", onClick, disabled: true }]}
      />
    )
    const button = screen.getByRole("button", { name: "Add section" })
    expect(button).toBeDisabled()
    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("renders an icon when provided", () => {
    const actions: TOCAction[] = [
      { label: "Add section", onClick: vi.fn(), icon: Add },
    ]
    const { container } = render(<TOCFooter actions={actions} />)
    expect(container.querySelector("svg")).toBeInTheDocument()
  })
})
