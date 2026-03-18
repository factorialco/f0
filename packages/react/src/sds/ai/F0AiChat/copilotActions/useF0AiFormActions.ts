import { useCopilotReadable } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "../../../../components/F0Form/F0AiFormRegistry"
import { useFormFillAction } from "./useFormFillAction"
import { useFormGetStateAction } from "./useFormGetStateAction"
import { useFormSubmitAction } from "./useFormSubmitAction"

/**
 * Hook that registers all AI form interaction tools and pushes
 * form context to the AI backend via `useCopilotReadable`.
 *
 * Must be called inside a component tree that has both:
 * - A `F0AiFormRegistryProvider` ancestor (for form lookup)
 * - A CopilotKit context (for tool registration + readable context)
 */
export const useF0AiFormActions = () => {
  const registry = useF0AiFormRegistry()

  // Push form descriptions from the registry into CopilotKit readable context
  // so the AI backend knows what forms are active on the page.
  useCopilotReadable(
    {
      description:
        "Active forms on the current page. Each entry contains the form name, its JSON schema, current values, validation errors, and dirty state. Use the form tools (formListForms, formFill, formSubmit, formGetState) to interact with them.",
      value: registry?.formDescriptions.length
        ? registry.formDescriptions
        : "No forms are currently active on this page.",
    },
    [JSON.stringify(registry?.formDescriptions)]
  )

  console.log({ formDescriptions: registry?.formDescriptions })

  useFormFillAction()
  useFormSubmitAction()
  useFormGetStateAction()
}
