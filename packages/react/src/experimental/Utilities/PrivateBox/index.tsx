import { motion } from "motion/react"
import { FC, PropsWithChildren } from "react"

import { usePrivacyMode } from "../../../lib/privacyMode"
import { cn } from "../../../lib/utils"

export const PrivateBox: FC<PropsWithChildren> = ({ children }) => {
  const { enabled } = usePrivacyMode()

  return (
    <div
      className={cn(
        "inline-flex ring-1 ring-inset ring-transparent transition-all duration-150",
        enabled &&
          "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"
      )}
      aria-hidden={enabled}
    >
      <motion.div
        className="h-full w-full"
        animate={{
          opacity: enabled ? 0 : 1,
          scale: enabled ? 0.95 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
