import type { ComponentType } from "react"

export type EntityRefRendererProps = { id: string; label: string }
export type EntityRefRenderer = ComponentType<EntityRefRendererProps>

const registry = new Map<string, EntityRefRenderer>()

export function registerEntityRef(
  type: string,
  renderer: EntityRefRenderer
): void {
  registry.set(type, renderer)
}

export function getEntityRefRenderer(
  type: string
): EntityRefRenderer | undefined {
  return registry.get(type)
}
