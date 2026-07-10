import { type ReactNode } from "react"

import { F0Card } from "@/components/F0Card"
import { useI18n } from "@/lib/providers/i18n"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { type F0ChatUser } from "../types"

/**
 * Wraps a trigger (a sender avatar/name, or the DM header) in a hover card that
 * shows the person's identity in an {@link F0Card}, with a "View profile" link —
 * the same affordance as the AI chat mention cards.
 */
export const ChatUserHoverCard = ({
  user,
  children,
}: {
  user: F0ChatUser
  children: ReactNode
}): ReactNode => {
  const i18n = useI18n()
  return (
    <HoverCard openDelay={150} closeDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        align="start"
        className="w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none"
      >
        <F0Card
          avatar={
            user.avatar ?? {
              type: "person",
              firstName: user.name,
              lastName: "",
            }
          }
          title={user.name}
          description={user.subtitle}
          secondaryActions={
            user.profileHref
              ? { label: i18n.chat.viewProfile, href: user.profileHref }
              : undefined
          }
        />
      </HoverCardContent>
    </HoverCard>
  )
}
