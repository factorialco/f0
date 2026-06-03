import { F0AvatarPerson, F0Button, F0Icon } from "@factorialco/f0-react"
import { Cross, Delete, DropdownOpen } from "@factorialco/f0-react/icons/app"
import { useEffect, useMemo, useRef, useState } from "react"

import { employees, findEmployee } from "@/fixtures"
import type { Participant } from "./types"

/**
 * Participants picker — inline form field rendered directly below
 * the Reimbursable amount input. PSPEC-spending-participants-split
 * (C1) but UI restyled to match the canonical "chips + dropdown
 * inside a single input-shaped field" pattern.
 *
 * Visual model:
 *
 *   Participants
 *   ┌──────────────────────────────────────────────────────────┐
 *   │  ⓐ Ada · you   ⓒ Carlos ✕   ⓛ Lin ✕   +1 externals     │  ▾
 *   └──────────────────────────────────────────────────────────┘
 *   Confirmation will be requested from participants on submit.
 *
 * - Owner is always the first chip, with a "· you" suffix and no
 *   X (locked).
 * - Internal participants are F0TagPerson-style chips with a
 *   small X button on the right.
 * - External participants appear as a compact "+N externals"
 *   chip (count-only — no identity).
 * - The "▾" affordance opens a real F0Select listbox with the
 *   remaining employees. Picking one appends them to the list and
 *   resets the dropdown. (The AiChat-loop bug was specific to
 *   `f0FormField.multiSelect`; vanilla F0Select with a real
 *   listbox is fine here.)
 *
 * External-count input is rendered as a SEPARATE field
 * underneath, mirroring ref image 3. See `ExternalCountField`.
 */
export function ParticipantsField(props: {
  ownerEmployeeId: string
  value: Participant[]
  onChange: (next: Participant[]) => void
  disabled?: boolean
  label?: string
  /**
   * Incrementing counter — when it changes, the field scrolls
   * itself into view and pulses a blue focus ring for a couple
   * of seconds. Used by the "Add participants" CTA in the empty
   * split-breakdown state so the user is redirected here.
   */
  focusPulse?: number
}) {
  const { ownerEmployeeId, value, onChange, disabled, label, focusPulse } =
    props

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [highlighted, setHighlighted] = useState(false)

  // Watch the pulse counter — on each tick, scroll into view and
  // light up the blue ring for ~1s with a smooth fade-out. We
  // skip the initial mount (focusPulse undefined or 0).
  //
  // The form lives inside a nested scroll container (Page /
  // StandardLayout / side panel) so `el.scrollIntoView` on the
  // window doesn't always do the right thing. We walk up parents
  // looking for the closest scrollable ancestor and scroll IT
  // manually so the field lands centered in the visible area.
  useEffect(() => {
    if (!focusPulse) return
    const el = containerRef.current
    if (el) {
      const findScrollParent = (node: HTMLElement | null): HTMLElement => {
        let cur = node?.parentElement
        while (cur) {
          const style = window.getComputedStyle(cur)
          const overflowY = style.overflowY
          const isScrollable =
            (overflowY === "auto" || overflowY === "scroll") &&
            cur.scrollHeight > cur.clientHeight
          if (isScrollable) return cur
          cur = cur.parentElement
        }
        return document.scrollingElement as HTMLElement
      }
      const scroller = findScrollParent(el)
      const elRect = el.getBoundingClientRect()
      const scRect =
        scroller === document.scrollingElement
          ? { top: 0, height: window.innerHeight }
          : scroller.getBoundingClientRect()
      const targetTop =
        scroller.scrollTop +
        (elRect.top - scRect.top) -
        (scRect.height - elRect.height) / 2
      scroller.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" })
    }
    setHighlighted(true)
    const t = window.setTimeout(() => setHighlighted(false), 1100)
    return () => window.clearTimeout(t)
  }, [focusPulse])

  const internal = value.filter(
    (p): p is Extract<Participant, { kind: "internal" }> =>
      p.kind === "internal"
  )

  const owner = findEmployee(ownerEmployeeId)

  // Employees still available to add (not the owner, not already
  // in the list).
  const addableInternals = useMemo(() => {
    const excluded = new Set<string>([ownerEmployeeId])
    for (const p of internal) excluded.add(p.employeeId)
    return employees.filter((e) => !excluded.has(e.id))
  }, [ownerEmployeeId, internal])

  const addInternal = (employeeId: string) => {
    if (disabled) return
    if (internal.some((p) => p.employeeId === employeeId)) return
    onChange([
      ...value,
      { kind: "internal", employeeId, confirmation: "pending" },
    ])
  }

  const removeInternal = (employeeId: string) => {
    if (disabled) return
    onChange(
      value.filter(
        (p) => !(p.kind === "internal" && p.employeeId === employeeId)
      )
    )
  }

  const dropdownOptions = useMemo(
    () =>
      addableInternals.map((e) => ({
        value: e.id,
        label: e.fullName,
      })),
    [addableInternals]
  )

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label className="text-base font-medium leading-normal text-f1-foreground-secondary">
          {label}
        </label>
      ) : null}
      {/* Field-shaped container so the chips read as the input
          value. Border, radius and padding mirror an F0Input.
          When `highlighted` (triggered by the empty-state CTA in
          SplitBreakdown), we layer a blue focus ring + smooth-
          scroll the field into view, mirroring the description
          review pattern (red there, blue here for "go fix this
          missing input"). */}
      <div
        ref={containerRef}
        className={`flex min-h-[44px] flex-wrap items-center gap-1.5 rounded-md border border-solid bg-f1-background px-2 py-1.5 transition-[box-shadow,border-color] duration-700 ease-out ${
          highlighted
            ? "border-f1-border-focus ring-2 ring-f1-border-focus/30"
            : "border-f1-border"
        } ${disabled ? "opacity-60" : ""}`}
      >
        {/* Owner — locked, no X. */}
        {owner ? (
          <ParticipantChip
            firstName={owner.preferredName ?? owner.fullName.split(" ")[0]}
            lastName={
              owner.preferredName
                ? owner.fullName.replace(`${owner.preferredName} `, "")
                : owner.fullName.split(" ").slice(1).join(" ")
            }
            src={owner.avatarUrl}
            label={`${owner.preferredName ?? owner.fullName} · you`}
          />
        ) : null}

        {/* Internal additions — removable chips. */}
        {internal.map((p) => {
          const emp = findEmployee(p.employeeId)
          if (!emp) return null
          const first = emp.preferredName ?? emp.fullName.split(" ")[0]
          const last = emp.preferredName
            ? emp.fullName.replace(`${emp.preferredName} `, "")
            : emp.fullName.split(" ").slice(1).join(" ")
          return (
            <ParticipantChip
              key={p.employeeId}
              firstName={first}
              lastName={last}
              src={emp.avatarUrl}
              label={emp.preferredName ?? emp.fullName}
              onRemove={() => removeInternal(p.employeeId)}
              disabled={disabled}
            />
          )
        })}

        {/* Externals are NOT shown as chips here — they live in
            the dedicated "Number of external participants" field
            below, since externals have no identity (count-only)
            and don't carry a confirmation flow. */}

        {/* Dropdown trigger — a compact icon-only chevron button
            that opens a transparent native <select> stacked on
            top of it. The select swallows the click and opens
            the OS dropdown of remaining employees. We avoid
            F0Select here because its outer chrome double-
            bordered against the chip container (the "weird
            frame" the user flagged). */}
        <div className="relative ml-auto flex h-8 w-8 shrink-0 items-center justify-center">
          {/* Match F0Select's Arrow exactly: F0Icon at size="lg"
              wrapping DropdownOpen, rotated 180° to point down
              (closed state). `scale-110` mirrors the medium-size
              styling F0Select applies, so this chevron matches
              the Category field's chevron above. */}
          <div
            className={`flex scale-110 items-center justify-center ${
              dropdownOptions.length === 0
                ? "text-f1-foreground-tertiary"
                : "text-f1-foreground-secondary"
            } rotate-180`}
          >
            <F0Icon icon={DropdownOpen} size="lg" />
          </div>
          <select
            aria-label="Add internal participant"
            value=""
            onChange={(e) => {
              const v = e.target.value
              if (!v || v === "__none__") return
              addInternal(v)
              // Reset so the next identical pick still fires.
              e.target.value = ""
            }}
            disabled={disabled || dropdownOptions.length === 0}
            className="absolute inset-0 size-full cursor-pointer appearance-none bg-transparent text-transparent opacity-0 disabled:cursor-not-allowed"
          >
            <option value="" disabled hidden>
              Add…
            </option>
            {dropdownOptions.length === 0 ? (
              <option value="__none__" disabled>
                All colleagues added
              </option>
            ) : (
              dropdownOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      <span className="text-[12px] leading-normal text-f1-foreground-secondary">
        Confirmation will be requested from participants on submit.
      </span>
    </div>
  )
}

/**
 * Single participant chip. Visual analog of `F0TagPerson` with an
 * optional remove button. We render `F0AvatarPerson` directly to
 * keep the X button inside the same pill (F0TagPerson itself
 * doesn't expose a remove slot).
 */
function ParticipantChip(props: {
  firstName: string
  lastName: string
  src?: string
  label: string
  onRemove?: () => void
  disabled?: boolean
}) {
  const { firstName, lastName, src, label, onRemove, disabled } = props
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-f1-background-secondary py-0.5 pl-0.5 pr-2 text-[14px] leading-normal text-f1-foreground">
      <F0AvatarPerson
        firstName={firstName}
        lastName={lastName}
        src={src}
        size="xs"
      />
      <span className="leading-none">{label}</span>
      {onRemove ? (
        <button
          type="button"
          className="flex size-4 items-center justify-center rounded-full text-f1-foreground-secondary hover:bg-f1-background-tertiary"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          disabled={disabled}
        >
          <Cross className="size-3" />
        </button>
      ) : null}
    </span>
  )
}

/**
 * External-count input — separate field rendered BELOW the
 * participants chip field, matching ref image 3.
 *
 *   Number of external participants
 *   ┌──────────────────────────┐ ┌──┐
 *   │ e.g. 5                   │ │🗑 │
 *   └──────────────────────────┘ └──┘
 */
export const MAX_EXTERNAL_COUNT = 50

export function ExternalCountField(props: {
  value: Participant[]
  onChange: (next: Participant[]) => void
  disabled?: boolean
  label?: string
}) {
  const { value, onChange, disabled, label } = props
  const externalCount = value.filter((p) => p.kind === "external").length

  const setExternalCount = (next: number) => {
    if (disabled) return
    const clamped = Math.max(0, Math.min(MAX_EXTERNAL_COUNT, next))
    const without = value.filter((p) => p.kind !== "external")
    const extras: Participant[] = Array.from(
      { length: clamped },
      (_, i) => ({ kind: "external", id: `ext-local-${i + 1}` })
    )
    onChange([...without, ...extras])
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label className="text-base font-medium leading-normal text-f1-foreground-secondary">
          {label}
        </label>
      ) : null}
      <div className="flex items-center gap-2">
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={MAX_EXTERNAL_COUNT}
        value={externalCount === 0 ? "" : externalCount}
        placeholder="e.g. 5"
        disabled={disabled}
        onChange={(e) => {
          const raw = e.target.value.trim()
          if (raw === "") {
            setExternalCount(0)
            return
          }
          const parsed = Number.parseInt(raw, 10)
          if (Number.isFinite(parsed)) setExternalCount(parsed)
        }}
        className="h-10 flex-1 rounded-md border border-solid border-f1-border bg-f1-background px-3 text-[14px] leading-normal text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
      />
      <F0Button
        variant="outline"
        size="md"
        icon={Delete}
        label="Clear external count"
        hideLabel
        onClick={() => setExternalCount(0)}
        disabled={disabled || externalCount === 0}
      />
      </div>
    </div>
  )
}
