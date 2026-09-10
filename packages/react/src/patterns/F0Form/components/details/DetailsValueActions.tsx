import { useEffect, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import { CheckCircle, Comment, LayersFront, Pencil } from "@/icons/app"
import { copyToClipboard } from "@/lib/clipboard"
import { useI18n } from "@/lib/providers/i18n"
import type { TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"
import { useTouchScreen } from "@/lib/useTouchScreen"
import { cn } from "@/lib/utils"

/** How long the copy tick stays up. Matches `ButtonCopy`. */
const COPY_FEEDBACK_MS = 1000

export const detailsValueActionsVisibility = ["always", "hover"] as const
export type DetailsValueActionsVisibility =
  (typeof detailsValueActionsVisibility)[number]

type ResolvedAction = {
  key: string
  icon: IconType
  label: string
  positive?: boolean
  onClick: () => void
}

/** A flag that falls back to `false` on its own after `ms`. */
const useTransientFlag = (ms: number) => {
  const [raised, setRaised] = useState(false)

  useEffect(() => {
    if (!raised) {
      return
    }
    const timer = setTimeout(() => setRaised(false), ms)
    return () => clearTimeout(timer)
  }, [raised, ms])

  return [raised, setRaised] as const
}

/**
 * The acts a details row offers on the value it shows. A closed set, so the
 * same job draws the same glyph in every row; there is no slot for an
 * arbitrary icon. The eye is not here, because masking is the input's.
 */
export type DetailsValueActionsInput = {
  /** A copy button. Confirms only once the clipboard write succeeded. */
  copyable?: boolean
  /** A pencil. Shows the button; the cell flips `readonly` off in response. */
  onEdit?: () => void
  /**
   * A comment glyph, for a value the viewer may read but not set. Mutually
   * exclusive with `onEdit`.
   */
  onRequestChange?: () => void
  /** Turns the pencil into a tick. The cell owns the confirmation's timer. */
  confirmed?: boolean
}

type BuildActionsInput = DetailsValueActionsInput & {
  copied: boolean
  /** Resolves a translation key against the row's label. */
  name: (key: TranslationKey) => string
  onCopy: () => void
}

/**
 * The pencil, or the tick that replaces it while a commit is confirming. It
 * stays pressable throughout, so a typo can be fixed straight away.
 */
const editAction = (
  { confirmed, name }: BuildActionsInput,
  onClick: () => void
): ResolvedAction => ({
  key: "edit",
  icon: confirmed ? CheckCircle : Pencil,
  label: name(confirmed ? "forms.details.saved" : "forms.details.edit"),
  positive: confirmed,
  onClick,
})

const requestChangeAction = (
  { name }: BuildActionsInput,
  onClick: () => void
): ResolvedAction => ({
  key: "request-change",
  icon: Comment,
  label: name("forms.details.requestChange"),
  onClick,
})

const copyAction = ({
  copied,
  name,
  onCopy,
}: BuildActionsInput): ResolvedAction => ({
  key: "copy",
  icon: copied ? CheckCircle : LayersFront,
  label: name(copied ? "forms.details.copied" : "forms.details.copy"),
  positive: copied,
  onClick: onCopy,
})

/** Fixed order, closest to the value first. */
const buildActions = (input: BuildActionsInput): ResolvedAction[] =>
  [
    input.onEdit ? editAction(input, input.onEdit) : null,
    input.onRequestChange
      ? requestChangeAction(input, input.onRequestChange)
      : null,
    input.copyable ? copyAction(input) : null,
  ].filter((action): action is ResolvedAction => action !== null)

export type DetailsValueActionsProps = DetailsValueActionsInput & {
  /** The row's label. Feeds every accessible name. */
  label: string
  /** The row's current value. The copy payload. */
  value?: string
  /** Disables every control. */
  disabled?: boolean
  /**
   * `"hover"` fades the controls in on the cell's hover or focus-within. Touch
   * screens always get `"always"`.
   * @default "always"
   */
  visibility?: DetailsValueActionsVisibility
  /** Reports a showing confirmation, so the cell can tint with it. */
  onConfirmingChange?: (confirming: boolean) => void
  /** Stands the row down while the value is being typed. */
  editing?: boolean
}

export const DetailsValueActions = ({
  copyable,
  onEdit,
  onRequestChange,
  confirmed,
  label,
  value,
  disabled,
  visibility = "always",
  onConfirmingChange,
  editing,
}: DetailsValueActionsProps) => {
  const i18n = useI18n()
  const isTouchScreen = useTouchScreen()
  const [copied, setCopied] = useTransientFlag(COPY_FEEDBACK_MS)
  const [copyFailed, setCopyFailed] = useTransientFlag(COPY_FEEDBACK_MS)

  useEffect(() => {
    if (onEdit && onRequestChange) {
      console.warn(
        "DetailsValueActions: `onEdit` and `onRequestChange` are mutually exclusive. A pencil promises the click lets you type; a comment promises somebody else decides. Pick the one that is true."
      )
    }
  }, [!!onEdit, !!onRequestChange]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCopy = async () => {
    const ok = await copyToClipboard(value ?? "")
    setCopied(ok)
    setCopyFailed(!ok)
  }

  const actions = buildActions({
    copyable,
    onEdit,
    onRequestChange,
    confirmed,
    copied,
    name: (key) => i18n.t(key, { label }),
    onCopy: () => void handleCopy(),
  })

  const confirming = !!confirmed || copied

  useEffect(() => {
    onConfirmingChange?.(confirming)
  }, [confirming, onConfirmingChange])

  // Hover never fires on a touch screen, so there the controls stay put.
  const hidesUntilHover =
    visibility === "hover" && !isTouchScreen && !confirming

  if (editing) {
    return null
  }

  return (
    <div
      className={cn(
        "flex min-h-6 items-center gap-0.5 self-center transition-opacity duration-150",
        hidesUntilHover && [
          "pointer-events-none opacity-0",
          "group-hover/field:pointer-events-auto group-hover/field:opacity-100",
          "group-focus-within/field:pointer-events-auto group-focus-within/field:opacity-100",
        ]
      )}
      data-testid="details-value-actions"
    >
      {actions.map((action) => (
        <span
          key={action.key}
          // Targets the glyph: the button's variant sets `text-f1-foreground`,
          // which would win over a colour set on this wrapper.
          className={cn(action.positive && "[&_svg]:text-f1-icon-positive")}
        >
          <F0Button
            variant="ghost"
            size="sm"
            hideLabel
            icon={action.icon}
            label={action.label}
            disabled={disabled}
            onClick={(event) => {
              // Or the cell's own value handler fires too.
              event.stopPropagation()
              action.onClick()
            }}
          />
        </span>
      ))}
      {/* A changing `aria-label` is not reliably announced. */}
      <span className="sr-only" aria-live="polite">
        {copyFailed
          ? i18n.forms.details.copyFailed
          : actions.find((action) => action.positive)?.label}
      </span>
    </div>
  )
}
