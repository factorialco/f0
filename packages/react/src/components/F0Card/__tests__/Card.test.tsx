import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { Briefcase } from "@/icons/app"
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

  it("does not call onClick when the card selection checkbox is clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    const handleSelect = vi.fn()

    render(
      <F0Card
        title="Selectable Card"
        selectable={true}
        onClick={handleClick}
        onSelect={handleSelect}
      />
    )

    const card = screen.getByTestId("card")
    await user.hover(card)

    await user.click(screen.getByRole("checkbox"))

    expect(handleSelect).toHaveBeenCalledWith(true)
    expect(handleClick).not.toHaveBeenCalled()
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

  it("renders tooltip with property label on metadata icon hover", async () => {
    const user = userEvent.setup()

    render(
      <F0Card
        title="Card with metadata"
        metadata={[
          {
            icon: Briefcase,
            property: { type: "text", label: "Job title", value: "Engineer" },
          },
        ]}
      />
    )

    const icon = document.querySelector("svg")!
    await user.hover(icon)

    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toHaveTextContent("Job title")
    })
  })

  describe("alert prop", () => {
    it("renders the alert banner when alert is provided", () => {
      render(
        <F0Card
          title="Card with alert"
          alert={{ variant: "warning", title: "Watch out!" }}
        />
      )

      expect(screen.getByText("Watch out!")).toBeInTheDocument()
    })

    it("renders alert banner for each variant", () => {
      const variants = ["info", "warning", "critical", "positive"] as const

      variants.forEach((variant) => {
        const { unmount } = render(
          <F0Card title="Card" alert={{ variant, title: `${variant} alert` }} />
        )
        expect(screen.getByText(`${variant} alert`)).toBeInTheDocument()
        unmount()
      })
    })

    it("does not render the alert banner when visible is false", () => {
      render(
        <F0Card
          title="Card"
          alert={{ variant: "info", title: "Hidden alert", visible: false }}
        />
      )

      expect(screen.queryByText("Hidden alert")).not.toBeInTheDocument()
    })

    it("renders alert without dismiss button when dismissible is not set", () => {
      render(
        <F0Card title="Card" alert={{ variant: "info", title: "Info alert" }} />
      )

      expect(
        screen.queryByRole("button", { name: /close/i })
      ).not.toBeInTheDocument()
    })

    it("renders dismiss button when dismissible is true", () => {
      const onDismiss = vi.fn()
      render(
        <F0Card
          title="Card"
          alert={{
            variant: "info",
            title: "Dismissible alert",
            dismissible: true,
            onDismiss,
          }}
        />
      )

      expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
    })

    it("calls onDismiss when the dismiss button is clicked", async () => {
      const user = userEvent.setup()
      const onDismiss = vi.fn()

      render(
        <F0Card
          title="Card"
          alert={{
            variant: "critical",
            title: "Critical alert",
            dismissible: true,
            onDismiss,
          }}
        />
      )

      await user.click(screen.getByRole("button", { name: /close/i }))
      expect(onDismiss).toHaveBeenCalledTimes(1)
    })

    it("renders action button when action is provided", () => {
      const onClick = vi.fn()
      render(
        <F0Card
          title="Card"
          alert={{
            variant: "info",
            title: "Info alert",
            action: { label: "Retry", onClick },
          }}
        />
      )

      expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument()
    })

    it("calls action.onClick when the action button is clicked", async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(
        <F0Card
          title="Card"
          alert={{
            variant: "warning",
            title: "Warning alert",
            action: { label: "Fix it", onClick },
          }}
        />
      )

      await user.click(screen.getByRole("button", { name: "Fix it" }))
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it("does not render dismiss button when action is provided", () => {
      const onClick = vi.fn()
      render(
        <F0Card
          title="Card"
          alert={{
            variant: "info",
            title: "Info alert",
            action: { label: "Act", onClick },
          }}
        />
      )

      expect(
        screen.queryByRole("button", { name: /close/i })
      ).not.toBeInTheDocument()
    })

    it("renders a disabled action button when action.disabled is true", () => {
      render(
        <F0Card
          title="Card"
          alert={{
            variant: "info",
            title: "Info alert",
            action: { label: "Disabled", onClick: vi.fn(), disabled: true },
          }}
        />
      )

      expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled()
    })

    it("renders action as a link when action.href is provided", () => {
      render(
        <F0Card
          title="Card"
          alert={{
            variant: "info",
            title: "Info alert",
            action: { label: "View", href: "/policies" },
          }}
        />
      )

      const link = screen.getByRole("link", { name: "View" })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", "/policies")
    })

    it("does not render a button when action.href is provided", () => {
      render(
        <F0Card
          title="Card"
          alert={{
            variant: "info",
            title: "Info alert",
            action: { label: "View", href: "/policies" },
          }}
        />
      )

      expect(
        screen.queryByRole("button", { name: "View" })
      ).not.toBeInTheDocument()
    })
  })

  describe("bookmark", () => {
    it("renders a bookmark toggle with the provided label", () => {
      render(
        <F0Card
          title="Card"
          bookmark={{
            bookmarked: false,
            onBookmarkChange: vi.fn(),
            label: "Save product",
          }}
        />
      )

      expect(
        screen.getByRole("button", { name: "Save product" })
      ).toBeInTheDocument()
    })

    it("calls onBookmarkChange with the next state when toggled", async () => {
      const onBookmarkChange = vi.fn()
      render(
        <F0Card
          title="Card"
          bookmark={{
            bookmarked: false,
            onBookmarkChange,
            label: "Save product",
          }}
        />
      )

      await userEvent.click(
        screen.getByRole("button", { name: "Save product" })
      )

      expect(onBookmarkChange).toHaveBeenCalledWith(true)
    })

    it("does not trigger card navigation when the bookmark is toggled", async () => {
      const onClick = vi.fn()
      const onBookmarkChange = vi.fn()
      render(
        <F0Card
          title="Card"
          onClick={onClick}
          bookmark={{
            bookmarked: false,
            onBookmarkChange,
            label: "Save product",
          }}
        />
      )

      await userEvent.click(
        screen.getByRole("button", { name: "Save product" })
      )

      expect(onBookmarkChange).toHaveBeenCalledWith(true)
      expect(onClick).not.toHaveBeenCalled()
    })

    it("falls back to the card title as the accessible label", () => {
      render(
        <F0Card
          title="My device"
          bookmark={{ bookmarked: true, onBookmarkChange: vi.fn() }}
        />
      )

      expect(screen.getByTestId("card-bookmark-toggle")).toHaveAccessibleName(
        "My device"
      )
    })

    it("always has an accessible name when no label or title is provided", () => {
      render(
        <F0Card bookmark={{ bookmarked: false, onBookmarkChange: vi.fn() }} />
      )

      const toggle = screen.getByTestId("card-bookmark-toggle")
      expect(toggle).toHaveAttribute("aria-label")
      expect(toggle.getAttribute("aria-label")).toBeTruthy()
    })
  })

  describe("subtleBorder", () => {
    it("does not apply the subtle border by default", () => {
      render(<F0Card title="Card" />)
      expect(screen.getByTestId("card")).not.toHaveClass(
        "border-f1-border-secondary"
      )
    })

    it("applies the subtle border when enabled", () => {
      render(<F0Card title="Card" subtleBorder />)
      expect(screen.getByTestId("card")).toHaveClass(
        "border-f1-border-secondary"
      )
    })
  })
})
