import { useCopilotAction } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that fills one or more fields in an active F0Form.
 * After setting values, it triggers validation and returns any errors.
 */
export const useFormFillAction = () => {
  const registry = useF0AiFormRegistry()

  useCopilotAction({
    name: "formFill",
    description:
      "Fill one or more fields in an active form. After setting values, validation runs automatically. Returns success or any validation errors. Use formDescribe first to learn field names and types.",
    parameters: [
      {
        name: "formName",
        type: "string",
        description: "Name of the form to fill.",
        required: true,
      },
      {
        name: "values",
        type: "object[]",
        description: "Array of field name/value pairs to set.",
        required: true,
        attributes: [
          {
            name: "fieldName",
            type: "string",
            description: "The field name (from formDescribe).",
            required: true,
          },
          {
            name: "value",
            type: "string",
            description:
              "The value to set. For selects, use the option value. For dates, use ISO 8601 format. For booleans, use 'true' or 'false'. For numbers, use the numeric string.",
            required: true,
          },
        ],
      },
    ],
    handler: async ({
      formName,
      values,
    }: {
      formName: string
      values: { fieldName: string; value: string }[]
    }) => {
      console.log("[F0AiFormTools] formFill called", { formName, values })
      if (!registry) {
        return JSON.stringify({
          success: false,
          error: "Form registry is not available",
        })
      }

      const entry = registry.get(formName)
      if (!entry) {
        const available = registry.getFormNames()
        return JSON.stringify({
          success: false,
          error: `Form "${formName}" not found`,
          availableForms: available,
        })
      }

      const ref = entry.ref.current
      if (!ref) {
        return JSON.stringify({
          success: false,
          error: `Form "${formName}" is not mounted`,
        })
      }

      const valuesToSet: Record<string, unknown> = {}
      for (const { fieldName, value } of values) {
        valuesToSet[fieldName] = value
      }

      ref.setValues(valuesToSet, { shouldValidate: true, shouldDirty: true })

      // Wait a tick for validation to settle
      await new Promise((resolve) => setTimeout(resolve, 0))

      const errors = ref.getErrors()
      const hasErrors = Object.keys(errors).length > 0

      return JSON.stringify({
        success: !hasErrors,
        ...(hasErrors ? { errors } : {}),
        currentValues: ref.getValues(),
      })
    },
  })
}
