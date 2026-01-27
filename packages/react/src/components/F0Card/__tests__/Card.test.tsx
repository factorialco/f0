import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import type { CardSecondaryLink } from "../components/CardActions"

import { F0Card } from "../F0Card"

describe("F0Card Component", () => {
  it("renders title and description correctly", () => {
    render(
      <F0Card title="Test Card Title" description="Test card description" />
    )

    expect(screen.getByText("Test Card Title")).toBeInTheDocument()
    expect(screen.getByText("Test card description")).toBeInTheDocument()
  })

  it("renders as a clickable card when link is provided", () => {
    render(<F0Card title="Linked Card" link="/test-link" />)

    const link = screen.getByRole("link", { name: "Linked Card" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test-link")
  })

  it("calls onClick when card is clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<F0Card title="Clickable Card" onClick={handleClick} />)

    await user.click(screen.getByText("Clickable Card"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("renders an image when provided", () => {
    render(<F0Card title="Image Card" image="/path/to/test-image.jpg" />)

    const image = screen.getByRole("img", { name: "Image Card" })
    expect(image).toHaveAttribute("src", "/path/to/test-image.jpg")
  })

  it("renders an avatar when provided", () => {
    render(
      <F0Card
        title="Avatar Card"
        avatar={{ type: "person", firstName: "Daniel", lastName: "Moreno" }}
      />
    )

    expect(screen.getByTestId("card-avatar")).toBeInTheDocument()
  })

  it("calls onSelect when the card is selected", async () => {
    const user = userEvent.setup()
    const handleSelect = vi.fn()

    render(
      <F0Card
        title="Selectable Card"
        selectable={true}
        onSelect={handleSelect}
      />
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    await user.hover(card)

    const selectionElement = screen.getByRole("checkbox")
    expect(selectionElement).toBeInTheDocument()

    await user.click(selectionElement)
    expect(handleSelect).toHaveBeenCalledWith(true)
  })

  it("handles dropdown actions", async () => {
    const user = userEvent.setup()
    const handleOption = vi.fn()

    const otherActions = [
      {
        label: "Edit",
        onClick: vi.fn(),
      },
      {
        label: "Delete",
        onClick: handleOption,
      },
    ]

    render(<F0Card title="Test Card" otherActions={otherActions} />)

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()
    await user.hover(card)

    const dropdownTrigger = screen.getByTestId("card-options-dropdown")
    await user.click(dropdownTrigger)

    const deleteOption = screen.getByRole("menuitem", { name: "Delete" })
    await user.click(deleteOption)

    await waitFor(() => expect(handleOption).toHaveBeenCalledTimes(1))
  })

  it("handles primary action", async () => {
    const user = userEvent.setup()
    const handlePrimaryAction = vi.fn()

    render(
      <F0Card
        title="Test Card"
        primaryAction={{
          label: "Primary Action",
          onClick: handlePrimaryAction,
        }}
      />
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    const primaryButton = screen.getByTestId("primary-button")
    expect(primaryButton).toBeInTheDocument()

    await user.click(primaryButton)
    expect(handlePrimaryAction).toHaveBeenCalledTimes(1)
  })

  it("handles primary action on mobile", async () => {
    Object.defineProperty(window, "innerWidth", { value: 375 })
    const user = userEvent.setup()
    const handlePrimaryAction = vi.fn()

    render(
      <F0Card
        title="Test Card"
        primaryAction={{
          label: "Primary Action",
          onClick: handlePrimaryAction,
        }}
      />
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    const primaryButton = screen.getByTestId("primary-button")
    expect(primaryButton).toBeInTheDocument()

    await user.click(primaryButton)
    expect(handlePrimaryAction).toHaveBeenCalledTimes(1)
  })

  it("renders a secondary action link", async () => {
    const secondaryLink: CardSecondaryLink = {
      label: "View more",
      href: "/test-page",
      target: "_blank",
      disabled: false,
    }

    render(<F0Card title="Test Card" secondaryActions={secondaryLink} />)

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    const linkElement = screen.getByTestId("secondary-link")
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", "/test-page")
    expect(linkElement).toHaveAttribute("target", "_blank")
    expect(linkElement).not.toHaveAttribute("disabled")
  })
})
