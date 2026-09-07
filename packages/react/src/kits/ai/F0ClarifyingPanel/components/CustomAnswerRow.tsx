import { useComposedRefs } from "@radix-ui/react-compose-refs"
import { useLayoutEffect, useRef, type Ref } from "react"

import { F0Checkbox } from "@/components/F0Checkbox"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import type { ClarifyingSelectionMode } from "../types"

import { RadioIndicator } from "./RadioIndicator"

// Cap on auto-growth: beyond this the textarea scrolls internally instead of
// pushing the whole panel taller. Roughly six lines of text.
const MAX_TEXTAREA_HEIGHT = 132

interface CustomAnswerRowProps {
  mode: ClarifyingSelectionMode
  hasSelection: boolean
  hasCustomText: boolean
  customAnswerText: string | undefined
  isCustomAnswerActive: boolean
  canProceed: boolean
  inputRef: Ref<HTMLTextAreaElement>
  onActivate: () => void
  onChangeText: (text: string) => void
  onToggleActive: (active: boolean) => void
  onConfirm: () => void
}

export const CustomAnswerRow = ({
  mode,
  hasSelection,
  hasCustomText,
  customAnswerText,
  isCustomAnswerActive,
  canProceed,
  inputRef,
  onActivate,
  onChangeText,
  onToggleActive,
  onConfirm,
}: CustomAnswerRowProps) => {
  const translation = useI18n()
  const typeYourAnswer = translation.ai.clarifyingQuestion.typeYourAnswer

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const composedRef = useComposedRefs(textareaRef, inputRef)

  // Auto-grow: mirror the textarea's height to its content so long answers
  // wrap and stay visible instead of scrolling out of a single line. Runs
  // after every value change via useLayoutEffect to avoid a visible reflow.
  useLayoutEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return
    // Collapse first so scrollHeight reports the true content height rather
    // than the previous (possibly taller) height.
    textarea.style.height = "auto"
    const nextHeight = Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT)
    textarea.style.height = `${nextHeight}px`
    textarea.style.overflowY =
      textarea.scrollHeight > MAX_TEXTAREA_HEIGHT ? "auto" : "hidden"
  }, [customAnswerText])

  // The row behaves like one more option: activating it (click or focus)
  // marks the radio right away — not only once text has been typed — and a
  // predefined selection always wins, so hosts that don't reset
  // `isCustomAnswerActive` on option toggle can't show two marked radios.
  const isMarkedSelected =
    (isCustomAnswerActive || hasCustomText) && !hasSelection

  const indicator =
    mode === "single" ? (
      <RadioIndicator isSelected={isMarkedSelected} />
    ) : (
      <F0Checkbox
        checked={isCustomAnswerActive}
        onCheckedChange={() => onToggleActive(!isCustomAnswerActive)}
        title={typeYourAnswer}
        hideLabel
      />
    )

  return (
    <div
      className={cn(
        "flex cursor-text items-start gap-2 rounded-md px-2 py-2",
        "transition-colors hover:bg-f1-background-hover"
      )}
      // Clicking anywhere in the row (radio indicator, padding) activates the
      // custom answer, mirroring how OptionRow selects on row click. Focusing
      // the textarea fires `onActivate` via its own onFocus.
      onClick={() => textareaRef.current?.focus()}
    >
      {indicator}
      <textarea
        ref={composedRef}
        rows={1}
        value={customAnswerText ?? ""}
        onChange={(e) => onChangeText(e.target.value)}
        onFocus={onActivate}
        onKeyDown={(e) => {
          // Enter submits; Shift+Enter inserts a newline for multi-line answers.
          if (e.key === "Enter" && !e.shiftKey && canProceed) {
            e.preventDefault()
            onConfirm()
          }
        }}
        placeholder={typeYourAnswer}
        aria-label={typeYourAnswer}
        className="min-w-0 flex-1 resize-none bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
      />
    </div>
  )
}
