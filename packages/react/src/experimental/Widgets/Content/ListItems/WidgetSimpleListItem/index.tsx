import { F0Icon, IconType } from "@/components/F0Icon"
import { F0TagAlert } from "@/components/tags/F0TagAlert"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Counter } from "@/experimental/Information/Counter"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

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
  alert?: ComponentProps<typeof F0TagAlert>
  rawTag?: ComponentProps<typeof F0TagRaw>
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
          <F0Icon
            icon={icon}
            size="md"
            className={cn("mt-0.5", iconClassName)}
          />
        )}
        <p className="mt-0.5 line-clamp-2 font-medium">{title}</p>
        {rightIcon && (
          <F0Icon
            icon={rightIcon}
            size="md"
            className={cn("mt-0.5", rightIconClassName)}
          />
        )}
      </div>
      <div className="flex flex-row items-center gap-2">
        {alert && <F0TagAlert {...alert} />}
        {rawTag && <F0TagRaw {...rawTag} />}
        {!!count && <Counter value={count} />}
      </div>
    </Wrapper>
  )
}
