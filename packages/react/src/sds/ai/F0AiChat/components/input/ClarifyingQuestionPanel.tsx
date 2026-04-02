import { motion } from "motion/react"
import { type Ref, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Checkbox } from "@/components/F0Checkbox"
import { OneEllipsis } from "@/components/OneEllipsis"
import { ChevronLeft, ChevronRight, Pencil } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type {
  ClarifyingOption,
  ClarifyingQuestionState,
  ClarifyingSelectionMode,
} from "../../actions/core/clarifyingQuestion/types"

// ---------------------------------------------------------------------------
// Public entry point
// ---------------------------------------------------------------------------

/**
 * Animated wrapper that mounts/unmounts the clarifying question panel.
 * Handles the height + opacity transition via Framer Motion.
 */
export function ClarifyingQuestionPanel({
  clarifyingQuestion,
}: {
  clarifyingQuestion: ClarifyingQuestionState
}) {
  const shouldReduceMotion = useReducedMotion()
  const animationDuration = shouldReduceMotion ? 0 : 0.25

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: animationDuration, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <ClarifyingQuestionContent clarifyingQuestion={clarifyingQuestion} />
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// StepHeader — question text + multi-step navigation
// ---------------------------------------------------------------------------

function StepHeader({
  question,
  stepLabel,
  isFirstStep,
  isFinalStep,
  canProceed,
  onBack,
  onNext,
}: {
  question: string
  stepLabel: string | undefined
  isFirstStep: boolean
  isFinalStep: boolean
  canProceed: boolean
  onBack: () => void
  onNext: () => void
}) {
  const translation = useI18n()

  return (
    <div className="flex items-start gap-2 px-4">
      <OneEllipsis
        className="min-w-0 flex-1 text-base font-medium text-f1-foreground"
        lines={3}
      >
        {question}
      </OneEllipsis>

      {stepLabel && (
        <div className="flex shrink-0 items-center gap-0.5">
          <F0Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            disabled={isFirstStep}
            label={translation.ai.clarifyingQuestion.back}
            hideLabel
            icon={ChevronLeft}
          />
          <span className="text-sm text-f1-foreground-secondary">
            {stepLabel}
          </span>
          <F0Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            disabled={isFinalStep || !canProceed}
            label={translation.ai.clarifyingQuestion.next}
            hideLabel
            icon={ChevronRight}
          />
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// SingleSelectOption — radio-style option row
// ---------------------------------------------------------------------------

function SingleSelectOption({
  option,
  isSelected,
  onToggle,
}: {
  option: ClarifyingOption
  isSelected: boolean
  onToggle: (optionId: string) => void
}) {
  return (
    <div
      className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 transition-colors hover:bg-f1-background-secondary"
      onClick={() => onToggle(option.id)}
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors m-0.5",
          isSelected
            ? "bg-f1-background-selected-bold"
            : "border-2 border-solid border-f1-border bg-f1-background"
        )}
      >
        {isSelected && (
          <span className="h-2 w-2 rounded-full bg-f1-background" />
        )}
      </span>
      <span className="text-base text-f1-foreground">{option.label}</span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// MultiSelectOption — checkbox-style option row
// ---------------------------------------------------------------------------

function MultiSelectOption({
  option,
  isSelected,
  onToggle,
}: {
  option: ClarifyingOption
  isSelected: boolean
  onToggle: (optionId: string) => void
}) {
  return (
    <div
      className="flex cursor-pointer items-center rounded-md pl-1.5 transition-colors hover:bg-f1-background-secondary"
      // onClick={() => onToggle(option.id)}
    >
      {/* Visual-only checkbox — the <div> onClick is the sole toggle handler */}
      <F0Checkbox
        checked={isSelected}
        onCheckedChange={() => onToggle(option.id)}
      />
      <span
        className="w-full py-1.5 pl-2 pr-1.5 text-base text-f1-foreground"
        onClick={() => onToggle(option.id)}
      >
        {option.label}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// CustomAnswerRow — custom free-text answer (display + editing states)
// ---------------------------------------------------------------------------

function CustomAnswerRow({
  mode,
  isEditing,
  hasSelection,
  hasCustomText,
  customAnswerText,
  isCustomAnswerActive,
  canProceed,
  inputRef,
  onActivate,
  onDeactivate,
  onChangeText,
  onToggleActive,
  onConfirm,
}: {
  mode: ClarifyingSelectionMode
  isEditing: boolean
  hasSelection: boolean
  hasCustomText: boolean
  customAnswerText: string | undefined
  isCustomAnswerActive: boolean
  canProceed: boolean
  inputRef: Ref<HTMLInputElement>
  onActivate: () => void
  onDeactivate: () => void
  onChangeText: (text: string) => void
  onToggleActive: (active: boolean) => void
  onConfirm: () => void
}) {
  const translation = useI18n()
  const typeYourAnswer = translation.ai.clarifyingQuestion.typeYourAnswer

  // --- Indicator (radio dot or checkbox) ---

  const indicator = (() => {
    if (isEditing) {
      if (mode === "single") {
        return (
          <span
            className={cn(
              "flex h-5 w-5 mx-0.5 shrink-0 items-center justify-center rounded-full transition-colors",
              hasCustomText
                ? "bg-f1-background-selected-bold"
                : "border-2 border-solid border-f1-border bg-f1-background"
            )}
          >
            {hasCustomText && (
              <span className="h-2 w-2 rounded-full bg-f1-background" />
            )}
          </span>
        )
      }

      return (
        <F0Checkbox
          checked={isCustomAnswerActive}
          onCheckedChange={() => {
            if (isCustomAnswerActive) {
              onToggleActive(false)
              onDeactivate()
            }
          }}
        />
      )
    }

    // Display state
    if (hasCustomText) {
      if (mode === "single") {
        return (
          <button
            type="button"
            onClick={onActivate}
            className={cn(
              "flex h-5 w-5 mx-0.5 shrink-0 items-center justify-center rounded-full transition-colors",
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
        )
      }

      return (
        <F0Checkbox
          checked={isCustomAnswerActive}
          onCheckedChange={() => onToggleActive(!isCustomAnswerActive)}
        />
      )
    }

    return (
      <F0Button
        onClick={onActivate}
        label={typeYourAnswer}
        icon={Pencil}
        variant="ghost"
        size="sm"
        hideLabel
      />
    )
  })()

  // --- Content (text display or input field) ---

  const content = isEditing ? (
    <input
      ref={inputRef}
      type="text"
      value={customAnswerText ?? ""}
      onChange={(e) => onChangeText(e.target.value)}
      onBlur={(e) => {
        const parent = e.currentTarget.closest("[data-custom-row]")
        if (parent?.contains(e.relatedTarget as Node)) return
        onDeactivate()
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && canProceed) {
          e.preventDefault()
          onConfirm()
        }
        if (e.key === "Escape") {
          onDeactivate()
        }
      }}
      placeholder={typeYourAnswer}
      aria-label={typeYourAnswer}
      className="min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
    />
  ) : (
    <span
      onClick={onActivate}
      className="my-0.5 min-w-0 flex-1 cursor-pointer text-left text-base text-f1-foreground"
    >
      {hasCustomText ? customAnswerText : typeYourAnswer}
    </span>
  )

  // --- Trailing edit button ---

  const editButton = (isEditing || hasCustomText) && (
    <F0Button
      onClick={onActivate}
      label={typeYourAnswer}
      icon={Pencil}
      variant="ghost"
      size="sm"
      hideLabel
    />
  )

  return (
    <div
      data-custom-row
      className={cn(
        "flex items-center gap-2 rounded-md px-1.5 py-1",
        "transition-colors",
        isEditing && mode === "single" && hasCustomText
          ? "bg-f1-background-selected"
          : "hover:bg-f1-background-secondary"
      )}
    >
      {indicator}
      {content}
      {editButton}
    </div>
  )
}

// ---------------------------------------------------------------------------
// OptionsList — scrollable container for option rows + custom answer
// ---------------------------------------------------------------------------

function OptionsList({
  mode,
  question,
  options,
  selectedOptionIds,
  allowCustomAnswer,
  isEditingCustom,
  hasSelection,
  hasCustomText,
  customAnswerText,
  isCustomAnswerActive,
  canProceed,
  customInputRef,
  onToggleOption,
  onActivateCustom,
  onDeactivateCustom,
  onChangeCustomText,
  onToggleCustomActive,
  onConfirm,
}: {
  mode: ClarifyingSelectionMode
  question: string
  options: ClarifyingOption[]
  selectedOptionIds: string[]
  allowCustomAnswer: boolean | undefined
  isEditingCustom: boolean
  hasSelection: boolean
  hasCustomText: boolean
  customAnswerText: string | undefined
  isCustomAnswerActive: boolean
  canProceed: boolean
  customInputRef: Ref<HTMLInputElement>
  onToggleOption: (optionId: string) => void
  onActivateCustom: () => void
  onDeactivateCustom: () => void
  onChangeCustomText: (text: string) => void
  onToggleCustomActive: (active: boolean) => void
  onConfirm: () => void
}) {
  return (
    <div
      className="flex flex-col gap-0.5 overflow-y-auto px-2"
      role={mode === "single" ? "radiogroup" : "group"}
      aria-label={question}
    >
      {options.map((option) => {
        const isSelected = selectedOptionIds.includes(option.id)

        if (mode === "single") {
          return (
            <SingleSelectOption
              key={option.id}
              option={option}
              isSelected={isSelected}
              onToggle={onToggleOption}
            />
          )
        }

        return (
          <MultiSelectOption
            key={option.id}
            option={option}
            isSelected={isSelected}
            onToggle={onToggleOption}
          />
        )
      })}

      {allowCustomAnswer && (
        <CustomAnswerRow
          mode={mode}
          isEditing={isEditingCustom}
          hasSelection={hasSelection}
          hasCustomText={hasCustomText}
          customAnswerText={customAnswerText}
          isCustomAnswerActive={isCustomAnswerActive}
          canProceed={canProceed}
          inputRef={customInputRef}
          onActivate={onActivateCustom}
          onDeactivate={onDeactivateCustom}
          onChangeText={onChangeCustomText}
          onToggleActive={onToggleCustomActive}
          onConfirm={onConfirm}
        />
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ConfirmFooter — bottom bar with the confirm/next/submit button
// ---------------------------------------------------------------------------

function ConfirmFooter({
  canProceed,
  label,
  onConfirm,
}: {
  canProceed: boolean
  label: string
  onConfirm: () => void
}) {
  return (
    <div className="flex items-center justify-end p-4">
      <ButtonInternal
        type="button"
        disabled={!canProceed}
        variant={canProceed ? "default" : "neutral"}
        label={label}
        onClick={onConfirm}
      />
    </div>
  )
}

// ---------------------------------------------------------------------------
// ClarifyingQuestionContent — orchestrates state and composes sub-components
// ---------------------------------------------------------------------------

function ClarifyingQuestionContent({
  clarifyingQuestion,
}: {
  clarifyingQuestion: ClarifyingQuestionState
}) {
  const translation = useI18n()
  const {
    currentStep,
    currentStepIndex,
    totalSteps,
    toggleOption,
    confirm,
    back,
    setCustomAnswerText,
    setCustomAnswerActive,
    activateCustomAnswer,
  } = clarifyingQuestion

  const {
    question,
    options,
    selectedOptionIds,
    selectionMode,
    optional,
    allowCustomAnswer,
    customAnswerText,
    isCustomAnswerActive,
  } = currentStep

  const customInputRef = useRef<HTMLInputElement>(null)
  const [isEditingCustom, setIsEditingCustom] = useState(false)

  // Restore editing state when navigating back to a step that had custom text
  useEffect(() => {
    setIsEditingCustom(
      (customAnswerText ?? "").length > 0 && isCustomAnswerActive
    )
  }, [question]) // eslint-disable-line react-hooks/exhaustive-deps -- reset on step change only

  const mode = selectionMode ?? "single"
  const isMultiStep = totalSteps > 1
  const isFirstStep = currentStepIndex === 0
  const isFinalStep = currentStepIndex === totalSteps - 1
  const stepLabel = isMultiStep
    ? `${currentStepIndex + 1} of ${totalSteps}`
    : undefined

  const hasSelection = selectedOptionIds.length > 0
  const hasCustomText = (customAnswerText ?? "").trim().length > 0
  const canProceed =
    hasSelection || (isCustomAnswerActive && hasCustomText) || optional === true

  const confirmButtonLabel = isFinalStep
    ? translation.ai.clarifyingQuestion.submit
    : translation.ai.clarifyingQuestion.next

  const handleActivateCustom = () => {
    setIsEditingCustom(true)
    activateCustomAnswer()
    requestAnimationFrame(() => {
      customInputRef.current?.focus()
    })
  }

  const handleDeactivateCustom = () => {
    setIsEditingCustom(false)
  }

  const handleToggleOption = (optionId: string) => {
    toggleOption(optionId)
    if (mode === "single") {
      setIsEditingCustom(false)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 pt-4">
        <StepHeader
          question={question}
          stepLabel={stepLabel}
          isFirstStep={isFirstStep}
          isFinalStep={isFinalStep}
          canProceed={canProceed}
          onBack={back}
          onNext={confirm}
        />

        <OptionsList
          mode={mode}
          question={question}
          options={options}
          selectedOptionIds={selectedOptionIds}
          allowCustomAnswer={allowCustomAnswer}
          isEditingCustom={isEditingCustom}
          hasSelection={hasSelection}
          hasCustomText={hasCustomText}
          customAnswerText={customAnswerText}
          isCustomAnswerActive={isCustomAnswerActive}
          canProceed={canProceed}
          customInputRef={customInputRef}
          onToggleOption={handleToggleOption}
          onActivateCustom={handleActivateCustom}
          onDeactivateCustom={handleDeactivateCustom}
          onChangeCustomText={setCustomAnswerText}
          onToggleCustomActive={setCustomAnswerActive}
          onConfirm={confirm}
        />
      </div>

      <ConfirmFooter
        canProceed={canProceed}
        label={confirmButtonLabel}
        onConfirm={confirm}
      />
    </div>
  )
}
