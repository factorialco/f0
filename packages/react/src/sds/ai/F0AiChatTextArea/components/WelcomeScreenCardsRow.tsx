import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"

import type { F0AiChatWelcomeCard } from "../../F0AiChat/types"

export type WelcomeScreenCardsRowProps = {
  cards: F0AiChatWelcomeCard[]
  /**
   * Fired with a prompt card's `message` when it's clicked. Action cards (with
   * their own `onClick`) bypass this — `onClick` takes precedence.
   */
  onCardSelect?: (message: string) => void
}

/**
 * Grid of action/prompt cards shown below the composer on the fullscreen
 * welcome screen, rendered with `F0CardHorizontal`. Prompt cards (with a
 * `message`) call `onCardSelect`; action cards run their own `onClick`, which
 * takes precedence when both are present.
 */
export const WelcomeScreenCardsRow = ({
  cards,
  onCardSelect,
}: WelcomeScreenCardsRowProps) => {
  if (cards.length === 0) return null

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {cards.map((card) => (
        <F0CardHorizontal
          key={card.title}
          avatar={{ type: "icon", icon: card.icon }}
          title={card.title}
          description={card.description}
          onClick={() => {
            if (card.onClick) {
              card.onClick()
            } else if (card.message) {
              onCardSelect?.(card.message)
            }
          }}
        />
      ))}
    </div>
  )
}
