import { F0Button } from "@factorialco/f0-react"
import { useId } from "react"

import type { SectionState } from "./types"

/**
 * Segmented 3-button control for per-section admin state:
 * [Hidden | Optional | Required].
 *
 * F0ButtonToggleGroup isn't a public export of @factorialco/f0-react,
 * so we compose F0Button (outline / solid variant flip) into a small
 * segmented group ourselves. The visual reads as a single pill with
 * three segments thanks to gap=0 + matching button heights.
 *
 * Disabled states: any state can be disabled individually via
 * `disabledStates`. Useful for locked sections (e.g. Expense
 * information always required \u2014 admin can't choose Hidden or
 * Optional). v1 of the preview doesn't ship locks yet; the prop is
 * here so the wiring is ready when section-level locks land.
 */
export function SectionAdminRow(props: {
  state: SectionState
  onChange: (next: SectionState) => void
  disabledStates?: SectionState[]
  /**
   * States to omit from the segmented control entirely. Used when
   * a section contains a locked field that forbids that state
   * outright \u2014 e.g. a section with any locked field cannot be
   * Hidden, so `hiddenStates=["hidden"]` removes that button so the
   * admin isn't shown an unreachable option.
   */
  hiddenStates?: SectionState[]
}) {
  const {
    state,
    onChange,
    disabledStates = [],
    hiddenStates = [],
  } = props
  const labelId = useId()

  const ALL_ITEMS: ReadonlyArray<{ value: SectionState; label: string }> = [
    { value: "hidden", label: "Hidden" },
    { value: "optional", label: "Optional" },
    { value: "required", label: "Required" },
  ]
  const items = ALL_ITEMS.filter(
    (item) => !hiddenStates.includes(item.value)
  )

  return (
    <div
      className="flex items-center gap-2"
      role="radiogroup"
      aria-labelledby={labelId}
    >
      <span
        id={labelId}
        className="text-f1-foreground-secondary text-sm"
      >
        Section:
      </span>
      <div className="flex items-center gap-1">
        {items.map((item) => {
          const selected = item.value === state
          const disabled = disabledStates.includes(item.value)
          return (
            <F0Button
              key={item.value}
              label={item.label}
              variant={selected ? "default" : "outline"}
              size="sm"
              disabled={disabled}
              onClick={() => onChange(item.value)}
            />
          )
        })}
      </div>
    </div>
  )
}
