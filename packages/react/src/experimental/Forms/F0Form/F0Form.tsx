import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, Path, useForm } from "react-hook-form"

import { F0Button } from "@/components/F0Button"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import { GroupRenderer } from "./components/GroupRenderer"
import { SectionRenderer } from "./components/SectionRenderer"
import { SwitchGroupRenderer } from "./components/SwitchGroupRenderer"
import { FIELD_GAP } from "./constants"
import { FieldRenderer } from "./fields/FieldRenderer"
import type { SwitchFieldDefinition } from "./fields/switch/types"
import type {
  F0FormProps,
  FieldItem,
  FormDefinitionItem,
  GroupDefinition,
  SectionDefinition,
} from "./types"
import { useFormDefinitionSchema } from "./useFormDefinitionSchema"

type GroupedItem =
  | { type: "field"; item: FieldItem }
  | { type: "group"; item: GroupDefinition; index: number }
  | { type: "section"; item: SectionDefinition }
  | { type: "switchGroup"; fields: SwitchFieldDefinition[] }

/**
 * Groups contiguous switch fields together for rendering in a bordered container
 */
function groupContiguousSwitches(
  definition: FormDefinitionItem[]
): GroupedItem[] {
  const result: GroupedItem[] = []
  let currentSwitchGroup: SwitchFieldDefinition[] = []

  const flushSwitchGroup = () => {
    if (currentSwitchGroup.length > 0) {
      result.push({ type: "switchGroup", fields: [...currentSwitchGroup] })
      currentSwitchGroup = []
    }
  }

  definition.forEach((item, index) => {
    if (item.type === "field" && item.field.type === "switch") {
      currentSwitchGroup.push(item.field as SwitchFieldDefinition)
    } else {
      flushSwitchGroup()
      if (item.type === "field") {
        result.push({ type: "field", item })
      } else if (item.type === "group") {
        result.push({ type: "group", item, index })
      } else if (item.type === "section") {
        result.push({ type: "section", item })
      }
    }
  })

  flushSwitchGroup()
  return result
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

  // Group contiguous switch fields
  const groupedItems = groupContiguousSwitches(definition)

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(`flex flex-col ${FIELD_GAP}`, className)}
      >
        {/* Root error message */}
        {rootError && (
          <p className="text-sm font-medium text-f1-foreground-critical">
            {rootError.message}
          </p>
        )}

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
            case "group":
              return (
                <GroupRenderer
                  key={`group-${groupedItem.index}`}
                  group={groupedItem.item.group}
                />
              )
            case "section":
              return (
                <SectionRenderer
                  key={groupedItem.item.id}
                  section={groupedItem.item}
                />
              )
            default:
              return null
          }
        })}

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
