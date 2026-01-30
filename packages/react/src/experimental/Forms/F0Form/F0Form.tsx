import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo } from "react"
import { DefaultValues, Path, useForm } from "react-hook-form"
import { z, ZodRawShape } from "zod"

import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import { RowRenderer } from "./components/RowRenderer"
import { SectionRenderer } from "./components/SectionRenderer"
import { SwitchGroupRenderer } from "./components/SwitchGroupRenderer"
import { FIELD_GAP, SECTION_MARGIN } from "./constants"
import { F0FormContext } from "./context"
import { FieldRenderer } from "./fields/FieldRenderer"
import type { F0SwitchField } from "./fields/switch/types"
import type {
  F0FormProps,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  SectionDefinition,
} from "./types"
import { useSchemaDefinition } from "./useSchemaDefinition"

type GroupedItem =
  | { type: "field"; item: FieldItem }
  | { type: "row"; item: RowDefinition; index: number }
  | { type: "section"; item: SectionDefinition }
  | { type: "switchGroup"; fields: F0SwitchField[] }

/**
 * Groups contiguous switch fields together for rendering in a bordered container
 */
function groupContiguousSwitches(
  definition: FormDefinitionItem[]
): GroupedItem[] {
  const result: GroupedItem[] = []
  let currentSwitchGroup: F0SwitchField[] = []

  const flushSwitchGroup = () => {
    if (currentSwitchGroup.length > 0) {
      result.push({ type: "switchGroup", fields: [...currentSwitchGroup] })
      currentSwitchGroup = []
    }
  }

  definition.forEach((item, index) => {
    if (item.type === "field" && item.field.type === "switch") {
      currentSwitchGroup.push(item.field as F0SwitchField)
    } else {
      flushSwitchGroup()
      if (item.type === "field") {
        result.push({ type: "field", item })
      } else if (item.type === "row") {
        result.push({ type: "row", item, index })
      } else if (item.type === "section") {
        result.push({ type: "section", item })
      }
    }
  })

  flushSwitchGroup()
  return result
}

/**
 * F0Form - A declarative form component that generates forms from a Zod schema.
 *
 * Features:
 * - Schema-based form definition with embedded field metadata
 * - Automatic Zod schema validation
 * - Conditional rendering support (renderIf)
 * - Integration with react-hook-form
 * - Section and row grouping support
 *
 * @example
 * ```tsx
 * import { z } from "zod"
 * import { f0, F0Form } from "@factorialco/factorial-one/experimental"
 *
 * const formSchema = z.object({
 *   firstName: f0(z.string().min(1), {
 *     label: "First Name",
 *     section: "personal",
 *     position: 1,
 *     placeholder: "Enter first name"
 *   }),
 *   lastName: f0(z.string().min(1), {
 *     label: "Last Name",
 *     section: "personal",
 *     position: 2,
 *     row: "name-row" // Group with firstName horizontally
 *   }),
 *   email: f0(z.string().email(), {
 *     label: "Email",
 *     section: "contact",
 *     position: 1,
 *     inputType: "email"
 *   })
 * })
 *
 * <F0Form
 *   name="user-profile"
 *   schema={formSchema}
 *   sections={{
 *     personal: { title: "Personal Information", order: 1 },
 *     contact: { title: "Contact Details", order: 2 }
 *   }}
 *   defaultValues={{ firstName: "", lastName: "", email: "" }}
 *   onSubmit={async (data) => {
 *     console.log(data)
 *     return { success: true }
 *   }}
 * />
 * ```
 */
export function F0Form<TSchema extends z.ZodObject<ZodRawShape>>({
  name,
  schema,
  sections,
  defaultValues,
  onSubmit,
  submitLabel = "Submit",
  showSubmitButton = true,
  className,
}: F0FormProps<TSchema>) {
  // Infer the form values type from the schema
  type TValues = z.infer<TSchema>

  // Convert schema to internal definition structure for rendering
  const definition = useSchemaDefinition(schema, sections)

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

  // Group contiguous switch fields
  const groupedItems = groupContiguousSwitches(definition)

  // Context value for anchor links
  const contextValue = useMemo(() => ({ formName: name }), [name])

  return (
    <F0FormContext.Provider value={contextValue}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={cn(`flex flex-col ${FIELD_GAP}`, className)}
        >
          {/* Render definition items with switch grouping */}
          {groupedItems.map((groupedItem, index) => {
            switch (groupedItem.type) {
              case "switchGroup":
                return (
                  <SwitchGroupRenderer
                    key={`switch-group-${index}`}
                    fields={groupedItem.fields}
                  />
                )
              case "field":
                return (
                  <FieldRenderer
                    key={groupedItem.item.field.id}
                    field={groupedItem.item.field}
                  />
                )
              case "row":
                return (
                  <RowRenderer
                    key={`row-${groupedItem.index}`}
                    row={groupedItem.item}
                  />
                )
              case "section":
                return (
                  <div
                    key={groupedItem.item.id}
                    className={index !== 0 ? SECTION_MARGIN : ""}
                  >
                    <SectionRenderer section={groupedItem.item} />
                  </div>
                )
              default:
                return null
            }
          })}

          {/* Root error message */}
          {rootError && (
            <p className="text-base font-medium text-f1-foreground-critical">
              {rootError.message}
            </p>
          )}

          {/* Submit button */}
          {showSubmitButton && (
            <F0Button
              type="submit"
              label={submitLabel}
              loading={form.formState.isSubmitting}
            />
          )}
        </form>
      </FormProvider>
    </F0FormContext.Provider>
  )
}
