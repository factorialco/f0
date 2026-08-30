import { WithDataTestIdProps } from '../../../../lib/data-testid';
import { BaseMapMarkerLabelPlacement, BaseMapMarkerSize } from '../internal/BaseMapMarker';
/**
 * Product-semantic marker variants. Unlike the internal `BaseMapMarker` engine
 * (which exposes every knob), each of these fixes its own color and rendering
 * so a given concept looks and behaves the same everywhere on the map. Callers
 * pick a variant and pass only its data.
 */
export declare const f0MapMarkerVariants: readonly ["default", "workplace", "employee", "company", "stop"];
export type F0MapMarkerVariant = (typeof f0MapMarkerVariants)[number];
export declare const f0MapMarkerSizes: readonly ["sm", "md", "lg"];
export type F0MapMarkerSize = BaseMapMarkerSize;
export declare const f0MapMarkerLabelPlacements: readonly ["right", "bottom", "left", "top"];
export type F0MapMarkerLabelPlacement = BaseMapMarkerLabelPlacement;
interface F0MapMarkerBaseProps extends WithDataTestIdProps {
    /**
     * Marker size. Map-managed: `F0Map` bumps it up a step at high zoom (where
     * POI names appear). Not meant to be set by hand. Defaults to `"md"`.
     */
    size?: F0MapMarkerSize;
    /** Active state (map-managed): grows and drops the pin indicator. */
    selected?: boolean;
    /** Collapse to just the dot (map-managed): folds out of a selected neighbour's way. */
    collapsed?: boolean;
    /** Text label (e.g. the site or person name). */
    label?: string;
    /** Toggle the label without removing it. Defaults to `true`. */
    showLabel?: boolean;
    /** Label side. Map-managed: `F0Map`'s collision pass sets this. */
    labelPlacement?: F0MapMarkerLabelPlacement;
    onClick?: () => void;
    ariaLabel?: string;
    /**
     * Render the pin outside the tab order and hidden from assistive tech while
     * keeping it mouse-clickable (map-managed: the map relies on its operable
     * `F0MapList` instead of the canvas pins). Defaults to `false`.
     */
    presentational?: boolean;
    /** @private */
    className?: string;
}
/**
 * The data each semantic variant needs. Appearance is fixed by the variant:
 *  - `default`: a plain pin, no icon or avatar (the generic marker).
 *  - `workplace`: a building glyph on a fixed brand hue (all sites match).
 *  - `employee` / `company`: an avatar whose color is its own identity color
 *    (grey when a photo replaces the colored chip).
 *  - `stop`: a route stop - a single letter (A, B, C...) on the same fixed
 *    hue as the route/arc lines it punctuates.
 */
export type F0MapMarkerVariantProps = {
    variant: "default";
} | {
    variant: "workplace";
} | {
    variant: "employee";
    firstName: string;
    lastName: string;
    src?: string;
} | {
    variant: "company";
    name: string;
    src?: string;
} | {
    variant: "stop";
    letter: string;
};
export type F0MapMarkerProps = F0MapMarkerBaseProps & F0MapMarkerVariantProps;
export declare const F0MapMarker: import('react').ForwardRefExoticComponent<F0MapMarkerProps & import('react').RefAttributes<HTMLButtonElement>>;
export {};
