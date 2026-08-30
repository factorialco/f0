import { IconType } from '../../../../../components/F0Icon';
import { WithDataTestIdProps } from '../../../../../lib/data-testid';
export declare const markerSizes: readonly ["sm", "md", "lg"];
export type BaseMapMarkerSize = (typeof markerSizes)[number];
export declare const markerVariants: readonly ["color", "icon", "letter", "person", "team", "company", "image"];
export type BaseMapMarkerVariant = (typeof markerVariants)[number];
export declare const markerColors: readonly ["neutral", "grey", "radical", "malibu", "viridian", "flubber", "grass", "camel", "indigo", "lilac", "orange", "purple", "yellow", "red", "army", "smoke", "barbie"];
export type BaseMapMarkerColor = (typeof markerColors)[number];
/**
 * Raw HSL triplet ("H S% L%") for a palette color, per theme (`.50` light,
 * `.70` dark). For non-DOM consumers that need the sanctioned hue value where
 * the `--<hue>` CSS vars aren't available - e.g. GL line-layer paint, which
 * takes a plain color string. Wrap it as `hsl(...)` at the call site.
 */
export declare const markerColorTriplet: (c: BaseMapMarkerColor, isDark: boolean) => string;
/**
 * The ink color (grey.100) at low opacity - the one shadow tone for markers.
 * Deliberately not a `--neutral-*` var: those invert in dark mode, and a
 * shadow must stay dark on both themes.
 */
export declare const MARKER_SHADOW_HSL: "218 48% 10%";
export declare const markerLabelPlacements: readonly ["right", "bottom", "left", "top"];
export type BaseMapMarkerLabelPlacement = (typeof markerLabelPlacements)[number];
/**
 * Every dimension scales proportionally with the marker size (not via a CSS
 * transform), so the relationship between marker, label, border, gap and caret
 * stays constant across sizes. `xl` is not part of the public size prop: it is
 * reserved for the selected state — clicking a marker of any size grows it to
 * `xl` until it is deselected.
 */
export type BaseMapMarkerEffectiveSize = BaseMapMarkerSize | "xl";
export interface BaseMapMarkerMetrics {
    d: number;
    border: number;
    label: number;
    lineH: number;
    gap: number;
    maxLabelW: number;
    caretW: number;
    caretH: number;
    caretOverlap: number;
    shadowY: number;
    shadowBlur: number;
    icon: "xs" | "sm" | "md" | "lg";
    avatar: "xs" | "sm" | "md" | "lg";
}
export declare const getMarkerMetrics: (size: BaseMapMarkerEffectiveSize) => BaseMapMarkerMetrics;
/** Radius of the dot that marks the coordinate while selected/collapsed. */
export declare const SELECTED_DOT_R = 5.6;
/** Gap between the pin tip and the dot's top edge. */
export declare const SELECTED_DOT_GAP = 1.5;
/**
 * The round head sits this many px lower than a pure pin-tip-to-dot layout
 * would place it, so it reads as dropped toward the dot. The caret's top is
 * raised by the same amount, so the pin tip still meets the dot.
 */
export declare const SELECTED_HEAD_DROP = 3;
/** Y offset of the selected (xl) head group relative to the anchor point. */
export declare const getSelectedHeadGroupY: () => number;
interface BaseMapMarkerBaseProps extends WithDataTestIdProps {
    /** Defaults to `"md"`. */
    size?: BaseMapMarkerSize;
    /**
     * f0 palette hue (or `neutral` / `grey`) for the `color` / `icon` variants
     * (default `"radical"`). Ignored for avatar/image variants: person / team /
     * company derive their accent (label + dot) from the avatar's own color, and
     * `image` stays neutral.
     */
    color?: BaseMapMarkerColor;
    /**
     * Active state: the marker grows to the reserved `xl` size and a white pin
     * indicator drops in underneath.
     */
    selected?: boolean;
    /**
     * Collapse to just the coordinate dot (no head, no label). The map uses this
     * to fold a marker out of the way when the selected marker grows over it, so
     * the enlarged head / its dropped label don't clash with a neighbour.
     */
    collapsed?: boolean;
    /** Text label. No label is rendered when omitted. */
    label?: string;
    /** Toggle the label without removing it (e.g. zoom-dependent). Defaults to `true`. */
    showLabel?: boolean;
    /**
     * Where the label sits relative to the marker. Defaults to `"right"`.
     * The map layer flips colliding labels to another side (collision handling
     * lives in F0Map, which knows every marker's screen position).
     */
    labelPlacement?: BaseMapMarkerLabelPlacement;
    onClick?: () => void;
    ariaLabel?: string;
    /**
     * Render the interactive marker outside the tab order and hidden from
     * assistive tech (`tabIndex={-1}` + `aria-hidden`) while keeping it
     * mouse-clickable. The map uses this so its ~N canvas pins don't duplicate
     * the operable `F0MapList` for keyboard and screen-reader users - the list is
     * the single operable path. Defaults to `false`.
     */
    presentational?: boolean;
    /** @private */
    className?: string;
}
/** The per-variant visual config (the discriminated union half of the props). */
export type BaseMapMarkerVariantProps = {
    variant?: "color";
} | {
    variant: "icon";
    icon: IconType;
} | {
    variant: "letter";
    letter: string;
} | {
    variant: "person";
    firstName: string;
    lastName: string;
    src?: string;
} | {
    variant: "team";
    name: string;
    src?: string;
} | {
    variant: "company";
    name: string;
    src?: string;
} | {
    variant: "image";
    src: string;
    alt?: string;
};
export type BaseMapMarkerProps = BaseMapMarkerBaseProps & BaseMapMarkerVariantProps;
/**
 * Internal marker-rendering engine. Exposes every knob (size, selected,
 * caret geometry, label placement) because the map's own internals -
 * collision, selection and clustering - drive them. Not part of the public
 * surface: consumers render markers by passing `F0MapPoint[]` to `F0Map`,
 * which keeps size and behavior uniform.
 */
export declare const BaseMapMarker: import('react').ForwardRefExoticComponent<BaseMapMarkerProps & import('react').RefAttributes<HTMLButtonElement>>;
export {};
