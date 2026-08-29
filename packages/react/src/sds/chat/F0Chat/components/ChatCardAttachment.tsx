import { type ReactNode } from "react"

import { F0Card } from "@/components/F0Card"

import { useF0ChatEmit } from "../providers/F0ChatProvider"
import { type F0ChatCardAttachment } from "../types"
import { CHAT_MEDIA_WIDTH_CLASS } from "../utils/media-layout"

/**
 * A card attachment: an {@link F0Card} the host described as data.
 *
 * Unlike the media cards it does NOT chain its corners into the bubble stack.
 * It carries its own border and radius, so clipping it to a chained shape would
 * show two radii at once — the same reason the file chips opt out.
 *
 * `onCardActivated` only fires for the handler forms. A card that navigates
 * through `href` reports nothing: the host owns that navigation and already
 * sees it in its own router.
 */
export const ChatCardAttachment = ({
  card,
}: {
  card: F0ChatCardAttachment
}): ReactNode => {
  const emit = useF0ChatEmit()
  const { action } = card

  return (
    <div className={CHAT_MEDIA_WIDTH_CLASS} data-testid="chat-card-attachment">
      <F0Card
        avatar={card.avatar}
        title={card.title}
        description={card.description}
        image={card.image}
        link={card.href}
        onClick={
          card.onClick &&
          (() => {
            emit.onCardActivated({ source: "card" })
            card.onClick?.()
          })
        }
        // `secondaryActions`, not `primaryAction`: the call to action sits at
        // the leading edge of the divided footer at its own width, which is
        // what the design asks for — `primaryAction` pins itself trailing.
        secondaryActions={
          action?.href
            ? { label: action.label, href: action.href }
            : action?.onClick
              ? [
                  {
                    label: action.label,
                    onClick: () => {
                      emit.onCardActivated({ source: "action" })
                      action.onClick?.()
                    },
                  },
                ]
              : undefined
        }
      />
    </div>
  )
}
