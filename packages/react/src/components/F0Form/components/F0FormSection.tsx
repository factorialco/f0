import { useCallback, useEffect, useMemo, useRef } from "react"
import { DefaultValues, Path, useForm } from "react-hook-form"
import { z } from "zod"

import { F0Button } from "@/components/F0Button"
import { SectionHeader } from "@/experimental/Information/Headers/SectionHeader"
import { Save } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"
import { Form as FormProvider } from "@/ui/form"

import { RowRenderer } from "./RowRenderer"
import { SwitchGroupRenderer } from "./SwitchGroupRenderer"
import { createConditionalResolver } from "../conditionalResolver"
import { FIELD_GAP } from "../constants"
import { F0FormContext } from "../context"
import { FieldRenderer } from "../fields/FieldRenderer"
import type { F0SwitchField } from "../fields/switch/types"
import type {
  F0FormErrorTriggerMode,
  F0FormSchema,
  F0FormSubmitResult,
  F0PerSectionSectionConfig,
  F0PerSectionSubmitConfig,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
} from "../types"
import type { F0FormRef, F0FormStateCallback } from "../useF0Form"
import { useSchemaDefinition } from "../useSchemaDefinition"
import { createZodErrorMap } from "../zodErrorMap"

const ERROR_TRIGGER_MODE_MAP = {
  "on-blur": "onBlur",
  "on-change": "onChange",
  "on-submit": "onSubmit",
} as const

type GroupedItem =
  | { type: "field"; item: FieldItem }
  | { type: "row"; item: RowDefinition; index: number }
  | { type: "switchGroup"; fields: F0SwitchField[] }

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
      }
    }
  })

  flushSwitchGroup()
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
    () => ({ formName, initialFiles }),
    [formName, initialFiles]
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
                disabled={hasErrors}
              />
            </div>
          )}
        </form>
      </FormProvider>
    </F0FormContext.Provider>
  )
}
