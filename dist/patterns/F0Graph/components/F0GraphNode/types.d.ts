import { ReactNode } from 'react';
import { AvatarVariant } from '../../../../components/avatars/F0Avatar';
import { TagVariant } from '../../../../components/tags/F0Tag/F0Tag';
/** The built-in tag visual types that can be rendered in a node's metadata row. */
export type F0GraphNodeTagType = TagVariant["type"];
/**
 * Identifies the show/hide column a tag belongs to. A column defaults to the
 * tag's visual `type` (`"raw"`, `"status"`, …) but can be any custom string, so
 * two tags sharing a `type` — e.g. two `raw` pills — can occupy independent
 * columns with their own toggle, label and default visibility.
 */
export type F0GraphNodeTagColumn = string;
/**
 * A tag rendered in a node's metadata row. Its visual is driven by the
 * `TagVariant` `type`; its column identity — which toggle/label/default-
 * visibility bucket it falls into — is `column ?? type`.
 */
export type F0GraphNodeTag = TagVariant & {
    /**
     * Optional column identity, decoupling this tag's show/hide toggle, hover-
     * card label and default visibility from its visual `type`. Defaults to
     * `type` when omitted. Use it to give two tags of the same `type` (e.g. a
     * second `raw` pill) their own independent column.
     */
    column?: F0GraphNodeTagColumn;
};
/** The column a tag belongs to: its explicit `column`, else its visual `type`. */
export declare const tagColumn: (tag: F0GraphNodeTag) => F0GraphNodeTagColumn;
/**
 * Optional human-readable label per tag column. Used as the metadata row label
 * inside the node's hover card (see [[F0GraphNodeHoverCard]]). Keyed by the
 * built-in tag types plus any custom `column` keys (see [[F0GraphNodeTag]]).
 */
export type F0GraphNodeTagLabels = Partial<Record<F0GraphNodeTagColumn, string>>;
export declare const graphNodeVariants: readonly ["detail", "compact", "dot"];
export type GraphNodeVariant = (typeof graphNodeVariants)[number];
export declare const graphNodeStates: readonly ["default", "selected", "highlighted", "dimmed"];
export type GraphNodeState = (typeof graphNodeStates)[number];
export interface F0GraphNodeProps {
    /** Visual variant based on zoom level */
    variant?: GraphNodeVariant;
    /** Visual state */
    state?: GraphNodeState;
    /** Whether the node is expanded (has visible children) */
    expanded?: boolean;
    /** ARIA tree level (1-based depth) */
    level?: number;
    /** Tab index for roving tabindex (0 = focused, -1 = not focused) */
    tabIndex?: 0 | -1;
    /** ARIA set size — number of siblings at this level */
    setSize?: number;
    /** ARIA position in set — 1-based index among siblings */
    posInSet?: number;
    /** Whether the node has children */
    hasChildren?: boolean;
    /** Number of children (informational) */
    childrenCount?: number;
    /** Callback when expand/collapse is toggled */
    onExpandToggle?: () => void;
    /** Callback when the node is clicked */
    onClick?: () => void;
    /** Ref callback for registering this node's DOM element (used by roving tabindex) */
    nodeRef?: (el: HTMLDivElement | null) => void;
    /**
     * Avatar shown on the leading side of the pill. Always rendered at size `lg`.
     * Its variant also drives the node silhouette: a `person` avatar keeps the
     * circular dot/pill, every other variant (`team`, `company`, `icon`, …) makes
     * the node a rounded-square card.
     */
    avatar?: AvatarVariant;
    /** Primary line of text. Hidden in dot variant. */
    title?: ReactNode;
    /** Secondary line of text. Hidden in compact and dot variants. */
    subtitle?: ReactNode;
    /**
     * Tag metadata rendered as a flex-wrap row below the pill (detail variant
     * only). Every tag is rendered individually — tags are never grouped or
     * collapsed, even when several share the same `type`.
     */
    tags?: F0GraphNodeTag[];
    /**
     * Set of tag columns that should be rendered. When provided, tags whose
     * column (`column ?? type`) is not in the set are filtered out. When
     * omitted, all tags are rendered. Used by the parent `<F0Graph>` per-column
     * visibility toggles.
     */
    visibleTagTypes?: ReadonlySet<F0GraphNodeTagColumn>;
    /** Optional per-column labels, used as metadata row labels in the hover card. */
    tagLabels?: F0GraphNodeTagLabels;
    /**
     * Floating toolbar shown above the node when it is selected (detail
     * variant only). Rendered via ReactFlow `NodeToolbar`, so the host
     * tree must be wrapped in a `ReactFlowProvider` for these actions to
     * appear.
     */
    actions?: ReactNode;
    /** Show a skeleton/loading placeholder instead of real content. */
    loading?: boolean;
    /**
     * In the compacted modes (compact/dot), reveal the rest of the node's info in
     * an F0Card popover on hover. Shows only the non-hidden tags (those allowed by
     * `visibleTagTypes`). No-op in the detail variant, where everything is already
     * on screen.
     */
    hoverCard?: boolean;
    /** DOM id for aria-owns cross-references */
    nodeId?: string;
    /** Space-separated DOM ids for aria-owns (accessible tree hierarchy) */
    ariaOwns?: string;
    /**
     * Render as one row of a stacked column instead of as a pill, because the
     * parent set `stackNodes` (job levels under a role, plan tiers under a
     * product). `<F0Graph>` decides this and passes it through the render
     * context, so a `renderNode` that spreads `{...ctx}` gets the right shape
     * without branching.
     *
     * A row keeps the pill's semantics (selection, focus, ARIA, keyboard) and its
     * title type scale per `variant`, but not its geometry: it sits a little
     * narrower than the parent card and centred on it, stands at a fixed height
     * the layout has reserved for it, and drops `subtitle` / `tags` / `actions` /
     * `hoverCard`, which have nowhere to go in a strip.
     */
    stacked?: boolean;
    /**
     * Content pinned to the trailing edge of a stacked row — a count or a small
     * icon button. Clicks inside it do not select the node. Ignored unless
     * `stacked`.
     *
     * Not a selection affordance: F0Graph has no multi-select, so a checkbox here
     * would promise a behaviour the graph does not have.
     */
    trailing?: ReactNode;
    /**
     * Row height in px, matching the band `<F0Graph>` reserved via
     * `stackedNodeHeight`. Ignored unless `stacked`.
     */
    stackedHeight?: number;
}
