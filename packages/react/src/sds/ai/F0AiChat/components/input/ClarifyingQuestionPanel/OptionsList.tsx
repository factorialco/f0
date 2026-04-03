import type { Ref } from "react"

import type {
  ClarifyingOption,
  ClarifyingSelectionMode,
} from "../../../actions/core/clarifyingQuestion/types"

import { CustomAnswerRow } from "./CustomAnswerRow"
import { OptionRow } from "./OptionRow"

interface OptionsListProps {
  mode: ClarifyingSelectionMode
  question: string
  options: ClarifyingOption[]
  selectedOptionIds: string[]
  allowCustomAnswer: boolean | undefined
  hasSelection: boolean
  hasCustomText: boolean
  customAnswerText: string | undefined
  isCustomAnswerActive: boolean
  canProceed: boolean
  customInputRef: Ref<HTMLInputElement>
  onToggleOption: (optionId: string) => void
  onActivateCustom: () => void
  onChangeCustomText: (text: string) => void
  onToggleCustomActive: (active: boolean) => void
  onConfirm: () => void
}

export const OptionsList = ({
  mode,
  question,
  options,
  selectedOptionIds,
  allowCustomAnswer,
  hasSelection,
  hasCustomText,
  customAnswerText,
  isCustomAnswerActive,
  canProceed,
  customInputRef,
  onToggleOption,
  onActivateCustom,
  onChangeCustomText,
  onToggleCustomActive,
  onConfirm,
}: OptionsListProps) => {
  return (
    <div
      className="flex flex-col gap-0.5 overflow-y-auto px-2"
      role={mode === "single" ? "radiogroup" : "group"}
      aria-label={question}
    >
      {options.map((option) => (
        <OptionRow
          key={option.id}
          option={option}
          isSelected={selectedOptionIds.includes(option.id)}
          mode={mode}
          onToggle={onToggleOption}
        />
      ))}

      {allowCustomAnswer && (
        <CustomAnswerRow
          mode={mode}
          hasSelection={hasSelection}
          hasCustomText={hasCustomText}
          customAnswerText={customAnswerText}
          isCustomAnswerActive={isCustomAnswerActive}
          canProceed={canProceed}
          inputRef={customInputRef}
          onActivate={onActivateCustom}
          onChangeText={onChangeCustomText}
          onToggleActive={onToggleCustomActive}
          onConfirm={onConfirm}
        />
      )}
    </div>
  )
}
