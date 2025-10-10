import { PersonAvatarVariant } from "@/components/avatars/F0Avatar"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0AvatarEmoji } from "@/components/avatars/F0AvatarEmoji"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export type WidgetAvatarsListItemProps = {
  id: string | number
  title: string
  subtitle: string
  avatars: Omit<PersonAvatarVariant, "type">[] & Record<string, unknown>[]
  remainingCount?: number
  withPointerCursor?: boolean
  onClick?: (id: string | number) => void
} & (
  | { emoji: string }
  | {
      alert: ComponentProps<typeof F0AvatarAlert>["type"]
    }
)

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  withEmoji: boolean
  withPointerCursor: boolean
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({
  onClick,
  withEmoji,
  withPointerCursor,
  children,
}) => {
  const className = cn(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    withEmoji ? "gap-2" : "gap-2.5",
    withPointerCursor ? "cursor-pointer" : "cursor-default",
    onClick
      ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none"
      : undefined
  )

  return onClick ? (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  )
}

export function WidgetAvatarsListItem({
  id,
  title,
  subtitle,
  avatars,
  remainingCount,
  withPointerCursor = false,
  onClick,
  ...props
}: WidgetAvatarsListItemProps) {
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(id)
  }

  return (
    <Wrapper
      onClick={handleOnClick}
      withEmoji={"emoji" in props && !!props.emoji}
      withPointerCursor={withPointerCursor}
    >
      {"alert" in props && props.alert && <F0AvatarAlert type={props.alert} />}
      {"emoji" in props && props.emoji && <F0AvatarEmoji emoji={props.emoji} />}
      <div className="flex-1">
        <p className="line-clamp-1 font-medium">{title}</p>
        <p className="line-clamp-1 text-f1-foreground-secondary">{subtitle}</p>
      </div>
      <div className="min-w-0 flex-1">
        <F0AvatarList
          avatars={avatars}
          remainingCount={remainingCount}
          size={"emoji" in props && props.emoji ? "md" : "sm"}
          type="person"
        />
      </div>
    </Wrapper>
  )
}
