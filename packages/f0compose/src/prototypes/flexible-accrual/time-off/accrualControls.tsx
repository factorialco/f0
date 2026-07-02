import { F0Dialog, F0Heading, F0Icon } from "@factorialco/f0-react"
import {
  ArrowUp,
  ChevronDown,
  InfoCircle,
  Paperclip,
  Reset,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import type { IconType } from "@factorialco/f0-react"
import { useState } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// Shared form controls for the Accrual Rules modals (Image 2 row style).
// Bare elements styled exclusively with f1-* tokens — no raw colours.
// ─────────────────────────────────────────────────────────────────────────────

/** A rounded, light-bordered configuration row. Label/help left, control right. */
export function ConfigRow({
  label,
  help,
  tooltip,
  control,
  stack,
}: {
  label: string
  help?: string
  tooltip?: string
  control: React.ReactNode
  /** Stack the control under the label (for radios / wide controls). */
  stack?: boolean
}) {
  return (
    <div
      className={`flex gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4 ${
        stack ? "flex-col" : "flex-col sm:flex-row sm:items-center sm:justify-between"
      }`}
    >
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-f1-foreground">
          {label}
          {tooltip ? (
            <span
              title={tooltip}
              className="inline-flex cursor-help text-f1-foreground-secondary"
              aria-label={tooltip}
            >
              <F0Icon icon={InfoCircle} size="xs" />
            </span>
          ) : null}
        </span>
        {help ? (
          <span className="text-xs text-f1-foreground-secondary">{help}</span>
        ) : null}
      </div>
      <div className={stack ? "" : "shrink-0"}>{control}</div>
    </div>
  )
}

/** Segmented control — single select across a small set of options. */
export function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T
  onChange: (value: T) => void
  options: { value: T; label: string }[]
}) {
  return (
    <div className="inline-flex rounded-lg bg-f1-background-secondary p-1">
      {options.map((o) => {
        const active = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "bg-f1-background text-f1-foreground shadow-sm"
                : "text-f1-foreground-secondary hover:text-f1-foreground"
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

/** Styled select that mirrors the Basic Information field selects. */
export function RuleSelect<T extends string>({
  value,
  onChange,
  options,
  width = "w-64",
}: {
  value: T
  onChange: (value: T) => void
  options: { value: T; label: string }[]
  width?: string
}) {
  return (
    <div className={`relative ${width}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="h-10 w-full appearance-none rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-12 text-sm text-f1-foreground focus:border-f1-border-hover focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-f1-background-secondary text-f1-foreground-secondary">
        <F0Icon icon={ChevronDown} size="xs" />
      </span>
    </div>
  )
}

/** Number input with an optional trailing unit label. */
export function NumberInput({
  value,
  onChange,
  unit,
  min = 0,
}: {
  value: number
  onChange: (value: number) => void
  unit?: string
  min?: number
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <input
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-10 w-24 rounded-md border border-solid border-f1-border bg-f1-background px-3 text-sm text-f1-foreground focus:border-f1-border-hover focus:outline-none"
      />
      {unit ? (
        <span className="text-sm text-f1-foreground-secondary">{unit}</span>
      ) : null}
    </div>
  )
}

/** A vertical group of selectable radio rows. */
export function RadioGroup<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T
  onChange: (value: T) => void
  options: { value: T; label: string; help?: string }[]
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((o) => {
        const active = o.value === value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`flex items-start gap-3 rounded-lg border border-solid p-3 text-left transition-colors ${
              active
                ? "border-f1-border-selected-bold bg-f1-background-selected-secondary"
                : "border-f1-border-secondary bg-f1-background hover:border-f1-border-hover"
            }`}
          >
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-solid ${
                active ? "border-f1-foreground-accent" : "border-f1-border"
              }`}
            >
              {active ? (
                <span className="h-2 w-2 rounded-full bg-f1-foreground-accent" />
              ) : null}
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-f1-foreground">
                {o.label}
              </span>
              {o.help ? (
                <span className="text-xs text-f1-foreground-secondary">
                  {o.help}
                </span>
              ) : null}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/** On/off toggle switch. */
export function ToggleSwitch({
  on,
  onChange,
}: {
  on: boolean
  onChange: (on: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        on ? "bg-f1-background-accent-bold" : "bg-f1-border-secondary"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-f1-background transition-transform ${
          on ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// AI assist input + quick-action chips (Image 2 bottom block)
// ─────────────────────────────────────────────────────────────────────────────

export type QuickAction = { label: string; onClick: () => void }

export function AiAssist({ chips }: { chips: QuickAction[] }) {
  const [text, setText] = useState("")
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-secondary px-3 py-2">
        <F0Icon icon={Sparkles} size="sm" />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tell us what to change…"
          className="h-8 flex-1 bg-transparent text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:outline-none"
        />
        <button
          type="button"
          aria-label="Attach a file"
          className="flex h-8 w-8 items-center justify-center rounded-md text-f1-foreground-secondary hover:bg-f1-background-hover"
        >
          <F0Icon icon={Paperclip} size="sm" />
        </button>
        <button
          type="button"
          aria-label="Send"
          disabled={text.trim() === ""}
          onClick={() => setText("")}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-f1-background-accent-bold text-f1-foreground-inverse disabled:opacity-40"
        >
          <F0Icon icon={ArrowUp} size="sm" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c.label}
            type="button"
            onClick={c.onClick}
            className="inline-flex items-center gap-1.5 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-3 py-1 text-xs font-medium text-f1-foreground transition-colors hover:border-f1-border-hover hover:bg-f1-background-hover"
          >
            <F0Icon icon={Sparkles} size="xs" />
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// RuleModal — reused shell for all four rule modals (Image 2 layout)
// ─────────────────────────────────────────────────────────────────────────────

export function RuleModal({
  open,
  icon,
  title,
  chips,
  onReset,
  onCancel,
  onSave,
  children,
}: {
  open: boolean
  icon: IconType
  title: string
  chips: QuickAction[]
  onReset: () => void
  onCancel: () => void
  onSave: () => void
  children: React.ReactNode
}) {
  return (
    <F0Dialog
      isOpen={open}
      onClose={onCancel}
      position="center"
      width="lg"
      disableContentPadding
      primaryAction={{ label: "Save", onClick: onSave }}
      secondaryAction={{ label: "Cancel", onClick: onCancel }}
    >
      <div className="flex flex-col gap-5 px-5 py-4">
        {/* Header — teal rounded icon + the question being configured */}
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-f1-background-accent text-f1-foreground-accent">
            <F0Icon icon={icon} size="md" />
          </span>
          <F0Heading content={title} variant="heading" as="h3" />
        </div>

        {/* Body — per-rule config rows */}
        <div className="flex flex-col gap-3">{children}</div>

        {/* AI assist */}
        <AiAssist chips={chips} />

        {/* Reset (left-aligned, footer Save/Cancel come from F0Dialog) */}
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-f1-foreground-secondary hover:text-f1-foreground"
        >
          <F0Icon icon={Reset} size="xs" />
          Reset
        </button>
      </div>
    </F0Dialog>
  )
}
