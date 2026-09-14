import { forwardRef } from "react"
import { F0Icon } from "@/components/F0Icon"
import { InputFieldSize } from "@/components/F0InputField"
import { Comment } from "@/icons/app"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

type DateDisplayProps = {
  label: string
  /** The date already formatted for reading, or `""` when there is none. */
  value: string
  placeholder?: string
  size?: InputFieldSize
  /** The date cannot be changed here, so the calendar never appears. */
  readonly?: boolean
  onEdit: () => void
  onRequestChange?: () => void
}

/**
 * Matched to `inputFieldVariants` so the row does not resize when the date
 * swaps between reading and the input.
 */
const rowSizes: Record<InputFieldSize, string> = {
  sm: "h-[32px]",
  md: "h-[40px]",
}

/**
 * Hidden but kept in the DOM and focusable, so Tab reaches the action and
 * reaching it is what reveals it. It stays `pointer-events-none` while hidden,
 * so an invisible button never takes a click — except where there is no hover
 * to reveal it with, which on a touch screen would leave it unreachable.
 */
const actionReveal = cn(
  "pointer-events-none opacity-0 transition-opacity motion-reduce:transition-none",
  "group-hover:pointer-events-auto group-hover:opacity-100",
  "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
  "[@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"
)

const actionButton = cn(
  "flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0",
  "text-f1-icon-bold transition-colors hover:bg-f1-background-secondary-hover"
)

const DateDisplay = forwardRef<HTMLDivElement, DateDisplayProps>(
  (
    {
      label,
      value,
      placeholder,
      size = "sm",
      readonly,
      onEdit,
      onRequestChange,
    },
    ref
  ) => {
    const i18n = useI18n()

    const isEmpty = value === ""
    const text = isEmpty ? (placeholder ?? i18n.date.none) : value

    const editLabel = i18n.t("inputs.edit", { label })
    const requestChangeLabel = i18n.t("inputs.requestChange", { label })

    // Read-only with nothing to ask is a dead end: the date is inert text.
    const canRequestChange = !!readonly && !!onRequestChange
    const canEdit = !readonly

    const calendarIcon = getFieldInputIcon("date")

    const valueText = (
      <span
        className={cn(
          "min-w-0 flex-1 truncate text-left font-medium text-f1-foreground",
          isEmpty && "font-normal text-f1-foreground-secondary"
        )}
        title={text}
      >
        {text}
      </span>
    )

    const row = (() => {
      if (!canEdit && !canRequestChange) {
        return (
          <div
            className={cn("flex items-center gap-2 px-2", rowSizes[size])}
            data-slot="date-display"
          >
            {valueText}
          </div>
        )
      }

      if (canEdit) {
        return (
          <button
            type="button"
            onClick={onEdit}
            aria-label={editLabel}
            title={editLabel}
            data-slot="date-display"
            className={cn(
              "group flex w-full cursor-text items-center gap-1 rounded-md border-0 bg-transparent px-2",
              "transition-colors hover:bg-f1-background-secondary",
              focusRing(),
              rowSizes[size]
            )}
          >
            {valueText}
            <span
              aria-hidden="true"
              data-slot="edit-affordance"
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-bold",
                actionReveal
              )}
            >
              {calendarIcon ? <F0Icon icon={calendarIcon} size="sm" /> : null}
            </span>
          </button>
        )
      }

      return (
        <div
          data-slot="date-display"
          className={cn(
            "group flex w-full items-center gap-1 rounded-md px-2",
            "transition-colors hover:bg-f1-background-secondary",
            rowSizes[size]
          )}
        >
          {valueText}
          <button
            type="button"
            onClick={onRequestChange}
            aria-label={requestChangeLabel}
            title={requestChangeLabel}
            data-slot="request-change-affordance"
            className={cn(actionButton, actionReveal, focusRing())}
          >
            <F0Icon icon={Comment} size="sm" />
          </button>
        </div>
      )
    })()

    return <div ref={ref}>{row}</div>
  }
)

DateDisplay.displayName = "DateDisplay"
export { DateDisplay }
