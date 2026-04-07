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
  module: ModuleId
  /** Primary title */
  title: string
  /** Secondary description line */
  description: string
  /** Called when the user clicks the "Open" button */
  onOpen: () => void
  /** Called when the user clicks the "Close" button (active state) */
  onClose: () => void
  /** Whether this card's content is currently shown in the canvas */
  isActive: boolean
}

/**
 * Shared inline card rendered in the AI chat for any canvas entity.
 * Shows a module avatar, title, description, and an Open/Close toggle button.
 * When active, displays a focus ring and the button switches to "Close".
 */
export function CanvasCard({
  module,
  title,
  description,
  onOpen,
  onClose,
  isActive,
}: CanvasCardProps) {
  const translations = useI18n()

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-between gap-3 rounded-lg border border-solid p-4",
        isActive ? "border-f1-border-hover" : "border-f1-border-secondary"
      )}
    >
      <div className="flex min-w-0 flex-row items-center gap-3">
        <F0AvatarModule module={module} size="lg" />
        <div className="flex min-w-0 flex-col">
          <OneEllipsis className="text-lg font-semibold text-f1-foreground">
            {title}
          </OneEllipsis>
          <OneEllipsis className="text-base text-f1-foreground-secondary">
            {description}
          </OneEllipsis>
        </div>
      </div>
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
    </div>
  )
}

CanvasCard.displayName = "CanvasCard"
