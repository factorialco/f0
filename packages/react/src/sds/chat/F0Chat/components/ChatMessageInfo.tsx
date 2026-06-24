import { type ReactNode } from "react"

import { ArrowLeft } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { ButtonInternal } from "@/components/F0Button/internal"

import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage } from "../types"
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

/**
 * Message-info panel shown in place of the actions menu (a back arrow returns to
 * it). Deliberately minimal for v1: delivered + read times for DMs, and just the
 * "Read by N" count for groups (no per-person reader list).
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
  const labels = { today: i18n.chat.today, yesterday: i18n.chat.yesterday }
  const now = new Date()

  const isGroup = channel.type === "group"

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5">
        <ButtonInternal
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

      <div className="flex flex-col gap-4 px-3 py-3">
        {message.isMine &&
          (isGroup ? (
            <InfoRow
              label={i18n.t(
                (message.readByCount ?? 0) === 1
                  ? "chat.readBy.one"
                  : "chat.readBy.other",
                { count: message.readByCount ?? 0 }
              )}
            />
          ) : (
            message.readAt && (
              <InfoRow
                label={i18n.chat.read}
                value={formatSeparator(new Date(message.readAt), now, labels)}
              />
            )
          ))}
        <InfoRow
          label={i18n.chat.delivered}
          value={formatSeparator(new Date(message.createdAt), now, labels)}
        />
      </div>
    </div>
  )
}
