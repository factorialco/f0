import {
  F0AvatarModule,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule"
import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import type { FileDef } from "@/components/avatars/F0AvatarFile/types"
import { F0Button } from "@/components/F0Button"
import type { IconType } from "@/components/F0Icon"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

type CanvasCardAvatar =
  | { type: "module"; module: ModuleId }
  | { type: "file"; file: FileDef }

type CanvasCardAction =
  | {
      type: "open"
      onOpen: () => void
      onClose: () => void
      /** When false, hides the Open/Close button but the card stays clickable. Default true. */
      showButton?: boolean
    }
  | {
      type: "custom"
      icon: IconType
      label: string
      onClick: () => void
      hideLabel?: boolean
    }

export type F0CanvasCardProps = {
  /** Avatar to display: a module icon or a file-type badge */
  avatar?: CanvasCardAvatar
  /** Primary title */
  title: string
  /** Optional secondary description line */
  description?: string
  /** Whether this card's content is currently shown in the canvas (only meaningful for action.type === "open") */
  isActive?: boolean
  /** Action exposed by the card: either an Open/Close toggle or a custom icon button */
  action: CanvasCardAction
  /** Optional content rendered below the card header (e.g. a data preview) */
  children?: React.ReactNode
}

/**
 * Shared inline card rendered in the AI chat for any canvas entity.
 * Shows an avatar, title, optional description, and a configurable action button.
 */
export function F0CanvasCard({
  avatar,
  title,
  description,
  isActive = false,
  action,
  children,
}: F0CanvasCardProps) {
  const translations = useI18n()

  const isOpenAction = action.type === "open"
  const handleCardClick = isOpenAction
    ? isActive
      ? action.onClose
      : action.onOpen
    : undefined

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2",
        isOpenAction && "cursor-pointer",
        isActive ? "border-f1-border-hover" : "border-f1-border-secondary"
      )}
      onClick={handleCardClick}
    >
      <div className="flex w-full min-w-0 flex-row items-center gap-3">
        {avatar?.type === "module" && (
          <F0AvatarModule module={avatar.module} size="md" />
        )}
        {avatar?.type === "file" && (
          <F0AvatarFile file={avatar.file} size="lg" />
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <OneEllipsis className="text-lg font-semibold text-f1-foreground">
            {title}
          </OneEllipsis>
          {description && (
            <OneEllipsis className="text-base text-f1-foreground-secondary">
              {description}
            </OneEllipsis>
          )}
        </div>
        {action.type === "open" && action.showButton !== false && (
          <F0Button
            variant="outline"
            size="md"
            label={
              isActive
                ? translations.actions.close
                : translations.ai.reportCard.openButton
            }
            onClick={isActive ? action.onClose : action.onOpen}
          />
        )}
        {action.type === "custom" && (
          <F0Button
            variant="outline"
            size="md"
            icon={action.icon}
            label={action.label}
            hideLabel={action.hideLabel}
            onClick={action.onClick}
          />
        )}
      </div>
      {children}
    </div>
  )
}

F0CanvasCard.displayName = "F0CanvasCard"
