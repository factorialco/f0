import { useFrontendTool } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

/**
 * AI tool that picks an available (virtual) form as the active co-editing form.
 * Once active, the form's full state (schema, values, errors, etc.) is synced
 * to the co-agent shared state as `activeForm`.
 *
 * Forms rendered on the current page (formsOnCurrentPage) can be co-edited
 * directly without needing to be picked as active.
 */
export const usePickActiveFormAction = () => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.pickActiveForm",
    description:
      "Pick an available form to co-edit/co-create. " +
      "Once picked, the form's full definition and state will appear as activeForm in the shared state. " +
      "Forms already rendered on the page (formsOnCurrentPage) can be co-edited directly without picking.",
    parameters: [
      {
        name: "formName",
        type: "string",
        description:
          "Name of the available form to activate (must match an entry in availableForms)",
        required: true,
      },
    ],
    handler: ({ formName }: { formName: string }) => {
      if (!registry) {
        return { success: false, error: "Form registry is not available" }
      }
      return registry.setActiveForm(formName)
    },
  })
}
