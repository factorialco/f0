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
import { CheckCircle, InfoCircleLine, LayersFront } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { textVariants } from "@/ui/Text/variants"
import type { InlineFieldRowProps, RowAction } from "./types"

const COPIED_MS = 1400

/**
 * The strip shows itself once one of its own buttons takes a focus ring, so it
 * stays tabbable without being pinned open by the focus the row restores to
 * the activator after a mouse-driven edit.
 */
const REVEAL_CLASS = cn(
  "pointer-events-none opacity-0 transition-opacity motion-reduce:transition-none",
  "group-hover:pointer-events-auto group-hover:opacity-100",
  "has-[:focus-visible]:pointer-events-auto has-[:focus-visible]:opacity-100",
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
      "flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 transition-colors motion-reduce:transition-none",
      action.positive
        ? "text-f1-icon-positive"
        : "text-f1-icon-bold hover:bg-f1-background-secondary-hover",
      focusRing()
    )}
  >
    <F0Icon icon={action.icon} size="sm" />
  </button>
)

/** Name the hint trigger directly for screen readers. */
const Hint = ({ hint }: { hint: string }) => (
  <Tooltip label={hint}>
    <button
      type="button"
      aria-label={hint}
      className={cn(
        "flex h-5 w-5 shrink-0 cursor-help items-center justify-center rounded-xs border-0 bg-transparent p-0 text-f1-foreground-secondary",
        focusRing()
      )}
    >
      <F0Icon icon={InfoCircleLine} size="sm" />
    </button>
  </Tooltip>
)

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
      return
    }
    setCopied(true)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setCopied(false), COPIED_MS)
  }, [value])

  return { copied, copy }
}

export const InlineFieldRowList = ({ children }: { children: ReactNode }) => (
  <div className="rounded-lg border border-solid border-f1-border-secondary">
    {children}
  </div>
)

/** Keep the wrapper mounted across modes so pending value changes survive. */
const RowValue = forwardRef<
  HTMLDivElement,
  {
    label: string
    value: ReactNode
    editing: boolean
    copied: boolean
    activatable: boolean
    cursor: "caret" | "pointer"
    onActivate: (() => void) | undefined
  }
>(function RowValue(
  { label, value, editing, copied, activatable, cursor, onActivate },
  ref
) {
  const { t } = useI18n()

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return
    }
    event.preventDefault()
    onActivate?.()
  }

  const interactive = activatable
    ? {
        role: "button",
        tabIndex: 0,
        "aria-label": label,
        title: t("forms.inline.edit", { label }),
        onClick: onActivate,
        onKeyDown: handleKeyDown,
      }
    : {}

  return (
    <div
      ref={ref}
      {...interactive}
      className={cn("w-full min-w-0 rounded-md", focusRing())}
    >
      <div
        data-slot="inline-field-row-value"
        className={cn(
          "h-10 w-full min-w-0 rounded-md [&>*]:h-full [&>*]:w-full",
          !editing && "transition-colors motion-reduce:transition-none",
          copied && !editing && "bg-f1-background-positive",
          activatable && !copied && "group-hover:bg-f1-background-secondary",
          activatable &&
            (cursor === "pointer" ? "cursor-pointer" : "cursor-text")
        )}
      >
        {value}
      </div>
    </div>
  )
})

/** Presentation-only row. The forwarded ref targets the activator for focus restoration. */
export const InlineFieldRow = forwardRef<HTMLDivElement, InlineFieldRowProps>(
  function InlineFieldRow(
    {
      anchorId,
      label,
      hint,
      value,
      actions,
      copyValue,
      onActivate,
      activatorCursor = "caret",
      editing,
      message,
    },
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
              icon: copied ? CheckCircle : LayersFront,
              label: t(copied ? "forms.inline.copied" : "forms.inline.copy", {
                label,
              }),
              onClick: () => void copy(),
              positive: copied,
            },
          ]

    const activatable = !!onActivate && !editing

    return (
      <div
        id={anchorId}
        data-slot="inline-field-row"
        className={cn(
          "flex min-h-14 scroll-mt-4 flex-wrap items-center gap-x-4 gap-y-1 px-3 py-2",
          // Hidden controllers render spans; only the last div row loses its divider.
          "border-0 border-b border-solid border-f1-border-secondary last-of-type:border-b-0"
        )}
      >
        <div className="flex min-w-0 grow shrink basis-35 items-center gap-1">
          <span
            className={cn(
              textVariants({ variant: "body" }),
              "truncate font-normal"
            )}
          >
            {label}
          </span>
          {hint ? <Hint hint={hint} /> : null}
        </div>

        <div className="flex min-w-40 max-w-96 grow shrink basis-40 flex-col gap-1">
          {/* The hover group is the value cell, so the label never triggers it. */}
          <div className="group relative flex w-full min-w-0 items-center">
            <RowValue
              ref={ref}
              label={label}
              value={value}
              editing={editing}
              copied={copied}
              activatable={activatable}
              cursor={activatorCursor}
              onActivate={onActivate}
            />

            {/* Keep action buttons outside the activator to avoid nested controls. */}
            {!editing && strip.length > 0 ? (
              <div
                data-slot="inline-field-row-actions"
                className={cn(
                  "absolute inset-y-0 right-1 flex items-center gap-0.5",
                  // Keep copy confirmation visible after hover ends.
                  copied ? "opacity-100" : REVEAL_CLASS
                )}
              >
                {strip.map((action) => (
                  <ActionButton key={action.key} action={action} />
                ))}
              </div>
            ) : null}
          </div>

          {/* Place errors below the value to preserve its width. */}
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
