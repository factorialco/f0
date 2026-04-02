import React, { useEffect, useMemo, useRef } from "react"
import { useFormContext } from "react-hook-form"
import { ZodTypeAny } from "zod"

import { F0Alert } from "@/components/F0Alert"
import {
  CardSelectableContainer,
  type CardSelectableItem,
} from "@/experimental/Forms/CardSelectable"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import {
  FormField as FormFieldPrimitive,
  FormItem,
  FormMessage,
} from "@/ui/form"

import type { F0FieldAlertProps } from "../f0Schema"
import type { F0SwitchField } from "../fields/switch/types"
import type { F0Field } from "../fields/types"
import type { RowDefinition } from "../types"

import { generateAnchorId, useF0FormContext } from "../context"
import { isZodType, unwrapZodSchema } from "../f0Schema"
import { CardSelectDepsContext } from "../fields/cardSelect/CardSelectDepsContext"
import { FieldRenderer } from "../fields/FieldRenderer"
import { evaluateDisabled, evaluateRenderIf } from "../fields/utils"
import { RowRenderer } from "./RowRenderer"

/**
 * Check if a switch schema requires the value to be `true`.
 * This is the case for z.literal(true) schemas.
 */
function isMustBeTrue(schema: ZodTypeAny): boolean {
  const inner = unwrapZodSchema(schema)
  return isZodType(inner, "ZodLiteral") && inner._def.value === true
}

interface SwitchGroupRendererProps {
  fields: F0SwitchField[]
  /** Fields that depend on a switch in this group (renders inside the card) */
  dependentFields?: Map<string, (F0Field | RowDefinition)[]>
  /** Fields that depend on a cardSelect within this group, keyed by cardSelect ID then equalsTo value */
  cardSelectDependentFields?: Map<
    string,
    Map<string, (F0Field | RowDefinition)[]>
  >
  /** Section ID when group is inside a section (for anchor links) */
  sectionId?: string
}

/**
 * SwitchGroupRenderer renders multiple switch fields in a bordered container
 * using CardSelectableContainer with toggle indicators.
 */
export function SwitchGroupRenderer({
  fields,
  dependentFields,
  cardSelectDependentFields,
  sectionId,
}: SwitchGroupRendererProps) {
  const form = useFormContext()
  const { formName } = useF0FormContext()
  const { watch, setValue } = form
  const { isSubmitting } = form.formState
  const values = watch()

  // Filter fields based on renderIf conditions
  const visibleFields = useMemo(
    () =>
      fields.filter(
        (field) => !field.renderIf || evaluateRenderIf(field.renderIf, values)
      ),
    [fields, values]
  )

  // Calculate disabled state for each field
  const disabledStates = useMemo(
    () =>
      Object.fromEntries(
        visibleFields.map((field) => [
          field.id,
          evaluateDisabled(field.disabled, values) || isSubmitting,
        ])
      ),
    [visibleFields, isSubmitting, values]
  )

  // Track previous disabled states to detect transitions
  // Initialize with empty object so first render doesn't trigger resets
  const prevDisabledStatesRef = useRef<Record<string, boolean>>({})

  // Reset fields to default value when they become disabled (if resetOnDisable is true)
  useEffect(() => {
    const prevStates = prevDisabledStatesRef.current
    const defaultValues = form.formState.defaultValues ?? {}

    for (const field of visibleFields) {
      // Skip if we don't have a previous state (first render)
      if (!(field.id in prevStates)) {
        continue
      }

      const wasDisabled = prevStates[field.id]
      const isDisabled = disabledStates[field.id] ?? false

      // Only reset when transitioning from enabled to disabled
      if (!wasDisabled && isDisabled && field.resetOnDisable) {
        // Use setValue with the default value for immediate update
        const defaultValue = defaultValues[field.id] ?? false
        setValue(field.id, defaultValue, { shouldValidate: false })
      }
    }

    // Update ref after processing
    prevDisabledStatesRef.current = { ...disabledStates }
  }, [disabledStates, visibleFields, form, setValue])

  // Convert fields to CardSelectableItem format
  const items: CardSelectableItem<string>[] = useMemo(
    () =>
      visibleFields.map((field) => ({
        value: field.id,
        title: field.label,
        description: field.helpText,
        disabled: disabledStates[field.id] ?? false,
        required: !!(field.validation && isMustBeTrue(field.validation)),
        moreInfoLink: field.moreInfoLink,
        selectedContent: dependentFields?.has(field.id) ? (
          <div className="flex flex-col gap-4">
            {dependentFields.get(field.id)!.map((dep) => {
              if ("type" in dep && dep.type === "row") {
                return (
                  <RowRenderer
                    key={dep.fields.map((f) => f.id).join("-")}
                    row={dep}
                    sectionId={sectionId}
                  />
                )
              }
              const f = dep as F0Field
              // Wrap cardSelect fields with pre-rendered dependent content via context
              if (
                f.type === "cardSelect" &&
                cardSelectDependentFields?.has(f.id)
              ) {
                const valueMap = cardSelectDependentFields.get(f.id)!
                const contentMap = new Map<string, React.ReactNode>()
                for (const [equalsTo, deps] of valueMap) {
                  contentMap.set(
                    equalsTo,
                    <div key={equalsTo} className="flex flex-col gap-4">
                      {deps.map((innerDep) =>
                        "type" in innerDep && innerDep.type === "row" ? (
                          <RowRenderer
                            key={innerDep.fields.map((fd) => fd.id).join("-")}
                            row={innerDep}
                            sectionId={sectionId}
                          />
                        ) : (
                          <FieldRenderer
                            key={(innerDep as F0Field).id}
                            field={innerDep as F0Field}
                            sectionId={sectionId}
                          />
                        )
                      )}
                    </div>
                  )
                }
                return (
                  <CardSelectDepsContext.Provider key={f.id} value={contentMap}>
                    <FieldRenderer field={f} sectionId={sectionId} />
                  </CardSelectDepsContext.Provider>
                )
              }
              return (
                <FieldRenderer key={f.id} field={f} sectionId={sectionId} />
              )
            })}
          </div>
        ) : undefined,
      })),
    [
      visibleFields,
      disabledStates,
      dependentFields,
      cardSelectDependentFields,
      sectionId,
    ]
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
        setValue(field.id, isSelected, {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
    }
  }

  const alerts = useMemo(() => {
    const result: { fieldId: string; props: F0FieldAlertProps }[] = []
    for (const field of visibleFields) {
      if (!field.alert) continue
      const alertProps =
        typeof field.alert === "function"
          ? field.alert({ fieldValue: values[field.id], values })
          : field.alert
      if (alertProps) {
        result.push({ fieldId: field.id, props: alertProps })
      }
    }
    return result
  }, [visibleFields, values])

  const { forms } = useI18n()

  // Get error messages for required fields in the group
  const groupErrors = visibleFields
    .filter((field) => field.validation && isMustBeTrue(field.validation))
    .map((field) => {
      const error = form.formState.errors[field.id]
      return error
        ? { fieldId: field.id, label: field.label, message: error.message }
        : null
    })
    .filter(
      (
        e
      ): e is { fieldId: string; label: string; message: string | undefined } =>
        e !== null
    )

  // Generate anchor IDs for error navigation
  const fieldAnchorIds = useMemo(
    () =>
      visibleFields.map((field) => ({
        fieldId: field.id,
        anchorId: generateAnchorId(formName, sectionId, field.id),
      })),
    [visibleFields, formName, sectionId]
  )

  return (
    <div className="flex flex-col gap-2">
      {/* First field's anchor wraps the container for wiggle animation */}
      <div
        id={fieldAnchorIds[0]?.anchorId}
        className="flex scroll-mt-4 flex-col gap-4"
      >
        {/* Additional field anchors so error navigation can find each field */}
        {fieldAnchorIds.slice(1).map(({ fieldId, anchorId }) => (
          <span key={fieldId} id={anchorId} className="hidden" />
        ))}
        <CardSelectableContainer
          multiple
          isToggle
          grouped
          items={items}
          value={selectedIds}
          onChange={handleChange}
        />
        {alerts.map(({ fieldId, props }) => (
          <F0Alert key={fieldId} {...props} variant={props.variant ?? "info"} />
        ))}
      </div>
      {groupErrors.length > 0 && (
        <div className="flex flex-col gap-1">
          {groupErrors.map((error) => (
            <FormFieldPrimitive
              key={error.fieldId}
              control={form.control}
              name={error.fieldId}
              render={() => (
                <FormItem>
                  <FormMessage fallback={forms.validation.required} />
                </FormItem>
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
