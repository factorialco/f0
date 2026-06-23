import {
  type ReactNode,
  type UIEvent,
  useCallback,
  useEffect,
  useState,
} from "react"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { Check, CheckDouble } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Spinner } from "@/ui/Spinner"

import { useF0Chat } from "../providers/F0ChatProvider"
import { type F0ChatMessage, type F0ChatReader } from "../types"
import { formatClock, formatSeparator } from "../utils/natural-time"

// Sent → single check; Read → double check (iMessage/WhatsApp style).
const InfoRow = ({
  icon,
  ariaLabel,
  value,
}: {
  icon: IconType
  ariaLabel: string
  value: string
}): ReactNode => (
  <div className="flex items-center gap-1">
    <F0Icon icon={icon} size="md" aria-label={ariaLabel} />
    <span className="text-sm font-medium text-f1-foreground">{value}</span>
  </div>
)

/**
 * Message-info submenu content (opens to the side on hover, no modal): sent
 * time, DM read time, and a paginated "Read by N" reader list for groups.
 */
export const ChatMessageInfoView = ({
  message,
}: {
  message: F0ChatMessage
}): ReactNode => {
  const i18n = useI18n()
  const { channel, getMessageReaders } = useF0Chat()
  const labels = { today: i18n.chat.today, yesterday: i18n.chat.yesterday }
  const now = new Date()

  const showReaders =
    message.isMine && channel.type === "group" && !!getMessageReaders

  const [readers, setReaders] = useState<F0ChatReader[]>([])
  const [cursor, setCursor] = useState<string | null | undefined>(undefined)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadMore = useCallback(async () => {
    if (!getMessageReaders || loading) return
    setLoading(true)
    try {
      const page = await getMessageReaders(message.id, {
        cursor: cursor ?? null,
      })
      setReaders((prev) => [...prev, ...page.readers])
      setTotal(page.total)
      setCursor(page.nextCursor)
    } finally {
      setLoading(false)
    }
  }, [getMessageReaders, loading, message.id, cursor])

  useEffect(() => {
    if (showReaders) void loadMore()
    // First page once, when the readers section applies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showReaders])

  const hasMore = cursor !== null

  // Infinite scroll: load the next page as the list nears the bottom.
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    if (
      hasMore &&
      !loading &&
      el.scrollHeight - el.scrollTop - el.clientHeight < 80
    ) {
      void loadMore()
    }
  }

  return (
    <div className="flex w-fit flex-col">
      <div className="gap-2 p-2 pr-4 flex flex-col">
        <InfoRow
          icon={Check}
          ariaLabel={i18n.chat.sentAt}
          value={formatSeparator(new Date(message.createdAt), now, labels)}
        />
        {message.isMine && channel.type === "dm" && message.readAt && (
          <InfoRow
            icon={CheckDouble}
            ariaLabel={i18n.chat.read}
            value={formatSeparator(new Date(message.readAt), now, labels)}
          />
        )}
      </div>
      {showReaders && (
        <div className="flex min-h-0 flex-col w-56 ">
          <div className="flex px-2 pb-2 flex-row gap-1 items-center border-solid border-b border-0 border-f1-border-secondary">
            <F0Icon icon={CheckDouble} />
            <span className="text-sm font-medium text-f1-foreground">
              {i18n.chat.readByLabel.replace("{{count}}", String(total))}
            </span>
          </div>
          <div className="max-h-64 overflow-y-auto p-2" onScroll={handleScroll}>
            <ul className="flex flex-col">
              {readers.map((reader) => (
                <li
                  key={reader.user.id}
                  className="flex items-center gap-2 rounded px-1 py-1.5"
                >
                  <F0Avatar
                    size="xs"
                    avatar={
                      reader.user.avatar ?? {
                        type: "person",
                        firstName: reader.user.name,
                        lastName: "",
                      }
                    }
                  />
                  <OneEllipsis className="flex-1 truncate text-sm text-f1-foreground">
                    {reader.user.name}
                  </OneEllipsis>
                  {reader.readAt && (
                    <span className="text-sm text-f1-foreground-secondary">
                      {formatClock(new Date(reader.readAt))}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            {loading && (
              <div className="flex justify-center py-2">
                <Spinner size="small" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
