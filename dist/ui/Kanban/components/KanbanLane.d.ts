import { RecordType } from '../../../hooks/datasource';
import { LaneProps } from '../../Lane/types';
import { KanbanOnMoveParam } from '../types';
export declare function KanbanLane<TRecord extends RecordType>({ id, getLaneResourceIndexById, onMove, heightMode, ...laneProps }: {
    id?: string;
    getLaneResourceIndexById?: (id: string) => number;
    onMove?: (param: KanbanOnMoveParam) => Promise<TRecord>;
    allowReorder?: boolean;
    heightMode?: "fill" | "content";
} & LaneProps<TRecord>): import("react").JSX.Element;
