import { ReactNode } from 'react';
import { F0AnalyticsDashboardAskAiTarget, F0AnalyticsDashboardAskAiTargetWithQuote, DashboardItemFiltersConfig } from '../../types';
import { IconType } from '../../../../components/F0Icon';
import { DropdownItem as DropdownItemType } from '../../../../experimental/Navigation/Dropdown';
import { InfoHintContent } from '../../../../lib/InfoHint';
interface DashboardItemProps {
    title: string;
    description?: string;
    /**
     * Help copy for what this widget measures, revealed by an ⓘ icon beside the
     * title. See `DashboardItemBase.info` for how it differs from `description`
     * and `explanation`.
     */
    info?: string | InfoHintContent;
    isLoading: boolean;
    error?: Error;
    onRetry?: () => void;
    /** Content-area skeleton shown while loading. Each item type provides its own. */
    skeleton?: ReactNode;
    children: ReactNode;
    /** Download actions shown inside a "Download" submenu */
    actions?: DropdownItemType[];
    /**
     * Per-widget filter configuration. When set, a filter icon appears with the
     * other header actions on hover or keyboard focus (and remains available on
     * touch-only devices) and opens a compact anchored filter popover.
     */
    itemFilters?: DashboardItemFiltersConfig;
    /** When true, adds a "Delete" option to the dropdown menu */
    editMode?: boolean;
    /** Called when the user clicks the delete action */
    handleDelete?: (itemId: string) => void;
    /**
     * Overrides the built-in "Ask One" action. Given it, this component stops
     * touching the chat and the host answers instead — and the entry no longer
     * needs a chat to be mounted at all.
     */
    onAskAi?: (item: F0AnalyticsDashboardAskAiTarget) => void;
    /** Observes the built-in chat action without replacing it. */
    onAskAiTarget?: (item: F0AnalyticsDashboardAskAiTargetWithQuote) => void;
    /** Item ID — required when editMode is true for the delete callback */
    itemId?: string;
    /** Chart type transform options — rendered as a toggle group in the dropdown */
    chartTypeOptions?: {
        label: string;
        value: string;
        icon: IconType;
        isActive: boolean;
        onSelect: () => void;
    }[];
    /**
     * Optional markdown explanation of how this item's data is calculated.
     * When present, the dropdown menu shows a "Where does this data come from?"
     * entry that opens a dialog rendering this content as markdown. Hidden
     * entirely when omitted (backwards compatible).
     */
    explanation?: string;
    /** Whether this item is currently expanded to fill the grid */
    isFullscreen?: boolean;
    /**
     * A link rendered inline after the description, for something the description
     * implies but can't do — a chart showing "13 of 29 categories" offers the way
     * to see the rest. Kept out of the description string so the text stays
     * translatable and truncatable on its own.
     */
    descriptionAction?: {
        label: string;
        onClick: () => void;
    };
    /**
     * Take the height from the content instead of the available space. Set by an
     * expanded item whose content has an intrinsic height it must not compress
     * below — a horizontal bar chart drawing every category at a fixed row
     * height. The widget then grows past the viewport and the page scrolls.
     */
    fitContent?: boolean;
    /** Called when the user toggles fullscreen from the dropdown */
    onFullscreenChange?: (fullscreen: boolean) => void;
}
/**
 * Visual wrapper for a single dashboard widget.
 *
 * Always renders the real header (title + description) since those are
 * known from config. When loading, the content area shows the `skeleton`
 * prop instead of `children`. This eliminates layout shift and lets each
 * item type provide a skeleton that matches its content shape.
 */
export declare function DashboardItem({ title, description, info, isLoading, error, onRetry, skeleton, children, actions, itemFilters, editMode, handleDelete, onAskAi, onAskAiTarget, itemId, chartTypeOptions, explanation, isFullscreen, descriptionAction, fitContent, onFullscreenChange, }: DashboardItemProps): import("react").JSX.Element;
export {};
