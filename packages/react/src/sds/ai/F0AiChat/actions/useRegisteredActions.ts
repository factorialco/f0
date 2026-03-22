import { getRegisteredActions } from "./registry"

/**
 * Hook that invokes every registered copilot action factory.
 * Replaces the monolithic useDefaultCopilotActions — new actions
 * only need to call registerCopilotAction() at import time.
 */
export function useRegisteredActions(): void {
  const factories = getRegisteredActions()
  for (const factory of factories) {
    factory()
  }
}
