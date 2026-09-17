import {
  forwardRef,
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { F0Icon } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Check, InfoCircleLine, LayersFront } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import type { InlineFieldRowProps, RowAction } from "./types"

/** How long the copy confirmation holds, matching the prototype. */
const COPIED_MS = 1400

/**
 * Hidden but kept in the DOM and focusable, so Tab reaches the actions — and
 * reaching them is what reveals them. Without a hover to reveal with, they are
 * shown outright; otherwise a touch screen could never reach them.
 */
const REVEAL_CLASS = cn(
  "pointer-events-none opacity-0 transition-opacity motion-reduce:transition-none",
  "group-hover:pointer-events-auto group-hover:opacity-100",
  "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
  "[@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"
)

const ActionButton = ({ action }: { action: RowAction }) => (
  <button
    type="button"
    onClick={action.onClick}
    aria-label={action.label}
    title={action.label}
    aria-live={action.positive ? "polite" : undefined}
    className={cn(
      "flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 transition-colors",
      action.positive
        ? "text-f1-icon-positive"
        : "text-f1-icon-bold hover:bg-f1-background-secondary-hover",
      focusRing()
    )}
  >
    <F0Icon icon={action.icon} size="sm" />
  </button>
)

/**
 * The ⓘ beside the label. `InfoHint`'s string path is a focusable `div` with no
 * accessible name, so a reader that never sees the tooltip gets nothing; here
 * the hint copy names the trigger itself.
 */
const Hint = ({ hint }: { hint: string }) => (
  <Tooltip label={hint}>
    <button
      type="button"
      aria-label={hint}
      className={cn(
        "flex h-5 w-5 shrink-0 cursor-default items-center justify-center rounded-xs border-0 bg-transparent p-0 text-f1-foreground-secondary",
        focusRing()
      )}
    >
      <F0Icon icon={InfoCircleLine} size="sm" />
    </button>
  </Tooltip>
)

/** Confirms a copy only when the clipboard actually took it. */
function useCopyToClipboard(value: string | undefined) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timeout.current), [])

  const copy = useCallback(async () => {
    if (value === undefined) {
      return
    }
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // A blocked clipboard is not worth a confirmation the reader cannot trust.
      return
    }
    setCopied(true)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setCopied(false), COPIED_MS)
  }, [value])

  return { copied, copy }
}

/**
 * The card the rows sit in. A row draws its own bottom divider and drops it
 * when it is last, so the list is only the border and the corners.
 */
export const InlineFieldRowList = ({ children }: { children: ReactNode }) => (
  <div className="rounded-lg border border-solid border-f1-border-secondary">
    {children}
  </div>
)

/**
 * A record row: a label, the value beside it, and whatever can be done with the
 * value revealed on hover. The value arrives already rendered and the actions
 * already decided, so this file knows nothing about forms or field types.
 *
 * The forwarded ref lands on the activator, which is what the caller focuses
 * again once an edit ends.
 */
export const InlineFieldRow = forwardRef<HTMLDivElement, InlineFieldRowProps>(
  function InlineFieldRow(
    { label, hint, value, actions, copyValue, onActivate, editing, message },
    ref
  ) {
    const { t } = useI18n()
    const { copied, copy } = useCopyToClipboard(copyValue)

    const strip: RowAction[] =
      copyValue === undefined
        ? actions
        : [
            ...actions,
            {
              key: "copy",
              icon: copied ? Check : LayersFront,
              label: t(copied ? "forms.inline.copied" : "forms.inline.copy", {
                label,
              }),
              onClick: () => void copy(),
              positive: copied,
            },
          ]

    const activatable = !!onActivate && !editing

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return
      }
      event.preventDefault()
      onActivate?.()
    }

    const box = (
      // The height the row declares and the component fills, identical in both
      // modes, so clicking a value never moves the row under the pointer.
      <div
        data-slot="inline-field-row-value"
        className={cn(
          "h-10 w-full min-w-0 rounded-md [&>*]:h-full [&>*]:w-full",
          !editing && "transition-colors motion-reduce:transition-none",
          activatable && "cursor-text group-hover:bg-f1-background-secondary"
        )}
      >
        {value}
      </div>
    )

    return (
      <div
        data-slot="inline-field-row"
        className={cn(
          "group flex min-h-14 flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2",
          // `last-of-type`, not `last`: a caller may leave non-row siblings in
          // the list — a field kept mounted but not rendered, say — and only
          // the last ROW should drop its divider.
          "border-0 border-b border-solid border-f1-border-secondary last-of-type:border-b-0"
        )}
      >
        <div className="flex min-w-0 flex-[1_1_140px] items-center gap-1">
          <span className="truncate text-f1-foreground-secondary">{label}</span>
          {hint ? <Hint hint={hint} /> : null}
        </div>

        <div className="flex min-w-[160px] max-w-96 flex-[1_1_160px] flex-col gap-1">
          <div className="relative flex w-full min-w-0 items-center">
            {activatable ? (
              <div
                ref={ref}
                role="button"
                tabIndex={0}
                aria-label={label}
                title={t("forms.inline.edit", { label })}
                onClick={onActivate}
                onKeyDown={handleKeyDown}
                className={cn("w-full min-w-0 rounded-md", focusRing())}
              >
                {box}
              </div>
            ) : (
              box
            )}

            {/* A sibling of the activator, never its parent: a button inside a
                `role="button"` is axe's `nested-interactive`. */}
            {!editing && strip.length > 0 ? (
              <div
                data-slot="inline-field-row-actions"
                className={cn(
                  "absolute inset-y-0 right-1 flex items-center gap-0.5",
                  // The confirmation has to outlast the pointer: copying and
                  // then moving away would otherwise take the check with it.
                  copied ? "opacity-100" : REVEAL_CLASS
                )}
              >
                {strip.map((action) => (
                  <ActionButton key={action.key} action={action} />
                ))}
              </div>
            ) : null}
          </div>

          {/* Under the box rather than beside it: the value keeps its width and
              the row grows downwards, so a failing row moves nothing sideways. */}
          {message ? (
            <div
              data-slot="inline-field-row-message"
              className="px-3 text-base font-medium text-f1-foreground-critical"
            >
              {message}
            </div>
          ) : null}
        </div>
      </div>
    )
  }
)
