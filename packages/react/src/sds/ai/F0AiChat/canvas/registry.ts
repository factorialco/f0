import type { CanvasContentBase } from "../types"

import type { CanvasEntityDefinition } from "./types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const entities = new Map<string, CanvasEntityDefinition<any>>()

/**
 * Register a canvas entity definition.
 * Called as a side-effect when each entity module is imported.
 */
export function registerCanvasEntity<T extends CanvasContentBase>(
  definition: CanvasEntityDefinition<T>
): void {
  entities.set(definition.type, definition)
}

/**
 * Look up a registered entity definition by content type.
 * Returns `undefined` if the type hasn't been registered.
 */
export function getCanvasEntity(
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): CanvasEntityDefinition<any> | undefined {
  return entities.get(type)
}
