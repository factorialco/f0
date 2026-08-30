import { DropTargetRecord } from '@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types';
import { KanbanOnMoveParam } from '../types';
export declare function findTypeOfDropForLane(laneId: string | undefined, dropTargets: DropTargetRecord[]): {
    type: "sameLaneOverCard";
    laneTarget: DropTargetRecord;
    cardTarget: {
        data: {
            index?: number;
        };
    };
} | {
    type: "sameLaneOverEmptySpace";
    laneTarget: DropTargetRecord;
    cardTarget: undefined;
} | {
    type: "differentLaneOverCard";
    laneTarget: undefined;
    cardTarget: {
        data: {
            index?: number;
        };
    };
} | {
    type: "differentLaneOverEmptySpace";
    laneTarget: undefined;
    cardTarget: undefined;
};
export declare function optimisticSameLaneOverCard<TRecord>(args: {
    resourceIndexOnLane: number;
    cardTarget: {
        data: {
            index?: number;
        };
    };
    sourceItem: TRecord;
    fromLaneId: string;
    toLaneId: string;
    sourceId: string;
    setItems: React.Dispatch<React.SetStateAction<TRecord[]>>;
}): KanbanOnMoveParam;
export declare function optimisticSameLaneOverEmpty<TRecord>(args: {
    resourceIndexOnLane: number;
    sourceItem: TRecord;
    fromLaneId: string;
    toLaneId: string;
    sourceId: string;
    setItems: React.Dispatch<React.SetStateAction<TRecord[]>>;
}): KanbanOnMoveParam;
export declare function optimisticDifferentLaneInsertOverCard<TRecord>(args: {
    cardTarget: {
        data: {
            index?: number;
        };
    };
    sourceItem: TRecord;
    fromLaneId: string;
    toLaneId: string;
    sourceId: string;
    setItems: React.Dispatch<React.SetStateAction<TRecord[]>>;
}): KanbanOnMoveParam;
export declare function optimisticDifferentLaneInsertOverEmpty<TRecord>(args: {
    sourceItem: TRecord;
    fromLaneId: string;
    toLaneId: string;
    sourceId: string;
    setItems: React.Dispatch<React.SetStateAction<TRecord[]>>;
}): KanbanOnMoveParam;
export declare function optimisticDifferentLaneLeave<TRecord>(args: {
    resourceIndexOnLane: number;
    setItems: React.Dispatch<React.SetStateAction<TRecord[]>>;
}): void;
