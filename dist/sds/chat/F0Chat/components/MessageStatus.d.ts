import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * Footer under the conversation's last message: "Sent", advancing to "Read".
 *
 * Delivery only — no time. Every bubble carries its own clock now, so repeating
 * it here said the same thing twice and buried the one thing this row exists
 * for. Group messages only advance to "Read" once every other member appears in
 * the receipt count; identities and counts stay in the Info panel.
 */
export declare const MessageStatus: ({ message, isGroup, }: {
    message: F0ChatMessage;
    isGroup?: boolean;
}) => ReactNode;
