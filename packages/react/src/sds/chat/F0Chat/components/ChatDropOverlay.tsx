import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

/**
 * Dashed, blurred drop target overlaid on the composer — same feel as the AI
 * chat. Purely visual (`pointer-events-none`): the composer itself owns the
 * drag/drop handlers so a drop anywhere on it is captured reliably.
 */
export const ChatDropOverlay = ({
  visible,
}: {
  visible: boolean
}): ReactNode => {
  const i18n = useI18n()
  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "pointer-events-none absolute inset-1 z-50 flex flex-col items-center justify-center gap-2 rounded-xl",
        "border border-dashed border-f1-border bg-f1-background-tertiary/80 backdrop-blur",
        "transition-opacity duration-150 ease-out motion-reduce:transition-none",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <F0Icon icon={Upload} size="lg" color="bold" />
      <p className="text-base text-f1-foreground">{i18n.chat.dropFilesHere}</p>
    </div>
  )
}
