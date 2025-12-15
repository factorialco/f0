import { memo, ReactNode } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import ChevronRight from "../../../../icons/app/ChevronRight"
import { Link } from "../../../../lib/linkHandler"
import { cn } from "../../../../lib/utils"
import { InternalNavigateActionType } from "../ItemContainer"

export type NavigateActionProps = {
  children: ReactNode
  className?: string
} & InternalNavigateActionType

export const NavigateAction = memo(({ children, className, ...props }: NavigateActionProps) => {
  return (
    <Link
      {...props}
      className={cn(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        className
      )}
    >
      {children}
      <div className="grid">
        <F0Icon aria-hidden={true} icon={ChevronRight} size="md" />
      </div>
    </Link>
  )
})

NavigateAction.displayName = "NavigateAction"
