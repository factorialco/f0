import { describe, expect, it, vi } from "vitest"

import { fireEvent, screen, zeroRender as render } from "@/testing/test-utils"

import { BaseMapMarker } from "../BaseMapMarker"

describe("BaseMapMarker", () => {
  it("renders the complete count and applies the requested palette step", () => {
    render(
      <BaseMapMarker variant="count" count="42" color="malibu" colorStep={70} />
    )

    const count = screen.getByText("42")
    expect(count).toBeInTheDocument()
    expect(count.parentElement).toHaveStyle({
      backgroundColor: "hsl(216 48% 44%)",
    })
  })

  it("uses contrast-aware count ink across palette steps", () => {
    const { rerender } = render(
      <BaseMapMarker variant="count" count="4" color="red" colorStep={10} />
    )

    expect(screen.getByText("4").parentElement).toHaveStyle({
      backgroundColor: "hsl(5 100% 65% / 0.1)",
    })
    expect(screen.getByText("4")).toHaveStyle({
      color: "hsl(var(--neutral-90))",
    })

    rerender(
      <BaseMapMarker variant="count" count="12" color="red" colorStep={50} />
    )
    expect(screen.getByText("12")).toHaveStyle({
      color: "hsl(219 88% 6% / 0.92)",
    })

    rerender(
      <BaseMapMarker variant="count" count="22" color="malibu" colorStep={70} />
    )
    expect(screen.getByText("22")).toHaveStyle({
      color: "hsl(var(--white-100))",
    })
  })

  it("uses semantic ink without a glow for count labels", () => {
    render(
      <BaseMapMarker
        variant="count"
        count="39"
        color="malibu"
        label="Barcelona HQ"
      />
    )

    const label = screen.getByText("Barcelona HQ")
    expect(label).toHaveClass("text-f1-foreground")
    expect(label.style.color).toBe("")
    expect(label.style.textShadow).toBe("")
  })

  it("keeps route-stop letters limited to one uppercase character", () => {
    render(<BaseMapMarker variant="letter" letter="ab" />)
    expect(screen.getByText("A")).toBeInTheDocument()
    expect(screen.queryByText("AB")).not.toBeInTheDocument()
  })

  it("keeps presentational pointer targets out of the accessibility tree", () => {
    const onClick = vi.fn()
    const { container } = render(
      <BaseMapMarker
        variant="count"
        count="12"
        presentational
        onClick={onClick}
      />
    )

    const marker = screen.getByText("12").closest("[aria-hidden='true']")
    expect(marker).toHaveProperty("tagName", "SPAN")
    expect(marker).not.toHaveAttribute("tabindex")
    expect(screen.queryByRole("button")).not.toBeInTheDocument()

    const pointerTarget = container.querySelector("span.cursor-pointer")
    if (!(pointerTarget instanceof HTMLElement)) {
      throw new Error("Expected a presentational pointer target")
    }
    fireEvent(
      pointerTarget,
      new MouseEvent("pointerup", { button: 0, bubbles: true })
    )
    expect(onClick).toHaveBeenCalledTimes(1)

    fireEvent(
      pointerTarget,
      new MouseEvent("pointerup", { button: 2, bubbles: true })
    )
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
