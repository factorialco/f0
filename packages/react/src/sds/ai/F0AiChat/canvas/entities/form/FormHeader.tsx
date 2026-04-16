import type { ModuleId } from "@/components/avatars/F0AvatarModule"

import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { OneEllipsis } from "@/lib/OneEllipsis"

import { CloseCanvasButton } from "../../components/CloseCanvasButton"

export function FormHeader({
  title,
  description,
  module,
  onClose,
}: {
  title: string
  description?: string
  module?: ModuleId
  onClose: () => void
}) {
  return (
    <div className="flex shrink-0 items-center gap-3 border-0 border-b border-solid border-f1-border-secondary p-3 pl-4">
      {module && <F0AvatarModule module={module} size="lg" />}
      <div className="min-w-0 flex-1">
        <OneEllipsis
          tag="h2"
          className="text-lg font-semibold text-f1-foreground"
        >
          {title}
        </OneEllipsis>
        {description && (
          <p className="truncate text-base text-f1-foreground-secondary">
            {description}
          </p>
        )}
      </div>
      <CloseCanvasButton onClick={onClose} />
    </div>
  )
}
