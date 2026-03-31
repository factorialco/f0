import type { CanvasEntityDefinition } from "./types"

import { dashboardCanvasEntity } from "./entities/dashboard"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const canvasEntities: Record<string, CanvasEntityDefinition<any>> = {
  dashboard: dashboardCanvasEntity,
}

/**
 * Look up a canvas entity definition by content type.
 * Returns `undefined` if the type is not configured.
 */
export function getCanvasEntity(
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): CanvasEntityDefinition<any> | undefined {
  return canvasEntities[type]
}
