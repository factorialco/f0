import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { userEvent, zeroRender as render } from "@/testing/test-utils"

import { PageNavigation } from "../index"

describe("PageNavigation", () => {
  it("renders the counter", () => {
    render(<PageNavigation counter={{ current: 2, total: 10 }} />)
    expect(screen.getByText("2/10")).toBeInTheDocument()
  })

  it("renders a link for a url target", () => {
    render(<PageNavigation next={{ url: "/items/3", title: "Third" }} />)
    const next = screen.getByRole("link", { name: "Third" })
    expect(next).toHaveAttribute("href", "/items/3")
  })

  it("renders a button (no href) and fires onClick for a callback target", async () => {
    const onClick = vi.fn()
    render(<PageNavigation next={{ onClick, title: "Third" }} />)

    const next = screen.getByRole("button", { name: "Third" })
    expect(next).not.toHaveAttribute("href")

    await userEvent.click(next)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("prefers onClick over url when both are present", async () => {
    const onClick = vi.fn()
    render(
      <PageNavigation next={{ onClick, url: "/items/3", title: "Third" }} />
    )
    const next = screen.getByRole("button", { name: "Third" })
    expect(next).not.toHaveAttribute("href")
    await userEvent.click(next)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders both arrows disabled with no tooltip when targets are absent", () => {
    render(<PageNavigation counter={{ current: 1, total: 5 }} />)
    // A disabled arrow renders a non-interactive span (aria-disabled), not a
    // link/button, and carries no native title (no "no-op" tooltip).
    const previous = screen.getByLabelText("Previous")
    const next = screen.getByLabelText("Next")
    expect(previous).toHaveAttribute("aria-disabled", "true")
    expect(next).toHaveAttribute("aria-disabled", "true")
    expect(previous).not.toHaveAttribute("href")
    expect(previous).not.toHaveAttribute("title")
    expect(next).not.toHaveAttribute("title")
  })
})
