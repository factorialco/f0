import { useMemo } from "react"
import { z, type ZodTypeAny } from "zod"

import type { F0Field, F0FileField } from "@/components/F0Form/fields/types"
import type { UseFileUpload } from "@/components/F0Form/fields/file/types"
import type { F0SectionConfig } from "@/components/F0Form/types"
import type { TranslationKey } from "@/lib/providers/i18n/i18n-provider-defaults"

import { f0FormField } from "@/components/F0Form/f0Schema"
import { F0FormField } from "@/components/F0FormField"

import type {
  SurveyFormBuilderElement,
  QuestionElement,
  SelectQuestionOption,
} from "../../SurveyFormBuilder/types"
import type {
  FlatQuestion,
  SurveyAnsweringFormMode,
  SurveyAnswers,
} from "../types"

import { BaseQuestion } from "../../SurveyFormBuilder/QuestionTypes/BaseQuestion"
import { DEFAULT_FILE_ACCEPT } from "../../SurveyFormBuilder/QuestionTypes/FileQuestion"
import {
  RatingQuestionField,
  type RatingFieldConfig,
} from "../components/RatingQuestionField"
import {
  SelectQuestionField,
  type SelectFieldConfig,
} from "../components/SelectQuestionField"

const URL_PATTERN = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i

const noopFileUpload: UseFileUpload = () => ({
  upload: async (file: File) => ({
    type: "success" as const,
    value: `local-${file.name}-${Date.now()}`,
  }),
  cancelUpload: () => {},
  progress: 0,
  status: "idle" as const,
})

function buildStringSchema(
  isRequired: boolean,
  t: (key: TranslationKey) => string
) {
  return z
    .string()
    .optional()
    .superRefine((v, ctx) => {
      if (isRequired && (!v || v.trim() === "")) {
        ctx.addIssue({
          code: "custom",
          message: t("forms.validation.required"),
        })
      }
    })
}

function buildLinkSchema(
  isRequired: boolean,
  t: (key: TranslationKey) => string
) {
  return z
    .string()
    .optional()
    .superRefine((v, ctx) => {
      if (isRequired && (!v || v.trim() === "")) {
        ctx.addIssue({
          code: "custom",
          message: t("forms.validation.required"),
        })
        return
      }
      if (v && !URL_PATTERN.test(v)) {
        ctx.addIssue({
          code: "custom",
          message: t("surveyFormBuilder.answer.invalidUrl"),
        })
      }
    })
}

function buildNumberSchema(
  isRequired: boolean,
  t: (key: TranslationKey) => string
) {
  return z
    .number()
    .optional()
    .superRefine((v, ctx) => {
      if (isRequired && (v === undefined || v === null)) {
        ctx.addIssue({
          code: "custom",
          message: t("forms.validation.required"),
        })
      }
    })
}

function buildMultiSelectSchema(
  isRequired: boolean,
  t: (key: TranslationKey) => string
) {
  return z
    .array(z.string())
    .optional()
    .superRefine((v, ctx) => {
      if (isRequired && (!v || v.length === 0)) {
        ctx.addIssue({
          code: "custom",
          message: t("forms.validation.required"),
        })
      }
    })
}

function buildDateSchema(
  isRequired: boolean,
  t: (key: TranslationKey) => string
) {
  return z
    .date()
    .optional()
    .superRefine((v, ctx) => {
      if (isRequired && !v) {
        ctx.addIssue({
          code: "custom",
          message: t("forms.validation.required"),
        })
      }
    })
}

function buildFileSchema(
  isRequired: boolean,
  t: (key: TranslationKey) => string
) {
  return z
    .array(z.string())
    .optional()
    .superRefine((v, ctx) => {
      if (isRequired && (!v || v.length === 0)) {
        ctx.addIssue({
          code: "custom",
          message: t("forms.validation.required"),
        })
      }
    })
}

function getDefaultValue(
  question: QuestionElement,
  defaultValues?: Partial<SurveyAnswers>
): unknown {
  const dv = defaultValues?.[question.id]
  if (dv) return dv.value

  if (question.type === "multi-select") return []

  const q = question as QuestionElement & { value?: unknown }
  if (q.value !== undefined && q.value !== null) return q.value

  return null
}

export function extractFlatQuestions(
  elements: SurveyFormBuilderElement[]
): FlatQuestion[] {
  const questions: FlatQuestion[] = []
  for (const element of elements) {
    if (element.type === "section") {
      for (const q of element.section.questions ?? []) {
        questions.push({
          id: q.id,
          type: q.type,
          required: q.required,
          sectionTitle: element.section.title,
          sectionDescription: element.section.description,
        })
      }
    } else {
      questions.push({
        id: element.question.id,
        type: element.question.type,
        required: element.question.required,
      })
    }
  }
  return questions
}

function buildFieldForQuestion(
  q: QuestionElement,
  t: (key: TranslationKey) => string,
  sectionId?: string,
  previewMode = false,
  disableFields = previewMode
): ZodTypeAny {
  const label = q.title ?? ""
  const baseConfig = {
    label,
    section: sectionId,
  }

  const questionProps = {
    id: q.id,
    title: q.title,
    description: q.description,
    type: q.type,
    required: q.required,
    locked: q.locked,
  }

  switch (q.type) {
    case "text": {
      const field: F0Field = {
        id: q.id,
        type: "text",
        label,
        placeholder: t("surveyFormBuilder.answer.textPlaceholder"),
        disabled: disableFields,
      }
      return f0FormField(buildStringSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="px-0.5">
              <F0FormField
                field={field}
                value={value ?? ""}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    case "longText": {
      const field: F0Field = {
        id: q.id,
        type: "textarea",
        label,
        placeholder: t("surveyFormBuilder.answer.textPlaceholder"),
        rows: 4,
        disabled: disableFields,
      }
      return f0FormField(buildStringSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="px-0.5">
              <F0FormField
                field={field}
                value={value ?? ""}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    case "numeric": {
      const field: F0Field = {
        id: q.id,
        type: "number",
        label,
        placeholder: t("surveyFormBuilder.answer.numericPlaceholder"),
        disabled: disableFields,
      }
      return f0FormField(buildNumberSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="px-0.5">
              <F0FormField
                field={field}
                value={value}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    case "link": {
      const field: F0Field = {
        id: q.id,
        type: "text",
        inputType: "url",
        label,
        placeholder: t("surveyFormBuilder.answer.linkPlaceholder"),
        disabled: disableFields,
      }
      return f0FormField(buildLinkSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="px-0.5">
              <F0FormField
                field={field}
                value={value ?? ""}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    case "date": {
      const field: F0Field = {
        id: q.id,
        type: "date",
        label,
        clearable: !q.required,
        disabled: disableFields,
      }
      return f0FormField(buildDateSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="px-0.5">
              <F0FormField
                field={field}
                value={value}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    case "dropdown-single": {
      const options = (
        q as QuestionElement & { options: SelectQuestionOption[] }
      ).options.map((o) => ({ value: o.value, label: o.label }))
      const field: F0Field = {
        id: q.id,
        type: "select",
        label,
        placeholder: t("surveyFormBuilder.answer.dropdownPlaceholder"),
        options,
        clearable: !q.required,
        multiple: false,
        disabled: disableFields,
      }
      return f0FormField(buildStringSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="flex flex-col items-start px-0.5 [&>div]:w-full">
              <F0FormField
                field={field}
                value={value ?? ""}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    case "select": {
      const selectOptions = (
        q as QuestionElement & { options: SelectQuestionOption[] }
      ).options
      const fieldConfig: SelectFieldConfig = {
        options: selectOptions,
        type: "select",
        required: q.required,
        disabled: disableFields,
        showAnswerValidation: previewMode,
      }
      return f0FormField(buildStringSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        fieldConfig,
        render: ({ value, onChange, onBlur, config }) => (
          <BaseQuestion {...questionProps}>
            <SelectQuestionField
              value={value}
              onChange={onChange as (v: string | string[] | undefined) => void}
              onBlur={onBlur}
              config={config}
            />
          </BaseQuestion>
        ),
      })
    }

    case "multi-select": {
      const multiOptions = (
        q as QuestionElement & { options: SelectQuestionOption[] }
      ).options
      const fieldConfig: SelectFieldConfig = {
        options: multiOptions,
        type: "multi-select",
        required: q.required,
        disabled: disableFields,
        showAnswerValidation: previewMode,
      }
      return f0FormField(buildMultiSelectSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        fieldConfig,
        render: ({ value, onChange, onBlur, config }) => (
          <BaseQuestion {...questionProps}>
            <SelectQuestionField
              value={value}
              onChange={onChange as (v: string | string[] | undefined) => void}
              onBlur={onBlur}
              config={config}
            />
          </BaseQuestion>
        ),
      })
    }

    case "rating": {
      const ratingOptions = (
        q as QuestionElement & {
          options: { value: number; label: string }[]
        }
      ).options
      const fieldConfig: RatingFieldConfig = {
        options: ratingOptions,
        disabled: disableFields,
      }
      return f0FormField(buildNumberSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        fieldConfig,
        render: ({ value, onChange, onBlur, config }) => (
          <BaseQuestion {...questionProps}>
            <RatingQuestionField
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              config={config}
            />
          </BaseQuestion>
        ),
      })
    }

    case "file": {
      const useUpload = (q as QuestionElement & { useUpload?: UseFileUpload })
        .useUpload
      const field: F0FileField = {
        id: q.id,
        type: "file",
        label,
        multiple: true,
        accept: DEFAULT_FILE_ACCEPT,
        useUpload: useUpload ?? noopFileUpload,
        disabled: disableFields,
      }
      return f0FormField(buildFileSchema(!!q.required, t), {
        ...baseConfig,
        fieldType: "custom",
        render: ({ value, onChange, onBlur, error }) => (
          <BaseQuestion {...questionProps}>
            <div className="px-0.5">
              <F0FormField
                field={field}
                value={value ?? []}
                onChange={onChange as (value: unknown) => void}
                onBlur={onBlur}
                error={!!error}
                hideLabel
              />
            </div>
          </BaseQuestion>
        ),
      })
    }

    default:
      return f0FormField(z.unknown(), {
        ...baseConfig,
        fieldType: "custom",
        render: () => null,
      })
  }
}

export function useSurveyFormSchema(
  elements: SurveyFormBuilderElement[],
  mode: SurveyAnsweringFormMode,
  t: (key: TranslationKey) => string,
  defaultValues?: Partial<SurveyAnswers>,
  currentQuestionId?: string,
  accumulatedValues?: Record<string, unknown>,
  previewMode = false,
  disableFields = previewMode
) {
  return useMemo(() => {
    const shape: Record<string, ZodTypeAny> = {}
    const defaults: Record<string, unknown> = {}
    const sections: Record<string, F0SectionConfig> = {}
    const flatQuestions = extractFlatQuestions(elements)

    const isStepped = mode === "stepped"

    for (const element of elements) {
      if (element.type === "section") {
        const section = element.section
        const sectionId = section.id

        if (mode === "all-questions") {
          sections[sectionId] = {
            title: section.title,
            description: section.description,
            withInset: true,
          }
        }

        for (const q of section.questions ?? []) {
          if (isStepped && currentQuestionId && q.id !== currentQuestionId)
            continue

          shape[q.id] = buildFieldForQuestion(
            q,
            t,
            mode === "all-questions" ? sectionId : undefined,
            previewMode,
            disableFields
          )
          defaults[q.id] =
            accumulatedValues?.[q.id] ?? getDefaultValue(q, defaultValues)
        }
      } else {
        const q = element.question

        if (isStepped && currentQuestionId && q.id !== currentQuestionId)
          continue

        shape[q.id] = buildFieldForQuestion(
          q,
          t,
          undefined,
          previewMode,
          disableFields
        )
        defaults[q.id] =
          accumulatedValues?.[q.id] ?? getDefaultValue(q, defaultValues)
      }
    }

    return {
      schema: z.object(shape),
      defaultValues: defaults,
      flatQuestions,
      sections,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elements,
    mode,
    t,
    defaultValues,
    currentQuestionId,
    previewMode,
    disableFields,
  ])
}
