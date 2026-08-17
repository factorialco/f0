import { useAiChat } from "./AiChatStateProvider"
import type {
  CanvasContentBase,
  CanvasEntityDefinition,
} from "../../canvas/types"

/**
 * Narrow read of the AiChat context for the canvas registry. Reduces
 * the canvas/registry → useAiChat coupling so the registry only depends
 * on the entities map, not on the full provider surface.
 */
export function useCanvasEntities():
  | Record<string, CanvasEntityDefinition<CanvasContentBase>>
  | undefined {
  const { canvasEntities } = useAiChat()
  return canvasEntities as
    | Record<string, CanvasEntityDefinition<CanvasContentBase>>
    | undefined
}
