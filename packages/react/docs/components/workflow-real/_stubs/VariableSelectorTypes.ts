/**
 * Type-only stubs for the Sidepanel variable-selector types referenced by
 * FlowNodeSwitchCondition. Erased at compile time.
 */
export type EntityResolution = Record<string, Record<string, string>>

export type VariableSelectorConfig =
  | {
      type: "people_group_target"
      label?: string
      formatDisplayValue: (
        value: string,
        resolution: EntityResolution
      ) => string
    }
  | { type: "entity"; entity: string; label?: string }
  | { type: "number"; unit?: string; label?: string }
  | { type: string; label?: string; unit?: string }
