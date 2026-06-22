import { describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { File, Marketplace } from "@/icons/app"

import { F0AiChatWelcomeCards } from "../F0AiChatWelcomeCards"
import type { F0AiChatWelcomeCard } from "../F0AiChatWelcomeCards"

const clickCard = async (title: string) => {
  const card = screen.getByText(title).closest('[data-testid="card"]')
  expect(card).not.toBeNull()
  await userEvent.click(card as HTMLElement)
}

describe("F0AiChatWelcomeCards", () => {
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

    render(<F0AiChatWelcomeCards cards={cards} onSelect={vi.fn()} />)

    expect(screen.getByText("Empty survey")).toBeInTheDocument()
    expect(screen.getByText("Start from scratch")).toBeInTheDocument()
    expect(screen.getByText("Templates")).toBeInTheDocument()
    expect(screen.getByText("Browse pre-made surveys")).toBeInTheDocument()
  })

  it("calls onSelect with the message when a prompt card is clicked", async () => {
    const onSelect = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      { icon: File, title: "Empty survey", message: "Create an empty survey." },
    ]

    render(<F0AiChatWelcomeCards cards={cards} onSelect={onSelect} />)
    await clickCard("Empty survey")

    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect).toHaveBeenCalledWith("Create an empty survey.")
  })

  it("calls onClick (not onSelect) when an action card is clicked", async () => {
    const onSelect = vi.fn()
    const onClick = vi.fn()
    const cards: F0AiChatWelcomeCard[] = [
      {
        icon: Marketplace,
        title: "Templates",
        message: "ignored when onClick is present",
        onClick,
      },
    ]

    render(<F0AiChatWelcomeCards cards={cards} onSelect={onSelect} />)
    await clickCard("Templates")

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onSelect).not.toHaveBeenCalled()
  })
})
