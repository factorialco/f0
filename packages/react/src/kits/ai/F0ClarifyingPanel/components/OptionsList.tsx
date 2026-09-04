import { motion } from "motion/react"
import { useEffect, useRef, useState, type Ref } from "react"

import { useReducedMotion } from "@/lib/a11y"

import type { ClarifyingOption, ClarifyingSelectionMode } from "../types"

import { CustomAnswerRow } from "./CustomAnswerRow"
import { OptionRow } from "./OptionRow"

// Las filas ENTRAN, así que ease-out fuerte: en 200ms lo único que se percibe
// es el arranque, y la curva estándar de Material ([0.4,0,0.2,1]) es un
// ease-in-out que lo retrasa.
const ROW_EASE: [number, number, number, number] = [0.23, 1, 0.32, 1]
const ROW_DURATION = 0.2
// Sin retardo base: los 120ms que había eran tiempo muerto con la pregunta ya
// visible y la lista en blanco. 30ms por fila mantiene la cascada sin que la
// última llegue tarde. Si el desplazamiento deja de ser 4px, el pb-1 del
// contenedor va con él.
const ROW_STAGGER = 0.03
const ROW_OFFSET_Y = 4

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
  customInputRef: Ref<HTMLTextAreaElement>
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
  const shouldReduceMotion = useReducedMotion()

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

  // Una sola definición para todas las filas: la de respuesta libre quedaba
  // fuera del escalonado y aparecía de golpe a opacidad plena justo donde la
  // cascada terminaba. Ahora es la fila `options.length`, la siguiente.
  const rowEnter = (idx: number) => ({
    initial: shouldReduceMotion
      ? (false as const)
      : { opacity: 0, y: ROW_OFFSET_Y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : ROW_DURATION,
      ease: ROW_EASE,
      delay: shouldReduceMotion ? 0 : idx * ROW_STAGGER,
    },
  })

  return (
    <div
      // pb-1 (4px) y no py-0.5: las opciones entran desplazadas 4px hacia
      // abajo, y con este contenedor en overflow-y-auto esos 4px producían
      // desbordamiento real durante ~100ms — una barra de scroll que aparecía
      // y desaparecía en cada cambio de paso. El padding-bottom cuenta dentro
      // de scrollHeight, así que absorbe el desplazamiento sin tocar la
      // animación. Si cambia el `y` del enter, este 4 va con él.
      className="flex flex-col gap-0 overflow-y-auto px-1.5 pb-1 pt-0.5"
      role={mode === "single" ? "radiogroup" : "group"}
      aria-label={question}
    >
      {options.map((option, idx) => (
        <motion.div key={option.id} {...rowEnter(idx)}>
          <OptionRow
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
        </motion.div>
      ))}

      {allowCustomAnswer && (
        <motion.div {...rowEnter(options.length)}>
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
        </motion.div>
      )}
    </div>
  )
}
