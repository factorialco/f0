import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { F0Icon } from "../components/F0Icon"
import { AlertCircle } from "../icons/app"
import { useI18n } from "../lib/providers/i18n/i18n-provider"
import { cn } from "../lib/utils"
import { Label } from "./label"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  const { formState } = useFormContext()

  // Honor an explicit `disabled` prop from the caller; otherwise fall back
  // to disabling while the form is submitting. This lets callers (e.g.
  // F0Form's autosubmit mode) opt out of the submitting-disabled behavior
  // by passing `disabled={false}` explicitly — otherwise the active input
  // would be blurred mid-typing during a silent autosave.
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        {...props}
        disabled={props.disabled ?? formState.isSubmitting}
      />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const {
    id,
    hasDescription,
    registerDescription,
    hasMessage,
    registerMessage,
  } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    hasDescription,
    registerDescription,
    hasMessage,
    registerMessage,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
  /**
   * Whether a `FormDescription` / `FormMessage` is actually mounted in this
   * item. `FormControl` used to reference both ids unconditionally, but both
   * render conditionally (`FormDescription` only with `helpText`,
   * `FormMessage` returns null with no body), so every field without help text
   * shipped an `aria-describedby` pointing at a nonexistent element — a
   * WCAG 2.0 SC 1.3.1 / 4.1.2 defect that axe only reports as *incomplete*
   * (`aria-valid-attr-value`), so CI never caught it.
   */
  hasDescription: boolean
  registerDescription: (present: boolean) => void
  hasMessage: boolean
  registerMessage: (present: boolean) => void
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()
  const [hasDescription, registerDescription] = React.useState(false)
  const [hasMessage, registerMessage] = React.useState(false)

  const value = React.useMemo(
    () => ({
      id,
      hasDescription,
      registerDescription,
      hasMessage,
      registerMessage,
    }),
    [id, hasDescription, hasMessage]
  )

  return (
    <FormItemContext.Provider value={value}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-f1-foreground-critical", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const {
    error,
    formItemId,
    formDescriptionId,
    formMessageId,
    hasDescription,
    hasMessage,
  } = useFormField()

  // Only reference ids that are actually in the DOM — see the note on
  // `FormItemContextValue`. Omit the attribute entirely when neither is.
  const describedBy =
    [hasDescription && formDescriptionId, hasMessage && formMessageId]
      .filter(Boolean)
      .join(" ") || undefined

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={describedBy}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId, registerDescription } = useFormField()

  React.useEffect(() => {
    registerDescription?.(true)
    return () => registerDescription?.(false)
  }, [registerDescription])

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-base text-f1-foreground-secondary", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

interface FormMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Fallback message when error exists but has no message */
  fallback?: string
}

const FormMessage = React.forwardRef<HTMLDivElement, FormMessageProps>(
  ({ className, children, fallback, ...props }, ref) => {
    const { error, formMessageId, registerMessage } = useFormField()
    const { forms } = useI18n()
    // Use fallback message when error exists but message is undefined
    const body = error
      ? (error.message ?? fallback ?? forms.validation.invalidType)
      : children

    // Registered from the rendered/not-rendered outcome, not from mounting —
    // this component returns null whenever `body` is empty.
    const present = !!body
    React.useEffect(() => {
      registerMessage?.(present)
      return () => registerMessage?.(false)
    }, [registerMessage, present])

    if (!body) {
      return null
    }

    return (
      <div
        ref={ref}
        id={formMessageId}
        className={cn("flex gap-1", className)}
        {...props}
      >
        <F0Icon icon={AlertCircle} color="critical" />
        <span className="text-base font-medium text-f1-foreground-critical">
          {body}
        </span>
      </div>
    )
  }
)
FormMessage.displayName = "FormMessage"

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
}
