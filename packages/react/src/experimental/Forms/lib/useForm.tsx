import { zodResolver } from "@hookform/resolvers/zod"
import {
  FieldValues,
  Path,
  useForm,
  UseFormHandleSubmit,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form"
import { z, ZodType } from "zod"

export { useForm }
export type SchemaType = ZodType
export type InferSchema<T extends SchemaType> = z.infer<T>

type Success = {
  success: true
  rootMessage?: never
  errors?: never
}

type FormError<Fields extends FieldValues> = {
  success: false
  rootMessage?: string
  errors: Partial<Record<Path<Fields>, string>>
}

type OnSubmitHandler<
  TFieldValues extends FieldValues,
  TTransformedValues extends FieldValues | undefined = undefined,
> = (
  data: ReturnType<UseFormHandleSubmit<TFieldValues, TTransformedValues>>
) =>
  | Promise<Success | FormError<TFieldValues>>
  | Success
  | FormError<TFieldValues>

export type FormType<
  T extends SchemaType,
  FormType extends InferSchema<T>,
> = UseFormReturn<FormType, unknown, undefined> & {
  onSubmit: ReturnType<UseFormHandleSubmit<FormType>>
}

export function useFormSchema<
  Schema extends SchemaType,
  FormData extends InferSchema<Schema>,
>(
  schema: Schema,
  options: UseFormProps<FormData>,
  onSubmit: OnSubmitHandler<FormData>
): FormType<Schema, FormData> {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    ...options,
  })

  const handleSubmit = async (data: FormData) => {
    const status = await onSubmit(data)

    if (!status.success) {
      Object.keys(status.errors).map((error) => {
        form.setError(error as Path<FormData>, {
          message: status.errors[error as keyof FormData],
        })
      })

      if (status.rootMessage) {
        form.setError("root", {
          message: status.rootMessage,
        })
      }
    }
  }

  return {
    ...form,
    onSubmit: form.handleSubmit(handleSubmit),
  }
}
