import { RefObject } from 'react';
/**
 * Decides whether the header's action cluster should collapse (e.g. drop the
 * view-switcher labels) because it no longer fits next to the rest of the row.
 *
 * Why measured this way:
 * - `toolbarRef.clientWidth` is the *available* width: the toolbar is a block,
 *   so its width comes from its parent, not its (possibly overflowing) content.
 * - `actionsRef` wraps the actions, which sit in a `shrink-0` slot, so its
 *   `scrollWidth` is their natural (labelled) width regardless of overflow.
 *   `scrollWidth` on the toolbar itself is unreliable with `overflow: visible`.
 * - The natural width is remembered while NOT collapsed; once collapsed the
 *   actions shrink, so re-reading them would flip-flop. Comparing against the
 *   remembered labelled width keeps the toggle stable.
 */
export declare function useHeaderActionsCollapse(toolbarRef: RefObject<HTMLElement | null>, actionsRef: RefObject<HTMLElement | null>, reservedRef?: RefObject<HTMLElement | null>): boolean;
