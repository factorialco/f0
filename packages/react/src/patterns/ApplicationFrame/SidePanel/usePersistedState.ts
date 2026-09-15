/**
 * Moved to `@/lib/persisted-state`: nothing about it is panel-specific, and the
 * meeting surface persists its own state without importing across patterns.
 * Re-exported so the panel's own imports keep working.
 */
export {
  usePersistedState,
  type UsePersistedStateOptions,
} from "@/lib/persisted-state"
