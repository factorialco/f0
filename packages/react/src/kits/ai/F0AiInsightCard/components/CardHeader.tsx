import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { AIButton } from "@/kits/ai/AIButton"

import { descriptionVariants } from "../variants"

type CardHeaderProps = {
  description?: string
  isRevealed: boolean
  onAskOne?: () => void
}

export const CardHeader = ({
  description,
  isRevealed,
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
        {onAskOne && isRevealed && (
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
            <AIButton
              size="md"
              label={t.ai.ask}
              onClick={(event) => {
                event.stopPropagation()
                onAskOne()
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
