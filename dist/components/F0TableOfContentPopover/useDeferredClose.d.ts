import { RefObject } from 'react';
/**
 * Manages the interaction between a HoverCard popover and portalled dropdown
 * menus rendered inside it.
 *
 * Problem: Dropdown menus portal their content outside the HoverCard, so when
 * the pointer moves into the dropdown the HoverCard sees a pointer-leave and
 * tries to close. We need to suppress that close while the menu is open, then
 * auto-close the popover when:
 *   1. The dropdown is dismissed (Escape, item selected, click outside), OR
 *   2. The pointer leaves *both* the dropdown and the HoverCard content.
 */
export declare function useDeferredClose(contentRef: RefObject<HTMLDivElement | null>, close: () => void): {
    deferClose: () => boolean;
};
