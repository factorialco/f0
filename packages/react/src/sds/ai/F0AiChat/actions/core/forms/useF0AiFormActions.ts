import { useCoAgent } from "@copilotkit/react-core"
import { useEffect, useState } from "react"

import { useAiChat } from "@/ai"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

import { useFormFillAction } from "./useFormFillAction"
import { useFormSubmitAction } from "./useFormSubmitAction"
import { usePickActiveFormAction } from "./usePickActiveFormAction"

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

  // Sync form state into the co-agent shared state so the
  // backend agent can see what forms are active on the page.
  const { setState, running } = useCoAgent({
    name: agentName || "one-workflow",
  })

  const [runningForFirstTime, setRunningForFirstTime] = useState(false)

  useEffect(() => {
    if (running && !runningForFirstTime) {
      setRunningForFirstTime(true)
    }
  }, [running, runningForFirstTime])

  useEffect(() => {
    if (!runningForFirstTime) return

    const formsOnCurrentPage = registry?.formsOnCurrentPage || []
    const availableForms = registry?.availableForms || []
    const activeForm = registry?.activeForm || null

    setState((currentState: Record<string, unknown>) => ({
      ...currentState,
      formsOnCurrentPage,
      availableForms,
      activeForm,
    }))
  }, [
    runningForFirstTime,
    JSON.stringify(registry?.formsOnCurrentPage),
    JSON.stringify(registry?.availableForms),
    JSON.stringify(registry?.activeForm),
  ])

  useFormFillAction()
  useFormSubmitAction()
  usePickActiveFormAction()
}
