/**
 * Type-only stubs for the backend node-data shapes referenced by Node/types.tsx.
 * These are erased at compile time; the static preview never depends on their
 * runtime values.
 */
export type BackendSwitchComparison = {
  label: string
  priority: number
  expression: any
}

export type BackendSwitchNodeData = {
  _type: "switch_data"
  comparisons: BackendSwitchComparison[]
}

export type BackendActionNodeData = {
  _type: "action_data"
  payload: Record<string, unknown>
  handler_name: string
}
