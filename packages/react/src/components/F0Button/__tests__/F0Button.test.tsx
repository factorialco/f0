import { userEvent } from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { Add } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { ButtonInternal } from "../internal"
import { F0Button } from "../index"

describe("F0Button", () => {
  it("should call the onClick handler when clicked", async () => {
    const onClick = vi.fn()

    render(<F0Button label="Click me" onClick={() => onClick()} />)

    const button = screen.getByRole("button")
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it("should be temporarily disabled when onClick is a promise until the promise resolves", async () => {
    const onClick = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
      vi.fn()
    }

    render(<F0Button label="Click me" onClick={() => onClick()} />)

    const button = screen.getByRole("button", { name: "Click me" })
    await userEvent.click(button)

    expect(button.attributes.getNamedItem("disabled")).not.toBeNull()
    await new Promise((resolve) => setTimeout(resolve, 100))
    expect(button.attributes.getNamedItem("disabled")).toBeNull()
  })

  it("should render with icon", () => {
    render(<F0Button label="Add Item" icon={Add} />)
    const button = screen.getByRole("button")
    const svg = button.querySelector("svg")
    expect(svg).toBeInTheDocument()
    expect(screen.getByText("Add Item")).toBeInTheDocument()
  })

  it("should render the icon after the label when iconPosition is right", () => {
    render(<F0Button label="Open Details" icon={Add} iconPosition="right" />)
    const button = screen.getByRole("button")
    const svg = button.querySelector("svg")
    const label = screen.getByText("Open Details")
    expect(svg).toBeInTheDocument()
    // The icon node should follow the label in DOM order.
    expect(
      label.compareDocumentPosition(svg!) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("should render as icon-only when hideLabel is true", () => {
    render(<F0Button label="Add Item" icon={Add} hideLabel round />)
    const button = screen.getByRole("button")
    const svg = button.querySelector("svg")
    const label = button.querySelector(".sr-only")
    expect(svg).toBeInTheDocument()

    expect(label).toHaveTextContent("Add Item")
  })

  it("should show loading state", () => {
    render(<F0Button label="Submit" loading />)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("should be disabled when disabled prop is true", () => {
    render(<F0Button label="Submit" disabled />)
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  it("should handle async click with error", async () => {
    const onError = vi.fn()
    const onClick = async () => {
      throw new Error("Test error")
    }

    render(
      <F0Button
        label="Error Test"
        onClick={() => {
          onClick().catch(onError)
        }}
      />
    )

    const button = screen.getByRole("button")
    await userEvent.click(button)

    // Button should be enabled after error
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(button).not.toBeDisabled()
    expect(onError).toHaveBeenCalled()
  })

  describe("counter", () => {
    it("renders the counter value", () => {
      render(<F0Button label="To review" counterValue={3} />)
      expect(screen.getByText("3")).toBeInTheDocument()
    })

    it("tightens the button's right padding when a counter is present", () => {
      render(<F0Button label="To review" size="md" counterValue={3} />)
      expect(screen.getByRole("button").className).toContain("[&_.main]:!pr-2")
    })

    it("keeps padding symmetric when there is no counter", () => {
      render(<F0Button label="Review" size="md" />)
      expect(screen.getByRole("button").className).not.toContain("!pr-2")
    })

    it("shows nothing when the count is 0 — no pill, no padding change", () => {
      render(<F0Button label="Review" size="md" counterValue={0} />)
      expect(screen.queryByText("0")).not.toBeInTheDocument()
      expect(screen.getByRole("button").className).not.toContain("!pr-2")
    })

    it("uses the smaller counter on sm and the larger one on md/lg", () => {
      const { container: sm } = render(
        <F0Button label="To review" size="sm" counterValue={3} />
      )
      const { container: lg } = render(
        <F0Button label="To review" size="lg" counterValue={3} />
      )
      const counterClass = (c: HTMLElement) =>
        Array.from(c.querySelectorAll("div")).find((d) =>
          d.className.includes("rounded")
        )?.className ?? ""
      expect(counterClass(sm)).toContain("min-w-4")
      expect(counterClass(lg)).toContain("min-w-5")
    })

    const counterWrapper = () => screen.getByText("3").closest("span")

    it("gives the primary counter a dark pill", () => {
      render(<F0Button variant="default" label="To review" counterValue={3} />)
      expect(counterWrapper()?.className).toContain("dark")
    })

    it("keeps the counter neutral on promote", () => {
      render(<F0Button variant="promote" label="To review" counterValue={3} />)
      expect(counterWrapper()?.className).not.toContain("dark")
    })

    it("darkens the critical counter only on hover", async () => {
      render(<F0Button variant="critical" label="To review" counterValue={3} />)
      expect(counterWrapper()?.className).not.toContain("dark")
      await userEvent.hover(screen.getByRole("button"))
      expect(counterWrapper()?.className).toContain("dark")
    })
  })

  describe("clipped label tooltip", () => {
    // jsdom lays nothing out, so both metrics read 0 and no text ever looks
    // clipped. Stubbing them on the prototype is what makes truncation
    // observable at all — the label span is the element OneEllipsis measures.
    const setLabelWidths = (scrollWidth: number, clientWidth: number) => {
      Object.defineProperty(HTMLElement.prototype, "scrollWidth", {
        configurable: true,
        value: scrollWidth,
      })
      Object.defineProperty(HTMLElement.prototype, "clientWidth", {
        configurable: true,
        value: clientWidth,
      })
    }

    // The measured case: 75 characters needing 486px in a 253px slot.
    const LONG_LABEL =
      "Upload your first receipt and we will fill in the expense details for you"

    // The tooltip is a Radix popper rendered into a portal, so the bubbles on
    // screen are counted from the document rather than from the tree.
    const openTooltips = () =>
      Array.from(
        document.querySelectorAll("[data-radix-popper-content-wrapper]")
      ).map((node) => node.textContent ?? "")

    // Past the label tooltip's 700ms open delay by a wide margin, so what is on
    // screen by now is the resting state: one that was going to open has, and
    // one that is absent is absent for good. These are real timers, and a
    // tighter window flakes under a loaded run.
    const settleAfterHover = () =>
      new Promise((resolve) => setTimeout(resolve, 2500))

    afterEach(() => {
      delete (HTMLElement.prototype as { scrollWidth?: number }).scrollWidth
      delete (HTMLElement.prototype as { clientWidth?: number }).clientWidth
    })

    it("shows the full label when the visible one is clipped", async () => {
      setLabelWidths(486, 253)
      render(<F0Button label={LONG_LABEL} />)

      await userEvent.hover(screen.getByText(LONG_LABEL))
      await settleAfterHover()

      expect(openTooltips().join("")).toContain(LONG_LABEL)
    })

    it("shows nothing when the label fits", async () => {
      setLabelWidths(253, 253)
      render(<F0Button label={LONG_LABEL} />)

      await userEvent.hover(screen.getByText(LONG_LABEL))
      await settleAfterHover()

      expect(openTooltips()).toHaveLength(0)
    })

    it("stays silent under noAutoTooltip, which opts out of every automatic tooltip", async () => {
      setLabelWidths(486, 253)
      // `noAutoTooltip` is private, so the public F0Button strips it before it
      // can reach the label — the internal is the only place it is observable.
      render(<ButtonInternal label={LONG_LABEL} noAutoTooltip />)

      await userEvent.hover(screen.getByText(LONG_LABEL))
      await settleAfterHover()

      expect(openTooltips()).toHaveLength(0)
    })

    it("adds no second tooltip when the button already has an explicit one", () => {
      setLabelWidths(486, 253)
      render(<F0Button label={LONG_LABEL} tooltip="Explicit tooltip" />)

      // Asserted on the markup rather than by hovering: a hover over the label
      // reaches the button's own trigger only intermittently under user-event,
      // and the defect is structural anyway. Radix stamps `data-state` on
      // whatever it makes a trigger, so a clipped label that stays unstamped is
      // exactly the guarantee — two triggers stacked over one pointer used to
      // open together and then close each other for good, leaving the hover
      // showing nothing at all.
      expect(screen.getByText(LONG_LABEL)).not.toHaveAttribute("data-state")
      // ...while the explicit tooltip is still wired up to the button itself.
      expect(screen.getByRole("button")).toHaveAttribute("data-state")
    })
  })
})
