import { F0AvatarModule, ModuleId } from "@/components/avatars/F0AvatarModule"
import { cn } from "@/lib/utils"

type Props<Id extends string | number = string | number> = {
  id: Id
  module?: ModuleId
  title: string
  subtitle: string
  onClick?: (id: Id) => void
}

export type WidgetInboxListItemProps<
  Id extends string | number = string | number,
> = Props<Id>

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  className: string
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ onClick, className, children }) => {
  return onClick ? (
    <a className={className} onClick={onClick} tabIndex={0}>
      {children}
    </a>
  ) : (
    <div className={className} tabIndex={-1}>
      {children}
    </div>
  )
}

export function WidgetInboxListItem({
  id,
  title,
  subtitle,
  onClick,
  module,
}: Props) {
  const className = cn(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    onClick
      ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none"
      : undefined
  )
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(id)
  }

  return (
    <Wrapper onClick={handleOnClick} className={className}>
      <F0AvatarModule module={module ?? "inbox"} size="md" />
      <div className="flex-1">
        <p className="line-clamp-1 font-medium">{title}</p>
        <p className="line-clamp-1 text-f1-foreground-secondary">{subtitle}</p>
      </div>
    </Wrapper>
  )
}
