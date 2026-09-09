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
import {
  INPUTFIELD_MAX_ACTIONS,
  type InputFieldAction,
  type InputFieldActionsVisibility,
  type InputFieldActionTone,
} from "../types"

/** How long the copy tick stays up. Matches `ButtonCopy`. */
const COPY_FEEDBACK_MS = 1000

type ResolvedAction = {
  key: string
  icon: IconType
  label: string
  tone: InputFieldActionTone
  disabled?: boolean
  onClick: (event: React.MouseEvent) => void
}

export type InputFieldActionsProps = {
  actions: InputFieldAction[]
  visibility: InputFieldActionsVisibility
  /** The field's label. Feeds every default action name. */
  label: string
  /** The field's current value. The default `copy` payload. */
  value?: string
  /** The field's own `disabled` — disables every action on top of its own. */
  disabled?: boolean
  revealed: boolean
  onRevealedChange: (revealed: boolean) => void
  /**
   * Reports whether an action is showing a positive tone, so the field can
   * go positive with it. The copy tick is owned here, so the field cannot
   * work it out on its own.
   */
  onConfirmingChange: (confirming: boolean) => void
}

export const InputFieldActions = ({
  actions,
  visibility,
  label,
  value,
  disabled,
  revealed,
  onRevealedChange,
  onConfirmingChange,
}: InputFieldActionsProps) => {
  const i18n = useI18n()
  const isTouchScreen = useTouchScreen()
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [copyFailed, setCopyFailed] = useState(false)

  useEffect(() => {
    if (!copiedKey) {
      return
    }
    const timer = setTimeout(() => setCopiedKey(null), COPY_FEEDBACK_MS)
    return () => clearTimeout(timer)
  }, [copiedKey])

  useEffect(() => {
    if (!copyFailed) {
      return
    }
    const timer = setTimeout(() => setCopyFailed(false), COPY_FEEDBACK_MS)
    return () => clearTimeout(timer)
  }, [copyFailed])

  const hasEdit = actions.some((action) => action.type === "edit")
  const hasRequestChange = actions.some(
    (action) => action.type === "request-change"
  )

  useEffect(() => {
    if (hasEdit && hasRequestChange) {
      console.warn(
        'F0InputField: "edit" and "request-change" are mutually exclusive on one field. A pencil promises the click lets you type; a comment promises somebody else decides. Pick the one that is true.'
      )
    }
  }, [hasEdit, hasRequestChange])

  useEffect(() => {
    if (actions.length > INPUTFIELD_MAX_ACTIONS) {
      console.warn(
        `F0InputField: ${actions.length} actions passed, ${INPUTFIELD_MAX_ACTIONS} is the maximum. Beyond that the trailing buttons crowd out the value.`
      )
    }
  }, [actions.length])

  const handleCopy = async (key: string, text: string) => {
    const copied = await copyToClipboard(text)
    if (copied) {
      setCopyFailed(false)
      setCopiedKey(key)
    } else {
      setCopiedKey(null)
      setCopyFailed(true)
    }
  }

  const resolved: ResolvedAction[] = actions.map((action, index) => {
    const key = `${action.type}-${index}`

    switch (action.type) {
      case "custom":
        return {
          key,
          icon: action.icon,
          label: action.label,
          tone: action.tone ?? "default",
          disabled: action.disabled,
          onClick: action.onClick,
        }
      case "copy": {
        const copied = copiedKey === key
        return {
          key,
          icon: copied ? CheckCircle : LayersFront,
          label: copied
            ? i18n.inputs.actions.copied
            : (action.label ?? i18n.t("inputs.actions.copy", { label })),
          tone: copied ? "positive" : "default",
          disabled: action.disabled,
          onClick: () => {
            void handleCopy(key, action.text ?? value ?? "")
          },
        }
      }
      case "visibility": {
        const [revealLabel, maskLabel] = action.label ?? [
          i18n.t("inputs.private.show", { label }),
          i18n.t("inputs.private.hide", { label }),
        ]
        return {
          key,
          icon: revealed ? EyeVisible : EyeInvisible,
          label: revealed ? maskLabel : revealLabel,
          tone: "default",
          disabled: action.disabled,
          onClick: () => onRevealedChange(!revealed),
        }
      }
      case "edit":
        return {
          key,
          icon: Pencil,
          label: action.label ?? i18n.t("inputs.actions.edit", { label }),
          tone: "default",
          disabled: action.disabled,
          onClick: action.onClick,
        }
      case "request-change":
        return {
          key,
          icon: Comment,
          label:
            action.label ?? i18n.t("inputs.actions.requestChange", { label }),
          tone: "default",
          disabled: action.disabled,
          onClick: action.onClick,
        }
    }
  })

  const positiveAction = resolved.find((action) => action.tone === "positive")

  useEffect(() => {
    onConfirmingChange(!!positiveAction)
  }, [!!positiveAction, onConfirmingChange]) // eslint-disable-line react-hooks/exhaustive-deps

  // A hover reveal has no way in on a touch screen, where hover never fires:
  // there the actions stay put.
  const hidesUntilHover =
    visibility === "hover" && !isTouchScreen && !positiveAction

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
      {resolved.map((action) => (
        <span
          key={action.key}
          // The positive tint has to land inside the button: the button's own
          // variant sets `text-f1-foreground`, so a colour set on this wrapper
          // would never reach the glyph.
          className={cn(
            action.tone === "positive" && "[&_svg]:text-f1-icon-positive"
          )}
        >
          <F0Button
            variant="ghost"
            size="sm"
            hideLabel
            icon={action.icon}
            label={action.label}
            disabled={disabled || action.disabled}
            onClick={(event) => {
              // The field's content area has its own click handler
              // (`onClickContent`), which would otherwise fire alongside.
              event.stopPropagation()
              action.onClick(event)
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
        {copyFailed ? i18n.inputs.actions.copyFailed : positiveAction?.label}
      </span>
    </div>
  )
}
