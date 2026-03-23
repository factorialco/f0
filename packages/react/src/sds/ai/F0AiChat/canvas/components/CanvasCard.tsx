import {
  F0AvatarModule,
  type ModuleId,
} from "@/components/avatars/F0AvatarModule"
import { F0Button } from "@/components/F0Button"
import { OneEllipsis } from "@/components/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"

export type CanvasCardProps = {
  /** Module avatar to display (e.g. "analytics", "surveys", "goals") */
  module: ModuleId
  /** Primary title */
  title: string
  /** Secondary description line */
  description: string
  /** Called when the user clicks the "Open" button */
  onOpen: () => void
}

/**
 * Shared inline card rendered in the AI chat for any canvas entity.
 * Shows a module avatar, title, description, and an "Open" button.
 */
export function CanvasCard({
  module,
  title,
  description,
  onOpen,
}: CanvasCardProps) {
  const translations = useI18n()

  return (
    <div className="flex flex-row items-center justify-between gap-3 rounded-lg border border-solid border-f1-border-secondary p-4">
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
        label={translations.ai.reportCard.openButton}
        onClick={onOpen}
      />
    </div>
  )
}

CanvasCard.displayName = "CanvasCard"
