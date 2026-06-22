import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"

import type { F0AiChatWelcomeCard } from "../../F0AiChat/types"

/**
 * Hard cap on welcome cards. The row is a two-column grid, so four cards fill
 * an even 2×2; anything beyond that is dropped to keep the welcome screen tidy.
 * Suggestions have no such cap.
 */
export const MAX_WELCOME_CARDS = 4

export type WelcomeScreenCardsRowProps = {
  /**
   * Cards to render. Optional and independent of the suggestions row — the two
   * can have different counts. Only the first {@link MAX_WELCOME_CARDS} are
   * rendered; the rest are ignored.
   */
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
 *
 * Renders at most {@link MAX_WELCOME_CARDS} cards; extras are dropped.
 */
export const WelcomeScreenCardsRow = ({
  cards,
  onCardSelect,
}: WelcomeScreenCardsRowProps) => {
  if (cards.length === 0) return null

  return (
    <div className="grid w-full grid-cols-2 gap-3">
      {cards.slice(0, MAX_WELCOME_CARDS).map((card) => (
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
