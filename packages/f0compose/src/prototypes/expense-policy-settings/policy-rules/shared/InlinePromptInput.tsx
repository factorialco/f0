import { useEffect, useRef } from "react"

/**
 * `InlinePromptInput` — the dark, gradient-bordered "ask One" field
 * that pops out when you click an inline value to edit it.
 *
 * Recreated from the design SVG (`inline.svg`):
 *   - Dark rounded container (#151D2D), 12px radius.
 *   - A 1px gradient BORDER running blue → red → orange
 *     (#A1ADE5 → rgba(229,25,67,.7) → rgba(229,86,25,.7)), plus a
 *     soft blurred glow of the same gradient behind it.
 *   - Light placeholder / value text.
 *   - A red circular send button (#C01538) with a white up-arrow on
 *     the right; clicking it (or pressing Enter) commits.
 *
 * IMPORTANT (repo lesson): f0compose ships f0-react's PRE-COMPILED
 * stylesheet — there is no Tailwind JIT at the prototype layer, so
 * arbitrary classes like `bg-[#151D2D]` compile to nothing. Every
 * custom colour / gradient here is therefore an inline `style`, which
 * always applies. (See InlineValue.tsx header for the same rule.)
 *
 * The gradient border uses the standard double-background trick:
 * a padding-box fill of the dark colour layered over a border-box
 * fill of the gradient, so the gradient only shows in the 1px ring.
 */

const DARK = "#151D2D"
const SEND_RED = "#C01538"
const BORDER_GRADIENT =
  "linear-gradient(90deg, #A1ADE5 0%, rgba(229,25,67,0.7) 50%, rgba(229,86,25,0.7) 100%)"

export type InlinePromptInputProps = {
  value: string
  onChange: (next: string) => void
  onCommit: () => void
  onCancel: () => void
  ariaLabel: string
  placeholder?: string
}

export function InlinePromptInput(props: InlinePromptInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
  }, [])

  return (
    <span
      style={{
        display: "inline-flex",
        verticalAlign: "middle",
        // The soft outer glow from the SVG (blurred gradient behind
        // the field). A subtle drop shadow tinted toward the border
        // gradient's midpoint reads the same at this scale.
        filter: "drop-shadow(0 1px 6px rgba(229,25,67,0.25))",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          minWidth: "16rem",
          height: 40,
          paddingLeft: 14,
          paddingRight: 5,
          borderRadius: 12,
          border: "1px solid transparent",
          // padding-box = dark fill; border-box = gradient ring.
          background: `linear-gradient(${DARK}, ${DARK}) padding-box, ${BORDER_GRADIENT} border-box`,
        }}
      >
        <input
          ref={inputRef}
          aria-label={props.ariaLabel}
          value={props.value}
          placeholder={props.placeholder ?? "Type your own answer…"}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              props.onCommit()
            } else if (e.key === "Escape") {
              e.preventDefault()
              props.onCancel()
            }
          }}
          onBlur={() => props.onCommit()}
          style={{
            flex: 1,
            minWidth: 0,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "rgba(255,255,255,0.95)",
            fontSize: 14,
            lineHeight: "20px",
          }}
        />
        <button
          type="button"
          aria-label="Apply"
          // preventDefault on mousedown keeps the input focused so its
          // onBlur doesn't fire and unmount us before this click lands.
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => props.onCommit()}
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: 999,
            border: "none",
            background: SEND_RED,
            cursor: "pointer",
            boxShadow:
              "0 2px 6px rgba(13,22,37,0.08), inset 0 1px 0 rgba(255,255,255,0.25)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 19V6M6.5 11.5 12 6l5.5 5.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </span>
  )
}
