import { useFrontendTool } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that reads the current state of an active F0Form —
 * current values, dirty status, and validation errors.
 */
export const useFormGetStateAction = () => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.formGetState",
    description:
      "Get the current state of an active form: field values, whether it has unsaved changes, and any validation errors.",
    parameters: [
      {
        name: "formName",
        type: "string",
        description: "Name of the form to inspect.",
        required: true,
      },
    ],
    handler: ({ formName }: { formName: string }) => {
      if (!registry) {
        return { success: false, error: "Form registry is not available" }
      }

      const entry = registry.get(formName)
      if (!entry) {
        const available = registry.getFormNames()
        return {
          success: false,
          error: `Form "${formName}" not found`,
          availableForms: available,
        }
      }

      const ref = entry.ref.current
      if (!ref) {
        return {
          success: false,
          error: `Form "${formName}" is not mounted`,
        }
      }

      return {
        success: true,
        formName,
        values: ref.getValues(),
        isDirty: ref.isDirty(),
        errors: ref.getErrors(),
        fieldNames: ref.getFieldNames(),
      }
    },
  })
}
