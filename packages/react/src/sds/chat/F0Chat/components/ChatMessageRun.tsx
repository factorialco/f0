import { type ReactNode } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"

import { type F0ChatUser } from "../types"
import { type ChatSenderRun } from "../utils/grouping"
import { ChatMessageItem } from "./ChatMessageItem"
import { ChatUserHoverCard } from "./ChatUserHoverCard"
import { MessageStatus } from "./MessageStatus"

export type ChatMessageRunProps = {
  run: ChatSenderRun
  isGroup: boolean
  /** Id of the conversation's last message — it alone renders the footer. */
  lastMessageId: string | null
}

const avatarFor = (author: F0ChatUser): ReactNode => (
  <F0Avatar
    size="xs"
    avatar={
      author.avatar ?? {
        type: "person",
        firstName: author.name,
        lastName: "",
      }
    }
  />
)

/**
 * A run of consecutive same-author messages. Mine align right (no avatar);
 * incoming align left and, in groups, show the sender's avatar (hover-carded)
 * next to the last bubble — always level with the bubble, never with the
 * footer or reactions. The name is the first line of the run's first bubble.
 */
export const ChatMessageRun = ({
  run,
  isGroup,
  lastMessageId,
}: ChatMessageRunProps): ReactNode => {
  const { isMine, author, messages } = run
  const showIdentity = isGroup && !isMine
  const footerMessage = messages.find((m) => m.id === lastMessageId)

  // Invisible avatar reserves the exact gutter width so bubbles, reactions and
  // the footer all align under each other even when the avatar isn't shown.
  const spacer = showIdentity ? (
    <span aria-hidden className="invisible shrink-0">
      {avatarFor(author)}
    </span>
  ) : undefined

  return (
    <div className="flex flex-col gap-1">
      {messages.map((message, index) => (
        <ChatMessageItem
          key={message.id}
          message={message}
          isMine={isMine}
          author={showIdentity && index === 0 ? author : undefined}
          bubbleGutter={
            showIdentity ? (
              index === messages.length - 1 ? (
                <ChatUserHoverCard user={author}>
                  <span className="shrink-0 cursor-default">
                    {avatarFor(author)}
                  </span>
                </ChatUserHoverCard>
              ) : (
                spacer
              )
            ) : undefined
          }
          belowGutter={spacer}
        />
      ))}
      {footerMessage && (
        <div className="flex w-full gap-2">
          {spacer}
          <div className="min-w-0 flex-1">
            <MessageStatus message={footerMessage} isGroup={isGroup} />
          </div>
        </div>
      )}
    </div>
  )
}
