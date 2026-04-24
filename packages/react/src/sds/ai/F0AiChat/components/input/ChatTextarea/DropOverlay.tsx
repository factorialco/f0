import { F0Icon } from "@/components/F0Icon/F0Icon"
import { Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

interface DropOverlayProps {
  visible: boolean
  onFilesDropped: (files: File[]) => void
}

export const DropOverlay = ({ visible, onFilesDropped }: DropOverlayProps) => {
  const translation = useI18n()

  return (
    <div
      className={cn(
        "absolute inset-1 z-50 flex flex-col items-center gap-2 justify-center rounded-[calc(theme(borderRadius.xl)-4px)] backdrop-blur bg-f1-background-tertiary/80 border border-dashed border-f1-border",
        "transition-opacity duration-150 ease-out motion-reduce:transition-none dashed-lg",
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
        const files = Array.from(e.dataTransfer.files)
        if (files.length > 0) {
          onFilesDropped(files)
        }
      }}
    >
      <F0Icon icon={Upload} size="lg" color="bold" />
      <p className="text-base font-normal text-f1-foreground">
        {translation.ai.dropFilesHere}
      </p>
    </div>
  )
}
