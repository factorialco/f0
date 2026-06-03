import { F0Box, F0Button, F0Text } from "@factorialco/f0-react"
import { useEffect, useRef, useState } from "react"

import { InlinePromptInput } from "./InlinePromptInput"

/**
 * Inline value editor that ACTUALLY works in f0compose.
 *
 * Earlier iteration used a hand-rolled absolute-positioned popover
 * with dozens of arbitrary Tailwind utilities (`bg-[#1a1d1f]`,
 * `min-w-[20rem]`, `ring-1`, `position: absolute`, etc.). f0compose
 * ships f0-react's PRE-COMPILED stylesheet \u2014 there is no
 * Tailwind JIT at the prototype layer \u2014 so every one of those
 * classes compiled to nothing and the popover rendered as a
 * vertical strip of plain text in document flow. Lesson learned.
 *
 * The working pattern (precedent: `RatesView.tsx` rename-in-place)
 * is:
 *
 *   click value \u2192 swap to F0 `Input` sized to fit \u2192
 *   `onPressEnter` / `onBlur` commits \u2192 swap back
 *
 * Suggestion chips render alongside the input as a row of F0
 * `ghost` buttons \u2014 same component the rates modal uses for
 * its currency / scope chips, so visual treatment is consistent
 * with the rest of the prototype.
 *
 * Visual states:
 *   resting  \u2192 value rendered as a clickable F0 Button with
 *              `variant="neutral"` and `size="sm"` so it reads
 *              as an editable pill (NOT raw underlined text).
 *   editing  \u2192 inline F0 Input + a chip row below.
 *
 * Format-aware: the resting label formats numbers per `format`
 * (\u20ac25 / 25% / 25 days). Input parses inverse on commit.
 */

/* ============================================================
 * Types
 * ============================================================ */

export type InlineValueFormat =
  | "currency"
  | "number"
  | "percent"
  | "duration-days"
  | "text"

export type InlineValueProps = {
  value: number | string
  onChange: (next: number | string) => void
  /** Suggestion chips (formatted strings: "\u20ac25", "20%"\u2026). */
  suggestions?: string[]
  format?: InlineValueFormat
  /** aria-label / accessible name for the value pill. */
  ariaLabel: string
}

/* ============================================================
 * Component
 * ============================================================ */

export function InlineValue(props: InlineValueProps) {
  const format = props.format ?? "text"
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(formatValue(props.value, format))
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  // Re-sync draft when the upstream value changes while we're not
  // editing (e.g., the agent committed a new value). Matches the
  // pattern used in `RatesView`'s RateRow.
  useEffect(() => {
    if (!editing) setDraft(formatValue(props.value, format))
  }, [props.value, format, editing])

  const commit = (raw: string) => {
    const parsed = parseValue(raw, format)
    if (parsed === null) {
      // Reject \u2014 reset draft to the current value and exit.
      setDraft(formatValue(props.value, format))
      setEditing(false)
      return
    }
    props.onChange(parsed)
    setEditing(false)
  }

  if (!editing) {
    // Plain <span> with inline style for the inline-flex
    // alignment \u2014 F0Box doesn't expose `verticalAlign`. The
    // visible chrome (the pill itself) is F0Button.
    return (
      <span style={{ display: "inline-flex", verticalAlign: "middle" }}>
        <F0Button
          ref={triggerRef}
          variant="neutral"
          size="sm"
          label={formatValue(props.value, format)}
          aria-label={props.ariaLabel}
          onClick={() => {
            setDraft(formatValue(props.value, format))
            setEditing(true)
          }}
        />
      </span>
    )
  }

  // Editing state. We render the input + chip row in a small
  // vertical stack so the suggestions don't fight the input for
  // width. The whole stack sits as an inline block in the row,
  // pushing the row's other content slightly down only while
  // editing \u2014 acceptable trade-off for the simplicity gain
  // over a floating popover. A floating layer is impossible
  // without Radix in the allowlist (see file header for context).
  //
  // The outer wrapper is a plain <div> with an inline `style`
  // because F0Box's prop API doesn't expose a `style` escape and
  // we need exactly two CSS properties (verticalAlign +
  // minWidth) that aren't expressible via the token set. Single
  // confined escape; the visible chrome inside is all F0
  // components.
  return (
    <div
      style={{
        display: "inline-flex",
        verticalAlign: "middle",
        minWidth: "16rem",
      }}
    >
      <F0Box display="flex" flexDirection="column" gap="xs" width="full">
        <InlinePromptInput
          ariaLabel={props.ariaLabel}
          value={draft}
          onChange={setDraft}
          onCommit={() => commit(draft)}
          onCancel={() => {
            setDraft(formatValue(props.value, format))
            setEditing(false)
          }}
        />
        {props.suggestions && props.suggestions.length > 0 && (
          <F0Box display="flex" flexDirection="row" flexWrap="wrap" gap="xs">
            {props.suggestions.map((s) => (
              // preventDefault on mousedown keeps the input focused so its
              // onBlur (\u2192 commit current draft \u2192 unmount) doesn't fire
              // before this chip's click lands. Without it, picking a
              // suggestion just re-commits the old value.
              <span key={s} onMouseDown={(e) => e.preventDefault()}>
                <F0Button
                  variant="ghost"
                  size="sm"
                  label={s}
                  onClick={() => {
                    // Commit immediately on chip pick. We pass the
                    // raw chip label \u2014 `commit` parses it.
                    commit(s)
                  }}
                />
              </span>
            ))}
          </F0Box>
        )}
      </F0Box>
    </div>
  )
}

/* ============================================================
 * Inline read-only label \u2014 for rows that aren't editable
 * but want consistent typography with InlineValue. Currently
 * unused but exported so cards can mix editable + read-only
 * fields without restyling.
 * ============================================================ */

export function InlineReadOnly(props: { text: string }) {
  return <F0Text content={props.text} variant="body" />
}

/* ============================================================
 * Format helpers (kept local to this primitive)
 * ============================================================ */

function formatValue(value: number | string, format: InlineValueFormat): string {
  if (format === "text") return String(value)
  if (typeof value !== "number") return String(value)
  switch (format) {
    case "currency":
      return `\u20ac${value}`
    case "percent":
      return `${value}%`
    case "duration-days":
      return value === 1 ? "1 day" : `${value} days`
    case "number":
      return String(value)
  }
}

function parseValue(
  raw: string,
  format: InlineValueFormat
): number | string | null {
  const trimmed = raw.trim()
  if (trimmed === "") return null
  if (format === "text") return trimmed

  const cleaned = trimmed
    .replace(/^\u20ac/, "")
    .replace(/%$/, "")
    .replace(/\s*days?$/i, "")
    .trim()

  const num = Number(cleaned)
  if (Number.isNaN(num)) return null
  if (format === "percent" && (num < 0 || num > 100)) return null
  if (num < 0) return null
  return num
}
