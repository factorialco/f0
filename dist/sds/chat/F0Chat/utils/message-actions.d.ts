import { F0ChatCapabilities, F0ChatChannelType, F0ChatMessage } from '../types';
/**
 * Everything needed to decide what a message's menu offers. Pure input, no
 * hooks: BOTH triggers have to reach the same answer — the real one in
 * `ChatMessageActions` and the un-armed placeholder in `ChatMessageItem`, which
 * mounts before the popover exists — and a shared predicate is the only way to
 * keep them from drifting.
 */
export type MessageActionContext = {
    message: F0ChatMessage;
    isMine: boolean;
    channelType: F0ChatChannelType;
    capabilities: F0ChatCapabilities | undefined;
    /** Whether the host provided `editMessage`. Structural, not a permission. */
    hasEditMessage: boolean;
    editWindowMs?: number;
};
export declare const canViewInfoAction: ({ channelType, capabilities, }: MessageActionContext) => boolean;
export declare const canCopyAction: ({ channelType, capabilities, }: MessageActionContext) => boolean;
export declare const canReactAction: ({ channelType, capabilities, }: MessageActionContext) => boolean;
export declare const canReplyAction: ({ channelType, capabilities, }: MessageActionContext) => boolean;
/** Delete policy: capability override, else own messages only. */
export declare const canDeleteAction: ({ message, isMine, capabilities, }: MessageActionContext) => boolean;
/**
 * Edit policy: the host must provide `editMessage`, and then
 * `capabilities.canEditMessage` decides — or, by default, own messages within
 * the edit window.
 *
 * Deleted messages are never editable, and neither are voice notes or cards:
 * the composer has no affordance for either, so loading one into it could only
 * ever drop it on save.
 */
export declare const canEditAction: ({ message, isMine, capabilities, hasEditMessage, editWindowMs, }: MessageActionContext) => boolean;
/**
 * Whether the hover ellipsis is worth rendering at all. On a read-only
 * noticeboard nothing survives, and an ellipsis that opens an empty popover is
 * worse than no ellipsis.
 *
 * Ordered cheapest-first so the edit check — which reads the clock and scans
 * attachments — only runs once everything else has come back false.
 */
export declare const hasAnyMessageAction: (context: MessageActionContext) => boolean;
