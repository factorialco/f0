import { useEffect, useRef, type ReactNode } from "react"

import { ArrowLeft } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { ButtonInternal } from "@/components/F0Button/internal"
import { cn, focusRing } from "@/lib/utils"

import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatUser } from "../types"
import { formatSeparator } from "../utils/natural-time"

const InfoRow = ({
  label,
  value,
}: {
  label: string
  value?: string
}): ReactNode => (
  <div className="flex flex-col items-start">
    <span className="text-base font-medium text-f1-foreground">{label}</span>
    {value && (
      <span className="text-base font-normal text-f1-foreground-secondary">
        {value}
      </span>
    )}
  </div>
)

const ReaderIdentity = ({ user }: { user: F0ChatUser }): ReactNode => {
  return (
    <div className="flex w-full items-center gap-2 px-0 py-1.5 text-f1-foreground">
      <F0Avatar
        size="sm"
        avatar={
          user.avatar ?? {
            type: "person",
            firstName: user.name,
            lastName: "",
          }
        }
      />
      <span className="text-base font-normal">{user.name}</span>
    </div>
  )
}

/**
 * Message-info panel shown in place of the actions menu (a back arrow returns to
 * it). Shows delivered + read times for DMs and the reader identities for group
 * messages when the host provides them.
 */
export const ChatMessageInfoView = ({
  message,
  onBack,
}: {
  message: F0ChatMessage
  onBack: () => void
}): ReactNode => {
  const i18n = useI18n()
  const { channel } = useF0Chat()
  const backButtonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const labels = {
    today: i18n.date.groups.today,
    yesterday: i18n.date.groups.yesterday,
  }
  const now = new Date()

  const isGroup = channel.type === "group"
  const readByCount = message.readBy?.length ?? message.readByCount ?? 0
  const readByLabel = i18n.t(
    readByCount === 1 ? "chat.readBy.one" : "chat.readBy.other",
    { count: readByCount }
  )

  useEffect(() => {
    backButtonRef.current?.focus()
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5">
        <ButtonInternal
          ref={backButtonRef}
          icon={ArrowLeft}
          onClick={onBack}
          label={i18n.chat.back}
          variant="ghost"
          hideLabel
          size="sm"
        />
        <span className="text-base font-medium text-f1-foreground">
          {i18n.chat.info}
        </span>
      </div>

      <div
        aria-label={i18n.chat.info}
        className={cn(
          "max-h-80 overflow-y-auto rounded-b-lg",
          focusRing("focus-visible:ring-inset")
        )}
        role="region"
        tabIndex={0}
      >
        <div className="flex flex-col gap-4 px-3 py-3">
          <InfoRow
            label={i18n.chat.delivered}
            value={formatSeparator(new Date(message.createdAt), now, labels)}
          />
          {message.isMine &&
            (isGroup ? (
              <div className="flex flex-col gap-2">
                <InfoRow label={readByLabel} />
                {message.readBy && message.readBy.length > 0 && (
                  <ul
                    aria-label={readByLabel}
                    className="m-0 flex list-none flex-col gap-1 p-0"
                    role="list"
                  >
                    {message.readBy.map((user) => (
                      <li key={user.id}>
                        <ReaderIdentity user={user} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              message.readAt && (
                <InfoRow
                  label={i18n.chat.read}
                  value={formatSeparator(new Date(message.readAt), now, labels)}
                />
              )
            ))}
        </div>
      </div>
    </div>
  )
}
