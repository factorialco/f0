import { ReactNode } from 'react';
import { F0ChatCardAttachment } from '../types';
/**
 * A card attachment: an {@link F0Card} the host described as data.
 *
 * Unlike the media cards it does NOT chain its corners into the bubble stack.
 * It carries its own border and radius, so clipping it to a chained shape would
 * show two radii at once — the same reason the file chips opt out.
 *
 * `onCardActivated` only fires for the handler forms. A card that navigates
 * through `href` reports nothing: the host owns that navigation and already
 * sees it in its own router.
 */
export declare const ChatCardAttachment: ({ card, }: {
    card: F0ChatCardAttachment;
}) => ReactNode;
