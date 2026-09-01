import { MotionValue, Transition } from 'motion/react';
/** What the rail body is at this moment. One element, three presentations. */
export type RailMode = 
/** The rail's own column, holding every widget. */
"column"
/** On its way into the strip: lifted out of the column, shrinking. */
 | "retracting"
/** A single widget floating out of the glyph you hovered. */
 | "panel";
export interface RailMotion {
    mode: RailMode;
    /**
     * Whether the rail BODY should be at full size and opacity.
     *
     * Only the floating panel is ever anything else. Collapsing is not the body's
     * animation to play: its cards fade out where they stand as the strip's glyphs
     * slide in (see `WidgetMotion`'s stow), and a block that also shrank would be a
     * second gesture drawn on top of theirs.
     */
    bodyOut: boolean;
    /** `display: none`, which arrives only once the retract has played out. */
    panelHidden: boolean;
    transition: Transition;
    /** The rail column's width, for the grid template's variable. */
    widthPx: MotionValue<string>;
    /** When the strip's first glyph starts arriving. */
    glyphDelayMs: number;
}
export interface RailMotionOptions {
    collapsed: boolean;
    /** Whether a widget is floating out of the strip. */
    open: boolean;
    /**
     * Whether the panel should travel to its new offset. True only between two
     * glyphs — see `NewHomeLayout`'s `openFromAnchor`.
     */
    glide: boolean;
    /** Whether the rail is being drawn at all (the layout has a width for it). */
    drawn: boolean;
    /** What the rail's column is worth right now: full width, or the strip. */
    width: number;
}
/**
 * How the rail MOVES: the genie, and the column width the genie has to agree
 * with. Everything that decides it lives here so the layout can stay about
 * layout.
 *
 * THE GENIE. Collapsing must not read as one thing being swapped for another, so
 * the rail's presentation LAGS the decision: the grid column starts narrowing and
 * the strip starts arriving the moment `collapsed` flips, while the rail body
 * spends `GENIE_RETRACT_MS` shrinking toward the strip's corner before it becomes
 * the floating panel. Hovering a glyph mid-retract skips the rest of it — what you
 * asked for is the panel, and finishing an animation you interrupted is not an
 * answer.
 *
 * Nothing here unmounts to animate. Every one of these is the SAME render moved
 * around, because a rail widget that is rebuilt has lost whatever it had loaded,
 * timed or animated (see `WidgetContainer`'s `visibleWidgetId`).
 */
export declare const useRailMotion: ({ collapsed, open, glide, drawn, width, }: RailMotionOptions) => RailMotion;
