import { AnimatePresence, motion } from "motion/react"
import { ReactNode, useEffect, useState } from "react"
import { F0Icon } from "../../../../components/F0Icon"
import { CheckCircle, LayersFront } from "../../../../icons/app"
import { cn } from "../../../../lib/utils"
import { InternalCopyActionType } from "../ItemContainer"

const COPIED_SHOWN_MS = 750

export type CopyActionProps = {
  children: ReactNode
} & InternalCopyActionType

export const CopyAction = ({ text, children }: CopyActionProps) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), COPIED_SHOWN_MS)

      return () => clearTimeout(timer)
    }
  }, [copied])

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch (error) {
      void error
    }
  }
  return (
    <button
      type="button"
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      className={cn(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        copied
          ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive"
          : undefined
      )}
      onClick={copyHandler}
    >
      {children}
      <div className="relative h-5 w-5">
        <AnimatePresence mode="wait">
          {!copied && (
            <motion.div
              key="copy-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0"
            >
              <F0Icon
                icon={LayersFront}
                size="md"
                aria-hidden={true}
                color="default"
                className={cn(
                  "opacity-0 transition-opacity duration-300",
                  !copied && "group-hover:opacity-100 group-focus-visible:opacity-100"
                )}
              />
            </motion.div>
          )}
          {copied && (
            <motion.div
              key="check-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0"
            >
              <F0Icon
                icon={CheckCircle}
                size="md"
                aria-hidden={true}
                color="positive"
                className={cn(
                  "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                  copied && "group-hover:opacity-100 group-focus-visible:opacity-100"
                )}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  )
}
