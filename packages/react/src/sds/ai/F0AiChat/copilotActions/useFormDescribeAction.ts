import { useCopilotAction } from "@copilotkit/react-core"

import { describeFormSchema } from "@/components/F0Form/describeFormSchema"
import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that describes the fields of an active F0Form.
 * The AI agent calls this to learn what fields a form has,
 * their types, labels, options, and validation requirements.
 */
export const useFormDescribeAction = () => {
  const registry = useF0AiFormRegistry()

  useCopilotAction({
    name: "formDescribe",
    description:
      "Describe the fields of an active form. Returns field names, types, labels, options, and whether they are required. Call this before filling a form to understand its structure.",
    available: "frontend",
    parameters: [
      {
        name: "formName",
        type: "string",
        description:
          "Name of the form to describe. Use formListForms to discover available form names.",
        required: true,
      },
    ],
    handler: async ({ formName }: { formName: string }) => {
      if (!registry) {
        return { error: "Form registry is not available" }
      }

      const entry = registry.get(formName)
      if (!entry) {
        const available = registry.getFormNames()
        return {
          error: `Form "${formName}" not found`,
          availableForms: available,
        }
      }

      const fields = describeFormSchema(entry.schema)
      return { formName, fields }
    },
  })
}
