import { useMemo } from "react"
import { useFormContext } from "react-hook-form"

import {
  CardSelectableContainer,
  type CardSelectableItem,
} from "@/experimental/Forms/CardSelectable"
import type { F0SwitchField } from "../fields/switch/types"
import { evaluateRenderIf } from "../fields/utils"

interface SwitchGroupRendererProps {
  fields: F0SwitchField[]
  /** Section ID when group is inside a section (for anchor links) */
  sectionId?: string
}

/**
 * SwitchGroupRenderer renders multiple switch fields in a bordered container
 * using CardSelectableContainer with toggle indicators.
 */
export function SwitchGroupRenderer({ fields }: SwitchGroupRendererProps) {
  const form = useFormContext()
  const { watch, setValue } = form
  const values = watch()

  // Filter fields based on renderIf conditions
  const visibleFields = useMemo(
    () =>
      fields.filter(
        (field) => !field.renderIf || evaluateRenderIf(field.renderIf, values)
      ),
    [fields, values]
  )

  // Convert fields to CardSelectableItem format
  const items: CardSelectableItem<string>[] = useMemo(
    () =>
      visibleFields.map((field) => ({
        value: field.id,
        title: field.label,
        description: field.helpText,
        disabled: field.disabled,
      })),
    [visibleFields]
  )

  // Get currently selected field IDs (fields with true value)
  const selectedIds = useMemo(
    () => visibleFields.filter((field) => values[field.id]).map((f) => f.id),
    [visibleFields, values]
  )

  if (visibleFields.length === 0) {
    return null
  }

  const handleChange = (newSelectedIds: string[]) => {
    // Update each field's value based on whether it's in the selected list
    for (const field of visibleFields) {
      const isSelected = newSelectedIds.includes(field.id)
      const currentValue = Boolean(values[field.id])
      if (isSelected !== currentValue) {
        setValue(field.id, isSelected, { shouldValidate: true })
      }
    }
  }

  return (
    <CardSelectableContainer
      multiple
      isToggle
      grouped
      items={items}
      value={selectedIds}
      onChange={handleChange}
    />
  )
}
