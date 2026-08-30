import { CanvasEntityDefinition } from './types';
/**
 * Hook returning the canvas entity definition for `type` from the registry
 * supplied to `F0AiChatProvider.canvasEntities`. Returns `undefined` when no
 * matching entity is configured.
 */
export declare function useCanvasEntity(type: string | undefined): CanvasEntityDefinition<any> | undefined;
