import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { BaseBanner } from "../index"

const baseProps = {
  title: "Submit expenses in seconds",
  subtitle: "Upload receipts. One organizes everything for you.",
  mediaUrl: "https://example.com/media.png",
}

/** The element carrying the layout classes is the banner root. */
const getRoot = () => document.querySelector("div.shadow-md") as HTMLElement

describe("BaseBanner", () => {
  it("renders title, subtitle and media", () => {
    render(<BaseBanner {...baseProps} />)

    expect(screen.getByText(baseProps.title)).toBeVisible()
    expect(screen.getByText(baseProps.subtitle)).toBeVisible()
    expect(
      screen.getByRole("presentation", { hidden: true })
    ).toBeInTheDocument()
  })

  it("renders both actions and calls their handlers", async () => {
    const onPrimary = vi.fn()
    const onSecondary = vi.fn()
    const user = userEvent.setup()

    render(
      <BaseBanner
        {...baseProps}
        primaryAction={{
          label: "Try it out",
          onClick: onPrimary,
          variant: "outline",
        }}
        secondaryAction={{
          label: "Not now",
          onClick: onSecondary,
          variant: "ghost",
        }}
      />
    )

    await user.click(screen.getByRole("button", { name: "Try it out" }))
    await user.click(screen.getByRole("button", { name: "Not now" }))

    expect(onPrimary).toHaveBeenCalledOnce()
    expect(onSecondary).toHaveBeenCalledOnce()
  })

  it("calls onClose and removes itself when dismissed", async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()

    render(<BaseBanner {...baseProps} onClose={onClose} />)
    await user.click(screen.getByRole("button", { name: "Close" }))

    expect(onClose).toHaveBeenCalledOnce()
    expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument()
  })

  it("renders no close button when onClose is omitted", () => {
    render(<BaseBanner {...baseProps} />)

    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument()
  })

  describe('variant="card"', () => {
    it("keeps the vertical stack at every viewport", () => {
      render(<BaseBanner {...baseProps} variant="card" />)

      // The horizontal variants opt into a row layout at the `sm` viewport
      // breakpoint; the card variant must never do that, because it is used in
      // narrow containers (popovers, side panels) on wide viewports.
      expect(getRoot().className).not.toMatch(/sm:flex-row/)
      expect(getRoot().className).toMatch(/flex-col/)
    })

    it("leaves the horizontal variants untouched", () => {
      render(<BaseBanner {...baseProps} />)

      expect(getRoot().className).toMatch(/sm:flex-row/)
    })

    it("clamps the subtitle to two lines", () => {
      render(<BaseBanner {...baseProps} variant="card" />)

      expect(screen.getByText(baseProps.subtitle).className).toMatch(
        /line-clamp-2/
      )
    })

    it("renders a skeleton while loading", () => {
      render(<BaseBanner {...baseProps} variant="card" isLoading />)

      expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
      expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument()
    })
  })

  // `bg-white` is not a class f0 emits: the palette defines `white` as numeric
  // steps (`white-3` … `white-100`) with no `DEFAULT` key, so it produced
  // nothing at all. And preflight is disabled repo-wide, so `border` sets a
  // width with no style and never draws. Every variant needs the real
  // background token and an explicit border style.
  describe("surface", () => {
    it.each(["default", "full-width", "card"] as const)(
      "paints a background and a drawable border in the %s variant",
      (variant) => {
        render(<BaseBanner {...baseProps} variant={variant} />)

        expect(getRoot().className).toMatch(/bg-f1-background/)
        expect(getRoot().className).toMatch(/border-solid/)
        expect(getRoot().className.split(" ")).not.toContain("bg-white")
      }
    )

    it("paints the same surface while loading", () => {
      render(<BaseBanner {...baseProps} isLoading />)

      expect(getRoot().className).toMatch(/bg-f1-background/)
      expect(getRoot().className).toMatch(/border-solid/)
      expect(getRoot().className.split(" ")).not.toContain("bg-white")
    })
  })
})
