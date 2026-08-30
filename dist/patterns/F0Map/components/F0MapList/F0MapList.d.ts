import { WithDataTestIdProps } from '../../../../lib/data-testid';
import { F0MapPoint } from '../../types';
export interface F0MapListProps extends WithDataTestIdProps {
    points: F0MapPoint[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    /**
     * Render visibly (the WebGL/tile-error fallback). Otherwise the list is
     * screen-reader-only - present in the DOM and operable, but not shown.
     */
    visible?: boolean;
    /** Accessible name for the list landmark (and heading when visible). */
    label?: string;
    /** Anchor id, so a "skip to list" link can move focus here. */
    id?: string;
    /** Extra classes for the list container (e.g. when rendered as a fallback). */
    className?: string;
}
/**
 * The map's markers as a real, operable HTML list - the conformant text
 * alternative to the WebGL canvas (which is opaque to assistive tech) and the
 * visible fallback when the map can't render. Screen-reader and keyboard users
 * drive the map through this: activating an item selects that marker (F0Map
 * flies to it). Kept in sync with the map by rendering from the same `points`.
 */
export declare const F0MapList: import('react').ForwardRefExoticComponent<F0MapListProps & import('react').RefAttributes<HTMLElement>>;
