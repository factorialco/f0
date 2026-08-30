import { ReactNode } from 'react';
import { F0ChatLinkPreview, F0ChatUser } from '../types';
/**
 * Message bodies carry their emoji as plain text and the browser draws them
 * with the reader's own system font — no parsing, no swap, no `<img>`.
 *
 * This used to substitute a twemoji SVG per emoji. It stopped for two reasons:
 * everyone should see the emoji their machine draws everywhere else, and the
 * transcript was never consistent about it anyway (reply quotes, system rows
 * and the typing indicator have always rendered the native glyph).
 *
 * Deliberately no emoji `font-family` here: `*`, `#`, the digits and `™` are
 * emoji in Unicode too, so an emoji font over prose turns numbers and symbols
 * into pictures. Per-character fallback already picks the emoji font for the
 * codepoints that need it.
 *
 * Render a body with its URLs as clickable {@link F0Link}s (new tab).
 * `stopPropagation` keeps a link click from also triggering the message row's
 * own handlers.
 *
 * When a URL has a scraped preview with a title, the link reads as that title
 * instead of the raw URL (WhatsApp-style — "Gol de Mikel Merino…" beats a
 * three-line URL). The real destination stays discoverable via the native
 * `title` tooltip, so the friendlier text never masks where the link goes.
 *
 * Pure (no hooks): callers memoize the result per message.
 */
export declare const renderBodyWithLinks: (rawBody: string, previews?: F0ChatLinkPreview[]) => ReactNode;
/** A `@name` token to highlight in a message body. Slack-style colours: a
 * mention of someone else reads in info colours; a mention of you (`isSelf`) or
 * the whole group (`isEveryone`, `@here`) reads in warning/amber. `user`, when
 * present (any person mention), opens the same profile hover card as the avatar. */
export type MentionToken = {
    name: string;
    isSelf: boolean;
    isEveryone: boolean;
    user?: F0ChatUser;
};
/**
 * Render a body with its `@name` mentions as chips and everything else through
 * {@link renderBodyWithLinks}. Slack-style: a mention of someone else is an
 * info pill (and opens their profile hover card, like the sender avatar); a
 * mention of you or `@here` is an amber/warning pill that stands out. Falls back to
 * {@link renderBodyWithLinks} when there are no mentions.
 *
 * Pure (no hooks): callers memoize the result per message.
 */
export declare const renderBodyWithMentions: (rawBody: string, tokens: MentionToken[], previews?: F0ChatLinkPreview[]) => ReactNode;
