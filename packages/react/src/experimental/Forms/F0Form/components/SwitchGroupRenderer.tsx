import { useFormContext } from "react-hook-form"

import { Switch } from "../../Fields/Switch"
import { SWITCH_GROUP_PADDING } from "../constants"
import type { SwitchFieldDefinition } from "../fields/switch/types"
import { evaluateRenderIf } from "../fields/utils"

interface SwitchGroupRendererProps {
  fields: SwitchFieldDefinition[]
}

interface SwitchFieldItemProps {
  field: SwitchFieldDefinition
  isLast: boolean
}

/**
 * Renders a single switch field with label and description on the left,
 * switch toggle on the right
 */
function SwitchFieldItem({ field, isLast }: SwitchFieldItemProps) {
  const form = useFormContext()
  const { watch } = form
  const values = watch()

  // Check if field should be rendered based on renderIf condition
  if (field.renderIf && !evaluateRenderIf(field.renderIf, values)) {
    return null
  }

  const fieldState = form.getFieldState(field.id)
  const fieldValue = watch(field.id)

  return (
    <div
      className={`flex items-start justify-between ${SWITCH_GROUP_PADDING} ${
        !isLast ? "border-b border-f1-border-secondary" : ""
      }`}
    >
      <div className="flex flex-col gap-1 pr-4">
        {/* Label: Inter 500, base size */}
        <label
          htmlFor={field.id}
          className="text-base font-medium leading-normal text-f1-foreground"
        >
          {field.label}
        </label>
        {field.helpText && (
          <p className="text-sm text-f1-foreground-secondary">
            {field.helpText}
          </p>
        )}
        {fieldState.error && (
          <p className="text-sm font-medium text-f1-foreground-critical">
            {fieldState.error.message}
          </p>
        )}
      </div>
      <Switch
        id={field.id}
        disabled={field.disabled}
        checked={Boolean(fieldValue)}
        onCheckedChange={(checked) => {
          form.setValue(field.id, checked, { shouldValidate: true })
        }}
        hideLabel
      />
    </div>
  )
}

/**
 * SwitchGroupRenderer renders multiple switch fields in a bordered container.
 * Each switch has its label and description on the left, toggle on the right.
 */
export function SwitchGroupRenderer({ fields }: SwitchGroupRendererProps) {
  if (fields.length === 0) {
    return null
  }

  return (
    <div className="rounded-lg border border-f1-border-secondary">
      {fields.map((field, index) => (
        <SwitchFieldItem
          key={field.id}
          field={field}
          isLast={index === fields.length - 1}
        />
      ))}
    </div>
  )
}
