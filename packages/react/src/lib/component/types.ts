export const componentTypes = ["layout", "info", "action", "form"] as const
export type ComponentTypes = (typeof componentTypes)[number]

export interface ComponentMetadata {
  name: string
  type: ComponentTypes
  internal?: boolean
}
