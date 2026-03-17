import { useCopilotAction } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that submits an active F0Form.
 * Triggers validation first — only calls onSubmit if all fields pass.
 */
export const useFormSubmitAction = () => {
  const registry = useF0AiFormRegistry()

  useCopilotAction({
    name: "formSubmit",
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
      console.log("[F0AiFormTools] formSubmit called", { formName })
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

      try {
        await ref.submit()
        return JSON.stringify({ success: true })
      } catch {
        const errors = ref.getErrors()
        return JSON.stringify({
          success: false,
          errors,
        })
      }
    },
  })
}
