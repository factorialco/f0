import { ReactNode } from 'react';
import { CarouselPaging } from '../../ui/carousel';
import { F0DialogInternalProps } from '../F0Dialog/internal-types';
/** One page of the dialog. */
export interface F0CarouselDialogItem {
    id: string;
    /**
     * The dialog's title while this page is showing. The header therefore changes
     * with the content, which is what makes this ONE dialog moving rather than a
     * frame with something loaded into it.
     *
     * GIVE EVERY PAGE ONE: it is the dialog's accessible name as well as the words
     * in the header, and a dialog without one is announced as nothing at all. If
     * the content already shows the title itself, hide it THERE — `CommunityPost`
     * has `hideTitle` for exactly this — rather than leaving the header blank.
     */
    title?: string;
    content: ReactNode;
}
export interface F0CarouselDialogProps extends Pick<F0DialogInternalProps, "isOpen" | "onClose" | "width" | "position" | "primaryAction" | "secondaryAction" | "otherActions" | "disableContentPadding" | "container"> {
    /** The pages, in the order they are walked. */
    items: F0CarouselDialogItem[];
    /**
     * WHICH PAGE IS SHOWING. Controlled, deliberately: the thing you opened the
     * dialog on is already state the app holds — the post you clicked in a feed,
     * a param in the URL — and a dialog keeping its own copy of it is two answers
     * to one question.
     *
     * An id that names nothing in `items` shows the {@link placeholder}, NOT some
     * other page. In a params-driven app the URL moves before the data does, and
     * "the id I asked for isn't here yet" must never render as "here is a
     * different post".
     */
    currentId: string;
    onNavigate: (id: string) => void;
    /**
     * WHAT TO SHOW WHILE `currentId` NAMES SOMETHING THE DIALOG DOESN'T HAVE — the
     * gap between the URL changing and the data arriving.
     *
     * The dialog stays open and stays put: same element, no reopen animation, the
     * arrows held until it knows where it is. Give it a `title` so the dialog keeps
     * an accessible name across the gap; a feed usually knows a post's title long
     * before its body.
     *
     * PREFER NOT TO NEED IT. If you can put an item in `items` for the id you are
     * navigating to — with skeleton `content` while its body loads — do that
     * instead: the id is always found, the title comes with it, and the position in
     * the header stays honest. This is the net for when you genuinely cannot.
     */
    placeholder?: {
        title?: string;
        content: ReactNode;
    };
    /**
     * The controls' words. There is no visible text on the arrows, so `previous`
     * and `next` are what a screen reader reads and what the tooltips say;
     * `position` writes the header's reading ("3 of 11").
     */
    labels?: {
        previous?: string;
        next?: string;
        position?: (current: number, total: number) => string;
    };
    /**
     * The ends JOIN UP: Next on the last page goes to the first. Off by default —
     * a list of eleven posts has an end, and an arrow that silently returns you to
     * the top is how you read the same thing twice without noticing.
     */
    loop?: boolean;
    /**
     * THE ITEMS ARE A PAGE of a longer set. Next then stays live past the last one
     * loaded: pressing it fetches, and the walk CONTINUES onto the new page as
     * soon as it lands, so the reader presses once rather than pressing, waiting,
     * and pressing again.
     *
     * It is the same {@link CarouselPaging} the carousel takes, on purpose. A post
     * opened from a feed is the same query as the feed it came from, so one
     * `useData` feeds both: the same records, the same `loadMore`. Walk past the
     * end in the dialog and the carousel behind it grows too, because there is one
     * list and both are looking at it.
     *
     * Arriving at the last loaded item ALSO asks for the next page, once per
     * position — so a source that answers `hasMore: true` with no new records
     * stalls instead of looping.
     *
     * `loop` is ignored while `hasMore`: an end that hasn't been reached yet is not
     * an end to join up.
     */
    pagination?: CarouselPaging;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const F0CarouselDialog: import('../../lib/data-testid').WithDataTestIdReturnType<({ items, currentId, onNavigate, labels, loop, pagination, placeholder, isOpen, onClose, ...dialogProps }: F0CarouselDialogProps) => import("react").JSX.Element | null>;
