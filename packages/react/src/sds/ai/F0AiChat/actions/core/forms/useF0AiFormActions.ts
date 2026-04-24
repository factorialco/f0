import { useCoAgent } from "@copilotkit/react-core"
import { useEffect, useRef, useState } from "react"

import { useAiChat } from "@/ai"
import { useF0AiFormRegistry } from "@/patterns/F0Form/F0AiFormRegistry"

import { useFormFillAction } from "./useFormFillAction"
import { useFormSubmitAction } from "./useFormSubmitAction"

interface CoAgentFormState {
  activeForm?: {
    formName?: string
    defaultValuesParams?: Record<string, unknown>
  } | null
}

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
  const { setState, running, state } = useCoAgent<CoAgentFormState>({
    name: agentName || "one-workflow",
  })

  const [runningForFirstTime, setRunningForFirstTime] = useState(false)

  useEffect(() => {
    if (running && !runningForFirstTime) {
      setRunningForFirstTime(true)
    }
  }, [running, runningForFirstTime])

  // Sync defaultValuesParams from Mastra shared state → registry entry so that
  // rebuildDescriptions emits them without needing a preservation workaround.
  const prevParamsKeyRef = useRef("")
  useEffect(() => {
    if (!registry) return
    const formName = state?.activeForm?.formName
    const params = state?.activeForm?.defaultValuesParams
    if (!formName) return
    const paramsKey = `${formName}:${JSON.stringify(params)}`
    if (prevParamsKeyRef.current === paramsKey) return
    prevParamsKeyRef.current = paramsKey
    registry.updateActiveFormDefaultValuesParams(formName, params)
  }, [
    registry,
    state?.activeForm?.formName,
    JSON.stringify(state?.activeForm?.defaultValuesParams),
  ])

  useEffect(() => {
    if (!runningForFirstTime) return

    const formsOnCurrentPage = registry?.formsOnCurrentPage || []
    const availableForms = registry?.availableForms || []
    const activeForm = registry?.activeForm || null

    setState((currentState) => {
      // Preserve defaultValuesParams that Mastra wrote into the coagent state.
      // The registry entry stores them but they may not appear in the rebuilt
      // description yet (updateActiveFormDefaultValuesParams skips rebuild to
      // avoid a re-render cascade). Carry them forward until a natural rebuild
      // (e.g. fillForm) includes them.
      const prevActiveForm = (
        currentState as Record<string, unknown> | undefined
      )?.activeForm as Record<string, unknown> | null | undefined
      const mergedActiveForm =
        activeForm &&
        prevActiveForm?.defaultValuesParams &&
        !activeForm.defaultValuesParams
          ? {
              ...activeForm,
              defaultValuesParams: prevActiveForm.defaultValuesParams as Record<
                string,
                unknown
              >,
            }
          : activeForm

      return {
        ...(currentState ?? {}),
        formsOnCurrentPage,
        availableForms,
        activeForm: mergedActiveForm,
      }
    })
  }, [
    runningForFirstTime,
    JSON.stringify(registry?.formsOnCurrentPage),
    JSON.stringify(registry?.availableForms),
    JSON.stringify(registry?.activeForm),
  ])

  useFormFillAction()
  useFormSubmitAction()
}
