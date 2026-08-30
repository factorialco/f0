import { default as React } from 'react';
import { CarouselPaging } from '../../../ui/carousel';
import { CarouselBreakpoints } from './types';
interface CarouselProps {
    children: React.ReactNode;
    showArrows?: boolean;
    showDots?: boolean;
    /**
     * WHERE THE ARROWS GO.
     *
     * - `"overlay"` (the default) — pinned to the carousel's sides and revealed on
     *   hover. Right for a full-bleed gallery, where the slides are the page.
     * - `"bottom"` — a row UNDER the slides, an arrow on each end with the dots
     *   between them, always visible and always the same width. Use it whenever
     *   the carousel sits inside something else — a widget, a card, a panel: side
     *   overlays hang over whatever is beside the container, and a hover-only
     *   control is one a touch user never finds.
     *
     * `"bottom"` puts the dots in that row, so `showDots` still decides whether
     * there are any.
     */
    arrowsPlacement?: "overlay" | "bottom";
    /** The arrows' accessible names. Defaults to "Previous" / "Next". */
    arrowLabels?: {
        previous?: string;
        next?: string;
    };
    /**
     * The slides are ONE PAGE of a longer list. Next then stays live at the end
     * and fetches the rest instead of going dead — see {@link CarouselPaging}, and
     * append the new records to `children` as they arrive.
     *
     * `arrowsPlacement: "bottom"` only: the overlay arrows are a hover affordance
     * over the slides, and a fetch you can't see you triggered is worse than no
     * fetch at all.
     */
    paging?: CarouselPaging;
    autoplay?: boolean;
    delay?: number;
    columns?: CarouselBreakpoints;
    showPeek?: boolean;
    doubleColumns?: {
        index: number;
        sizes: (keyof CarouselBreakpoints)[];
    }[];
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Carousel: import('../../../lib/data-testid').WithDataTestIdReturnType<({ children, columns, showArrows, showDots, arrowsPlacement, arrowLabels, paging, autoplay, delay, showPeek, doubleColumns, }: CarouselProps) => React.JSX.Element>;
export {};
