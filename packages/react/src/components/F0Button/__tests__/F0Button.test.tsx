import { userEvent } from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import { Add } from "@/icons/app"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { F0Button } from "../index"

describe("F0Button", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

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

  it("keeps focus when overflow measurement enables the automatic tooltip", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(200)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(100)

    render(<F0Button label="A long button label" />)
    const user = userEvent.setup()
    const button = screen.getByRole("button")
    button.focus()
    await user.hover(button)

    expect(
      await screen.findByRole("tooltip", undefined, { timeout: 2_000 })
    ).toHaveTextContent("A long button label")
    expect(button).toHaveFocus()
    expect(screen.getByRole("button")).toBe(button)
  })

  it("prefers an explicit tooltip over the overflowing label", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(200)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(100)

    render(<F0Button label="A long button label" tooltip="Explicit guidance" />)
    await userEvent.hover(screen.getByRole("button"))

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Explicit guidance"
    )
  })

  it("keeps the hidden-label automatic tooltip", async () => {
    render(<F0Button label="Add item" icon={Add} hideLabel round />)
    await userEvent.hover(screen.getByRole("button"))

    expect(await screen.findByRole("tooltip")).toHaveTextContent("Add item")
  })

  it("does not show an overflow tooltip when noAutoTooltip is set", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(200)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(100)

    render(<F0Button label="A long button label" noAutoTooltip />)
    await userEvent.hover(screen.getByRole("button"))

    await expect(
      screen.findByRole("tooltip", undefined, { timeout: 500 })
    ).rejects.toThrow()
  })

  it("does not show an automatic tooltip when the visible label fits", async () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(100)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(100)

    render(<F0Button label="Short label" />)
    await userEvent.hover(screen.getByRole("button"))

    await expect(
      screen.findByRole("tooltip", undefined, { timeout: 500 })
    ).rejects.toThrow()
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
})
