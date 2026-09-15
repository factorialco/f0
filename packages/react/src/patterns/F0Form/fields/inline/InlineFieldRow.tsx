import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { F0Icon, IconType } from "@/components/F0Icon"
import type { InputFieldSize } from "@/components/F0InputField"
import { Check, ChevronDown, Comment, LayersFront, Pencil } from "@/icons/app"
import { getFieldInputIcon } from "@/lib/field-input-icons"
import { useI18n } from "@/lib/providers/i18n"
import { useL10n } from "@/lib/providers/l10n"
import { cn, focusRing } from "@/lib/utils"
import { FORM_SIZE } from "../../constants"
import type { F0Field } from "../types"
import { formatFieldValue } from "./formatFieldValue"
import { RequestChangeDialog } from "./RequestChangeDialog"
import type { F0FieldInlineConfig, F0FieldPendingChange } from "./types"
import {
  type InlineEditorOptions,
  TOGGLE_FIELD_TYPES,
  useInlineField,
} from "./useInlineField"

/**
 * Matched to `inputFieldVariants` so the row does not resize when the value
 * swaps between reading and the editor. `renderFieldInput` mounts every editor
 * at `FORM_SIZE`, so a form-layer row is always the `md` one.
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

const EditableValue = forwardRef<
  HTMLButtonElement,
  {
    editLabel: string
    editIcon: IconType
    onEdit: () => void
    pinned: boolean
    children: ReactNode
  }
>(function EditableValue(
  { editLabel, editIcon, onEdit, pinned, children },
  ref
) {
  return (
    <button
      ref={ref}
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
        <F0Icon icon={editIcon} size="sm" />
      </span>
    </button>
  )
})

/**
 * A read-only value is still reachable and still announced with its label and
 * value, the way a native `<input readonly>` is.
 */
const ReadOnlyValue = forwardRef<
  HTMLSpanElement,
  { label: string; children: ReactNode }
>(function ReadOnlyValue({ label, children }, ref) {
  return (
    <span
      ref={ref}
      tabIndex={0}
      role="textbox"
      aria-readonly="true"
      aria-label={label}
      className={cn("flex min-w-0 flex-1 items-center rounded", focusRing())}
    >
      {children}
    </span>
  )
})

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

/**
 * A request nobody has answered yet, under the value it is about. Answering is
 * not offered here — that lives wherever the product already handles approvals
 * — so the only action is the asker taking their own ask back.
 */
const PendingChange = ({
  pending,
  onCancel,
}: {
  pending: F0FieldPendingChange
  onCancel?: (id: string) => void
}) => {
  const { t, actions } = useI18n()

  return (
    <div
      data-slot="pending-change"
      className="flex items-center gap-2 rounded bg-f1-background-secondary px-1.5 py-0.5"
    >
      {/* No truncation: the requested value is the whole of what this says, so
          a long one wraps onto a second line rather than being cut. */}
      <span className="min-w-0 flex-1 text-f1-foreground-secondary">
        {t("forms.requestChange.pending", { value: pending.to })}
      </span>
      {onCancel ? (
        <button
          type="button"
          onClick={() => onCancel(pending.id)}
          className={cn(
            "shrink-0 cursor-pointer rounded border-0 bg-transparent p-0 font-medium text-f1-foreground",
            focusRing()
          )}
        >
          {actions.cancel}
        </button>
      ) : null}
    </div>
  )
}

function rowClass({
  copied,
  interactive,
  hasError,
}: {
  copied: boolean
  interactive: boolean
  hasError: boolean
}) {
  return cn(
    "group flex w-full items-center gap-1 rounded-md px-2 transition-colors",
    rowSizes[FORM_SIZE],
    copied && "bg-f1-background-positive",
    !copied && interactive && "hover:bg-f1-background-secondary",
    // The message below the row says what is wrong; this is what makes the row
    // itself look wrong, the way the editor's own border would.
    hasError && "border border-solid border-f1-border-critical"
  )
}

/**
 * The affordance for changing the value. A pencil unless the field has a more
 * specific one: a calendar for a date, a chevron for a select, the input's own
 * leading icon for an email or a url.
 */
function editIconFor(field: F0Field): IconType {
  if (field.type === "select") {
    return ChevronDown
  }
  const byType =
    field.type === "text"
      ? getFieldInputIcon(field.inputType)
      : getFieldInputIcon(field.type)
  return byType ?? Pencil
}

/**
 * A toggle sits in the row as itself. There is nothing to reveal — it already
 * shows what it holds and changes on one click — so it is rendered at rest,
 * and read-only means the control is off rather than the value becoming words.
 */
const ToggleValue = ({ children }: { children: ReactNode }) => (
  <div className="flex min-w-0 flex-1 items-center">{children}</div>
)

export type InlineFieldRowProps = {
  field: F0Field
  config: F0FieldInlineConfig
  value: unknown
  /** Shown in place of the value when there is none. */
  placeholder?: string
  hasError?: boolean
  /** The editor this row swaps in, mounted with the options the row supplies. */
  renderEditor: (options: InlineEditorOptions) => ReactNode
}

/**
 * A field rendered the way a record detail screen renders it: the value reads
 * as text where a read-only row would print it, hovering reveals what can be
 * done with it, and activating it swaps in the field's own editor.
 */
export function InlineFieldRow({
  field,
  config,
  value,
  placeholder,
  hasError,
  renderEditor,
}: InlineFieldRowProps) {
  const i18n = useI18n()
  const { locale } = useL10n()
  const {
    isReading,
    startEditing,
    editorOptions,
    editorContainerProps,
    setReadValue,
  } = useInlineField(field)
  const [isRequesting, setIsRequesting] = useState(false)

  const isToggle = TOGGLE_FIELD_TYPES.has(field.type)
  // A toggle has no text form in the row, but the ask and its answer still
  // describe it in prose, so the formatted value is what those read.
  const text = formatFieldValue(field, value, i18n, locale)
  const { copied, copy } = useCopyToClipboard(text)

  if (!isToggle && !isReading) {
    return (
      <div
        className="w-full"
        data-slot="inline-field-editor"
        {...editorContainerProps}
      >
        {renderEditor(editorOptions)}
      </div>
    )
  }

  const isEmpty = text === ""
  const canEdit = !config.readonly
  const { requestChange } = config
  const pending = requestChange?.pending
  // One ask at a time: a request already on the record is the answer to
  // "can I ask for this to change".
  const canRequestChange = !!requestChange && !pending
  const hasActions = canRequestChange || !!config.copyable

  const valueText = (
    <ValueText
      text={isEmpty ? (placeholder ?? field.placeholder ?? "") : text}
      isEmpty={isEmpty}
    />
  )

  const valueSlot = isToggle ? (
    <ToggleValue>
      {renderEditor({ ...editorOptions, autoFocus: false, disabled: !canEdit })}
    </ToggleValue>
  ) : canEdit ? (
    <EditableValue
      ref={setReadValue}
      editLabel={i18n.t("inputs.edit", { label: field.label })}
      editIcon={editIconFor(field)}
      onEdit={startEditing}
      pinned={copied}
    >
      {valueText}
    </EditableValue>
  ) : (
    <ReadOnlyValue ref={setReadValue} label={field.label}>
      {valueText}
    </ReadOnlyValue>
  )

  return (
    <div className="flex w-full flex-col gap-1">
      <div
        className={rowClass({
          copied,
          interactive: (canEdit && !isToggle) || hasActions,
          hasError: !!hasError,
        })}
        data-slot="inline-field-row"
        data-testid="inline-field-row"
      >
        {valueSlot}

        {hasActions ? (
          <ActionStrip pinned={copied}>
            {canRequestChange ? (
              <IconAction
                icon={Comment}
                label={i18n.t("inputs.requestChange", { label: field.label })}
                onClick={() => setIsRequesting(true)}
                slot="request-change-affordance"
              />
            ) : null}
            {config.copyable ? (
              <CopyAction label={field.label} copied={copied} onCopy={copy} />
            ) : null}
          </ActionStrip>
        ) : null}
      </div>

      {pending ? (
        <PendingChange pending={pending} onCancel={requestChange?.onCancel} />
      ) : null}

      {requestChange ? (
        <RequestChangeDialog
          isOpen={isRequesting}
          onClose={() => setIsRequesting(false)}
          field={field}
          current={text}
          onSubmit={requestChange.onSubmit}
        />
      ) : null}
    </div>
  )
}
