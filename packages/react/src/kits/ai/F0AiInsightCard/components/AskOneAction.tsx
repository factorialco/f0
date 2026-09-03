import { AnimatePresence, motion } from "motion/react"

import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { AIButton } from "@/kits/ai/AIButton"

type AskOneActionProps = {
  isRevealed: boolean
  onAskOne?: () => void
}

/**
 * Rendered as a sibling of the card surface, never inside it: the card root
 * may be a `role="button"`, and nesting a real <button> inside it would be a
 * WCAG 4.1.2 violation (axe `nested-interactive`).
 */
export const AskOneAction = ({ isRevealed, onAskOne }: AskOneActionProps) => {
  const t = useI18n()
  const shouldReduceMotion = useReducedMotion()

  return (
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
          <AIButton size="md" label={t.ai.ask} onClick={() => onAskOne()} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
