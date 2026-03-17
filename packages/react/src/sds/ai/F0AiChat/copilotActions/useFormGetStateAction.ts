import { useCopilotAction } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that reads the current state of an active F0Form —
 * current values, dirty status, and validation errors.
 */
export const useFormGetStateAction = () => {
  const registry = useF0AiFormRegistry()

  useCopilotAction({
    name: "formGetState",
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
    handler: async ({ formName }: { formName: string }) => {
      console.log("[F0AiFormTools] formGetState called", { formName })
      if (!registry) {
        return JSON.stringify({ error: "Form registry is not available" })
      }

      const entry = registry.get(formName)
      if (!entry) {
        const available = registry.getFormNames()
        return JSON.stringify({
          error: `Form "${formName}" not found`,
          availableForms: available,
        })
      }

      const ref = entry.ref.current
      if (!ref) {
        return JSON.stringify({ error: `Form "${formName}" is not mounted` })
      }

      return JSON.stringify({
        formName,
        values: ref.getValues(),
        isDirty: ref.isDirty(),
        errors: ref.getErrors(),
        fieldNames: ref.getFieldNames(),
      })
    },
  })
}
