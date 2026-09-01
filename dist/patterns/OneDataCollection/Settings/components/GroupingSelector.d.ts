import { GroupingDefinition, GroupingState, RecordType } from '../../../../hooks/datasource';
type GroupingSelectorProps<R extends RecordType, Grouping extends GroupingDefinition<R>> = {
    grouping?: Grouping;
    currentGrouping?: GroupingState<R, Grouping>;
    onGroupingChange?: (groupingState: GroupingState<R, Grouping>) => void;
    hideLabel?: boolean;
};
export declare const GroupingSelector: <R extends RecordType, Grouping extends GroupingDefinition<R>>({ grouping, currentGrouping, onGroupingChange, hideLabel, }: GroupingSelectorProps<R, Grouping>) => import("react").JSX.Element | null;
export {};
