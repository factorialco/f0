import { useFrontendTool } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

/**
 * AI tool that submits an active F0Form.
 * Triggers validation first — only calls onSubmit if all fields pass.
 */
export const useFormSubmitAction = () => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.formSubmit",
    description:
      "Submit an active form. Validates all fields first. Only calls the form's onSubmit handler if validation passes. Returns success or validation errors.",
    parameters: [
      {
        name: "formName",
        type: "string",
        description: "Name of the form to submit.",
        required: true,
      },
    ],
    handler: async ({ formName }: { formName: string }) => {
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

      try {
        await ref.submit()
        const errors = ref.getErrors()
        if (Object.keys(errors).length > 0) {
          return { success: false, errors }
        }
        return { success: true }
      } catch {
        const errors = ref.getErrors()
        return {
          success: false,
          errors,
        }
      } finally {
        registry.rebuildDescriptions()
      }
    },
  })
}
