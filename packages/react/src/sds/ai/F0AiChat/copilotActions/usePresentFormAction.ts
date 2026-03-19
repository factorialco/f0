import { useFrontendTool } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

/**
 * AI tool that opens/renders a form for the user.
 * Use mode "dialog" for simple forms, "wizard" for multi-step flows.
 * Once presented, the form is live and can be filled/submitted via other tools.
 */
export const usePresentFormAction = () => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.presentForm",
    description:
      "Opens a form for the user to fill in. " +
      "Use mode 'dialog' for simple forms with few fields. " +
      "Use mode 'wizard' for complex forms with multiple sections or steps. " +
      "Once presented, the form is live — use formFill, formGetState, formSubmit to interact with it.",
    parameters: [
      {
        name: "formName",
        type: "string",
        description:
          "Name of the form to present (must match an available form definition)",
        required: true,
      },
      {
        name: "mode",
        type: "string",
        description:
          "How to render the form: 'dialog' for a modal dialog, 'wizard' for a multi-step wizard",
        enum: ["dialog", "wizard"],
        required: true,
      },
    ],
    handler: ({
      formName,
      mode,
    }: {
      formName: string
      mode: "dialog" | "wizard"
    }) => {
      console.log("[F0AiFormTools] presentForm called", { formName, mode })
      if (!registry) {
        return { success: false, error: "Form registry is not available" }
      }
      return registry.presentForm(formName, mode)
    },
  })
}
