import { F0Box, F0Button } from "@factorialco/f0-react"
import { useEffect, useState } from "react"

/**
 * Inline editors that match `InlineValue`'s visual contract but
 * cover non-numeric data shapes:
 *
 *   - `InlineSelect<T>`  \u2014 closed set: resting pill, click
 *     expands to a row of F0Button-ghost chips (one per option),
 *     pick commits and collapses.
 *   - `InlineToggle`     \u2014 boolean: resting pill, click
 *     flips, no expanded state.
 *
 * Both reuse F0Button so the visual rhythm across cards stays
 * consistent with `InlineValue`'s editing UI (suggestion chips).
 * No hand-rolled CSS, no Tailwind arbitrary values.
 */

/* ============================================================
 * InlineSelect
 * ============================================================ */

export type InlineSelectOption<T extends string> = {
  value: T
  /** Short label rendered both in the resting pill and as the
   * chip when expanded. Keep these terse \u2014 they sit inside
   * a settings-row sentence. */
  label: string
}

export type InlineSelectProps<T extends string> = {
  value: T
  options: InlineSelectOption<T>[]
  onChange: (next: T) => void
  ariaLabel: string
}

export function InlineSelect<T extends string>(props: InlineSelectProps<T>) {
  const [editing, setEditing] = useState(false)

  // If the value changes externally (e.g., agent committed),
  // collapse the editor.
  useEffect(() => {
    setEditing(false)
  }, [props.value])

  const current =
    props.options.find((o) => o.value === props.value)?.label ?? props.value

  if (!editing) {
    return (
      <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
        <F0Button
          variant="neutral"
          size="sm"
          label={current}
          aria-label={props.ariaLabel}
          onClick={() => setEditing(true)}
        />
      </span>
    )
  }

  // Expanded: chip row. Same primitive as `InlineValue`'s
  // suggestion chips, so the editor language is uniform.
  return (
    <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
      <F0Box display="flex" flexDirection="row" flexWrap="wrap" gap="xs">
        {props.options.map((o) => (
          <F0Button
            key={o.value}
            variant={o.value === props.value ? "default" : "ghost"}
            size="sm"
            label={o.label}
            onClick={() => {
              props.onChange(o.value)
              setEditing(false)
            }}
          />
        ))}
      </F0Box>
    </span>
  )
}

/* ============================================================
 * InlineToggle
 * ============================================================ */

export type InlineToggleProps = {
  value: boolean
  onChange: (next: boolean) => void
  onLabel: string
  offLabel: string
  ariaLabel: string
}

export function InlineToggle(props: InlineToggleProps) {
  return (
    <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
      <F0Button
        variant="neutral"
        size="sm"
        label={props.value ? props.onLabel : props.offLabel}
        aria-label={props.ariaLabel}
        aria-pressed={props.value}
        onClick={() => props.onChange(!props.value)}
      />
    </span>
  )
}
