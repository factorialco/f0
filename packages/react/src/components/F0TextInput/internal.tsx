import { ComponentProps, HTMLInputTypeAttribute, useMemo } from "react"
import { InputFieldAction, InputFieldProps } from "@/components/F0InputField"
import { LockLocked } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Input as ShadcnInput } from "@/ui/input"

export type InputInternalProps = Pick<
  ComponentProps<typeof ShadcnInput>,
  "ref" | "id" | "aria-describedby" | "aria-invalid"
> &
  Pick<
    InputFieldProps<string>,
    | "autoFocus"
    | "required"
    | "disabled"
    | "size"
    | "onChange"
    | "value"
    | "placeholder"
    | "clearable"
    | "maxLength"
    | "label"
    | "labelIcon"
    | "icon"
    | "hideLabel"
    | "name"
    | "error"
    | "status"
    | "hint"
    | "autocomplete"
    | "buttonToggle"
    | "hideMaxLength"
    | "loading"
    | "transparent"
    | "onBlur"
    | "onKeyDown"
    | "readonly"
    | "actions"
    | "actionsVisibility"
    | "onClickContent"
  > & {
    /**
     * `"private"` is a non-HTML subtype for sensitive, non-credential data:
     * masked like a password but with no lock icon and with password managers
     * disabled. It never reaches the DOM (mapped to text/password internally).
     */
    type?: Exclude<HTMLInputTypeAttribute, "number"> | "private"
    onPressEnter?: () => void
    /**
     * Fires on Escape. Pairs with `onPressEnter` for inline editing: Enter
     * commits, Escape reverts. Like `onPressEnter` it does not call
     * `preventDefault`.
     */
    onPressEscape?: () => void
  }

/**
 * Attributes that ask password managers (1Password, LastPass, Bitwarden) and
 * browser autofill to ignore the field — used by `type="private"` so sensitive
 * non-credential data is never captured or suggested.
 */
const passwordManagerAvoidance = {
  autoComplete: "off",
  "data-1p-ignore": true,
  "data-lpignore": "true",
  "data-form-type": "other",
  "data-bwignore": true,
}

const InputInternal = ({
  type,
  onPressEnter,
  onPressEscape,
  onKeyDown,
  actions,
  ...props
}: InputInternalProps) => {
  // `password` and `private` are both masked; the eye toggle flips them to
  // text. F0InputField owns that flip — it masks by forcing the child's
  // `type` — so here the field only declares the toggle and hands over the
  // unmasked type.
  const maskable = type === "password" || type === "private"

  const localType = maskable ? "text" : type

  const localIcon = useMemo(() => {
    // Only `password` forces the lock icon; `private` keeps the consumer's icon.
    return type === "password" ? LockLocked : props.icon
  }, [type, props.icon])

  const i18n = useI18n()

  const localActions: InputFieldAction[] | undefined = useMemo(() => {
    if (!maskable) {
      return actions
    }
    // A consumer-declared visibility action wins, so a private field never
    // grows a second eye.
    if (actions?.some((action) => action.type === "visibility")) {
      return actions
    }

    // `password` names the credential outright; `private` builds the name from
    // the field label so screen-reader users can tell multiple private fields
    // apart (e.g. "Show social security number"). The label feeds the button's
    // aria-label and title only — the button renders an icon, so there is no
    // visible-text change.
    const label: [string, string] =
      type === "password"
        ? [i18n.inputs.password.show, i18n.inputs.password.hide]
        : [
            i18n.t("inputs.private.show", { label: props.label }),
            i18n.t("inputs.private.hide", { label: props.label }),
          ]

    return [...(actions ?? []), { type: "visibility", label }]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maskable, type, actions, props.label])

  return (
    <ShadcnInput
      {...props}
      {...(type === "private" ? passwordManagerAvoidance : {})}
      type={localType}
      // Email addresses are case-insensitive, so normalise to lowercase as the
      // user types (lowercasing preserves length, so the caret doesn't jump).
      onChange={(value) =>
        props.onChange?.(type === "email" ? value.toLowerCase() : value)
      }
      onKeyDown={(event) => {
        onKeyDown?.(event)
        // A consumer that handled the key itself gets the last word: without
        // this, a component using `onKeyDown` to run its own Enter/Escape
        // logic would see the shortcut fire a second time.
        if (event.defaultPrevented) {
          return
        }
        if (event.key === "Enter") {
          onPressEnter?.()
        }
        if (event.key === "Escape") {
          onPressEscape?.()
        }
      }}
      icon={localIcon}
      actions={localActions}
    />
  )
}

export { InputInternal }
