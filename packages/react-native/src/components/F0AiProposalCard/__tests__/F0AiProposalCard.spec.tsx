import { fireEvent, render, screen } from "@testing-library/react-native"
import React from "react"

import { Add } from "../../../icons/app"
import { F0AiProposalCard } from "../F0AiProposalCard"

const longDescription =
  "The screen flickers only when the laptop runs on battery. It stops as soon as the charger is plugged in. The user already updated the graphics drivers without any success."

const baseProps = {
  module: "ai_ticketing",
  heading: "Review before creating",
  subtitle: "Customer Support · IT Support",
  title: "Laptop screen flickering on battery",
  description: longDescription,
  seeMoreLabel: "See more",
} as const

describe("F0AiProposalCard", () => {
  it("Snapshot - with actions", () => {
    const { toJSON } = render(
      <F0AiProposalCard
        {...baseProps}
        primaryActionLabel="Confirm"
        primaryActionIcon={Add}
        onPrimaryAction={jest.fn()}
      />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it("Snapshot - hidden actions", () => {
    const { toJSON } = render(
      <F0AiProposalCard {...baseProps} showActions={false} />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it("renders the heading, title and subtitle", () => {
    render(
      <F0AiProposalCard
        {...baseProps}
        primaryActionLabel="Confirm"
        onPrimaryAction={jest.fn()}
      />
    )

    expect(screen.getByText("Review before creating")).toBeDefined()
    expect(
      screen.getByText("Laptop screen flickering on battery")
    ).toBeDefined()
    expect(screen.getByText("Customer Support · IT Support")).toBeDefined()
  })

  it("truncates a long description and expands it on see more", () => {
    render(
      <F0AiProposalCard
        {...baseProps}
        maxCollapsedDescriptionLength={40}
        primaryActionLabel="Confirm"
        onPrimaryAction={jest.fn()}
      />
    )

    fireEvent.press(screen.getByText("See more"))

    expect(screen.queryByText("See more")).toBeNull()
  })

  it("does not show see more when the description fits", () => {
    render(
      <F0AiProposalCard
        {...baseProps}
        description="Short description"
        primaryActionLabel="Confirm"
        onPrimaryAction={jest.fn()}
      />
    )

    expect(screen.queryByText("See more")).toBeNull()
  })

  it("calls onPrimaryAction when the action is pressed", () => {
    const onPrimaryAction = jest.fn()

    render(
      <F0AiProposalCard
        {...baseProps}
        primaryActionLabel="Confirm"
        onPrimaryAction={onPrimaryAction}
      />
    )

    fireEvent.press(screen.getByRole("button"))

    expect(onPrimaryAction).toHaveBeenCalledTimes(1)
  })

  it("renders without a module avatar", () => {
    render(
      <F0AiProposalCard
        {...baseProps}
        module={undefined}
        primaryActionLabel="Confirm"
        onPrimaryAction={jest.fn()}
      />
    )

    expect(
      screen.getByText("Laptop screen flickering on battery")
    ).toBeDefined()
  })
})
