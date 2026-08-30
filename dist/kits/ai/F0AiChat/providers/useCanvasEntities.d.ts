import { CanvasContentBase, CanvasEntityDefinition } from '../../canvas/types';
/**
 * Narrow read of the AiChat context for the canvas registry. Reduces
 * the canvas/registry → useAiChat coupling so the registry only depends
 * on the entities map, not on the full provider surface.
 */
export declare function useCanvasEntities(): Record<string, CanvasEntityDefinition<CanvasContentBase>> | undefined;
