import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { Check } from "@/icons/app"
import { cn } from "@/lib/utils"

export interface CardGhostProps {
  /** Icon displayed on the left */
  icon: IconType
  /** Card title */
  title: string
  /** Whether the document is filled */
  filled: boolean
  /** Label for the filled/pending tag */
  filledLabel: string
  /** Label for the pending tag */
  pendingLabel: string
  /** Date or secondary text */
  date: string
  /** Whether the card is selected */
  selected?: boolean
  /** Click handler */
  onClick?: () => void
}

export function CardGhost({
  icon,
  title,
  filled,
  filledLabel,
  pendingLabel,
  date,
  selected = false,
  onClick,
}: CardGhostProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-xl border border-solid border-transparent bg-f1-background p-3 transition-all hover:border-f1-border",
        selected && "bg-f1-background-tertiary"
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      <F0AvatarIcon icon={icon} size="md" />
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-base font-semibold text-f1-foreground">
          {title}
        </span>
        <div className="flex items-center gap-2">
          {filled ? (
            <F0TagRaw icon={Check} text={filledLabel} />
          ) : (
            <F0TagStatus variant="warning" text={pendingLabel} />
          )}
          <span className="text-sm text-f1-foreground-secondary">{date}</span>
        </div>
      </div>
    </div>
  )
}
