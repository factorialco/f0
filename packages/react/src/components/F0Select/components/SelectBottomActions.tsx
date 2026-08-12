import type { Ref } from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0Button, F0ButtonProps } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

export type Action = {
  label: string
  onClick: () => void
  icon?: IconType
  variant?: F0ButtonProps["variant"]
  disabled?: boolean
}

interface SelectBottomActionsProps {
  actions?: Action[]
  presentation?: "buttons" | "menu"
  actionsRef?: Ref<HTMLDivElement>
  onAction?: (action: Action) => void
  showApplyButton?: boolean
  showCancelButton?: boolean
  onApply?: () => void
  onCancel?: () => void
  applyLabel?: string
}

export const SelectBottomActions = ({
  actions,
  presentation = "buttons",
  actionsRef,
  onAction,
  showApplyButton,
  onApply,
  onCancel,
  showCancelButton,
  applyLabel,
}: SelectBottomActionsProps) => {
  const i18n = useI18n()

  if (!actions && !showApplyButton) return null

  if (presentation === "menu") {
    if (!actions?.length) return null

    return (
      <div ref={actionsRef} className="px-1 pb-1">
        <div
          aria-hidden="true"
          className="mx-1 mb-1 h-px bg-f1-border-secondary"
        />
        <div className="flex flex-col">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              disabled={action.disabled}
              className={cn(
                "flex h-9 w-full items-center gap-3 rounded-md border-0 bg-transparent px-2 py-1.5 text-left text-base font-medium text-f1-foreground transition-colors enabled:cursor-pointer enabled:hover:bg-f1-background-hover disabled:cursor-not-allowed disabled:text-f1-foreground-disabled disabled:opacity-50",
                action.variant === "critical" && "text-f1-foreground-critical",
                focusRing("focus-visible:ring-inset")
              )}
              onClick={() => {
                if (onAction) {
                  onAction(action)
                } else {
                  action.onClick()
                }
              }}
            >
              {action.icon && (
                <span aria-hidden="true">
                  <F0AvatarIcon icon={action.icon} size="sm" />
                </span>
              )}
              <span className="min-w-0 truncate">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-row items-center justify-between gap-2 border-0 border-t border-solid border-f1-border-secondary p-2">
      {actions?.map((action) => (
        <F0Button
          key={action.label}
          variant={action.variant}
          onClick={action.onClick}
          icon={action.icon}
          label={action.label}
          disabled={action.disabled}
        />
      ))}
      {showCancelButton && (
        <F0Button
          onClick={onCancel}
          label={i18n.filters.cancel}
          variant="ghost"
        />
      )}
      {showApplyButton && (
        <div className={showCancelButton ? "" : "ml-auto"}>
          <F0Button
            onClick={onApply}
            label={applyLabel ?? i18n.select.applySelection}
          />
        </div>
      )}
    </div>
  )
}
