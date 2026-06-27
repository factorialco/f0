import { type ReactNode } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { type IconType } from "@/components/F0Icon"
import { withDataTestId } from "@/lib/data-testid"
import { type ActionButtonVariant } from "@/ui/Action/types"

/** A CTA shown under the blank-state copy — e.g. "Start a conversation". */
export type SidebarChatBlankStateAction = {
  label: string
  onClick?: () => void
  icon?: IconType
  /** Button variant — supports the gradient "ai" variant. @default "outline" */
  variant?: ActionButtonVariant
}

export type SidebarChatBlankStateProps = {
  title: string
  description?: string
  /** Optional CTA(s) shown under the copy — e.g. "Start a conversation". */
  actions?: SidebarChatBlankStateAction[]
}

/**
 * Compact blank state for a sidebar conversation list. Shared by the people
 * chat (`SidebarChatList`) and the AI history list so the two read identically.
 * Deliberately lighter than `OneEmptyState` — no emoji/avatar and tight
 * paddings — because it lives in a narrow sidebar column. The host (factorial)
 * supplies the copy + actions.
 */
function _SidebarChatBlankState({
  title,
  description,
  actions,
  ...rest
}: SidebarChatBlankStateProps): ReactNode {
  return (
    <div
      className="flex flex-col items-center gap-3 px-2 py-6 text-center"
      {...rest}
    >
      <div className="flex flex-col gap-0.5">
        <p className="text-base font-medium text-f1-foreground">{title}</p>
        {description && (
          <p className="text-base text-f1-foreground-secondary">
            {description}
          </p>
        )}
      </div>
      {actions && actions.length > 0 && (
        <div className="flex flex-col items-center gap-2">
          {actions.map((action) => (
            <ButtonInternal
              key={action.label}
              label={action.label}
              variant={action.variant ?? "outline"}
              icon={action.icon}
              size="md"
              onClick={action.onClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const SidebarChatBlankState = withDataTestId(_SidebarChatBlankState)
