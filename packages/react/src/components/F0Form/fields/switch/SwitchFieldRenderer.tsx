import { ControllerRenderProps, FieldValues } from "react-hook-form"
import { ZodTypeAny } from "zod"

import { Switch } from "@/experimental/Forms/Fields/Switch"

import { isZodType, unwrapZodSchema } from "../../f0Schema"
import type { F0SwitchField } from "./types"

interface SwitchFieldRendererProps {
  field: F0SwitchField
  formField: ControllerRenderProps<FieldValues>
}

/**
 * Check if a switch schema requires the value to be `true`.
 * This is the case for z.literal(true) schemas.
 */
function isMustBeTrue(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  return isZodType(inner, "ZodLiteral") && inner._def.value === true
}

/**
 * Renders a switch toggle field
 */
export function SwitchFieldRenderer({
  field,
  formField,
}: SwitchFieldRendererProps) {
  // Switch is "required" only if it must be true (z.literal(true))
  const isRequired = field.validation && isMustBeTrue(field.validation)

  return (
    <Switch
      title={field.label}
      disabled={field.disabled}
      required={isRequired}
      {...formField}
      checked={Boolean(formField.value)}
      onCheckedChange={formField.onChange}
      hideLabel
    />
  )
}
