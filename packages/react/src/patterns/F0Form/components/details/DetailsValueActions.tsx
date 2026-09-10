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
 * The acts a details row offers on the value it shows.
 *
 * A closed set rather than a list of actions: the glyph, the order, the
 * accessible name and the confirmation for each job belong to the design
 * system, so the same job looks and reads the same in every row. There is no
 * slot for an arbitrary icon.
 *
 * The eye is not here. Masking is the input's own business, so it renders
 * inside the input's trailing area, to the left of this row.
 */
export type DetailsValueActionsInput = {
  /**
   * A copy button. Copies the row's current value and confirms with a positive
   * tick, but only once the clipboard write actually succeeded.
   */
  copyable?: boolean
  /**
   * A pencil. Present means the button shows; the row does not become editable
   * on its own — the cell flips `readonly` off in response.
   *
   * Always a pencil, because it always means "you are about to type here". A
   * value chosen from a list or a calendar is a different act, and it belongs
   * to the component that owns that act.
   */
  onEdit?: () => void
  /**
   * A comment glyph, for a value the viewer may read but not change: they say
   * something about it and somebody else decides. Never a pencil — a pencil
   * promises the click will let you type. Mutually exclusive with `onEdit`.
   */
  onRequestChange?: () => void
  /**
   * Turns the pencil into a tick, to confirm a value just committed. The cell
   * holds it true for the length of the confirmation; the copy button confirms
   * itself and needs nothing here.
   */
  confirmed?: boolean
}

type BuildActionsInput = DetailsValueActionsInput & {
  copied: boolean
  /** Resolves a translation key against the row's label. */
  name: (key: TranslationKey) => string
  onCopy: () => void
}

/**
 * The pencil, or the tick that replaces it while a commit is confirming.
 *
 * The control that caused the confirmation carries it, rather than a tick
 * appearing beside a pencil. It stays pressable throughout: fixing a typo you
 * spotted the instant it saved should not mean waiting out an animation.
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

/**
 * The fixed order: the act you are most likely to want sits closest to the
 * value, and copy, the one you reach for without reading, sits at the edge.
 */
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
   * `"hover"` fades the controls in on hover or focus-within, and holds them
   * while one has focus or is confirming. Touch screens, where hover never
   * fires, always get `"always"`.
   * @default "always"
   */
  visibility?: DetailsValueActionsVisibility
  /**
   * Reports whether a confirmation is showing, so the cell can go positive with
   * it. The copy tick is owned here, so the cell cannot work it out.
   */
  onConfirmingChange?: (confirming: boolean) => void
  /**
   * Stands the whole row down while the value is being typed. None of these
   * acts applies to a draft: the pencil is how you got here, and copying or
   * querying a half-finished value is not something anyone wants. The clear
   * button, which belongs to the input, stays.
   */
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

  // A hover reveal has no way in on a touch screen, where hover never fires:
  // there the controls stay put.
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
          // The positive tint has to land inside the button: the button's own
          // variant sets `text-f1-foreground`, so a colour set on this wrapper
          // would never reach the glyph.
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
              // The row's value area has its own click handler, which would
              // otherwise fire alongside.
              event.stopPropagation()
              action.onClick()
            }}
          />
        </span>
      ))}
      {/*
        The confirmation lives in a live region rather than on the button:
        an icon-only button carries its name in `aria-label`, and changing an
        `aria-label` is not reliably announced.
      */}
      <span className="sr-only" aria-live="polite">
        {copyFailed
          ? i18n.forms.details.copyFailed
          : actions.find((action) => action.positive)?.label}
      </span>
    </div>
  )
}
