import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"
import { IconType } from "@/components/F0Icon"

export type F0AiChatWelcomeCard = {
  icon: IconType
  title: string
  description?: string
  /** Prompt cards: sent to `onSelect` when the card is clicked. */
  message?: string
  /**
   * Action cards: custom click handler (e.g. open a dialog). Takes precedence
   * over `message`/`onSelect` when both are present.
   */
  onClick?: () => void
}

export interface F0AiChatWelcomeCardsProps {
  cards: F0AiChatWelcomeCard[]
  /**
   * Called with a prompt card's `message` when clicked. Wire this to the
   * chat's `sendMessage`. Not needed when every card is an action card.
   */
  onSelect?: (message: string) => void
}

/**
 * @experimental This is an experimental component, use it at your own risk.
 *
 * Action cards shown below the chat text area on the F0AiChat welcome screen
 * (the chat `footer` slot). Two card kinds are supported: prompt cards (with a
 * `message`, clicking calls `onSelect`) and action cards (with an `onClick`,
 * which takes precedence). Data-driven and runtime-agnostic — the caller
 * supplies the cards and decides what `onSelect` does.
 */
export function F0AiChatWelcomeCards({
  cards,
  onSelect,
}: F0AiChatWelcomeCardsProps) {
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
              onSelect?.(card.message)
            }
          }}
        />
      ))}
    </div>
  )
}
