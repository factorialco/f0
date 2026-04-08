import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { AIButton } from "@/sds/ai/AIButton"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { descriptionVariants } from "../variants"

type CardHeaderProps = {
  description?: string
  isHovered: boolean
  onAskOne?: () => void
}

export const CardHeader = ({
  description,
  isHovered,
  onAskOne,
}: CardHeaderProps) => {
  const t = useI18n()
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {description && (
        <span className={cn(descriptionVariants(), "truncate")}>
          {description}
        </span>
      )}
      <AnimatePresence>
        {onAskOne && isHovered && (
          <motion.div
            className="absolute bottom-4 left-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <AIButton size="md" label={t.ai.ask} onClick={onAskOne} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
