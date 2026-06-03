import { F0Box, F0Button } from "@factorialco/f0-react"
import type React from "react"
import { useEffect, useState } from "react"

import { InlinePromptInput } from "./InlinePromptInput"

/**
 * `InlineProse*` \u2014 the prose-friendly siblings of
 * `InlineValue` / `InlineSelect`.
 *
 * Same editor semantics, different at-rest skin:
 *
 *   InlineValue / InlineSelect (pill skin)
 *     resting  \u2192 F0Button neutral pill
 *     editing  \u2192 inline F0 Input or chip row
 *
 *   InlineProseValue / InlineProseSelect (prose skin)  \u2190 here
 *     resting  \u2192 a `<span>` with a dotted underline,
 *                  reading as a soft-edit affordance inside a
 *                  natural-language sentence (the Figma pattern).
 *     editing  \u2192 same inline F0 Input / chip row as the pill
 *                  variants \u2014 we share the editor surface so
 *                  the page only has ONE editor language.
 *
 * Why a separate component (rather than a prop on InlineValue):
 *   - The at-rest rendering swaps from F0Button to a plain
 *     <span>. That's a different a11y surface (button vs.
 *     interactive-span) and a different focus story. Keeping
 *     them as separate components makes each one's a11y
 *     contract honest.
 *   - Avoids an `appearance` boolean that flips half the file.
 *
 * Tailwind classes used: `underline decoration-dotted
 * underline-offset-4 hover:decoration-solid cursor-pointer
 * font-medium`. All shipped in f0-react's pre-compiled
 * stylesheet (verified via DESIGN.md \u00a7 "Tailwind utilities
 * available at the prototype layer").
 */

/* ============================================================
 * Format helpers \u2014 mirrored from InlineValue.tsx so we don't
 * cross-import a sibling. If they ever diverge we'll lift them
 * into ./formatters.ts.
 * ============================================================ */

export type InlineProseFormat =
  | "currency"
  | "number"
  | "percent"
  | "duration-days"
  | "text"

function formatValue(value: number | string, format: InlineProseFormat): string {
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
  format: InlineProseFormat
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

/* ============================================================
 * Resting-state span \u2014 the dotted-underline affordance.
 * ============================================================ */

/**
 * Visual styling for the at-rest editable span. Two variants:
 *
 *   - `default` (small inline text inside a sentence)
 *   - `headline` (big number inside a mini cap-card; reads as
 *     a heading, still dotted-underlined to mark editability)
 *
 * Both use the same class chain; `headline` adds the heading
 * type styles.
 */
type ProseSize = "default" | "headline"

function ProseSpan(props: {
  size: ProseSize
  ariaLabel: string
  onClick: () => void
  children: React.ReactNode
}) {
  // We can't express `decoration-dotted` via a Tailwind class
  // because f0compose ships only f0-react's pre-compiled
  // stylesheet, which does NOT include the dotted decoration
  // utility. We DO get `underline` + `underline-offset-4` from
  // the compiled set. The dotted style itself comes via an
  // inline `style` \u2014 the single CSS property we can't
  // express through classes. This is the same escape-hatch
  // pattern used in InlineValue (`verticalAlign` / `minWidth`).
  const base =
    "underline underline-offset-4 cursor-pointer font-medium hover:text-f1-foreground"
  const headline = "text-lg font-semibold text-f1-foreground"
  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={props.ariaLabel}
      onClick={props.onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          props.onClick()
        }
      }}
      className={props.size === "headline" ? `${base} ${headline}` : base}
      style={{ textDecorationStyle: "dotted" }}
    >
      {props.children}
    </span>
  )
}

/* ============================================================
 * InlineProseValue
 * ============================================================ */

export type InlineProseValueProps = {
  value: number | string
  onChange: (next: number | string) => void
  format?: InlineProseFormat
  ariaLabel: string
  /** Visual size of the at-rest span. `headline` for cap cards. */
  size?: ProseSize
  /** Suggestion chips rendered below the editor while active. */
  suggestions?: string[]
}

export function InlineProseValue(props: InlineProseValueProps) {
  const format = props.format ?? "text"
  const size = props.size ?? "default"
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(formatValue(props.value, format))

  useEffect(() => {
    if (!editing) setDraft(formatValue(props.value, format))
  }, [props.value, format, editing])

  const commit = (raw: string) => {
    const parsed = parseValue(raw, format)
    if (parsed === null) {
      setDraft(formatValue(props.value, format))
      setEditing(false)
      return
    }
    props.onChange(parsed)
    setEditing(false)
  }

  if (!editing) {
    return (
      <ProseSpan
        size={size}
        ariaLabel={props.ariaLabel}
        onClick={() => {
          setDraft(formatValue(props.value, format))
          setEditing(true)
        }}
      >
        {formatValue(props.value, format)}
      </ProseSpan>
    )
  }

  return (
    <span
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
              // onBlur (→ commit current draft → unmount) doesn't fire
              // before this chip's click lands. Without it, picking a
              // suggestion just re-commits the old value.
              <span key={s} onMouseDown={(e) => e.preventDefault()}>
                <F0Button
                  variant="ghost"
                  size="sm"
                  label={s}
                  onClick={() => commit(s)}
                />
              </span>
            ))}
          </F0Box>
        )}
      </F0Box>
    </span>
  )
}

/* ============================================================
 * InlineProseSelect
 * ============================================================ */

export type InlineProseSelectOption<T extends string> = {
  value: T
  label: string
}

export type InlineProseSelectProps<T extends string> = {
  value: T
  options: InlineProseSelectOption<T>[]
  onChange: (next: T) => void
  ariaLabel: string
}

export function InlineProseSelect<T extends string>(
  props: InlineProseSelectProps<T>
) {
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setEditing(false)
  }, [props.value])

  const current =
    props.options.find((o) => o.value === props.value)?.label ?? props.value

  if (!editing) {
    return (
      <ProseSpan
        size="default"
        ariaLabel={props.ariaLabel}
        onClick={() => setEditing(true)}
      >
        {current}
      </ProseSpan>
    )
  }

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
