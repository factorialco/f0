import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { F0Icon, IconType } from "@/components/F0Icon"
import { InputFieldProps, InputFieldSize } from "@/components/F0InputField"
import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { Check, Comment, LayersFront } from "@/icons/app"
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
  /** Offers the date for copying, as an action beside whatever else the row has. */
  copyable?: boolean
  onEdit: () => void
  onRequestChange?: () => void
} & Pick<InputFieldProps<string>, "error" | "status" | "hint">

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
  "transition-colors"
)

const quietAction = "text-f1-icon-bold hover:bg-f1-background-secondary-hover"

/** How long the copied state holds, matching the prototype. */
const COPIED_MS = 1400

/** Confirms a copy only when the clipboard actually took it. */
function useCopyToClipboard(value: string) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timeout.current), [])

  const copy = useCallback(async () => {
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

const IconAction = ({
  icon,
  label,
  onClick,
  positive,
  slot,
}: {
  icon: IconType
  label: string
  onClick?: () => void
  positive?: boolean
  slot: string
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    title={label}
    aria-live={positive ? "polite" : undefined}
    data-slot={slot}
    className={cn(
      actionButton,
      positive ? "text-f1-icon-positive" : quietAction,
      focusRing()
    )}
  >
    <F0Icon icon={icon} size="sm" />
  </button>
)

/**
 * The confirmation has to outlast the pointer: copying and then moving away
 * would otherwise take the check with it.
 */
const ActionStrip = ({
  pinned,
  children,
}: {
  pinned: boolean
  children: ReactNode
}) => (
  <div
    className={cn(
      "flex shrink-0 items-center gap-0.5",
      pinned ? "opacity-100" : actionReveal
    )}
  >
    {children}
  </div>
)

const ValueText = ({ text, isEmpty }: { text: string; isEmpty: boolean }) => (
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

const EditableValue = ({
  editLabel,
  onEdit,
  pinned,
  children,
}: {
  editLabel: string
  onEdit: () => void
  pinned: boolean
  children: ReactNode
}) => {
  const calendarIcon = getFieldInputIcon("date")

  return (
    <button
      type="button"
      onClick={onEdit}
      aria-label={editLabel}
      title={editLabel}
      className={cn(
        "flex min-w-0 flex-1 cursor-text items-center gap-1 rounded border-0 bg-transparent p-0 text-left",
        focusRing()
      )}
    >
      {children}
      <span
        aria-hidden="true"
        data-slot="edit-affordance"
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center text-f1-icon-bold",
          pinned ? "opacity-100" : actionReveal
        )}
      >
        {calendarIcon ? <F0Icon icon={calendarIcon} size="sm" /> : null}
      </span>
    </button>
  )
}

/**
 * A read-only date is still reachable and still announced with its label and
 * value, the way a native `<input readonly>` is.
 */
const ReadOnlyValue = ({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) => (
  <span
    tabIndex={0}
    role="textbox"
    aria-readonly="true"
    aria-label={label}
    className={cn("min-w-0 flex-1 rounded", focusRing())}
  >
    {children}
  </span>
)

const CopyAction = ({
  label,
  copied,
  onCopy,
}: {
  label: string
  copied: boolean
  onCopy: () => void
}) => {
  const i18n = useI18n()

  return (
    <IconAction
      icon={copied ? Check : LayersFront}
      label={i18n.t(copied ? "inputs.copied" : "inputs.copy", { label })}
      onClick={onCopy}
      positive={copied}
      slot="copy-affordance"
    />
  )
}

function rowClass({
  copied,
  interactive,
  size,
}: {
  copied: boolean
  interactive: boolean
  size: InputFieldSize
}) {
  return cn(
    "group flex w-full items-center gap-1 rounded-md px-2 transition-colors",
    copied && "bg-f1-background-positive",
    !copied && interactive && "hover:bg-f1-background-secondary",
    rowSizes[size]
  )
}

/** Same precedence F0InputField applies, so a row says the same thing whether
 * it is being read or edited. */
function resolveStatus({
  error,
  status,
  hint,
}: Pick<DateDisplayProps, "error" | "status" | "hint">) {
  if (error) {
    return {
      type: "error" as const,
      message: typeof error === "string" ? error : undefined,
    }
  }
  if (status) {
    return status
  }
  return hint ? { type: "default" as const, message: hint } : undefined
}

const DateDisplay = forwardRef<HTMLDivElement, DateDisplayProps>(
  (
    {
      label,
      value,
      placeholder,
      size = "sm",
      readonly,
      copyable,
      onEdit,
      onRequestChange,
      error,
      status,
      hint,
    },
    ref
  ) => {
    const i18n = useI18n()
    const { copied, copy } = useCopyToClipboard(value)

    const isEmpty = value === ""

    // Read-only with nothing to ask is a dead end: the date is inert text.
    const canRequestChange = !!readonly && !!onRequestChange
    const canEdit = !readonly
    const hasActions = canRequestChange || !!copyable

    const valueText = (
      <ValueText
        text={isEmpty ? (placeholder ?? i18n.date.none) : value}
        isEmpty={isEmpty}
      />
    )

    return (
      <div ref={ref} className="flex flex-col gap-1">
        <div
          className={rowClass({
            copied,
            interactive: canEdit || hasActions,
            size,
          })}
          data-slot="date-display"
          data-testid="date-display-row"
        >
          {canEdit ? (
            <EditableValue
              editLabel={i18n.t("inputs.edit", { label })}
              onEdit={onEdit}
              pinned={copied}
            >
              {valueText}
            </EditableValue>
          ) : (
            <ReadOnlyValue label={label}>{valueText}</ReadOnlyValue>
          )}

          {hasActions ? (
            <ActionStrip pinned={copied}>
              {canRequestChange ? (
                <IconAction
                  icon={Comment}
                  label={i18n.t("inputs.requestChange", { label })}
                  onClick={onRequestChange}
                  slot="request-change-affordance"
                />
              ) : null}
              {copyable ? (
                <CopyAction label={label} copied={copied} onCopy={copy} />
              ) : null}
            </ActionStrip>
          ) : null}
        </div>
        <InputMessages status={resolveStatus({ error, status, hint })} />
      </div>
    )
  }
)

DateDisplay.displayName = "DateDisplay"
export { DateDisplay }
