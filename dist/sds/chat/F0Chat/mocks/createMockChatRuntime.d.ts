import { F0ChatChannel, F0ChatItem, F0ChatRuntime, F0ChatUser } from '../types';
/** Seed describing a fake conversation the mock runtime should simulate. */
export type MockChatSeed = {
    channel: F0ChatChannel;
    me: F0ChatUser;
    /** The other participant(s). DMs have one; groups have several. */
    others: F0ChatUser[];
    /** How many messages to seed initially. */
    initialCount?: number;
    /** How many older pages `loadOlder` can yield before running dry. */
    olderPages?: number;
    /** Ambient incoming-message cadence (ms). 0 disables it. */
    ambientEveryMs?: number;
    /** Extra items appended after the seeded ones (e.g. to demo mentions or
     * membership system rows). */
    extraMessages?: F0ChatItem[];
    /** Start with sends failing (flaky-network demo) — see `setFailSends`. */
    failSends?: boolean;
};
/**
 * In-memory {@link F0ChatRuntime} for Storybook and tests. Simulates optimistic
 * send + the other side replying (with a typing pause first), read receipts,
 * unread tracking (derived from a read pointer), older-message pagination,
 * reactions, deletion, uploads, transcription and ambient incoming messages —
 * no backend. Re-created per conversation (mount it keyed by channel id).
 */
export declare function useMockChatRuntime(seed: MockChatSeed): F0ChatRuntime & {
    /** Simulate the other side writing (typing pause, then a message) — exposed
     * so stories can drive bursts of incoming activity on demand. */
    receiveFrom: (responder: F0ChatUser) => void;
    /** N incoming messages landing in ONE commit (coalesced transport batch). */
    receiveBatch: (authors: F0ChatUser[], count: number, opts?: {
        withImage?: boolean;
    }) => void;
    /** An incoming reaction on a random recent message. */
    receiveReaction: () => void;
    /** The other side reads everything (my sent/delivered → read). */
    readSweep: () => void;
    /**
     * Toggle the simulated network: while true, sends settle as `failed`;
     * flipping back to false sweeps pending/failed messages and re-sends them
     * (the "connection returns → queued messages auto-send" behavior).
     */
    setFailSends: (fail: boolean) => void;
    /** People join the group: appends a `member.added` system row (one item for
     * the whole batch, like a coalescing adapter would) and bumps memberCount. */
    addMembers: (users: F0ChatUser[]) => void;
    /** Someone is removed by an admin: a `member.removed` system row. */
    removeMember: (user: F0ChatUser) => void;
    /** Someone leaves on their own: a `member.left` system row. */
    memberLeaves: (user: F0ChatUser) => void;
};
