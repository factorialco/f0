import { RecordType, SortingsDefinition } from '../../../../../../hooks/datasource';
import { SummariesDefinition } from '../../../../summary';
import { ColId, HeaderGroupDefinition, TableColumnDefinition } from '../types';
import { ColumnCollapseTransition } from './useColumnCollapseAnimation';
/**
 * Marker carried by the animating cells of a group so the animation can find
 * them. Group ids come from consumers and are not guaranteed to be usable in a
 * selector, so this is keyed by the group's position among the collapsible ones
 * rather than by the id itself.
 */
export declare const collapsingCellClassFor: (groupIndex: number) => string;
export type HeaderGroupSpan = {
    type: "group";
    id: string;
    label: string;
    colSpan: number;
    columnIndices: number[];
    /** True when the user can collapse/expand this group. */
    collapsible: boolean;
    /** True when the group is currently collapsed. */
    collapsed: boolean;
};
export type HeaderUngroupedSpan = {
    type: "ungrouped";
    columnIndices: number[];
};
export type HeaderGroupEntry = HeaderGroupSpan | HeaderUngroupedSpan;
export declare const groupBorderClass = "border-0 border-r border-solid border-f1-border-secondary";
/** A header group definition with its defaults resolved. */
type NormalizedHeaderGroup = {
    label: string;
    collapsedColumns?: ColId[];
    defaultCollapsed: boolean;
    highlighted: boolean;
};
type NormalizedHeaderGroups = Record<string, NormalizedHeaderGroup>;
/**
 * Resolves the shorthand string form and the per-group defaults into a single
 * definition map. Returns `null` when no groups are configured.
 */
export declare const normalizeHeaderGroups: (headerGroups?: Record<string, string | HeaderGroupDefinition>) => NormalizedHeaderGroups | null;
/**
 * Computes header group entries from columns and their group definitions.
 * Adjacent columns sharing the same `headerGroupId` are merged into a single
 * spanning entry. Columns without a `headerGroupId` produce an ungrouped entry
 * that renders an empty cell in the group row and the real header in the column row.
 */
export declare const computeHeaderGroups: (columns: ReadonlyArray<{
    headerGroupId?: string;
}>, definitions: NormalizedHeaderGroups, collapsedGroups?: ReadonlySet<string>) => HeaderGroupEntry[];
export type UseHeaderGroupsOptions = {
    headerGroups?: Record<string, string | HeaderGroupDefinition>;
    onCollapsedChange?: (groupId: string, collapsed: boolean) => void;
    /** Columns that stay rendered even when their header group collapses. */
    preservedColumnIds?: ReadonlySet<ColId>;
};
export type UseHeaderGroupsReturn<R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition> = {
    /**
     * The columns to render, with the ones hidden by collapsed groups removed.
     * Identical to the input when nothing is collapsed.
     */
    columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>;
    /**
     * Header group entries for the two-row header. `null` when no groups are
     * configured or no visible column carries a `headerGroupId`, signalling that
     * the single-row header should be rendered instead.
     */
    headerGroups: HeaderGroupEntry[] | null;
    /** Collapses an expanded group, or expands a collapsed one. */
    toggleHeaderGroup: (groupId: string) => void;
    /**
     * Marker class each animating column's cells should carry, keyed by column
     * id. Empty once nothing is in flight.
     */
    collapsingCellClasses: ReadonlyMap<ColId, string>;
    /** One entry per group in flight, to hand to the collapse animation. */
    collapseTransitions: ColumnCollapseTransition[];
    /** Called by the animation to release a group once it has played out. */
    settleHeaderGroup: (groupId: string) => void;
};
/**
 * Resolves header group definitions, owns the collapsed state, and filters out
 * the columns hidden by collapsed groups so the rest of the table — rows,
 * summary footer, sticky offsets — follows automatically.
 */
export declare const useHeaderGroups: <R extends RecordType, Sortings extends SortingsDefinition, Summaries extends SummariesDefinition>(columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>, { headerGroups, onCollapsedChange, preservedColumnIds, }?: UseHeaderGroupsOptions) => UseHeaderGroupsReturn<R, Sortings, Summaries>;
export {};
