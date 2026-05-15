import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Text } from "@/components/F0Text"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { Cross, Messages } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { NpsFeedback } from "./components/NpsFeedback"
import { NpsScoring } from "./components/NpsScoring"
import { F0NpsWidgetProps, NpsStep } from "./types"

export function F0NpsWidget({
  title,
  module,
  open,
  onClose,
  onScoreChange,
  onFeedbackChange,
  onSubmit,
  isSubmitting = false,
  score: controlledScore,
  feedback: controlledFeedback,
}: F0NpsWidgetProps) {
  const t = useI18n()
  const [step, setStep] = useState<NpsStep>("scoring")
  const [internalScore, setInternalScore] = useState<number | undefined>()
  const [internalFeedback, setInternalFeedback] = useState("")

  const isControlledScore = controlledScore !== undefined
  const score = isControlledScore ? controlledScore : internalScore
  const feedback =
    controlledFeedback !== undefined ? controlledFeedback : internalFeedback

  const handleScoreChange = (value: number) => {
    if (!isControlledScore) setInternalScore(value)
    onScoreChange?.(value)
  }

  const handleFeedbackChange = (value: string) => {
    if (controlledFeedback === undefined) setInternalFeedback(value)
    onFeedbackChange?.(value)
  }

  const handleScoringNext = () => {
    if (score !== undefined) setStep("feedback")
  }

  const handleSubmit = async () => {
    if (score === undefined) return
    await onSubmit(score, feedback)
    setStep("thank-you")
  }

  const feedbackTitle =
    (score ?? 0) < 6 ? t.npsWidget.feedbackLow : t.npsWidget.feedbackHigh

  const thankYouTitle =
    (score ?? 0) >= 9 ? t.npsWidget.thankYouHigh : t.npsWidget.thankYouDefault

  const headerTitle =
    step === "feedback"
      ? feedbackTitle
      : step === "thank-you"
        ? thankYouTitle
        : title

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.npsWidget.survey}
      className={cn(
        "fixed bottom-6 left-6 z-50 w-[480px]",
        "rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
        "shadow"
      )}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 p-4 pb-3">
        <div className="flex items-start justify-between">
          <AnimatePresence mode="wait" initial={false}>
            {step === "thank-you" ? (
              <motion.div
                key="avatar-thank-you"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <F0AvatarAlert type="positive" size="md" />
              </motion.div>
            ) : (
              <motion.div
                key="avatar-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {module ? (
                  <F0AvatarModule module={module} size="lg" />
                ) : (
                  <F0AvatarIcon icon={Messages} size="md" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <F0Button
            label={t.actions.close}
            icon={Cross}
            hideLabel
            variant="ghost"
            size="sm"
            onClick={onClose}
          />
        </div>
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={headerTitle}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <F0Text variant="label" content={headerTitle} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Body — animated step transitions */}
      <div className="p-4 pt-0">
        <AnimatePresence mode="wait" initial={false}>
          {step === "scoring" && (
            <motion.div
              key="scoring"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex flex-col gap-3"
            >
              <NpsScoring value={score} onChange={handleScoreChange} />
              <AnimatePresence initial={false}>
                {score !== undefined && (
                  <motion.div
                    key="next-button"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="flex justify-end"
                  >
                    <F0Button
                      label={t.npsWidget.next}
                      variant="default"
                      size="md"
                      onClick={handleScoringNext}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {step === "feedback" && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <NpsFeedback
                value={feedback}
                onChange={handleFeedbackChange}
                onSubmit={handleSubmit}
                onBack={() => setStep("scoring")}
                isSubmitting={isSubmitting}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

F0NpsWidget.displayName = "F0NpsWidget"
