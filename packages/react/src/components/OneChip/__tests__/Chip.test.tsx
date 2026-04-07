import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { Placeholder } from "@/icons/app"

import { F0Chip } from "../index"

describe("F0Chip", () => {
  it("renders the label text", () => {
    render(<F0Chip label="My Label" />)
    expect(screen.getByText("My Label")).toBeInTheDocument()
  })

  it("renders without any interactive attributes when no onClick or onClose", () => {
    render(<F0Chip label="Static" />)
    // The root chip div has rounded-full; the inner content div does not
    const chip = screen.getByText("Static").closest('[class*="rounded-full"]')!
    expect(chip).not.toHaveAttribute("role")
    expect(chip).not.toHaveAttribute("tabindex")
  })

  describe("variant", () => {
    it("applies default variant classes by default", () => {
      render(<F0Chip label="Default" variant="default" />)
      const chip = screen
        .getByText("Default")
        .closest('[class*="rounded-full"]')!
      expect(chip.className).toContain("border-f1-border")
    })

    it("applies selected variant classes when variant=selected", () => {
      render(<F0Chip label="Selected" variant="selected" />)
      const chip = screen
        .getByText("Selected")
        .closest('[class*="rounded-full"]')!
      expect(chip.className).toContain("border-f1-border-selected")
    })
  })

  describe("deactivated", () => {
    it("renders label with reduced opacity class when deactivated=true", () => {
      render(<F0Chip label="Inactive" deactivated />)
      const span = screen.getByText("Inactive")
      expect(span.className).toContain("text-f1-foreground/[0.61]")
    })

    it("does not apply deactivated class when deactivated is false", () => {
      render(<F0Chip label="Active" deactivated={false} />)
      const span = screen.getByText("Active")
      expect(span).not.toHaveAttribute("class")
    })

    it("sets aria-disabled on the root element when deactivated", () => {
      render(<F0Chip label="Disabled Chip" deactivated />)
      const chip = screen
        .getByText("Disabled Chip")
        .closest('[class*="rounded-full"]')!
      expect(chip).toHaveAttribute("aria-disabled", "true")
    })
  })

  describe("onClick", () => {
    it("calls onClick when the chip is clicked", async () => {
      const onClick = vi.fn()
      render(<F0Chip label="Clickable" onClick={onClick} />)
      await userEvent.click(screen.getByRole("button", { name: "Clickable" }))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("sets role=button and tabIndex=0 when onClick is provided", () => {
      render(<F0Chip label="Button Chip" onClick={() => {}} />)
      const chip = screen.getByRole("button", { name: "Button Chip" })
      expect(chip).toHaveAttribute("tabindex", "0")
    })

    it("calls onClick when Enter key is pressed", async () => {
      const onClick = vi.fn()
      render(<F0Chip label="Keyboard" onClick={onClick} />)
      const chip = screen.getByRole("button", { name: "Keyboard" })
      chip.focus()
      await userEvent.keyboard("{Enter}")
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("calls onClick when Space key is pressed", async () => {
      const onClick = vi.fn()
      render(<F0Chip label="Space" onClick={onClick} />)
      const chip = screen.getByRole("button", { name: "Space" })
      chip.focus()
      await userEvent.keyboard(" ")
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("onClose", () => {
    it("renders a close button when onClose is provided", () => {
      render(<F0Chip label="Closeable" onClose={() => {}} />)
      expect(
        screen.getByRole("button", { name: "Remove Closeable" })
      ).toBeInTheDocument()
    })

    it("calls onClose when the close button is clicked", async () => {
      const onClose = vi.fn()
      render(<F0Chip label="Remove me" onClose={onClose} />)
      await userEvent.click(
        screen.getByRole("button", { name: "Remove Remove me" })
      )
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it("does not call the outer onClick when close button is clicked", async () => {
      const onClick = vi.fn()
      const onClose = vi.fn()
      render(<F0Chip label="Both" onClick={onClick} onClose={onClose} />)
      await userEvent.click(screen.getByRole("button", { name: "Remove Both" }))
      expect(onClose).toHaveBeenCalledTimes(1)
      expect(onClick).not.toHaveBeenCalled()
    })

    it("does not render a close button when onClose is not provided", () => {
      render(<F0Chip label="No close" />)
      expect(
        screen.queryByRole("button", { name: /Remove/ })
      ).not.toBeInTheDocument()
    })
  })

  describe("icon", () => {
    it("renders an icon when icon prop is provided", () => {
      render(<F0Chip label="With icon" icon={Placeholder} />)
      expect(screen.getByText("With icon")).toBeInTheDocument()
      // Icon renders as an svg — verify the chip renders without throwing
      const chip = screen.getByText("With icon").closest("div")!
      expect(chip.querySelector("svg")).toBeInTheDocument()
    })
  })

  describe("avatar", () => {
    it("renders an avatar when avatar prop is provided", () => {
      render(
        <F0Chip
          label="John Doe"
          avatar={{
            type: "person",
            firstName: "John",
            lastName: "Doe",
          }}
        />
      )
      expect(screen.getByText("John Doe")).toBeInTheDocument()
    })
  })
})
