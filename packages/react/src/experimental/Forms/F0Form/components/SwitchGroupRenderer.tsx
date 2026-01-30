import { useFormContext } from "react-hook-form"

import { Switch } from "../../Fields/Switch"
import { SWITCH_GROUP_PADDING } from "../constants"
import { generateAnchorId, useF0FormContext } from "../context"
import type { F0SwitchField } from "../fields/switch/types"
import { evaluateRenderIf } from "../fields/utils"

interface SwitchGroupRendererProps {
  fields: F0SwitchField[]
  /** Section ID when group is inside a section (for anchor links) */
  sectionId?: string
}

interface SwitchFieldItemProps {
  field: F0SwitchField
  isLast: boolean
  /** Section ID when field is inside a section (for anchor links) */
  sectionId?: string
}

/**
 * Renders a single switch field with label and description on the left,
 * switch toggle on the right
 */
function SwitchFieldItem({ field, isLast, sectionId }: SwitchFieldItemProps) {
  const form = useFormContext()
  const { watch } = form
  const values = watch()
  const { formName } = useF0FormContext()

  // Check if field should be rendered based on renderIf condition
  if (field.renderIf && !evaluateRenderIf(field.renderIf, values)) {
    return null
  }

  const fieldState = form.getFieldState(field.id)
  const fieldValue = watch(field.id)

  // Generate anchor ID for the field
  const anchorId = generateAnchorId(formName, sectionId, field.id)

  return (
    <div
      id={anchorId}
      className={`flex items-start justify-between scroll-mt-4 ${SWITCH_GROUP_PADDING} ${
        !isLast
          ? "border-0 border-b border-solid border-f1-border-secondary"
          : ""
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
          <p className="text-base text-f1-foreground-secondary">
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
export function SwitchGroupRenderer({
  fields,
  sectionId,
}: SwitchGroupRendererProps) {
  if (fields.length === 0) {
    return null
  }

  return (
    <div className="rounded-lg border border-solid border-f1-border-secondary">
      {fields.map((field, index) => (
        <SwitchFieldItem
          key={field.id}
          field={field}
          isLast={index === fields.length - 1}
          sectionId={sectionId}
        />
      ))}
    </div>
  )
}
