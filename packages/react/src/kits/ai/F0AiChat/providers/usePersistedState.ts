/**
 * Moved to `@/lib/persisted-state` so other surfaces (meetings) can persist
 * their own state without importing across kits. Re-exported here so existing
 * call sites keep working.
 */
export { usePersistedState } from "@/lib/persisted-state"
