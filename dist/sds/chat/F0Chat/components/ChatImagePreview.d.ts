import { ReactNode } from 'react';
import { IconType } from '../../../../components/F0Icon';
/** A control pill — a neutral icon button on an opaque chip so it reads over the
 * dimmed overlay. `pointer-events-auto` so it's clickable inside its (otherwise
 * click-through) band. Shared with {@link ChatDocumentPreview}. */
export declare const PreviewControl: ({ icon, label, onClick, }: {
    icon: IconType;
    label: string;
    onClick: () => void;
}) => ReactNode;
/**
 * In-chat image lightbox. Clicking a message image opens it here (instead of a
 * new tab): a real modal portaled to `document.body` so it sits above everything
 * — the chat panel, the canvas and the sidebar — rather than behind the panel.
 *
 * The controls live in a top band (download + close) and a bottom band (paging +
 * counter), never over the image; clicking anywhere else on the overlay closes
 * it. Layering is done with `pointer-events`: a full-bleed backdrop catches the
 * close clicks, while the image and the control pills opt back in so they don't
 * fall through. Arrow keys page between a message's images.
 */
export declare const ChatImagePreview: () => ReactNode;
