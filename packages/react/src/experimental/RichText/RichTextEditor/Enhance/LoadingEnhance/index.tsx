import { AnimatePresence, motion } from "motion/react"

import { Spinner } from "@/experimental/Information/Spinner"
import { cn } from "@/lib/utils"

interface LoadingEnhanceProps {
  label?: string
  isFullscreen?: boolean
}

/**
 * Inline loading indicator (shown in the bottom bar)
 */
const LoadingEnhanceInline = ({ label }: LoadingEnhanceProps) => {
  return (
    <div className="dark flex items-center gap-3 rounded-md border border-solid border-f1-border bg-f1-background px-4 py-1.5 drop-shadow-sm">
      <Spinner size="small" />
      <p className="font-medium text-f1-foreground">{label || "Loading..."}</p>
    </div>
  )
}

interface LoadingEnhanceOverlayProps {
  label?: string
  isFullscreen?: boolean
  isVisible: boolean
}

/**
 * Full document loading overlay with animated gradient background
 */
const LoadingEnhanceOverlay = ({
  label,
  isFullscreen = false,
  isVisible,
}: LoadingEnhanceOverlayProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="full-doc-loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-0 z-50 flex items-center justify-center rounded-lg px-3 pb-2 pt-3",
            !isFullscreen && "max-h-60"
          )}
        >
          <motion.div
            className={cn(
              "flex h-full w-full flex-row items-center justify-center gap-3 rounded-md",
              isFullscreen && "max-w-[824px]"
            )}
            style={{
              background:
                "linear-gradient(90deg, #E5561980, #A1ADE580, #E5194380, #E5561980)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <Spinner size="small" />
            <p className="font-medium">{label || "Loading..."}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { LoadingEnhanceInline, LoadingEnhanceOverlay }
