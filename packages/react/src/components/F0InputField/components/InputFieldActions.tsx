import { useEffect, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { IconType } from "@/components/F0Icon"
import {
  CheckCircle,
  Comment,
  EyeInvisible,
  EyeVisible,
  LayersFront,
  Pencil,
} from "@/icons/app"
import { copyToClipboard } from "@/lib/clipboard"
import { useI18n } from "@/lib/providers/i18n"
import type { TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"
import { useTouchScreen } from "@/lib/useTouchScreen"
import { cn } from "@/lib/utils"
import type { InputFieldValueActions } from "../types"

/** How long the copy tick stays up. Matches `ButtonCopy`. */
const COPY_FEEDBACK_MS = 1000

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

type BuildActionsInput = Pick<
  InputFieldValueActions,
  "copyable" | "masked" | "onEdit" | "onRequestChange" | "confirmed"
> & {
  revealed: boolean
  copied: boolean
  /** Resolves a translation key against the field's label. */
  name: (key: TranslationKey) => string
  onToggleReveal: () => void
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
  label: name(confirmed ? "inputs.actions.saved" : "inputs.actions.edit"),
  positive: confirmed,
  onClick,
})

const visibilityAction = ({
  revealed,
  name,
  onToggleReveal,
}: BuildActionsInput): ResolvedAction => ({
  key: "visibility",
  icon: revealed ? EyeVisible : EyeInvisible,
  label: name(revealed ? "inputs.private.hide" : "inputs.private.show"),
  onClick: onToggleReveal,
})

const requestChangeAction = (
  { name }: BuildActionsInput,
  onClick: () => void
): ResolvedAction => ({
  key: "request-change",
  icon: Comment,
  label: name("inputs.actions.requestChange"),
  onClick,
})

const copyAction = ({
  copied,
  name,
  onCopy,
}: BuildActionsInput): ResolvedAction => ({
  key: "copy",
  icon: copied ? CheckCircle : LayersFront,
  label: name(copied ? "inputs.actions.copied" : "inputs.actions.copy"),
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
    input.masked ? visibilityAction(input) : null,
    input.onRequestChange
      ? requestChangeAction(input, input.onRequestChange)
      : null,
    input.copyable ? copyAction(input) : null,
  ].filter((action): action is ResolvedAction => action !== null)

export type InputFieldActionsProps = Required<
  Pick<InputFieldValueActions, "actionsVisibility">
> &
  Pick<
    InputFieldValueActions,
    "copyable" | "masked" | "onEdit" | "onRequestChange" | "confirmed"
  > & {
    /** The field's label. Feeds every accessible name. */
    label: string
    /** The field's current value. The copy payload. */
    value?: string
    /** The field's own `disabled` — disables every control. */
    disabled?: boolean
    revealed: boolean
    onRevealedChange: (revealed: boolean) => void
    /**
     * Reports whether a confirmation is showing, so the field can go positive
     * with it. The copy tick is owned here, so the field cannot work it out.
     */
    onConfirmingChange: (confirming: boolean) => void
  }

export const InputFieldActions = ({
  copyable,
  masked,
  onEdit,
  onRequestChange,
  actionsVisibility,
  confirmed,
  label,
  value,
  disabled,
  revealed,
  onRevealedChange,
  onConfirmingChange,
}: InputFieldActionsProps) => {
  const i18n = useI18n()
  const isTouchScreen = useTouchScreen()
  const [copied, setCopied] = useTransientFlag(COPY_FEEDBACK_MS)
  const [copyFailed, setCopyFailed] = useTransientFlag(COPY_FEEDBACK_MS)

  useEffect(() => {
    if (onEdit && onRequestChange) {
      console.warn(
        "F0InputField: `onEdit` and `onRequestChange` are mutually exclusive. A pencil promises the click lets you type; a comment promises somebody else decides. Pick the one that is true."
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
    masked,
    onEdit,
    onRequestChange,
    confirmed,
    revealed,
    copied,
    name: (key) => i18n.t(key, { label }),
    onToggleReveal: () => onRevealedChange(!revealed),
    onCopy: () => void handleCopy(),
  })

  const confirming = !!confirmed || copied

  useEffect(() => {
    onConfirmingChange(confirming)
  }, [confirming, onConfirmingChange])

  // A hover reveal has no way in on a touch screen, where hover never fires:
  // there the controls stay put.
  const hidesUntilHover =
    actionsVisibility === "hover" && !isTouchScreen && !confirming

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
      data-testid="input-field-actions"
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
              // The field's content area has its own click handler
              // (`onClickContent`), which would otherwise fire alongside.
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
          ? i18n.inputs.actions.copyFailed
          : actions.find((action) => action.positive)?.label}
      </span>
    </div>
  )
}
