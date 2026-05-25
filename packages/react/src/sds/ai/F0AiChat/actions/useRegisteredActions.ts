import { copilotActions } from "./registry"

/**
 * Hook that invokes every configured copilot action factory.
 * Actions are declared in the `copilotActions` array in `registry.ts`.
 */
export function useRegisteredActions(): void {
  for (const factory of copilotActions) {
    factory()
  }
}
