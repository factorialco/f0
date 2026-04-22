import {
  F0AvatarModule,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule"
import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

export type CanvasCardProps = {
  /** Module avatar to display (e.g. "analytics", "surveys", "goals") */
  module?: ModuleId
  /** Primary title */
  title: string
  /** Secondary description line */
  description: string
  /** Called when the user clicks the "Open" button */
  onOpen: () => void
  /** Whether to show the "Open" button */
  showOpenButton?: boolean
  /** Called when the user clicks the "Close" button (active state) */
  onClose: () => void
  /** Whether this card's content is currently shown in the canvas */
  isActive: boolean
  /** Optional content rendered below the card header (e.g. a data preview) */
  children?: React.ReactNode
}

/**
 * Shared inline card rendered in the AI chat for any canvas entity.
 * Shows a module avatar, title, description, and an Open/Close toggle button.
 * When active, displays a focus ring and the button switches to "Close".
 */
export function CanvasCard({
  module: cardModule,
  title,
  description,
  onOpen,
  showOpenButton = true,
  onClose,
  isActive,
  children,
}: CanvasCardProps) {
  const translations = useI18n()

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2 cursor-pointer",
        isActive
          ? "border-f1-border-selected-bold"
          : "border-f1-border-secondary hover:border-f1-border-hover"
      )}
      onClick={isActive ? onClose : onOpen}
    >
      <div className="flex min-w-0 w-full flex-row items-center gap-3">
        {!!cardModule && <F0AvatarModule module={cardModule} size="lg" />}
        <div className="flex flex-1 min-w-0 flex-col">
          <OneEllipsis className="text-lg font-semibold text-f1-foreground">
            {title}
          </OneEllipsis>
          <OneEllipsis className="text-base text-f1-foreground-secondary">
            {description}
          </OneEllipsis>
        </div>
        {showOpenButton && (
          <F0Button
            variant="neutral"
            size="md"
            label={
              isActive
                ? translations.actions.close
                : translations.ai.reportCard.openButton
            }
            onClick={isActive ? onClose : onOpen}
          />
        )}
      </div>
      {children}
    </div>
  )
}

CanvasCard.displayName = "CanvasCard"
