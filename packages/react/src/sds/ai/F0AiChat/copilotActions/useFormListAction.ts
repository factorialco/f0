import { useCopilotAction } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that lists all currently active (mounted) F0Forms by name.
 * The AI uses this to discover which forms are available before
 * calling formDescribe, formFill, formSubmit, or formGetState.
 */
export const useFormListAction = () => {
  const registry = useF0AiFormRegistry()

  useCopilotAction({
    name: "formListForms",
    description:
      "List all currently active forms on the page. Returns form names that can be used with formDescribe, formFill, formSubmit, and formGetState.",
    available: "frontend",
    parameters: [],
    handler: async () => {
      if (!registry) {
        return { forms: [], error: "Form registry is not available" }
      }

      return { forms: registry.getFormNames() }
    },
  })
}
