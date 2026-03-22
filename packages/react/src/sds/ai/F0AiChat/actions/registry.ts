type ActionFactory = () => void

const actionFactories = new Map<string, ActionFactory>()

/**
 * Register a copilot action factory.
 * Called as a side-effect when each action module is imported.
 */
export function registerCopilotAction(
  name: string,
  factory: ActionFactory
): void {
  actionFactories.set(name, factory)
}

/**
 * Return all registered action factories.
 * The Map is populated at import-time and never mutates after first render,
 * so the iteration order is stable across renders (Rules of Hooks safe).
 */
export function getRegisteredActions(): ActionFactory[] {
  return Array.from(actionFactories.values())
}
