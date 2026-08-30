import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { F0ChatAttachment, F0ChatChannelStatus, F0ChatChannelType, F0ChatItem, F0ChatLinkPreview, F0ChatMessageStatus, F0ChatMention, F0ChatReaction, F0ChatSystemEvent, F0ChatUser } from '../types';
/** A mock participant. `online` gates replies (offline people never respond);
 * `vacation` shows the "on vacation" affordance independently of presence. */
export type MockPerson = F0ChatUser & {
    avatar: AvatarVariant;
    online: boolean;
    vacation?: boolean;
};
export declare const ME: MockPerson;
type MessageLine = {
    from: F0ChatUser;
    body: string;
    min: number;
    /** Index of an earlier line in the same seed this message replies to. */
    replyToIndex?: number;
    /** People mentioned in the body (groups). */
    mentions?: F0ChatMention[];
    /** Whether the line mentions the whole group (`@here`). */
    mentionedEveryone?: boolean;
    /** Open Graph cards for the URLs in the body (link preview demo). */
    linkPreviews?: F0ChatLinkPreview[];
    /** Attachments (images, files, shared locations) for the media demos. */
    attachments?: F0ChatAttachment[];
    /** Group members who read this message. */
    readBy?: F0ChatUser[];
    /** Reactions shown under the message. */
    reactions?: F0ChatReaction[];
    /** Delivery state override for outgoing-message fixtures. */
    status?: F0ChatMessageStatus;
    /** Host-provided explanation for a failed outgoing message. */
    failureReason?: string;
    /** Count-only read receipt for hosts without reader identities. */
    readByCount?: number;
    /** Soft-deleted tombstone fixture. */
    deleted?: boolean;
    /** Marks the message as edited shortly after it was sent. */
    edited?: boolean;
};
/** A membership event in the transcript — becomes a centered system row. */
type SystemLine = {
    system: {
        event: F0ChatSystemEvent;
        members: MockPerson[];
    };
    min: number;
};
type Line = MessageLine | SystemLine;
export type Seed = {
    id: string;
    type: F0ChatChannelType;
    title: string;
    avatar: AvatarVariant;
    /** Announcement channels: the sentence shown in place of the composer. */
    readOnlyNotice?: string;
    presence?: "online" | "offline";
    /** Channel statuses shown consistently in the header and sidebar. */
    statuses?: F0ChatChannelStatus[];
    /** Demo: starts in the "Pinned" sidebar group (favourited). */
    pinned?: boolean;
    participants: MockPerson[];
    lines: Line[];
    /** Trailing incoming messages that start unread. */
    unread?: number;
    olderPages?: number;
    /** Demo: the first participant types non-stop (sidebar "Writing…" + dots bubble). */
    alwaysTyping?: boolean;
    /** Demo (groups): a random group of >1 people type before each reply. */
    multiTyping?: boolean;
    /** Demo: read-only channel — `capabilities` hide the composer, reactions and
     * uploads (frozen/announcements channel). */
    readOnly?: boolean;
    /** Demo: the conversation fails to load (error state + Retry via `reconnect`). */
    failsToLoad?: boolean;
    /**
     * Demo: my role in this channel — drives which header actions the mock host
     * offers, mirroring how a real host derives them from its permissions:
     * "admin" → pin/mute + Edit group; "member" (default) → pin/mute;
     * "guest" → nothing beyond the built-in search.
     */
    myRole?: "admin" | "member" | "guest";
};
export declare const SEEDS: Seed[];
export declare const SEED_BY_ID: Map<string, Seed>;
export declare const REPLIES: string[];
export type ConvState = {
    messages: F0ChatItem[];
    lastReadId: string | null;
    typingIds: string[];
};
export declare const nextId: () => string;
/** Reader identities for a group message in the ApplicationFrame mock. */
export declare const groupReadersFor: (seed: Seed | undefined, authorId: string) => F0ChatUser[] | undefined;
export declare const buildSeedMessages: (seed: Seed) => F0ChatItem[];
/** Typing ids a conversation rests at — non-empty only for `alwaysTyping` demos. */
export declare const restingTypingIds: (seed: Seed | undefined) => string[];
/** A random 1–3 of the given participants, for the `multiTyping` reply demo. */
export declare const pickRandomTypers: (participants: MockPerson[]) => MockPerson[];
export declare const initialConvState: (seed: Seed) => ConvState;
export declare const unreadCountOf: (state: ConvState) => number;
/** Unread messages that mention me (directly or via `@here`) — drives the
 * sidebar `@N` badge. Clears as the conversation is read, like the unread count. */
export declare const unreadMentionCountOf: (state: ConvState) => number;
export declare const resolveUser: (seed: Seed, id: string) => F0ChatUser;
export {};
