import { default as useEmblaCarousel, UseEmblaCarouselType } from 'embla-carousel-react';
import { ButtonInternalProps } from '../components/F0Button/internal-types';
import * as React from "react";
/**
 * THE SHADOW BLEED, as classes.
 *
 * The viewport clips its slides, and a widget card's shadow is drawn OUTSIDE its
 * box — so the box is grown by `SPACE_FOR_WIDGET_SHADOW` (28px) on every side and
 * pulled back by the same amount, giving the shadow somewhere to land inside the
 * clip. The mask then fades that borrowed margin out, so a slide's shadow
 * disappears at the edge instead of being cut off square.
 *
 * ⚠️ THE NUMBERS ARE WRITTEN OUT, and that is forced rather than sloppy:
 * Tailwind's scanner never sees a class built from a variable, so `m-[${N}px]`
 * emits no CSS at all — the quiet kind of broken, since the markup still looks
 * right. `SPACE_FOR_WIDGET_SHADOW` remains the single source of truth and
 * `carousel.test.tsx` fails if these drift from it: 28px is `-m-7` / `p-7`, 56px
 * is the pair, 14px is the half.
 *
 * The borrowed band paints nothing but still hit-tests, so it takes no pointer
 * events; the track turns them back on for the slides in {@link CarouselContent}.
 * Embla's drag survives it — its listeners are on the viewport, but a drag
 * starts on a slide and the events reach it by bubbling.
 *
 * Exported for that test alone — nothing else should need it.
 */
export declare const CAROUSEL_SHADOW_BLEED: string;
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
    paging?: CarouselPaging;
};
/**
 * A carousel whose slides are ONE PAGE of a longer list.
 *
 * A carousel can only reason about the slides it holds, so on its own it says
 * "there is no next one" the moment it reaches the last one it was given — which
 * is wrong when the list continues on the server. This is the missing half of
 * that answer, and it is deliberately the shape `useData` already returns for an
 * infinite-scroll source (`paginationInfo.hasMore`, `isLoadingMore`, `loadMore`),
 * so wiring one to the other is passing three fields across.
 */
export type CarouselPaging = {
    /** Whether the source has records past the slides currently mounted. */
    hasMore: boolean;
    /** A fetch for the next page is in flight. */
    isLoading?: boolean;
    /** Fetch the next page and APPEND it to the slides. */
    onLoadMore: () => void;
    /**
     * How many records the source holds ALTOGETHER, when it says — `useData`'s
     * `totalItems`. For anything that reports a position out loud ("3 of 11"):
     * without it the only number available is how many have been loaded, which
     * moves every time another page arrives.
     *
     * The carousel itself ignores it. Its dots describe the slides that exist, and
     * a dot for a page nobody has fetched would be a control that cannot be
     * pressed.
     */
    total?: number;
};
export type CarouselPagingState = {
    canGoNext: boolean;
    goNext: () => void;
    isAwaitingPage: boolean;
    isPageInFlight: boolean;
};
declare const useCarouselPaging: () => CarouselPagingState;
declare const Carousel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CarouselProps & React.RefAttributes<HTMLDivElement>>;
declare const CarouselContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CarouselPrevious: React.ForwardRefExoticComponent<ButtonInternalProps & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselNext: React.ForwardRefExoticComponent<ButtonInternalProps & React.RefAttributes<HTMLButtonElement>>;
declare const CarouselDots: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
/**
 * THE PAGING ROW: an arrow on each end, the dots between them, under the slides.
 *
 * The alternative to `CarouselPrevious`/`CarouselNext`, which are absolutely
 * positioned overlays on the carousel's SIDES, revealed on hover. That is right
 * for a full-bleed gallery and wrong everywhere a carousel sits inside something
 * else — a widget, a card, a panel: a control that only exists while the pointer
 * is over it is a control a touch user never finds, and one hanging off the left
 * edge of a card hangs over whatever is beside it.
 *
 * IN THE FLOW instead, and always there. Both arrows keep their corners whether
 * or not there is anywhere to go — disabled rather than removed, so the row
 * doesn't change width under the pointer — and the dots take the middle, which
 * is `CarouselDots` unchanged (it hides itself when there is only one page).
 *
 * The `pt-4` is the row's own: it belongs to the gap ABOVE the controls rather
 * than to the slides' bottom margin, so a carousel that has no controls has no
 * space under it either.
 */
declare const CarouselControls: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    /**
     * The arrows' accessible names and tooltips. There is no visible text in
     * this row, so these are the only words in it.
     */
    labels?: {
        previous?: string;
        next?: string;
    };
    /** Whether the dots sit between the arrows. Defaults to true. */
    showDots?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export { Carousel, CarouselContent, CarouselControls, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious, useCarouselPaging, type CarouselApi, };
