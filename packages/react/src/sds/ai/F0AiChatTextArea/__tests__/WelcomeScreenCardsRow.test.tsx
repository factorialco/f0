import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { File, Marketplace } from "@/icons/app"

import { type F0AiChatWelcomeCard } from "../../F0AiChat/types"
import {
  MAX_WELCOME_CARDS,
  WelcomeScreenCardsRow,
} from "../components/WelcomeScreenCardsRow"

const clickCard = async (title: string) => {
  const card = screen.getByText(title).closest('[data-testid="card"]')
  expect(card).not.toBeNull()
  await userEvent.click(card as HTMLElement)
}

describe("WelcomeScreenCardsRow", () => {
  it("renders every card's title and description", () => {
    const cards: F0AiChatWelcomeCard[] = [
      {
        id: "empty-survey",
        icon: File,
        title: "Empty survey",
        description: "Start from scratch",
        message: "Create an empty survey.",
      },
      {
        id: "templates",
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

  it("calls onCardSelect with the id and message when a card is clicked", async () => {
    const onCardSelect = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      {
        id: "empty-survey",
        icon: File,
        title: "Empty survey",
        message: "Create an empty survey.",
      },
    ]

    render(<WelcomeScreenCardsRow cards={cards} onCardSelect={onCardSelect} />)
    await clickCard("Empty survey")

    expect(onCardSelect).toHaveBeenCalledTimes(1)
    expect(onCardSelect).toHaveBeenCalledWith(
      "empty-survey",
      "Create an empty survey."
    )
  })

  it("calls onCardSelect with the id and undefined message for a message-less card", async () => {
    const onCardSelect = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      { id: "templates", icon: Marketplace, title: "Templates" },
    ]

    render(<WelcomeScreenCardsRow cards={cards} onCardSelect={onCardSelect} />)
    await clickCard("Templates")

    expect(onCardSelect).toHaveBeenCalledTimes(1)
    expect(onCardSelect).toHaveBeenCalledWith("templates", undefined)
  })

  it("renders nothing when given no cards", () => {
    const { container } = render(
      <WelcomeScreenCardsRow cards={[]} onCardSelect={vi.fn()} />
    )

    expect(container).toBeEmptyDOMElement()
  })

  it(`renders at most ${MAX_WELCOME_CARDS} cards and drops the extras`, () => {
    const cards: F0AiChatWelcomeCard[] = Array.from(
      { length: MAX_WELCOME_CARDS + 2 },
      (_, i) => ({
        id: `card-${i + 1}`,
        icon: File,
        title: `Card ${i + 1}`,
        message: `Message ${i + 1}`,
      })
    )

    render(<WelcomeScreenCardsRow cards={cards} onCardSelect={vi.fn()} />)

    // First MAX_WELCOME_CARDS render…
    for (let i = 1; i <= MAX_WELCOME_CARDS; i++) {
      expect(screen.getByText(`Card ${i}`)).toBeInTheDocument()
    }
    // …everything past the cap is dropped.
    expect(
      screen.queryByText(`Card ${MAX_WELCOME_CARDS + 1}`)
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(`Card ${MAX_WELCOME_CARDS + 2}`)
    ).not.toBeInTheDocument()
  })
})
