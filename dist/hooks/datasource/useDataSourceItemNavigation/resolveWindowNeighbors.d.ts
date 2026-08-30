import { RecordType } from '../types/records.typings';
import { DataSourceItemId } from './types';
export type NeighborResolution<R extends RecordType> = {
    /** Index of the active item within the loaded records, or -1 when not found */
    activeIndex: number;
    activeItem: R | null;
    previousItem: R | null;
    nextItem: R | null;
    /**
     * How the neighbours were resolved. "window" means they were located in the
     * loaded records. Reserved extension point for id-relative adapter
     * resolution (e.g. a `fetchItemNeighbors` capability).
     */
    resolvedBy: "window";
};
/**
 * Locates the active item and its immediate neighbours within the currently
 * loaded records ("the window"). Pure — the single place neighbour resolution
 * happens, so alternative resolution strategies can be merged at this point.
 */
export declare function resolveWindowNeighbors<R extends RecordType>({ records, activeItemId, idProvider, }: {
    records: readonly R[];
    activeItemId: DataSourceItemId | null;
    idProvider: (item: R, index?: number) => DataSourceItemId;
}): NeighborResolution<R>;
