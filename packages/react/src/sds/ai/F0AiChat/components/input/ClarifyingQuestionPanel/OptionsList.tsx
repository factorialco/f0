import { useEffect, useRef, useState, type Ref } from "react"

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
  /** When true, auto-focus the first option when the list mounts */
  autoFocus?: boolean
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
  autoFocus,
  onToggleOption,
  onActivateCustom,
  onChangeCustomText,
  onToggleCustomActive,
  onConfirm,
}: OptionsListProps) => {
  // Roving tabindex: index of the currently-focused option.
  // When nothing is selected, default to the first option.
  const initialTabStop = (() => {
    if (mode !== "single") return 0
    const idx = options.findIndex((o) => selectedOptionIds.includes(o.id))
    return idx >= 0 ? idx : 0
  })()
  const [tabStopIndex, setTabStopIndex] = useState(initialTabStop)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (autoFocus && mode === "single") {
      itemRefs.current[tabStopIndex]?.focus()
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleKeyNavigate = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (mode !== "single") return
    const last = options.length - 1
    if (last < 0) return

    let next = tabStopIndex
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = tabStopIndex >= last ? 0 : tabStopIndex + 1
        break
      case "ArrowUp":
      case "ArrowLeft":
        next = tabStopIndex <= 0 ? last : tabStopIndex - 1
        break
      case "Home":
        next = 0
        break
      case "End":
        next = last
        break
      default:
        return
    }

    e.preventDefault()
    setTabStopIndex(next)
    itemRefs.current[next]?.focus()
    // Arrow keys only move focus — selection happens on Space/Enter. This
    // deviates from the strict WAI-ARIA radio pattern so users can leave
    // a step with nothing selected (important for optional steps where
    // "no selection" enables Skip / Esc).
  }

  return (
    <div
      className="flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5"
      role={mode === "single" ? "radiogroup" : "group"}
      aria-label={question}
    >
      {options.map((option, idx) => (
        <OptionRow
          key={option.id}
          ref={(el) => {
            itemRefs.current[idx] = el
          }}
          option={option}
          isSelected={selectedOptionIds.includes(option.id)}
          mode={mode}
          isTabStop={mode === "single" ? idx === tabStopIndex : undefined}
          onToggle={onToggleOption}
          onKeyNavigate={handleKeyNavigate}
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
