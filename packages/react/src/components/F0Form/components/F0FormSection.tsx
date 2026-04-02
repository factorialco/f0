import { useCallback, useEffect, useMemo, useRef } from "react"
import { DefaultValues, Path, useForm } from "react-hook-form"
import { z } from "zod"

import { F0Button } from "@/components/F0Button"
import { SectionHeader } from "@/experimental/Information/Headers/SectionHeader"
import { Save } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import type { F0SwitchField } from "../fields/switch/types"
import type { F0Field } from "../fields/types"
import type {
  F0FormErrorTriggerMode,
  F0FormSchema,
  F0FormSubmitResult,
  F0PerSectionSectionConfig,
  F0PerSectionSubmitConfig,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  RenderCustomFieldFunction,
} from "../types"
import type { F0FormRef, F0FormStateCallback } from "../useF0Form"

import { createConditionalResolver } from "../conditionalResolver"
import { FIELD_GAP } from "../constants"
import { F0FormContext } from "../context"
import { FieldRenderer } from "../fields/FieldRenderer"
import { useSchemaDefinition } from "../useSchemaDefinition"
import { createZodErrorMap } from "../zodErrorMap"
import { RowRenderer } from "./RowRenderer"
import { SwitchGroupRenderer } from "./SwitchGroupRenderer"

const ERROR_TRIGGER_MODE_MAP = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit",
} as const

type GroupedItem =
  | { type: "field"; item: FieldItem }
  | { type: "row"; item: RowDefinition; index: number }
  | {
      type: "switchGroup"
      fields: F0SwitchField[]
      dependentFields?: Map<string, (F0Field | RowDefinition)[]>
      cardSelectDependentFields?: Map<
        string,
        Map<string, (F0Field | RowDefinition)[]>
      >
    }

/**
 * Flatten RHF FieldErrors into a dot-path → message map.
 * Handles nested errors (e.g. daterange `errors.range.from`).
 */
function flattenFormErrors(
  errors: Record<string, unknown>
): Record<string, string> {
  const result: Record<string, string> = {}

  function walk(obj: Record<string, unknown>, prefix: string) {
    for (const [key, value] of Object.entries(obj)) {
      if (key === "root") continue
      const path = prefix ? `${prefix}.${key}` : key
      if (value && typeof value === "object" && !Array.isArray(value)) {
        const err = value as Record<string, unknown>
        if ("message" in err && typeof err.message === "string") {
          result[path] = err.message
        } else {
          walk(err, path)
        }
      }
    }
  }

  walk(errors, "")
  return result
}

/**
 * Checks if a field has an object-form renderIf that targets a specific switch
 * being true.
 */
function isDependentOnSwitch(
  field: F0Field,
  switchIds: Set<string>
): string | null {
  const renderIf = field.renderIf
  if (!renderIf || typeof renderIf === "function") return null
  if (
    "fieldId" in renderIf &&
    "equalsTo" in renderIf &&
    renderIf.equalsTo === true &&
    switchIds.has(renderIf.fieldId)
  ) {
    return renderIf.fieldId
  }
  return null
}

/**
 * Checks if a field has an object-form renderIf that targets a specific
 * cardSelect field with a string equalsTo value.
 */
function isDependentOnCardSelect(
  field: F0Field,
  cardSelectIds: Set<string>
): { fieldId: string; equalsTo: string } | null {
  const renderIf = field.renderIf
  if (!renderIf || typeof renderIf === "function") return null
  if (
    "fieldId" in renderIf &&
    "equalsTo" in renderIf &&
    typeof renderIf.equalsTo === "string" &&
    cardSelectIds.has(renderIf.fieldId)
  ) {
    return { fieldId: renderIf.fieldId, equalsTo: renderIf.equalsTo }
  }
  return null
}

function groupContiguousSwitches(
  definition: FormDefinitionItem[]
): GroupedItem[] {
  const result: GroupedItem[] = []
  let i = 0

  while (i < definition.length) {
    const item = definition[i]

    if (item.type === "field" && item.field.type === "switch") {
      const switchGroup: F0SwitchField[] = []
      if (item.field.grouped === false) {
        switchGroup.push(item.field as F0SwitchField)
        i++
      } else {
        while (
          i < definition.length &&
          definition[i].type === "field" &&
          (definition[i] as FieldItem).field.type === "switch" &&
          ((definition[i] as FieldItem).field as F0SwitchField).grouped !==
            false
        ) {
          switchGroup.push((definition[i] as FieldItem).field as F0SwitchField)
          i++
        }
      }

      const switchIds = new Set(switchGroup.map((f) => f.id))
      const dependentFields = new Map<string, (F0Field | RowDefinition)[]>()
      const cardSelectIds = new Set<string>()
      const cardSelectDependentFields = new Map<
        string,
        Map<string, (F0Field | RowDefinition)[]>
      >()

      while (i < definition.length) {
        const next = definition[i]
        if (next.type === "field" && next.field.type !== "switch") {
          const parentSwitchId = isDependentOnSwitch(next.field, switchIds)
          if (parentSwitchId) {
            if (next.field.type === "cardSelect") {
              cardSelectIds.add(next.field.id)
            }
            const existing = dependentFields.get(parentSwitchId) ?? []
            existing.push(next.field)
            dependentFields.set(parentSwitchId, existing)
            i++
            continue
          }
          const cardSelectDep = isDependentOnCardSelect(
            next.field,
            cardSelectIds
          )
          if (cardSelectDep) {
            if (!cardSelectDependentFields.has(cardSelectDep.fieldId)) {
              cardSelectDependentFields.set(cardSelectDep.fieldId, new Map())
            }
            const valueMap = cardSelectDependentFields.get(
              cardSelectDep.fieldId
            )!
            const existing = valueMap.get(cardSelectDep.equalsTo) ?? []
            existing.push(next.field)
            valueMap.set(cardSelectDep.equalsTo, existing)
            i++
            continue
          }
          break
        } else if (next.type === "row") {
          const rowParents = next.fields.map((f) =>
            isDependentOnSwitch(f, switchIds)
          )
          const firstParent = rowParents[0]
          if (firstParent && rowParents.every((p) => p === firstParent)) {
            const existing = dependentFields.get(firstParent) ?? []
            existing.push(next)
            dependentFields.set(firstParent, existing)
            i++
            continue
          }
          const rowCardDeps = next.fields.map((f) =>
            isDependentOnCardSelect(f, cardSelectIds)
          )
          const firstCardDep = rowCardDeps[0]
          if (
            firstCardDep &&
            rowCardDeps.every(
              (d) =>
                d &&
                d.fieldId === firstCardDep.fieldId &&
                d.equalsTo === firstCardDep.equalsTo
            )
          ) {
            if (!cardSelectDependentFields.has(firstCardDep.fieldId)) {
              cardSelectDependentFields.set(firstCardDep.fieldId, new Map())
            }
            const valueMap = cardSelectDependentFields.get(
              firstCardDep.fieldId
            )!
            const existing = valueMap.get(firstCardDep.equalsTo) ?? []
            existing.push(next)
            valueMap.set(firstCardDep.equalsTo, existing)
            i++
            continue
          }
          break
        } else {
          break
        }
      }

      result.push({
        type: "switchGroup",
        fields: switchGroup,
        dependentFields: dependentFields.size > 0 ? dependentFields : undefined,
        cardSelectDependentFields:
          cardSelectDependentFields.size > 0
            ? cardSelectDependentFields
            : undefined,
      })
    } else {
      if (item.type === "field") {
        result.push({ type: "field", item })
      } else if (item.type === "row") {
        result.push({ type: "row", item, index: i })
      }
      i++
    }
  }

  return result
}

interface F0FormSectionProps<TSchema extends F0FormSchema> {
  formName: string
  sectionId: string
  schema: TSchema
  sectionConfig?: F0PerSectionSectionConfig
  defaultValues?: Partial<z.infer<TSchema>>
  onSubmit: (
    data: z.infer<TSchema>
  ) => Promise<F0FormSubmitResult> | F0FormSubmitResult
  submitConfig?: F0PerSectionSubmitConfig
  errorTriggerMode: F0FormErrorTriggerMode
  className?: string
  initialFiles?: import("../fields/file/types").InitialFile[]
  formRef?: React.MutableRefObject<F0FormRef | null>
  renderCustomField?: RenderCustomFieldFunction
  /** Whether async defaultValues are still being resolved */
  isLoading?: boolean
}

/**
 * Renders a single section as an independent form with its own
 * react-hook-form instance, validation, and submit button.
 */
export function F0FormSection<TSchema extends F0FormSchema>({
  formName,
  sectionId,
  schema,
  sectionConfig,
  defaultValues,
  onSubmit,
  submitConfig,
  errorTriggerMode,
  className,
  initialFiles,
  formRef,
  renderCustomField,
  isLoading: isFormLoading,
}: F0FormSectionProps<TSchema>) {
  const i18n = useI18n()

  type TValues = z.infer<TSchema>

  const definition = useSchemaDefinition(schema)

  const submitLabel = submitConfig?.label ?? "Submit"
  const submitIcon =
    submitConfig?.icon === null ? undefined : (submitConfig?.icon ?? Save)
  const showSubmitWhenDirty = submitConfig?.showSubmitWhenDirty ?? false
  const hideSubmitButton = submitConfig?.hideSubmitButton ?? false

  const errorMap = useMemo(() => createZodErrorMap(i18n), [i18n])
  const formMode = ERROR_TRIGGER_MODE_MAP[errorTriggerMode]

  const conditionalResolver = useMemo(
    () => createConditionalResolver(schema, { errorMap }),
    [schema, errorMap]
  )

  const form = useForm<TValues>({
    resolver: conditionalResolver,
    mode: formMode,
    defaultValues: defaultValues as DefaultValues<TValues>,
  })

  // When async defaultValues finish loading, reset the form with resolved values
  const wasLoadingRef = useRef(isFormLoading)
  useEffect(() => {
    if (wasLoadingRef.current && !isFormLoading && defaultValues) {
      form.reset(defaultValues as DefaultValues<TValues>)
    }
    wasLoadingRef.current = isFormLoading
  }, [isFormLoading, defaultValues, form])

  const rootError = form.formState.errors.root
  const { isSubmitting, isDirty } = form.formState
  const hasErrors =
    Object.keys(form.formState.errors).filter((k) => k !== "root").length > 0

  const stateCallbackRef = useRef<F0FormStateCallback | null>(null)

  const handleSubmit = useCallback(
    async (data: TValues) => {
      const cleanedData = { ...data }
      for (const key of Object.keys(cleanedData)) {
        if ((cleanedData as Record<string, unknown>)[key] === null) {
          ;(cleanedData as Record<string, unknown>)[key] = undefined
        }
      }
      const result = await onSubmit(cleanedData)

      if (result.success) {
        form.reset(data)
      } else {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, message]) => {
            form.setError(field as Path<TValues>, { message })
          })
        }
        if (result.rootMessage) {
          form.setError("root", { message: result.rootMessage })
        }
      }
    },
    [onSubmit, form]
  )

  useEffect(() => {
    if (formRef) {
      const refMethods: F0FormRef = {
        submit: () => {
          return new Promise<void>((resolve, reject) => {
            form.handleSubmit(
              async (data) => {
                await handleSubmit(data)
                resolve()
              },
              () => {
                reject(new Error("Form validation failed"))
              }
            )()
          })
        },
        reset: () => form.reset(),
        isDirty: () => form.formState.isDirty,
        getValues: () => form.getValues() as Record<string, unknown>,
        setValue: (fieldName, value, options) => {
          form.setValue(
            fieldName as Path<TValues>,
            value as TValues[keyof TValues],
            {
              shouldValidate: options?.shouldValidate ?? true,
              shouldDirty: options?.shouldDirty ?? true,
            }
          )
        },
        setValues: (values, options) => {
          for (const [fieldName, value] of Object.entries(values)) {
            form.setValue(
              fieldName as Path<TValues>,
              value as TValues[keyof TValues],
              {
                shouldValidate: false,
                shouldDirty: options?.shouldDirty ?? true,
              }
            )
          }
          if (options?.shouldValidate !== false) {
            void form.trigger()
          }
        },
        trigger: async (fieldName) => {
          if (fieldName) {
            return form.trigger(fieldName as Path<TValues>)
          }
          return form.trigger()
        },
        getErrors: () =>
          flattenFormErrors(form.formState.errors as Record<string, unknown>),
        getFieldNames: () => {
          return Object.keys(form.getValues() as Record<string, unknown>)
        },
        _setStateCallback: (callback: F0FormStateCallback) => {
          stateCallbackRef.current = callback
        },
      }
      formRef.current = refMethods
    }

    return () => {
      if (formRef) {
        formRef.current = null
      }
    }
  }, [formRef, form, handleSubmit])

  useEffect(() => {
    if (stateCallbackRef.current) {
      stateCallbackRef.current({ isSubmitting, hasErrors })
    }
  }, [isSubmitting, hasErrors])

  const groupedItems = groupContiguousSwitches(definition)

  const contextValue = useMemo(
    () => ({
      formName,
      initialFiles,
      renderCustomField,
      isLoading: isFormLoading,
    }),
    [formName, initialFiles, renderCustomField, isFormLoading]
  )

  const title = sectionConfig?.title ?? sectionId
  const description = sectionConfig?.description

  return (
    <F0FormContext.Provider value={contextValue}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={cn("flex flex-col", className)}
        >
          <div
            className={cn(
              "flex items-start justify-between py-5",
              "[&>div]:px-0.5 [&>div]:mx-0 [&>div]:border-0"
            )}
          >
            <SectionHeader title={title} description={description ?? ""} />
            {sectionConfig?.action && (
              <F0Button
                label={sectionConfig.action.label}
                icon={sectionConfig.action.icon}
                onClick={sectionConfig.action.onClick}
                href={sectionConfig.action.href}
                variant="outline"
                size="md"
              />
            )}
          </div>

          <div className={`flex flex-col ${FIELD_GAP}`}>
            {groupedItems.map((groupedItem, index) => {
              switch (groupedItem.type) {
                case "switchGroup":
                  return (
                    <SwitchGroupRenderer
                      key={`switch-group-${index}`}
                      fields={groupedItem.fields}
                      dependentFields={groupedItem.dependentFields}
                      cardSelectDependentFields={
                        groupedItem.cardSelectDependentFields
                      }
                      sectionId={sectionId}
                    />
                  )
                case "field":
                  return (
                    <FieldRenderer
                      key={groupedItem.item.field.id}
                      field={groupedItem.item.field}
                      sectionId={sectionId}
                    />
                  )
                case "row":
                  return (
                    <RowRenderer
                      key={`row-${groupedItem.index}`}
                      row={groupedItem.item}
                      sectionId={sectionId}
                    />
                  )
                default:
                  return null
              }
            })}
          </div>

          {rootError && (
            <p className="mt-4 text-base font-medium text-f1-foreground-critical">
              {rootError.message}
            </p>
          )}

          {!hideSubmitButton && (!showSubmitWhenDirty || isDirty) && (
            <div className="mt-4">
              <F0Button
                type="submit"
                label={submitLabel}
                icon={submitIcon}
                loading={isSubmitting}
                disabled={hasErrors || isFormLoading}
              />
            </div>
          )}
        </form>
      </FormProvider>
    </F0FormContext.Provider>
  )
}
