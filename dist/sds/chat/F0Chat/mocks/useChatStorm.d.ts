import { F0ChatUser } from '../types';
/** The mock-runtime surface the storm drives (see createMockChatRuntime). */
export type ChatStormTarget = {
    receiveFrom: (responder: F0ChatUser) => void;
    receiveBatch: (authors: F0ChatUser[], count: number, opts?: {
        withImage?: boolean;
    }) => void;
    receiveReaction: () => void;
    readSweep: () => void;
    sendMessage: (input: {
        body: string;
    }) => void;
};
export type ChatStormConfig = {
    /** Incoming events per second (2-5 ≈ a genuinely intense group chat). */
    ratePerSec?: number;
    /** Share of ticks that land as a same-commit batch of 2-3 messages. */
    batchRatio?: number;
    /** Share of ticks that add an incoming reaction instead of a message. */
    reactionRatio?: number;
    /** Share of ticks that sweep read receipts over my messages. */
    readRatio?: number;
    /** Share of message ticks that carry an image attachment. */
    imageRatio?: number;
    /** Share of ticks that send an OWN message (echo + delivered pipeline). */
    ownRatio?: number;
};
export type ChatStorm = {
    running: boolean;
    start: () => void;
    stop: () => void;
    toggle: () => void;
    /** Events fired in the last rolling second (for the HUD). */
    eventsPerSecond: number;
};
/**
 * Storm driver for the intensity QA story: fires incoming activity against the
 * mock runtime at a configurable rate — typing→message swaps, SAME-COMMIT
 * batches, incoming reactions, read sweeps, images (with and without reserved
 * dimensions) and own sends — everything a genuinely intense conversation
 * throws at the transcript at once.
 */
export declare const useChatStorm: (target: ChatStormTarget, authors: F0ChatUser[], { ratePerSec, batchRatio, reactionRatio, readRatio, imageRatio, ownRatio, }?: ChatStormConfig) => ChatStorm;
