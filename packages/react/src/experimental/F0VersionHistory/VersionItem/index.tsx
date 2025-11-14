import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { OneEllipsis } from "@/components/OneEllipsis/OneEllipsis"
import { getLocale } from "@/experimental/OneCalendar/utils"
import { useL10n } from "@/lib/providers/l10n"
import { cn, focusRing } from "@/lib/utils"
import { format } from "date-fns"

interface VersionItemProps {
  author: { firstName: string; lastName: string; src?: string }
  timestamp: Date
  onClick?: () => void
  isActive?: boolean
}

export function VersionItem({
  author,
  timestamp,
  onClick,
  isActive,
}: VersionItemProps) {
  const { locale: localeKey } = useL10n()
  const locale = getLocale(localeKey)
  const formattedDateTime = format(timestamp, "PPPp", { locale })

  const authorName = `${author.firstName} ${author.lastName}`

  return (
    <button
      type="button"
      className={cn(
        "flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors",
        isActive && "bg-f1-background-tertiary",
        onClick && "cursor-pointer hover:bg-f1-background-hover",
        focusRing("focus-visible:ring-inset")
      )}
      onClick={onClick}
      disabled={!onClick}
      aria-label={`Version ${formattedDateTime} by ${authorName}${isActive ? " (selected)" : ""}`}
      aria-pressed={onClick ? isActive : undefined}
    >
      <OneEllipsis lines={1} className="font-medium text-f1-foreground">
        {formattedDateTime}
      </OneEllipsis>

      <div className="flex flex-row items-center gap-[6px]">
        <F0AvatarPerson
          firstName={author.firstName}
          lastName={author.lastName}
          src={author.src}
          size="xs"
        />

        <OneEllipsis
          lines={1}
          className="font-medium text-f1-foreground-secondary"
        >
          {authorName}
        </OneEllipsis>
      </div>
    </button>
  )
}
