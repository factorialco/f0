import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { File, Marketplace } from "@/icons/app"

import { type F0AiChatWelcomeCard } from "../../F0AiChat/types"
import { WelcomeScreenCardsRow } from "../components/WelcomeScreenCardsRow"

const clickCard = async (title: string) => {
  const card = screen.getByText(title).closest('[data-testid="card"]')
  expect(card).not.toBeNull()
  await userEvent.click(card as HTMLElement)
}

describe("WelcomeScreenCardsRow", () => {
  it("renders every card's title and description", () => {
    const cards: F0AiChatWelcomeCard[] = [
      {
        icon: File,
        title: "Empty survey",
        description: "Start from scratch",
        message: "Create an empty survey.",
      },
      {
        icon: Marketplace,
        title: "Templates",
        description: "Browse pre-made surveys",
        message: "Show me the survey templates.",
      },
    ]

    render(<WelcomeScreenCardsRow cards={cards} onCardSelect={vi.fn()} />)

    expect(screen.getByText("Empty survey")).toBeInTheDocument()
    expect(screen.getByText("Start from scratch")).toBeInTheDocument()
    expect(screen.getByText("Templates")).toBeInTheDocument()
    expect(screen.getByText("Browse pre-made surveys")).toBeInTheDocument()
  })

  it("calls onCardSelect with the message when a prompt card is clicked", async () => {
    const onCardSelect = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      { icon: File, title: "Empty survey", message: "Create an empty survey." },
    ]

    render(<WelcomeScreenCardsRow cards={cards} onCardSelect={onCardSelect} />)
    await clickCard("Empty survey")

    expect(onCardSelect).toHaveBeenCalledTimes(1)
    expect(onCardSelect).toHaveBeenCalledWith("Create an empty survey.")
  })

  it("calls onClick (not onCardSelect) when an action card is clicked", async () => {
    const onCardSelect = vi.fn()
    const onClick = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      {
        icon: Marketplace,
        title: "Templates",
        message: "ignored when onClick is present",
        onClick,
      },
    ]

    render(<WelcomeScreenCardsRow cards={cards} onCardSelect={onCardSelect} />)
    await clickCard("Templates")

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onCardSelect).not.toHaveBeenCalled()
  })
})
