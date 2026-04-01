import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Checkbox } from "@/components/F0Checkbox"
import { ChevronLeft, ChevronRight, Pencil } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { ClarifyingQuestion } from "../../actions/core/clarifyingQuestion/types"

/**
 * Panel that displays clarifying question options inside the textarea area.
 * Supports both checkbox (multi-select) and radio (single-select) modes,
 * with an optional free-text "Something else" custom answer row.
 */
export function ClarifyingQuestionPanel({
  clarifyingQuestion,
}: {
  clarifyingQuestion: ClarifyingQuestion
}) {
  const translation = useI18n()
  const shouldReduceMotion = useReducedMotion()
  const {
    question,
    options,
    selectedOptionIds,
    loading,
    selectionMode,
    optional,
    allowCustomAnswer,
    customAnswerText,
    isCustomAnswerActive,
    setCustomAnswerText,
    setCustomAnswerActive,
    activateCustomAnswer,
    currentStepIndex,
    totalSteps,
    toggleOption,
    confirm,
    back,
  } = clarifyingQuestion

  const customInputRef = useRef<HTMLInputElement>(null)
  const [isEditingCustom, setIsEditingCustom] = useState(false)

  // Restore editing state when navigating back to a step that had custom text
  useEffect(() => {
    setIsEditingCustom(customAnswerText.length > 0 && isCustomAnswerActive)
  }, [question]) // eslint-disable-line react-hooks/exhaustive-deps -- reset on step change only

  const isMultiStep = totalSteps > 1
  const isFirstStep = currentStepIndex === 0
  const isFinalStep = currentStepIndex === totalSteps - 1
  const stepLabel = isMultiStep
    ? `${currentStepIndex + 1} of ${totalSteps}`
    : undefined

  const hasSelection = selectedOptionIds.length > 0
  const hasCustomText = customAnswerText.trim().length > 0
  const canProceed =
    hasSelection || (isCustomAnswerActive && hasCustomText) || optional === true

  const confirmButtonLabel =
    clarifyingQuestion.confirmLabel ??
    (isFinalStep
      ? translation.ai.clarifyingQuestion.submit
      : translation.ai.clarifyingQuestion.next)

  const handleActivateCustom = () => {
    setIsEditingCustom(true)
    // In radio mode, activating custom answer deselects predefined options
    activateCustomAnswer()
    // Focus the input on the next tick after it renders
    requestAnimationFrame(() => {
      customInputRef.current?.focus()
    })
  }

  const handleDeactivateCustom = () => {
    setIsEditingCustom(false)
  }

  /** When a predefined option is selected in radio mode, deactivate custom input */
  const handleToggleOption = (optionId: string) => {
    toggleOption(optionId)
    if (selectionMode === "radio") {
      setIsEditingCustom(false)
    }
  }

  const animationDuration = shouldReduceMotion ? 0 : 0.2

  if (loading) {
    return (
      <div className="flex flex-col gap-2 px-3 pt-3" aria-busy="true">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-5 animate-pulse rounded bg-f1-background-secondary"
          />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: animationDuration, ease: "easeInOut" }}
      className="flex flex-col gap-2 overflow-hidden"
    >
      <div className="flex flex-col gap-2 px-3 pt-3">
        <div className="flex items-center gap-2">
          <p
            className="min-w-0 flex-1 text-sm font-medium text-f1-foreground"
            aria-live="polite"
          >
            {question}
          </p>
          {stepLabel && (
            <div className="ml-auto flex shrink-0 items-center gap-0.5 text-xs text-f1-foreground-secondary">
              <button
                type="button"
                onClick={back}
                disabled={isFirstStep}
                className={cn(
                  "flex size-5 items-center justify-center rounded-sm",
                  focusRing("rounded-sm"),
                  isFirstStep
                    ? "cursor-default text-f1-foreground-disabled"
                    : "transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground"
                )}
                aria-label={translation.ai.clarifyingQuestion.back}
              >
                <ChevronLeft className="size-3.5" />
              </button>
              <span>{stepLabel}</span>
              {/*
                Forward chevron calls `confirm`, which advances to the next step
                when not on the final step, or submits the full answer set on the
                final step. Disabled when canProceed is false to prevent empty submits.
              */}
              <button
                type="button"
                onClick={confirm}
                disabled={isFinalStep || !canProceed}
                className={cn(
                  "flex size-5 items-center justify-center rounded-sm",
                  focusRing("rounded-sm"),
                  isFinalStep || !canProceed
                    ? "cursor-default text-f1-foreground-disabled"
                    : "transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground"
                )}
                aria-label={translation.ai.clarifyingQuestion.next}
              >
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          )}
        </div>

        <div
          className="flex max-h-[200px] flex-col gap-1 overflow-y-auto"
          role={selectionMode === "radio" ? "radiogroup" : "group"}
          aria-label={question}
        >
          {options.map((option) => {
            const isSelected = selectedOptionIds.includes(option.id)

            if (selectionMode === "radio") {
              return (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => handleToggleOption(option.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm",
                    "transition-colors",
                    focusRing("rounded-md"),
                    isSelected
                      ? "bg-f1-background-selected text-f1-foreground"
                      : "text-f1-foreground hover:bg-f1-background-secondary"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
                      isSelected
                        ? "bg-f1-background-selected-bold"
                        : "border-2 border-solid border-f1-border bg-f1-background"
                    )}
                  >
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-f1-background" />
                    )}
                  </span>
                  <span>{option.label}</span>
                </button>
              )
            }

            return (
              <label
                key={option.id}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                  "cursor-pointer transition-colors",
                  "hover:bg-f1-background-secondary"
                )}
              >
                <F0Checkbox
                  checked={isSelected}
                  onCheckedChange={() => handleToggleOption(option.id)}
                />
                <span className="text-f1-foreground">{option.label}</span>
              </label>
            )
          })}

          {allowCustomAnswer && !isEditingCustom && (
            <div
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm",
                "transition-colors",
                "text-f1-foreground hover:bg-f1-background-secondary"
              )}
            >
              {hasCustomText ? (
                selectionMode === "radio" ? (
                  <button
                    type="button"
                    onClick={handleActivateCustom}
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
                      focusRing("rounded-full"),
                      !hasSelection
                        ? "bg-f1-background-selected-bold"
                        : "border-2 border-solid border-f1-border bg-f1-background"
                    )}
                  >
                    {!hasSelection && (
                      <span className="h-2 w-2 rounded-full bg-f1-background" />
                    )}
                  </button>
                ) : (
                  <F0Checkbox
                    checked={isCustomAnswerActive}
                    onCheckedChange={() => {
                      setCustomAnswerActive(!isCustomAnswerActive)
                    }}
                  />
                )
              ) : (
                <span
                  className={cn(
                    "flex shrink-0 items-center justify-center",
                    selectionMode === "radio" ? "size-5" : "size-6"
                  )}
                >
                  <Pencil className="size-3.5 text-f1-foreground-secondary" />
                </span>
              )}
              <button
                type="button"
                onClick={handleActivateCustom}
                className={cn(
                  "min-w-0 flex-1 text-left",
                  focusRing("rounded-sm"),
                  hasCustomText ? "text-f1-foreground" : ""
                )}
              >
                {hasCustomText
                  ? customAnswerText
                  : translation.ai.clarifyingQuestion.typeYourAnswer}
              </button>
              {hasCustomText && (
                <button
                  type="button"
                  onClick={handleActivateCustom}
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-sm",
                    focusRing("rounded-sm")
                  )}
                  aria-label={translation.ai.clarifyingQuestion.typeYourAnswer}
                >
                  <Pencil className="size-3.5 text-f1-foreground-secondary" />
                </button>
              )}
            </div>
          )}

          {allowCustomAnswer && isEditingCustom && (
            <div
              data-custom-row
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                "transition-colors",
                selectionMode === "radio" && hasCustomText
                  ? "bg-f1-background-selected"
                  : "hover:bg-f1-background-secondary"
              )}
            >
              {selectionMode === "radio" ? (
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
                    hasCustomText
                      ? "bg-f1-background-selected-bold"
                      : "border-2 border-solid border-f1-border bg-f1-background"
                  )}
                >
                  {hasCustomText && (
                    <span className="h-2 w-2 rounded-full bg-f1-background" />
                  )}
                </span>
              ) : (
                <F0Checkbox
                  checked={isCustomAnswerActive}
                  onCheckedChange={() => {
                    if (isCustomAnswerActive) {
                      setCustomAnswerActive(false)
                      handleDeactivateCustom()
                    }
                  }}
                />
              )}
              <input
                ref={customInputRef}
                type="text"
                value={customAnswerText}
                onChange={(e) => setCustomAnswerText(e.target.value)}
                onBlur={(e) => {
                  // Don't exit editing if focus moves to the checkbox within the same row
                  const parent = e.currentTarget.closest("[data-custom-row]")
                  if (parent?.contains(e.relatedTarget as Node)) return
                  handleDeactivateCustom()
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canProceed) {
                    e.preventDefault()
                    confirm()
                  }
                  if (e.key === "Escape") {
                    handleDeactivateCustom()
                  }
                }}
                placeholder={translation.ai.clarifyingQuestion.typeYourAnswer}
                aria-label={translation.ai.clarifyingQuestion.typeYourAnswer}
                className="min-w-0 flex-1 bg-transparent text-sm text-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end p-3">
        <ButtonInternal
          type="button"
          disabled={!canProceed}
          variant={canProceed ? "default" : "neutral"}
          label={confirmButtonLabel}
          onClick={confirm}
        />
      </div>
    </motion.div>
  )
}
