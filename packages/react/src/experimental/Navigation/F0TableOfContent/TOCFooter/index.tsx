import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

import { TOCAction } from "../types"

interface TOCFooterProps {
  actions?: TOCAction[]
}

export function TOCFooter({ actions }: TOCFooterProps) {
  if (!actions || actions.length === 0) {
    return null
  }

  return (
    <div className={cn("flex shrink-0 flex-col items-start gap-0.5 px-3 py-2")}>
      {actions.map((action, index) => (
        <div
          key={`toc-footer-action-${index}`}
          className={cn(
            "w-full flex flex-row justify-between py-1.5 px-2 rounded border border-solid border-transparent",
            !action.disabled && "cursor-pointer hover:bg-f1-background-hover",
            action.disabled && "cursor-not-allowed opacity-30"
          )}
        >
          <OneEllipsis
            lines={1}
            className={cn(
              "flex-grow text-[14px] font-medium text-f1-foreground-secondary transition-all"
            )}
          >
            {action.label}
          </OneEllipsis>
          {action.icon && <F0Icon icon={action.icon} color="secondary" />}
        </div>
      ))}
    </div>
  )
}
