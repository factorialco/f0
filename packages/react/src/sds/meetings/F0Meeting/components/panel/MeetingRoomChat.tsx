import { useEffect, useMemo, useRef, useState } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { ArrowUp } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import {
  useF0MeetingRoster,
  useF0MeetingStable,
} from "../../providers/F0MeetingProvider"

export type MeetingRoomChatMessage = {
  id: string
  participantId: string
  text: string
  at: string
}

export type MeetingRoomChatProps = {
  messages: MeetingRoomChatMessage[]
  onSend: (text: string) => void
}

const timeOf = (iso: string) => {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ""
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

/**
 * The call's own chat, for the room's side panel.
 *
 * Deliberately plainer than `F0Chat`: this transport has no reactions, no
 * threads, no read receipts and no history — in production it is LiveKit's data
 * channel, which delivers a string and forgets it. Rendering it with the full
 * conversation surface would promise all of those.
 */
export const MeetingRoomChat = ({ messages, onSend }: MeetingRoomChatProps) => {
  const i18n = useI18n()
  const { participants } = useF0MeetingRoster()
  const { localParticipantId } = useF0MeetingStable()
  const [draft, setDraft] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const byId = useMemo(
    () => new Map(participants.map((person) => [person.id, person])),
    [participants]
  )

  useEffect(() => {
    const element = scrollRef.current
    if (element) element.scrollTop = element.scrollHeight
  }, [messages])

  const submit = () => {
    const text = draft.trim()
    if (!text) return
    onSend(text)
    setDraft("")
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={scrollRef}
        className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4"
        data-testid="meeting-room-chat"
      >
        {messages.length === 0 ? (
          <p className="m-auto max-w-[28ch] text-center text-base text-f1-foreground-secondary">
            {i18n.meeting.roomChatEmpty}
          </p>
        ) : (
          messages.map((message) => {
            const author = byId.get(message.participantId)
            const isMine = message.participantId === localParticipantId
            return (
              <div key={message.id} className="flex gap-2">
                <span className="mt-0.5 shrink-0">
                  {author?.avatar ? (
                    <F0Avatar avatar={author.avatar} size="xs" />
                  ) : null}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="truncate text-sm font-medium text-f1-foreground">
                      {isMine ? i18n.meeting.you : (author?.name ?? "")}
                    </span>
                    <span className="shrink-0 text-sm tabular-nums text-f1-foreground-tertiary">
                      {timeOf(message.at)}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap break-words text-base text-f1-foreground">
                    {message.text}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>

      <div className="flex shrink-0 items-end gap-2 border-t border-solid border-f1-border-secondary p-3">
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault()
              submit()
            }
          }}
          rows={1}
          placeholder={i18n.meeting.roomChatPlaceholder}
          aria-label={i18n.meeting.chatPanel}
          className={cn(
            "max-h-24 min-h-10 flex-1 resize-none rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-base text-f1-foreground placeholder:text-f1-foreground-tertiary",
            focusRing()
          )}
        />
        <F0Button
          hideLabel
          icon={ArrowUp}
          label={i18n.meeting.sendMessage}
          disabled={draft.trim().length === 0}
          onClick={submit}
        />
      </div>
    </div>
  )
}
