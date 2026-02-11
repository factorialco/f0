import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { ZodTypeAny } from "zod"

import { F0Checkbox } from "@/components/F0Checkbox"

import { isZodType, unwrapZodSchema } from "../../f0Schema"
import type { F0CheckboxField } from "./types"

interface CheckboxFieldRendererProps {
  field: F0CheckboxField
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Check if a checkbox schema requires the value to be `true`.
 * This is the case for z.literal(true) schemas.
 */
function isMustBeTrue(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  return isZodType(inner, "ZodLiteral") && inner._def.value === true
}

/**
 * Renders a checkbox field
 */
export function CheckboxFieldRenderer({
  field,
  formField,
}: CheckboxFieldRendererProps) {
  // Checkbox is "required" only if it must be true (z.literal(true))
  const isRequired = field.validation && isMustBeTrue(field.validation)

  return (
    <F0Checkbox
      title={field.label}
      disabled={field.disabled}
      required={isRequired}
      {...formField}
      checked={Boolean(formField.value)}
      onCheckedChange={formField.onChange}
    />
  )
}
