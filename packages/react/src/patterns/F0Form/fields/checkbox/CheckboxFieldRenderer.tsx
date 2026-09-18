import { ControllerRenderProps } from "react-hook-form"
import { ZodTypeAny } from "zod"
import { F0Checkbox } from "@/components/F0Checkbox"
import { isZodType, unwrapZodSchema } from "../../f0Schema"
import type { InlineEditing } from "../inline/useInlineField"
import type { ResolvedField } from "../types"
import type { F0CheckboxField } from "./types"

interface CheckboxFieldRendererProps {
  field: ResolvedField<F0CheckboxField>
  formField: ControllerRenderProps
  /** Changes toggle presentation only; toggles have no edit mode. */
  inline?: InlineEditing
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
  inline,
}: CheckboxFieldRendererProps) {
  // Checkbox is "required" only if it must be true (z.literal(true))
  const isRequired = field.validation && isMustBeTrue(field.validation)

  const shared = {
    ...formField,
    title: field.label,
    disabled: field.disabled,
    required: isRequired,
    checked: Boolean(formField.value),
    onCheckedChange: formField.onChange,
  }

  if (inline) {
    return <F0Checkbox {...shared} variant="inline" hideLabel />
  }

  return <F0Checkbox {...shared} />
}
