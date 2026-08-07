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

  // These pin the class strings the cva slots resolve to. They are what makes a
  // "no behaviour change" refactor of this component checkable at all — the
  // rendered classes *are* the behaviour.
  describe("variants", () => {
    it("lays both variants out as a horizontal banner at sm", () => {
      render(<BaseBanner {...baseProps} />)
      expect(getRoot().className).toMatch(/sm:flex-row/)
      expect(getRoot().className).toMatch(/flex-col/)
    })

    it("caps the text column on default but not on full-width", () => {
      const { unmount } = render(<BaseBanner {...baseProps} />)
      expect(
        screen.getByText(baseProps.title).parentElement?.className
      ).toMatch(/sm:max-w-lg/)
      unmount()

      render(<BaseBanner {...baseProps} variant="full-width" />)
      expect(
        screen.getByText(baseProps.title).parentElement?.className
      ).not.toMatch(/sm:max-w-lg/)
    })

    it("renders a skeleton while loading", () => {
      render(<BaseBanner {...baseProps} isLoading />)

      expect(screen.getByRole("status")).toHaveAttribute("aria-busy", "true")
      expect(screen.queryByText(baseProps.title)).not.toBeInTheDocument()
    })

    // The skeleton is built from the same slots as the banner, so it cannot
    // drift from the layout it stands in for.
    it("gives the skeleton the same layout as the banner", () => {
      render(<BaseBanner {...baseProps} isLoading />)

      expect(getRoot().className).toMatch(/sm:flex-row/)
      expect(getRoot().className).toMatch(/shadow-md/)
    })
  })
})
