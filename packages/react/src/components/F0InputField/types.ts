import { IconType } from "@/components/F0Icon"

export const inputFieldStatus = ["default", "warning", "info", "error"] as const
export type InputFieldStatusType = (typeof inputFieldStatus)[number]

export type InputFieldStatus =
  | {
      type: Exclude<InputFieldStatusType, "error">
      message?: string
    }
  | {
      type: "error"
      message?: string
    }

export const inputFieldActionTones = ["default", "positive"] as const
export type InputFieldActionTone = (typeof inputFieldActionTones)[number]

type InputFieldActionShared = {
  /**
   * Greys the button out and takes it out of the interaction. The field's own
   * `disabled` disables every action too; `readonly` does not — a value you
   * cannot type into is still one you can copy or ask about.
   */
  disabled?: boolean
}

export type InputFieldAction =
  /** Anything the field itself has no opinion about. */
  | (InputFieldActionShared & {
      type: "custom"
      icon: IconType
      /** The button's accessible name. Required — the button is icon-only. */
      label: string
      onClick: (event: React.MouseEvent) => void
      tone?: InputFieldActionTone
    })
  /**
   * Copies to the clipboard and confirms with a positive tick, but only once
   * the write actually succeeded.
   */
  | (InputFieldActionShared & {
      type: "copy"
      label?: string
      /** What to copy. Defaults to the field's current value. */
      text?: string
    })
  /**
   * Masks the value with dots and toggles it back. Supersedes the eye toggle
   * `F0TextInput type="password" | "private"` renders on its own: pass this
   * and the field renders one eye, not two.
   */
  | (InputFieldActionShared & {
      type: "visibility"
      /** `[show, hide]`. Defaults to "Show/Hide {label}". */
      label?: [string, string]
    })
  /**
   * A pencil. The field does not become editable on its own — the consumer
   * flips `readonly` off in response.
   */
  | (InputFieldActionShared & {
      type: "edit"
      label?: string
      onClick: () => void
    })
  /**
   * A comment glyph, for a value the viewer may read but not change: they say
   * something about it and somebody else decides. Never a pencil — a pencil
   * promises the click will let you type.
   */
  | (InputFieldActionShared & {
      type: "request-change"
      label?: string
      onClick: () => void
    })

export const inputFieldActionsVisibility = ["always", "hover"] as const
export type InputFieldActionsVisibility =
  (typeof inputFieldActionsVisibility)[number]

/**
 * Beyond this the trailing area starts competing with the value for the
 * field's width, and no row of icon-only buttons stays readable that long.
 */
export const INPUTFIELD_MAX_ACTIONS = 4
