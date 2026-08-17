import { useCanvasEntities } from "../F0AiChat/providers/useCanvasEntities"
import type { CanvasEntityDefinition } from "./types"

/**
 * Hook returning the canvas entity definition for `type` from the registry
 * supplied to `F0AiChatProvider.canvasEntities`. Returns `undefined` when no
 * matching entity is configured.
 */
export function useCanvasEntity(
  type: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): CanvasEntityDefinition<any> | undefined {
  const canvasEntities = useCanvasEntities()
  if (!type || !canvasEntities) return undefined
  return canvasEntities[type]
}
