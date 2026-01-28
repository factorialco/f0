import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, Path, useForm } from "react-hook-form"

import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import { GroupRenderer } from "./components/GroupRenderer"
import { SectionRenderer } from "./components/SectionRenderer"
import { FieldRenderer } from "./fields/FieldRenderer"
import type { F0FormProps, FormDefinitionItem } from "./types"
import { useFormDefinitionSchema } from "./useFormDefinitionSchema"

interface DefinitionItemRendererProps {
  item: FormDefinitionItem
  index: number
}

/**
 * Renders a single definition item (field, group, or section)
 */
function DefinitionItemRenderer({ item, index }: DefinitionItemRendererProps) {
  switch (item.type) {
    case "field":
      return <FieldRenderer key={item.field.id} field={item.field} />
    case "group":
      return <GroupRenderer key={`group-${index}`} group={item.group} />
    case "section":
      return <SectionRenderer key={item.id} section={item} />
    default:
      return null
  }
}

/**
 * F0Form - A declarative form component that generates forms from a definition array.
 *
 * Features:
 * - Declarative form definition with fields, groups, and sections
 * - Automatic Zod schema generation from field validations
 * - Conditional rendering support (renderIf)
 * - Integration with react-hook-form
 *
 * @example
 * ```tsx
 * import { z } from "zod"
 * import { F0Form } from "@factorialco/factorial-one/experimental"
 *
 * const definition = [
 *   {
 *     type: "field",
 *     field: {
 *       id: "name",
 *       type: "text",
 *       label: "Name",
 *       validation: z.string().min(2),
 *       helpText: "Enter your full name"
 *     }
 *   },
 *   {
 *     type: "group",
 *     group: {
 *       direction: "row",
 *       fields: [
 *         { id: "email", type: "text", inputType: "email", label: "Email" },
 *         { id: "phone", type: "text", inputType: "tel", label: "Phone" }
 *       ]
 *     }
 *   },
 *   {
 *     type: "section",
 *     id: "preferences",
 *     section: {
 *       title: "Preferences",
 *       description: "Configure your preferences",
 *       renderIf: (values) => values.name !== "",
 *       fields: [
 *         { type: "field", field: { id: "newsletter", type: "checkbox", label: "Subscribe to newsletter" } }
 *       ]
 *     }
 *   }
 * ]
 *
 * <F0Form
 *   definition={definition}
 *   defaultValues={{ name: "", email: "", phone: "", newsletter: false }}
 *   onSubmit={async (data) => {
 *     console.log(data)
 *     return { success: true }
 *   }}
 * />
 * ```
 */
export function F0Form<TValues extends Record<string, unknown>>({
  definition,
  defaultValues,
  onSubmit,
  submitLabel = "Submit",
  showSubmitButton = true,
  className,
  children,
}: F0FormProps<TValues>) {
  // Generate schema from definition
  const schema = useFormDefinitionSchema(definition)

  // Initialize form with react-hook-form
  const form = useForm<TValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues as DefaultValues<TValues>,
  })

  const rootError = form.formState.errors.root

  // Handle form submission
  const handleSubmit = async (data: TValues) => {
    const result = await onSubmit(data)

    if (!result.success) {
      // Set field-specific errors
      if (result.errors) {
        Object.entries(result.errors).forEach(([field, message]) => {
          form.setError(field as Path<TValues>, { message })
        })
      }

      // Set root error if provided
      if (result.rootMessage) {
        form.setError("root", { message: result.rootMessage })
      }
    }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex flex-col gap-4", className)}
      >
        {/* Root error message */}
        {rootError && (
          <p className="text-sm font-medium text-f1-foreground-critical">
            {rootError.message}
          </p>
        )}

        {/* Render definition items */}
        {definition.map((item, index) => (
          <DefinitionItemRenderer key={index} item={item} index={index} />
        ))}

        {/* Custom children (e.g., additional actions) */}
        {children}

        {/* Submit button */}
        {showSubmitButton && (
          <div>
            <F0Button
              type="submit"
              label={submitLabel}
              loading={form.formState.isSubmitting}
            />
          </div>
        )}
      </form>
    </FormProvider>
  )
}
