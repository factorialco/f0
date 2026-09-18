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

const COPIED_MS = 1400

/** Keep hidden actions tabbable; always reveal them on touch screens. */
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

/** Name the hint trigger directly for screen readers. */
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

/** Presentation-only row. The forwarded ref targets the activator for focus restoration. */
export const InlineFieldRow = forwardRef<HTMLDivElement, InlineFieldRowProps>(
  function InlineFieldRow(
    { label, hint, value, actions, copyValue, onActivate, editing },
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
          "border-0 border-b border-solid border-f1-border-secondary last:border-b-0"
        )}
      >
        <div className="flex min-w-0 grow shrink basis-35 items-center gap-1">
          <span className="truncate text-f1-foreground-secondary">{label}</span>
          {hint ? <Hint hint={hint} /> : null}
        </div>

        <div className="relative flex min-w-40 max-w-96 grow shrink basis-40 items-center">
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
      </div>
    )
  }
)
