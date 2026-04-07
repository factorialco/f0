import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { F0Icon } from "@/components/F0Icon/F0Icon"
import { Upload } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

interface DropOverlayProps {
  visible: boolean
  shouldReduceMotion: boolean
  onFilesDropped: (files: File[]) => void
}

export const DropOverlay = ({
  visible,
  shouldReduceMotion,
  onFilesDropped,
}: DropOverlayProps) => {
  const translation = useI18n()
  const [isOver, setIsOver] = useState(false)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
          className={cn(
            "absolute -inset-x-1 -top-40 -bottom-7 z-50 flex flex-col items-center gap-2 justify-center rounded border-1 border-dashed border-f1-border-selected-bold backdrop-blur-lg",
            isOver
              ? "bg-f1-background-selected-hover"
              : "bg-f1-background-selected-secondary"
          )}
          onDragEnter={(e) => {
            e.preventDefault()
            setIsOver(true)
          }}
          onDragOver={(e) => {
            e.preventDefault()
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            setIsOver(false)
          }}
          onDrop={(e) => {
            e.preventDefault()
            setIsOver(false)
            const files = Array.from(e.dataTransfer.files)
            if (files.length > 0) {
              onFilesDropped(files)
            }
          }}
        >
          <F0Icon icon={Upload} size="lg" color="selected" />
          <p className="text-base font-medium text-f1-foreground-selected">
            {translation.ai.dropFilesHere}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
