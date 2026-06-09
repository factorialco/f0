import { F0Box, F0Text } from "@factorialco/f0-react"
import { ToggleGroup, ToggleGroupItem } from "@factorialco/f0-react/dist/experimental"

type Option = { value: string; label: string }

/**
 * Single-choice selector built on ToggleGroup instead of F0Select.
 *
 * F0Select's dropdown enters a "Maximum update depth exceeded" loop on open in
 * this environment (pre-existing F0 issue; no other composer prototype uses
 * F0Select). For the short option lists here (2–3 items) an inline ToggleGroup
 * is both robust and better UX.
 */
export function OptionToggle({
  label,
  hint,
  value,
  options,
  onChange,
  disabled,
}: {
  label?: string
  hint?: string
  value: string
  options: Option[]
  onChange: (value: string) => void
  disabled?: boolean
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xs">
      {label && <F0Text variant="label" content={label} />}
      <ToggleGroup
        type="single"
        disabled={disabled}
        value={value}
        onValueChange={(next: string) => {
          // ToggleGroup emits "" when the active item is toggled off; keep the
          // current value in that case (single-choice must always have one).
          if (next && next !== value) onChange(next)
        }}
      >
        {options.map((o) => (
          <ToggleGroupItem key={o.value} value={o.value} aria-label={o.label}>
            {o.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {hint && <F0Text variant="small" content={hint} />}
    </F0Box>
  )
}
