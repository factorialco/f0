import { useCoAgent } from "@copilotkit/react-core"
import { useEffect } from "react"

import { useF0AiFormRegistry } from "@/components/F0Form/F0AiFormRegistry"

import { useAiChat } from "../../../providers/AiChatStateProvider"
import { registerCopilotAction } from "../../registry"
import { useFormFillAction } from "./useFormFillAction"
import { useFormGetStateAction } from "./useFormGetStateAction"
import { useFormSubmitAction } from "./useFormSubmitAction"
import { usePresentFormAction } from "./usePresentFormAction"

/**
 * Hook that registers all AI form interaction tools and pushes
 * form context to the co-agent shared state via `useCoAgent`.
 *
 * Must be called inside a component tree that has both:
 * - A `F0AiFormRegistryProvider` ancestor (for form lookup)
 * - A CopilotKit context (for tool registration + co-agent state)
 * - An `AiChatStateProvider` ancestor (for the agent name)
 */
export const useF0AiFormActions = () => {
  const registry = useF0AiFormRegistry()
  const { agent } = useAiChat()

  // Sync form descriptions into the co-agent shared state so the
  // backend agent can see what forms are active on the page.
  const { setState } = useCoAgent({
    name: agent ?? "one-workflow",
  })

  useEffect(() => {
    setState((prev: Record<string, unknown>) => ({
      ...prev,
      formDescriptions: registry?.formDescriptions.length
        ? registry.formDescriptions
        : [],
    }))
  }, [JSON.stringify(registry?.formDescriptions)])

  useFormFillAction()
  useFormSubmitAction()
  useFormGetStateAction()
  usePresentFormAction()
}

registerCopilotAction("f0AiFormActions", useF0AiFormActions)
