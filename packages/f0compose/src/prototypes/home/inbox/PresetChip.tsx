import { Counter } from "@factorialco/f0-react/dist/experimental"

/**
 * f0's own `Preset` (packages/react/src/ui/OnePreset) is the component the
 * filter bars use — label plus a `Counter` — but it is not exported from
 * the package entrypoint, so the Inbox cannot import it. This is its
 * markup verbatim, with f0's exported `Counter` inside, so the Inbox kinds
 * read as presets rather than as chips (Angel, 2026-09-15).
 *
 * Delete this file if f0 ever exports `Preset`.
 */
export function PresetChip({
  label,
  number,
  selected,
  onClick,
}: {
  label: string
  number?: number
  selected?: boolean
  onClick?: () => void
}) {
  const classes = [
    "flex cursor-pointer appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all",
    "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2",
    "hover:outline-f1-border-hover",
    number !== undefined ? "pr-1.5" : "",
    selected
      ? "bg-f1-background-selected-secondary text-f1-foreground-selected outline-f1-border-selected hover:outline-f1-border-selected"
      : "",
  ]
  return (
    <label className={classes.join(" ")}>
      <input
        type="checkbox"
        className="sr-only"
        checked={!!selected}
        onChange={() => onClick?.()}
      />
      <span className="whitespace-nowrap">{label}</span>
      {number !== undefined && (
        <Counter value={number} type={selected ? "selected" : "default"} />
      )}
    </label>
  )
}
