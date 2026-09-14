import { forwardRef } from "react"
import { F0Icon } from "@/components/F0Icon"
import { InputFieldSize } from "@/components/F0InputField"
import { Comment } from "@/icons/app"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

type DateDisplayProps = {
  label: string
  hideLabel?: boolean
  /** The date already formatted for reading, or `""` when there is none. */
  value: string
  emptyLabel?: string
  size?: InputFieldSize
  canEdit?: boolean
  disabled?: boolean
  onEdit: () => void
  onRequestChange?: () => void
}

const rowSizes: Record<InputFieldSize, string> = {
  sm: "h-8 text-sm",
  md: "h-10 text-base",
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
      hideLabel,
      value,
      emptyLabel,
      size = "md",
      canEdit = true,
      disabled,
      onEdit,
      onRequestChange,
    },
    ref
  ) => {
    const i18n = useI18n()

    const isEmpty = value === ""
    const text = isEmpty ? (emptyLabel ?? i18n.date.none) : value

    const editLabel = i18n.t("inputs.edit", { label })
    const requestChangeLabel = i18n.t("inputs.requestChange", { label })

    // `disabled` means the date cannot change by any route, so it reads as text
    // with nothing to reach — same as having neither permission nor a request.
    const canRequestChange = !canEdit && !!onRequestChange
    const isInteractive = !disabled && (canEdit || canRequestChange)

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
      if (!isInteractive) {
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
            className={cn(actionButton, actionReveal, focusRing())}
          >
            <F0Icon icon={Comment} size="sm" />
          </button>
        </div>
      )
    })()

    return (
      <div ref={ref} className="flex flex-col gap-1">
        {hideLabel ? null : (
          <span className="text-md flex max-w-full gap-1 truncate font-medium text-f1-foreground-secondary">
            {label}
          </span>
        )}
        {row}
      </div>
    )
  }
)

DateDisplay.displayName = "DateDisplay"
export { DateDisplay }
