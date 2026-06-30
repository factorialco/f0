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
        onClick: vi.fn(),
      },
      {
        id: "templates",
        icon: Marketplace,
        title: "Templates",
        description: "Browse pre-made surveys",
        message: "Show me the survey templates.",
        onClick: vi.fn(),
      },
    ]

    render(<WelcomeScreenCardsRow cards={cards} />)

    expect(screen.getByText("Empty survey")).toBeInTheDocument()
    expect(screen.getByText("Start from scratch")).toBeInTheDocument()
    expect(screen.getByText("Templates")).toBeInTheDocument()
    expect(screen.getByText("Browse pre-made surveys")).toBeInTheDocument()
  })

  it("calls the clicked card's onClick and leaves the others untouched", async () => {
    const onEmptySurvey = vi.fn()
    const onTemplates = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      {
        id: "empty-survey",
        icon: File,
        title: "Empty survey",
        onClick: onEmptySurvey,
      },
      {
        id: "templates",
        icon: Marketplace,
        title: "Templates",
        onClick: onTemplates,
      },
    ]

    render(<WelcomeScreenCardsRow cards={cards} />)
    await clickCard("Empty survey")

    expect(onEmptySurvey).toHaveBeenCalledTimes(1)
    expect(onTemplates).not.toHaveBeenCalled()
  })

  it("renders a card without an onClick as non-interactive", async () => {
    const cards: F0AiChatWelcomeCard[] = [
      { id: "templates", icon: Marketplace, title: "Templates" },
    ]

    render(<WelcomeScreenCardsRow cards={cards} />)
    // Clicking a card that carries no handler must not throw.
    await clickCard("Templates")

    expect(screen.getByText("Templates")).toBeInTheDocument()
  })

  it("renders nothing when given no cards", () => {
    const { container } = render(<WelcomeScreenCardsRow cards={[]} />)

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
        onClick: vi.fn(),
      })
    )

    render(<WelcomeScreenCardsRow cards={cards} />)

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
