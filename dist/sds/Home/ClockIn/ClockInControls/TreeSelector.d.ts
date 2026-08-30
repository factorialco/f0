import { IconType } from '../../../../components/F0Icon';
/**
 * A node in one of the tile's pickers — a location, a project, anything you pick
 * by drilling down. `children` nests it, and a node WITHOUT children is a LEAF:
 * only leaves are selectable, which is what lets the hierarchy show as F0Select
 * group headings instead of an invented indent.
 *
 * Two or three levels is what reads well — location → workplace → work area,
 * project → subproject: the leaf names the row and its ancestors name the group
 * above it. Deeper nests still work; the heading just carries a longer chain.
 */
export type TreeSelectorItem = {
    id: string;
    name: string;
    icon?: IconType;
    children?: TreeSelectorItem[];
};
/** One selectable leaf, flattened: what it is, what it sits under, how to find it. */
type LeafRecord = {
    id: string;
    name: string;
    /** The ancestor chain, which becomes the group heading. */
    group: string;
    /** Leaf + ancestors, for the trigger — out there a leaf name can be ambiguous. */
    path: string;
    /** Leaf AND every ancestor: searching "Barcelona" must find its work areas. */
    haystack: string;
    icon?: IconType;
};
/**
 * Every leaf of the tree, in order, each carrying the context its row and trigger
 * need.
 *
 * A TOP-LEVEL leaf heads a group of its own — F0Select's grouping is
 * all-or-nothing (a group per record, or no groups), so there is no ungrouped
 * tail to put it in. In a list that nests nowhere the caller skips grouping
 * entirely, so this only shows up in mixed lists.
 */
export declare function flattenTree(items: TreeSelectorItem[]): LeafRecord[];
/** The selected leaf, wherever it sits in the tree. */
export declare const findLeaf: (items: TreeSelectorItem[], id: string | undefined) => TreeSelectorItem | undefined;
export interface TreeSelectorProps {
    items: TreeSelectorItem[];
    value?: string;
    onChange?: (value: string) => void;
    /** The picker's label, also the empty trigger's placeholder. */
    label: string;
    /** Placeholder for the search box. Falls back to F0Select's own wording. */
    searchPlaceholder?: string;
    /**
     * The field's glyph while nothing is selected — and for good, when the items
     * carry no icons of their own (projects). A selected leaf's own icon wins.
     */
    fieldIcon?: IconType;
    /** When false the picker offers a clear affordance. */
    required?: boolean;
    disabled?: boolean;
}
/**
 * The tile's picker for a tree of options: an `F0Select` the component owns and
 * builds from data, so a Home tile can't be handed a node that breaks its layout.
 *
 * Nesting arrives as F0Select GROUPS — the ancestor chain heads the group, its
 * leaves are the options under it. Grouping only kicks in when something actually
 * nests; in a flat list a heading per option would just repeat it.
 *
 * SEARCH AND PAGING are on, because these lists grow to hundreds and scrolling a
 * nested one to find a single work area is not a way to book time. The nested path
 * fetches through an infinite-scroll adapter and matches search against the leaf
 * AND its ancestors; the flat path leaves search to F0Select over `options`.
 *
 * It uses F0Select's OWN trigger rather than a `children` one: that path renders
 * the trigger as a `div`, which a keyboard can't reach (`SelectTrigger asChild`
 * over a plain element). The field is a real, focusable trigger, at `sm` because
 * it sits inside a widget.
 */
export declare function TreeSelector({ items, value, onChange, label, searchPlaceholder, fieldIcon, required, disabled, }: TreeSelectorProps): import("react").JSX.Element;
export {};
