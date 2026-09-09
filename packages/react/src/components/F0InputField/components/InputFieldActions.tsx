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
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  useEffect(() => {
    if (!copied) {
      return
    }
    const timer = setTimeout(() => setCopied(false), COPY_FEEDBACK_MS)
    return () => clearTimeout(timer)
  }, [copied])

  useEffect(() => {
    if (!copyFailed) {
      return
    }
    const timer = setTimeout(() => setCopyFailed(false), COPY_FEEDBACK_MS)
    return () => clearTimeout(timer)
  }, [copyFailed])

  useEffect(() => {
    if (onEdit && onRequestChange) {
      console.warn(
        "F0InputField: `onEdit` and `onRequestChange` are mutually exclusive. A pencil promises the click lets you type; a comment promises somebody else decides. Pick the one that is true."
      )
    }
  }, [!!onEdit, !!onRequestChange]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCopy = async () => {
    if (await copyToClipboard(value ?? "")) {
      setCopyFailed(false)
      setCopied(true)
    } else {
      setCopied(false)
      setCopyFailed(true)
    }
  }

  // Fixed order: the act you are most likely to want sits closest to the
  // value, and copy — the one you reach for without reading — sits at the edge.
  const actions: ResolvedAction[] = []

  if (onEdit) {
    actions.push(
      confirmed
        ? {
            // The control that caused the confirmation carries it, rather than
            // a tick appearing beside a pencil. It stays pressable throughout:
            // fixing a typo you spotted the instant it saved should not mean
            // waiting out an animation.
            key: "edit",
            icon: CheckCircle,
            label: i18n.t("inputs.actions.saved", { label }),
            positive: true,
            onClick: onEdit,
          }
        : {
            key: "edit",
            icon: Pencil,
            label: i18n.t("inputs.actions.edit", { label }),
            onClick: onEdit,
          }
    )
  }

  if (masked) {
    actions.push({
      key: "visibility",
      icon: revealed ? EyeVisible : EyeInvisible,
      label: revealed
        ? i18n.t("inputs.private.hide", { label })
        : i18n.t("inputs.private.show", { label }),
      onClick: () => onRevealedChange(!revealed),
    })
  }

  if (onRequestChange) {
    actions.push({
      key: "request-change",
      icon: Comment,
      label: i18n.t("inputs.actions.requestChange", { label }),
      onClick: onRequestChange,
    })
  }

  if (copyable) {
    actions.push({
      key: "copy",
      icon: copied ? CheckCircle : LayersFront,
      label: copied
        ? i18n.inputs.actions.copied
        : i18n.t("inputs.actions.copy", { label }),
      positive: copied,
      onClick: () => void handleCopy(),
    })
  }

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
