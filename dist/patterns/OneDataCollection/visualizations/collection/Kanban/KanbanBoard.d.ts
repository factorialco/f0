import { KanbanOnMove, KanbanProps } from '../../../../../ui/Kanban/types';
import { RecordType } from '../../../../../hooks/datasource';
type KanbanBoardProps<R extends RecordType> = {
    lanes: KanbanProps<R>["lanes"];
    renderCard: KanbanProps<R>["renderCard"];
    getKey: KanbanProps<R>["getKey"];
    onCreate?: KanbanProps<R>["onCreate"];
    onMove?: KanbanOnMove<R>;
    idProvider?: (item: R, index?: number) => string | number | symbol;
    allowReorder: boolean;
    loading: boolean;
    heightMode?: KanbanProps<R>["heightMode"];
};
/**
 * Renders a single Kanban board (a set of lanes) for a given set of items.
 * Owns everything that must be scoped to one board: its DnD instance, the
 * per-lane index maps and the Kanban render. Data fetching and selection live
 * in KanbanCollection so they are shared across boards (grouping renders one
 * KanbanBoard per group).
 */
export declare const KanbanBoard: <R extends RecordType>({ lanes, renderCard, getKey, onCreate, onMove, idProvider, allowReorder, loading, heightMode, }: KanbanBoardProps<R>) => import("react").JSX.Element;
export {};
