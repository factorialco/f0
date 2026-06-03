import { F0Box, F0Button } from "@factorialco/f0-react"

import type { FieldRequirement } from "./fields"

/**
 * Required / Optional segmented control (AC-005 — adapted).
 *
 * Spec originally pointed to F0 Tabs `secondary`, but Tabs is a
 * navigation pattern: it renders with `px-6 py-3` + a grey track and
 * dictates a row height of ~64-72px that breaks the table rhythm
 * (every locked "Always shown" / plain "Required" row would have to
 * grow to match).
 *
 * The closest canonical pattern in Factorial for an inline pill-style
 * choice is `Preset` (used by OneDataCollection's filter presets and
 * the visualization picker). `Preset` is `@/ui/OnePreset`, NOT
 * re-exported from `@factorialco/f0-react`, so we can't use it
 * directly. We reproduce the same look using two F0Buttons:
 *
 *  - selected   → `variant="outline"` (subtle border, no fill, bold text)
 *  - unselected → `variant="ghost"`   (no border, muted)
 *
 * Both at `size="sm"` so the control is the same compact height as
 * a plain text cell — locked + editable rows align.
 *
 * This is a BR-010 composition: only existing F0 primitives, no new
 * components introduced.
 */
export function RequirementToggle(props: {
  value: FieldRequirement
  onChange: (value: FieldRequirement) => void
  disabled?: boolean
}) {
  // Disabled state recipe:
  //   1. `disabled` on each F0Button \u2014 makes them non-interactive
  //      (`pointer-events-none` + aria) and renders the natural
  //      disabled cursor on the button itself.
  //   2. `withoutDisabledAppearance` \u2014 cancels F0Button's built-in
  //      `disabled:opacity-30` rule and pins the button to opacity
  //      1.0. Without this step the wrapper opacity below would
  //      multiply 0.3 \u00d7 0.9 = 0.27 (basically invisible).
  //   3. Wrapper `opacity: 0.9` \u2014 dims the *whole* group uniformly
  //      from full strength down to 90% so it still reads as a
  //      "muted, can't touch this" control vs an enabled toggle.
  const inner = (
    <F0Box display="flex" flexDirection="row" alignItems="center" gap="xs">
      <F0Button
        label="Required"
        size="sm"
        variant={props.value === "required" ? "outline" : "ghost"}
        onClick={() => props.onChange("required")}
        disabled={props.disabled}
        withoutDisabledAppearance={props.disabled}
      />
      <F0Button
        label="Optional"
        size="sm"
        variant={props.value === "optional" ? "outline" : "ghost"}
        onClick={() => props.onChange("optional")}
        disabled={props.disabled}
        withoutDisabledAppearance={props.disabled}
      />
    </F0Box>
  )
  if (props.disabled) {
    return <div style={{ opacity: 0.65 }}>{inner}</div>
  }
  return inner
}
