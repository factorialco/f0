import { Folder } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useCallback, useRef, useState } from "react"

interface ChatDropZoneProps {
  children: React.ReactNode
  onFilesDrop: (files: File[]) => void
  disabled?: boolean
  className?: string
}

export const ChatDropZone = ({
  children,
  onFilesDrop,
  disabled,
  className,
}: ChatDropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const dragCounterRef = useRef(0)
  const translation = useI18n()

  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) {
        dragCounterRef.current++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
          setIsDragging(true)
        }
      }
    },
    [disabled]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounterRef.current--
    if (dragCounterRef.current === 0) {
      setIsDragging(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      dragCounterRef.current = 0

      const files = Array.from(e.dataTransfer.files)
      if (files.length > 0 && !disabled) {
        onFilesDrop(files)
      }
    },
    [disabled, onFilesDrop]
  )

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn("relative h-full", className)}
    >
      {children}

      {/* Drop zone overlay - matches Figma exactly */}
      {isDragging && (
        <div
          className={cn(
            "absolute inset-1 z-50 flex items-center justify-center",
            "rounded-xl border border-dashed border-f1-border",
            "bg-f1-background/90"
          )}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2.5">
              <Folder className="h-5 w-5 text-f1-icon" />
            </div>
            <p className="text-sm font-semibold text-f1-foreground">
              {translation.ai.dropZoneTitle}
            </p>
            <p className="max-w-[200px] text-sm text-f1-foreground-secondary">
              {translation.ai.dropZoneDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
