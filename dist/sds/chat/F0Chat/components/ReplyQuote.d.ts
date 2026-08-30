import { ReactNode } from 'react';
import { F0ChatMessage } from '../types';
/**
 * Reply quote nested at the top of the bubble (WhatsApp-style): a compact card
 * led by the quoted sender's coloured name; the body line shows the caption and
 * carries a media icon / thumbnail when the quoted message has attachments.
 * Clicking it jumps to the quoted message.
 */
export declare const ReplyQuote: ({ reply, isMine, isFirstOfRun, }: {
    reply: NonNullable<F0ChatMessage["replyTo"]>;
    /** The host bubble's side — picks which top corner hugs the bubble. */
    isMine?: boolean;
    /** First message of a same-author run — mirrors the bubble's tail-side top
     * corner so the quote nests cleanly (rounded at a run's start, tucked when
     * it continues one). */
    isFirstOfRun?: boolean;
}) => ReactNode;
