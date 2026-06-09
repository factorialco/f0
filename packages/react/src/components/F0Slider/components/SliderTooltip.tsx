import type { CSSProperties } from "react"

import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

interface SliderTooltipProps {
  visible: boolean
  content: string
  style?: CSSProperties
}

export const SliderTooltip = ({
  visible,
  content,
  style,
}: SliderTooltipProps) => {
  const shouldReduceMotion = useReducedMotion()
  const duration = shouldReduceMotion ? 0 : 0.15

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: "-50%", y: 2 }}
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          exit={{ opacity: 0, x: "-50%", y: 2 }}
          transition={{ duration }}
          style={style}
          className={cn(
            "pointer-events-none absolute bottom-full mb-2",
            "dark whitespace-nowrap rounded-md px-2 py-1",
            "border border-solid border-f1-border-secondary bg-f1-background",
            "text-sm font-medium text-f1-foreground-inverse"
          )}
          role="tooltip"
        >
          {content}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
