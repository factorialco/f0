import type { Ref } from "react"

import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Icon } from "@/components/F0Icon/F0Icon"
import { Pencil } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import type { ClarifyingSelectionMode } from "../../../actions/core/clarifyingQuestion/types"

import { RadioIndicator } from "./RadioIndicator"

interface CustomAnswerRowProps {
  mode: ClarifyingSelectionMode
  hasSelection: boolean
  hasCustomText: boolean
  customAnswerText: string | undefined
  isCustomAnswerActive: boolean
  canProceed: boolean
  inputRef: Ref<HTMLInputElement>
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

  const indicator =
    mode === "single" ? (
      <RadioIndicator isSelected={hasCustomText && !hasSelection} />
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
        "flex items-center gap-2 rounded-md px-1.5 py-1",
        "transition-colors hover:bg-f1-background-hover"
      )}
    >
      {indicator}
      <input
        ref={inputRef}
        type="text"
        value={customAnswerText ?? ""}
        onChange={(e) => onChangeText(e.target.value)}
        onFocus={onActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" && canProceed) {
            e.preventDefault()
            onConfirm()
          }
        }}
        placeholder={typeYourAnswer}
        aria-label={typeYourAnswer}
        className={cn(
          "min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary",
          focusRing()
        )}
      />
      <F0Icon icon={Pencil} size="md" color="secondary" />
    </div>
  )
}
