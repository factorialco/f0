import { useCoAgent } from "@copilotkit/react-core"
import { useEffect } from "react"

import { useAiChat } from "@/ai"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

import { useFormFillAction } from "./useFormFillAction"
import { useFormSubmitAction } from "./useFormSubmitAction"
import { usePresentFormAction } from "./usePresentFormAction"

/**
 * Hook that registers all AI form interaction tools and pushes
 * form context to the co-agent shared state via `useCoAgent`.
 *
 * Must be called inside a component tree that has both:
 * - A `F0AiFormRegistryProvider` ancestor (for form lookup)
 * - A CopilotKit context (for tool registration + co-agent state)
 */
export const useF0AiFormActions = () => {
  const registry = useF0AiFormRegistry()

  const { agent: agentName } = useAiChat()

  // Sync form descriptions into the co-agent shared state so the
  // backend agent can see what forms are active on the page.
  const { setState, running } = useCoAgent({
    name: agentName || "one-workflow",
  })

  useEffect(() => {
    if (!running) return

    const formDescriptions = registry?.formDescriptions || []

    setState((currentState: any) => ({
      ...currentState,
      formDescriptions,
    }))
  }, [running, agentName, JSON.stringify(registry?.formDescriptions)])

  useFormFillAction()
  useFormSubmitAction()
  // useFormGetStateAction({ stateRef: currentState, setStateRef: setState })
  usePresentFormAction()
}
