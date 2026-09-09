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

export const inputFieldActionsVisibility = ["always", "hover"] as const
export type InputFieldActionsVisibility =
  (typeof inputFieldActionsVisibility)[number]

/**
 * The trailing controls a value can carry, drawn by the design system.
 *
 * Deliberately a closed set of flags and callbacks rather than a list of
 * actions: the glyph, the order, the accessible name and the confirmation for
 * each job belong to the design system, so the same job looks and reads the
 * same in every input. There is no slot for an arbitrary icon.
 *
 * Every writable F0 input accepts these, whatever it edits. Order is fixed:
 * `[edit | confirmed tick] [eye] [comment] [copy]`.
 */
export type InputFieldValueActions = {
  /**
   * A copy button. Copies the field's current value and confirms with a
   * positive tick, but only once the clipboard write actually succeeded.
   */
  copyable?: boolean
  /**
   * Renders the value masked, with an eye to reveal it. On an `<input>` the
   * mask is a real password field; on any other editable child the displayed
   * value is replaced with dots.
   */
  masked?: boolean
  /**
   * A pencil. Present means the button shows; the field does not become
   * editable on its own — the consumer flips `readonly` off in response.
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
   * `"hover"` fades the controls in on hover or focus-within, and holds them
   * while one has focus or is confirming. Touch screens, where hover never
   * fires, always get `"always"`.
   * @default "always"
   */
  actionsVisibility?: InputFieldActionsVisibility
  /**
   * Flashes the field positive and turns the pencil into a tick, to confirm a
   * value just committed. The consumer holds it true for the length of the
   * confirmation; the copy button confirms itself and needs nothing here.
   */
  confirmed?: boolean
}
