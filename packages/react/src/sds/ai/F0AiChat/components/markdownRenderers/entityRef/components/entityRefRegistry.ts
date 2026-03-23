import type { ComponentType } from "react"

import { PersonEntityRef } from "../entities/person/PersonEntityRef"

export type EntityRefRendererProps = { id: string; label: string }
export type EntityRefRenderer = ComponentType<EntityRefRendererProps>

const entityRefRenderers: Record<string, EntityRefRenderer> = {
  person: PersonEntityRef,
}

export function getEntityRefRenderer(
  type: string
): EntityRefRenderer | undefined {
  return entityRefRenderers[type]
}
