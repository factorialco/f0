import { F0Button } from "@/components/F0Button"
import { Form as FormProvider } from "@/ui/form"

import { FormType, InferSchema, SchemaType } from "../lib/useForm"

function _Form<
  Schema extends SchemaType,
  FormData extends InferSchema<Schema>,
>({
  onSubmit,
  children,
  ...form
}: {
  children: React.ReactNode
} & FormType<Schema, FormData>) {
  const rootError = form.formState.errors.root

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className={"flex flex-col gap-4"}>
        {rootError && (
          <p className="text-sm font-medium text-f1-foreground-critical">
            {rootError.message}
          </p>
        )}
        {children}
      </form>
    </FormProvider>
  )
}

/**
 * @deprecated DONT USE THIS COMPONENT
 */
export const Form = _Form

function _FormActions<
  Schema extends SchemaType,
  FormData extends InferSchema<Schema>,
>({
  submitLabel,
  form,
}: {
  submitLabel: string
  form: FormType<Schema, FormData>
}) {
  return (
    <div>
      <F0Button
        type="submit"
        label={submitLabel}
        loading={form.formState.isSubmitting}
      />
    </div>
  )
}

/**
 * @deprecated DONT USE THIS COMPONENT
 */
export const FormActions = _FormActions
