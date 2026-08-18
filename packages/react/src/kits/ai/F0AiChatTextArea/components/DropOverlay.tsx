import { F0Icon } from "@/components/F0Icon/F0Icon"
import { Messages, Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

interface DropOverlayProps {
  visible: boolean
  /**
   * Handles a native file drop. Omit for `mode="discuss"`, where the drag is a
   * pointer gesture and carries no `dataTransfer`.
   */
  onFilesDropped?: (files: File[]) => void
  /** Which drop the overlay is inviting. */
  mode?: "files" | "discuss"
}

export const DropOverlay = ({
  visible,
  onFilesDropped,
  mode = "files",
}: DropOverlayProps) => {
  const translation = useI18n()
  const isDiscuss = mode === "discuss"

  return (
    <div
      aria-hidden={!visible}
      aria-live={visible ? "polite" : undefined}
      role={visible ? "status" : undefined}
      className={cn(
        "absolute inset-1 z-50 flex flex-col items-center gap-2 justify-center rounded-[calc(theme(borderRadius.xl)-4px)] backdrop-blur bg-f1-background-tertiary/80 border border-dashed border-f1-border",
        "transition-opacity duration-150 ease-out motion-reduce:transition-none",
        visible
          ? "opacity-100 pointer-events-auto"
          : "pointer-events-none opacity-0"
      )}
      onDragEnter={(e) => {
        e.preventDefault()
      }}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDragLeave={(e) => {
        e.preventDefault()
      }}
      onDrop={(e) => {
        e.preventDefault()
        if (!onFilesDropped) return
        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
          onFilesDropped(files)
        }
      }}
    >
      <F0Icon icon={isDiscuss ? Messages : Upload} size="lg" color="bold" />
      <p className="text-base font-normal text-f1-foreground">
        {isDiscuss
          ? translation.ai.dropWidgetToDiscuss
          : translation.ai.dropFilesHere}
      </p>
    </div>
  )
}
