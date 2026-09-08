import { memo, ReactNode } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import ChevronDown from "../../../../icons/app/ChevronDown"
import ChevronUp from "../../../../icons/app/ChevronUp"
import { cn, focusRing } from "../../../../lib/utils"
import { InternalDrawerActionType } from "../ItemContainer"

export type DrawerActionProps = {
  children: ReactNode
  className?: string
} & InternalDrawerActionType

export const DrawerAction = memo(
  ({
    children,
    className,
    expanded,
    onToggle,
    controls,
  }: DrawerActionProps) => {
    return (
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={controls}
        onClick={onToggle}
        className={cn(
          "group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
          "hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
          focusRing(),
          className
        )}
      >
        {children}
        <div className="grid">
          <F0Icon
            aria-hidden={true}
            icon={expanded ? ChevronUp : ChevronDown}
            size="md"
          />
        </div>
      </button>
    )
  }
)

DrawerAction.displayName = "DrawerAction"
