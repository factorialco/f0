import { Dispatch } from 'react';
import { ClockInGraphProps } from '../ClockInGraph';
import { ClockInLocation } from './LocationSelector';
import { ClockInProject } from './ProjectSelector';
export type { ClockInLocation, ClockInProject };
interface BreakType {
    id: string;
    name: string;
    duration?: string;
    description?: string;
    isPaid: boolean;
}
/**
 * How the pieces are laid out. Both variants show the same day, run the same
 * state machine and use the same controls — only their arrangement differs.
 */
export type ClockInControlsVariant = "default" | "horizontal-bar";
/** Everything both variants take, on the same terms. */
interface ClockInControlsBaseProps {
    /** Optional remaining time in minutes */
    remainingMinutes?: number;
    /** Clock in entries data */
    data: ClockInGraphProps["data"];
    /** Tracked minutes */
    trackedMinutes: number;
    /** Labels for all text content */
    labels: {
        clockedOut: string;
        clockedIn: string;
        onBreak: string;
        clockIn: string;
        clockOut: string;
        break: string;
        resume: string;
        remainingTime: string;
        overtime: string;
        selectLocation: string;
        selectProject: string;
        paid: string;
        unpaid: string;
        /**
         * Placeholders for the pickers' search boxes (`horizontal-bar` only).
         * Optional: without them the pickers fall back to F0Select's own wording.
         */
        searchProject?: string;
        searchLocation?: string;
    };
    /** The selected location — a leaf, when the list nests. */
    locationId?: string;
    onChangeLocationId: Dispatch<string>;
    /**
     * The locations to offer. Each may carry `sublocations`, two or three levels
     * deep (location → workplace → work area), and selection is then a leaf.
     *
     * Nesting is drawn by the `horizontal-bar` variant, which owns its picker. The
     * `default` variant's built-in select is flat and offers only the top level — it
     * has `locationSelectorElement` for a consumer's own drill-in instead — though
     * it still DISPLAYS a selected leaf wherever it sits in the tree.
     */
    locations: ClockInLocation[];
    breakTypes?: BreakType[];
    onChangeBreakTypeId?: Dispatch<string>;
    canShowLocation?: boolean;
    locationSelectorDisabled?: boolean;
    canShowBreakButton?: boolean;
    canSeeGraph?: boolean;
    canSeeRemainingTime?: boolean;
    /** Callback when Clock In button is clicked */
    onClockIn?: () => void;
    /** Callback when Clock Out button is clicked */
    onClockOut?: () => void;
    /** Callback when Break button is clicked */
    onBreak?: (breakTypeId?: string) => void;
    canShowProject?: boolean;
    breakTypeName?: string;
    /**
     * On a break, which action gets the primary button — the other becomes an
     * icon-only outline beside it.
     *
     * Unset, it follows the day: `"clock-out"` once you're into overtime (the hours
     * are done, so ending them is the useful move), `"resume"` while there are hours
     * left. Set it to pin one regardless.
     */
    onBreakPromote?: "resume" | "clock-out";
    /**
     * Draws a placeholder shaped like the chosen `variant` instead of the
     * controls — for when the day itself hasn't arrived yet. Prefer it over
     * rendering a zeroed-out day: `trackedMinutes={0}` with no `data` is a real
     * state ("clocked out, nothing tracked"), not a missing one.
     */
    loading?: boolean;
}
/**
 * The `default` variant, where the consumer may bring its OWN location and
 * project controls as nodes: this is the arrangement Factorial already ships,
 * and both slots are in use (e.g. a drill-in location selector).
 */
interface ClockInControlsDefaultProps extends ClockInControlsBaseProps {
    /**
     * The status and its controls beside the circular `ClockInGraph`, with the
     * location/project row underneath.
     */
    variant?: "default";
    /**
     * Optional custom location control. When provided, it replaces the built-in
     * flat location `F0Select` (in both the editable clocked-out state and the
     * read-only clocked-in state), letting the consumer supply its own control —
     * e.g. a drill-in selector (location → workplace → work area). The consumer
     * owns its data and editable/disabled state, mirroring `projectSelectorElement`.
     */
    locationSelectorElement?: React.ReactNode;
    projectSelectorElement?: React.ReactNode;
    projects?: never;
    projectId?: never;
    onChangeProjectId?: never;
    projectSelectorDisabled?: never;
    /** Only the `horizontal-bar` variant owns the pickers, so only it can relax them. */
    projectRequired?: never;
    locationRequired?: never;
}
/**
 * The `horizontal-bar` variant, which owns BOTH selectors.
 *
 * The custom-render slots are typed away here (`never`) on purpose: this
 * arrangement puts the two pickers on one line with the day's controls, and a
 * consumer-supplied node in either slot is what would break that line — so it
 * takes DATA instead and renders the pickers itself. Location becomes an
 * `F0ButtonDropdown`, projects an `F0Select` whose groups are the subprojects.
 */
interface ClockInControlsHorizontalBarProps extends ClockInControlsBaseProps {
    /**
     * The Home-widget shape from the custom-home prototype: four full-width rows,
     * each pinning its two halves to the tile's ends — status + running total on
     * one line, the day as a horizontal bar, when it started and what is left of
     * it, then the location and the controls. Fits a narrow rail, where the 160px
     * ring does not.
     */
    variant: "horizontal-bar";
    /** Not available in this variant — pass `locations` and let it render them. */
    locationSelectorElement?: never;
    /** Not available in this variant — pass `projects` and let it render them. */
    projectSelectorElement?: never;
    /** The projects to offer, each optionally with its own subprojects. */
    projects?: ClockInProject[];
    /** The selected project — or subproject, since selection is always a leaf. */
    projectId?: string;
    onChangeProjectId?: Dispatch<string>;
    projectSelectorDisabled?: boolean;
    /**
     * Whether a project must be chosen to clock in. When it isn't, the picker
     * offers a clear affordance and reports the empty string once cleared.
     * Defaults to `true` — the stricter reading, and the behaviour before there
     * was any way to clear.
     */
    projectRequired?: boolean;
    /** The same for the location. Defaults to `true`. */
    locationRequired?: boolean;
}
export type ClockInControlsProps = ClockInControlsDefaultProps | ClockInControlsHorizontalBarProps;
export declare function ClockInControls({ trackedMinutes, remainingMinutes, data, labels, locationId, locations, canShowLocation, locationSelectorDisabled, onClockIn, onClockOut, onBreak, breakTypes, onChangeBreakTypeId, canShowBreakButton, canSeeGraph, canSeeRemainingTime, onChangeLocationId, canShowProject, projectSelectorElement, locationSelectorElement, projects, projectId, onChangeProjectId, projectSelectorDisabled, projectRequired, locationRequired, breakTypeName, onBreakPromote, variant, loading, }: ClockInControlsProps): import("react").JSX.Element;
