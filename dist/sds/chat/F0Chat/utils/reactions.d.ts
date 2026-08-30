import { F0ChatEmit, F0ChatMessage, F0ChatReactionSource } from '../types';
/**
 * Report a reaction toggle as the add or the remove it actually was.
 *
 * `F0ChatRuntime.toggleReaction` is one call for both directions, so the host
 * cannot tell them apart from the runtime alone. Read the direction from the
 * CURRENT message — do not call this after the host's state has advanced.
 */
export declare const emitReactionToggle: (emit: F0ChatEmit, message: F0ChatMessage, emoji: string, source: F0ChatReactionSource) => void;
