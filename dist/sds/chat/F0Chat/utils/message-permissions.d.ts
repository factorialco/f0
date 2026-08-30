import { F0ChatCapabilities, F0ChatMessage } from '../types';
/**
 * Whose messages, and for how long, comes from `capabilities.canEditMessage`
 * when the host provides one, else the default: own messages within
 * `editWindowMs`. Whatever that says, editing also needs a host `editMessage`
 * handler, a message that has not been deleted and has reached the server, and
 * some text to change — a voice note has none.
 *
 * Shared by the actions menu and the arrow-up shortcut so both offer editing on
 * the same messages.
 */
export declare const canEditChatMessage: (message: F0ChatMessage, { hasEditMessage, capabilities, editWindowMs, }: {
    hasEditMessage: boolean;
    capabilities?: F0ChatCapabilities;
    editWindowMs?: number;
}) => boolean;
