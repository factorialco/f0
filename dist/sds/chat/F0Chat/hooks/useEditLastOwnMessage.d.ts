import { F0ChatCapabilities, F0ChatItem, F0ChatMessage } from '../types';
type EditPolicy = {
    hasEditMessage: boolean;
    capabilities?: F0ChatCapabilities;
    editWindowMs?: number;
};
/**
 * Stops at the newest own message instead of searching past it: the user
 * pressed a key without choosing a message, so opening an older one surprises
 * them. The actions menu still reaches those.
 *
 * Stricter than that menu in two ways. Own messages only, even where
 * `capabilities.canEditMessage` allows editing other people's. And text only —
 * a message with just an image loads an empty box plus the image, so the next
 * Enter captions it rather than sending what the user typed.
 */
export declare const findShortcutEditTarget: (messages: F0ChatItem[], policy: EditPolicy) => F0ChatMessage | null;
/** Returns whether it found one, so the caller only swallows the key when
 * something happened. */
export declare const useEditLastOwnMessage: () => (() => boolean);
export {};
