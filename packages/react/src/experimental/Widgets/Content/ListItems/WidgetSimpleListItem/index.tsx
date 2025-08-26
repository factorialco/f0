import { ComponentProps } from "react"
import { Icon, IconType } from "../../../../../components/Utilities/Icon"
import { cn } from "../../../../../lib/utils"
import { Counter } from "../../../../Information/Counter"
import { TagAlert } from "../../../../Information/Tags/TagAlert"
import { TagRaw } from "../../../../Information/Tags/TagRaw"

export type WidgetSimpleListItemProps<
  Id extends string | number = string | number,
> = {
  id: Id
  title: string
  icon?: IconType
  iconClassName?: string
  rightIcon?: IconType
  rightIconClassName?: string
  count?: number
  alert?: ComponentProps<typeof TagAlert>
  rawTag?: ComponentProps<typeof TagRaw>
  onClick?: (id: Id) => void
}

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

export function WidgetSimpleListItem({
  id,
  title,
  alert,
  rawTag,
  count,
  icon,
  rightIcon,
  iconClassName = "text-f1-icon-secondary",
  rightIconClassName = "text-f1-icon-secondary",
  onClick,
}: WidgetSimpleListItemProps) {
  const className = cn(
    "flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
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
      <div className="flex flex-1 flex-row items-start gap-1">
        {icon && (
          <Icon icon={icon} size="md" className={cn("mt-0.5", iconClassName)} />
        )}
        <p className="mt-0.5 line-clamp-2 font-medium">{title}</p>
        {rightIcon && (
          <Icon
            icon={rightIcon}
            size="md"
            className={cn("mt-0.5", rightIconClassName)}
          />
        )}
      </div>
      <div className="flex flex-row items-center gap-2">
        {alert && <TagAlert {...alert} />}
        {rawTag && <TagRaw {...rawTag} />}
        {!!count && <Counter value={count} />}
      </div>
    </Wrapper>
  )
}
