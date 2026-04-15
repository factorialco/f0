import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { F0Alert } from "../F0Alert"

describe("F0Alert", () => {
  it("does not render a close button when onClose is not provided", () => {
    render(
      <F0Alert
        variant="info"
        title="Info title"
        description="Info description"
      />
    )

    expect(
      screen.queryByRole("button", { name: /close/i })
    ).not.toBeInTheDocument()
  })

  it("renders a close button when onClose is provided", () => {
    render(
      <F0Alert
        variant="info"
        title="Info title"
        description="Info description"
        onClose={vi.fn()}
      />
    )

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument()
  })

  it("calls onClose when the close button is clicked", async () => {
    const handleClose = vi.fn()

    render(
      <F0Alert
        variant="info"
        title="Info title"
        description="Info description"
        onClose={handleClose}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: /close/i }))

    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it("renders title and description", () => {
    render(
      <F0Alert
        title="Alert title"
        description="Alert description"
        variant="info"
      />
    )

    expect(screen.getByText("Alert title")).toBeInTheDocument()
    expect(screen.getByText("Alert description")).toBeInTheDocument()
  })

  it("renders action button and calls onClick", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(
      <F0Alert
        title="Alert"
        description="Desc"
        variant="info"
        action={{ label: "Click me", onClick }}
      />
    )

    const button = screen.getByRole("button", { name: "Click me" })
    await user.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("renders disabled action button when action.disabled is true", () => {
    render(
      <F0Alert
        title="Alert"
        description="Desc"
        variant="info"
        action={{ label: "Disabled", onClick: vi.fn(), disabled: true }}
      />
    )

    const button = screen.getByRole("button", { name: "Disabled" })
    expect(button).toBeDisabled()
  })

  it("renders link with correct href", () => {
    render(
      <F0Alert
        title="Alert"
        description="Desc"
        variant="info"
        link={{ label: "Learn more", href: "https://example.com" }}
      />
    )

    const link = screen.getByRole("link", { name: /Learn more/ })
    expect(link).toHaveAttribute("href", "https://example.com")
  })

  it("link includes sr-only new-tab warning", () => {
    render(
      <F0Alert
        title="Alert"
        description="Desc"
        variant="info"
        link={{ label: "See more", href: "https://example.com" }}
      />
    )

    expect(screen.getByText("(opens in new tab)")).toBeInTheDocument()
  })

  it("renders nothing in action area when neither action nor link provided", () => {
    const { container } = render(
      <F0Alert title="Alert" description="Desc" variant="neutral" />
    )

    expect(container.querySelector("button")).toBeNull()
    expect(container.querySelector("a")).toBeNull()
  })

  it("renders role=alert for critical variant", () => {
    render(<F0Alert title="Critical" description="Urgent" variant="critical" />)

    // The alert container and F0AvatarAlert both use role="alert" for critical/warning
    const alertRegions = screen.getAllByRole("alert")
    expect(alertRegions.length).toBeGreaterThanOrEqual(1)
  })

  it("renders role=alert for warning variant", () => {
    render(
      <F0Alert title="Warning" description="Be careful" variant="warning" />
    )

    // The alert container and F0AvatarAlert both use role="alert" for warning
    const alertRegions = screen.getAllByRole("alert")
    expect(alertRegions.length).toBeGreaterThanOrEqual(1)
  })

  it("renders role=status for info variant", () => {
    render(<F0Alert title="Info" description="FYI" variant="info" />)

    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("renders role=status for neutral variant", () => {
    render(
      <F0Alert title="Neutral" description="Neutral info" variant="neutral" />
    )

    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("renders role=status for positive variant", () => {
    render(
      <F0Alert title="Positive" description="Good news" variant="positive" />
    )

    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("uses neutral variant as default when variant is omitted", () => {
    render(<F0Alert title="Default" description="No variant prop" />)

    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("forwards dataTestId", () => {
    render(
      <F0Alert
        title="Test ID alert"
        description="Desc"
        variant="info"
        dataTestId="my-alert"
      />
    )

    expect(screen.getByTestId("my-alert")).toBeInTheDocument()
  })
})
