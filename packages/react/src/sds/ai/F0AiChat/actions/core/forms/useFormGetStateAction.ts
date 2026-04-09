import type { MutableRefObject } from "react"

import { useFrontendTool } from "@copilotkit/react-core"

import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

interface UseFormGetStateActionOptions {
  stateRef: MutableRefObject<Record<string, unknown>>
  setStateRef: MutableRefObject<(state: Record<string, unknown>) => void>
}

/**
 * AI tool that reads the current state of an active F0Form —
 * current values, dirty status, and validation errors.
 *
 * Also syncs form descriptions into the co-agent shared state
 * so the backend agent always has up-to-date form context.
 */
export const useFormGetStateAction = ({
  stateRef,
  setStateRef,
}: UseFormGetStateActionOptions) => {
  const registry = useF0AiFormRegistry()

  useFrontendTool({
    name: "forms.getFormState",
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

      // Sync form descriptions into co-agent shared state on every call
      // so the backend agent always sees the latest form context.
      const formDescriptions = registry.formDescriptions
      setStateRef.current({
        ...stateRef.current,
        formDescriptions,
      })

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
