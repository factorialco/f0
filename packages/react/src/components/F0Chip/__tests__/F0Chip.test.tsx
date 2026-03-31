import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"
import { Placeholder } from "@/icons/app"

// Mock F0Avatar to avoid @radix-ui/react-avatar React 18/19 version mismatch in JSDOM
vi.mock("@/components/avatars/F0Avatar", () => ({
  F0Avatar: ({ avatar }: { avatar: { type: string } }) => (
    <div data-testid="f0-avatar" data-avatar-type={avatar.type} />
  ),
}))

import { F0Chip } from "../index"

describe("F0Chip", () => {
  describe("rendering", () => {
    it("renders the label", () => {
      render(<F0Chip label="Hello" />)
      expect(screen.getByText("Hello")).toBeInTheDocument()
    })

    it("does not render a close button by default", () => {
      render(<F0Chip label="Hello" />)
      expect(
        screen.queryByRole("button", { name: "Remove Hello" })
      ).not.toBeInTheDocument()
    })

    it("renders a close button when onClose is provided", () => {
      render(<F0Chip label="Hello" onClose={vi.fn()} />)
      expect(
        screen.getByRole("button", { name: "Remove Hello" })
      ).toBeInTheDocument()
    })

    it("is not a button when no onClick is provided", () => {
      render(<F0Chip label="Hello" />)
      expect(
        screen.queryByRole("button", { name: /Hello/ })
      ).not.toBeInTheDocument()
    })

    it("renders a button for the label area when onClick is provided", () => {
      render(<F0Chip label="Hello" onClick={vi.fn()} />)
      expect(screen.getByRole("button", { name: /Hello/ })).toBeInTheDocument()
    })

    it("applies deactivated style to label text", () => {
      render(<F0Chip label="Deactivated" deactivated />)
      const label = screen.getByText("Deactivated")
      expect(label).toHaveClass("text-f1-foreground/[0.61]")
    })

    it("does not apply deactivated style when deactivated is false", () => {
      render(<F0Chip label="Active" deactivated={false} />)
      const label = screen.getByText("Active")
      expect(label).not.toHaveClass("text-f1-foreground/[0.61]")
    })

    it("sets aria-disabled on the button when deactivated and onClick are both provided", () => {
      render(<F0Chip label="Deactivated" deactivated onClick={vi.fn()} />)
      const btn = screen.getByRole("button", { name: /Deactivated/ })
      expect(btn).toHaveAttribute("aria-disabled", "true")
    })
  })

  describe("variants", () => {
    it("applies default variant classes", () => {
      const { container } = render(<F0Chip label="Default" variant="default" />)
      const chip = container.firstChild as HTMLElement
      expect(chip).toHaveClass("border-f1-border")
    })

    it("applies selected variant classes", () => {
      const { container } = render(
        <F0Chip label="Selected" variant="selected" />
      )
      const chip = container.firstChild as HTMLElement
      expect(chip).toHaveClass("border-f1-border-selected")
      expect(chip).toHaveClass("bg-f1-background-selected-secondary")
    })
  })

  describe("with icon", () => {
    it("renders the icon when provided", () => {
      render(<F0Chip label="With Icon" icon={Placeholder} />)
      expect(screen.getByText("With Icon")).toBeInTheDocument()
    })

    it("applies pl-1.5 class when icon is present without avatar", () => {
      const { container } = render(
        <F0Chip label="With Icon" icon={Placeholder} />
      )
      const chip = container.firstChild as HTMLElement
      expect(chip).toHaveClass("pl-1.5")
    })
  })

  describe("with avatar", () => {
    it("renders the avatar when provided", () => {
      render(
        <F0Chip
          label="Dani Moreno"
          avatar={{
            type: "person",
            firstName: "Dani",
            lastName: "Moreno",
          }}
        />
      )
      expect(screen.getByText("Dani Moreno")).toBeInTheDocument()
      expect(screen.getByTestId("f0-avatar")).toBeInTheDocument()
    })

    it("applies rounded-sm for non-person avatar types", () => {
      const { container } = render(
        <F0Chip
          label="Team"
          avatar={{
            type: "team",
            name: "Engineering",
          }}
        />
      )
      const chip = container.firstChild as HTMLElement
      expect(chip).toHaveClass("rounded-sm")
    })

    it("does not apply rounded-sm for person avatar type", () => {
      const { container } = render(
        <F0Chip
          label="Person"
          avatar={{
            type: "person",
            firstName: "Jane",
            lastName: "Doe",
          }}
        />
      )
      const chip = container.firstChild as HTMLElement
      expect(chip).not.toHaveClass("rounded-sm")
    })
  })

  describe("interactions", () => {
    it("calls onClick when clicked", async () => {
      const onClick = vi.fn()
      render(<F0Chip label="Clickable" onClick={onClick} />)

      await userEvent.click(screen.getByRole("button", { name: /Clickable/ }))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("calls onClick when Enter key is pressed", async () => {
      const onClick = vi.fn()
      render(<F0Chip label="Clickable" onClick={onClick} />)

      const chip = screen.getByRole("button", { name: /Clickable/ })
      chip.focus()
      await userEvent.keyboard("{Enter}")
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("calls onClick when Space key is pressed", async () => {
      const onClick = vi.fn()
      render(<F0Chip label="Clickable" onClick={onClick} />)

      const chip = screen.getByRole("button", { name: /Clickable/ })
      chip.focus()
      await userEvent.keyboard(" ")
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("calls onClose when close button is clicked", async () => {
      const onClose = vi.fn()
      render(<F0Chip label="Removable" onClose={onClose} />)

      await userEvent.click(
        screen.getByRole("button", { name: "Remove Removable" })
      )
      expect(onClose).toHaveBeenCalledTimes(1)
    })

    it("does not propagate click to parent when close button is clicked", async () => {
      const onClick = vi.fn()
      const onClose = vi.fn()
      render(<F0Chip label="Both" onClick={onClick} onClose={onClose} />)

      await userEvent.click(screen.getByRole("button", { name: "Remove Both" }))
      expect(onClose).toHaveBeenCalledTimes(1)
      expect(onClick).not.toHaveBeenCalled()
    })
  })
})
