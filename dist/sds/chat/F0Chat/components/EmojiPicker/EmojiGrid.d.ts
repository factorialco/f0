import { GroupedVirtuosoHandle } from 'react-virtuoso';
import { EmojiEntry } from '../../utils/emoji-index';
import { EmojiLayout, EmojiSection } from './layout';
/**
 * Nine cells of 32px fill the 288px between the panel's 8px gutters exactly, so
 * the grid, the jump bar and the search box all share one column grid. (It was
 * eight 36px cells before the buttons went to F0's `md` size.)
 */
export declare const EMOJI_COLUMNS = 9;
/** Row height is handed to Virtuoso so it can size the scroller before a single
 * row has been measured — no first-paint jump. */
export declare const EMOJI_ROW_HEIGHT = 32;
type EmojiGridProps = {
    sections: EmojiSection[];
    layout: EmojiLayout;
    activeIndex: number;
    onActivate: (index: number) => void;
    onSelect: (emoji: EmojiEntry) => void;
    listboxId: string;
    label: string;
    optionId: (index: number) => string;
    /** Topmost rendered row — the jump-to bar highlights whatever section it
     * belongs to. */
    onTopRowChange: (row: number) => void;
};
/**
 * The virtualized emoji grid.
 *
 * Focus never comes here: the search box keeps it and points at the active cell
 * through `aria-activedescendant`, which is what lets someone type `fir` and
 * press Enter without a trip to the grid. Cells are therefore `tabIndex={-1}`
 * and the active one is marked with `aria-selected`, not with DOM focus — a
 * virtualized cell can be unmounted, and focus can't live on a node that isn't
 * there.
 */
export declare const EmojiGrid: import('react').ForwardRefExoticComponent<EmojiGridProps & import('react').RefAttributes<GroupedVirtuosoHandle>>;
export {};
