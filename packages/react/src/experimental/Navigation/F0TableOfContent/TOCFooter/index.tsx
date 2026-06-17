import { ButtonInternal } from "@/components/F0Button/internal"
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
        <ButtonInternal
          key={`toc-footer-action-${index}`}
          variant="ghost"
          size="md"
          label={action.label}
          icon={action.icon}
          disabled={action.disabled}
          onClick={() => action.onClick()}
        />
      ))}
    </div>
  )
}
