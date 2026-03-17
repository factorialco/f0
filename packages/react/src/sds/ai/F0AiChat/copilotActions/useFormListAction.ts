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
    parameters: [],
    handler: async () => {
      console.log("[F0AiFormTools] formListForms called")
      console.log({ registry })
      if (!registry) {
        return JSON.stringify({
          forms: [],
          error: "Form registry is not available",
        })
      }

      const result = { forms: registry.getFormNames() }
      return JSON.stringify(result)
    },
  })
}
