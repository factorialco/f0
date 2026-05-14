import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import Check from "@/icons/app/Check"

import { F0AiProposalConfirmationCard } from "../F0AiProposalConfirmationCard"

const defaultProps = {
  module: "tasks" as const,
  heading: "Review this ticket",
  title: "Cannot access payroll documents",
  subtitle: "People Team · Payroll",
  description: "The employee cannot download last month's payslip.",
  seeMoreLabel: "See more",
  primaryActionLabel: "Send ticket",
  secondaryActionLabel: "Cancel",
  onPrimaryAction: vi.fn(),
  onSecondaryAction: vi.fn(),
}

describe("F0AiProposalConfirmationCard", () => {
  it("renders proposal content and actions", () => {
    render(<F0AiProposalConfirmationCard {...defaultProps} />)

    expect(screen.getByText("Review this ticket")).toBeInTheDocument()
    expect(screen.getByText("People Team · Payroll")).toBeInTheDocument()
    expect(
      screen.getByText("Cannot access payroll documents")
    ).toBeInTheDocument()
    expect(
      screen.getByText("The employee cannot download last month's payslip.")
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Send ticket" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument()
  })

  it("renders without optional module and subtitle", () => {
    render(
      <F0AiProposalConfirmationCard
        {...defaultProps}
        module={undefined}
        subtitle={undefined}
      />
    )

    expect(screen.getByText("Review this ticket")).toBeInTheDocument()
    expect(screen.queryByText("People Team · Payroll")).not.toBeInTheDocument()
  })

  it("hides action buttons when showActions is false", () => {
    render(
      <F0AiProposalConfirmationCard {...defaultProps} showActions={false} />
    )

    expect(
      screen.queryByRole("button", { name: "Send ticket" })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Cancel" })
    ).not.toBeInTheDocument()
  })

  it("calls action callbacks", async () => {
    const user = userEvent.setup()
    const onPrimaryAction = vi.fn()
    const onSecondaryAction = vi.fn()

    render(
      <F0AiProposalConfirmationCard
        {...defaultProps}
        primaryActionIcon={Check}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
      />
    )

    await user.click(screen.getByRole("button", { name: "Send ticket" }))
    await user.click(screen.getByRole("button", { name: "Cancel" }))

    expect(onPrimaryAction).toHaveBeenCalledTimes(1)
    expect(onSecondaryAction).toHaveBeenCalledTimes(1)
  })

  it("truncates long descriptions and expands them inline", async () => {
    const user = userEvent.setup()
    const description =
      "First line with context.\nSecond line with extra detail."

    render(
      <F0AiProposalConfirmationCard
        {...defaultProps}
        description={description}
        maxCollapsedDescriptionLength={24}
      />
    )

    expect(screen.getByText("First line with context....")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "See more" })).toBeInTheDocument()
    expect(screen.queryByText(description)).not.toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: "See more" }))

    expect(
      screen.getByText((_, element) => element?.textContent === description)
    ).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "See more" })
    ).not.toBeInTheDocument()
  })
})
